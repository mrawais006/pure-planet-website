import Image from "next/image";
import Link from "next/link";
import React from "react";

const Experience = () => {
    // Images based on analysis
    const img1 = "/images/home/79dc47370870f61f1d2fc84fa0e66abd5060318a.png"; // Workers on roof
    const img2 = "/images/home/33aff140cdc213167a87fe899ae190714c29a9ed.png"; // Battery system (Equipment)

    return (
        <section className="py-24 bg-[#F3FCE9]">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Images Section */}
                <div className="relative">
                    <div className="grid grid-cols-2 gap-6">
                        {/* Left Image (Battery/Inverter) - Positioned lower */}
                        <div className="relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden mt-24 shadow-xl">
                            <Image
                                src={img2}
                                alt="Home Battery System"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Right Image (Workers) - Positioned higher */}
                        <div className="relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src={img1}
                                alt="Solar Installers on Roof"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="pl-0 lg:pl-10 pt-4">
                    <div className="mb-4">
                        <span className="text-sm font-bold text-gray-900">Commercial & Residential Solar Solution Across Victoria</span>
                    </div>
                    {/* Size 46px as requested */}
                    <h2 className="text-[40px] md:text-[36px] font-display font-medium mb-6 text-gray-900 leading-[1.1]">
                        Engineered for Melbourne Weather. <br className="hidden md:block" />
                        Built for Life.
                    </h2>
                    {/* Fixed line spacing to be standard (not loose) */}
                    <p className="text-gray-900 mb-10 text-base leading-normal max-w-lg">
                        We don’t just install panels; we design energy ecosystems. From Ravenhall to the Mornington Peninsula,
                        our systems are optimized for Victoria’s unique climate. We manage the entire process—from securing your
                        VEU rebates to ensuring strict compliance with Energy Safe Victoria standards.
                    </p>

                    {/* Trust Badges - Replaces Progress Bars */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-lg">
                        <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 mb-2 text-[#062d16]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                </svg>
                            </div>
                            <span className="text-xs font-bold text-gray-900 leading-tight">Solar Victoria<br />Authorized Retailer</span>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 mb-2 text-[#062d16]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                            </div>
                            <span className="text-xs font-bold text-gray-900 leading-tight">Clean Energy Council<br />Approved</span>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 mb-2 text-[#062d16]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                </svg>
                            </div>
                            <span className="text-xs font-bold text-gray-900 leading-tight">5-Year Workmanship<br />Warranty</span>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <Link href="/contact" className="bg-[#C2F32C] text-black font-bold h-14 px-8 rounded-full hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-lg shadow-black/5 group w-full sm:w-auto justify-center">
                            Contact Now
                            <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center transform -rotate-45 group-hover:rotate-0 group-hover:bg-[#C2F32C] group-hover:text-black transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                        </Link>

                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-[#C2F32C] text-black rounded-full flex items-center justify-center shadow-lg shadow-black/5 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 5.25V4.5z" clipRule="evenodd" />
                                </svg>
                            </div>

                            <div className="leading-tight">
                                <span className="block text-gray-900 text-xs font-bold mb-0.5">Talk To Us</span>
                                <a href="tel:0450010419" className="text-gray-900 font-bold text-lg hover:text-gray-600 transition tracking-tight">0450 010 419</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProgressBar = ({ label, percentage }: { label: string, percentage: number }) => (
    <div>
        <div className="flex justify-between text-sm font-bold mb-3 text-gray-900">
            <span>{label}</span>
            <span>{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
                className="bg-[#C2F32C] h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    </div>
);

export default Experience;
