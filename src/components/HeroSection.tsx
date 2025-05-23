import React from 'react';

export default function HeroSection() {
    return (
        <section className="relative h-[110vh] md:h-[115vh] w-full bg-gradient-to-b from-[var(--color-cream-1)] to-[var(--color-brown-3)]">
            {/* Background Stars */}
            <div className="absolute inset-0 z-0 bg-stars-pattern bg-repeat opacity-50"></div>

            {/* Club Name & Tagline */}
            <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center px-4">
                <h1 className="whitespace-nowrap font-saint-pauline text-6xl md:text-[10rem] font-extralight text-[var(--color-brown-1)] tracking-wide">
                    Sim Esprimere
                </h1>
                <p className="font-dream-avenue text-1xl md:text-5xl text-[var(--color-brown-1)] -mt-4">
                    Time to Take Centre Stage
                </p>
            </div>

            {/* Mobile version */}
            <img
                src="/image/vision_mission_cloud_phone.svg"
                alt="Combined Clouds Mobile"
                className="w-w-full h-full absolute top-[110vh] translate-y-[-50%] z-20 md:hidden"
            />

            {/* Desktop version */}
            <img
                src="/image/vision_mission_cloud_web.svg"
                alt="Combined Clouds Desktop"
                className="w-full h-full absolute top-[115vh] translate-y-[-50%] z-20 hidden md:block"
            />
        </section>
    );
}
