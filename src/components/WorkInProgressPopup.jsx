import React, { useState, useEffect } from 'react';
import { X, Construction, Sparkles } from 'lucide-react';

export default function WorkInProgressPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[9998]"
        style={{ background: 'rgba(15, 10, 5, 0.70)', backdropFilter: 'blur(8px)' }}
        onClick={() => setVisible(false)}
      />

      {/* Popup Card */}
      <div className="fixed z-[9999] inset-0 flex items-center justify-center px-4" style={{ pointerEvents: 'none' }}>
        <div
          className="relative w-full max-w-lg rounded-3xl overflow-hidden"
          style={{
            pointerEvents: 'auto',
            background: 'linear-gradient(160deg, #1c1610 0%, #2a1f12 60%, #1c1610 100%)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.18)',
            animation: 'popupEnter 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both',
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setVisible(false)}
            aria-label="Close"
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
          >
            <X className="w-4 h-4" />
          </button>

          {/* Content */}
          <div className="px-8 sm:px-10 pt-10 pb-10 text-center">

            {/* Glowing icon */}
            <div className="mx-auto mb-6 relative w-fit">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #c9a84c22 0%, #F7C35F33 100%)',
                  border: '1px solid rgba(201,168,76,0.3)',
                  boxShadow: '0 0 30px rgba(201,168,76,0.2)',
                }}
              >
                {/* Hammer & wrench SVG */}
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="#F7C35F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              {/* glow dot */}
              <div
                className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center"
                style={{ background: '#F7C35F', boxShadow: '0 0 10px #F7C35F' }}
              >
                <Sparkles className="w-2.5 h-2.5 text-charcoal" />
              </div>
            </div>

            {/* Tag pill */}
            <div
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest mb-5 px-4 py-1.5 rounded-full"
              style={{
                background: 'rgba(201,168,76,0.12)',
                color: '#F7C35F',
                border: '1px solid rgba(201,168,76,0.25)',
                letterSpacing: '0.15em',
              }}
            >
              ✦ &nbsp;Almost Ready
            </div>

            {/* Heading */}
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 leading-snug"
              style={{ fontFamily: 'Georgia, serif', color: '#f5f0e8' }}
            >
              We're Still Setting <br />
              <span style={{ color: '#F7C35F' }}>Everything Up</span>
            </h2>

            {/* Description */}
            <p
              className="text-sm sm:text-[15px] leading-relaxed mb-8"
              style={{ color: 'rgba(245,240,232,0.6)' }}
            >
              Our website is currently being finalized and some sections may not be fully ready yet. We're putting the finishing touches on everything to make sure your experience is just right. Feel free to look around — we'll be completely live very soon!
            </p>

            {/* Divider with dots */}
            <div className="flex items-center justify-center gap-2 mb-7">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="rounded-full"
                  style={{
                    width: i === 1 ? 20 : 6,
                    height: 4,
                    background: i === 1 ? '#F7C35F' : 'rgba(255,255,255,0.15)',
                  }}
                />
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
              <button
                onClick={() => setVisible(false)}
                className="w-full sm:w-auto px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #c9a84c 0%, #F7C35F 100%)',
                  color: '#1a1208',
                  boxShadow: '0 4px 20px rgba(201,168,76,0.4)',
                }}
              >
                Continue Browsing →
              </button>

              <a
                href="https://wa.me/917898192050"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setVisible(false)}
                className="w-full sm:w-auto px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  color: 'rgba(245,240,232,0.85)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes popupEnter {
          0%   { opacity: 0; transform: scale(0.80) translateY(40px); }
          100% { opacity: 1; transform: scale(1)    translateY(0px);  }
        }
      `}</style>
    </>
  );
}
