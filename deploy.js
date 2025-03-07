#!/usr/bin/env node

// This script is used to ensure dynamic rendering when deploying to Vercel

const fs = require('fs');
const path = require('path');

// Set environment for dynamic rendering
process.env.NEXT_PUBLIC_RENDER_MODE = 'dynamic';
process.env.NEXT_STATIC_OPTIMIZATION = 'false';

// Read next.config.js
const configPath = path.join(process.cwd(), 'next.config.js');
let configContent = fs.readFileSync(configPath, 'utf8');

// Add dynamic rendering configurations
if (!configContent.includes('headers')) {
  console.log('✅ Adding Cache-Control headers to next.config.js');
  const dynamicConfig = `
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate',
          },
        ],
      },
    ];
  },`;
  
  configContent = configContent.replace(
    'const nextConfig = {',
    `const nextConfig = {\n${dynamicConfig}`
  );
  
  fs.writeFileSync(configPath, configContent);
}

// Update package.json to use custom build command
const packagePath = path.join(process.cwd(), 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

// Ensure we have the right build script
packageJson.scripts.vercel_build = "NEXT_PUBLIC_RENDER_MODE=dynamic NEXT_STATIC_OPTIMIZATION=false next build";

fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));

console.log('✅ Deployment script completed');
console.log('✅ Build configuration updated for dynamic rendering'); 