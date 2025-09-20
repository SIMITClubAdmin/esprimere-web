'use client';

import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';

// Image URL builder
const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

// TypeScript interface for team member
interface TeamMember {
  _id: string;
  name: string;
  role: string;
  description: string;
  img?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
}

export default function OurTeam() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const query = `*[_type == "ourTeam"] | order(_createdAt asc) {
          _id,
          name,
          role,
          description,
          img
        }`;
        const members = await client.fetch(query);
        setTeamMembers(members);
      } catch (error) {
        console.error('Error fetching team members:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-[#A9B6B2]">
        <div className="container mx-auto px-4 text-center">
          <div className="font-saint-pauline text-5xl md:text-7xl text-[var(--color-brown-1)]">
            Loading...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-[#A9B6B2] relative overflow-hidden">
      {/* Main Title */}
        <div className="text-center mb-16 mt-30 lg:mt-60">
          <h2 className="font-saint-pauline font-extralight text-6xl md:text-8xl text-[var(--color-brown-1)] tracking-wide">
            Meet Our Team
          </h2>
        </div>

      {/* Team Members Grid */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-12 md:gap-16 lg:gap-12">
          {teamMembers.map((member) => (
            <div key={member._id} className="flex flex-col items-center">
              {/* Frame + Photo */}
              <div className="relative w-80 h-104">
                {/* Photo under the frame */}
                <div className="absolute inset-8 rounded overflow-hidden z-0">
                  {member.img ? (
                    <img
                      src={urlFor(member.img).width(400).height(500).url()}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-amber-100 flex items-center justify-center">
                      <span className="font-dream-avenue text-amber-600">No Photo</span>
                    </div>
                  )}
                </div>

                {/* PNG Frame on top */}
                <img
                  src="/frames/vintage-frame.svg" // Your decorative PNG
                  alt="Frame"
                  className="w-full h-full absolute top-0 left-0 z-10"
                />

                {/* Nameplate */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#40250d] px-6 py-2 rounded-lg shadow-md z-20">
                  <div className="font-dream-avenue text-lg md:text-xl text-amber-50 font-semibold tracking-wide text-center whitespace-nowrap">
                    {member.role}
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="mt-8 text-center">
                <h3 className="font-dream-avenue text-3xl md:text-4xl text-[var(--color-brown-1)] font-semibold mb-3">
                  {member.name}
                </h3>
                <p className="font-crimson text-lg md:text-xl text-[var(--color-brown-1)] leading-relaxed max-w-xs mx-auto">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* No team members message */}
        {teamMembers.length === 0 && (
          <div className="text-center mt-12">
            <p className="font-dream-avenue text-xl text-[var(--color-brown-1)]">
              No team members found. Add some through your Sanity Studio!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}