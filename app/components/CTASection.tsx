'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLocale } from '@/app/lib/LocaleContext'

export default function CTASection() {
  const { t } = useLocale()
  const c = t.cta

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
                src="/images/customdesign-aerosunenergy.png"
                alt="Next-generation renewable energy technology by AeroSun Energy"
                fill
                sizes="42vw"
                className="object-cover opacity-55"
              />
            </div>
          </div>
          <div className="relative grid gap-10 lg:grid-cols-[1fr_280px] lg:items-end">
            <div>
              <span className="inline-block rounded-md md:border md:border-white/16 bg-white/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.34em] text-white/72 backdrop-blur-md sm:text-lg">
                {c.badge}
              </span>
              <h2 className="mt-6 max-w-3xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {c.heading}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
                {c.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-md bg-accent px-8 py-3.5 text-lg font-bold text-slate-950 transition-transform duration-150 hover:scale-[1.02]"
                >
                  {c.requestQuote}
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center rounded-md border border-white/18 bg-white/8 px-8 py-3.5 text-lg font-bold text-white backdrop-blur-md transition-colors duration-150 hover:bg-white/14 opacity-55 pointer-events-none"
                >
                  {c.seeHowItWorks}
                </a>
              </div>
            </div>

            <div className="relative z-10 rounded-[2rem] border border-white/16 bg-white/8 p-5 text-white backdrop-blur-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/60">{c.projectSpectrum}</p>
              <div className="mt-5 space-y-3">
                {c.projectTypes.map((type) => (
                  <div key={type} className="rounded-md border border-white/12 bg-slate-950/35 px-4 py-3">
                    <p className="text-lg font-semibold">{type}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
