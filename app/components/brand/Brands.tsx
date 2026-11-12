'use client'

import Image from 'next/image'
import { useLocale } from '@/lib/LocaleContext'

const brandImages = [
  'adani-solar.png',
  'amara-raja-solar.png',
  'emmvee-solar.png',
  'goldi-solar.png',
  'havells.png',
  'insolation-energy.png',
  'jakson-solar.png',
  'loom-solar.png',
  'luminous.png',
  'microtek-solar.png',
  'premier-energies.png',
  'rayzon-solar.png',
  'renew-power.png',
  'renewsys-solar.png',
  'saatvik-solar.png',
  'servotech-power-systems.png',
  'tata-power-solar.png',
  'vikram-solar.png',
  'waaree-energies.png',
]

export default function Brands() {
  const { t } = useLocale()
  const section = t.home.brandSection

  return (
    <section
      className="relative isolate overflow-hidden bg-[#F1EDFF] px-4 py-16 sm:px-6 lg:px-10 lg:py-20"
      aria-labelledby="brand-section-title"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_15%,rgba(124,92,214,0.12),transparent_30%),radial-gradient(circle_at_92%_90%,rgba(245,158,11,0.13),transparent_32%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="inline-flex rounded-full border border-violet-200 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-violet-800">
            {section.eyebrow}
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <h2 id="brand-section-title" className="max-w-3xl text-3xl font-black tracking-tight text-[#272347] sm:text-4xl lg:text-5xl">
              {section.title}
            </h2>
            <p className="max-w-xl text-base leading-7 text-[#514A72] md:justify-self-end">
              {section.subtitle}
            </p>
          </div>
        </div>

        <ul className="grid list-none grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {brandImages.map((file) => {
            const name = file
              .replace(/\.[^.]+$/, '')
              .replace(/[-_]+/g, ' ')
              .replace(/\s+/g, ' ')
              .trim()
            const brandName = name.replace(/\b\w/g, (character) => character.toUpperCase())

            return (
              <li
                key={file}
                className="group rounded-3xl border border-violet-100 bg-white p-4 shadow-[0_18px_40px_-28px_rgba(52,36,95,0.24)] transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-[0_24px_48px_-28px_rgba(92,65,161,0.32)]"
              >
                <div className="flex h-24 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-50 to-violet-50 px-3">
                  <Image
                    src={`/brands/${file}`}
                    alt={brandName}
                    width={180}
                    height={96}
                    sizes="(max-width: 640px) 40vw, 180px"
                    className="max-h-16 w-auto max-w-full object-contain"
                  />
                </div>
                <p className="mt-3 text-center text-sm font-bold tracking-wide text-[#18372C]">
                  {brandName}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
