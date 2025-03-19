/** @type {import('next').NextConfig} */
const productionConfig = require('./config/production.js');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  poweredByHeader: false,
  images: {
    domains: ["localhost", "vercel.app", "avatars.githubusercontent.com", "lh3.googleusercontent.com"],
    unoptimized: process.env.NODE_ENV !== "production",
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  webpack: (config, { isServer }) => {
    // Handle package deprecation warnings
    config.ignoreWarnings = [
      { module: /node_modules\/@supabase\/auth-helpers-shared/ },
      { module: /node_modules\/@supabase\/auth-helpers-nextjs/ },
    ];
    return config;
  },
};

// Merge configurations based on environment
module.exports = process.env.NODE_ENV === 'production' 
  ? { ...nextConfig, ...productionConfig }
  : nextConfig;

