'use client'

import { motion } from '@/lib/motion'
import { withEaseOutCardTransition } from '@/lib/cardVariants'
import { Lightbulb, ShieldCheck, Layers, MapPin } from 'lucide-react'
import { Card, CardContent } from './../ui/Card'
import { useLocale } from '@/lib/LocaleContext'
import { OptimizedImage } from '@/app/components/ui'
import type { ReactNode } from 'react'

const reasonIconComponents: Record<string, ReactNode> = {
  lightbulb: <Lightbulb className="h-8 w-8 text-blue-800 dark:text-blue-100" />,
  shield: <ShieldCheck className="h-8 w-8 text-emerald-800 dark:text-emerald-100" />,
  layers: <Layers className="h-8 w-8 text-amber-800 dark:text-amber-100" />,
  mappin: <MapPin className="h-8 w-8 text-indigo-800 dark:text-indigo-100" />,
}

export default function WhyChooseUs() {
  const { t } = useLocale()
  const w = t.whyChooseUs
  const componentData = t.componentData.whyChooseUs
  const cardVariants = withEaseOutCardTransition(componentData.cardVariants)

  const reasons = w.items.map((item, i) => ({
    ...item,
    icon: reasonIconComponents[componentData.iconIds[i]],
    ...componentData.styles[i],
  }))

  return (
    <section id="why-us" className="bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="text-primary uppercase tracking-widest text-lg text-gray-900 dark:text-gray-100">{w.sectionBadge}</span>
        <h2 className="mt-2 text-3xl sm:text-4xl text-gray-600 font-semibold dark:text-gray-100">
          {w.heading}
        </h2>
        <div className="mt-6 mx-auto w-16 h-1 rounded-md bg-linear-to-r from-primary to-secondary"></div>
      </motion.div>

      {/* Why Choose Us Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 0.2 }}
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-md bg-linear-to-r from-accent/20 via-primary/20 to-secondary/20 blur-3xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-md border border-white/20 bg-white/90 shadow-2xl backdrop-blur-sm dark:border-white/10 dark:bg-slate-950/90">
            <div className="absolute left-6 top-6 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-md font-semibold uppercase tracking-widest text-white backdrop-blur-md">
              {w.imageBadge}
            </div>
            <div className="relative min-h-96 md:aspect-video overflow-hidden">
              <OptimizedImage
                src="/images/future-aerosunenergy.png"
                alt={w.imageAlt}
                fill
                sizes="(min-width: 1024px) 80rem, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 via-transparent to-transparent" aria-hidden="true" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-green-500/25 backdrop-blur-sm">
              <p className="text-lg text-white">
                {w.imageCaption}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="px-4 sm:px-2 lg:px-12 py-24">
        <motion.div
          className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={componentData.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((r) => (
            <motion.div
              key={r.title}
              className="flex h-full"
              variants={cardVariants}
            >
              <Card className={`flex h-full w-full transition-all duration-150 hover:scale-105 hover:shadow-lg ${r.cardBg}`}>
                <CardContent className="flex h-full w-full flex-col">
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl p-1 text-2xl shadow-xl ${r.iconBg}`}>
                    {r.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">{r.title}</h3>
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">{r.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}