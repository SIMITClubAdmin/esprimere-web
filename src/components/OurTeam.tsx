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
              {/* Vintage Frame */}
              <div className="relative group">
                {/* Frame Border */}
                <div className="relative p-3 bg-gradient-to-br from-amber-100 via-amber-50 to-amber-200 rounded-lg shadow-lg border-4 border-amber-800 transform transition-transform duration-300 group-hover:scale-105">
                  {/* Inner Frame */}
                  <div className="relative p-2 bg-gradient-to-br from-amber-50 to-amber-100 rounded border-2 border-amber-700">
                    {/* Corner Decorations */}
                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-amber-800 rounded-tl-lg"></div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-amber-800 rounded-tr-lg"></div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-amber-800 rounded-bl-lg"></div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-amber-800 rounded-br-lg"></div>
                    
                    {/* Ornamental Corners */}
                    <svg className="absolute -top-2 -left-2 w-6 h-6 text-amber-800" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.5 7h7.5l-6 4.5 2.5 7.5-6-4.5-6 4.5 2.5-7.5-6-4.5h7.5z" />
                    </svg>
                    <svg className="absolute -top-2 -right-2 w-6 h-6 text-amber-800" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.5 7h7.5l-6 4.5 2.5 7.5-6-4.5-6 4.5 2.5-7.5-6-4.5h7.5z" />
                    </svg>
                    <svg className="absolute -bottom-2 -left-2 w-6 h-6 text-amber-800" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.5 7h7.5l-6 4.5 2.5 7.5-6-4.5-6 4.5 2.5-7.5-6-4.5h7.5z" />
                    </svg>
                    <svg className="absolute -bottom-2 -right-2 w-6 h-6 text-amber-800" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.5 7h7.5l-6 4.5 2.5 7.5-6-4.5-6 4.5 2.5-7.5-6-4.5h7.5z" />
                    </svg>

                    {/* Member Photo */}
                    <div className="w-64 h-80 rounded overflow-hidden bg-amber-50">
                      {member.img ? (
                        <img
                          src={urlFor(member.img).width(300).height(400).url()}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-amber-100 flex items-center justify-center">
                          <span className="font-dream-avenue text-amber-600">No Photo</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Vintage Nameplate */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-amber-800 px-4 py-1 rounded-full shadow-md">
                    <div className="font-dream-avenue text-sm text-amber-50 font-semibold tracking-wide">
                      {member.name}
                    </div>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="mt-8 text-center">
                {/* Role */}
                <h3 className="font-dream-avenue text-xl md:text-2xl text-[var(--color-brown-1)] font-semibold mb-3">
                  {member.role}
                </h3>
                
                {/* Description */}
                <p className="font-dream-avenue text-sm md:text-base text-[var(--color-brown-1)] leading-relaxed max-w-xs mx-auto">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* No team members message */}
        {teamMembers.length === 0 && (
          <div className="text-center">
            <p className="font-dream-avenue text-xl text-[var(--color-brown-1)]">
              No team members found. Add some through your Sanity Studio!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}