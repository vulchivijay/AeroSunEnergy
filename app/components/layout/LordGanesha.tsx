"use client"

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { useLocale } from '@/lib/LocaleContext'

const STORAGE_KEY = 'aerosun_lord_ganesha_modal'
const MODAL_TTL_MS = 24 * 60 * 60 * 1000
const AUTO_CLOSE_MS = 30 * 1000

function getIpStorageKey(ip: string) {
  return `${STORAGE_KEY}:${ip}`
}

export default function LordGanesha() {
  const { t } = useLocale()
  const ganesha = t.ganesha
  const [open, setOpen] = useState(false)
  const [resolvedIp, setResolvedIp] = useState<string | null>(null)

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

  useEffect(() => {
    if (!open || !resolvedIp) return

    const timer = window.setTimeout(() => {
      setOpen(false)
      localStorage.setItem(getIpStorageKey(resolvedIp), JSON.stringify({ ts: Date.now() }))
    }, AUTO_CLOSE_MS)

    return () => window.clearTimeout(timer)
  }, [open, resolvedIp])

  const dismiss = () => {
    setOpen(false)
    if (resolvedIp) {
      localStorage.setItem(getIpStorageKey(resolvedIp), JSON.stringify({ ts: Date.now() }))
    }
  }

  const title = useMemo(() => ganesha.title, [ganesha.title])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-xl rounded-2xl bg-white p-6 text-gray-900 shadow-[0_25px_80px_rgba(0,0,0,0.25)] dark:bg-gray-800 dark:text-gray-100">
        <button
          aria-label={ganesha.closeAria}
          className="cursor absolute right-3 top-3 rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          onClick={dismiss}
        >
          ✕
        </button>

        <div className="flex flex-col items-center gap-1 text-center">
          <div className="overflow-hidden rounded-full border border-orange-200 bg-orange-50 p-6 shadow-sm dark:border-orange-700 dark:bg-orange-950/30">
            <Image
              src="/images/lordganesha.png"
              alt="Lord Ganesha"
              width={180}
              height={180}
              priority
              className="m-auto h-auto w-28 md:w-36"
            />
          </div>

          <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
          <p className="max-w-md text-md leading-6 text-gray-600 dark:text-gray-300">
            {ganesha.description}
          </p>

          <div className="mt-2 flex w-full items-center justify-center gap-1">
            <button
              onClick={dismiss}
              className="cursor rounded-md bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
            >
              {ganesha.close}
            </button>
            <span className="text-xs text-gray-500 dark:text-gray-400">{ganesha.autoClose}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
