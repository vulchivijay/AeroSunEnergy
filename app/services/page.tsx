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
import { TrustRibbon } from '@/app/components/ui/TrustRibbon'
import { getRequestTranslations } from '@/lib/serverLocale'
import TirupatiEnergySection from '@/app/components/sections/TirupatiEnergySection'

const divisionIcons = [Sun, Wind, Zap, Gauge]
const capabilityIcons = [Compass, DraftingCompass, Settings2, ArrowRight, Gauge, Lightbulb]

export default async function ServicesPage() {
  const t = await getRequestTranslations()
  const page = t.servicesPage
  const labels = page.labels

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <header className="relative isolate min-h-[620px] overflow-hidden bg-[#102a43] text-white sm:min-h-[680px]">
        <div className="absolute inset-0 -z-10">
          <OptimizedImage
            src="/images/slider/slider-7.webp"
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
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-white/10 px-4 py-2 uppercase text-white/90 backdrop-blur-md text-xs font-semibold tracking-wide leading-5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" aria-hidden="true" />
              {labels.badge}
            </span>
            <a href="#service-divisions" className="hidden items-center gap-2 uppercase text-white/75 transition hover:text-white sm:inline-flex text-sm font-semibold tracking-wide leading-5">
              {labels.serviceStructure}
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid items-end gap-10 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:py-20">
            <div className="max-w-4xl">
              <p className="inline-flex w-fit rounded-full border border-amber-300/25 bg-white/10 px-4 py-2 uppercase text-amber-200    text-xs font-semibold tracking-wide leading-5">{labels.portfolio}</p>
              <h1 className="mt-5 text-white text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">
                {labels.title}
              </h1>
              <p className="mt-6 max-w-2xl text-white/75       text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                {labels.description}
              </p>
            </div>

            <div className="max-w-md rounded-xl border border-slate-700 bg-[#102a43]/65 p-5 backdrop-blur-lg sm:p-6 lg:ml-auto">
              <p className="inline-flex w-fit rounded-full border border-amber-300/25 bg-white/10 px-3 py-1.5 uppercase text-amber-200    text-xs font-semibold tracking-wide leading-5">{labels.coreModel}</p>
              <p className="mt-3 text-white     text-lg font-semibold tracking-normal leading-snug">{labels.coreModelSteps}</p>
              <div className="mt-5 flex items-center gap-2" aria-hidden="true">
                <span className="h-1 w-12 rounded-full bg-amber-300" />
                <span className="h-1 w-8 rounded-full bg-white/50" />
                <span className="h-1 w-8 rounded-full bg-white/30" />
                <span className="h-1 w-8 rounded-full bg-white/15" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 border-t border-slate-700 pt-5 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-white/20">
            {labels.portfolioBenefits.map((benefit, index) => (
              <div key={benefit} className="flex items-center gap-2 px-2 text-xs font-medium text-white/80 sm:px-5 sm:first:pl-0 tracking-normal">
                <span className="font-mono text-sm text-amber-200 tabular-nums">0{index + 1}</span>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </header>

      <TrustRibbon />

      <section id="service-divisions" className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="inline-flex w-fit rounded-full border border-slate-200 bg-emerald-50 px-4 py-2 uppercase text-emerald-800    text-xs font-semibold tracking-wide leading-5">{labels.serviceStructure}</p>
              <h2 className="mt-3 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{labels.serviceStructureTitle}</h2>
            </div>
            <p className="max-w-sm text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{labels.completeSolutionsDescription}</p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {page.servicePackages.map((service, index) => {
              const Icon = divisionIcons[index] ?? Zap
              return (
                <article key={service.title} className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#9fcbb5] hover:shadow-md sm:p-8">
                  <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${service.accent}`} />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-[#137c63] text-xs font-semibold tracking-wide leading-5 tabular-nums">{labels.division} 0{index + 1}</span>
                      <h3 className="mt-3 text-slate-950 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{service.title}</h3>
                    </div>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eaf2e9] text-[#137c63] transition group-hover:bg-[#087a61] group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                  </div>
                  <p className="mt-4 max-w-2xl text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{service.description}</p>
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
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f1f2f6] to-white border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="inline-flex w-fit rounded-full border border-slate-200 bg-amber-50 px-4 py-2 uppercase text-amber-800    text-xs font-semibold tracking-wide leading-5">{labels.commonCapabilities}</p>
              <h2 className="mt-3 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{labels.commonCapabilitiesTitle}</h2>
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
                      <h3 className="text-slate-900 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{item.title}</h3>
                      <p className="mt-2 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{item.text}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="overflow-hidden rounded-xl bg-[linear-gradient(135deg,#102a43_0%,#1d4e89_55%,#2c698d_100%)] p-6 text-white shadow-sm sm:p-8 lg:p-12">
            <div className="mb-8 max-w-3xl">
              <p className="inline-flex w-fit rounded-full border border-amber-300/25 bg-white/10 px-4 py-2 uppercase text-amber-200    text-xs font-semibold tracking-wide leading-5">{labels.deliveryModel}</p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{labels.deliveryModelTitle}</h2>
            </div>
            <div className="grid gap-3 xl:grid-cols-2">
              {page.packages.map((pkg, index) => (
                <article key={pkg.name} className="rounded-xl border border-slate-700 bg-white/[0.07] p-5 sm:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className=" text-white text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{pkg.name}</h3>
                    <span className="font-mono text-xs font-bold text-amber-200 tracking-normal tabular-nums">PACKAGE 0{index + 1}</span>
                  </div>
                  <p className="mt-2 uppercase text-sky-100/80    text-xs font-semibold tracking-wide leading-5">{pkg.customers}</p>
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
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f1f2f6] to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.92fr]">
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="inline-flex w-fit rounded-full border border-slate-200 bg-sky-50 px-4 py-2 uppercase text-sky-800    text-xs font-semibold tracking-wide leading-5">{labels.roadmap}</p>
              <h2 className="mt-3 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{labels.roadmapTitle}</h2>
              <div className="relative mt-7 space-y-4 before:absolute before:bottom-7 before:left-[1.15rem] before:top-7 before:w-px before:bg-emerald-200">
                {page.labels.roadmapPhases.map((phase, index) => (
                  <div key={phase.label} className="relative flex gap-4 rounded-xl bg-slate-50 p-4">
                    <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-4 border-white bg-emerald-700 font-mono text-sm font-bold text-white shadow-sm tracking-normal tabular-nums">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="uppercase text-[#137c63]    text-xs font-semibold tracking-wide leading-5">{phase.label}</p>
                      <p className="mt-1 text-slate-800      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="relative isolate flex min-h-[420px] flex-col justify-end overflow-hidden rounded-xl bg-slate-950 p-6 text-white sm:p-8">
              <div className="absolute inset-0 -z-10">
                <OptimizedImage
                  src="/images/slider/slider-2.webp"
                  alt={labels.roadmapImageAlt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover opacity-55"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102a43] via-[#102a43]/50 to-transparent" />
              </div>
              <p className="inline-flex w-fit rounded-full border border-amber-300/25 bg-black/25 px-4 py-2 uppercase text-amber-200    text-xs font-semibold tracking-wide leading-5">{labels.finalRecommendation}</p>
              <h3 className="mt-3 max-w-lg text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{labels.finalRecommendationTitle}</h3>
              <ul className="mt-5 space-y-2.5">
                {labels.recommendationItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-white/90 tracking-normal">
                    <Check className="h-4 w-4 text-amber-200" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-[#f1f2f6] border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="inline-flex w-fit rounded-full border border-slate-200 bg-emerald-50 px-4 py-2 uppercase text-emerald-800    text-xs font-semibold tracking-wide leading-5">{labels.completeSolutions}</p>
              <h2 className="mt-3 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{labels.completeSolutionsTitle}</h2>
              <p className="mt-4 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{labels.completeSolutionsDescription}</p>
            </div>
            <span className="w-fit rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 uppercase text-emerald-800 text-xs font-semibold tracking-wide leading-5">
              {labels.endToEndSupport}
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {page.solarPillars.map((service, index) => (
              <article key={service.title} className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:border-[#9fcbb5] hover:shadow-md">
                <div className={`h-1.5 bg-gradient-to-r ${service.accent}`} />
                <div className="p-5 sm:p-6">
                  <p className="font-mono text-[#137c63]     tabular-nums text-xs font-semibold tracking-wide leading-5">0{index + 1} / {labels.ourServices}</p>
                  <h3 className="mt-3 text-slate-950 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{service.title}</h3>
                  <p className="mt-3 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{service.description}</p>
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

      <section className="bg-gradient-to-br from-[#f1f2f6] to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <p className="inline-flex w-fit rounded-full border border-slate-200 bg-sky-50 px-4 py-2 uppercase text-sky-800    text-xs font-semibold tracking-wide leading-5">{labels.systemTypes}</p>
            <h2 className="mt-3 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{labels.systemTypesTitle}</h2>
            <p className="mt-4 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{labels.systemTypesDescription}</p>
          </div>

          <div className="grid gap-4 xl:grid-cols-3">
            {page.systemTypes.map((system, index) => (
              <article key={system.type} className={`rounded-xl border p-6 shadow-sm ${system.accent}`}>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono opacity-70 text-xs font-semibold tracking-wide leading-5 tabular-nums">SYSTEM 0{index + 1}</span>
                  <span className="rounded-full bg-white/80 px-3 py-1 uppercase text-slate-700 text-xs font-semibold tracking-wide leading-5">{system.badge}</span>
                </div>
                <h3 className="mt-5 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{system.type}</h3>
                <p className="mt-3      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{system.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {system.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm leading-5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-xl bg-white/75 px-4 py-3 text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                  <span className="font-bold tracking-normal">{labels.bestFor}</span> {system.bestFor}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <TirupatiEnergySection background="first" />
    </main>
  )
}
