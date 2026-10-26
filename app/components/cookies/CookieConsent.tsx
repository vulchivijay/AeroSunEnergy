'use client'

import { useEffect, useState } from 'react'

const COOKIE_KEY = 'aerosun_cookie_consent'

type ConsentChoice = 'accepted' | 'declined'

export function getCookieConsent(): ConsentChoice | null {
  if (typeof window === 'undefined') return null

  const value = window.localStorage.getItem(COOKIE_KEY)
  return value === 'accepted' || value === 'declined' ? value : null
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const stored = getCookieConsent()
    setIsReady(true)
    if (!stored) {
      setIsVisible(true)
    }
  }, [])

  const saveConsent = (choice: ConsentChoice) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(COOKIE_KEY, choice)
      window.dispatchEvent(
        new CustomEvent('aerosun-cookie-consent', {
          detail: { choice },
        })
      )
    }
    setIsVisible(false)
  }

  if (!isReady) {
    return <div className="fixed inset-x-0 bottom-0 z-60 h-32 sm:h-26" aria-hidden="true" />
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-60 flex justify-center p-4 sm:p-6">
      <div
        role="dialog"
        aria-modal="true"
        aria-live="polite"
        className="w-full max-w-5xl rounded-3xl border border-slate-200 bg-white/95 p-5 shadow-[0_25px_60px_-20px_rgba(15,23,42,0.5)] backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/95"
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">
              Cookie preferences
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
              We use cookies to improve your experience
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              We use cookies to remember your preferences, understand website traffic, and improve performance.
              Essential cookies are required for the website to work. Optional analytics and marketing cookies are
              only used if you accept them.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <button
              type="button"
              onClick={() => saveConsent('declined')}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => saveConsent('accepted')}
              className="inline-flex items-center justify-center rounded-full bg-[#20A44A] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-[#18833a]"
            >
              Accept all cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
