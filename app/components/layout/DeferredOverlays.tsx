'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
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

function CookieConsent() {
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
    <div className="fixed inset-x-0 bottom-0 z-[80] flex justify-center p-4 sm:p-6">
      <aside
        aria-label={labels.title}
        className="w-full max-w-5xl rounded-xl border border-slate-200 bg-white/95 p-5 shadow-md backdrop-blur-xl"
      >
        <div>
          <div className="w-full">
            <p className=" uppercase text-emerald-700    text-xs font-semibold tracking-wide leading-5">
              {labels.title}
            </p>
            <h2 className="mt-2 text-slate-900 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
              {labels.headline}
            </h2>
            <p className="mt-3 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {labels.description}
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-2 border-t border-slate-200 pt-4 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => saveConsent('declined')}
              className="inline-flex min-h-11 text-nowrap items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-base text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            >
              {labels.reject}
            </button>
            <button
              type="button"
              onClick={() => saveConsent('accepted')}
              className="inline-flex min-h-11 text-nowrap items-center justify-center rounded-full bg-[#15803D] px-5 py-2.5 text-base text-white shadow-sm transition hover:bg-[#18833a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            >
              {labels.accept}
            </button>
          </div>
        </div>
      </aside>
    </div>
  )
}

const LORD_STORAGE_KEY = 'aerosun_lord_ganesha_modal'
const LORD_IMAGE_INDEX_KEY = 'aerosun_lord_image_index'
const MODAL_TTL_MS = 24 * 60 * 60 * 1000

function Lord() {
  const { t } = useLocale()
  const lords = t.componentData.lordModal.lords
  const [open, setOpen] = useState(false)
  const [lordIndex, setLordIndex] = useState(0)
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const showModal = useCallback(() => {
    let nextIndex = 0
    try {
      const storedIndex = Number(localStorage.getItem(LORD_IMAGE_INDEX_KEY))
      if (Number.isInteger(storedIndex) && storedIndex >= 0) {
        nextIndex = storedIndex % lords.length
      }
      localStorage.setItem(LORD_IMAGE_INDEX_KEY, String((nextIndex + 1) % lords.length))
    } catch {
      // Storage is optional; the modal can still be shown without persisting its image index.
    }

    setLordIndex(nextIndex)
    setOpen(true)
  }, [lords.length])

  useEffect(() => {
    let shouldShow = true
    try {
      const existing = localStorage.getItem(LORD_STORAGE_KEY)
      if (existing) {
        const parsed = JSON.parse(existing) as { ts?: unknown }
        const timestamp = typeof parsed.ts === 'number' ? parsed.ts : Number.NaN
        shouldShow =
          !Number.isFinite(timestamp) || Date.now() - timestamp >= MODAL_TTL_MS
      }
    } catch {
      shouldShow = true
    }

    const timer = window.setTimeout(() => {
      if (shouldShow) showModal()
    }, 0)
    return () => window.clearTimeout(timer)
  }, [showModal])

  const lord = lords[lordIndex] ?? lords[0]
  const blessing = t.blessingModal.blessings[lordIndex] ?? t.blessingModal.blessings[0]

  const dismiss = useCallback(() => {
    setOpen(false)
    try {
      localStorage.setItem(LORD_STORAGE_KEY, JSON.stringify({ ts: Date.now() }))
    } catch {
      // Storage is optional; dismissing the modal must still work.
    }
  }, [])

  useEffect(() => {
    if (!open) return

    const previouslyFocused = document.activeElement
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        dismiss()
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) return

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => element.getClientRects().length > 0)
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (!firstElement || !lastElement) {
        event.preventDefault()
        dialogRef.current.focus()
      } else if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      if (previouslyFocused instanceof HTMLElement && previouslyFocused.isConnected) {
        previouslyFocused.focus()
      }
    }
  }, [dismiss, open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto px-4 py-4 sm:py-6">
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" aria-hidden="true" />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lord-blessing-title"
        aria-describedby="lord-blessing-description"
        tabIndex={-1}
        className="relative z-10 w-full max-w-md rounded-xl bg-white p-6 text-gray-900 shadow-md"
      >
        <button
          ref={closeButtonRef}
          type="button"
          aria-label={t.blessingModal.closeLabel}
          className="absolute right-4 top-4 inline-flex items-center justify-center w-6 h-6 rounded-lg text-gray-600 transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          onClick={dismiss}
        >
          ✕
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="overflow-hidden p-6">
            <Image
              src={lord.image}
              alt={`Lord ${lord.name}`}
              width={lord.width}
              height={lord.height}
              priority
              className="m-auto h-72 w-auto max-w-full object-contain"
            />
          </div>

          <h2 id="lord-blessing-title" className="mb-2 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{blessing.title}</h2>
          <p id="lord-blessing-description" className="max-w-md  text-gray-900      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {blessing.body}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function DeferredOverlays() {
  return (
    <>
      <Lord />
      <CookieConsent />
    </>
  )
}
