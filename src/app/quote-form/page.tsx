"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/layout/Footer";
import QuoteWizard from "./components/QuoteWizard";
import ResultsPage from "./components/ResultsPage";
import type { LeadResult } from "./types";

export default function QuoteFormPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [leadResult, setLeadResult] = useState<LeadResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Track form start for analytics
  useEffect(() => {
    // Future: dispatch form_start event to analytics
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("form_event", { detail: { type: "form_start" } })
      );
    }
  }, []);

  const handleFormSubmit = async (result: LeadResult) => {
    setLeadResult(result);
    setIsSubmitted(true);

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Future: dispatch form_submit event to analytics
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("form_event", {
          detail: { type: "form_submit", leadId: result.id },
        })
      );
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#062d16] via-[#0a3d1e] to-[#062d16]">
      <Navbar />

      {/* Hero Section with form */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#C2F32C]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C2F32C]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-10 md:mb-14">
                <div className="inline-flex items-center gap-2 bg-[#C2F32C]/10 border border-[#C2F32C]/30 rounded-full px-4 py-2 mb-6">
                  <span className="w-2 h-2 bg-[#C2F32C] rounded-full animate-pulse" />
                  <span className="text-[#C2F32C] text-sm font-medium">
                    Victorian Solar Rebate Available
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  Check Your Solar Rebate
                  <br />
                  <span className="text-[#C2F32C]">Eligibility in 60 Seconds</span>
                </h1>

                <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
                  Find out if you qualify for the $1,400 Victorian Solar Rebate
                  and get a personalized quote for your home.
                </p>
              </div>

              {/* Quote Wizard */}
              <QuoteWizard
                onSubmit={handleFormSubmit}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mt-10 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#C2F32C]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>100% Free Quote</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#C2F32C]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>No Obligation</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#C2F32C]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Your Data is Secure</span>
                </div>
              </div>
            </>
          ) : (
            leadResult && <ResultsPage result={leadResult} />
          )}
        </div>
      </section>

      {/* Disclaimer Section */}
      {!isSubmitted && (
        <section className="pb-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <div className="text-center text-gray-500 text-xs space-y-2">
              <p>
                * Savings estimates are indicative only and depend on your
                specific circumstances.
              </p>
              <p>
                * Rebate eligibility subject to Solar Victoria approval and
                available allocations.
              </p>
              <p>
                * A Pure Planet consultant will verify your eligibility during
                the quote process.
              </p>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
