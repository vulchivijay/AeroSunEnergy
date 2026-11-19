'use client'

import Image from 'next/image'
import { DigitalNumber } from '@/app/components/ui/DigitalNumber'
import { useLocale } from '@/lib/LocaleContext'

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

export default function Brands() {
  const { t } = useLocale()
  const section = t.home.brandSection

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
            <p className="inline-flex w-fit shrink-0 items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-amber-800" aria-hidden="true">
                ↓
              </span>
              {section.priceOrder}
            </p>
          </div>
          <p className="mt-4 max-w-3xl border-l-2 border-amber-500 pl-4 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
            {section.priceDisclaimer}
          </p>
        </header>

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
    </section>
  )
}
