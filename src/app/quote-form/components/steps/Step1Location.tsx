"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { validatePostcode } from "@/lib/validation";
import type { QuoteFormData } from "../../types";

interface Step1Props {
  formData: QuoteFormData;
  updateFormData: (updates: Partial<QuoteFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step1Location({
  formData,
  updateFormData,
  onNext,
}: Step1Props) {
  const [error, setError] = useState<string>("");
  const [showNonVicMessage, setShowNonVicMessage] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (formData.postcode.length === 4) {
      const validation = validatePostcode(formData.postcode);
      if (validation.valid) {
        setIsValid(true);
        setError("");
        updateFormData({ isVictorian: validation.isVictorian });
        setShowNonVicMessage(!validation.isVictorian);
      } else {
        setIsValid(false);
        setError(validation.error || "");
      }
    } else {
      setIsValid(false);
      setShowNonVicMessage(false);
    }
  }, [formData.postcode, updateFormData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validatePostcode(formData.postcode);

    if (!validation.valid) {
      setError(validation.error || "Please enter a valid postcode");
      return;
    }

    onNext();
  };

  const handlePostcodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 4);
    updateFormData({ postcode: value });
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
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          Where are you located?
        </h2>
        <p className="text-gray-400">
          Enter your postcode to check eligibility for Victorian rebates
        </p>
      </div>

      {/* Postcode Input */}
      <div className="space-y-2">
        <label
          htmlFor="postcode"
          className="block text-sm font-medium text-gray-300"
        >
          Postcode
        </label>
        <div className="relative">
          <input
            type="text"
            id="postcode"
            value={formData.postcode}
            onChange={handlePostcodeChange}
            placeholder="e.g., 3000"
            maxLength={4}
            className={`
              w-full px-5 py-4 bg-white/5 border rounded-xl text-white text-lg
              placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-200
              ${
                error
                  ? "border-red-500/50 focus:ring-red-500/30"
                  : isValid
                  ? "border-[#C2F32C]/50 focus:ring-[#C2F32C]/30"
                  : "border-white/10 focus:ring-[#C2F32C]/30 focus:border-[#C2F32C]/50"
              }
            `}
            autoComplete="postal-code"
            inputMode="numeric"
          />
          {isValid && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              <svg
                className="w-6 h-6 text-[#C2F32C]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>
          )}
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

        {/* Non-Victorian Message */}
        {showNonVicMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl"
          >
            <div className="flex gap-3">
              <svg
                className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5"
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
                <p className="text-yellow-500 font-medium text-sm">
                  Outside Victoria
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  We currently only service Victorian postcodes. You can still
                  complete the form and we&apos;ll notify you when we expand to your
                  area.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Victorian Success Message */}
        {isValid && !showNonVicMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-[#C2F32C]/10 border border-[#C2F32C]/30 rounded-xl"
          >
            <div className="flex gap-3">
              <svg
                className="w-5 h-5 text-[#C2F32C] flex-shrink-0 mt-0.5"
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
                <p className="text-[#C2F32C] font-medium text-sm">
                  Great news!
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  Your location is eligible for Victorian solar rebates.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={!formData.postcode}
          className={`
            w-full py-4 px-6 rounded-xl font-bold text-lg
            transition-all duration-300 flex items-center justify-center gap-2
            ${
              formData.postcode
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
