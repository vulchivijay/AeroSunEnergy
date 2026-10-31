'use client'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import type { ReactNode } from 'react'

interface TooltipProps {
  children: ReactNode
  content: ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
  className?: string
}

export default function Tooltip({
  children,
  content,
  side = 'top',
  align = 'center',
  className,
}: TooltipProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={150}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            align={align}
            sideOffset={8}
            className={[
              'z-50 max-w-xs rounded-xl border border-slate-200 bg-slate-900 px-2.5 py-1.5 text-xs font-medium text-slate-50 shadow-lg shadow-slate-900/20 dark:border-slate-700 dark:bg-slate-800',
              className,
            ].join(' ')}
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-slate-900 dark:fill-slate-800" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
