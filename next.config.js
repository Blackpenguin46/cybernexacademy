/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'vxxpwaloyrtwvpmatzpc.supabase.co'],
    unoptimized: true
  },
  experimental: {
    appDir: false,
  },
  webpack: (config, { isServer }) => {
    // Disable the jsconfig-paths-plugin
    config.resolve.plugins = config.resolve.plugins.filter(
      plugin => plugin.constructor.name !== 'JsConfigPathsPlugin'
    );
    
    // Add fallbacks for node modules
    config.resolve.fallback = { 
      ...config.resolve.fallback,
      fs: false, 
      path: false 
    };
    
    return config;
  },
  // Ensure TypeScript checking is handled by your IDE/CI
  typescript: {
    ignoreBuildErrors: false,
  },
  // Add env validation
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  }
}

module.exports = nextConfig

