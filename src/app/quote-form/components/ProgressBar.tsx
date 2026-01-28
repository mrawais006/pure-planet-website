"use client";

import { motion } from "framer-motion";
import type { FormStep } from "../types";

interface ProgressBarProps {
  currentStep: FormStep;
  totalSteps: number;
}

export default function ProgressBar({
  currentStep,
  totalSteps,
}: ProgressBarProps) {
  const progressPercent = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-8">
      {/* Simple progress bar */}
      <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#C2F32C] via-[#a8d426] to-[#C2F32C] rounded-full shadow-lg"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
