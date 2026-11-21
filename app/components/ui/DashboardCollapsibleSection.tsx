'use client'

import { useId, useState, type ReactNode } from 'react'
import { ReadMoreToggle } from './ReadMoreToggle'

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
        <ReadMoreToggle
          expanded={expanded}
          onToggle={() => setExpanded((current) => !current)}
          controlsId={contentId}
          labelClassName="text-sky-800 underline decoration-sky-300 hover:text-sky-950"
        />
      </div>
      <div id={contentId} className={contentClassName} hidden={!expanded}>
        {children}
      </div>
    </section>
  )
}
