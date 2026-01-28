"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BatteryComparison from "./BatteryComparison";
import type { LeadResult } from "../types";
import { formatCurrency } from "@/lib/calculations";

interface ResultsPageProps {
  result: LeadResult;
}

export default function ResultsPage({ result }: ResultsPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      {/* Success Header */}
      <div className="text-center mb-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex items-center justify-center w-20 h-20 bg-[#C2F32C] rounded-full mb-6"
        >
          <svg
            className="w-10 h-10 text-[#062d16]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </motion.div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#062d16] mb-4">
          Thank You, {result.fullName.split(" ")[0]}!
        </h1>
        <p className="text-gray-700 text-lg max-w-xl mx-auto">
          Your quote request has been submitted successfully. A Pure Planet
          specialist will contact you within 24 hours.
        </p>

        {/* Reference Number */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-full px-6 py-3 mt-6"
        >
          <span className="text-gray-700 font-medium">Reference:</span>
          <span className="text-[#062d16] font-bold text-lg">
            {result.referenceNumber}
          </span>
        </motion.div>
      </div>

      {/* Eligibility Summary Cards */}
      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {/* Rebate Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`
            p-6 rounded-2xl border-2 text-center
            ${
              result.rebateEligible
                ? "bg-[#C2F32C]/10 border-[#C2F32C]/30"
                : "bg-yellow-500/10 border-yellow-500/30"
            }
          `}
        >
          <div
            className={`
            inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4
            ${result.rebateEligible ? "bg-[#C2F32C]/20" : "bg-yellow-500/20"}
          `}
          >
            {result.rebateEligible ? (
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
            ) : (
              <svg
                className="w-6 h-6 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          <h3
            className={`font-bold text-lg mb-1 ${
              result.rebateEligible ? "text-[#062d16]" : "text-yellow-700"
            }`}
          >
            {result.rebateEligible ? "Rebate Eligible" : "Standard Pricing"}
          </h3>
          <p className="text-gray-700 text-sm">
            {result.rebateEligible
              ? "You qualify for the $1,400 Victorian Solar Rebate"
              : "Federal incentives still apply to your installation"}
          </p>
        </motion.div>

        {/* Estimated Savings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-green-50 p-6 rounded-2xl border border-green-200 text-center"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
            <svg
              className="w-6 h-6 text-green-600"
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
          <h3 className="font-bold text-3xl text-[#062d16] mb-1">
            {formatCurrency(result.estimatedAnnualSavings)}
          </h3>
          <p className="text-gray-700 text-sm">Estimated Annual Savings</p>
        </motion.div>

        {/* Daily Usage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-blue-50 p-6 rounded-2xl border border-blue-200 text-center"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
            <svg
              className="w-6 h-6 text-blue-600"
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
          <h3 className="font-bold text-3xl text-[#062d16] mb-1">
            {result.estimatedDailyKwh.toFixed(1)} kWh
          </h3>
          <p className="text-gray-700 text-sm">Estimated Daily Usage</p>
        </motion.div>
      </div>

      {/* Battery Comparison Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <BatteryComparison recommendedBattery={result.recommendedBattery} />
      </motion.div>

      {/* Services Interested */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gray-50 rounded-2xl border border-gray-200 p-6 mt-8"
      >
        <h3 className="text-lg font-bold text-[#062d16] mb-4">
          Services You&apos;re Interested In
        </h3>
        <div className="flex flex-wrap gap-3">
          {result.interestedSolar && (
            <div className="flex items-center gap-2 bg-[#C2F32C]/20 border border-[#C2F32C] rounded-full px-4 py-2">
              <svg
                className="w-5 h-5 text-[#062d16]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span className="text-[#062d16] font-semibold">Solar Panels</span>
            </div>
          )}
          {result.interestedBattery && (
            <div className="flex items-center gap-2 bg-[#C2F32C]/20 border border-[#C2F32C] rounded-full px-4 py-2">
              <svg
                className="w-5 h-5 text-[#062d16]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7h2l2 3h10l2-3h2v10H3V7zm4 0V5a2 2 0 012-2h6a2 2 0 012 2v2"
                />
              </svg>
              <span className="text-[#062d16] font-semibold">Battery Storage</span>
            </div>
          )}
          {result.interestedHeatpump && (
            <div className="flex items-center gap-2 bg-[#C2F32C]/20 border border-[#C2F32C] rounded-full px-4 py-2">
              <svg
                className="w-5 h-5 text-[#062d16]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
              </svg>
              <span className="text-[#062d16] font-semibold">Heat Pump Hot Water</span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Next Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="bg-[#062d16] border-2 border-[#C2F32C]/30 rounded-2xl p-8 mt-8"
      >
        <h3 className="text-xl font-bold text-white mb-6 text-center">
          What Happens Next?
        </h3>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#C2F32C] rounded-full flex items-center justify-center mx-auto mb-4 text-[#062d16] font-bold text-xl">
              1
            </div>
            <h4 className="text-white font-semibold mb-2">Review</h4>
            <p className="text-gray-400 text-sm">
              Our team reviews your energy profile and requirements
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#C2F32C] rounded-full flex items-center justify-center mx-auto mb-4 text-[#062d16] font-bold text-xl">
              2
            </div>
            <h4 className="text-white font-semibold mb-2">Contact</h4>
            <p className="text-gray-400 text-sm">
              A specialist calls you within 24 hours
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#C2F32C] rounded-full flex items-center justify-center mx-auto mb-4 text-[#062d16] font-bold text-xl">
              3
            </div>
            <h4 className="text-white font-semibold mb-2">Quote</h4>
            <p className="text-gray-400 text-sm">
              Receive your personalized solar solution
            </p>
          </div>
        </div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
      >
        <Link
          href="/services"
          className="inline-flex items-center justify-center gap-2 bg-[#C2F32C] text-[#062d16] font-bold py-4 px-8 rounded-xl
            hover:bg-[#d4ff4d] transition-all duration-300 hover:scale-[1.02]"
        >
          Explore Our Services
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
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-[#062d16] font-bold py-4 px-8 rounded-xl
            hover:bg-gray-50 transition-all duration-300"
        >
          Return to Home
        </Link>
      </motion.div>

      {/* Confirmation Email Notice */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="text-center text-gray-700 text-sm mt-8"
      >
        A confirmation email has been sent to <strong className="text-[#062d16]">{result.email}</strong>
      </motion.p>
    </motion.div>
  );
}
