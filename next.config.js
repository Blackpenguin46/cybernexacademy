/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  poweredByHeader: false,
  images: {
    domains: ["localhost", "vercel.app"],
    unoptimized: process.env.NODE_ENV !== "production",
  },
}

module.exports = nextConfig

