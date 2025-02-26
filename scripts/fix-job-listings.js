const fs = require('fs');
const path = require('path');

console.log('Starting to fix JobListings.tsx file...');

// Find all possible locations for JobListings.tsx
const possiblePaths = [
  path.join(process.cwd(), 'components', 'JobListings.tsx'),
  path.join(process.cwd(), 'app', 'components', 'JobListings.tsx'),
  path.join(process.cwd(), 'src', 'components', 'JobListings.tsx')
];

let fileFound = false;

// Check each possible location
for (const filePath of possiblePaths) {
  if (fs.existsSync(filePath)) {
    console.log(`Found JobListings.tsx at ${filePath}, fixing syntax errors...`);
    fileFound = true;
    
    // Read the file content
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the apostrophe issue
    content = content.replace(/Bachelor's/g, "Bachelor\\'s");
    
    // Write the fixed content back to the file
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed apostrophe issue in ${filePath}`);
  }
}

if (!fileFound) {
  console.log('JobListings.tsx not found in any of the expected locations.');
}

console.log('Finished fixing JobListings.tsx file'); 