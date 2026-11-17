"use client"

import Link from 'next/link'
import { Info } from 'lucide-react'
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
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-white to-[#f7f9fc] px-4 py-9 text-[#172554] sm:px-6 sm:py-11 lg:px-10 lg:py-12">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-white/55 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-[#ede9fe]/55 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-x-10 gap-y-7 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="flex min-w-0 items-start gap-4 sm:gap-6">
            <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/75 text-2xl font-black text-indigo-800 shadow-lg shadow-indigo-950/10 ring-1 ring-indigo-900/10 sm:h-14 sm:w-14 sm:text-3xl">
              ₹
            </span>
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-900/10 bg-white/70 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-indigo-900 sm:text-xs">
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
              prefetch={false}
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

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="relative isolate overflow-hidden rounded-[26px] border border-emerald-300/70 bg-gradient-to-br from-[#064e3b] to-[#047857] p-5 text-white shadow-xl shadow-emerald-950/15">
            <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-12 -z-10 h-36 w-36 rounded-full bg-lime-300/15 blur-2xl" />
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-100">{banner.cardLabel}</div>
            <div className="mt-3 text-3xl font-black tracking-tight text-lime-200 sm:text-4xl">₹ 78,000</div>
            <div className="mt-2 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-emerald-50">
              {banner.max} {banner.perHome}
            </div>
          </div>

          <div className="relative flex items-start gap-3 overflow-hidden rounded-[26px] border border-amber-200 bg-gradient-to-br from-[#fffdf7] to-[#fff3d8] p-5 shadow-lg shadow-amber-950/5">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-amber-950 shadow-sm shadow-amber-900/10">
              <Info className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-sm font-medium leading-6 text-amber-950 sm:text-[15px] sm:leading-7">
              {t.subsidyNotice}
            </p>
          </div>

          <div className="relative isolate overflow-hidden rounded-[26px] border border-slate-700 bg-gradient-to-br from-[#172554] via-[#1e3a8a] to-[#312e81] p-5 text-white shadow-xl shadow-indigo-950/15">
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 -right-10 -z-10 h-40 w-40 rounded-full bg-cyan-300/15 blur-2xl" />
            <div className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-100">{banner.badgeSuffix}</div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {stats.map((item: { label: string; value: string }) => (
                <div key={item.label} className="min-w-0 rounded-xl border border-white/15 bg-white/10 px-1.5 py-2.5 text-center shadow-inner shadow-white/5">
                  <span className="block text-2xl font-black leading-none tabular-nums text-cyan-200 sm:text-[27px]">{item.value}</span>
                  <span className="mt-1.5 block truncate text-sm font-semibold uppercase tracking-wide text-indigo-100">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative isolate overflow-hidden rounded-[26px] border border-violet-200 bg-gradient-to-br from-white to-violet-100 p-5 shadow-lg shadow-violet-950/10">
            <div aria-hidden="true" className="pointer-events-none absolute -right-8 -top-10 -z-10 h-28 w-28 rounded-full bg-fuchsia-300/30 blur-2xl" />
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-violet-800">{banner.offerLabel}</div>
            <p className="mt-3 text-[15px] font-semibold leading-6 text-violet-950 sm:text-base sm:leading-7">{banner.offerText}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
