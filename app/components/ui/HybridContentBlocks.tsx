import type { ReactNode } from 'react'

const renderHybridIcon = (accent: 'emerald' | 'sky' | 'violet' | 'amber') => {
  const colorClass = {
    emerald: 'text-emerald-700',
    sky: 'text-sky-700',
    violet: 'text-violet-700',
    amber: 'text-amber-700',
  }[accent]

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={`h-4 w-4 ${colorClass}`} aria-hidden="true">
      <path d="M7 7h10v10H7z" />
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M5.5 5.5l3 3M15.5 15.5l3 3M18.5 5.5l-3 3M8.5 15.5l-3 3" />
    </svg>
  )
}

const renderCheckIcon = (accent: 'emerald' | 'sky' | 'violet' | 'amber') => {
  const bgClass = {
    emerald: 'bg-emerald-100 text-emerald-700',
    sky: 'bg-sky-100 text-sky-700',
    violet: 'bg-violet-100 text-violet-700',
    amber: 'bg-amber-100 text-amber-700',
  }[accent]

  return (
    <div className={`flex h-10 w-10 items-center justify-center rounded-2xl shadow-inner ${bgClass}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-4 w-4" aria-hidden="true">
        <path d="M5 13.5 9 17l10-10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export function HybridSectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-[linear-gradient(135deg,#ecfdf5_0%,#f5f3ff_45%,#ffffff_100%)] px-3.5 py-2 shadow-[0_14px_26px_-20px_rgba(16,185,129,0.9)]">
      <span className="inline-flex h-2.5 w-2.5 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-violet-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]" aria-hidden="true" />
      <p className="text-[10px] font-black uppercase tracking-[0.24em] text-emerald-700">{children}</p>
    </div>
  )
}

export function HybridFeatureCard({
  title,
  description,
  points = [],
  accent = 'emerald',
}: {
  title: string
  description: string
  points?: string[]
  accent?: 'emerald' | 'sky' | 'violet' | 'amber'
}) {
  const accentClasses: Record<typeof accent, string> = {
    emerald: 'border-emerald-200 bg-[linear-gradient(135deg,#ecfdf5_0%,#f8fffb_50%,#ffffff_100%)] text-emerald-700',
    sky: 'border-sky-200 bg-[linear-gradient(135deg,#eff6ff_0%,#f8fbff_50%,#ffffff_100%)] text-sky-700',
    violet: 'border-violet-200 bg-[linear-gradient(135deg,#f5f3ff_0%,#faf7ff_50%,#ffffff_100%)] text-violet-700',
    amber: 'border-amber-200 bg-[linear-gradient(135deg,#fffbeb_0%,#fffdf6_50%,#ffffff_100%)] text-amber-700',
  }

  return (
    <article className="group rounded-4xl border border-slate-200 bg-white p-5 shadow-[0_22px_45px_-28px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-28px_rgba(16,185,129,0.3)]">
      <div className={`mb-5 flex items-center justify-between gap-4 rounded-2xl border px-3 py-2 ${accentClasses[accent]}`}>
        <span className="text-[10px] font-black uppercase tracking-[0.24em]">Hybrid system</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/80 shadow-sm ring-1 ring-black/5">
          {renderHybridIcon(accent)}
        </span>
      </div>
      <h3 className="text-2xl font-black tracking-tighter text-slate-900">{title}</h3>
      <p className="mt-4 text-base leading-7 text-slate-700">{description}</p>
      {points.length > 0 && (
        <ul className="mt-5 space-y-3 text-base text-slate-700">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3 rounded-xl bg-slate-50/80 p-2.5">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-black text-emerald-700">✓</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

export function HybridBenefitCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-[1.7rem] border border-emerald-200 bg-[linear-gradient(135deg,#ffffff_0%,#ecfdf5_100%)] p-5 shadow-[0_18px_32px_-26px_rgba(16,185,129,0.45)]">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500 to-teal-500 text-lg font-black text-white shadow-lg shadow-emerald-500/20">
        ✓
      </div>
      <h3 className="text-xl font-black tracking-tighter text-slate-900">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-700">{description}</p>
    </div>
  )
}

export function HybridInfoPanel({
  title,
  content,
  accent = 'emerald',
}: {
  title: string
  content: string[]
  accent?: 'emerald' | 'sky' | 'violet'
}) {
  const theme: Record<typeof accent, string> = {
    emerald: 'border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-white text-emerald-900',
    sky: 'border-sky-200 bg-linear-to-br from-sky-50 via-white to-white text-sky-900',
    violet: 'border-violet-200 bg-linear-to-br from-violet-50 via-white to-white text-violet-900',
  }

  return (
    <div className={`rounded-[1.8rem] border p-5 shadow-[0_12px_28px_-24px_rgba(15,23,42,0.28)] ${theme[accent]}`}>
      <div className="mb-3 flex items-center gap-3">
        {renderCheckIcon(accent)}
        <h3 className="text-xl font-black tracking-tighter">{title}</h3>
      </div>
      <ul className="mt-4 space-y-3 text-base leading-7">
        {content.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-current" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function HybridTable({ rows }: { rows: { label: string; value: string; use: string }[] }) {
  return (
    <div className="overflow-x-auto rounded-[1.9rem] border border-emerald-200 bg-white shadow-[0_20px_34px_-24px_rgba(16,185,129,0.3)] scrollbar-thin [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-emerald-300 [&::-webkit-scrollbar-thumb:hover]:bg-emerald-400">
      <div className="min-w-190">
        <div className="grid border-b border-emerald-100 bg-linear-to-r from-emerald-50 via-white to-sky-50 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 md:grid-cols-[1.2fr_2.2fr_1.8fr]">
          <div className="px-4 py-3">System type</div>
          <div className="px-4 py-3">Typical configuration</div>
          <div className="px-4 py-3">Customer fit</div>
        </div>
        {rows.map((row) => (
          <div key={row.label} className="grid gap-3 px-4 py-4 text-base text-slate-700 md:grid-cols-[1.2fr_2.2fr_1.8fr] md:gap-0">
            <div className="font-semibold text-slate-900">{row.label}</div>
            <div>{row.value}</div>
            <div>{row.use}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
