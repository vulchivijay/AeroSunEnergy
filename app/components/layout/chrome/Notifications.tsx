'use client'

import { useState } from 'react'
import { useLocale } from '@/lib/LocaleContext'
import { ChevronDown, ChevronUp, Megaphone } from 'lucide-react'

export default function Notifications() {
  const { t } = useLocale()
  const { text: notificationText, highlight: notificationBoldText, tail: notificationEndText } = t.notifications
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-[linear-gradient(135deg,rgba(23,37,84,0.96),rgba(49,46,129,0.92),rgba(15,23,42,0.98))] px-3 py-2 text-slate-800 shadow-sm sm:px-5">
      <div className="relative mx-auto flex w-full items-center gap-3 overflow-hidden bg-[linear-gradient(135deg,rgba(23,37,84,0.96),rgba(49,46,129,0.92),rgba(15,23,42,0.98))] text-white shadow-sm">
        <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-amber-300 via-sky-400 to-violet-500" aria-hidden="true" />
        <div className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-950/80 text-white shadow-sm">
          <Megaphone className="h-4 w-4" aria-hidden="true" />
        </div>

        <div id="site-notification-content" hidden={!isExpanded} className="min-w-0 flex-1 py-2">
          <div className="mb-1 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white shadow-sm" aria-hidden="true" />
            <span className="uppercase text-white text-xs tracking-wide leading-5">
              {t.notifications.badge}
            </span>
          </div>
          <p className="text-white text-sm sm:text-base leading-5">
            {notificationText}
            <span className="text-xs sm:text-sm underline underline-offset-4 text-[#ffb321]">{notificationBoldText}</span>
            {notificationEndText}
          </p>
        </div>

        {!isExpanded && (
          <span className="min-w-0 flex-1 truncate uppercase text-[#F59E0B] text-xs font-semibold tracking-wide leading-5">
            {t.notifications.badge}
          </span>
        )}

        <button
          type="button"
          onClick={() => setIsExpanded((expanded) => !expanded)}
          aria-label={isExpanded ? t.notifications.toggleClose : t.notifications.toggleOpen}
          aria-expanded={isExpanded}
          aria-controls="site-notification-content"
          className="mr-2 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-700 text-white transition hover:border-amber-300/60 hover:bg-white/10 hover:text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
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
