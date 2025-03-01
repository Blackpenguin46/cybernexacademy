const fs = require('fs');
const path = require('path');

// Check if .babelrc exists and remove it
const babelrcPath = path.join(process.cwd(), '.babelrc');
if (fs.existsSync(babelrcPath)) {
  console.log('Removing .babelrc file');
  fs.unlinkSync(babelrcPath);
}

// Check if babel.config.js exists and remove it
const babelConfigPath = path.join(process.cwd(), 'babel.config.js');
if (fs.existsSync(babelConfigPath)) {
  console.log('Removing babel.config.js file');
  fs.unlinkSync(babelConfigPath);
}

console.log('Babel configuration cleanup completed'); 