import Link from 'next/link';
import React from 'react';

interface CallToActionProps {
    title: string;
    description: string;
    buttonText: string;
    href?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ title, description, buttonText, href = "/contact" }) => {
    return (
        <section className="py-24 bg-primary">
            <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-black mb-6">{title}</h2>
                <p className="text-black/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                    {description}
                </p>
                <Link href={href} className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-lg font-bold rounded-full hover:bg-white hover:text-black transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    {buttonText}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </Link>
            </div>
        </section>
    );
};

export default CallToAction;
