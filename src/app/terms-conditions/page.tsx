import Navbar from "@/components/home/Navbar";
import Footer from "@/components/layout/Footer";

export default function TermsConditions() {
    return (
        <main className="bg-white min-h-screen flex flex-col">
            <Navbar />

            <section className="flex-grow pt-48 pb-32 px-6 md:px-12 max-w-[1000px] mx-auto w-full">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-12 text-black">Terms & Conditions</h1>

                <div className="prose prose-lg text-gray-600">
                    <p>Welcome to Pure Planet. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.</p>

                    <h3 className="text-black font-bold mt-8 mb-4">1. Services</h3>
                    <p>Pure Planet provides solar energy solutions, including installation, maintenance, and consulting. All services are subject to availability and specific contract terms agreed upon during consultation.</p>

                    <h3 className="text-black font-bold mt-8 mb-4">2. Intellectual Property</h3>
                    <p>The content, organization, graphics, design, compilation, and other matters related to this Site are protected under applicable copyrights and trademarks.</p>

                    <h3 className="text-black font-bold mt-8 mb-4">3. Limitation of Liability</h3>
                    <p>Pure Planet shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this site or the performance of the products.</p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
