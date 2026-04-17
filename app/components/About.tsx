'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l4 9H5l1 9 13-13h-6l2-5H5z" />
      </svg>
    ),
    title: 'Always-On Generation',
    desc: 'Solar powers your system through the day while wind turbines keep generating at night and on cloudy days — ensuring uninterrupted electricity supply.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Cut Your Energy Bills',
    desc: 'Reduce electricity costs by up to 80% with our optimised solar wind hybrid systems — a smart investment that pays for itself and then keeps paying you.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Built to Last',
    desc: 'Engineered for low maintenance and peak performance across all climates — urban rooftops, open highways, rural farmland, and public parks alike.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-secondary uppercase tracking-widest text-md text-gray-500 dark:text-gray-100">The Technology</span>
          <h2 className="mt-2 text-3xl sm:text-4xl text-gray-600 dark:text-gray-100">
            About Our Hybrid Solar + Wind System
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-secondary" />
        </motion.div>

        <div className="grid grid-cols-1 gap-12 rounded-[2.25rem] md:border md:border-white/60 md:bg-white/75 md:p-3 shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/65 lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
          <motion.div
            className="rounded-[1.75rem] bg-slate-950 px-6 py-8 text-white shadow-2xl lg:px-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-md font-semibold uppercase tracking-[0.32em] text-accent/90">Integrated Technology</p>
            <h3 className="mt-4 max-w-lg text-2xl leading-tight sm:text-3xl">
              A hybrid platform designed to keep producing when single-source systems slow down.
            </h3>
            <p className="mt-6 text-md leading-relaxed text-white/78 mb-6">
              Our <strong>hybrid solar wind energy</strong> system combines photovoltaic solar panels and compact wind turbines into one integrated, intelligent power unit. Solar panels capture sunlight during the day while the wind turbines generate power continuously — day or night, rain or shine. Together, they complement each other perfectly: when solar output drops (overcast skies or night-time), wind steps in to fill the gap.
            </p>
            <p className="text-md leading-relaxed text-white/78 mb-6">
              The result is a <strong>smart energy system</strong> that delivers far more consistent power than either source alone. Paired with IoT-enabled monitoring and optional battery storage, you get real-time visibility and control over every kilowatt generated — the foundation of India&apos;s green energy infrastructure.
            </p>
            <p className="text-lg leading-relaxed text-white/78">
              AeroSun Energy designs and installs tailored <strong>renewable energy solutions across India</strong> — for homes, businesses, public spaces, and large-scale infrastructure — making clean, affordable power accessible to everyone.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur-md">
                <p className="text-3xl font-bold text-accent">01</p>
                <p className="mt-2 text-md text-white/72">Dual-source generation that reduces idle periods.</p>
              </div>
              <div className="rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur-md">
                <p className="text-3xl font-bold text-accent">02</p>
                <p className="mt-2 text-md text-white/72">Smart controls that balance solar, wind, and storage.</p>
              </div>
              <div className="rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur-md">
                <p className="text-3xl font-bold text-accent">03</p>
                <p className="mt-2 text-md text-white/72">Scalable deployment from home rooftops to public assets.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-gray-100 shadow-xl ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">
              <Image
                src="/images/smart-vawt-aerosunenergy.png"
                alt="Smart VAWT hybrid technology deployment by AeroSun Energy"
                fill
                sizes="(min-width: 1024px) 38vw, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-md">
                Future Ready
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="max-w-md text-base font-semibold sm:text-lg">
                  Hybrid systems engineered for dependable output, smart monitoring, and scalable installations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex flex-col items-center rounded-[1.5rem] border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="mb-4 rounded-full bg-slate-50 p-3 shadow-sm dark:bg-slate-800">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{f.title}</h3>
                  <p className="text-md text-gray-500 dark:text-gray-400">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
