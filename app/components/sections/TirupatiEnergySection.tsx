'use client'

import Link from 'next/link'
import { ArrowUpRight, MapPin, Sun } from 'lucide-react'
import { useLocale } from '@/lib/LocaleContext'

export default function TirupatiEnergySection() {
  const { t } = useLocale()
  const content = t.tirupatiSeo

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
      <div className="relative isolate overflow-hidden rounded-[2rem] border border-emerald-950/15 bg-gradient-to-br from-[#10233f] via-[#0f5132] to-[#155e75] p-6 shadow-[0_28px_70px_-36px_rgba(3,30,22,0.7)] sm:p-9 lg:p-12">
        <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-emerald-300/10 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-36 left-1/4 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" aria-hidden="true" />

        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(15rem,0.55fr)] lg:items-center lg:gap-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-100 sm:text-xs">
              <MapPin className="h-4 w-4 shrink-0 text-[#ff9933]" strokeWidth={2} aria-hidden="true" />
              {content.eyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              {content.title}
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-emerald-50/85 sm:text-lg sm:leading-8">
              {content.description}
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#ff9933] px-5 py-3 text-sm font-bold text-[#173b2c] shadow-[0_10px_28px_-14px_rgba(255,153,51,0.8)] transition hover:-translate-y-0.5 hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white sm:px-6"
            >
              {content.contactCta}
              <ArrowUpRight className="h-4 w-4 shrink-0" strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </div>

          <div className="relative mx-auto flex aspect-square w-full max-w-[18rem] items-center justify-center lg:max-w-[20rem]">
            <div className="absolute inset-2 rounded-full border border-white/10" aria-hidden="true" />
            <div className="absolute inset-8 rounded-full border border-dashed border-white/15" aria-hidden="true" />
            <div className="absolute h-40 w-40 rounded-full bg-emerald-300/10 blur-2xl" aria-hidden="true" />
            <div className="relative flex h-32 w-32 items-center justify-center rounded-[2rem] border border-white/15 bg-white/[0.08] text-[#ff9933] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)] backdrop-blur-sm sm:h-36 sm:w-36">
              <Sun className="h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]" strokeWidth={1.2} aria-hidden="true" />
            </div>
            <span className="absolute right-8 top-10 h-3 w-3 rounded-full bg-[#ff9933] shadow-[0_0_24px_rgba(255,153,51,0.8)]" aria-hidden="true" />
            <span className="absolute bottom-10 left-8 h-2 w-2 rounded-full bg-emerald-200/80" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
