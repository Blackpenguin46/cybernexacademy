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

console.log('Starting import path fixing...');

// Find all TypeScript and JavaScript files
const files = glob.sync('{app,components,contexts,lib,pages}/**/*.{ts,tsx,js,jsx}', {
  ignore: ['node_modules/**', '.next/**', 'scripts/**']
});

console.log(`Found ${files.length} files to process`);

// Process each file
let fixedCount = 0;
files.forEach(file => {
  const filePath = path.resolve(file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Replace absolute imports with relative imports
  const patterns = [
    { regex: /from ['"]@\/components\/(.*)['"]/g, dir: './app/components' },
    { regex: /from ['"]@\/contexts\/(.*)['"]/g, dir: './app/contexts' },
    { regex: /from ['"]@\/lib\/(.*)['"]/g, dir: './app/lib' },
    { regex: /from ['"]@\/types\/(.*)['"]/g, dir: './types' },
    { regex: /from ['"]@\/(.*)['"]/g, dir: '.' }
  ];
  
  patterns.forEach(({ regex, dir }) => {
    content = content.replace(regex, (match, p1) => {
      const targetPath = path.join(dir, p1);
      const sourcePath = path.dirname(filePath);
      let relativePath = path.relative(sourcePath, path.resolve(targetPath));
      
      // Ensure the path starts with ./ or ../
      if (!relativePath.startsWith('.')) {
        relativePath = './' + relativePath;
      }
      
      // Replace backslashes with forward slashes for cross-platform compatibility
      relativePath = relativePath.replace(/\\/g, '/');
      
      return `from '${relativePath}'`;
    });
  });
  
  // Write the modified content back to the file if changes were made
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    fixedCount++;
    console.log(`Fixed imports in: ${file}`);
  }
});

console.log(`Import paths fixed in ${fixedCount} files!`); 