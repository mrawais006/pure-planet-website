"use client";
import Image from "next/image";
import React, { useState } from "react";

const SolarPanelInfo = () => {
    const [activeTab, setActiveTab] = useState<'saver' | 'powerhouse'>('powerhouse');
    const [viewPdf, setViewPdf] = useState<string | null>(null);

    const brochures = {
        saver: "/brouchers/FOX ESS BATTERY EQ SERIES BROCURE.pdf",
        powerhouse: "/brouchers/NEOVOLT BATTERY BROCURE.pdf"
    };

    return (
        <section className="py-20 md:py-28 bg-[#F2F8F2]">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="text-center mb-12">
                    <span className="text-[#062d16] font-bold tracking-wider uppercase text-sm mb-2 block">Technology Spotlight</span>
                    <h2 className="text-3xl md:text-5xl font-display font-medium text-black">
                        Choose Your Energy Engine
                    </h2>
                </div>

                {/* Tabs / Toggle */}
                <div className="flex justify-center mb-16">
                    <div className="bg-white p-1 rounded-full shadow-md inline-flex">
                        <button
                            onClick={() => setActiveTab('saver')}
                            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'saver'
                                ? 'bg-[#C2F32C] text-black shadow-sm'
                                : 'text-gray-500 hover:text-black'
                                }`}
                        >
                            The Saver (Fox ESS)
                        </button>
                        <button
                            onClick={() => setActiveTab('powerhouse')}
                            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'powerhouse'
                                ? 'bg-[#062d16] text-white shadow-sm'
                                : 'text-gray-500 hover:text-black'
                                }`}
                        >
                            The Powerhouse (NeoVolt)
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center min-h-[500px]">
                    {/* Visual Side */}
                    <div className={`relative h-[400px] md:h-[500px] w-full transition-all duration-500 ${activeTab === 'powerhouse' ? 'order-2 md:order-2' : 'order-1 md:order-1'}`}>
                        <div className="relative w-full h-full">
                            <Image
                                src={activeTab === 'saver' ? "/images/home/fox_ess_final_v2.png" : "/images/services/neovolt-internal-view.jpg"}
                                alt={activeTab === 'saver' ? "Fox ESS Stackable Battery" : "NeoVolt Home Battery"}
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                            {/* Floating Badge */}
                            <div className="absolute top-10 right-0 md:right-10 bg-white/90 backdrop-blur-sm border border-white/20 p-4 rounded-xl shadow-xl animate-fade-in">
                                <span className="block text-2xl font-bold text-black">
                                    {activeTab === 'saver' ? 'Modular' : '96%'}
                                </span>
                                <span className="text-xs text-gray-600 font-medium uppercase tracking-wide">
                                    {activeTab === 'saver' ? 'Design' : 'Usable Energy'}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className={`transition-all duration-500 ${activeTab === 'powerhouse' ? 'order-1 md:order-1' : 'order-2 md:order-2'}`}>
                        <div className="mb-6">
                            <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${activeTab === 'saver' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                                }`}>
                                {activeTab === 'saver' ? 'Best for Low Usage' : 'Premium Choice'}
                            </span>
                            <h3 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                                {activeTab === 'saver' ? 'Start Small, Grow Later.' : 'Total Energy Independence.'}
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {activeTab === 'saver'
                                    ? "Perfect for households just starting their solar journey. Additional battery modules can be simply clicked on top as your family grows or EV needs arise."
                                    : "The ultimate 'set and forget' solution. With a massive cycle life and high depth of discharge, run your heat pump, lights, and EV charging overnight without drawing from the grid."}
                            </p>

                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#C2F32C] flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-black">
                                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-black font-medium">{activeTab === 'saver' ? 'Expandable Modular Design' : '8000 Cycles (Lasts 20+ Years)'}</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#C2F32C] flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-black">
                                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-black font-medium">{activeTab === 'saver' ? 'Cost-Effective Entry Point' : 'Run Heat Pump & EV at Night'}</span>
                                </li>
                            </ul>

                            <button
                                onClick={() => setViewPdf(brochures[activeTab])}
                                className="text-black font-bold underline decoration-2 underline-offset-4 hover:text-[#062d16] hover:decoration-[#C2F32C] transition-all"
                            >
                                Preview {activeTab === 'saver' ? 'Fox ESS' : 'NeoVolt'} Brochure
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {viewPdf && (
                <BrochureModal
                    pdfUrl={viewPdf}
                    onClose={() => setViewPdf(null)}
                />
            )}
        </section>
    );
};

const BrochureModal = ({ pdfUrl, onClose }: { pdfUrl: string, onClose: () => void }) => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white w-full max-w-5xl h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden relative">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white z-10">
                    <h3 className="font-bold text-lg text-gray-900">Product Brochure</h3>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* PDF Viewer / Content */}
                <div className="flex-1 bg-gray-50 relative">
                    <iframe
                        src={`${pdfUrl}#toolbar=0`}
                        className="w-full h-full border-0"
                        title="Brochure Preview"
                    />
                </div>

                {/* Footer / Actions */}
                <div className="p-4 border-t border-gray-100 bg-white flex justify-end gap-3 z-10">
                    <button
                        onClick={onClose}
                        className="px-6 py-2.5 rounded-full font-bold text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                        Close
                    </button>
                    <a
                        href={pdfUrl}
                        download
                        className="px-6 py-2.5 rounded-full font-bold bg-[#C2F32C] text-[#062d16] hover:bg-black hover:text-white transition-all flex items-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M12 12.75l-3-3m0 0l3 3m-3-3l3-3m-3 3v-7.5" />
                        </svg>
                        Download PDF
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SolarPanelInfo;
