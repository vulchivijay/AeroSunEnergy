import { getAccentOrDefault } from "@/lib/utils/utils";
import { FeatureCard, SuitableForInfoPanel, RooftopSolarContentBlock, SectionEyebrow, SolarBenefitCard, solarOfferingImages, TrustRibbon } from "@/app/components/ui";
import { ArrowLeftRight, BadgeIndianRupee, BatteryCharging, MapPin, Network, ShieldCheck, Sun } from "lucide-react";
import type { Translations } from '@/lib/LocaleContext';

function SystemTypeIllustration({ index }: { index: number }) {
  const isOffGrid = index === 1
  const isHybrid = index === 2

  return (
    <div className={`relative mx-[-0.5rem] h-[13.5rem] overflow-hidden sm:mx-0 ${index === 0 ? 'bg-[#e6f0dc]' : isOffGrid ? 'bg-[#ffedc8]' : 'bg-[#dff0e9]'}`} aria-hidden="true">
      <span className="absolute left-4 top-3 z-20 text-4xl font-extrabold leading-none !tracking-tight text-[#1450e8]">
        {String(index + 1).padStart(2, '0')}
      </span>
      <svg viewBox="0 0 360 190" className="h-full w-full" fill="none">
        <defs>
          <clipPath id={`system-type-panel-grid-${index}`}>
            <path d="m77 107 35-39h64l34 39H77Z" />
          </clipPath>
        </defs>
        <circle cx="292" cy="42" r="18" fill="#FFC928" />
        <path d="M292 9V2m0 80v-7m-33-33h-7m82 0h-7m-58-23-6-6m58 58-6-6m0-46 6-6m-52 58 6-6" stroke="#FFB80E" strokeWidth="4" strokeLinecap="round" />

        <path d="M18 157c8-13 22-14 32-1 6-15 24-19 35-3 9-13 25-11 30 3h235v26H18v-25Z" fill="#8DBB58" />
        <path d="M44 166c6-11 18-11 24 0m-8 0c7-13 21-13 28 0m180 0c6-12 19-13 26-1m-7 1c7-12 20-12 27 0" stroke="#5B963C" strokeWidth="5" strokeLinecap="round" />

        <path d="m66 116 66-58 72 58" fill="#A5653B" stroke="#794726" strokeWidth="5" strokeLinejoin="round" />
        <path d="M78 112 132 66l58 46v52H78v-52Z" fill="#FFF9E8" stroke="#B77A4E" strokeWidth="4" />
        <path d="M87 116h30v25H87zm77 0h17v18h-17z" fill="#A9DDF1" stroke="#9A6038" strokeWidth="3" />
        <path d="M127 124h25v40h-25z" fill="#B56B3C" stroke="#8F522D" strokeWidth="3" />
        <circle cx="146" cy="145" r="2" fill="#FDE68A" />

        <g transform="translate(-8 0)">
          <path d="m77 107 35-39h64l34 39H77Z" fill="#1683C5" />
          <g clipPath={`url(#system-type-panel-grid-${index})`} stroke="#D7F2FF" strokeWidth="2">
            <path d="M88 112 126 62M112 112 150 62M136 112 174 62M160 112 198 62M70 82H220M70 94H220M70 104H220" />
          </g>
          <path d="m77 107 35-39h64l34 39H77Z" fill="none" stroke="#23486B" strokeWidth="4" strokeLinejoin="round" />
        </g>

        <path d="M197 143h44" stroke="#16874B" strokeWidth="5" strokeLinecap="round" />
        <rect x="187" y="130" width="31" height="28" rx="4" fill="white" stroke="#38556C" strokeWidth="3" />
        <path d="m202 135-5 9h6l-3 8 9-11h-6l3-6h-4Z" fill="#37B764" />

        {isOffGrid || isHybrid ? (
          <>
            <path d="M218 144h16" stroke="#16874B" strokeWidth="5" strokeLinecap="round" />
            <g transform="translate(-16 0)">
              <rect x="250" y="128" width="45" height="35" rx="6" fill="white" stroke="#16874B" strokeWidth="4" />
              <rect x="295" y="139" width="5" height="13" rx="2" fill="#16874B" />
              <rect x="258" y="136" width="28" height="19" rx="3" fill="#B8E5AE" />
              <path d="M263 141h18m-18 5h18" stroke="#16874B" strokeWidth="3" strokeLinecap="round" />
            </g>
          </>
        ) : null}

        {isHybrid ? (
          <path d="M284 144H303" stroke="#16874B" strokeWidth="4" strokeLinecap="round" />
        ) : !isOffGrid ? (
          <path d="M218 144H303" stroke="#16874B" strokeWidth="4" strokeLinecap="round" />
        ) : null}

        <path
          d="M318 82L302 164M334 82L350 164M298 82H354M312 101H340M308 122H344M304 143H348M302 164H350M312 101L344 122M340 101L308 122M308 122L348 143M344 122L304 143M304 143L350 164M348 143L302 164M302 74V82M326 72V82M350 74V82"
          stroke={isOffGrid ? '#87929B' : '#344A5E'}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {isOffGrid ? (
          <path d="m310 76 32 32m0-32-32 32" stroke="#E24B3B" strokeWidth="7" strokeLinecap="round" />
        ) : (
          <path
            d={isHybrid ? 'M289 140L285 144L289 148M297 140L301 144L297 148' : 'M255 139L250 144L255 149M265 139L270 144L265 149'}
            stroke="#F59E0B"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </div>
  )
}

export function HomeSolarOfferingsSections({ t }: { t: Translations }) {
  const home = t.home

  const offer = home.offer

  const solarCards = offer.cards

  const systemTypes = home.systemTypes

  const whySolar = home.whySolar
  return (
    <>
      <TrustRibbon />
      <section className="bg-gradient-to-br from-[#f1f2f6] to-white px-4 py-12 sm:px-6 lg:px-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 gap-4">
            <SectionEyebrow>{offer.eyebrow}</SectionEyebrow>
            <h2 className="mt-3 text-slate-900 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
              {offer.title}
            </h2>
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
                  descriptionClassName="line-clamp-3"
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
                  descriptionClassName="line-clamp-3"
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
                  <SuitableForInfoPanel key={panel.title} title={panel.title} content={panel.content} />
                ))}
              </div>
            </div>
            <div role="region" aria-labelledby="system-types-title" className="relative isolate mt-12 scroll-mt-24 overflow-hidden rounded-[2rem] px-4 py-8 sm:px-7 sm:py-10 lg:px-9">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_0%,rgba(255,230,167,0.42),transparent_35%),radial-gradient(ellipse_at_100%_0%,rgba(147,171,89,0.15),transparent_24%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,224,153,0.28),transparent_48%)]" aria-hidden="true" />
              <Sun className="pointer-events-none absolute left-1/2 top-5 hidden h-6 w-6 -translate-x-[7.2rem] text-amber-400 sm:block" aria-hidden="true" />
              <Sun className="pointer-events-none absolute left-1/2 top-5 hidden h-6 w-6 translate-x-[6.2rem] text-amber-400 sm:block" aria-hidden="true" />
              <svg className="pointer-events-none absolute right-0 top-0 h-20 w-40 text-[#78934d]/70" viewBox="0 0 160 80" fill="none" aria-hidden="true">
                <path d="M92 0c-2 23 9 37 31 42C128 20 115 5 92 0Z" fill="currentColor" />
                <path d="M122 0c-1 24 11 38 32 43C157 20 145 5 122 0Z" fill="currentColor" />
                <path d="M143 13c-1 22 5 37 17 45V16c-6-3-11-4-17-3Z" fill="currentColor" />
              </svg>

              <div className="relative z-10 mx-auto w-full max-w-none">
                <SectionEyebrow>{home.systemTypeSection.eyebrow}</SectionEyebrow>
                <h3 id="system-types-title" className="mt-3 font-sans text-3xl font-bold leading-tight !tracking-tight text-[#0b4327] sm:text-4xl lg:text-[2.5rem]">
                  {home.systemTypeSection.title}
                </h3>
                <span className="mx-auto mt-3 block h-1.5 w-36 -rotate-2 rounded-full bg-amber-400" aria-hidden="true" />
              </div>

              <div className="relative z-10 mt-7 grid items-stretch gap-4 lg:grid-cols-3 lg:gap-5">
                {systemTypes.map((item, index) => {
                  const featureIcons = [
                    [ArrowLeftRight, BadgeIndianRupee],
                    [BatteryCharging, MapPin],
                    [Network, ShieldCheck],
                  ]
                  const cardStyles = [
                    {
                      background: 'bg-[linear-gradient(145deg,#e9f3e3,#f7f8e9)]',
                      border: 'border-emerald-100',
                      icon: 'bg-amber-100 text-emerald-900',
                    },
                    {
                      background: 'bg-[linear-gradient(145deg,#fff0cf,#fff8e9)]',
                      border: 'border-amber-100',
                      icon: 'bg-emerald-100 text-emerald-900',
                    },
                    {
                      background: 'bg-[linear-gradient(145deg,#e0f0eb,#f0f7ef)]',
                      border: 'border-teal-100',
                      icon: 'bg-amber-100 text-emerald-900',
                    },
                  ]
                  const style = cardStyles[index % cardStyles.length]
                  const icons = featureIcons[index % featureIcons.length]

                  return (
                    <article
                      key={item.title}
                      className={`flex h-full flex-col overflow-hidden rounded-[1.5rem] border ${style.border} ${style.background} p-4 shadow-[0_10px_18px_-12px_rgba(47,54,34,0.45)] sm:p-5 lg:p-6`}
                    >
                      <SystemTypeIllustration index={index} />
                      <h4 className="mt-1 flex min-h-12 items-center justify-center rounded-full bg-[#155d38] px-3 py-2 text-center font-semibold text-xl !tracking-tight text-white">
                        {item.title}
                      </h4>
                      <ul className="mt-4 grid flex-1 content-start gap-3">
                        {item.content.map((description, featureIndex) => {
                          const FeatureIcon = icons[featureIndex % icons.length]

                          return (
                            <li key={description} className="flex items-start gap-3">
                              <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-full ${style.icon}`}>
                                <FeatureIcon className="h-8 w-8" strokeWidth={2} aria-hidden="true" />
                              </span>
                              <p className="text-base leading-6 text-[#17264a] sm:text-md sm:leading-6">
                                {description}
                              </p>
                            </li>
                          )
                        })}
                      </ul>
                    </article>
                  )
                })}
              </div>
            </div>
            <div className="relative isolate mt-12 overflow-hidden rounded-[2rem] p-5 sm:p-7 lg:p-9">
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
      </section>
    </>
  )
}
