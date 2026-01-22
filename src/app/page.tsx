import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Experience from "@/components/home/Experience";
import Services from "@/components/home/Services";
import SolarPanelInfo from "@/components/home/SolarPanelInfo";
import Partners from "@/components/home/Partners";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Projects from "@/components/home/Projects";
import Testimonials from "@/components/home/Testimonials";
import Blog from "@/components/home/Blog";
import FAQ from "@/components/home/FAQ";
import ContactExperts from "@/components/home/ContactExperts";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-white">
      <Navbar />
      <Hero />
      <Experience />
      <Services />
      <SolarPanelInfo />
      <Projects />
      <Partners />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
      <FAQ />
      <ContactExperts />
      <Footer />
    </main>
  );
}
