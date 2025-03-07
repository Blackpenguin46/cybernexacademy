/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable dynamic rendering
  experimental: {
    // Server Actions are available by default
  },
  // Ensure server-side rendering
  poweredByHeader: false,
  // Compress responses
  compress: true,
}

module.exports = nextConfig


