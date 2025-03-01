const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to find duplicate pages
function findDuplicatePages() {
  const pagesDir = path.join(process.cwd(), 'pages');
  
  // Skip if pages directory doesn't exist
  if (!fs.existsSync(pagesDir)) {
    console.log('No pages directory found. Skipping duplicate page check.');
    return;
  }
  
  // Get all page files with different extensions
  const pageFiles = glob.sync('**/*.(js|jsx|ts|tsx)', { cwd: pagesDir });
  
  // Map routes to files
  const routeMap = {};
  
  pageFiles.forEach(file => {
    // Remove extension to get route
    const route = file.replace(/\.(js|jsx|ts|tsx)$/, '');
    
    if (!routeMap[route]) {
      routeMap[route] = [];
    }
    
    routeMap[route].push(file);
  });
  
  // Find routes with multiple files
  const duplicates = Object.entries(routeMap)
    .filter(([_, files]) => files.length > 1);
  
  if (duplicates.length === 0) {
    console.log('No duplicate pages found.');
    return;
  }
  
  console.log('Found duplicate pages:');
  duplicates.forEach(([route, files]) => {
    console.log(`Route: ${route}`);
    console.log(`Files: ${files.join(', ')}`);
    
    // Keep the first file, rename others
    files.slice(1).forEach(file => {
      const fullPath = path.join(pagesDir, file);
      const backupPath = `${fullPath}.bak`;
      console.log(`Renaming ${file} to ${file}.bak`);
      fs.renameSync(fullPath, backupPath);
    });
  });
}

// Run the function
findDuplicatePages(); 