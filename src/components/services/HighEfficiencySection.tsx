"use client";

import React from 'react';
import ProductCarousel from "@/components/services/ProductCarousel";

interface HighEfficiencySectionProps {
    products?: any[]; // Allow overriding products if needed
    title?: string;
    description?: string;
}

const defaultProducts = [
    {
        id: 1,
        name: "Fox ESS ECS Series",
        image: "/fox-ess/ECS.1-406.png",
    },
    {
        id: 2,
        name: "Fox ESS EP6",
        image: "/fox-ess/EP6.1.png",
    },
    {
        id: 3,
        name: "Fox ESS EP12",
        image: "/fox-ess/EP12.1.png",
    },
    {
        id: 4,
        name: "NeoVolt Battery",
        image: "/images/services/neovolt-internal-view.jpg",
    },
    {
        id: 5,
        name: "Jinko Solar Panel",
        image: "/images/services/showcase-jinko.png",
    }
];

const HighEfficiencySection: React.FC<HighEfficiencySectionProps> = ({
    products = defaultProducts,
    title = "High-Efficiency Products",
    description
}) => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-black">{title}</h2>
                    {description && (
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {description}
                        </p>
                    )}
                </div>

                <div className="relative px-8">
                    <ProductCarousel products={products} />
                </div>
            </div>
        </section>
    );
};

export default HighEfficiencySection;
