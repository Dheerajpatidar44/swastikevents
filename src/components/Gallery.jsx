import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const stackImages = [
  'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/1128782/pexels-photo-1128782.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=900',
];

const TOTAL = stackImages.length;

export default function Gallery() {
  const sectionRef = useRef(null);
  // activeIndex = floating point 0 → TOTAL-1 driven by scroll
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const scrolled = Math.max(-rect.top, 0);
      // Maps scroll 0→scrollable to index 0→TOTAL-1
      const idx = (scrolled / scrollable) * (TOTAL - 1);
      setActiveIndex(Math.min(Math.max(idx, 0), TOTAL - 1));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative"
      // Each card gets ~80vh of scroll distance
      style={{ height: `${TOTAL * 80 + 60}vh` }}
    >
      {/* ── Sticky viewport ── */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

        {/* Section Header */}
        <div className="text-center mb-10 relative z-10 px-4">
          <span className="font-sans text-xs font-bold tracking-[0.3em] text-gold-accent uppercase">Portfolio</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-charcoal mt-2 leading-tight">
            Moments We Proudly Created
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="h-px w-10 bg-gold-accent/30" />
            <span className="text-gold-accent/50 text-xs">✦</span>
            <span className="h-px w-10 bg-gold-accent/30" />
          </div>
        </div>

        {/* ── Card Deck ── */}
        {/*
          Layout logic:
          - Card at activeIndex → center (translateX 0), full opacity, full scale
          - Card at activeIndex+1 → peeks from right (+55% of card width), slightly smaller
          - Card at activeIndex-1 → peeks from left  (-55%), slightly smaller
          - All other cards → hidden off-screen
          Cards clip overflow at the section boundary so only the peek is visible
        */}
        <div
          className="relative z-10 w-full flex items-center justify-center"
          style={{ height: 'min(460px, 58vh)' }}
        >
          {stackImages.map((src, i) => {
            // Distance from current active position
            const dist = i - activeIndex;

            // Only render cards within visible range (-1.5 to +1.5 distance)
            const isVisible = dist > -1.8 && dist < 1.8;
            if (!isVisible) return null;

            // Card dimensions
            const cardW = Math.min(320, window.innerWidth * 0.78);

            // Horizontal offset: 0 = center, ±1 = one card width to side
            // We show next card peeking at ~58% offset so only ~42% visible
            const peekOffset = cardW * 0.58;
            const translateX = dist * peekOffset;

            // Scale: active = 1, adjacent = 0.93
            const absDist = Math.abs(dist);
            const scale = 1 - absDist * 0.07;

            // Brightness: active = 100%, adjacent = 75%
            const brightness = 1 - absDist * 0.25;

            // zIndex: closest to center = highest
            const zIndex = Math.round(100 - Math.abs(dist) * 10);

            return (
              <div
                key={i}
                className="absolute rounded-2xl overflow-hidden"
                style={{
                  width: cardW,
                  height: '100%',
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  zIndex,
                  filter: `brightness(${brightness})`,
                  transition: 'transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.35s ease',
                  transformOrigin: 'center center',
                  // No shadow on non-active cards
                  boxShadow: absDist < 0.3
                    ? '0 20px 60px rgba(0,0,0,0.18)'
                    : 'none',
                }}
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>

        {/* Progress Dots */}
        <div className="flex items-center gap-2 mt-8 relative z-10">
          {stackImages.map((_, i) => {
            const dist = Math.abs(i - activeIndex);
            const isActive = dist < 0.5;
            return (
              <div
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width: isActive ? '24px' : '7px',
                  height: '7px',
                  backgroundColor: isActive ? 'var(--color-gold-accent, #c5a870)' : '#d1c5ae',
                }}
              />
            );
          })}
        </div>

        {/* View Full Gallery CTA */}
        <div className="mt-8 relative z-10">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2.5 px-8 py-3 border border-gold-accent text-gold-accent font-sans text-sm font-semibold rounded-full hover:bg-gold-accent hover:text-white transition-all duration-300 group"
          >
            View Full Gallery
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}

