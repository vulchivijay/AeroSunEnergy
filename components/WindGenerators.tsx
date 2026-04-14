const generators = [
  {
    id: 'hawt',
    title: '3-Blade Horizontal Axis Wind Turbine',
    subtitle: 'High-Wind Sites & Wind Farms',
    badge: 'HAWT',
    badgeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    highlights: ['Rated capacity 1 kW – 5 MW+', 'Optimal at wind speeds ≥ 6 m/s', 'Hub height 20 – 120 m', 'Efficiency up to 45 %'],
    description:
      'The three-blade horizontal-axis wind turbine is the industry benchmark for large-scale power generation. Its aerodynamic blades rotate around a horizontal shaft, converting high-speed wind kinetic energy into electricity with exceptional efficiency. Best suited for open plains, coastal sites, and dedicated wind farms where consistent, strong winds are available.',
    accentFrom: 'from-primary',
    accentTo: 'to-blue-400',
    illustration: (
      <svg width="180" height="200" viewBox="0 0 180 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Tower */}
        <polygon points="83,190 97,190 93,70 87,70" fill="#cbd5e1" />
        {/* Hub */}
        <circle cx="90" cy="68" r="10" fill="#94a3b8" />
        {/* Blade 1 – up */}
        <ellipse cx="90" cy="28" rx="8" ry="38" fill="#e2e8f0" transform="rotate(0 90 68)" />
        {/* Blade 2 – lower-right */}
        <ellipse cx="90" cy="28" rx="8" ry="38" fill="#e2e8f0" transform="rotate(120 90 68)" />
        {/* Blade 3 – lower-left */}
        <ellipse cx="90" cy="28" rx="8" ry="38" fill="#e2e8f0" transform="rotate(240 90 68)" />
        {/* Ground line */}
        <rect x="0" y="190" width="180" height="10" fill="#bbf7d0" rx="2" opacity="0.6" />
        {/* Motion arcs */}
        <path d="M58,45 A40,40 0 0,1 122,45" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="4 3" fill="none" opacity="0.6" />
      </svg>
    ),
  },
  {
    id: 'flower',
    title: 'Flower Turbine',
    subtitle: 'Urban Rooftops & Quiet Environments',
    badge: 'Flower VAWT',
    badgeColor: 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300',
    highlights: ['Rated capacity 0.5 – 50 kW', 'Works at wind speeds ≥ 2 m/s', 'Omni-directional – no yaw needed', 'Near-silent operation'],
    description:
      'Flower turbines feature multiple helical petal-shaped blades arranged symmetrically around a vertical axis, resembling a blooming flower in motion. They capture wind from any horizontal direction without requiring a yaw mechanism, making them ideal for turbulent urban airflows. Their low rotational noise and elegant appearance suit rooftop installations, parks, and environmentally sensitive areas.',
    accentFrom: 'from-pink-400',
    accentTo: 'to-rose-400',
    illustration: (
      <svg width="180" height="200" viewBox="0 0 180 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Mast */}
        <rect x="86" y="100" width="8" height="90" fill="#cbd5e1" rx="3" />
        {/* 8 petals around centre (90,100) */}
        <ellipse cx="90" cy="72" rx="11" ry="26" fill="#fbcfe8" opacity="0.9" transform="rotate(0 90 100)" />
        <ellipse cx="90" cy="72" rx="11" ry="26" fill="#f9a8d4" opacity="0.85" transform="rotate(45 90 100)" />
        <ellipse cx="90" cy="72" rx="11" ry="26" fill="#fbcfe8" opacity="0.9" transform="rotate(90 90 100)" />
        <ellipse cx="90" cy="72" rx="11" ry="26" fill="#f9a8d4" opacity="0.85" transform="rotate(135 90 100)" />
        <ellipse cx="90" cy="72" rx="11" ry="26" fill="#fbcfe8" opacity="0.9" transform="rotate(180 90 100)" />
        <ellipse cx="90" cy="72" rx="11" ry="26" fill="#f9a8d4" opacity="0.85" transform="rotate(225 90 100)" />
        <ellipse cx="90" cy="72" rx="11" ry="26" fill="#fbcfe8" opacity="0.9" transform="rotate(270 90 100)" />
        <ellipse cx="90" cy="72" rx="11" ry="26" fill="#f9a8d4" opacity="0.85" transform="rotate(315 90 100)" />
        {/* Centre hub */}
        <circle cx="90" cy="100" r="9" fill="#e879a0" />
        {/* Top cap */}
        <ellipse cx="90" cy="100" rx="22" ry="5" fill="#fda4af" opacity="0.4" />
        {/* Ground line */}
        <rect x="0" y="190" width="180" height="10" fill="#bbf7d0" rx="2" opacity="0.6" />
        {/* Base plate */}
        <ellipse cx="90" cy="190" rx="20" ry="4" fill="#94a3b8" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: 'savonius',
    title: 'Savonius VAWT',
    subtitle: 'Low Wind Speed & Off-Grid Sites',
    badge: 'Low-Wind VAWT',
    badgeColor: 'bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300',
    highlights: ['Rated capacity 0.3 – 30 kW', 'Self-starting from 1.5 m/s', 'Works in turbulent & gusty winds', 'Minimal maintenance'],
    description:
      'The Savonius vertical-axis wind turbine uses two or more curved bucket-shaped scoops mounted on a vertical shaft. The differential drag between the concave and convex faces causes rotation even at very low wind speeds, making it self-starting without any external mechanism. Perfect for remote off-grid locations, hilly terrain, and areas with inconsistent or low-velocity wind resources where conventional turbines cannot operate efficiently.',
    accentFrom: 'from-teal-400',
    accentTo: 'to-cyan-400',
    illustration: (
      <svg width="180" height="200" viewBox="0 0 180 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Mast */}
        <rect x="86" y="60" width="8" height="130" fill="#cbd5e1" rx="3" />
        {/* Top disc */}
        <ellipse cx="90" cy="62" rx="28" ry="6" fill="#94a3b8" opacity="0.6" />
        {/* Bottom disc */}
        <ellipse cx="90" cy="182" rx="28" ry="6" fill="#94a3b8" opacity="0.6" />
        {/* Scoop A – right-facing concave */}
        <path
          d="M90,65 C115,78 115,135 90,150 C90,130 76,110 76,90 C76,76 83,65 90,65Z"
          fill="#99f6e4"
          opacity="0.85"
        />
        {/* Scoop B – left-facing concave (offset down) */}
        <path
          d="M90,100 C65,113 65,162 90,175 C90,155 104,135 104,115 C104,101 97,91 90,100Z"
          fill="#5eead4"
          opacity="0.85"
        />
        {/* Ground line */}
        <rect x="0" y="190" width="180" height="10" fill="#bbf7d0" rx="2" opacity="0.6" />
        {/* Rotation arrow */}
        <path d="M118,95 A32,32 0 0,1 118,125" stroke="#2dd4bf" strokeWidth="2" strokeDasharray="5 3" fill="none" markerEnd="url(#arrow)" opacity="0.7" />
      </svg>
    ),
  },
]

export default function WindGenerators() {
  return (
    <section id="wind-generators" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">Our Technology</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Wind Energy Generators
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            We offer a full spectrum of wind generators — from conventional three-blade turbines to innovative flower turbines and minimal-airflow vertical-axis rotors — so every site gets the right technology.
          </p>
          <div className="mt-6 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-secondary" />
        </div>

        {/* Generator cards */}
        <div className="flex flex-col gap-16">
          {generators.map((gen, idx) => (
            <div
              key={gen.id}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center bg-white dark:bg-gray-800 rounded-3xl shadow-md overflow-hidden`}
            >
              {/* Illustration panel */}
              <div className={`flex-shrink-0 flex items-center justify-center w-full lg:w-72 h-64 bg-gradient-to-br ${gen.accentFrom} ${gen.accentTo} bg-opacity-10 dark:bg-opacity-20`}>
                {gen.illustration}
              </div>

              {/* Content */}
              <div className="flex-1 p-8">
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${gen.badgeColor}`}>
                  {gen.badge}
                </span>
                <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-1">{gen.title}</h3>
                <p className="text-sm font-medium text-primary mb-4">{gen.subtitle}</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{gen.description}</p>

                {/* Key specs */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {gen.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <svg className="h-4 w-4 mt-0.5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`inline-block bg-gradient-to-r ${gen.accentFrom} ${gen.accentTo} text-white font-bold px-6 py-2.5 rounded-lg shadow hover:opacity-90 transition-opacity text-sm`}
                >
                  Get a Quote →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
