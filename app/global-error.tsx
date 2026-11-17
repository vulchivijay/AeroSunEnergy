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
          <section className="w-full max-w-xl rounded-2xl border border-white/10 bg-[#092d25] p-8 shadow-md sm:p-12">
            <p className="font-mono text-5xl font-semibold tracking-widest text-[#f5c76a]">500</p>
            <h1 className="mt-4 text-3xl font-semibold tracking-wide sm:text-4xl">Something went wrong</h1>
            <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
              An unexpected error occurred. Try again, or return to the home page.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={reset}
                className="min-h-12 rounded-full bg-[#d6e8b9] px-6 py-3 text-sm font-bold text-[#10251f] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6e8b9]"
              >
                Try again
              </button>
              <Link
                href="/"
                className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
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
