'use client'

import { useLocale } from '@/lib/LocaleContext'
import {
  OptimizedImage,
  Slider,
  WindBenefitCard,
  WindCapacityTable,
  WindComparisonTable,
  WindFeatureCard,
  WindInfoPanel,
  WindSectionEyebrow,
} from '../components/ui'

type WindSlide = {
  badge: string
  title: string
  description: string
  image: string
  tags: string[]
  badgeClass: string
  chipClass: string
  panelClass: string
}

function getWindAccent(accent: string): 'sky' | 'emerald' | 'amber' | 'violet' {
  switch (accent) {
    case 'emerald':
    case 'amber':
    case 'violet':
      return accent
    default:
      return 'sky'
  }
}

function WindHeroSlider({ slides, ariaLabel }: { slides: WindSlide[]; ariaLabel: string }) {
  const slideClass =
    'group relative flex h-full w-full items-end justify-start overflow-hidden p-6 sm:p-8 lg:p-14 xl:p-18'

  const slideOverlay =
    'absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.32),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.18),transparent_30%),linear-gradient(90deg,rgba(2,6,23,0.78)_0%,rgba(15,23,42,0.6)_40%,rgba(15,23,42,0.28)_100%)]'

  return (
    <Slider autoplay interval={5200} pauseOnHover ariaLabel={ariaLabel}>
      {slides.map((slide, index) => (
        <div key={slide.title} className={`${slide.panelClass} relative h-full w-full overflow-hidden`}>
          <div className="absolute inset-0">
            <OptimizedImage
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
              sizes="100vw"
              className="object-cover object-center"
              style={{ filter: 'saturate(1.12) brightness(0.68)' }}
            />
          </div>
          <div className={`${slideOverlay} absolute inset-0`} />

          <div className={slideClass}>
            <div className="relative z-10 w-full max-w-3xl rounded-[28px] border border-white/15 bg-slate-950/30 p-4 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.9)] backdrop-blur-[3px] sm:p-6 lg:p-8">
              <span
                className={`mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[12px] uppercase tracking-[0.28em] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)] ${slide.badgeClass}`}
              >
                {slide.badge}
              </span>

              <h1 className="max-w-2xl text-3xl font-black leading-none tracking-[0.06em] text-white sm:text-4xl lg:text-[4rem]">
                {slide.title}
              </h1>

              <p className="mt-4 max-w-xl text-md leading-7 text-slate-100/95 sm:text-base lg:text-lg">
                {slide.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {slide.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full border border-white/15 bg-slate-950/50 px-3 py-1.5 text-[12px] uppercase tracking-[0.2em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ${slide.chipClass}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default function WindEnergyPage() {
  const { t } = useLocale()
  const windPage = t.windPage

  const windSlidesLocalized = windPage.hero.slides
  const turbineTypesLocalized = windPage.overview.items
  const deploymentTypesLocalized = windPage.classification.items
  const systemConfigsLocalized = windPage.electrical.rows
  const keyBenefitsLocalized = windPage.benefits.items
  const strategicPointsLocalized = windPage.benefits.feasibilityItems
  const capacityBandsLocalized = windPage.capacity.rows
  const serviceSectionsLocalized = windPage.sections

  return (
    <main className="bg-[#f0f8fc] pt-6 sm:pt-8 text-slate-900 [&>section]:rounded-2xl [&>section]:border-l-4 [&>section]:border-l-sky-500">
      <header className="relative mx-auto mb-6 max-w-7xl overflow-hidden rounded-[2.5rem] border border-slate-700 bg-[#0b1c2c] px-5 py-7 text-white shadow-[0_30px_75px_-42px_rgba(7,28,47,0.75)] sm:mb-8 sm:px-8 sm:py-9 lg:px-10 lg:py-11">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(125,211,252,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.055)_1px,transparent_1px)] bg-size-[36px_36px]" aria-hidden="true" />
        <div className="absolute inset-y-0 right-0 w-2/3 bg-[radial-gradient(ellipse_at_80%_48%,rgba(14,165,233,0.24),transparent_58%)]" aria-hidden="true" />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/25 bg-sky-300/10 px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.24em] text-sky-200">
              <span className="h-2 w-2 rounded-full bg-sky-300" aria-hidden="true" />
              {windPage.hero.eyebrow}
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.02] tracking-[0.06em] text-white sm:text-5xl lg:text-7xl">
              {windPage.hero.title}
              <span className="block text-sky-300">{windPage.hero.titleAccent}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              {windPage.hero.subtitle}
            </p>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-sky-100/15 bg-slate-900/65 p-5 backdrop-blur-sm sm:p-7">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-sky-400/10" aria-hidden="true" />
            <div className="relative flex min-h-44 items-center justify-between gap-5">
              <div className="space-y-4">
                {windPage.hero.variants.map((variant, index) => (
                  <div key={variant.label} className="flex items-center gap-3">
                    <span className={`flex h-9 w-9 items-center justify-center rounded-xl text-md font-black ${index === 0 ? 'bg-sky-300 text-slate-950' : index === 1 ? 'bg-cyan-300 text-slate-950' : 'bg-emerald-300 text-slate-950'}`}>
                      {index + 1}
                    </span>
                    <span>
                      <span className="block text-md font-bold text-white">{variant.label}</span>
                      <span className="block text-md text-slate-300">{variant.detail}</span>
                    </span>
                  </div>
                ))}
              </div>
              <svg viewBox="0 0 180 190" fill="none" className="h-40 w-36 shrink-0 text-sky-300 sm:h-48 sm:w-44" aria-hidden="true">
                <path d="M92 80v101M80 181h24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <circle cx="92" cy="79" r="6" fill="currentColor" />
                <path d="M92 73 83 16q-2-12 8-7l9 54M98 80l51-26q11-6 10 5l-4 9-51 17M89 84 47 124q-9 9-13-1l-2-10 48-36" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                <path d="M18 45c20-12 35-12 51 0M10 61c18-10 31-10 46 0M126 136c14-8 25-8 38 0M130 151c12-7 21-7 32 0" stroke="#bae6fd" strokeWidth="2" strokeLinecap="round" opacity=".8" />
                <circle cx="92" cy="79" r="54" stroke="currentColor" strokeDasharray="3 7" opacity=".28" />
              </svg>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-[12px] font-bold uppercase tracking-[0.2em] text-sky-100">
              <span>{windPage.hero.resourceFirst}</span><span className="h-px flex-1 mx-3 bg-sky-300/30" aria-hidden="true" /><span>{windPage.hero.siteDesigned}</span>
            </div>
          </div>
        </div>
      </header>

      <WindHeroSlider slides={windSlidesLocalized} ariaLabel={windPage.labels.sliderAriaLabel} />

      <section className="mx-auto my-6 max-w-7xl rounded-[2rem] border border-sky-200/80 bg-white p-5 shadow-[0_20px_55px_-42px_rgba(14,79,115,0.28)] sm:my-8 sm:p-8 lg:p-9">
        <div className="mb-8 max-w-3xl">
          <WindSectionEyebrow>{windPage.overview.eyebrow}</WindSectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{windPage.overview.title}</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {turbineTypesLocalized.map((type) => (
            <WindFeatureCard
              key={type.title}
              title={type.title}
              description={type.description}
              points={type.highlights}
              accent={getWindAccent(type.accent)}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto my-6 max-w-7xl rounded-[2rem] border border-sky-200/80 bg-[#f7fcff] p-5 shadow-[0_20px_55px_-42px_rgba(14,79,115,0.26)] sm:my-8 sm:p-8 lg:p-9">
        <div className="rounded-4xl border border-slate-200 bg-slate-900 p-6 text-slate-100 shadow-[0_32px_90px_-38px_rgba(15,23,42,1)] sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-3">
            <div>
              <WindSectionEyebrow>{windPage.classification.eyebrow}</WindSectionEyebrow>
              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{windPage.classification.title}</h3>
            </div>
            <div className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.25em] text-slate-200 sm:block">
              {windPage.classification.badge}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {deploymentTypesLocalized.map((item, index) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg font-bold text-emerald-300">
                  {index + 1}
                </div>
                <p className="text-base leading-7 text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto my-6 max-w-7xl rounded-[2rem] border border-cyan-200/80 bg-white p-5 shadow-[0_20px_55px_-42px_rgba(14,79,115,0.28)] sm:my-8 sm:p-8 lg:p-9">
        <div className="mb-8 max-w-3xl">
          <WindSectionEyebrow>{windPage.electrical.eyebrow}</WindSectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">{windPage.electrical.title}</h2>
        </div>

        <WindComparisonTable rows={systemConfigsLocalized} />
      </section>

      <section className="mx-auto my-6 max-w-7xl rounded-[2rem] border border-sky-200/80 bg-[#f7fcff] p-5 shadow-[0_20px_55px_-42px_rgba(14,79,115,0.26)] sm:my-8 sm:p-8 lg:p-9">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {keyBenefitsLocalized.map((benefit) => (
              <WindBenefitCard key={benefit} title={benefit.split(' ').slice(0, 3).join(' ') || 'Benefit'} description={benefit} />
            ))}
          </div>

          <div className="space-y-5">
            <WindInfoPanel title={windPage.benefits.title} content={keyBenefitsLocalized} accent="sky" />
            <WindInfoPanel title={windPage.benefits.feasibility} content={strategicPointsLocalized} accent="emerald" />
          </div>
        </div>
      </section>

      <section className="mx-auto my-6 max-w-7xl rounded-[2rem] border border-cyan-200/80 bg-white p-5 shadow-[0_20px_55px_-42px_rgba(14,79,115,0.28)] sm:my-8 sm:p-8 lg:p-9">
        <div className="mb-8 max-w-3xl">
          <WindSectionEyebrow>{windPage.capacity.eyebrow}</WindSectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">{windPage.capacity.title}</h2>
        </div>

        <WindCapacityTable rows={capacityBandsLocalized} />
      </section>

      <section className="mx-auto my-6 max-w-7xl rounded-[2rem] border border-sky-200/80 bg-[#f7fcff] p-5 shadow-[0_20px_55px_-42px_rgba(14,79,115,0.26)] sm:my-8 sm:p-8 lg:p-9">
        <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.25)] sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <WindSectionEyebrow>{windPage.strategy.eyebrow}</WindSectionEyebrow>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">{windPage.strategy.title}</h2>
              <div className="mt-6 space-y-5 text-base leading-7 text-slate-700">
                <p>
                  {windPage.labels.strategyDescription[0]}
                </p>
                <p>
                  {windPage.labels.strategyDescription[1]}
                </p>
              </div>
            </div>

            <div className="rounded-4xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-emerald-700">{windPage.labels.aeroSunView}</p>
              <div className="mt-4 space-y-3 text-md leading-7 text-slate-700">
                {windPage.strategy.points.map((point, index) => (
                  <div key={point} className="rounded-2xl bg-white p-3">{index + 1}. {point}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto my-6 max-w-7xl rounded-[2rem] border border-cyan-200/80 bg-white p-5 shadow-[0_20px_55px_-42px_rgba(14,79,115,0.28)] sm:my-8 sm:p-8 lg:p-9">
        <div className="mb-8 max-w-3xl">
          <WindSectionEyebrow>{windPage.labels.serviceSections}</WindSectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">{windPage.labels.serviceSectionsTitle}</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {serviceSectionsLocalized.map((section) => (
            <div key={section.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">{section.title}</h3>
              <p className="mt-2 text-base leading-7 text-slate-700">{section.heading}</p>
              <p className="mt-4 text-md leading-6 text-slate-600">{section.overview}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="text-md font-semibold text-slate-800">{windPage.labels.applications}</h4>
                  <ul className="mt-2 space-y-2 text-md leading-6 text-slate-600">
                    {section.applications.map((app) => (
                      <li key={app.title} className="flex gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-slate-800">{app.title}</div>
                          <div className="text-md leading-6 text-slate-600">{app.description}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-md font-semibold text-slate-800">{windPage.labels.keyBenefits}</h4>
                  <ul className="mt-2 space-y-2 text-md leading-6 text-slate-600">
                    {section.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="text-md leading-6 text-slate-600">{benefit}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-slate-50 p-4 text-md text-slate-700">
                <div className="flex items-center justify-between">
                  <div className="font-medium">{windPage.labels.illustrativeCalculation}</div>
                  <div className="text-md text-slate-500">{section.calculation.label}</div>
                </div>
                <div className="mt-2 flex gap-2 text-lg font-bold">
                  <div className="text-emerald-600">{section.calculation.result}</div>
                  <div className="text-slate-500">{section.calculation.formula}</div>
                </div>
                <div className="mt-2 text-md text-slate-500">{section.calculation.note}</div>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-4">
                <h4 className="text-md font-semibold text-slate-800">{windPage.labels.faqs}</h4>
                <div className="mt-2 space-y-3 text-md leading-6 text-slate-600">
                  {section.faqs.map((faq) => (
                    <div key={faq.question} className="flex flex-col gap-1">
                      <div className="font-medium text-slate-800">{faq.question}</div>
                      <div className="text-md">{faq.answer}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
