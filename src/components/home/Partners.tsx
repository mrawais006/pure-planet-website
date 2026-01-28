import Image from "next/image";
import React from "react";

const Partners = () => {
    const partners = [
        { src: "/partners/jinko.png", alt: "Jinko Solar" },
        { src: "/partners/Canadian Solar.png", alt: "Canadian Solar" },
        { src: "/partners/hanersun.png", alt: "Hanersun" },
        { src: "/partners/fox-ess-logo.png", alt: "Fox ESS" },
        { src: "/partners/neovolt-logo.png", alt: "NeoVolt" },
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
                            <div key={i} className="flex items-center justify-center p-4 md:p-6 h-32 md:h-40 hover:bg-white/50 transition-colors duration-300">
                                <div className="relative w-full h-full max-w-[180px] max-h-[120px]">
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
