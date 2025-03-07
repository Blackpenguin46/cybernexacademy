/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Configure webpack to handle CSS properly
  webpack: (config) => {
    return config;
  },
}

module.exports = nextConfig


