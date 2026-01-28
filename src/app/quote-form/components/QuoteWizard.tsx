"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProgressBar from "./ProgressBar";
import Step1Location from "./steps/Step1Location";
import Step2Income from "./steps/Step2Income";
import Step3Usage from "./steps/Step3Usage";
import Step4Services from "./steps/Step4Services";
import Step5Contact from "./steps/Step5Contact";
import type { FormStep, QuoteFormData, LeadResult } from "../types";

interface QuoteWizardProps {
  onSubmit: (result: LeadResult) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const TOTAL_STEPS = 5;

const initialFormData: QuoteFormData = {
  // Step 1
  postcode: "",
  isVictorian: true,
  // Step 2
  incomeBracket: "",
  rebateEligible: false,
  // Step 3
  quarterlyBill: 400,
  daytimeUsagePercent: 40,
  // Step 4
  interestedSolar: false,
  interestedBattery: false,
  interestedHeatpump: false,
  // Step 5
  fullName: "",
  email: "",
  phone: "",
  suburb: "",
  preferredContactTime: "",
};

// Animation variants
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function QuoteWizard({
  onSubmit,
  isLoading,
  setIsLoading,
}: QuoteWizardProps) {
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState<QuoteFormData>(initialFormData);
  const [direction, setDirection] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const updateFormData = useCallback(
    (updates: Partial<QuoteFormData>) => {
      setFormData((prev) => ({ ...prev, ...updates }));
    },
    []
  );

  const goToNextStep = useCallback(() => {
    if (currentStep < TOTAL_STEPS) {
      setDirection(1);
      setCurrentStep((prev) => (prev + 1) as FormStep);

      // Track step completion
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("form_event", {
            detail: { type: "step_complete", step: currentStep },
          })
        );
      }
    }
  }, [currentStep]);

  const goToPreviousStep = useCallback(() => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep((prev) => (prev - 1) as FormStep);
    }
  }, [currentStep]);

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postcode: formData.postcode,
          isVictorian: formData.isVictorian,
          incomeBracket: formData.incomeBracket,
          quarterlyBill: formData.quarterlyBill,
          daytimeUsagePercent: formData.daytimeUsagePercent,
          interestedSolar: formData.interestedSolar,
          interestedBattery: formData.interestedBattery,
          interestedHeatpump: formData.interestedHeatpump,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          suburb: formData.suburb,
          preferredContactTime: formData.preferredContactTime,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      // Transform API response to LeadResult
      const result: LeadResult = {
        id: data.data.id,
        referenceNumber: data.referenceNumber,
        createdAt: data.data.created_at,
        fullName: formData.fullName,
        email: formData.email,
        postcode: formData.postcode,
        quarterlyBill: formData.quarterlyBill,
        daytimeUsagePercent: formData.daytimeUsagePercent,
        rebateEligible: data.data.rebate_eligible,
        leadScore: data.data.lead_score,
        recommendedBattery: data.data.recommended_battery,
        estimatedAnnualSavings: data.data.estimated_annual_savings,
        estimatedDailyKwh: data.data.estimated_daily_kwh,
        interestedSolar: formData.interestedSolar,
        interestedBattery: formData.interestedBattery,
        interestedHeatpump: formData.interestedHeatpump,
      };

      onSubmit(result);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred. Please try again.";
      setError(errorMessage);

      // Track error
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("form_event", {
            detail: { type: "form_error", error: errorMessage },
          })
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const renderStep = () => {
    const commonProps = {
      formData,
      updateFormData,
      onNext: goToNextStep,
      onBack: goToPreviousStep,
    };

    switch (currentStep) {
      case 1:
        return <Step1Location {...commonProps} />;
      case 2:
        return <Step2Income {...commonProps} />;
      case 3:
        return <Step3Usage {...commonProps} />;
      case 4:
        return <Step4Services {...commonProps} />;
      case 5:
        return (
          <Step5Contact
            {...commonProps}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
      {/* Form Card */}
      <div className="bg-[#062d16]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl">
        {/* Progress Bar */}
        <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />

        {/* Error Message */}
        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm"
            >
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{error}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step Content with Animation */}
        <div className="relative overflow-hidden min-h-[350px] sm:min-h-[300px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="w-full"
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
