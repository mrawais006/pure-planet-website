import Image from "next/image";
import Link from "next/link";
import React from "react";

import { blogs } from "@/data/blogs";

const Blog = () => {
    // Show only the first 2 posts on homepage
    const posts = blogs.slice(0, 2);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-4xl md:text-4xl font-display font-bold text-black">Latest Insights & Updates</h2>

                    <Link href="/blogs">
                        <button className="bg-[#C2F32C] text-black font-bold py-3 px-8 rounded-full hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 text-sm flex items-center gap-2 group shadow-lg shadow-black/5">
                            View All
                            <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center transform -rotate-45 group-hover:rotate-0 group-hover:bg-[#C2F32C] group-hover:text-black transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                        </button>
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {posts.map((post, i) => (
                        <Link href={`/blogs/${post.slug}`} key={i} className="bg-[#F0FDF4] rounded-3xl p-6 flex flex-col md:flex-row gap-6 items-center md:items-start group cursor-pointer hover:shadow-lg transition-shadow duration-300">
                            {/* Image Left */}
                            <div className="relative w-full md:w-[45%] h-64 md:h-full min-h-[200px] rounded-2xl overflow-hidden shrink-0">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            {/* Content Right */}
                            <div className="flex-1 py-2">
                                <div className="flex items-center gap-2 text-xs font-bold text-gray-800 mb-3 uppercase tracking-wide">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                    </svg>
                                    {post.date}
                                </div>
                                <h3 className="text-xl md:text-2xl font-display font-bold mb-4 leading-tight text-black group-hover:text-[#062d16] transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {post.text}
                                </p>
                                <span className="text-sm font-bold underline decoration-black underline-offset-4 hover:text-[#C2F32C] hover:decoration-[#C2F32C] transition-all">
                                    Read More
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
