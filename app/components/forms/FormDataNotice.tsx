'use client'

import { useLocale } from '@/lib/LocaleContext'

export function FormDataNotice({ className = 'text-slate-500' }: { className?: string }) {
  const { t } = useLocale()

  return (
    <p className={`text-xs leading-5 ${className}`}>
      {t.formDataNotice.prefix}
    </p>
  )
}
