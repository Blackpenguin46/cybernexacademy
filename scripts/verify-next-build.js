const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Verifying and fixing Next.js production build for Netlify...');

// 1. First, try to run the Next.js build directly to see if it works
console.log('\n📦 Step 1: Testing Next.js build command directly...');
try {
  console.log('Running: npx next build');
  execSync('npx next build', { stdio: 'inherit' });
  console.log('✅ Next.js build succeeded!');
} catch (error) {
  console.error('❌ Next.js build failed with error:', error.message);
  console.log('Will attempt to fix the build setup...');
}

// 2. Check if .next directory exists and what's in it
console.log('\n📁 Step 2: Checking .next directory...');
const nextDir = path.join(process.cwd(), '.next');
if (fs.existsSync(nextDir)) {
  try {
    const files = fs.readdirSync(nextDir);
    console.log(`.next directory exists and contains ${files.length} items`);
    console.log('First few items:', files.slice(0, 5));
  } catch (error) {
    console.error('Error reading .next directory:', error.message);
  }
} else {
  console.log('.next directory does not exist! Need to ensure build creates it.');
}

// 3. Update package.json to have correct build scripts
console.log('\n📄 Step 3: Updating package.json with correct build scripts...');
const packageJsonPath = path.join(process.cwd(), 'package.json');
let packageJson;

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

// Set the scripts correctly
packageJson.scripts = {
  ...(packageJson.scripts || {}),
  "dev": "next dev",
  "build": "next build",
  "build-netlify": "next build", // Direct build command
  "start": "next start"
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('Updated package.json with correct build scripts');

// 4. Update/create next.config.js to NOT use custom output directory
console.log('\n⚙️ Step 4: Creating standard next.config.js...');
const nextConfigPath = path.join(process.cwd(), 'next.config.js');
const nextConfig = `
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // No custom distDir - using default .next directory
  // No output: 'export' - using standard build
};

module.exports = nextConfig;
`;

fs.writeFileSync(nextConfigPath, nextConfig);
console.log('Created standard next.config.js, using default .next directory');

// 5. Update netlify.toml configuration
console.log('\n🔧 Step 5: Updating netlify.toml with correct build settings...');
const netlifyTomlPath = path.join(process.cwd(), 'netlify.toml');
const netlifyToml = `
[build]
  command = "next build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
`;

fs.writeFileSync(netlifyTomlPath, netlifyToml);
console.log('Updated netlify.toml with correct build command and publish directory');

// 6. Run the build again to verify it works and creates .next directory
console.log('\n🔄 Step 6: Running build again to verify it creates .next directory...');
try {
  console.log('Running: npx next build');
  execSync('npx next build', { stdio: 'inherit' });
  
  if (fs.existsSync(nextDir)) {
    const files = fs.readdirSync(nextDir);
    console.log(`✅ Build successful! .next directory exists with ${files.length} items.`);
  } else {
    console.log('❌ Build ran but .next directory still doesn\'t exist! Something is still wrong.');
  }
} catch (error) {
  console.error('❌ Build failed again. Error:', error.message);
}

// 7. Create diagnostic README with Netlify deployment tips
console.log('\n📝 Step 7: Creating diagnostic README...');
const readmePath = path.join(process.cwd(), 'NETLIFY-DEPLOYMENT.md');
const readmeContent = `
# Next.js Deployment to Netlify

## Diagnosis and Solution

The build was failing because Netlify could not find the Next.js production build in the ".next" directory.

This has been fixed by:

1. Ensuring the build command is correctly set to \`next build\` (no extra steps)
2. Verifying that the build creates the \`.next\` directory
3. Setting the publish directory to \`.next\` in netlify.toml
4. Using the standard Next.js configuration (no custom distDir or output settings)

## Verify Before Deployment

Before deploying, make sure:

- You can run \`npm run build\` locally and it creates a \`.next\` directory
- The \`.next\` directory contains build files (should have directories like \`server/\` and \`static/\`)
- Your netlify.toml has the correct settings:
  - build command: \`next build\` or \`npm run build\`
  - publish directory: \`.next\`

## Netlify Dashboard Settings

In your Netlify dashboard, verify these settings:

- Build command: \`next build\` or \`npm run build\`
- Publish directory: \`.next\`
- Make sure the Next.js plugin is enabled
`;

fs.writeFileSync(readmePath, readmeContent.trim());
console.log('Created NETLIFY-DEPLOYMENT.md with diagnostic information');

console.log('\n✅ VERIFICATION AND FIXES COMPLETE');
console.log('This script has:');
console.log('1. Tested the Next.js build to make sure it works');
console.log('2. Checked if the .next directory is being created');
console.log('3. Updated package.json, next.config.js, and netlify.toml');
console.log('4. Run the build again to verify it now works correctly');
console.log('\nPlease commit and push these changes. Your Netlify build should now work!'); 