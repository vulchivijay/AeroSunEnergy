"use client"

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

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
  const [now, setNow] = useState<number | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const updateNow = () => setNow(Date.now())
    updateNow()

    const interval = window.setInterval(updateNow, 1000)
    return () => window.clearInterval(interval)
  }, [])

  const stats = useMemo(() => {
    const referenceNow = now ?? TARGET_DATE.getTime()
    const parts = getTimeParts(TARGET_DATE, referenceNow)
    return [
      { label: 'Days', value: parts.days },
      { label: 'Hours', value: parts.hours },
      { label: 'Mins', value: parts.minutes },
    ]
  }, [now])

  if (!isMounted) {
    return (
      <section className="relative overflow-hidden border-b border-emerald-100 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.15),_transparent_30%),linear-gradient(135deg,#f0fdf4_0%,#ecfeff_28%,#f8fafc_100%)] px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
        <div className="relative mx-auto max-w-[1400px]">
          <div className="rounded-[32px] border border-emerald-200/80 bg-white/75 p-5 shadow-[0_30px_80px_-45px_rgba(16,185,129,0.8)] backdrop-blur-sm sm:p-7 lg:p-8">
            <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="animate-pulse space-y-4">
                <div className="h-9 w-44 rounded-full bg-emerald-100" />
                <div className="h-16 w-full rounded-2xl bg-slate-200" />
                <div className="h-5 w-4/5 rounded-full bg-slate-200" />
              </div>
              <div className="h-56 rounded-[28px] bg-slate-200/70" />
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden border-b border-emerald-100 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.15),_transparent_30%),linear-gradient(135deg,#f0fdf4_0%,#ecfeff_28%,#f8fafc_100%)] px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
      <div className="absolute inset-0 opacity-70">
        <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-lime-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        <div className="rounded-[32px] border border-emerald-200/80 bg-white/75 p-5 shadow-[0_30px_80px_-45px_rgba(16,185,129,0.8)] backdrop-blur-sm sm:p-7 lg:p-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-700 sm:text-[12px]">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Government Subsidy Initiative
              </div>

              <h2 className="mt-6 text-4xl font-black leading-[0.95] tracking-[0.06em] text-slate-900 sm:text-5xl xl:text-[5rem]">
                PM Surya Ghar
                <span className="mt-2 block text-emerald-600">Muft Bijli Yojana</span>
              </h2>

              <p className="mt-5 max-w-xl text-lg text-slate-700 sm:text-xl">
                Make your rooftop solar dream affordable with up to ₹ 78,000 in central subsidy and a complete application support experience from AeroSun Energy.
              </p>

              <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-amber-200 bg-linear-to-r from-amber-50 via-orange-50 to-rose-50 px-4 py-2.5 shadow-[0_12px_24px_-18px_rgba(245,158,11,0.7)]">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-linear-to-r from-red-500 to-amber-500 shadow-[0_0_0_4px_rgba(251,191,36,0.18)]" />
                <span className="text-[11px] font-black uppercase tracking-[0.18em] text-amber-700 sm:text-[12px]">
                  Subsidy ends 31<sup>st</sup> March 2027
                </span>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_18px_28px_-18px_rgba(5,150,105,0.9)] transition hover:bg-emerald-500"
                >
                  Apply Now
                </Link>
                <Link
                  href="/know-eligibility"
                  className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700"
                >
                  Know Eligibility
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] border border-emerald-200 bg-linear-to-br from-slate-900 via-slate-800 to-emerald-950 p-5 text-white shadow-[0_28px_60px_-28px_rgba(15,23,42,0.9)]">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-200">Subsidy</div>
                  <div className="mt-2 text-4xl font-black tracking-[0.05em] text-white">₹ 78,000</div>
                </div>
                <div className="rounded-lg border border-emerald-400/40 bg-emerald-500/10 px-3 py-2 text-right">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-200">Max</div>
                  <div className="text-sm font-semibold text-white">per home</div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-2 py-3 text-center">
                    <div className="text-2xl font-black tracking-[0.06em] text-white sm:text-3xl">{item.value}</div>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-100">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-emerald-300/30 bg-emerald-400/10 p-4">
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-100">Offer Window</div>
                <div className="mt-2 text-lg text-white">Limited duration – apply before the current subsidy cycle closes.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
