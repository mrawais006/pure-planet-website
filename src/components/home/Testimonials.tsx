"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
    // Initialize Embla Carousel with drag enabled
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="py-24 bg-[#F3FCE9]">
            <div className="max-w-[1440px] mx-auto px-4 md:px-12 text-center">
                {/* Header Section */}
                <div className="mb-20">
                    <span className="text-sm font-bold tracking-widest text-black mb-2 block">Chosen By Thousands</span>
                    <h2 className="text-4xl md:text-4xl font-display font-bold text-black">Customers Review</h2>
                </div>

                {/* Carousel Viewport */}
                <div className="overflow-hidden cursor-grab active:cursor-grabbing px-4 md:px-0" ref={emblaRef}>
                    <div className="flex -ml-8 py-12">
                        {testimonials.map((review) => (
                            <div key={review.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-8">
                                <div className="bg-white rounded-[40px] p-10 pt-16 relative shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col items-center text-center mx-2 my-2">

                                    {/* Overlapping Avatar */}
                                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-200">
                                        <Image
                                            src={review.image}
                                            alt={review.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Star Rating */}
                                    <div className="flex gap-1 text-yellow-400 mb-6 text-lg">
                                        {'★★★★★'}
                                    </div>

                                    {/* Review Text */}
                                    <p className="text-gray-900 leading-relaxed text-[15px] font-medium mb-8 flex-grow">
                                        {review.text}
                                    </p>

                                    {/* Divider */}
                                    <div className="w-full h-px bg-gray-200 mb-6"></div>

                                    {/* Reviewer Info */}
                                    <div>
                                        <h4 className="font-bold text-xl text-black mb-1">{review.name}</h4>
                                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block">{review.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center gap-4 mt-12">
                    <button
                        onClick={scrollPrev}
                        className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#C2F32C] hover:text-black transition-all duration-300 shadow-lg hover:scale-110"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                    <button
                        onClick={scrollNext}
                        className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#C2F32C] hover:text-black transition-all duration-300 shadow-lg hover:scale-110"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
