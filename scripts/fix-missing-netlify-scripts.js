const fs = require('fs');
const path = require('path');

console.log('Creating missing scripts that Netlify is trying to run...');

// 1. Create the scripts directory if it doesn't exist
const scriptsDir = path.join(process.cwd(), 'scripts');
if (!fs.existsSync(scriptsDir)) {
  fs.mkdirSync(scriptsDir, { recursive: true });
  console.log('Created scripts directory');
}

// 2. Create the fix-netlify-plugin-missing.js script that Netlify is trying to run
const fixPluginPath = path.join(scriptsDir, 'fix-netlify-plugin-missing.js');
const fixPluginContent = `
// This is a replacement for the missing script Netlify is trying to run
console.log('Running fix-netlify-plugin-missing.js');
// No actual fixes needed, this just prevents the MODULE_NOT_FOUND error
`;

fs.writeFileSync(fixPluginPath, fixPluginContent);
console.log('Created fix-netlify-plugin-missing.js script');

// 3. Create the build-static.js script that Netlify is trying to run
const buildStaticPath = path.join(scriptsDir, 'build-static.js');
const buildStaticContent = `
// This is a replacement for the missing script Netlify is trying to run
console.log('Running build-static.js');
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

// 4. Update package.json to include the build-netlify script
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (fs.existsSync(packageJsonPath)) {
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Add the build-netlify script
    packageJson.scripts = {
      ...(packageJson.scripts || {}),
      "build": "next build",
      "build-netlify": "node scripts/fix-netlify-plugin-missing.js && node scripts/build-static.js"
    };
    
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log('Updated package.json with build-netlify script');
  } catch (error) {
    console.error('Error updating package.json:', error.message);
  }
}

console.log('\nMissing scripts have been created!');
console.log('This will allow Netlify to successfully run the build-netlify script');
console.log('that it is trying to use, and redirect it to run the standard Next.js build.'); 