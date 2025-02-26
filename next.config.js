/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['vxxpwaloyrtwvpmatzpc.supabase.co']
  },
  experimental: {
    serverActions: true
  }
}

module.exports = nextConfig

