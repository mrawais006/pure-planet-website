import React from 'react';

export default function ContactInfo() {
    return (
        <div className="flex flex-col h-full justify-between">
            <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight text-[#062d16]">
                    Get In Touch With<br />Our Team
                </h2>
                <p className="text-gray-600 mb-12 leading-relaxed max-w-lg">
                    Get in touch with our team to discuss solar panels, home batteries, heat pumps, or general enquiries.
                    Our team is available to answer your questions and provide guidance on residential energy solutions across Victoria.
                </p>

                <div className="space-y-10">
                    {/* Row 1: Phone (Prominent) */}
                    <div className="phone-section">
                        <p className="text-sm text-gray-500 mb-2 uppercase tracking-wider font-bold">Call Our Team</p>
                        <a href="tel:0450010419" className="text-3xl md:text-4xl font-bold text-[#062d16] hover:text-[#062d16]/80 hover:underline decoration-4 underline-offset-4 decoration-[#C2F32C]">
                            0450 010 419
                        </a>
                        <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#C2F32C]"></span>
                            Mon - Friday 9-5
                        </p>
                    </div>

                    {/* Row 2: Address with Google Map */}
                    <div className="address-section">
                        <p className="text-sm text-gray-500 mb-2 uppercase tracking-wider font-bold">Visit Our Office</p>
                        <p className="text-[#062d16] font-medium text-lg mb-4 flex items-start gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#062d16] mt-1 shrink-0">
                                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                            11 Sant Court Ravenhall VIC 3023
                        </p>

                        {/* Embedded Google Map */}
                        <div className="mt-4 rounded-xl overflow-hidden shadow-lg border border-gray-100 h-[200px] w-full relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.5369795052926!2d144.7561!3d-37.7556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad68ad691c7849d%3A0x5045675218ce7e0!2sRavenhall%20VIC%203023%2C%20Australia!5e0!3m2!1sen!2sou!4v1700000000000!5m2!1sen!2sou"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>

                    {/* Row 3: Email */}
                    <div className="email-section">
                        <p className="text-sm text-gray-500 mb-2 uppercase tracking-wider font-bold">Email Us</p>
                        <a href="mailto:info@pureplanet.net.au" className="text-[#062d16] text-lg hover:text-[#C2F32C] transition-colors flex items-center gap-2 font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#C2F32C]">
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                            info@pureplanet.net.au
                        </a>
                    </div>
                </div>
            </div>

            {/* Row 5: Privacy Promise (Trust Builder) */}
            <div className="privacy-promise mt-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-sm text-gray-600 flex items-start gap-3">
                    <span className="text-2xl">🔒</span>
                    <span className="leading-relaxed">We respect your privacy. Your details are never sold to call centers. We are a local Victorian business.</span>
                </p>
            </div>
        </div>
    );
}
