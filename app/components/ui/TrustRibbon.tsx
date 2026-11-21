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
      <div
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/10 to-transparent motion-safe:animate-[pulse_4s_ease-in-out_infinite]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-6 lg:px-10">
        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.08] shadow-[0_18px_50px_-32px_rgba(0,0,0,0.75)] ring-1 ring-inset ring-white/[0.04] backdrop-blur-md">
          <div
            className="absolute inset-y-0 left-0 w-1.5 bg-[linear-gradient(180deg,#ff9933_0%,#ff9933_33.33%,#ffffff_33.33%,#ffffff_66.66%,#138808_66.66%,#138808_100%)] motion-safe:animate-pulse"
            aria-hidden="true"
          />
          <div className="flex items-center gap-4 px-5 py-4 pl-6 sm:gap-5 sm:px-7 sm:py-5 sm:pl-8">
            <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-amber-200/40 bg-white/10 text-amber-200 shadow-[0_0_28px_rgba(245,199,106,0.16)] motion-safe:animate-[pulse_3s_ease-in-out_infinite] sm:h-14 sm:w-14">
              <span
                className="absolute inset-1 rounded-full border border-dashed border-sky-200/50 motion-safe:animate-[spin_18s_linear_infinite]"
                aria-hidden="true"
              />
              <ShieldCheck className="h-6 w-6 animate-ping" strokeWidth={1.8} aria-hidden="true" />
            </span>
            <div className="min-w-0 border-l border-white/15 pl-4 sm:pl-5">
              <p className="max-w-4xl text-sm text-white tracking-[0.16em] sm:text-base sm:tracking-[0.18em]">
                {t.ui.transparentSolarExperience}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
