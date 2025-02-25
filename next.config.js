/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['vxxpwaloyrtwvpmatzpc.supabase.co']
  },
  distDir: '.next',
  experimental: {
    serverActions: true
  },
  env: {
    NEXT_TELEMETRY_DISABLED: '1'
  }
}

module.exports = nextConfig

