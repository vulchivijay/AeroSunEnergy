'use client'

import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Gift, UsersRound } from 'lucide-react'
import Link from 'next/link'
import { useLocale } from '@/lib/LocaleContext'

type ReferralResponse = {
  referenceCode: string
}

function isReferralResponse(value: unknown): value is ReferralResponse {
  return (
    typeof value === 'object' &&
    value !== null &&
    'referenceCode' in value &&
    typeof value.referenceCode === 'string'
  )
}

export function ReferralProgramSection() {
  const { t } = useLocale()
  const content = t.home.referralProgram
  const formContent = content.form
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [referenceCode, setReferenceCode] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    setStatus('submitting')

    try {
      const response = await fetch('/api/referrals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          referrerName: formData.get('referrerName'),
          referrerPhone: formData.get('referrerPhone'),
          referredName: formData.get('referredName'),
          referredPhone: formData.get('referredPhone'),
          postalCode: formData.get('postalCode'),
          propertyType: formData.get('propertyType'),
          consent: formData.get('consent') === 'true',
        }),
      })
      const result: unknown = await response.json()

      if (!response.ok || !isReferralResponse(result)) {
        setStatus('error')
        return
      }

      setReferenceCode(result.referenceCode)
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  const inputClassName = 'mt-1.5 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15'

  return (
    <section
      id="referral-program"
      className="relative isolate overflow-hidden bg-[#0B2922] px-4 py-14 text-white sm:px-6 lg:px-10 lg:py-18"
      aria-labelledby="referral-program-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_8%_0%,rgba(163,217,119,0.17),transparent_35%),radial-gradient(ellipse_at_94%_100%,rgba(245,199,106,0.12),transparent_32%)]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#A3D977]">{content.eyebrow}</p>
          <h2 id="referral-program-title" className="mt-3 max-w-xl text-3xl font-black tracking-tight sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-emerald-50/75 sm:text-base">
            {content.description}
          </p>

          <ol className="mt-7 space-y-3">
            {content.steps.map((step, index) => (
              <li key={step.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#A3D977] text-sm font-black text-[#0B2922]">
                  {index + 1}
                </span>
                <span>
                  <span className="block font-bold text-white">{step.title}</span>
                  <span className="mt-1 block text-sm leading-6 text-emerald-50/70">{step.description}</span>
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-5 flex gap-3 rounded-2xl border border-amber-200/20 bg-amber-100/10 p-4">
            <Gift className="mt-0.5 h-5 w-5 shrink-0 text-amber-200" aria-hidden="true" />
            <p className="text-sm leading-6 text-amber-50">
              <span className="font-bold">{content.rewardNoteTitle} </span>
              {content.rewardNote}
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white p-5 text-slate-900 shadow-[0_30px_90px_-45px_rgba(0,0,0,0.7)] sm:p-7">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-900">
              <UsersRound className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-xl font-extrabold">{formContent.title}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">{formContent.description}</p>
            </div>
          </div>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-slate-800">
                {formContent.referrerNameLabel}
                <input className={inputClassName} name="referrerName" type="text" autoComplete="name" minLength={2} maxLength={100} required />
              </label>
              <label className="block text-sm font-semibold text-slate-800">
                {formContent.referrerPhoneLabel}
                <input className={inputClassName} name="referrerPhone" type="tel" inputMode="tel" autoComplete="tel" maxLength={16} required />
              </label>
              <label className="block text-sm font-semibold text-slate-800">
                {formContent.referredNameLabel}
                <input className={inputClassName} name="referredName" type="text" minLength={2} maxLength={100} required />
              </label>
              <label className="block text-sm font-semibold text-slate-800">
                {formContent.referredPhoneLabel}
                <input className={inputClassName} name="referredPhone" type="tel" inputMode="tel" maxLength={16} required />
              </label>
              <label className="block text-sm font-semibold text-slate-800">
                {formContent.postalCodeLabel}
                <input className={inputClassName} name="postalCode" type="text" inputMode="numeric" autoComplete="postal-code" pattern="[0-9]{6}" maxLength={6} required />
              </label>
              <label className="block text-sm font-semibold text-slate-800">
                {formContent.propertyTypeLabel}
                <select className={inputClassName} name="propertyType" defaultValue="" required>
                  <option value="" disabled>{formContent.propertyTypePlaceholder}</option>
                  {formContent.propertyTypes.map((propertyType) => (
                    <option key={propertyType.value} value={propertyType.value}>{propertyType.label}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-slate-50 p-3.5 text-sm leading-6 text-slate-700">
              <input className="mt-1 h-4 w-4 shrink-0 accent-emerald-800" name="consent" type="checkbox" value="true" required />
              <span>{formContent.consent}</span>
            </label>

            <p className="text-xs leading-5 text-slate-500">
              {formContent.privacyPrefix}{' '}
              <Link className="font-semibold text-emerald-800 underline underline-offset-2" href="/privacy-policy">
                {formContent.privacyLink}
              </Link>.
            </p>

            {status === 'error' && (
              <p className="rounded-xl bg-red-50 px-3.5 py-3 text-sm text-red-800" role="alert">
                {formContent.error}
              </p>
            )}
            {status === 'success' && (
              <div className="rounded-xl bg-emerald-50 px-3.5 py-3 text-sm text-emerald-900" role="status" aria-live="polite">
                <p className="font-bold">{formContent.successTitle}</p>
                <p className="mt-1">{formContent.successDescription}</p>
                <p className="mt-2 font-semibold">{formContent.referenceLabel}: <span className="font-mono">{referenceCode}</span></p>
              </div>
            )}

            <button
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#A3D977] px-5 py-3 text-sm font-extrabold text-[#0B2922] transition hover:bg-[#c7efa4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2922] disabled:cursor-wait disabled:opacity-70"
              type="submit"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? formContent.submitting : formContent.submit}
              {status !== 'submitting' && <ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
