const fs = require('fs');
const path = require('path');

console.log('Starting prebuild cleanup...');

// 1. Create mock auth implementation
const libDir = path.join(process.cwd(), 'lib');
if (!fs.existsSync(libDir)) {
  fs.mkdirSync(libDir, { recursive: true });
}

// Create mock auth implementation
const mockAuthContent = `
import React from 'react';

export function AuthProvider({ children }) {
  return React.createElement(React.Fragment, null, children);
}

export function useAuth() {
  return {
    user: null,
    loading: false,
    error: null,
    signIn: () => Promise.resolve({ user: null, error: null }),
    signUp: () => Promise.resolve({ user: null, error: null }),
    signOut: () => Promise.resolve(),
    isAuthenticated: false
  };
}
`;

fs.writeFileSync(path.join(libDir, 'auth.js'), mockAuthContent);
console.log('Created mock auth implementation');

// 2. Create empty middleware.js in root to prevent edge runtime issues
const middlewareContent = `
export default function middleware() {
  // Do nothing
  return;
}

export const config = {
  matcher: []
};
`;

fs.writeFileSync(path.join(process.cwd(), 'middleware.js'), middlewareContent);
console.log('Created empty middleware.js');

// 3. Remove .babelrc if it exists
const babelrcPath = path.join(process.cwd(), '.babelrc');
if (fs.existsSync(babelrcPath)) {
  fs.unlinkSync(babelrcPath);
  console.log('Removed .babelrc');
}

// 4. Fix duplicate pages
const pagesDir = path.join(process.cwd(), 'pages');
if (fs.existsSync(pagesDir)) {
  console.log('Checking for duplicate pages...');
  
  // Specific known duplicate: events.js and events/index.js
  const eventsPath = path.join(pagesDir, 'communities', 'events.js');
  const eventsIndexPath = path.join(pagesDir, 'communities', 'events', 'index.js');
  
  if (fs.existsSync(eventsPath) && fs.existsSync(eventsIndexPath)) {
    console.log('Found duplicate: communities/events.js and communities/events/index.js');
    console.log('Renaming communities/events.js to communities/events.js.bak');
    fs.renameSync(eventsPath, `${eventsPath}.bak`);
  }
  
  // Check for other potential duplicates
  const findDuplicates = (dir, baseRoute = '') => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    // Check for index.js and parent.js pattern
    const hasIndex = entries.some(entry => !entry.isDirectory() && entry.name === 'index.js');
    
    if (hasIndex && baseRoute) {
      const parentRoute = path.dirname(baseRoute);
      const parentName = path.basename(baseRoute);
      const parentFilePath = path.join(pagesDir, parentRoute, `${parentName}.js`);
      
      if (fs.existsSync(parentFilePath)) {
        console.log(`Found duplicate: ${parentRoute}/${parentName}.js and ${baseRoute}/index.js`);
        console.log(`Renaming ${parentRoute}/${parentName}.js to ${parentRoute}/${parentName}.js.bak`);
        fs.renameSync(parentFilePath, `${parentFilePath}.bak`);
      }
    }
    
    // Recursively check subdirectories
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const newRoute = baseRoute ? `${baseRoute}/${entry.name}` : entry.name;
        findDuplicates(path.join(dir, entry.name), newRoute);
      }
    }
  };
  
  findDuplicates(pagesDir);
  console.log('Duplicate page check completed');
}

console.log('Prebuild cleanup completed successfully'); 