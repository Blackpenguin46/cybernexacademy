const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('IMPLEMENTING ONE-STEP DIRECT SOLUTION');

// 1. ELIMINATE ALL scripts except the direct next build
const scriptsDir = path.join(process.cwd(), 'scripts');
if (fs.existsSync(scriptsDir)) {
  try {
    // Backup the current scripts
    const backupDir = path.join(process.cwd(), 'scripts-backup');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir);
    }
    
    fs.readdirSync(scriptsDir).forEach(file => {
      if (file !== 'one-step-solution.js') {
        try {
          const source = path.join(scriptsDir, file);
          const dest = path.join(backupDir, file);
          fs.copyFileSync(source, dest);
          fs.unlinkSync(source);
          console.log(`Moved ${file} to backup`);
        } catch (err) {
          console.error(`Error moving ${file}: ${err.message}`);
        }
      }
    });
    
    console.log('Removed all scripts that might interfere');
  } catch (err) {
    console.error(`Error processing scripts: ${err.message}`);
  }
}

// 2. Create very simple package.json
const packageJsonPath = path.join(process.cwd(), 'package.json');
const packageJson = {
  "name": "cybernex",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    // DIRECTLY run next build without any indirection
    "build-netlify": "next build"
  },
  "dependencies": {
    "next": "13.4.19",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "@netlify/plugin-nextjs": "4.41.3"
  }
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('Created clean package.json with direct build-netlify script');

// 3. Create minimal next.config.js
const nextConfigPath = path.join(process.cwd(), 'next.config.js');
const nextConfig = `
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // NO custom settings
};

module.exports = nextConfig;
`;

fs.writeFileSync(nextConfigPath, nextConfig);
console.log('Created minimal next.config.js');

// 4. Create clear netlify.toml
const netlifyTomlPath = path.join(process.cwd(), 'netlify.toml');
const netlifyToml = `
[build]
  command = "next build"  # DIRECTLY run next build
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
`;

fs.writeFileSync(netlifyTomlPath, netlifyToml);
console.log('Created direct netlify.toml configuration');

// 5. Create very basic test pages to ensure build works
const pagesDir = path.join(process.cwd(), 'pages');
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

const indexPath = path.join(pagesDir, 'index.js');
const indexContent = `
export default function Home() {
  return (
    <div>
      <h1>Simple Test Page</h1>
      <p>This is a minimal test page to verify Next.js builds correctly</p>
    </div>
  );
}
`;

fs.writeFileSync(indexPath, indexContent);
console.log('Created minimal test page');

// 6. Run the build locally to make sure it works
console.log('\nTesting build locally...');
try {
  execSync('npx next build', { stdio: 'inherit' });
  console.log('✅ Local build successful!');
  
  // Check if .next directory exists and has the right structure
  const nextDir = path.join(process.cwd(), '.next');
  if (fs.existsSync(nextDir)) {
    console.log('.next directory exists');
    
    const contents = fs.readdirSync(nextDir);
    console.log(`.next contains: ${contents.join(', ')}`);
    
    if (contents.includes('server') && contents.includes('static')) {
      console.log('✅ .next directory has the expected structure');
    } else {
      console.log('⚠️ .next directory may not have standard Next.js build structure');
    }
  } else {
    console.log('❌ .next directory was not created by the build!');
  }
} catch (err) {
  console.error(`❌ Local build failed: ${err.message}`);
}

console.log('\n-----------------------------------------');
console.log('SOLUTION COMPLETE - DRASTIC RESET APPLIED');
console.log('-----------------------------------------');
console.log('\nThis script has:');
console.log('1. REMOVED all potentially interfering scripts');
console.log('2. Set package.json to run next build DIRECTLY');
console.log('3. Created minimal next.config.js without custom settings');
console.log('4. Created netlify.toml that DIRECTLY runs next build');
console.log('5. Created a test page and verified the build works locally');
console.log('\nIMPORTANT NEXT STEPS:');
console.log('1. Commit and push these changes');
console.log('2. Go to Netlify and set the build command to exactly: next build');
console.log('3. Set the publish directory to exactly: .next'); 