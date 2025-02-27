const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Completely removing App Router files...');

// Force remove the app directory
const appDir = path.join(process.cwd(), 'app');
if (fs.existsSync(appDir)) {
  console.log(`Found app directory at ${appDir}. Removing completely...`);
  
  try {
    // Force recursive directory removal
    if (process.platform !== 'win32') {
      execSync(`rm -rf "${appDir}"`);
    } else {
      execSync(`rmdir /s /q "${appDir}"`);
    }
    console.log('✅ Successfully removed app directory');
  } catch (error) {
    console.error(`Error removing app directory: ${error.message}`);
  }
} else {
  console.log('No app directory found. Good!');
}

// Double-check src/app directory
const srcAppDir = path.join(process.cwd(), 'src/app');
if (fs.existsSync(srcAppDir)) {
  console.log(`Found src/app directory. Removing...`);
  
  try {
    if (process.platform !== 'win32') {
      execSync(`rm -rf "${srcAppDir}"`);
    } else {
      execSync(`rmdir /s /q "${srcAppDir}"`);
    }
    console.log('✅ Successfully removed src/app directory');
  } catch (error) {
    console.error(`Error removing src/app directory: ${error.message}`);
  }
}

// Create missing components directory
const componentsDir = path.join(process.cwd(), 'src/components');
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
  console.log('Created src/components directory');
}

// Create missing lib directory
const libDir = path.join(process.cwd(), 'src/lib');
if (!fs.existsSync(libDir)) {
  fs.mkdirSync(libDir, { recursive: true });
  console.log('Created src/lib directory');
}

// Update next.config.js to explicitly disable App Router
const nextConfigPath = path.join(process.cwd(), 'next.config.js');
const nextConfigContent = `
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Explicitly disable the App Router
  experimental: {
    appDir: false,
  },
};

module.exports = nextConfig;
`;

fs.writeFileSync(nextConfigPath, nextConfigContent.trim());
console.log('Updated next.config.js to explicitly disable App Router');

console.log('✅ App directory and files completely removed'); 