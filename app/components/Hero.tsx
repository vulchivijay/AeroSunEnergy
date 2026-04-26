'use client'

import { motion } from '@/app/lib/motion'
import Link from 'next/link'
import Image from 'next/image'
import { useLocale } from '@/app/lib/LocaleContext'

export default function Hero() {
  const { t } = useLocale()
  const h = t.hero

  return (
    <section id="hero" className="relative flex min-h-screen items-center bg-[#06111d] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,136,229,0.42),transparent_30%),radial-gradient(circle_at_78%_18%,rgba(251,192,45,0.28),transparent_18%),linear-gradient(135deg,#071321_0%,#0f3254_54%,#0d5a36_100%)]" aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 hidden w-[42%] border-l border-white/10 bg-white/5 lg:block" aria-hidden="true" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:88px_88px]" aria-hidden="true" />

      <div className="relative grid w-full grid-cols-1 items-center gap-6 px-6 py-18 sm:px-3 lg:grid-cols-[1.08fr_0.92fr] lg:px-12">
        {/* Text content */}
        <motion.div
          className="z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <span className="mb-12 inline-flex rounded-md shadow-md border border-white/24 bg-white/24 px-6 py-3.5 text-md uppercase tracking-[0.45em] text-white backdrop-blur-md">
            {h.badge}
          </span>
          <h1 className="text-3xl leading-[1.4] tracking-[0.05em]! font-semibold">
            {h.title1}
            <br />
            {h.title2}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-[1.4] text-white/82">
            {h.description}
          </p>
          <div className="mt-8 grid gap-6 sm:max-w-xl sm:grid-cols-2">
            {h.proofPoints.map((point) => (
              <div key={point} className="rounded-md shadow-md bg-white/8 px-4 py-3 text-md font-medium text-white/92 backdrop-blur-md">
                {point}
              </div>
            ))}
            <div className="rounded-md bg-white/8 px-4 py-3 text-lg text-white/92 backdrop-blur-md">
              {h.billReduction}
            </div>
          </div>
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1, ease: 'easeOut' }}
          >
            <Link
              href="#how-it-works"
              title={h.buttons.exploreTitle}
              aria-label={h.buttons.exploreAriaLabel}
              data-section="how-it-works"
              className="inline-flex items-center rounded-full shadow-2xl border border-white/25 bg-white/15 px-6 py-3.5 text-md text-slate-200 backdrop-blur-md transition-colors duration-150 hover:scale-[1.02]"
            >
              {h.buttons.explore}
            </Link>
            <Link
              href="#contact"
              title={h.buttons.quoteTitle}
              aria-label={h.buttons.quoteAriaLabel}
              data-section="contact"
              className="inline-flex items-center rounded-full shadow-2xl border border-white/25 bg-white/15 px-6 py-3.5 text-md text-slate-200 backdrop-blur-md transition-colors duration-150 hover:scale-[1.02]"
            >
              {h.buttons.quote}
            </Link>
          </motion.div>

          <div className="mt-12 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/12 pt-8 sm:grid-cols-4">
            {h.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-xl text-white whitespace-nowrap">{stat.value}</p>
                <p className="mt-2 text-md uppercase tracking-[0.24em] text-white/55">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hero image */}
        <motion.div
          className="z-10 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 0.05, ease: 'easeOut' }}
        >
          <div className="relative w-full max-w-4xl">
            <div className="absolute inset-8 rounded-[2.5rem] bg-accent/20 blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/16 bg-white/8 p-3 shadow-[0_40px_120px_rgba(3,8,18,0.4)] backdrop-blur-sm">
              <div className="absolute left-6 right-6 top-6 z-10 flex items-center justify-between rounded-md border border-white/16 bg-slate-950/35 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/75 backdrop-blur-md">
                <span>{h.overlay.snapshotLabel}</span>
                <span>{h.overlay.optimisationLabel}</span>
              </div>
              <div className="relative min-h-screen md:aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/home-aerosunenergy.png"
                  alt="AeroSun Energy hybrid solar and wind installation"
                  fill
                  priority
                  loading="eager"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
                  sizes="(min-width: 1024px) 52vw, 92vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,12,24,0.06),rgba(4,12,24,0.26)_58%,rgba(4,12,24,0.64)_100%)]" aria-hidden="true" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 z-10 grid gap-2 sm:grid-cols-2">
                <div className="rounded-md border border-white/16 bg-slate-950/55 p-4 text-white backdrop-blur-md">
                  <p className="text-md font-semibold uppercase tracking-[0.08em] text-white/60">{h.overlay.primaryUseLabel}</p>
                  <p className="mt-2 text-md">{h.overlay.primaryUseValue}</p>
                </div>
                <div className="rounded-md border border-white/16 bg-white/12 p-4 text-white backdrop-blur-md">
                  <p className="text-md font-semibold uppercase tracking-[0.08em] text-white/60">{h.overlay.performanceLabel}</p>
                  <p className="mt-2 text-md">{h.overlay.performanceValue}</p>
                </div>
                <div className="rounded-md border border-white/16 bg-slate-950/55 p-4 text-white backdrop-blur-md">
                  <p className="text-md font-semibold uppercase tracking-[0.28em] text-white/65">{h.overlay.fieldAdvantageLabel}</p>
                  <p className="mt-2 text-md">{h.overlay.fieldAdvantageValue}</p>
                </div>
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
