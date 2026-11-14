"use client"

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { useLocale } from '@/lib/LocaleContext'

const TARGET_DATE = new Date('2027-03-31T23:59:59+05:30')

function getTimeParts(target: Date, now: number) {
  const diff = Math.max(target.getTime() - now, 0)
  const totalSeconds = Math.floor(diff / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)

  return {
    days: String(days).padStart(3, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
  }
}

export default function SchemeBanner() {
  const { t } = useLocale()
  const banner = t.home.schemeBanner

  const [now, setNow] = useState<number | null>(null)

  useEffect(() => {
    const updateNow = () => setNow(Date.now())
    updateNow()

    const interval = window.setInterval(updateNow, 1000)
    return () => window.clearInterval(interval)
  }, [])

  const stats = useMemo(() => {
    if (now === null) return banner.stats

    const referenceNow = now
    const parts = getTimeParts(TARGET_DATE, referenceNow)
    return banner.stats.map((item, index) => ({
      ...item,
      value: [parts.days, parts.hours, parts.minutes][index] ?? item.value,
    }))
  }, [banner.stats, now])

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#cffafe] via-[#c7d2fe] to-[#fbcfe8] px-4 py-9 text-[#172554] sm:px-6 sm:py-11 lg:px-10 lg:py-12">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-white/55 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-[#ede9fe]/55 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-x-10 gap-y-7 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="flex min-w-0 items-start gap-4 sm:gap-6">
            <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/75 text-2xl font-black text-indigo-800 shadow-lg shadow-indigo-950/10 ring-1 ring-indigo-900/10 sm:h-14 sm:w-14 sm:text-3xl">
              ₹
            </span>
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-900 sm:text-xs">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                {banner.badge}
              </div>
              <h2 className="mt-3 text-[26px] font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
                {banner.title}{' '}
                <span className="font-semibold text-indigo-800">{banner.titleAccent}</span>
              </h2>
              <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
                {banner.description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pl-16 lg:pl-0">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-indigo-700 px-5 text-sm font-bold text-white shadow-md shadow-indigo-950/20 transition hover:bg-indigo-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
            >
              {banner.ctaPrimary}
            </Link>
            <Link
              href="/know-eligibility"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-indigo-900/25 bg-white/45 px-5 text-sm font-bold text-slate-800 transition hover:bg-white/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
            >
              {banner.ctaSecondary}
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-indigo-900/10 bg-white/70 p-4 shadow-sm shadow-indigo-950/5 backdrop-blur-sm">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-900">{banner.cardLabel}</div>
            <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="text-2xl font-bold text-indigo-800 sm:text-3xl">₹ 78,000</span>
              <span className="text-sm text-slate-700">{banner.max} {banner.perHome}</span>
            </div>
          </div>

          <p className="rounded-2xl border border-indigo-900/10 bg-white/70 p-4 text-sm leading-6 text-slate-700 shadow-sm shadow-indigo-950/5 backdrop-blur-sm">
            {t.subsidyNotice}
          </p>

          <div className="rounded-2xl border border-indigo-900/10 bg-white/70 p-4 shadow-sm shadow-indigo-950/5 backdrop-blur-sm">
            <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-indigo-900">{banner.badgeSuffix}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {stats.map((item: { label: string; value: string }) => (
                <div key={item.label} className="min-w-[4.25rem] rounded-lg bg-indigo-950/5 px-2.5 py-1.5 text-center">
                  <span className="text-sm font-bold tabular-nums text-slate-900">{item.value}</span>
                  <span className="ml-1 text-[10px] text-slate-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-indigo-900/10 bg-white/70 p-4 shadow-sm shadow-indigo-950/5 backdrop-blur-sm">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-900">{banner.offerLabel}</div>
            <p className="mt-2 text-sm leading-6 text-slate-700">{banner.offerText}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
