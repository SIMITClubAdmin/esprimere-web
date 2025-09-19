"use client"

import React, { useState, useEffect } from 'react';

export default function PastActivities() {
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = document.querySelectorAll('[data-index]');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const activities = [
    {
      title: "Chasing Moments: The Stories We Keep Musical Showcase 2025",
      image: "/image/chasing_moments.png",
      align: "left",
      year: "2025"
    },
    {
      title: "Into the Land of Zo Musical Showcase 2024",
      image: "/image/land_of_zo.png",
      align: "right",
      year: "2024"
    },
    {
      title: "Esprimere Songwriting Workshop 2024",
      image: "/image/songwriting_workshop.png",
      align: "left",
      year: "2024"
    },
    {
      title: "Original Song: How Far We've Come",
      image: "/image/songs_and_covers.png",
      align: "right",
      year: "2024"
    }
  ];

  return (
    <section
      className="
        relative
        w-full
        bg-[#D5CEB8]
        bg-[url('/image/past_activites_bg.png')]
        bg-repeat
        bg-center
        overflow-hidden
      "
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[var(--color-brown-1)] to-transparent opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-[var(--color-brown-1)] to-transparent opacity-15 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-[30vh] pb-32">
        {/* Enhanced Main Title */}
        <div 
          className="-ml-6 transform transition-all duration-1000 ease-out"
          data-index="title"
        >
          <div className="relative">
            <h2 className="font-saint-pauline font-extralight text-5xl md:text-[4.5rem] text-[var(--color-brown-1)] relative z-10">
              Past Activities
              <span className="absolute -top-4 -right-8 text-lg opacity-60 rotate-12">✨</span>
            </h2>
            <div className="absolute -bottom-2 -left-2 w-16 h-16 border-2 border-[var(--color-brown-1)] opacity-30 rounded-full"></div>
          </div>
          <div className="mt-4 mb-16 w-48 h-2 bg-gradient-to-r from-[var(--color-brown-1)] to-transparent transition-all duration-700 ease-out" />
        </div>

        {/* Activities Grid */}
        <div className="space-y-24">
          {activities.map((activity, index) => (
            <div
              key={index}
              data-index={index}
              className={`
                transform transition-all duration-1000 ease-out
                ${visibleItems.has(index.toString()) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
                }
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                activity.align === 'right' ? 'lg:grid-flow-col-dense' : ''
              }`}>
                
                {/* Content Side */}
                <div className={`space-y-6 ${activity.align === 'right' ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-brown-1)] bg-opacity-20 flex items-center justify-center">
                      <span className="text-[var(--color-brown-1)] font-bold text-lg">{activity.year}</span>
                    </div>
                    <div className="flex-1 h-px bg-[var(--color-brown-1)] opacity-30"></div>
                  </div>
                  
                  <h3 className={`
                    font-dream-avenue text-xl md:text-3xl lg:text-4xl 
                    text-[var(--color-brown-1)] leading-tight
                    ${activity.align === 'right' ? 'text-right' : 'text-left'}
                  `}>
                    {activity.title}
                  </h3>

                  <div className={`flex gap-2 ${activity.align === 'right' ? 'justify-end' : 'justify-start'}`}>
                    <div className="w-2 h-2 bg-[var(--color-brown-1)] rounded-full opacity-60"></div>
                    <div className="w-6 h-2 bg-[var(--color-brown-1)] rounded-full opacity-40"></div>
                    <div className="w-2 h-2 bg-[var(--color-brown-1)] rounded-full opacity-60"></div>
                  </div>
                </div>

                {/* Image Side */}
                <div className={`relative group ${activity.align === 'right' ? 'lg:col-start-1' : ''}`}>
                  <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-0"></div>
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[var(--color-brown-1)] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Decorative frame */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-[var(--color-brown-1)] opacity-60"></div>
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-[var(--color-brown-1)] opacity-60"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4">
            <div className="w-16 h-px bg-[var(--color-brown-1)] opacity-40"></div>
            <div className="w-3 h-3 bg-[var(--color-brown-1)] rounded-full opacity-60"></div>
            <div className="w-16 h-px bg-[var(--color-brown-1)] opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}