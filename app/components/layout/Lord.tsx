"use client"

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocale } from '@/lib/LocaleContext'

const STORAGE_KEY = 'aerosun_lord_ganesha_modal'
const LORD_IMAGE_INDEX_KEY = 'aerosun_lord_image_index'
const MODAL_TTL_MS = 24 * 60 * 60 * 1000
function getIpStorageKey(ip: string) {
  return `${STORAGE_KEY}:${ip}`
}

export default function Lord() {
  const { t } = useLocale()
  const lords = t.componentData.lordModal.lords
  const [open, setOpen] = useState(false)
  const [lordIndex, setLordIndex] = useState(0)
  const [resolvedIp, setResolvedIp] = useState<string | null>(null)
  const [isReady, setIsReady] = useState(false)
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const showModal = useCallback(() => {
    const storedIndex = Number(localStorage.getItem(LORD_IMAGE_INDEX_KEY))
    const nextIndex =
      Number.isInteger(storedIndex) && storedIndex >= 0
        ? storedIndex % lords.length
        : 0

    setLordIndex(nextIndex)
    localStorage.setItem(LORD_IMAGE_INDEX_KEY, String((nextIndex + 1) % lords.length))
    setOpen(true)
  }, [lords.length])

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
          showModal()
          return
        }

        try {
          const parsed = JSON.parse(existing) as { ts?: number }
          const shouldShow = !parsed.ts || Date.now() - Number(parsed.ts) >= MODAL_TTL_MS
          if (shouldShow) {
            showModal()
          }
        } catch {
          showModal()
        }
      } catch {
        if (cancelled) return

        const fallbackKey = getIpStorageKey('unknown')
        const existing = localStorage.getItem(fallbackKey)
        setResolvedIp('unknown')
        setIsReady(true)

        if (!existing) {
          showModal()
          return
        }

        try {
          const parsed = JSON.parse(existing) as { ts?: number }
          const shouldShow = !parsed.ts || Date.now() - Number(parsed.ts) >= MODAL_TTL_MS
          if (shouldShow) {
            showModal()
          }
        } catch {
          showModal()
        }
      }
    }

    void resolveIp()

    return () => {
      cancelled = true
    }
  }, [showModal])

  const lord = lords[lordIndex] ?? lords[0]
  const blessing = t.blessingModal.blessings[lordIndex] ?? t.blessingModal.blessings[0]

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
        aria-labelledby="lord-blessing-title"
        aria-describedby="lord-blessing-description"
        tabIndex={-1}
        className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 text-gray-900 shadow-[0_25px_80px_rgba(0,0,0,0.25)]  "
      >
        <button
          ref={closeButtonRef}
          type="button"
          aria-label={t.blessingModal.closeLabel}
          className="absolute right-2 top-2 inline-flex min-h-6 min-w-6 items-center justify-center rounded-md p-1 text-gray-600 transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600   "
          onClick={dismiss}
        >
          ✕
        </button>

        <div className="flex flex-col items-center gap-1 text-center">
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

          <h2 id="lord-blessing-title" className="text-3xl font-semibold tracking-tight">{blessing.title}</h2>
          <p id="lord-blessing-description" className="max-w-md text-md leading-6 text-gray-600 ">
            {blessing.body}
          </p>

        </div>
      </div>
    </div>
  )
}
