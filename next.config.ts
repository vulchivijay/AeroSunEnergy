import type { NextConfig } from 'next'

const SITE_URL = 'https://aerosunenergy.in'

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    unoptimized: true,
    qualities: [70, 75],
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
    const docsHeaders = [
      {
        source: '/docs',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive, nosnippet' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          ...(process.env.NODE_ENV === 'production'
            ? [{ key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate' }]
            : []),
        ],
      },
      {
        source: '/docs/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive, nosnippet' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          ...(process.env.NODE_ENV === 'production'
            ? [{ key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate' }]
            : []),
        ],
      },
    ]

    if (process.env.NODE_ENV !== 'production') return docsHeaders

    const productionCacheHeaders = [
      { key: 'Cache-Control', value: 'public, max-age=86400, must-revalidate' },
    ]

    return [
      ...docsHeaders,
      { source: '/:path*', headers: productionCacheHeaders },
      { source: '/_next/static/:path*', headers: productionCacheHeaders },
      { source: '/images/:path*', headers: productionCacheHeaders },
      { source: '/favicon.ico', headers: productionCacheHeaders },
      { source: '/api/:path*', headers: [{ key: 'Cache-Control', value: 'no-store' }] },
    ]
  },
}

export default nextConfig
