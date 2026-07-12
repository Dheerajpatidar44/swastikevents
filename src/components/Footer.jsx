import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = 2024; // Matching the screenshot's copyright year

  return (
    <footer id="contact" className="bg-charcoal pt-16 pb-8 text-white relative overflow-hidden">
      
      {/* Soft gradient accent matching CTA header */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gold-accent/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Logo & About (3/12 cols) */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <a href="#home" className="flex items-center gap-2 group mb-4">
              <img src="/logo_white_feather.png" alt="Swastik Event & Decoration Logo" className="h-26 sm:h-34 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]" />
            </a>
            <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed mb-6 max-w-xs">
              We create unforgettable experiences with creativity, passion and perfect execution.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/swastik_eventsss/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 border border-white/10 text-white hover:text-charcoal hover:bg-gold-accent hover:border-gold-accent flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://wa.me/917898192050?text=Hello%20Swastik%20Events,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 border border-white/10 text-white hover:text-charcoal hover:bg-gold-accent hover:border-gold-accent flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.006 5.311 5.317.002 11.857.002c3.167 0 6.148 1.233 8.39 3.476 2.241 2.242 3.471 5.222 3.469 8.388-.006 6.545-5.316 11.854-11.858 11.854-.001 0-.001 0 0 0-2.001-.001-3.971-.51-5.753-1.48L0 24zm6.59-4.846c1.785 1.058 3.528 1.614 5.253 1.615 5.378 0 9.758-4.376 9.762-9.753a9.66 9.66 0 0 0-2.853-6.885c-1.839-1.838-4.285-2.85-6.892-2.85-5.385 0-9.768 4.38-9.772 9.757-.002 1.802.48 3.562 1.393 5.118L2.457 21.5l5.19-1.346zm11.705-6.494c-.309-.154-1.826-.901-2.106-1.002-.28-.102-.483-.153-.686.153-.203.307-.785 1.002-.961 1.206-.177.205-.353.229-.662.076-.309-.153-1.303-.48-2.483-1.533-.917-.818-1.536-1.828-1.716-2.135-.179-.307-.019-.473.136-.626.139-.138.309-.359.464-.538.154-.18.206-.307.31-.513.102-.206.051-.384-.026-.538-.077-.154-.686-1.656-.939-2.27-.247-.595-.501-.512-.686-.522-.178-.009-.382-.01-.587-.01s-.538.077-.82.384c-.282.307-1.077 1.051-1.077 2.561 0 1.51 1.099 2.972 1.253 3.178.154.205 2.163 3.302 5.241 4.634.731.317 1.302.507 1.747.649.736.233 1.407.2 1.937.12.59-.089 1.826-.747 2.083-1.468.257-.721.257-1.339.18-1.468-.077-.129-.282-.205-.591-.359z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2/12 cols) */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-serif text-sm font-extrabold text-gold-accent uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 font-sans text-xs sm:text-sm text-white/70">
              <li><a href="#home" className="hover:text-gold-accent transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-gold-accent transition-colors duration-300">About Us</a></li>
              <li><a href="#services" className="hover:text-gold-accent transition-colors duration-300">Services</a></li>
              <li><a href="#gallery" className="hover:text-gold-accent transition-colors duration-300">Gallery</a></li>
              <li><a href="#services" className="hover:text-gold-accent transition-colors duration-300">Packages</a></li>
              <li><a href="#contact" className="hover:text-gold-accent transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Services (2/12 cols) */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-serif text-sm font-extrabold text-gold-accent uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3 font-sans text-xs sm:text-sm text-white/70">
              <li><a href="#services" className="hover:text-gold-accent transition-colors duration-300">Wedding Decoration</a></li>
              <li><a href="#services" className="hover:text-gold-accent transition-colors duration-300">Haldi & Mehndi Decor</a></li>
              <li><a href="#services" className="hover:text-gold-accent transition-colors duration-300">Birthday Parties</a></li>
              <li><a href="#services" className="hover:text-gold-accent transition-colors duration-300">Engagement</a></li>
              <li><a href="#services" className="hover:text-gold-accent transition-colors duration-300">Grand Entries</a></li>
              <li><a href="#services" className="hover:text-gold-accent transition-colors duration-300">And Many More</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us (3/12 cols) */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="font-serif text-sm font-extrabold text-gold-accent uppercase tracking-wider mb-5">
              Contact Us
            </h4>
            <ul className="space-y-3 font-sans text-xs sm:text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-gold-accent mt-0.5 flex-shrink-0" />
                <span>Khategaon | Harda | Indore<br />Madhya Pradesh, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4.5 h-4.5 text-gold-accent flex-shrink-0" />
                <span>+91 78981 92050</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4.5 h-4.5 text-gold-accent flex-shrink-0" />
                <span className="break-all">swastikevents@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter (2/12 cols - on desktop it will flex nicely) */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-serif text-sm font-extrabold text-gold-accent uppercase tracking-wider mb-5">
              Newsletter
            </h4>
            <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
              Subscribe to get latest updates and offers.
            </p>
            {/* Input inside the footer column */}
            <form className="relative flex items-center w-full mt-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/10 font-sans text-xs px-4 py-3 rounded-full border border-white/10 focus:outline-none focus:border-gold-accent text-white pr-10 shadow-sm placeholder-white/40"
              />
              <button 
                type="submit"
                className="absolute right-1 w-8 h-8 rounded-full bg-gold-accent hover:bg-gold-dark text-white flex items-center justify-center transition-all duration-300 shadow-md focus:outline-none"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="font-sans text-xs text-white/50">
            &copy; {currentYear} Swastik Event & Decoration. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
