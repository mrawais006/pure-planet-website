"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/layout/Footer";

const ServicesPage = () => {
    // Services Data
    const services = [
        {
            title: "Solar Panels",
            description: "High-efficiency solar panels to power your home with clean, renewable energy.",
            image: "/images/home/5438ffa41a7b4e23aff65beb432228371508c1ab.png",
            link: "/services/solar-panels"
        },
        {
            title: "Home Batteries",
            description: "Store excess energy and maintain power during outages with advanced battery systems.",
            image: "/Pure Planet Images/Home Page/energy-storage-battery-packs-smart-garage-wall-as-backup-generated-from-solar-system.jpg",
            link: "/services/home-battery"
        },
        {
            title: "Partner Program",
            description: "Join our network of installers and professionals to grow your solar business.",
            image: "/Pure Planet Images/Home Page/solar-power-plant-engineer-standing-rooftop-with-laptop-checking-electricity-production - Copy.jpg",
            link: "/partner-program"
        },
        {
            title: "Heat Pumps",
            description: "Efficient heating and cooling solutions for modern, eco-friendly homes.",
            image: "/Pure Planet Images/Home Page/r-conditioning-fan-hvac-ventilation-fan-background.jpg",
            link: "/services/heat-pump"
        }
    ];

    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-[#C2F32C] selection:text-black flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex items-center bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/home/00e0bb3995ee8488298be500605deb08548f253e.png" // Reusing About page hero bg for consistency or we can pick another
                        alt="Services Hero"
                        fill
                        className="object-cover opacity-60"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-20">
                    <div className="text-gray-300 text-sm font-bold tracking-widest uppercase mb-4">
                        <Link href="/" className="hover:text-white transition">Home</Link> — <span className="text-primary">Services</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white">Our Services</h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mt-6 font-light leading-relaxed">
                        Comprehensive energy solutions designed to lower your bills and reduce your carbon footprint.
                    </p>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="py-20 md:py-32">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {services.map((service, idx) => (
                            <Link key={idx} href={service.link} className="group relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-xl">
                                <div className="absolute inset-0 bg-black">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover opacity-90 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                                    />
                                </div>
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">{service.title}</h3>
                                            <p className="text-white/80 text-lg max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden md:block">
                                                {service.description}
                                            </p>
                                        </div>
                                        <div className="bg-[#C2F32C] text-[#062d16] w-12 h-12 rounded-full flex items-center justify-center transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ServicesPage;
