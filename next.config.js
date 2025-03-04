/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable static generation for auth pages
  experimental: {
    appDir: true,
  },
  output: 'standalone',
  // Mark auth pages as dynamic to prevent static generation
  async generateStaticParams() {
    return {
      '/auth/login': { dynamic: true },
      '/auth/register': { dynamic: true },
      '/auth/forgot-password': { dynamic: true },
      '/auth/reset-password': { dynamic: true },
    }
  }
}

module.exports = nextConfig

