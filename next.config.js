/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'vxxpwaloyrtwvpmatzpc.supabase.co'],
    unoptimized: true
  },
  experimental: {
    appDir: true
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
  }
}

module.exports = nextConfig

