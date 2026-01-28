import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Thank You - Pure Planet | Energy Solutions",
    description: "Thank you for contacting Pure Planet. We'll get back to you soon!",
};

export default function ThankYouPage() {
    return (
        <main className="min-h-screen font-sans bg-gradient-to-br from-[#F9FFF4] via-white to-[#F9FFF4] text-secondary">
            <Navbar />

            {/* Thank You Section */}
            <section className="min-h-screen flex items-center justify-center px-6 py-32 pt-48 md:pt-56">
                <div className="max-w-4xl mx-auto">
                    {/* Success Icon - Animated */}
                    <div className="mb-10 text-center">
                        <div className="relative inline-flex">
                            {/* Pulsing ring effect */}
                            <div className="absolute inset-0 w-28 h-28 bg-[#C2F32C] rounded-full opacity-20 animate-ping"></div>
                            <div className="relative w-28 h-28 bg-gradient-to-br from-[#C2F32C] to-[#9BC91C] rounded-full flex items-center justify-center shadow-2xl shadow-[#C2F32C]/40">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={3.5}
                                    stroke="currentColor"
                                    className="w-14 h-14 text-[#062d16]"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="text-center mb-8">
                        <h1 className="text-6xl md:text-7xl font-display font-bold mb-4 text-[#062d16] tracking-tight">
                            Thank You!
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C2F32C] to-transparent mx-auto mb-6"></div>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
                            We've received your enquiry and our team will be in touch with you shortly.
                        </p>
                    </div>

                    {/* Info Cards Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
                        <div className="bg-white/80 backdrop-blur-sm border border-[#C2F32C]/30 rounded-3xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="bg-[#C2F32C]/20 rounded-2xl p-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-6 h-6 text-[#062d16]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#062d16] mb-1 text-lg">Check Your Email</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">Confirmation sent to your inbox</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm border border-[#C2F32C]/30 rounded-3xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="bg-[#C2F32C]/20 rounded-2xl p-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-6 h-6 text-[#062d16]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#062d16] mb-1 text-lg">Quick Response</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">We'll respond within 24 hours</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* What's Next Section */}
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-[#062d16] text-center">
                            What happens next?
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-[#C2F32C]/20 hover:border-[#C2F32C] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                                <div className="relative mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#C2F32C] to-[#9BC91C] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-3xl font-bold text-[#062d16]">1</span>
                                    </div>
                                </div>
                                <h3 className="font-bold text-xl mb-3 text-[#062d16]">Review</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Our team reviews your requirements and solar system preferences
                                </p>
                            </div>

                            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-[#C2F32C]/20 hover:border-[#C2F32C] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                                <div className="relative mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#C2F32C] to-[#9BC91C] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-3xl font-bold text-[#062d16]">2</span>
                                    </div>
                                </div>
                                <h3 className="font-bold text-xl mb-3 text-[#062d16]">Contact</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    We'll reach out to discuss your needs and schedule a consultation
                                </p>
                            </div>

                            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-[#C2F32C]/20 hover:border-[#C2F32C] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                                <div className="relative mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#C2F32C] to-[#9BC91C] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-3xl font-bold text-[#062d16]">3</span>
                                    </div>
                                </div>
                                <h3 className="font-bold text-xl mb-3 text-[#062d16]">Quote</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Receive a personalized quote for your solar energy solution
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
                        <Link
                            href="/"
                            className="group bg-gradient-to-r from-[#C2F32C] to-[#9BC91C] text-[#062d16] font-bold py-4 px-10 rounded-full hover:shadow-2xl hover:shadow-[#C2F32C]/40 hover:scale-105 transition-all duration-300 flex items-center gap-3 text-sm border-2 border-transparent"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                                stroke="currentColor"
                                className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                />
                            </svg>
                            Back to Home
                        </Link>

                        <Link
                            href="/services"
                            className="group bg-white/80 backdrop-blur-sm text-[#062d16] font-bold py-4 px-10 rounded-full hover:bg-[#062d16] hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 text-sm border-2 border-[#062d16]/20 hover:border-[#062d16]"
                        >
                            Explore Services
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                                stroke="currentColor"
                                className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                />
                            </svg>
                        </Link>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-8 pt-10 border-t border-[#C2F32C]/20">
                        <p className="text-gray-600 mb-6 text-center font-medium">
                            Have an urgent enquiry? Contact us directly:
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <a
                                href="tel:0450010419"
                                className="group flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-[#C2F32C]/30 rounded-full hover:bg-[#C2F32C] hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-lg"
                            >
                                <div className="bg-[#C2F32C]/20 group-hover:bg-white/30 p-2 rounded-full transition-colors duration-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-4 h-4 text-[#062d16]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                        />
                                    </svg>
                                </div>
                                <span className="font-bold text-[#062d16] text-sm">0450 010 419</span>
                            </a>

                            <a
                                href="mailto:info@pureplanet.net.au"
                                className="group flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-[#C2F32C]/30 rounded-full hover:bg-[#C2F32C] hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-lg"
                            >
                                <div className="bg-[#C2F32C]/20 group-hover:bg-white/30 p-2 rounded-full transition-colors duration-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-4 h-4 text-[#062d16]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                        />
                                    </svg>
                                </div>
                                <span className="font-bold text-[#062d16] text-sm">info@pureplanet.net.au</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
