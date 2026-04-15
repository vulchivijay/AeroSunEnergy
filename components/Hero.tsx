'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-blue-600 to-secondary overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Text content */}
        <motion.div
          className="text-white z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6 uppercase tracking-wide">
            Hybrid Solar &amp; Wind Energy
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Power Your World —{' '}
            <span className="text-accent">Day and Night</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-6 max-w-lg">
            AeroSun Energy delivers cutting-edge hybrid solar wind energy systems that generate clean electricity around the clock. From residential rooftops to smart energy roads, our renewable energy solutions across India keep homes, businesses, and cities powered — sustainably.
          </p>
          {/* Installation type badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="inline-flex items-center gap-1 bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
              🛣️ Smart Roads
            </span>
            <span className="inline-flex items-center gap-1 bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
              🏡 Rooftops
            </span>
            <span className="inline-flex items-center gap-1 bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
              🌳 Public Parks
            </span>
            <span className="inline-flex items-center gap-1 bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
              🏭 Open Land
            </span>
          </div>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <a
              href="#how-it-works"
              className="inline-block bg-white text-primary font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-accent hover:text-white transition-colors duration-200"
            >
              See How It Works
            </a>
            <a
              href="#contact"
              className="inline-block border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 hover:scale-105 transition-all duration-200"
            >
              Get a Free Quote
            </a>
          </motion.div>
        </motion.div>

        {/* Hero image */}
        <motion.div
          className="flex justify-center lg:justify-end z-10"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="relative w-full max-w-xl">
            <div className="absolute inset-6 rounded-[2rem] bg-accent/20 blur-3xl" aria-hidden="true" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-sm">
              <Image
                src="/images/home-aerosunenergy.png"
                alt="AeroSun Energy hybrid solar and wind installation"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-white/10" aria-hidden="true" />
            </div>
            <div className="absolute -bottom-5 left-4 rounded-2xl border border-white/20 bg-slate-950/65 px-4 py-3 text-white shadow-xl backdrop-blur-md sm:left-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">Hybrid Output</p>
              <p className="mt-1 text-lg font-bold">Solar + wind working together</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-bounce" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
