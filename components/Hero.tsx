export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-blue-600 to-secondary overflow-hidden animate-fadeIn">
      {/* Background decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Text content */}
        <div className="text-white z-10">
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6 uppercase tracking-wide">
            Clean &amp; Renewable
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Powering the Future with{' '}
            <span className="text-accent">Sun &amp; Wind</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-lg">
            Clean, sustainable energy solutions for tomorrow. We harness the natural power of the sun and wind to deliver affordable, reliable green energy across India.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-block bg-white text-primary font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-accent hover:text-white transition-colors duration-200"
            >
              Get Started
            </a>
            <a
              href="#contact"
              className="inline-block border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* SVG Illustration */}
        <div className="flex justify-center lg:justify-end z-10" aria-hidden="true">
          <svg
            width="420"
            height="380"
            viewBox="0 0 420 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-sm lg:max-w-md drop-shadow-2xl"
          >
            {/* Sun */}
            <circle cx="320" cy="70" r="50" fill="#FBC02D" opacity="0.95" />
            <g stroke="#FBC02D" strokeWidth="3" strokeLinecap="round" opacity="0.7">
              <line x1="320" y1="5" x2="320" y2="20" />
              <line x1="320" y1="120" x2="320" y2="135" />
              <line x1="255" y1="70" x2="270" y2="70" />
              <line x1="370" y1="70" x2="385" y2="70" />
              <line x1="274" y1="24" x2="284" y2="34" />
              <line x1="356" y1="106" x2="366" y2="116" />
              <line x1="366" y1="24" x2="356" y2="34" />
              <line x1="284" y1="106" x2="274" y2="116" />
            </g>

            {/* Ground */}
            <rect x="0" y="320" width="420" height="60" fill="#43A047" opacity="0.4" rx="4" />

            {/* Wind Turbine 1 */}
            {/* Tower */}
            <polygon points="95,320 105,320 102,160 98,160" fill="white" opacity="0.9" />
            {/* Hub */}
            <circle cx="100" cy="158" r="8" fill="white" opacity="0.95" />
            {/* Blade 1 */}
            <ellipse cx="100" cy="110" rx="7" ry="45" fill="white" opacity="0.85" transform="rotate(0 100 158)" />
            {/* Blade 2 */}
            <ellipse cx="100" cy="110" rx="7" ry="45" fill="white" opacity="0.85" transform="rotate(120 100 158)" />
            {/* Blade 3 */}
            <ellipse cx="100" cy="110" rx="7" ry="45" fill="white" opacity="0.85" transform="rotate(240 100 158)" />

            {/* Wind Turbine 2 (smaller) */}
            <polygon points="205,320 213,320 211,200 207,200" fill="white" opacity="0.8" />
            <circle cx="209" cy="198" r="6" fill="white" opacity="0.9" />
            <ellipse cx="209" cy="162" rx="5" ry="33" fill="white" opacity="0.75" transform="rotate(0 209 198)" />
            <ellipse cx="209" cy="162" rx="5" ry="33" fill="white" opacity="0.75" transform="rotate(120 209 198)" />
            <ellipse cx="209" cy="162" rx="5" ry="33" fill="white" opacity="0.75" transform="rotate(240 209 198)" />

            {/* Solar Panel */}
            <rect x="240" y="240" width="140" height="70" rx="6" fill="#1565C0" opacity="0.9" />
            <g stroke="#90CAF9" strokeWidth="1.5" opacity="0.6">
              <line x1="240" y1="258" x2="380" y2="258" />
              <line x1="240" y1="275" x2="380" y2="275" />
              <line x1="240" y1="292" x2="380" y2="292" />
              <line x1="268" y1="240" x2="268" y2="310" />
              <line x1="296" y1="240" x2="296" y2="310" />
              <line x1="324" y1="240" x2="324" y2="310" />
              <line x1="352" y1="240" x2="352" y2="310" />
            </g>
            {/* Panel stand */}
            <line x1="290" y1="310" x2="280" y2="325" stroke="white" strokeWidth="3" opacity="0.8" />
            <line x1="330" y1="310" x2="340" y2="325" stroke="white" strokeWidth="3" opacity="0.8" />
            <line x1="275" y1="325" x2="345" y2="325" stroke="white" strokeWidth="3" opacity="0.8" />

            {/* Clouds */}
            <ellipse cx="50" cy="60" rx="35" ry="18" fill="white" opacity="0.25" />
            <ellipse cx="75" cy="50" rx="30" ry="15" fill="white" opacity="0.25" />
            <ellipse cx="30" cy="55" rx="25" ry="12" fill="white" opacity="0.2" />

            <ellipse cx="180" cy="40" rx="28" ry="14" fill="white" opacity="0.2" />
            <ellipse cx="205" cy="32" rx="22" ry="11" fill="white" opacity="0.2" />
          </svg>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-bounce" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
