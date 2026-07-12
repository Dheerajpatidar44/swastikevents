import React, { useState } from 'react';
import { Play } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const mediaItems = [
  // Wedding
  { id: 1, type: 'image', title: 'Royal Mandap Stage', tag: 'Wedding', url: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 2, type: 'image', title: 'Floral Wedding Arch', tag: 'Wedding', url: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 3, type: 'image', title: 'Candlelit Reception Hall', tag: 'Wedding', url: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 4, type: 'image', title: 'Bridal Couple Portrait', tag: 'Wedding', url: 'https://images.pexels.com/photos/1128782/pexels-photo-1128782.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 5, type: 'image', title: 'Bespoke Table Setting', tag: 'Wedding', url: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 6, type: 'image', title: 'Elegant Floral Centrepiece', tag: 'Wedding', url: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=800' },
  // Haldi
  { id: 7, type: 'image', title: 'Vibrant Haldi Setup', tag: 'Haldi', url: 'https://images.pexels.com/photos/14883182/pexels-photo-14883182.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 8, type: 'image', title: 'Marigold Floral Backdrop', tag: 'Haldi', url: 'https://images.pexels.com/photos/10455419/pexels-photo-10455419.jpeg?auto=compress&cs=tinysrgb&w=800' },
  // Engagement
  { id: 9, type: 'image', title: 'Romantic Ring Ceremony', tag: 'Engagement', url: 'https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 10, type: 'image', title: 'Floral Engagement Stage', tag: 'Engagement', url: 'https://images.pexels.com/photos/20658510/pexels-photo-20658510.jpeg?auto=compress&cs=tinysrgb&w=800' },
  // Birthday
  { id: 11, type: 'image', title: 'Theme Birthday Celebration', tag: 'Birthday', url: 'https://images.pexels.com/photos/5804897/pexels-photo-5804897.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 12, type: 'image', title: 'Festive Balloon Decor', tag: 'Birthday', url: 'https://images.pexels.com/photos/796606/pexels-photo-796606.jpeg?auto=compress&cs=tinysrgb&w=800' },
  // Videos
  { id: 13, type: 'video', title: 'Luxury Dinner Decor', tag: 'Videos', url: '/Gallery/luxurydinnertable.mp4' },
  { id: 14, type: 'video', title: 'Celebration Sparklers', tag: 'Videos', url: 'https://assets.mixkit.co/videos/preview/mixkit-sparkler-held-by-a-person-at-a-celebration-42861-large.mp4' },
  { id: 15, type: 'video', title: 'Golden Confetti Shower', tag: 'Videos', url: 'https://assets.mixkit.co/videos/preview/mixkit-gold-confetti-falling-slowly-on-a-black-background-34241-large.mp4' },
];

const filters = ['All', 'Wedding', 'Haldi', 'Engagement', 'Birthday', 'Videos'];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = mediaItems.filter(item => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Videos') return item.type === 'video';
    return item.tag === activeFilter;
  });

  return (
    <div className="bg-cream-light min-h-screen">
      <Navbar />

      {/* Page Hero */}
      <div className="pt-28 pb-12 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-accent/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="font-sans text-xs font-bold tracking-[0.3em] text-gold-accent uppercase">Portfolio</span>
          <h1 className="font-serif text-5xl sm:text-6xl font-extrabold text-white mt-3 leading-tight">
            Our Gallery
          </h1>
          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="h-px w-12 bg-gold-accent/40" />
            <span className="text-gold-accent/70 text-sm">✦</span>
            <span className="h-px w-12 bg-gold-accent/40" />
          </div>
          <p className="font-sans text-white/60 text-base sm:text-lg font-light mt-5 max-w-xl mx-auto">
            A curated look at the events, setups, and memories we have crafted with love and precision.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer border ${
                activeFilter === filter
                  ? 'bg-gold-accent border-gold-accent text-white shadow-md'
                  : 'bg-white hover:bg-gold-light/40 text-charcoal/80 border-stone-200'
              }`}
            >
              {filter === 'Haldi' ? 'Haldi & Mehndi' : filter === 'All' ? 'Show All' : filter}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="break-inside-avoid mb-3 relative overflow-hidden rounded-xl bg-stone-100 shadow-sm transition-all duration-300 hover:shadow-xl group cursor-pointer"
            >
              {item.type === 'image' ? (
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                  <video
                    src={item.url}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    autoPlay loop muted playsInline
                  />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-all duration-300 group-hover:bg-gold-accent group-hover:border-gold-accent">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                </div>
              )}
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 pointer-events-none">
                <span className="text-[9px] text-gold-accent tracking-widest uppercase font-bold mb-0.5">{item.tag}</span>
                <h3 className="text-sm font-serif font-semibold text-white leading-tight">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

