const fs = require('fs');
const path = require('path');

console.log('Checking project structure...');

// List all directories at the root level
const rootDir = process.cwd();
console.log('Root directory:', rootDir);

try {
  const rootContents = fs.readdirSync(rootDir);
  console.log('Root directory contents:');
  rootContents.forEach(item => {
    const itemPath = path.join(rootDir, item);
    const stats = fs.statSync(itemPath);
    console.log(`- ${item} (${stats.isDirectory() ? 'directory' : 'file'})`);
  });
} catch (error) {
  console.error('Error reading root directory:', error);
}

// Check if src directory exists and list its contents
const srcDir = path.join(rootDir, 'src');
if (fs.existsSync(srcDir)) {
  console.log('\nSrc directory contents:');
  try {
    const srcContents = fs.readdirSync(srcDir);
    srcContents.forEach(item => {
      const itemPath = path.join(srcDir, item);
      const stats = fs.statSync(itemPath);
      console.log(`- ${item} (${stats.isDirectory() ? 'directory' : 'file'})`);
    });
  } catch (error) {
    console.error('Error reading src directory:', error);
  }
}

// Check if app directory exists and list its contents
const appDir = path.join(rootDir, 'app');
if (fs.existsSync(appDir)) {
  console.log('\nApp directory contents:');
  try {
    const appContents = fs.readdirSync(appDir);
    appContents.forEach(item => {
      const itemPath = path.join(appDir, item);
      const stats = fs.statSync(itemPath);
      console.log(`- ${item} (${stats.isDirectory() ? 'directory' : 'file'})`);
    });
  } catch (error) {
    console.error('Error reading app directory:', error);
  }
}

console.log('\nProject structure check completed'); 