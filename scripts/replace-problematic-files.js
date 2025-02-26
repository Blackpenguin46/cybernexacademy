const fs = require('fs');
const path = require('path');

console.log('Starting to replace problematic files...');

// 1. Replace the cybernex-plus dashboard page
const dashboardPagePath = path.join(process.cwd(), 'app', 'cybernex-plus', 'dashboard', 'page.tsx');
const dashboardDir = path.dirname(dashboardPagePath);

// Create directory if it doesn't exist
if (!fs.existsSync(dashboardDir)) {
  console.log(`Creating directory: ${dashboardDir}`);
  fs.mkdirSync(dashboardDir, { recursive: true });
}

// Create a simple, clean dashboard page
const dashboardContent = `
import React from 'react';

export default function CybernexPlusDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cybernex Plus Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
          <p>Track your learning journey and achievements.</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Premium Resources</h2>
          <p>Access exclusive learning materials and tutorials.</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Community Access</h2>
          <p>Connect with other cybersecurity enthusiasts.</p>
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(dashboardPagePath, dashboardContent.trim(), 'utf8');
console.log(`Replaced: ${dashboardPagePath}`);

console.log('Finished replacing problematic files'); 