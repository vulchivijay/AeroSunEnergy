import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Check, Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thank you for contacting AeroSun Energy. We look forward to helping with your renewable energy project.',
}

export default function ThankYouPage() {
  return (
    <main className="relative isolate overflow-hidden bg-[#071b17] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_18%,rgba(163,217,119,0.12),transparent_32%),radial-gradient(ellipse_at_15%_85%,rgba(245,199,106,0.09),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:64px_64px]" />

      <section className="relative mx-auto grid min-h-[min(720px,calc(100svh-10rem))] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10">
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 text-md font-bold uppercase tracking-[0.22em] text-[#c2df9e]">
            <span className="h-px w-8 bg-[#f5c76a]" />
            Message received
          </p>
          <h1 className="mt-7 text-4xl font-semibold leading-[1.05] tracking-[0.04em] sm:text-6xl">
            Thank you
            <span className="block text-[#d6e8b9]">for reaching out.</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-lg sm:leading-8">
            Your message is in good hands. The AeroSun Energy team will review your enquiry and get back to you soon.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#d6e8b9] px-6 py-3 text-md font-bold text-[#10251f] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6e8b9]"
            >
              Back to home
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-md font-semibold text-white transition hover:border-white/40 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Explore our solutions
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div
          className="relative mx-auto flex aspect-[1.08] w-full max-w-[34rem] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-[#092d25] shadow-[0_35px_100px_-45px_rgba(0,0,0,0.8)]"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(245,199,106,0.18),transparent_32%),linear-gradient(155deg,rgba(163,217,119,0.08),transparent_55%)]" />
          <div className="absolute inset-5 rounded-[1.5rem] border border-white/[0.07]" />
          <div className="absolute left-8 top-8 flex items-center gap-2 rounded-full border border-white/10 bg-[#071b17]/70 px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/60 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#a3d977]" />
            All systems positive
          </div>

          <span className="absolute left-1/2 top-[18%] -translate-x-1/2 select-none font-semibold leading-none tracking-[0.08em] text-white/[0.06] [font-size:clamp(7rem,22vw,13rem)]">
            SUN
          </span>
          <div className="absolute right-[22%] top-[25%] h-16 w-16 rounded-full bg-[#f5c76a]/20 blur-2xl" />
          <Sun className="absolute right-[23%] top-[25%] h-10 w-10 text-[#f5c76a]" strokeWidth={1.2} />

          <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-[#a3d977]/40 bg-[#a3d977]/[0.08] shadow-[0_0_70px_-20px_rgba(163,217,119,0.5)] sm:h-40 sm:w-40">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#a3d977] text-[#10251f] sm:h-24 sm:w-24">
              <Check className="h-11 w-11 sm:h-14 sm:w-14" strokeWidth={2} />
            </div>
          </div>

          <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-[#071b17]/75 p-5 backdrop-blur sm:bottom-10 sm:left-10 sm:right-10 sm:p-6">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#c2df9e]">Next step</p>
            <p className="mt-2 text-lg font-semibold text-white sm:text-xl">We’ll be in touch soon.</p>
            <div className="mt-5 h-px bg-gradient-to-r from-[#a3d977]/60 via-white/15 to-transparent" />
            <div className="mt-4 flex items-center justify-between text-[12px] font-semibold uppercase tracking-[0.14em] text-white/45">
              <span>AeroSun Energy</span>
              <span>01 / 01</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
