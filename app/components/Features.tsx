'use client'

import { motion } from 'framer-motion'
import { Clock, GitMerge, Wrench, Layers, Leaf, MapPin } from 'lucide-react'

const features = [
  {
    icon: <Clock className="h-7 w-7 text-primary" />,
    title: '24/7 Power Generation',
    desc: 'Solar and wind working together ensures continuous electricity day and night, even during cloudy or calm periods.',
  },
  {
    icon: <GitMerge className="h-7 w-7 text-secondary" />,
    title: 'Smart Grid Integration',
    desc: 'IoT-enabled controllers seamlessly feed surplus energy back to the grid and manage load balancing in real time.',
  },
  {
    icon: <Wrench className="h-7 w-7 text-accent" />,
    title: 'Low Maintenance',
    desc: 'Minimal moving parts and self-cleaning panel coatings keep operational costs low with rare service intervals.',
  },
  {
    icon: <Layers className="h-7 w-7 text-primary" />,
    title: 'Scalable Installation',
    desc: 'From a single rooftop kit to a multi-megawatt commercial array, our modular design scales with your energy needs.',
  },
  {
    icon: <Leaf className="h-7 w-7 text-secondary" />,
    title: 'Eco-Friendly',
    desc: 'Zero direct emissions during operation, recyclable components, and a lifecycle carbon footprint far below fossil fuels.',
  },
  {
    icon: <MapPin className="h-7 w-7 text-accent" />,
    title: 'Efficient Land Use',
    desc: 'Hybrid systems generate more energy per square metre, reducing land requirements compared to standalone solar or wind farms.',
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
          <div className="mt-4 mx-auto w-16 h-1 rounded-md bg-gradient-to-r from-primary to-secondary" />
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
              className="group p-8 rounded-md shadow-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:shadow-lg hover:scale-105 transition-all duration-150"
            >
              <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white dark:bg-gray-700 shadow-sm">
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
