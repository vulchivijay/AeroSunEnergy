'use client'

import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Gift } from 'lucide-react'
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
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:gap-10 xl:grid-cols-[0.82fr_1.18fr] xl:items-center">
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-100 sm:text-xs">
            {content.eyebrow}
          </p>
          <h2 id="referral-program-title" className="mt-5 max-w-2xl text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            {content.description}
          </p>

          <ol className="mt-8 space-y-3 sm:mt-10">
            {content.steps.map((step, index) => (
              <li key={step.title} className="flex gap-4 rounded-2xl bg-white/10 p-4 sm:p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-base font-black text-[#ffbd4a]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0">
                  <span className="block font-bold text-white">{step.title}</span>
                  <span className="mt-1 block text-sm leading-6 text-white/75">{step.description}</span>
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-4 flex gap-3 rounded-2xl bg-white/10 p-4">
            <Gift className="mt-0.5 h-5 w-5 shrink-0 text-[#ffbd4a]" aria-hidden="true" />
            <p className="text-sm leading-6 text-white/85">
              <span className="font-bold text-white">{content.rewardNoteTitle} </span>
              {content.rewardNote}
            </p>
          </div>
        </div>

        <div className="min-w-0 rounded-[28px] bg-[#f8f7f1] p-5 text-slate-900 shadow-[0_28px_70px_-38px_rgba(0,0,0,0.28)] sm:rounded-[32px] sm:p-7 lg:p-9">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#087a61] sm:text-[11px]">
                {formContent.title}
              </p>
              <h3 className="mt-3 text-2xl font-bold leading-tight text-[#122b2a] sm:text-3xl">
                {formContent.conversationTitle}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {formContent.description}
              </p>
            </div>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e8f0e8] text-[#087a61]">
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </span>
          </div>

          <form className="mt-6 space-y-5 sm:mt-7" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 sm:gap-y-5">
              <label className="block text-xs font-medium text-slate-600 sm:text-sm">
                {formContent.referrerNameLabel}
                <input className={inputClassName} name="referrerName" type="text" autoComplete="name" placeholder={formContent.referrerNameLabel} minLength={2} maxLength={100} required />
              </label>
              <label className="block text-xs font-medium text-slate-600 sm:text-sm">
                {formContent.referrerPhoneLabel}
                <input className={inputClassName} name="referrerPhone" type="tel" inputMode="tel" autoComplete="tel" placeholder={formContent.referrerPhoneLabel} maxLength={16} required />
              </label>
              <label className="block text-xs font-medium text-slate-600 sm:text-sm">
                {formContent.referredNameLabel}
                <input className={inputClassName} name="referredName" type="text" placeholder={formContent.referredNameLabel} minLength={2} maxLength={100} required />
              </label>
              <label className="block text-xs font-medium text-slate-600 sm:text-sm">
                {formContent.referredPhoneLabel}
                <input className={inputClassName} name="referredPhone" type="tel" inputMode="tel" placeholder={formContent.referredPhoneLabel} maxLength={16} required />
              </label>
              <label className="block text-xs font-medium text-slate-600 sm:text-sm">
                {formContent.postalCodeLabel}
                <input className={inputClassName} name="postalCode" type="text" inputMode="numeric" autoComplete="postal-code" placeholder={formContent.postalCodeLabel} pattern="[0-9]{6}" maxLength={6} required />
              </label>
              <label className="block text-xs font-medium text-slate-600 sm:text-sm">
                {formContent.propertyTypeLabel}
                <select className={inputClassName} name="propertyType" defaultValue="" required>
                  <option value="" disabled>{formContent.propertyTypePlaceholder}</option>
                  {formContent.propertyTypes.map((propertyType) => (
                    <option key={propertyType.value} value={propertyType.value}>{propertyType.label}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-slate-500 sm:text-sm">
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
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#17865e] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#126f4e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17865e] disabled:cursor-wait disabled:opacity-70"
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
