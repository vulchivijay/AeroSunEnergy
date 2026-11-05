'use client'

import { useLocale } from '@/lib/LocaleContext'
import { BankEMICalculator } from './components/forms/BankEMICalculator'
import { SolarEstimation } from './components/forms/SolarEstimation'
import About from './components/sections/About'
import {
  BenefitCard,
  CapacityTable,
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

function RecognitionHighlight() {
  const { t } = useLocale()
  const recognitions = (t.home?.recognition ?? [
    {
      title: 'Udyam / MSME',
      subtitle: 'Recognized enterprise',
      badge: 'Certified',
      icon: '🏛️',
      accent: 'bg-[#20A44A]/38',
      glow: 'shadow-[0_0_30px_rgba(32,164,74,0.38)]',
      ring: 'border-[#90d2a2]',
      text: 'Micro, Small & Medium Enterprise recognition supporting growth-ready clean energy operations.',
    },
    {
      title: 'DPIIT Startup India',
      subtitle: 'Startup recognition',
      badge: 'Approved',
      icon: '🚀',
      accent: 'bg-[#f59e0b]/38',
      glow: 'shadow-[0_0_30px_rgba(245,158,11,0.38)]',
      ring: 'border-[#e6b35d]',
      text: 'Official startup recognition for innovation-led renewable energy entrepreneurship and expansion.',
    },
  ]) as Array<{
    title: string
    subtitle: string
    badge: string
    icon: string
    accent: string
    glow: string
    ring: string
    text: string
  }>

  return (
    <section className="relative overflow-hidden bg-[#f7f9f5] px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
      <div className='mx-auto max-w-7xl '>
        <div className="relative overflow-hidden rounded-[38px] border border-[#cfe8d2] bg-[radial-gradient(circle_at_top_left,rgba(13,122,53,0.2),transparent_18%),radial-gradient(circle_at_bottom_right,rgba(183,95,0,0.2),transparent_22%),linear-gradient(135deg,#eaf6ee_0%,#d7ecdf_35%,#fdf1d8_100%)] shadow-[0_32px_90px_-40px_rgba(13,122,53,0.45)]">
          <div className="absolute -left-16 top-7 h-52 w-52 rounded-full bg-[#20A44A]/50 blur-3xl" aria-hidden="true" />
          <div className="absolute -right-16 bottom-0 h-60 w-60 rounded-full bg-[#F59E0B]/50 blur-3xl" aria-hidden="true" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,37,31,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,37,31,0.06)_1px,transparent_1px)] bg-size-[34px_34px]" aria-hidden="true" />
          <div className="relative z-10 flex flex-col gap-6 p-5 sm:p-6 lg:flex-row lg:items-end lg:justify-between lg:p-8">
            <div className="max-w-2xl">
              <p className="inline-flex rounded-full bg-amber-500 text-[12px] font-black uppercase tracking-[0.38em] text-amber-950 py-1 px-2">{t.home?.recognitionHeader?.badge ?? 'Recognition'}</p>
              <h2 className="mt-3 text-3xl font-black tracking-[0.07em] text-[#18251F] sm:text-4xl">
                {t.home?.recognitionHeader?.title ?? 'Government-backed credibility for a fast-moving clean energy brand'}
              </h2>
            </div>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#d9f0df] bg-white/80 px-4 py-2.5 text-[12px] font-black uppercase tracking-[0.28em] text-[#1d5f3f] backdrop-blur-sm">
              <span className="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-[#20A44A] shadow-[0_0_18px_rgba(32,164,74,0.9)]" />
              {t.home?.recognitionHeader?.status ?? 'Verified credentials'}
            </div>
          </div>
          <div className="relative z-10 grid gap-5 p-5 pb-7 sm:p-6 lg:grid-cols-[1.1fr_1.1fr] lg:p-8 lg:pb-10">
            {recognitions.map((item) => (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-[30px] border bg-white/80 p-5 shadow-[0_20px_45px_-30px_rgba(24,37,31,0.35)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_55px_-30px_rgba(24,37,31,0.45)] ${item.ring}`}
              >
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-linear-to-r ${item.accent}`} />
                <div className="flex items-center justify-between gap-3">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${item.accent} text-2xl text-white ${item.glow}`}>
                    {item.icon}
                  </div>
                  <span className={`rounded-full border border-[#e7f4ea] ${item.accent} px-2.5 py-1 text-[12px] font-black uppercase tracking-[0.22em] text-[#18251F]`}>
                    {item.badge}
                  </span>
                </div>
                <div className="mt-5">
                  <h3 className="text-2xl font-black tracking-tighter text-[#18251F]">{item.title}</h3>
                  <p className="mt-1 text-md text-[#335247]">{item.subtitle}</p>
                </div>
                <div className="mt-5 rounded-2xl border border-[#e9efe9] bg-[#f8faf8] p-3 text-md leading-6 text-[#234136]">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default function Home() {
  const { t } = useLocale()

  const offer = t.home?.offer ?? {
    eyebrow: 'What We Offer',
    title: 'Expertise End-to-End Solar Solutions',
    description: 'We have rich experience in solar rooftop 1 KW to megawatt solar power plants — including solar hybrid systems, solar hot water, solar street lights, solar fencing, solar agriculture pump sets & any solar power services.',
    cards: [
      {
        title: 'Solar Rooftop Systems',
        description: 'On-grid power plants for homes and businesses.',
        points: ['On-grid, off-grid and hybrid configurations', 'Net metering with state DISCOM', 'PM Surya Ghar subsidy assistance', 'TATA Power Solar premium panels'],
        accent: 'emerald',
      },
    ],
  }

  const solarCards = offer.cards ?? []
  const systemTypes = t.home?.systemTypes ?? [
    {
      title: 'On-Grid Solar System',
      accent: 'emerald',
      content: ['Grid-connected with net metering — export surplus power to the grid and earn credits.', 'The most economical option, with no batteries required.'],
    },
  ]
  const whySolar = t.home?.whySolar ?? []
  const subsidy = t.home?.subsidy ?? {
    eyebrow: 'Government of India Scheme',
    title: 'PM Surya Ghar: Muft Bijli Yojana Subsidy',
    description: 'Central-government subsidy you can claim on your rooftop solar — AeroSun Energy files the entire application for you.',
    cards: [],
  }
  const wind = t.home?.wind ?? {}
  const hybrid = t.home?.hybrid ?? {}

  return (
    <main>
      <HomeHeroSlider />
      <SchemeBanner />
      {/* Solar Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
        <div className="mb-8">
          <SectionEyebrow>{offer.eyebrow ?? 'What We Offer'}</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-black tracking-tighter text-slate-900 sm:text-4xl">
            {offer.title ?? 'Expertise End-to-End Solar Solutions'}
          </h2>
        </div>
        
        <div className="mb-10 text-lg leading-8 text-slate-700">
          {offer.description ?? 'We have rich experience in solar rooftop 1 KW to megawatt solar power plants — including solar hybrid systems, solar hot water, solar street lights, solar fencing, solar agriculture pump sets & any solar power services.'}
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {solarCards.map((card: any) => (
            <FeatureCard
              key={card.title}
              title={card.title}
              description={card.description}
              points={card.points}
              accent={card.accent}
            />
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {((t.home?.moreSolarCards ?? []) as any[]).map((card: any) => (
            <FeatureCard
              key={card.title}
              title={card.title}
              description={card.description}
              points={card.points}
              accent={card.accent}
            />
          ))}
        </div>
        
        <div className="mt-12 rounded-4xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
          <div className="mb-6">
            <SectionEyebrow>{t.home?.rooftopSolar?.eyebrow ?? 'Rooftop Solar'}</SectionEyebrow>
            <h3 className="mt-3 text-3xl font-black tracking-tighter text-slate-900">
              {t.home?.rooftopSolar?.title ?? 'Solar Rooftop Systems'}
            </h3>
          </div>

          <p className="max-w-4xl text-lg leading-8 text-slate-700">
            {t.home?.rooftopSolar?.description ?? 'Solar rooftop systems generate electricity using solar panels installed on your rooftop. Sized to your power needs and usage, they cut your dependence on grid power and significantly lower your monthly electricity bills.'}
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {(t.home?.rooftopSolar?.benefits ?? []).map((benefit: any) => (
              <BenefitCard key={benefit.title} title={benefit.title} description={benefit.description} />
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {(t.home?.rooftopSolar?.panels ?? []).map((panel: any) => (
              <InfoPanel key={panel.title} title={panel.title} accent={panel.accent} content={panel.content} />
            ))}
          </div>
        </div>
        
        <div className="mt-12 rounded-4xl border border-slate-200 bg-white p-6 lg:p-8">
          <div className="mb-6">
            <SectionEyebrow>{t.home?.systemTypeSection?.eyebrow ?? 'System Types'}</SectionEyebrow>
            <h3 className="mt-3 text-3xl font-black tracking-tighter text-slate-900">
              {t.home?.systemTypeSection?.title ?? 'There are three main types of solar rooftop systems'}
            </h3>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {(systemTypes as any[]).map((item: any) => (
              <InfoPanel key={item.title} title={item.title} accent={item.accent} content={item.content} />
            ))}
          </div>
        </div>
        
        <div className="mt-12 rounded-4xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
          <div className="mb-6">
            <SectionEyebrow>{t.home?.whySolarSection?.eyebrow ?? 'Why Solar'}</SectionEyebrow>
            <h3 className="mt-3 text-3xl font-black tracking-tighter text-slate-900">
              {t.home?.whySolarSection?.title ?? 'Why you have to switch to solar today?'}
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {(whySolar as any[]).map((item: any) => (
              <BenefitCard key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
        
        <div className="mt-12 rounded-4xl border border-emerald-200 bg-emerald-50 p-6 lg:p-8">
          <div className="mb-6">
            <SectionEyebrow>{subsidy.eyebrow ?? 'Government of India Scheme'}</SectionEyebrow>
            <h3 className="mt-3 text-3xl font-black tracking-tighter text-slate-900">
              {subsidy.title ?? 'PM Surya Ghar: Muft Bijli Yojana Subsidy'}
            </h3>
          </div>

          <p className="max-w-4xl text-lg leading-8 text-slate-700">
            {subsidy.description ?? 'Central-government subsidy you can claim on your rooftop solar — AeroSun Energy files the entire application for you.'}
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {(subsidy.cards ?? []).map((item: any) => (
              <BenefitCard key={item.title} title={item.title} description={item.description} />
            ))}
          </div>

          <div className="mt-8">
            <CapacityTable />
          </div>
        </div>
      </section>
      {/* Wind Energy Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
        <div className="mb-8">
          <WindSectionEyebrow>{wind.eyebrow ?? 'Wind Energy'}</WindSectionEyebrow>
          <h2 className="mt-3 text-3xl font-black tracking-tighter text-slate-900 sm:text-4xl">
            {wind.title ?? 'Wind power solutions for a greener grid'}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {(wind.cards ?? []).map((card: any) => (
            <WindFeatureCard
              key={card.title}
              title={card.title}
              description={card.description}
              points={card.points}
              accent={card.accent}
            />
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {(wind.benefits ?? []).map((item: any) => (
            <WindBenefitCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {(wind.panels ?? []).map((panel: any) => (
            <WindInfoPanel key={panel.title} title={panel.title} accent={panel.accent} content={panel.content} />
          ))}
        </div>

        <div className="mt-8">
          <WindCapacityTable rows={wind.capacity ?? []} />
        </div>
      </section>
      {/* Hybrid Energy Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
        <div className="mb-8">
          <HybridSectionEyebrow>{hybrid.eyebrow ?? 'Hybrid Energy'}</HybridSectionEyebrow>
          <h2 className="mt-3 text-3xl font-black tracking-tighter text-slate-900 sm:text-4xl">
            {hybrid.title ?? 'Solar + Wind hybrid systems for dependable power'}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {(hybrid.cards ?? []).map((card: any) => (
            <HybridFeatureCard
              key={card.title}
              title={card.title}
              description={card.description}
              points={card.points}
              accent={card.accent}
            />
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {(hybrid.benefits ?? []).map((item: any) => (
            <HybridBenefitCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {(hybrid.panels ?? []).map((panel: any) => (
            <HybridInfoPanel key={panel.title} title={panel.title} accent={panel.accent} content={panel.content} />
          ))}
        </div>

        <div className="mt-8">
          <HybridTable rows={hybrid.table ?? []} />
        </div>
      </section>
      <About />
      <RecognitionHighlight />
      <SolarEstimation />
      <BankEMICalculator />
    </main>
  )
}
