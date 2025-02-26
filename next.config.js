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
    serverActions: true,
    esmExternals: 'loose'
  },
  env: {
    NEXT_TELEMETRY_DISABLED: '1'
  },
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
      "crypto": false
    };
    
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': '.',
      '@/lib': './lib',
      '@/components': './components',
      '@/app': './app',
      '@/contexts': './contexts'
    };
    
    return config;
  }
}

module.exports = nextConfig

