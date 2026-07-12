import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header Block: Left Title & Right CTA Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left">
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-charcoal leading-tight">
              Fascinating Moments
            </h2>
            <p className="font-sans text-sm text-charcoal/60 mt-2">
              See all memories of weddings
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-end">
            <Link to="/gallery" className="flex items-center gap-3 group">
              <div className="bg-[#F7C35F] hover:bg-gold-accent text-charcoal font-sans text-sm sm:text-base font-semibold py-3 px-6 rounded-full shadow-md transition-colors duration-300">
                Explore Gallery Page
              </div>
              <div className="w-10 h-10 rounded-full bg-white text-charcoal border border-stone-200/60 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#F7C35F] flex-shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>

        {/*
          ── Screenshot-accurate layout ──
          Left column (col-span-7):  Top image (shorter) | Bottom image (taller)
          Right column (col-span-5): Top image (taller)  | Bottom image (very tall, extends further)

          Achieved using CSS Grid with named row tracks of different heights.
        */}
        <div
          className="hidden md:grid gap-4"
          style={{
            gridTemplateColumns: '7fr 5fr',
            gridTemplateRows: '180px 220px',
          }}
        >
          {/* TOP-LEFT: Landscape (sunset couple) */}
          <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://images.pexels.com/photos/1024996/pexels-photo-1024996.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Beautiful Wedding Sunset"
              className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-500"
              loading="lazy"
            />
          </div>

          {/* TOP-RIGHT: Portrait (mehndi detail) – spans BOTH rows so it's taller */}
          <div
            className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            style={{ gridRow: '1 / 3' }}
          >
            <img
              src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Mehndi Bridal Detail"
              className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-500"
              loading="lazy"
            />
          </div>

          {/* BOTTOM-LEFT: Portrait (family walking) */}
          <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Happy Family Walking"
              className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-500"
              loading="lazy"
            />
          </div>

        </div>

        {/* Third image row: wide flowers image below the 2-col grid */}
        <div className="hidden md:block mt-4">
          <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300" style={{ height: '200px' }}>
            <img
              src="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Pink Floral Arrangement"
              className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>

        {/* ── Mobile Layout ── */}
        <div className="flex flex-col gap-4 md:hidden">
          {[
            { src: "https://images.pexels.com/photos/1024996/pexels-photo-1024996.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Beautiful Wedding Sunset" },
            { src: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Mehndi Bridal Detail" },
            { src: "https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Happy Family Walking" },
            { src: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Pink Floral Arrangement" },
          ].map((img, i) => (
            <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
