'use client';

import { useState, FormEvent } from 'react';
import SuccessMessage from './SuccessMessage';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        inquiry_type: 'quote', // Default to quote
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [successData, setSuccessData] = useState<{ name: string; referenceNumber: string } | null>(null);

    const messageLength = formData.message.length;

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
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

            // Show success message
            setSuccessData({
                name: formData.name,
                referenceNumber: data.referenceNumber
            });

        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred. Please try again or call us directly.');
            setIsSubmitting(false);
        }
    };

    if (successData) {
        return <SuccessMessage name={successData.name} referenceNumber={successData.referenceNumber} />;
    }

    return (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl h-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r">
                        <p className="text-red-700 text-sm">{error}</p>
                    </div>
                )}

                {/* Field 1: Your Name */}
                <div className="field-group">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2 text-base">
                        Your Name <span className="text-[#C2F32C]">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="Enter your full name"
                        className="w-full px-4 py-4 text-base border-2 border-gray-100 bg-gray-50 rounded-xl focus:bg-white focus:border-[#C2F32C] focus:outline-none transition-all placeholder:text-gray-400"
                        disabled={isSubmitting}
                    />
                </div>

                {/* Field 2: Best Phone Number */}
                <div className="field-group">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2 text-base">
                        Best Phone Number <span className="text-[#C2F32C]">*</span>
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        placeholder="04XX XXX XXX"
                        className="w-full px-4 py-4 text-base border-2 border-gray-100 bg-gray-50 rounded-xl focus:bg-white focus:border-[#C2F32C] focus:outline-none transition-all placeholder:text-gray-400"
                        disabled={isSubmitting}
                    />
                </div>

                {/* Field 3: Email Address (Optional) */}
                <div className="field-group">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2 text-base">
                        Email Address <span className="text-gray-400 font-normal text-sm md:text-base">(Optional)</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-4 text-base border-2 border-gray-100 bg-gray-50 rounded-xl focus:bg-white focus:border-[#C2F32C] focus:outline-none transition-all placeholder:text-gray-400"
                        disabled={isSubmitting}
                    />
                </div>

                {/* Field 4: How Can We Help? */}
                <div className="field-group">
                    <label className="block text-gray-700 font-medium mb-4 text-base">
                        How can we help?
                    </label>

                    <div className="grid gap-3">
                        {/* Option 1: Quote */}
                        <label className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all
                                          ${formData.inquiry_type === 'quote' ? 'border-[#C2F32C] bg-[#C2F32C]/10' : 'border-gray-100 hover:border-gray-200 bg-gray-50'}`}>
                            <input
                                type="radio"
                                name="inquiry_type"
                                value="quote"
                                checked={formData.inquiry_type === 'quote'}
                                onChange={(e) => setFormData({ ...formData, inquiry_type: e.target.value })}
                                className="w-5 h-5 text-[#C2F32C] mr-4 accent-[#062d16]"
                                disabled={isSubmitting}
                            />
                            <span className="text-gray-700 font-medium">I want a Solar/Battery Quote</span>
                        </label>

                        {/* Option 2: Service */}
                        <label className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all
                                          ${formData.inquiry_type === 'service' ? 'border-[#C2F32C] bg-[#C2F32C]/10' : 'border-gray-100 hover:border-gray-200 bg-gray-50'}`}>
                            <input
                                type="radio"
                                name="inquiry_type"
                                value="service"
                                checked={formData.inquiry_type === 'service'}
                                onChange={(e) => setFormData({ ...formData, inquiry_type: e.target.value })}
                                className="w-5 h-5 text-[#C2F32C] mr-4 accent-[#062d16]"
                                disabled={isSubmitting}
                            />
                            <span className="text-gray-700 font-medium">Service or Repair</span>
                        </label>

                        {/* Option 3: Other */}
                        <label className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all
                                          ${formData.inquiry_type === 'other' ? 'border-[#C2F32C] bg-[#C2F32C]/10' : 'border-gray-100 hover:border-gray-200 bg-gray-50'}`}>
                            <input
                                type="radio"
                                name="inquiry_type"
                                value="other"
                                checked={formData.inquiry_type === 'other'}
                                onChange={(e) => setFormData({ ...formData, inquiry_type: e.target.value })}
                                className="w-5 h-5 text-[#C2F32C] mr-4 accent-[#062d16]"
                                disabled={isSubmitting}
                            />
                            <span className="text-gray-700 font-medium">Other</span>
                        </label>
                    </div>

                    {/* Conditional Text Area */}
                    {formData.inquiry_type === 'other' && (
                        <div className="mt-4 animate-fade-in-up">
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-2 text-base">
                                Please describe your query
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                maxLength={500}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Tell us how we can help..."
                                className="w-full px-4 py-4 text-base border-2 border-gray-100 bg-gray-50 rounded-xl focus:bg-white focus:border-[#C2F32C] focus:outline-none transition-colors resize-none placeholder:text-gray-400"
                                disabled={isSubmitting}
                            />
                            <p className="text-xs text-gray-400 mt-1 text-right">
                                {messageLength}/500 characters
                            </p>
                        </div>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-[#C2F32C] text-[#062d16] font-bold text-lg rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-[#C2F32C]/20"
                >
                    {isSubmitting ? (
                        <span>Sending...</span>
                    ) : (
                        <>
                            <span>📞</span>
                            <span>Call Me Back</span>
                        </>
                    )}
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                    ⏱️ We typically respond within 2 hours during business hours.
                </p>
            </form>
        </div>
    );
}
