import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '/gallery', isRoute: true },
    { name: 'Packages', href: '#packages' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (name) => {
    setActiveLink(name);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-cream-light/90 backdrop-blur-md shadow-md py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 h-16 overflow-visible" onClick={() => handleLinkClick('Home')}>
            <img src={isScrolled ? "/logo.png" : "/logo_white_feather.png"} alt="Swastik Event & Decoration Logo" className="h-22 sm:h-28 w-auto max-w-none object-contain" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={`font-sans text-[16px] font-medium tracking-wide transition-colors duration-300 relative py-1.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300 ${
                    isScrolled
                      ? activeLink === link.name
                        ? 'text-gold-accent after:w-0'
                        : 'text-charcoal hover:text-gold-accent after:w-0 hover:after:w-full after:bg-gold-accent'
                      : activeLink === link.name
                        ? 'text-white after:w-0'
                        : 'text-charcoal hover:text-white after:w-0 hover:after:w-full after:bg-white'
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={`font-sans text-[16px] font-medium tracking-wide transition-colors duration-300 relative py-1.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300 ${
                    isScrolled
                      ? activeLink === link.name
                        ? 'text-gold-accent after:w-0'
                        : 'text-charcoal hover:text-gold-accent after:w-0 hover:after:w-full after:bg-gold-accent'
                      : activeLink === link.name
                        ? 'text-white after:w-0'
                        : 'text-charcoal hover:text-white after:w-0 hover:after:w-full after:bg-white'
                  }`}
                >
                  {link.name}
                </a>
              )
            )}
          </div>

          {/* Book Now Button */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/917898192050?text=Hello%20Swastik%20Events,%20I%20would%20like%20to%20book%20an%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold-accent hover:bg-gold-dark text-white font-sans text-sm font-medium py-2.5 px-6 rounded-full shadow-lg transition-all duration-300 hover:shadow-gold-accent/20 hover:-translate-y-0.5 group"
            >
              Book Now
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`hover:text-gold-accent focus:outline-none p-2 transition-colors duration-300 ${
                isScrolled ? 'text-charcoal' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-cream-light/95 backdrop-blur-md shadow-lg border-t border-stone-200/60 transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'opacity-100 translate-y-0 visible' 
          : 'opacity-0 -translate-y-4 invisible h-0 overflow-hidden'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => handleLinkClick(link.name)}
                className={`block px-4 py-3 rounded-xl font-sans text-base font-semibold transition-all ${
                  activeLink === link.name
                    ? 'bg-gold-accent/10 text-gold-accent pl-6'
                    : 'text-charcoal hover:bg-gold-light/40 hover:text-gold-accent'
                }`}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.name)}
                className={`block px-4 py-3 rounded-xl font-sans text-base font-semibold transition-all ${
                  activeLink === link.name
                    ? 'bg-gold-accent/10 text-gold-accent pl-6'
                    : 'text-charcoal hover:bg-gold-light/40 hover:text-gold-accent'
                }`}
              >
                {link.name}
              </a>
            )
          )}
          <div className="pt-4 px-4">
            <a
              href="https://wa.me/917898192050?text=Hello%20Swastik%20Events,%20I%20would%20like%20to%20book%20an%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-gold-accent hover:bg-gold-dark text-white font-sans text-base font-medium py-3 rounded-full shadow-md transition-all duration-300"
            >
              Book Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
