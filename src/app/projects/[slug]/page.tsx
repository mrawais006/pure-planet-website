import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/layout/Footer";
import { projects } from "@/data/projects";

// Generate static params for all projects
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    // Find next project for navigation
    const currentIndex = projects.findIndex((p) => p.slug === slug);
    const nextProject = projects[(currentIndex + 1) % projects.length];

    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            {/* Immersive Hero Section */}
            <section className="relative h-[60vh] md:h-[80vh] w-full bg-black">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-16 md:pb-24">
                    <div className="max-w-[1440px] mx-auto animate-fade-in-up">
                        <span className="text-[#C2F32C] font-bold tracking-widest uppercase text-sm mb-4 block">{project.category}</span>
                        <h1 className="text-5xl md:text-5xl font-display font-medium text-white mb-4 leading-tight">{project.title}</h1>
                        <p className="text-gray-300 text-lg md:text-xl font-light">{project.subtitle} • {project.date}</p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24">

                    {/* Left: Description & Narrative */}
                    <div className="lg:col-span-7">
                        <div className="mb-12">
                            <span className="text-[#062d16] font-bold uppercase tracking-widest text-xs mb-2 block">The Project</span>
                            <h3 className="text-3xl font-display font-medium mb-6 text-black">Project Overview</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        {project.challenge && (
                            <div className="mb-12">
                                <span className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2 block">The Challenge</span>
                                <h4 className="text-2xl font-display font-medium mb-4 text-black">Identifying The Problem</h4>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {project.challenge}
                                </p>
                            </div>
                        )}

                        {project.solution && (
                            <div className="mb-12">
                                <span className="text-[#C2F32C] font-bold uppercase tracking-widest text-xs mb-2 block p-1 bg-black w-fit px-3 rounded-full">The Solution</span>
                                <h4 className="text-2xl font-display font-medium mb-4 text-black">Reliable Energy Execution</h4>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {project.solution}
                                </p>
                            </div>
                        )}

                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                            <p className="text-gray-600 text-lg leading-relaxed italic">
                                "At Pure Planet, we ensure every installation meets the highest standards of safety and efficiency. This project highlights our commitment to providing sustainable energy solutions tailored to Victorian requirements."
                            </p>
                        </div>
                    </div>

                    {/* Right: Stats & Key Info */}
                    <div className="lg:col-span-5">
                        <div className="bg-[#F3FCE9] rounded-3xl p-8 md:p-12 shadow-sm">
                            <h4 className="text-xl font-bold mb-8 text-black border-b border-gray-200 pb-4">Key Statistics</h4>
                            <div className="space-y-6">
                                {project.stats.map((stat, idx) => (
                                    <div key={idx} className="flex justify-between items-center">
                                        <span className="text-gray-500 font-medium">{stat.label}</span>
                                        <span className="text-black font-bold text-lg">{stat.value}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12">
                                <Link href="/contact" className="bg-[#C2F32C] text-black w-full py-4 rounded-full font-bold hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 group">
                                    Enquire About Similar
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Next Project Navigation */}
            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="flex justify-between items-center mb-12">
                        <h3 className="text-3xl font-display font-medium text-black">Next Project</h3>
                        <Link href="/our-work" className="text-gray-500 hover:text-black font-bold transition-colors">View All Projects</Link>
                    </div>

                    <Link href={`/projects/${nextProject.slug}`} className="group relative block h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-xl">
                        <Image
                            src={nextProject.image}
                            alt={nextProject.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex justify-between items-end">
                            <div>
                                <span className="text-[#C2F32C] font-bold uppercase tracking-widest text-sm mb-2 block">{nextProject.category}</span>
                                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{nextProject.title}</h2>
                                <p className="text-gray-300">{nextProject.subtitle}</p>
                            </div>
                            <div className="w-16 h-16 bg-[#C2F32C] text-black rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
