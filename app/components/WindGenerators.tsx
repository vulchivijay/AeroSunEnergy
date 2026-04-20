import Image from 'next/image'
import Link from 'next/link'

const generators = [
  {
    id: 'h-darrieus',
    title: 'H-Darrieus Turbine',
    subtitle: 'Urban Corridors & Mid-Wind Sites',
    badge: 'H-VAWT',
    badgeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    imageSrc: '/images/h-darrieus-turbine-aerosunenergy.png',
    imageAlt: 'H-Darrieus wind turbine by AeroSun Energy',
    highlights: ['Rated capacity 1 kW – 200 kW', 'Performs in 3 to 8 m/s wind zones', 'Compact footprint for constrained sites', 'Efficient lift-based rotor design'],
    description:
      'The H-Darrieus turbine uses lift-driven vertical blades to capture wind efficiently without needing active yaw control. It performs reliably in variable urban and semi-urban airflow, making it suitable for highway edges, industrial plots, and compact utility installations.',
    accentFrom: 'from-blue-400',
    accentTo: 'to-purple-400',
  },
  {
    id: 'flower',
    title: 'Helical Flower Turbine',
    subtitle: 'Urban Rooftops & Quiet Environments',
    badge: 'Flower VAWT',
    badgeColor: 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300',
    imageSrc: '/images/helical-turbine-aerosunenergy.png',
    imageAlt: 'Helical flower-style vertical wind turbine by AeroSun Energy',
    highlights: ['Rated capacity 0.5 – 50 kW', 'Works at wind speeds ≥ 2 m/s', 'Omni-directional – no yaw needed', 'Near-silent operation'],
    description:
      'Flower turbines feature multiple helical petal-shaped blades arranged symmetrically around a vertical axis, resembling a blooming flower in motion. They capture wind from any horizontal direction without requiring a yaw mechanism, making them ideal for turbulent urban airflows. Their low rotational noise and elegant appearance suit rooftop installations, parks, and environmentally sensitive areas.',
    accentFrom: 'from-pink-400',
    accentTo: 'to-rose-400',
  },
  {
    id: 'savonius',
    title: 'Savonius VAWT',
    subtitle: 'Low Wind Speed & Off-Grid Sites',
    badge: 'Low-Wind VAWT',
    badgeColor: 'bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300',
    imageSrc: '/images/savonius-turbine-aerosunenergy.png',
    imageAlt: 'Savonius vertical-axis wind turbine by AeroSun Energy',
    highlights: ['Rated capacity 0.3 – 30 kW', 'Self-starting from 1.5 m/s', 'Works in turbulent & gusty winds', 'Minimal maintenance'],
    description:
      'The Savonius vertical-axis wind turbine uses two or more curved bucket-shaped scoops mounted on a vertical shaft. The differential drag between the concave and convex faces causes rotation even at very low wind speeds, making it self-starting without any external mechanism. Perfect for remote off-grid locations, hilly terrain, and areas with inconsistent or low-velocity wind resources where conventional turbines cannot operate efficiently.',
    accentFrom: 'from-teal-400',
    accentTo: 'to-cyan-400',
  },
  {
    id: 'rooftop-vawt',
    title: 'Rooftop Smart VAWT',
    subtitle: 'Homes, Apartments & Terrace Retrofits',
    badge: 'Rooftop',
    badgeColor: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
    imageSrc: '/images/roof-turbine-aerosunenergy.png',
    imageAlt: 'Rooftop vertical wind turbine by AeroSun Energy',
    highlights: ['Compact structure for terrace loads', 'Performs in mixed city airflow', 'Low-noise residential profile', 'Hybrid-ready with rooftop solar'],
    description:
      'Rooftop VAWTs are designed for dense urban settings where space and noise matter. Combined with rooftop solar, they extend generation windows beyond daylight and help homes or small facilities improve self-consumption and bill savings.',
    accentFrom: 'from-orange-400',
    accentTo: 'to-yellow-400',
  },
]

export default function WindGenerators() {
  return (
    <section id="wind-generators" className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-lg text-gray-900 dark:text-gray-100">Our Technology</span>
          <h2 className="mt-2 text-3xl sm:text-4xl text-gray-600 dark:text-white">
            Wind Turbines for Hybrid Solar Wind Systems
          </h2>
          <p className="mt-4 text-lg text-gray-900 dark:text-gray-100 max-w-3xl mx-auto">
            We offer a full spectrum of wind generators — from conventional three-blade turbines to innovative flower turbines and minimal-airflow vertical-axis rotors — so every site gets the right technology.
          </p>
          <div className="mt-6 mx-auto w-16 h-1 rounded-md bg-gradient-to-r from-primary to-secondary" />
        </div>

        {/* Generator cards */}
        <div className="flex flex-col gap-16">
          {generators.map((gen, idx) => (
            <div
              key={gen.id}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center bg-white dark:bg-gray-800 rounded-md shadow-2xl overflow-hidden`}
            >
              {/* Illustration panel */}
              <div className={`flex-shrink-0 flex items-center justify-center w-full lg:w-72 h-64 bg-gradient-to-br ${gen.accentFrom} ${gen.accentTo} bg-opacity-10 dark:bg-opacity-20`}>
                <div className="relative h-full w-full">
                  <Image
                    src={gen.imageSrc}
                    alt={gen.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 18rem, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-8">
                <span className={`inline-block text-sm font-semibold tracking-widest px-3 py-1 rounded-md mb-4 ${gen.badgeColor}`}>
                  {gen.badge}
                </span>
                <h3 className="text-2xl font-semibold tracking-widest text-gray-900 dark:text-gray-100 mb-1">{gen.title}</h3>
                <p className="text-lg font-medium text-primary mb-4 text-gray-600 dark:text-gray-900">{gen.subtitle}</p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{gen.description}</p>

                {/* Key specs */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {gen.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-lg text-gray-700 dark:text-gray-300">
                      <svg className="h-4 w-4 mt-0.5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className={`inline-block bg-gradient-to-r ${gen.accentFrom} ${gen.accentTo} text-white font-semoibold px-6 py-2.5 rounded-xl shadow-xl hover:opacity-90 transition-opacity text-lg opacity-65 pointer-events-none`}
                >
                  Get a Quote →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
