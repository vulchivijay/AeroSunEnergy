import type { ReactNode } from 'react'

export function DashboardCollapsibleSection({
  title,
  children,
  className = '',
  contentClassName = '',
  headingLevel = 'h2',
  titleClassName = 'text-slate-900',
  eyebrow,
  ariaLabel,
  id,
}: {
  title?: ReactNode
  children: ReactNode
  className?: string
  contentClassName?: string
  headingLevel?: 'h2' | 'h3'
  titleClassName?: string
  eyebrow?: ReactNode
  ariaLabel?: string
  id?: string
}) {
  const Heading = headingLevel
  const headingClasses =
    headingLevel === 'h3'
      ? 'text-xl sm:text-2xl font-semibold !tracking-tight leading-snug'
      : 'text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug'

  return (
    <section id={id} className={className} aria-label={ariaLabel}>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          {eyebrow && <div className="mb-2">{eyebrow}</div>}
          {title && <Heading className={`${headingClasses} ${titleClassName}`}>{title}</Heading>}
        </div>
      </div>
      <div className={contentClassName}>
        {children}
      </div>
    </section>
  )
}
