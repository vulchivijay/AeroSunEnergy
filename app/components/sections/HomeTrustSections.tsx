'use client'

import {
  ArrowUpRight,
  BadgeCheck,
  Camera,
  ClipboardCheck,
  FileCheck2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react'
import Link from 'next/link'
import { useLocale } from '@/lib/LocaleContext'

const proofIcons = [Camera, BadgeCheck, ClipboardCheck]

export function CompanyTrustSection() {
  const { t } = useLocale()
  const content = t.home.trustSections.company
  const footer = t.footer
  const addressUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(footer.address)}`

  return (
    <section
      className="relative isolate overflow-hidden bg-[#0B2922] px-4 py-12 text-white sm:px-6 lg:px-10 lg:py-16"
      aria-labelledby="company-trust-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_8%_0%,rgba(163,217,119,0.17),transparent_35%),radial-gradient(ellipse_at_94%_100%,rgba(245,199,106,0.12),transparent_32%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#A3D977]">{content.eyebrow}</p>
            <h2 id="company-trust-title" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              {content.title}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-emerald-50/75 sm:text-base">
              {content.description}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 sm:col-span-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-100/65">{content.legalEntityLabel}</p>
              <p className="mt-2 text-lg font-bold text-white">{t.home.aboutSection.companyName}</p>
              <p className="mt-3 text-xs leading-5 text-emerald-50/65">{content.registrationNote}</p>
            </div>

            <a
              href={addressUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-24 items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:border-[#A3D977]/50 hover:bg-white/[0.09]"
            >
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#A3D977]" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-100/65">{content.officeLabel}</span>
                <span className="mt-1 block text-sm leading-6 text-white">{footer.address}</span>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#A3D977]">
                  {content.mapCta}<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </span>
            </a>

            <div className="grid gap-3">
              <a
                href={`tel:${footer.phoneHref}`}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:border-[#A3D977]/50 hover:bg-white/[0.09]"
              >
                <Phone className="h-5 w-5 shrink-0 text-[#A3D977]" aria-hidden="true" />
                <span>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-100/65">{content.phoneLabel}</span>
                  <span className="mt-1 block text-sm font-semibold text-white">{footer.phone}</span>
                </span>
              </a>
              <a
                href={`mailto:${footer.email}`}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:border-[#A3D977]/50 hover:bg-white/[0.09]"
              >
                <Mail className="h-5 w-5 shrink-0 text-[#A3D977]" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-100/65">{content.emailLabel}</span>
                  <span className="mt-1 block break-all text-sm font-semibold text-white">{footer.email}</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <Link
          href="/contact"
          className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#A3D977] px-5 py-3 text-sm font-bold text-[#0B2922] transition hover:bg-[#c7efa4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3D977]"
        >
          {content.contactCta}<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}

export function ProjectEvidenceSection() {
  const { t } = useLocale()
  const content = t.home.trustSections.evidence

  return (
    <section className="bg-[#f5f2e9] px-4 py-14 sm:px-6 lg:px-10 lg:py-18" aria-labelledby="project-evidence-title">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-800">{content.eyebrow}</p>
            <h2 id="project-evidence-title" className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              {content.title}
            </h2>
          </div>
          <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">{content.description}</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {content.items.map((item, index) => {
            const Icon = proofIcons[index] ?? ShieldCheck
            return (
              <article key={item.title} className="rounded-3xl border border-amber-900/10 bg-white p-5 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.5)] sm:p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-900">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            )
          })}
        </div>

        <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm leading-6 text-amber-950">{content.note}</p>
          <Link href="/customer-enquiry" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-amber-950 underline decoration-amber-400 underline-offset-4">
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

        <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-emerald-950 p-5 text-white sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm leading-6 text-emerald-50/80">{content.estimateNote}</p>
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
    <section className="bg-[#f7f9f8] px-4 py-14 sm:px-6 lg:px-10 lg:py-18" aria-labelledby="quote-transparency-title">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-sky-800">{content.eyebrow}</p>
          <h2 id="quote-transparency-title" className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{content.title}</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{content.description}</p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <article className="rounded-3xl border border-sky-200 bg-white p-6 shadow-sm sm:p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-900">
                <FileCheck2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-extrabold text-slate-950">{content.quoteHeading}</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {content.quoteItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                  <ClipboardCheck className="mt-1 h-4 w-4 shrink-0 text-sky-700" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-emerald-200 bg-[#eff8f2] p-6 shadow-sm sm:p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-900">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-extrabold text-slate-950">{content.warrantyHeading}</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {content.warrantyItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                  <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-emerald-700" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/#brand-section-title" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-emerald-600 hover:text-emerald-800">
            {content.brandCta}<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link href="/warranty-policy" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-900">
            {content.warrantyCta}<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link href="/customer-enquiry" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-amber-300 px-5 py-3 text-sm font-bold text-amber-950 transition hover:bg-amber-200">
            {content.quoteCta}<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
