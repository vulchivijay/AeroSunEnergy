'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#06111d] px-6 text-white">
      {/* Background gradients */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(239,68,68,0.22),transparent_40%),radial-gradient(circle_at_80%_65%,rgba(251,191,36,0.18),transparent_40%),linear-gradient(160deg,#071321_0%,#2a0f0f_55%,#1a1200_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-size-[72px_72px] opacity-[0.07]"
        aria-hidden="true"
      />
      <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-red-500/50 to-transparent" aria-hidden="true" />

      <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-amber-900/30 to-transparent" aria-hidden="true" />

      <div className="absolute bottom-10 left-6 z-0 hidden w-[36vw] max-w-90 sm:block">
        <div className="relative h-40 w-full">
          <div className="absolute left-6 top-0 h-8 w-8 rounded-full bg-amber-300/90 shadow-[0_0_30px_rgba(252,211,77,0.9)] animate-pulse" aria-hidden="true" />
          <div className="absolute left-10 top-8 h-24 w-24 rounded-[18px] border border-sky-300/50 bg-sky-200/10 backdrop-blur-sm">
            <div className="absolute inset-x-2 top-3 h-px bg-sky-200/60" />
            <div className="absolute inset-x-2 top-7 h-px bg-sky-200/60" />
            <div className="absolute inset-x-2 top-11 h-px bg-sky-200/60" />
            <div className="absolute inset-y-2 left-3 w-px bg-sky-200/60" />
            <div className="absolute inset-y-2 left-7 w-px bg-sky-200/60" />
            <div className="absolute inset-y-2 left-11 w-px bg-sky-200/60" />
            <div className="absolute inset-y-2 right-3 w-px bg-sky-200/60" />
            <div className="absolute inset-y-2 right-7 w-px bg-sky-200/60" />
            <div className="absolute inset-y-2 right-11 w-px bg-sky-200/60" />
            <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300/60 blur-[2px]" />
          </div>
          <div className="absolute left-14 top-20 h-20 w-8 rounded-t-full border border-sky-400/40 bg-sky-400/20" aria-hidden="true" />
          <div className="absolute left-28 top-20 h-20 w-8 rounded-t-full border border-sky-400/40 bg-sky-400/20" aria-hidden="true" />
          <div className="absolute bottom-0 left-6 right-6 h-2 rounded-full bg-slate-500/50" aria-hidden="true" />
        </div>
      </div>

      <div className="absolute bottom-8 right-6 z-0 hidden w-[32vw] max-w-75 sm:block">
        <div className="relative h-48 w-full">
          <div className="absolute bottom-0 left-20 h-28 w-2 rounded-full bg-slate-300/80" aria-hidden="true" />
          <div className="absolute bottom-28 left-16 h-7 w-7 rounded-full bg-slate-200/80 shadow-[0_0_18px_rgba(248,250,252,0.7)]" aria-hidden="true" />
          <div
            className="absolute bottom-20 left-16 flex h-20 w-20 items-center justify-center animate-spin"
            style={{ animationDuration: '7s' }}
            aria-hidden="true"
          >
            <div className="absolute h-0.5 w-20 rounded-full bg-slate-200/90" />
            <div className="absolute h-20 w-0.5 rounded-full bg-slate-200/90" />
            <div className="absolute h-16 w-0.5 rotate-45 rounded-full bg-slate-200/90" />
            <div className="absolute h-16 w-0.5 -rotate-45 rounded-full bg-slate-200/90" />
          </div>
          <div className="absolute bottom-0 left-14 right-8 h-2 rounded-full bg-slate-500/50" aria-hidden="true" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center transition-all duration-700 translate-y-0 opacity-100">
        {/* Warning icon with pulse */}
        <div className="relative mb-6">
          <div className="absolute inset-0 animate-ping rounded-full bg-red-500/20" aria-hidden="true" />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-red-500/40 bg-red-500/10 backdrop-blur">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-12 w-12 text-red-400 drop-shadow-[0_0_12px_rgba(239,68,68,0.7)]"
              aria-hidden="true"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
        </div>

        <h1 className="bg-linear-to-r from-red-400 via-amber-400 to-orange-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
          System Error
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
          An unexpected fault disrupted the energy flow. Our systems have logged the issue. Try again or return home.
        </p>

        {error.digest && (
          <p className="mt-3 rounded-full border border-white/10 bg-white/5 px-4 py-1 font-mono text-xs text-slate-500">
            Error ID: {error.digest}
          </p>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={reset}
            className="rounded-full bg-linear-to-r from-red-500 to-amber-500 px-7 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-900/40 transition-all hover:scale-105 hover:shadow-red-700/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="rounded-full border border-white/20 bg-white/5 px-7 py-2.5 text-sm font-semibold text-slate-200 backdrop-blur transition-all hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
