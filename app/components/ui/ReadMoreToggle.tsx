'use client'

import { ArrowUpRight } from 'lucide-react'
import { useLocale } from '@/lib/LocaleContext'

export type ReadMoreToggleProps = {
  expanded: boolean
  onToggle: () => void
  controlsId: string
  className?: string
  labelClassName?: string
  readMoreLabel?: string
  showLessLabel?: string
}

export function ReadMoreToggle({
  expanded,
  onToggle,
  controlsId,
  className = '',
  labelClassName = 'text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950',
  readMoreLabel,
  showLessLabel,
}: ReadMoreToggleProps) {
  const { t } = useLocale()

  return (
    <button
      type="button"
      className={`group inline-flex shrink-0 items-center gap-2 text-sm underline-offset-4 transition sm:text-base ${labelClassName} ${className}`}
      onClick={onToggle}
      aria-expanded={expanded}
      aria-controls={controlsId}
    >
      <span>{expanded ? (showLessLabel ?? t.ui.showLess) : (readMoreLabel ?? t.ui.readMore)}</span>
      <ArrowUpRight
        className={`h-5 w-5 transition-transform duration-300 ${expanded ? 'rotate-90' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}`}
        aria-hidden="true"
      />
    </button>
  )
}
