import Image from "next/image";
import { DigitalNumber } from "@/app/components/ui/DigitalNumber";
import type { Translations } from '@/lib/LocaleContext';

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

function BrandSectionBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 hidden min-[900px]:block" aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1280 800"
        preserveAspectRatio="xMidYMin slice"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="brand-sun-glow" cx="1085" cy="155" r="205" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffba52" stopOpacity=".64" />
            <stop offset=".62" stopColor="#ffba52" stopOpacity=".22" />
            <stop offset="1" stopColor="#ffc764" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="brand-sun" x1="960" x2="1210" y1="42" y2="268" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffe99f" />
            <stop offset=".58" stopColor="#ffc65e" />
            <stop offset="1" stopColor="#ff9f35" />
          </linearGradient>
          <linearGradient id="brand-panel-fill" x1="850" x2="1280" y1="300" y2="78" gradientUnits="userSpaceOnUse">
            <stop stopColor="#061b36" />
            <stop offset=".58" stopColor="#0d315a" />
            <stop offset="1" stopColor="#1c4c76" />
          </linearGradient>
          <linearGradient id="brand-ground" x1="870" x2="1280" y1="360" y2="800" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8cae62" stopOpacity="0" />
            <stop offset=".42" stopColor="#8cae62" stopOpacity=".08" />
            <stop offset="1" stopColor="#8cae62" stopOpacity=".18" />
          </linearGradient>
          <clipPath id="brand-panel-clip">
            <path d="m835 302 195-124L1280 78v224z" />
          </clipPath>
        </defs>
        <path d="M730 800V460c128-72 215 5 320-44 83-39 153-96 230-80v464z" fill="url(#brand-ground)" />
        <circle cx="1085" cy="155" r="205" fill="url(#brand-sun-glow)" />
        <circle cx="1085" cy="155" r="132" fill="url(#brand-sun)" />
        <path d="m835 302 195-124 250-100v224z" fill="url(#brand-panel-fill)" />
        <g clipPath="url(#brand-panel-clip)" fill="none" stroke="#a8c9df" strokeOpacity=".82" strokeWidth="2">
          <path d="m814 295 466-56m-441 38 441-54m-416 36 416-52m-391 34 391-50m-366 32 366-48m-341 30 341-46m-316 28 316-44m-291 26 291-42" />
          <path d="m870 330 215-177m-145 165 224-177m-153 165 233-177m-162 165 242-177m-171 165 251-177m-180 165 260-177" />
        </g>
        <path d="m835 302 195-124 250-100" fill="none" stroke="#dceaf2" strokeOpacity=".9" strokeWidth="2.5" />
        <path d="M1280 78v224" fill="none" stroke="#dceaf2" strokeOpacity=".58" strokeWidth="2.5" />
        <g>
          <path d="M1162 312c-49-75-52-144-12-203 52 54 61 122 12 203Z" fill="#347b39" />
          <path d="M1201 312c-8-98 17-167 78-217 20 85-6 158-78 217Z" fill="#4a913d" />
          <path d="M1240 312c24-84 66-135 128-157-5 77-48 129-128 157Z" fill="#5c9b43" />
          <path d="M1138 312c-65-53-94-112-81-176 70 39 96 95 81 176Z" fill="#6ba34a" />
          <path d="M1181 312c-78-23-125-67-140-133 77 13 126 55 140 133Z" fill="#8aae4e" />
          <path d="M1204 800c-84-159-81-314 11-464 76 168 67 322-11 464Z" fill="#4a913d" fillOpacity=".2" />
          <path d="M1262 800c-21-185 29-329 153-438 17 166-34 314-153 438Z" fill="#5c9b43" fillOpacity=".18" />
          <path d="M1130 800c-125-112-172-239-140-381 121 91 171 216 140 381Z" fill="#8aae4e" fillOpacity=".16" />
        </g>
      </svg>
    </div>
  )
}

export function HomeBrandsSection({ t }: { t: Translations }) {
  const section = t.home.brandSection

  return (
    <section
      className="relative isolate overflow-hidden bg-[#f7f5f1] px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16"
      aria-labelledby="brand-section-title"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-size-[48px_48px]"
        aria-hidden="true"
      />
      <BrandSectionBackground />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="relative z-10 mb-3 min-h-[19rem] overflow-hidden">
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
                              className="before:inline-block before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] before:mr-2 rounded-full border border-slate-300 bg-white/80 px-2 py-1 text-center text-xs font-semibold text-slate-700 tracking-normal"
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
                          className="before:inline-block before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] before:mr-2 w-auto max-w-full rounded-full border px-1.5 py-1.5 text-center text-[11px] font-bold leading-4 tracking-normal tabular-nums shadow-sm lg:px-5 lg:py-2.5 lg:text-base lg:leading-5"
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
