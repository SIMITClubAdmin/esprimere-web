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
          <div className="font-saint-pauline text-4xl md:text-6xl text-[var(--color-brown-1)]">
            Loading...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-[#A9B6B2] relative">
      {/* Main Title */}
      <div className="text-center mb-16">
        <h2 className="font-saint-pauline font-extralight text-5xl md:text-7xl text-[var(--color-brown-1)] tracking-wide">
          Meet the Team
        </h2>
      </div>

      {/* Team Members Grid */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {teamMembers.map((member) => (
            <div key={member._id} className="flex flex-col items-center">
              {/* Frame + Photo */}
              <div className="relative w-72 h-96">
                {/* PNG Frame */}
                <img
                  src="/frames/vintage-frame.svg" // Your decorative PNG
                  alt="Frame"
                  className="w-full h-full"
                />

                {/* Photo inside the frame */}
                <div className="absolute inset-8 rounded overflow-hidden">
                  {member.img ? (
                    <img
                      src={urlFor(member.img).width(300).height(400).url()}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-amber-100 flex items-center justify-center">
                      <span className="font-dream-avenue text-amber-600">No Photo</span>
                    </div>
                  )}
                </div>

                {/* Nameplate */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#40250d] px-4 py-1 rounded-lg shadow-md">
                    <div className="font-dream-avenue text-base md:text-lg text-amber-50 font-semibold tracking-wide">
                        {member.name}
                    </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="mt-8 text-center">
                <h3 className="font-dream-avenue text-2xl md:text-3xl text-[var(--color-brown-1)] font-semibold mb-3">
                  {member.role}
                </h3>
                <p className="font-dream-avenue text-base md:text-lg text-[var(--color-brown-1)] leading-relaxed max-w-xs mx-auto">
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
