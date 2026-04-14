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
          <p className="text-lg sm:text-xl text-white/90 mb-6 max-w-lg">
            Clean, sustainable energy solutions for tomorrow. We harness the natural power of the sun and wind — from traditional three-blade turbines to innovative flower turbines and low-wind vertical-axis generators — to deliver affordable, reliable green energy across India.
          </p>
          {/* Turbine type badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="inline-flex items-center gap-1 bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
              🌀 3-Blade HAWT
            </span>
            <span className="inline-flex items-center gap-1 bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
              🌸 Flower Turbines
            </span>
            <span className="inline-flex items-center gap-1 bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
              ♻️ Low-Wind VAWT
            </span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#wind-generators"
              className="inline-block bg-white text-primary font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-accent hover:text-white transition-colors duration-200"
            >
              Explore Turbines
            </a>
            <a
              href="#contact"
              className="inline-block border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* SVG Illustration – three wind generator types + solar panel */}
        <div className="flex justify-center lg:justify-end z-10" aria-hidden="true">
          <svg
            width="460"
            height="400"
            viewBox="0 0 460 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-sm lg:max-w-lg drop-shadow-2xl"
          >
            {/* Sun */}
            <circle cx="380" cy="65" r="45" fill="#FBC02D" opacity="0.95" />
            <g stroke="#FBC02D" strokeWidth="3" strokeLinecap="round" opacity="0.7">
              <line x1="380" y1="5" x2="380" y2="18" />
              <line x1="380" y1="112" x2="380" y2="125" />
              <line x1="320" y1="65" x2="333" y2="65" />
              <line x1="427" y1="65" x2="440" y2="65" />
              <line x1="338" y1="23" x2="347" y2="32" />
              <line x1="413" y1="98" x2="422" y2="107" />
              <line x1="422" y1="23" x2="413" y2="32" />
              <line x1="347" y1="98" x2="338" y2="107" />
            </g>

            {/* Ground */}
            <rect x="0" y="340" width="460" height="60" fill="#43A047" opacity="0.4" rx="4" />

            {/* ── 3-Blade HAWT (left) ── */}
            {/* Tower */}
            <polygon points="68,340 78,340 75,170 71,170" fill="white" opacity="0.9" />
            {/* Hub */}
            <circle cx="73" cy="168" r="8" fill="white" opacity="0.95" />
            {/* Blade 1 */}
            <ellipse cx="73" cy="120" rx="7" ry="45" fill="white" opacity="0.85" transform="rotate(0 73 168)" />
            {/* Blade 2 */}
            <ellipse cx="73" cy="120" rx="7" ry="45" fill="white" opacity="0.85" transform="rotate(120 73 168)" />
            {/* Blade 3 */}
            <ellipse cx="73" cy="120" rx="7" ry="45" fill="white" opacity="0.85" transform="rotate(240 73 168)" />
            {/* Label */}
            <text x="73" y="358" textAnchor="middle" fill="white" fontSize="8" opacity="0.7" fontFamily="sans-serif">HAWT</text>

            {/* ── Flower Turbine (centre) ── */}
            {/* Mast */}
            <rect x="196" y="200" width="6" height="140" fill="white" opacity="0.85" rx="2" />
            {/* Petals arranged around vertical axis centre at (199, 220) */}
            {/* Each petal is an ellipse rotated around the mast top */}
            <ellipse cx="199" cy="185" rx="9" ry="22" fill="#a5f3fc" opacity="0.85" transform="rotate(0 199 207)" />
            <ellipse cx="199" cy="185" rx="9" ry="22" fill="#67e8f9" opacity="0.80" transform="rotate(45 199 207)" />
            <ellipse cx="199" cy="185" rx="9" ry="22" fill="#a5f3fc" opacity="0.85" transform="rotate(90 199 207)" />
            <ellipse cx="199" cy="185" rx="9" ry="22" fill="#67e8f9" opacity="0.80" transform="rotate(135 199 207)" />
            <ellipse cx="199" cy="185" rx="9" ry="22" fill="#a5f3fc" opacity="0.85" transform="rotate(180 199 207)" />
            <ellipse cx="199" cy="185" rx="9" ry="22" fill="#67e8f9" opacity="0.80" transform="rotate(225 199 207)" />
            <ellipse cx="199" cy="185" rx="9" ry="22" fill="#a5f3fc" opacity="0.85" transform="rotate(270 199 207)" />
            <ellipse cx="199" cy="185" rx="9" ry="22" fill="#67e8f9" opacity="0.80" transform="rotate(315 199 207)" />
            {/* Centre hub */}
            <circle cx="199" cy="207" r="7" fill="white" opacity="0.95" />
            {/* Label */}
            <text x="199" y="358" textAnchor="middle" fill="white" fontSize="8" opacity="0.7" fontFamily="sans-serif">Flower</text>

            {/* ── Savonius VAWT / Low-Wind Turbine (right of centre) ── */}
            {/* Mast */}
            <rect x="296" y="195" width="6" height="145" fill="white" opacity="0.85" rx="2" />
            {/* Top & bottom discs */}
            <ellipse cx="299" cy="197" rx="22" ry="5" fill="white" opacity="0.6" />
            <ellipse cx="299" cy="335" rx="22" ry="5" fill="white" opacity="0.6" />
            {/* Savonius S-rotor: two opposing curved scoops */}
            {/* Scoop A – curves right */}
            <path
              d="M299,197 C320,210 320,260 299,280 C299,260 285,240 285,220 C285,207 292,197 299,197Z"
              fill="#bfdbfe"
              opacity="0.8"
            />
            {/* Scoop B – curves left */}
            <path
              d="M299,255 C278,242 278,292 299,310 C299,290 313,270 313,250 C313,237 306,227 299,255Z"
              fill="#93c5fd"
              opacity="0.8"
            />
            {/* Label */}
            <text x="299" y="358" textAnchor="middle" fill="white" fontSize="8" opacity="0.7" fontFamily="sans-serif">VAWT</text>

            {/* ── Solar Panel ── */}
            <rect x="355" y="255" width="90" height="55" rx="5" fill="#1565C0" opacity="0.9" />
            <g stroke="#90CAF9" strokeWidth="1.5" opacity="0.6">
              <line x1="355" y1="269" x2="445" y2="269" />
              <line x1="355" y1="283" x2="445" y2="283" />
              <line x1="355" y1="297" x2="445" y2="297" />
              <line x1="376" y1="255" x2="376" y2="310" />
              <line x1="397" y1="255" x2="397" y2="310" />
              <line x1="418" y1="255" x2="418" y2="310" />
              <line x1="439" y1="255" x2="439" y2="310" />
            </g>
            {/* Panel stand */}
            <line x1="375" y1="310" x2="368" y2="325" stroke="white" strokeWidth="2.5" opacity="0.8" />
            <line x1="425" y1="310" x2="432" y2="325" stroke="white" strokeWidth="2.5" opacity="0.8" />
            <line x1="363" y1="325" x2="437" y2="325" stroke="white" strokeWidth="2.5" opacity="0.8" />

            {/* Clouds */}
            <ellipse cx="40" cy="55" rx="32" ry="16" fill="white" opacity="0.2" />
            <ellipse cx="62" cy="45" rx="26" ry="13" fill="white" opacity="0.2" />
            <ellipse cx="175" cy="38" rx="24" ry="12" fill="white" opacity="0.18" />
            <ellipse cx="197" cy="30" rx="19" ry="10" fill="white" opacity="0.18" />
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
