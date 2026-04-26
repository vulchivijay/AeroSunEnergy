'use client'

import { motion } from '@/app/lib/motion'
import Image from 'next/image'
import { Card, CardContent } from './Card'
import { useLocale } from '@/app/lib/LocaleContext'

const featureIcons = [
  (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800 dark:text-blue-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l4 9H5l1 9 13-13h-6l2-5H5z" />
    </svg>
  ),
  (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-800 dark:text-emerald-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-800 dark:text-amber-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
]

const featureStyles = [
  { cardBg: 'bg-blue-100/90 dark:bg-blue-900/55 border-blue-300 dark:border-blue-700 hover:border-blue-500', iconBg: 'bg-blue-300 dark:bg-blue-800' },
  { cardBg: 'bg-emerald-100/90 dark:bg-emerald-900/55 border-emerald-300 dark:border-emerald-700 hover:border-emerald-500', iconBg: 'bg-emerald-300 dark:bg-emerald-800' },
  { cardBg: 'bg-amber-100/90 dark:bg-amber-900/55 border-amber-300 dark:border-amber-700 hover:border-amber-500', iconBg: 'bg-amber-300 dark:bg-amber-800' },
]

const coreValueStyles = [
  'bg-blue-50 dark:bg-blue-900/20',
  'bg-green-50 dark:bg-green-900/20',
  'bg-yellow-50 dark:bg-yellow-900/20',
  'bg-purple-50 dark:bg-purple-900/20',
  'bg-pink-50 dark:bg-pink-900/20',
]

export default function About() {
  const { t } = useLocale()
  const a = t.about

  const features = a.features.map((f, i) => ({
    ...f,
    icon: featureIcons[i],
    ...featureStyles[i],
  }))

  return (
    <section id="about" className="px-6 sm:px-3 lg:px-12 py-16 md:py-24 bg-white dark:bg-gray-950 overflow-hidden">
      {/* relative grid w-full grid-cols-1 items-center gap-7 lg:grid-cols-[1.08fr_0.92fr] */}
      {/* About Section */}
      <div className="mx-auto max-w-7xl py-12">
        <Card>
          <CardContent className="space-y-8">
            <h2 className="text-xl font-bold">
              <span className="text-3xl ml-1 font-semibold bg-clip-text bg-linear-to-r from-blue-800 via-blue-700 to-blue-600 drop-shadow-xl text-transparent tracking-wider">Aero</span>
              <span className="text-3xl ml-1 font-semibold bg-clip-text bg-linear-to-r from-green-800 via-green-700 to-green-600 drop-shadow-xl text-transparent tracking-wider">Sun</span>
              <span className="ml-1 uppercase text-yellow-600 font-semibold text-xl tracking-wider">Energy</span>
            </h2>

            {/* Founder Image */}
            <motion.div
              className="w-full relative flex flex-col items-center lg:flex-row gap-4 md:gap-16 md:p-6"
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
            >
              {/* Floating Energy Particles */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div
                  className="absolute top-4 left-8 w-2 h-2 bg-accent rounded-full opacity-60"
                  animate={{
                    y: [-10, 10, -10],
                    x: [-5, 5, -5],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute top-12 right-6 w-1.5 h-1.5 bg-primary rounded-full opacity-70"
                  animate={{
                    y: [10, -10, 10],
                    x: [5, -5, 5],
                    scale: [1.2, 1, 1.2]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <motion.div
                  className="absolute bottom-8 left-12 w-1 h-1 bg-secondary rounded-full opacity-50"
                  animate={{
                    y: [-8, 8, -8],
                    x: [-3, 3, -3],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
              </div>

              <div className="relative group">
                {/* Hexagonal Frame */}
                <div className="absolute inset-0 transform rotate-30 scale-110">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/30 to-secondary/20 rounded-lg blur-sm"></div>
                </div>
                <div className="absolute inset-0 transform rotate-30 scale-105">
                  <div className="w-full h-full border-2 border-primary/40 rounded-lg animate-square-box"></div>
                </div>

                {/* Main Image Container */}
                <div className="relative w-36 h-36 lg:w-44 lg:h-44 overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
                  {/* Energy Rays Background */}
                  <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent animate-spin" style={{ animationDuration: '20s' }}></div>
                  <Image
                    src="/images/founder-aerosunenergy.png"
                    alt="Vulchi Vijaya Kumar - Founder of AeroSun Energy"
                    fill
                    sizes="(min-width: 1024px) 176px, 144px"
                    className="object-cover rounded-lg shadow-2xl"
                    loading="eager"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/10 rounded-lg"></div>
                </div>

                {/* Turbine Blade Accents */}
                <motion.div
                  className="absolute -top-3 -right-3 w-10 h-10 text-accent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <svg viewBox="0 0 24 24" fill="purple">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                  </svg>
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 -left-2 w-6 h-6 text-secondary"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1 }}
                >
                  <svg viewBox="0 0 24 24" fill="blue">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                  </svg>
                </motion.div>

                {/* Achievement Badge */}
                <div className="absolute bottom-2 right-2 rounded-full w-8 h-8 flex items-center justify-center border-2 border-gray-100">
                  <svg className="w-4 h-4" fill="#fef9c2" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="text-center lg:text-left relative z-10 lg:flex-1">
                <motion.h3
                  className="text-2xl font-medium text-gray-900 dark:text-white mt-12"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  {a.founder.name}
                </motion.h3>
                <motion.p
                  className="text-lg text-gray-600 dark:text-gray-400 mb-1"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  {a.founder.title}
                </motion.p>
                <motion.p
                  className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  {a.founder.bio}
                </motion.p>
              </div>

              <div className="flex items-center mb-12">
                <div className="relative h-40 w-40 rounded-full bg-white p-2 shadow-2xl backdrop-blur-sm dark:bg-white dark:shadow-[0_30px_80px_-40px_rgba(16,185,129,0.2)]">
                  <div className="absolute inset-0 rounded-full border-5 border-green-300 animate-rise-glow"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-blue-300 animate-rise-glow" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute inset-0 rounded-full border-3 border-purple-300 animate-rise-glow" style={{ animationDelay: '1s' }}></div>
                  <Image
                    src="/images/lord-shiva-aerosunenergy.png"
                    alt="Lord Shiva"
                    fill
                    sizes="160px"
                    className="relative z-10 rounded-full object-contain"
                    loading="eager"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
                  />
                </div>
              </div>
            </motion.div>

            <p className="text-lg text-gray-900 dark:text-gray-100 leading-relaxed">
              {a.paragraph1}
            </p>

            <p className="text-lg text-gray-900 dark:text-gray-100 leading-relaxed">
              {a.paragraph2}
            </p>

            <p className="inline-flex p-3 bg-green-600 rounded-sm shadow-sm">
              <span className="text-lg text-slate-100">{a.quote}</span>
            </p>
          </CardContent>
        </Card>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl font-semibold dark:text-gray-100 my-12">{a.coreValuesHeading}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {a.coreValues.map((value, i) => (
              <Card key={value.title} className={coreValueStyles[i]}>
                <CardContent className="space-y-2">
                  <h4 className="text-xl font-semibold uppercase text-gray-900 dark:text-gray-100">{value.title}</h4>
                  <p className="text-lg text-gray-700 dark:text-gray-300">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl pt-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-secondary uppercase tracking-widest text-lg text-gray-900 dark:text-white">{a.techBadge}</span>
          <h2 className="mt-2 text-3xl sm:text-4xl text-gray-900 dark:text-white">
            {a.techHeading}
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-md bg-linear-to-r from-primary to-secondary" />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 rounded-[2.25rem] md:border md:border-white/60 md:bg-white/75 shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-700 dark:bg-slate-800 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            className="rounded-md shadow-md px-6 lg:px-8 py-8 text-white "
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-lg font-semibold uppercase tracking-[0.32em] text-accent/90">{a.techIntegratedBadge}</p>
            <h3 className="mt-4 max-w-lg text-2xl leading-tight sm:text-3xl">
              {a.techSubheading}
            </h3>
            <p className="mt-6 text-lg leading-relaxed text-white/78 mb-6">
              {a.techPara1}
            </p>
            <p className="text-lg leading-relaxed text-white/78 mb-6">
              {a.techPara2}
            </p>
            <p className="text-lg leading-relaxed text-white/78">
              {a.techPara3}
            </p>

            <div className="mt-8 grid gap-4">
              {a.techPoints.map((point, i) => (
                <div key={i} className="rounded-md shadow-2xl border border-white/24 bg-white/24 p-4 backdrop-blur-md">
                  <p className="text-3xl font-bold text-accent">0{i + 1}</p>
                  <p className="mt-2 text-lg text-white/72">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            <div className="relative min-h-96 md:aspect-4/3 overflow-hidden rounded-md bg-gray-100 shadow-md ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">
              <Image
                src="/images/hybrid-solar-wind -energy.png"
                alt="Smart VAWT hybrid technology deployment by AeroSun Energy"
                fill
                sizes="(min-width: 1024px) 44vw, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute left-6 top-6 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-md">
                {a.techImageBadge}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-green-500/25 backdrop-blur-sm">
                <p className="text-lg text-white">
                  {a.techImageCaption}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className={`flex flex-col items-center rounded-md border p-6 text-center shadow-md transition-all duration-150 hover:-translate-y-1 hover:shadow-lg ${f.cardBg}`}
                >
                  <div className={`mb-4 rounded-md p-3 shadow-sm ${f.iconBg}`}>
                    {f.icon}
                  </div>
                  <h3 className="text-xl text-gray-900 dark:text-gray-100 mb-2">{f.title}</h3>
                  <p className="text-lg text-gray-500 dark:text-gray-100">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
