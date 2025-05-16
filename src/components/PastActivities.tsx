import React from 'react';

export default function PastActivities() {
  return (
    <section
      className="
        relative
        w-full
        bg-[#D5CEB8]
        bg-[url('/image/past_activites_bg.png')]
        bg-repeat
        bg-center
      "
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-[40vh] pb-32">
        {/* Main Title + underline (pulled a bit left) */}
        <div className="-ml-6">
          <h2 className="font-saint-pauline font-extralight text-5xl md:text-[4rem] text-[var(--color-brown-1)]">
            Past Activities
          </h2>
          <div className="mt-2 mb-10 w-48 h-2  bg-[var(--color-brown-1)]" />
        </div>

        {/* First Event */}
        <p className="font-dream-avenue text-xl md:text-4xl text-[var(--color-brown-1)] mb-12">
          Chasing Moments: The Stories We Keep Musical Showcase 2025
        </p>

        {/* Media */}
        <div className="w-full h-64 md:h-[65vh] rounded-lg overflow-hidden mb-16">
          <img
            src="/image/chasing_moments.png"
            alt="Chasing Moments Showcase"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Second Event (right-aligned) */}
        <p className="font-dream-avenue text-xl md:text-4xl text-[var(--color-brown-1)] text-right mb-12">
          Into the Land of Zo Musical Showcase 2024
        </p>

        {/* Media */}
        <div className="w-full h-64 md:h-[65vh] rounded-lg overflow-hidden">
          <img
            src="/image/chasing_moments.png" // Change later
            alt="Into the Land of Zo Showcase 2024"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
