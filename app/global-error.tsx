'use client'

import { useEffect } from 'react'
import { ErrorExperience } from './components/system/ErrorExperience'
import './globals.css'
import { useLocale } from '@/lib/LocaleContext'

export default function GlobalError({
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
      console.error('AeroSun root layout error', error)
    }
  }, [error])

  return (
    <html lang="en">
      <body className="bg-[#071b17]">
        <ErrorExperience
          code="500"
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          illustration="control-room"
          primaryAction={{ label: content.tryAgain, onClick: reset }}
          secondaryAction={{ label: content.returnHome, href: '/' }}
        />
      </body>
    </html>
  )
}
