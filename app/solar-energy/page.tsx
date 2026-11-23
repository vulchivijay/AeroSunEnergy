import { getSliderImagePath } from '@/lib/sliderImages'
import { getRequestTranslations } from '@/lib/serverLocale'
import TirupatiEnergySection from '@/app/components/sections/TirupatiEnergySection'
import type { HeroSliderSlide } from '../components/ui/SharedHeroSlider'
import { FeatureCard, BenefitCard, InfoPanel, OptimizedImage, SectionEyebrow } from '../components/ui'
import { TrustRibbon } from '@/app/components/ui/TrustRibbon'
import { DigitalNumber } from '@/app/components/ui/DigitalNumber'

export default async function SolarEnergyPage() {
  const t = await getRequestTranslations()
  const solarPage = t.solarPage
  const solarSlidesLocalized: HeroSliderSlide[] = solarPage.hero.slides.map((slide, index) => ({
    ...slide,
    image: getSliderImagePath(index + 1),
  }))
  const offeringsLocalized = solarPage.offer.cards
  const rooftopBenefitsLocalized = solarPage.rooftop.benefits
  const suitableForLocalized = solarPage.rooftop.suitableForItems
  const systemTypesLocalized = solarPage.systemTypes.items
  const whySolarLocalized = solarPage.whySolar.items
  const comparisonMeta = solarPage.comparison
  const solarComparisonRows = solarPage.comparison.rows
  const measurement = solarPage.measurement

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <header className="relative isolate min-h-[620px] overflow-hidden bg-[#102a43] text-white sm:min-h-[680px]">
        <div className="absolute inset-0 -z-10">
          {solarSlidesLocalized[0] && (
            <OptimizedImage
              src={solarSlidesLocalized[0].image}
              alt={solarSlidesLocalized[0].title}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-50"
            />
          )}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,25,47,0.94)_0%,rgba(22,48,82,0.78)_52%,rgba(22,48,82,0.28)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102a43]/80 via-transparent to-[#102a43]/25" />
        </div>

        <div className="mx-auto flex min-h-[620px] max-w-7xl flex-col justify-between px-4 py-10 sm:min-h-[680px] sm:px-6 sm:py-14 lg:px-10">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.22em] text-white/90 backdrop-blur-md sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" aria-hidden="true" />
              {solarPage.hero.eyebrow}
            </span>
          </div>

          <div className="grid items-end gap-10 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:py-20">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-black leading-[0.98] tracking-tighter text-white sm:text-6xl lg:text-8xl">
                {solarPage.hero.title}
                <span className="block text-amber-200">{solarPage.hero.titleAccent}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-xl sm:leading-8">
                {solarPage.hero.subtitle}
              </p>
            </div>

            <div className="relative max-w-md rounded-xl border border-slate-700 bg-[#102a43]/65 p-5 backdrop-blur-lg sm:p-6 lg:ml-auto">
              <p className="inline-flex w-fit rounded-full border border-amber-300/25 bg-white/10 px-3 py-1.5 text-sm font-bold uppercase tracking-[0.2em] text-amber-200">{solarPage.hero.lead}</p>
              <p className="mt-3 text-lg font-semibold leading-7 text-white sm:text-xl">{solarPage.hero.pathway}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 border-t border-slate-700 pt-5 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-white/20">
            {solarPage.hero.options.map(({ name, detail }, index) => (
              <div key={name} className="flex flex-col justify-center px-2 py-2 sm:px-5 sm:first:pl-0">
                <span className="font-mono text-sm text-amber-200">0{index + 1}</span>
                <p className="mt-1 font-bold text-white">{name}</p>
                <p className="mt-1 text-sm text-white/75">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <TrustRibbon />

      {/* <SharedHeroSlider slides={solarSlidesLocalized} ariaLabel={solarPage.hero.eyebrow} /> */}

      <section id="solar-offerings" className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <SectionEyebrow>{solarPage.offer.eyebrow}</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tighter text-slate-900 sm:text-4xl">{solarPage.offer.title}</h2>
            <p className="mt-4 text-sm leading-8 text-slate-700">{solarPage.offer.description}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {offeringsLocalized.map((service) => (
              <FeatureCard
                key={service.title}
                title={service.title}
                description={service.description}
                points={service.points}
                accent={service.title.includes('Street') ? 'amber' : service.title.includes('Thermal') ? 'sky' : service.title.includes('Fencing') ? 'violet' : 'emerald'}
                label={t.ui.solarSolution}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f1f2f6] to-white border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <SectionEyebrow>{solarPage.rooftop.eyebrow}</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tighter text-slate-900">{solarPage.rooftop.title}</h2>
            <p className="mt-4 text-sm leading-8 text-slate-700">{solarPage.rooftop.description}</p>
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
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <SectionEyebrow>{solarPage.systemTypes.eyebrow}</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tighter text-slate-900">{solarPage.systemTypes.title}</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {systemTypesLocalized.map((type) => (
              <FeatureCard key={type.title} title={type.title} description={type.description} points={type.benefits} accent={type.title.includes('Off-grid') ? 'amber' : type.title.includes('Hybrid') ? 'violet' : 'emerald'} label={t.ui.solarSolution} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f1f2f6] to-white border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <SectionEyebrow>{solarPage.whySolar.eyebrow}</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tighter text-slate-900">{solarPage.whySolar.title}</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {whySolarLocalized.map((item) => (
              <BenefitCard key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <SectionEyebrow>{solarPage.subsidy.eyebrow}</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tighter text-slate-900">{solarPage.subsidy.title}</h2>
            <p className="mt-4 text-sm leading-8 text-slate-700">{solarPage.subsidy.description}</p>
            <p className="mt-4 rounded-xl border border-slate-200 bg-[#eaf2e9] px-4 py-3 text-sm leading-6 text-slate-700">{t.subsidyNotice}</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {solarPage.subsidy.cards.map((card) => (
              <SubsidyCard key={card.label} label={card.label} value={card.value} note={card.note} />
            ))}
          </div>

          <div className="mt-8">
            <CapacityTable />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f1f2f6] to-white border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
            <SectionEyebrow>{solarPage.subsidy.strategicEyebrow}</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tighter text-slate-900">{solarPage.subsidy.strategicTitle}</h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700">
                {solarPage.subsidy.strategyOverview}
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700">
                {solarPage.subsidy.strategyAdditionalOptions}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-[#137c63]">{comparisonMeta.label}</p>
              <h2 className="mt-3 text-3xl font-black tracking-tighter text-slate-900">{comparisonMeta.title}</h2>

              <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
                <div className="grid grid-cols-1 border-b border-slate-200 bg-[linear-gradient(145deg,#71300c_0%,#92370b_55%,#a94208_100%)] text-sm font-semibold uppercase tracking-[0.18em] text-white md:grid-cols-[1.3fr_0.9fr_0.8fr_1.4fr]">
                  <div className="px-4 py-3">{t.ui.systemType}</div>
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

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-[linear-gradient(145deg,#71300c_0%,#92370b_55%,#a94208_100%)] p-5 shadow-sm">
              <div className="relative h-72 overflow-hidden rounded-xl border border-slate-700 bg-slate-900">
                <OptimizedImage
                  src="/images/slider/slider-6.webp"
                  alt={solarPage.featuredImageAlt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-900/30 to-transparent" />
              </div>
              <div className="mt-5 rounded-xl border border-amber-400/20 bg-amber-500/10 p-4">
                <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-amber-200">{comparisonMeta.recommendedFocus}</p>
                <h3 className="mt-2 text-xl font-bold text-white">{comparisonMeta.focusTitle}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-200">
                  {comparisonMeta.recommendationDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f1f2f6] to-white border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <SectionEyebrow>{measurement.eyebrow}</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tighter text-slate-900">{measurement.title}</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-sm leading-8 text-slate-700">
                {measurement.introductionBefore} <span className="font-bold text-slate-900">{measurement.unitLabel}</span>{measurement.introductionAfter}
              </p>

              <div className="mt-6 space-y-5">
                <div className="rounded-xl border border-slate-200 bg-[#eaf2e9] p-4">
                  <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#14785e]">{measurement.consumptionTitle}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {measurement.consumptionDescription}
                  </p>
                </div>

                <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
                  <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-sky-700">{measurement.generationTitle}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {measurement.generationDescription}<br />
                    <span className="font-bold text-slate-900">{measurement.generationFormula}</span>
                  </p>
                  <p className="mt-2 text-md text-slate-600">
                    {measurement.generationExample}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-[#f7fbf8] p-4">
                  <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#137c63]">{measurement.gridTitle}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {measurement.gridDescription}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-xl border border-slate-200 bg-[linear-gradient(145deg,#71300c_0%,#92370b_55%,#a94208_100%)] p-5 shadow-sm">
                <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-amber-200">{measurement.exampleLabel}</p>
                <h3 className="mt-2 text-xl font-bold text-white">{measurement.exampleTitle}</h3>
                <div className="mt-5 space-y-4 text-md leading-7 text-slate-200">
                  {measurement.balanceItems.map((item) => (
                    <div key={item.label} className="rounded-xl border border-slate-700 bg-white/5 p-3">
                      <span className="font-bold text-white">{item.label}</span> {item.value}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-amber-700">{measurement.keyPointLabel}</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  {measurement.keyPoint}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TirupatiEnergySection background="first" />
    </main>
  )
}

function SubsidyCard({
  label,
  value,
  note,
}: {
  label: string
  value: string
  note: string
}) {
  return (
    <div className="border-t border-emerald-200 py-5">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">{label}</p>
      <div className="mt-3 text-3xl font-bold tracking-tight text-slate-900">{value}</div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{note}</p>
    </div>
  )
}

async function CapacityTable() {
  const t = await getRequestTranslations()
  const ui = t.ui

  return (
    <div className="overflow-x-auto rounded-xl border border-emerald-200 [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-emerald-300 [&::-webkit-scrollbar-thumb:hover]:bg-emerald-400">
      <table
        aria-label={`${ui.averageMonthlyUsage}, ${ui.suitableRooftopCapacity}, ${ui.bestFit}`}
        className="w-full min-w-[620px] border-collapse text-left text-sm text-slate-800 [&_th]:border-b [&_th]:border-slate-200 [&_td]:border-b [&_td]:border-slate-200 [&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3"
      >
        <thead className="bg-amber-700 text-sm font-bold uppercase tracking-[0.18em] text-white">
          <tr>
            <th scope="col">{ui.averageMonthlyUsage}</th>
            <th scope="col">{ui.suitableRooftopCapacity}</th>
            <th scope="col">{ui.bestFit}</th>
          </tr>
        </thead>
        <tbody>
        {t.solarPage.capacityTable.rows.map((row) => (
          <tr key={row.usage} className="odd:bg-white even:bg-emerald-50/70 transition-colors hover:bg-emerald-100/70">
            <th scope="row" className="font-semibold text-slate-900"><DigitalNumber value={row.usage} /></th>
            <td className="font-black text-emerald-700"><DigitalNumber value={row.capacity} /></td>
            <td className="text-slate-700"><DigitalNumber value={row.tag} /></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}
