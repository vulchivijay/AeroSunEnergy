'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const steps = [
  {
    number: '01',
    title: 'Site Assessment',
    description:
      'Our engineers visit your location — rooftop, road, park, or open land — to measure sunlight exposure, wind patterns, and available space. This data shapes a system perfectly tuned to your site.',
    icon: '📍',
    imageSrc: '/images/forming-aerosunenergy.png',
    imageAlt: 'Site assessment and planning process by AeroSun Energy',
    color: 'from-primary to-blue-400',
    cardBg: 'bg-blue-100/90 dark:bg-blue-900/55 border-blue-300 dark:border-blue-700',
    iconBg: 'bg-blue-300 dark:bg-blue-800',
    nodeBg: 'from-blue-700 to-blue-500',
  },
  {
    number: '02',
    title: 'Custom System Design',
    description:
      'We design a hybrid solar wind energy system tailored for your energy needs and budget. Solar panels are oriented for maximum daylight capture while wind turbines are sized and positioned to harvest wind around the clock.',
    icon: '📐',
    imageSrc: '/images/nextgen-aerosunenergy.png',
    imageAlt: 'Custom hybrid system design by AeroSun Energy',
    color: 'from-secondary to-teal-400',
    cardBg: 'bg-emerald-100/90 dark:bg-emerald-900/55 border-emerald-300 dark:border-emerald-700',
    iconBg: 'bg-emerald-300 dark:bg-emerald-800',
    nodeBg: 'from-emerald-700 to-teal-500',
  },
  {
    number: '03',
    title: 'Installation',
    description:
      'Our certified installation team sets up the solar panels, wind turbines, smart inverters, and optional battery storage — all integrated into one unified green energy system with zero disruption to your operations.',
    icon: '🔧',
    imageSrc: '/images/darrieus-turbine-aerosunenergy.png',
    imageAlt: 'Installation of AeroSun hybrid turbine system',
    color: 'from-accent to-yellow-400',
    cardBg: 'bg-amber-100/90 dark:bg-amber-900/55 border-amber-300 dark:border-amber-700',
    iconBg: 'bg-amber-300 dark:bg-amber-800',
    nodeBg: 'from-amber-700 to-yellow-500',
  },
  {
    number: '04',
    title: 'Smart Monitoring',
    description:
      'An IoT-enabled dashboard gives you real-time visibility into power generation, consumption, and savings — from your phone or computer. The system auto-optimises output between solar and wind at all times.',
    icon: '📊',
    imageSrc: '/images/smart-vawt-aerosunenergy.png',
    imageAlt: 'Smart monitoring dashboard for AeroSun energy systems',
    color: 'from-primary to-secondary',
    cardBg: 'bg-violet-100/90 dark:bg-violet-900/55 border-violet-300 dark:border-violet-700',
    iconBg: 'bg-violet-300 dark:bg-violet-800',
    nodeBg: 'from-violet-700 to-purple-500',
  },
  {
    number: '05',
    title: 'Continuous Power, Minimal Maintenance',
    description:
      'Once live, your hybrid system generates electricity day and night with minimal maintenance. Solar works hardest in daylight; wind covers the rest. Together, they deliver continuous, reliable power to support sustainable infrastructure.',
    icon: '⚡',
    imageSrc: '/images/future-aerosunenergy.png',
    imageAlt: 'Continuous clean power output from AeroSun hybrid systems',
    color: 'from-secondary to-green-400',
    cardBg: 'bg-cyan-100/90 dark:bg-cyan-900/55 border-cyan-300 dark:border-cyan-700',
    iconBg: 'bg-cyan-300 dark:bg-cyan-800',
    nodeBg: 'from-cyan-700 to-green-500',
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
    <section id="how-it-works" className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-primary uppercase tracking-widest text-md text-gray-900 dark:text-gray-100">Simple Process</span>
          <h2 className="mt-2 text-3xl sm:text-4xl text-gray-600 dark:text-white">
            How Hybrid Solar Wind Systems Work
          </h2>
          <p className="mt-4 text-md text-gray-900 dark:text-gray-100 max-w-3xl mx-auto">
            From site visit to 24/7 power generation — here&apos;s how we turn any location into a clean energy source with our solar wind hybrid system.
          </p>
          <div className="mt-6 mx-auto w-16 h-1 rounded-md bg-gradient-to-r from-primary to-secondary" />
        </motion.div>

        {/* Process Overview Image */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative max-w-7xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-md blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-md border border-white/20 bg-white/90 shadow-2xl backdrop-blur-sm dark:border-white/10 dark:bg-slate-950/90">
              <div className="absolute left-6 top-6 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                Next-Gen Technology
              </div>
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/nextgen-aerosunenergy.png"
                  alt="Next-generation hybrid energy technology by AeroSun - advanced systems for modern renewable infrastructure"
                  fill
                  sizes="(min-width: 1024px) 80rem, 92vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" aria-hidden="true" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="max-w-4xl text-lg">
                  Our cutting-edge hybrid systems combine the latest in solar photovoltaic technology with advanced vertical-axis wind turbines, creating a seamless energy generation platform that adapts to any environment.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-20 -translate-x-1/2" aria-hidden="true" />

          <motion.div
            className="flex flex-col gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                variants={cardVariants}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="relative h-60 md:h-120 w-full md:w-1/2 overflow-hidden rounded-md mb-5">
                  <Image
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    fill
                    sizes="(min-width: 768px) 42vw, 92vw"
                    className="object-cover"
                  />
                </div>
                {/* Content card */}
                <div className={`flex-1 w-full md:W-1/2 rounded-md border p-8 shadow-md transition-shadow hover:shadow-lg ${step.cardBg}`}>
                  <div className="flex items-start gap-4">
                    <span className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md text-3xl shadow-sm ${step.iconBg}`}>{step.icon}</span>
                    <div className="w-3/4">
                      <p className={`text-md uppercase tracking-widest mb-1`}>
                        Step {step.number}
                      </p>
                      <h3 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Centre node */}
                  <div className={`z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-md bg-linear-to-br text-lg text-white shadow-lg ${step.nodeBg}`}>
                    {step.number}
                  </div>

                  {/* Spacer (mirrors content card on the other side) */}
                  <div className="flex-1" aria-hidden="true" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
