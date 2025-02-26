const fs = require('fs');
const path = require('path');

console.log('Fixing next.config.js file...');

const nextConfigPath = path.join(process.cwd(), 'next.config.js');
if (fs.existsSync(nextConfigPath)) {
  console.log('Updating next.config.js...');
  
  // Create a proper next.config.js with the path import
  const nextConfigContent = `
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'vxxpwaloyrtwvpmatzpc.supabase.co'],
    unoptimized: true
  },
  experimental: {},
  webpack: (config) => {
    // Completely disable the jsconfig-paths-plugin
    if (config.resolve.plugins) {
      config.resolve.plugins = config.resolve.plugins.filter(
        plugin => !plugin.constructor || plugin.constructor.name !== 'JsConfigPathsPlugin'
      );
    }
    
    // Manually add path aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
      '@/components': path.resolve(__dirname, 'components'),
      '@/app': path.resolve(__dirname, 'app'),
      '@/lib': path.resolve(__dirname, 'lib'),
      '@/contexts': path.resolve(__dirname, 'contexts'),
      '@/styles': path.resolve(__dirname, 'styles'),
      '@/public': path.resolve(__dirname, 'public')
    };
    
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
`;

  fs.writeFileSync(nextConfigPath, nextConfigContent.trim(), 'utf8');
  console.log('Updated next.config.js with path import');
} else {
  console.error('next.config.js file not found!');
}

console.log('Finished fixing next.config.js file'); 