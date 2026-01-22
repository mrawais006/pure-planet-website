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
                    <h2 className="text-[46px] font-display font-medium mb-6 text-gray-900 leading-[1.1]">
                        Melbourne’s Trusted <br className="hidden md:block" />
                        Solar Company For <br className="hidden md:block" />
                        On-Grid & Off-Grid <br className="hidden md:block" />
                        Solution
                    </h2>
                    {/* Fixed line spacing to be standard (not loose) */}
                    <p className="text-gray-900 mb-10 text-base leading-normal max-w-lg">
                        Why customers trust us:
                    </p>

                    {/* Progress Bars */}
                    <div className="space-y-6 mb-10 max-w-lg">
                        <ProgressBar label="Troubleshooting Accuracy" percentage={96} />
                        <ProgressBar label="On-Time Service Delivery" percentage={99} />
                        <ProgressBar label="Flexible Financing Options" percentage={100} />
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
                                <a href="tel:0450010419" className="text-gray-900 font-bold text-lg hover:text-gray-600 transition tracking-tight">04 5001 0419</a>
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
