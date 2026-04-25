'use client'

import { motion } from '@/app/lib/motion'
import { Clock, GitMerge, Wrench, Layers, Leaf, MapPin } from 'lucide-react'
import { Card, CardContent } from './Card'
import { useLocale } from '@/app/lib/LocaleContext'

const featureIcons = [
  <Clock key="clock" className="h-7 w-7 text-blue-800 dark:text-blue-100" />,
  <GitMerge key="gitmerge" className="h-7 w-7 text-emerald-800 dark:text-emerald-100" />,
  <Wrench key="wrench" className="h-7 w-7 text-amber-800 dark:text-amber-100" />,
  <Layers key="layers" className="h-7 w-7 text-indigo-800 dark:text-indigo-100" />,
  <Leaf key="leaf" className="h-7 w-7 text-green-800 dark:text-green-100" />,
  <MapPin key="mappin" className="h-7 w-7 text-cyan-800 dark:text-cyan-100" />,
]

const featureStyles = [
  { cardBg: 'bg-blue-200/70 dark:bg-blue-900/55 border-blue-300 dark:border-blue-700 hover:border-blue-500', iconBg: 'bg-blue-300 dark:bg-blue-800' },
  { cardBg: 'bg-emerald-200/70 dark:bg-emerald-900/55 border-emerald-300 dark:border-emerald-700 hover:border-emerald-500', iconBg: 'bg-emerald-300 dark:bg-emerald-800' },
  { cardBg: 'bg-amber-200/70 dark:bg-amber-900/55 border-amber-300 dark:border-amber-700 hover:border-amber-500', iconBg: 'bg-amber-300 dark:bg-amber-800' },
  { cardBg: 'bg-indigo-200/70 dark:bg-indigo-900/55 border-indigo-300 dark:border-indigo-700 hover:border-indigo-500', iconBg: 'bg-indigo-300 dark:bg-indigo-800' },
  { cardBg: 'bg-green-200/70 dark:bg-green-900/55 border-green-300 dark:border-green-700 hover:border-green-500', iconBg: 'bg-green-300 dark:bg-green-800' },
  { cardBg: 'bg-cyan-200/70 dark:bg-cyan-900/55 border-cyan-300 dark:border-cyan-700 hover:border-cyan-500', iconBg: 'bg-cyan-300 dark:bg-cyan-800' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

export default function Features() {
  const { t } = useLocale()
  const f = t.features

  const features = f.items.map((item, i) => ({
    ...item,
    icon: featureIcons[i],
    ...featureStyles[i],
  }))

  return (
    <section id="features" className="px-6 sm:px-3 lg:px-12 bg-white dark:bg-gray-950 overflow-hidden">
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
          variants={containerVariants}
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
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{feat.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
