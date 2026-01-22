"use client";
import React, { useState } from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/layout/Footer";
import { faqs } from "@/data/faqs";

export default function FAQsPage() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <main className="bg-white min-h-screen flex flex-col">
            <Navbar />

            <section className="flex-grow pt-48 pb-32 px-6 md:px-12 max-w-[1000px] mx-auto w-full">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-black">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-600 mb-16 max-w-2xl">
                    Find answers to common questions about our solar installations, services, and policies.
                </p>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-6 bg-white text-left group"
                            >
                                <span className="text-lg font-bold text-black group-hover:text-gray-800 transition-colors">
                                    {faq.question}
                                </span>
                                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center shrink-0 bg-transparent group-hover:bg-gray-50 transition-colors">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5 text-black"
                                    >
                                        {activeIndex === index ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        )}
                                    </svg>
                                </div>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed text-base font-medium">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
