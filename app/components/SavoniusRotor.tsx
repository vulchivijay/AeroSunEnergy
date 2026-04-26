'use client';

import Image from 'next/image';
import { useLocale } from '@/app/lib/LocaleContext'

export default function SavoniusRotor() {
  const { t } = useLocale()
  const s = t.savoniusRotor

  return (
    <section className="px-6 sm:px-3 lg:px-12 pb-12 bg-white dark:bg-gray-950 overflow-hidden bg-linear-to-b from-slate-50">

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          {s.title}
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          {s.subtitle}
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">

        {/* Image */}
        <div className="relative w-full h-75 md:h-100">
          <Image
            src="/images/savonius-rotor.png" // place your image in public/images
            alt={s.imageAlt}
            fill
            className="object-contain rounded-md shadow-md"
          />
        </div>

        {/* Description */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {s.howItWorks}
          </h3>

          <p className="text-gray-600 mb-4">
            {s.description}
          </p>

          {/* Key Points */}
          <ul className="space-y-3 text-gray-700">
            {s.highlights.map((highlight) => (
              <li key={highlight}>✔ {highlight}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Specs Section */}
      <div className="max-w-5xl mx-auto mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {s.specs.map((spec) => (
          <div key={spec.label} className="p-5 rounded-xl bg-white shadow">
            <p className="text-gray-500 text-sm">{spec.label}</p>
            <p className="text-xl font-semibold text-gray-800">{spec.value}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
          {s.cta}
        </button>
      </div>
    </section>
  );
}