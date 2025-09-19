'use client';

import React from 'react';

export default function CurrentActivities() {
  return (
    <section className="pt-20 relative bg-cover bg-center bg-no-repeat" 
             style={{ backgroundImage: 'url("/backgrounds/current-activities-bg-fade.svg")' }}>
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-64">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="font-saint-pauline font-extralight text-6xl md:text-8xl text-white tracking-wide mb-4">
            Our Activities
          </h2>
          <div className="w-32 h-1 bg-white mx-auto"></div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          
          {/* Vocal Lessons */}
          <div className="text-white">
            <h3 className="font-saint-pauline text-4xl md:text-5xl mb-4">
              Vocal Lessons
            </h3>
            <p className="font-dream-avenue text-xl md:text-2xl font-semibold mb-4 text-amber-200">
              Tuesday & Friday
            </p>
            <p className="font-dream-avenue text-lg md:text-xl leading-relaxed">
              Exclusive for Esprimere members, our vocal lessons are held at SIM and led by experienced vocal coaches to help you grow your voice and performance skills.
            </p>
          </div>

          {/* Weekly Jamming Sessions */}
          <div className="text-white">
            <h3 className="font-saint-pauline text-4xl md:text-5xl mb-4">
              Weekly Jamming Sessions
            </h3>
            <p className="font-dream-avenue text-xl md:text-2xl font-semibold mb-4 text-amber-200">
              Thursday
            </p>
            <p className="font-dream-avenue text-lg md:text-xl leading-relaxed">
              Exclusive for Esprimere members, join our jamming sessions every Thursday with our very own Esprimere band!
            </p>
          </div>

        </div>

        {/* Membership Information */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="font-saint-pauline font-extralight text-5xl md:text-7xl text-white tracking-wide mb-4">
              Membership Information
            </h2>
            <div className="w-32 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            
            {/* Who Can Join */}
            <div className="text-white">
              <h3 className="font-saint-pauline text-4xl md:text-5xl mb-6">
                Who Can Join?
              </h3>
              <p className="font-dream-avenue text-lg md:text-xl leading-relaxed">
                We welcome aspiring singers and band members of all levels! No prior experience required, just passion and commitment
              </p>
            </div>

            {/* Intake Periods */}
            <div className="text-white">
              <h3 className="font-saint-pauline text-4xl md:text-5xl mb-6">
                Intake Periods
              </h3>
              <p className="font-dream-avenue text-lg md:text-xl leading-relaxed">
                Our membership intakes happen a few times a year. Follow @esprimersings for announcements and dates!
              </p>
            </div>

          </div>
        </div>

        {/* Audition Details */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="font-saint-pauline font-extralight text-5xl md:text-7xl text-white tracking-wide mb-4">
              Audition Details
            </h2>
            <div className="w-32 h-1 bg-white mx-auto"></div>
          </div>

          <div className="flex items-start gap-8">
            {/* Microphone SVG */}
            <div className="flex-shrink-0">
                <img src="/mic-shadow.svg" alt="Microphone" className="w-64" />
            </div>

            <div className="flex-grow text-white">
              <p className="font-dream-avenue text-lg md:text-xl leading-relaxed mb-8">
                To join Esprimere, you'll need to Audition. Here's how it works
              </p>

              {/* Steps */}
              <div className="space-y-8">
                
                {/* Step 1 */}
                <div>
                  <h4 className="font-saint-pauline text-3xl md:text-4xl mb-4">
                    Step 1. Song Preparation
                  </h4>
                  <div className="font-dream-avenue text-lg md:text-xl leading-relaxed space-y-2">
                    <p>Prepare 2 songs:</p>
                    <ul className="ml-6 space-y-1">
                      <li>• 1 song from our provided list</li>
                      <li>• 1 song of your choice</li>
                    </ul>
                    <p className="text-amber-200 italic">
                      (Singers Only) Need a different key? Transposition is allowed!
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div>
                  <h4 className="font-saint-pauline text-3xl md:text-4xl mb-4">
                    Step 2. Registration
                  </h4>
                  <div className="font-dream-avenue text-lg md:text-xl leading-relaxed">
                    <ul className="space-y-1">
                      <li>• Go to MySIMApp &gt; Campus Events</li>
                      <li>• Search for Esprimere when intake is open</li>
                      <li>• Follow the form instructions</li>
                    </ul>
                  </div>
                </div>

                {/* Step 3 */}
                <div>
                  <h4 className="font-saint-pauline text-3xl md:text-4xl mb-4">
                    Step 3. Booking your Audition
                  </h4>
                  <div className="font-dream-avenue text-lg md:text-xl leading-relaxed">
                    <ul className="space-y-1">
                      <li>• Secure your preferred time slot via Beatix</li>
                    </ul>
                    <p className="mt-4 text-amber-200">
                      For further details, follow our Instagram @esprimersings
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}