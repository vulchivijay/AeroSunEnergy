import type { Dispatch, FormEventHandler, SetStateAction } from 'react'
import { Send } from 'lucide-react'
import { FormDataNotice } from '@/app/components/forms/FormDataNotice'
import type { useLocale } from '@/lib/LocaleContext'

type FooterCopy = ReturnType<typeof useLocale>['t']['footer']

export function FooterNewsletterSignup({
  footer,
  newsletterEmail,
  setNewsletterEmail,
  newsletterPending,
  savingLabel,
  onSubmit,
}: {
  footer: FooterCopy
  newsletterEmail: string
  setNewsletterEmail: Dispatch<SetStateAction<string>>
  newsletterPending: boolean
  savingLabel: string
  onSubmit: FormEventHandler<HTMLFormElement>
}) {
  return (
<section aria-labelledby="footer-newsletter" className="mt-14 grid gap-6 rounded-xl bg-[#147e62] p-6 shadow-sm sm:p-8 lg:grid-cols-[1fr_1fr] lg:items-center">
					<div>
						<h2 id="footer-newsletter" className="text-slate-200 text-2xl sm:text-3xl leading-snug">{footer.stayPowered}</h2>
						<p className="mt-2 max-w-xl text-slate-100 text-sm sm:text-base font-normal tracking-normal sm:leading-5">{footer.newsletterDescription}</p>
					</div>
					<form onSubmit={onSubmit} className="w-full">
						<label htmlFor="footer-newsletter-email" className="sr-only text-xs sm:text-sm tracking-normal leading-5">{footer.newsletterEmailLabel}</label>
						<div className="flex flex-col gap-3 sm:flex-row">
							<input
								id="footer-newsletter-email"
								name="email"
								type="email"
								autoComplete="email"
								required
								maxLength={254}
								value={newsletterEmail}
								onChange={(event) => {
									setNewsletterEmail(event.target.value)
								}}
								placeholder={footer.newsletterPlaceholder}
								className="min-h-12 min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-5 text-slate-900 outline-none transition placeholder:text-slate-800 focus:border-[#137c63] focus:ring-2 focus:ring-emerald-700/20 text-sm sm:text-base font-normal tracking-normal leading-6"
							/>
							<button type="submit" disabled={newsletterPending} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-[#1fa34a] transition hover:bg-[#DCEDC8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A5D6A7] disabled:cursor-wait disabled:opacity-70 text-sm sm:text-base font-semibold tracking-normal leading-6">
								{newsletterPending ? savingLabel : footer.subscribe} <Send className="h-4 w-4" aria-hidden="true" />
							</button>
						</div>
						<p className="my-5 text-slate-200 text-sm sm:text-base font-normal tracking-normal sm:leading-5">{footer.newsletterHint}</p>
						<FormDataNotice className="text-slate-200" />
					</form>
				</section>
  )
}
