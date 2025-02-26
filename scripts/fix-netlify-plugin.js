const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Starting to fix Netlify plugin issue...');

// 1. First, check if the plugin is already installed
let pluginInstalled = false;
try {
  require.resolve('@netlify/plugin-nextjs');
  pluginInstalled = true;
  console.log('@netlify/plugin-nextjs is already installed');
} catch (error) {
  console.log('@netlify/plugin-nextjs is not installed, will install it');
}

// 2. Install the plugin if not already installed
if (!pluginInstalled) {
  try {
    console.log('Installing @netlify/plugin-nextjs...');
    execSync('npm install @netlify/plugin-nextjs@4.41.3 --save', { stdio: 'inherit' });
    console.log('Successfully installed @netlify/plugin-nextjs');
  } catch (error) {
    console.error('Error installing @netlify/plugin-nextjs:', error);
  }
}

// 3. Update package.json to include the plugin in dependencies
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (fs.existsSync(packageJsonPath)) {
  console.log('Updating package.json to include @netlify/plugin-nextjs...');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  // Ensure the plugin is in dependencies
  packageJson.dependencies = {
    ...packageJson.dependencies,
    '@netlify/plugin-nextjs': '^4.41.3'
  };
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
  console.log('Updated package.json with @netlify/plugin-nextjs');
}

// 4. Disable the Netlify plugin in netlify.toml
const netlifyTomlPath = path.join(process.cwd(), 'netlify.toml');
if (fs.existsSync(netlifyTomlPath)) {
  console.log('Updating netlify.toml to remove plugin reference...');
  let netlifyToml = fs.readFileSync(netlifyTomlPath, 'utf8');
  
  // Remove the plugin section if it exists
  netlifyToml = netlifyToml.replace(/\[\[plugins\]\]\s+package\s*=\s*["']@netlify\/plugin-nextjs["']/g, '# Plugin removed to fix build issues\n# [[plugins]]\n#   package = "@netlify/plugin-nextjs"');
  
  fs.writeFileSync(netlifyTomlPath, netlifyToml, 'utf8');
  console.log('Updated netlify.toml to remove plugin reference');
} else {
  // Create a simple netlify.toml without the plugin
  const netlifyTomlContent = `
[build]
  command = "CI=false npm run build-netlify"
  publish = ".next"

[build.environment]
  NEXT_PUBLIC_SUPABASE_URL = "https://vxxpwaloyrtwvpmatzpc.supabase.co"
  NEXT_PUBLIC_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4eHB3YWxveXJ0d3ZwbWF0enBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxNjA0NjQsImV4cCI6MjA1NTczNjQ2NH0.ef0feqGxtWeB9C2SLtPwEk_lcW8pcVngo7fz1SsznDM"
  NODE_VERSION = "18.17.0"
  NPM_VERSION = "9.9.4"
  CI = "false"

# Plugin disabled to fix build issues
# [[plugins]]
#   package = "@netlify/plugin-nextjs"
`;

  fs.writeFileSync(netlifyTomlPath, netlifyTomlContent.trim(), 'utf8');
  console.log('Created netlify.toml without plugin reference');
}

// 5. Create a specific output directory structure that Netlify expects
const outputDir = path.join(process.cwd(), '.next');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log('Created .next directory');
}

// Create empty directories that Netlify expects
['server', 'static', 'cache'].forEach(dir => {
  const dirPath = path.join(outputDir, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created ${dirPath} directory`);
  }
});

console.log('Finished fixing Netlify plugin issue'); 