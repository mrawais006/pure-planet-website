import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/layout/Footer";
import { projects } from "@/data/projects";

export default function OurWork() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            {/* Standardized Hero Section */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex items-center bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/home/c941ecc89f3dbe9baf5f1a90485a71e6093728c1.png"
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
                        <Link href="/" className="hover:text-white transition">Home</Link> — <span className="text-[#C2F32C]">Our Work</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white">Our Work</h1>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
                        {projects.map((project, i) => (
                            <Link key={i} href={`/projects/${project.slug}`} className="group cursor-pointer block">
                                {/* Image Container */}
                                <div className="relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-lg mb-6">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Subtle Overlay */}
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                                </div>

                                {/* Content Below Image */}
                                <div className="flex justify-between items-center px-2">
                                    {/* Left: Black Circle Arrow Icon */}
                                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </div>

                                    {/* Right: Text Content */}
                                    <div className="text-right">
                                        <p className="text-xs font-medium text-gray-500 mb-1 tracking-wider uppercase">{project.subtitle}</p>
                                        <h3 className="text-2xl md:text-3xl font-display font-medium text-black group-hover:text-[#062d16] transition-colors">{project.title}</h3>
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
}
