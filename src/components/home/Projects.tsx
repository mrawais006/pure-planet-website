import Image from "next/image";
import Link from "next/link";
import React from "react";
import { projects } from "@/data/projects";

const Projects = () => {
    // Shared data imported from @/data/projects

    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                {/* Header Section - Flex Between */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                    {/* "View All" Button on LEFT */}
                    <Link href="/our-work">
                        <button className="bg-[#C2F32C] text-black font-bold py-3 px-8 rounded-full hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 text-sm flex items-center gap-2 group shadow-lg shadow-black/5">
                            <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center transform -rotate-45 group-hover:rotate-0 group-hover:bg-[#C2F32C] group-hover:text-black transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                            View All
                        </button>
                    </Link>

                    {/* Heading on RIGHT */}
                    <div>
                        <h2 className="text-4xl md:text-4xl font-display font-bold text-black text-right">Our Work In Melbourne</h2>
                    </div>
                </div>

                {/* Grid Section */}
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
                    {projects.map((project, i) => (
                        <Link key={i} href={`/projects/${project.slug}`} className="group cursor-pointer block">
                            {/* Image Container */}
                            <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-lg mb-6">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Content Below Image */}
                            <div className="flex justify-between items-center px-2">
                                {/* Left: Black Circle Arrow Icon */}
                                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>

                                {/* Right: Text Content */}
                                <div className="text-right">
                                    <p className="text-xs font-medium text-gray-500 mb-1">{project.subtitle}</p>
                                    <h3 className="text-xl md:text-2xl font-display font-bold text-black group-hover:text-[#062d16] transition-colors">{project.title}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
