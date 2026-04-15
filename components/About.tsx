'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l4 9H5l1 9 13-13h-6l2-5H5z" />
      </svg>
    ),
    title: 'Sustainable',
    desc: 'Zero-emission energy production that protects the environment for future generations.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Cost-Effective',
    desc: 'Reduce your electricity bills drastically with our optimized renewable energy systems.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Reliable',
    desc: 'Engineered for durability and peak performance in all weather conditions across India.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Who We Are</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            About AeroSun Energy
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-secondary" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              AeroSun Energy is a leading renewable energy company that delivers world-class <span className="font-bold text-gray-900 dark:text-white">hybrid solar and wind energy solutions</span> to homes, businesses, and industries. Our hybrid systems combine the best of both worlds — solar panels that harvest sunlight during the day and wind turbines that generate power around the clock — so you always have a reliable, uninterrupted electricity supply.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              From rooftop installations to open commercial spaces and road-side deployments, our certified engineers design tailored hybrid systems that maximize energy output while minimizing environmental impact. We are committed to making clean energy accessible and affordable for all — urban and rural India alike.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {features.map((f) => (
              <div
                key={f.title}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4 p-3 rounded-full bg-white dark:bg-gray-700 shadow-sm">
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{f.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
