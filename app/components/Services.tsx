const services = [
  {
    emoji: '⚡',
    title: '24/7 Continuous Power Generation',
    description:
      'Solar panels work at peak capacity during daylight hours while wind turbines generate power continuously — day and night, calm or stormy. Together, they eliminate energy gaps and ensure your supply never stops.',
    color: 'from-primary to-blue-400',
  },
  {
    emoji: '💰',
    title: 'Significant Cost Savings',
    description:
      'Our hybrid solar wind energy systems can cut electricity bills by up to 80%. With government subsidies, net metering, and rapid ROI, switching to green energy has never made more financial sense.',
    color: 'from-accent to-yellow-400',
  },
  {
    emoji: '🌍',
    title: 'Eco-Friendly Zero-Emission Power',
    description:
      'Every kilowatt from AeroSun replaces fossil-fuel electricity — reducing carbon emissions, improving local air quality, and contributing directly to India&apos;s renewable energy goals. Clean energy for a cleaner future.',
    color: 'from-secondary to-teal-400',
  },
  {
    emoji: '📡',
    title: 'Smart IoT Monitoring',
    description:
      'Our smart energy systems come with real-time IoT dashboards so you can track solar output, wind generation, consumption, and savings from anywhere. Data-driven decisions, maximum efficiency.',
    color: 'from-primary to-secondary',
  },
  {
    emoji: '🔧',
    title: 'Low Maintenance, High Reliability',
    description:
      'Engineered for durability, our systems require minimal upkeep. With self-starting wind rotors and weather-resistant solar panels, AeroSun installations run reliably in urban rooftops, rural fields, highways, and parks alike.',
    color: 'from-teal-400 to-cyan-400',
  },
  {
    emoji: '📐',
    title: 'Efficient Use of Space',
    description:
      'Hybrid systems generate more energy per square metre than standalone solar or wind alone — ideal for space-constrained sites like urban rooftops, roadside infrastructure, and compact commercial plots.',
    color: 'from-pink-400 to-rose-400',
  },
]

export default function Services() {
  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">Key Features &amp; Benefits</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Why Hybrid Energy Changes Everything
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-secondary" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`} />
              <div className="p-8">
                <div className="text-5xl mb-5">{service.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
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
