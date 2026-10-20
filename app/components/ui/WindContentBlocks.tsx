import type { ReactNode } from 'react'

export function WindSectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-sky-700">{children}</p>
  )
}

export function WindFeatureCard({
  title,
  description,
  points = [],
  accent = 'sky',
}: {
  title: string
  description: string
  points?: string[]
  accent?: 'sky' | 'emerald' | 'amber' | 'violet'
}) {
  const accentClasses: Record<typeof accent, string> = {
    sky: 'border-sky-200 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_100%)] text-sky-700',
    emerald: 'border-emerald-200 bg-[linear-gradient(135deg,#ecfdf5_0%,#ffffff_100%)] text-emerald-700',
    amber: 'border-amber-200 bg-[linear-gradient(135deg,#fffbeb_0%,#ffffff_100%)] text-amber-700',
    violet: 'border-violet-200 bg-[linear-gradient(135deg,#f5f3ff_0%,#ffffff_100%)] text-violet-700',
  }

  return (
    <article className="group rounded-[1.9rem] border border-slate-200 bg-white p-5 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_45px_-26px_rgba(15,23,42,0.30)]">
      <div className={`mb-4 inline-flex rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] ${accentClasses[accent]}`}>
        Wind solution
      </div>
      <h3 className="text-2xl font-black tracking-[-0.05em] text-slate-900">{title}</h3>
      <p className="mt-4 text-base leading-7 text-slate-700">{description}</p>
      {points.length > 0 && (
        <ul className="mt-5 space-y-3 text-base text-slate-700">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-sky-500" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

export function WindBenefitCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-[1.6rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#eff6ff_100%)] p-5 shadow-[0_18px_28px_-24px_rgba(15,23,42,0.3)]">
      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 text-lg font-black text-sky-700">
        ✓
      </div>
      <h3 className="text-xl font-black tracking-[-0.04em] text-slate-900">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-700">{description}</p>
    </div>
  )
}

export function WindInfoPanel({
  title,
  content,
  accent = 'sky',
}: {
  title: string
  content: string[]
  accent?: 'sky' | 'emerald' | 'amber'
}) {
  const theme: Record<typeof accent, string> = {
    sky: 'border-sky-200 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_100%)] text-sky-900',
    emerald: 'border-emerald-200 bg-[linear-gradient(135deg,#ecfdf5_0%,#ffffff_100%)] text-emerald-900',
    amber: 'border-amber-200 bg-[linear-gradient(135deg,#fffbeb_0%,#ffffff_100%)] text-amber-900',
  }

  return (
    <div className={`rounded-[1.75rem] border p-5 shadow-[0_12px_28px_-24px_rgba(15,23,42,0.28)] ${theme[accent]}`}>
      <h3 className="text-xl font-black tracking-[-0.04em]">{title}</h3>
      <ul className="mt-4 space-y-2 text-base leading-7">
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

export function WindCapacityTable({ rows }: { rows: { label: string; value: string; use: string }[] }) {
  return (
    <div className="overflow-x-auto rounded-[1.8rem] border border-slate-200 bg-white shadow-[0_18px_28px_-24px_rgba(15,23,42,0.28)] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-sky-300 [&::-webkit-scrollbar-thumb:hover]:bg-sky-400">
      <div className="min-w-[680px]">
        <div className="grid border-b border-slate-200 bg-[linear-gradient(90deg,#eff6ff_0%,#ffffff_50%,#ecfeff_100%)] text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 md:grid-cols-[1fr_1.1fr_2fr]">
          <div className="px-4 py-3">Capacity band</div>
          <div className="px-4 py-3">System size</div>
          <div className="px-4 py-3">Typical use</div>
        </div>
        {rows.map((row) => (
          <div key={row.label} className="grid gap-3 px-4 py-4 text-base text-slate-700 md:grid-cols-[1fr_1.1fr_2fr] md:gap-0">
            <div className="font-semibold text-slate-900">{row.label}</div>
            <div className="font-black text-sky-700">{row.value}</div>
            <div>{row.use}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function WindComparisonTable({ rows }: { rows: { system: string; detail: string; use: string }[] }) {
  return (
    <div className="overflow-x-auto rounded-[1.8rem] border border-slate-200 bg-white shadow-[0_18px_28px_-24px_rgba(15,23,42,0.28)] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-sky-300 [&::-webkit-scrollbar-thumb:hover]:bg-sky-400">
      <div className="min-w-[780px]">
        <div className="grid border-b border-slate-200 bg-[linear-gradient(90deg,#ecfeff_0%,#ffffff_50%,#f0fdf4_100%)] text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 md:grid-cols-[1.2fr_2.3fr_1.8fr]">
          <div className="px-4 py-3">System type</div>
          <div className="px-4 py-3">How it works</div>
          <div className="px-4 py-3">Typical use</div>
        </div>
        {rows.map((row) => (
          <div key={row.system} className="grid gap-3 px-4 py-4 text-base text-slate-700 md:grid-cols-[1.2fr_2.3fr_1.8fr] md:gap-0">
            <div className="font-semibold text-slate-900">{row.system}</div>
            <div>{row.detail}</div>
            <div>{row.use}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
