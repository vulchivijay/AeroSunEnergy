'use client'

import { ArrowUpRight } from 'lucide-react'
import { useId, useState, type ReactNode } from 'react'
import { useLocale } from '@/lib/LocaleContext'

export function DashboardCollapsibleSection({
  title,
  children,
  className = '',
  contentClassName = '',
  defaultExpanded = false,
  headingLevel = 'h2',
  titleClassName = 'text-xl font-bold text-slate-900',
  eyebrow,
  ariaLabel,
  id,
}: {
  title?: ReactNode
  children: ReactNode
  className?: string
  contentClassName?: string
  defaultExpanded?: boolean
  headingLevel?: 'h2' | 'h3'
  titleClassName?: string
  eyebrow?: ReactNode
  ariaLabel?: string
  id?: string
}) {
  const { t } = useLocale()
  const generatedId = useId()
  const contentId = `dashboard-collapse-${generatedId.replace(/:/g, '')}`
  const [expanded, setExpanded] = useState(defaultExpanded)
  const Heading = headingLevel

  return (
    <section id={id} className={className} aria-label={ariaLabel}>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          {eyebrow && <div className="mb-2">{eyebrow}</div>}
          {title && <Heading className={titleClassName}>{title}</Heading>}
        </div>
        <button
          type="button"
          className="group inline-flex shrink-0 items-center gap-2 text-sm text-sky-800 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-950 sm:text-base"
          onClick={() => setExpanded((current) => !current)}
          aria-expanded={expanded}
          aria-controls={contentId}
        >
          <span>{expanded ? t.ui.showLess : t.ui.readMore}</span>
          <ArrowUpRight
            className={`h-5 w-5 transition-transform duration-300 ${expanded ? 'rotate-90' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}`}
            aria-hidden="true"
          />
        </button>
      </div>
      <div id={contentId} className={contentClassName} hidden={!expanded}>
        {children}
      </div>
    </section>
  )
}
