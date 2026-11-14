'use client'

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  ClipboardCheck,
  FileCheck2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sun,
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useLocale } from '@/lib/LocaleContext'

const serviceFactIcons = [Sun, MapPin, CalendarDays, Zap]
const serviceFactStyles = [
  'border-emerald-200 bg-emerald-50 text-emerald-800',
  'border-sky-200 bg-sky-50 text-sky-800',
  'border-amber-200 bg-amber-50 text-amber-800',
  'border-violet-200 bg-violet-50 text-violet-800',
]

export function CompanyTrustSection() {
  const { t } = useLocale()
  const content = t.home.trustSections.company
  const footer = t.footer
  const addressUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(footer.address)}`

  return (
    <section
      className="relative isolate bg-linear-to-br from-[#e4edfa] via-[#efe8f4] to-[#f6eadb] px-4 py-12 text-slate-900 sm:px-6 lg:px-10 lg:py-16"
      aria-labelledby="company-trust-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_8%_0%,rgba(99,102,241,0.12),transparent_35%),radial-gradient(ellipse_at_94%_100%,rgba(14,165,233,0.11),transparent_32%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-indigo-700">{content.eyebrow}</p>
            <h2 id="company-trust-title" className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              {content.title}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              {content.description}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/80 bg-white/70 p-4 shadow-sm sm:col-span-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">{content.legalEntityLabel}</p>
              <p className="mt-2 text-xl font-bold text-slate-950">{t.home.aboutSection.companyName}</p>
              <p className="mt-3 text-md font-semibold leading-5 text-slate-700">{content.identifiersText}</p>
            </div>

            <a
              href={addressUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-24 items-start gap-3 rounded-2xl border border-white/80 bg-white/75 p-4 shadow-sm transition hover:border-indigo-300 hover:bg-white"
            >
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">{content.officeLabel}</span>
                <span className="mt-1 block text-sm leading-6 text-slate-700">{footer.address}</span>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-indigo-700">
                  {content.mapCta}<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </span>
            </a>

            <div className="grid gap-3">
              <a
                href={`tel:${footer.phoneHref}`}
                className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/75 p-4 shadow-sm transition hover:border-indigo-300 hover:bg-white"
              >
                <Phone className="h-5 w-5 shrink-0 text-indigo-600" aria-hidden="true" />
                <span>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">{content.phoneLabel}</span>
                  <span className="mt-1 block text-sm text-slate-700">{footer.phone}</span>
                </span>
              </a>
              <a
                href={`mailto:${footer.email}`}
                className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/75 p-4 shadow-sm transition hover:border-indigo-300 hover:bg-white"
              >
                <Mail className="h-5 w-5 shrink-0 text-indigo-600" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">{content.emailLabel}</span>
                  <span className="mt-1 block break-all text-sm text-slate-700">{footer.email}</span>
                </span>
              </a>
            </div>

            <div className="rounded-2xl border border-white/80 bg-[linear-gradient(135deg,#fffaf0_0%,#ffffff_55%,#f0edff_100%)] p-5 text-slate-800 shadow-sm sm:col-span-2 sm:p-6">
              <p className="text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
                {content.residentialServiceDescription}
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 xl:grid-cols-4">
                {content.serviceFacts.map((fact, index) => {
                  const Icon = serviceFactIcons[index] ?? BadgeCheck
                  const style = serviceFactStyles[index] ?? 'border-slate-200 bg-slate-50 text-slate-700'

                  return (
                    <div key={fact.label} className={`flex min-w-0 items-center gap-3 rounded-xl border p-3 ${style}`}>
                      <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                      <span className="min-w-0">
                        <span className="block text-[9px] font-bold uppercase tracking-[0.12em] opacity-75 sm:text-[10px]">
                          {fact.label}
                        </span>
                        <span className="mt-1 block text-sm font-bold text-slate-900">
                          {fact.value}
                        </span>
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <Link
          href="/contact"
          className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#A3D977] px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-[#c7efa4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {content.contactCta}<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}

export function WhySolarSection() {
  const { t } = useLocale()
  const content = t.home.trustSections.whySolar

  return (
    <section
      className="bg-[#f5f8fc] px-4 py-14 text-slate-950 sm:px-6 lg:px-10 lg:py-16"
      aria-labelledby="why-solar-title"
    >
      <div className="mx-auto max-w-7xl">
        <p className="inline-flex rounded-full bg-[#eaf3fc] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#075da8]">
          {content.eyebrow}
        </p>
        <h2 id="why-solar-title" className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
          {content.title}
        </h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {content.cards.map((card) => (
            <article
              key={card.title}
              className="h-full rounded-2xl border border-[#d1e2f2] border-l-4 border-l-[#0865b2] bg-white p-6 shadow-[0_8px_24px_-20px_rgba(15,48,80,0.45)] sm:p-8"
            >
              <h3 className="text-xl font-bold leading-8 text-slate-950">{card.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-700">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProjectEvidenceSection() {
  const { t } = useLocale()
  const content = t.home.trustSections.evidence
  const [activeIndex, setActiveIndex] = useState(0)
  const testimonials = content.testimonials.map(
    (_, index) => content.testimonials[(activeIndex + index) % content.testimonials.length],
  )

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + content.testimonials.length) % content.testimonials.length)
  }
  const showNext = () => {
    setActiveIndex((index) => (index + 1) % content.testimonials.length)
  }

  return (
    <section className="bg-[#e8f0e9] px-4 py-14 sm:px-6 lg:px-10 lg:py-18" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-emerald-800">{content.eyebrow}</p>
            <h2 id="testimonials-title" className="mt-3 text-3xl font-black tracking-tight text-[#102b28] sm:text-4xl">
              {content.title}
            </h2>
          </div>
          <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-base lg:pb-1">{content.description}</p>
        </div>

        <div className="mt-8 grid grid-cols-[auto_minmax(0,1fr)_auto] items-stretch gap-2 sm:gap-4">
          <button
            type="button"
            onClick={showPrevious}
            aria-label={content.previousLabel}
            className="my-auto flex h-10 w-10 items-center justify-center rounded-full border border-amber-900/15 bg-white text-slate-900 shadow-sm transition hover:bg-amber-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 sm:h-12 sm:w-12"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3" aria-live="polite">
            {testimonials.map((testimonial, index) => (
              <article
                key={`${activeIndex}-${index}`}
                className={`flex min-h-64 flex-col justify-between rounded-[1.5rem] border border-[#cbd5cc] bg-[#f8f7f2] p-6 shadow-[0_20px_50px_-40px_rgba(16,43,40,0.35)] sm:p-8 ${index === 1 ? 'hidden md:flex' : ''} ${index === 2 ? 'hidden lg:flex' : ''}`}
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c46a18]">{content.placeholderLabel}</p>
                  <blockquote className="mt-5 text-lg font-semibold leading-8 text-slate-900 sm:text-xl">
                    “{testimonial.quote}”
                  </blockquote>
                </div>
                <div className="mt-8 border-t border-slate-100 pt-5">
                  <p className="font-bold text-slate-950">{testimonial.customer}</p>
                  <p className="mt-1 text-sm text-slate-600">{testimonial.location}</p>
                  <p className="mt-3 text-sm font-medium text-emerald-800">{testimonial.system}</p>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={showNext}
            aria-label={content.nextLabel}
            className="my-auto flex h-10 w-10 items-center justify-center rounded-full border border-amber-900/15 bg-white text-slate-900 shadow-sm transition hover:bg-amber-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 sm:h-12 sm:w-12"
          >
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-amber-300 bg-[#fff3df] p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm leading-6 text-amber-950">{content.note}</p>
          <Link href="/contact" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-amber-950 underline decoration-amber-500 underline-offset-4">
            {content.cta}<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function SolarJourneySection() {
  const { t } = useLocale()
  const content = t.home.trustSections.journey

  return (
    <section className="bg-[#eaf4ef] px-4 py-14 sm:px-6 lg:px-10 lg:py-18" aria-labelledby="solar-journey-title">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-emerald-800">{content.eyebrow}</p>
          <h2 id="solar-journey-title" className="mt-3 text-3xl font-black tracking-tight text-emerald-950 sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{content.description}</p>
        </div>

        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {content.steps.map((step, index) => (
            <li key={step.title} className="relative rounded-3xl border border-emerald-900/10 bg-white p-5 shadow-sm">
              <span className="font-mono text-xs font-bold tracking-[0.15em] text-emerald-700">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 text-base font-extrabold text-slate-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-linear-to-r from-[#e7f2eb] via-[#f5f0e2] to-[#e8e7f8] p-5 text-slate-800 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm leading-6 text-slate-700">{content.estimateNote}</p>
          <Link href="/estimation-calculator" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#A3D977] px-5 py-3 text-sm font-bold text-emerald-950 transition hover:bg-[#c7efa4]">
            {content.cta}<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function QuoteTransparencySection() {
  const { t } = useLocale()
  const content = t.home.trustSections.proposal

  return (
    <section
      className="relative isolate bg-linear-to-br from-[#e7eafd] via-[#f1e8f3] to-[#e4f2f5] px-4 py-14 text-slate-900 sm:px-6 lg:px-10 lg:py-18"
      aria-labelledby="quote-transparency-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_0%,rgba(129,140,248,0.13),transparent_35%),radial-gradient(ellipse_at_100%_100%,rgba(56,189,248,0.12),transparent_32%)]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
        <header className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-indigo-700">{content.eyebrow}</p>
          <h2 id="quote-transparency-title" className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">{content.description}</p>
        </header>

        <div className="space-y-4">
          <article className="rounded-[1.75rem] border border-white/80 bg-white/75 p-5 shadow-[0_24px_60px_-40px_rgba(48,57,95,0.3)] sm:p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-300 text-slate-900">
                <FileCheck2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-extrabold text-slate-950">{content.quoteHeading}</h3>
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {content.quoteItems.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl bg-slate-100/80 p-3 text-sm leading-6 text-slate-700">
                  <ClipboardCheck className="mt-1 h-4 w-4 shrink-0 text-sky-700" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[1.75rem] border border-white/80 bg-white/75 p-5 shadow-[0_24px_60px_-40px_rgba(48,57,95,0.3)] sm:p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-200 text-sky-950">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-extrabold text-slate-950">{content.warrantyHeading}</h3>
            </div>
            <ul className="mt-5 grid gap-3">
              {content.warrantyItems.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl bg-slate-100/80 p-3 text-sm leading-6 text-slate-700">
                  <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-amber-700" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <div className="flex flex-col gap-3 rounded-[1.5rem] bg-amber-300 p-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:p-5">
            <Link href="/#brand-section-title" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-amber-50">
              {content.brandCta}<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
            <Link href="/warranty-policy" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-amber-50">
              {content.warrantyCta}<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
            <Link href="/customer-enquiry" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-indigo-700 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-indigo-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700">
              {content.quoteCta}<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
