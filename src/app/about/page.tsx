import { Metadata } from 'next';
import Image from "next/image";
import Link from 'next/link';

// Components can be inline for simplicity or imported if reused. 
// Given the "don't create extra files" instruction, I'll keep unique page sections inline 
// but reuse the Navbar/Footer which are global.
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/components/home/Testimonials";

export const metadata: Metadata = {
    title: "About Us - Pure Planet | Australian-Owned Energy Solutions",
    description: "Pure Planet is an Australian-owned energy solutions provider based in Victoria. We specialize in residential solar, batteries, and heat pumps.",
    alternates: {
        canonical: 'https://pureplanet.net.au/about'
    }
};

export default function AboutPage() {
    // Assets from map
    const heroBg = "/images/home/00e0bb3995ee8488298be500605deb08548f253e.png";
    const whatWeDoImg = "/images/home/a0c2d5aa855c9154ada03d6c151dca3bdbd85891.png";
    const experienceImg = "/images/home/33aff140cdc213167a87fe899ae190714c29a9ed.png"; // Reusing from home? Check hash.
    const commitmentImg = "/images/home/b176032842fd9440c288a966a41bd983f586823f.png";

    return (
        <main className="min-h-screen font-sans bg-white text-secondary">
            <Navbar />

            {/* 1. Hero Section */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex items-center bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroBg}
                        alt="Solar Panels Rooftop"
                        fill
                        className="object-cover opacity-60"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-20">
                    <div className="text-gray-300 text-sm font-bold tracking-widest uppercase mb-4">
                        <Link href="/" className="hover:text-white transition">Home</Link> — <span className="text-primary">About Us</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white">About Pure Planet</h1>
                </div>
            </section>

            {/* 2. Intro / Who We Are */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-5xl md:text-5xl font-display font-bold leading-tight text-secondary-dark">
                            Melbourne's Custom<br />
                            Solar & Energy Solutions<br />
                            Provider
                        </h2>
                    </div>
                    <div>
                        <span className="text-sm font-bold text-gray-900 mb-4 block">Our History</span>
                        <h3 className="text-3xl font-display font-bold mb-6 text-secondary-dark">Who We Are</h3>
                        <p className="text-gray-600 leading-relaxed mb-10 text-lg">
                            PurePlanet is a Melbourne-based solar & energy solutions company with over six years of hands-on experience. We specialise in residential solar panels, home battery systems, and energy-efficient heat pumps, delivering practical solutions that comply with government regulations and industry standards. Our mission is to help Victorian homeowners save on energy costs while supporting a sustainable future.
                        </p>

                        <div className="flex flex-wrap items-center gap-6">
                            {/* Button 1: Contact Now */}
                            <Link
                                href="/contact"
                                className="bg-primary text-secondary-dark font-bold py-3 pl-8 pr-3 rounded-full hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-4 text-sm group"
                            >
                                Contact Now
                                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white group-hover:bg-primary group-hover:text-black transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </div>
                            </Link>

                            {/* Group 2: Talk To Us */}
                            <div className="flex items-center gap-4">
                                <Link
                                    href="tel:0450010410"
                                    className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-secondary-dark hover:bg-black hover:text-white transition-all"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </Link>
                                <div className="leading-tight">
                                    <span className="block text-xs font-bold uppercase text-gray-500">Talk To Us</span>
                                    <span className="block font-bold text-gray-900 text-lg">04 5001 0410</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. What We Do */}
            <section className="pb-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">What We Do</h2>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            With six years of hands-on experience in the residential energy sector, our team understands the technical, regulatory,
                            and practical requirements involved in energy system installations. We take a straightforward and transparent approach,
                            ensuring each project is carefully assessed, properly designed, and installed by licensed professionals.
                        </p>
                    </div>

                    <div className="relative h-[500px] w-full rounded-3xl overflow-hidden group">
                        <Image
                            src={whatWeDoImg}
                            alt="Solar Panel Installation Team"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/90 to-transparent"></div>

                        <div className="absolute bottom-12 left-6 md:left-12 flex items-center gap-6">
                            <div className="w-20 h-20 bg-primary text-secondary-dark rounded-full flex items-center justify-center shadow-lg shadow-primary/30 cursor-pointer hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-display font-bold text-white max-w-xl">
                                We Provide Residential Energy Solutions Across Melbourne
                            </h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Experience & Approach */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Image and Cards with Green Background */}
                    <div className="bg-[#F2F7F2] p-8 md:p-12 rounded-[3.5rem] grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative h-[480px] rounded-[2.5rem] overflow-hidden shadow-xl">
                            <Image
                                src={experienceImg}
                                alt="Our Experience"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Cards Column */}
                        <div className="flex flex-col gap-6 justify-center">
                            {/* Card 1: Google Rating */}
                            <div className="bg-white p-6 rounded-[2rem] shadow-sm flex items-center gap-5">
                                <div className="w-16 h-16 relative flex-shrink-0">
                                    <Image src="/images/home/google_logo.png" alt="Google" fill className="object-contain" />
                                </div>
                                <div className="leading-tight">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-display font-bold text-black">4.9</span>
                                        <div className="flex text-yellow-500 text-xs">★★★★★</div>
                                    </div>
                                    <span className="text-sm font-bold text-gray-400 uppercase tracking-tight">Overall Client<br />Rating</span>
                                </div>
                            </div>

                            {/* Card 2: Global Awards */}
                            <div className="bg-white p-6 rounded-[2rem] shadow-sm flex items-center gap-5">
                                <div className="w-16 h-16 bg-[#E0F7FA] rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#00BCD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="#00BCD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="leading-tight">
                                    <div className="flex items-center gap-1">
                                        <span className="text-xl font-display font-bold text-black">25</span>
                                        <span className="text-sm font-bold text-blue-500">Prestigious</span>
                                    </div>
                                    <span className="text-sm font-bold text-gray-400 uppercase tracking-tight">Global<br />Awards</span>
                                </div>
                            </div>

                            {/* Card 3: Service Certificate */}
                            <div className="bg-white p-6 rounded-[2rem] shadow-sm flex items-center gap-5">
                                <div className="w-16 h-16 bg-[#F3FCE9] rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 14L15 11M15 11L12 8M15 11H7" stroke="#8BC34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#8BC34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="leading-tight">
                                    <div className="flex items-center gap-1">
                                        <span className="text-xl font-display font-bold text-black">18</span>
                                        <span className="text-sm font-bold text-blue-500">Qualification</span>
                                    </div>
                                    <span className="text-sm font-bold text-gray-400 uppercase tracking-tight">Service<br />Certificate</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="lg:pl-12">
                        <span className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-4 block">Our Experience & Approach</span>
                        <h2 className="text-5xl md:text-7xl font-display font-bold mb-10 text-secondary-dark leading-tight">Our Experience</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            With six years of hands-on experience in the residential energy sector, our team understands the technical, regulatory, and practical requirements involved in energy system installations. We take a straightforward and transparent approach, ensuring each project is carefully assessed, properly designed, and installed by licensed professionals.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            We prioritise compliance, safety, and long-term performance in every installation we manage.
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. Our Vision & Values */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-secondary-dark">Our Vision & Values</h2>
                        <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                            At Pure Planet, we are committed to providing energy solutions that are reliable, compliant, and suited to each home’s specific requirements. We believe in clear advice, responsible installation practices, and long-term customer support rather than quick sales or one-size-fits-all solutions.
                        </p>

                        <ul className="space-y-6">
                            {[
                                "Over 6 years of industry experience",
                                "Licensed and accredited installation partners",
                                "Compliance-focused processes",
                                "Clear communication from consultation to completion"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 font-bold text-lg text-secondary-dark">
                                    <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="order-1 lg:order-2 relative rounded-[3.5rem] overflow-hidden shadow-2xl h-[550px]">
                        <Image
                            src="/solar-planet/Background-1.png"
                            alt="Our Vision and Quality"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />


            <Footer />
        </main>
    );
}
