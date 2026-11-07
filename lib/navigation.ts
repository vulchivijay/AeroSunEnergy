const productionComingSoonHrefs = new Set(['/windenergy', '/hybridenergy'])

export function isProductionComingSoonLink(href: string): boolean {
  return process.env.NODE_ENV === 'production' && productionComingSoonHrefs.has(href)
}
