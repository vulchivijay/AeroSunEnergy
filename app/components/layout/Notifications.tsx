'use client'

import { useState } from 'react'
import { useLocale } from '@/lib/LocaleContext'

export default function Notifications() {
  const { t } = useLocale()
  const notifications = t.notifications
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative overflow-hidden border-b border-emerald-200 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_36%),linear-gradient(135deg,#f0fdf4_0%,#ecfeff_48%,#f8fafc_100%)] dark:border-slate-700 dark:bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.12),_transparent_28%),linear-gradient(135deg,#020617_0%,#0f172a_46%,#111827_100%)]">
      <div>
        <div className="relative overflow-hidden border border-emerald-200/70 bg-[linear-gradient(135deg,rgba(5,46,30,0.96),rgba(8,64,59,0.9),rgba(15,23,42,0.98))] shadow-[0_18px_40px_-24px_rgba(16,185,129,0.85)] dark:border-emerald-500/15">
          <div className="absolute -left-10 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-emerald-400/15 blur-3xl" />
          <div className="absolute -right-12 top-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative flex items-center justify-between gap-2">
            <div className="flex min-w-0 m-2 flex-1 items-center">
              <span className="inline-flex1 shrink-0 items-center rounded-full border border-emerald-300/40 bg-emerald-300/10 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.22em] text-emerald-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] sm:text-[10px] hidden">
                {notifications.badge}
              </span>

              <p className="min-w-0 flex-1 text-center text-xs font-light leading-5 tracking-[0.12em] text-slate-100 lg:tracking-[0.16em]">
                {notifications.text}
                <span className='text-gray-200 italic underline underline-offset-4'>{notifications.bold}</span>
                {notifications.end}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsVisible(false)}
              aria-label={notifications.dismiss}
              className="cursor inline-flex h-8 w-8 mx-2 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 shadow-sm transition hover:border-emerald-300/60 hover:bg-emerald-400/10 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
