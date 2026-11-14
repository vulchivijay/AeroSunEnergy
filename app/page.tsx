'use client'

import { ArrowUpRight } from 'lucide-react'
import { useLocale } from '@/lib/LocaleContext'
import { getAccentOrDefault } from '@/lib/utils/utils'
import { BankEMICalculator } from './components/forms/BankEMICalculator'
import { SolarEstimation } from './components/forms/SolarEstimation'
import About from './components/sections/About'
import TirupatiEnergySection from './components/sections/TirupatiEnergySection'
import {
  CompanyTrustSection,
  ProjectEvidenceSection,
  QuoteTransparencySection,
  SolarJourneySection,
} from './components/sections/HomeTrustSections'
import {
  BenefitCard,
  FeatureCard,
  HomeHeroSlider,
  HybridBenefitCard,
  HybridFeatureCard,
  HybridInfoPanel,
  HybridSectionEyebrow,
  HybridTable,
  InfoPanel,
  SchemeBanner,
  SectionEyebrow,
  WindBenefitCard,
  WindCapacityTable,
  WindFeatureCard,
  WindInfoPanel,
  WindSectionEyebrow,
} from './components/ui'
import { Brands } from './components/brand'

function RecognitionHighlight() {
  const { t } = useLocale()
  const recognitions = t.home.recognition

  return (
    <section className="bg-[#f7f7f2] px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 overflow-hidden rounded-[30px] border border-[#e2e8e2] bg-white shadow-[0_20px_60px_-40px_rgba(24,37,31,0.3)] lg:grid-cols-[1.05fr_1fr_1fr]">
          <div className="flex flex-col justify-center bg-[#e1ece3] p-7 sm:p-9 lg:p-11">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#137c63]">
              {t.home.recognitionHeader.badge}
            </p>
            <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight tracking-tight text-[#152b29] sm:text-4xl">
              {t.home.recognitionHeader.title}
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-[#597079] sm:text-base sm:leading-7">
              {t.home.recognitionHeader.description}
            </p>
          </div>
          {recognitions.map((item, index) => (
            <div
              key={item.title}
              className="flex min-w-0 flex-col justify-center border-t border-[#e5e9e5] bg-white p-7 sm:p-9 lg:border-l lg:border-t-0 lg:p-11"
            >
              <span className={`inline-flex w-fit rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${index === 0 ? 'bg-[#eaf2e9] text-[#14785e]' : 'bg-[#fff1dc] text-[#a95600]'}`}>
                {item.subtitle}
              </span>
              <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-tight text-[#152b29] sm:text-[26px]">
                {item.title}
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-6 text-[#597079] sm:text-base sm:leading-7">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const { t } = useLocale()
  const home = t.home
  const offer = home.offer
  const solarCards = offer.cards
  const systemTypes = home.systemTypes
  const whySolar = home.whySolar
  const subsidy = home.subsidy
  const wind = home.wind
  const hybrid = home.hybrid

  return (
    <main>
      <HomeHeroSlider />
      <SchemeBanner />
      {/* Solar Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
        <div className="mb-8">
          <SectionEyebrow>{offer.eyebrow}</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-black tracking-tighter text-slate-900 sm:text-4xl">
            {offer.title}
          </h2>
        </div>
        
        <div className="mb-10 text-lg leading-8 text-slate-700">
          {offer.description}
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {solarCards.map((card) => (
            <FeatureCard
              key={card.title}
              title={card.title}
              description={card.description}
              points={card.points}
              accent={getAccentOrDefault(card.accent, ['amber', 'sky', 'violet'] as const, 'emerald')}
            />
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {home.moreSolarCards.map((card) => (
            <FeatureCard
              key={card.title}
              title={card.title}
              description={card.description}
              points={card.points}
              accent={getAccentOrDefault(card.accent, ['amber', 'sky', 'violet'] as const, 'emerald')}
            />
          ))}
        </div>
        
        <div className="mt-12 rounded-4xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
          <div className="mb-6">
            <SectionEyebrow>{home.rooftopSolar.eyebrow}</SectionEyebrow>
            <h3 className="mt-3 text-3xl font-black tracking-tighter text-slate-900">
              {home.rooftopSolar.title}
            </h3>
          </div>

          <p className="max-w-4xl text-lg leading-8 text-slate-700">
            {home.rooftopSolar.description}
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {home.rooftopSolar.benefits.map((benefit) => (
              <BenefitCard key={benefit.title} title={benefit.title} description={benefit.description} />
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {home.rooftopSolar.panels.map((panel) => (
              <InfoPanel key={panel.title} title={panel.title} accent={getAccentOrDefault(panel.accent, ['amber', 'sky'] as const, 'emerald')} content={panel.content} />
            ))}
          </div>
        </div>
        
        <div className="mt-12 rounded-4xl border border-slate-200 bg-white p-6 lg:p-8">
          <div className="mb-6">
            <SectionEyebrow>{home.systemTypeSection.eyebrow}</SectionEyebrow>
            <h3 className="mt-3 text-3xl font-black tracking-tighter text-slate-900">
              {home.systemTypeSection.title}
            </h3>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {systemTypes.map((item) => (
              <InfoPanel key={item.title} title={item.title} accent={getAccentOrDefault(item.accent, ['amber', 'sky'] as const, 'emerald')} content={item.content} />
            ))}
          </div>
        </div>
        
        <div className="mt-12 rounded-4xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
          <div className="mb-6">
            <SectionEyebrow>{home.whySolarSection.eyebrow}</SectionEyebrow>
            <h3 className="mt-3 text-3xl font-black tracking-tighter text-slate-900">
              {home.whySolarSection.title}
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {whySolar.map((item) => (
              <BenefitCard key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
        
      </section>
      <section className="bg-[#f8f7f2] px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-8 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] xl:gap-10">
          <div className="max-w-2xl">
            <SectionEyebrow>{subsidy.eyebrow}</SectionEyebrow>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#102b28] sm:text-4xl lg:text-[2.75rem]">
              {subsidy.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {subsidy.description}
            </p>
            <a
              href="https://pmsuryaghar.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1 border-b border-[#12865e]/40 pb-1 text-sm font-bold text-[#087a61] transition-colors hover:border-[#087a61] hover:text-[#075e4b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087a61]"
            >
              {subsidy.portalCta}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="overflow-hidden rounded-[22px] border border-[#e7e4dc] bg-white shadow-[0_20px_55px_-40px_rgba(16,43,40,0.4)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] border-collapse text-left">
                <caption className="sr-only">{subsidy.title}</caption>
                <thead className="bg-[#102e2a] text-white">
                  <tr className="text-[10px] font-bold uppercase tracking-[0.16em] sm:text-[11px]">
                    <th scope="col" className="px-5 py-5 sm:px-6">
                      {t.ui.averageMonthlyUsage}
                    </th>
                    <th scope="col" className="px-5 py-5 sm:px-6">
                      {t.ui.suitableRooftopCapacity}
                    </th>
                    <th scope="col" className="px-5 py-5 sm:px-6">
                      {t.ui.bestFit}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e5e7e5]">
                  {t.solarPage.capacityTable.rows.map((row) => (
                    <tr key={row.usage} className="text-sm">
                      <td className="px-5 py-5 text-[#172a28] sm:px-6">{row.usage}</td>
                      <td className="px-5 py-5 font-bold text-[#087a61] sm:px-6">{row.capacity}</td>
                      <td className="px-5 py-5 text-slate-500 sm:px-6">{row.tag}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="bg-[#fff4e5] px-5 py-4 text-xs leading-5 text-slate-600 sm:px-6 sm:text-[13px]">
              {subsidy.notice}
            </p>
          </div>
        </div>
      </section>
      <About />
      <RecognitionHighlight />
      <CompanyTrustSection />
      <SolarJourneySection />
      <QuoteTransparencySection />
      <ProjectEvidenceSection />
      <TirupatiEnergySection />
      {/* Wind Energy Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
        <div className="mb-8">
          <WindSectionEyebrow>{wind.eyebrow}</WindSectionEyebrow>
          <h2 className="mt-3 text-3xl font-black tracking-tighter text-slate-900 sm:text-4xl">
            {wind.title}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {wind.cards.map((card) => (
            <WindFeatureCard
              key={card.title}
              title={card.title}
              description={card.description}
              points={card.points}
              accent={getAccentOrDefault(card.accent, ['amber', 'sky', 'violet'] as const, 'emerald')}
            />
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {wind.benefits.map((item) => (
            <WindBenefitCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {wind.panels.map((panel) => (
          <WindInfoPanel key={panel.title} title={panel.title} accent={getAccentOrDefault(panel.accent, ['emerald', 'amber'] as const, 'sky')} content={panel.content} />
          ))}
        </div>

        <div className="mt-8">
          <WindCapacityTable rows={wind.capacity} />
        </div>
      </section>
      {/* Hybrid Energy Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
        <div className="mb-8">
          <HybridSectionEyebrow>{hybrid.eyebrow}</HybridSectionEyebrow>
          <h2 className="mt-3 text-3xl font-black tracking-tighter text-slate-900 sm:text-4xl">
            {hybrid.title}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {hybrid.cards.map((card) => (
            <HybridFeatureCard
              key={card.title}
              title={card.title}
              description={card.description}
              points={card.points}
              accent={getAccentOrDefault(card.accent, ['sky', 'violet', 'amber'] as const, 'emerald')}
            />
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {hybrid.benefits.map((item) => (
            <HybridBenefitCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {hybrid.panels.map((panel) => (
          <HybridInfoPanel key={panel.title} title={panel.title} accent={getAccentOrDefault(panel.accent, ['sky', 'violet'] as const, 'emerald')} content={panel.content} />
          ))}
        </div>

        <div className="mt-8">
          <HybridTable rows={hybrid.table} />
        </div>
      </section>
      <SolarEstimation />
      <BankEMICalculator />
      <Brands />
    </main>
  )
}
