"use client";

import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';





const faqData = [
    {
        question: "How Does The Partner Program Work?",
        answer: "Our program is designed to build long-term relationships with accredited installers. Once you apply and are approved, we provide you with steady job opportunities, equipment access, and full technical support. We handle the lead generation and administrative work so you can focus on quality installations."
    },
    {
        question: "What Services Can Partners Provide?",
        answer: "Our partners primarily focus on residential and commercial solar installations, home battery storage systems (both on-grid and off-grid), and high-efficiency heat pump installations. Depending on your certifications, you can specialize in one or across all these categories."
    },
    {
        question: "Do I Need Certifications Or Licenses?",
        answer: "Yes, we maintain high standards. All solar partners must be CEC-accredited (Clean Energy Council) and hold a valid Registered Electrical Contractor (REC) license in Victoria. For battery and heat pump installations, relevant specialized training and certifications are required to ensure compliance and safety."
    },
    {
        question: "Is This A Long-Term Partnership?",
        answer: "Absolutely. We aren't looking for one-off sub-contractors; we are looking for reliable partners to grow with us. We offer priority access to future projects and expanded work scopes to partners who consistently deliver high-quality workmanship and customer service."
    },
    {
        question: "Which Areas Do You Operate In?",
        answer: "We currently operate across both Metropolitan Melbourne and Regional Victoria. We match jobs to your preferred service areas to minimize travel time and maximize your efficiency."
    }
];

const PartnerContactSection = () => {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const [formData, setFormData] = useState({
        serviceType: 'Off grid',
        yearsOfExperience: '1-3 Years',
        abnNumber: '',
        email: '',
        phone: '',
        agreedToTerms: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        // Validate terms
        if (!formData.agreedToTerms) {
            setError('Please agree to the terms and conditions');
            return;
        }

        // Validate email and phone
        if (!formData.email || !formData.phone) {
            setError('Please fill in both email and phone number');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/partner', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to submit form');
            }

            // Redirect to thank you page on success
            router.push('/contact/thank-you');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
            setIsSubmitting(false);
        }
    };

    return (
        <section className="flex flex-col lg:flex-row min-h-screen">
            {/* Left: Lime Green Form */}
            <div className="lg:w-1/2 bg-[#C2F32C] p-8 md:p-16 lg:p-24 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-secondary leading-tight">
                    Contact Us For<br />Partnership Enquiries
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm">
                            {error}
                        </div>
                    )}

                    <div>
                        <label className="block text-xs font-bold mb-2">Service Type</label>
                        <div className="relative">
                            <select
                                value={formData.serviceType}
                                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                                className="appearance-none w-full bg-white rounded-full py-3 px-6 text-sm font-bold text-gray-700 focus:outline-none cursor-pointer"
                                disabled={isSubmitting}
                            >
                                <option>Off grid</option>
                                <option>On grid</option>
                                <option>Solar & Battery</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold mb-2">Years of Experience</label>
                            <div className="relative">
                                <select
                                    value={formData.yearsOfExperience}
                                    onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
                                    className="appearance-none w-full bg-white rounded-full py-3 px-6 text-sm font-bold text-gray-700 focus:outline-none cursor-pointer"
                                    disabled={isSubmitting}
                                >
                                    <option>1-3 Years</option>
                                    <option>3-5 Years</option>
                                    <option>5+ Years</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold mb-2 text-transparent">.</label>
                            <input
                                type="text"
                                placeholder="Abn number"
                                value={formData.abnNumber}
                                onChange={(e) => setFormData({ ...formData, abnNumber: e.target.value })}
                                className="w-full bg-white rounded-full py-3 px-6 text-sm focus:outline-none font-bold placeholder:text-gray-400"
                                disabled={isSubmitting}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-white rounded-full py-3 px-6 text-sm focus:outline-none font-bold placeholder:text-gray-400"
                            required
                            disabled={isSubmitting}
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-white rounded-full py-3 px-6 text-sm focus:outline-none font-bold placeholder:text-gray-400"
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold text-secondary">
                        <input
                            type="checkbox"
                            id="terms_partner_section"
                            checked={formData.agreedToTerms}
                            onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                            className="rounded-sm w-4 h-4 cursor-pointer"
                            disabled={isSubmitting}
                        />
                        <label htmlFor="terms_partner_section" className="cursor-pointer">I agree to the Terms & Conditions</label>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 text-sm w-fit uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                        {!isSubmitting && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        )}
                    </button>
                </form>
            </div>

            {/* Right: FAQ */}
            <div className="lg:w-1/2 bg-white p-8 md:p-16 lg:p-24 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">Common Questions</h2>

                <div className="space-y-6">
                    {faqData.map((item, i) => (
                        <div key={i} className="border-b border-gray-200 pb-6 group">
                            <button
                                onClick={() => toggleAccordion(i)}
                                className="w-full flex justify-between items-center text-left focus:outline-none"
                            >
                                <h3 className={`font-bold text-lg md:text-xl transition-colors duration-300 ${activeIndex === i ? 'text-black' : 'text-gray-900 group-hover:text-black'}`}>
                                    {item.question}
                                </h3>
                                <div className={`w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-300 ${activeIndex === i ? 'bg-black text-white border-black rotate-180' : 'text-gray-400 group-hover:bg-black group-hover:text-white group-hover:border-black'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </button>
                            <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${activeIndex === i ? 'max-h-[500px] mt-6 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnerContactSection;
