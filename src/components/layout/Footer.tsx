import Image from "next/image";
import Link from "next/link";

import React from "react";

const Footer = () => {
    return (
        <footer className="relative bg-[#050505] text-white pt-10 pb-5 overflow-hidden">
            {/* Optional Background Image Overlay */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                {/* Placeholder for the solar panel background texture functionality if needed */}
                <Image
                    src="/images/home/c941ecc89f3dbe9baf5f1a90485a71e6093728c1.png"
                    alt="Background"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-8 mb-10">

                    {/* 1. Logo Section */}
                    <div className="lg:w-1/5">
                        {/* Brand / Logo */}
                        <div className="mb-8">
                            <Link href="/" className="inline-block relative w-48 h-14">
                                <Image
                                    src="/Pure planet Logo/logo.png"
                                    alt="Pure Planet"
                                    fill
                                    className="object-contain"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* 2. Latest News */}
                    <div className="lg:w-1/6">
                        <h4 className="text-xl font-bold mb-6">Latest News</h4>
                        <ul className="space-y-3 text-sm text-gray-300 font-medium">
                            <li><Link href="/services/solar-panels" className="hover:text-[#C2F32C] transition-colors">Solar Installation</Link></li>
                            <li><Link href="/contact" className="hover:text-[#C2F32C] transition-colors">Consulting Services</Link></li>
                            <li><Link href="/contact" className="hover:text-[#C2F32C] transition-colors">Energy Audits</Link></li>
                            <li><Link href="/our-work" className="hover:text-[#C2F32C] transition-colors">Case Studies</Link></li>
                            <li><Link href="/blogs" className="hover:text-[#C2F32C] transition-colors">Video Tutorials</Link></li>
                        </ul>
                    </div>

                    {/* 3. Services */}
                    <div className="lg:w-1/6">
                        <h4 className="text-xl font-bold mb-6">Services</h4>
                        <ul className="space-y-3 text-sm text-gray-300 font-medium">
                            <li><Link href="/services/solar-panels" className="hover:text-[#C2F32C] transition-colors">Solar Panels</Link></li>
                            <li><Link href="/services/home-battery" className="hover:text-[#C2F32C] transition-colors">Home Batteries</Link></li>
                            <li><Link href="/services/heat-pump" className="hover:text-[#C2F32C] transition-colors">Heat Pump Installation</Link></li>
                            <li><Link href="/about" className="hover:text-[#C2F32C] transition-colors">How it works</Link></li>
                            <li><Link href="/installer" className="hover:text-[#C2F32C] transition-colors">Installer Program</Link></li>
                        </ul>
                    </div>

                    {/* 4. Contact */}
                    <div className="lg:w-1/6">
                        <h4 className="text-xl font-bold mb-6">Contact</h4>
                        <ul className="space-y-3 text-sm text-gray-300 font-medium">
                            <li><Link href="/contact" className="hover:text-[#C2F32C] transition-colors">Our Locations</Link></li>
                            <li><Link href="/partner-program" className="hover:text-[#C2F32C] transition-colors">Partner Program</Link></li>
                            <li><Link href="/calculator" className="hover:text-[#C2F32C] transition-colors">Calculator</Link></li>
                            <li><Link href="/installer" className="hover:text-[#C2F32C] transition-colors">Installer</Link></li>
                            <li><Link href="/contact" className="hover:text-[#C2F32C] transition-colors">Chat Support</Link></li>
                        </ul>
                    </div>

                    {/* 5. Newsletter */}
                    <div className="lg:w-1/4">
                        <h4 className="text-xl font-bold mb-6 text-right lg:text-right">Newsletter Subscription</h4>

                        {/* Unique Input with Left Button */}
                        <div className="relative mb-4">
                            <input
                                type="email"
                                placeholder="Your E-mail"
                                className="w-full h-10 rounded-full pl-12 pr-6 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C2F32C]"
                            />
                            <button className="absolute left-1 top-1 w-8 h-8 bg-[#C2F32C] rounded-full flex items-center justify-center hover:bg-black hover:text-[#C2F32C] transition-colors group">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-black group-hover:text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex justify-end items-center mb-6 gap-2">
                            <span className="text-sm text-gray-300">I agree to the <Link href="/privacy-policy" className="underline hover:text-[#C2F32C]">privacy policy</Link></span>
                            <div className="w-4 h-4 border border-white rounded-sm cursor-pointer hover:bg-[#C2F32C] hover:border-[#C2F32C] transition-colors"></div>
                        </div>

                        <div className="text-right">
                            <h5 className="text-lg font-bold mb-4">We Are Social</h5>
                            <div className="flex justify-end gap-3">
                                {/* LinkedIn */}
                                <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#C2F32C] transition-colors group">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-black">
                                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                    </svg>
                                </Link>
                                {/* WhatsApp */}
                                <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#C2F32C] transition-colors group">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-black">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.683-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.248-.297.371-.495.124-.198.062-.371-.03-.568-.099-.198-.891-2.147-1.22-2.942-.314-.766-.63-.66-.861-.669-.221-.008-.474-.011-.726-.011-.252 0-.66.096-1.006.471-.346.375-1.321 1.291-1.321 3.149 0 1.858 1.352 3.653 1.541 3.901.189.248 2.661 4.061 6.446 5.694 2.502 1.079 3.011.862 3.555.807.544-.055 1.758-.718 2.006-1.413.248-.695.248-1.289.173-1.414z" />
                                    </svg>
                                </Link>
                                {/* Twitter (X) - Proven Path from Navbar */}
                                <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#C2F32C] transition-colors group">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-black">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </Link>
                                {/* Facebook - Proven Path from Navbar */}
                                <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#C2F32C] transition-colors group">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-black">
                                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white pt-3 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
                    <div className="flex gap-6">
                        <Link href="/terms-conditions" className="hover:text-[#C2F32C] transition-colors">Terms & Condition</Link>
                        <Link href="/privacy-policy" className="hover:text-[#C2F32C] transition-colors">Privacy Policy</Link>
                    </div>
                    <p>All Right Reserved &copy; 2026 Pure Planet</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
