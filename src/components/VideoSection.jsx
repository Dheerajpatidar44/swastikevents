import React, { useState, useRef } from 'react';

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section className="py-10 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Top Text Row: Left Heading | Right Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 items-start">
          {/* Left: Big serif heading */}
          <div>
            <h2
              className="font-serif text-4xl sm:text-5xl font-semibold text-charcoal leading-tight"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Your Love Story,<br />Our Passion
            </h2>
          </div>

          {/* Right: Small description paragraph */}
          <div className="md:pt-2">
            <p className="font-sans text-sm sm:text-base text-charcoal/65 leading-relaxed">
              At Swastik Events, we believe every love story is unique and deserves a grand celebration. With years of experience in the event industry, we offer tailored planning and management services. From consultation to the final moment, we ensure everything runs flawlessly.
            </p>
          </div>
        </div>

        {/* Video Block — centered & compact */}
        <div className="mx-auto w-full max-w-4xl">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: '16/9' }}>

            {/* Video element */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls={playing}
              playsInline
            >
              <source src="/Gallery/video.mp4" type="video/mp4" />
            </video>

            {/* Overlay: shown when NOT playing */}
            {!playing && (
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                onClick={handlePlay}
                style={{
                  background: 'rgba(0,0,0,0.08)',
                }}
              >
                {/* Golden Play Button */}
                <button
                  aria-label="Play video"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ background: '#F7C35F' }}
                >
                  {/* Play triangle */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 h-7 sm:w-8 sm:h-8 text-charcoal ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
