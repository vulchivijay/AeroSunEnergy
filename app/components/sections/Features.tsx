'use client'

import { motion } from '@/lib/motion'
import { Clock, GitMerge, Wrench, Layers, Leaf, MapPin } from 'lucide-react'
import { Card, CardContent } from './../ui/Card'
import { useLocale } from '@/lib/LocaleContext'
import type { ReactNode } from 'react'

const featureIconComponents: Record<string, ReactNode> = {
  clock: <Clock className="h-7 w-7 text-blue-800 dark:text-blue-100" />,
  gitmerge: <GitMerge className="h-7 w-7 text-emerald-800 dark:text-emerald-100" />,
  wrench: <Wrench className="h-7 w-7 text-amber-800 dark:text-amber-100" />,
  layers: <Layers className="h-7 w-7 text-indigo-800 dark:text-indigo-100" />,
  leaf: <Leaf className="h-7 w-7 text-green-800 dark:text-green-100" />,
  mappin: <MapPin className="h-7 w-7 text-cyan-800 dark:text-cyan-100" />,
}

export default function Features() {
  const { t } = useLocale()
  const f = t.features
  const componentData = t.componentData.features
  const cardVariants = {
    ...componentData.cardVariants,
    visible: {
      ...componentData.cardVariants.visible,
      transition: { ...componentData.cardVariants.visible.transition, ease: 'easeOut' as const },
    },
  }

  const features = f.items.map((item, i) => ({
    ...item,
    icon: featureIconComponents[componentData.iconIds[i]],
    ...componentData.styles[i],
  }))

  return (
    <section id="features" className="px-4 sm:px-2 lg:px-12 py-16 md:py-24 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-secondary font-semibold uppercase tracking-widest text-lg text-gray-600 dark:text-white">{f.sectionBadge}</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            {f.heading}
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-md bg-linear-to-r from-primary to-secondary" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={componentData.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feat) => (
            <motion.div
              key={feat.title}
              variants={cardVariants}
            >
              <Card className={`group transition-all duration-150 hover:scale-105 ${feat.cardBg}`}>
                <CardContent>
                  <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl shadow-sm ${feat.iconBg}`}>
                    {feat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">{feat.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{feat.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
