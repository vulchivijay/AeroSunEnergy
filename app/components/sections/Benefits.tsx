'use client'

import { motion } from '@/lib/motion'
import { TrendingDown, Globe, ShieldCheck, Infinity } from 'lucide-react'
import { Card, CardContent } from './../ui/Card'
import { useLocale } from '@/lib/LocaleContext'
import { OptimizedImage } from '@/app/components/ui'
import type { ReactNode } from 'react'

const benefitIconComponents: Record<string, ReactNode> = {
	trending: <TrendingDown className="h-8 w-8 text-primary" />,
	globe: <Globe className="h-8 w-8 text-secondary" />,
	shield: <ShieldCheck className="h-8 w-8 text-accent" />,
	infinity: <Infinity className="h-8 w-8 text-purple-500" />,
}

export default function Benefits() {
	const { t } = useLocale()
	const b = t.benefits
	const componentData = t.componentData.benefits
	const cardVariants = {
		...componentData.cardVariants,
		visible: {
			...componentData.cardVariants.visible,
			transition: { ...componentData.cardVariants.visible.transition, ease: 'easeOut' as const },
		},
	}

	const benefits = b.items.map((item, i) => ({
		...item,
		icon: benefitIconComponents[componentData.iconIds[i]],
		...componentData.styles[i],
	}))

	return (
		<section id="benefits" className="px-4 sm:px-2 lg:px-12 py-16 md:py-24 bg-white dark:bg-gray-950 overflow-hidden">
			<div className="max-w-7xl mx-auto">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4 }}
				>
					<span className="text-secondary font-semibold uppercase tracking-widest text-lg text-gray-900 dark:text-gray-100">{b.sectionBadge}</span>
					<h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
						{b.heading}
					</h2>
					<div className="mt-4 mx-auto w-16 h-1 rounded-md bg-linear-to-r from-primary to-secondary" />
				</motion.div>

				{/* Benefits Image */}
				<motion.div
					className="mb-12"
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.2, delay: 0.1 }}
				>
					<div className="relative max-w-7xl mx-auto">
						<div className="absolute inset-0 bg-linear-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-md blur-3xl" aria-hidden="true" />
						<div className="relative overflow-hidden rounded-md border border-white/20 bg-white/90 shadow-2xl backdrop-blur-sm dark:border-white/10 dark:bg-slate-950/90">
							<div className="absolute left-6 top-6 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-md font-semibold uppercase tracking-widest text-white backdrop-blur-md">
								{b.imageBadge}
							</div>
							<div className="min-h-96 md:aspect-video overflow-hidden">
								<OptimizedImage
									src="/images/smart-vawt-aerosunenergy.png"
									alt={b.imageAlt}
									fill
									sizes="(min-width: 1024px) 68rem, 92vw"
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent" aria-hidden="true" />
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
					className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4"
					variants={componentData.containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{benefits.map((ben) => (
						<motion.div
							key={ben.title}
							className="flex h-full"
							variants={cardVariants}
						>
							<Card className={`flex h-full w-full hover:shadow-lg hover:scale-105 transition-all duration-150 ${ben.bg} ${ben.border}`}>
								<CardContent className="flex h-full w-full flex-col">
									<div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white dark:bg-gray-700 shadow-sm">
										{ben.icon}
									</div>
									<h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">{ben.title}</h3>
									<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">{ben.desc}</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}