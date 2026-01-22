import { Metadata } from 'next';
import Image from "next/image";
import Link from 'next/link';

import Navbar from "@/components/home/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
    title: "Contact Us - Pure Planet | Energy Solutions",
    description: "Get in touch with Pure Planet for residential solar panels, home batteries, and heat pump installations in Melbourne. Call 04 5001 0410.",
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
                        <Link href="/" className="hover:text-white transition">Home</Link> — <span className="text-primary">Contact Us</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-display font-bold text-white">Contact Us</h1>
                </div>
            </section>

            {/* 2. Contact Split Section */}
            <section className="flex flex-col lg:flex-row min-h-screen">
                {/* Left: Lime Green Form */}
                <div className="lg:w-1/2 bg-[#C2F32C] p-8 md:p-16 lg:p-24 flex flex-col justify-center">
                    <span className="text-xs font-bold tracking-widest uppercase text-secondary mb-4 block">Ask Us</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-secondary leading-tight">
                        Contact Us For Any Queries?
                    </h2>

                    <ContactForm />
                </div>

                {/* Right: Contact Info */}
                <div className="lg:w-1/2 bg-white p-8 md:p-16 lg:p-24 flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                        Get In Touch With<br />Our Team
                    </h2>
                    <p className="text-gray-600 mb-12 leading-relaxed max-w-lg">
                        Get in touch with our team to discuss solar panels, home batteries, heat pumps, or general enquiries.
                        Our team is available to answer your questions and provide guidance on residential energy solutions across Victoria.
                    </p>

                    <div className="space-y-8 mb-12">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-secondary">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                            </div>
                            <div>
                                <span className="block font-bold text-sm">Call Our Team</span>
                                <span className="text-gray-500 text-sm">04 5001 0410</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-secondary">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </div>
                            <div>
                                <span className="block font-bold text-sm">Office & Business Addresses</span>
                                <span className="text-gray-500 text-sm">11 Sant Court, Ravenhall VIC 3023</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-secondary">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <div>
                                <span className="block font-bold text-sm">Email Support</span>
                                <span className="text-gray-500 text-sm">info@pure-planet.com</span>
                            </div>
                        </div>
                    </div>

                    <button className="bg-primary text-secondary-dark font-bold py-3 px-8 rounded-full hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2 text-sm w-fit border border-primary">
                        Get A Free Quotes
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </button>
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
