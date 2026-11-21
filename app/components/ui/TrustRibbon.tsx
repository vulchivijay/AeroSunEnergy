'use client'

import { ShieldCheck } from 'lucide-react'
import { useLocale } from '@/lib/LocaleContext'

export function TrustRibbon({
  className = '',
}: {
  className?: string
}) {
  const { t } = useLocale()

  return (
    <div
      className={`relative isolate overflow-hidden border-y border-white/25 bg-[linear-gradient(135deg,rgba(23,37,84,0.96),rgba(49,46,129,0.92),rgba(15,23,42,0.98))] text-white ${className}`}
      aria-label={t.ui.transparentSolarExperience}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_50%,rgba(245,199,106,0.18),transparent_18%),radial-gradient(circle_at_88%_50%,rgba(56,189,248,0.12),transparent_20%)]"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute left-[4%] top-1/2 h-28 w-28 -translate-y-1/2 rounded-full border border-amber-200/10 motion-safe:animate-slow-ping"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute right-[7%] top-1/2 h-20 w-20 -translate-y-1/2 rounded-full border border-sky-200/10 motion-safe:animate-slow-ping [animation-delay:1.2s]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/20 to-transparent motion-safe:animate-[trust-ribbon-shimmer_7s_linear_infinite]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-amber-300/0 via-amber-200/70 to-sky-200/0 motion-safe:animate-[trust-ribbon-sweep_5s_ease-in-out_infinite]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-right bg-gradient-to-r from-sky-200/0 via-white/60 to-emerald-300/0 motion-safe:animate-[trust-ribbon-sweep_6s_ease-in-out_infinite_reverse]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[18%] top-2 h-1 w-20 rounded-full bg-gradient-to-r from-transparent via-amber-200/70 to-transparent motion-safe:animate-pulse"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-2 right-[14%] h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-sky-300/60 to-transparent motion-safe:animate-pulse delay-700"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute left-[8%] top-[28%] h-1.5 w-1.5 rounded-full bg-amber-300/80 shadow-[0_0_12px_rgba(252,211,77,0.8)] motion-safe:animate-[pulse_2.8s_ease-in-out_infinite]"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute right-[9%] top-[32%] h-1 w-1 rounded-full bg-sky-200/80 shadow-[0_0_10px_rgba(186,230,253,0.8)] motion-safe:animate-[pulse_3.4s_ease-in-out_infinite]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-6 lg:px-10">
        <div className="group/ribbon relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.08] shadow-[0_18px_50px_-32px_rgba(0,0,0,0.75)] ring-1 ring-inset ring-white/[0.04] backdrop-blur-md transition duration-500 motion-safe:animate-[trust-ribbon-rise_0.65s_cubic-bezier(0.22,1,0.36,1)_both] hover:border-amber-200/30 hover:bg-white/[0.11] hover:shadow-[0_20px_55px_-30px_rgba(245,199,106,0.28)]">
          <div
            className="absolute inset-y-0 left-0 w-1.5 bg-[linear-gradient(180deg,#ff9933_0%,#ff9933_33.33%,#ffffff_33.33%,#ffffff_66.66%,#138808_66.66%,#138808_100%)] motion-safe:animate-pulse"
            aria-hidden="true"
          />
          <div className="flex items-center gap-4 px-5 py-4 pl-6 sm:gap-5 sm:px-7 sm:py-5 sm:pl-8">
            <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-amber-200/40 bg-white/10 text-amber-200 shadow-[0_0_28px_rgba(245,199,106,0.16)] motion-safe:animate-[pulse_3s_ease-in-out_infinite] sm:h-14 sm:w-14">
              <span
                className="absolute inset-[-6px] rounded-full border border-amber-200/20 motion-safe:animate-slow-ping"
                aria-hidden="true"
              />
              <span
                className="absolute inset-[-12px] rounded-full border border-sky-200/10 motion-safe:animate-slow-ping [animation-delay:1.4s]"
                aria-hidden="true"
              />
              <span
                className="absolute inset-1 rounded-full border border-dashed border-sky-200/50 motion-safe:animate-[spin_18s_linear_infinite]"
                aria-hidden="true"
              />
              <span
                className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-emerald-300/90 shadow-[0_0_14px_rgba(110,231,183,0.9)] motion-safe:animate-[pulse_2.2s_ease-in-out_infinite]"
                aria-hidden="true"
              />
              <ShieldCheck className="h-6 w-6 transition-transform duration-500 group-hover/ribbon:scale-110" strokeWidth={1.8} aria-hidden="true" />
            </span>
            <div className="min-w-0 border-l border-white/15 pl-4 sm:pl-5">
              <p className="max-w-4xl text-lg text-white tracking-[0.16em]">
                {t.ui.transparentSolarExperience}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
