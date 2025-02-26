const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript and JavaScript files
const files = glob.sync('**/*.{ts,tsx,js,jsx}', {
  ignore: ['node_modules/**', '.next/**', 'scripts/**']
});

// Process each file
files.forEach(file => {
  const filePath = path.resolve(file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace absolute imports with relative imports where needed
  content = content.replace(/from ['"]@\/components\/(.*)['"]/g, (match, p1) => {
    const relativePath = path.relative(path.dirname(filePath), path.resolve('components', p1));
    return `from '${relativePath.startsWith('.') ? relativePath : './' + relativePath}'`;
  });
  
  content = content.replace(/from ['"]@\/contexts\/(.*)['"]/g, (match, p1) => {
    const relativePath = path.relative(path.dirname(filePath), path.resolve('contexts', p1));
    return `from '${relativePath.startsWith('.') ? relativePath : './' + relativePath}'`;
  });
  
  content = content.replace(/from ['"]@\/lib\/(.*)['"]/g, (match, p1) => {
    const relativePath = path.relative(path.dirname(filePath), path.resolve('lib', p1));
    return `from '${relativePath.startsWith('.') ? relativePath : './' + relativePath}'`;
  });
  
  // Write the modified content back to the file
  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Import paths fixed successfully!'); 