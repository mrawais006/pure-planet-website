import { Metadata } from 'next';
import Image from "next/image";
import Link from 'next/link';

import Navbar from "@/components/home/Navbar";
import PartnerContactSection from "@/components/partner-program/PartnerContactSection";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Partner Program - Pure Planet | Join Our Network",
    description: "Become a Pure Planet partner. We work with accredited installers and professionals to deliver high-quality solar energy solutions across Victoria.",
    alternates: {
        canonical: 'https://pureplanet.net.au/partner-program'
    }
};

export default function PartnerPage() {
    // Assets (Best-guess based on previous knowledge/filenames)
    const heroBg = "/images/home/00e0bb3995ee8488298be500605deb08548f253e.png";
    const whyPartnerImg = "/images/home/d535175eede21981e28b8074f87d9a594fc23a45.png"; // Solar roof image
    const processImg = "/images/home/c5838f5a17e776c9f5d9b06568da01155e0ca19e.png"; // Worker image

    // Battery Section Images
    const gallery1 = "/Pure Planet Images/Home Batteries/194657.jpg";
    const gallery2 = "/Pure Planet Images/Home Batteries/194114.jpg";
    const gallery3 = "/Pure Planet Images/Home Batteries/154.jpg";

    const professionalStandardsImg = "/Pure Planet Images/Partner Program/professional_installation_standards_1768670004258.png";

    return (
        <main className="min-h-screen font-sans bg-white text-secondary">
            <Navbar />

            {/* 1. Hero Section */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex items-center bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroBg}
                        alt="Solar Installer on Roof"
                        fill
                        className="object-cover opacity-60"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-16">
                    <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">Installer / Partner<br />Program</h1>
                    <p className="text-gray-300 max-w-lg mb-8 text-sm leading-relaxed">
                        Pure Planet partners with accredited professionals to deliver excellence in solar, battery, and heat pump installations.
                    </p>
                    <div className="flex flex-wrap items-center gap-6">
                        <button className="bg-primary text-secondary-dark font-bold py-3 px-8 rounded-full hover:bg-white transition-all duration-300 flex items-center gap-2 text-sm">
                            Become a Partner
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </button>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-secondary-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                            </div>
                            <div className="leading-tight text-white">
                                <span className="block text-xs font-bold uppercase text-gray-400">Talk To Our Team</span>
                                <span className="block font-bold">04 5001 0410</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* 2b. Why Partner With PurePlanet (New Layout) */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Image */}
                    <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
                        <Image
                            src="/solar-planet/Background-1.png"
                            alt="Solar Installer Team"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Right: Content */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-black leading-tight">Why Partner<br />With PurePlanet</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            Working with Pure Planet means more than just receiving jobs; it means becoming part of a dependable energy network backed by quality products, ethical practices, and local expertise.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Steady flow of residential & commercial installation projects",
                                "Competitive partner pricing and transparent margins",
                                "Access to premium solar, battery & heat pump systems",
                                "Dedicated partner support team based in Victoria",
                                "Marketing & lead generation support",
                                "Steady flow of residential & commercial installation projects"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-black flex-shrink-0 flex items-center justify-center text-white mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 font-medium text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>




            {/* 5. Our Installation Collaboration Process (New Design) */}
            <section className="py-24 bg-[#F2F7F2]">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-20 text-center text-black">
                        Our Installation Collaboration Process
                    </h2>

                    <div className="grid md:grid-cols-4 gap-4">
                        {/* Step 1 */}
                        <div className="bg-[#D9F99D] rounded-[2rem] p-10 flex flex-col items-center text-center">
                            <div className="mb-8">
                                <svg width="60" height="66" viewBox="0 0 80 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_147_8223)">
                                        <path d="M75.3125 25.7463H51.5625V16.3713C51.5625 13.7865 49.4598 11.6838 46.875 11.6838H4.6875C2.10266 11.6838 0 13.7865 0 16.3713V49.1838C0 51.7687 2.10266 53.8713 4.6875 53.8713H7.03186L7.03125 65.5901C7.03125 67.6799 9.55566 68.7084 11.0236 67.2557C25.3223 53.1078 24.4232 54.0056 24.5355 53.8713H28.4375V63.2463C28.4375 65.8312 30.5402 67.9338 33.125 67.9338L55.4651 67.9344C55.5756 68.0669 54.6771 67.1691 68.9764 81.3182C70.4462 82.7721 72.9688 81.7369 72.9688 79.6526L72.9681 67.9338H75.3125C77.8973 67.9338 80 65.8312 80 63.2463V30.4338C80 27.849 77.8973 25.7463 75.3125 25.7463ZM21.0199 50.7708L11.7194 59.9736V53.8713C11.7194 51.2865 9.6167 49.1838 7.03186 49.1838H4.6875V16.3713H46.875L46.8781 49.1838C46.8768 49.1838 24.5367 49.1838 24.5355 49.1838C23.1842 49.1838 21.9104 49.7606 21.0199 50.7708ZM75.3125 63.2463H72.9681C70.3833 63.2463 68.2806 65.349 68.2806 67.9344V74.0361L58.9801 64.8333C58.0896 63.8231 56.8158 63.2463 55.4651 63.2463H33.125V53.8713H46.875C49.4598 53.8713 51.5625 51.7687 51.5625 49.1838V30.4338H75.3125V63.2463Z" fill="black" />
                                        <path d="M11.7188 30.4338H30.4688C31.7633 30.4338 32.8125 29.3846 32.8125 28.0901C32.8125 26.7955 31.7633 25.7463 30.4688 25.7463H11.7188C10.4242 25.7463 9.375 26.7955 9.375 28.0901C9.375 29.3846 10.4242 30.4338 11.7188 30.4338Z" fill="black" />
                                        <path d="M39.8438 35.1213H11.7188C10.4242 35.1213 9.375 36.1705 9.375 37.4651C9.375 38.7596 10.4242 39.8088 11.7188 39.8088H39.8438C41.1383 39.8088 42.1875 38.7596 42.1875 37.4651C42.1875 36.1705 41.1383 35.1213 39.8438 35.1213Z" fill="black" />
                                        <path d="M42.1875 28.0901C42.1875 29.3846 41.1383 30.4338 39.8438 30.4338C38.5492 30.4338 37.5 29.3846 37.5 28.0901C37.5 26.7955 38.5492 25.7463 39.8438 25.7463C41.1383 25.7463 42.1875 26.7955 42.1875 28.0901Z" fill="black" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_147_8223">
                                            <rect width="80" height="80" fill="white" transform="translate(0 6.84009)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <p className="text-gray-900 font-bold leading-tight">
                                You receive project details, system specifications, and timelines upfront.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="p-10 flex flex-col items-center text-center">
                            <div className="mb-8">
                                <svg width="60" height="66" viewBox="0 0 80 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M53.12 59.8C54.4 57.56 55.12 54.92 55.12 52.12C55.12 43.56 48.08 36.52 39.52 36.6C30.96 36.6 24 43.64 24 52.2C24 60.76 31.04 67.8 39.6 67.72C42.8 67.72 45.76 66.76 48.24 65.08L57.52 74.28C58.24 75 59.12 75.32 60.08 75.32C60.96 75.32 61.92 75 62.64 74.28C64.08 72.84 64 70.6 62.64 69.16L53.12 59.8ZM39.6 63C33.68 63 28.8 58.2 28.8 52.2C28.8 46.28 33.6 41.4 39.6 41.4C45.52 41.4 50.4 46.2 50.4 52.2C50.4 58.12 45.52 63 39.6 63Z" fill="#161616" />
                                    <path d="M76.24 19.0001C75.6 18.6001 74.96 18.4401 74.24 18.4401C73.68 18.4401 73.04 18.6001 72.56 18.8401L57.12 26.7601L41.68 18.7601C41.12 18.4401 40.56 18.3601 39.92 18.3601C39.36 18.3601 38.72 18.5201 38.16 18.7601L22.88 26.7601L7.44 18.7601C6.88 18.4401 6.32 18.3601 5.68 18.3601C4.96 18.3601 4.32 18.5201 3.76 18.9201C2.64 19.6401 2 20.8401 2 22.1201V62.6801C2 64.1201 2.72 65.4001 4 66.0401L21.2 74.9201C21.76 75.2401 22.32 75.3201 22.96 75.3201C23.44 75.3201 23.92 75.2401 24.4 75.0001L32.48 70.8401C31.04 70.2801 29.68 69.5601 28.4 68.6801L24.56 70.6801H24.48V65.1601C22.8 63.2401 21.52 61.0001 20.72 58.5201V70.3601L5.76 62.6801V22.1201L20.72 29.8801V45.8001C21.52 43.3201 22.88 41.0801 24.48 39.1601V30.2001L39.84 22.1201L54.88 29.8801V39.5601C56.64 41.7201 57.92 44.1201 58.64 46.8401V30.1201L74.08 22.2001V62.8401L66.24 66.8401C67.04 67.8801 67.6 69.0801 67.84 70.2801L76 66.2001C77.28 65.5601 78 64.2801 78 62.8401V22.2001C78 20.9201 77.36 19.7201 76.24 19.0001Z" fill="#161616" />
                                </svg>
                            </div>
                            <p className="text-gray-900 font-bold leading-tight">
                                Carry out installations according to CEC standards and Pure Planet quality guidelines.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="p-10 flex flex-col items-center text-center">
                            <div className="mb-8">
                                <svg width="60" height="66" viewBox="0 0 80 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M65.3336 64.1729C62.6016 64.1729 60.26 65.8193 59.2288 68.1729H47.5104C46.4088 65.0713 43.4792 62.8401 40 62.8401C36.5208 62.8401 33.5936 65.0713 32.4896 68.1729H20.7712C19.74 65.8193 17.3984 64.1729 14.6664 64.1729C10.984 64.1729 8 67.1569 8 70.8425C8 74.5225 10.984 77.5065 14.6664 77.5065C17.4008 77.5065 19.7424 75.8577 20.7712 73.5065H32.4896C33.5912 76.6057 36.5208 78.8401 40 78.8401C43.4792 78.8401 46.4088 76.6057 47.5104 73.5065H59.2288C60.2576 75.8577 62.5992 77.5065 65.3336 77.5065C69.016 77.5065 72 74.5225 72 70.8425C72 67.1569 69.016 64.1729 65.3336 64.1729ZM40 73.5065C38.5256 73.5065 37.3336 72.3137 37.3336 70.8401C37.3336 69.3657 38.5256 68.1729 40 68.1729C41.4744 68.1729 42.6664 69.3657 42.6664 70.8401C42.6664 72.3137 41.4744 73.5065 40 73.5065Z" fill="black" />
                                    <path d="M40.0004 14.8401C29.6956 14.8401 21.334 23.1921 21.334 33.5065C21.334 38.6569 23.422 43.3233 26.8028 46.7041L40.0004 58.8393L53.2012 46.7001C56.5812 43.3233 58.67 38.6569 58.6668 33.5025C58.6668 23.2017 50.3108 14.8401 40.0004 14.8401ZM49.4324 42.9265L40.0004 51.5945L30.4124 42.7785C28.0556 40.4145 26.6668 37.0657 26.6668 33.5065C26.6668 26.1553 32.6492 20.1729 40.0004 20.1729C47.3516 20.1729 53.334 26.1521 53.334 33.5025C53.3364 37.0657 51.9508 40.4113 49.4324 42.9265Z" fill="black" />
                                    <path d="M40 25.5066C35.5832 25.5066 32 29.089 32 33.5066C32 37.9242 35.5832 41.5066 40 41.5066C44.4192 41.5066 48 37.9242 48 33.5066C48 29.089 44.4192 25.5066 40 25.5066ZM40 36.173C38.5256 36.173 37.3336 34.9794 37.3336 33.5066C37.3336 32.0338 38.5256 30.8394 40 30.8394C41.4744 30.8394 42.6664 32.0338 42.6664 33.5066C42.6664 34.9794 41.4744 36.173 40 36.173Z" fill="black" />
                                </svg>
                            </div>
                            <p className="text-gray-900 font-bold leading-tight">
                                We assist with documentation, approvals, and customer handover for a smooth finish.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="p-10 flex flex-col items-center text-center">
                            <div className="mb-8">
                                <svg width="60" height="66" viewBox="0 0 80 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M49.685 16.8212H60C61.99 16.8212 63.8975 17.6103 65.3025 19.0179C66.71 20.4232 67.5 22.3315 67.5 24.3205V74.3148C67.5 76.3039 66.71 78.2122 65.3025 79.6175C63.8975 81.025 61.99 81.8142 60 81.8142H20C18.01 81.8142 16.1025 81.025 14.6975 79.6175C13.29 78.2122 12.5 76.3039 12.5 74.3148V24.3205C12.5 22.3315 13.29 20.4232 14.6975 19.0179C16.1025 17.6103 18.01 16.8212 20 16.8212H30.315C31.4275 12.5107 35.345 9.32178 40 9.32178C44.655 9.32178 48.5725 12.5107 49.685 16.8212ZM30.315 21.8192H20C19.3375 21.8192 18.7 22.0823 18.2325 22.553C17.7625 23.0214 17.5 23.656 17.5 24.3205V74.3148C17.5 74.9794 17.7625 75.6139 18.2325 76.0824C18.7 76.5531 19.3375 76.8162 20 76.8162H60C60.6625 76.8162 61.3 76.5531 61.7675 76.0824C62.2375 75.6139 62.5 74.9794 62.5 74.3148V24.3205C62.5 23.656 62.2375 23.0214 61.7675 22.553C61.3 22.0823 60.6625 21.8192 60 21.8192H49.685C48.5725 26.1296 44.655 29.3186 40 29.3186C35.345 29.3186 31.4275 26.1296 30.315 21.8192ZM23.6125 40.1477C22.465 39.3839 22.155 37.8309 22.92 36.6818C23.685 35.535 25.2375 35.2235 26.3875 35.9896L28.2675 37.2425L33.08 31.4692C33.9625 30.4077 35.54 30.2646 36.6 31.1484C37.66 32.0322 37.805 33.6105 36.92 34.6697L30.67 42.169C29.8525 43.1497 28.4275 43.3574 27.3625 42.649L23.6125 40.1477ZM42.5 54.318C41.12 54.318 40 53.1966 40 51.8167C40 50.4368 41.12 49.3177 42.5 49.3177H55C56.38 49.3177 57.5 50.4368 57.5 51.8167C57.5 53.1966 56.38 54.318 55 54.318H42.5ZM42.5 69.3168C41.12 69.3168 40 68.1953 40 66.8155C40 65.4356 41.12 64.3164 42.5 64.3164H55C56.38 64.3164 57.5 65.4356 57.5 66.8155C57.5 68.1953 56.38 69.3168 55 69.3168H42.5ZM42.5 39.3193C41.12 39.3193 40 38.1978 40 36.8179C40 35.4381 41.12 34.3189 42.5 34.3189H55C56.38 34.3189 57.5 35.4381 57.5 36.8179C57.5 38.1978 56.38 39.3193 55 39.3193H42.5ZM23.6125 55.1464C22.465 54.3826 22.155 52.8297 22.92 51.6806C23.685 50.5337 25.2375 50.2222 26.3875 50.9883L28.2675 52.2413L33.08 46.4679C33.9625 45.4065 35.54 45.2634 36.6 46.1472C37.66 47.0309 37.805 48.6093 36.92 49.6684L30.67 57.1678C29.8525 58.1485 28.4275 58.3562 27.3625 57.6478L23.6125 55.1464ZM23.6125 70.1452C22.465 69.3814 22.155 67.8284 22.92 66.6793C23.685 65.5325 25.2375 65.221 26.3875 65.9871L28.2675 67.24L33.08 61.4667C33.9625 60.4052 35.54 60.2621 36.6 61.1459C37.66 62.0297 37.805 63.608 36.92 64.6672L30.67 72.1665C29.8525 73.1472 28.4275 73.3549 27.3625 72.6465L23.6125 70.1452ZM44.33 16.8212C43.465 15.3259 41.85 14.3198 40 14.3198C38.15 14.3198 36.535 15.3259 35.67 16.8212C35.245 17.5549 35 18.4087 35 19.3202C35 20.2316 35.245 21.0854 35.67 21.8192C36.535 23.3145 38.15 24.3205 40 24.3205C41.85 24.3205 43.465 23.3145 44.33 21.8192C44.755 21.0854 45 20.2316 45 19.3202C45 18.4087 44.755 17.5549 44.33 16.8212Z" fill="black" />
                                </svg>
                            </div>
                            <p className="text-gray-900 font-bold leading-tight">
                                Strong performers receive priority access to future projects and expanded work scopes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Professional Installation Standards */}
            <section className="relative py-24 bg-white overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl order-2 lg:order-1">
                        <Image
                            src={professionalStandardsImg}
                            alt="Professional Standards"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-black leading-tight">Professional Installation Standards</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            We uphold the highest industry benchmarks to protect customers, partners, and the future of renewable energy.
                        </p>

                        <div className="bg-gray-50 p-8 rounded-3xl mb-8">
                            <ul className="space-y-4">
                                {[
                                    "CEC compliance required",
                                    "Licensed and insured installers only",
                                    "Clean, professional workmanship",
                                    "Customer-first communication",
                                    "Safety and regulatory adherence"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4">
                                        <span className="w-5 h-5 rounded-full bg-[#C2F32C] flex items-center justify-center text-black text-xs font-bold">✓</span>
                                        <span className="text-gray-800 font-bold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="font-bold text-black text-xl italic">
                            "This commitment protects your reputation as much as ours."
                        </p>
                    </div>
                </div>
            </section>

            {/* 7. Contact Form & FAQ Split */}
            <PartnerContactSection />



            <Footer />
        </main >
    );
}
