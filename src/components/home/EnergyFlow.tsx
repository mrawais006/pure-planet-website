"use client";

import React from "react";

const EnergyFlow = () => {
    return (
        <section className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen max-h-[1000px] overflow-hidden bg-gray-900">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/video/260126maitiannengyuandianliudonghua.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
            {/* Overlay to ensure text readability if content is added later, 
                and to unify the look with the site theme if needed. 
                Currently transparent as requested "just play this video". */}
            <div className="absolute inset-0 bg-black/10"></div>
        </section>
    );
};

export default EnergyFlow;
