'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  const proofPoints = [
    '24/7 hybrid generation',
    'Smart IoT monitoring',
    'Built for roads, rooftops, parks, and industry',
  ]

  return (
    <section className="relative flex min-h-screen items-center bg-[#06111d] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,136,229,0.42),transparent_30%),radial-gradient(circle_at_78%_18%,rgba(251,192,45,0.28),transparent_18%),linear-gradient(135deg,#071321_0%,#0f3254_54%,#0d5a36_100%)]" aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 hidden w-[42%] border-l border-white/10 bg-white/5 lg:block" aria-hidden="true" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:88px_88px]" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        {/* Text content */}
        <motion.div
          className="z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="mb-6 inline-flex rounded-md shadow-md border border-white/24 bg-white/24 px-3 py-2 text-lg uppercase tracking-[0.45em] text-white backdrop-blur-md">
            Energy Infrastructure Reimagined
          </span>
          <h1 className="max-w-3xl text-4xl leading-[1.1] tracking-[0.04em]! sm:text-4xl lg:text-5xl font-semibold">
            Hybrid solar wind energy systems in India.
            <br />
            Built for rooftops, roads, parks, and industry.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-6 text-white/82">
            AeroSun Energy designs hybrid solar and wind systems that stay productive beyond peak daylight. From rooftops and parks to highway corridors and industrial land, every installation is shaped for continuous output, lower operating cost, and cleaner infrastructure.
          </p>
          <div className="mt-8 grid gap-3 sm:max-w-xl sm:grid-cols-2">
            {proofPoints.map((point) => (
              <div key={point} className="rounded-md shadow-md bg-white/8 px-4 py-3 text-lg font-medium text-white/92 backdrop-blur-md">
                {point}
              </div>
            ))}
            <div className="rounded-md bg-white/8 px-4 py-3 text-lg text-white/92 backdrop-blur-md">
              Up to 80% reduction in electricity bills
            </div>
          </div>
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          >
            <Link
              href="#how-it-works"
              className="inline-flex items-center rounded-md bg-accent px-8 py-3.5 text-lg text-slate-200 shadow-[0_20px_40px_rgba(251,192,45,0.22)] transition-transform duration-150 hover:scale-[1.02] opacity-65 pointer-events-none"
            >
              Explore the System
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center rounded-md border border-white/25 bg-white/8 px-8 py-3.5 text-lg text-white backdrop-blur-md transition-colors duration-150 hover:bg-white/14 opacity-65 pointer-events-none"
            >
              Get a Free Quote
            </Link>
          </motion.div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-4 border-t border-white/12 pt-8 sm:grid-cols-4">
            <div>
              <p className="text-3xl text-white">24/7</p>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/55">Power Availability</p>
            </div>
            <div>
              <p className="text-3xl text-white">4-6 years</p>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/55">Typical ROI Window</p>
            </div>
            <div>
              <p className="text-3xl text-white">IoT App</p>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/55">Live Monitoring</p>
            </div>
            <div>
              <p className="text-3xl text-white">Multi-site</p>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/55">Deployment Types</p>
            </div>
          </div>
        </motion.div>

        {/* Hero image */}
        <motion.div
          className="z-10 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="relative w-full max-w-3xl">
            <div className="flex items-center justify-center my-8">
              <div className="relative rounded-full shadow-xl bg-linear-to-br from-green-50 via-white to-cyan-50 p-2 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 dark:shadow-[0_30px_80px_-40px_rgba(16,185,129,0.2)]">
                <div className="absolute inset-0 rounded-full border-2 border-green-300/50 animate-rise-glow"></div>
                <div className="absolute inset-0 rounded-full border-2 border-blue-300/30 animate-rise-glow" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute inset-0 rounded-full border-2 border-purple-300/20 animate-rise-glow" style={{ animationDelay: '1s' }}></div>
                <Image
                  src="/images/lord-shiva-aerosunenergy.png"
                  alt="Lord Shiva"
                  width={128}
                  height={128}
                  className="h-32 w-32 object-contain relative z-10 brightness-90"
                />
              </div>
            </div>
            <div className="absolute inset-8 rounded-[2.5rem] bg-accent/20 blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/16 bg-white/8 p-3 shadow-[0_40px_120px_rgba(3,8,18,0.4)] backdrop-blur-sm">
              <div className="absolute left-5 right-5 top-5 z-10 flex items-center justify-between rounded-md border border-white/16 bg-slate-950/35 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/75 backdrop-blur-md">
                <span>Hybrid Energy Snapshot</span>
                <span>Live Optimisation</span>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] sm:aspect-[5/4]">
                <Image
                  src="/images/home-aerosunenergy.png"
                  alt="AeroSun Energy hybrid solar and wind installation"
                  fill
                  priority
                  sizes="(min-width: 1024px) 52vw, 92vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,12,24,0.06),rgba(4,12,24,0.26)_58%,rgba(4,12,24,0.64)_100%)]" aria-hidden="true" />
              </div>
              <div className="absolute bottom-35 left-6 right-6 z-10 grid gap-2 sm:grid-cols-2">
                <div className="rounded-md border border-white/16 bg-slate-950/55 p-4 text-white backdrop-blur-md">
                  <p className="text-[12px] uppercase tracking-[0.28em] text-white/60">Primary Use</p>
                  <p className="mt-2 text-lg">Residential to infrastructure-scale deployment</p>
                </div>
                <div className="rounded-md border border-white/16 bg-white/12 p-4 text-white backdrop-blur-md">
                  <p className="text-[12px] uppercase tracking-[0.28em] text-white/60">Performance Logic</p>
                  <p className="mt-2 text-lg">Solar in daylight, wind beyond it</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 z-10 grid">
              <div className="rounded-md border border-white/16 bg-slate-950/55 p-4 text-white backdrop-blur-md">
                <p className="text-[12px] uppercase tracking-[0.28em] text-white/65">Field Advantage</p>
                <p className="mt-2 text-lg leading-6">One system, multiple generation windows, minimal dead time.</p>
              </div>
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
