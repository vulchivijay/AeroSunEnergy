import * as React from 'react'
import { cn } from '@/app/lib/utils/utils'

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-xl border border-gray-200/50 bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900 shadow-lg transition-all duration-300 backdrop-blur-sm hover:shadow-xl dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-gray-100',
        className,
      )}
      {...props}
    />
  ),
)
Card.displayName = 'Card'

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 text-gray-800 dark:text-gray-200', className)} {...props} />
  ),
)
CardContent.displayName = 'CardContent'

export { Card, CardContent }
