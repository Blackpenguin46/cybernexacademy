const fs = require('fs');
const path = require('path');

console.log('Starting prebuild cleanup...');

// 1. Remove Babel config if it exists
const babelrcPath = path.join(process.cwd(), '.babelrc');
if (fs.existsSync(babelrcPath)) {
  console.log('Removing .babelrc file');
  fs.unlinkSync(babelrcPath);
}

const babelConfigPath = path.join(process.cwd(), 'babel.config.js');
if (fs.existsSync(babelConfigPath)) {
  console.log('Removing babel.config.js file');
  fs.unlinkSync(babelConfigPath);
}

// 2. Check for duplicate pages manually (no external dependencies)
const pagesDir = path.join(process.cwd(), 'pages');

if (fs.existsSync(pagesDir)) {
  console.log('Looking for duplicate pages...');
  
  // Get all files with relevant extensions
  const getFilesRecursively = (dir, files = []) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        getFilesRecursively(fullPath, files);
      } else if (/\.(js|jsx|ts|tsx)$/.test(entry.name)) {
        // Get the path relative to pages directory
        const relativePath = path.relative(pagesDir, fullPath);
        files.push(relativePath);
      }
    }
    
    return files;
  };
  
  const pageFiles = getFilesRecursively(pagesDir);
  
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
  } else {
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
}

// 3. Create a proper mock file for auth
const authMockPath = path.join(process.cwd(), 'lib', 'mock-auth.js');
const authMockDir = path.dirname(authMockPath);

if (!fs.existsSync(authMockDir)) {
  fs.mkdirSync(authMockDir, { recursive: true });
}

const mockAuthContent = `
import React from 'react';

// Simple mock AuthProvider that passes children through
export function AuthProvider({ children }) {
  return React.createElement(React.Fragment, null, children);
}

// Simple mock useAuth that returns empty values
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

fs.writeFileSync(authMockPath, mockAuthContent);
console.log('Created mock auth file at:', authMockPath);

console.log('Prebuild cleanup completed'); 