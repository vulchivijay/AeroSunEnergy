'use client'

import React from 'react'

type MotionLikeProps = {
  initial?: unknown
  animate?: unknown
  whileInView?: unknown
  whileHover?: unknown
  whileTap?: unknown
  exit?: unknown
  transition?: unknown
  variants?: unknown
  viewport?: unknown
  layout?: unknown
  children?: React.ReactNode
  [key: string]: unknown
}

const componentCache = new Map<string, React.ComponentType<MotionLikeProps>>()

function createMotionComponent(tagName: string) {
  const MotionComponent = React.forwardRef<HTMLElement, MotionLikeProps>(function MotionComponent(
    {
      initial,
      animate,
      whileInView,
      whileHover,
      whileTap,
      exit,
      transition,
      variants,
      viewport,
      layout,
      children,
      ...rest
    },
    ref,
  ) {
    return React.createElement(tagName, { ...rest, ref }, children)
  })

  MotionComponent.displayName = `Motion(${tagName})`

  return MotionComponent
}

export const motion: Record<string, React.ComponentType<MotionLikeProps>> = new Proxy(
  {},
  {
    get(_, property) {
      const tagName = String(property)

      if (!componentCache.has(tagName)) {
        componentCache.set(tagName, createMotionComponent(tagName))
      }

      return componentCache.get(tagName)
    },
  },
)