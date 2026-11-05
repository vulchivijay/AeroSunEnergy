'use client'

import Link from 'next/link'
import { Card, CardContent } from './../ui/Card'
import { useLocale } from '@/lib/LocaleContext'
import { OptimizedImage } from '@/app/components/ui'

export default function Services() {
  const { t } = useLocale()
  const s = t.services

  const services = s.items.map((item, i) => ({ ...item, ...t.componentData.services.styles[i] }))

  return (
    <section id="services" className="px-4 sm:px-2 lg:px-12 py-16 md:py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold uppercase tracking-widest text-lg text-gray-900 dark:text-gray-100">{s.sectionBadge}</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            {s.heading}
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-md bg-linear-to-r from-primary to-secondary" />
        </div>

        {/* Services Image */}
        <div className="mb-12">
          <div className="relative max-w-7xl mx-auto">
            <div className="absolute inset-0 rounded-md bg-linear-to-r from-secondary/20 via-primary/20 to-accent/20 blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-md border border-white/20 bg-white/90 shadow-2xl backdrop-blur-sm dark:border-white/10 dark:bg-slate-950/90">
              <div className="absolute left-6 top-6 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-md font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                {s.imageBadge}
              </div>
              <div className="relative min-h-96 md:aspect-video overflow-hidden">
                <OptimizedImage
                  src="/images/home-business-aerosunenergy.png"
                  alt={s.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 80rem, 92vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 via-transparent to-transparent" aria-hidden="true" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-green-500/25 backdrop-blur-sm">
                <p className="text-lg text-white">
                  {s.imageCaption}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className={`group transition-all duration-150 hover:scale-105 hover:shadow-xl ${service.cardBg}`}
            >
              <div className={`h-2 bg-linear-to-r ${service.color}`} />
              <CardContent>
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl p-1 text-2xl shadow-xl ${service.iconBg}`}>{service.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="#contact"
                  title={s.learnMoreTitle}
                  aria-label={s.learnMoreAriaLabel}
                  data-cta="learn-more"
                  className="inline-block mt-6 text-primary font-semibold hover:text-secondary transition-colors"
                >
                  {s.learnMore}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}