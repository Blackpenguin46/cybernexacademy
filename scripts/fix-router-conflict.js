const fs = require('fs');
const path = require('path');

console.log('Fixing router conflict between Pages Router and App Router...');

// Check if both conflicting files exist
const pagesIndexPath = path.join(process.cwd(), 'pages/index.js');
const appPagePath = path.join(process.cwd(), 'app/page.tsx');

let pagesIndexExists = fs.existsSync(pagesIndexPath);
let appPageExists = fs.existsSync(appPagePath);

if (pagesIndexExists && appPageExists) {
  console.log('Found conflicting files:');
  console.log('- pages/index.js');
  console.log('- app/page.tsx');
  
  // Let's remove the pages/index.js file
  fs.unlinkSync(pagesIndexPath);
  console.log('✅ Removed pages/index.js to resolve the conflict');
  
  // Check if the pages directory is now empty
  const pagesDir = path.join(process.cwd(), 'pages');
  if (fs.existsSync(pagesDir)) {
    const files = fs.readdirSync(pagesDir);
    if (files.length === 0) {
      // Can optionally remove the empty pages directory
      fs.rmdirSync(pagesDir);
      console.log('Removed empty pages directory');
    } else {
      console.log(`Note: pages directory still contains ${files.length} files/directories`);
    }
  }
  
  console.log('\nYour project is now using the App Router exclusively with app/page.tsx');
} else if (pagesIndexExists) {
  console.log('Only pages/index.js exists - your project is using the Pages Router');
} else if (appPageExists) {
  console.log('Only app/page.tsx exists - your project is using the App Router');
} else {
  console.log('Neither of the conflicting files were found. Creating app/page.tsx...');
  
  // Ensure app directory exists
  const appDir = path.join(process.cwd(), 'app');
  if (!fs.existsSync(appDir)) {
    fs.mkdirSync(appDir, { recursive: true });
  }
  
  // Create a basic app/page.tsx
  const pageContent = `
export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>CyberNex</h1>
      <p>Your site is being deployed with the App Router</p>
    </div>
  );
}
`;
  
  fs.writeFileSync(appPagePath, pageContent.trim());
  console.log('Created app/page.tsx for App Router');
}

console.log('\nRouter conflict resolved. Your Next.js app should now build without conflicts.'); 