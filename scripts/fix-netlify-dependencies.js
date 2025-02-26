const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Starting to fix Netlify dependency issues...');

// 1. Update package.json to handle problematic dependencies
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (fs.existsSync(packageJsonPath)) {
  console.log('Updating package.json...');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  // Remove optional dependencies if they exist
  if (packageJson.optionalDependencies) {
    console.log('Removing optional dependencies...');
    delete packageJson.optionalDependencies;
  }
  
  // Update dependencies to use specific versions known to work
  packageJson.dependencies = {
    ...packageJson.dependencies,
    "next": "14.0.4",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "@supabase/supabase-js": "2.39.0",
    "framer-motion": "10.16.4",
    "stripe": "13.9.0",
    "tailwindcss": "3.3.5",
    "typescript": "5.2.2",
    "autoprefixer": "10.4.16",
    "postcss": "8.4.31"
  };
  
  // Remove any problematic dependencies
  const problematicDeps = [
    'fsevents',
    '@next/swc-darwin-arm64',
    '@next/swc-darwin-x64',
    '@next/swc-linux-arm64-gnu',
    '@next/swc-linux-arm64-musl',
    '@next/swc-linux-x64-gnu',
    '@next/swc-win32-arm64-msvc',
    '@next/swc-win32-ia32-msvc',
    '@next/swc-win32-x64-msvc'
  ];
  
  problematicDeps.forEach(dep => {
    if (packageJson.dependencies && packageJson.dependencies[dep]) {
      delete packageJson.dependencies[dep];
    }
    if (packageJson.devDependencies && packageJson.devDependencies[dep]) {
      delete packageJson.devDependencies[dep];
    }
  });
  
  // Add resolutions to force specific versions
  packageJson.resolutions = {
    ...packageJson.resolutions,
    'sharp': '0.32.6',
    'next-auth': '^4.22.1',
    '@babel/traverse': '7.23.2',
    'glob': '10.3.10',
    'rimraf': '5.0.5',
    'inflight': '1.0.6'
  };
  
  // Write the updated package.json
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
  console.log('Updated package.json');
}

// 2. Create a more aggressive .npmrc file
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
network-timeout=300000

# Don't generate a package-lock.json file
package-lock=false

# Force use of npm registry
registry=https://registry.npmjs.org/

# Disable progress bar to reduce log noise
progress=false

# Disable update notifier
update-notifier=false

# Disable scripts
ignore-scripts=true

# Offline mode (use cache if available)
prefer-offline=true

# Maximum number of retries
fetch-retries=5

# Retry factor
fetch-retry-factor=2

# Retry mintimeout
fetch-retry-mintimeout=10000

# Retry maxtimeout
fetch-retry-maxtimeout=60000
`;

fs.writeFileSync(npmrcPath, npmrcContent.trim(), 'utf8');
console.log('Created aggressive .npmrc file');

// 3. Create a netlify.toml file with optimized build settings
const netlifyTomlPath = path.join(process.cwd(), 'netlify.toml');
const netlifyTomlContent = `
[build]
  command = "CI=false npm run build-netlify"
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
  CI = "false"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[functions]
  directory = "netlify/functions"
  external_node_modules = ["@supabase/supabase-js", "stripe"]
  included_files = ["app/api/**"]
  node_bundler = "esbuild"

[build.processing]
  skip_processing = true
`;

fs.writeFileSync(netlifyTomlPath, netlifyTomlContent.trim(), 'utf8');
console.log('Updated netlify.toml file with optimized settings');

// 4. Create a simplified next.config.js
const nextConfigPath = path.join(process.cwd(), 'next.config.js');
const nextConfigContent = `
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  images: {
    domains: ['localhost', 'vxxpwaloyrtwvpmatzpc.supabase.co'],
    unoptimized: true
  },
  experimental: {
    esmExternals: 'loose'
  },
  webpack: (config) => {
    // Add fallbacks for node modules
    config.resolve.fallback = { 
      ...config.resolve.fallback,
      fs: false, 
      path: false,
      crypto: false,
      stream: false,
      os: false
    };
    
    return config;
  }
}

module.exports = nextConfig
`;

fs.writeFileSync(nextConfigPath, nextConfigContent.trim(), 'utf8');
console.log('Updated next.config.js file with simplified configuration');

// 5. Create a clean package-lock.json
try {
  console.log('Removing package-lock.json if it exists...');
  const packageLockPath = path.join(process.cwd(), 'package-lock.json');
  if (fs.existsSync(packageLockPath)) {
    fs.unlinkSync(packageLockPath);
    console.log('Removed package-lock.json');
  }
} catch (error) {
  console.error('Error removing package-lock.json:', error);
}

// 6. Create a clean node_modules
try {
  console.log('Removing node_modules if it exists...');
  const nodeModulesPath = path.join(process.cwd(), 'node_modules');
  if (fs.existsSync(nodeModulesPath)) {
    fs.rmSync(nodeModulesPath, { recursive: true, force: true });
    console.log('Removed node_modules');
  }
} catch (error) {
  console.error('Error removing node_modules:', error);
}

console.log('Finished fixing Netlify dependency issues'); 