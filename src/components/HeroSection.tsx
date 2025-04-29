import React from 'react';

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full bg-gradient-to-b from-[#e6d3c1] to-[#e8d4c3] overflow-hidden">
            {/* Background Stars */}
            <div className="absolute inset-0 z-0 bg-stars-pattern bg-repeat opacity-50"></div>

            {/* Club Name & Tagline */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="font-saint-pauline text-6xl md:text-9xl font-extralight text-[#4f3e37] tracking-wide">Sim Esprimere</h1>
                <p className="font-dream-avenue text-1xl md:text-4xl text-[#4f3e37]">Time to Take Centre Stage</p>
            </div>

            {/* Cloud Bottom Separator */}
            <div className="absolute bottom-0 w-full z-10">
                <img src="/cloud-divider.svg" alt="Cloud Divider" className="w-full h-auto" />
            </div>
        </section>
    );
}
