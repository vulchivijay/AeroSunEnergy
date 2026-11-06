export function withEaseOutCardTransition<T extends { visible: { transition: object } }>(variants: T) {
  return {
    ...variants,
    visible: {
      ...variants.visible,
      transition: { ...variants.visible.transition, ease: 'easeOut' as const },
    },
  }
}
