'use client'

import { useSyncExternalStore } from 'react'
import { useLocale } from '@/lib/LocaleContext'

const COOKIE_KEY = 'aerosun_cookie_consent'
const CONSENT_EVENT = 'aerosun-cookie-consent'

type ConsentChoice = 'accepted' | 'declined'
type ConsentSnapshot = 'loading' | 'unanswered' | ConsentChoice

let sessionConsent: ConsentChoice | null = null

function getCookieConsent(): ConsentSnapshot {
  if (typeof window === 'undefined') return 'loading'

  try {
    const storedChoice = window.localStorage.getItem(COOKIE_KEY)
    if (storedChoice === 'accepted' || storedChoice === 'declined') return storedChoice
    return sessionConsent ?? 'unanswered'
  } catch (error) {
    console.error('Unable to read cookie consent preference.', error)
    return sessionConsent ?? 'unanswered'
  }
}

function subscribeToCookieConsent(callback: () => void) {
  const handleStorageChange = (event: StorageEvent) => {
    if (event.key === COOKIE_KEY || event.key === null) sessionConsent = null
    callback()
  }

  window.addEventListener('storage', handleStorageChange)
  window.addEventListener(CONSENT_EVENT, callback)

  return () => {
    window.removeEventListener('storage', handleStorageChange)
    window.removeEventListener(CONSENT_EVENT, callback)
  }
}

export default function CookieConsent() {
  const { t } = useLocale()
  const labels = t.cookieConsent
  const consent = useSyncExternalStore(
    subscribeToCookieConsent,
    getCookieConsent,
    () => 'loading',
  )

  const saveConsent = (choice: ConsentChoice) => {
    sessionConsent = choice

    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(COOKIE_KEY, choice)
      } catch (error) {
        console.error('Unable to save cookie consent preference.', error)
      }
      window.dispatchEvent(
        new CustomEvent(CONSENT_EVENT, {
          detail: { choice },
        })
      )
    }
  }

  if (consent !== 'unanswered') return null

  return (
    <div data-print-hide className="fixed inset-x-0 bottom-0 z-[80] flex justify-center p-4 sm:p-6">
      <aside
        aria-label={labels.title}
        className="w-full max-w-5xl rounded-3xl border border-slate-200 bg-white/95 p-5 shadow-[0_25px_60px_-20px_rgba(15,23,42,0.5)] backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/95"
      >
        <div>
          <div className="w-full">
            <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">
              {labels.title}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
              {labels.headline}
            </h2>
            <p className="mt-3 text-md leading-7 text-slate-600 dark:text-slate-300">
              {labels.description}
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-2 border-t border-slate-200 pt-4 sm:flex-row sm:justify-end dark:border-slate-700">
            <button
              type="button"
              onClick={() => saveConsent('declined')}
              className="inline-flex min-h-11 text-nowrap items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-md text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:focus-visible:outline-emerald-300"
            >
              {labels.reject}
            </button>
            <button
              type="button"
              onClick={() => saveConsent('accepted')}
              className="inline-flex min-h-11 text-nowrap items-center justify-center rounded-full bg-[#20A44A] px-5 py-2.5 text-md text-white shadow-lg shadow-emerald-600/20 transition hover:bg-[#18833a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            >
              {labels.accept}
            </button>
          </div>
        </div>
      </aside>
    </div>
  )
}
