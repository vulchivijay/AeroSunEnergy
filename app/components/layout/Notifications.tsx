'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, ChevronUp, Megaphone } from 'lucide-react'
import { useLocale } from '@/lib/LocaleContext'

export default function Notifications() {
  const { t } = useLocale()
  const { text: notificationText, highlight: notificationBoldText, tail: notificationEndText } = t.notifications
  const [isExpanded, setIsExpanded] = useState(true)

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsExpanded(false), 10_000)
    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <div data-print-hide className="border-b border-emerald-950/10 bg-[#f3f7f1] px-3 py-2 dark:border-white/10 dark:bg-[#0b1713] sm:px-5">
      <div className="relative mx-auto flex w-full items-center gap-3 overflow-hidden rounded-xl border border-emerald-900/15 bg-white shadow-[0_8px_24px_-18px_rgba(6,78,59,0.5)] dark:border-emerald-300/15 dark:bg-[#10251d]">
        <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-lime-400 via-emerald-500 to-teal-600" aria-hidden="true" />
        <div className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-950 text-lime-300 shadow-sm dark:bg-emerald-300/10">
          <Megaphone className="h-4 w-4" aria-hidden="true" />
        </div>

        <div id="site-notification-content" hidden={!isExpanded} className="min-w-0 flex-1 py-2">
          <div className="mb-1 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.12)]" aria-hidden="true" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-300">
              {t.notifications.badge}
            </span>
          </div>
          <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-200 sm:text-sm">
            {notificationText}
            <span className="underline underline-offset-4 text-emerald-800 dark:text-emerald-300">{notificationBoldText}</span>
            {notificationEndText}
          </p>
        </div>

        {!isExpanded && (
          <span className="min-w-0 flex-1 truncate text-xs font-bold uppercase tracking-[0.18em] text-emerald-900 dark:text-emerald-100">
            {t.notifications.badge}
          </span>
        )}

        <button
          type="button"
          onClick={() => setIsExpanded((expanded) => !expanded)}
          aria-label={isExpanded ? t.notifications.toggleClose : t.notifications.toggleOpen}
          aria-expanded={isExpanded}
          aria-controls="site-notification-content"
          className="mr-2 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-900/10 text-emerald-900 transition hover:border-emerald-500/40 hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 dark:border-white/10 dark:text-emerald-100 dark:hover:bg-white/10 dark:focus-visible:outline-emerald-300"
        >
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" aria-hidden="true" />
          ) : (
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  )
}
