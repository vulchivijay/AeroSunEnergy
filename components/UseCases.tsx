'use client'

import { motion } from 'framer-motion'

const useCases = [
  {
    emoji: '🛣️',
    title: 'Smart Energy Roads & Highways',
    tag: 'Infrastructure',
    tagColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    description:
      'Roads and highways are exposed to sunlight and wind 24 hours a day. AeroSun integrates solar panels into road surface barriers and wind turbines along medians and roadsides — turning every kilometre of highway into a green energy generator that powers streetlights, traffic systems, and EV charging stations.',
    points: ['Powers streetlights & signage', 'Supports EV charging infrastructure', 'Scalable across national highways', 'Supports smart city infrastructure'],
    color: 'from-primary to-blue-400',
  },
  {
    emoji: '🌳',
    title: 'Public Parks & Open Spaces',
    tag: 'Urban Green',
    tagColor: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    description:
      'Parks offer unobstructed sunlight and natural airflow. Our aesthetically designed flower turbines and solar canopies blend seamlessly into park landscapes, powering benches, Wi-Fi nodes, lighting, and event spaces — supporting sustainable urban infrastructure without disrupting the natural environment.',
    points: ['Aesthetic flower turbine designs', 'Powers park lighting & amenities', 'Silent, low-vibration operation', 'Ideal for urban and suburban parks'],
    color: 'from-secondary to-teal-400',
  },
  {
    emoji: '🏡',
    title: 'Residential Rooftops',
    tag: 'Home Energy',
    tagColor: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
    description:
      'Our solar wind hybrid system for homes combines compact rooftop solar panels with low-wind VAWT turbines — delivering round-the-clock electricity. Homeowners can cut their bills drastically, store surplus energy, and even sell power back to the grid through net metering.',
    points: ['Up to 80% reduction in electricity bills', 'Net metering & grid export ready', 'Battery storage available', 'Suits urban apartments and bungalows'],
    color: 'from-accent to-yellow-400',
  },
  {
    emoji: '🏭',
    title: 'Open Land & Commercial Spaces',
    tag: 'Commercial',
    tagColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
    description:
      'Open agricultural land, factory rooftops, warehouses, and commercial complexes represent ideal sites for large-scale hybrid deployments. AeroSun delivers scalable green energy infrastructure that offsets industrial power demands and accelerates compliance with sustainability targets.',
    points: ['Scalable from 10 kW to multi-MW', 'Reduces industrial power costs', 'Supports ESG & sustainability goals', 'Suitable for rural and urban commercial sites'],
    color: 'from-pink-400 to-rose-400',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Where We Install</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Use Cases
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Our hybrid solar wind energy systems are engineered for diverse environments — from busy highways to quiet homes — bringing renewable energy solutions across India wherever they&apos;re needed most.
          </p>
          <div className="mt-6 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-secondary" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {useCases.map((uc) => (
            <motion.div
              key={uc.title}
              variants={cardVariants}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${uc.color}`} />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{uc.emoji}</span>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${uc.tagColor}`}>
                    {uc.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {uc.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                  {uc.description}
                </p>
                <ul className="space-y-2">
                  {uc.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <svg className="h-4 w-4 mt-0.5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-block mt-6 text-primary font-semibold hover:text-secondary transition-colors"
                >
                  Learn more →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
