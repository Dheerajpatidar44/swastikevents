import React from 'react';

export default function Services() {
  const services = [
    {
      title: 'Wedding Decoration',
      image: '/services/wedding_decor.png',
    },
    {
      title: 'Haldi & Mehndi Decor',
      image: '/services/haldi_decor.png',
    },
    {
      title: 'Engagement & Ring Ceremony',
      image: '/services/engagement_decor.png',
    },
    {
      title: 'Grand Entries & FX',
      image: '/services/grand_entry.png',
    },
    {
      title: 'Themed Birthday Parties',
      image: '/services/themed_birthday.png',
    },
    {
      title: 'Bespoke Customization',
      image: '/services/bespoke_decor.png',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Decorative Circles */}
      <div className="absolute top-24 left-[-10%] w-[35%] h-[35%] bg-gold-accent/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-24 right-[-10%] w-[30%] h-[30%] bg-gold-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs sm:text-sm font-bold tracking-[0.25em] text-gold-accent uppercase">
            Bespoke Offerings
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-charcoal mt-3 leading-tight">
            We Design. You Celebrate.
          </h2>
          
          {/* Elegant Gold Ribbon Divider */}
          <div className="flex items-center justify-center gap-3 mt-4 mb-6">
            <span className="h-[1px] w-10 bg-gold-accent/30" />
            <span className="text-[10px] text-gold-accent/60">✦</span>
            <span className="h-[1px] w-10 bg-gold-accent/30" />
          </div>
          
          <p className="font-sans text-charcoal/70 text-base sm:text-lg font-light leading-relaxed">
            From majestic wedding setups and traditional celebrations to theme birthdays, we handcraft premium decor concepts to tell your story.
          </p>
        </div>

        {/* Services Grid - 6 cards in one row on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((service, index) => {
            return (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4.2] w-full bg-stone-900 shadow-lg cursor-pointer transition-all duration-500 hover:shadow-[0_12px_28px_-6px_rgba(201,151,58,0.18)]"
              >
                {/* Background Image */}
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25 transition-opacity duration-300 group-hover:from-black/90 group-hover:via-black/50" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end items-center z-10">
                  {/* Bottom: Name only */}
                  <div className="transform transition-transform duration-300 group-hover:-translate-y-1 w-full text-center">
                    <h3 className="font-serif text-[14px] sm:text-[15px] font-bold text-white tracking-wide text-center leading-snug">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
