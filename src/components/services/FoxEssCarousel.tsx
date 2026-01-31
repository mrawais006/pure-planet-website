"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

// --- Data ---
const batteries = [
    {
        id: "eq4800",
        model: "Fox ESS EQ4800",
        badge: "HIGH DISCHARGE SERIES",
        image: "/fox-ess/ECS.1-406.png",
        features: [
            { icon: "PlugIcon", title: "Plug & Play", desc: "Easy installation" },
            { icon: "ExpandIcon", title: "Fully Expandable", desc: "Up to 7 units parallel" },
            { icon: "CoolingIcon", title: "Cooling Tech", desc: "Natural convection" },
            { icon: "CycleIcon", title: "6000+ Cycles", desc: "Long cycle life" },
        ],
        specs: [
            { label: "Capacity", value: "4.8kWh per unit" },
            { label: "Depth of Discharge", value: "90%" },
            { label: "Weight", value: "45kg" }
        ],
    },
    {
        id: "eq5000",
        model: "Fox ESS EQ5000",
        badge: "HIGH EFFICIENCY SERIES",
        image: "/fox-ess/ECS.1-406.png",
        features: [
            { icon: "EnergyIcon", title: "Energy Range", desc: "9.84 ~ 29.52kWh" },
            { icon: "VoltIcon", title: "High Voltage", desc: "Minimize energy loss" },
            { icon: "WarrantyIcon", title: "10 Year Warranty", desc: "Reliable performance" },
            { icon: "SmartIcon", title: "Smart Design", desc: "Blend into any home" },
        ],
        specs: [
            { label: "Capacity", value: "9.84 ~ 29.52kWh" },
            { label: "Battery Type", value: "LiFePO4 (LFP)" },
            { label: "Protection", value: "IP65 Rated" }
        ],
    },
    {
        id: "eq6000",
        model: "Fox ESS EQ6000 Plus",
        badge: "MASSIVE CAPACITY SERIES",
        image: "/fox-ess/ECS.1-406.png",
        features: [
            { icon: "EnergyIcon", title: "Max Capacity", desc: "Up to 41.93kWh" },
            { icon: "VoltIcon", title: "High Voltage", desc: "Superior efficiency" },
            { icon: "WarrantyIcon", title: "10 Year Warranty", desc: "Peace of mind" },
            { icon: "InstallIcon", title: "Easy Install", desc: "Plug-and-play stacking" },
        ],
        specs: [
            { label: "Nominal Capacity", value: "41.93kWh (Max)" },
            { label: "Efficiency", value: "≥97%" },
            { label: "Communication", value: "CAN / RS485" }
        ],
    },
    {
        id: "ep5",
        model: "Fox ESS EP5",
        badge: "SCALABLE ENERGY SERIES",
        image: "/fox-ess/EP5.1.png",
        features: [
            { icon: "EnergyIcon", title: "Scalable Energy", desc: "5.18 ~ 20.8kWh" },
            { icon: "InstallIcon", title: "Easy Installation", desc: "Quick setup" },
            { icon: "WarrantyIcon", title: "10 Year Warranty", desc: "Decade of power" },
            { icon: "VoltIcon", title: "High Voltage", desc: "Optimized performance" },
        ],
        specs: [
            { label: "Nominal Capacity", value: "5.18kWh" },
            { label: "Scalability", value: "Max 4 Units" },
            { label: "Protection", value: "IP65" }
        ],
    },
    {
        id: "ep6",
        model: "Fox ESS EP6",
        badge: "FLEXIBLE CAPACITY SERIES",
        image: "/fox-ess/EP6.1.png",
        features: [
            { icon: "EnergyIcon", title: "Flexible Capacity", desc: "5.76 ~ 23.04kWh" },
            { icon: "ShieldIcon", title: "Safety Reliable", desc: "Advanced protection" },
            { icon: "WarrantyIcon", title: "10 Year Warranty", desc: "Guaranteed durability" },
            { icon: "VoltIcon", title: "High Voltage", desc: "Modern efficiency" },
        ],
        specs: [
            { label: "Nominal Capacity", value: "5.76kWh" },
            { label: "Scalability", value: "Max 4 Modules" },
            { label: "Protection", value: "IP65" }
        ],
    },
    {
        id: "ep11",
        model: "Fox ESS EP11",
        badge: "EXPANDABLE SYSTEM SERIES",
        image: "/fox-ess/EP11.1.png",
        features: [
            { icon: "EnergyIcon", title: "Expandable", desc: "10.36 ~ 41.60kWh" },
            { icon: "VoltIcon", title: "High Efficiency", desc: "Optimal utilization" },
            { icon: "WarrantyIcon", title: "10 Year Warranty", desc: "Long-term reliability" },
            { icon: "ShieldIcon", title: "IP65 Rated", desc: "Indoor / Outdoor" },
        ],
        specs: [
            { label: "Nominal Capacity", value: "10.36kWh" },
            { label: "Max Capacity", value: "41.60kWh" },
            { label: "Type", value: "LiFePO4" }
        ],
    },
    {
        id: "ep12",
        model: "Fox ESS EP12",
        badge: "ROBUST SAFETY SERIES",
        image: "/fox-ess/EP12.1.png",
        features: [
            { icon: "EnergyIcon", title: "Energy Range", desc: "11.52 ~ 46.08kWh" },
            { icon: "ShieldIcon", title: "Safety Reliable", desc: "Top-tier standards" },
            { icon: "WarrantyIcon", title: "10 Year Warranty", desc: "Extensive coverage" },
            { icon: "VoltIcon", title: "High Efficiency", desc: "Maximized output" },
        ],
        specs: [
            { label: "Nominal Capacity", value: "11.52kWh" },
            { label: "Max Capacity", value: "46.08kWh" },
            { label: "Protection", value: "IP65" }
        ],
    },
    {
        id: "cq6",
        model: "Fox ESS CQ6",
        badge: "MASSIVE STORAGE SERIES",
        image: "/fox-ess/ECS.1-406.png",
        features: [
            { icon: "EnergyIcon", title: "Energy Range", desc: "11.98 ~ 83.86kWh" },
            { icon: "InstallIcon", title: "Easy Installation", desc: "Streamlined setup" },
            { icon: "WarrantyIcon", title: "10 Year Warranty", desc: "Consistent performance" },
            { icon: "VoltIcon", title: "High Efficiency", desc: "Max retention" },
        ],
        specs: [
            { label: "Min Capacity", value: "11.98kWh" },
            { label: "Max Capacity", value: "83.86kWh" },
            { label: "Voltage", value: "High Voltage" }
        ],
    },
    {
        id: "cq7",
        model: "Fox ESS CQ7",
        badge: "LARGE SCALE SERIES",
        image: "/fox-ess/ECS.1-406.png",
        features: [
            { icon: "EnergyIcon", title: "Energy Range", desc: "14.04 ~ 98.28kWh" },
            { icon: "VoltIcon", title: "High Efficiency", desc: "Industry leading" },
            { icon: "WarrantyIcon", title: "10 Year Warranty", desc: "Guaranteed" },
            { icon: "ShieldIcon", title: "Reliable", desc: "Stable power output" },
        ],
        specs: [
            { label: "Min Capacity", value: "14.04kWh" },
            { label: "Max Capacity", value: "98.28kWh" },
            { label: "Type", value: "LiFePO4" }
        ],
    },
    {
        id: "cq16",
        model: "Fox ESS CQ16",
        badge: "INDUSTRIAL GRADE SERIES",
        image: "/fox-ess/CQ16.png",
        features: [
            { icon: "EnergyIcon", title: "Massive Energy", desc: "64.28 ~ 241.05kWh" },
            { icon: "VoltIcon", title: "High Voltage", desc: "Superior power" },
            { icon: "WarrantyIcon", title: "10 Year Warranty", desc: "Reliable operation" },
            { icon: "ShieldIcon", title: "Industrial", desc: "Rigorous usage" },
        ],
        specs: [
            { label: "Min Capacity", value: "64.28kWh" },
            { label: "Max Capacity", value: "241.05kWh" },
            { label: "Installation", value: "Floor Mount" }
        ],
    },
];

const FoxEssCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    // Auto-play effect
    useEffect(() => {
        if (!emblaApi) return;
        const autoplay = setInterval(() => {
            emblaApi.scrollNext();
        }, 5000); // 5 seconds per slide
        return () => clearInterval(autoplay);
    }, [emblaApi]);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
                {/* Header Section */}
                <div className="mb-12 flex flex-col items-end text-right">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-gray-400 text-xs tracking-[0.2em] font-medium uppercase">INNOVATION PARTNER</span>
                        <div className="bg-[#C2F32C] text-[#062d16] px-3 py-1 font-bold tracking-wider text-sm italic transform -skew-x-12">FOXESS</div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-[#062d16] mb-4">
                        High-Efficiency Power Reimagined
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl">
                        Fox ESS is a global leader in the development of inverter and energy storage solutions. Their EQ series is renowned for rapid discharge capabilities and industry-leading expansion options.
                    </p>
                </div>

                {/* Main Carousel Card */}
                <div className="bg-[#062d16] rounded-[3rem] shadow-2xl overflow-hidden relative">
                    {/* Embla Viewport */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {batteries.map((item) => (
                                <div className="flex-[0_0_100%] min-w-0" key={item.id}>
                                    <div className="flex flex-col lg:flex-row min-h-[600px]">
                                        {/* Left Image Section */}
                                        <div className="relative w-full lg:w-[45%] bg-[#e5e7eb] flex items-center justify-center p-12">
                                            <div className="relative w-full h-[300px] lg:h-[400px]">
                                                <Image
                                                    src={item.image}
                                                    alt={item.model}
                                                    fill
                                                    className="object-contain drop-shadow-2xl"
                                                    priority
                                                />
                                            </div>
                                        </div>

                                        {/* Right Content Section */}
                                        <div className="w-full lg:w-[55%] p-8 lg:p-16 flex flex-col justify-center text-white">
                                            <div className="flex items-center gap-2 mb-4 text-[#C2F32C] font-bold tracking-wider text-xs uppercase">
                                                <span>⚡</span> {item.badge}
                                            </div>

                                            <h3 className="text-3xl md:text-4xl font-bold italic mb-10">
                                                {item.model}
                                            </h3>

                                            {/* Feature Grid */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 mb-10">
                                                {item.features.map((feature, idx) => (
                                                    <div key={idx} className="flex flex-col gap-1">
                                                        <div className="flex items-center gap-2 text-white font-bold text-sm">
                                                            <span className="text-[#C2F32C] text-lg">
                                                                {/* Map simple icons based on string ID */}
                                                                {feature.icon === "PlugIcon" && "🔌"}
                                                                {feature.icon === "ExpandIcon" && "↔"}
                                                                {feature.icon === "CoolingIcon" && "❄"}
                                                                {feature.icon === "CycleIcon" && "🔄"}
                                                                {feature.icon === "EnergyIcon" && "🔋"}
                                                                {feature.icon === "VoltIcon" && "⚡"}
                                                                {feature.icon === "WarrantyIcon" && "🛡"}
                                                                {feature.icon === "SmartIcon" && "📱"}
                                                                {feature.icon === "InstallIcon" && "🔧"}
                                                                {feature.icon === "ShieldIcon" && "🛡"}
                                                            </span>
                                                            {feature.title}
                                                        </div>
                                                        <div className="text-gray-400 text-xs pl-7">{feature.desc}</div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Specs Table */}
                                            <div className="bg-[#0a4523] rounded-xl p-6 mb-8 border border-gray-700">
                                                <div className="grid grid-cols-2 gap-y-3 text-sm">
                                                    <div className="text-gray-400 font-medium border-b border-gray-700 pb-2">Feature</div>
                                                    <div className="text-gray-400 font-medium border-b border-gray-700 pb-2">Specification</div>

                                                    {item.specs.map((spec, sIdx) => (
                                                        <React.Fragment key={sIdx}>
                                                            <div className="text-gray-300 font-medium border-b border-gray-700 pb-2 last:border-0">{spec.label}</div>
                                                            <div className="text-white font-bold border-b border-gray-700 pb-2 last:border-0">{spec.value}</div>
                                                        </React.Fragment>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Button */}
                                            <div>
                                                <Link href="/quote-form" className="inline-block w-full md:w-auto">
                                                    <button className="bg-[#C2F32C] text-[#062d16] px-8 py-4 rounded-lg font-bold hover:bg-[#a3d615] transition-colors duration-300 w-full md:w-auto text-center">
                                                        Get a Quote for Fox ESS
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoxEssCarousel;
