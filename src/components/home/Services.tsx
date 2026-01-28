import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
    // Images based on analysis (Clean Energy Services)
    // These map to "solar panels", "home batteries", "partner program", "heat pumps"
    const services = [
        {
            title: "High-Yield Solar Panels",
            // Corrected Path: /images/home/...
            image: "/images/home/5438ffa41a7b4e23aff65beb432228371508c1ab.png",
            link: "/services/solar-panels"
        },
        {
            title: "Smart Home Batteries",
            // Corrected Path: /Pure Planet Images/Home Page/...
            image: "/Pure Planet Images/Home Page/energy-storage-battery-packs-smart-garage-wall-as-backup-generated-from-solar-system.jpg",
            link: "/services/home-batteries"
        },
        {
            title: "Accredited Installer Program",
            // Corrected Path with spaces (Browser handles spaces in src usually, but good to be aware)
            image: "/Pure Planet Images/Home Page/solar-power-plant-engineer-standing-rooftop-with-laptop-checking-electricity-production - Copy.jpg",
            link: "/partner-program"
        },
        {
            title: "Hot Water Heat Pumps",
            // Corrected Path
            image: "/Pure Planet Images/Home Page/r-conditioning-fan-hvac-ventilation-fan-background.jpg",
            link: "/services/heat-pump"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="text-center mb-12">
                    <span className="text-sm font-bold text-black">Custom Solutions</span>
                    <h2 className="text-4xl md:text-4xl font-display font-medium text-black mt-4">Our Core Energy Services</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
                    {services.map((service, idx) => (
                        <Link key={idx} href={service.link} className="group relative h-[420px] overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-black">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover opacity-90 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                                />
                            </div>
                            {/* Strong Black Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                            {/* Content - Bottom Center */}
                            <div className="absolute bottom-8 left-0 w-full text-center px-4 z-10 translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">
                                <h3 className="text-2xl font-bold text-white tracking-wide">{service.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
