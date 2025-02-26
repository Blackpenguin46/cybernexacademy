const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Starting to fix final deployment issues...');

// 1. Fix package.json to remove glob override and add Netlify plugin
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (fs.existsSync(packageJsonPath)) {
  console.log('Updating package.json...');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  // Remove glob override if it exists
  if (packageJson.overrides && packageJson.overrides.glob) {
    console.log('Removing glob override...');
    delete packageJson.overrides.glob;
    
    // If overrides is now empty, remove it
    if (Object.keys(packageJson.overrides).length === 0) {
      delete packageJson.overrides;
    }
  }
  
  // Add Netlify plugin as a dependency
  packageJson.dependencies = {
    ...packageJson.dependencies,
    '@netlify/plugin-nextjs': '^4.41.3'
  };
  
  // Write the updated package.json
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
  console.log('Updated package.json');
}

// 2. Update netlify.toml to use a simpler configuration
const netlifyTomlPath = path.join(process.cwd(), 'netlify.toml');
const netlifyTomlContent = `
[build]
  command = "CI=false npm run build-netlify"
  publish = ".next"

[build.environment]
  NETLIFY_USE_YARN = "false"
  NETLIFY_USE_NPM = "true"
  NODE_VERSION = "18.17.0"
  NPM_VERSION = "9.9.4"
  NEXT_TELEMETRY_DISABLED = "1"
  CI = "false"
`;

fs.writeFileSync(netlifyTomlPath, netlifyTomlContent.trim(), 'utf8');
console.log('Updated netlify.toml with simplified configuration');

// 3. Create a simplified build script that doesn't rely on the Netlify plugin
const buildScriptPath = path.join(process.cwd(), 'scripts', 'simplified-build.js');
const buildScriptContent = `
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting simplified build process...');

// Run the necessary fix scripts
try {
  console.log('Running fix scripts...');
  execSync('npm run check-structure', { stdio: 'inherit' });
  execSync('npm run remove-src-pages', { stdio: 'inherit' });
  execSync('npm run fix-missing-components', { stdio: 'inherit' });
  execSync('npm run fix-dependencies', { stdio: 'inherit' });
  execSync('npm run fix-jsconfig-paths', { stdio: 'inherit' });
  execSync('npm run fix-next-config', { stdio: 'inherit' });
  execSync('npm run replace-problematic-files', { stdio: 'inherit' });
  execSync('npm run fix-job-listings', { stdio: 'inherit' });
  execSync('npm run fix-node-version', { stdio: 'inherit' });
  execSync('npm run convert-imports', { stdio: 'inherit' });
  console.log('Successfully ran fix scripts');
} catch (error) {
  console.error('Error running fix scripts:', error);
  // Continue anyway
}

// Run Next.js build
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

// Create the scripts directory if it doesn't exist
const scriptsDir = path.dirname(buildScriptPath);
if (!fs.existsSync(scriptsDir)) {
  fs.mkdirSync(scriptsDir, { recursive: true });
}

fs.writeFileSync(buildScriptPath, buildScriptContent.trim(), 'utf8');
console.log('Created simplified build script');

// 4. Install the Netlify plugin manually
try {
  console.log('Installing @netlify/plugin-nextjs...');
  execSync('npm install @netlify/plugin-nextjs --save', { stdio: 'inherit' });
  console.log('Successfully installed @netlify/plugin-nextjs');
} catch (error) {
  console.error('Error installing @netlify/plugin-nextjs:', error);
}

console.log('Finished fixing final deployment issues'); 