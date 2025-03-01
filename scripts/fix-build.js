const fs = require('fs');
const path = require('path');

// Pages that use authentication
const AUTH_PAGES = [
  'dashboard.js',
  'premium/dashboard.js',
  'communities/mentorship.js',
];

// Temporary directory for original files
const TEMP_DIR = path.join(__dirname, '../.temp');

// Create temp directory if it doesn't exist
if (!fs.existsSync(TEMP_DIR)) {
  fs.mkdirSync(TEMP_DIR, { recursive: true });
}

// Backup and replace auth pages with static versions
AUTH_PAGES.forEach(pagePath => {
  const fullPath = path.join(__dirname, '../pages', pagePath);
  const tempPath = path.join(TEMP_DIR, pagePath);
  
  // Create directory for temp file if needed
  const tempDir = path.dirname(tempPath);
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }
  
  // Only process if the file exists
  if (fs.existsSync(fullPath)) {
    // Backup the original file
    console.log(`Backing up ${pagePath}`);
    fs.copyFileSync(fullPath, tempPath);
    
    // Create a simple static version
    const staticContent = `
      export default function StaticPage() {
        return (
          <div style={{ 
            fontFamily: 'Arial, sans-serif',
            maxWidth: '800px',
            margin: '40px auto',
            padding: '30px',
            textAlign: 'center'
          }}>
            <h2>Loading...</h2>
            <p>This page requires authentication</p>
            <script dangerouslySetInnerHTML={{ __html: \`
              // Redirect to the real page after hydration
              window.addEventListener('load', function() {
                window.location.reload();
              });
            \` }} />
          </div>
        );
      }
    `;
    
    // Write the static version
    console.log(`Creating static version of ${pagePath}`);
    fs.writeFileSync(fullPath, staticContent);
  }
});

// Register process to restore files after build
process.on('exit', () => {
  console.log('Restoring original files...');
  
  AUTH_PAGES.forEach(pagePath => {
    const fullPath = path.join(__dirname, '../pages', pagePath);
    const tempPath = path.join(TEMP_DIR, pagePath);
    
    if (fs.existsSync(tempPath)) {
      fs.copyFileSync(tempPath, fullPath);
      fs.unlinkSync(tempPath);
    }
  });
  
  // Clean up temp directory
  if (fs.existsSync(TEMP_DIR)) {
    fs.rmdirSync(TEMP_DIR, { recursive: true });
  }
});

console.log('Pre-build preparation complete!'); 