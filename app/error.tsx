'use client'

import { useEffect } from 'react'
import { ErrorExperience } from './components/system/ErrorExperience'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      console.error('AeroSun page error', error)
    }
  }, [error])

  return (
    <ErrorExperience
      code="500"
      eyebrow="Unexpected interruption"
      title="Something Went Wrong on Our Side."
      description="Our systems encountered an unexpected issue. Please try again shortly. If the problem continues, contact our team."
      illustration="control-room"
      primaryAction={{ label: 'Try Again', onClick: reset }}
      secondaryAction={{ label: 'Return Home', href: '/' }}
    />
  )
}
