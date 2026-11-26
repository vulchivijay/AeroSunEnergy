'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import './globals.css'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      console.error('AeroSun root layout error', error)
    }
  }, [error])

  return (
    <html lang="en">
      <body className="bg-[#071b17] text-white">
        <main className="grid min-h-screen place-items-center px-5 py-12">
          <section className="w-full max-w-xl rounded-xl border border-slate-700 bg-[#092d25] p-8 shadow-md sm:p-12">
            <p className="font-mono text-[#f5c76a] tabular-nums text-xs font-semibold tracking-wide leading-5">500</p>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">Something went wrong</h1>
            <p className="mt-4 text-white/70 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              An unexpected error occurred. Try again, or return to the home page.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={reset}
                className="min-h-12 rounded-full bg-[#d6e8b9] px-6 py-3 text-sm font-bold text-[#10251f] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6e8b9] tracking-normal"
              >
                Try again
              </button>
              <Link
                href="/"
                className="inline-flex min-h-12 items-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white tracking-normal"
              >
                Return home
              </Link>
            </div>
          </section>
        </main>
      </body>
    </html>
  )
}
