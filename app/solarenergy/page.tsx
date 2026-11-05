'use client'

import { useLocale } from '@/lib/LocaleContext'
import {
  CapacityTable,
  FeatureCard,
  BenefitCard,
  InfoPanel,
  OptimizedImage,
  SectionEyebrow,
  Slider,
  SubsidyCard,
} from '../components/ui'

type SolarSlide = {
  badge: string
  title: string
  description: string
  image: string
  tags: string[]
  badgeClass: string
  chipClass: string
  panelClass: string
}

function SolarHeroSlider({ slides, ariaLabel }: { slides: SolarSlide[]; ariaLabel: string }) {
  const slideClass =
    'group relative flex h-full w-full items-end justify-start overflow-hidden p-6 sm:p-8 lg:p-14 xl:p-18'

  const slideOverlay =
    'absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.32),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.18),transparent_30%),linear-gradient(90deg,rgba(2,6,23,0.78)_0%,rgba(15,23,42,0.6)_40%,rgba(15,23,42,0.28)_100%)]'

  return (
    <Slider autoplay interval={5000} pauseOnHover ariaLabel={ariaLabel}>
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

export default function SolarEnergyPage() {
  const { t } = useLocale()
  const solarPage = t.solarPage
  const solarSlidesLocalized = solarPage.hero.slides as SolarSlide[]
  const offeringsLocalized = solarPage.offer.cards
  const rooftopBenefitsLocalized = solarPage.rooftop.benefits
  const suitableForLocalized = solarPage.rooftop.suitableForItems
  const systemTypesLocalized = solarPage.systemTypes.items
  const whySolarLocalized = solarPage.whySolar.items
  const comparisonMeta = solarPage.comparison
  const solarComparisonRows = solarPage.comparison.rows
  const measurement = solarPage.measurement

  return (
    <main className="bg-[#fffdf7] pt-6 sm:pt-8 text-slate-900 [&>section]:border-t-4 [&>section]:border-t-orange-400">
      <header className="relative mx-auto mb-6 max-w-7xl overflow-hidden rounded-[2.5rem] border border-amber-200 bg-[radial-gradient(ellipse_at_82%_15%,rgba(251,191,36,0.28),transparent_35%),linear-gradient(125deg,#fffdf7_0%,#fff4d6_58%,#fffaf0_100%)] px-5 py-7 shadow-[0_28px_70px_-44px_rgba(120,72,0,0.42)] sm:mb-8 sm:px-8 sm:py-9 lg:px-10 lg:py-11">
        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white/80 px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.24em] text-amber-900 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-amber-500" aria-hidden="true" />
              {solarPage.hero.eyebrow}
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.02] tracking-[0.06em] text-slate-950 sm:text-5xl lg:text-7xl">
              {solarPage.hero.title}
              <span className="block text-amber-700">{solarPage.hero.titleAccent}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
              {solarPage.hero.subtitle}
            </p>
          </div>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-[linear-gradient(145deg,#71300c_0%,#92370b_55%,#a94208_100%)] p-5 text-white shadow-[0_24px_55px_-30px_rgba(120,55,5,0.65)] sm:p-7">
            <div className="absolute right-[-2.5rem] top-[-3.5rem] h-48 w-48 rounded-full border border-white/15" aria-hidden="true" />
            <div className="absolute right-[-0.25rem] top-[-1.25rem] h-32 w-32 rounded-full border border-white/15" aria-hidden="true" />
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-8 w-8" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" strokeLinecap="round" />
                </svg>
              </span>
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-amber-100">{solarPage.hero.lead}</p>
                <p className="mt-1 text-xl font-black tracking-tight sm:text-2xl">{solarPage.hero.pathway}</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/20 bg-white/20">
              {solarPage.hero.options.map(({ name, detail }) => (
                <div key={name} className="bg-white/[0.08] p-3.5 sm:p-4">
                  <p className="font-bold text-white">{name}</p>
                  <p className="mt-1 text-md text-white">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <SolarHeroSlider slides={solarSlidesLocalized} ariaLabel={solarPage.hero.eyebrow} />

      <section className="mx-auto my-6 max-w-7xl rounded-[2rem] border border-amber-200/80 bg-white p-5 shadow-[0_20px_55px_-42px_rgba(120,72,0,0.3)] sm:my-8 sm:p-8 lg:p-9">
        <div className="mb-8 max-w-3xl">
          <SectionEyebrow>{solarPage.offer.eyebrow}</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{solarPage.offer.title}</h2>
          <p className="mt-4 text-base leading-8 text-slate-700">{solarPage.offer.description}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {offeringsLocalized.map((service) => (
            <FeatureCard
              key={service.title}
              title={service.title}
              description={service.description}
              points={service.points}
              accent={service.title.includes('Street') ? 'amber' : service.title.includes('Thermal') ? 'sky' : service.title.includes('Fencing') ? 'violet' : 'emerald'}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto my-6 max-w-7xl rounded-[2rem] border border-orange-200/80 bg-[#fffaf0] p-5 shadow-[0_20px_55px_-42px_rgba(120,72,0,0.28)] sm:my-8 sm:p-8 lg:p-9">
        <div className="mb-8 max-w-3xl">
          <SectionEyebrow>{solarPage.rooftop.eyebrow}</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">{solarPage.rooftop.title}</h2>
          <p className="mt-4 text-base leading-8 text-slate-700">{solarPage.rooftop.description}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {rooftopBenefitsLocalized.map((benefit) => (
              <BenefitCard key={benefit} title={benefit.split(' ').slice(0, 3).join(' ') || 'Benefit'} description={benefit} />
            ))}
          </div>

          <div className="space-y-5">
            <InfoPanel title={solarPage.rooftop.suitableFor} content={suitableForLocalized} accent="emerald" />
            <InfoPanel title={solarPage.rooftop.keyBenefits} content={rooftopBenefitsLocalized} accent="sky" />
          </div>
        </div>
      </section>

      <section className="mx-auto my-6 max-w-7xl rounded-[2rem] border border-amber-200/80 bg-white p-5 shadow-[0_20px_55px_-42px_rgba(120,72,0,0.3)] sm:my-8 sm:p-8 lg:p-9">
        <div className="mb-8 max-w-3xl">
          <SectionEyebrow>{solarPage.systemTypes.eyebrow}</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">{solarPage.systemTypes.title}</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {systemTypesLocalized.map((type) => (
            <FeatureCard key={type.title} title={type.title} description={type.description} points={type.benefits} accent={type.title.includes('Off-grid') ? 'amber' : type.title.includes('Hybrid') ? 'violet' : 'emerald'} />
          ))}
        </div>
      </section>

      <section className="mx-auto my-6 max-w-7xl rounded-[2rem] border border-orange-200/80 bg-[#fffaf0] p-5 shadow-[0_20px_55px_-42px_rgba(120,72,0,0.28)] sm:my-8 sm:p-8 lg:p-9">
        <div className="mb-8 max-w-3xl">
          <SectionEyebrow>{solarPage.whySolar.eyebrow}</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">{solarPage.whySolar.title}</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {whySolarLocalized.map((item) => (
            <BenefitCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </section>

      <section className="mx-auto my-6 max-w-7xl rounded-[2rem] border border-amber-200/80 bg-white p-5 shadow-[0_20px_55px_-42px_rgba(120,72,0,0.3)] sm:my-8 sm:p-8 lg:p-9">
        <div className="mb-8 max-w-3xl">
          <SectionEyebrow>{solarPage.subsidy.eyebrow}</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">{solarPage.subsidy.title}</h2>
          <p className="mt-4 text-base leading-8 text-slate-700">{solarPage.subsidy.description}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {solarPage.subsidy.cards.map((card) => (
            <SubsidyCard key={card.label} label={card.label} value={card.value} note={card.note} />
          ))}
        </div>

        <div className="mt-8">
          <CapacityTable />
        </div>
      </section>

      <section className="mx-auto my-6 max-w-7xl rounded-[2rem] border border-amber-200/80 bg-[#fffaf0] p-5 shadow-[0_20px_55px_-42px_rgba(120,72,0,0.28)] sm:my-8 sm:p-8 lg:p-9">
        <div className="rounded-4xl border border-slate-200 bg-linear-to-br from-slate-100 via-white to-amber-50 p-6 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.3)] sm:p-8">
          <SectionEyebrow>{solarPage.subsidy.strategicEyebrow}</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">{solarPage.subsidy.strategicTitle}</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 text-base leading-7 text-slate-700">
              Start by evaluating rooftop solar, hybrid systems, and agricultural solar water pumping. These categories give actionable customer segments and manageable project scopes.
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-5 text-base leading-7 text-slate-700">
              Solar EV charging, off-grid systems, and solar street lighting also have strong use cases, especially in public infrastructure and rural applications.
            </div>
          </div>
          
        </div>
      </section>

      <section className="mx-auto my-6 max-w-7xl rounded-[2rem] border border-orange-200/80 bg-white p-5 shadow-[0_20px_55px_-42px_rgba(120,72,0,0.3)] sm:my-8 sm:p-8 lg:p-9">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.25)]">
            <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-sky-700">{comparisonMeta.label}</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">{comparisonMeta.title}</h2>

            <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200">
              <div className="grid grid-cols-1 border-b border-slate-200 bg-slate-50 text-md font-semibold uppercase tracking-[0.18em] text-slate-600 md:grid-cols-[1.3fr_0.9fr_0.8fr_1.4fr]">
                <div className="px-4 py-3">{t.ui?.systemType ?? 'System type'}</div>
                <div className="px-4 py-3">{comparisonMeta.battery}</div>
                <div className="px-4 py-3">{comparisonMeta.grid}</div>
                <div className="px-4 py-3">{comparisonMeta.typicalUse}</div>
              </div>

              <div className="divide-y divide-slate-200">
                {solarComparisonRows.map((row) => (
                  <div key={row.type} className="grid gap-3 px-4 py-4 text-md text-slate-700 md:grid-cols-[1.3fr_0.9fr_0.8fr_1.4fr] md:gap-0">
                    <div className="font-bold text-slate-900">{row.type}</div>
                    <div>{row.battery}</div>
                    <div>{row.grid}</div>
                    <div>{row.use}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-4xl border border-slate-200 bg-slate-950 p-5 shadow-[0_28px_70px_-36px_rgba(15,23,42,0.9)]">
            <div className="relative h-72 overflow-hidden rounded-3xl border border-white/10 bg-slate-900">
              <OptimizedImage
                src="/images/slider/slider-6.png"
                alt={solarPage.featuredImageAlt}
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-900/30 to-transparent" />
            </div>
            <div className="mt-5 rounded-3xl border border-amber-400/20 bg-amber-500/10 p-4">
              <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-amber-200">{comparisonMeta.recommendedFocus}</p>
              <h3 className="mt-2 text-xl font-bold text-white">{comparisonMeta.focusTitle}</h3>
              <p className="mt-2 text-base leading-7 text-slate-200">
                {comparisonMeta.recommendationDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto my-6 max-w-7xl rounded-[2rem] border border-amber-200/80 bg-[#fffaf0] p-5 shadow-[0_20px_55px_-42px_rgba(120,72,0,0.28)] sm:my-8 sm:p-8 lg:p-9">
        <div className="mb-8 max-w-3xl">
          <SectionEyebrow>{measurement.eyebrow}</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">{measurement.title}</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.25)]">
            <p className="text-base leading-8 text-slate-700">
              {measurement.introductionBefore} <span className="font-bold text-slate-900">{measurement.unitLabel}</span>{measurement.introductionAfter}
            </p>

            <div className="mt-6 space-y-5">
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-emerald-700">{measurement.consumptionTitle}</p>
                <p className="mt-2 text-base leading-7 text-slate-700">
                  {measurement.consumptionDescription}
                </p>
              </div>

              <div className="rounded-3xl border border-sky-200 bg-sky-50 p-4">
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-sky-700">{measurement.generationTitle}</p>
                <p className="mt-2 text-base leading-7 text-slate-700">
                  {measurement.generationDescription}<br />
                  <span className="font-bold text-slate-900">{measurement.generationFormula}</span>
                </p>
                <p className="mt-2 text-md text-slate-600">
                  {measurement.generationExample}
                </p>
              </div>

              <div className="rounded-3xl border border-violet-200 bg-violet-50 p-4">
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-violet-700">{measurement.gridTitle}</p>
                <p className="mt-2 text-base leading-7 text-slate-700">
                  {measurement.gridDescription}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-4xl border border-slate-200 bg-slate-950 p-5 shadow-[0_28px_70px_-36px_rgba(15,23,42,0.9)]">
              <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-amber-200">{measurement.exampleLabel}</p>
              <h3 className="mt-2 text-xl font-bold text-white">{measurement.exampleTitle}</h3>
              <div className="mt-5 space-y-4 text-md leading-7 text-slate-200">
                {measurement.balanceItems.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <span className="font-bold text-white">{item.label}</span> {item.value}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-4xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-amber-700">{measurement.keyPointLabel}</p>
              <p className="mt-2 text-base leading-7 text-slate-700">
                {measurement.keyPoint}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
