const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('CLEANING UP ROUTER CONFLICTS - FRESH START');

// 1. First explicitly remove both conflicting files
const pagesIndexPath = path.join(process.cwd(), 'pages/index.js');
const appPagePath = path.join(process.cwd(), 'app/page.tsx');

// Remove pages/index.js if it exists
if (fs.existsSync(pagesIndexPath)) {
  try {
    fs.unlinkSync(pagesIndexPath);
    console.log('Deleted pages/index.js');
  } catch (error) {
    console.error(`Error deleting pages/index.js: ${error.message}`);
  }
}

// Remove app/page.tsx if it exists
if (fs.existsSync(appPagePath)) {
  try {
    fs.unlinkSync(appPagePath);
    console.log('Deleted app/page.tsx');
  } catch (error) {
    console.error(`Error deleting app/page.tsx: ${error.message}`);
  }
}

// 2. Choose ONE router approach - going with Pages Router as it's more compatible with Netlify
console.log('Setting up Pages Router (more compatible with Netlify)');

// Create pages directory if it doesn't exist
const pagesDir = path.join(process.cwd(), 'pages');
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

// Create a simple pages/index.js
const newIndexContent = `
import React from 'react';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>CyberNex</h1>
      <p>Welcome to CyberNex - your cybersecurity learning platform.</p>
      <p>This page is rendered using the Pages Router.</p>
    </div>
  );
}
`;

fs.writeFileSync(pagesIndexPath, newIndexContent.trim());
console.log('Created new pages/index.js');

// 3. Check for any app directory and suggest removal
const appDir = path.join(process.cwd(), 'app');
if (fs.existsSync(appDir)) {
  console.log('\n⚠️ IMPORTANT: The "app" directory still exists');
  console.log('For a clean Pages Router setup, you should consider removing it');
  console.log('To remove it, you can use: rm -rf app/');
} else {
  console.log('No app directory found - your Pages Router setup is clean');
}

// 4. Create a simple layout
const layoutPath = path.join(pagesDir, '_app.js');
const layoutContent = `
import React from 'react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
`;

fs.writeFileSync(layoutPath, layoutContent.trim());
console.log('Created basic _app.js layout');

// 5. Update next.config.js to ensure it's compatible with Pages Router
const nextConfigPath = path.join(process.cwd(), 'next.config.js');
const nextConfig = `
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Using Pages Router, no App Router specific settings
};

module.exports = nextConfig;
`;

fs.writeFileSync(nextConfigPath, nextConfig);
console.log('Updated next.config.js for Pages Router');

console.log('\n✅ ROUTER CONFLICT RESOLVED');
console.log('Your project is now using the Pages Router only.');
console.log('This should resolve the conflicting files error in your build.'); 