"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { QuoteFormData, IncomeBracket } from "../../types";
import { INCOME_BRACKET_LABELS } from "../../types";
import { isRebateEligible } from "@/lib/calculations";

interface Step2Props {
  formData: QuoteFormData;
  updateFormData: (updates: Partial<QuoteFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const incomeBrackets: IncomeBracket[] = [
  "under_100k",
  "100k_150k",
  "150k_210k",
  "over_210k",
];

export default function Step2Income({
  formData,
  updateFormData,
  onNext,
  onBack,
}: Step2Props) {
  const [error, setError] = useState<string>("");
  const [showEligibilityMessage, setShowEligibilityMessage] = useState(false);

  useEffect(() => {
    if (formData.incomeBracket) {
      const eligible = isRebateEligible(formData.incomeBracket);
      updateFormData({ rebateEligible: eligible });
      setShowEligibilityMessage(true);
    } else {
      setShowEligibilityMessage(false);
    }
  }, [formData.incomeBracket, updateFormData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.incomeBracket) {
      setError("Please select your income bracket");
      return;
    }

    onNext();
  };

  const handleSelectBracket = (bracket: IncomeBracket) => {
    updateFormData({ incomeBracket: bracket });
    setError("");
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
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          Check Your Rebate Eligibility
        </h2>
        <p className="text-gray-400">
          Your household income determines your eligibility for the Victorian
          Solar Rebate
        </p>
      </div>

      {/* Income Bracket Selection */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-300 mb-3">
          What is your combined household income?
        </label>

        <div className="space-y-3">
          {incomeBrackets.map((bracket) => {
            const isSelected = formData.incomeBracket === bracket;

            return (
              <motion.button
                key={bracket}
                type="button"
                onClick={() => handleSelectBracket(bracket)}
                className={`
                  w-full p-4 rounded-xl border-2 text-left transition-all duration-200
                  ${
                    isSelected
                      ? "bg-[#C2F32C]/10 border-[#C2F32C] text-white"
                      : "bg-white/5 border-white/10 text-gray-300 hover:border-white/30 hover:bg-white/10"
                  }
                `}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">
                    {INCOME_BRACKET_LABELS[bracket]}
                  </span>
                  <div
                    className={`
                    w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
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
                        className="w-4 h-4 text-[#062d16]"
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
            className="text-red-400 text-sm flex items-center gap-1 mt-2"
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
      </div>

      {/* Eligibility Message */}
      {showEligibilityMessage && formData.rebateEligible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-[#C2F32C]/10 border border-[#C2F32C]/30 rounded-xl"
        >
          <div className="flex gap-3">
            <svg
              className="w-6 h-6 text-[#C2F32C] flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="text-[#C2F32C] font-bold">Great news!</p>
              <p className="text-gray-300 text-sm mt-1">
                You&apos;re eligible for the <strong>$1,400 Victorian Solar Rebate</strong>{" "}
                + <strong>Federal Battery Rebate</strong>
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {showEligibilityMessage && !formData.rebateEligible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl"
        >
          <div className="flex gap-3">
            <svg
              className="w-6 h-6 text-yellow-500 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="text-yellow-500 font-bold">Limited Rebate Eligibility</p>
              <p className="text-gray-300 text-sm mt-1">
                You may not qualify for the state rebate, but you can still
                benefit from <strong>federal incentives</strong> and{" "}
                <strong>significant energy savings</strong>.
              </p>
            </div>
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
          disabled={!formData.incomeBracket}
          className={`
            flex-[2] py-4 px-6 rounded-xl font-bold text-lg
            transition-all duration-300 flex items-center justify-center gap-2
            ${
              formData.incomeBracket
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
