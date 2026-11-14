'use client'

import Image from 'next/image'
import { useLocale } from '@/lib/LocaleContext'

const brandImages = [
  { file: 'adani-solar.png', name: 'Adani Solar', hue: 160, prices: ['₹21.5–34/Wp'], basis: 'Non-DCR to DCR retail examples.' },
  { file: 'tata-power-solar.png', name: 'Tata Power Solar', hue: 225, prices: ['₹26–32/Wp'], basis: 'Dealer/market listings; varies by model and DCR status.' },
  { file: 'waaree-energies.png', name: 'Waaree Energies', hue: 29, prices: ['₹17.4/Wp · non-DCR', '₹27.9/Wp · DCR'], basis: 'Official-store examples; listed prices exclude GST.' },
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

export default function Brands() {
  const { t } = useLocale()
  const section = t.home.brandSection

  return (
    <section
      className="relative isolate overflow-hidden bg-[linear-gradient(120deg,#312e81_0%,#4c1d95_55%,#701a75_100%)] px-4 py-16 sm:px-6 lg:px-10 lg:py-20"
      aria-labelledby="brand-section-title"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl">
        <header className="mb-7 border-t border-white/15 pt-5 sm:mb-8 sm:pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
              <p className="inline-flex items-center gap-2 rounded-full border border-violet-200/20 bg-violet-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-violet-100">
                <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.9)]" aria-hidden="true" />
                {section.eyebrow}
              </p>
              <h2 id="brand-section-title" className="mt-4 max-w-3xl text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
                {section.title}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                {section.subtitle}
              </p>
            </div>
            <p className="inline-flex w-fit shrink-0 items-center gap-2 rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-sm font-semibold text-violet-100">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-300/15 text-violet-200" aria-hidden="true">
                ↓
              </span>
              {section.priceOrder}
            </p>
          </div>
          <p className="mt-4 max-w-3xl border-l-2 border-amber-300/70 pl-4 text-xs leading-5 text-slate-300 sm:text-sm sm:leading-6">
            {section.priceDisclaimer}
          </p>
        </header>

        <ul className="flex list-none flex-wrap items-stretch justify-center gap-4 sm:gap-5">
          {sortedBrands.map((brand, index) => {
            const maxPrice = getHighestListedPrice(brand.prices)
            const formattedMaxPrice = maxPrice?.toLocaleString('en-IN', { maximumFractionDigits: 2 })

            return (
              <li
                key={brand.file}
                className="group relative flex h-full w-full max-w-[18rem] min-w-0 flex-col overflow-hidden rounded-[1.25rem] border p-3 shadow-[0_22px_55px_-38px_rgba(0,0,0,0.75)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_65px_-38px_rgba(0,0,0,0.85)] sm:rounded-[1.5rem] sm:p-4"
                style={{
                  borderColor: `hsl(${brand.hue} 68% 72%)`,
                  background: `linear-gradient(145deg, hsl(${brand.hue} 82% 95%), #fff 48%, hsl(${brand.hue} 76% 89%))`,
                  boxShadow: `0 22px 55px -38px hsl(${brand.hue} 75% 55% / 0.8)`,
                }}
              >
                <div
                  className="relative flex h-24 items-center justify-center overflow-hidden rounded-xl border border-white/80 shadow-inner sm:h-28 sm:p-2"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, white, hsl(${brand.hue} 75% 96%) 78%)`,
                    boxShadow: `inset 0 0 0 1px hsl(${brand.hue} 55% 90%)`,
                  }}
                >
                  <Image
                    src={`/brands/${brand.file}`}
                    alt={brand.name}
                    width={150}
                    height={150}
                    sizes="160px"
                    unoptimized
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="sr-only">
                  {brand.name}
                </h3>
                <div className="mt-2 flex min-h-[2.5rem] flex-col items-center justify-center gap-1">
                  {index === 0 && maxPrice !== null && (
                    <span className="rounded-full bg-slate-950 px-2.5 py-1 text-center text-[9px] font-black uppercase leading-3 tracking-[0.12em] text-white shadow-sm">
                      {section.topPriceLabel}
                    </span>
                  )}
                  {brand.prices.map((price) => (
                    <span
                      key={price}
                      className="w-full max-w-[14rem] rounded-full border px-2 py-1 text-center text-[9px] font-bold leading-4 sm:text-[10px]"
                      style={{
                        backgroundColor: `hsl(${brand.hue} 76% 92%)`,
                        borderColor: `hsl(${brand.hue} 64% 76%)`,
                        color: `hsl(${brand.hue} 58% 25%)`,
                      }}
                    >
                      {price}
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
                    <span className="text-[9px] font-black uppercase tracking-[0.12em] text-slate-600">
                      {section.maxListedLabel}
                    </span>
                    <span className="text-lg font-black tabular-nums text-slate-950 sm:text-xl">
                      ₹{formattedMaxPrice}<span className="ml-1 text-xs font-bold text-slate-600">/Wp</span>
                    </span>
                  </div>
                ) : (
                  <div className="mt-2 flex min-h-8 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white/70 px-2 py-1 text-center text-[10px] font-bold text-slate-600">
                    {section.quoteRequired}
                  </div>
                )}
                <p className="sr-only mt-auto flex min-h-[5.5rem] items-center justify-center rounded-xl border border-white/70 bg-white/60 px-2 py-2 text-center text-[10px] leading-4 text-slate-600 sm:text-[11px] sm:leading-5">
                  {brand.basis}
                </p>
              </li>
            )
          })}
        </ul>
        <p className="pointer-events-none mt-10 select-none text-center text-2xl font-black uppercase tracking-[0.18em] text-white/20 sm:mt-12 sm:text-4xl lg:text-5xl">
          {section.moreBrandsAvailable}
        </p>
      </div>
    </section>
  )
}
