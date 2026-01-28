"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BATTERY_SPECS } from "../types";

interface BatteryComparisonProps {
  recommendedBattery: "FoxESS" | "NeoVolt";
}

const comparisonFeatures = [
  { key: "bestFor", label: "Best For" },
  { key: "capacity", label: "Capacity" },
  { key: "depthOfDischarge", label: "Depth of Discharge" },
  { key: "cycleLife", label: "Cycle Life" },
  { key: "warranty", label: "Warranty" },
  { key: "installation", label: "Installation" },
] as const;

export default function BatteryComparison({
  recommendedBattery,
}: BatteryComparisonProps) {
  const foxESS = BATTERY_SPECS.FoxESS;
  const neoVolt = BATTERY_SPECS.NeoVolt;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md">
      {/* Header */}
      <div className="bg-[#062d16] px-6 py-5 border-b border-[#C2F32C]/30">
        <h2 className="text-xl font-bold text-white text-center">
          Battery Recommendation
        </h2>
        <p className="text-gray-300 text-sm text-center mt-1">
          Based on your energy usage, we recommend the{" "}
          <span className="text-[#C2F32C] font-semibold">
            {recommendedBattery === "FoxESS" ? foxESS.name : neoVolt.name}
          </span>
        </p>
      </div>

      {/* Battery Cards - Mobile View */}
      <div className="md:hidden p-4 space-y-4">
        {(["FoxESS", "NeoVolt"] as const).map((battery) => {
          const spec = BATTERY_SPECS[battery];
          const isRecommended = battery === recommendedBattery;

          return (
            <motion.div
              key={battery}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`
                p-5 rounded-xl border-2 transition-all relative
                ${
                  isRecommended
                    ? "bg-[#C2F32C]/10 border-[#C2F32C]"
                    : "bg-gray-50 border-gray-200"
                }
              `}
            >
              {isRecommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C2F32C] text-[#062d16] text-xs font-bold px-3 py-1 rounded-full">
                  Recommended For You
                </div>
              )}

              <div className="flex items-center gap-4 mb-4 mt-2">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                  <svg
                    className={`w-8 h-8 ${isRecommended ? "text-[#062d16]" : "text-gray-500"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 7h2l2 3h10l2-3h2v10H3V7zm4 0V5a2 2 0 012-2h6a2 2 0 012 2v2"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#062d16] font-bold text-lg">{spec.name}</h3>
                  <p className="text-gray-700 text-sm">{spec.bestFor}</p>
                </div>
              </div>

              <div className="space-y-3">
                {comparisonFeatures.slice(1).map(({ key, label }) => (
                  <div key={key} className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600 text-sm">{label}</span>
                    <span className="text-[#062d16] font-medium text-sm">
                      {spec[key as keyof typeof spec]}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Comparison Table - Desktop View */}
      <div className="hidden md:block">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="py-4 px-6 text-left text-gray-700 font-semibold w-1/4">
                Feature
              </th>
              <th
                className={`py-4 px-6 text-center w-[37.5%] ${
                  recommendedBattery === "FoxESS"
                    ? "bg-[#C2F32C]/10"
                    : ""
                }`}
              >
                <div className="flex flex-col items-center">
                  {recommendedBattery === "FoxESS" && (
                    <span className="inline-block bg-[#C2F32C] text-[#062d16] text-xs font-bold px-3 py-1 rounded-full mb-2">
                      Recommended
                    </span>
                  )}
                  <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center mb-2">
                    <svg
                      className={`w-10 h-10 ${recommendedBattery === "FoxESS" ? "text-[#062d16]" : "text-gray-500"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 7h2l2 3h10l2-3h2v10H3V7zm4 0V5a2 2 0 012-2h6a2 2 0 012 2v2"
                      />
                    </svg>
                  </div>
                  <span className="text-[#062d16] font-bold">{foxESS.name}</span>
                </div>
              </th>
              <th
                className={`py-4 px-6 text-center w-[37.5%] ${
                  recommendedBattery === "NeoVolt"
                    ? "bg-[#C2F32C]/10"
                    : ""
                }`}
              >
                <div className="flex flex-col items-center">
                  {recommendedBattery === "NeoVolt" && (
                    <span className="inline-block bg-[#C2F32C] text-[#062d16] text-xs font-bold px-3 py-1 rounded-full mb-2">
                      Recommended
                    </span>
                  )}
                  <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center mb-2">
                    <svg
                      className={`w-10 h-10 ${recommendedBattery === "NeoVolt" ? "text-[#062d16]" : "text-gray-500"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 7h2l2 3h10l2-3h2v10H3V7zm4 0V5a2 2 0 012-2h6a2 2 0 012 2v2"
                      />
                    </svg>
                  </div>
                  <span className="text-[#062d16] font-bold">{neoVolt.name}</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonFeatures.map(({ key, label }, index) => (
              <tr
                key={key}
                className={`border-b border-gray-200 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="py-4 px-6 text-gray-700 font-semibold">{label}</td>
                <td
                  className={`py-4 px-6 text-center text-[#062d16] font-medium ${
                    recommendedBattery === "FoxESS" ? "bg-[#C2F32C]/10" : ""
                  }`}
                >
                  {foxESS[key as keyof typeof foxESS]}
                </td>
                <td
                  className={`py-4 px-6 text-center text-[#062d16] font-medium ${
                    recommendedBattery === "NeoVolt" ? "bg-[#C2F32C]/10" : ""
                  }`}
                >
                  {neoVolt[key as keyof typeof neoVolt]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recommendation Summary */}
      <div className="p-6 bg-[#062d16] border-t border-[#C2F32C]/30">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-[#C2F32C]/30 rounded-xl flex items-center justify-center">
            <svg
              className="w-6 h-6 text-[#C2F32C]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
            </svg>
          </div>
          <div>
            <h4 className="text-white font-bold mb-1">Why {recommendedBattery}?</h4>
            <p className="text-gray-300 text-sm">
              {recommendedBattery === "FoxESS"
                ? "Based on your moderate energy usage, the Fox ESS offers excellent value with flexible scalability. It's perfect for getting started with battery storage and can be expanded as your needs grow."
                : "With your higher energy consumption, the NeoVolt provides superior capacity and longevity. Its 96% depth of discharge and 8,000 cycle life make it ideal for maximizing your solar investment."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
