const fs = require('fs');
const path = require('path');

console.log('Starting removal of src/pages directory...');

// Check if src/pages directory exists and remove it
const srcPagesDir = path.join(process.cwd(), 'src', 'pages');
if (fs.existsSync(srcPagesDir)) {
  console.log(`Found src/pages directory at ${srcPagesDir}, removing...`);
  try {
    fs.rmSync(srcPagesDir, { recursive: true, force: true });
    console.log('Successfully removed src/pages directory');
  } catch (error) {
    console.error('Error removing src/pages directory:', error);
  }
} else {
  console.log('src/pages directory does not exist, nothing to remove');
}

console.log('Removal process completed'); 