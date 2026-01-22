import Navbar from "@/components/home/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicy() {
    return (
        <main className="bg-white min-h-screen flex flex-col">
            <Navbar />

            <section className="flex-grow pt-48 pb-32 px-6 md:px-12 max-w-[1000px] mx-auto w-full">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-12 text-black">Privacy Policy</h1>

                <div className="prose prose-lg text-gray-600">
                    <p>At Pure Planet, we are committed to maintaining the trust and confidence of our visitors to our web site. In particular, we want you to know that Pure Planet is not in the business of selling, renting or trading email lists with other companies and businesses for marketing purposes.</p>

                    <h3 className="text-black font-bold mt-8 mb-4">Information We Collect</h3>
                    <p>We collect personal information when you request a quote, subscribe to our newsletter, or use our contact form. This usually includes your name, email address, phone number, and property details relevant to solar installation.</p>

                    <h3 className="text-black font-bold mt-8 mb-4">How We Use Your Information</h3>
                    <p>We use your information to provide quotes, detailed solar proposals, and to communicate with you about our services. If you have subscribed to our newsletter, we use your email to send you updates and energy-saving tips.</p>

                    <h3 className="text-black font-bold mt-8 mb-4">Security</h3>
                    <p>We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.</p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
