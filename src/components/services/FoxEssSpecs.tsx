import Image from "next/image";
import React from "react";

const FoxEssSpecs = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden text-[#062d16]">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-[#C2F32C]/10 border border-[#C2F32C]/20 text-[#062d16] text-xs font-bold tracking-widest uppercase mb-4">
                        High Voltage Series
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#062d16] mb-6">
                        Fox ESS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C2F32C] to-green-600">EQ4800</span>
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        A high-performance energy storage solution designed for maximum efficiency, flexibility, and easy installation.
                    </p>
                </div>

                {/* Main Content: 3 Column Layout (Centered Hero) */}
                <div className="grid lg:grid-cols-3 gap-8 items-center mb-16 relative">

                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#F2F8F2] rounded-full blur-3xl -z-10"></div>

                    {/* Left Specs */}
                    <div className="space-y-8 flex flex-col lg:items-end lg:text-right order-2 lg:order-1">
                        <FeatureItem
                            title="High Voltage"
                            desc="Optimized for high efficiency energy conversion."
                            align="right"
                        />
                        <FeatureItem
                            title="Easy Installation"
                            desc="Plug-and-play modular stacking design."
                            align="right"
                        />
                    </div>

                    {/* Center Image */}
                    <div className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center order-1 lg:order-2">
                        <Image
                            src="/images/services/fox-ess-hero.png"
                            alt="Fox ESS EQ4800 Battery Stack"
                            fill
                            className="object-contain drop-shadow-2xl z-10 hover:scale-105 transition-transform duration-700"
                            priority
                        />
                    </div>

                    {/* Right Specs */}
                    <div className="space-y-8 flex flex-col lg:items-start lg:text-left order-3">
                        <FeatureItem
                            title="Expandable System"
                            desc="Scale from 4.66kWh up to 41.93kWh capacity."
                            align="left"
                        />
                        <FeatureItem
                            title="IP65 Protection"
                            desc="Engineered for durability indoors or outdoors."
                            align="left"
                        />
                    </div>
                </div>

                {/* Technical Specs Table - Compact */}
                <div className="max-w-4xl mx-auto border-t border-gray-100 pt-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
                        <StatItem label="Module Capacity" value="4.66kWh" />
                        <StatItem label="Max Capacity" value="41.93kWh" />
                        <StatItem label="Efficiency" value="97%" />
                        <StatItem label="Warranty" value="10 Years" />
                    </div>
                </div>
            </div>
        </section>
    );
};

// Helper Components
const FeatureItem = ({ title, desc, align }: { title: string, desc: string, align: "left" | "right" }) => (
    <div className={`group flex flex-col ${align === "right" ? "lg:items-end" : "lg:items-start"}`}>
        <h4 className="font-bold text-xl text-[#062d16] mb-2 group-hover:text-[#C2F32C] transition-colors">{title}</h4>
        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{desc}</p>
        <div className={`mt-3 w-12 h-1 bg-gray-100 rounded-full group-hover:bg-[#C2F32C] transition-all duration-500 group-hover:w-20`}></div>
    </div>
);

const StatItem = ({ label, value }: { label: string, value: string }) => (
    <div className="p-2">
        <div className="text-2xl font-bold text-[#062d16] mb-1">{value}</div>
        <div className="text-xs text-gray-400 uppercase tracking-widest">{label}</div>
    </div>
);

export default FoxEssSpecs;
