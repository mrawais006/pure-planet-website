import Link from "next/link";
import React from "react";

const ContactExperts = () => {
    return (
        <section className="py-24 bg-white text-center">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
                        Get In Touch With Solar Experts
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Get a free, no-obligation solar assessment from Melbourne's trusted solar and energy experts
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-[#C2F32C] rounded-full flex items-center justify-center mb-4 text-[#062d16]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                        <h3 className="text-black font-bold text-lg mb-2">Custom System Design</h3>
                        <p className="text-gray-600 text-sm">Tailored to your roof & usage.</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-[#C2F32C] rounded-full flex items-center justify-center mb-4 text-[#062d16]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                        <h3 className="text-black font-bold text-lg mb-2">Full Rebate Management</h3>
                        <p className="text-gray-600 text-sm">We handle the paperwork.</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-[#C2F32C] rounded-full flex items-center justify-center mb-4 text-[#062d16]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.144-.002 1.474.414l.595.833c.991 1.4 3.774.96 4.095-.774.202-1.09-.881-2.064-1.937-1.83-1.84.414-2.166-1.393-.933-2.19.86-.554 2.217-.678 3.19.066.9.688 2.062.533 2.6-.456l.002-.005a2.158 2.158 0 0 0-.448-2.793c-.93-.761-1.282-2.07-.63-3.14.398-.654.186-1.503-.497-1.92a2.008 2.008 0 0 0-2.316.326c-.734.629-1.9.593-2.583-.078a1.993 1.993 0 0 0-2.585-.19c-.838.647-2.005.414-2.586-.516a1.997 1.997 0 0 0-3.004-.377 15.11 15.11 0 0 0-1.896 2.58c-.5.858-1.554 1.15-2.383.676a1.99 1.99 0 0 0-2.822 1.05c-.328.985-1.34 1.524-2.31 1.23-.972-.294-1.99.27-2.316 1.23a1.993 1.993 0 0 0 .584 2.106c.8.604.93 1.765.316 2.53-.666.828-.316 2.07.678 2.586.878.456 1.246 1.55.733 2.457a1.998 1.998 0 0 0 1.05 2.823c.96.323 1.492 1.345 1.192 2.308a1.998 1.998 0 0 0 1.83 2.587c.974.07 1.71.937 1.63 1.91a1.997 1.997 0 0 0 2.584 1.632c.857-.298 1.815.228 2.14.996a1.997 1.997 0 0 0 2.822.449c.758-.606 1.868-.535 2.538.196a2.002 2.002 0 0 0 2.766-.457l.003-.005a1.999 1.999 0 0 0-.583-2.73 2.163 2.163 0 0 1-.827-2.023c.12-.99 1.098-1.637 1.98-1.096a2.003 2.003 0 0 0 2.47-.282Z" />
                            </svg>
                        </div>
                        <h3 className="text-black font-bold text-lg mb-2">A-Grade Local Installers</h3>
                        <p className="text-gray-600 text-sm">No sub-contractors.</p>
                    </div>
                </div>

                {/* Button */}
                <div>
                    <Link href="/quote-form" className="inline-block">
                        <button className="bg-[#C2F32C] text-[#062d16] font-bold py-4 px-10 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(194,243,44,0.3)]">
                            Get Your Free Quote Today
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default ContactExperts;
