/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // For Vercel deployment, we don't need to use standalone output
  // output: "standalone",
  images: {
    domains: [],
  },
  // Disable eslint during build to speed up deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
