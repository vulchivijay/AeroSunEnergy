'use client'

import { motion } from '@/lib/motion'
import { withEaseOutCardTransition } from '@/lib/cardVariants'
import { Card, CardContent } from './../ui/Card'
import { useLocale } from '@/lib/LocaleContext'
import { OptimizedImage } from '@/app/components/ui'

export default function HowItWorks() {
  const { t } = useLocale()
  const h = t.howItWorks
  const componentData = t.componentData.howItWorks
  const cardVariants = withEaseOutCardTransition(componentData.cardVariants)

  const steps = h.steps.map((step, i) => ({ ...step, ...componentData.stepStyles[i] }))

  return (
    <section id="how-it-works" className="px-4 sm:px-2 lg:px-12 py-16 md:py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-primary uppercase tracking-widest text-lg text-gray-900 dark:text-gray-100">{h.sectionBadge}</span>
          <h2 className="mt-2 text-3xl sm:text-4xl text-gray-600 font-semibold dark:text-white">
            {h.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-900 dark:text-gray-100 max-w-3xl mx-auto">
            {h.description}
          </p>
          <div className="mt-6 mx-auto w-16 h-1 rounded-md bg-linear-to-r from-primary to-secondary" />
        </motion.div>

        {/* Process Overview Image */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          <div className="relative max-w-7xl mx-auto">
            <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-md blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-md border border-white/20 bg-white/90 shadow-2xl backdrop-blur-sm dark:border-white/10 dark:bg-slate-950/90">
              <div className="absolute left-6 top-6 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-md font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                {h.nextGenBadge}
              </div>
              <div className="relative min-h-96 md:aspect-[16/9] overflow-hidden">
                <OptimizedImage
                  src="/images/nextgen-aerosunenergy.png"
                  alt={h.nextGenImageAlt}
                  fill
                  sizes="(min-width: 1024px) 80rem, 92vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent" aria-hidden="true" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-green-500/25 backdrop-blur-sm">
                <p className="text-lg text-white">
                  {h.nextGenCaption}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-secondary to-accent opacity-20 -translate-x-1/2" aria-hidden="true" />

          <motion.div
            className="flex flex-col gap-6"
            variants={componentData.containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                variants={cardVariants}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="relative h-60 md:h-120 w-full md:w-1/2 overflow-hidden rounded-md mb-5">
                  <OptimizedImage
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    fill
                    sizes="(min-width: 768px) 42vw, 92vw"
                    className="object-cover"
                  />
                </div>
                {/* Content card */}
                <Card className={`flex-1 w-full md:w-1/2 transition-shadow hover:shadow-lg ${step.cardBg}`}>
                  <CardContent>
                    <div className="flex items-start gap-4">
                      <span className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md text-3xl shadow-sm ${step.iconBg}`}>{step.icon}</span>
                      <div className="w-3/4">
                        <p className={`text-lg uppercase tracking-widest mb-1`}>
                          {h.stepLabel} {step.number}
                        </p>
                        <h3 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Centre node */}
                    <div className={`z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-md bg-linear-to-br text-lg text-white shadow-lg ${step.nodeBg}`}>
                      {step.number}
                    </div>

                    {/* Spacer (mirrors content card on the other side) */}
                    <div className="flex-1" aria-hidden="true" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}