import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/layout/Footer";
import { blogs } from "@/data/blogs";

// Generate static params for all blogs
export async function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogs.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    // Find next post for navigation
    const currentIndex = blogs.findIndex((p) => p.slug === slug);
    const nextPost = blogs[(currentIndex + 1) % blogs.length];

    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex items-end">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                <div className="relative z-10 max-w-[800px] mx-auto px-6 md:px-12 w-full pb-20 text-center">
                    <div className="inline-block bg-[#C2F32C] text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                        {post.category}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex justify-center items-center gap-4 text-white/80 text-sm font-medium">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>5 Min Read</span>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24">
                <div className="max-w-[800px] mx-auto px-6 md:px-12">
                    {/* Article Content */}
                    <div
                        className="prose prose-lg prose-headings:font-display prose-headings:font-bold prose-a:text-[#062d16] prose-strong:text-black text-gray-600 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.text}</p>` }}
                    />

                    {/* Share / Tags Placeholder */}
                    <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
                        <span className="font-bold text-black">Share this article</span>
                        <div className="flex gap-4">
                            {/* Simple Social Placeholders */}
                            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#C2F32C] transition-colors cursor-pointer">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                            </div>
                            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#C2F32C] transition-colors cursor-pointer">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Read Next */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="flex justify-between items-center mb-12">
                        <h3 className="text-3xl font-display font-medium text-black">Read Next</h3>
                        <Link href="/blogs" className="text-gray-500 hover:text-black font-bold transition-colors">View All Articles</Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="group cursor-pointer">
                            <Link href={`/blogs/${nextPost.slug}`}>
                                <div className="relative h-[300px] rounded-3xl overflow-hidden mb-6">
                                    <Image
                                        src={nextPost.image}
                                        alt={nextPost.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition duration-500"
                                    />
                                    <div className="absolute top-6 left-6 bg-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                                        {nextPost.category}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-display font-bold mb-3">{nextPost.title}</h3>
                                <p className="text-gray-600 line-clamp-2">{nextPost.text}</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
