'use client'

import Link from 'next/link'
import { useLocale } from '@/lib/LocaleContext'

export function FormDataNotice({ className = 'text-slate-500' }: { className?: string }) {
  const { t } = useLocale()

  return (
    <p className={`text-xs leading-5 ${className}`}>
      {t.formDataNotice.prefix}{' '}
      <Link className="font-semibold underline underline-offset-2" href="/privacy-policy">
        {t.formDataNotice.link}
      </Link>.
    </p>
  )
}
