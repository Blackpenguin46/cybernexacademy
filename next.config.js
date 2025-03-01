/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // For Netlify compatibility
  output: 'standalone',
  // Explicitly disable experimental edge features
  experimental: {
    appDir: false,
    serverActions: false,
    serverComponents: false
  },
  // Replace edge functions module completely
  webpack: (config, { isServer }) => {
    // Add resolver to replace @netlify/edge-functions with our mock
    config.resolve.alias['@netlify/edge-functions'] = path.resolve(__dirname, './lib/netlify-edge-mock.js');
    
    // If there are any middleware files, prevent them from using edge runtime
    config.module.rules.push({
      test: /middleware\.(js|ts)x?$/,
      use: [
        {
          loader: 'string-replace-loader',
          options: {
            search: 'export const runtime = "edge"',
            replace: '// export const runtime = "edge" - disabled',
            flags: 'g'
          }
        }
      ]
    });
    
    return config;
  },
}

module.exports = nextConfig