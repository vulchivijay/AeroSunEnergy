import { DigitalNumber } from "@/app/components/ui/DigitalNumber";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Slider from "@/app/components/ui/Slider";
import OptimizedImage from "@/app/components/ui/OptimizedImage";
import { HeroSlideContent, type HeroSlideData } from "@/app/components/ui/HeroSlideContent";
import { Info } from "lucide-react";
import CountdownDays from "@/app/components/home/CountdownDays";
import type { Translations } from '@/lib/LocaleContext';

type Slide = HeroSlideData & { panelClass: string }

function HomeHeroSlider({ t }: { t: Translations }) {
  const slides: Slide[] = t.home.heroSlider

  return (
    <Slider autoplay interval={5000} pauseOnHover ariaLabel={t.home.heroSliderAriaLabel}>
      {slides.map((slide, index) => (
        <div key={slide.title} className="relative h-full w-full overflow-hidden bg-gradient-to-br from-white to-[#f1f2f6]">
          <div className="absolute inset-0">
            <OptimizedImage
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 flex-col gap-2 lg:flex" aria-hidden="true">
            <span className="h-14 w-px bg-gradient-to-b from-transparent via-[#137c63]/50 to-transparent" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
            <span className="h-14 w-px bg-gradient-to-b from-transparent via-[#137c63]/50 to-transparent" />
          </div>
          <div className="group relative z-10 flex h-full w-full items-center justify-start p-3 sm:p-8 lg:pl-[7vw] lg:pr-[5vw]">
            <div className="relative w-full max-w-[720px] overflow-hidden rounded-xl border border-slate-200 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(244,250,246,0.78))] shadow-md backdrop-blur-md before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-[linear-gradient(180deg,#ff9933_0%,#ff9933_33%,#ffffff_33%,#ffffff_66%,#138808_66%,#138808_100%)] before: before:content-[''] after:absolute after:-right-14 after:-top-16 after:h-36 after:w-36 after:rounded-full after:border after:border-[#137c63]/10 after:content-[''] lg:w-1/2">
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
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/60 px-4 py-10 text-[#172554] sm:px-6 sm:py-12 lg:px-10 lg:py-14">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-white/55 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-[#ede9fe]/55 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="relative isolate overflow-hidden rounded-xl border border-slate-700 bg-gradient-to-br from-[#0f1d4a] via-[#172554] to-emerald-900 p-6 text-white shadow-md sm:p-8 lg:p-9">
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-amber-200/20" />
          <div className="relative z-10 grid items-end gap-x-10 gap-y-7 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div className="flex min-w-0 items-start gap-4 sm:gap-6">
              <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-2xl font-bold text-amber-200 shadow-sm sm:h-14 sm:w-14 sm:text-3xl tracking-normal">
                ₹
              </span>
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-white/10 px-4 py-2 uppercase text-amber-100 text-xs font-semibold tracking-wide leading-5">
                  <span aria-hidden="true" className="shrink-0 h-2 w-2 rounded-full bg-current" />
                  {banner.badge}
                </div>
                <h2 className="mt-3 text-white text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
                  {banner.title}{' '}
                  <span className="font-semibold text-amber-200 tracking-normal">{banner.titleAccent}</span>
                </h2>
                <p className="mt-3 max-w-4xl text-blue-50/90 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
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

        <div className="mt-5 grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="relative isolate overflow-hidden rounded-xl border border-emerald-300/70 bg-gradient-to-br from-[#064e3b] to-[#047857] p-5 text-white shadow-sm sm:p-6">
            <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-12 -z-10 h-36 w-36 rounded-full bg-lime-300/15 blur-2xl" />
            <div className="uppercase text-emerald-100 text-xs font-semibold tracking-wide leading-5">{banner.cardLabel}</div>
            <div className="mt-5 text-3xl font-bold tracking-tight text-lime-200 sm:text-4xl">
              <DigitalNumber value={banner.subsidyAmount} />
            </div>
            <div className="before:inline-block before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] before:mr-2 mt-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-emerald-50 tracking-normal">
              {banner.max} {banner.perHome}
            </div>
          </div>

          <div className="relative flex items-center gap-3 overflow-hidden rounded-xl border border-amber-200 bg-gradient-to-br from-[#fffdf7] to-[#fff3d8] p-5 shadow-sm sm:p-6">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-amber-950 shadow-sm">
              <Info className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-amber-950 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {t.subsidyNotice}
            </p>
          </div>

          <div className="relative isolate flex flex-col overflow-hidden rounded-xl border border-slate-700 bg-gradient-to-br from-[#172554] via-[#1e3a8a] to-[#312e81] p-5 text-white shadow-sm sm:p-6">
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
                <span className="mt-2 block uppercase text-indigo-100 text-xs tracking-wide leading-5">
                  {banner.daysLabel}
                </span>
              </div>
            </div>
          </div>

          <div className="relative isolate flex flex-col overflow-hidden rounded-xl border border-violet-200 bg-gradient-to-br from-white to-violet-100 p-5 shadow-sm sm:p-6">
            <div aria-hidden="true" className="pointer-events-none absolute -right-8 -top-10 -z-10 h-28 w-28 rounded-full bg-fuchsia-300/30 blur-2xl" />
            <div className="uppercase text-violet-800 text-xs font-semibold tracking-wide leading-5">{banner.offerLabel}</div>
            <p className="mt-auto pt-5 text-violet-950 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{banner.offerText}</p>
          </div>
        </div>

        <div className="mt-6 grid items-stretch gap-5 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] xl:gap-6">
          <div className="flex flex-col items-start justify-center rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {capacityGuide.description}
            </p>
            <a
              href="https://pmsuryaghar.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-emerald-800 px-5 py-3 text-sm text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 tracking-normal"
            >
              {capacityGuide.portalCta}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] border-collapse text-left text-sm text-slate-800 [&_th]:border-b [&_th]:border-slate-200 [&_td]:border-b [&_td]:border-slate-200 [&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3">
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
                <tbody className="divide-y divide-emerald-100">
                  {capacityRows.map((row) => (
                    <tr key={row.usage} className="odd:bg-white even:bg-emerald-50/70 transition-colors hover:bg-emerald-100/70">
                      <td className="px-5 py-5 text-[#172a28] sm:px-6 tabular-nums"><DigitalNumber value={row.usage} /></td>
                      <td className="px-5 py-5 font-bold text-[#087a61] sm:px-6 tracking-normal tabular-nums"><DigitalNumber value={row.capacity} /></td>
                      <td className="px-5 py-5 text-slate-500 sm:px-6 tabular-nums"><DigitalNumber value={row.tag} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="bg-[#fff4e5] px-5 py-4 text-slate-600 sm:px-6 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {capacityGuide.notice}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HomeHeroSections({ t }: { t: Translations }) {

  return (
    <>
      <HomeHeroSlider t={t} />
      <SchemeBanner t={t} />
    </>
  )
}
