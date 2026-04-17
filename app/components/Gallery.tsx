'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const galleryItems = [
  {
    src: '/images/rooftop-installation.svg',
    alt: 'Residential rooftop with solar panels and a small vertical-axis wind turbine',
    title: 'Residential Rooftop',
    tag: 'Home Energy',
    tagColor: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
    description:
      'Solar panels combined with a compact VAWT deliver round-the-clock electricity for homes — cutting bills by up to 80%.',
  },
  {
    src: '/images/smart-road.svg',
    alt: 'Smart highway at night with roadside solar barriers and wind turbines powering streetlights and EV charging',
    title: 'Smart Energy Roads',
    tag: 'Infrastructure',
    tagColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    description:
      'Roadside solar barriers and median-mounted wind turbines power streetlights, traffic systems, and EV charging stations 24/7.',
  },
  {
    src: '/images/park-turbines.svg',
    alt: 'Public park with decorative flower turbines and a solar canopy bench',
    title: 'Public Parks',
    tag: 'Urban Green',
    tagColor: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    description:
      'Elegant flower turbines and solar canopy benches beautify parks while powering lighting, Wi-Fi nodes, and event spaces.',
  },
  {
    src: '/images/commercial-farm.svg',
    alt: 'Open land commercial solar wind farm with HAWT turbines and solar panel arrays',
    title: 'Commercial Solar Wind Farm',
    tag: 'Commercial',
    tagColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
    description:
      'Large-scale open-land deployments with HAWT turbines and solar arrays — scalable from 10 kW to multi-MW for industry and agriculture.',
  },
  {
    src: '/images/hybrid-system.svg',
    alt: 'Schematic diagram of an integrated smart hybrid solar and wind energy system with battery storage, inverter, IoT monitoring, and grid connection',
    title: 'Integrated Smart System',
    tag: 'Technology',
    tagColor: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300',
    description:
      'Our AI-optimised inverter seamlessly balances solar and wind output, battery storage, and grid export — managed via real-time IoT dashboard.',
  },
  {
    src: '/images/offshore-wind-solar.svg',
    alt: 'Offshore wind turbines and floating solar panels at sunrise over the ocean',
    title: 'Offshore Wind + Floating Solar',
    tag: 'Large Scale',
    tagColor: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
    description:
      'Offshore turbines and floating solar arrays maximise generation over open water — delivering clean energy to coastal cities and industrial ports.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">Installations &amp; Systems</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Our Energy Solutions in Action
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            From urban rooftops to offshore platforms, AeroSun hybrid solar wind systems are engineered for every environment — delivering clean, continuous power wherever it is needed.
          </p>
          <div className="mt-6 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-secondary" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-[1.02]"
            >
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden bg-gray-100 dark:bg-gray-700">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
                <a
                  href="#contact"
                  className="inline-block mt-4 text-primary font-semibold hover:text-secondary transition-colors text-sm"
                >
                  Get a Quote →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
