const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Implementing the DIRECT solution Netlify recommended...');

// 1. Update package.json with EXACTLY what's needed
const packageJsonPath = path.join(process.cwd(), 'package.json');
let packageJson;

try {
  packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
} catch (error) {
  packageJson = {
    "name": "cybernex",
    "version": "0.1.0",
    "private": true
  };
}

// Set EXACTLY the right scripts
packageJson.scripts = {
  ...(packageJson.scripts || {}),
  "dev": "next dev",
  "start": "next start",
  // The key fix - make build-netlify execute next build DIRECTLY
  "build-netlify": "next build",
  "build": "next build"
};

// Make sure we have the plugin in the right place
packageJson.devDependencies = {
  ...(packageJson.devDependencies || {}),
  "@netlify/plugin-nextjs": "4.41.3"
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('Updated package.json - build-netlify now DIRECTLY runs next build');

// 2. Create a clean next.config.js with NO custom distDir
const nextConfigPath = path.join(process.cwd(), 'next.config.js');
const nextConfig = `
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // No custom distDir - using default .next
};

module.exports = nextConfig;
`;

fs.writeFileSync(nextConfigPath, nextConfig);
console.log('Created clean next.config.js with NO custom distDir');

// 3. Ensure pages directory exists with at least one page
const pagesDir = path.join(process.cwd(), 'pages');
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
  
  // Create minimal index.js
  const indexPath = path.join(pagesDir, 'index.js');
  const indexContent = `
export default function Home() {
  return (
    <div>
      <h1>CyberNex</h1>
      <p>Welcome to CyberNex</p>
    </div>
  );
}
`;
  
  fs.writeFileSync(indexPath, indexContent.trim());
  console.log('Created basic pages/index.js');
}

// 4. Create netlify.toml with correct settings
const netlifyTomlPath = path.join(process.cwd(), 'netlify.toml');
const netlifyToml = `
[build]
  command = "npm run build-netlify"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
`;

fs.writeFileSync(netlifyTomlPath, netlifyToml);
console.log('Created standard netlify.toml');

// 5. Create a .gitignore to avoid committing node_modules and build artifacts
const gitignorePath = path.join(process.cwd(), '.gitignore');
const gitignore = `
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env.local
.env.development.local
.env.test.local
.env.production.local

# vercel
.vercel
`;

fs.writeFileSync(gitignorePath, gitignore);
console.log('Created proper .gitignore');

console.log('\n✅ DIRECT FIX COMPLETE');
console.log('\nThis implements EXACTLY what Netlify recommended:');
console.log('1. build-netlify script now DIRECTLY runs "next build" without any extra steps');
console.log('2. No custom distDir in next.config.js - using standard .next directory');
console.log('3. Standard netlify.toml using the @netlify/plugin-nextjs plugin');
console.log('\nCommit and push these changes, and your build should work!'); 