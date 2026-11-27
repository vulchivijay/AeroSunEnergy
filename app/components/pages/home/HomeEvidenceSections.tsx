import { ArrowUpRight, BadgeCheck, ClipboardCheck, FileCheck2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import ProjectEvidenceSection from "@/app/components/home/ProjectEvidenceSection";
import type { Translations } from '@/lib/LocaleContext';

function QuoteTransparencySection({ t }: { t: Translations }) {
  const content = t.home.trustSections.proposal

  return (
    <section
      className="relative isolate bg-gradient-to-br from-[#f1f2f6] to-white px-4 py-14 text-slate-900 sm:px-6 lg:px-10 lg:py-18"
      aria-labelledby="quote-transparency-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_0%,rgba(129,140,248,0.13),transparent_35%),radial-gradient(ellipse_at_100%_100%,rgba(56,189,248,0.12),transparent_32%)]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
        <header className="lg:sticky lg:top-24 lg:self-start">
          <p className="before:inline-block before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 uppercase text-indigo-700 text-xs font-semibold tracking-wide leading-5">{content.eyebrow}</p>
          <h2 id="quote-transparency-title" className="mt-3 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
            {content.title}
          </h2>
          <p className="mt-4 max-w-xl text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{content.description}</p>
        </header>

        <div className="space-y-4">
          <article className="rounded-xl border border-slate-200 bg-white/75 p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-300 text-slate-900">
                <FileCheck2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-slate-950 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{content.quoteHeading}</h3>
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

          <article className="rounded-xl border border-slate-200 bg-white/75 p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-200 text-sky-950">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-slate-950 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{content.warrantyHeading}</h3>
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

          <div className="flex flex-col gap-3 rounded-xl bg-amber-300 p-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:p-5">
            <Link href="/#brand-section-title" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-amber-50 tracking-normal">
              {content.brandCta}<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
            <Link href="/contact" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-amber-50 tracking-normal">
              {content.warrantyCta}<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
            <Link href="/contact#contact-form-title" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-indigo-700 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-indigo-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700 tracking-normal">
              {content.quoteCta}<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HomeEvidenceSections({ t }: { t: Translations }) {
  const home = t.home
  return (
    <>
      <QuoteTransparencySection t={t} />
      <ProjectEvidenceSection content={home.trustSections.evidence} />
    </>
  )
}
