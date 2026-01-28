import { Metadata } from 'next';
import Image from "next/image";
import Link from 'next/link';

import Navbar from "@/components/home/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
    title: "Contact Us - Pure Planet | Energy Solutions",
    description: "Get in touch with Pure Planet for residential solar panels, home batteries, and heat pump installations in Melbourne. Call 0450 010 419.",
    alternates: {
        canonical: 'https://pureplanet.net.au/contact'
    }
};

export default function ContactPage() {
    const heroBg = "/images/home/00e0bb3995ee8488298be500605deb08548f253e.png";

    return (
        <main className="min-h-screen font-sans bg-white text-secondary">
            <Navbar />

            {/* 1. Hero Section */}
            <section className="relative w-full h-[50vh] min-h-[400px] flex items-center bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroBg}
                        alt="Rooftop Solar"
                        fill
                        className="object-cover opacity-60"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-12">
                    <div className="text-gray-300 text-xs font-bold tracking-widest uppercase mb-4">
                        <Link href="/" className="hover:text-white transition">Home</Link> — <span className="text-[#C2F32C]">Contact Us</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-display font-bold text-white">Contact Us</h1>
                </div>
            </section>

            {/* 2. Contact Split Section */}
            <section className="flex flex-col lg:flex-row min-h-screen">
                {/* Left: Lime Green Form */}
                <div className="lg:w-1/2 bg-[#C2F32C] p-8 md:p-16 lg:p-24 flex flex-col justify-center">
                    <span className="text-xs font-bold tracking-widest uppercase text-[#062d16] mb-4 block">Ask Us</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-[#062d16] leading-tight">
                        Contact Us For Any Queries?
                    </h2>

                    <ContactForm />
                </div>

                {/* Right: Contact Info */}
                <div className="lg:w-1/2 bg-white p-8 md:p-16 lg:p-24 flex flex-col justify-center">
                    <ContactInfo />
                </div>
            </section>

            {/* 3. Map Section */}
            <section className="w-full h-[500px] grayscale hover:grayscale-0 transition-all duration-500">
                {/* Google Maps Embed Centerd on Ravenhall */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.5369795052926!2d144.7561!3d-37.7556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad68ad691c7849d%3A0x5045675218ce7e0!2sRavenhall%20VIC%203023%2C%20Australia!5e0!3m2!1sen!2sou!4v1700000000000!5m2!1sen!2sou"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>

            <Footer />
        </main>
    );
}
