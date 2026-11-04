'use client'

import { useEffect, useState } from 'react'

type Duration = {
	years: number
	months: number
	days: number
}

const startDate = { year: 2026, month: 9, day: 6 }

function getDuration(date: Date): Duration {
	const year = date.getFullYear()
	const month = date.getMonth()
	const day = date.getDate()

	if (
		year < startDate.year ||
		(year === startDate.year && month < startDate.month) ||
		(year === startDate.year && month === startDate.month && day < startDate.day)
	) {
		return { years: 0, months: 0, days: 0 }
	}

	let totalMonths = (year - startDate.year) * 12 + month - startDate.month
	let days = day - startDate.day

	if (days < 0) {
		const daysInPreviousMonth = new Date(year, month, 0).getDate()
		days += daysInPreviousMonth
		totalMonths -= 1
	}

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
		days,
	}
}

export default function CompanyAge() {
	const [duration, setDuration] = useState<Duration | null>(null)

	useEffect(() => {
		const updateDuration = () => setDuration(getDuration(new Date()))
		let timeout: number
		const scheduleUpdate = () => {
			const now = new Date()
			const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
			timeout = window.setTimeout(() => {
				updateDuration()
				scheduleUpdate()
			}, nextDay.getTime() - now.getTime())
		}

		updateDuration()
		scheduleUpdate()

		return () => window.clearTimeout(timeout)
	}, [])

	const units = duration
		? [
				...(duration.years > 0
					? [{ value: duration.years, label: duration.years === 1 ? 'year' : 'years' }]
					: []),
				{ value: duration.months, label: duration.months === 1 ? 'month' : 'months' },
				{ value: duration.days, label: duration.days === 1 ? 'day' : 'days' },
			]
		: null

	return (
		<p
			className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[12px] text-gray-200"
			aria-label={
				units
					? `Operating since October 6, 2026: ${units.map(({ value, label }) => `${value} ${label}`).join(', ')}`
					: 'Operating since October 6, 2026'
			}
		>
			<span aria-hidden="true">
				Operating since October{' '}
				<span className='text-[14px]' style={{ fontFamily: 'var(--font-digital), monospace' }}>6, 2026</span>
			</span>
			{units && (
				<span className="inline-flex items-baseline gap-1.5 text-[14px]" aria-hidden="true" style={{ fontFamily: 'var(--font-digital), monospace' }}>
					{units.map(({ value, label }) => (
						<span key={label} className="whitespace-nowrap">
							<span className="text-sm font-bold tabular-nums tracking-[0.08em] text-[#A5D6A7]">
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
