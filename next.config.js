/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['images.unsplash.com'], // Add any image domains you'll use
  },
  // Use standalone output for better deployment
  output: 'standalone',
  // Enable server actions with size limit
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    }
  },
  // Disable static page generation
  generateStaticParams: false,
  // Force dynamic rendering for all pages
  dynamic: 'force-dynamic',
  // Disable static exports
  trailingSlash: false,
  distDir: '.next'
}

module.exports = nextConfig

