const fs = require('fs');
const path = require('path');

console.log('Specifically targeting pages/index.tsx file for deletion');

// List all possible locations of pages/index.tsx
const pagesToDelete = [
  path.join(process.cwd(), 'pages/index.tsx'),
  path.join(process.cwd(), 'pages/index.js'),
  // Also check capitalized version just in case
  path.join(process.cwd(), 'Pages/index.tsx'),
  path.join(process.cwd(), 'Pages/index.js')
];

// Delete each file if it exists
let deletedAny = false;
pagesToDelete.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`✅ Successfully deleted: ${filePath}`);
      deletedAny = true;
    } catch (error) {
      console.error(`❌ Error deleting ${filePath}: ${error.message}`);
    }
  }
});

if (!deletedAny) {
  console.log('No pages/index.tsx or similar files found to delete.');
}

console.log('Deletion operation complete.'); 