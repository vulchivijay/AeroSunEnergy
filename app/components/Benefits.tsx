'use client'

import { motion } from 'framer-motion'
import { TrendingDown, Globe, ShieldCheck, Infinity } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent } from './Card'
import { useLocale } from '@/app/lib/LocaleContext'

const benefitIcons = [
  <TrendingDown key="trending" className="h-8 w-8 text-primary" />,
  <Globe key="globe" className="h-8 w-8 text-secondary" />,
  <ShieldCheck key="shield" className="h-8 w-8 text-accent" />,
  <Infinity key="infinity" className="h-8 w-8 text-purple-500" />,
]

const benefitStyles = [
  { bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-100 dark:border-blue-800' },
  { bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-100 dark:border-green-800' },
  { bg: 'bg-yellow-50 dark:bg-yellow-900/20', border: 'border-yellow-100 dark:border-yellow-800' },
  { bg: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-100 dark:border-purple-800' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' as const } },
}

export default function Benefits() {
  const { t } = useLocale()
  const b = t.benefits

  const benefits = b.items.map((item, i) => ({
    ...item,
    icon: benefitIcons[i],
    ...benefitStyles[i],
  }))

  return (
    <section id="benefits" className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-secondary font-semibold uppercase tracking-widest text-lg text-gray-900 dark:text-gray-100">{b.sectionBadge}</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            {b.heading}
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-md bg-gradient-to-r from-primary to-secondary" />
        </motion.div>

        {/* Benefits Image */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-md blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-md border border-white/20 bg-white/90 shadow-2xl backdrop-blur-sm dark:border-white/10 dark:bg-slate-950/90">
              <div className="absolute left-6 top-6 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                {b.imageBadge}
              </div>
              <div className="aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/smart-vawt-aerosunenergy.png"
                  alt="Advanced Darrieus wind turbine technology by AeroSun Energy - efficient vertical-axis design for urban and semi-urban environments"
                  fill
                  sizes="(min-width: 1024px) 68rem, 92vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" aria-hidden="true" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-green-500/25 backdrop-blur-sm">
                <p className="text-lg text-white">
                  {b.imageCaption}
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
          {benefits.map((ben) => (
            <motion.div
              key={ben.title}
              variants={cardVariants}
            >
              <Card className={`hover:shadow-lg hover:scale-105 transition-all duration-150 ${ben.bg} ${ben.border}`}>
                <CardContent>
                  <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white dark:bg-gray-700 shadow-sm">
                    {ben.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">{ben.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg">{ben.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
