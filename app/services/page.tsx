'use client'

import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Compass,
  DraftingCompass,
  Gauge,
  Lightbulb,
  Settings2,
  Sun,
  Wind,
  Zap,
} from 'lucide-react'
import { OptimizedImage } from '@/app/components/ui'
import { useLocale } from '@/lib/LocaleContext'
import TirupatiEnergySection from '@/app/components/sections/TirupatiEnergySection'

const divisionIcons = [Sun, Wind, Zap, Gauge]
const capabilityIcons = [Compass, DraftingCompass, Settings2, ArrowRight, Gauge, Lightbulb]

export default function ServicesPage() {
  const { t } = useLocale()
  const page = t.servicesPage
  const labels = page.labels

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <header className="relative isolate min-h-[620px] overflow-hidden bg-[#102a43] text-white sm:min-h-[680px]">
        <div className="absolute inset-0 -z-10">
          <OptimizedImage
            src="/images/slider/slider-1.png"
            alt={labels.heroImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,25,47,0.94)_0%,rgba(22,48,82,0.78)_52%,rgba(22,48,82,0.28)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102a43]/80 via-transparent to-[#102a43]/25" />
        </div>

        <div className="mx-auto flex min-h-[620px] max-w-7xl flex-col justify-between px-4 py-10 sm:min-h-[680px] sm:px-6 sm:py-14 lg:px-10">
          <div className="flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.22em] text-white/90 backdrop-blur-md sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" aria-hidden="true" />
              {labels.badge}
            </span>
            <a href="#service-divisions" className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/75 transition hover:text-white sm:inline-flex">
              {labels.serviceStructure}
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid items-end gap-10 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:py-20">
            <div className="max-w-4xl">
              <p className="inline-flex w-fit rounded-full border border-amber-300/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-200">{labels.portfolio}</p>
              <h1 className="mt-5 text-5xl font-black leading-[0.98] tracking-tighter text-white sm:text-6xl lg:text-8xl">
                {labels.title}
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-xl sm:leading-8">
                {labels.description}
              </p>
            </div>

            <div className="max-w-md rounded-[22px] border border-white/15 bg-[#102a43]/65 p-5 backdrop-blur-lg sm:p-6 lg:ml-auto">
              <p className="inline-flex w-fit rounded-full border border-amber-300/25 bg-white/10 px-3 py-1.5 text-sm font-bold uppercase tracking-[0.2em] text-amber-200">{labels.coreModel}</p>
              <p className="mt-3 text-lg font-semibold leading-7 text-white sm:text-xl">{labels.coreModelSteps}</p>
              <div className="mt-5 flex items-center gap-2" aria-hidden="true">
                <span className="h-1 w-12 rounded-full bg-amber-300" />
                <span className="h-1 w-8 rounded-full bg-white/50" />
                <span className="h-1 w-8 rounded-full bg-white/30" />
                <span className="h-1 w-8 rounded-full bg-white/15" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 border-t border-white/20 pt-5 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-white/20">
            {labels.portfolioBenefits.map((benefit, index) => (
              <div key={benefit} className="flex items-center gap-2 px-2 text-xs font-medium text-white/80 sm:px-5 sm:first:pl-0">
                <span className="font-mono text-sm text-amber-200">0{index + 1}</span>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </header>

      <section id="service-divisions" className="bg-gradient-to-br from-white to-[#f1f2f6] mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10">
        <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="inline-flex w-fit rounded-full border border-emerald-800/15 bg-emerald-50 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-emerald-800">{labels.serviceStructure}</p>
            <h2 className="mt-3 text-3xl font-black tracking-tighter text-slate-950 sm:text-5xl">{labels.serviceStructureTitle}</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-600">{labels.completeSolutionsDescription}</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {page.servicePackages.map((service, index) => {
            const Icon = divisionIcons[index] ?? Zap
            return (
              <article key={service.title} className="group relative overflow-hidden rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#9fcbb5] hover:shadow-sm sm:p-8">
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${service.accent}`} />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs font-bold tracking-[0.18em] text-[#137c63]">{labels.division} 0{index + 1}</span>
                    <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">{service.title}</h3>
                  </div>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eaf2e9] text-[#137c63] transition group-hover:bg-[#087a61] group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-sm">{service.description}</p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 rounded-xl bg-slate-50 px-3 py-2.5 text-sm leading-5 text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#137c63]" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f1f2f6] to-white border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="inline-flex w-fit rounded-full border border-amber-800/15 bg-amber-50 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-amber-800">{labels.commonCapabilities}</p>
              <h2 className="mt-3 text-3xl font-black tracking-tighter text-slate-950 sm:text-5xl">{labels.commonCapabilitiesTitle}</h2>
              <span className="mt-6 block h-1 w-16 rounded-full bg-gradient-to-r from-amber-500 to-[#137c63]" aria-hidden="true" />
            </div>
            <div className="grid gap-x-8 sm:grid-cols-2">
              {page.serviceGrid.map((item, index) => {
                const Icon = capabilityIcons[index] ?? Settings2
                return (
                  <article key={item.title} className="flex gap-4 border-b border-slate-200 py-5 first:pt-0 sm:[&:nth-child(-n+2)]:pt-0">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf2e9] text-[#137c63]">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-[#f1f2f6] mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10">
        <div className="overflow-hidden rounded-[30px] bg-[linear-gradient(135deg,#102a43_0%,#1d4e89_55%,#2c698d_100%)] p-6 text-white shadow-sm sm:p-10 lg:p-12">
          <div className="mb-8 max-w-3xl">
            <p className="inline-flex w-fit rounded-full border border-amber-300/25 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-amber-200">{labels.deliveryModel}</p>
            <h2 className="mt-3 text-3xl font-black tracking-tighter sm:text-5xl">{labels.deliveryModelTitle}</h2>
          </div>
          <div className="grid gap-3 xl:grid-cols-2">
            {page.packages.map((pkg, index) => (
              <article key={pkg.name} className="rounded-2xl border border-white/15 bg-white/[0.07] p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                  <span className="font-mono text-xs font-bold text-amber-200">PACKAGE 0{index + 1}</span>
                </div>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-sky-100/80">{pkg.customers}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {pkg.services.map((service) => (
                    <li key={service} className="flex items-start gap-2 text-sm leading-6 text-white/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" aria-hidden="true" />
                      {service}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f1f2f6] to-white mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-14 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.92fr]">
          <article className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="inline-flex w-fit rounded-full border border-sky-800/15 bg-sky-50 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-sky-800">{labels.roadmap}</p>
            <h2 className="mt-3 text-3xl font-black tracking-tighter text-slate-950">{labels.roadmapTitle}</h2>
            <div className="relative mt-7 space-y-4 before:absolute before:bottom-7 before:left-[1.15rem] before:top-7 before:w-px before:bg-emerald-200">
              {page.labels.roadmapPhases.map((phase, index) => (
                <div key={phase.label} className="relative flex gap-4 rounded-2xl bg-slate-50 p-4">
                  <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-4 border-white bg-emerald-700 font-mono text-sm font-bold text-white shadow-sm">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#137c63]">{phase.label}</p>
                    <p className="mt-1 text-sm font-semibold leading-6 text-slate-800">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="relative isolate flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[1.8rem] bg-slate-950 p-6 text-white sm:p-8">
            <div className="absolute inset-0 -z-10">
              <OptimizedImage
                src="/images/slider/slider-2.png"
                alt={labels.roadmapImageAlt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover opacity-55"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102a43] via-[#102a43]/50 to-transparent" />
            </div>
            <p className="inline-flex w-fit rounded-full border border-amber-300/25 bg-black/25 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-amber-200">{labels.finalRecommendation}</p>
            <h3 className="mt-3 max-w-lg text-3xl font-black tracking-tighter sm:text-4xl">{labels.finalRecommendationTitle}</h3>
            <ul className="mt-5 space-y-2.5">
              {labels.recommendationItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-white/90">
                  <Check className="h-4 w-4 text-amber-200" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-[#f1f2f6] border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10">
          <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="inline-flex w-fit rounded-full border border-emerald-800/15 bg-emerald-50 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-emerald-800">{labels.completeSolutions}</p>
              <h2 className="mt-3 text-3xl font-black tracking-tighter text-slate-950 sm:text-5xl">{labels.completeSolutionsTitle}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{labels.completeSolutionsDescription}</p>
            </div>
            <span className="w-fit rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">
              {labels.endToEndSupport}
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {page.solarPillars.map((service, index) => (
              <article key={service.title} className="group overflow-hidden rounded-[22px] border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:border-[#9fcbb5] hover:shadow-sm">
                <div className={`h-1.5 bg-gradient-to-r ${service.accent}`} />
                <div className="p-5 sm:p-6">
                  <p className="font-mono text-xs font-bold tracking-[0.18em] text-[#137c63]">0{index + 1} / {labels.ourServices}</p>
                  <h3 className="mt-3 text-xl font-black leading-snug text-slate-950">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                  <ul className="mt-5 space-y-2">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm leading-5 text-slate-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#137c63]" aria-hidden="true" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f1f2f6] to-white mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10">
        <div className="mb-9 max-w-3xl">
          <p className="inline-flex w-fit rounded-full border border-sky-800/15 bg-sky-50 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-sky-800">{labels.systemTypes}</p>
          <h2 className="mt-3 text-3xl font-black tracking-tighter text-slate-950 sm:text-5xl">{labels.systemTypesTitle}</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">{labels.systemTypesDescription}</p>
        </div>

        <div className="grid gap-4 xl:grid-cols-3">
          {page.systemTypes.map((system, index) => (
            <article key={system.type} className={`rounded-[22px] border p-6 shadow-sm ${system.accent}`}>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs font-bold tracking-[0.2em] opacity-70">SYSTEM 0{index + 1}</span>
                <span className="rounded-full bg-white/80 px-3 py-1 text-sm font-bold uppercase tracking-[0.15em] text-slate-700">{system.badge}</span>
              </div>
              <h3 className="mt-5 text-2xl font-black">{system.type}</h3>
              <p className="mt-3 text-sm leading-6">{system.description}</p>
              <ul className="mt-5 space-y-2.5">
                {system.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm leading-5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-xl bg-white/75 px-4 py-3 text-sm leading-6 text-slate-700">
                <span className="font-bold">{labels.bestFor}</span> {system.bestFor}
              </p>
            </article>
          ))}
        </div>
      </section>
      <TirupatiEnergySection background="first" />
    </main>
  )
}
