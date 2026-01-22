"use client";

import React, { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
    title?: string;
    description?: string;
}

const FAQ: React.FC<FAQProps> = ({ items, title = "Frequently Asked Questions", description }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-black mb-6">{title}</h2>
                    {description && (
                        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>

                <div className="space-y-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${activeIndex === index ? 'shadow-lg border-primary/30 bg-primary/5' : 'hover:border-primary/50'}`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full text-left px-8 py-6 flex items-center justify-between group"
                                aria-expanded={activeIndex === index}
                            >
                                <span className={`font-bold text-lg md:text-xl transition-colors duration-300 ${activeIndex === index ? 'text-primary' : 'text-black group-hover:text-primary'}`}>
                                    {item.question}
                                </span>
                                <span className={`flex-shrink-0 ml-4 flex items-center justify-center w-8 h-8 rounded-full border border-current transition-transform duration-300 ${activeIndex === index ? 'rotate-180 bg-primary text-white border-primary' : 'text-gray-400 group-hover:text-primary group-hover:border-primary'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-8 pb-8 text-gray-600 leading-relaxed">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
