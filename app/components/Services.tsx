const services = [
  {
    emoji: '💰',
    title: 'Significant Cost Savings',
    description:
      'Our hybrid solar wind energy systems can cut electricity bills by up to 80%. With government subsidies, net metering, and rapid ROI, switching to green energy has never made more financial sense.',
    color: 'from-red-400 to-rose-400',
  },
  {
    emoji: '🌍',
    title: 'Eco-Friendly Zero-Emission Power',
    description:
      'Every kilowatt from AeroSun replaces fossil-fuel electricity — reducing carbon emissions, improving local air quality, and contributing directly to India&apos;s renewable energy goals. Clean energy for a cleaner future.',
    color: 'from-violet-400 to-rose-400',
  },
  {
    emoji: '📡',
    title: 'Smart IoT Monitoring',
    description:
      'Our smart energy systems come with real-time IoT dashboards so you can track solar output, wind generation, consumption, and savings from anywhere. Data-driven decisions, maximum efficiency.',
    color: 'from-purple-400 to-rose-400',
  },
  {
    emoji: '🔧',
    title: 'Low Maintenance, High Reliability',
    description:
      'Engineered for durability, our systems require minimal upkeep. With self-starting wind rotors and weather-resistant solar panels, AeroSun installations run reliably in urban rooftops, rural fields, highways, and parks alike.',
    color: 'from-yellow-400 to-cyan-400',
  },
  {
    emoji: '📐',
    title: 'Efficient Use of Space',
    description:
      'Hybrid systems generate more energy per square metre than standalone solar or wind alone — ideal for space-constrained sites like urban rooftops, roadside infrastructure, and compact commercial plots.',
    color: 'from-pink-400 to-rose-400',
  },
]

import Image from 'next/image'

export default function Services() {
  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-widest text-md text-gray-600 dark:text-gray-900">Key Features &amp; Benefits</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            Why Hybrid Energy Changes Everything
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-secondary" />
        </div>

        {/* Services Image */}
        <div className="mb-16">
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-primary/20 to-accent/20 rounded-2xl blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/90 shadow-2xl backdrop-blur-sm dark:border-white/10 dark:bg-slate-950/90">
              <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                Manufacturing Excellence
              </div>
              <div className="aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/forming-aerosunenergy.png"
                  alt="AeroSun Energy manufacturing facility showcasing precision forming and assembly of hybrid energy systems"
                  fill
                  sizes="(min-width: 1024px) 64rem, 92vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" aria-hidden="true" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="max-w-3xl text-lg font-semibold">
                  Our state-of-the-art manufacturing processes ensure every component meets the highest standards of quality and durability, from turbine blades to solar panel integration.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`} />
              <div className="p-8">
                <div className="mb-4 p-1 w-12 h-12 text-2xl inline-flex items-center justify-center rounded-xl shadow-xl bg-gray-50 dark:bg-gray-700">{service.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-block mt-6 text-primary font-semibold hover:text-secondary transition-colors"
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
