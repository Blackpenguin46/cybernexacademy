const fs = require('fs');
const path = require('path');

console.log('Starting to fix Node version compatibility issues...');

// 1. Update package.json to specify Node engine
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (fs.existsSync(packageJsonPath)) {
  console.log('Updating package.json with Node engine constraints...');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  // Add engines field to specify Node version
  packageJson.engines = {
    node: ">=18.0.0 <19.0.0",
    npm: ">=9.0.0"
  };
  
  // Add overrides for problematic packages
  packageJson.overrides = {
    ...packageJson.overrides,
    "path-scurry": "1.10.1",
    "glob": "9.3.5",
    "rimraf": "4.4.1"
  };
  
  // Write the updated package.json
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
  console.log('Updated package.json with Node engine constraints');
}

// 2. Create .nvmrc file to specify Node version
const nvmrcPath = path.join(process.cwd(), '.nvmrc');
fs.writeFileSync(nvmrcPath, '18.17.0', 'utf8');
console.log('Created .nvmrc file with Node version 18.17.0');

// 3. Create .node-version file for Netlify
const nodeVersionPath = path.join(process.cwd(), '.node-version');
fs.writeFileSync(nodeVersionPath, '18.17.0', 'utf8');
console.log('Created .node-version file with Node version 18.17.0');

// 4. Update netlify.toml to specify Node version
const netlifyTomlPath = path.join(process.cwd(), 'netlify.toml');
if (fs.existsSync(netlifyTomlPath)) {
  console.log('Updating netlify.toml with Node version...');
  let netlifyToml = fs.readFileSync(netlifyTomlPath, 'utf8');
  
  // Ensure NODE_VERSION is set to 18
  if (netlifyToml.includes('NODE_VERSION')) {
    netlifyToml = netlifyToml.replace(/NODE_VERSION\s*=\s*["'].*?["']/g, 'NODE_VERSION = "18.17.0"');
  } else {
    // Add NODE_VERSION if it doesn't exist
    const envSection = netlifyToml.match(/\[build\.environment\]/);
    if (envSection) {
      const insertPoint = netlifyToml.indexOf('[build.environment]') + '[build.environment]'.length;
      netlifyToml = netlifyToml.slice(0, insertPoint) + '\n  NODE_VERSION = "18.17.0"' + netlifyToml.slice(insertPoint);
    } else {
      // Add the entire environment section if it doesn't exist
      netlifyToml += `\n[build.environment]\n  NODE_VERSION = "18.17.0"\n`;
    }
  }
  
  fs.writeFileSync(netlifyTomlPath, netlifyToml, 'utf8');
  console.log('Updated netlify.toml with Node version 18.17.0');
}

// 5. Create a .npmrc file to ignore engine checks
const npmrcPath = path.join(process.cwd(), '.npmrc');
let npmrcContent = '';

if (fs.existsSync(npmrcPath)) {
  npmrcContent = fs.readFileSync(npmrcPath, 'utf8');
}

// Add engine-strict=false if it doesn't exist
if (!npmrcContent.includes('engine-strict')) {
  npmrcContent += '\nengine-strict=false\n';
}

// Add ignore-engines=true if it doesn't exist
if (!npmrcContent.includes('ignore-engines')) {
  npmrcContent += '\nignore-engines=true\n';
}

fs.writeFileSync(npmrcPath, npmrcContent, 'utf8');
console.log('Updated .npmrc to ignore engine checks');

console.log('Finished fixing Node version compatibility issues'); 