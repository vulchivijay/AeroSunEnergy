import { TrustRibbon } from "@/app/components/ui/TrustRibbon";
import type { Translations } from '@/lib/LocaleContext';

export function KnowEligibilityHeroSections({ t }: { t: Translations }) {
  const page = t.knowEligibilityPage

  const labels = page.labels
  return (
    <>
      <header className="relative isolate overflow-hidden border-b border-slate-700 bg-linear-to-br from-slate-950/75 via-sky-950/65 to-indigo-950/75 text-white shadow-sm backdrop-blur-2xl ring-1 ring-inset ring-white/10">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_90%,rgba(16,185,129,0.24),transparent_38%),radial-gradient(ellipse_at_88%_10%,rgba(14,165,233,0.2),transparent_34%)]" />
              <div className="absolute -right-20 top-[-12rem] -z-10 h-[35rem] w-[35rem] rounded-full border border-emerald-100/10">
                <div className="absolute inset-10 rounded-full border border-emerald-100/10" />
                <div className="absolute inset-20 rounded-full border border-emerald-100/10" />
                <div className="absolute inset-32 rounded-full border border-emerald-100/10" />
              </div>
              <div className="mx-auto my-6 grid w-[calc(100%-2rem)] max-w-7xl items-center gap-10 rounded-xl border border-slate-200 bg-white/20 px-5 py-14 shadow-sm backdrop-blur-2xl ring-1 ring-inset ring-white/15 sm:px-8 sm:py-20 lg:my-8 lg:grid-cols-[1fr_auto] lg:px-10">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100/20 bg-white/5 px-3 py-1.5 text-xs uppercase text-emerald-100 text-xs font-semibold tracking-wide leading-5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-sm" />
                    {labels.badge}
                  </div>
                  <h1 className="mt-6 text-white text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">
                    {labels.heroTitle}
                    <span className="mt-1 block text-emerald-300">{labels.heroTitleAccent}</span>
                  </h1>
                  <p className="mt-5 max-w-2xl text-slate-300      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                    {labels.heroDescription}
                  </p>
                </div>
                <div className="flex w-fit items-center gap-4 rounded-xl border border-slate-700 bg-white/[0.06] px-5 py-4 backdrop-blur">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-300/10 text-xl text-emerald-200">₹</span>
                  <span className="text-xs leading-5 text-slate-300">
                    {labels.subsidySnapshot}
                    <strong className="block text-base font-bold text-white tracking-normal">{labels.subsidyAmount}</strong>
                  </span>
                </div>
              </div>
              <div className="border-t border-slate-700">
                <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 px-5 py-4 text-xs uppercase text-emerald-100/60 sm:px-8 lg:px-10 text-xs font-semibold tracking-wide leading-5">
                  {labels.quickLinks.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            </header>
      <TrustRibbon />
    </>
  )
}
