'use client';

import React from 'react';

// Star component with blinking animation
const AnimatedStar = ({
    size = 'w-4 h-4',
    top,
    left,
    delay = 0,
    duration = 2
}: {
    size?: string;
    top: string;
    left: string;
    delay?: number;
    duration?: number;
}) => {
    return (
        <div
            className={`absolute ${size} opacity-60`}
            style={{
                top,
                left,
                animation: `fadeInOut ${duration}s ease-in-out ${delay}s infinite`
            }}
        >
            {/* Replace this SVG with your star SVG */}
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full text-[var(--color-brown-1)]"
            >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        </div>
    );
};

// Alternative star designs (you can replace these with your SVG)
const FourPointStar = ({
    size = 'w-4 h-4',
    top,
    left,
    delay = 0,
    duration = 2
}: {
    size?: string;
    top: string;
    left: string;
    delay?: number;
    duration?: number;
}) => {
    return (
        <div
            className={`absolute ${size} opacity-50`}
            style={{
                top,
                left,
                animation: `fadeInOut ${duration}s ease-in-out ${delay}s infinite`
            }}
        >
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full text-[var(--color-brown-1)]"
            >
                <path d="M12 1l2.5 7h7.5l-6 4.5 2.5 7.5-6-4.5-6 4.5 2.5-7.5-6-4.5h7.5z" />
            </svg>
        </div>
    );
};

const DiamondStar = ({
    size = 'w-3 h-3',
    top,
    left,
    delay = 0,
    duration = 3
}: {
    size?: string;
    top: string;
    left: string;
    delay?: number;
    duration?: number;
}) => {
    return (
        <div
            className={`absolute ${size} opacity-40`}
            style={{
                top,
                left,
                animation: `fadeInOut ${duration}s ease-in-out ${delay}s infinite`
            }}
        >
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full text-[var(--color-brown-1)]"
            >
                <path d="M12 2l4 10-4 10-4-10z" />
                <path d="M2 12l10-4 10 4-10 4z" />
            </svg>
        </div>
    );
};

export default function HeroSection() {
    return (
        <section className="relative h-[110vh] md:h-[115vh] w-full bg-gradient-to-b from-[var(--color-cream-1)] to-[var(--color-brown-3)]">
            <style jsx>{`
              @keyframes fadeInOut {
                0%, 100% { opacity: 0.2; }
                50% { opacity: 0.8; }
              }
            `}</style>

            {/* Background Stars */}
            <div className="absolute inset-0 z-0 bg-stars-pattern bg-repeat opacity-50"></div>

            {/* Animated Stars Background */}
            <div className="absolute inset-0 z-0">
                {/* Top section stars */}
                <AnimatedStar size="w-3 h-3 md:w-4 md:h-4" top="8%" left="15%" delay={0} duration={2.5} />
                <AnimatedStar size="w-2 h-2 md:w-3 md:h-3" top="12%" left="25%" delay={1.2} duration={3} />
                <AnimatedStar size="w-4 h-4 md:w-5 md:h-5" top="18%" left="35%" delay={0.8} duration={2.2} />
                <AnimatedStar size="w-3 h-3 md:w-4 md:h-4" top="22%" left="50%" delay={2} duration={2.8} />
                <AnimatedStar size="w-2 h-2 md:w-3 md:h-3" top="15%" left="65%" delay={0.5} duration={3.2} />
                <AnimatedStar size="w-4 h-4 md:w-6 md:h-6" top="10%" left="75%" delay={1.8} duration={2.5} />
                <AnimatedStar size="w-3 h-3 md:w-4 md:h-4" top="25%" left="85%" delay={0.3} duration={2.7} />

                {/* Left side stars */}
                <AnimatedStar size="w-5 h-5 md:w-7 md:h-7" top="35%" left="8%" delay={1.5} duration={2.3} />
                <AnimatedStar size="w-2 h-2 md:w-3 md:h-3" top="45%" left="12%" delay={0.7} duration={3.1} />
                <AnimatedStar size="w-3 h-3 md:w-4 md:h-4" top="55%" left="18%" delay={2.2} duration={2.6} />

                {/* Right side stars */}
                <AnimatedStar size="w-3 h-3 md:w-5 md:h-5" top="38%" left="88%" delay={1.3} duration={2.4} />
                <AnimatedStar size="w-4 h-4 md:w-5 md:h-5" top="48%" left="82%" delay={0.9} duration={2.9} />
                <AnimatedStar size="w-2 h-2 md:w-3 md:h-3" top="58%" left="90%" delay={1.7} duration={3.3} />

                {/* Bottom section stars */}
                <AnimatedStar size="w-3 h-3 md:w-4 md:h-4" top="68%" left="20%" delay={0.4} duration={2.8} />
                <AnimatedStar size="w-2 h-2 md:w-3 md:h-3" top="72%" left="35%" delay={1.9} duration={2.1} />
                <AnimatedStar size="w-4 h-4 md:w-5 md:h-5" top="75%" left="70%" delay={0.6} duration={2.7} />

                {/* Additional scattered stars for mobile */}
                <AnimatedStar size="w-2 h-2 md:w-3 md:h-3" top="30%" left="30%" delay={2.5} duration={3.5} />
                <AnimatedStar size="w-2 h-2 md:w-3 md:h-3" top="42%" left="60%" delay={1.1} duration={2.4} />
                <AnimatedStar size="w-3 h-3 md:w-4 md:h-4" top="62%" left="45%" delay={0.2} duration={3.1} />

                {/* Four-point stars for variety */}
                <FourPointStar size="w-3 h-3 md:w-4 md:h-4" top="20%" left="40%" delay={1.4} duration={2.6} />
                <FourPointStar size="w-2 h-2 md:w-3 md:h-3" top="50%" left="25%" delay={0.8} duration={3.2} />
                <FourPointStar size="w-4 h-4 md:w-5 md:h-5" top="65%" left="80%" delay={2.1} duration={2.3} />

                {/* Diamond stars */}
                <DiamondStar size="w-2 h-2 md:w-3 md:h-3" top="28%" left="78%" delay={1.6} duration={2.9} />
                <DiamondStar size="w-3 h-3 md:w-4 md:h-4" top="52%" left="38%" delay={0.1} duration={3.4} />
            </div>

            {/* Club Name & Tagline */}
            <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center px-4">
                <h1 className="font-saint-pauline text-7xl sm:text-8xl md:text-[10rem] font-extralight text-[var(--color-brown-1)] tracking-wide leading-none">
                    Sim <br className="block md:hidden" />
                    Esprimere
                </h1>
                <p className="whitespace-nowrap font-dream-avenue text-2xl sm:text-3xl md:text-5xl text-[var(--color-brown-1)] -mt-2 md:-mt-4">
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