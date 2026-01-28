"use client";

import { motion } from "framer-motion";
import type { FormStep } from "../types";

interface ProgressBarProps {
  currentStep: FormStep;
  totalSteps: number;
}

const STEP_LABELS = [
  "Location",
  "Income",
  "Usage",
  "Services",
  "Contact",
];

export default function ProgressBar({
  currentStep,
  totalSteps,
}: ProgressBarProps) {
  const progressPercent = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="mb-8">
      {/* Step indicators */}
      <div className="flex justify-between items-center relative mb-2">
        {/* Progress bar background */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 rounded-full">
          <motion.div
            className="h-full bg-[#C2F32C] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>

        {/* Step circles */}
        {Array.from({ length: totalSteps }, (_, i) => {
          const stepNum = (i + 1) as FormStep;
          const isCompleted = stepNum < currentStep;
          const isCurrent = stepNum === currentStep;

          return (
            <div key={stepNum} className="relative z-10 flex flex-col items-center">
              <motion.div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold
                  transition-all duration-300 border-2
                  ${
                    isCompleted
                      ? "bg-[#C2F32C] border-[#C2F32C] text-[#062d16]"
                      : isCurrent
                      ? "bg-[#062d16] border-[#C2F32C] text-[#C2F32C]"
                      : "bg-[#062d16] border-white/20 text-white/40"
                  }
                `}
                initial={{ scale: 0.8 }}
                animate={{
                  scale: isCurrent ? 1.1 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                {isCompleted ? (
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 500 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </motion.svg>
                ) : (
                  stepNum
                )}
              </motion.div>

              {/* Step label - visible on desktop */}
              <span
                className={`
                  hidden sm:block absolute -bottom-6 text-xs font-medium whitespace-nowrap
                  transition-colors duration-300
                  ${
                    isCompleted || isCurrent
                      ? "text-[#C2F32C]"
                      : "text-white/40"
                  }
                `}
              >
                {STEP_LABELS[i]}
              </span>
            </div>
          );
        })}
      </div>

      {/* Mobile step label */}
      <div className="sm:hidden mt-4 text-center">
        <span className="text-[#C2F32C] text-sm font-medium">
          Step {currentStep}: {STEP_LABELS[currentStep - 1]}
        </span>
      </div>
    </div>
  );
}
