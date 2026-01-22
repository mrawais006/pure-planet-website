import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/layout/Footer";
import { blogs } from "@/data/blogs";

export default function BlogsPage() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            {/* Standardized Hero (Matching Other Pages) */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex items-center bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/home/c941ecc89f3dbe9baf5f1a90485a71e6093728c1.png"
                        alt="Solar Technology"
                        fill
                        className="object-cover opacity-60"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-20">
                    <div className="text-gray-300 text-sm font-bold tracking-widest uppercase mb-4">
                        <Link href="/" className="hover:text-white transition">Home</Link> — <span className="text-[#C2F32C]">News & Insights</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white">Our Latest News</h1>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-2 gap-8">
                        {blogs.map((post) => (
                            <Link href={`/blogs/${post.slug}`} key={post.id} className="bg-[#F0FDF4] rounded-3xl p-6 flex flex-col md:flex-row gap-6 items-center md:items-start group cursor-pointer hover:shadow-lg transition-shadow duration-300">
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
                                        <span className="text-[#C2F32C] bg-black px-2 py-0.5 rounded-full">{post.category}</span>
                                        <span>•</span>
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

            <Footer />
        </main>
    );
}
