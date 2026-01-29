import Image from "next/image";
import React from "react";

const FoxEssEP6Specs = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden text-[#062d16]">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C2F32C]/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#062d16]/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-[#C2F32C]/10 border border-[#C2F32C]/20 text-[#062d16] text-xs font-bold tracking-widest uppercase mb-4">
                        High Voltage Storage Battery
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#062d16] mb-6">
                        Fox ESS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C2F32C] to-green-600">EP6</span>
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        Reliable high-voltage storage with enhanced safety features and scalable capacity for your home.
                    </p>
                </div>

                {/* Hero Layout: Left Specs - Image - Right Specs */}
                <div className="grid lg:grid-cols-3 gap-8 items-center mb-20">

                    {/* Left Column Specs */}
                    <div className="space-y-6 flex flex-col lg:items-end lg:text-right order-2 lg:order-1">
                        <SpecCard
                            title="Flexible Capacity"
                            desc="Expandable from 5.76kWh up to 23.04kWh."
                            icon={<BatteryIcon />}
                        />
                        <SpecCard
                            title="Safety Reliable"
                            desc="Prioritizing safety with advanced protection mechanisms."
                            icon={<ShieldIcon />}
                        />
                        <SpecCard
                            title="10 Year Warranty"
                            desc="Guaranteed performance and durability for a decade."
                            icon={<BadgeIcon />}
                        />
                    </div>

                    {/* Center Image - Hero */}
                    <div className="relative h-[500px] lg:h-[600px] w-full order-1 lg:order-2 flex items-center justify-center">
                        <div className="relative w-full h-full">
                            {/* Glow Effect */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-b from-[#C2F32C]/20 to-transparent rounded-full blur-3xl opacity-50"></div>

                            <Image
                                src="/fox-ess/EP6.1.png"
                                alt="Fox ESS EP6 Battery"
                                fill
                                className="object-contain drop-shadow-2xl z-10 hover:scale-105 transition-transform duration-700"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Column Specs */}
                    <div className="space-y-6 flex flex-col lg:items-start lg:text-left order-3">
                        <SpecCard
                            title="High Voltage"
                            desc="Optimized efficiency for modern energy systems."
                            icon={<BoltIcon />}
                        />
                        <SpecCard
                            title="IP65 Protection"
                            desc="Certified for indoor and outdoor installation."
                            icon={<UmbrellaIcon />}
                        />
                        <SpecCard
                            title="Easy Installation"
                            desc="Designed for straightforward stacking and setup."
                            icon={<StackIcon />}
                        />
                    </div>
                </div>

                {/* Detailed Technical Specs Toggle/Section */}
                <div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-8 border border-gray-100">
                    <h3 className="text-xl font-bold text-[#062d16] mb-6 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C2F32C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Full Technical Specifications
                    </h3>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-sm">
                        <SpecRow label="Nominal Capacity" value="5.76kWh" />
                        <SpecRow label="Scalability" value="Max 4 Modules (23.04kWh)" />
                        <SpecRow label="Nominal Voltage" value="High Voltage" />
                        <SpecRow label="Efficiency" value="≥97%" />
                        <SpecRow label="Battery Type" value="LiFePO4 (LFP)" />
                        <SpecRow label="Installation" value="Floor / Wall Mount" />
                        <SpecRow label="Protection Level" value="IP65" />
                        <SpecRow label="Communication" value="CAN / RS485" />
                    </div>
                </div>
            </div>
        </section>
    );
};

// Helper Components
const SpecCard = ({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) => (
    <div className="group bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 hover:border-[#C2F32C] hover:shadow-lg transition-all duration-300">
        <div className="lg:hidden mb-3 text-[#062d16]">{icon}</div> {/* Mobile Icon */}
        <h4 className="font-bold text-lg text-[#062d16] mb-2 flex items-center gap-3 lg:justify-end lg:flex-row-reverse group-hover:text-[#062d16]">
            <span className="hidden lg:block text-[#C2F32C] transition-transform group-hover:scale-110">{icon}</span>
            {title}
        </h4>
        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
);

const SpecRow = ({ label, value }: { label: string, value: string }) => (
    <div className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
        <span className="text-gray-500">{label}</span>
        <span className="font-bold text-[#062d16]">{value}</span>
    </div>
);

// Icons
const BatteryIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);
const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
);
const BadgeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
);
const BoltIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);
const UmbrellaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v5m0-18h7.828a1 1 0 01.707 1.707l-2.071 2.071A2 2 0 0018 9.586V19a1 1 0 01-1 1H7a1 1 0 01-1-1V9.586a2 2 0 00-.586-1.414L3.343 5.707A1 1 0 014.05 4H12z" /></svg>
);
const StackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
);

export default FoxEssEP6Specs;
