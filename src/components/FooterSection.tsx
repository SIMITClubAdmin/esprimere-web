import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#4A3B2F] text-[#D4C4A8] py-8 md:py-12">
            <div className="container mx-auto px-6 md:px-8">
                {/* Main Content */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">

                    {/* Left Section - Contacts */}
                    <div className="flex-1">
                        <h2 className="font-saint-pauline text-4xl md:text-5xl font-light mb-6 text-[#D4C4A8]">
                            Contacts
                        </h2>

                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-[#D4C4A8] opacity-70" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <a
                                    href="mailto:singing@mymail.sim.edu.sg"
                                    className="text-[#D4C4A8] hover:text-white transition-colors duration-300 font-dream-avenue text-lg"
                                >
                                    singing@mymail.sim.edu.sg
                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-[#D4C4A8] opacity-70" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-[#D4C4A8] font-dream-avenue text-lg">
                                    461 Clementi Rd, Singapore 599491
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Social Media */}
                    <div className="flex-shrink-0">
                        <h3 className="font-saint-pauline text-2xl md:text-3xl font-light mb-4 text-[#D4C4A8] md:text-right">
                            Follow Us
                        </h3>

                        <div className="flex gap-4 md:justify-end">
                            {/* Instagram */}
                            <a
                                href="#"
                                className="w-10 h-10 bg-[#5A4A3C] hover:bg-[#6B5B4D] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="Instagram"
                            >
                                <svg className="w-5 h-5 text-[#D4C4A8]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>

                            {/* YouTube */}
                            <a
                                href="#"
                                className="w-10 h-10 bg-[#5A4A3C] hover:bg-[#6B5B4D] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="YouTube"
                            >
                                <svg className="w-5 h-5 text-[#D4C4A8]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>

                            {/* TikTok */}
                            <a
                                href="#"
                                className="w-10 h-10 bg-[#5A4A3C] hover:bg-[#6B5B4D] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="TikTok"
                            >
                                <svg className="w-5 h-5 text-[#D4C4A8]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#5A4A3C] my-6 md:my-8"></div>

                {/* Bottom Section - Website Credit */}
                <div className="text-center md:text-left">
                    <p className="text-[#A09080] font-dream-avenue text-base">
                        Website made by{' '}
                        <a
                            href="#"
                            className="text-[#D4C4A8] hover:text-white underline transition-colors duration-300"
                        >
                            SIM IT Club
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}