'use client'

import { motion } from 'framer-motion'
import { Lightbulb, ShieldCheck, Layers, MapPin } from 'lucide-react'
import Image from 'next/image'

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
    <section id="why-us" className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-gray-600 dark:text-white">Our Advantages</span>
          <h2 className="mt-2 text-3xl sm:text-4xl text-gray-600 dark:text-white">
            Why Choose AeroSun for Hybrid Energy
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-md bg-gradient-to-r from-primary to-secondary" />
        </motion.div>

        {/* Why Choose Us Image */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative max-w-7xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-primary/20 to-secondary/20 rounded-md blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-md border border-white/20 bg-white/90 shadow-2xl backdrop-blur-sm dark:border-white/10 dark:bg-slate-950/90">
              <div className="absolute left-6 top-6 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                Future-Ready Innovation
              </div>
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/future-aerosunenergy.png"
                  alt="AeroSun Energy's vision for future renewable energy infrastructure - advanced hybrid systems powering smart cities"
                  fill
                  sizes="(min-width: 1024px) 80rem, 92vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" aria-hidden="true" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="max-w-3xl text-md">
                  Our commitment to innovation drives us to continuously evolve our technology, ensuring our clients always have access to the most advanced and efficient renewable energy solutions available.
                </p>
              </div>
            </div>
          </div>
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
              className="p-6 rounded-md shadow-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:shadow-lg hover:scale-105 transition-all duration-150"
            >
              <div className="mb-4 p-1 w-12 h-12 text-2xl inline-flex items-center justify-center rounded-xl shadow-xl bg-gray-50 dark:bg-gray-700">
                {r.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{r.title}</h3>
              <p className="text-md text-gray-500 dark:text-gray-400 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
