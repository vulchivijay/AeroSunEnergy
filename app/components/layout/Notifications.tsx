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
    <div className="border-b border-emerald-950/10 bg-[linear-gradient(135deg,rgba(5,46,30,0.96),rgba(8,64,59,0.9),rgba(15,23,42,0.98))] text-white shadow-[0_18px_42px_-30px_rgba(3,18,12,0.9)] px-3 py-2 sm:px-5">
      <div className="relative mx-auto flex w-full items-center gap-3 overflow-hidden rounded-xl border border-emerald-900/15 bg-[linear-gradient(135deg,rgba(5,46,30,0.96),rgba(8,64,59,0.9),rgba(15,23,42,0.98))] text-white shadow-[0_18px_42px_-30px_rgba(3,18,12,0.9)]">
        <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-lime-400 via-emerald-500 to-teal-600" aria-hidden="true" />
        <div className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-950 text-white shadow-sm ">
          <Megaphone className="h-4 w-4" aria-hidden="true" />
        </div>

        <div id="site-notification-content" hidden={!isExpanded} className="min-w-0 flex-1 py-2">
          <div className="mb-1 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_0_3px_rgba(16,185,129,0.12)]" aria-hidden="true" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-white">
              {t.notifications.badge}
            </span>
          </div>
          <p className="text-xs leading-relaxed text-white sm:text-sm">
            {notificationText}
            <span className="underline underline-offset-4 text-[#F59E0B]">{notificationBoldText}</span>
            {notificationEndText}
          </p>
        </div>

        {!isExpanded && (
          <span className="min-w-0 flex-1 truncate text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
            {t.notifications.badge}
          </span>
        )}

        <button
          type="button"
          onClick={() => setIsExpanded((expanded) => !expanded)}
          aria-label={isExpanded ? t.notifications.toggleClose : t.notifications.toggleOpen}
          aria-expanded={isExpanded}
          aria-controls="site-notification-content"
          className="mr-2 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-900/10 text-white transition hover:border-emerald-500/40 hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700    "
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
