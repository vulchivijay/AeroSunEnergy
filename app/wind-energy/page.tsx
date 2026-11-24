import { getSliderImagePath } from '@/lib/sliderImages'
import { getRequestTranslations } from '@/lib/serverLocale'
import TirupatiEnergySection from '@/app/components/ui/TirupatiEnergySection'
import { getAccentOrDefault } from '@/lib/utils/utils'
import type { HeroSliderSlide } from '../components/ui/SharedHeroSlider'
import { OptimizedImage, WindCapacityTable, WindContentBlock, WindFeatureCard, WindInfoPanel, WindSectionEyebrow } from '../components/ui'
import { windSolutionImages } from '../components/ui/EnergyContentImages'
import { TrustRibbon } from '@/app/components/ui/TrustRibbon'
import { DigitalNumber } from '@/app/components/ui/DigitalNumber'

export default async function WindEnergyPage() {
  const t = await getRequestTranslations()
  const windPage = t.windPage

  const windSlidesLocalized: HeroSliderSlide[] = windPage.hero.slides.map((slide, index) => ({
    ...slide,
    image: getSliderImagePath(index + 7),
  }))
  const turbineTypesLocalized = windPage.overview.items
  const deploymentTypesLocalized = windPage.classification.items
  const systemConfigsLocalized = windPage.electrical.rows
  const keyBenefitsLocalized = windPage.benefits.items
  const strategicPointsLocalized = windPage.benefits.feasibilityItems
  const capacityBandsLocalized = windPage.capacity.rows
  const serviceSectionsLocalized = windPage.sections

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <header className="relative isolate min-h-[620px] overflow-hidden bg-[#102a43] text-white sm:min-h-[680px]">
        <div className="absolute inset-0 -z-10">
          {windSlidesLocalized[0] && (
            <OptimizedImage
              src={windSlidesLocalized[0].image}
              alt={windSlidesLocalized[0].title}
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
              {windPage.hero.eyebrow}
            </span>
          </div>
          <div className="grid items-end gap-10 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:py-20">
            <div className="max-w-4xl">
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">
                {windPage.hero.title}
                <span className="block text-amber-200">{windPage.hero.titleAccent}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-white/75 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                {windPage.hero.subtitle}
              </p>
            </div>
            <div className="relative max-w-md rounded-xl border border-slate-700 bg-[#102a43]/65 p-5 backdrop-blur-lg sm:p-6 lg:ml-auto">
              <div className="flex items-center justify-between gap-5">
                <div>
                  <p className="inline-flex w-fit rounded-full border border-amber-300/25 bg-white/10 px-3 py-1.5 uppercase text-amber-200 text-xs font-semibold tracking-wide leading-5">{windPage.hero.resourceFirst}</p>
                  <p className="mt-3 text-white text-lg font-semibold tracking-normal leading-snug">{windPage.hero.siteDesigned}</p>
                </div>
                <svg viewBox="0 0 180 190" fill="none" className="h-32 w-28 shrink-0 text-sky-300 sm:h-40 sm:w-36" aria-hidden="true">
                  <path d="M92 80v101M80 181h24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="92" cy="79" r="6" fill="currentColor" />
                  <path d="M92 73 83 16q-2-12 8-7l9 54M98 80l51-26q11-6 10 5l-4 9-51 17M89 84 47 124q-9 9-13-1l-2-10 48-36" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M18 45c20-12 35-12 51 0M10 61c18-10 31-10 46 0M126 136c14-8 25-8 38 0M130 151c12-7 21-7 32 0" stroke="#bae6fd" strokeWidth="2" strokeLinecap="round" opacity=".8" />
                  <circle cx="92" cy="79" r="54" stroke="currentColor" strokeDasharray="3 7" opacity=".28" />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 border-t border-slate-700 pt-5 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/20">
            {windPage.hero.variants.map((variant, index) => (
              <div key={variant.label} className="flex flex-col justify-center px-2 py-2 sm:px-5 sm:first:pl-0">
                <span className="font-mono text-sm text-amber-200 tabular-nums">0{index + 1}</span>
                <p className="mt-1 text-white text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{variant.label}</p>
                <p className="mt-1 text-white/75 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{variant.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <TrustRibbon />

      {/* <SharedHeroSlider slides={windSlidesLocalized} ariaLabel={windPage.labels.sliderAriaLabel} interval={5200} /> */}

      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <WindSectionEyebrow>{windPage.overview.eyebrow}</WindSectionEyebrow>
            <h2 className="mt-3 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{windPage.overview.title}</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {turbineTypesLocalized.map((type, index) => (
              <WindFeatureCard
                key={type.title}
                title={type.title}
                description={type.description}
                points={type.highlights}
                accent={getAccentOrDefault(type.accent, ['emerald', 'amber', 'violet'] as const, 'sky')}
                imageSrc={windSolutionImages[index]}
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
                <WindSectionEyebrow>{windPage.classification.eyebrow}</WindSectionEyebrow>
                <h3 className="mt-2 text-white text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{windPage.classification.title}</h3>
              </div>
              <div className="hidden rounded-full border border-slate-700 bg-white/5 px-3 py-2 text-xs uppercase text-slate-200 sm:block text-xs font-semibold tracking-wide leading-5">
                {windPage.classification.badge}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {deploymentTypesLocalized.map((item, index) => (
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
          <div className="mb-8 max-w-3xl">
            <WindSectionEyebrow>{windPage.electrical.eyebrow}</WindSectionEyebrow>
            <h2 className="mt-3 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{windPage.electrical.title}</h2>
          </div>

          <WindComparisonTable rows={systemConfigsLocalized} />
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f1f2f6] to-white mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
        <WindContentBlock
          eyebrow={windPage.hero.eyebrow}
          title={windPage.overview.title}
          description={windPage.hero.subtitle}
          benefits={keyBenefitsLocalized.map((benefit) => ({
            title: benefit.split(' ').slice(0, 3).join(' ') || 'Benefit',
            description: benefit,
          }))}
          imageSrc={windSolutionImages[0]}
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <WindInfoPanel title={windPage.benefits.title} content={keyBenefitsLocalized} index={0} accent="sky" />
            <WindInfoPanel title={windPage.benefits.feasibility} content={strategicPointsLocalized} index={1} accent="emerald" />
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <WindSectionEyebrow>{windPage.capacity.eyebrow}</WindSectionEyebrow>
            <h2 className="mt-3 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{windPage.capacity.title}</h2>
          </div>

          <WindCapacityTable rows={capacityBandsLocalized} />
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f1f2f6] to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <WindSectionEyebrow>{windPage.strategy.eyebrow}</WindSectionEyebrow>
                <h2 className="mt-3 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{windPage.strategy.title}</h2>
                <div className="mt-6 space-y-5 text-sm leading-7 text-slate-700">
                  <p>
                    {windPage.labels.strategyDescription[0]}
                  </p>
                  <p>
                    {windPage.labels.strategyDescription[1]}
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                <p className=" uppercase text-emerald-700    text-xs font-semibold tracking-wide leading-5">{windPage.labels.aeroSunView}</p>
                <div className="mt-4 space-y-3 text-base leading-7 text-slate-700">
                  {windPage.strategy.points.map((point, index) => (
                    <div key={point} className="rounded-xl bg-white p-3">{index + 1}. {point}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <WindSectionEyebrow>{windPage.labels.serviceSections}</WindSectionEyebrow>
            <h2 className="mt-3 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{windPage.labels.serviceSectionsTitle}</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {serviceSectionsLocalized.map((section) => (
              <div key={section.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-slate-900 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{section.title}</h3>
                <p className="mt-2 text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{section.heading}</p>
                <p className="mt-4 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{section.overview}</p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="text-slate-800 text-lg font-semibold tracking-normal leading-snug">{windPage.labels.applications}</h4>
                    <ul className="mt-2 space-y-2 text-base leading-6 text-slate-600">
                      {section.applications.map((app) => (
                        <li key={app.title} className="flex gap-3">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium text-slate-800 tracking-normal">{app.title}</div>
                            <div className="text-base leading-6 text-slate-600">{app.description}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-slate-800 text-lg font-semibold tracking-normal leading-snug">{windPage.labels.keyBenefits}</h4>
                    <ul className="mt-2 space-y-2 text-base leading-6 text-slate-600">
                      {section.benefits.map((benefit) => (
                        <li key={benefit} className="flex gap-3">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="text-base leading-6 text-slate-600">{benefit}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 rounded-xl bg-slate-50 p-4 text-base text-slate-700">
                  <div className="flex items-center justify-between">
                    <div className="font-medium tracking-normal">{windPage.labels.illustrativeCalculation}</div>
                    <div className="text-base text-slate-500">{section.calculation.label}</div>
                  </div>
                  <div className="mt-2 flex gap-2 text-lg font-bold tracking-normal">
                    <div className="text-emerald-600">{section.calculation.result}</div>
                    <div className="text-slate-500">{section.calculation.formula}</div>
                  </div>
                  <div className="mt-2 text-base text-slate-500">{section.calculation.note}</div>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-4">
                  <h4 className="text-slate-800 text-lg font-semibold tracking-normal leading-snug">{windPage.labels.faqs}</h4>
                  <div className="mt-2 space-y-3 text-base leading-6 text-slate-600">
                    {section.faqs.map((faq) => (
                      <div key={faq.question} className="flex flex-col gap-1">
                        <div className="font-medium text-slate-800 tracking-normal">{faq.question}</div>
                        <div className="text-base">{faq.answer}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TirupatiEnergySection background="second" />
    </main>
  )
}

async function WindComparisonTable({ rows }: { rows: { system: string; detail: string; use: string }[] }) {
  const t = await getRequestTranslations()
  const ui = t.ui

  return (
    <div className="overflow-x-auto rounded-xl border border-emerald-200 [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-emerald-300 [&::-webkit-scrollbar-thumb:hover]:bg-emerald-400 ">
      <table
        aria-label={`${ui.systemType}, ${ui.howItWorks}, ${ui.typicalUse}`}
        className="w-full min-w-[780px] border-collapse text-left text-sm text-slate-800 [&_th]:border-b [&_th]:border-slate-200 [&_td]:border-b [&_td]:border-slate-200 [&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3 "
      >
        <thead className="bg-amber-700 uppercase text-white text-xs font-semibold tracking-wide leading-5">
          <tr>
            <th scope="col">{ui.systemType}</th>
            <th scope="col">{ui.howItWorks}</th>
            <th scope="col">{ui.typicalUse}</th>
          </tr>
        </thead>
        <tbody>
        {rows.map((row) => (
          <tr key={row.system} className="odd:bg-white even:bg-emerald-50/70 transition-colors hover:bg-emerald-100/70 ">
            <th scope="row" className="font-semibold text-slate-900 tracking-normal tabular-nums"><DigitalNumber value={row.system} /></th>
            <td className="text-slate-700 tabular-nums"><DigitalNumber value={row.detail} /></td>
            <td className="text-slate-700 tabular-nums"><DigitalNumber value={row.use} /></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}
