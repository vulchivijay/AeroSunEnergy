'use client'

import { useLocale } from '@/lib/LocaleContext'
import TirupatiEnergySection from '@/app/components/sections/TirupatiEnergySection'
import { getAccentOrDefault } from '@/lib/utils/utils'
import { SharedHeroSlider, type HeroSliderSlide } from '../components/ui/SharedHeroSlider'
import {
  HybridBenefitCard,
  HybridFeatureCard,
  HybridInfoPanel,
  HybridSectionEyebrow,
  HybridTable,
  OptimizedImage,
} from '../components/ui'

export default function HybridEnergyPage() {
  const { t } = useLocale()
  const hybridPage = t.hybridPage

  const hybridSlidesLocalized = hybridPage.hero.slides
  const hybridTypesLocalized = hybridPage.categories.items
  const integrationTypesLocalized = hybridPage.integration.items
  const productPrioritiesLocalized = hybridPage.solutions.items
  const projectRowsLocalized = hybridPage.fit.rows
  const keyBenefitsLocalized = hybridPage.common.benefits
  const serviceSectionsLocalized = hybridPage.sections

  return (
    <main className="bg-[#ffffff] pt-6 sm:pt-8 text-slate-900 [&>section]:border-t-4 [&>section]:border-t-violet-400 overflow-hidden">
      <header className="relative mx-auto mb-6 max-w-7xl overflow-hidden rounded-[2.5rem] border border-slate-800 bg-[#10152d] px-5 py-7 text-white shadow-[0_30px_75px_-42px_rgba(28,27,75,0.7)] sm:mb-8 sm:px-8 sm:py-9 lg:px-10 lg:py-11">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_110%,rgba(16,185,129,0.24),transparent_42%),radial-gradient(ellipse_at_90%_0%,rgba(139,92,246,0.28),transparent_40%)]" aria-hidden="true" />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200/25 bg-white/[0.07] px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.24em] text-violet-200">
              <span className="h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
              {hybridPage.hero.eyebrow}
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.02] tracking-[0.06em] text-white sm:text-5xl lg:text-7xl">
              {hybridPage.hero.title}
              <span className="block bg-linear-to-r from-emerald-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">{hybridPage.hero.titleAccent}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              {hybridPage.hero.subtitle}
            </p>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm sm:p-7">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-emerald-200">{hybridPage.hero.tagline}</p>
                <p className="mt-1 text-xl font-black tracking-tight text-white sm:text-2xl">{hybridPage.hero.supporting}</p>
              </div>
              <span className="rounded-xl border border-emerald-200/20 bg-emerald-300/10 px-3 py-2 text-[12px] font-bold uppercase tracking-[0.14em] text-emerald-100">{hybridPage.labels.statusBalanced}</span>
            </div>
            <div className="relative mt-7 grid grid-cols-2 gap-3">
              <svg viewBox="0 0 300 130" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 top-7 z-0 h-24 w-full text-emerald-200/50" aria-hidden="true">
                <path d="M75 5v38q0 12 12 12h126q12 0 12 12v38M225 5v38q0 12-12 12H87q-12 0-12 12v38" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 6" />
              </svg>
              {hybridPage.labels.sources.map(({ label, detail }, index) => (
                <div key={label} className="relative z-10 rounded-2xl border border-white/15 bg-slate-950/25 p-3.5 text-center sm:p-4">
                  <span className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full text-md font-black ${index === 0 ? 'bg-amber-300 text-slate-950' : 'bg-sky-300 text-slate-950'}`}>
                    {index === 0 ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42m0-14.14-1.42 1.42M6.35 17.65l-1.42 1.42" /></svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true"><path d="M3 8h13a3 3 0 1 0-3-3M2 12h17a3 3 0 1 1-3 3M4 16h8" strokeLinecap="round" /></svg>
                    )}
                  </span>
                  <p className="mt-2 text-md font-bold text-white">{label}</p>
                  <p className="text-md text-slate-300">{detail}</p>
                </div>
              ))}
              <div className="relative z-10 col-span-2 mx-auto w-full max-w-56 rounded-2xl border border-emerald-200/25 bg-emerald-300/10 p-3.5 text-center">
                <p className="text-md font-bold text-emerald-100">{hybridPage.labels.storageTagline}</p>
                <p className="mt-1 text-md text-slate-200">{hybridPage.labels.storageSupporting}</p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
              {hybridPage.labels.deploymentModes.map(({ label, detail }) => (
                <span key={label} className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1.5 text-md text-slate-200">
                  <strong className="font-bold text-white">{label}</strong> · {detail}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <SharedHeroSlider slides={hybridSlidesLocalized as HeroSliderSlide[]} ariaLabel={hybridPage.labels.sliderAriaLabel} />

      <section className="mx-auto my-6 max-w-7xl rounded-[2rem] border border-emerald-200/80 bg-white p-5 shadow-[0_20px_55px_-42px_rgba(16,87,58,0.28)] sm:my-8 sm:p-8 lg:p-9">
        <div className="mb-8 max-w-3xl">
          <HybridSectionEyebrow>{hybridPage.categories.eyebrow}</HybridSectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{hybridPage.categories.title}</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {hybridTypesLocalized.map((type) => (
            <HybridFeatureCard
              key={type.title}
              title={type.title}
              description={type.description}
              points={type.highlights}
              accent={getAccentOrDefault(type.accent, ['sky', 'violet', 'amber'] as const, 'emerald')}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto my-6 max-w-7xl rounded-[2rem] border border-violet-200/80 bg-[#f7f5ff] p-5 shadow-[0_20px_55px_-42px_rgba(74,54,130,0.24)] sm:my-8 sm:p-8 lg:p-9">
        <div className="rounded-4xl border border-slate-200 bg-slate-900 p-6 text-slate-100 shadow-[0_32px_90px_-38px_rgba(15,23,42,1)] sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-3">
            <div>
              <HybridSectionEyebrow>{hybridPage.integration.eyebrow}</HybridSectionEyebrow>
              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{hybridPage.integration.title}</h3>
            </div>
            <div className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.25em] text-slate-200 sm:block">
              {hybridPage.integration.badge}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {integrationTypesLocalized.map((item, index) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg font-bold text-emerald-300">
                  {index + 1}
                </div>
                <p className="text-sm leading-7 text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto my-6 max-w-7xl rounded-[2rem] border border-emerald-200/80 bg-white p-5 shadow-[0_20px_55px_-42px_rgba(16,87,58,0.28)] sm:my-8 sm:p-8 lg:p-9">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {keyBenefitsLocalized.map((benefit) => (
              <HybridBenefitCard key={benefit} title={benefit.split(' ').slice(0, 3).join(' ') || hybridPage.labels.benefitFallback} description={benefit} />
            ))}
          </div>

          <div className="space-y-5">
            <HybridInfoPanel title={hybridPage.common.whyWorks} content={keyBenefitsLocalized} accent="emerald" />
            <HybridInfoPanel title={hybridPage.common.feasibilityChecklist} content={hybridPage.labels.feasibilityItems} accent="sky" />
          </div>
        </div>
      </section>

      <section className="mx-auto my-6 max-w-7xl rounded-[2rem] border border-violet-200/80 bg-[#f7f5ff] p-5 shadow-[0_20px_55px_-42px_rgba(74,54,130,0.24)] sm:my-8 sm:p-8 lg:p-9">
        <div className="mb-8 max-w-3xl">
          <HybridSectionEyebrow>{hybridPage.solutions.eyebrow}</HybridSectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{hybridPage.solutions.title}</h2>
        </div>

        <div className="space-y-8">
          {serviceSectionsLocalized.map((service, index) => (
            <article key={service.title} className="rounded-4xl border border-slate-200 bg-white p-5 shadow-[0_20px_44px_-30px_rgba(15,23,42,0.32)] sm:p-8">
              <div className="mb-6 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[12px] font-black uppercase tracking-[0.28em] text-emerald-700">{hybridPage.labels.servicePrefix} {index + 1}</p>
                  <h3 className="mt-2 text-2xl font-black tracking-[0.04em] text-slate-900 sm:text-3xl">{service.title}</h3>
                </div>
                <div className="hidden rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-[12px] font-bold uppercase tracking-[0.2em] text-emerald-700 sm:block">
                  {hybridPage.labels.systemBadge}
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <h4 className="text-xl font-bold text-slate-900">{service.heading}</h4>
                  <p className="mt-4 text-sm leading-8 text-slate-700">{service.overview}</p>

                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {service.applications.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <p className="text-md font-black uppercase tracking-[0.18em] text-slate-600">{hybridPage.labels.application}</p>
                        <h5 className="mt-3 text-lg font-bold text-slate-900">{item.title}</h5>
                        <p className="mt-2 text-md leading-6 text-slate-700">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.8rem] border border-emerald-200 bg-emerald-50 p-5">
                  <p className="text-[12px] font-black uppercase tracking-[0.26em] text-emerald-700">{hybridPage.labels.benefits}</p>
                  <ul className="mt-4 space-y-3 text-md leading-7 text-slate-700">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 rounded-2xl bg-white/70 p-3">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-[12px] font-black text-white">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                <div className="rounded-[1.75rem] border border-sky-200 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_100%)] p-5">
                  <p className="text-[12px] font-black uppercase tracking-[0.24em] text-sky-700">{hybridPage.labels.exampleCalculation}</p>
                  <h4 className="mt-3 text-xl font-black tracking-[0.03em] text-slate-900">{service.calculation.label}</h4>
                  <p className="mt-3 font-mono text-md leading-7 text-slate-800">{service.calculation.formula}</p>
                  <div className="mt-4 rounded-2xl bg-slate-900 p-3 text-md font-semibold text-white">{service.calculation.result}</div>
                  <p className="mt-4 text-md leading-6 text-slate-700">{service.calculation.note}</p>
                </div>

                <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-[12px] font-black uppercase tracking-[0.24em] text-slate-600">{hybridPage.labels.faqs}</p>
                  <div className="mt-4 space-y-4">
                    {service.faqs.map((item) => (
                      <div key={item.question} className="rounded-2xl border border-slate-200 bg-white p-3.5">
                        <p className="text-md font-black text-slate-900">{item.question}</p>
                        <p className="mt-2 text-md leading-7 text-slate-700">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-md font-semibold text-white transition hover:bg-slate-700"
                >
                  {hybridPage.labels.requestAssessment}
                </a>
                <a
                  href="/customer-enquiry"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-5 py-3 text-md font-semibold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-100"
                >
                  {hybridPage.labels.enquireNow}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto my-6 max-w-7xl rounded-[2rem] border border-emerald-200/80 bg-white p-5 shadow-[0_20px_55px_-42px_rgba(16,87,58,0.28)] sm:my-8 sm:p-8 lg:p-9">
        <div className="mb-8 max-w-3xl">
          <HybridSectionEyebrow>{hybridPage.fit.eyebrow}</HybridSectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">{hybridPage.labels.typicalCombinations}</h2>
        </div>

        <HybridTable rows={projectRowsLocalized} />
      </section>

      <section className="mx-auto my-6 max-w-7xl rounded-[2rem] border border-violet-200/80 bg-[#f7f5ff] p-5 shadow-[0_20px_55px_-42px_rgba(74,54,130,0.24)] sm:my-8 sm:p-8 lg:p-9">
        <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.25)] sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <HybridSectionEyebrow>{hybridPage.labels.recommendedLaunch}</HybridSectionEyebrow>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">{hybridPage.labels.productPriorities}</h2>
              <div className="mt-6 space-y-3">
                {productPrioritiesLocalized.map((item, index) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-md font-bold text-emerald-700">
                      {index + 1}
                    </div>
                    <div className="text-sm font-medium text-slate-800">{item}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-4xl border border-slate-200 bg-slate-950 p-5 shadow-[0_28px_70px_-36px_rgba(15,23,42,0.9)]">
              <div className="relative h-72 overflow-hidden rounded-3xl border border-white/10 bg-slate-900">
                <OptimizedImage
                  src="/images/slider/slider-13.png"
                  alt={hybridPage.labels.deploymentAlt}
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
              </div>
              <div className="mt-5 rounded-3xl border border-emerald-400/20 bg-emerald-500/10 p-4">
                <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-emerald-200">{hybridPage.labels.keyInsight}</p>
                <h3 className="mt-2 text-xl font-bold text-white">{hybridPage.labels.insightTitle}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-200">
                  {hybridPage.labels.insightDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TirupatiEnergySection />
    </main>
  )
}
