'use client'

import { ErrorExperience } from './components/system/ErrorExperience'
import { useLocale } from '@/lib/LocaleContext'

export default function NotFound() {
  const { t } = useLocale()
  const content = t.systemUi.notFound

  return (
    <ErrorExperience
      code="404"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      illustration="landscape"
      primaryAction={{ label: content.backToHome, href: '/' }}
      secondaryAction={{ label: content.exploreSolutions, href: '/services' }}
      helpfulLinks={content.helpfulLinks}
    />
  )
}
