"use client";
import React from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

const InstallerPage = () => {
    // Reusing the same hero background for consistency (or suggest a unique one)
    const heroBg = "/images/home/00e0bb3995ee8488298be500605deb08548f253e.png";

    return (
        <main className="min-h-screen font-sans bg-white text-[#062d16]">
            <Navbar />

            {/* 1. Hero Section - Consistent with About/Contact */}
            <section className="relative w-full h-[50vh] min-h-[400px] flex items-center bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroBg}
                        alt="Solar Installer Hero"
                        fill
                        className="object-cover opacity-60"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-12">
                    <div className="text-gray-300 text-xs font-bold tracking-widest uppercase mb-4">
                        <Link href="/" className="hover:text-white transition">Home</Link> — <span className="text-[#C2F32C]">Installer Program</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-display font-bold text-white max-w-4xl">
                        Become a Certified <br /> Solar Installer
                    </h1>
                </div>
            </section>

            {/* 2. Intro / Value Prop */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center max-w-4xl mx-auto">
                    <span className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-4 block">Partner with Pure Planet</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight text-[#062d16]">
                        Scale Your Business With <br /> Elite Leads & Support
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-10">
                        Join our exclusive network of elite installers. We provide the leads, the products, and the support so you can focus on what you do best: installing high-quality solar systems.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="#apply" className="bg-[#062d16] text-white px-8 py-4 rounded-full font-bold hover:bg-[#C2F32C] hover:text-[#062d16] transition-all shadow-lg">
                            Apply Now
                        </Link>
                        <Link href="#requirements" className="border border-gray-300 text-[#062d16] hover:border-[#062d16] px-8 py-4 rounded-full font-bold transition-all">
                            View Requirements
                        </Link>
                    </div>
                </div>
            </section>

            {/* 3. Benefits Grid (Light Theme) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Benefit 1 */}
                        <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                            <div className="w-14 h-14 bg-[#062d16] rounded-full flex items-center justify-center mb-6 text-white group-hover:bg-[#C2F32C] group-hover:text-[#062d16] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-[#062d16]">High-Quality Leads</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Get pre-vetted, high-intent leads directly from our platform. Stop chasing cold prospects and start closing more deals with homeowners ready to buy.
                            </p>
                        </div>

                        {/* Benefit 2 */}
                        <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                            <div className="w-14 h-14 bg-[#062d16] rounded-full flex items-center justify-center mb-6 text-white group-hover:bg-[#C2F32C] group-hover:text-[#062d16] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-[#062d16]">Preferred Pricing</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Unlock Tier 1 pricing on panels, inverters, and batteries. Maximize your margins with our bulk purchasing power and exclusive partner discounts.
                            </p>
                        </div>

                        {/* Benefit 3 */}
                        <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                            <div className="w-14 h-14 bg-[#062d16] rounded-full flex items-center justify-center mb-6 text-white group-hover:bg-[#C2F32C] group-hover:text-[#062d16] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.258 50.55 50.55 0 00-2.658.813m-15.482 0A50.55 50.55 0 0112 13.489a50.55 50.55 0 0112-4.41m-4.788 11.23a48.627 48.627 0 01-14.423 0M12 20.904a48.627 48.627 0 01-3.498-4.99" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-[#062d16]">Advanced Training</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Stay ahead with access to NABCEP-accredited training and product certifications. We ensure our partners are the most knowledgeable in the field.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Requirements & Application Form */}
            <section id="requirements" className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Left: Requirements List */}
                        <div className="lg:w-1/2">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-1 bg-[#C2F32C]"></span>
                                <span className="text-sm font-bold tracking-widest uppercase text-gray-500">Requirements</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-[#062d16]">Who We Are Looking For</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                To maintain our reputation for excellence, we only partner with installers who share our commitment to quality, safety, and customer satisfaction.
                            </p>

                            <ul className="space-y-6">
                                {[
                                    "Valid Electrical or Solar Contractor License",
                                    "Proof of General Liability Insurance ($1M+)",
                                    "Minimum 2 Years of Solar Installation Experience",
                                    "NABCEP Certification (Preferred)",
                                    "Excellent Customer Satisfaction Record",
                                    "Compliance with all Local & Federal Safety Standards"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#059669" className="w-3.5 h-3.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 font-medium text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: Application Form */}
                        <div id="apply" className="lg:w-1/2">
                            <div className="bg-gray-50 border border-gray-100 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                                {/* Decor */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C2F32C]/10 rounded-bl-[2.5rem] -mr-8 -mt-8"></div>

                                <h3 className="text-2xl font-bold mb-2 text-[#062d16]">Join the Network</h3>
                                <p className="text-gray-500 mb-8 text-sm">Fill out the form below to start your application.</p>

                                <form className="space-y-6">
                                    {/* Solar System Type */}
                                    <div>
                                        <label className="block text-xs font-bold mb-2 text-gray-500">Solar System Type?</label>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="relative">
                                                <select className="appearance-none w-full bg-white border border-gray-200 rounded-full py-3 px-6 text-sm font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#062d16] cursor-pointer">
                                                    <option>Off grid</option>
                                                    <option>On grid</option>
                                                    <option>Hybrid</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                </div>
                                            </div>
                                            <div className="bg-white border border-gray-200 rounded-full py-3 px-6 text-sm font-bold text-gray-400 flex items-center">
                                                Monthly Electric Usage in KWH?
                                            </div>
                                        </div>
                                    </div>

                                    {/* Solar Panel Place */}
                                    <div>
                                        <label className="block text-xs font-bold mb-2 text-gray-500">Solar Panel Place?</label>
                                        <div className="relative">
                                            <select className="appearance-none w-full bg-white border border-gray-200 rounded-full py-3 px-6 text-sm font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#062d16] cursor-pointer">
                                                <option>Huge farm</option>
                                                <option>Residential Roof</option>
                                                <option>Commercial Roof</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Materials On Your Roof */}
                                    <div>
                                        <label className="block text-xs font-bold mb-2 text-gray-500">Materials On Your Roof?</label>
                                        <div className="relative">
                                            <select className="appearance-none w-full bg-white border border-gray-200 rounded-full py-3 px-6 text-sm font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#062d16] cursor-pointer">
                                                <option>Comp Shingle</option>
                                                <option>Tile</option>
                                                <option>Metal</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input type="email" placeholder="Email" className="w-full bg-white border border-gray-200 rounded-full py-3 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-[#062d16]" />
                                        <input type="text" placeholder="Phone Number" className="w-full bg-white border border-gray-200 rounded-full py-3 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-[#062d16]" />
                                    </div>

                                    <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                                        <input type="checkbox" id="terms" className="rounded-sm accent-[#062d16]" />
                                        <label htmlFor="terms">I agree with Terms & Conditions</label>
                                    </div>

                                    <button className="bg-[#062d16] text-white font-bold py-3 px-8 rounded-full hover:bg-[#0a4523] hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm shadow-lg w-fit">
                                        Discover
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default InstallerPage;
