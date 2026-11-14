'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { useLocale } from '@/lib/LocaleContext'

export default function TirupatiEnergySection() {
  const { t } = useLocale()
  const content = t.tirupatiSeo

  return (
    <section className="bg-[#f8f7f2] px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-7 rounded-[2rem] border border-[#cfe0d1] bg-[#eaf2e9] p-6 sm:p-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10 lg:px-12 lg:py-10">
          <div className="max-w-4xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#087a61] sm:text-xs">
              {content.eyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#102b28] sm:text-4xl lg:text-[2.75rem]">
              {content.title}
            </h2>

            <p className="mt-5 max-w-4xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {content.description}
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#12865e] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0f704e] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#087a61] sm:w-fit lg:justify-self-end"
          >
            {content.contactCta}
            <ArrowUpRight className="h-4 w-4 shrink-0" strokeWidth={2.2} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
