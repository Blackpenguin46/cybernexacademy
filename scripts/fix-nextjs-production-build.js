const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Implementing Netlify\'s recommended fixes for missing Next.js production build...');

// 1. Update package.json with correct scripts
const packageJsonPath = path.join(process.cwd(), 'package.json');
let packageJson = {};

try {
  packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  console.log('Successfully read package.json');
} catch (error) {
  console.log('Error reading package.json, creating new one');
  packageJson = {
    "name": "cybernex",
    "version": "0.1.0",
    "private": true
  };
}

// Ensure we have the standard build script
packageJson.scripts = {
  ...(packageJson.scripts || {}),
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  // Define the build-netlify script to match what Netlify is looking for
  "build-netlify": "next build"
};

// Make sure @netlify/plugin-nextjs is in devDependencies
packageJson.devDependencies = {
  ...(packageJson.devDependencies || {}),
  "@netlify/plugin-nextjs": "4.41.3"
};

// Write updated package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('Updated package.json with correct scripts and dependencies');

// 2. Create standard next.config.js
const nextConfigPath = path.join(process.cwd(), 'next.config.js');
const nextConfig = `
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Do NOT use output: 'export' here as it causes problems with Netlify
  // Do NOT use a custom distDir as it causes problems with Netlify
};

module.exports = nextConfig;
`;

fs.writeFileSync(nextConfigPath, nextConfig);
console.log('Created standard next.config.js without custom distDir');

// 3. Create the scripts Netlify is looking for
const scriptsDir = path.join(process.cwd(), 'scripts');
if (!fs.existsSync(scriptsDir)) {
  fs.mkdirSync(scriptsDir, { recursive: true });
}

const fixPluginPath = path.join(scriptsDir, 'fix-netlify-plugin-missing.js');
const fixPluginContent = `
// This script runs before the build to ensure the Netlify plugin can find the Next.js build
console.log('Setting up for Netlify Next.js plugin...');

// Nothing else needed - the main build will be handled by the next build command
`;

fs.writeFileSync(fixPluginPath, fixPluginContent);
console.log('Created fix-netlify-plugin-missing.js script');

const buildStaticPath = path.join(scriptsDir, 'build-static.js');
const buildStaticContent = `
// This script executes the standard Next.js build
console.log('Running standard Next.js build...');

// Use child_process to run the standard next build
const { execSync } = require('child_process');
try {
  execSync('npx next build', { stdio: 'inherit' });
  console.log('Next.js build completed successfully');
} catch (error) {
  console.error('Next.js build failed:', error.message);
  process.exit(1);
}
`;

fs.writeFileSync(buildStaticPath, buildStaticContent);
console.log('Created build-static.js script');

// 4. Create a correct netlify.toml file
const netlifyTomlPath = path.join(process.cwd(), 'netlify.toml');
const netlifyToml = `
[build]
  command = "npm run build-netlify"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "18.17.0"
  NPM_VERSION = "9.6.7"
  # Do NOT set NETLIFY_NEXT_PLUGIN_SKIP as we want to use the plugin
`;

fs.writeFileSync(netlifyTomlPath, netlifyToml);
console.log('Created correct netlify.toml file');

// 5. Create a minimal pages directory if it doesn't exist
const pagesDir = path.join(process.cwd(), 'pages');
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
  
  // Create a simple index.js
  const indexPath = path.join(pagesDir, 'index.js');
  const indexContent = `
export default function Home() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>CyberNex</h1>
      <p>Your cybersecurity learning platform</p>
    </div>
  );
}
`;
  
  fs.writeFileSync(indexPath, indexContent.trim());
  console.log('Created minimal pages directory with index.js');
}

console.log('\nAll Netlify recommended fixes have been implemented!');
console.log('Your Next.js app should now build correctly, as the script has:');
console.log('1. Set up standard Next.js build without custom distDir');
console.log('2. Created the scripts Netlify is looking for');
console.log('3. Configured netlify.toml correctly for the Next.js plugin');
console.log('\nMake sure to commit and push these changes!');