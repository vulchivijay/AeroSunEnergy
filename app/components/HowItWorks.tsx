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
          <span className="text-primary uppercase tracking-widest text-md text-gray-500 dark:text-white">Simple Process</span>
          <h2 className="mt-2 text-3xl sm:text-4xl text-gray-600 dark:text-white">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            From site visit to 24/7 power generation — here&apos;s how we turn any location into a clean energy source with our solar wind hybrid system.
          </p>
          <div className="mt-6 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-secondary" />
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
                <div className="relative h-60 md:h-120 w-full md:w-1/2 overflow-hidden rounded-2xl mb-5">
                  <Image
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    fill
                    sizes="(min-width: 768px) 19vw, 46vw"
                    className="object-cover"
                  />
                </div>
                {/* Content card */}
                <div className="flex-1 bg-white w-full md:W-1/2 dark:bg-gray-800 rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0">{step.icon}</span>
                    <div className="w-3/4">
                      <p className={`text-md uppercase tracking-widest mb-1`}>
                        Step {step.number}
                      </p>
                      <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Centre node */}
                  <div className="flex flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary items-center justify-center text-white text-lg shadow-lg z-10">
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
