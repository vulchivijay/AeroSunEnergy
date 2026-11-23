'use client'

import { useLocale } from '@/lib/LocaleContext'

export function FormDataNotice({ className = 'text-slate-500' }: { className?: string }) {
  const { t } = useLocale()

  return (
    <p className={`${className} text-sm sm:text-base font-normal tracking-normal sm:leading-5`}>
      {t.formDataNotice.prefix}
    </p>
  )
}
