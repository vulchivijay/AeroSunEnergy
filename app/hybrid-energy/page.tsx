import { getSliderImagePath } from '@/lib/sliderImages'
import { getRequestTranslations } from '@/lib/serverLocale'
import TirupatiEnergySection from '@/app/components/sections/TirupatiEnergySection'
import { getAccentOrDefault } from '@/lib/utils/utils'
import type { HeroSliderSlide } from '../components/ui/SharedHeroSlider'
import {
  HybridContentBlock,
  HybridFeatureCard,
  HybridInfoPanel,
  HybridSectionEyebrow,
  HybridTable,
  OptimizedImage,
} from '../components/ui'
import { hybridSolutionImages } from '../components/ui/EnergyContentImages'
import { TrustRibbon } from '@/app/components/ui/TrustRibbon'

export default async function HybridEnergyPage() {
  const t = await getRequestTranslations()
  const hybridPage = t.hybridPage

  const hybridSlidesLocalized: HeroSliderSlide[] = hybridPage.hero.slides.map((slide, index) => ({
    ...slide,
    image: getSliderImagePath(index + 13),
  }))
  const hybridTypesLocalized = hybridPage.categories.items
  const integrationTypesLocalized = hybridPage.integration.items
  const productPrioritiesLocalized = hybridPage.solutions.items
  const projectRowsLocalized = hybridPage.fit.rows
  const keyBenefitsLocalized = hybridPage.common.benefits
  const serviceSectionsLocalized = hybridPage.sections

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <header className="relative isolate min-h-[620px] overflow-hidden bg-[#102a43] text-white sm:min-h-[680px]">
        <div className="absolute inset-0 -z-10">
          {hybridSlidesLocalized[0] && (
            <OptimizedImage
              src={hybridSlidesLocalized[0].image}
              alt={hybridSlidesLocalized[0].title}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-50"
            />
          )}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,25,47,0.94)_0%,rgba(22,48,82,0.78)_52%,rgba(22,48,82,0.28)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102a43]/80 via-transparent to-[#102a43]/25" />
        </div>
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl flex-col justify-between px-4 py-10 sm:min-h-[680px] sm:px-6 sm:py-14 lg:px-10">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-white/10 px-4 py-2 uppercase text-white/90 backdrop-blur-md text-xs font-semibold tracking-wide leading-5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" aria-hidden="true" />
              {hybridPage.hero.eyebrow}
            </span>
          </div>
          <div className="grid items-end gap-10 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:py-20">
            <div className="max-w-4xl">
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">
                {hybridPage.hero.title}
                <span className="block text-amber-200">{hybridPage.hero.titleAccent}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-white/75 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                {hybridPage.hero.subtitle}
              </p>
            </div>
            <div className="relative max-w-md rounded-xl border border-slate-700 bg-[#102a43]/65 p-5 backdrop-blur-lg sm:p-6 lg:ml-auto">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="inline-flex w-fit rounded-full border border-amber-300/25 bg-white/10 px-3 py-1.5 uppercase text-amber-200 text-xs font-semibold tracking-wide leading-5">{hybridPage.hero.tagline}</p>
                  <p className="mt-3 text-white text-lg font-semibold tracking-normal leading-snug">{hybridPage.hero.supporting}</p>
                </div>
                <span className="rounded-xl border border-amber-200/20 bg-amber-300/10 px-3 py-2 text-xs uppercase text-amber-100 text-xs font-semibold tracking-wide leading-5">{hybridPage.labels.statusBalanced}</span>
              </div>
              <div className="relative mt-6 grid grid-cols-2 gap-3">
                <svg viewBox="0 0 300 130" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 top-7 z-0 h-24 w-full text-emerald-200/50" aria-hidden="true">
                  <path d="M75 5v38q0 12 12 12h126q12 0 12 12v38M225 5v38q0 12-12 12H87q-12 0-12 12v38" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 6" />
                </svg>
                {hybridPage.labels.sources.map(({ label, detail }, index) => (
                  <div key={label} className="relative z-10 rounded-xl border border-slate-700 bg-slate-950/25 p-3 text-center">
                    <span className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full text-base font-bold ${index === 0 ? 'bg-amber-300 text-slate-950' : 'bg-sky-300 text-slate-950'} tracking-normal`}>
                      {index === 0 ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42m0-14.14-1.42 1.42M6.35 17.65l-1.42 1.42" /></svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true"><path d="M3 8h13a3 3 0 1 0-3-3M2 12h17a3 3 0 1 1-3 3M4 16h8" strokeLinecap="round" /></svg>
                      )}
                    </span>
                    <p className="mt-2 text-white text-sm font-normal tracking-normal leading-5">{label}</p>
                    <p className="text-slate-300 text-xs font-normal tracking-normal leading-5">{detail}</p>
                  </div>
                ))}
                <div className="relative z-10 col-span-2 mx-auto w-full max-w-56 rounded-xl border border-emerald-200/25 bg-emerald-300/10 p-3 text-center">
                  <p className="text-emerald-100 text-sm font-normal tracking-normal leading-5">{hybridPage.labels.storageTagline}</p>
                  <p className="mt-1 text-slate-200 text-xs font-normal tracking-normal leading-5">{hybridPage.labels.storageSupporting}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 border-t border-slate-700 pt-5 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/20">
            {hybridPage.labels.deploymentModes.map(({ label, detail }, index) => (
              <div key={label} className="flex flex-col justify-center px-2 py-2 sm:px-5 sm:first:pl-0">
                <span className="font-mono text-sm text-amber-200 tabular-nums">0{index + 1}</span>
                <p className="mt-1 text-white text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{label}</p>
                <p className="mt-1 text-white/75 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <TrustRibbon />

      {/* <SharedHeroSlider slides={hybridSlidesLocalized} ariaLabel={hybridPage.labels.sliderAriaLabel} /> */}

      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <HybridSectionEyebrow>{hybridPage.categories.eyebrow}</HybridSectionEyebrow>
            <h2 className="mt-3 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{hybridPage.categories.title}</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {hybridTypesLocalized.map((type, index) => (
              <HybridFeatureCard
                key={type.title}
                title={type.title}
                description={type.description}
                points={type.highlights}
                accent={getAccentOrDefault(type.accent, ['sky', 'violet', 'amber'] as const, 'emerald')}
                imageSrc={hybridSolutionImages[index]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f1f2f6] to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="rounded-xl border border-slate-200 bg-slate-900 p-6 text-slate-100 shadow-sm sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-3">
              <div>
                <HybridSectionEyebrow>{hybridPage.integration.eyebrow}</HybridSectionEyebrow>
                <h3 className="mt-2 text-white text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{hybridPage.integration.title}</h3>
              </div>
              <div className="hidden rounded-full border border-slate-700 bg-white/5 px-3 py-2 text-xs uppercase text-slate-200 sm:block text-xs font-semibold tracking-wide leading-5">
                {hybridPage.integration.badge}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {integrationTypesLocalized.map((item, index) => (
                <div key={item} className="rounded-xl border border-slate-700 bg-white/5 p-4">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg font-bold text-emerald-300 tracking-normal">
                    {index + 1}
                  </div>
                  <p className="text-slate-100      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <HybridContentBlock
            eyebrow={hybridPage.hero.eyebrow}
            title={`${hybridPage.hero.title} ${hybridPage.hero.titleAccent}`}
            description={hybridPage.hero.subtitle}
            benefits={keyBenefitsLocalized.map((benefit) => ({
              title: benefit.split(' ').slice(0, 3).join(' ') || hybridPage.labels.benefitFallback,
              description: benefit,
            }))}
            imageSrc={hybridSolutionImages[0]}
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <HybridInfoPanel title={hybridPage.common.whyWorks} content={keyBenefitsLocalized} accent="emerald" />
              <HybridInfoPanel title={hybridPage.common.feasibilityChecklist} content={hybridPage.labels.feasibilityItems} accent="sky" />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f1f2f6] to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <HybridSectionEyebrow>{hybridPage.solutions.eyebrow}</HybridSectionEyebrow>
            <h2 className="mt-3 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{hybridPage.solutions.title}</h2>
          </div>

          <div className="space-y-8">
            {serviceSectionsLocalized.map((service, index) => (
              <article key={service.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-6 flex items-center justify-between gap-3">
                  <div>
                    <p className=" uppercase text-emerald-700    text-xs font-semibold tracking-wide leading-5">{hybridPage.labels.servicePrefix} {index + 1}</p>
                    <h3 className="mt-2 text-slate-900 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{service.title}</h3>
                  </div>
                  <div className="hidden rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs uppercase text-emerald-700 sm:block text-xs font-semibold tracking-wide leading-5">
                    {hybridPage.labels.systemBadge}
                  </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                  <div>
                    <h4 className=" text-slate-900 text-lg font-semibold tracking-normal leading-snug">{service.heading}</h4>
                    <p className="mt-4 text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{service.overview}</p>

                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                      {service.applications.map((item) => (
                        <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                          <p className="uppercase text-slate-600    text-xs font-semibold tracking-wide leading-5">{hybridPage.labels.application}</p>
                          <h5 className="mt-3 text-slate-900 text-base font-semibold tracking-normal leading-snug">{item.title}</h5>
                          <p className="mt-2 text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                    <p className=" uppercase text-emerald-700    text-xs font-semibold tracking-wide leading-5">{hybridPage.labels.benefits}</p>
                    <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3 rounded-xl bg-white/70 p-3">
                          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xs font-bold text-white tracking-normal">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                  <div className="rounded-xl border border-sky-200 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_100%)] p-5">
                    <p className=" uppercase text-sky-700    text-xs font-semibold tracking-wide leading-5">{hybridPage.labels.exampleCalculation}</p>
                    <h4 className="mt-3 text-slate-900 text-lg font-semibold tracking-normal leading-snug">{service.calculation.label}</h4>
                    <p className="mt-3 font-mono text-slate-800       tabular-nums text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{service.calculation.formula}</p>
                    <div className="mt-4 rounded-xl bg-slate-900 p-3 text-base font-semibold text-white tracking-normal">{service.calculation.result}</div>
                    <p className="mt-4 text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{service.calculation.note}</p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <p className=" uppercase text-slate-600    text-xs font-semibold tracking-wide leading-5">{hybridPage.labels.faqs}</p>
                    <div className="mt-4 space-y-4">
                      {service.faqs.map((item) => (
                        <div key={item.question} className="rounded-xl border border-slate-200 bg-white p-3.5">
                          <p className="text-slate-900      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{item.question}</p>
                          <p className="mt-2 text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{item.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-base font-semibold text-white transition hover:bg-slate-700 tracking-normal"
                  >
                    {hybridPage.labels.requestAssessment}
                  </a>
                  <a
                    href="/auth/dashboard/customer-enquiry"
                    className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-5 py-3 text-base font-semibold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-100 tracking-normal"
                  >
                    {hybridPage.labels.enquireNow}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <HybridSectionEyebrow>{hybridPage.fit.eyebrow}</HybridSectionEyebrow>
            <h2 className="mt-3 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{hybridPage.labels.typicalCombinations}</h2>
          </div>

          <HybridTable rows={projectRowsLocalized} />
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f1f2f6] to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <HybridSectionEyebrow>{hybridPage.labels.recommendedLaunch}</HybridSectionEyebrow>
                <h2 className="mt-3 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{hybridPage.labels.productPriorities}</h2>
                <div className="mt-6 space-y-3">
                  {productPrioritiesLocalized.map((item, index) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-base font-bold text-emerald-700 tracking-normal">
                        {index + 1}
                      </div>
                      <div className="text-sm font-medium text-slate-800 tracking-normal">{item}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-950 p-5 shadow-sm">
                <div className="relative h-72 overflow-hidden rounded-xl border border-slate-700 bg-slate-900">
                  <OptimizedImage
                    src="/images/slider/slider-13.webp"
                    alt={hybridPage.labels.deploymentAlt}
                    fill
                    sizes="(min-width: 1024px) 35vw, 100vw"
                    className="object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
                </div>
                <div className="mt-5 rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-4">
                  <p className=" uppercase text-emerald-200    text-xs font-semibold tracking-wide leading-5">{hybridPage.labels.keyInsight}</p>
                  <h3 className="mt-2 text-white text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{hybridPage.labels.insightTitle}</h3>
                  <p className="mt-2 text-slate-200      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                    {hybridPage.labels.insightDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TirupatiEnergySection background="first" />
    </main>
  )
}
