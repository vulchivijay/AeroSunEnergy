'use client'

import Link from 'next/link'
import { useLocale } from '@/lib/LocaleContext'

export default function TirupatiEnergySection() {
  const { t } = useLocale()
  const content = t.tirupatiSeo

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10">
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
          {content.eyebrow}
        </p>
        <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
          {content.title}
        </h2>
        <p className="mt-4 max-w-4xl text-base leading-7 text-slate-700">
          {content.description}
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-flex font-semibold text-emerald-900 underline-offset-4 hover:underline"
        >
          {content.contactCta}
        </Link>
      </div>
    </section>
  )
}
