'use client'

import { motion } from '@/app/lib/motion'
import { Lightbulb, ShieldCheck, Layers, MapPin } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent } from './Card'
import { useLocale } from '@/app/lib/LocaleContext'

const reasonIcons = [
  <Lightbulb key="lightbulb" className="h-8 w-8 text-blue-800 dark:text-blue-100" />,
  <ShieldCheck key="shield" className="h-8 w-8 text-emerald-800 dark:text-emerald-100" />,
  <Layers key="layers" className="h-8 w-8 text-amber-800 dark:text-amber-100" />,
  <MapPin key="mappin" className="h-8 w-8 text-indigo-800 dark:text-indigo-100" />,
]

const reasonStyles = [
  { cardBg: 'bg-blue-100/85 dark:bg-blue-900/55 border-blue-300 dark:border-blue-700 hover:border-blue-500', iconBg: 'bg-blue-300 dark:bg-blue-800' },
  { cardBg: 'bg-emerald-100/85 dark:bg-emerald-900/55 border-emerald-300 dark:border-emerald-700 hover:border-emerald-500', iconBg: 'bg-emerald-300 dark:bg-emerald-800' },
  { cardBg: 'bg-amber-100/85 dark:bg-amber-900/55 border-amber-300 dark:border-amber-700 hover:border-amber-500', iconBg: 'bg-amber-300 dark:bg-amber-800' },
  { cardBg: 'bg-indigo-100/85 dark:bg-indigo-900/55 border-indigo-300 dark:border-indigo-700 hover:border-indigo-500', iconBg: 'bg-indigo-300 dark:bg-indigo-800' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

export default function WhyChooseUs() {
  const { t } = useLocale()
  const w = t.whyChooseUs

  const reasons = w.items.map((item, i) => ({
    ...item,
    icon: reasonIcons[i],
    ...reasonStyles[i],
  }))

  return (
    <section id="why-us" className="px-6 sm:px-3 lg:px-12 bg-gray-50 dark:bg-gray-900 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-gray-600 dark:text-white">{w.sectionBadge}</span>
          <h2 className="mt-2 text-3xl sm:text-4xl text-gray-600 font-semibold dark:text-white">
            {w.heading}
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-md bg-linear-to-r from-primary to-secondary" />
        </motion.div>

        {/* Why Choose Us Image */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          <div className="relative max-w-7xl mx-auto">
            <div className="absolute inset-0 rounded-md bg-linear-to-r from-accent/20 via-primary/20 to-secondary/20 blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-md border border-white/20 bg-white/90 shadow-2xl backdrop-blur-sm dark:border-white/10 dark:bg-slate-950/90">
              <div className="absolute left-6 top-6 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                {w.imageBadge}
              </div>
              <div className="relative min-h-96 md:aspect-video overflow-hidden">
                <Image
                  src="/images/future-aerosunenergy.png"
                  alt="AeroSun Energy's vision for future renewable energy infrastructure - advanced hybrid systems powering smart cities"
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

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((r) => (
            <motion.div
              key={r.title}
              variants={cardVariants}
            >
              <Card className={`transition-all duration-150 hover:scale-105 hover:shadow-lg ${r.cardBg}`}>
                <CardContent>
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl p-1 text-2xl shadow-xl ${r.iconBg}`}>
                    {r.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{r.title}</h3>
                  <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">{r.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
