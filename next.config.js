/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/learning-resources',
        destination: '/',
      },
      {
        source: '/community',
        destination: '/',
      },
      {
        source: '/careers',
        destination: '/',
      },
      {
        source: '/college-students',
        destination: '/',
      },
      {
        source: '/tools-utilities',
        destination: '/',
      },
      {
        source: '/cybernex-plus',
        destination: '/',
      },
    ];
  },
}

module.exports = nextConfig

