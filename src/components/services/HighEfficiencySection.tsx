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
        name: "Home Battery Storage",
        image: "/Pure Planet Images/Heat Pump/air-condition-outdoor-unit-isolated-transparent-background.png",
        originalPrice: "$1,800.00",
        currentPrice: "$1,750.00",
        rating: 5,
        badge: { text: "Sold", color: "red" }
    },
    {
        id: 2,
        name: "Energy-Efficient Heat Pump",
        image: "/Pure Planet Images/Heat Pump/air-conditioner-condenser-unit-isolated-white-background.png",
        originalPrice: "$5,500.00",
        currentPrice: "$5,000.00",
        rating: 5,
        badge: { text: "Sale", color: "green" }
    },
    {
        id: 3,
        name: "Home Battery Solution",
        image: "/Pure Planet Images/Heat Pump/modern-air-purifier-with-hepa-filter-digital-display.png",
        originalPrice: "$2,970.00",
        currentPrice: "$2,940.00",
        rating: 5,
        badge: { text: "Sale", color: "green" }
    },
    {
        id: 4,
        name: "Solar Panel",
        image: "/Pure Planet Images/Heat Pump/solar-panel-isolated-white-background.png",
        originalPrice: "$2,650.00",
        currentPrice: "$2,545.00",
        rating: 3,
        badge: { text: "Sale", color: "green" }
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
