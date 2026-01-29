import { Metadata } from 'next';
import Image from "next/image";
import Link from 'next/link';

import Navbar from "@/components/home/Navbar";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/components/home/Testimonials";
import HighEfficiencySection from "@/components/services/HighEfficiencySection";
import NeoVoltSpecs from "@/components/services/NeoVoltSpecs";
import FoxEssSpecs from "@/components/services/FoxEssSpecs";
import FoxEssEQ5000Specs from "@/components/services/FoxEssEQ5000Specs";
import FoxEssEQ6000Specs from "@/components/services/FoxEssEQ6000Specs";
import FoxEssEP5Specs from "@/components/services/FoxEssEP5Specs";
import FoxEssEP6Specs from "@/components/services/FoxEssEP6Specs";
import FoxEssEP11Specs from "@/components/services/FoxEssEP11Specs";
import FoxEssEP12Specs from "@/components/services/FoxEssEP12Specs";
import FoxEssCQ6Specs from "@/components/services/FoxEssCQ6Specs";
import FoxEssCQ7Specs from "@/components/services/FoxEssCQ7Specs";
import FoxEssCQ16Specs from "@/components/services/FoxEssCQ16Specs";
import FAQ from "@/components/shared/FAQ";
import CallToAction from "@/components/shared/CallToAction";




export const metadata: Metadata = {
    title: "Home Battery Storage Solution | Pure Planet",
    description: "Secure your energy future with our Home Battery Storage Solutions. Store excess solar energy and reduce your reliance on the grid.",
    alternates: {
        canonical: 'https://pureplanet.net.au/services/home-battery'
    }
};

export default function HomeBatteryPage() {
    // Assets (Using placeholders from existing assets as specific ones weren't fetched due to 429)
    const heroBg = "/Pure Planet Images/Home Batteries/154.jpg";
    // Intro Image - Placeholder simulating the room setting
    const introImg = "/Pure Planet Images/Home Batteries/194114.jpg";
    // Gallery Images
    const gallery1 = "/Pure Planet Images/Home Batteries/194657.jpg";
    const gallery2 = "/Pure Planet Images/Home Batteries/194114.jpg";
    const gallery3 = "/Pure Planet Images/Home Batteries/154.jpg";
    const benefitsImg = "/Pure Planet Images/Home Batteries/5150.jpg";



    return (
        <main className="min-h-screen font-sans bg-white text-secondary">
            <Navbar />

            {/* 1. Hero Section */}
            <section className="relative w-full h-[50vh] min-h-[400px] flex items-center bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroBg}
                        alt="Home Battery"
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
                    <h1 className="text-5xl md:text-6xl font-display font-bold text-white">Home Battery</h1>
                    <p className="text-gray-300 mt-4 text-sm font-medium">Home Battery Storage</p>
                </div>
            </section>

            {/* 2. Intro Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl">
                        <Image
                            src={introImg}
                            alt="Home Battery Setup"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <span className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-2 block">Power Your Home. Reduce Your Bills.</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                            Melbourne’s Solar<br />Battery Storage Solutions
                        </h2>
                        <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                            As electricity prices continue to rise across Victoria and the Australian Government pushes for greater adoption of cleaner energy, solar battery storage is no longer a luxury; it’s a necessity. At PurePlanet, we help Melbourne homeowners take control of their energy with reliable, high-performance home battery systems designed for Australian conditions.
                        </p>
                        <p className="text-gray-500 mb-12 text-sm leading-relaxed">
                            Store the excess solar energy your panels generate during the day and use it at night, during peak pricing hours, or when the grid goes down. Less reliance on traditional power sources means lower bills, fewer emissions, and greater energy independence.
                        </p>

                        <div className="border border-gray-200 rounded-3xl p-6 flex items-center gap-6 max-w-md">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-black">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg leading-tight">How The Installation Works</h4>
                                <span className="text-xs text-gray-400">Watch our video to learn more about our installation services</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2a. NeoVolt Showcase */}
            <NeoVoltSpecs />

            {/* 2b. Fox ESS Showcase */}
            {/* 2b. Fox ESS Showcase */}
            <FoxEssSpecs />
            <FoxEssEQ5000Specs />
            <FoxEssEQ6000Specs />
            <FoxEssEP5Specs />
            <FoxEssEP6Specs />
            <FoxEssEP11Specs />
            <FoxEssEP12Specs />
            <FoxEssCQ6Specs />
            <FoxEssCQ7Specs />
            <FoxEssCQ16Specs />

            {/* 2c. Home Battery Storage Solution */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-6 leading-tight">
                            Home Battery Storage Solution
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            A home battery system lets you store unused solar power rather than exporting it back to the grid, so you get minimal feed-in tariffs. This stored energy can then be used when electricity is most expensive or during unexpected outages.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed font-medium">
                            Why Melbourne Homes Are Switching to Batteries:
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Rising electricity costs across Victoria",
                                "Reduced solar feed-in tariffs",
                                "Government incentives encouraging clean energy use",
                                "Increased power outages and grid instability"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="text-gray-600 leading-relaxed">
                            With PurePlanet, your system is carefully designed to maximise savings, performance, and long-term reliability.
                        </p>
                    </div>
                    <div className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-2xl group">
                        <Image src="/solar-planet/Background.png" alt="Home Battery Storage" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                </div>
            </section>

            {/* 3. System Options Grid */}
            <section className="pb-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="grid lg:grid-cols-7 gap-8 items-center">
                        <div className="col-span-2 pr-8">
                            <h2 className="text-4xl font-display font-bold mb-6 leading-tight">System<br />Options We<br />Install</h2>
                            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                                Home battery systems allow you to store solar energy generated during the day, allowing homeowners to use free energy in the evening or during periods of high electricity demand.
                            </p>
                            <Link href="/contact" className="bg-primary text-secondary-dark font-bold py-3 px-8 rounded-full hover:bg-black hover:text-white transition-all duration-300 inline-flex items-center gap-2 text-sm">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </Link>
                        </div>

                        <div className="col-span-5 grid md:grid-cols-3 gap-6">
                            {[
                                { title: "Residential Battery Systems", img: gallery1, desc: "For homes that want to achieve energy independence." },
                                { title: "Hybrid Inverter Solutions", img: gallery2, desc: "Seamlessly integrate solar, battery, and grid power." },
                                { title: "Battery Monitoring Systems", img: gallery3, desc: "Track performance and optimize usage in real-time." },
                            ].map((item, i) => (
                                <div key={i} className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer">
                                    <Image src={item.img} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-8 text-white">
                                        <h3 className="text-xl font-bold font-display mb-2 leading-tight">{item.title}</h3>
                                        <p className="text-xs text-gray-300 opacity-80 line-clamp-2">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3b. Benefits Of Home Battery Systems */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-2xl group">
                        <Image src="/solar-planet/Background.png" alt="Home Battery Benefits" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-8 leading-tight">
                            Benefits Of Home Battery Systems
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "Reduce reliance on the electricity grid.",
                                "Lower energy bills year-round.",
                                "Protection against rising power prices.",
                                "Backup power during blackouts.",
                                "Increased solar return on investment.",
                                "Reduced household carbon emissions."
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-xs text-black font-bold">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>


            {/* 5. Customers Review */}
            <Testimonials />

            {/* 7. High-Efficiency Products */}
            <HighEfficiencySection />

            {/* 6. FAQ */}
            <FAQ
                items={[
                    {
                        question: "Do I Need Solar Panels To Install A Battery?",
                        answer: "While batteries work best with solar, hybrid systems can be installed to prepare for future solar upgrades."
                    },
                    {
                        question: "How Long Do Home Batteries Last?",
                        answer: "Most modern batteries last 10–15 years, depending on usage and system quality."
                    },
                    {
                        question: "Will A Battery Work During A Blackout?",
                        answer: "Yes, with backup configuration enabled, essential circuits can remain powered."
                    },
                    {
                        question: "Are Home Batteries Worth It In Melbourne?",
                        answer: "With rising tariffs and low feed-in rates, batteries significantly improve solar savings."
                    },
                    {
                        question: "Is Maintenance Required?",
                        answer: "Home batteries require minimal maintenance and are monitored digitally."
                    }
                ]}
            />



            {/* 8. CTA Section */}
            <CallToAction
                title="Take Control of Your Energy Today!"
                description="Reduce electricity bills, protect your home from outages, and support a cleaner future with a PurePlanet home battery system."
                buttonText="Get Your Free Home Battery Quote Today"
            />

            <Footer />
        </main>
    );
}
