import { Metadata } from 'next';
import Image from "next/image";
import Link from 'next/link';

import Navbar from "@/components/home/Navbar";
import Footer from "@/components/layout/Footer";
import HighEfficiencySection from "@/components/services/HighEfficiencySection";
import FAQ from "@/components/shared/FAQ";
import CallToAction from "@/components/shared/CallToAction";

export const metadata: Metadata = {
    title: "Energy-Efficient Heat Pump Systems | Pure Planet",
    description: "Upgrade to energy-efficient heat pump systems with Pure Planet. We provide expert installation and service for brands like Reclaim Energy, iStore, and Stiebel Eltron.",
    alternates: {
        canonical: 'https://pureplanet.net.au/services/heat-pump'
    }
};

export default function HeatPumpPage() {
    // Assets (Reusing available assets as placeholders for the specific ones)
    const heroBg = "/images/home/00e0bb3995ee8488298be500605deb08548f253e.png";
    // Using other large images discovered earlier as placeholders for the gallery/intro
    // Ideally these should be the specific heat pump images, but we are limited by API access right now.
    const introImg = "/images/home/4041c6a79ff25b229e93d067f8b38794152145fb.png";
    const heatPumpIntroImg = "/Pure Planet Images/Heat Pump/7382.jpg";
    const contentImg = "/Pure Planet Images/Heat Pump/1246.jpg";
    const videoThumb = "/Pure Planet Images/Partner Program/engineer-installing-solar-panels-roofs-homes-residential-commercial-buildings-renewable-energy-sustainable-resources-concept-generative-ai (1).jpg";
    const statsBg = "/Pure Planet Images/Heat Pump/25468.jpg";
    const gallery1 = "/images/home/33aff140cdc213167a87fe899ae190714c29a9ed.png";
    const gallery2 = "/images/home/79dc47370870f61f1d2fc84fa0e66abd5060318a.png";
    const gallery3 = "/images/home/a0c2d5aa855c9154ada03d6c151dca3bdbd85891.png";
    const gallery4 = "/images/home/8d7e3684f457038060907cdb093c3e49187a6038.png";



    return (
        <main className="min-h-screen font-sans bg-white text-secondary">
            <Navbar />

            {/* 1. Hero Section */}
            <section className="relative w-full h-[50vh] min-h-[400px] flex items-center bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroBg}
                        alt="Heat Pump Systems"
                        fill
                        className="object-cover opacity-60"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-16">
                    <div className="text-gray-300 text-xs font-bold tracking-widest uppercase mb-4">
                        <Link href="/" className="hover:text-white transition">Home</Link> — <span className="text-primary">Services</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-display font-bold text-white">Heat Pump</h1>
                </div>
            </section>

            {/* 2. Intro Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
                        <Image
                            src={heatPumpIntroImg}
                            alt="Heat Pump Unit"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-4xl md:text-4xl font-display font-bold mb-6 leading-tight">
                            Energy-Efficient Heat<br />Pump Systems
                        </h2>
                        <p className="text-gray-600 mb-6 font-bold text-sm">
                            Heat pumps are a modern evolution of traditional water and space heating, designed to deliver powerful heating using far less electricity. Instead of generating heat, they extract heat from the surrounding air and transfer it efficiently into your home or hot water system.
                        </p>
                        <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                            This proven technology has been used in Europe and Australia for decades and is now a leading choice for homeowners looking to reduce energy bills, cut carbon emissions, and future-proof their homes
                        </p>

                        <div className="flex flex-wrap items-center gap-6">
                            <button className="bg-primary text-secondary-dark font-bold py-3 px-8 rounded-full hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2 text-sm">
                                Get A Free Quote
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </button>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </div>
                                <div className="leading-tight">
                                    <span className="block text-xs font-bold uppercase text-gray-400">Talk To Us</span>
                                    <a href="tel:0450010410" className="block font-bold hover:text-primary transition">04 5001 0410</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* 4. Text Content Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-5xl font-bold font-display mb-4">Why Choose a Heat Pump?</h3>
                        <ul className="space-y-3">
                            {[
                                "Uses up to 70% less energy than conventional electric systems",
                                "Works efficiently even in cool Australian climates",
                                "Ideal for homes switching away from gas",
                                "Compatible with solar power systems",
                                "Eligible for government rebates and incentives"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 font-bold text-sm text-gray-700">
                                    <span className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-xs text-white">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-xl">
                        <Image src={contentImg} alt="Feature" fill className="object-cover" />
                    </div>
                </div>
            </section>

            {/* 4b. Brands We Work With - Compact Cards */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-black">Brands We Work With</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We partner only with reliable, well-established heat pump manufacturers that meet Australian performance and safety standards. Every system we install is selected for durability, efficiency, and long-term manufacturer support.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Stiebel Eltron Card */}
                        <div className="bg-[#333333] rounded-3xl p-10 border border-gray-700">
                            <h3 className="text-2xl font-display font-bold text-white mb-4">Stiebel Eltron Heat Pumps</h3>
                            <p className="text-gray-300 mb-6">
                                A German-engineered brand known for precision, longevity, and quiet performance.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Exceptional energy efficiency ratings",
                                    "Designed for a consistent hot water supply",
                                    "Ultra-quiet operation, ideal for residential areas",
                                    "Long service life with minimal maintenance"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-200">
                                        <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center shrink-0">
                                            <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-300">
                                <span className="font-bold text-white">Best for:</span> Homeowners who value engineering quality and long-term reliability.
                            </p>
                        </div>

                        {/* Sanden Card */}
                        <div className="bg-[#C8E088] rounded-3xl p-10">
                            <h3 className="text-2xl font-display font-bold text-black mb-4">Sanden Heat Pump Systems</h3>
                            <p className="text-gray-800 mb-6">
                                A trusted name in Australia, widely used in residential and commercial settings.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "CO₂ refrigerant for ultra-low environmental impact",
                                    "Outstanding performance in cooler climates",
                                    "Extremely low running costs",
                                    "Strong local support and warranty coverage"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-black">
                                        <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center shrink-0">
                                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-black">
                                <span className="font-bold">Best for:</span> Environmentally conscious households aiming for maximum efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </section>





            {/* 3c. Installation Services */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-black">Heat Pump Installation for Homes & Businesses</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            We deliver tailored heat pump solutions designed around your property’s size, usage patterns, and energy goals.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Residential heat pump installation",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-primary mb-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                )
                            },
                            {
                                title: "Commercial heat pump systems",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-primary mb-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                                    </svg>
                                )
                            },
                            {
                                title: "System upgrades and replacements",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-primary mb-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    </svg>
                                )
                            },
                            {
                                title: "Heat pump servicing and repairs",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-primary mb-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m3.12 3.12l-1.921 1.921" />
                                    </svg>
                                )
                            }
                        ].map((service, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 text-center flex flex-col items-center">
                                {service.icon}
                                <h3 className="text-xl font-bold font-display text-black">{service.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* 3d. Modern Australian Homes */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl order-2 lg:order-1">
                        <Image
                            src={introImg} // Using generic intro image as placeholder
                            alt="Modern Australian Home"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-black leading-tight">Designed for Modern Australian Homes</h2>
                        <ul className="space-y-4 mb-8">
                            {[
                                "New builds and renovations",
                                "Homes replacing gas systems",
                                "Families looking for predictable energy costs",
                                "Properties with solar panels",
                                "Long-term homeowners planning ahead"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-lg font-medium text-gray-700">
                                    <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-black text-sm">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="text-gray-600 leading-relaxed text-lg border-l-4 border-primary pl-6 py-2 bg-gray-50 rounded-r-xl">
                            With rising energy prices, many Australian households are returning to time-tested efficiency principles, supported by modern technology.
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. How It Works - Video Section */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <h2 className="text-4xl font-display font-bold mb-4">How It Works?!</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm mb-12">
                        See how our professional installation teams work to complete your renewable energy setup with speed and precision.
                    </p>

                    <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                        <Image src={videoThumb} alt="Video Thumbnail" fill className="object-cover brightness-75 group-hover:brightness-90 transition duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center animate-pulse group-hover:animate-none group-hover:scale-110 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-black ml-1">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Statistics Stats */}
            <section className="relative py-24 bg-black text-white">
                <div className="absolute inset-0 z-0">
                    <Image src={statsBg} alt="Background" fill className="object-cover opacity-30" />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
                    {[
                        {
                            val: "20+",
                            label: "Years Of Experience",
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-4 mx-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.854 1.5-2.418a1.5 1.5 0 011.644.052c.976.658 1.5 1.76 1.5 2.854l-11.25.041c0-1.096.524-2.202 1.5-2.86a1.5 1.5 0 011.644-.053c.842.565 1.5 1.436 1.5 2.42V18" />
                                </svg>
                            )
                        },
                        {
                            val: "30",
                            label: "Awards Won",
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-4 mx-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.961 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.962 3.99-2.48 5.228m2.48-5.546a6.003 6.003 0 01-5.353 4.273m4.273 4.273a6.726 6.726 0 01-2.747 1.35" />
                                </svg>
                            )
                        },
                        {
                            val: "100+",
                            label: "Projects Completed",
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-4 mx-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                                </svg>
                            )
                        },
                        {
                            val: "5k",
                            label: "Happy Customers",
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-4 mx-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                </svg>
                            )
                        },
                        {
                            val: "2M",
                            label: "Hours Of Work",
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-4 mx-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            )
                        }
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center p-4">
                            {stat.icon}
                            <span className="text-4xl font-bold font-display mb-2">{stat.val}</span>
                            <span className="text-sm text-gray-300 font-medium">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 8. Why Trust Us */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-black leading-tight">Why Trust Us for Heat Pump Services Across Melbourne</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            We are known for delivering professional, compliant, and long-lasting heat pump installations. From consultation to installation and aftercare, everything is handled in-house by qualified technicians, no shortcuts, no outsourcing.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed italic border-l-4 border-primary pl-4">
                            Our approach is built on traditional values: doing the job properly, using quality products, and standing by our work long after installation.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "We offer responsive support across Melbourne, including emergency assistance when your hot water system fails unexpectedly.",
                                "We are a locally operated business with hands-on experience installing heat pump systems in Melbourne homes and commercial properties.",
                                "No matter where you’re located, our team provides consistent service quality across all Melbourne suburbs.",
                                "Clear quotes, upfront costs, and no hidden fees. You know exactly what you’re paying for before work begins."
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <span className="w-6 h-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-black text-xs font-bold mt-1">✓</span>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
                        <Image src={gallery2} alt="Trusted Service" fill className="object-cover" />
                    </div>
                </div>
            </section>

            {/* 7. High-Efficiency Products */}
            {/* 7. High-Efficiency Products */}
            <HighEfficiencySection
                title="High-Efficiency Products"
                description="We supply a carefully selected range of high-performance heat pump units, tested for Australian conditions and installed by qualified professionals."
            />



            {/* 9. FAQ */}
            <FAQ
                title="Frequently Asked Questions"
                items={[
                    {
                        question: "Are Heat Pumps Suitable For Melbourne’s Climate?",
                        answer: "Yes. Heat pumps perform efficiently in Melbourne’s weather and provide reliable hot water year-round."
                    },
                    {
                        question: "How Much Can I Save With A Heat Pump System?",
                        answer: "Heat pumps can reduce hot water energy costs by up to 70% compared to traditional electric systems."
                    },
                    {
                        question: "Are Government Rebates Available In Victoria?",
                        answer: "Yes. Eligible systems qualify for Victorian and federal rebates, significantly lowering upfront costs."
                    },
                    {
                        question: "How Long Does Installation Take?",
                        answer: "Most heat pump installations are completed within one day."
                    },
                    {
                        question: "Do Heat Pumps Work During Power Outages?",
                        answer: "Standard systems require grid power, but battery-backed options are available."
                    }
                ]}
            />

            {/* 10. Call To Action */}
            <CallToAction
                title="Ready to Switch to an Energy-Efficient Heat Pump?"
                description="Lower your energy bills, reduce emissions, and future-proof your property with a high-efficiency heat pump system designed for Melbourne homes and businesses."
                buttonText="Book Your Free Heat Pump Consultation Today"
                href="/contact"
            />

            <Footer />
        </main >
    );
}
