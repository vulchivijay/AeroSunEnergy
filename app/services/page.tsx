'use client'

import { OptimizedImage } from '@/app/components/ui'
import { useLocale } from '@/lib/LocaleContext'

export default function ServicesPage() {
  const { t } = useLocale()
  const servicePage = t.servicesPage
  const servicePackagesData = servicePage.servicePackages
  const serviceGridData = servicePage.serviceGrid
  const packagesData = servicePage.packages
  const solarPillarsData = servicePage.solarPillars
  const systemTypesData = servicePage.systemTypes
  const labels = servicePage.labels

  return (
    <main className="bg-slate-50 text-slate-900">
      <header className="mx-auto max-w-7xl px-4 pb-6 pt-8 sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.28em] text-emerald-700">
          {labels.badge}
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {labels.title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
              {labels.description}
            </p>
          </div>

          <div className="rounded-4xl border border-slate-200 bg-white p-5 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.25)]">
            <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-slate-500">{labels.coreModel}</p>
            <p className="mt-3 text-md text-slate-900">{labels.coreModelSteps}</p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-950 shadow-[0_34px_100px_-40px_rgba(15,23,42,0.9)]">
          <div className="absolute inset-0">
            <OptimizedImage
              src="/images/slider/slider-1.webp"
              alt={labels.heroImageAlt}
              fill
              sizes="100vw"
              className="object-cover opacity-60"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/80 via-slate-900/60 to-emerald-900/35" />
          <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
            <div className="max-w-2xl">
              <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-emerald-300">{labels.portfolio}</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {labels.portfolioTitle}
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                {labels.portfolioDescription}
              </p>
            </div>

            <div className="flex items-end">
              <div className="w-full rounded-4xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-slate-200">{labels.whyItMatters}</p>
                <ul className="mt-4 space-y-3 text-base text-slate-100">
                  {labels.portfolioBenefits.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-sky-700">{labels.serviceStructure}</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{labels.serviceStructureTitle}</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {servicePackagesData.map((service) => (
            <article key={service.title} className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_20px_40px_-28px_rgba(15,23,42,0.25)]">
              <div className={`h-2 bg-linear-to-r ${service.accent}`} />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-700">{service.description}</p>
                <ul className="mt-5 space-y-3 text-base text-slate-700">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-amber-700">{labels.commonCapabilities}</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">{labels.commonCapabilitiesTitle}</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceGridData.map((item) => (
            <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_16px_28px_-24px_rgba(15,23,42,0.4)]">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-md font-bold text-amber-700">
                {item.title.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-slate-200 bg-slate-900 p-6 text-slate-100 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.9)] sm:p-8">
          <div className="mb-6">
            <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-emerald-300">{labels.deliveryModel}</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{labels.deliveryModelTitle}</h2>
          </div>

          <div className="grid gap-4 xl:grid-cols-2">
            {packagesData.map((pkg) => (
              <div key={pkg.name} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.24em] text-slate-300">{pkg.customers}</p>
                <ul className="mt-4 space-y-2 text-base text-slate-200">
                  {pkg.services.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.25)] sm:p-8">
            <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-sky-700">{labels.roadmap}</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">{labels.roadmapTitle}</h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-md font-bold uppercase tracking-[0.2em] text-emerald-700">{labels.roadmapPhases[0].label}</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{labels.roadmapPhases[0].description}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-md font-bold uppercase tracking-[0.2em] text-amber-700">{labels.roadmapPhases[1].label}</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{labels.roadmapPhases[1].description}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-md font-bold uppercase tracking-[0.2em] text-violet-700">{labels.roadmapPhases[2].label}</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{labels.roadmapPhases[2].description}</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_20px_40px_-28px_rgba(15,23,42,0.25)]">
            <div className="relative h-72 overflow-hidden">
              <OptimizedImage
                src="/images/slider/slider-2.png"
                alt={labels.roadmapImageAlt}
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
            </div>
            <div className="p-6">
              <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-emerald-700">{labels.finalRecommendation}</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">{labels.finalRecommendationTitle}</h3>
              <ul className="mt-4 space-y-2 text-base text-slate-700">
                {labels.recommendationItems.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-emerald-700">{labels.completeSolutions}</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{labels.completeSolutionsTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            {labels.completeSolutionsDescription}
          </p>
        </div>

        <div className="overflow-hidden rounded-4xl border border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-amber-50 p-6 shadow-[0_24px_60px_-36px_rgba(16,185,129,0.35)] sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-emerald-700">{labels.ourServices}</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">{labels.solarPillarsTitle}</h3>
            </div>
            <div className="hidden rounded-full border border-emerald-200 bg-white px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.2em] text-emerald-700 sm:block">
              {labels.endToEndSupport}
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {solarPillarsData.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-[0_14px_32px_-24px_rgba(15,23,42,0.22)]">
                <div className={`h-2 bg-linear-to-r ${item.accent}`} />
                <div className="p-5">
                  <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                  <p className="mt-3 text-md leading-7 text-slate-700">{item.description}</p>
                  <ul className="mt-4 space-y-2 text-md leading-6 text-slate-700">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <button type="button" className="mt-5 inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[12px] font-bold uppercase tracking-[0.18em] text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700">
                    {labels.learnMore}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-sky-700">{labels.systemTypes}</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{labels.systemTypesTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            {labels.systemTypesDescription}
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          {systemTypesData.map((system) => (
            <div key={system.type} className={`rounded-[1.8rem] border p-5 shadow-[0_18px_42px_-30px_rgba(15,23,42,0.35)] ${system.accent}`}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl font-bold">{system.type}</h3>
                <span className="rounded-full bg-white/80 px-2.5 py-1 text-[12px] font-bold uppercase tracking-[0.18em] text-slate-700">{system.badge}</span>
              </div>

              <p className="mt-4 text-md leading-7">{system.description}</p>

              <ul className="mt-4 space-y-2 text-md leading-6">
                {system.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-slate-900" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-2xl bg-white/75 p-3 text-md font-semibold text-slate-700">
                <span className="font-bold">{labels.bestFor}</span> {system.bestFor}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}