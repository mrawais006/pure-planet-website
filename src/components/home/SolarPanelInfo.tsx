import Image from "next/image";
import React from "react";

const SolarPanelInfo = () => {
    return (
        <section className="py-16 md:py-24 bg-[#F2F8F2]">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-24">

                {/* Commercial Solar Panels */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                    <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/Pure Planet Images/Solar Panels/commercial_solar_panels.png"
                            alt="Commercial Solar Panels"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black tracking-tight">
                            Commercial Solar Panels
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Seeking a dependable commercial solar system? Our team of experts is ready to
                            guide you in choosing the right solar solution tailored to your business needs, helping
                            you save on energy costs while supporting a greener future.
                        </p>
                    </div>
                </div>

                {/* Residential Solar Panels */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black tracking-tight">
                            Residential Solar Panels
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Switch to solar and take control of your home's energy use. Our residential solar
                            systems help you reduce your electricity bills, run your home more efficiently, and
                            make a positive impact on the environment.
                        </p>
                    </div>
                    <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg order-1 md:order-2">
                        <Image
                            src="/Pure Planet Images/Solar Panels/residential_solar_panels.png"
                            alt="Residential Solar Panels"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SolarPanelInfo;
