import { DigitalNumber } from '@/app/components/ui/DigitalNumber'
import type { LucideIcon } from 'lucide-react'

export function SolarLeadSummary({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-slate-700 pb-2 text-sm last:border-b-0 last:pb-0">
      <span className="text-emerald-100/75">{label}</span>
      <span className="text-right font-bold text-white tracking-normal tabular-nums">
        <DigitalNumber value={value} />
      </span>
    </div>
  )
}

export function SolarPriceItem({
  icon: Icon,
  label,
  value,
  valueClassName,
  featured = false,
}: {
  icon: LucideIcon
  label: string
  value: string
  valueClassName: string
  featured?: boolean
}) {
  return (
    <div
      className={`min-w-0 rounded-xl border p-4 text-left sm:p-5 ${
        featured
          ? 'border-amber-300/60 bg-linear-to-br from-amber-200 via-amber-100 to-yellow-50 shadow-sm'
          : 'border-slate-700 bg-white/[0.05] '
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className={` ${featured ? 'text-amber-950/70' : ' text-slate-300 '} text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7`}>
            {label}
          </p>
          <p className={`mt-3 whitespace-nowrap text-lg sm:text-xl ${valueClassName} font-semibold tracking-normal leading-snug tabular-nums`}>
            <DigitalNumber value={value} />
          </p>
        </div>
        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
          featured ? 'bg-amber-900/10 text-amber-900' : 'bg-white/10 text-sky-200'
        }`}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
    </div>
  )
}
