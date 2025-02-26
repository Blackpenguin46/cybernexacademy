const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Installing dependencies properly...');

// 1. First, let's make sure we have a proper package.json
const packageJsonPath = path.join(process.cwd(), 'package.json');
const packageJson = {
  "name": "cybernex",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "build-netlify": "next build"
  },
  "dependencies": {
    "@netlify/plugin-nextjs": "4.41.3",
    "next": "14.0.4",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  }
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('Updated package.json with required dependencies');

// 2. Create a simple next.config.js
const nextConfigPath = path.join(process.cwd(), 'next.config.js');
const nextConfig = `
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
`;

fs.writeFileSync(nextConfigPath, nextConfig);
console.log('Created simple next.config.js');

// 3. Create netlify.toml
const netlifyTomlPath = path.join(process.cwd(), 'netlify.toml');
const netlifyToml = `
[build]
  command = "npm run build-netlify"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18.17.0"
`;

fs.writeFileSync(netlifyTomlPath, netlifyToml);
console.log('Created netlify.toml');

// 4. Install dependencies properly
try {
  console.log('Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  console.log('Dependencies installed successfully');
} catch (error) {
  console.error('Error installing dependencies:', error);
}

console.log('Setup complete! You can now run the build process.'); 