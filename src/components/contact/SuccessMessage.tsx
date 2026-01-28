import React from 'react';

interface SuccessMessageProps {
    name: string;
    referenceNumber: string;
}

export default function SuccessMessage({ name, referenceNumber }: SuccessMessageProps) {
    return (
        <div className="bg-white rounded-3xl p-8 shadow-xl text-center animate-fade-in h-full flex flex-col items-center justify-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-[#C2F32C] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#062d16]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
            </div>

            {/* Message */}
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Thank you, {name}!
            </h3>
            <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                We'll call you back within 2 hours during business hours.
            </p>

            {/* Reference Number */}
            <div className="bg-gray-50 rounded-xl p-6 inline-block w-full border border-gray-100 mb-8">
                <p className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-2">Your Reference Number</p>
                <p className="text-3xl font-bold text-[#062d16] font-mono tracking-wide">{referenceNumber}</p>
            </div>

            {/* Additional Help */}
            <p className="text-sm text-gray-500 mt-auto">
                Need immediate assistance? Call us at{' '}
                <a href="tel:0450010419" className="text-[#062d16] font-bold hover:text-[#C2F32C] transition-colors">0450 010 419</a>
            </p>
        </div>
    );
}
