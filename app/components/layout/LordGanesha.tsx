"use client"

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

const STORAGE_KEY = 'aerosun_lord_ganesha_modal'
const MODAL_TTL_MS = 24 * 60 * 60 * 1000

function getIpStorageKey(ip: string) {
  return `${STORAGE_KEY}:${ip}`
}

export default function LordGanesha() {
  const [open, setOpen] = useState(false)
  const [resolvedIp, setResolvedIp] = useState<string | null>(null)
  const [isReady, setIsReady] = useState(false)
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    let cancelled = false

    const resolveIp = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json', {
          method: 'GET',
          cache: 'no-store',
        })

        if (!response.ok) {
          throw new Error('Unable to resolve IP')
        }

        const data = (await response.json()) as { ip?: string }
        const ip = data.ip ?? 'unknown'

        if (cancelled) return

        setResolvedIp(ip)
        setIsReady(true)

        const storageKey = getIpStorageKey(ip)
        const existing = localStorage.getItem(storageKey)

        if (!existing) {
          setOpen(true)
          return
        }

        try {
          const parsed = JSON.parse(existing) as { ts?: number }
          const shouldShow = !parsed.ts || Date.now() - Number(parsed.ts) >= MODAL_TTL_MS
          if (shouldShow) {
            setOpen(true)
          }
        } catch {
          setOpen(true)
        }
      } catch {
        if (cancelled) return

        const fallbackKey = getIpStorageKey('unknown')
        const existing = localStorage.getItem(fallbackKey)
        setResolvedIp('unknown')
        setIsReady(true)

        if (!existing) {
          setOpen(true)
          return
        }

        try {
          const parsed = JSON.parse(existing) as { ts?: number }
          const shouldShow = !parsed.ts || Date.now() - Number(parsed.ts) >= MODAL_TTL_MS
          if (shouldShow) {
            setOpen(true)
          }
        } catch {
          setOpen(true)
        }
      }
    }

    void resolveIp()

    return () => {
      cancelled = true
    }
  }, [])

  const dismiss = useCallback(() => {
    setOpen(false)
    if (resolvedIp) {
      localStorage.setItem(getIpStorageKey(resolvedIp), JSON.stringify({ ts: Date.now() }))
    }
  }, [resolvedIp])

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

  if (!isReady) {
    return <div className="hidden" aria-hidden="true" />
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" aria-hidden="true" />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lord-ganesha-title"
        aria-describedby="lord-ganesha-description"
        tabIndex={-1}
        className="relative z-10 w-full max-w-xl rounded-2xl bg-white p-6 text-gray-900 shadow-[0_25px_80px_rgba(0,0,0,0.25)] dark:bg-gray-800 dark:text-gray-100"
      >
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Close Lord Ganesha modal"
          className="absolute right-3 top-3 inline-flex min-h-11 min-w-11 items-center justify-center rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus-visible:outline-emerald-300"
          onClick={dismiss}
        >
          ✕
        </button>

        <div className="flex flex-col items-center gap-1 text-center">
          <div className="overflow-hidden p-6">
            <Image
              src="/images/lordganesha.png"
              alt="Lord Ganesha"
              width={180}
              height={180}
              priority
              className="m-auto h-auto w-28 md:w-36"
            />
          </div>

          <h2 id="lord-ganesha-title" className="text-3xl font-semibold tracking-tight">Lord Ganesha Blessing</h2>
          <p id="lord-ganesha-description" className="max-w-md text-md leading-6 text-gray-600 dark:text-gray-300">
            Welcome to AeroSun Energy. May this blessing bring clarity, success, and prosperity to your renewable energy journey.
          </p>

        </div>
      </div>
    </div>
  )
}
