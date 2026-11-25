import Link from 'next/link'
import { ArrowUpRight, Globe, Mail, MapPin, Phone, Sun, Wind } from 'lucide-react'
import { DigitalNumber } from '@/app/components/ui/DigitalNumber'
import type { useLocale } from '@/lib/LocaleContext'

type FooterCopy = ReturnType<typeof useLocale>['t']['footer']

export function FooterContactInformation({ footer, mapUrl, companyAddress, websiteUrl }: { footer: FooterCopy; mapUrl: string; companyAddress: string; websiteUrl: string }) {
  return (
<section aria-labelledby="footer-contact">
						<h2 id="footer-contact" className="mb-5 uppercase text-sky-200 text-2xl leading-snug">{footer.contactInformation}</h2>
						<ul className="space-y-4 text-sm leading-6 text-white/80 ">
							<li className="flex items-start gap-3">
								<MapPin className="mt-1 h-4 w-4 shrink-0 text-amber-300" aria-hidden="true" />
								<a href={mapUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-amber-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200 focus-visible:text-amber-100">
									{companyAddress}<span className="sr-only"> {footer.opensInNewTab}</span>
								</a>
							</li>
							<li className="flex items-center gap-3">
								<Mail className="h-4 w-4 shrink-0 text-amber-300" aria-hidden="true" />
								<span className="break-all">{footer.email}</span>
							</li>
							<li className="flex items-center gap-3 ">
								<Phone className="h-4 w-4 shrink-0 text-amber-300 " aria-hidden="true" />
								<a href={`tel:${footer.phoneHref}`} className="transition-colors hover:text-amber-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200 focus-visible:text-amber-100 "><DigitalNumber value={footer.phone} /></a>
							</li>
							<li className="flex items-center gap-3">
								<Globe className="h-4 w-4 shrink-0 text-amber-300" aria-hidden="true" />
								<a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-amber-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200 focus-visible:text-amber-100">{footer.website}<span className="sr-only"> {footer.opensInNewTab}</span></a>
							</li>
							<li>
								<Link href="/save-earth" className="group inline-flex min-h-11 items-center gap-2 text-sm text-white/80 transition-colors hover:text-amber-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200 focus-visible:text-amber-100">
									<ArrowUpRight className="h-4 w-4 text-sky-200" aria-hidden="true" />{footer.saveEarth}
								</Link>
							</li>
							<li>
								<a href={footer.trust?.startsWith('http') ? footer.trust : `https://${footer.trust}`} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-11 items-center gap-2 text-sm text-white/80 transition-colors hover:text-amber-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200 focus-visible:text-amber-100" aria-label={footer.visitTrustLink.replace('{trust}', footer.trust)}>
									<ArrowUpRight className="h-4 w-4 text-sky-200" aria-hidden="true" />{footer.saveSanatanaDharma}
								</a>
							</li>
						</ul>
						<div className="mt-6 flex items-center gap-2 border-t border-slate-700 pt-4 text-sm text-white/75">
							<Sun className="h-4 w-4 text-amber-300" aria-hidden="true" />
							<Wind className="h-4 w-4 text-sky-200" aria-hidden="true" />
							<span>{footer.solarWindHybrid}</span>
						</div>
					</section>
  )
}
