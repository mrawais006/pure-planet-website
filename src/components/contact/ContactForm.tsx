'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactForm() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        solarSystemType: 'Off grid',
        monthlyElectricUsage: '',
        solarPanelPlace: 'Huge farm',
        roofMaterial: 'Comp Shingle',
        email: '',
        phone: '',
        agreedToTerms: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

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

            // Redirect to thank you page on success
            router.push('/contact/thank-you');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                </div>
            )}

            {/* Solar System Type */}
            <div>
                <label className="block text-xs font-bold mb-2">Solar System Type?</label>
                <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                        <select
                            value={formData.solarSystemType}
                            onChange={(e) => setFormData({ ...formData, solarSystemType: e.target.value })}
                            className="appearance-none w-full bg-white rounded-full py-3 px-6 text-sm font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
                            disabled={isSubmitting}
                        >
                            <option>Off grid</option>
                            <option>On grid</option>
                            <option>Hybrid</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                    <input
                        type="number"
                        placeholder="Monthly Electric Usage (KWH)"
                        value={formData.monthlyElectricUsage}
                        onChange={(e) => setFormData({ ...formData, monthlyElectricUsage: e.target.value })}
                        className="bg-white rounded-full py-3 px-6 text-sm font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
                        disabled={isSubmitting}
                    />
                </div>
            </div>

            {/* Solar Panel Place */}
            <div>
                <label className="block text-xs font-bold mb-2">Solar Panel Place?</label>
                <div className="relative">
                    <select
                        value={formData.solarPanelPlace}
                        onChange={(e) => setFormData({ ...formData, solarPanelPlace: e.target.value })}
                        className="appearance-none w-full bg-white rounded-full py-3 px-6 text-sm font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
                        disabled={isSubmitting}
                    >
                        <option>Huge farm</option>
                        <option>Residential Roof</option>
                        <option>Commercial Roof</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Materials On Your Roof */}
            <div>
                <label className="block text-xs font-bold mb-2">Materials On Your Roof?</label>
                <div className="relative">
                    <select
                        value={formData.roofMaterial}
                        onChange={(e) => setFormData({ ...formData, roofMaterial: e.target.value })}
                        className="appearance-none w-full bg-white rounded-full py-3 px-6 text-sm font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
                        disabled={isSubmitting}
                    >
                        <option>Comp Shingle</option>
                        <option>Tile</option>
                        <option>Metal</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-2 gap-4">
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white rounded-full py-3 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    required
                    disabled={isSubmitting}
                />
                <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white rounded-full py-3 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    required
                    disabled={isSubmitting}
                />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center gap-2 text-xs font-bold text-secondary">
                <input
                    type="checkbox"
                    id="terms"
                    checked={formData.agreedToTerms}
                    onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                    className="rounded-sm w-4 h-4 cursor-pointer"
                    disabled={isSubmitting}
                />
                <label htmlFor="terms" className="cursor-pointer">
                    I agree with Terms & Conditions
                </label>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 text-sm max-w-[150px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'Sending...' : 'Discover'}
                {!isSubmitting && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                )}
            </button>
        </form>
    );
}
