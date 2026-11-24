import type { Translations } from '@/lib/LocaleContext'
import { getRequestTranslations } from '@/lib/serverLocale'
import { getAccentOrDefault } from '@/lib/utils/utils'
import { BankEMICalculator } from './components/forms/BankEMICalculator'
import { SolarEstimation } from './components/forms/SolarEstimation'
import TirupatiEnergySection from './components/ui/TirupatiEnergySection'

import { FeatureCard, HybridContentBlock, HybridFeatureCard, HybridInfoPanel, HybridSectionEyebrow, HybridTable, InfoPanel, RooftopSolarContentBlock, SectionEyebrow, SolarBenefitCard, solarOfferingImages, TrustRibbon, WindCapacityTable, WindContentBlock, WindFeatureCard, WindInfoPanel, WindSectionEyebrow } from './components/ui'
import { hybridSolutionImages, windSolutionImages } from './components/ui/EnergyContentImages'

import Image from 'next/image'
import { DigitalNumber } from '@/app/components/ui/DigitalNumber'
import WindTurbineIllustration from '@/app/components/ui/WindTurbineIllustration'
import { ArrowUpRight, BadgeCheck, BadgeIndianRupee, BriefcaseBusiness, CalendarDays, ClipboardCheck, FileCheck2, FileText, HardHat, House, Leaf, Mail, MapPin, MessageCircle, PanelsTopLeft, Phone, Rocket, ShieldCheck, Sun, Zap } from 'lucide-react'
import Link from 'next/link'
import { getSliderImagePath } from '@/lib/sliderImages'
import Slider from '@/app/components/ui/Slider'
import OptimizedImage from '@/app/components/ui/OptimizedImage'
import { HeroSlideContent, type HeroSlideData } from '@/app/components/ui/HeroSlideContent'
import { Info } from 'lucide-react'
import CountdownDays from '@/app/components/home/CountdownDays'
import ProjectEvidenceSection from '@/app/components/home/ProjectEvidenceSection'

function RecognitionHighlight({ t }: { t: Translations }) {
  const recognitions = t.home.recognition

  return (
    <section className="bg-transparent p-0">
      <div className="relative isolate grid min-h-[720px] w-full grid-cols-1 gap-8 overflow-hidden bg-[linear-gradient(112deg,#06143f_0%,#07398f_38%,#352ecc_70%,#e74398_90%,#ff7b55_100%)] px-5 py-8 text-white sm:min-h-[650px] sm:px-8 sm:py-10 md:px-10 lg:min-h-[390px] lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-8 lg:px-8 lg:py-8 xl:aspect-[3.2/1] xl:min-h-0 xl:gap-10 xl:px-10">
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(255,156,91,0.32),transparent_35%),radial-gradient(ellipse_at_50%_0%,rgba(61,131,255,0.23),transparent_42%)]"
          aria-hidden="true"
        />
        <svg
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[150px] w-full sm:h-[180px] lg:h-[220px] xl:h-[54%]"
          viewBox="0 0 1600 260"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="credentials-sun-glow">
              <stop stopColor="#fff6b8" stopOpacity=".9" />
              <stop offset=".3" stopColor="#ffbd55" stopOpacity=".42" />
              <stop offset="1" stopColor="#ff925f" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="credentials-horizon-glow" x1="0" x2="1">
              <stop stopColor="#9b9bff" stopOpacity=".8" />
              <stop offset=".45" stopColor="#ffc66d" />
              <stop offset="1" stopColor="#ff9b64" />
            </linearGradient>
            <clipPath id="credentials-panel-clip">
              <path d="M0 150 338 190 478 260H0z" />
            </clipPath>
          </defs>
          <g transform="translate(0 25)">
            <circle
              cx="320"
              cy="150"
              r="112"
              fill="url(#credentials-sun-glow)"
            />
            <circle cx="320" cy="150" r="49" fill="#ffd46a" />
          </g>
          <path
            d="M320 126V90M355 140l30-30M369 175h36M355 210l30 30M320 224v36M285 210l-30 30M271 175h-36M285 140l-30-30"
            stroke="#fff0a5"
            strokeOpacity=".9"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <animate
              attributeName="stroke-opacity"
              values=".45;1;.45"
              dur="2.4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-width"
              values="2;4;2"
              dur="2.4s"
              repeatCount="indefinite"
            />
          </path>
          <path transform="translate(0 25)" d="M0 157c122-26 214-14 310 2 96 16 145-23 238-8 95 15 157 55 264 34 131-26 224-31 330-14 139 22 269-27 458-42v131H0z" fill="#453073" fillOpacity=".55" />
          <path d="M0 191c135-24 247-33 366-10 118 24 209 39 331 21 105-16 193-26 300-14 143 17 264 9 398-15 76-13 142-18 205-17v104H0z" fill="#10205c" fillOpacity=".8" />
          <path d="M0 215c190-17 300-33 426-7 130 27 223 42 356 22 151-23 239-25 371-11 149 16 291 13 447-16v77H0z" fill="#071642" fillOpacity=".88" />
          <path d="M0 185c165-17 270 21 381 26 129 7 191-36 321-13 182 32 263 49 439 22 156-24 287-33 459-45" stroke="url(#credentials-horizon-glow)" strokeWidth="4" />
          <path d="M0 150 338 190 478 260H0z" fill="#102568" stroke="#c3e4ff" strokeOpacity=".78" strokeWidth="2" />
          <g clipPath="url(#credentials-panel-clip)" stroke="#b7ddff" strokeOpacity=".78" strokeWidth="2">
            <path d="M68 158 96 260M136 166 191 260M203 174 287 260M270 182 382 260M0 178 373 208M0 205 408 225M0 232 443 243" />
          </g>
          <WindTurbineIllustration x={400} y={38} width={200} height={222} />
        </svg>

        <div className="relative z-10 flex min-w-0 flex-col justify-center lg:-translate-y-12 lg:pl-1">
          <div className="flex max-w-[320px] items-center gap-3">
            <span className="h-px flex-1 bg-amber-300/90" aria-hidden="true" />
            <p className="whitespace-nowrap rounded-full bg-[#dcecff] px-4 py-1 uppercase text-[#17345f]    text-xs font-semibold tracking-wide leading-5">
              {t.home.recognitionHeader.badge}
            </p>
            <span className="h-px flex-1 bg-amber-300/90" aria-hidden="true" />
          </div>
          <h2 className="mt-4 max-w-[540px] border-l-[5px] border-amber-400 pl-4 font-serif text-[#fffaf1] text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
            {t.home.recognitionHeader.title}
          </h2>
          <p className="mt-3 max-w-[480px] pl-5 text-blue-50/90      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {t.home.recognitionHeader.description}
          </p>
        </div>

        <div className="relative z-10 grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:-translate-y-12 lg:gap-3 xl:gap-4">
          {recognitions.map((item, index) => (
            <article
              key={item.title}
              className="relative flex min-h-[238px] min-w-0 flex-col justify-center bg-[#101c69]/25 px-4 py-5 backdrop-blur-[2px] sm:min-h-[250px] sm:px-5 sm:py-5 lg:min-h-[264px] lg:px-4 lg:py-4 xl:min-h-0 xl:h-full xl:px-5"
              style={{
                clipPath:
                  'polygon(0 0, 96% 0, 100% 6%, 100% 94%, 96% 100%, 4% 100%, 0 94%)',
              }}
            >
              <svg
                className="pointer-events-none absolute inset-0 z-10 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 1H95L99 6V94L95 99H5L1 94Z"
                  stroke="#fffaf1"
                  strokeOpacity=".9"
                  strokeWidth="1.5"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#fffaf1]/80 bg-white/[0.06] text-blue-50 sm:h-12 sm:w-12">
                  {index === 0 ? (
                    <BriefcaseBusiness className="h-6 w-6" strokeWidth={1.7} aria-hidden="true" />
                  ) : (
                    <Rocket className="h-6 w-6" strokeWidth={1.7} aria-hidden="true" />
                  )}
                </span>
                <span className="h-px flex-1 bg-[#fffaf1]/80" aria-hidden="true" />
              </div>
              <p className={`mt-3 w-fit max-w-full rounded-full px-3 py-1 uppercase text-[#101b54] ${index === 0 ? 'bg-[#cde4ff]' : ' bg-[#ffb52e]    '} text-xs font-semibold tracking-wide leading-5`}>
                {item.subtitle}
              </p>
              <h3 className="mt-2 font-serif text-[#fffaf1] text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">
                {item.title}
              </h3>
              <span className="mt-2 h-[3px] w-12 bg-amber-400" aria-hidden="true" />
              <p className="mt-2 max-w-lg  text-blue-50/95      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default async function Home() {
  const t = await getRequestTranslations()
  const home = t.home
  const offer = home.offer
  const solarCards = offer.cards
  const systemTypes = home.systemTypes
  const whySolar = home.whySolar
  const wind = home.wind
  const hybrid = home.hybrid
  return (
    <main>
      <HomeHeroSlider t={t} />
      <SchemeBanner t={t} />
      <TrustRibbon />
      {/* Solar Section */}
      <section className="bg-gradient-to-br from-[#f1f2f6] to-white px-4 py-12 sm:px-6 lg:px-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div>
            <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <SectionEyebrow>{offer.eyebrow}</SectionEyebrow>
              <h2 className="mt-3 text-slate-900 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
                {offer.title}
              </h2>
            </div>
            </div>
            <div id="what-we-offer-content">
              <div className="mb-10 text-lg leading-8 text-black">
                {offer.description}
              </div>
              <div className="grid gap-6 lg:grid-cols-3">
                {solarCards.map((card, index) => (
                  <FeatureCard
                    key={card.title}
                    title={card.title}
                    description={card.description}
                    descriptionClassName="truncate"
                    points={[]}
                    accent={getAccentOrDefault(card.accent, ['amber', 'sky', 'violet'] as const, 'emerald')}
                    label={t.ui.solarSolution}
                    imageSrc={solarOfferingImages[index]}
                  />
                ))}
              </div>
              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {home.moreSolarCards.map((card, index) => (
                  <FeatureCard
                    key={card.title}
                    title={card.title}
                    description={card.description}
                    descriptionClassName="truncate"
                    points={[]}
                    accent={getAccentOrDefault(card.accent, ['amber', 'sky', 'violet'] as const, 'emerald')}
                    label={t.ui.solarSolution}
                    imageSrc={solarOfferingImages[solarCards.length + index]}
                  />
                ))}
              </div>
              <div className="mt-12">
                <RooftopSolarContentBlock
                  eyebrow={home.rooftopSolar.eyebrow}
                  title={home.rooftopSolar.title}
                  description={home.rooftopSolar.description}
                  benefits={home.rooftopSolar.benefits}
                />
                <div className="mt-8">
                  {home.rooftopSolar.panels.map((panel) => (
                    <InfoPanel key={panel.title} title={panel.title} accent={getAccentOrDefault(panel.accent, ['amber', 'sky'] as const, 'emerald')} content={panel.content} />
                  ))}
                </div>
              </div>
              <div className="mt-12 rounded-xl border border-slate-200 bg-white p-6 lg:p-8">
                <div className="mb-6">
                  <SectionEyebrow>{home.systemTypeSection.eyebrow}</SectionEyebrow>
                  <h3 className="mt-3 text-slate-900 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">
                    {home.systemTypeSection.title}
                  </h3>
                </div>
                <div className="grid gap-5 lg:grid-cols-3">
                  {systemTypes.map((item) => (
                    <InfoPanel key={item.title} title={item.title} accent={getAccentOrDefault(item.accent, ['amber', 'sky'] as const, 'emerald')} content={item.content} />
                  ))}
                </div>
              </div>
              <div className="relative isolate mt-12 overflow-hidden rounded-[2rem] border border-[#e7dfc9] bg-[#fff9ed] p-5 shadow-sm sm:p-7 lg:p-9">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_0%,rgba(255,230,167,0.42),transparent_35%),radial-gradient(ellipse_at_100%_0%,rgba(147,171,89,0.15),transparent_24%)]" />
                <svg className="pointer-events-none absolute right-0 top-0 h-20 w-40 text-[#78934d]/70" viewBox="0 0 160 80" fill="none" aria-hidden="true">
                  <path d="M92 0c-2 23 9 37 31 42C128 20 115 5 92 0Z" fill="currentColor" />
                  <path d="M122 0c-1 24 11 38 32 43C157 20 145 5 122 0Z" fill="currentColor" />
                  <path d="M143 13c-1 22 5 37 17 45V16c-6-3-11-4-17-3Z" fill="currentColor" />
                </svg>
                <div className="relative z-10 mb-6">
                  <SectionEyebrow>{home.whySolarSection.eyebrow}</SectionEyebrow>
                  <h3 className="mt-3 text-slate-900 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">
                    {home.whySolarSection.title}
                  </h3>
                </div>

                <div className="relative z-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {whySolar.map((item, index) => (
                    <SolarBenefitCard key={item.title} title={item.title} description={item.description} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RecognitionHighlight t={t} />
      <CompanyTrustSection t={t} />
      <WhySolarSection t={t} />
      <SolarJourneySection t={t} />
      <QuoteTransparencySection t={t} />
      <ProjectEvidenceSection content={home.trustSections.evidence} />
      <SolarEstimation />
      <BankEMICalculator />
      <TirupatiEnergySection />
      {/* Wind Energy Section */}
      <section className="bg-gradient-to-br from-white to-[#f1f2f6] px-4 py-12 sm:px-6 lg:px-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div>
            <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <WindSectionEyebrow>{wind.eyebrow}</WindSectionEyebrow>
              <h2 className="mt-3 text-slate-900 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
                {wind.title}
              </h2>
            </div>
            </div>
            <div id="wind-energy-content">
            <div className="grid gap-6 lg:grid-cols-3">
              {wind.cards.map((card, index) => (
                <WindFeatureCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  descriptionClassName="truncate"
                  points={[]}
                  accent={getAccentOrDefault(card.accent, ['amber', 'sky', 'violet'] as const, 'emerald')}
                  imageSrc={windSolutionImages[index]}
                />
              ))}
            </div>
            <div className="mt-10">
              <WindContentBlock eyebrow={wind.eyebrow} title={wind.title} description={t.windPage.hero.subtitle} benefits={wind.benefits} imageSrc={windSolutionImages[0]} />
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {wind.panels.map((panel, index) => (
              <WindInfoPanel key={panel.title} title={panel.title} index={index} accent={getAccentOrDefault(panel.accent, ['emerald', 'amber'] as const, 'sky')} content={panel.content} />
              ))}
            </div>
            <div className="mt-8">
              <WindCapacityTable rows={wind.capacity} />
            </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hybrid Energy Section */}
      <section className="bg-gradient-to-br from-[#f1f2f6] to-white px-4 py-12 sm:px-6 lg:px-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div>
            <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <HybridSectionEyebrow>{hybrid.eyebrow}</HybridSectionEyebrow>
              <h2 className="mt-3 text-slate-900 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
                {hybrid.title}
              </h2>
            </div>
            </div>
            <div id="hybrid-energy-content">
            <div className="grid gap-6 lg:grid-cols-3">
              {hybrid.cards.map((card, index) => (
                <HybridFeatureCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  descriptionClassName="truncate"
                  points={[]}
                  accent={getAccentOrDefault(card.accent, ['sky', 'violet', 'amber'] as const, 'emerald')}
                  imageSrc={hybridSolutionImages[index]}
                />
              ))}
            </div>
            <div className="mt-10">
              <HybridContentBlock eyebrow={hybrid.eyebrow} title={hybrid.title} description={t.hybridPage.hero.subtitle} benefits={hybrid.benefits} imageSrc={hybridSolutionImages[0]} />
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {hybrid.panels.map((panel, index) => (
              <HybridInfoPanel key={panel.title} title={panel.title} index={index} accent={getAccentOrDefault(panel.accent, ['sky', 'violet'] as const, 'emerald')} content={panel.content} />
              ))}
            </div>
            <div className="mt-8">
              <HybridTable rows={hybrid.table} />
            </div>
            </div>
          </div>
        </div>
      </section>
      <Brands t={t} />
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
  { file: 'waaree-energies.webp', name: 'Waaree Energies', hue: 29, prices: ['₹21.4/Wp · non-DCR', '₹27.9/Wp · DCR'], basis: 'Official-store examples; listed prices exclude GST.', materialTypes: [] },
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

function Brands({ t }: { t: Translations }) {
  const section = t.home.brandSection

  return (
    <section
      className="relative isolate overflow-hidden bg-[#f7f5f1] px-4 pt-0 pb-8 sm:px-4 lg:px-7 lg:pb-9"
      aria-labelledby="brand-section-title"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-size-[48px_48px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="relative mb-3 min-h-[19rem] overflow-hidden">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute right-9 top-6 h-[17rem] w-[17rem] rounded-full bg-[radial-gradient(circle_at_35%_35%,#fff4b0_0%,#ffc74d_52%,#ff9c35_100%)]" />
            <svg
              className="absolute bottom-0 right-0 h-full w-[32%] min-w-[19rem]"
              viewBox="0 0 340 164"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="brand-panel-fill" x1="0" x2="1" y1="1" y2="0">
                  <stop stopColor="#0d3157" />
                  <stop offset="1" stopColor="#285c86" />
                </linearGradient>
                <clipPath id="brand-panel-clip">
                  <path d="M0 164 340 42v122z" />
                </clipPath>
                <linearGradient id="brand-panel-edge" x1="0" x2="1">
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset=".22" stopColor="white" stopOpacity=".4" />
                  <stop offset=".48" stopColor="white" />
                </linearGradient>
                <mask id="brand-panel-mask">
                  <rect width="340" height="164" fill="url(#brand-panel-edge)" />
                </mask>
              </defs>
              <g mask="url(#brand-panel-mask)">
                <path d="M0 164 340 42v122z" fill="url(#brand-panel-fill)" />
                <g clipPath="url(#brand-panel-clip)" fill="none" stroke="#8eb2c7" strokeOpacity=".7" strokeWidth="1.5">
                  <path d="m-20 154 380-45M-20 126 360 81M-20 98 360 53M-20 70 360 25M-20 42 360-3" />
                  <path d="m55 180 285-150M112 180 340 60M169 180 340 88M226 180 340 116M283 180 340 144" />
                </g>
                <path d="M0 164 340 42" fill="none" stroke="#d8e6e9" strokeOpacity=".7" strokeWidth="2" />
              </g>
              <g fill="#4a8d3c">
                <path d="M270 164c-8-27-7-48 5-66 15 21 14 43-5 66Z" />
                <path d="M289 164c-1-35 7-56 24-72 7 28-1 52-24 72Z" />
                <path d="M311 164c8-30 20-48 39-58 0 28-13 48-39 58Z" />
                <path d="M258 164c-20-22-29-42-25-63 23 14 32 34 25 63Z" />
                <path d="M328 164c15-20 31-31 50-33-8 22-25 34-50 33Z" />
              </g>
            </svg>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#f7f5f1_0%,#f7f5f1_62%,rgba(247,245,241,.35)_74%,transparent_100%)] backdrop-blur-[2px]" />
          </div>
          <div className="relative z-10 max-w-5xl pt-10 pl-2">
            <p className="inline-flex items-center gap-3 rounded-full bg-[#ffe89a] px-4 py-2 text-[#17472c] text-sm font-bold uppercase tracking-[0.06em] leading-5 shadow-sm lg:gap-4 lg:px-5 lg:text-lg">
              <span className="h-4 w-4 rounded-full bg-[#14843c]" aria-hidden="true" />
              {section.eyebrow}
            </p>
            <h2 id="brand-section-title" className="mt-6 max-w-5xl text-[#0b1745] text-3xl sm:text-4xl font-semibold !tracking-tight leading-[1.1]">
              {section.title}
            </h2>
            <p className="mt-2 max-w-4xl text-slate-600 text-base lg:text-2xl font-normal tracking-normal leading-6 lg:leading-8">
              {section.subtitle}
            </p>
            <p className="mt-6 max-w-[50rem] border-l-[6px] border-amber-500 py-1 pl-4 text-slate-700 text-sm lg:text-xl font-medium tracking-normal leading-5 lg:leading-6">
              {section.priceDisclaimer}
            </p>
          </div>
        </div>

        <div id="brands-content" className="relative z-10 mt-8">
          <ul
            className="mx-auto grid w-full list-none grid-cols-1 justify-items-center gap-4 sm:gap-5 min-[900px]:grid-cols-3 lg:gap-5"
          >
            {featuredBrands.map((brand, index) => {
              const maxPrice = getHighestListedPrice(brand.prices)
              const formattedMaxPrice = maxPrice?.toLocaleString('en-IN', { maximumFractionDigits: 2 })
              const brandName =
                brand.name === 'Freyr Energy' ? section.freyrEnergy : brand.name

              return (
                <li
                  key={brand.file}
                  className="group relative flex min-h-[17.5rem] w-full min-w-0 flex-col overflow-hidden rounded-2xl border p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-5 lg:min-h-[22.625rem] lg:rounded-[1.5rem] lg:p-7"
                  style={{
                    borderColor: `hsl(${brand.hue} 68% 72%)`,
                    background: `linear-gradient(145deg, hsl(${brand.hue} 82% 95%), hsl(${brand.hue} 72% 96%) 48%, hsl(${brand.hue} 76% 89%))`,
                    boxShadow: `0 22px 55px -38px hsl(${brand.hue} 75% 55% / 0.8)`,
                  }}
                >
                  <svg
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-14 w-full lg:h-16"
                    viewBox="0 0 360 70"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path d="M0 42c60-28 107 7 164 0s100-34 196-5v33H0z" fill={`hsl(${brand.hue} 72% 82%)`} />
                    <path d="M0 56c72-25 122 1 190-5s112-21 170-9v28H0z" fill={`hsl(${brand.hue} 74% 77%)`} fillOpacity=".58" />
                  </svg>
                  <div className="relative z-10 flex min-h-0 flex-1 flex-col">
                    <div className="flex h-14 w-full max-w-[13rem] items-center lg:h-16 lg:max-w-[15rem]">
                      <Image
                        src={`/brands/${brand.file}`}
                        alt={brandName}
                        width={220}
                        height={100}
                        sizes="220px"
                        className="h-auto w-auto max-h-full max-w-full object-contain object-left transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                    <h3 className="mt-2 text-left text-slate-900 text-xl sm:text-2xl font-bold !tracking-tight leading-snug lg:text-[2rem]">
                      {brandName}
                    </h3>
                    <div className="mt-3 h-px w-full lg:mt-4" style={{ backgroundColor: `hsl(${brand.hue} 42% 70%)` }} aria-hidden="true" />
                    <div className="mt-3">
                      <p className="uppercase text-slate-600 text-xs font-semibold tracking-wide leading-5 lg:text-sm">
                        {section.materialTypesLabel}
                      </p>
                      <div className="mt-5 flex min-h-6 flex-wrap items-center gap-1">
                        {brand.materialTypes.length > 0 ? (
                          brand.materialTypes.map((materialType) => (
                            <span
                              key={materialType}
                              className="rounded-full border border-slate-300 bg-white/80 px-2 py-1 text-center text-xs font-semibold text-slate-700 tracking-normal"
                            >
                              {section.materialTypes[materialType]}
                            </span>
                          ))
                        ) : (
                          <span className="text-sm text-slate-800 lg:text-lg">
                            {section.currentModelsLabel}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="mt-3 flex min-h-8 flex-wrap items-center justify-start gap-2 lg:-mx-3 lg:mt-5 lg:min-h-10">
                      {index === 0 && maxPrice !== null && (
                        <span className="rounded-full bg-emerald-800 px-3 py-1.5 text-center text-xs font-semibold tracking-wide leading-5 text-white shadow-sm lg:px-4 lg:py-2.5 lg:text-base">
                          {section.topPriceLabel}
                        </span>
                      )}
                      {brand.prices.map((price) => (
                        <span
                          key={price}
                          className="w-auto max-w-full rounded-full border px-1.5 py-1.5 text-center text-[11px] font-bold leading-4 tracking-normal tabular-nums shadow-sm lg:px-5 lg:py-2.5 lg:text-base lg:leading-5"
                          style={{
                            backgroundColor: `hsl(${brand.hue} 76% 88%)`,
                            borderColor: `hsl(${brand.hue} 64% 76%)`,
                            color: `hsl(${brand.hue} 58% 25%)`,
                          }}
                        >
                          {price}
                        </span>
                      ))}
                    </div>
                  </div>
                  {maxPrice !== null && formattedMaxPrice ? (
                    <div
                      className="sr-only mt-3 flex min-h-[4.5rem] flex-col items-center justify-center rounded-xl border px-2 py-2 text-center"
                      style={{
                        borderColor: `hsl(${brand.hue} 58% 78%)`,
                        backgroundColor: `hsl(${brand.hue} 78% 94%)`,
                      }}
                    >
                      <span className="uppercase text-slate-600 text-xs font-semibold tracking-wide leading-5">
                        {section.maxListedLabel}
                      </span>
                      <span className="text-lg font-bold tabular-nums text-slate-950 sm:text-xl tracking-normal">
                        <DigitalNumber value={`₹${formattedMaxPrice}`} /><span className="ml-1 text-xs font-bold text-slate-600 tracking-normal">/Wp</span>
                      </span>
                    </div>
                  ) : (
                    <div className="mt-2 flex min-h-8 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white/70 px-2 py-1 text-center text-sm font-bold text-slate-600 tracking-normal">
                      {section.quoteRequired}
                    </div>
                  )}
                  <p className="sr-only mt-auto flex min-h-[5.5rem] items-center justify-center rounded-xl border border-slate-200 bg-white/60 px-2 py-2 text-center text-sm leading-4 text-slate-600 sm:text-sm sm:leading-5">
                    {brand.basis}
                  </p>
                </li>
              )
            })}
          </ul>
          <p
            aria-hidden="true"
            className="mt-12 select-none bg-[linear-gradient(145deg,#ff9933_0%,#ff9933_33%,#ffffff_33%,#ffffff_66%,#138808_66%,#138808_100%)] bg-clip-text text-center uppercase text-transparent drop-shadow-sm text-xs font-semibold tracking-wide leading-5"
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

function CompanyTrustSection({ t }: { t: Translations }) {
  const content = t.home.trustSections.company
  const footer = t.footer
  const addressUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(footer.address)}`

  return (
    <section
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#fbf9ff] via-[#f5f4ff] to-[#eaf2ff] px-4 py-12 text-slate-900 sm:px-6 sm:py-14 lg:px-10 lg:py-16"
      aria-labelledby="company-trust-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_14%_14%,rgba(255,255,255,0.92),transparent_38%),radial-gradient(ellipse_at_88%_22%,rgba(196,181,253,0.25),transparent_36%),radial-gradient(ellipse_at_75%_100%,rgba(147,197,253,0.22),transparent_40%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-56 w-[78%] sm:h-64 lg:h-[47%] lg:w-[43%]" aria-hidden="true">
        <Image
          src="/images/slider/slider-1.webp"
          alt=""
          fill
          sizes="(min-width: 1024px) 43vw, 78vw"
          className="object-cover object-left-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#f6f5fd]/45 to-[#f6f5fd]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#f6f5fd]" />
      </div>
      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(18rem,0.72fr)_minmax(0,1.6fr)] lg:items-center lg:gap-10">
        <div className="relative flex min-h-[25rem] flex-col justify-center pb-36 sm:min-h-[27rem] sm:pb-40 lg:min-h-[34rem] lg:pb-0">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-violet-500 bg-white/75 px-4 py-2 uppercase text-violet-700 text-xs font-bold tracking-[0.08em] leading-5 shadow-sm">
            {content.eyebrow}
          </p>
          <h2 id="company-trust-title" className="mt-5 max-w-xl text-slate-950 text-4xl sm:text-5xl lg:text-[3.25rem] font-bold !tracking-tight leading-[1.05]">
            {content.title}
          </h2>
          <div className="mt-3 h-2 w-36 -rotate-2 rounded-full bg-emerald-600" aria-hidden="true" />
          <p className="mt-4 max-w-md text-slate-700 text-base sm:text-lg font-normal tracking-normal leading-6 sm:leading-7">
            {content.description}
          </p>
          <Link
            href="/contact"
            prefetch={false}
            className="mt-7 inline-flex min-h-14 w-fit items-center gap-2 rounded-2xl bg-emerald-700 px-6 py-3 text-base font-bold text-white shadow-[0_12px_24px_-12px_rgba(5,150,105,0.75)] transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 tracking-normal"
          >
            {content.contactCta}<ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid min-w-0 gap-4">
          <div className="grid gap-3 md:grid-cols-[1.1fr_1fr]">
            <a
              href={addressUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-40 items-start gap-4 rounded-[1.35rem] border border-white/80 bg-white/75 p-5 shadow-[0_16px_34px_-24px_rgba(30,41,59,0.4)] backdrop-blur-md transition hover:bg-white sm:p-6"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-100/80 text-violet-700">
                <MapPin className="h-7 w-7" aria-hidden="true" />
              </span>
              <span className="h-24 w-px shrink-0 bg-slate-200" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block uppercase text-slate-600 text-xs font-bold tracking-wide leading-5">{content.officeLabel}</span>
                <span className="mt-1 block text-sm sm:text-base leading-6 text-slate-800">{footer.address}</span>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-violet-700 tracking-normal">
                  {content.mapCta}<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </span>
            </a>

            <div className="grid gap-3">
              <a
                href={`tel:${footer.phoneHref}`}
                className="flex min-h-[5.5rem] items-center gap-4 rounded-[1.35rem] border border-white/80 bg-white/75 p-4 shadow-[0_16px_34px_-24px_rgba(30,41,59,0.4)] backdrop-blur-md transition hover:bg-white sm:px-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-100/80 text-violet-700">
                  <Phone className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="h-12 w-px shrink-0 bg-slate-200" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block uppercase text-slate-600 text-xs font-bold tracking-wide leading-5">{content.phoneLabel}</span>
                  <span className="mt-1 block text-base sm:text-lg font-bold text-slate-900 tabular-nums"><DigitalNumber value={footer.phone} /></span>
                </span>
              </a>
              <div className="flex min-h-[5.5rem] items-center gap-4 rounded-[1.35rem] border border-white/80 bg-white/75 p-4 shadow-[0_16px_34px_-24px_rgba(30,41,59,0.4)] backdrop-blur-md sm:px-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-100/80 text-violet-700">
                  <Mail className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="h-12 w-px shrink-0 bg-slate-200" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block uppercase text-slate-600 text-xs font-bold tracking-wide leading-5">{content.emailLabel}</span>
                  <span className="mt-1 block break-all text-sm sm:text-base font-bold text-slate-900">{footer.email}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/80 bg-white/75 p-5 text-slate-800 shadow-[0_18px_38px_-24px_rgba(30,41,59,0.42)] backdrop-blur-md sm:p-6">
            <p className="text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {content.residentialServiceDescription}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 min-[1100px]:grid-cols-4">
              {content.serviceFacts.map((fact, index) => {
                const Icon = serviceFactIcons[index] ?? BadgeCheck
                const style = serviceFactStyles[index] ?? 'border-slate-200 bg-slate-50 text-slate-700'

                return (
                  <div key={fact.label} className={`flex min-w-0 items-center gap-3 rounded-2xl border p-3 sm:p-3.5 ${style}`}>
                    <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                    <span className="min-w-0">
                      <span className="block uppercase text-[0.65rem] font-bold tracking-wide leading-4">
                        {fact.label}
                      </span>
                      <span className="mt-1 block text-sm font-bold text-slate-900 tracking-normal tabular-nums">
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
    </section>
  )
}

function SolarReviewIllustration({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="relative flex h-40 items-center justify-center overflow-hidden" aria-hidden="true">
        <span className="absolute h-28 w-52 rounded-full bg-sky-100/80" />
        <Sun className="absolute right-[18%] top-1 h-14 w-14 text-amber-500" strokeWidth={1.7} />
        <div className="relative z-10 w-32 -rotate-6 rounded-xl border-2 border-[#173c7a] bg-white p-3 shadow-md">
          <div className="flex items-center justify-between text-sm font-extrabold text-[#10235a]">
            <span>BILL</span>
            <Zap className="h-5 w-5 fill-amber-400 text-amber-500" />
          </div>
          <span className="mt-2 block h-1.5 w-16 rounded-full bg-slate-300" />
          <span className="mt-1.5 block h-1.5 w-20 rounded-full bg-slate-200" />
          <div className="mt-3 flex h-7 items-end gap-1">
            <span className="h-3 w-2 rounded-t-sm bg-lime-500" />
            <span className="h-5 w-2 rounded-t-sm bg-lime-600" />
            <span className="h-4 w-2 rounded-t-sm bg-lime-500" />
            <span className="h-6 w-2 rounded-t-sm bg-lime-600" />
          </div>
        </div>
        <Leaf className="absolute bottom-3 left-[16%] h-10 w-10 -rotate-45 fill-lime-600 text-lime-700" />
        <Leaf className="absolute bottom-2 right-[16%] h-10 w-10 rotate-45 fill-lime-600 text-lime-700" />
      </div>
    )
  }

  if (index === 1) {
    return (
      <div className="relative flex h-40 items-center justify-center overflow-hidden" aria-hidden="true">
        <span className="absolute bottom-0 h-28 w-56 rounded-full bg-sky-100/80" />
        <Sun className="absolute right-[17%] top-1 h-12 w-12 text-amber-500" strokeWidth={1.7} />
        <House className="relative z-10 h-24 w-24 text-[#b86c37]" strokeWidth={1.8} />
        <span className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 -translate-y-5">
          <PanelsTopLeft className="h-10 w-14 -rotate-6 text-blue-700" strokeWidth={2.2} />
        </span>
        <BadgeIndianRupee className="absolute right-[22%] top-8 z-20 h-11 w-11 rounded-full bg-amber-300 p-1.5 text-amber-900 shadow-sm" strokeWidth={1.8} />
        <Leaf className="absolute bottom-1 left-[15%] h-9 w-9 -rotate-45 fill-lime-600 text-lime-700" />
        <Leaf className="absolute bottom-1 right-[14%] h-9 w-9 rotate-45 fill-lime-600 text-lime-700" />
      </div>
    )
  }

  return (
    <div className="relative flex h-40 items-center justify-center overflow-hidden" aria-hidden="true">
      <span className="absolute h-28 w-56 rounded-full bg-orange-100/80" />
      <ClipboardCheck className="relative z-10 h-28 w-24 rounded-xl bg-white p-2 text-[#1450e8] drop-shadow-md" strokeWidth={1.8} />
      <BadgeCheck className="absolute bottom-2 right-[23%] z-20 h-12 w-12 rounded-full bg-white text-lime-600 drop-shadow-sm" strokeWidth={2.3} />
      <Sun className="absolute right-[20%] top-1 h-10 w-10 text-amber-500" strokeWidth={1.7} />
      <Leaf className="absolute bottom-1 left-[15%] h-9 w-9 -rotate-45 fill-lime-600 text-lime-700" />
    </div>
  )
}

function WhySolarSection({ t }: { t: Translations }) {
  const content = t.home.trustSections.whySolar
  const accents = [
    { border: 'border-t-[#1450e8]', number: 'text-[#1450e8]', stroke: 'bg-sky-200' },
    { border: 'border-t-[#4cae20]', number: 'text-[#1450e8]', stroke: 'bg-lime-200' },
    { border: 'border-t-[#f28a08]', number: 'text-[#1450e8]', stroke: 'bg-orange-200' },
  ] as const

  return (
    <section
      className="relative isolate overflow-hidden bg-[#fff1df] px-4 py-12 text-[#10204b] sm:px-6 sm:py-14 lg:px-10 lg:py-16"
      aria-labelledby="why-solar-title"
    >
      <div className="pointer-events-none absolute right-0 top-0 hidden h-64 w-full max-w-3xl overflow-hidden sm:block lg:h-72" aria-hidden="true">
        <Image
          src="/images/slider/slider-1.webp"
          alt=""
          fill
          sizes="(min-width: 1280px) 55vw, (min-width: 640px) 70vw, 100vw"
          className="object-cover object-[72%_28%] opacity-35 [mask-image:linear-gradient(to_left,black,transparent_95%)]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fff1df]/20 to-[#fff1df]" />
      </div>
      <Leaf className="pointer-events-none absolute -bottom-8 -left-7 hidden h-28 w-28 -rotate-45 fill-lime-600/50 text-lime-700/40 sm:block" aria-hidden="true" />
      <Leaf className="pointer-events-none absolute -bottom-12 left-12 hidden h-24 w-24 rotate-45 fill-lime-600/40 text-lime-700/30 sm:block" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="inline-flex w-fit rounded-full bg-[#1450e8] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-sm">
            {content.eyebrow}
          </p>
          <h2 id="why-solar-title" className="mt-4 max-w-3xl font-serif text-3xl font-bold leading-[1.08] !tracking-tight text-[#10204b] sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <span className="mt-4 block h-1.5 w-20 rounded-full bg-orange-500" aria-hidden="true" />
        </div>

        <div className="mt-7 grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {content.cards.map((card, index) => {
            const accent = accents[index % accents.length]

            return (
              <article
                key={card.title}
                className={`flex h-full flex-col overflow-hidden rounded-2xl border border-orange-100 border-t-[5px] ${accent.border} bg-[#fffdf8] px-5 pb-6 pt-4 shadow-[0_10px_20px_-14px_rgba(74,49,22,0.5)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_24px_-14px_rgba(74,49,22,0.35)] sm:px-6`}
              >
                <span className={`text-4xl font-extrabold leading-none !tracking-tight ${accent.number}`} aria-label={`Review item ${String(index + 1).padStart(2, '0')}`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={`mt-2 h-1.5 w-10 -rotate-12 rounded-full ${accent.stroke}`} aria-hidden="true" />
                <SolarReviewIllustration index={index} />
                <h3 className="mt-1 font-serif text-xl font-bold leading-tight !tracking-tight text-[#10204b] sm:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#24314f] sm:text-base sm:leading-6">
                  {card.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function SolarJourneySection({ t }: { t: Translations }) {
  const content = t.home.trustSections.journey
  const journeyIcons = [FileText, MessageCircle, House, ClipboardCheck, HardHat]
  const stepPositions = ['lg:top-0', 'lg:top-[20%]', 'lg:top-[40%]', 'lg:top-[60%]', 'lg:top-[80%]']

  return (
    <section
      className="relative isolate overflow-hidden bg-[#06111d] px-4 py-10 text-white sm:px-6 sm:py-14 lg:px-10 lg:py-16"
      aria-labelledby="solar-journey-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_72%_45%,rgba(16,54,60,0.36),transparent_48%),linear-gradient(110deg,#071321_0%,#06111d_58%,#030b13_100%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(17rem,0.78fr)_minmax(0,1.22fr)] lg:items-stretch lg:gap-8">
          <div className="relative isolate flex min-h-[25rem] flex-col justify-start overflow-hidden sm:min-h-[27rem] lg:min-h-[43rem]">
            <Image
              src="/images/slider/slider-3.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 34vw, 100vw"
              className="pointer-events-none absolute inset-x-0 bottom-0 top-auto !h-[58%] object-cover object-center opacity-45 [mask-image:linear-gradient(to_bottom,transparent,black_38%)]"
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-[#06111d] via-[#06111d]/35 to-transparent" aria-hidden="true" />
            <div className="relative z-10">
              <p className="inline-flex w-fit items-center rounded-md border border-amber-500 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-amber-400 sm:text-xs">
                {content.eyebrow}
              </p>
              <h2 id="solar-journey-title" className="mt-5 max-w-lg text-4xl font-bold leading-[0.98] !tracking-tight text-white sm:text-5xl lg:text-6xl">
                From bill
                <br />
                to build.
              </h2>
              <p className="mt-4 max-w-sm text-xl font-medium leading-snug text-slate-100 sm:text-2xl">
                {content.title}
              </p>
              <span className="mt-5 block h-1 w-14 rounded-full bg-lime-400 shadow-[0_0_16px_rgba(163,255,0,0.6)]" aria-hidden="true" />
              <p className="mt-4 max-w-md text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                {content.description}
              </p>
            </div>
          </div>

          <div className="relative min-w-0 lg:py-1">
            <svg
              className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block"
              viewBox="0 0 800 700"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <filter id="solar-journey-glow" x="-40%" y="-20%" width="180%" height="140%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M650 58C790 84 774 142 424 190S130 260 650 330C790 365 775 415 185 470S135 555 650 610"
                stroke="#a3ff00"
                strokeWidth="3"
                strokeLinecap="round"
                filter="url(#solar-journey-glow)"
              />
            </svg>

            <ol className="relative grid gap-3 lg:min-h-[43rem] lg:gap-0">
              {content.steps.map((step, index) => {
                const StepIcon = journeyIcons[index % journeyIcons.length]
                const isLeftAligned = index % 2 === 0

                return (
                  <li
                    key={step.title}
                    className={`relative z-10 lg:absolute lg:w-[78%] ${stepPositions[index] ?? 'lg:top-[80%]'} ${isLeftAligned ? 'lg:left-4' : 'lg:right-4'}`}
                  >
                    <article className="relative grid min-h-[6.25rem] grid-cols-[2.5rem_3.25rem_minmax(0,1fr)] items-center gap-3 rounded-xl border border-sky-200/20 bg-[linear-gradient(110deg,rgba(24,41,54,0.96),rgba(12,27,40,0.96))] px-3 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:grid-cols-[3rem_3.5rem_minmax(0,1fr)] sm:gap-4 sm:px-4">
                      <span className="text-center text-3xl font-bold leading-none !tracking-tight text-lime-400 sm:text-4xl">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="grid h-12 place-items-center border-l border-slate-400/60 pl-3 text-slate-100 sm:h-14 sm:pl-4">
                        <StepIcon className="h-8 w-8 stroke-[1.7] sm:h-9 sm:w-9" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-base font-semibold leading-snug !tracking-tight text-white sm:text-lg">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-xs leading-5 text-slate-300 sm:text-sm sm:leading-5">
                          {step.description}
                        </p>
                      </div>
                    </article>
                    <span
                      className={`pointer-events-none absolute top-1/2 z-20 hidden h-3.5 w-3.5 -translate-y-1/2 rounded-full border-[3px] border-white bg-lime-400 shadow-[0_0_0_5px_rgba(163,255,0,0.12),0_0_18px_5px_rgba(163,255,0,0.8)] lg:block ${isLeftAligned ? '-right-[7px]' : '-left-[7px]'}`}
                      aria-hidden="true"
                    />
                  </li>
                )
              })}
            </ol>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-xl border border-amber-500 bg-[#111b22]/95 p-4 text-amber-400 shadow-[0_0_24px_rgba(245,158,11,0.08)] sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" aria-hidden="true" />
            <p className="text-xs leading-5 sm:text-sm sm:leading-5">{content.estimateNote}</p>
          </div>
          <Link
            href="/solar-calculator"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-lime-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_0_18px_rgba(163,255,0,0.22)] transition hover:bg-lime-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 tracking-normal"
          >
            {content.cta}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function QuoteTransparencySection({ t }: { t: Translations }) {
  const content = t.home.trustSections.proposal

  return (
    <section
      className="relative isolate bg-gradient-to-br from-[#f1f2f6] to-white px-4 py-14 text-slate-900 sm:px-6 lg:px-10 lg:py-18"
      aria-labelledby="quote-transparency-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_0%,rgba(129,140,248,0.13),transparent_35%),radial-gradient(ellipse_at_100%_100%,rgba(56,189,248,0.12),transparent_32%)]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
        <header className="lg:sticky lg:top-24 lg:self-start">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 uppercase text-indigo-700    text-xs font-semibold tracking-wide leading-5">{content.eyebrow}</p>
          <h2 id="quote-transparency-title" className="mt-3 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
            {content.title}
          </h2>
          <p className="mt-4 max-w-xl text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{content.description}</p>
        </header>

        <div className="space-y-4">
          <article className="rounded-xl border border-slate-200 bg-white/75 p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-300 text-slate-900">
                <FileCheck2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className=" text-slate-950 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{content.quoteHeading}</h3>
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {content.quoteItems.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl bg-slate-100/80 p-3 text-sm leading-6 text-slate-700">
                  <ClipboardCheck className="mt-1 h-4 w-4 shrink-0 text-sky-700" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white/75 p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-200 text-sky-950">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className=" text-slate-950 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{content.warrantyHeading}</h3>
            </div>
            <ul className="mt-5 grid gap-3">
              {content.warrantyItems.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl bg-slate-100/80 p-3 text-sm leading-6 text-slate-700">
                  <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-amber-700" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <div className="flex flex-col gap-3 rounded-xl bg-amber-300 p-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:p-5">
            <Link href="/#brand-section-title" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-amber-50 tracking-normal">
              {content.brandCta}<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
            <Link href="/auth/dashboard/warranty-policy" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-amber-50 tracking-normal">
              {content.warrantyCta}<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
            <Link href="/auth/dashboard/customer-enquiry" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-indigo-700 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-indigo-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700 tracking-normal">
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

function HomeHeroSlider({ t }: { t: Translations }) {
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
            <span className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
            <span className="h-14 w-px bg-gradient-to-b from-transparent via-[#137c63]/50 to-transparent" />
          </div>
          <div className="group relative flex h-[clamp(640px,56vw,760px)] w-full items-center justify-start p-4 sm:p-8 lg:pl-[9vw] lg:pr-[7vw]">
            <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(244,250,246,0.82))] shadow-md backdrop-blur-xl before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-[linear-gradient(180deg,#ff9933_0%,#ff9933_33%,#ffffff_33%,#ffffff_66%,#138808_66%,#138808_100%)] before: before:content-[''] after:absolute after:-right-14 after:-top-16 after:h-36 after:w-36 after:rounded-full after:border after:border-[#137c63]/10 after:content-[''] lg:w-1/2">
              <div className="absolute right-5 top-6 h-14 w-14 rounded-full border border-[#20a44a]/15 sm:h-20 sm:w-20" aria-hidden="true" />
              <div className="absolute right-10 top-11 h-2.5 w-2.5 rounded-full bg-[#20a44a]/70 sm:right-13 sm:top-15" aria-hidden="true" />
              <HeroSlideContent
                slide={slide}
                actions={
                  <>
                  <Link
                    href="/contact"
                    prefetch={false}
                    className="rounded-full bg-[#137c63] px-4 py-2 uppercase text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#0f5f4b] text-xs font-semibold tracking-wide leading-5"
                  >
                    {t.hero.buttons.quote}
                  </Link>
                  <Link
                    href="/solar-calculator"
                    className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 uppercase text-[#102b28] transition hover:-translate-y-0.5 hover:border-[#137c63]/40 hover:bg-white text-xs font-semibold tracking-wide leading-5"
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

function SchemeBanner({ t }: { t: Translations }) {
  const banner = t.home.schemeBanner
  const capacityGuide = banner.capacityGuide
  const digitalFontStyle = t.componentData.companyAge.digitalFontStyle
  const capacityRows = t.solarPage.capacityTable.rows

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/60 px-4 py-10 text-[#172554] sm:px-6 sm:py-12 lg:px-10 lg:py-14 ">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-white/55 blur-3xl " />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-[#ede9fe]/55 blur-3xl " />

      <div className="relative mx-auto max-w-7xl ">
        <div className="relative isolate overflow-hidden rounded-xl border border-slate-700 bg-gradient-to-br from-[#0f1d4a] via-[#172554] to-emerald-900 p-6 text-white shadow-md sm:p-8 lg:p-9">
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-amber-200/20" />
          <div className="relative z-10 grid items-end gap-x-10 gap-y-7 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div className="flex min-w-0 items-start gap-4 sm:gap-6">
              <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-2xl font-bold text-amber-200 shadow-sm sm:h-14 sm:w-14 sm:text-3xl tracking-normal">
                ₹
              </span>
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-white/10 px-4 py-2 uppercase text-amber-100 text-xs font-semibold tracking-wide leading-5">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  {banner.badge}
                </div>
                <h2 className="mt-3 text-white text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
                  {banner.title}{' '}
                  <span className="font-semibold text-amber-200 tracking-normal">{banner.titleAccent}</span>
                </h2>
                <p className="mt-3 max-w-4xl text-blue-50/90      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                  {banner.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pl-16 lg:justify-end lg:pl-0">
              <Link
                href="/contact"
                prefetch={false}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-amber-300 px-5 text-sm font-bold text-slate-950 shadow-sm transition hover:bg-amber-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 tracking-normal"
              >
                {banner.ctaPrimary}
              </Link>
              <Link
                href="/know-eligibility"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 text-sm font-bold text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 tracking-normal"
              >
                {banner.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-5 grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4 ">
          <div className="relative isolate min-h-56 overflow-hidden rounded-xl border border-emerald-300/70 bg-gradient-to-br from-[#064e3b] to-[#047857] p-5 text-white shadow-sm sm:p-6 ">
            <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-12 -z-10 h-36 w-36 rounded-full bg-lime-300/15 blur-2xl " />
            <div className="uppercase text-emerald-100 text-xs font-semibold tracking-wide leading-5">{banner.cardLabel}</div>
            <div className="mt-5 text-3xl font-bold tracking-tight text-lime-200 sm:text-4xl ">
              <DigitalNumber value={banner.subsidyAmount} />
            </div>
            <div className="mt-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-emerald-50 tracking-normal">
              {banner.max} {banner.perHome}
            </div>
          </div>

          <div className="relative flex min-h-56 items-center gap-3 overflow-hidden rounded-xl border border-amber-200 bg-gradient-to-br from-[#fffdf7] to-[#fff3d8] p-5 shadow-sm sm:p-6">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-amber-950 shadow-sm">
              <Info className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-amber-950       text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {t.subsidyNotice}
            </p>
          </div>

          <div className="relative isolate flex min-h-56 flex-col overflow-hidden rounded-xl border border-slate-700 bg-gradient-to-br from-[#172554] via-[#1e3a8a] to-[#312e81] p-5 text-white shadow-sm sm:p-6">
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 -right-10 -z-10 h-40 w-40 rounded-full bg-cyan-300/15 blur-2xl" />
            <div className="uppercase text-cyan-100 text-xs font-semibold tracking-wide leading-5">{banner.badgeSuffix}</div>
            <div className="mt-auto flex justify-center pt-5">
              <div className="w-full max-w-40 rounded-xl border border-white/15 bg-white/5 px-4 py-4 text-center">
                <span
                  className="block text-4xl font-bold leading-none tabular-nums text-cyan-200 tracking-normal"
                  style={digitalFontStyle}
                >
                  <CountdownDays
                    targetTime={TARGET_DATE.getTime()}
                    initialDays="000"
                  />
                </span>
                <span className="mt-2 block uppercase text-indigo-100 text-xs font-semibold tracking-wide leading-5">
                  {banner.daysLabel}
                </span>
              </div>
            </div>
          </div>

          <div className="relative isolate flex min-h-56 flex-col overflow-hidden rounded-xl border border-violet-200 bg-gradient-to-br from-white to-violet-100 p-5 shadow-sm sm:p-6">
            <div aria-hidden="true" className="pointer-events-none absolute -right-8 -top-10 -z-10 h-28 w-28 rounded-full bg-fuchsia-300/30 blur-2xl" />
            <div className="uppercase text-violet-800 text-xs font-semibold tracking-wide leading-5">{banner.offerLabel}</div>
            <p className="mt-auto pt-5  text-violet-950      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{banner.offerText}</p>
          </div>
        </div>

        <div className="mt-6 grid items-stretch gap-5 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] xl:gap-6 ">
          <div className="flex flex-col items-start justify-center rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {capacityGuide.description}
            </p>
            <a
              href="https://pmsuryaghar.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-emerald-800 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 tracking-normal"
            >
              {capacityGuide.portalCta}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ">
            <div className="overflow-x-auto ">
              <table className="w-full min-w-[620px] border-collapse text-left text-sm text-slate-800 [&_th]:border-b [&_th]:border-slate-200 [&_td]:border-b [&_td]:border-slate-200 [&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3 ">
                <caption className="sr-only">{t.ui.suitableRooftopCapacity}</caption>
                <thead className="bg-amber-700 font-bold text-white tracking-normal">
                  <tr className="uppercase text-xs font-semibold tracking-wide leading-5">
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
                <tbody className="divide-y divide-emerald-100 ">
                  {capacityRows.map((row) => (
                    <tr key={row.usage} className="odd:bg-white even:bg-emerald-50/70 transition-colors hover:bg-emerald-100/70 ">
                      <td className="px-5 py-5 text-[#172a28] sm:px-6 tabular-nums"><DigitalNumber value={row.usage} /></td>
                      <td className="px-5 py-5 font-bold text-[#087a61] sm:px-6 tracking-normal tabular-nums"><DigitalNumber value={row.capacity} /></td>
                      <td className="px-5 py-5 text-slate-500 sm:px-6 tabular-nums"><DigitalNumber value={row.tag} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="bg-[#fff4e5] px-5 py-4 text-slate-600 sm:px-6      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {capacityGuide.notice}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
