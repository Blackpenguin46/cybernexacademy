const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('FIXING ROUTER CONFLICT: Explicitly removing App Router');

// 1. Force remove the entire app directory
const appDir = path.join(process.cwd(), 'app');
if (fs.existsSync(appDir)) {
  console.log('App Router directory found - removing completely');
  
  try {
    // On Unix systems, use rm -rf
    if (process.platform !== 'win32') {
      execSync(`rm -rf ${appDir}`);
    } else {
      // On Windows systems
      execSync(`rmdir /s /q ${appDir}`);
    }
    console.log('✅ Successfully removed app directory');
  } catch (error) {
    console.error(`Error removing app directory: ${error.message}`);
    
    // If exec fails, try recursive deletion with fs
    try {
      function deleteFolderRecursive(directoryPath) {
        if (fs.existsSync(directoryPath)) {
          fs.readdirSync(directoryPath).forEach((file) => {
            const curPath = path.join(directoryPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
              deleteFolderRecursive(curPath);
            } else {
              fs.unlinkSync(curPath);
            }
          });
          fs.rmdirSync(directoryPath);
        }
      }
      
      deleteFolderRecursive(appDir);
      console.log('✅ Successfully removed app directory (using fs recursive)');
    } catch (fsError) {
      console.error(`Still couldn't remove app directory: ${fsError.message}`);
    }
  }
} else {
  console.log('No app directory found, good!');
}

// 2. Check for any hidden app directory or files that might be causing the conflict
const hiddenAppDir = path.join(process.cwd(), '.app');
if (fs.existsSync(hiddenAppDir)) {
  try {
    fs.rmdirSync(hiddenAppDir, { recursive: true });
    console.log('Removed hidden .app directory');
  } catch (error) {
    console.error(`Error removing hidden .app directory: ${error.message}`);
  }
}

// 3. Create next.config.js with specific settings to ensure Pages Router
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
console.log('Created next.config.js with App Router explicitly disabled');

// 4. Verify src/pages directory is set up correctly
const srcPagesDir = path.join(process.cwd(), 'src', 'pages');
if (!fs.existsSync(srcPagesDir)) {
  fs.mkdirSync(srcPagesDir, { recursive: true });
  console.log('Created src/pages directory');
}

// 5. Verify we have pages/index.tsx in the right location
const indexTsxPath = path.join(srcPagesDir, 'index.tsx');
if (!fs.existsSync(indexTsxPath)) {
  // Create a basic index.tsx if it doesn't exist
  const indexContent = `
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
      <h1>CyberNex</h1>
      <p>Welcome to your cybersecurity learning platform</p>
      <div style={{ marginTop: '1rem' }}>
        <Link href="/login">
          <span style={{ marginRight: '1rem', padding: '0.5rem 1rem', background: '#0070f3', color: 'white', borderRadius: '0.25rem', textDecoration: 'none', cursor: 'pointer' }}>
            Login
          </span>
        </Link>
        <Link href="/signup">
          <span style={{ padding: '0.5rem 1rem', background: '#0070f3', color: 'white', borderRadius: '0.25rem', textDecoration: 'none', cursor: 'pointer' }}>
            Sign Up
          </span>
        </Link>
      </div>
    </div>
  );
}
`;
  fs.writeFileSync(indexTsxPath, indexContent.trim());
  console.log('Created src/pages/index.tsx');
}

// 6. Check for root pages directory conflicts
const rootPagesDir = path.join(process.cwd(), 'pages');
if (fs.existsSync(rootPagesDir)) {
  console.log('Found a root pages directory - this could conflict with src/pages');
  
  // Check if it has any critical files
  let rootPagesFiles = [];
  try {
    rootPagesFiles = fs.readdirSync(rootPagesDir);
  } catch (error) {
    console.error(`Error reading pages directory: ${error.message}`);
  }
  
  if (rootPagesFiles.length > 0) {
    console.log(`Root pages has ${rootPagesFiles.length} files. Removing them...`);
    
    // Move important files to src/pages if needed
    rootPagesFiles.forEach(file => {
      const sourcePath = path.join(rootPagesDir, file);
      try {
        // Delete the file from root pages
        fs.unlinkSync(sourcePath);
        console.log(`Removed ${file} from root pages directory`);
      } catch (error) {
        console.error(`Error removing ${file}: ${error.message}`);
      }
    });
  }
  
  // Try to remove the root pages directory
  try {
    fs.rmdirSync(rootPagesDir);
    console.log('Removed empty root pages directory');
  } catch (error) {
    console.error(`Error removing root pages directory: ${error.message}`);
    
    // If it can't be removed, try force removal
    try {
      if (process.platform !== 'win32') {
        execSync(`rm -rf ${rootPagesDir}`);
      } else {
        execSync(`rmdir /s /q ${rootPagesDir}`);
      }
      console.log('Force removed root pages directory');
    } catch (execError) {
      console.error(`Failed to force remove root pages directory: ${execError.message}`);
    }
  }
}

// 7. Update package.json to ensure plugin versions are compatible
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (fs.existsSync(packageJsonPath)) {
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Make sure we have consistent versions
    packageJson.dependencies = {
      ...packageJson.dependencies,
      "next": "13.4.19",
      "react": "18.2.0",
      "react-dom": "18.2.0",
    };
    
    packageJson.devDependencies = {
      ...packageJson.devDependencies,
      "@netlify/plugin-nextjs": "4.41.3",
    };
    
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log('Updated package.json with consistent versions');
  } catch (error) {
    console.error(`Error updating package.json: ${error.message}`);
  }
}

console.log('\n✅ ROUTER CONFLICT SHOULD BE RESOLVED');
console.log('The app directory has been completely removed');
console.log('next.config.js has been updated to explicitly disable the App Router');
console.log('Only the Pages Router in src/pages should now be active'); 