/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['vxxpwaloyrtwvpmatzpc.supabase.co']
  }
}

module.exports = nextConfig

