const productionComingSoonHrefs = new Set(['/wind-energy', '/hybrid-energy'])

export function isProductionComingSoonLink(href: string): boolean {
  return process.env.NODE_ENV === 'production' && productionComingSoonHrefs.has(href)
}
