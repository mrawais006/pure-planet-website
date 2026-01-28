"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { QuoteFormData, PreferredContactTime } from "../../types";
import { CONTACT_TIME_LABELS } from "../../types";
import { validateEmail, validatePhone, validateName } from "@/lib/validation";

interface Step5Props {
  formData: QuoteFormData;
  updateFormData: (updates: Partial<QuoteFormData>) => void;
  onNext: () => void;
  onBack: () => void;
  onSubmit: () => void;
  isLoading: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
}

const contactTimes: PreferredContactTime[] = ["", "morning", "afternoon", "evening"];

export default function Step5Contact({
  formData,
  updateFormData,
  onBack,
  onSubmit,
  isLoading,
}: Step5Props) {
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (field: keyof FormErrors, value: string): string | undefined => {
    switch (field) {
      case "fullName":
        const nameValidation = validateName(value);
        return nameValidation.valid ? undefined : nameValidation.error;
      case "email":
        const emailValidation = validateEmail(value);
        return emailValidation.valid ? undefined : emailValidation.error;
      case "phone":
        const phoneValidation = validatePhone(value);
        return phoneValidation.valid ? undefined : phoneValidation.error;
      default:
        return undefined;
    }
  };

  const handleBlur = (field: keyof FormErrors) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: keyof QuoteFormData, value: string) => {
    updateFormData({ [field]: value });
    if (touched[field]) {
      const error = validateField(field as keyof FormErrors, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all required fields
    const newErrors: FormErrors = {
      fullName: validateField("fullName", formData.fullName),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
    };

    setErrors(newErrors);
    setTouched({ fullName: true, email: true, phone: true });

    // Check if there are any errors
    if (Object.values(newErrors).some((error) => error !== undefined)) {
      return;
    }

    onSubmit();
  };

  const isFormValid =
    formData.fullName &&
    formData.email &&
    formData.phone &&
    !errors.fullName &&
    !errors.email &&
    !errors.phone;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Step Header */}
      <div className="text-center mb-6">
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
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          Almost there!
        </h2>
        <p className="text-gray-400">
          Enter your details so we can prepare your personalized quote
        </p>
      </div>

      {/* Full Name */}
      <div className="space-y-2">
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-gray-300"
        >
          Full Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          value={formData.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          onBlur={() => handleBlur("fullName")}
          placeholder="John Smith"
          className={`
            w-full px-4 py-3 bg-white/5 border rounded-xl text-white
            placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-200
            ${
              errors.fullName && touched.fullName
                ? "border-red-500/50 focus:ring-red-500/30"
                : "border-white/10 focus:ring-[#C2F32C]/30 focus:border-[#C2F32C]/50"
            }
          `}
          autoComplete="name"
        />
        {errors.fullName && touched.fullName && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-sm"
          >
            {errors.fullName}
          </motion.p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300"
        >
          Email Address <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          onBlur={() => handleBlur("email")}
          placeholder="john@example.com"
          className={`
            w-full px-4 py-3 bg-white/5 border rounded-xl text-white
            placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-200
            ${
              errors.email && touched.email
                ? "border-red-500/50 focus:ring-red-500/30"
                : "border-white/10 focus:ring-[#C2F32C]/30 focus:border-[#C2F32C]/50"
            }
          `}
          autoComplete="email"
        />
        {errors.email && touched.email && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-sm"
          >
            {errors.email}
          </motion.p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-300"
        >
          Phone Number <span className="text-red-400">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          onBlur={() => handleBlur("phone")}
          placeholder="0412 345 678"
          className={`
            w-full px-4 py-3 bg-white/5 border rounded-xl text-white
            placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-200
            ${
              errors.phone && touched.phone
                ? "border-red-500/50 focus:ring-red-500/30"
                : "border-white/10 focus:ring-[#C2F32C]/30 focus:border-[#C2F32C]/50"
            }
          `}
          autoComplete="tel"
        />
        {errors.phone && touched.phone && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-sm"
          >
            {errors.phone}
          </motion.p>
        )}
      </div>

      {/* Suburb (Optional) */}
      <div className="space-y-2">
        <label
          htmlFor="suburb"
          className="block text-sm font-medium text-gray-300"
        >
          Suburb <span className="text-gray-500">(optional)</span>
        </label>
        <input
          type="text"
          id="suburb"
          value={formData.suburb}
          onChange={(e) => handleChange("suburb", e.target.value)}
          placeholder="e.g., Richmond"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white
            placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C2F32C]/30 focus:border-[#C2F32C]/50
            transition-all duration-200"
          autoComplete="address-level2"
        />
      </div>

      {/* Preferred Contact Time (Optional) */}
      <div className="space-y-2">
        <label
          htmlFor="contactTime"
          className="block text-sm font-medium text-gray-300"
        >
          Preferred Contact Time <span className="text-gray-500">(optional)</span>
        </label>
        <select
          id="contactTime"
          value={formData.preferredContactTime}
          onChange={(e) =>
            updateFormData({
              preferredContactTime: e.target.value as PreferredContactTime,
            })
          }
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white
            focus:outline-none focus:ring-2 focus:ring-[#C2F32C]/30 focus:border-[#C2F32C]/50
            transition-all duration-200 appearance-none cursor-pointer"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
            backgroundPosition: "right 0.75rem center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "1.5em 1.5em",
            paddingRight: "2.5rem",
          }}
        >
          {contactTimes.map((time) => (
            <option key={time || "none"} value={time} className="bg-[#062d16] text-white">
              {CONTACT_TIME_LABELS[time]}
            </option>
          ))}
        </select>
      </div>

      {/* Privacy Notice */}
      <p className="text-xs text-gray-500 leading-relaxed">
        By submitting this form, you agree to our{" "}
        <a href="/privacy-policy" className="text-[#C2F32C] hover:underline">
          Privacy Policy
        </a>{" "}
        and consent to Pure Planet contacting you about solar and energy
        solutions.
      </p>

      {/* Navigation Buttons */}
      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={onBack}
          disabled={isLoading}
          className="flex-1 py-4 px-6 rounded-xl font-bold text-lg bg-white/10 text-white
            hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2
            disabled:opacity-50 disabled:cursor-not-allowed"
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
          disabled={!isFormValid || isLoading}
          className={`
            flex-[2] py-4 px-6 rounded-xl font-bold text-lg
            transition-all duration-300 flex items-center justify-center gap-2
            ${
              isFormValid && !isLoading
                ? "bg-[#C2F32C] text-[#062d16] hover:bg-[#d4ff4d] hover:scale-[1.02] active:scale-[0.98]"
                : "bg-white/10 text-white/50 cursor-not-allowed"
            }
          `}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Processing...
            </>
          ) : (
            <>
              Get My Quote
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
