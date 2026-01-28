"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import type { QuoteFormData } from "../../types";
import { formatCurrency, calculateDailyKwh, calculateAnnualSavings } from "@/lib/calculations";

interface Step3Props {
  formData: QuoteFormData;
  updateFormData: (updates: Partial<QuoteFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step3Usage({
  formData,
  updateFormData,
  onNext,
  onBack,
}: Step3Props) {
  const [error, setError] = useState<string>("");

  // Calculate live estimates
  const estimates = useMemo(() => {
    const dailyKwh = calculateDailyKwh(formData.quarterlyBill);
    const annualSavings = calculateAnnualSavings(formData.quarterlyBill);
    const annualBill = formData.quarterlyBill * 4;

    return {
      dailyKwh,
      annualSavings,
      annualBill,
    };
  }, [formData.quarterlyBill]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    updateFormData({ quarterlyBill: value });
  };

  const handleUsageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    updateFormData({ daytimeUsagePercent: value });
  };

  // Get usage description based on percentage
  const getUsageDescription = (percent: number) => {
    if (percent < 30) return "Mostly evening/night usage";
    if (percent < 50) return "Balanced usage pattern";
    if (percent < 70) return "Good daytime usage";
    return "High daytime usage - Ideal for solar!";
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          Your Energy Profile
        </h2>
        <p className="text-gray-400">
          Help us understand your electricity usage to provide an accurate quote
        </p>
      </div>

      {/* Quarterly Bill Slider */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium text-gray-300">
            Average Quarterly Electricity Bill
          </label>
          <span className="text-2xl font-bold text-[#C2F32C]">
            {formatCurrency(formData.quarterlyBill)}
          </span>
        </div>

        <div className="relative">
          <input
            type="range"
            min="100"
            max="2000"
            step="50"
            value={formData.quarterlyBill}
            onChange={handleBillChange}
            className="w-full h-3 bg-white/10 rounded-full appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:w-6
              [&::-webkit-slider-thumb]:h-6
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-[#C2F32C]
              [&::-webkit-slider-thumb]:cursor-pointer
              [&::-webkit-slider-thumb]:shadow-lg
              [&::-webkit-slider-thumb]:shadow-[#C2F32C]/30
              [&::-webkit-slider-thumb]:transition-transform
              [&::-webkit-slider-thumb]:hover:scale-110
              [&::-moz-range-thumb]:w-6
              [&::-moz-range-thumb]:h-6
              [&::-moz-range-thumb]:rounded-full
              [&::-moz-range-thumb]:bg-[#C2F32C]
              [&::-moz-range-thumb]:border-0
              [&::-moz-range-thumb]:cursor-pointer"
            style={{
              background: `linear-gradient(to right, #C2F32C 0%, #C2F32C ${
                ((formData.quarterlyBill - 100) / 1900) * 100
              }%, rgba(255,255,255,0.1) ${
                ((formData.quarterlyBill - 100) / 1900) * 100
              }%, rgba(255,255,255,0.1) 100%)`,
            }}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>$100</span>
            <span>$2,000</span>
          </div>
        </div>

        {/* Live Estimate Display */}
        <motion.div
          key={formData.quarterlyBill}
          initial={{ opacity: 0.5, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="grid grid-cols-2 gap-3 mt-4"
        >
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">
              Est. Daily Usage
            </p>
            <p className="text-white font-bold text-lg">
              {estimates.dailyKwh.toFixed(1)} kWh
            </p>
          </div>
          <div className="bg-[#C2F32C]/10 rounded-xl p-4 text-center border border-[#C2F32C]/20">
            <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">
              Potential Savings
            </p>
            <p className="text-[#C2F32C] font-bold text-lg">
              {formatCurrency(estimates.annualSavings)}/yr
            </p>
          </div>
        </motion.div>
      </div>

      {/* Daytime Usage Slider */}
      <div className="space-y-4 pt-4">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium text-gray-300">
            Daytime Electricity Usage (8am - 6pm)
          </label>
          <span className="text-2xl font-bold text-[#C2F32C]">
            {formData.daytimeUsagePercent}%
          </span>
        </div>

        <div className="relative">
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={formData.daytimeUsagePercent}
            onChange={handleUsageChange}
            className="w-full h-3 bg-white/10 rounded-full appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:w-6
              [&::-webkit-slider-thumb]:h-6
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-[#C2F32C]
              [&::-webkit-slider-thumb]:cursor-pointer
              [&::-webkit-slider-thumb]:shadow-lg
              [&::-webkit-slider-thumb]:shadow-[#C2F32C]/30
              [&::-webkit-slider-thumb]:transition-transform
              [&::-webkit-slider-thumb]:hover:scale-110
              [&::-moz-range-thumb]:w-6
              [&::-moz-range-thumb]:h-6
              [&::-moz-range-thumb]:rounded-full
              [&::-moz-range-thumb]:bg-[#C2F32C]
              [&::-moz-range-thumb]:border-0
              [&::-moz-range-thumb]:cursor-pointer"
            style={{
              background: `linear-gradient(to right, #C2F32C 0%, #C2F32C ${formData.daytimeUsagePercent}%, rgba(255,255,255,0.1) ${formData.daytimeUsagePercent}%, rgba(255,255,255,0.1) 100%)`,
            }}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>0%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Usage Description */}
        <motion.p
          key={formData.daytimeUsagePercent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-sm ${
            formData.daytimeUsagePercent >= 50
              ? "text-[#C2F32C]"
              : "text-gray-400"
          }`}
        >
          {getUsageDescription(formData.daytimeUsagePercent)}
        </motion.p>

        {/* Helper Text */}
        <p className="text-xs text-gray-500 flex items-start gap-2">
          <svg
            className="w-4 h-4 flex-shrink-0 mt-0.5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          Move slider right if you work from home or have high daytime usage.
          Higher daytime usage = more direct solar savings!
        </p>
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
          className="flex-[2] py-4 px-6 rounded-xl font-bold text-lg bg-[#C2F32C] text-[#062d16]
            hover:bg-[#d4ff4d] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300
            flex items-center justify-center gap-2"
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
