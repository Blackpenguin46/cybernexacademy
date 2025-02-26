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

console.log('Starting conversion of all imports to relative paths...');

// Find all TypeScript and JavaScript files
const files = glob.sync('**/*.{ts,tsx,js,jsx}', {
  ignore: ['node_modules/**', '.next/**', 'scripts/**', 'public/**']
});

console.log(`Found ${files.length} files to process`);

// Map to store file paths for quick lookup
const filePathMap = new Map();
files.forEach(file => {
  const normalizedPath = path.normalize(file);
  filePathMap.set(normalizedPath.replace(/\.(ts|tsx|js|jsx)$/, ''), normalizedPath);
});

// Process each file
let fixedCount = 0;
files.forEach(file => {
  const filePath = path.resolve(file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Find all import statements with @/ prefix
  const importRegex = /import\s+(?:{[^}]*}|\*\s+as\s+[^,]+|[^,{}\s*]+)(?:\s*,\s*(?:{[^}]*}|\*\s+as\s+[^,]+|[^,{}\s*]+))*\s+from\s+['"]@\/([^'"]+)['"]/g;
  const requireRegex = /(?:const|let|var)\s+(?:{[^}]*}|\*\s+as\s+[^,]+|[^,{}\s*]+)(?:\s*,\s*(?:{[^}]*}|\*\s+as\s+[^,]+|[^,{}\s*]+))*\s+=\s+require\(['"]@\/([^'"]+)['"]\)/g;
  
  // Replace import statements
  content = content.replace(importRegex, (match, importPath) => {
    const sourceDir = path.dirname(filePath);
    
    // Find the actual file path
    let targetFilePath = '';
    for (const [key, value] of filePathMap.entries()) {
      if (importPath === key || importPath.startsWith(key + '/')) {
        targetFilePath = value;
        break;
      }
    }
    
    if (!targetFilePath) {
      // If we can't find the exact file, try to find the directory
      const possibleDir = path.join(process.cwd(), importPath);
      if (fs.existsSync(possibleDir)) {
        targetFilePath = possibleDir;
      } else {
        // Try with extensions
        const extensions = ['.ts', '.tsx', '.js', '.jsx'];
        for (const ext of extensions) {
          const possibleFile = path.join(process.cwd(), importPath + ext);
          if (fs.existsSync(possibleFile)) {
            targetFilePath = possibleFile;
            break;
          }
        }
      }
    }
    
    if (!targetFilePath) {
      console.warn(`Could not find file for import: @/${importPath} in ${file}`);
      return match; // Keep original if we can't resolve
    }
    
    // Calculate relative path
    let relativePath = path.relative(sourceDir, targetFilePath);
    
    // Ensure the path starts with ./ or ../
    if (!relativePath.startsWith('.')) {
      relativePath = './' + relativePath;
    }
    
    // Replace backslashes with forward slashes for cross-platform compatibility
    relativePath = relativePath.replace(/\\/g, '/');
    
    // Remove extension for import statements
    relativePath = relativePath.replace(/\.(ts|tsx|js|jsx)$/, '');
    
    return match.replace(`@/${importPath}`, relativePath);
  });
  
  // Replace require statements
  content = content.replace(requireRegex, (match, importPath) => {
    const sourceDir = path.dirname(filePath);
    
    // Find the actual file path
    let targetFilePath = '';
    for (const [key, value] of filePathMap.entries()) {
      if (importPath === key || importPath.startsWith(key + '/')) {
        targetFilePath = value;
        break;
      }
    }
    
    if (!targetFilePath) {
      // If we can't find the exact file, try to find the directory
      const possibleDir = path.join(process.cwd(), importPath);
      if (fs.existsSync(possibleDir)) {
        targetFilePath = possibleDir;
      } else {
        // Try with extensions
        const extensions = ['.ts', '.tsx', '.js', '.jsx'];
        for (const ext of extensions) {
          const possibleFile = path.join(process.cwd(), importPath + ext);
          if (fs.existsSync(possibleFile)) {
            targetFilePath = possibleFile;
            break;
          }
        }
      }
    }
    
    if (!targetFilePath) {
      console.warn(`Could not find file for require: @/${importPath} in ${file}`);
      return match; // Keep original if we can't resolve
    }
    
    // Calculate relative path
    let relativePath = path.relative(sourceDir, targetFilePath);
    
    // Ensure the path starts with ./ or ../
    if (!relativePath.startsWith('.')) {
      relativePath = './' + relativePath;
    }
    
    // Replace backslashes with forward slashes for cross-platform compatibility
    relativePath = relativePath.replace(/\\/g, '/');
    
    // Remove extension for import statements
    relativePath = relativePath.replace(/\.(ts|tsx|js|jsx)$/, '');
    
    return match.replace(`@/${importPath}`, relativePath);
  });
  
  // Write the modified content back to the file if changes were made
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    fixedCount++;
    console.log(`Fixed imports in: ${file}`);
  }
});

console.log(`Import paths fixed in ${fixedCount} files!`); 