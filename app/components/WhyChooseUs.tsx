'use client'

import { motion } from 'framer-motion'
import { Lightbulb, ShieldCheck, Layers, MapPin } from 'lucide-react'

const reasons = [
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: 'Certified Expert Team',
    desc: 'Our engineers and energy consultants are certified specialists in hybrid solar wind energy systems with proven installations across urban and rural India.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-secondary" />,
    title: 'Innovative Smart Systems',
    desc: 'Every AeroSun installation includes IoT-enabled monitoring, smart inverters, and AI-assisted output optimisation — true smart energy systems built for the future.',
  },
  {
    icon: <Layers className="h-8 w-8 text-accent" />,
    title: 'Fully Scalable Solutions',
    desc: 'From a single-home solar wind hybrid system to city-wide green energy infrastructure, our modular architecture scales effortlessly to match any project size or budget.',
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: 'Reliable 24/7 Support',
    desc: 'Round-the-clock customer support and a rapid-response maintenance team ensure your hybrid energy system always runs at full capacity — no downtime, no surprises.',
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

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-secondary uppercase tracking-widest text-md text-gray-500 dark:text-white">Our Advantages</span>
          <h2 className="mt-2 text-3xl sm:text-4xl text-gray-600 dark:text-white">
            Why Choose AeroSun Energy
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
          {reasons.map((r) => (
            <motion.div
              key={r.title}
              variants={cardVariants}
              className="p-6 rounded-2xl shadow-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4 p-3 inline-block rounded-xl bg-gray-50 dark:bg-gray-700 shadow-sm">
                {r.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{r.title}</h3>
              <p className="text-md text-gray-500 dark:text-gray-400 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
