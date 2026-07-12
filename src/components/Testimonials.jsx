import React from 'react';
import { Star, MapPin, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Dheeraj Patidar',
    location: 'Khategaon, MP',
    event: 'Wedding Ceremony',
    stars: 5,
    quote: 'Swastik Events made our wedding absolutely magical! The floral mandap, lighting, and table decor were beyond our imagination. Every guest was in awe.',
  },
  {
    name: 'Niraj Sahu',
    location: 'Harda, MP',
    event: 'Haldi Ceremony',
    stars: 5,
    quote: 'The Haldi decoration was vibrant, lively, and absolutely stunning! The marigold setup and the photo booth made for the most beautiful memories.',
  },
  {
    name: 'Aman Nigam',
    location: 'Indore, MP',
    event: 'Reception Party',
    stars: 5,
    quote: 'Extremely professional team. They executed our reception theme flawlessly — from the grand entrance to every table centrepiece. Highly recommended!',
  },
  {
    name: 'Shivani Makode',
    location: 'Dewas, MP',
    event: 'Engagement Ceremony',
    stars: 5,
    quote: 'We were speechless when we saw the venue! The rose petal stage and fairy lights setup was straight out of a fairy tale. Thank you Swastik Events!',
  },
  {
    name: 'Swati Patel',
    location: 'Sonkatch, MP',
    event: 'Sangeet Night',
    stars: 5,
    quote: 'The Sangeet night decor was electric! The LED backdrop, neon signs, and colourful draping made the entire evening feel like a Bollywood set. Loved it!',
  },
];

function StarRating({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < count ? 'fill-gold-accent text-gold-accent' : 'text-stone-200 fill-stone-200'}`}
        />
      ))}
    </div>
  );
}

// Function to generate initials from name
function getInitials(name) {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

function ReviewCard({ review }) {
  const initials = getInitials(review.name);
  
  return (
    <div className="flex-shrink-0 w-[340px] sm:w-[380px] bg-white rounded-2xl p-6 mx-3 border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">

      {/* Top: quote icon + stars */}
      <div className="flex items-start justify-between">
        <div className="w-9 h-9 rounded-full bg-gold-accent/10 flex items-center justify-center flex-shrink-0">
          <Quote className="w-4 h-4 text-gold-accent fill-gold-accent" />
        </div>
        <StarRating count={review.stars} />
      </div>

      {/* Review text */}
      <p className="font-sans text-[14px] text-charcoal/75 leading-relaxed italic flex-1">
        "{review.quote}"
      </p>

      {/* Divider */}
      <div className="h-px bg-stone-100" />

      {/* Profile row */}
      <div className="flex items-center gap-3">
        {/* Initials Avatar Badge */}
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold-accent to-gold-dark text-white font-sans font-bold text-sm flex items-center justify-center border-2 border-gold-accent/25 flex-shrink-0 shadow-sm">
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-sans font-bold text-charcoal text-sm truncate">{review.name}</p>
          <div className="flex items-center gap-1 mt-0.5">
            <MapPin className="w-3 h-3 text-gold-accent flex-shrink-0" />
            <span className="font-sans text-[11px] text-charcoal/50 truncate">{review.location}</span>
          </div>
        </div>
        <span className="flex-shrink-0 text-[10px] font-sans font-semibold text-gold-accent bg-gold-accent/10 px-2.5 py-1 rounded-full border border-gold-accent/20 whitespace-nowrap">
          {review.event}
        </span>
      </div>

    </div>
  );
}

export default function Testimonials() {
  // Duplicate for seamless infinite loop
  const doubled = [...reviews, ...reviews];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white relative overflow-hidden">

      {/* Soft background blobs */}
      <div className="absolute top-0 left-[-8%] w-72 h-72 bg-gold-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-8%] w-72 h-72 bg-gold-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto px-4 mb-14 relative z-10">
        <span className="font-sans text-xs font-bold tracking-[0.3em] text-gold-accent uppercase">
          Client Love
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-charcoal mt-3 leading-tight">
          What Our Clients Say
        </h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <span className="h-px w-10 bg-gold-accent/30" />
          <span className="text-gold-accent/50 text-xs">✦</span>
          <span className="h-px w-10 bg-gold-accent/30" />
        </div>
        <p className="font-sans text-charcoal/60 text-base mt-4 font-light leading-relaxed">
          Real stories from real couples and families who trusted us with their most precious moments.
        </p>
      </div>

      {/* ── Infinite Marquee Slider ── */}
      {/* Overflow hidden masks the cards going off screen */}
      <div className="relative overflow-hidden">

        {/* Left & right fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Track — doubled cards for infinite loop */}
        <div className="marquee-track flex py-4">
          {doubled.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>

    </section>
  );
}
