import type { NextConfig } from 'next'

const SITE_URL = 'https://aerosunenergy.in'

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
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
        source: '/estimation-calculator',
        destination: '/solar-calculator',
        permanent: true,
      },
      {
        source: '/login',
        destination: '/auth/login',
        permanent: true,
      },
      {
        source: '/signup',
        destination: '/auth/signup',
        permanent: true,
      },
      {
        source: '/dashboard',
        destination: '/auth/dashboard',
        permanent: true,
      },
      {
        source: '/terms-conditions',
        destination: '/billing/terms-conditions',
        permanent: true,
      },
      {
        source: '/customer-enquiry',
        destination: '/billing/customer-enquiry',
        permanent: true,
      },
      {
        source: '/customer-agreement',
        destination: '/billing/customer-agreement',
        permanent: true,
      },
      {
        source: '/installation-checklist',
        destination: '/billing/installation-checklist',
        permanent: true,
      },
      {
        source: '/invoice-receipt',
        destination: '/billing/invoice-receipt',
        permanent: true,
      },
      {
        source: '/purchase-order',
        destination: '/billing/purchase-order',
        permanent: true,
      },
      {
        source: '/warranty-policy',
        destination: '/billing/warranty-policy',
        permanent: true,
      },
      {
        source: '/nintydays-tracker',
        destination: '/billing/nintydays-tracker',
        permanent: true,
      },
      {
        source: '/research-development',
        destination: '/billing/research-development',
        permanent: true,
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
