'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from '@/app/lib/LocaleContext'

const generatorStyles = [
  { id: 'h-darrieus', imageSrc: '/images/h-darrieus-turbine-aerosunenergy.png', imageAlt: 'H-Darrieus wind turbine by AeroSun Energy', badgeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300', accentFrom: 'from-blue-400', accentTo: 'to-purple-400' },
  { id: 'flower', imageSrc: '/images/helical-turbine-aerosunenergy.png', imageAlt: 'Helical flower-style vertical wind turbine by AeroSun Energy', badgeColor: 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300', accentFrom: 'from-pink-400', accentTo: 'to-rose-400' },
  { id: 'savonius', imageSrc: '/images/savonius-turbine-aerosunenergy.png', imageAlt: 'Savonius vertical-axis wind turbine by AeroSun Energy', badgeColor: 'bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300', accentFrom: 'from-teal-400', accentTo: 'to-cyan-400' },
  { id: 'rooftop-vawt', imageSrc: '/images/roof-turbine-aerosunenergy.png', imageAlt: 'Rooftop vertical wind turbine by AeroSun Energy', badgeColor: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300', accentFrom: 'from-orange-400', accentTo: 'to-yellow-400' },
]

export default function WindGenerators() {
  const { t } = useLocale()
  const w = t.windGenerators

  const generators = w.items.map((item, i) => ({ ...item, ...generatorStyles[i] }))

  return (
    <section id="wind-generators" className="px-6 sm:px-3 lg:px-12 py-16 md:py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary uppercase tracking-widest text-lg text-gray-900 dark:text-gray-100">{w.sectionBadge}</span>
          <h2 className="mt-2 text-3xl sm:text-4xl text-gray-600 font-semibold dark:text-white">
            {w.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-900 dark:text-gray-100 max-w-3xl mx-auto">
            {w.description}
          </p>
          <div className="mt-6 mx-auto w-16 h-1 rounded-md bg-gradient-to-r from-primary to-secondary" />
        </div>

        {/* Generator cards */}
        <div className="flex flex-col gap-16">
          {generators.map((gen, idx) => (
            <div
              key={gen.id}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center bg-white dark:bg-gray-800 rounded-md shadow-2xl overflow-hidden`}
            >
              {/* Illustration panel */}
              <div className={`flex-shrink-0 flex items-center justify-center w-full lg:w-72 h-64 bg-gradient-to-br ${gen.accentFrom} ${gen.accentTo} bg-opacity-10 dark:bg-opacity-20`}>
                <div className="relative h-full w-full">
                  <Image
                    src={gen.imageSrc}
                    alt={gen.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 18rem, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-8">
                <span className={`inline-block text-sm font-semibold tracking-widest px-3 py-1 rounded-md mb-4 ${gen.badgeColor}`}>
                  {gen.badge}
                </span>
                <h3 className="text-2xl font-semibold tracking-widest text-gray-900 dark:text-gray-100 mb-1">{gen.title}</h3>
                <p className="text-lg font-medium text-primary mb-4 text-gray-600 dark:text-gray-900">{gen.subtitle}</p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{gen.description}</p>

                {/* Key specs */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {gen.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-lg text-gray-700 dark:text-gray-300">
                      <svg className="h-4 w-4 mt-0.5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  title={w.getQuoteTitle}
                  aria-label={w.getQuoteAriaLabel}
                  data-cta="get-quote"
                  className={`inline-block bg-gradient-to-r ${gen.accentFrom} ${gen.accentTo} text-white px-8 py-3 rounded-full shadow-2xl hover:opacity-90 transition-opacity text-lg`}
                >
                  {w.getQuote}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
