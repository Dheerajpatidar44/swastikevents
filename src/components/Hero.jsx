
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[70vh] flex items-center bg-[url('/herobg.png')] bg-cover bg-bottom bg-no-repeat pt-32 pb-16 overflow-hidden"
    >
      {/* Background Overlay for better readability */}
      <div className="absolute inset-0 bg-charcoal/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Text & Collage Column */}
          <div className="lg:col-span-7 flex flex-col justify-between relative h-full">

            {/* Heading and Starburst Spinner */}
            <div className="relative">
              {/* Starburst shape backdrop */}
              <svg className="absolute -top-10 left-[28%] w-32 h-32 text-white/5 animate-[spin_80s_linear_infinite] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 0 L53 35 L85 15 L62 42 L100 50 L62 58 L85 85 L53 65 L50 100 L47 65 L15 85 L38 58 L0 50 L38 42 L15 15 L47 35 Z" />
              </svg>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-widest text-white leading-none mb-10 text-left select-none">
                EVENTS <br />
                MANAGEMENT
              </h1>
            </div>

            {/* Bottom Row inside Left Column: Left-Bottom Image + Description/CTA */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-end mt-4">
              {/* Left Bottom Image */}
              <div className="sm:col-span-5 relative aspect-[3.5/4] w-full overflow-hidden shadow-2xl bg-secondary lg:translate-y-16">
                <img
                  src="https://images.pexels.com/photos/15291907/pexels-photo-15291907.jpeg"
                  alt="Floral Wedding Decoration Design"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Collage & Trust Bar Column */}
          <div className="lg:col-span-5 relative w-full flex flex-col items-center mt-10 lg:mt-0">
            <div className="flex flex-col items-center transform translate-y-2 lg:translate-x-16 lg:-translate-y-10 gap-6">
              {/* Large main right image */}
              <div className="w-full max-w-[280px] aspect-[3/4] overflow-hidden shadow-2xl bg-secondary">
                <img
                  src="https://images.pexels.com/photos/35872885/pexels-photo-35872885.jpeg"
                  alt="Swastik Premium Wedding Event Celebration"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Make Reservations Button */}
              <a
                href="https://wa.me/917898192050?text=Hello%20Swastik%20Events,%20I%20would%20like%20to%20make%20a%20reservation%20for%20an%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gold-accent hover:bg-gold-dark text-white font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase py-3.5 px-6 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Make Reservations
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
