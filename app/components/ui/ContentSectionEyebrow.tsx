import type { ReactNode } from 'react'

export function ContentSectionEyebrow({
  children,
  className,
  dotClassName,
  labelClassName,
}: {
  children: ReactNode
  className: string
  dotClassName: string
  labelClassName: string
}) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-sm ${className}`}>
      <span className={`inline-flex h-2 w-2 items-center justify-center rounded-full ${dotClassName}`} aria-hidden="true" />
      <p className={` uppercase ${labelClassName} text-xs font-semibold tracking-wide leading-5`}>{children}</p>
    </div>
  )
}
