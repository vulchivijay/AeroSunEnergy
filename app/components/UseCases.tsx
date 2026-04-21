'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const useCases = [
  {
    emoji: '🛣️',
    title: 'Smart Energy Roads & Highways',
    tag: 'Infrastructure',
    imageSrc: '/images/infra-aerosunenergy.png',
    imageAlt: 'Hybrid solar and wind infrastructure for roads and highways',
    tagColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    description:
      'Roads and highways are exposed to sunlight and wind 24 hours a day. AeroSun integrates solar panels into road surface barriers and wind turbines along medians and roadsides — turning every kilometre of highway into a green energy generator that powers streetlights, traffic systems, and EV charging stations.',
    points: ['Powers streetlights & signage', 'Supports EV charging infrastructure', 'Scalable across national highways', 'Supports smart city infrastructure'],
    color: 'from-primary to-blue-400',
    cardBg: 'bg-blue-100/85 dark:bg-blue-950/45 border-blue-300 dark:border-blue-700',
  },
  {
    emoji: '🌳',
    title: 'Public Parks & Open Spaces',
    tag: 'Urban Green',
    imageSrc: '/images/openspace-aerosunenergy.png',
    imageAlt: 'AeroSun hybrid installation for public parks and open spaces',
    tagColor: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    description:
      'Parks offer unobstructed sunlight and natural airflow. Our aesthetically designed flower turbines and solar canopies blend seamlessly into park landscapes, powering benches, Wi-Fi nodes, lighting, and event spaces — supporting sustainable urban infrastructure without disrupting the natural environment.',
    points: ['Aesthetic flower turbine designs', 'Powers park lighting & amenities', 'Silent, low-vibration operation', 'Ideal for urban and suburban parks'],
    color: 'from-secondary to-teal-400',
    cardBg: 'bg-emerald-100/85 dark:bg-emerald-950/45 border-emerald-300 dark:border-emerald-700',
  },
  {
    emoji: '🏡',
    title: 'Residential Rooftops',
    tag: 'Home Energy',
    imageSrc: '/images/roof-turbine-aerosunenergy.png',
    imageAlt: 'Residential rooftop turbine and hybrid solar installation',
    tagColor: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
    description:
      'Our solar wind hybrid system for homes combines compact rooftop solar panels with low-wind VAWT turbines — delivering round-the-clock electricity. Homeowners can cut their bills drastically, store surplus energy, and even sell power back to the grid through net metering.',
    points: ['Up to 80% reduction in electricity bills', 'Net metering & grid export ready', 'Battery storage available', 'Suits urban apartments and bungalows'],
    color: 'from-accent to-yellow-400',
    cardBg: 'bg-amber-100/85 dark:bg-amber-950/45 border-amber-300 dark:border-amber-700',
  },
  {
    emoji: '🏭',
    title: 'Open Land & Commercial Spaces',
    tag: 'Commercial',
    imageSrc: '/images/industries-aerosunenergy.png',
    imageAlt: 'Commercial and industrial AeroSun hybrid energy installation',
    tagColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
    description:
      'Open agricultural land, factory rooftops, warehouses, and commercial complexes represent ideal sites for large-scale hybrid deployments. AeroSun delivers scalable green energy infrastructure that offsets industrial power demands and accelerates compliance with sustainability targets.',
    points: ['Scalable from 10 kW to multi-MW', 'Reduces industrial power costs', 'Supports ESG & sustainability goals', 'Suitable for rural and urban commercial sites'],
    color: 'from-pink-400 to-rose-400',
    cardBg: 'bg-purple-100/85 dark:bg-purple-950/45 border-purple-300 dark:border-purple-700',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-gray-600 dark:text-white">Where We Install</span>
          <h2 className="mt-2 text-3xl sm:text-4xl text-gray-600 dark:text-white">
            Hybrid Solar Wind Use Cases in India
          </h2>
          <p className="mt-4 text-lg text-gray-900 dark:text-gray-100 max-w-3xl mx-auto">
            Our hybrid solar wind energy systems are engineered for diverse environments — from busy highways to quiet homes — bringing renewable energy solutions across India wherever they&apos;re needed most.
          </p>
          <div className="mt-6 mx-auto w-16 h-1 rounded-md bg-linear-to-r from-primary to-secondary" />
        </motion.div>

        <motion.div
          className="flex flex-col gap-8"
          variants={containerVariants}
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
                  <Image
                    src={uc.imageSrc}
                    alt={uc.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 44vw, 92vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,29,0.08),rgba(7,17,29,0.22)_52%,rgba(7,17,29,0.68)_100%)]" aria-hidden="true" />
                  <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4 text-white">
                    <div>
                      <p className="text-4xl">{uc.emoji}</p>
                      <p className="mt-3 text-lg font-bold">{uc.title}</p>
                    </div>
                    <span className={`shrink-0 rounded-md px-3 py-1 text-xs font-bold ${uc.tagColor}`}>
                      {uc.tag}
                    </span>
                  </div>
                </div>
                <div className={`p-8 lg:p-10 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span className="rounded-sm shadow-sm border border-gray-200 bg-slate-50 px-3 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                      Best Fit
                    </span>
                    <span className="text-lg font-semibold text-primary">{uc.tag}</span>
                  </div>
                  <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                    {uc.description}
                  </p>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {uc.points.map((point) => (
                      <li key={point} className="rounded-sm shadow-sm border border-slate-200 bg-slate-50 px-4 py-3 text-lg text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#contact"
                    title="Contact AeroSun Energy to discuss this deployment option"
                    aria-label="Get in touch to discuss this renewable energy deployment"
                    data-cta="discuss-deployment"
                    className="inline-flex mt-8 items-center rounded-md bg-slate-950 px-6 py-3 text-lg text-white transition-colors hover:bg-primary dark:bg-accent dark:text-slate-950 opacity-65 pointer-events-none"
                  >
                    Discuss this deployment
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
