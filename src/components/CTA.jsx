import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-16 sm:py-20 bg-transparent px-4 sm:px-6 lg:px-8">
      {/* Premium Horizontal Banner Card */}
      <div className="max-w-6xl mx-auto bg-charcoal rounded-2xl p-8 sm:p-12 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-8 border border-gold-accent/15 shadow-xl">
        
        {/* Subtle radial glow matching screenshot gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/95 to-gold-accent/15 pointer-events-none" />

        {/* Top-Left Starburst decoration */}
        <div className="absolute -top-6 -left-6 w-24 h-24 text-gold-accent/15 pointer-events-none select-none">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
            {/* Starburst rays */}
            <path d="M50,10 L50,90 M10,50 L90,50 M22,22 L78,78 M22,78 L78,22" />
            <path d="M35,15 L65,85 M15,35 L85,65 M15,65 L85,35 M35,85 L65,15" />
          </svg>
        </div>

        {/* Left Side Text Content */}
        <div className="relative z-10 max-w-xl lg:max-w-2xl text-left">
          <h2 className="font-serif text-3xl sm:text-4xl text-white leading-snug font-normal">
            Book a consultation to plan your dream wedding with Swastik Events.
          </h2>
        </div>

        {/* Right Side Buttons - Premium overlapping button group */}
        <div className="relative z-10 flex items-center gap-3 self-start lg:self-center">
          <a
            href="https://wa.me/917898192050?text=Hello%20Swastik%20Events,%20I%20would%20like%20to%20make%20a%20reservation%20for%20my%20wedding."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            {/* Main Capsule Button */}
            <div className="bg-[#F7C35F] hover:bg-gold-accent text-charcoal font-sans text-sm sm:text-base font-semibold py-3.5 px-8 rounded-full shadow-lg transition-colors duration-300">
              Make Reservations
            </div>
            {/* Circle Arrow Icon Button */}
            <div className="w-12 h-12 rounded-full bg-white text-charcoal flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#F7C35F] group-hover:text-charcoal flex-shrink-0">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}

