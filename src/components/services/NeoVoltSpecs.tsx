import Image from "next/image";
import Link from "next/link";
import React from "react";

const NeoVoltSpecs = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
                {/* Header Section */}
                <div className="mb-12 max-w-4xl">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-[#062d16] text-white px-3 py-1 font-bold tracking-wider text-sm">NEOVOLT</div>
                        <span className="text-gray-400 text-xs tracking-[0.2em] font-medium uppercase">PREMIUM PARTNER</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-[#062d16] mb-6">
                        Engineering for the Modern Home
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
                        The NeoVolt range represents the pinnacle of modular energy storage, combining sleek minimalist aesthetics with advanced LFP chemistry for unmatched safety and longevity.
                    </p>
                </div>

                {/* Main Card Content */}
                <div className="bg-white rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">

                    {/* Left Content Column */}
                    <div className="p-8 lg:p-16 flex-1 lg:max-w-[55%] flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-6 text-[#C2F32C] font-bold tracking-wider text-sm uppercase">
                            <span>★</span> FLAGSHIP PERFORMANCE
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-[#062d16] mb-10">
                            NeoVolt Modular Series
                        </h3>

                        {/* Feature Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mb-12">
                            <FeatureItem
                                icon={<BadgeIcon />}
                                title="10-Year Warranty"
                                desc="Guaranteed durability"
                            />
                            <FeatureItem
                                icon={<ShieldIcon />} // Using ShieldIcon as proxy for "Smart App Control" visually if needed, or stick to relevant icons
                                title="Smart App Control"
                                desc="Real-time monitoring"
                            />
                            <FeatureItem
                                icon={<BatteryIcon />} // Using BatteryIcon for Efficiency
                                title="97.8% Efficiency"
                                desc="Low energy loss"
                            />
                            <FeatureItem
                                icon={<BoltIcon />}
                                title="Emergency Backup"
                                desc="Instant EPS switch"
                            />
                        </div>

                        {/* Specs Table */}
                        <div className="bg-[#F8F9FA] rounded-xl p-6 mb-10">
                            <div className="grid grid-cols-2 gap-y-4 text-sm">
                                <div className="text-gray-500 font-medium border-b border-gray-200 pb-2">Feature</div>
                                <div className="text-gray-500 font-medium border-b border-gray-200 pb-2">Specification</div>

                                <div className="text-gray-600 border-b border-gray-200 pb-2 font-medium">Nominal Voltage</div>
                                <div className="text-[#062d16] font-bold border-b border-gray-200 pb-2">400V</div>

                                <div className="text-gray-600 border-b border-gray-200 pb-2 font-medium">Cycle Life</div>
                                <div className="text-[#062d16] font-bold border-b border-gray-200 pb-2">10,000+ Cycles</div>

                                <div className="text-gray-600 font-medium">Ingress Rating</div>
                                <div className="text-[#062d16] font-bold">IP65 (Outdoor Rated)</div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div>
                            <Link href="/quote-form">
                                <button className="bg-[#062d16] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#0a4523] transition-colors duration-300">
                                    Get a Quote for NeoVolt
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Image Column */}
                    <div className="flex-1 bg-[#F4F6F8] relative min-h-[400px] lg:min-h-auto flex items-center justify-center p-12">
                        <div className="relative w-full h-full min-h-[400px]">
                            <Image
                                src="/images/services/neovolt-internal-v2.jpg"
                                alt="NeoVolt Battery Internal View"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Simplified Feature Item Component for the new layout
const FeatureItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="flex flex-col gap-2">
        <div className="text-[#062d16] w-6 h-6 mb-1">{icon}</div>
        <div>
            <h4 className="font-bold text-[#062d16] text-lg">{title}</h4>
            <p className="text-gray-500 text-sm">{desc}</p>
        </div>
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

export default NeoVoltSpecs;
