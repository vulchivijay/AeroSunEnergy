'use client'

import { useEffect } from 'react'
import { ErrorExperience } from './components/system/ErrorExperience'
import { useLocale } from '@/lib/LocaleContext'

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
