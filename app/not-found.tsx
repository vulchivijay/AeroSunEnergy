import { ErrorExperience } from './components/system/ErrorExperience'

const helpfulLinks = [
  { label: 'Solar energy', href: '/solarenergy' },
  { label: 'Wind energy', href: '/windenergy' },
  { label: 'Hybrid energy', href: '/hybridenergy' },
  { label: 'Contact us', href: '/contact' },
]

export default function NotFound() {
  return (
    <ErrorExperience
      code="404"
      eyebrow="Page not found"
      title="Looks Like You’ve Lost Your Way."
      description="The page you’re looking for may have moved, been removed or is temporarily unavailable. Let’s help you find your way back."
      illustration="landscape"
      primaryAction={{ label: 'Back to Home', href: '/' }}
      secondaryAction={{ label: 'Explore Our Solutions', href: '/services' }}
      helpfulLinks={helpfulLinks}
    />
  )
}
