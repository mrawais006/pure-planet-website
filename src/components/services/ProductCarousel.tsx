"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

type Product = {
    id: number;
    name: string;
    image: string;
    // Optional props in case they are needed later or passed from legacy data
    originalPrice?: string;
    currentPrice?: string;
    rating?: number;
    badge?: {
        text: string;
        color: "red" | "green" | "black";
    };
};

interface ProductCarouselProps {
    products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 });
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const onSelect = useCallback((api: any) => {
        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect(emblaApi);
        emblaApi.on("reInit", onSelect);
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="relative group">
            <div className="overflow-hidden px-4 md:px-0" ref={emblaRef}>
                <div className="flex -ml-6 py-8">
                    {products.map((product) => (
                        <div key={product.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 pl-6">
                            <div className="group/card cursor-pointer">
                                <div className="bg-[#E2E8E5] rounded-xl p-8 mb-6 relative h-[350px] flex items-center justify-center transition hover:shadow-lg">
                                    <div className="relative w-56 h-56 group-hover/card:scale-110 transition duration-300">
                                        <Image src={product.image} alt={product.name} fill className="object-contain" />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons (Absolute Positioned) */}
            <button
                onClick={scrollPrev}
                className="absolute top-1/2 -translate-y-[calc(50%+40px)] -left-4 md:-left-12 z-20 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!canScrollPrev}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </button>
            <button
                onClick={scrollNext}
                className="absolute top-1/2 -translate-y-[calc(50%+40px)] -right-4 md:-right-12 z-20 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!canScrollNext}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
            </button>
        </div>
    );
};

export default ProductCarousel;
