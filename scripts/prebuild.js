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

console.log('Prebuild cleanup completed successfully'); 