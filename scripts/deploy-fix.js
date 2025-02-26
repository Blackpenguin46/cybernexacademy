const fs = require('fs');
const path = require('path');

console.log('Starting deploy fix script...');

// 1. First, create the simplified-build.js file that was missing
const scriptsDir = path.join(process.cwd(), 'scripts');
if (!fs.existsSync(scriptsDir)) {
  console.log('Creating scripts directory...');
  fs.mkdirSync(scriptsDir, { recursive: true });
}

const simplifiedBuildPath = path.join(scriptsDir, 'simplified-build.js');
const simplifiedBuildContent = `
const { execSync } = require('child_process');

console.log('Starting simplified build process...');

try {
  console.log('Building Next.js application...');
  execSync('CI=false next build', { stdio: 'inherit' });
  console.log('Successfully built Next.js application');
} catch (error) {
  console.error('Error building Next.js application:', error);
  process.exit(1);
}

console.log('Simplified build process completed successfully');
`;

fs.writeFileSync(simplifiedBuildPath, simplifiedBuildContent.trim(), 'utf8');
console.log('Created simplified-build.js script');

// 2. Update netlify.toml with a much simpler configuration
const netlifyTomlPath = path.join(process.cwd(), 'netlify.toml');
const netlifyTomlContent = `
[build]
  command = "next build"
  publish = ".next"

[build.environment]
  NEXT_PUBLIC_SUPABASE_URL = "https://vxxpwaloyrtwvpmatzpc.supabase.co"
  NEXT_PUBLIC_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4eHB3YWxveXJ0d3ZwbWF0enBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxNjA0NjQsImV4cCI6MjA1NTczNjQ2NH0.ef0feqGxtWeB9C2SLtPwEk_lcW8pcVngo7fz1SsznDM"
  NODE_VERSION = "18.17.0"
  NPM_FLAGS = "--legacy-peer-deps --no-optional"
  NPM_VERSION = "9.9.4"
  CI = "false"
`;

fs.writeFileSync(netlifyTomlPath, netlifyTomlContent.trim(), 'utf8');
console.log('Updated netlify.toml with simplified configuration');

// 3. Update package.json to use a direct build command
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (fs.existsSync(packageJsonPath)) {
  console.log('Updating package.json...');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  // Simplify the build-netlify script
  packageJson.scripts = {
    ...packageJson.scripts,
    "build-netlify": "next build"
  };
  
  // Remove any overrides for glob
  if (packageJson.overrides && packageJson.overrides.glob) {
    delete packageJson.overrides.glob;
  }
  
  // Remove resolutions for glob
  if (packageJson.resolutions && packageJson.resolutions.glob) {
    delete packageJson.resolutions.glob;
  }
  
  // Write the updated package.json
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
  console.log('Updated package.json with simplified build command');
}

// 4. Create a simple .npmrc file
const npmrcPath = path.join(process.cwd(), '.npmrc');
const npmrcContent = `
legacy-peer-deps=true
engine-strict=false
ignore-engines=true
`;

fs.writeFileSync(npmrcPath, npmrcContent.trim(), 'utf8');
console.log('Created simple .npmrc file');

console.log('Deploy fix script completed successfully'); 