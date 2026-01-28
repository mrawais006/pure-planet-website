"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { QuoteFormData } from "../../types";

interface Step4Props {
  formData: QuoteFormData;
  updateFormData: (updates: Partial<QuoteFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

interface ServiceOption {
  key: keyof Pick<QuoteFormData, "interestedSolar" | "interestedBattery" | "interestedHeatpump">;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceOption[] = [
  {
    key: "interestedSolar",
    title: "Solar Panels",
    description: "Generate clean energy from your roof and reduce your bills",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    key: "interestedBattery",
    title: "Battery Storage",
    description: "Store excess solar energy for use at night or during outages",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 7h2l2 3h10l2-3h2v10H3V7zm4 0V5a2 2 0 012-2h6a2 2 0 012 2v2"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 11v4m6-4v4" />
      </svg>
    ),
  },
  {
    key: "interestedHeatpump",
    title: "Heat Pump Hot Water",
    description: "Energy-efficient hot water using heat pump technology",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
        />
      </svg>
    ),
  },
];

export default function Step4Services({
  formData,
  updateFormData,
  onNext,
  onBack,
}: Step4Props) {
  const [error, setError] = useState<string>("");

  const handleToggleService = (key: ServiceOption["key"]) => {
    updateFormData({ [key]: !formData[key] });
    setError("");
  };

  const hasAnyServiceSelected =
    formData.interestedSolar ||
    formData.interestedBattery ||
    formData.interestedHeatpump;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!hasAnyServiceSelected) {
      setError("Please select at least one service");
      return;
    }

    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Step Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-[#C2F32C]/10 rounded-2xl mb-4">
          <svg
            className="w-7 h-7 text-[#C2F32C]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          What are you interested in?
        </h2>
        <p className="text-gray-400">
          Select all the services you&apos;d like to learn more about
        </p>
      </div>

      {/* Service Options */}
      <div className="space-y-4">
        {services.map((service) => {
          const isSelected = formData[service.key];

          return (
            <motion.button
              key={service.key}
              type="button"
              onClick={() => handleToggleService(service.key)}
              className={`
                w-full p-5 rounded-2xl border-2 text-left transition-all duration-200
                ${
                  isSelected
                    ? "bg-[#C2F32C]/10 border-[#C2F32C]"
                    : "bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10"
                }
              `}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`
                  p-3 rounded-xl transition-colors
                  ${isSelected ? "bg-[#C2F32C]/20 text-[#C2F32C]" : "bg-white/10 text-gray-400"}
                `}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className={`font-bold text-lg ${
                      isSelected ? "text-white" : "text-gray-200"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {service.description}
                  </p>
                </div>

                {/* Checkbox */}
                <div
                  className={`
                  w-7 h-7 rounded-lg border-2 flex items-center justify-center transition-all flex-shrink-0
                  ${
                    isSelected
                      ? "border-[#C2F32C] bg-[#C2F32C]"
                      : "border-white/30"
                  }
                `}
                >
                  {isSelected && (
                    <motion.svg
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-5 h-5 text-[#062d16]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                  )}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Error Message */}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-sm flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </motion.p>
      )}

      {/* Selection Summary */}
      {hasAnyServiceSelected && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-[#C2F32C]/5 rounded-xl border border-[#C2F32C]/20"
        >
          <div className="flex items-center gap-2 text-[#C2F32C] text-sm">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              {[
                formData.interestedSolar && "Solar Panels",
                formData.interestedBattery && "Battery Storage",
                formData.interestedHeatpump && "Heat Pump",
              ]
                .filter(Boolean)
                .join(" + ")}
            </span>
          </div>
        </motion.div>
      )}

      {/* Navigation Buttons */}
      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 py-4 px-6 rounded-xl font-bold text-lg bg-white/10 text-white
            hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>
        <button
          type="submit"
          disabled={!hasAnyServiceSelected}
          className={`
            flex-[2] py-4 px-6 rounded-xl font-bold text-lg
            transition-all duration-300 flex items-center justify-center gap-2
            ${
              hasAnyServiceSelected
                ? "bg-[#C2F32C] text-[#062d16] hover:bg-[#d4ff4d] hover:scale-[1.02] active:scale-[0.98]"
                : "bg-white/10 text-white/50 cursor-not-allowed"
            }
          `}
        >
          Continue
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
