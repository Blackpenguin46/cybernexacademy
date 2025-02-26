const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Starting to fix dependency issues...');

// 1. Update package.json to handle optional dependencies better
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (fs.existsSync(packageJsonPath)) {
  console.log('Updating package.json...');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  // Remove problematic optional dependencies if they exist
  if (packageJson.optionalDependencies) {
    console.log('Removing optional dependencies...');
    delete packageJson.optionalDependencies;
  }
  
  // Add resolutions to force specific versions of problematic packages
  packageJson.resolutions = {
    ...packageJson.resolutions,
    'sharp': '0.32.6',
    'next-auth': '^4.22.1',
    '@babel/traverse': '7.23.2'
  };
  
  // Write the updated package.json
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
  console.log('Updated package.json');
}

// 2. Create a .npmrc file with settings to ignore optional dependencies
const npmrcPath = path.join(process.cwd(), '.npmrc');
const npmrcContent = `
# Skip optional dependencies
ignore-optional=true

# Disable fund messages
fund=false

# Disable audit
audit=false

# Use legacy peer dependencies
legacy-peer-deps=true

# Increase network timeout
network-timeout=100000

# Don't generate a package-lock.json file
package-lock=false
`;

fs.writeFileSync(npmrcPath, npmrcContent.trim(), 'utf8');
console.log('Created/Updated .npmrc file');

// 3. Create a netlify.toml file with optimized build settings
const netlifyTomlPath = path.join(process.cwd(), 'netlify.toml');
const netlifyTomlContent = `
[build]
  command = "npm run build-netlify"
  publish = ".next"
  functions = "netlify/functions"

[build.environment]
  NEXT_PUBLIC_SUPABASE_URL = "https://vxxpwaloyrtwvpmatzpc.supabase.co"
  NEXT_PUBLIC_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4eHB3YWxveXJ0d3ZwbWF0enBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxNjA0NjQsImV4cCI6MjA1NTczNjQ2NH0.ef0feqGxtWeB9C2SLtPwEk_lcW8pcVngo7fz1SsznDM"
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = "pk_live_51Ql07aFFerMkt7DHSGH7zeNFHTB3AehZJqwbYMgJiJxPujccc2K1NQsLju3YnDHs9tiArr7CcJUFVYWa3Ba3E3d100IDLb8cp2"
  NODE_VERSION = "18"
  NPM_FLAGS = "--legacy-peer-deps --no-optional"
  NPM_VERSION = "9"
  NETLIFY_USE_NPM = "true"
  NEXT_TELEMETRY_DISABLED = "1"
  NPM_CONFIG_LOGLEVEL = "error"
  DEBUG = "*"
  NEXT_USE_NETLIFY_EDGE = "true"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[functions]
  directory = "netlify/functions"
  external_node_modules = ["@supabase/supabase-js", "stripe"]
  included_files = ["app/api/**"]
  node_bundler = "esbuild"
`;

fs.writeFileSync(netlifyTomlPath, netlifyTomlContent.trim(), 'utf8');
console.log('Updated netlify.toml file');

// 4. Create a simplified next.config.js
const nextConfigPath = path.join(process.cwd(), 'next.config.js');
const nextConfigContent = `
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
console.log('Updated next.config.js file');

// 5. Try to install dependencies with the new settings
try {
  console.log('Installing dependencies with new settings...');
  execSync('npm install --no-optional --legacy-peer-deps', { stdio: 'inherit' });
  console.log('Successfully installed dependencies');
} catch (error) {
  console.error('Failed to install dependencies:', error);
}

console.log('Finished fixing dependency issues'); 