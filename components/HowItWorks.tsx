'use client'

import { motion } from 'framer-motion'
import { Sun, Wind, Zap, Battery } from 'lucide-react'

const steps = [
  {
    icon: <Sun className="h-8 w-8 text-yellow-500" />,
    step: '01',
    title: 'Solar Panels Capture Sunlight',
    desc: 'High-efficiency photovoltaic panels installed on rooftops or ground mounts absorb sunlight and convert it into direct current (DC) electricity throughout the day.',
    color: 'from-yellow-400 to-orange-400',
  },
  {
    icon: <Wind className="h-8 w-8 text-blue-500" />,
    step: '02',
    title: 'Wind Turbines Generate Power',
    desc: 'Compact wind turbines — HAWT, flower, or Savonius — capture kinetic wind energy and generate electricity day and night, complementing solar output.',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    icon: <Zap className="h-8 w-8 text-green-500" />,
    step: '03',
    title: 'Smart Controller Combines Energy',
    desc: 'An IoT-enabled hybrid controller intelligently blends power from both sources, optimizing load distribution and ensuring stable, continuous electricity output.',
    color: 'from-green-400 to-teal-400',
  },
  {
    icon: <Battery className="h-8 w-8 text-purple-500" />,
    step: '04',
    title: 'Electricity is Stored & Distributed',
    desc: 'Surplus energy is stored in battery banks for use at night or during low-generation periods. The rest is fed directly to the grid or your local load.',
    color: 'from-purple-400 to-indigo-400',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">The Process</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            How It Works
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Our hybrid solar + wind system is designed to deliver uninterrupted clean energy in four simple steps.
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
          {steps.map((s) => (
            <motion.div
              key={s.step}
              variants={cardVariants}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 p-8 flex flex-col items-center text-center overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${s.color}`} />
              <span className="text-5xl font-extrabold text-gray-100 dark:text-gray-700 absolute top-4 right-4 leading-none select-none">
                {s.step}
              </span>
              <div className={`mb-5 p-4 rounded-2xl bg-gradient-to-br ${s.color} bg-opacity-10 shadow-sm`}>
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{s.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
