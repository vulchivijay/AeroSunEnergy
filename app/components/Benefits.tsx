'use client'

import { motion } from 'framer-motion'
import { TrendingDown, Globe, ShieldCheck, Infinity } from 'lucide-react'

const benefits = [
  {
    icon: <TrendingDown className="h-8 w-8 text-primary" />,
    title: 'Significant Cost Savings',
    desc: 'Dramatically reduce your electricity bills from day one. Most systems pay for themselves within 4–6 years through energy savings and government incentives.',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-100 dark:border-blue-800',
  },
  {
    icon: <Globe className="h-8 w-8 text-secondary" />,
    title: 'Sustainability',
    desc: 'Every kilowatt-hour of renewable energy generated directly reduces carbon emissions, helping India meet its net-zero targets and preserving the environment.',
    bg: 'bg-green-50 dark:bg-green-900/20',
    border: 'border-green-100 dark:border-green-800',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent" />,
    title: 'Energy Independence',
    desc: 'Break free from grid outages and rising utility tariffs. Generate your own clean power and take full control of your energy future.',
    bg: 'bg-yellow-50 dark:bg-yellow-900/20',
    border: 'border-yellow-100 dark:border-yellow-800',
  },
  {
    icon: <Infinity className="h-8 w-8 text-purple-500" />,
    title: 'Continuous Power Supply',
    desc: 'The hybrid solar + wind architecture ensures power availability around the clock — sunshine or overcast, calm or windy, day or night.',
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    border: 'border-purple-100 dark:border-purple-800',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Why Go Hybrid</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Benefits
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-secondary" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={cardVariants}
              className={`p-8 rounded-2xl border ${b.bg} ${b.border} hover:shadow-lg hover:scale-105 transition-all duration-300`}
            >
              <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white dark:bg-gray-700 shadow-sm">
                {b.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{b.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
