const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('REMOVING CONFLICTING FILES');
console.log('Checking for "pages/index.tsx" and "app/page.tsx" conflict...');

// List all possible locations of conflicting files
const conflictingPaths = [
  // App Router files
  path.join(process.cwd(), 'app/page.tsx'),
  path.join(process.cwd(), 'app/page.js'),
  path.join(process.cwd(), 'src/app/page.tsx'),
  path.join(process.cwd(), 'src/app/page.js'),
  
  // Any layout files that might cause issues
  path.join(process.cwd(), 'app/layout.tsx'),
  path.join(process.cwd(), 'app/layout.js'),
  path.join(process.cwd(), 'src/app/layout.tsx'),
  path.join(process.cwd(), 'src/app/layout.js'),
];

// Check and remove each conflicting file
let removedFiles = 0;
conflictingPaths.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`✅ Removed conflicting file: ${filePath}`);
      removedFiles++;
    } catch (error) {
      console.error(`❌ Error removing ${filePath}: ${error.message}`);
    }
  }
});

// If we found app router files, also try to remove entire app directories
if (removedFiles > 0) {
  const appDirs = [
    path.join(process.cwd(), 'app'),
    path.join(process.cwd(), 'src/app')
  ];
  
  appDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
      console.log(`Found app directory at ${dir} - removing it completely`);
      
      try {
        // Force recursive directory removal
        if (process.platform !== 'win32') {
          execSync(`rm -rf "${dir}"`);
        } else {
          execSync(`rmdir /s /q "${dir}"`);
        }
        console.log(`✅ Successfully removed app directory: ${dir}`);
      } catch (error) {
        console.error(`❌ Error removing app directory: ${error.message}`);
      }
    }
  });
}

// Check for any stray pages/index.tsx in the root (not in src)
const rootPageIndex = path.join(process.cwd(), 'pages/index.tsx');
const rootPageIndexJs = path.join(process.cwd(), 'pages/index.js');

// We can safely remove these since we're using src/pages structure
[rootPageIndex, rootPageIndexJs].forEach(filePath => {
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`✅ Removed duplicate index file: ${filePath}`);
    } catch (error) {
      console.error(`❌ Error removing ${filePath}: ${error.message}`);
    }
  }
});

// Verify src/pages/index.tsx exists (our preferred location)
const srcPagesIndex = path.join(process.cwd(), 'src/pages/index.tsx');
if (!fs.existsSync(srcPagesIndex)) {
  console.log('Creating src/pages/index.tsx...');
  
  // Create the directory if it doesn't exist
  const srcPagesDir = path.join(process.cwd(), 'src/pages');
  if (!fs.existsSync(srcPagesDir)) {
    fs.mkdirSync(srcPagesDir, { recursive: true });
  }
  
  // Create a minimal index.tsx
  const indexContent = `
import React from 'react';

export default function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>CyberNex</h1>
      <p>Welcome to CyberNex</p>
    </div>
  );
}
`;
  
  fs.writeFileSync(srcPagesIndex, indexContent.trim());
  console.log('✅ Created src/pages/index.tsx');
}

// Double check for any empty pages directory at the root
const rootPagesDir = path.join(process.cwd(), 'pages');
if (fs.existsSync(rootPagesDir)) {
  try {
    const files = fs.readdirSync(rootPagesDir);
    if (files.length === 0) {
      // It's empty, remove it
      fs.rmdirSync(rootPagesDir);
      console.log('✅ Removed empty pages directory at root');
    } else {
      console.log(`⚠️ Found non-empty pages directory at root with ${files.length} files - this might conflict with src/pages`);
    }
  } catch (error) {
    console.error(`❌ Error checking root pages directory: ${error.message}`);
  }
}

// Create a next.config.js that explicitly disables app router
const nextConfigPath = path.join(process.cwd(), 'next.config.js');
const nextConfigContent = `
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: false,
  },
};

module.exports = nextConfig;
`;

fs.writeFileSync(nextConfigPath, nextConfigContent.trim());
console.log('✅ Updated next.config.js to explicitly disable App Router');

console.log('\n🔍 CONFLICT RESOLUTION SUMMARY:');
console.log('1. Removed any app/page.tsx files that conflicted with pages/index.tsx');
console.log('2. Checked for and removed App Router directories');
console.log('3. Ensured src/pages/index.tsx exists (our main entry point)');
console.log('4. Removed any pages/index.tsx at the root level');
console.log('5. Updated next.config.js to explicitly disable the App Router');
console.log('\nThe build should now proceed without router conflicts!'); 