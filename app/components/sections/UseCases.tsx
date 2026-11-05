'use client'

import { motion } from '@/lib/motion'
import Link from 'next/link'
import { useLocale } from '@/lib/LocaleContext'
import { OptimizedImage } from '@/app/components/ui'

export default function UseCases() {
  const { t } = useLocale()
  const u = t.useCases
  const componentData = t.componentData.useCases
  const cardVariants = {
    ...componentData.cardVariants,
    visible: {
      ...componentData.cardVariants.visible,
      transition: { ...componentData.cardVariants.visible.transition, ease: 'easeOut' as const },
    },
  }

  const useCases = u.items.map((item, i) => ({ ...item, ...componentData.styles[i] }))

  return (
    <section id="use-cases" className="py-12 px-6 sm:px-3 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-gray-600 dark:text-white">{u.sectionBadge}</span>
          <h2 className="mt-2 text-3xl sm:text-4xl text-gray-500 font-semibold dark:text-white">
            {u.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-100 max-w-3xl mx-auto">
            {u.description}
          </p>
          <div className="mt-6 mx-auto w-16 h-1 rounded-md bg-linear-to-r from-primary to-secondary" />
        </motion.div>

        <motion.div
          className="flex flex-col gap-8"
          variants={componentData.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {useCases.map((uc, index) => (
            <motion.div
              key={uc.title}
              variants={cardVariants}
              className={`group overflow-hidden rounded-4xl border shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_32px_110px_rgba(15,23,42,0.12)] ${uc.cardBg}`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`relative min-h-70 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className={`absolute inset-x-0 top-0 h-2 bg-linear-to-r ${uc.color}`} />
                  <OptimizedImage
                    src={uc.imageSrc}
                    alt={uc.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 44vw, 92vw"
                    className="object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,29,0.08),rgba(7,17,29,0.22)_52%,rgba(7,17,29,0.68)_100%)]" aria-hidden="true" />
                  <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-6 text-white">
                    <div>
                      <p className="text-4xl">{uc.emoji}</p>
                      <p className="mt-3 text-lg font-bold">{uc.title}</p>
                    </div>
                    <span className={`shrink-0 rounded-md px-3 py-1 text-md font-bold ${uc.tagColor}`}>
                      {uc.tag}
                    </span>
                  </div>
                </div>
                <div className={`p-5 lg:p-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="flex items-center gap-6">
                    <span className="rounded-sm shadow-sm border border-gray-200 bg-slate-50 px-3 py-1 text-md font-semibold uppercase tracking-[0.28em] text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                      {u.bestFit}
                    </span>
                    <span className="text-lg font-semibold text-primary">{uc.tag}</span>
                  </div>
                  <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                    {uc.description}
                  </p>
                  <ul className="mt-8 grid gap-6 sm:grid-cols-2">
                    {uc.points.map((point) => (
                      <li key={point} className="rounded-sm shadow-sm border border-slate-200 bg-slate-50 px-4 py-3 text-lg text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#contact"
                    title={u.discussTitle}
                    aria-label={u.discussAriaLabel}
                    data-cta="discuss-deployment"
                    className="inline-flex mt-8 items-center rounded-md bg-slate-950 px-6 py-3 text-lg text-white transition-colors hover:bg-primary dark:bg-accent dark:text-gray-100"
                  >
                    {u.discussDeployment}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
