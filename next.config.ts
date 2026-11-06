import type { NextConfig } from 'next'

const SITE_URL = 'https://aerosunenergy.in'
const productionCacheHeaders: { key: string; value: string }[] =
  process.env.NODE_ENV === 'production'
    ? [{ key: 'Cache-Control', value: 'public, max-age=86400, must-revalidate' }]
    : []
const noCacheHeaders: { key: string; value: string }[] =
  process.env.NODE_ENV === 'production'
    ? [{ key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate' }]
    : []

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/not-found',
        permanent: false,
      },
      {
        source: '/docs/:path*',
        destination: '/not-found',
        permanent: false,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.aerosunenergy.in' }],
        destination: `${SITE_URL}/:path*`,
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'aerosunenergy.com' }],
        destination: `${SITE_URL}/:path*`,
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.aerosunenergy.com' }],
        destination: `${SITE_URL}/:path*`,
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/docs',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive, nosnippet' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          ...noCacheHeaders,
        ],
      },
      {
        source: '/docs/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive, nosnippet' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          ...noCacheHeaders,
        ],
      },
      {
        source: '/:path*',
        headers: productionCacheHeaders,
      },
      {
        source: '/_next/static/:path*',
        headers: productionCacheHeaders,
      },
      {
        source: '/images/:path*',
        headers: productionCacheHeaders,
      },
      {
        source: '/favicon.ico',
        headers: productionCacheHeaders,
      },
    ].filter(({ headers }) => headers.length > 0)
  },
}

export default nextConfig
