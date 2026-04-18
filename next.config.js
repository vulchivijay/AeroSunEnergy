/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS ? '/AeroSunEnergy' : '',
  images: {
    unoptimized: true,
  },
  experimental: {
    turbopack: false,
  },
}

module.exports = nextConfig
