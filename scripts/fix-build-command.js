const fs = require('fs');
const path = require('path');

console.log('Fixing build command in netlify.toml...');

// 1. Update netlify.toml with the correct build command
const netlifyTomlPath = path.join(process.cwd(), 'netlify.toml');
const netlifyToml = `
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
`;

fs.writeFileSync(netlifyTomlPath, netlifyToml);
console.log('Updated netlify.toml with correct build command');

// 2. Double-check package.json to ensure it has the right scripts
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  // Remove any build-netlify script
  if (packageJson.scripts && packageJson.scripts['build-netlify']) {
    delete packageJson.scripts['build-netlify'];
    console.log('Removed build-netlify script from package.json');
  }
  
  // Make sure we have the standard build script
  packageJson.scripts = {
    ...(packageJson.scripts || {}),
    "build": "next build"
  };
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('Ensured package.json has the correct build script');
}

console.log('\nBuild command fixed!');
console.log('The build should now use "npm run build" instead of trying to find missing scripts.');
console.log('This is the standard Next.js build command that Netlify expects.'); 