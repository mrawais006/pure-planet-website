"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/home/Navbar";
import Partners from "@/components/home/Partners";
import Footer from "@/components/layout/Footer";

const ServicesPage = () => {
    return (
        <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#C2F32C] selection:text-black">
            <Navbar />

            {/* =========================================
               1. HERO SECTION: The Value Proposition
               ========================================= */}
            <section className="relative w-full h-[85vh] min-h-[700px] flex items-center bg-gray-900 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 select-none">
                    <Image
                        src="/images/services/hero-modern.png" // Generated modern home with solar/battery
                        alt="Modern Victorian Home with Solar and Battery"
                        fill
                        className="object-cover opacity-60"
                        priority
                        sizes="100vw"
                        quality={90}
                    />
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/80 to-transparent"></div>                </div>

                {/* Content */}
                <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-32">
                    <div className="max-w-3xl animate-fade-in-up">
                        <span className="inline-block py-1 px-3 rounded-full bg-[#C2F32C]/20 border border-[#C2F32C] text-[#C2F32C] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Victoria's Energy Experts
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-8 drop-shadow-lg">
                            Customized Energy Solutions for Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C2F32C] to-green-400">Melbourne Home.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-light leading-relaxed mb-10 drop-shadow-md">
                            We are a Victoria-based energy company with 6 years of experience helping homeowners slash bills.
                            From accredited solar installations to rebate-ready heat pumps—we design systems that pay for themselves.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">
                            {/* Primary CTA */}
                            <Link href="/calculator" className="group relative inline-flex items-center justify-center">
                                <button className="bg-[#C2F32C] text-[#062d16] font-bold py-4 px-8 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(194,243,44,0.4)] flex items-center gap-3">
                                    Calculate Your Savings & Rebate
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </Link>
                            {/* Secondary CTA */}
                            <Link href="/about" className="inline-flex items-center justify-center">
                                <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                                    Learn More About Pure Planet
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================
               2. CORE SERVICES GRID (The "Big Three")
               ========================================= */}
            <section className="py-24 bg-white relative">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-20">
                        <span className="text-[#062d16] font-bold tracking-widest uppercase text-sm opacity-60">Outcome Selling</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-[#062d16] mt-3">
                            The "Big Three" for Savings
                        </h2>
                        <div className="w-24 h-1 bg-[#C2F32C] mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Card A: Solar Panels */}
                        <div className="group rounded-[32px] overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full hover:-translate-y-2">
                            <div className="h-[280px] relative overflow-hidden">
                                <Image
                                    src="/images/services/card-solar.png" // Generated/Authentic Solar Image
                                    alt="Generate Clean Power"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur text-[#062d16] text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-gray-100 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#C2F32C] animate-pulse"></span>
                                    REBATE ELIGIBLE
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-2xl font-bold text-[#062d16] mb-2 leading-tight">Generate Your Own Clean Power</h3>
                                <p className="text-sm font-bold text-green-600 uppercase tracking-wider mb-6">Stop Renting Energy</p>
                                <p className="text-gray-600 text-base leading-relaxed mb-6 flex-1">
                                    Stop renting energy from the grid. We design custom high-efficiency systems using Tier-1 panels like <strong>Jinko</strong>, <strong>Canadian Solar</strong>, and <strong>HANERSUN</strong>. Ranging from 6.6kW to commercial scale.
                                </p>
                                <div className="mt-auto">
                                    <div className="bg-green-50 rounded-xl p-4 mb-6 flex items-start gap-3">
                                        <div className="text-xl">💰</div>
                                        <p className="text-sm font-bold text-[#062d16]">Check Solar Victoria Rebate Eligibility.</p>
                                    </div>
                                    <Link href="/quote-form?service=solar" className="w-full block text-center bg-[#062d16] text-white font-bold py-4 rounded-xl hover:bg-[#C2F32C] hover:text-[#062d16] transition-all duration-300">
                                        Get a Solar Quote
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Card B: Home Batteries */}
                        <div className="group rounded-[32px] overflow-hidden bg-[#062d16] text-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#062d16] flex flex-col h-full hover:-translate-y-2 ring-4 ring-[#C2F32C]/20">
                            <div className="h-[280px] relative overflow-hidden bg-white flex items-center justify-center">
                                {/* User Provided Authentic NeoVolt Image */}
                                <Image
                                    src="/images/services/showcase-neovolt-authentic.jpg"
                                    alt="NeoVolt Home Battery"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-6 right-6 bg-[#C2F32C] text-[#062d16] text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                                    INTEREST-FREE LOANS
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1 relative overflow-hidden">
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C2F32C] rounded-full blur-[80px] opacity-10 pointer-events-none"></div>

                                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">Store Your Power, Don't Waste It</h3>
                                <p className="text-sm font-bold text-[#C2F32C] uppercase tracking-wider mb-6">Energy Independence</p>
                                <p className="text-gray-300 text-base leading-relaxed mb-6 flex-1">
                                    Keep your solar energy for the evening. Choose from our flexible <strong>Fox ESS</strong> (stackable) or the premium <strong>NeoVolt</strong> (9.6kWh capacity) for protection against blackouts.
                                </p>
                                <div className="mt-auto">
                                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-6 flex items-start gap-3 border border-white/5">
                                        <div className="text-xl">💰</div>
                                        <p className="text-sm font-bold text-white">Interest-Free Battery Loans Available.</p>
                                    </div>
                                    <Link href="/quote-form?service=battery" className="w-full block text-center bg-[#C2F32C] text-[#062d16] font-bold py-4 rounded-xl hover:bg-white hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(194,243,44,0.3)]">
                                        Size Your Battery Now
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Card C: Heat Pumps */}
                        <div className="group rounded-[32px] overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full hover:-translate-y-2">
                            <div className="h-[280px] relative overflow-hidden">
                                <Image
                                    src="/images/services/card-heat-pump.png" // Generated modern Heat Pump
                                    alt="Upgrade to Electric Hot Water"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur text-[#062d16] text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-gray-100 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#C2F32C] animate-pulse"></span>
                                    VEU APPROVED
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-2xl font-bold text-[#062d16] mb-2 leading-tight">Upgrade to Electric Hot Water</h3>
                                <p className="text-sm font-bold text-[#C2F32C] uppercase tracking-wider mb-6">The Gas Killer</p>
                                <p className="text-gray-600 text-base leading-relaxed mb-6 flex-1">
                                    Gas prices in Victoria are skyrocketing. Switch to a high-efficiency Heat Pump system and save up to 70% on water heating costs.
                                </p>
                                <div className="mt-auto">
                                    <div className="bg-[#F2F8F2] rounded-xl p-4 mb-6 flex items-start gap-3">
                                        <div className="text-xl">💰</div>
                                        <p className="text-sm font-bold text-[#062d16]">Massive VEU Government Rebates Applied.</p>
                                    </div>
                                    <Link href="/quote-form?service=heat-pump" className="w-full block text-center bg-[#062d16] text-white font-bold py-4 rounded-xl hover:bg-[#C2F32C] hover:text-[#062d16] transition-all duration-300">
                                        Check Rebate Eligibility
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================
               3. COMMERCIAL SOLAR SECTION (B2B)
               ========================================= */}
            <section className="py-28 bg-[#0b0c10] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2/3 h-full bg-[#C2F32C] opacity-[0.03] -skew-x-12 translate-x-1/4"></div>

                <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <span className="text-[#C2F32C] font-bold tracking-widest uppercase text-sm mb-4 block">Commercial Solar</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] mb-8">
                                Turn Overhead <br />
                                into <span className="text-[#C2F32C] underline decoration-4 underline-offset-8 decoration-[#C2F32C]/30">Profit.</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                                Seeking a dependable commercial system? For warehouses and offices, a 30kW–100kW system can be cash-flow positive from Day 1.
                                We handle the grid connection and asset write-off planning so you can focus on business.
                            </p>
                            <Link href="/contact?type=commercial" className="inline-block">
                                <button className="bg-white text-[#0b0c10] font-bold py-5 px-10 rounded-full hover:bg-[#C2F32C] hover:scale-105 transition-all duration-300 text-lg">
                                    Request Commercial Audit
                                </button>
                            </Link>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[400px] lg:h-[500px] group">
                                <Image
                                    src="/images/services/commercial-roof.png" // Generated Commercial Roof
                                    alt="Commercial Solar Installation"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                {/* Overlay Card */}
                                <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-400 text-sm font-bold uppercase">ROI Estimation</span>
                                        <span className="text-[#C2F32C] font-bold">~3.5 Years</span>
                                    </div>
                                    <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-[#C2F32C] w-[65%] h-full rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================
               4. HIGH-EFFICIENCY PRODUCTS SHOWCASE
               ========================================= */}
            <Partners />

            {/* =========================================
               5. TRUST & SOCIAL PROOF
               ========================================= */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-[#062d16] mb-12">Why Melbourne Trusts Pure Planet</h2>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        <div className="flex flex-col items-center max-w-[200px]">
                            <div className="w-16 h-16 bg-[#F2F8F2] rounded-full flex items-center justify-center text-[#062d16] mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-gray-900">6 Years Experience</h4>
                            <p className="text-sm text-gray-500 mt-2">Established industry experts</p>
                        </div>

                        <div className="flex flex-col items-center max-w-[200px]">
                            <div className="w-16 h-16 bg-[#F2F8F2] rounded-full flex items-center justify-center text-[#062d16] mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-gray-900">Local Support</h4>
                            <p className="text-sm text-gray-500 mt-2">Based in Clyde North, VIC</p>
                        </div>

                        <div className="flex flex-col items-center max-w-[200px]">
                            <div className="w-16 h-16 bg-[#F2F8F2] rounded-full flex items-center justify-center text-[#062d16] mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-gray-900">CEC Accredited</h4>
                            <p className="text-sm text-gray-500 mt-2">Clean Energy Council Approved</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ServicesPage;
