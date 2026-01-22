import { Metadata } from 'next';
import Image from "next/image";
import Link from 'next/link';

import Navbar from "@/components/home/Navbar";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/components/home/Testimonials";
import HighEfficiencySection from "@/components/services/HighEfficiencySection";
import FAQ from "@/components/shared/FAQ";

export const metadata: Metadata = {
    title: "Solar Panel Solutions | Pure Planet",
    description: "Generate clean energy with our high-efficiency solar panel solutions. Professional installation for residential and commercial properties.",
    alternates: {
        canonical: 'https://pureplanet.net.au/services/solar-panels'
    }
};

export default function SolarPanelsPage() {
    // Assets (Using placeholders from existing assets as specific ones weren't fetched due to 429)
    const heroBg = "/images/home/00e0bb3995ee8488298be500605deb08548f253e.png";
    const solarRoof = "/Pure Planet Images/Solar Panels/solar-panel-is-set-up-farm - Copy.jpg"; // Placeholder for roof solar
    const workerImg = "/Pure Planet Images/Solar Panels/service-details-1-01.jpg.png"; // Placeholder for worker
    const installImg = "/images/home/33aff140cdc213167a87fe899ae190714c29a9ed.png"; // Placeholder for installation
    const detailsImg = "/Pure Planet Images/Solar Panels/technicians-installing-solar-panels-suburban-rooftop.jpg";
    const residentialImg = "/Pure Planet Images/Solar Panels/residential_solar_panels.png";
    const commercialImg = "/Pure Planet Images/Solar Panels/commercial_solar_panels.png";
    const solarRebatesImg = "/Pure Planet Images/Solar Panels/solar_rebates.png";
    const safetyImg = "/Pure Planet Images/Solar Panels/solar_safety.png";
    const qualityImg = "/Pure Planet Images/Solar Panels/solar_components.png";


    return (
        <main className="min-h-screen font-sans bg-white text-secondary">
            <Navbar />

            {/* 1. Hero Section */}
            <section className="relative w-full h-[50vh] min-h-[400px] flex items-center bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroBg}
                        alt="Solar Panels"
                        fill
                        className="object-cover opacity-60"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-16">
                    <div className="text-gray-300 text-xs font-bold tracking-widest uppercase mb-4">
                        <Link href="/" className="hover:text-white transition">Home</Link> — <span className="text-primary">Services</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-display font-bold text-white">Solar Panels</h1>
                    <p className="text-gray-300 mt-4 text-sm font-medium">Power your home naturally</p>
                </div>
            </section>

            {/* 2. Intro Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src={solarRoof}
                            alt="Solar Panels on Roof"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <span className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-2 block">Commercial & Residential Solar Panels Melbourne</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                            Smarter Solar Solutions <br /> For Melbourne Homes
                        </h2>
                        <p className="text-gray-500 mb-6 text-sm leading-relaxed text-justify">
                            Pure Planet provides reliable solar panel solutions designed for residential properties across Victoria. Our team manages the process from consultation to installation using certified professionals, power traffic warning signs. Larger turbines can be used for making contributions to a domestic power supply while selling unused power back to the utility supplier via the electrical grid. Arrays of large turbines, known as wind farms, are becoming an increasingly important source of intermittent renewable energy and are used by many countries as part of a strategy to reduce their reliance on fossil fuels.
                        </p>
                        <p className="text-gray-500 mb-12 text-sm leading-relaxed text-justify">
                            One assessment claimed that, as of 2009, wind had the "lowest relative greenhouse gas emissions, the least water consumption demands and... the most favourable social impacts" compared to photovoltaic, hydro, geothermal, coal and gas.
                        </p>

                        <div className="flex flex-wrap items-center gap-8">
                            {/* Contact Button */}
                            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#C2F32C] text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-black hover:text-white transition-all duration-300 group">
                                Contact Now
                                <span className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </span>
                            </Link>

                            {/* Phone Section */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#C2F32C] rounded-full flex items-center justify-center shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-black">
                                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-black font-bold text-sm leading-tight">Talk To Us</span>
                                    <span className="text-gray-600 text-sm">04 5001 0419</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Feature Banner Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="relative w-full h-[500px] rounded-[3rem] overflow-hidden shadow-2xl mb-12">
                        <Image src="/solar-planet/service-details-1-01.jpg.png" alt="Solar Technician" fill className="object-cover" />
                    </div>

                    <div className="max-w-7xl mx-auto">
                        <p className="text-gray-500 mb-8 leading-relaxed text-justify">
                            Vitae lacus mi interdum orci libero mollis vivamus mattis. vehicula a erat. Phasellus ac sem sed erat pos se quam dignissim. Mauris feugiat, nisi nec dapibusasas a gas dictum, ligula nulla gravida ante, non aliquet odio elit ac orci. Curabitinc Nunc eu rhoncus justo, nec mattis risus auris conse quat viverra sapien id lobortis. Vivamus auctor turpis vel dignissim licitudin. Etiam vitae posuere est. Donec gravida facilisis purus, eget bibendum neque varius ac. Nullaul lamcorper, sem viverra dignissim bibend elit tellus consequat lectus, et interdum ipsum nulla in odio. Nullam gravida turpis eu mi sodales porta. Aliquam erat volutpat.
                        </p>
                        <p className="text-gray-500 leading-relaxed text-justify">
                            At magnis sollicitudin augue class class nullam quis, condimentum nunc vitae commodo aliquam. Cras eget arcu convallis, tincidunt erat non, accumsan. In sed lectus vel lacus porttitor ultricies. netus et malesuada fames ac turpis egestas. Curabitur eu gravida nunc. Cras commodo dui dictum urna hendrerit aliquam.
                        </p>
                    </div>
                </div>
            </section>



            {/* 4. Details Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-2 block">Smart Investment</span>
                        <h3 className="text-3xl font-bold font-display mb-6">Why Choose Solar Panels for Your Home?</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Installing solar panels is one of the smartest investments Melbourne homeowners can make. With abundant sunlight and strong government support, solar energy offers both financial and environmental benefits.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Lower electricity bills from day one",
                                "Protection against rising energy costs",
                                "Reduced reliance on the grid",
                                "Increased property value",
                                "Environmentally responsible energy solution"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 font-bold text-xs text-gray-700">
                                    <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px]">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            PurePlanet makes the transition to solar simple, transparent, and stress-free.
                        </p>
                    </div>
                    <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
                        <Image src={detailsImg} alt="Solar Installation Team" fill className="object-cover" />
                    </div>
                </div>
            </section>

            {/* 3b. Installation Process Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1500px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <span className="text-black font-bold text-sm uppercase tracking-wide block mb-3">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-6">Our Solar Installation Process</h2>
                        <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                            We follow a structured and compliant installation process to ensure safety, optimal performance, and long-term reliability.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            {
                                title: "Free Consultation & Energy Assessment",
                                desc: "Our team of experts assess your energy usage, roof space, and goals.",
                                icon: (
                                    <svg width="80" height="87" viewBox="0 0 80 87" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
                                        <path d="M75.3125 25.7463H51.5625V16.3713C51.5625 13.7865 49.4598 11.6838 46.875 11.6838H4.6875C2.10266 11.6838 0 13.7865 0 16.3713V49.1838C0 51.7687 2.10266 53.8713 4.6875 53.8713H7.03186L7.03125 65.5901C7.03125 67.6799 9.55566 68.7084 11.0236 67.2557C25.3223 53.1078 24.4232 54.0056 24.5355 53.8713H28.4375V63.2463C28.4375 65.8312 30.5402 67.9338 33.125 67.9338L55.4651 67.9344C55.5756 68.0669 54.6771 67.1691 68.9764 81.3182C70.4462 82.7721 72.9688 81.7369 72.9688 79.6526L72.9681 67.9338H75.3125C77.8973 67.9338 80 65.8312 80 63.2463V30.4338C80 27.849 77.8973 25.7463 75.3125 25.7463ZM21.0199 50.7708L11.7194 59.9736V53.8713C11.7194 51.2865 9.6167 49.1838 7.03186 49.1838H4.6875V16.3713H46.875L46.8781 49.1838C46.8768 49.1838 24.5367 49.1838 24.5355 49.1838C23.1842 49.1838 21.9104 49.7606 21.0199 50.7708ZM75.3125 63.2463H72.9681C70.3833 63.2463 68.2806 65.349 68.2806 67.9344V74.0361L58.9801 64.8333C58.0896 63.8231 56.8158 63.2463 55.4651 63.2463H33.125V53.8713H46.875C49.4598 53.8713 51.5625 51.7687 51.5625 49.1838V30.4338H75.3125V63.2463Z" fill="currentColor" />
                                        <path d="M11.7188 30.4338H30.4688C31.7633 30.4338 32.8125 29.3846 32.8125 28.0901C32.8125 26.7955 31.7633 25.7463 30.4688 25.7463H11.7188C10.4242 25.7463 9.375 26.7955 9.375 28.0901C9.375 29.3846 10.4242 30.4338 11.7188 30.4338Z" fill="currentColor" />
                                        <path d="M39.8438 35.1213H11.7188C10.4242 35.1213 9.375 36.1705 9.375 37.4651C9.375 38.7596 10.4242 39.8088 11.7188 39.8088H39.8438C41.1383 39.8088 42.1875 38.7596 42.1875 37.4651C42.1875 36.1705 41.1383 35.1213 39.8438 35.1213Z" fill="currentColor" />
                                        <path d="M42.1875 28.0901C42.1875 29.3846 41.1383 30.4338 39.8438 30.4338C38.5492 30.4338 37.5 29.3846 37.5 28.0901C37.5 26.7955 38.5492 25.7463 39.8438 25.7463C41.1383 25.7463 42.1875 26.7955 42.1875 28.0901Z" fill="currentColor" />
                                    </svg>
                                )
                            },
                            {
                                title: "Custom System Design",
                                desc: "Your solar system is designed for maximum efficiency and future scalability.",
                                icon: (
                                    <svg width="80" height="87" viewBox="0 0 80 87" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
                                        <g clipPath="url(#clip0_315_4319)">
                                            <path d="M18.553 18.7108C19.0685 19.5479 19.9632 20.009 20.8791 20.009C21.3673 20.009 21.8617 19.8778 22.3077 19.6032C23.5909 18.8127 23.9905 17.1317 23.2 15.8485L21.1515 12.5227C20.3611 11.2394 18.6799 10.8401 17.3968 11.6303C16.1135 12.4208 15.714 14.1018 16.5044 15.385L18.553 18.7108Z" fill="currentColor" />
                                            <path d="M9.18704 53.6418L5.72464 55.5538C4.40531 56.2824 3.92638 57.9426 4.65509 59.2619C5.15275 60.163 6.08489 60.6722 7.04644 60.6722C7.49255 60.6722 7.94495 60.5626 8.36317 60.3316L11.8256 58.4196C13.1449 57.691 13.6238 56.0308 12.8951 54.7115C12.1665 53.3922 10.5066 52.9132 9.18704 53.6418Z" fill="currentColor" />
                                            <path d="M34.9301 16.4611C36.4373 16.4611 37.659 15.2394 37.659 13.7322V9.63881C37.659 8.13163 36.4373 6.90991 34.9301 6.90991C33.4229 6.90991 32.2012 8.13163 32.2012 9.63881V13.7322C32.2012 15.2392 33.4229 16.4611 34.9301 16.4611Z" fill="currentColor" />
                                            <path d="M9.55129 41.8402C9.55129 40.333 8.32957 39.1113 6.82239 39.1113H2.7289C1.22172 39.1113 0 40.333 0 41.8402C0 43.3474 1.22172 44.5691 2.7289 44.5691H6.82225C8.32957 44.5693 9.55129 43.3476 9.55129 41.8402Z" fill="currentColor" />
                                            <path d="M32.4835 57.4804C32.3274 57.4561 32.1722 57.4298 32.0176 57.401C24.5342 56.0105 19.1025 49.4661 19.1025 41.8401C19.1025 33.989 24.9548 27.2504 32.7161 26.1656C32.9078 26.1386 33.1034 26.1151 33.2978 26.0952C34.7972 25.9418 35.8882 24.6022 35.7351 23.1027C35.5817 21.6034 34.2419 20.512 32.7426 20.6655C32.4813 20.6922 32.218 20.724 31.9602 20.7601C26.9214 21.4645 22.2907 23.9688 18.921 27.8118C15.5183 31.6923 13.6445 36.6742 13.6445 41.8401C13.6445 52.0952 20.9523 60.8963 31.0204 62.767C31.2261 62.8052 31.4368 62.8411 31.6461 62.8737C31.788 62.8958 31.9289 62.9065 32.0682 62.9065C33.3906 62.9063 34.5523 61.9432 34.7615 60.5958C34.9926 59.1064 33.9728 57.7117 32.4835 57.4804Z" fill="currentColor" />
                                            <path d="M69.425 37.0486C68.3856 34.7859 66.1634 33.3803 63.6255 33.3803H58.7198L69.5991 15.274C70.1057 14.431 70.1194 13.3806 69.6351 12.5247C69.1508 11.6689 68.2433 11.1396 67.26 11.1396H51.0311C50.06 11.1396 49.1622 11.6558 48.6733 12.4945L32.759 39.8038C32.7461 39.8258 32.7337 39.8478 32.7217 39.8702C31.323 42.4323 31.3774 45.4606 32.867 47.9708C34.3565 50.4811 36.9886 51.9798 39.9076 51.9798H42.5776L35.683 71.183C35.1496 72.4509 35.241 73.7868 35.9399 74.8673C36.7114 76.0603 38.1259 76.7707 39.727 76.7707C39.7342 76.7707 39.7413 76.7707 39.7484 76.7707C41.1084 76.7653 42.4229 76.2261 43.3551 75.2912C43.4375 75.2085 43.5146 75.1208 43.5859 75.0281L58.5017 55.6318C59.4205 54.437 59.1968 52.7237 58.002 51.8051C56.8072 50.8862 55.0939 51.1098 54.1753 52.3048L43.0794 66.7332L49.0251 50.1732C49.3253 49.3372 49.1997 48.4075 48.6886 47.6808C48.1774 46.9543 47.3449 46.522 46.4565 46.522H39.9072C38.5047 46.522 37.7988 45.5875 37.5603 45.1857C37.3236 44.787 36.8473 43.7328 37.4965 42.5137L52.5993 16.5976H62.4367L51.5574 34.704C51.0508 35.547 51.0371 36.5973 51.5214 37.4533C52.0057 38.3093 52.9132 38.8384 53.8965 38.8384H63.6255C64.1609 38.8384 64.3814 39.1445 64.4652 39.3269C64.5634 39.5405 64.6137 39.8723 64.2969 40.241C64.2901 40.2489 64.2834 40.2569 64.2767 40.2648L63.1563 41.5998C62.1874 42.7542 62.3379 44.4756 63.4923 45.4445C64.6468 46.4134 66.3681 46.2629 67.337 45.1084L68.4485 43.7841C70.0819 41.8726 70.4561 39.2937 69.425 37.0486Z" fill="currentColor" />
                                            <path d="M12.1368 24.6002L8.80577 22.6899C7.49846 21.9403 5.83063 22.3922 5.08087 23.6996C4.33111 25.007 4.7831 26.6747 6.09054 27.4245L9.42168 29.3347C9.84975 29.5801 10.3164 29.6969 10.7767 29.6969C11.7225 29.6968 12.6422 29.2043 13.1466 28.3251C13.8963 27.0176 13.4442 25.3499 12.1368 24.6002Z" fill="currentColor" />
                                            <path d="M21.4329 63.4978C20.1313 62.7385 18.4602 63.1775 17.7003 64.4792L15.7064 67.8954C14.9468 69.1971 15.3861 70.8682 16.6878 71.6279C17.1204 71.8803 17.5937 72.0005 18.0609 72.0005C18.9993 72.0005 19.913 71.5158 20.4203 70.6467L22.4142 67.2305C23.1739 65.9287 22.7346 64.2576 21.4329 63.4978Z" fill="currentColor" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_315_4319">
                                                <rect width="70" height="70" fill="white" transform="translate(0 6.84009)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                )
                            },
                            {
                                title: "Professional Installation",
                                desc: "Your solar panels are installed by NETCC-accredited electricians in Victoria.",
                                icon: (
                                    <svg width="80" height="87" viewBox="0 0 80 87" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
                                        <g clipPath="url(#clip0_315_4362)">
                                            <path d="M74.9388 68.081L69.47 46.206C69.2419 45.2931 68.4216 44.6526 67.4805 44.6526H12.5196C11.5785 44.6526 10.7582 45.2931 10.5301 46.206L5.0613 68.081C4.90804 68.6936 5.04572 69.3428 5.43441 69.8404C5.8231 70.3382 6.41933 70.6292 7.05083 70.6292H31.9201L30.1861 77.7385H26.3282C25.1956 77.7385 24.2774 78.6567 24.2774 79.7893C24.2774 80.9219 25.1956 81.8401 26.3282 81.8401H53.6719C54.8045 81.8401 55.7227 80.9219 55.7227 79.7893C55.7227 78.6567 54.8045 77.7385 53.6719 77.7385H49.8139L48.0799 70.6292H72.9493C73.5808 70.6292 74.177 70.3382 74.5657 69.8404C74.9544 69.3428 75.0921 68.6938 74.9388 68.081ZM42.0508 48.7542H51.93L52.7845 55.5901H42.0508V48.7542ZM28.0702 48.7542H37.9493V55.5901H27.2156L28.0702 48.7542ZM21.7152 66.5276H9.67747L11.3865 59.6917H22.5696L21.7152 66.5276ZM23.0823 55.5901H12.4118L14.1208 48.7542H23.9368L23.0823 55.5901ZM25.8486 66.5276L26.7031 59.6917H37.9493V66.5276H25.8486ZM34.4081 77.7385L36.1421 70.6292H43.8581L45.5921 77.7385H34.4081ZM42.0508 66.5276V59.6917H53.2972L54.1517 66.5276H42.0508ZM56.0633 48.7542H65.8793L67.5883 55.5901H56.9178L56.0633 48.7542ZM58.285 66.5276L57.4305 59.6917H68.6136L70.3226 66.5276H58.285Z" fill="currentColor" />
                                            <path d="M19.4922 36.4495H25.7985C25.9345 37.3718 26.1591 38.2864 26.477 39.1845C26.767 40.0035 27.5415 40.551 28.4104 40.551H51.5896C52.4584 40.551 53.233 40.0036 53.523 39.1845C53.8409 38.2864 54.0655 37.3716 54.2015 36.4495H60.5078C61.6404 36.4495 62.5586 35.5313 62.5586 34.3987C62.5586 33.2661 61.6404 32.3479 60.5078 32.3479H54.2084C53.8595 29.9194 52.9013 27.685 51.4929 25.806L55.9514 21.3476C56.7523 20.5469 56.7523 19.2483 55.9514 18.4474C55.1508 17.6467 53.8522 17.6465 53.0512 18.4474L48.5928 22.9058C46.7138 21.4975 44.4795 20.5392 42.0508 20.1903V13.8909C42.0508 12.7583 41.1326 11.8401 40 11.8401C38.8674 11.8401 37.9492 12.7583 37.9492 13.8909V20.1903C35.5207 20.5392 33.2863 21.4974 31.4074 22.9058L26.949 18.4474C26.1482 17.6465 24.8496 17.6465 24.0488 18.4474C23.2479 19.2483 23.2479 20.5467 24.0488 21.3476L28.5073 25.806C27.0989 27.685 26.1407 29.9194 25.7918 32.3479H19.4922C18.3596 32.3479 17.4414 33.2661 17.4414 34.3987C17.4414 35.5313 18.3596 36.4495 19.4922 36.4495ZM40 24.1448C45.654 24.1448 50.2539 28.7447 50.2539 34.3987C50.2539 35.0838 50.1823 35.7696 50.0402 36.4495H29.9599C29.8179 35.7696 29.7462 35.0838 29.7462 34.3987C29.7461 28.7447 34.346 24.1448 40 24.1448Z" fill="currentColor" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_315_4362">
                                                <rect width="70" height="70" fill="white" transform="translate(5 11.8401)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                )
                            },
                            {
                                title: "Testing & Handover",
                                desc: "Our team thoroughly test the system and guides you on its usage and monitoring.",
                                icon: (
                                    <svg width="80" height="87" viewBox="0 0 80 87" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
                                        <path d="M68.8477 14.0276H11.1523C7.76001 14.0276 5 16.7876 5 20.1799V61.1956C5 64.5879 7.76001 67.3479 11.1523 67.3479H28.9514L26.217 75.551H19.4922C18.3595 75.551 17.4414 76.4691 17.4414 77.6018C17.4414 78.7345 18.3595 79.6526 19.4922 79.6526H60.5078C61.6405 79.6526 62.5586 78.7345 62.5586 77.6018C62.5586 76.4691 61.6405 75.551 60.5078 75.551H53.783L51.0486 67.3479H68.8477C72.24 67.3479 75 64.5879 75 61.1956V20.1799C75 16.7876 72.24 14.0276 68.8477 14.0276ZM30.5408 75.551L33.2751 67.3479H46.7249L49.4592 75.551H30.5408ZM70.8984 61.1956C70.8984 62.3262 69.9783 63.2463 68.8477 63.2463C62.8892 63.2463 17.1728 63.2463 11.1523 63.2463C10.0217 63.2463 9.10156 62.3262 9.10156 61.1956V59.1448H70.8984V61.1956ZM27.3642 43.2566L25.4987 41.3916L28.3987 38.4912L30.2641 40.3566C30.9253 41.0178 31.9501 41.1481 32.756 40.6728C33.9085 39.9935 35.139 39.4813 36.4127 39.1513C37.3174 38.9173 37.9492 38.1008 37.9492 37.1662V34.5354H42.0508V37.1662C42.0508 38.1008 42.6826 38.9173 43.5873 39.1513C44.8605 39.4813 46.0909 39.9935 47.2434 40.6733C48.0493 41.1481 49.0742 41.0178 49.7353 40.3566L51.6008 38.4912L54.5013 41.3916L52.6358 43.2571C51.9746 43.9183 51.8443 44.9431 52.3196 45.7485C52.9995 46.9015 53.5111 48.132 53.8412 49.4052C54.0751 50.3099 54.8917 50.9417 55.8263 50.9417H58.457V55.0432H50.0467C50.1834 54.3714 50.2539 53.684 50.2539 52.9924C50.2539 47.3384 45.6541 42.7385 40 42.7385C34.3459 42.7385 29.7461 47.3384 29.7461 52.9924C29.7461 53.684 29.8166 54.3714 29.9533 55.0432H21.543V50.9417H24.1737C25.1083 50.9417 25.9249 50.3099 26.1594 49.4052C26.4889 48.132 27.001 46.9015 27.6804 45.7485C28.1551 44.9431 28.0254 43.9183 27.3642 43.2566ZM46.1523 52.9924C46.1523 53.6947 46.0306 54.3885 45.7999 55.0432H34.2001C33.9694 54.3885 33.8477 53.6947 33.8477 52.9924C33.8477 49.6001 36.6077 46.8401 40 46.8401C43.3923 46.8401 46.1523 49.6001 46.1523 52.9924ZM70.8984 55.0432H62.5586V48.8909C62.5586 47.7581 61.6405 46.8401 60.5078 46.8401H57.3398C57.1272 46.2441 56.8832 45.6582 56.6087 45.0841L58.8517 42.8416C59.6523 42.0405 59.6523 40.7422 58.8512 39.9411L53.0508 34.1407C52.6662 33.7562 52.1445 33.5405 51.6008 33.5405C51.0571 33.5405 50.5354 33.7562 50.1508 34.1407L47.9083 36.3838C47.3342 36.1093 46.7484 35.8652 46.1523 35.6532V32.4846C46.1523 31.3519 45.2343 30.4338 44.1016 30.4338H35.8984C34.7657 30.4338 33.8477 31.3519 33.8477 32.4846V35.6532C33.2516 35.8652 32.6658 36.1093 32.0917 36.3838L29.8492 34.1407C29.4646 33.7562 28.9429 33.5405 28.3992 33.5405C27.855 33.5405 27.3338 33.7562 26.9487 34.1407L21.1488 39.9411C20.3477 40.7422 20.3477 42.0405 21.1488 42.8416L23.3913 45.0846C23.1168 45.6582 22.8733 46.2441 22.6608 46.8401H19.4922C18.3595 46.8401 17.4414 47.7587 17.4414 48.8909V55.0432H9.10156V20.1799C9.10156 19.0493 10.0217 18.1292 11.1523 18.1292H68.8477C69.9783 18.1292 70.8984 19.0493 70.8984 20.1799V55.0432Z" fill="currentColor" />
                                    </svg>
                                )
                            },
                            {
                                title: "Ongoing Support",
                                desc: "Our solar company continues to support long-term performance.",
                                icon: (
                                    <svg width="80" height="87" viewBox="0 0 80 87" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
                                        <path d="M39.9978 62.2884C49.484 62.2884 57.2016 54.5725 57.2016 45.0883C57.1964 40.5271 55.3822 36.1542 52.157 32.929C48.9318 29.7038 44.5589 27.8896 39.9978 27.8844C30.5136 27.8844 22.7977 35.602 22.7977 45.0883C22.8051 49.4278 24.4461 53.6054 27.3942 56.7898L25.6151 63.427C25.51 63.8189 25.5236 64.2331 25.6539 64.6173C25.7843 65.0014 26.0258 65.3383 26.3476 65.5852C26.6695 65.8322 27.0574 65.9781 27.4623 66.0045C27.8671 66.031 28.2707 65.9367 28.6219 65.7338L35.5802 61.7131C37.0215 62.0959 38.5065 62.2893 39.9978 62.2884ZM34.2902 57.722L30.8597 59.7045L31.662 56.7117C31.7585 56.3519 31.7551 55.9727 31.6523 55.6147C31.5495 55.2567 31.3511 54.9334 31.0785 54.6796C29.7543 53.4587 28.6988 51.9754 27.9793 50.3242C27.2598 48.673 26.892 46.8901 26.8993 45.089C26.9002 42.3241 27.7764 39.6304 29.4022 37.394C31.028 35.1576 33.32 33.4932 35.9497 32.6394C38.5795 31.7855 41.412 31.786 44.0415 32.6407C46.671 33.4955 48.9624 35.1606 50.5874 37.3976C52.2125 39.6346 53.0877 42.3285 53.0878 45.0934C53.0878 47.8583 52.2126 50.5523 50.5876 52.7893C48.9627 55.0262 46.6713 56.6915 44.0418 57.5463C41.4124 58.4011 38.5798 58.4017 35.9501 57.5479C35.6767 57.4588 35.3876 57.4283 35.1016 57.4583C34.8157 57.4882 34.5392 57.5779 34.2902 57.7216V57.722Z" fill="currentColor" />
                                    </svg>
                                )
                            }
                        ].map((step, i) => (
                            <div key={i} className="bg-[#F4F9F4] rounded-xl p-8 flex flex-col items-center text-center gap-6 hover:shadow-lg transition-all duration-300">
                                <div className="text-black mb-2">
                                    {step.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-3 leading-tight text-black">{step.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed px-1">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3c. Custom Residential Solar Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1500px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-2xl group w-full">
                        <Image src="/solar-planet/Rectangle 11.png" alt="Residential Solar Installation" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-6 leading-tight">
                            Custom Residential <br /> Solar Panel Systems
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Every home is different, and so is every solar system we install. At PurePlanet, our team designs tailored residential solar systems that align with your household’s energy consumption and roof orientation.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            We handle everything, from system design and installation to compliance and rebate guidance, so you can enjoy peace of mind and consistent energy savings.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3d. Custom Commercial Solar Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1500px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-6 leading-tight">
                            Custom Commercial <br /> Solar Panel Systems
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            PurePlanet delivers tailored commercial solar solutions for Melbourne businesses, designed to reduce energy costs, improve efficiency, and support long-term sustainability. Our systems are professionally installed, fully compliant, and built to meet the unique demands of your operation.
                        </p>
                    </div>
                    <div className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-2xl group w-full order-1 lg:order-2">
                        <Image src="/solar-planet/Rectangle 12.png" alt="Commercial Solar Installation" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                </div>
            </section>





            {/* 7. Customers Review */}
            <Testimonials />



            {/* 8. High-Efficiency Products */}
            <HighEfficiencySection />

            {/* 9. FAQ */}
            <FAQ
                items={[
                    {
                        question: "How Do I Know If Solar Panels Are Right for My Melbourne Home?",
                        answer: "Most homes in Melbourne are suitable for solar panels. During our free consultation, we assess factors such as roof orientation, available space, shading, and your energy usage to determine the best system for your home."
                    },
                    {
                        question: "How Much Can I Save with Solar Panels in Victoria?",
                        answer: "Savings vary depending on system size and household energy usage, but many Victorian homeowners significantly reduce their electricity bills from the first month. With Solar Victoria rebates and interest-free loans, solar becomes even more cost-effective."
                    },
                    {
                        question: "How Long Does Solar Panel Installation Take?",
                        answer: "In most cases, residential solar panel installations are completed within one to two days, depending on the system size and site conditions. Our team ensures minimal disruption during the process."
                    },
                    {
                        question: "Are Your Solar Installations Compliant with Victorian Regulations?",
                        answer: "Yes. All PurePlanet solar installations are carried out by NETCC-accredited, licensed electricians and comply fully with Victorian and Australian safety and energy standards."
                    },
                    {
                        question: "What Type of Solar Panels Do You Use?",
                        answer: "We utilise Tier 1 monocrystalline solar panels, renowned for their efficiency, durability, and exceptional performance in Melbourne’s diverse weather conditions."
                    },
                    {
                        question: "Will Solar Panels Work on Cloudy or Winter Days?",
                        answer: "Yes. Solar panels continue to generate electricity even on cloudy days. While output may be reduced, Melbourne’s annual sunlight levels are well-suited for reliable solar performance year-round."
                    },
                    {
                        question: "Do You Help with Solar Rebates and Interest-Free Loans?",
                        answer: "Absolutely. We guide eligible homeowners through the Solar Victoria rebate and interest-free loan process, handling the paperwork and explaining each step clearly."
                    }
                ]}
            />

            {/* 10. CTA Section */}
            <section className="py-24 bg-primary">
                <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-black mb-6">Ready to Go Solar?</h2>
                    <p className="text-black/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                        Make the switch to clean, reliable energy with PurePlanet. Our team is ready to help you design the right solar solution for your Melbourne home.
                    </p>
                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-lg font-bold rounded-full hover:bg-white hover:text-black transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Get Your Free Solar Quote Today
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
