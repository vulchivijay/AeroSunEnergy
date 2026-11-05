'use client'

'use client'

import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  CircleAlert,
  PanelsTopLeft,
  Sun,
  Wind,
  Zap,
} from 'lucide-react'
import { useLocale } from '@/lib/LocaleContext'

type ErrorAction =
  | { label: string; href: string }
  | { label: string; onClick: () => void }

type ErrorExperienceProps = {
  code: string
  eyebrow: string
  title: string
  description: string
  illustration: 'landscape' | 'control-room'
  primaryAction: ErrorAction
  secondaryAction: ErrorAction
  helpfulLinks?: Array<{ label: string; href: string }>
}

function Action({ action, primary }: { action: ErrorAction; primary: boolean }) {
  const className = primary
    ? 'group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#d6e8b9] px-6 py-3 text-md font-bold text-[#10251f] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6e8b9]'
    : 'group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-md font-semibold text-white transition hover:border-white/40 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
  const icon = primary
    ? <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
    : <ArrowUpRight className="h-4 w-4" aria-hidden="true" />

  if ('onClick' in action) {
    return (
      <button type="button" onClick={action.onClick} className={className}>
        {action.label}{icon}
      </button>
    )
  }

  return (
    <Link href={action.href} className={className}>
      {action.label}{icon}
    </Link>
  )
}

function ErrorIllustration({
  code,
  illustration,
}: Pick<ErrorExperienceProps, 'code' | 'illustration'>) {
  const isLandscape = illustration === 'landscape'
  const { t } = useLocale()

  return (
    <div
      className="relative mx-auto flex aspect-[1.08] w-full max-w-[34rem] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-[#092d25] shadow-[0_35px_100px_-45px_rgba(0,0,0,0.8)]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(245,199,106,0.20),transparent_35%),linear-gradient(155deg,rgba(163,217,119,0.08),transparent_55%)]" />
      <div className="absolute inset-5 rounded-[1.5rem] border border-white/[0.07]" />
      <div className="absolute left-8 top-8 flex items-center gap-2 rounded-full border border-white/10 bg-[#071b17]/70 px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/60 backdrop-blur">
        <span className={`h-1.5 w-1.5 rounded-full ${isLandscape ? 'bg-[#a3d977]' : 'bg-[#f5c76a]'}`} />
        {isLandscape ? t.systemUi.illustration.landscapeStatus : t.systemUi.illustration.systemStatus}
      </div>

      <span className="absolute left-1/2 top-[16%] -translate-x-1/2 select-none font-semibold leading-none tracking-[0.08em] text-white/[0.08] [font-size:clamp(7rem,22vw,13rem)]">
        {code}
      </span>

      {isLandscape ? (
        <>
          <div className="absolute right-[19%] top-[28%] h-16 w-16 rounded-full bg-[#f5c76a]/20 blur-2xl" />
          <Sun className="absolute right-[21%] top-[27%] h-10 w-10 text-[#f5c76a]" strokeWidth={1.2} />
          <div className="absolute bottom-[13%] left-[-10%] h-[43%] w-[82%] rotate-[-12deg] rounded-[50%] bg-[#123e31]" />
          <div className="absolute bottom-[5%] right-[-12%] h-[37%] w-[84%] rotate-[10deg] rounded-[50%] bg-[#0b3529]" />
          <div className="absolute bottom-[16%] left-[12%] h-[17%] w-[31%] -rotate-[12deg] overflow-hidden rounded-md border border-[#a3d977]/40 bg-[#153e38] shadow-[0_0_35px_rgba(163,217,119,0.12)]">
            <PanelsTopLeft className="h-full w-full p-2 text-[#a3d977]/80" strokeWidth={1} />
          </div>
          <div className="absolute bottom-[23%] right-[21%] h-[29%] w-[1.5px] bg-white/70" />
          <div className="absolute bottom-[51%] right-[calc(21%_-_4px)] h-2 w-2 rounded-full bg-white/80" />
          <div className="absolute bottom-[49%] right-[calc(21%_-_26px)] h-12 w-12 origin-center motion-safe:animate-[spin_18s_linear_infinite] motion-reduce:animate-none">
            <span className="absolute left-1/2 top-1 h-5 w-1 -translate-x-1/2 rounded-full bg-[#dcecc7]" />
            <span className="absolute bottom-1 left-1 h-5 w-1 origin-bottom rotate-[120deg] rounded-full bg-[#dcecc7]" />
            <span className="absolute bottom-1 right-1 h-5 w-1 origin-bottom -rotate-[120deg] rounded-full bg-[#dcecc7]" />
          </div>
          <div className="absolute bottom-[15%] left-[44%] h-[1px] w-[26%] rotate-[10deg] border-t border-dashed border-[#d6e8b9]/60" />
          <Wind className="absolute bottom-[11%] right-[12%] h-5 w-5 text-[#d6e8b9]/75" strokeWidth={1.3} />
        </>
      ) : (
        <>
          <div className="absolute inset-x-[16%] top-[34%] h-[1px] bg-gradient-to-r from-transparent via-[#a3d977]/55 to-transparent" />
          <div className="absolute left-[22%] top-[34%] h-2 w-2 rounded-full bg-[#a3d977] shadow-[0_0_18px_#a3d977]" />
          <div className="absolute right-[22%] top-[34%] h-2 w-2 rounded-full bg-[#f5c76a] shadow-[0_0_18px_#f5c76a]" />
          <div className="absolute left-[23%] top-[28%] h-12 w-12 rounded-2xl border border-[#a3d977]/20 bg-[#a3d977]/[0.06]" />
          <div className="absolute right-[21%] top-[28%] flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f5c76a]/25 bg-[#f5c76a]/[0.08]">
            <CircleAlert className="h-6 w-6 text-[#f5c76a]" strokeWidth={1.3} />
          </div>
          <div className="absolute bottom-[24%] left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-[1.5rem] border border-white/10 bg-[#071b17]/80 shadow-[0_16px_50px_-25px_rgba(163,217,119,0.35)]">
            <Zap className="h-9 w-9 text-[#a3d977]" strokeWidth={1.3} />
          </div>
          <div className="absolute bottom-[14%] left-[18%] right-[18%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </>
      )}
    </div>
  )
}

export function ErrorExperience({
  code,
  eyebrow,
  title,
  description,
  illustration,
  primaryAction,
  secondaryAction,
  helpfulLinks = [],
}: ErrorExperienceProps) {
  const { t } = useLocale()

  return (
    <main className="relative isolate overflow-hidden bg-[#071b17] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_18%,rgba(163,217,119,0.11),transparent_32%),radial-gradient(ellipse_at_15%_85%,rgba(245,199,106,0.08),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:64px_64px]" />

      <section className="relative mx-auto grid min-h-[min(720px,calc(100svh-10rem))] max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-10">
        <div className="max-w-xl">
          <p className="flex items-center gap-3 text-md font-bold uppercase tracking-[0.22em] text-[#c2df9e]">
            <span className="h-px w-8 bg-[#f5c76a]" />
            {eyebrow}
          </p>
          <p className="mt-7 font-mono text-5xl font-semibold tracking-[0.08em] text-[#f5c76a] sm:text-6xl">
            {code}
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[0.05em] text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Action action={primaryAction} primary />
            <Action action={secondaryAction} primary={false} />
          </div>

          {helpfulLinks.length > 0 && (
            <nav aria-label={t.systemUi.notFound.helpfulLinksAriaLabel} className="mt-9 border-t border-white/10 pt-5">
              <p className="text-md font-semibold uppercase tracking-[0.16em] text-white/45">{t.systemUi.notFound.helpfulLinksHeading}</p>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {helpfulLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-md text-white/70 underline decoration-white/20 underline-offset-4 transition hover:text-[#d6e8b9] hover:decoration-[#d6e8b9] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6e8b9]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>

        <ErrorIllustration code={code} illustration={illustration} />
      </section>
    </main>
  )
}
