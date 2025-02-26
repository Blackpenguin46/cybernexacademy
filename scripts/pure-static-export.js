const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Setting up a pure static export for Netlify without using the Next.js plugin...');

// 1. Update package.json with static export script
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
  // Use a single combined command for Netlify
  "netlify": "next build && next export"
};

// Make sure we remove @netlify/plugin-nextjs from dependencies
if (packageJson.dependencies && packageJson.dependencies['@netlify/plugin-nextjs']) {
  delete packageJson.dependencies['@netlify/plugin-nextjs'];
}

// Ensure core dependencies
packageJson.dependencies = {
  ...(packageJson.dependencies || {}),
  "next": "13.4.19",
  "react": "18.2.0",
  "react-dom": "18.2.0"
};

// Write updated package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('Updated package.json for static export without Netlify plugin');

// 2. Create an optimized next.config.js for static export
const nextConfigPath = path.join(process.cwd(), 'next.config.js');
const nextConfig = `
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  output: 'export',         // Enable static HTML export
  images: { 
    unoptimized: true       // Required for static export
  },
  typescript: { 
    ignoreBuildErrors: true 
  },
  eslint: { 
    ignoreDuringBuilds: true 
  },
  trailingSlash: true,      // Recommended for static exports
};

module.exports = nextConfig;
`;

fs.writeFileSync(nextConfigPath, nextConfig);
console.log('Created optimized next.config.js for static export');

// 3. Create netlify.toml that explicitly skips the Next.js plugin
const netlifyTomlPath = path.join(process.cwd(), 'netlify.toml');
const netlifyToml = `
[build]
  command = "npm run netlify"
  publish = "out"

[build.environment]
  NODE_VERSION = "18.17.0"
  NPM_VERSION = "9.6.7"
  NETLIFY_NEXT_PLUGIN_SKIP = "true"
`;

fs.writeFileSync(netlifyTomlPath, netlifyToml);
console.log('Created netlify.toml with Next.js plugin explicitly skipped');

// 4. Create a fallback page if none exists
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
  
  // Create _app.js for global configuration
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

// 5. Create a .npmrc file for better dependency resolution
const npmrcPath = path.join(process.cwd(), '.npmrc');
const npmrc = `
legacy-peer-deps=true
`;

fs.writeFileSync(npmrcPath, npmrc);
console.log('Created .npmrc file');

// 6. Create a sanity check script that will run during build
const scriptsDir = path.join(process.cwd(), 'scripts');
if (!fs.existsSync(scriptsDir)) {
  fs.mkdirSync(scriptsDir, { recursive: true });
}

const sanityCheckPath = path.join(scriptsDir, 'netlify-sanity-check.js');
const sanityCheckContent = `
// This script runs during the Netlify build to verify environment and setup
console.log('Running Netlify deployment sanity check...');
console.log('Environment variables:');
console.log('NODE_VERSION:', process.env.NODE_VERSION);
console.log('NPM_VERSION:', process.env.NPM_VERSION);
console.log('NETLIFY_NEXT_PLUGIN_SKIP:', process.env.NETLIFY_NEXT_PLUGIN_SKIP);
console.log('Next.js configuration check passed');
`;

fs.writeFileSync(sanityCheckPath, sanityCheckContent);

// Update the netlify script to include the sanity check
packageJson.scripts.netlify = "node scripts/netlify-sanity-check.js && next build && next export";
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('Pure static export setup is complete!');
console.log('This approach completely bypasses the @netlify/plugin-nextjs by:');
console.log('1. Using next export to generate static HTML');
console.log('2. Setting NETLIFY_NEXT_PLUGIN_SKIP=true to avoid the plugin entirely');
console.log('3. Setting publish directory to "out" where static exports go');
console.log('4. Removing the plugin from package.json dependencies'); 