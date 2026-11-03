'use client';

import { useLocale } from '@/lib/LocaleContext'
import { OptimizedImage } from '@/app/components/ui'
import Link from 'next/link'

export default function SavoniusRotor() {
  const { t } = useLocale()
  const s = t.savoniusRotor

  return (
    <section className="px-4 sm:px-2 lg:px-12 py-16 md:py-24 bg-white dark:bg-gray-950 overflow-hidden bg-linear-to-b from-slate-50 dark:from-gray-950">

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
          {s.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg">
          {s.subtitle}
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">

        {/* Image */}
        <div className="relative w-full h-75 md:h-100">
          <OptimizedImage
            src="/images/savonius-rotor.png"
            alt={s.imageAlt}
            fill
            className="object-contain rounded-md shadow-md"
          />
        </div>

        {/* Description */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            {s.howItWorks}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {s.description}
          </p>

          {/* Key Points */}
          <ul className="space-y-3 text-gray-700 dark:text-gray-200">
            {s.highlights.map((highlight) => (
              <li key={highlight}><span aria-hidden="true">✔ </span>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Specs Section */}
      <div className="max-w-5xl mx-auto mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {s.specs.map((spec) => (
          <div key={spec.label} className="p-5 rounded-xl bg-white shadow dark:bg-gray-800">
            <p className="text-gray-600 dark:text-gray-300 text-sm">{spec.label}</p>
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">{spec.value}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <Link href="/hybridenergy" className="inline-flex min-h-11 items-center rounded-lg bg-green-700 px-6 py-3 text-white shadow transition hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800">
          {s.cta}
        </Link>
      </div>
    </section>
  );
}