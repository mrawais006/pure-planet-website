import Image from "next/image";
import React from "react";

const Partners = () => {
    const partners = [
        { src: "/Parftner Logos/Parftner Logos/Energy.svg", alt: "Energy" },
        { src: "/Parftner Logos/Parftner Logos/Power.svg", alt: "Power" },
        { src: "/Parftner Logos/Parftner Logos/The Energy.svg", alt: "The Energy" },
        { src: "/Parftner Logos/Parftner Logos/Hero.svg", alt: "Hero" },
        { src: "/Parftner Logos/Parftner Logos/Solar Energy.svg", alt: "Solar Energy" },
    ];

    return (
        <section className="py-16 md:py-24 bg-[#F2F8F2] border-b border-gray-100">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <h3 className="text-3xl font-display font-bold mb-12 text-center text-[#1A1A1A] tracking-tight">
                    Trusted & Accredited Partners
                </h3>

                {/* Partners Container */}
                <div className="border border-gray-200 rounded-2xl bg-transparent overflow-hidden">
                    <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0 divide-gray-200">
                        {partners.map((partner, i) => (
                            <div key={i} className="flex items-center justify-center p-8 md:p-10 h-32 md:h-40 hover:bg-white/50 transition-colors duration-300">
                                <div className="relative w-full h-full max-w-[140px] max-h-[100px]">
                                    <Image
                                        src={partner.src}
                                        alt={partner.alt}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
