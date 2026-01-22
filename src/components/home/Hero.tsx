import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
    // Image ID from mapping: Hero Section -> c941ecc89f3dbe9baf5f1a90485a71e6093728c1
    const bgImage = "/images/home/c941ecc89f3dbe9baf5f1a90485a71e6093728c1.png";

    return (
        <section className="relative w-full h-[90vh] min-h-[700px] flex items-center bg-gray-900 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 select-none">
                <Image
                    src={bgImage}
                    alt="Solar Panels on Modern Home"
                    fill
                    className="object-cover opacity-80"
                    priority
                    sizes="100vw"
                />
                {/* Dark Overlay Gradient - stronger on left */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-32">
                <div className="max-w-2xl animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl lg:text-[46px] font-display font-medium leading-snug text-white mb-8">
                        Customized Solar &<br />Energy Solutions for Every<br />Melbourne Home
                    </h1>
                    <p className="text-white text-sm md:text-base leading-relaxed mb-10 max-w-2xl font-normal">
                        Pure Planet is a Victoria-based energy company with 6 years of industry experience.
                        We provide accredited solar installations and heat pump systems designed to maximize efficiency and access available government rebates.
                    </p>
                    <Link href="/about" className="inline-block">
                        <button className="bg-primary text-[#062d16] font-bold py-4 px-8 rounded-full hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 flex items-center gap-4 text-sm tracking-wide shadow-lg shadow-primary/20 group">
                            Learn More
                            <span className="bg-[#062d16] text-white rounded-full w-8 h-8 flex items-center justify-center transform -rotate-45 group-hover:rotate-0 group-hover:bg-black transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
