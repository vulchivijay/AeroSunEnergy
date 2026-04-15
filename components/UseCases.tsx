'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const useCases = [
  {
    emoji: '🛣️',
    title: 'Roads & Highways',
    desc: 'Pole-mounted hybrid units power street lighting and traffic systems along highways, eliminating grid dependency and reducing maintenance crews.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    emoji: '🌳',
    title: 'Parks & Public Spaces',
    desc: 'Compact flower turbines and solar canopies blend into park landscapes, powering lighting, charging stations, and water features silently.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  },
  {
    emoji: '🏠',
    title: 'Residential Rooftops',
    desc: 'Homeowners pair rooftop solar panels with a compact VAWT for continuous off-peak generation, slashing bills and achieving near energy independence.',
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
  },
  {
    emoji: '🏭',
    title: 'Open & Commercial Spaces',
    desc: 'Large-scale hybrid arrays on open land or commercial rooftops supply factories, warehouses, and business parks with reliable, low-cost green energy.',
    img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">Where We Deploy</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Use Cases
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            AeroSun hybrid systems are built for diverse environments — urban and rural, large and small.
          </p>
          <div className="mt-6 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-secondary" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {useCases.map((uc) => (
            <motion.div
              key={uc.title}
              variants={cardVariants}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={uc.img}
                  alt={uc.title}
                  fill
                  className="object-cover group-hover:brightness-110 transition-all duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <div className="text-3xl mb-3">{uc.emoji}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{uc.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{uc.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
