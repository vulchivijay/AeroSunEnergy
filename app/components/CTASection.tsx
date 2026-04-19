'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CTASection() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-md shadow-2xl md:border md:border-slate-200 bg-slate-950 px-6 py-10 dark:border-white/10 sm:px-8 lg:px-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,136,229,0.34),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(67,160,71,0.24),transparent_25%),linear-gradient(135deg,rgba(7,17,29,0.28),rgba(7,17,29,0.16))]" aria-hidden="true" />
          <div className="absolute -right-10 bottom-0 top-0 hidden w-[48%] lg:block" aria-hidden="true">
            <div className="relative h-full w-full">
              <Image
                src="/images/nextgen-aerosunenergy.png"
                alt=""
                fill
                sizes="42vw"
                className="object-cover opacity-55"
              />
            </div>
          </div>
          <div className="relative grid gap-10 lg:grid-cols-[1fr_280px] lg:items-end">
            <div>
              <span className="inline-block rounded-md md:border md:border-white/16 bg-white/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.34em] text-white/72 backdrop-blur-md sm:text-md">
                Build The Right System
              </span>
              <h2 className="mt-6 max-w-3xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Plan a hybrid solar wind system that fits your site.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
                We assess the site, match the right solar and turbine mix, and design for the way your location actually behaves. Homes, public projects, and commercial deployments all need different answers.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-md bg-accent px-8 py-3.5 text-md font-bold text-slate-950 transition-transform duration-150 hover:scale-[1.02]"
                >
                  Request a Free Quote
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center rounded-md border border-white/18 bg-white/8 px-8 py-3.5 text-md font-bold text-white backdrop-blur-md transition-colors duration-150 hover:bg-white/14"
                >
                  See How It Works
                </a>
              </div>
            </div>

            <div className="relative z-10 rounded-[2rem] border border-white/16 bg-white/8 p-5 text-white backdrop-blur-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/60">Project Spectrum</p>
              <div className="mt-5 space-y-3">
                <div className="rounded-md border border-white/12 bg-slate-950/35 px-4 py-3">
                  <p className="text-md font-semibold">Residential rooftops</p>
                </div>
                <div className="rounded-md border border-white/12 bg-slate-950/35 px-4 py-3">
                  <p className="text-md font-semibold">Parks and civic spaces</p>
                </div>
                <div className="rounded-md border border-white/12 bg-slate-950/35 px-4 py-3">
                  <p className="text-md font-semibold">Industrial and open land</p>
                </div>
                <div className="rounded-md border border-white/12 bg-slate-950/35 px-4 py-3">
                  <p className="text-md font-semibold">Highways and smart infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
