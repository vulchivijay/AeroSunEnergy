'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from './Card'

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800 dark:text-blue-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l4 9H5l1 9 13-13h-6l2-5H5z" />
      </svg>
    ),
    title: 'Always-On Generation',
    desc: 'Solar powers your system through the day while wind turbines keep generating at night and on cloudy days — ensuring uninterrupted electricity supply.',
    cardBg: 'bg-blue-100/90 dark:bg-blue-900/55 border-blue-300 dark:border-blue-700 hover:border-blue-500',
    iconBg: 'bg-blue-300 dark:bg-blue-800',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-800 dark:text-emerald-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Cut Your Energy Bills',
    desc: 'Reduce electricity costs by up to 80% with our optimised solar wind hybrid systems — a smart investment that pays for itself and then keeps paying you.',
    cardBg: 'bg-emerald-100/90 dark:bg-emerald-900/55 border-emerald-300 dark:border-emerald-700 hover:border-emerald-500',
    iconBg: 'bg-emerald-300 dark:bg-emerald-800',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-800 dark:text-amber-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Built to Last',
    desc: 'Engineered for low maintenance and peak performance across all climates — urban rooftops, open highways, rural farmland, and public parks alike.',
    cardBg: 'bg-amber-100/90 dark:bg-amber-900/55 border-amber-300 dark:border-amber-700 hover:border-amber-500',
    iconBg: 'bg-amber-300 dark:bg-amber-800',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
      {/* About Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <Card>
          <CardContent className="space-y-8">
            <h2 className="text-xl font-bold mb-12">
              <span className="text-3xl ml-1 font-semibold bg-clip-text bg-linear-to-r from-blue-800 via-blue-700 to-blue-600 drop-shadow-xl text-transparent tracking-wider">Aero</span>
              <span className="text-3xl ml-1 font-semibold bg-clip-text bg-linear-to-r from-green-800 via-green-700 to-green-600 drop-shadow-xl text-transparent tracking-wider">Sun</span>
              <span className="ml-1 uppercase text-yellow-600 font-semibold tracking-wider">Energy</span>
            </h2>

            {/* Founder Image */}
            <motion.div
              className="w-full relative flex flex-col items-center lg:flex-row gap-2 md:gap-8 md:px-16 md:py-6"
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
                <div className="absolute bottom-2 right-2 rounded-full w-8 h-8 flex items-center justify-center border-2 border-green-500">
                  <svg className="w-4 h-4" fill="#00c758" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="px-6 text-center lg:text-left relative z-10 lg:flex-1">
                <motion.h3
                  className="text-2xl font-medium text-gray-900 dark:text-white mt-12"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  Vulchi Vijaya Kumar
                </motion.h3>
                <motion.p
                  className="text-lg text-gray-600 dark:text-gray-400 mb-1"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  Founder & Visionary Leader
                </motion.p>
                <motion.p
                  className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  Driving India's renewable energy revolution with cutting-edge hybrid technology solutions that empower communities and businesses across the nation.
                </motion.p>
              </div>

              <div className="flex items-center mb-12">
                <div className="relative rounded-full shadow-2xl bg-linear-to-br from-green-50 via-white to-cyan-50 p-2 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 dark:shadow-[0_30px_80px_-40px_rgba(16,185,129,0.2)]">
                  <div className="absolute inset-0 rounded-full border-5 border-green-300 animate-rise-glow"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-blue-300 animate-rise-glow" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute inset-0 rounded-full border-3 border-purple-300 animate-rise-glow" style={{ animationDelay: '1s' }}></div>
                  <Image
                    src="/images/lord-shiva-aerosunenergy.png"
                    alt="Lord Shiva"
                    width={128}
                    height={128}
                    className="h-32 w-32 object-contain relative z-10 brightness-100"
                  />
                </div>
              </div>
            </motion.div>

            <p className="text-lg text-gray-900 leading-relaxed">
              <strong className="font-medium underline">AeroSun Energy</strong>, a flagship innovation of <strong className="font-medium underline">Aerosun Energy</strong>, is India’s first specialized manufacturer of portable and low-wind smart turbines. Founded by
              <strong className="font-medium underline"> Vulchi Vijaya Kumar</strong>, Aerosun Energy is driven by the belief that clean wind energy
              should be accessible, affordable, and scalable — from rooftops in remote villages to commercial buildings in the heart of modern cities.
            </p>

            <p className="text-lg text-gray-900 leading-relaxed">
              With strong roots in innovation, sustainability, and rural empowerment, Aerosun Energy designs advanced wind energy systems that operate silently, generate power at low wind speeds, and require minimal maintenance. Our solutions are built to perform reliably across diverse Indian environments.
            </p>

            <p className="inline-flex p-3 bg-green-500/75 backdrop-blur-md rounded-sm shadow-sm">
              <span className="text-lg text-white">We don’t just build turbines. We create a future where every citizen can produce their own
                clean energy.</span>
            </p>
          </CardContent>
        </Card>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl font-semibold my-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Sustainability",
                desc: "Accelerating India's transition to renewable energy by reducing carbon footprints through clean wind solutions.",
                bg: "bg-blue-50 dark:bg-blue-900/20",
              },
              {
                title: "Innovation",
                desc: "Designing low-wind, smart, and efficient turbine technology tailored for real-world conditions.",
                bg: "bg-green-50 dark:bg-green-900/20",
              },
              {
                title: "Accessibility",
                desc: "Making renewable energy affordable and easy to adopt for homes, businesses, and rural communities.",
                bg: "bg-yellow-50 dark:bg-yellow-900/20",
              },
              {
                title: "Empowerment",
                desc: "Enabling energy independence and strengthening rural and urban economies alike.",
                bg: "bg-purple-50 dark:bg-purple-900/20",
              },
              {
                title: "Reliability",
                desc: "Delivering quiet, durable, and low-maintenance systems that perform consistently over time.",
                bg: "bg-pink-50 dark:bg-pink-900/20",
              },
            ].map((value) => (
              <Card key={value.title} className={value.bg}>
                <CardContent className="space-y-2">
                  <h4 className="text-xl font-semibold uppercase text-gray-900 dark:text-gray-100">{value.title}</h4>
                  <p className="text-lg text-gray-700 dark:text-gray-300">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-secondary uppercase tracking-widest text-lg text-gray-900 dark:text-white">The Technology</span>
          <h2 className="mt-2 text-3xl sm:text-4xl text-gray-900 dark:text-white">
            Hybrid Solar and Wind Energy System Overview
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-md bg-linear-to-r from-primary to-secondary" />
        </motion.div>

        <div className="grid grid-cols-1 gap-12 rounded-[2.25rem] md:border md:border-white/60 md:bg-white/75 md:p-3 shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-700 dark:bg-slate-800 lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
          <motion.div
            className="rounded-md bg-slate-950 px-6 py-8 text-white shadow-md lg:px-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-lg font-semibold uppercase tracking-[0.32em] text-accent/90">Integrated Technology</p>
            <h3 className="mt-4 max-w-lg text-2xl leading-tight sm:text-3xl">
              A hybrid platform designed to keep producing when single-source systems slow down.
            </h3>
            <p className="mt-6 text-lg leading-relaxed text-white/78 mb-6">
              Our <strong>hybrid solar wind energy</strong> system combines photovoltaic solar panels and compact wind turbines into one integrated, intelligent power unit. Solar panels capture sunlight during the day while the wind turbines generate power continuously — day or night, rain or shine. Together, they complement each other perfectly: when solar output drops (overcast skies or night-time), wind steps in to fill the gap.
            </p>
            <p className="text-lg leading-relaxed text-white/78 mb-6">
              The result is a <strong>smart energy system</strong> that delivers far more consistent power than either source alone. Paired with IoT-enabled monitoring and optional battery storage, you get real-time visibility and control over every kilowatt generated — the foundation of India&apos;s green energy infrastructure.
            </p>
            <p className="text-lg leading-relaxed text-white/78">
              AeroSun Energy designs and installs tailored <strong>renewable energy solutions across India</strong> — for homes, businesses, public spaces, and large-scale infrastructure — making clean, affordable power accessible to everyone.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-md shadow-2xl border border-white/24 bg-white/24 p-4 backdrop-blur-md">
                <p className="text-3xl font-bold text-accent">01</p>
                <p className="mt-2 text-lg text-white/72">Dual-source generation that reduces idle periods.</p>
              </div>
              <div className="rounded-md shadow-2xl border border-white/24 bg-white/24 p-4 backdrop-blur-md">
                <p className="text-3xl font-bold text-accent">02</p>
                <p className="mt-2 text-lg text-white/72">Smart controls that balance solar, wind, and storage.</p>
              </div>
              <div className="rounded-md shadow-2xl border border-white/24 bg-white/24 p-4 backdrop-blur-md">
                <p className="text-3xl font-bold text-accent">03</p>
                <p className="mt-2 text-lg text-white/72">Scalable deployment from home rooftops to public assets.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            <div className="relative aspect-4/3 overflow-hidden rounded-md bg-gray-100 shadow-md ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">
              <Image
                src="/images/hybrid-solar-wind -energy.png"
                alt="Smart VAWT hybrid technology deployment by AeroSun Energy"
                fill
                sizes="(min-width: 1024px) 44vw, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute left-6 top-6 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-md">
                Future Ready
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-green-500/25 backdrop-blur-sm">
                <p className="text-md text-white">
                  Hybrid systems engineered for dependable output, smart monitoring, and scalable installations.
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
                  <p className="text-lg text-gray-500 dark:text-gray-400">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
