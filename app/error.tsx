'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
    console.error(error)
  }, [error])

  return (
    <html lang="en">
      <body>
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#06111d] px-6 text-white">
          {/* Background gradients */}
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(239,68,68,0.22),transparent_40%),radial-gradient(circle_at_80%_65%,rgba(251,191,36,0.18),transparent_40%),linear-gradient(160deg,#071321_0%,#2a0f0f_55%,#1a1200_100%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:72px_72px]"
            aria-hidden="true"
          />
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" aria-hidden="true" />

          <div
            className={`relative z-10 flex flex-col items-center text-center transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
          >
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

            <h1 className="bg-gradient-to-r from-red-400 via-amber-400 to-orange-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
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
                className="rounded-full bg-gradient-to-r from-red-500 to-amber-500 px-7 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-900/40 transition-all hover:scale-105 hover:shadow-red-700/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
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
      </body>
    </html>
  )
}
