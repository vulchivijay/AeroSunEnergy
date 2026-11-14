'use client'

import { useEffect, useState } from 'react'
import { useLocale } from '@/lib/LocaleContext'

type Duration = {
	years: number
	months: number
	days: number
}

const START_DATE = new Date(2026, 9, 6)

function getDuration(date: Date): Duration {
	const referenceDate = new Date(date)
	referenceDate.setHours(0, 0, 0, 0)

	if (referenceDate < START_DATE) {
		return { years: 0, months: 0, days: 0 }
	}

	let totalMonths =
		(referenceDate.getFullYear() - START_DATE.getFullYear()) * 12 +
		(referenceDate.getMonth() - START_DATE.getMonth())
	let days = referenceDate.getDate() - START_DATE.getDate()

	if (days < 0) {
		const previousMonth = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), 0)
		days += previousMonth.getDate()
		totalMonths -= 1
	}

	const years = Math.floor(totalMonths / 12)
	const months = totalMonths % 12

	return {
		years,
		months: months < 0 ? 0 : months,
		days,
	}
}

export default function CompanyAge() {
	const { locale, t } = useLocale()
	const [duration, setDuration] = useState<Duration | null>(null)
	const companyAge = t.companyAge
	const digitalFontStyle = t.componentData.companyAge.digitalFontStyle

	useEffect(() => {
		const updateDuration = () => setDuration(getDuration(new Date()))
		let timeout: number | undefined

		const scheduleUpdate = () => {
			const now = new Date()
			const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
			timeout = window.setTimeout(() => {
				updateDuration()
				scheduleUpdate()
			}, Math.max(nextDay.getTime() - now.getTime(), 0))
		}

		updateDuration()
		scheduleUpdate()

		return () => {
			if (timeout !== undefined) {
				window.clearTimeout(timeout)
			}
		}
	}, [])

	const units = duration
		? [
				...(duration.years > 0
					? [{ value: duration.years, label: duration.years === 1 ? companyAge.year : companyAge.years }]
					: []),
				...(duration.years > 0 || duration.months > 0 || duration.days > 0
					? [{ value: duration.months, label: duration.months === 1 ? companyAge.month : companyAge.months }]
					: []),
				...(duration.days >= 0
					? [{ value: duration.days, label: duration.days === 1 ? companyAge.day : companyAge.days }]
					: []),
			]
		: null

	const formatter = new Intl.DateTimeFormat({
		en: 'en-US',
		hi: 'hi-IN',
		te: 'te-IN',
		ta: 'ta-IN',
		kn: 'kn-IN',
		ml: 'ml-IN',
	}[locale], {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	})
	const formattedStartDate = formatter.format(START_DATE)

	return (
		<p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[12px] text-gray-200">
			<span>
				{companyAge.operatingSince}{' '}
				<span className="text-[14px]" style={digitalFontStyle}>{formattedStartDate}</span>
			</span>
			{units && (
				<span className="inline-flex items-baseline gap-1.5 text-[14px]" style={digitalFontStyle}>
					{units.map(({ value, label }) => (
						<span key={`${label}-${value}`} className="whitespace-nowrap">
							<span className="text-sm font-bold tracking-[0.08em] text-[#A5D6A7]">
								{String(value).padStart(2, '0')}
							</span>{' '}
							{label}
						</span>
					))}
				</span>
			)}
		</p>
	)
}
