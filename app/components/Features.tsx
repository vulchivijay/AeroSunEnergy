'use client'

import { motion } from 'framer-motion'
import { Clock, GitMerge, Wrench, Layers, Leaf, MapPin } from 'lucide-react'

const features = [
  {
    icon: <Clock className="h-7 w-7 text-blue-800 dark:text-blue-100" />,
    title: '24/7 Power Generation',
    desc: 'Solar and wind working together ensures continuous electricity day and night, even during cloudy or calm periods.',
    cardBg: 'bg-blue-200/70 dark:bg-blue-900/55 border-blue-300 dark:border-blue-700 hover:border-blue-500',
    iconBg: 'bg-blue-300 dark:bg-blue-800',
  },
  {
    icon: <GitMerge className="h-7 w-7 text-emerald-800 dark:text-emerald-100" />,
    title: 'Smart Grid Integration',
    desc: 'IoT-enabled controllers seamlessly feed surplus energy back to the grid and manage load balancing in real time.',
    cardBg: 'bg-emerald-200/70 dark:bg-emerald-900/55 border-emerald-300 dark:border-emerald-700 hover:border-emerald-500',
    iconBg: 'bg-emerald-300 dark:bg-emerald-800',
  },
  {
    icon: <Wrench className="h-7 w-7 text-amber-800 dark:text-amber-100" />,
    title: 'Low Maintenance',
    desc: 'Minimal moving parts and self-cleaning panel coatings keep operational costs low with rare service intervals.',
    cardBg: 'bg-amber-200/70 dark:bg-amber-900/55 border-amber-300 dark:border-amber-700 hover:border-amber-500',
    iconBg: 'bg-amber-300 dark:bg-amber-800',
  },
  {
    icon: <Layers className="h-7 w-7 text-indigo-800 dark:text-indigo-100" />,
    title: 'Scalable Installation',
    desc: 'From a single rooftop kit to a multi-megawatt commercial array, our modular design scales with your energy needs.',
    cardBg: 'bg-indigo-200/70 dark:bg-indigo-900/55 border-indigo-300 dark:border-indigo-700 hover:border-indigo-500',
    iconBg: 'bg-indigo-300 dark:bg-indigo-800',
  },
  {
    icon: <Leaf className="h-7 w-7 text-green-800 dark:text-green-100" />,
    title: 'Eco-Friendly',
    desc: 'Zero direct emissions during operation, recyclable components, and a lifecycle carbon footprint far below fossil fuels.',
    cardBg: 'bg-green-200/70 dark:bg-green-900/55 border-green-300 dark:border-green-700 hover:border-green-500',
    iconBg: 'bg-green-300 dark:bg-green-800',
  },
  {
    icon: <MapPin className="h-7 w-7 text-cyan-800 dark:text-cyan-100" />,
    title: 'Efficient Land Use',
    desc: 'Hybrid systems generate more energy per square metre, reducing land requirements compared to standalone solar or wind farms.',
    cardBg: 'bg-cyan-200/70 dark:bg-cyan-900/55 border-cyan-300 dark:border-cyan-700 hover:border-cyan-500',
    iconBg: 'bg-cyan-300 dark:bg-cyan-800',
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

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-secondary font-semibold uppercase tracking-widest text-md text-gray-600 dark:text-white">What Sets Us Apart</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            Hybrid Solar Wind System Features
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-md bg-linear-to-r from-primary to-secondary" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={cardVariants}
              className={`group rounded-md border p-8 shadow-2xl transition-all duration-150 hover:scale-105 hover:shadow-lg ${f.cardBg}`}
            >
              <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl shadow-sm ${f.iconBg}`}>
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">{f.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
