'use client'

import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { useLocale } from '@/lib/LocaleContext'

const ErrorExperience = dynamic(() =>
  import('./components/system/ErrorExperience').then((module) => module.ErrorExperience),
)

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { t } = useLocale()
  const content = t.systemUi.unexpectedError

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      console.error('AeroSun page error', error)
    }
  }, [error])

  return (
    <ErrorExperience
      code="500"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      illustration="control-room"
      primaryAction={{ label: content.tryAgain, onClick: reset }}
      secondaryAction={{ label: content.returnHome, href: '/' }}
    />
  )
}
