const fs = require('fs');
const path = require('path');

// Path to package-lock.json
const lockFilePath = path.join(process.cwd(), 'package-lock.json');

// Remove package-lock.json if it exists
if (fs.existsSync(lockFilePath)) {
  console.log('Removing package-lock.json to avoid version conflicts');
  fs.unlinkSync(lockFilePath);
  console.log('package-lock.json removed successfully');
} else {
  console.log('No package-lock.json found, nothing to remove');
}

// Create .npmrc file to avoid using package-lock
const npmrcPath = path.join(process.cwd(), '.npmrc');
const npmrcContent = 'package-lock=false\n';

fs.writeFileSync(npmrcPath, npmrcContent);
console.log('.npmrc file created to prevent lock file generation');

console.log('Cleanup completed successfully'); 