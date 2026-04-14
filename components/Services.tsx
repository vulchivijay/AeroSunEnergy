const services = [
  {
    emoji: '☀️',
    title: 'Solar Energy Solutions',
    description:
      'From residential rooftop panels to large commercial solar farms, we design, install, and maintain high-efficiency photovoltaic systems that slash your energy costs.',
    color: 'from-yellow-400 to-orange-400',
  },
  {
    emoji: '🌬️',
    title: 'Wind Energy Solutions',
    description:
      'Harness the power of the wind with our advanced turbine installations. Our engineers assess wind potential and deliver optimized systems for maximum power generation.',
    color: 'from-primary to-blue-400',
  },
  {
    emoji: '⚡',
    title: 'Hybrid Energy Systems',
    description:
      'Combine solar and wind in a single integrated hybrid system for continuous power supply, even during low-sunlight or low-wind periods, with smart battery storage.',
    color: 'from-secondary to-teal-400',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">What We Offer</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Our Services
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-secondary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
