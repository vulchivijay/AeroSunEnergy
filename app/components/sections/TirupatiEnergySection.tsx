'use client'

import Link from 'next/link'
import { ArrowUpRight, Sun, Wind, Zap } from 'lucide-react'
import { useLocale } from '@/lib/LocaleContext'

export default function TirupatiEnergySection() {
  const { t } = useLocale()
  const content = t.tirupatiSeo

  return (
    <section className="bg-[#f8f7f2] px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="relative rounded-[2rem] border border-[#cfe0d1] bg-[#eaf2e9] p-6 sm:p-9 lg:px-12 lg:py-10">
          <div className="max-w-4xl pt-20 sm:pt-32 lg:pt-0 lg:pr-52">
            <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#087a61] sm:text-xs">
              {content.eyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#102b28] sm:text-4xl lg:text-[2.75rem]">
              {content.title}
            </h2>

            <p className="mt-5 max-w-4xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {content.description}
            </p>
          </div>

          <div className="absolute right-4 top-4 flex h-20 w-20 items-center justify-center sm:right-6 sm:top-6 sm:h-32 sm:w-32 lg:right-10 lg:top-8 lg:h-40 lg:w-40" aria-hidden="true">
            <div className="absolute inset-2 rounded-full border border-[#3d5a80]/45" />
            <div className="absolute inset-5 motion-safe:animate-[spin_28s_linear_infinite] rounded-full border border-dashed border-[#7b2cbf]/60 motion-reduce:animate-none" />
            <div className="absolute inset-0 motion-safe:animate-[spin_38s_linear_infinite_reverse] rounded-full border border-[#1d3557]/35 motion-reduce:animate-none" />
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#ff6b6b] text-[#183153] shadow-[0_0_45px_rgba(255,107,107,0.4)] sm:h-16 sm:w-16 lg:h-20 lg:w-20">
              <Sun className="h-6 w-6 motion-safe:animate-[spin_20s_linear_infinite] motion-reduce:animate-none sm:h-9 sm:w-9 lg:h-10 lg:w-10" strokeWidth={1.5} />
            </div>
            <span className="absolute right-1 top-2 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-[#254d70] text-[#9bf6ff] sm:right-2 sm:top-3 sm:h-8 sm:w-8">
              <Wind className="h-3 w-3 sm:h-4 sm:w-4" />
            </span>
            <span className="absolute bottom-2 left-0 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-[#7b2cbf] text-[#ffd6a5] sm:bottom-3 sm:left-1 sm:h-8 sm:w-8">
              <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
            </span>
          </div>

          <div className="mt-7 flex justify-end">
            <Link
              href="/contact"
              className="relative z-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#12865e] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0f704e] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#087a61]"
            >
              {content.contactCta}
              <ArrowUpRight className="h-4 w-4 shrink-0" strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
