import React from 'react';
import { Calendar, Heart, Award, Users } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      num: '200+',
      label: 'Events Completed',
      icon: <Calendar className="w-8 h-8 text-gold-accent" strokeWidth={1.5} />
    },
    {
      num: '150+',
      label: 'Happy Clients',
      icon: (
        <svg className="w-8 h-8 text-gold-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    },
    {
      num: '5+',
      label: 'Years Experience',
      icon: <Users className="w-8 h-8 text-gold-accent" strokeWidth={1.5} />
    },
    {
      num: '10+',
      label: 'Expert Team Members',
      icon: <Award className="w-8 h-8 text-gold-accent" strokeWidth={1.5} />
    }
  ];

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative">
          
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="flex items-center justify-center gap-4 px-4 relative"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0">
                {stat.icon}
              </div>
              
              {/* Stat Text */}
              <div className="flex flex-col text-left">
                <span className="font-serif text-2xl sm:text-3xl font-extrabold text-charcoal leading-none">
                  {stat.num}
                </span>
                <span className="font-sans text-xs sm:text-sm text-charcoal/60 mt-1">
                  {stat.label}
                </span>
              </div>

              {/* Vertical divider */}
              {index < stats.length - 1 && (
                <span className="hidden md:block absolute right-0 top-1/6 bottom-1/6 w-[1px] bg-gold-accent/20" />
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
