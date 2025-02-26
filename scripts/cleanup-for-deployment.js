const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Cleaning up files not needed for Netlify deployment...');

// 1. Remove previous fix scripts
const scriptsDir = path.join(process.cwd(), 'scripts');
if (fs.existsSync(scriptsDir)) {
  fs.readdirSync(scriptsDir).forEach(file => {
    // Keep only the official setup script and this cleanup script
    if (file !== 'netlify-official-setup.js' && file !== 'cleanup-for-deployment.js') {
      const filePath = path.join(scriptsDir, file);
      fs.unlinkSync(filePath);
      console.log(`Removed ${filePath}`);
    }
  });
}

// 2. Remove build artifacts
const buildDirs = ['.next', 'out', '.cache', '.netlify'];
buildDirs.forEach(dir => {
  const dirPath = path.join(process.cwd(), dir);
  if (fs.existsSync(dirPath)) {
    try {
      fs.rmSync(dirPath, { recursive: true, force: true });
      console.log(`Removed build directory: ${dir}`);
    } catch (error) {
      console.error(`Error removing ${dir}: ${error.message}`);
    }
  }
});

// 3. Remove log files and temporary files
const tempPatterns = ['*.log', '*.tmp', 'build-info.json', 'deploy-logs'];
tempPatterns.forEach(pattern => {
  try {
    // Use find command to locate files matching pattern
    const findCommand = process.platform === 'win32'
      ? `powershell "Get-ChildItem -Path . -Filter '${pattern}' -Recurse | Remove-Item -Force"`
      : `find . -name "${pattern}" -type f -delete`;
    
    execSync(findCommand, { stdio: 'ignore' });
  } catch (error) {
    // Ignore errors from find/delete commands
  }
});

// 4. Clean package-lock.json to ensure fresh dependencies
const packageLockPath = path.join(process.cwd(), 'package-lock.json');
if (fs.existsSync(packageLockPath)) {
  fs.unlinkSync(packageLockPath);
  console.log('Removed package-lock.json for fresh install');
}

// 5. Ensure clean package.json based on official setup
// (This is redundant as netlify-official-setup.js already did this,
// but including it here for completeness)
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (fs.existsSync(packageJsonPath)) {
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Remove any custom/unnecessary scripts
    const essentialScripts = ['dev', 'build', 'start'];
    Object.keys(packageJson.scripts || {}).forEach(script => {
      if (!essentialScripts.includes(script)) {
        delete packageJson.scripts[script];
      }
    });
    
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log('Cleaned up package.json scripts');
  } catch (error) {
    console.error(`Error updating package.json: ${error.message}`);
  }
}

// 6. Remove any old config files that might conflict
const oldConfigFiles = [
  '.babelrc',
  '.env.local',
  'jsconfig.paths.json',
  'next-env.d.ts.backup',
  'tsconfig.backup.json'
];

oldConfigFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Removed old config file: ${file}`);
  }
});

console.log('\nCleanup complete! Your project is now ready for deployment.');
console.log('Essential files kept:');
console.log('- pages/ directory with your React components');
console.log('- public/ directory (if it exists) with static assets');
console.log('- netlify.toml with official configuration');
console.log('- next.config.js with minimal settings');
console.log('- package.json with required dependencies'); 