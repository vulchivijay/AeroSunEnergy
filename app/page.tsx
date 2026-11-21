'use client'

import { useLocale } from '@/lib/LocaleContext'
import { getAccentOrDefault } from '@/lib/utils/utils'
import { BankEMICalculator } from './components/forms/BankEMICalculator'
import { SolarEstimation } from './components/forms/SolarEstimation'
import TirupatiEnergySection from './components/sections/TirupatiEnergySection'

import { BenefitCard, FeatureCard, HybridBenefitCard, HybridFeatureCard, HybridInfoPanel, HybridSectionEyebrow, HybridTable, InfoPanel, ReadMoreToggle, SectionEyebrow, WindBenefitCard, WindCapacityTable, WindFeatureCard, WindInfoPanel, WindSectionEyebrow } from './components/ui'

import Image from 'next/image'
import { DigitalNumber } from '@/app/components/ui/DigitalNumber'
import { ArrowLeft, ArrowRight, ArrowUpRight, BadgeCheck, CalendarDays, ClipboardCheck, FileCheck2, Mail, MapPin, Phone, ShieldCheck, Sun, Zap } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { getSliderImagePath } from '@/lib/sliderImages'
import Slider from '@/app/components/ui/Slider'
import OptimizedImage from '@/app/components/ui/OptimizedImage'
import { HeroSlideContent, type HeroSlideData } from '@/app/components/ui/HeroSlideContent'
import { Info } from 'lucide-react'
import { useEffect } from 'react'

const homeBenefitAccents = ['emerald', 'sky', 'amber', 'violet'] as const

function getHomeBenefitAccent(index: number) {
  return homeBenefitAccents[index % homeBenefitAccents.length] ?? 'emerald'
}

function RecognitionHighlight() {
  const { t } = useLocale()
  const recognitions = t.home.recognition

  return (
    <section className="bg-gradient-to-br from-[#f1f2f6] to-white px-4 py-12 sm:px-6 lg:px-10 lg:py-16 sm:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-[#e2e8e2] bg-white shadow-sm lg:grid-cols-[1.05fr_1fr_1fr]">
          <div className="flex flex-col justify-center bg-[#e1ece3] p-7 sm:p-9 lg:p-11">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[#137c63]/15 bg-white/75 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-[#137c63]">
              {t.home.recognitionHeader.badge}
            </p>
            <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight tracking-tight text-[#152b29] sm:text-4xl">
              {t.home.recognitionHeader.title}
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
              {t.home.recognitionHeader.description}
            </p>
          </div>
          {recognitions.map((item, index) => (
            <div
              key={item.title}
              className="flex min-w-0 flex-col justify-center border-t border-[#e5e9e5] bg-white p-7 sm:p-9 lg:border-l lg:border-t-0 lg:p-11"
            >
              <span className={`inline-flex w-fit rounded-full px-3 py-1 text-sm font-bold uppercase tracking-[0.14em] ${index === 0 ? 'bg-[#eaf2e9] text-[#14785e]' : 'bg-[#fff1dc] text-[#a95600]'}`}>
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
  const wind = home.wind
  const hybrid = home.hybrid
  const [offerExpanded, setOfferExpanded] = useState(false)
  const [windExpanded, setWindExpanded] = useState(false)
  const [hybridExpanded, setHybridExpanded] = useState(false)

  return (
    <main>
      <HomeHeroSlider />
      <SchemeBanner />
      {/* Solar Section */}
      <section className="bg-gradient-to-br from-[#f1f2f6] to-white px-4 py-12 sm:px-6 lg:px-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl">  
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <SectionEyebrow>{offer.eyebrow}</SectionEyebrow>
              <h2 className="mt-3 text-3xl font-black tracking-tighter text-slate-900 sm:text-4xl">
                {offer.title}
              </h2>
            </div>
            <ReadMoreToggle
              expanded={offerExpanded}
              onToggle={() => setOfferExpanded((expanded) => !expanded)}
              controlsId="what-we-offer-content"
              labelClassName="text-emerald-700 underline decoration-emerald-300 hover:text-emerald-950"
            />
          </div>
          <div id="what-we-offer-content" hidden={!offerExpanded}>
          <div className="mb-10 text-lg leading-8 text-black">
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
          <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
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
              {home.rooftopSolar.benefits.map((benefit, index) => (
                <BenefitCard key={benefit.title} title={benefit.title} description={benefit.description} accent={getHomeBenefitAccent(index)} />
              ))}
            </div>

            <div className="mt-8">
              {home.rooftopSolar.panels.map((panel) => (
                <InfoPanel key={panel.title} title={panel.title} accent={getAccentOrDefault(panel.accent, ['amber', 'sky'] as const, 'emerald')} content={panel.content} />
              ))}
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 lg:p-8">
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
          <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
            <div className="mb-6">
              <SectionEyebrow>{home.whySolarSection.eyebrow}</SectionEyebrow>
              <h3 className="mt-3 text-3xl font-black tracking-tighter text-slate-900">
                {home.whySolarSection.title}
              </h3>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {whySolar.map((item, index) => (
                <BenefitCard key={item.title} title={item.title} description={item.description} accent={getHomeBenefitAccent(index)} />
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>
      <RecognitionHighlight />
      <CompanyTrustSection />
      <WhySolarSection />
      <SolarJourneySection />
      <QuoteTransparencySection />
      <ProjectEvidenceSection />
      <SolarEstimation />
      <BankEMICalculator />
      <TirupatiEnergySection />
      {/* Wind Energy Section */}
      <section className="bg-gradient-to-br from-white to-[#f1f2f6] px-4 py-12 sm:px-6 lg:px-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <WindSectionEyebrow>{wind.eyebrow}</WindSectionEyebrow>
              <h2 className="mt-3 text-3xl font-black tracking-tighter text-slate-900 sm:text-4xl">
                {wind.title}
              </h2>
            </div>
            <ReadMoreToggle
              expanded={windExpanded}
              onToggle={() => setWindExpanded((expanded) => !expanded)}
              controlsId="wind-energy-content"
              labelClassName="text-sky-700 underline decoration-sky-300 hover:text-sky-950"
            />
          </div>
          <div id="wind-energy-content" hidden={!windExpanded}>
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
              {wind.benefits.map((item, index) => (
                <WindBenefitCard key={item.title} title={item.title} description={item.description} accent={getHomeBenefitAccent(index)} />
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
          </div>
        </div>
      </section>
      {/* Hybrid Energy Section */}
      <section className="bg-gradient-to-br from-[#f1f2f6] to-white px-4 py-12 sm:px-6 lg:px-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl ">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <HybridSectionEyebrow>{hybrid.eyebrow}</HybridSectionEyebrow>
              <h2 className="mt-3 text-3xl font-black tracking-tighter text-slate-900 sm:text-4xl">
                {hybrid.title}
              </h2>
            </div>
            <ReadMoreToggle
              expanded={hybridExpanded}
              onToggle={() => setHybridExpanded((expanded) => !expanded)}
              controlsId="hybrid-energy-content"
              labelClassName="text-violet-700 underline decoration-violet-300 hover:text-violet-950"
            />
          </div>
          <div id="hybrid-energy-content" hidden={!hybridExpanded}>
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
              {hybrid.benefits.map((item, index) => (
                <HybridBenefitCard key={item.title} title={item.title} description={item.description} accent={getHomeBenefitAccent(index)} />
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
          </div>
        </div>
      </section>
      <Brands />
    </main>
  )
}


type MaterialType = 'monocrystalline' | 'polycrystalline' | 'thinFilm'

type Brand = {
  file: string
  name: string
  hue: number
  prices: string[]
  basis: string
  materialTypes: MaterialType[]
}

const brandImages: Brand[] = [
  { file: 'adani-solar.webp', name: 'Adani Solar', hue: 160, prices: ['₹21.5–34/Wp'], basis: 'Non-DCR to DCR retail examples.', materialTypes: [] },
  { file: 'amara-raja-solar.webp', name: 'Amara Raja Solar', hue: 215, prices: [], basis: 'No current public module price verified.', materialTypes: [] },
  { file: 'emmvee-solar.webp', name: 'Emmvee Solar', hue: 270, prices: ['₹21–22/Wp · DCR', '₹14–15/Wp · non-DCR'], basis: 'Company-reported pricing; bulk/module realization.', materialTypes: [] },
  { file: 'freyr-energy.webp', name: 'Freyr Energy', hue: 198, prices: ['Monocrystalline: ₹40–₹60/W', 'Polycrystalline: ₹30–₹45/W', 'Thin-film: ₹20–₹35/W'], basis: 'Indicative price ranges by module technology; confirm the exact model and quote.', materialTypes: ['monocrystalline', 'polycrystalline', 'thinFilm'] },
  { file: 'goldi-solar.webp', name: 'Goldi Solar', hue: 40, prices: ['₹23–28/Wp'], basis: 'Estimated market range; confirm the exact model.', materialTypes: [] },
  { file: 'havells.webp', name: 'Havells', hue: 350, prices: ['₹28–33/Wp'], basis: 'Seller-listed range.', materialTypes: [] },
  { file: 'insolation-energy.webp', name: 'Insolation Energy', hue: 24, prices: ['₹20–22.5/Wp · DCR', '₹13–14/Wp · non-DCR'], basis: 'Reported module-price signals; bulk basis.', materialTypes: [] },
  { file: 'jakson-solar.webp', name: 'Jakson Solar', hue: 195, prices: ['≈ ₹26/Wp'], basis: 'Retail listing for a 330 W module.', materialTypes: [] },
  { file: 'loom-solar.webp', name: 'Loom Solar', hue: 82, prices: ['₹18.2/Wp · non-DCR', '₹28.2/Wp · DCR'], basis: 'Retail examples for different models.', materialTypes: [] },
  { file: 'luminous.webp', name: 'Luminous', hue: 245, prices: ['₹21.0/Wp · DCR', '₹24.8/Wp · non-DCR'], basis: 'Listed examples; different models and wattages.', materialTypes: [] },
  { file: 'microtek-solar.webp', name: 'Microtek Solar', hue: 12, prices: ['₹20.2–22.2/Wp · non-DCR', '≈ ₹24.5/Wp · DCR'], basis: 'Official-store examples plus a distributor price list.', materialTypes: [] },
  { file: 'premier-energies.webp', name: 'Premier Energies', hue: 285, prices: ['₹23–24/Wp · DCR'], basis: 'Company call cited prevailing retail DCR pricing; bulk pricing may differ.', materialTypes: [] },
  { file: 'rayzon-solar.webp', name: 'Rayzon Solar', hue: 185, prices: ['₹15/Wp · non-DCR', '₹28.2/Wp · DCR'], basis: 'Dealer-listed TOPCon examples.', materialTypes: [] },
  { file: 'renew-power.webp', name: 'ReNew Power', hue: 135, prices: ['₹24.70/Wp · DCR'], basis: 'ReNew’s listed DCR module price includes GST.', materialTypes: [] },
  { file: 'renewsys-solar.webp', name: 'RenewSys Solar', hue: 46, prices: ['₹25.60/Wp · DCR'], basis: 'Full-truckload price, ex-works plus GST.', materialTypes: [] },
  { file: 'saatvik-solar.webp', name: 'Saatvik Solar', hue: 305, prices: ['₹20–21/Wp · DCR', '₹12–13/Wp · non-DCR'], basis: 'Reported module realizations, not retail quotes.', materialTypes: [] },
  { file: 'servotech-power-systems.webp', name: 'Servotech', hue: 5, prices: ['≈ ₹25/Wp'], basis: 'Company-stated average; model-specific quote needed.', materialTypes: [] },
  { file: 'tata-power-solar.webp', name: 'Tata Power Solar', hue: 225, prices: ['₹26–32/Wp'], basis: 'Dealer/market listings; varies by model and DCR status.', materialTypes: [] },
  { file: 'vikram-solar.webp', name: 'Vikram Solar', hue: 165, prices: ['₹18.6–30/Wp'], basis: 'Non-DCR to DCR market examples.', materialTypes: [] },
  { file: 'waaree-energies.webp', name: 'Waaree Energies', hue: 29, prices: ['₹17.4/Wp · non-DCR', '₹27.9/Wp · DCR'], basis: 'Official-store examples; listed prices exclude GST.', materialTypes: [] },
]

function getHighestListedPrice(prices: string[]): number | null {
  const values = prices.flatMap((price) => (price.match(/\d+(?:\.\d+)?/g) ?? []).map(Number))
  return values.length > 0 ? Math.max(...values) : null
}

const sortedBrands = [...brandImages].sort((first, second) => {
  const firstPrice = getHighestListedPrice(first.prices)
  const secondPrice = getHighestListedPrice(second.prices)

  if (firstPrice === null) return secondPrice === null ? 0 : 1
  if (secondPrice === null) return -1
  return secondPrice - firstPrice
})

const featuredBrandNames = new Set(['Adani Solar', 'Tata Power Solar', 'Waaree Energies'])

const featuredBrands = sortedBrands.filter((brand) => featuredBrandNames.has(brand.name))

function Brands() {
  const { t } = useLocale()
  const section = t.home.brandSection
  const [brandsExpanded, setBrandsExpanded] = useState(false)

  return (
    <section
      className="relative isolate overflow-hidden bg-gradient-to-br from-white to-[#f1f2f6] px-4 py-16 sm:px-6 lg:px-10 lg:py-20"
      aria-labelledby="brand-section-title"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-size-[48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl">
        <header className="mb-7 border-t border-slate-300/70 pt-5 sm:mb-8 sm:pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
              <p className="inline-flex items-center gap-2 rounded-full border border-amber-700/20 bg-amber-100/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-amber-900">
                <span className="h-2 w-2 rounded-full bg-emerald-600 shadow-sm" aria-hidden="true" />
                {section.eyebrow}
              </p>
              <h2 id="brand-section-title" className="mt-4 max-w-3xl text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                {section.title}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-black sm:text-base">
                {section.subtitle}
              </p>
            </div>
            <ReadMoreToggle
              expanded={brandsExpanded}
              onToggle={() => setBrandsExpanded((expanded) => !expanded)}
              controlsId="brands-content"
              className="self-start sm:self-end"
              labelClassName="text-amber-800 underline decoration-amber-300 hover:text-amber-950"
            />
          </div>
        </header>

        <div id="brands-content" hidden={!brandsExpanded}>
          <p className="mb-7 max-w-3xl border-l-2 border-amber-500 pl-4 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
            {section.priceDisclaimer}
          </p>
        <ul
          className="mx-auto grid max-w-5xl list-none justify-items-center gap-5 sm:gap-6 lg:gap-8"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 18rem), 1fr))' }}
        >
          {featuredBrands.map((brand, index) => {
            const maxPrice = getHighestListedPrice(brand.prices)
            const formattedMaxPrice = maxPrice?.toLocaleString('en-IN', { maximumFractionDigits: 2 })
            const brandName =
              brand.name === 'Freyr Energy' ? section.freyrEnergy : brand.name

            return (
              <li
                key={brand.file}
                className="group relative flex h-full w-full max-w-sm min-w-0 flex-col overflow-hidden rounded-2xl border p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-4"
                style={{
                  borderColor: `hsl(${brand.hue} 68% 72%)`,
                  background: `linear-gradient(145deg, hsl(${brand.hue} 82% 95%), #fff 48%, hsl(${brand.hue} 76% 89%))`,
                  boxShadow: `0 22px 55px -38px hsl(${brand.hue} 75% 55% / 0.8)`,
                }}
              >
                <div
                  className="hidden relative h-24 items-center justify-center overflow-hidden rounded-2xl border border-white/80 shadow-inner sm:h-28 sm:p-2"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, white, hsl(${brand.hue} 75% 96%) 78%)`,
                    boxShadow: `inset 0 0 0 1px hsl(${brand.hue} 55% 90%)`,
                  }}
                >
                  <Image
                    src={`/brands/${brand.file}`}
                    alt={brandName}
                    width={150}
                    height={150}
                    sizes="160px"
                    unoptimized
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-2 text-center text-xl font-bold text-slate-900">
                  {brandName}
                </h3>
                <div className="mt-2">
                  <p className="text-center text-xs font-bold uppercase tracking-wide text-slate-500">
                    {section.materialTypesLabel}
                  </p>
                  <div className="mt-1 flex min-h-7 flex-wrap items-center justify-center gap-1">
                    {brand.materialTypes.length > 0 ? (
                      brand.materialTypes.map((materialType) => (
                        <span
                          key={materialType}
                          className="rounded-full border border-slate-300 bg-white/80 px-2 py-1 text-center text-xs font-semibold text-slate-700"
                        >
                          {section.materialTypes[materialType]}
                        </span>
                      ))
                    ) : (
                      <span className="text-center text-xs text-slate-500">
                        {section.undefinedMaterialType}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-2 flex min-h-[2.5rem] flex-col items-center justify-center gap-1">
                  {index === 0 && maxPrice !== null && (
                    <span className="rounded-full bg-slate-950 px-2 py-1 text-center text-[10px] leading-3 tracking-[0.12em] text-white shadow-sm">
                      {section.topPriceLabel}
                    </span>
                  )}
                  {brand.prices.map((price) => (
                    <span
                      key={price}
                      className="w-full max-w-[14rem] rounded-full border px-2 py-1 text-center text-xs font-bold leading-4"
                      style={{
                        backgroundColor: `hsl(${brand.hue} 76% 92%)`,
                        borderColor: `hsl(${brand.hue} 64% 76%)`,
                        color: `hsl(${brand.hue} 58% 25%)`,
                      }}
                    >
                      <DigitalNumber value={price} />
                    </span>
                  ))}
                </div>
                {maxPrice !== null && formattedMaxPrice ? (
                  <div
                    className="sr-only mt-3 flex min-h-[4.5rem] flex-col items-center justify-center rounded-2xl border px-2 py-2 text-center"
                    style={{
                      borderColor: `hsl(${brand.hue} 58% 78%)`,
                      backgroundColor: `hsl(${brand.hue} 78% 94%)`,
                    }}
                  >
                    <span className="text-xs font-black uppercase tracking-[0.12em] text-slate-600">
                      {section.maxListedLabel}
                    </span>
                    <span className="text-lg font-black tabular-nums text-slate-950 sm:text-xl">
                      <DigitalNumber value={`₹${formattedMaxPrice}`} /><span className="ml-1 text-xs font-bold text-slate-600">/Wp</span>
                    </span>
                  </div>
                ) : (
                  <div className="mt-2 flex min-h-8 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/70 px-2 py-1 text-center text-sm font-bold text-slate-600">
                    {section.quoteRequired}
                  </div>
                )}
                <p className="sr-only mt-auto flex min-h-[5.5rem] items-center justify-center rounded-2xl border border-white/70 bg-white/60 px-2 py-2 text-center text-sm leading-4 text-slate-600 sm:text-sm sm:leading-5">
                  {brand.basis}
                </p>
              </li>
            )
          })}
        </ul>
        <p
          aria-hidden="true"
          className="mt-22 select-none bg-[linear-gradient(145deg,#ff9933_0%,#ff9933_33%,#ffffff_33%,#ffffff_66%,#138808_66%,#138808_100%)] bg-clip-text text-center text-3xl font-black uppercase tracking-[0.2em] text-transparent drop-shadow-[0_1px_2px_rgba(15,23,42,0.4)] sm:text-5xl"
        >
          {section.moreBrandsAvailable}
        </p>
        </div>
      </div>
    </section>
  )
}


const serviceFactIcons = [Sun, MapPin, CalendarDays, Zap]

const serviceFactStyles = [
  'border-emerald-200 bg-emerald-50 text-emerald-800',
  'border-sky-200 bg-sky-50 text-sky-800',
  'border-amber-200 bg-amber-50 text-amber-800',
  'border-violet-200 bg-violet-50 text-violet-800',
]

function CompanyTrustSection() {
  const { t } = useLocale()
  const content = t.home.trustSections.company
  const footer = t.footer
  const addressUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(footer.address)}`

  return (
    <section
      className="relative isolate bg-gradient-to-br from-white to-[#f1f2f6] px-4 py-12 text-slate-900 sm:px-6 lg:px-10 lg:py-16 sm:py-14"
      aria-labelledby="company-trust-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_8%_0%,rgba(99,102,241,0.12),transparent_35%),radial-gradient(ellipse_at_94%_100%,rgba(14,165,233,0.11),transparent_32%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-700/15 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-indigo-700">{content.eyebrow}</p>
            <h2 id="company-trust-title" className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              {content.title}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              {content.description}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/80 bg-white/70 p-4 shadow-sm sm:col-span-2">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">{content.legalEntityLabel}</p>
              <p className="mt-2 text-xl font-bold text-slate-950">{t.about.companyProfile.contactCompany}</p>
              <p className="sr-only mt-3 text-sm font-semibold leading-5 text-slate-700">{content.identifiersText}</p>
            </div>

            <a
              href={addressUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-24 items-start gap-3 rounded-2xl border border-white/80 bg-white/75 p-4 shadow-sm transition hover:border-indigo-300 hover:bg-white"
            >
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-sm font-bold uppercase tracking-[0.18em] text-slate-500">{content.officeLabel}</span>
                <span className="mt-1 block text-sm leading-6 text-slate-700">{footer.address}</span>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-indigo-700">
                  {content.mapCta}<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </span>
            </a>

            <div className="grid gap-3">
              <a
                href={`tel:${footer.phoneHref}`}
                className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/75 p-4 shadow-sm transition hover:border-indigo-300 hover:bg-white"
              >
                <Phone className="h-5 w-5 shrink-0 text-indigo-600" aria-hidden="true" />
                <span>
                  <span className="block text-sm font-bold uppercase tracking-[0.18em] text-slate-500">{content.phoneLabel}</span>
                  <span className="mt-1 block text-sm text-slate-700"><DigitalNumber value={footer.phone} /></span>
                </span>
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/75 p-4 shadow-sm">
                <Mail className="h-5 w-5 shrink-0 text-indigo-600" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-sm font-bold uppercase tracking-[0.18em] text-slate-500">{content.emailLabel}</span>
                  <span className="mt-1 block break-all text-sm text-slate-700">{footer.email}</span>
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/80 bg-[linear-gradient(135deg,#fffaf0_0%,#ffffff_55%,#f0edff_100%)] p-5 text-slate-800 shadow-sm sm:col-span-2 sm:p-6">
              <p className="text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
                {content.residentialServiceDescription}
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 xl:grid-cols-4">
                {content.serviceFacts.map((fact, index) => {
                  const Icon = serviceFactIcons[index] ?? BadgeCheck
                  const style = serviceFactStyles[index] ?? 'border-slate-200 bg-slate-50 text-slate-700'

                  return (
                    <div key={fact.label} className={`flex min-w-0 items-center gap-3 rounded-xl border p-3 ${style}`}>
                      <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                      <span className="min-w-0">
                        <span className="block text-xs font-bold uppercase tracking-[0.12em] sm:text-sm">
                          {fact.label}
                        </span>
                        <span className="mt-1 block text-sm font-bold text-slate-900">
                          <DigitalNumber value={fact.value} />
                        </span>
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <Link
          href="/contact"
          prefetch={false}
          className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#A3D977] px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-[#c7efa4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {content.contactCta}<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}

function WhySolarSection() {
  const { t } = useLocale()
  const content = t.home.trustSections.whySolar
  const borderColors = ['border-l-[#b8d7ec]', 'border-l-[#c5dfc2]', 'border-l-[#efd9ad]'] as const

  return (
    <section
      className="bg-gradient-to-br from-[#f1f2f6] to-white px-4 py-12 text-slate-950 sm:px-6 lg:px-10 lg:py-16 sm:py-14"
      aria-labelledby="why-solar-title"
    >
      <div className="mx-auto max-w-7xl">
        <p className="inline-flex w-fit rounded-full border border-[#075da8]/15 bg-[#eaf3fc] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#075da8]">
          {content.eyebrow}
        </p>
        <h2 id="why-solar-title" className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
          {content.title}
        </h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {content.cards.map((card, index) => (
            <article
              key={card.title}
              className={`h-full rounded-2xl border border-[#d1e2f2] border-l-4 ${borderColors[index % borderColors.length]} bg-white p-6 shadow-sm sm:p-8`}
            >
              <h3 className="text-xl font-bold leading-8 text-slate-950">{card.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-700">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectEvidenceSection() {
  const { t } = useLocale()
  const content = t.home.trustSections.evidence
  const [activeIndex, setActiveIndex] = useState(0)
  const [testimonialsExpanded, setTestimonialsExpanded] = useState(false)
  const testimonials = content.testimonials.map(
    (_, index) => content.testimonials[(activeIndex + index) % content.testimonials.length],
  )

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + content.testimonials.length) % content.testimonials.length)
  }
  const showNext = () => {
    setActiveIndex((index) => (index + 1) % content.testimonials.length)
  }

  return (
    <section className="bg-gradient-to-br from-white to-[#f1f2f6] px-4 py-14 sm:px-6 lg:px-10 lg:py-18" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-800/15 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-800">{content.eyebrow}</p>
            <h2 id="testimonials-title" className="mt-3 text-3xl font-black tracking-tight text-[#102b28] sm:text-4xl">
              {content.title}
            </h2>
          </div>
          <div className="flex items-end justify-between gap-4 lg:pb-1">
            <p className="max-w-3xl text-sm leading-7 text-black sm:text-base">{content.description}</p>
            <ReadMoreToggle
              expanded={testimonialsExpanded}
              onToggle={() => setTestimonialsExpanded((expanded) => !expanded)}
              controlsId="testimonials-content"
              labelClassName="text-emerald-700 underline decoration-emerald-300 hover:text-emerald-950"
            />
          </div>
        </div>

        <div id="testimonials-content" hidden={!testimonialsExpanded}>
        <div className="mt-8 grid grid-cols-[auto_minmax(0,1fr)_auto] items-stretch gap-2 sm:gap-4">
          <button
            type="button"
            onClick={showPrevious}
            aria-label={content.previousLabel}
            className="my-auto flex h-10 w-10 items-center justify-center rounded-full border border-amber-900/15 bg-white text-slate-900 shadow-sm transition hover:bg-amber-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 sm:h-12 sm:w-12"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3" aria-live="polite">
            {testimonials.map((testimonial, index) => (
              <article
                key={`${activeIndex}-${index}`}
                className={`flex min-h-64 flex-col justify-between rounded-2xl border border-[#cbd5cc] bg-white p-6 shadow-sm sm:p-8 ${index === 1 ? 'hidden md:flex' : ''} ${index === 2 ? 'hidden lg:flex' : ''}`}
              >
                <div className="blur-md">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-800">{content.placeholderLabel}</p>
                  <blockquote className="mt-5 text-lg font-semibold leading-8 text-slate-950 sm:text-xl">
                    “{testimonial.quote}”
                  </blockquote>
                </div>
                <div className="mt-8 border-t border-slate-100 pt-5 blur-md">
                  <p className="font-bold text-slate-950">{testimonial.customer}</p>
                  <p className="mt-1 text-sm text-slate-700">{testimonial.location}</p>
                  <p className="mt-3 text-sm font-medium text-emerald-900">{testimonial.system}</p>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={showNext}
            aria-label={content.nextLabel}
            className="my-auto flex h-10 w-10 items-center justify-center rounded-full border border-amber-900/15 bg-white text-slate-900 shadow-sm transition hover:bg-amber-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 sm:h-12 sm:w-12"
          >
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-amber-300 bg-[#fff3df] p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm leading-6 text-amber-950">{content.note}</p>
          <Link href="/contact" prefetch={false} className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-amber-950 underline decoration-amber-500 underline-offset-4">
            {content.cta}<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        </div>
      </div>
    </section>
  )
}

function SolarJourneySection() {
  const { t } = useLocale()
  const content = t.home.trustSections.journey

  return (
    <section className="bg-gradient-to-br from-white to-[#f1f2f6] px-4 py-14 sm:px-6 lg:px-10 lg:py-18" aria-labelledby="solar-journey-title">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-800/15 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-800">{content.eyebrow}</p>
          <h2 id="solar-journey-title" className="mt-3 text-3xl font-black tracking-tight text-emerald-950 sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{content.description}</p>
        </div>

        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {content.steps.map((step, index) => (
            <li key={step.title} className="relative rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
              <span className="font-mono text-xs font-bold tracking-[0.15em] text-emerald-700">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 text-base font-extrabold text-slate-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-linear-to-r from-[#e7f2eb] via-[#f5f0e2] to-[#e8e7f8] p-5 text-slate-800 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm leading-6 text-slate-700">{content.estimateNote}</p>
          <Link href="/solar-calculator" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#A3D977] px-5 py-3 text-sm font-bold text-emerald-950 transition hover:bg-[#c7efa4]">
            {content.cta}<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function QuoteTransparencySection() {
  const { t } = useLocale()
  const content = t.home.trustSections.proposal

  return (
    <section
      className="relative isolate bg-gradient-to-br from-[#f1f2f6] to-white px-4 py-14 text-slate-900 sm:px-6 lg:px-10 lg:py-18"
      aria-labelledby="quote-transparency-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_0%,rgba(129,140,248,0.13),transparent_35%),radial-gradient(ellipse_at_100%_100%,rgba(56,189,248,0.12),transparent_32%)]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
        <header className="lg:sticky lg:top-24 lg:self-start">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-700/15 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-indigo-700">{content.eyebrow}</p>
          <h2 id="quote-transparency-title" className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">{content.description}</p>
        </header>

        <div className="space-y-4">
          <article className="rounded-2xl border border-white/80 bg-white/75 p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-300 text-slate-900">
                <FileCheck2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-extrabold text-slate-950">{content.quoteHeading}</h3>
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {content.quoteItems.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-slate-100/80 p-3 text-sm leading-6 text-slate-700">
                  <ClipboardCheck className="mt-1 h-4 w-4 shrink-0 text-sky-700" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-white/80 bg-white/75 p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-200 text-sky-950">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-extrabold text-slate-950">{content.warrantyHeading}</h3>
            </div>
            <ul className="mt-5 grid gap-3">
              {content.warrantyItems.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-slate-100/80 p-3 text-sm leading-6 text-slate-700">
                  <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-amber-700" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <div className="flex flex-col gap-3 rounded-2xl bg-amber-300 p-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:p-5">
            <Link href="/#brand-section-title" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-amber-50">
              {content.brandCta}<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
            <Link href="/auth/dashboard/warranty-policy" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-amber-50">
              {content.warrantyCta}<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
            <Link href="/auth/dashboard/customer-enquiry" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-indigo-700 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-indigo-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700">
              {content.quoteCta}<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


type Slide = HeroSlideData & { panelClass: string }

const homeSlideImageNumbers = [1, 2, 3, 7, 8, 9, 13, 14, 15]

function HomeHeroSlider() {
  const { t } = useLocale()
  const slides: Slide[] = t.home.heroSlider.map((slide, index) => {
    const imageNumber = homeSlideImageNumbers[index]
    if (imageNumber === undefined) {
      throw new Error(`Missing image mapping for home hero slide ${index + 1}`)
    }

    return { ...slide, image: getSliderImagePath(imageNumber) }
  })

  return (
    <Slider autoplay interval={5000} pauseOnHover ariaLabel={t.home.heroSliderAriaLabel}>
      {slides.map((slide, index) => (
        <div key={slide.title} className="relative h-[clamp(640px,56vw,760px)] w-full overflow-hidden bg-gradient-to-br from-white to-[#f1f2f6]">
          <div className="absolute inset-0">
            <OptimizedImage
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.78)_32%,rgba(255,255,255,0.18)_68%,rgba(255,255,255,0.04)_100%)]" />
          <div className="absolute inset-y-0 left-0 w-[52%] bg-[radial-gradient(circle_at_12%_78%,rgba(32,164,74,0.16),transparent_34%),radial-gradient(circle_at_48%_18%,rgba(14,165,233,0.10),transparent_28%)]" />
          <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 flex-col gap-2 lg:flex" aria-hidden="true">
            <span className="h-14 w-px bg-gradient-to-b from-transparent via-[#137c63]/50 to-transparent" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#f59e0b] shadow-[0_0_16px_rgba(245,158,11,0.8)]" />
            <span className="h-14 w-px bg-gradient-to-b from-transparent via-[#137c63]/50 to-transparent" />
          </div>
          <div className="group relative flex h-[clamp(640px,56vw,760px)] w-full items-center justify-start p-4 sm:p-8 lg:pl-[9vw] lg:pr-[7vw]">
            <div className="relative w-full overflow-hidden rounded-[28px] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(244,250,246,0.82))] shadow-[0_28px_80px_rgba(15,23,42,0.22)] backdrop-blur-xl before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-[linear-gradient(180deg,#ff9933_0%,#ff9933_33%,#ffffff_33%,#ffffff_66%,#138808_66%,#138808_100%)] before:shadow-[0_0_0_1px_rgba(15,23,42,0.12)] before:content-[''] after:absolute after:-right-14 after:-top-16 after:h-36 after:w-36 after:rounded-full after:border after:border-[#137c63]/10 after:content-[''] lg:w-1/2">
              <div className="absolute right-5 top-6 h-14 w-14 rounded-full border border-[#20a44a]/15 sm:h-20 sm:w-20" aria-hidden="true" />
              <div className="absolute right-10 top-11 h-2.5 w-2.5 rounded-full bg-[#20a44a]/70 shadow-[0_0_18px_rgba(32,164,74,0.5)] sm:right-13 sm:top-15" aria-hidden="true" />
              <HeroSlideContent
                slide={slide}
                actions={
                  <>
                  <Link
                    href="/contact"
                    prefetch={false}
                    className="rounded-full bg-[#137c63] px-4 py-2 text-md font-black uppercase tracking-[0.18em] text-white shadow-[0_12px_30px_rgba(19,124,99,0.24)] transition hover:-translate-y-0.5 hover:bg-[#0f5f4b]"
                  >
                    {t.hero.buttons.quote}
                  </Link>
                  <Link
                    href="/solar-calculator"
                    className="rounded-full border border-[#137c63]/20 bg-white/70 px-4 py-2 text-md font-black uppercase tracking-[0.18em] text-[#102b28] transition hover:-translate-y-0.5 hover:border-[#137c63]/40 hover:bg-white"
                  >
                    {t.hero.buttons.estimateSavings}
                  </Link>
                  </>
                }
                variant="premium"
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}


const TARGET_DATE = new Date('2027-03-31T23:59:59+05:30')

function getDaysRemaining(target: Date, now: number) {
  const diff = Math.max(target.getTime() - now, 0)
  return String(Math.floor(diff / 86400000)).padStart(3, '0')
}

function SchemeBanner() {
  const { t } = useLocale()
  const banner = t.home.schemeBanner
  const capacityGuide = banner.capacityGuide
  const digitalFontStyle = t.componentData.companyAge.digitalFontStyle
  const capacityRows = t.solarPage.capacityTable.rows

  const [now, setNow] = useState<number | null>(null)

  useEffect(() => {
    const updateNow = () => setNow(Date.now())
    updateNow()

    const interval = window.setInterval(updateNow, 60000)
    return () => window.clearInterval(interval)
  }, [])

  const daysRemaining = now === null ? '000' : getDaysRemaining(TARGET_DATE, now)

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-white to-[#f1f2f6] px-4 py-9 text-[#172554] sm:px-6 sm:py-11 lg:px-10 lg:py-12">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-white/55 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-[#ede9fe]/55 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-x-10 gap-y-7 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="flex min-w-0 items-start gap-4 sm:gap-6">
            <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/75 text-2xl font-black text-indigo-800 shadow-sm shadow-indigo-950/10 ring-1 ring-indigo-900/10 sm:h-14 sm:w-14 sm:text-3xl">
              ₹
            </span>
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-900/10 bg-white/70 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-indigo-900 sm:text-xs">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                {banner.badge}
              </div>
              <h2 className="mt-3 text-[26px] font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
                {banner.title}{' '}
                <span className="font-semibold text-indigo-800">{banner.titleAccent}</span>
              </h2>
              <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
                {banner.description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pl-16 lg:pl-0">
            <Link
              href="/contact"
              prefetch={false}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-indigo-700 px-5 text-sm font-bold text-white shadow-sm shadow-indigo-950/20 transition hover:bg-indigo-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
            >
              {banner.ctaPrimary}
            </Link>
            <Link
              href="/know-eligibility"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-indigo-900/25 bg-white/45 px-5 text-sm font-bold text-slate-800 transition hover:bg-white/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
            >
              {banner.ctaSecondary}
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="relative isolate overflow-hidden rounded-2xl border border-emerald-300/70 bg-gradient-to-br from-[#064e3b] to-[#047857] p-5 text-white shadow-sm shadow-emerald-950/15">
            <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-12 -z-10 h-36 w-36 rounded-full bg-lime-300/15 blur-2xl" />
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-100">{banner.cardLabel}</div>
            <div className="mt-3 text-3xl font-black tracking-tight text-lime-200 sm:text-4xl">
              <DigitalNumber value={banner.subsidyAmount} />
            </div>
            <div className="mt-2 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-emerald-50">
              {banner.max} {banner.perHome}
            </div>
          </div>

          <div className="relative flex items-start gap-3 overflow-hidden rounded-2xl border border-amber-200 bg-gradient-to-br from-[#fffdf7] to-[#fff3d8] p-5 shadow-sm shadow-amber-950/5">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-amber-950 shadow-sm shadow-amber-900/10">
              <Info className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-sm font-medium leading-6 text-amber-950 sm:text-[15px] sm:leading-7">
              {t.subsidyNotice}
            </p>
          </div>

          <div className="relative isolate overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-br from-[#172554] via-[#1e3a8a] to-[#312e81] p-5 text-white shadow-sm shadow-indigo-950/15">
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 -right-10 -z-10 h-40 w-40 rounded-full bg-cyan-300/15 blur-2xl" />
            <div className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-100">{banner.badgeSuffix}</div>
            <div className="mt-4 flex justify-center">
              <div className="w-full max-w-40 rounded-2xl border border-white/20 px-4 py-4 text-center shadow-inner shadow-white/5">
                <span
                  className="block text-4xl font-bold leading-none tabular-nums text-cyan-200"
                  style={digitalFontStyle}
                >
                  {daysRemaining}
                </span>
                <span className="mt-2 block text-base font-semibold uppercase tracking-wide text-indigo-100">
                  {banner.daysLabel}
                </span>
              </div>
            </div>
          </div>

          <div className="relative isolate overflow-hidden rounded-2xl border border-violet-200 bg-gradient-to-br from-white to-violet-100 p-5 shadow-sm shadow-violet-950/10">
            <div aria-hidden="true" className="pointer-events-none absolute -right-8 -top-10 -z-10 h-28 w-28 rounded-full bg-fuchsia-300/30 blur-2xl" />
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-violet-800">{banner.offerLabel}</div>
            <p className="mt-3 text-[15px] font-semibold leading-6 text-violet-950 sm:text-base sm:leading-7">{banner.offerText}</p>
          </div>
        </div>

        <div className="mt-10 border-t border-indigo-900/10 pt-8">
          <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] xl:gap-10">
            <div className="max-w-2xl">
              <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                {capacityGuide.description}
              </p>
              <a
                href="https://pmsuryaghar.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1 border-b border-[#12865e]/40 pb-1 text-sm font-bold text-[#087a61] transition-colors hover:border-[#087a61] hover:text-[#075e4b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087a61]"
              >
                {capacityGuide.portalCta}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#e7e4dc] bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[620px] border-collapse text-left text-sm text-slate-800 [&_th]:border-b [&_th]:border-emerald-100 [&_td]:border-b [&_td]:border-emerald-100 [&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3">
                  <caption className="sr-only">{t.ui.suitableRooftopCapacity}</caption>
                  <thead className="bg-amber-700 font-bold text-white">
                    <tr className="text-sm font-bold uppercase tracking-[0.16em]">
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
                  <tbody className="divide-y divide-emerald-100">
                    {capacityRows.map((row) => (
                      <tr key={row.usage} className="odd:bg-white even:bg-emerald-50/70 transition-colors hover:bg-emerald-100/70">
                        <td className="px-5 py-5 text-[#172a28] sm:px-6"><DigitalNumber value={row.usage} /></td>
                        <td className="px-5 py-5 font-bold text-[#087a61] sm:px-6"><DigitalNumber value={row.capacity} /></td>
                        <td className="px-5 py-5 text-slate-500 sm:px-6"><DigitalNumber value={row.tag} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="bg-[#fff4e5] px-5 py-4 text-xs leading-5 text-slate-600 sm:px-6 sm:text-[13px]">
                {capacityGuide.notice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
