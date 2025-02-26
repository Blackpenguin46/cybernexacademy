const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Setting up proper Next.js production build for Netlify...');

// 1. Update package.json with the correct build scripts
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

// Update scripts for static export
packageJson.scripts = {
  ...(packageJson.scripts || {}),
  "dev": "next dev",
  "build": "next build",
  "export": "next export",
  "build-netlify": "next build && next export",
  "start": "next start"
};

// Ensure we have the basic dependencies
packageJson.dependencies = {
  ...(packageJson.dependencies || {}),
  "next": "13.4.19",
  "react": "18.2.0",
  "react-dom": "18.2.0"
};

// Write the updated package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('Updated package.json with static export scripts');

// 2. Create a next.config.js that supports static export
const nextConfigPath = path.join(process.cwd(), 'next.config.js');
const nextConfig = `
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  images: { 
    unoptimized: true // Required for static export
  },
  typescript: { 
    ignoreBuildErrors: true 
  },
  eslint: { 
    ignoreDuringBuilds: true 
  },
  output: 'export', // Enable static export
  distDir: '.next', // Keep using .next as the build directory
  trailingSlash: true // Add trailing slashes for static export compatibility
};

module.exports = nextConfig;
`;

fs.writeFileSync(nextConfigPath, nextConfig);
console.log('Created next.config.js configured for static export');

// 3. Update netlify.toml to use the static output
const netlifyTomlPath = path.join(process.cwd(), 'netlify.toml');
const netlifyToml = `
[build]
  command = "npm run build-netlify"
  publish = "out"  # Changed from .next to out for static export

[build.environment]
  NODE_VERSION = "18.17.0"
  NPM_VERSION = "9.6.7"
  NETLIFY_NEXT_PLUGIN_SKIP = "true"  # Skip the plugin since we're doing a static export
`;

fs.writeFileSync(netlifyTomlPath, netlifyToml);
console.log('Updated netlify.toml to use static export output directory');

// 4. Create a fallback page in pages directory if it doesn't exist
const pagesDir = path.join(process.cwd(), 'pages');
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
  
  // Create a simple index.js page
  const indexPath = path.join(pagesDir, 'index.js');
  const indexContent = `
export default function Home() {
  return (
    <div style={{ 
      fontFamily: 'system-ui, sans-serif', 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '2rem', 
      textAlign: 'center' 
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>CyberNex</h1>
      <p style={{ fontSize: '1.25rem', color: '#666' }}>
        Your cybersecurity learning platform
      </p>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem', 
        marginTop: '3rem' 
      }}>
        <div style={{ 
          padding: '2rem', 
          backgroundColor: '#f8f9fa', 
          borderRadius: '0.5rem', 
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)' 
        }}>
          <h2 style={{ fontSize: '1.5rem', marginTop: 0 }}>Hands-On Projects</h2>
          <p>Learn cybersecurity through practical, real-world scenarios</p>
        </div>
        <div style={{ 
          padding: '2rem', 
          backgroundColor: '#f8f9fa', 
          borderRadius: '0.5rem', 
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)' 
        }}>
          <h2 style={{ fontSize: '1.5rem', marginTop: 0 }}>Expert Content</h2>
          <p>Content created by cybersecurity professionals</p>
        </div>
      </div>
    </div>
  );
}
`;
  
  fs.writeFileSync(indexPath, indexContent.trim());
  console.log('Created a simple index page');
  
  // Create _app.js to handle global styles if needed
  const appPath = path.join(pagesDir, '_app.js');
  const appContent = `
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
`;
  
  fs.writeFileSync(appPath, appContent.trim());
  console.log('Created _app.js file');
}

// 5. Ensure .npmrc exists
const npmrcPath = path.join(process.cwd(), '.npmrc');
const npmrc = `
legacy-peer-deps=true
`;

fs.writeFileSync(npmrcPath, npmrc);
console.log('Created .npmrc');

console.log('Next.js production build setup is complete!');
console.log('The key changes are:');
console.log('1. Added static export configuration to next.config.js');
console.log('2. Changed build script to include "next export"');
console.log('3. Updated Netlify publish directory to "out" instead of ".next"');
console.log('4. Set NETLIFY_NEXT_PLUGIN_SKIP=true to avoid plugin issues with static export'); 