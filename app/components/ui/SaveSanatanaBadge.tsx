'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function SaveSanatanaBadge() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-5 left-5 z-50 md:bottom-5 md:left-5">
      {!isOpen ? (
        <button
          type="button"
          aria-label="Show Save Sanatana Dharma badge"
          onClick={() => setIsOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 bg-white/90 shadow-[0_18px_38px_-24px_rgba(16,185,129,0.7)] backdrop-blur-sm transition hover:scale-105 dark:border-emerald-500/30 dark:bg-slate-900/80"
        >
          <Image
            src="/images/globe.png"
            alt="Globe icon"
            width={20}
            height={20}
            className="h-4 w-4 object-cover md:h-5 md:w-5"
          />
        </button>
      ) : (
        <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-white/85 px-3 py-2 shadow-[0_18px_38px_-24px_rgba(16,185,129,0.7)] backdrop-blur-sm dark:border-emerald-500/30 dark:bg-slate-900/80">
          <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-emerald-100 dark:bg-emerald-500/10">
            <Image
              src="/images/globe.png"
              alt="Globe icon"
              width={24}
              height={24}
              className="h-4 w-4 object-cover md:h-5 md:w-5"
            />
          </span>

          <span className="text-[10px] font-black uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300 md:text-[11px]">
            SAVE SANATANADHARMA
          </span>

          <button
            type="button"
            aria-label="Hide Save Sanatana Dharma badge"
            onClick={() => setIsOpen(false)}
            className="ml-1 flex h-5 w-5 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-[10px] font-bold text-emerald-700 transition hover:bg-emerald-100 dark:border-emerald-400/40 dark:bg-emerald-500/10 dark:text-emerald-300"
          >
            ×
          </button>
        </div>
      )}
    </div>
  )
}
