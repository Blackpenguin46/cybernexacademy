const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Install glob if not already installed
try {
  require.resolve('glob');
} catch (e) {
  console.log('Installing glob package...');
  execSync('npm install glob --save-dev');
}

const glob = require('glob');

console.log('Starting import path fixing for Netlify deployment...');

// Find all TypeScript and JavaScript files
const files = glob.sync('**/*.{ts,tsx,js,jsx}', {
  ignore: ['node_modules/**', '.next/**', 'scripts/**', 'public/**']
});

console.log(`Found ${files.length} files to process`);

// Process each file
let fixedCount = 0;
files.forEach(file => {
  const filePath = path.resolve(file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Replace all @/ imports with relative paths
  const regex = /from ['"]@\/([^'"]+)['"]/g;
  
  content = content.replace(regex, (match, importPath) => {
    const sourcePath = path.dirname(filePath);
    const targetPath = path.resolve(importPath);
    
    // Calculate relative path from source to target
    let relativePath = path.relative(sourcePath, targetPath);
    
    // Ensure the path starts with ./ or ../
    if (!relativePath.startsWith('.')) {
      relativePath = './' + relativePath;
    }
    
    // Replace backslashes with forward slashes for cross-platform compatibility
    relativePath = relativePath.replace(/\\/g, '/');
    
    return `from '${relativePath}'`;
  });
  
  // Write the modified content back to the file if changes were made
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    fixedCount++;
    console.log(`Fixed imports in: ${file}`);
  }
});

console.log(`Import paths fixed in ${fixedCount} files!`); 