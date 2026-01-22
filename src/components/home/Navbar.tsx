"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const topBarBg = "bg-[#062d16]";

    // Pages that always need a dark header (no hero image)
    const alwaysDarkPages = ['/terms-conditions', '/privacy-policy'];
    const isDarkHeader = isScrolled || alwaysDarkPages.includes(pathname);

    // Handle Scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when shifting to desktop or changing path
    useEffect(() => {
        setIsMobileOpen(false);
        setIsMobileServicesOpen(false);
    }, [pathname]);

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 w-full text-white transition-all duration-300 ${isDarkHeader ? 'bg-[#062d16] shadow-xl' : 'bg-transparent'}`}>
            {/* Top Bar - Desktop only - Hides on Scroll */}
            <div className={`
                ${topBarBg} text-[11px] font-medium tracking-wide border-b border-white/10 hidden lg:block overflow-hidden transition-all duration-300
                ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'}
            `}>
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-3 flex justify-between items-center">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 opacity-70">
                                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                            <span>11 Sant Court, Ravenhall VIC 3023</span>
                        </div>
                        <div className="flex items-center gap-2 border-l border-white/20 pl-8">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 opacity-70">
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                            <span>info@pure-planet.com</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-4 border-r border-white/20 pr-8">
                            {/* Facebook */}
                            <a href="#" className="hover:text-primary transition opacity-80 hover:opacity-100">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                            </a>
                            {/* X (Twitter) */}
                            <a href="#" className="hover:text-primary transition opacity-80 hover:opacity-100">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            {/* WhatsApp */}
                            <a href="#" className="hover:text-primary transition opacity-80 hover:opacity-100">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.683-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.248-.297.371-.495.124-.198.062-.371-.03-.568-.099-.198-.891-2.147-1.22-2.942-.314-.766-.63-.66-.861-.669-.221-.008-.474-.011-.726-.011-.252 0-.66.096-1.006.471-.346.375-1.321 1.291-1.321 3.149 0 1.858 1.352 3.653 1.541 3.901.189.248 2.661 4.061 6.446 5.694 2.502 1.079 3.011.862 3.555.807.544-.055 1.758-.718 2.006-1.413.248-.695.248-1.289.173-1.414z" /></svg>
                            </a>
                            {/* Instagram */}
                            <a href="#" className="hover:text-primary transition opacity-80 hover:opacity-100">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                        </div>
                        <div className="flex items-center gap-2 whitespace-nowrap">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 opacity-70">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                            </svg>
                            <span>Hours: Mon-Fri: 8am – 7pm</span>
                        </div>
                    </div>
                </div>
            </div>

            <nav className={`flex justify-between items-center px-6 md:px-12 max-w-[1440px] mx-auto w-full transition-all duration-300 ${isScrolled ? 'py-4' : 'py-5'}`}>
                <div className="flex items-center gap-2">
                    {/* Logo */}
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative w-40 h-12">
                            <Image
                                src="/Pure planet Logo/logo.png"
                                alt="Pure Planet Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>
                </div>

                <div className="hidden lg:flex items-center gap-10 text-sm font-medium tracking-wide">
                    <Link href="/" className={`hover:text-primary transition duration-300 ${pathname === '/' ? 'text-primary' : 'text-white'}`}>
                        Home
                    </Link>

                    {/* Services Dropdown */}
                    <div
                        className="relative group h-full flex items-center"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <Link href="/services" className={`hover:text-primary transition duration-300 flex items-center gap-1 py-4 ${pathname.startsWith('/services') ? 'text-primary' : ''}`}>
                            Services
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </Link>

                        {/* Dropdown Menu - Beautiful Style */}
                        <div className={`absolute top-[80%] -left-4 w-60 bg-white text-secondary shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 transform origin-top-left border border-gray-100 p-2 ${isServicesOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'}`}>
                            <div className="flex flex-col gap-1">
                                <Link href="/services/heat-pump" className="px-4 py-3 hover:bg-[#F3FCE9] hover:text-[#062d16] font-bold text-sm transition rounded-xl flex items-center justify-between group/link">
                                    Heat Pump
                                    <span className="opacity-0 group-hover/link:opacity-100 transition text-[#062d16] transform group-hover/link:translate-x-1">→</span>
                                </Link>
                                <Link href="/services/home-battery" className="px-4 py-3 hover:bg-[#F3FCE9] hover:text-[#062d16] font-bold text-sm transition rounded-xl flex items-center justify-between group/link">
                                    Home Battery
                                    <span className="opacity-0 group-hover/link:opacity-100 transition text-[#062d16] transform group-hover/link:translate-x-1">→</span>
                                </Link>
                                <Link href="/services/solar-panels" className="px-4 py-3 hover:bg-[#F3FCE9] hover:text-[#062d16] font-bold text-sm transition rounded-xl flex items-center justify-between group/link">
                                    Solar Panels
                                    <span className="opacity-0 group-hover/link:opacity-100 transition text-[#062d16] transform group-hover/link:translate-x-1">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link href="/partner-program" className={`hover:text-primary transition duration-300 ${pathname === '/partner-program' ? 'text-primary' : ''}`}>
                        Partner Program
                    </Link>
                    <Link href="/contact" className={`hover:text-primary transition duration-300 ${pathname === '/contact' ? 'text-primary' : ''}`}>
                        Contact Us
                    </Link>
                    <Link href="/about" className={`hover:text-primary transition duration-300 ${pathname === '/about' ? 'text-primary' : ''}`}>
                        About Us
                    </Link>
                </div>

                <Link href="/contact" className="hidden lg:flex bg-primary text-[#062d16] font-bold py-3 px-8 rounded-full hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 text-sm tracking-wide flex items-center gap-2 shadow-lg shadow-primary/20 group">
                    Get Quotes
                    <span className="bg-[#062d16] text-white w-6 h-6 rounded-full flex items-center justify-center transform -rotate-45 group-hover:rotate-0 group-hover:bg-black transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </span>
                </Link>

                {/* Mobile Menu Button (Hamburger) */}
                <button
                    className="lg:hidden text-white hover:text-primary transition-colors z-50 relative"
                    onClick={() => setIsMobileOpen(true)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                {/* Mobile Menu & Overlay */}
                {/* Backdrop */}
                {isMobileOpen && (
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
                        onClick={() => setIsMobileOpen(false)}
                    />
                )}

                {/* Sliding Menu Panel */}
                <div className={`fixed inset-y-0 right-0 w-full sm:w-[350px] bg-[#062d16] z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
                    <div className="flex flex-col min-h-full p-6">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-2">
                                <Link href="/" className="flex items-center gap-2">
                                    <div className="relative w-32 h-10">
                                        <Image
                                            src="/Pure planet Logo/logo.png"
                                            alt="Pure Planet Logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </Link>
                            </div>
                            <button
                                onClick={() => setIsMobileOpen(false)}
                                className="text-white hover:text-primary transition-colors p-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Links */}
                        <div className="flex flex-col gap-6 text-lg font-medium mb-8">
                            <Link href="/" className="text-white hover:text-primary transition-colors border-b border-white/10 pb-4">Home</Link>

                            {/* Mobile Services Accordion */}
                            <div className="flex flex-col border-b border-white/10 pb-4">
                                <button
                                    className="flex justify-between items-center text-white hover:text-primary transition-colors w-full"
                                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                >
                                    Services
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>

                                <div className={`flex flex-col gap-3 mt-4 pl-4 overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <Link href="/services/heat-pump" className="text-gray-300 hover:text-primary text-base">Heat Pump</Link>
                                    <Link href="/services/home-battery" className="text-gray-300 hover:text-primary text-base">Home Battery</Link>
                                    <Link href="/services/solar-panels" className="text-gray-300 hover:text-primary text-base">Solar Panels</Link>
                                </div>
                            </div>

                            <Link href="/partner-program" className="text-white hover:text-primary transition-colors border-b border-white/10 pb-4">Partner Program</Link>
                            <Link href="/contact" className="text-white hover:text-primary transition-colors border-b border-white/10 pb-4">Contact Us</Link>
                            <Link href="/about" className="text-white hover:text-primary transition-colors border-b border-white/10 pb-4">About Us</Link>
                        </div>

                        {/* Mobile Contact Info (Top Bar Content) */}
                        <div className="mb-8 p-4 bg-white/5 rounded-2xl flex flex-col gap-4 text-sm">
                            <h3 className="text-primary font-bold uppercase tracking-wider text-xs">Contact Information</h3>

                            <div className="flex items-center gap-3 text-white/80">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary shrink-0">
                                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                </svg>
                                <span>11 Sant Court, Ravenhall VIC 3023</span>
                            </div>

                            <div className="flex items-center gap-3 text-white/80">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary shrink-0">
                                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                </svg>
                                <span>info@pure-planet.com</span>
                            </div>

                            <div className="flex items-center gap-3 text-white/80">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary shrink-0">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                                </svg>
                                <span>Hours: Mon-Fri: 8am – 7pm</span>
                            </div>

                            <div className="flex gap-4 mt-2">
                                {/* Facebook */}
                                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-black transition-all">
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                                </a>
                                {/* X (Twitter) */}
                                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-black transition-all">
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                </a>
                                {/* WhatsApp */}
                                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-black transition-all">
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.683-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.248-.297.371-.495.124-.198.062-.371-.03-.568-.099-.198-.891-2.147-1.22-2.942-.314-.766-.63-.66-.861-.669-.221-.008-.474-.011-.726-.011-.252 0-.66.096-1.006.471-.346.375-1.321 1.291-1.321 3.149 0 1.858 1.352 3.653 1.541 3.901.189.248 2.661 4.061 6.446 5.694 2.502 1.079 3.011.862 3.555.807.544-.055 1.758-.718 2.006-1.413.248-.695.248-1.289.173-1.414z" /></svg>
                                </a>
                            </div>
                            <div className="flex items-center gap-2 whitespace-nowrap">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 opacity-70">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                                </svg>
                                <span>Hours: Mon-Fri: 8am – 7pm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Navbar;
