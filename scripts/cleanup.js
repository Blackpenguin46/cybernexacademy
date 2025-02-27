const fs = require('fs');
const path = require('path');

console.log('Cleaning up unnecessary files...');

// Files and directories that might cause conflicts
const filesToDelete = [
  // Old router files
  'pages/index.js',
  'pages/index.tsx',
  'pages/Home.tsx',
  'pages/home.tsx',
  'pages/Login.tsx',
  'pages/SignUp.tsx',
  'pages/Dashboard.tsx',
  
  // App router files
  'app/page.tsx',
  'app/page.js',
  'app/layout.tsx',
  'app/layout.js',
  
  // Old context files
  'contexts/AuthContext.ts',
  'contexts/AuthContext.js',
  'contexts/AuthProvider.tsx',
  'contexts/AuthProvider.js',
  
  // Old components in wrong location
  'components/Dashboard.tsx',
  'components/Login.tsx',
  'components/SignUp.tsx',
  'components/Home.tsx',
  
  // Potentially conflicting config files
  'next.config.mjs'
];

// Directories to check for emptiness and remove if empty
const dirsToCleanIfEmpty = [
  'pages',
  'app',
  'components',
  'contexts'
];

// Delete specific files
filesToDelete.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`Deleted: ${file}`);
    } catch (error) {
      console.error(`Error deleting ${file}: ${error.message}`);
    }
  }
});

// Remove empty directories (if they exist and are empty)
dirsToCleanIfEmpty.forEach(dir => {
  const dirPath = path.join(process.cwd(), dir);
  if (fs.existsSync(dirPath)) {
    try {
      const files = fs.readdirSync(dirPath);
      if (files.length === 0) {
        fs.rmdirSync(dirPath);
        console.log(`Removed empty directory: ${dir}`);
      } else {
        console.log(`Directory not empty, keeping: ${dir}`);
      }
    } catch (error) {
      console.error(`Error checking/removing directory ${dir}: ${error.message}`);
    }
  }
});

console.log('Cleanup complete!'); 