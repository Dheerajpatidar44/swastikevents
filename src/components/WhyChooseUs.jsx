import React from 'react';

export default function WhyChooseUs() {
  const items = [
    {
      title: 'Experienced Team',
      desc: 'Passionate professionals with years of experience.',
      icon: (
        <svg className="w-8 h-8 text-gold-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    },
    {
      title: 'Creative Concepts',
      desc: 'Unique & personalized ideas for every celebration.',
      icon: (
        <svg className="w-8 h-8 text-gold-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5.5 5.5 0 0 0 7 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      )
    },
    {
      title: 'Premium Quality',
      desc: 'Top quality materials & flawless execution.',
      icon: (
        <svg className="w-8 h-8 text-gold-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 3h12l4 6-10 12L2 9z" />
          <path d="M11 3 8 9l4 12 4-12-3-6" />
          <path d="M2 9h20" />
        </svg>
      )
    },
    {
      title: 'Customer First',
      desc: 'Your satisfaction is our biggest priority.',
      icon: (
        <svg className="w-8 h-8 text-gold-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      )
    },
    {
      title: 'On-Time Delivery',
      desc: 'We value your time and commitments.',
      icon: (
        <svg className="w-8 h-8 text-gold-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      )
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <span className="font-sans text-xs sm:text-sm font-bold tracking-[0.25em] text-gold-accent uppercase">
          WHY CHOOSE US
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal mt-2">
          Because Every Detail Matters
        </h2>
        
        {/* Ornament Separator */}
        <div className="flex items-center justify-center gap-4 mt-4 mb-16">
          <span className="h-[1px] w-14 bg-gold-accent/40" />
          <div className="flex items-center text-gold-accent">
            <span className="text-[10px]">✦</span>
            <svg className="w-6 h-6 mx-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L2 12l10 10 10-10L12 2z" />
              <path d="M12 6l-6 6 6 6 6-6-6-6z" fill="currentColor" fillOpacity="0.1" />
            </svg>
            <span className="text-[10px]">✦</span>
          </div>
          <span className="h-[1px] w-14 bg-gold-accent/40" />
        </div>

        {/* 5-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center px-4 relative group"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-gold-light/60 flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:bg-gold-light/90">
                {item.icon}
              </div>
              
              {/* Title */}
              <h3 className="font-serif text-base font-bold text-charcoal mb-2">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-charcoal/60 leading-relaxed max-w-[180px] md:max-w-none">
                {item.desc}
              </p>

              {/* Vertical Divider for larger screens */}
              {index < items.length - 1 && (
                <span className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-gold-accent/20" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
