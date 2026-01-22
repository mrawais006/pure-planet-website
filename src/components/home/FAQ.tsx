"use client";
import React, { useState } from "react";
import Link from "next/link";
import { faqs } from "@/data/faqs";

const FAQ = () => {
    // First item open by default to match screenshot
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-12">
                    Frequently Asked Questions
                </h2>

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
                                            // Open: Right Chevron (>)
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        ) : (
                                            // Closed: Down Chevron (v)
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        )}
                                    </svg>
                                </div>
                            </button>

                            {/* Answer Section */}
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

                <div className="mt-12 text-center">
                    <Link href="/faqs">
                        <button className="bg-[#C2F32C] text-black font-bold py-3 px-8 rounded-lg hover:bg-black hover:text-white transition-all duration-300 shadow-md transform hover:scale-105">
                            View All FAQs
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
