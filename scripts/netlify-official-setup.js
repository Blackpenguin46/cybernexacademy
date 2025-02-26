const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Setting up Next.js for Netlify using official recommended approach...');

// 1. Clean start - remove potentially problematic configuration files
const filesToRemove = [
  'netlify.toml',
  'next.config.js',
  '.npmrc'
];

filesToRemove.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Removed ${file}`);
  }
});

// 2. Create a clean package.json with only essential dependencies
const packageJsonPath = path.join(process.cwd(), 'package.json');
const packageJson = {
  "name": "cybernex",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
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
console.log('Created clean package.json with minimal dependencies');

// 3. Create minimal next.config.js
const nextConfigPath = path.join(process.cwd(), 'next.config.js');
const nextConfig = `
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};

module.exports = nextConfig;
`;

fs.writeFileSync(nextConfigPath, nextConfig);
console.log('Created minimal next.config.js');

// 4. Create standard netlify.toml per their documentation
const netlifyTomlPath = path.join(process.cwd(), 'netlify.toml');
const netlifyToml = `
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
`;

fs.writeFileSync(netlifyTomlPath, netlifyToml);
console.log('Created standard netlify.toml with @netlify/plugin-nextjs plugin');

// 5. Create an example page to verify everything works
const pagesDir = path.join(process.cwd(), 'pages');
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

const indexPath = path.join(pagesDir, 'index.js');
const indexContent = `
export default function Home() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>CyberNex</h1>
      <p>Your cybersecurity learning platform</p>
    </div>
  );
}
`;

fs.writeFileSync(indexPath, indexContent.trim());
console.log('Created minimal index page');

// 6. Create README with Netlify deployment instructions
const readmePath = path.join(process.cwd(), 'README.md');
const readmeContent = `
# CyberNex

## Netlify Deployment

This project is configured for deployment on Netlify following their official Next.js deployment guide.

### Configuration

- **Build command**: \`npm run build\`
- **Publish directory**: \`.next\`
- **Plugin**: \`@netlify/plugin-nextjs\` (automatically detected via netlify.toml)

### Deployment Steps

1. Push your code to GitHub (or other Git provider)
2. Connect your repository to Netlify
3. Netlify will automatically detect the Next.js configuration
4. No custom settings needed - it works out of the box!

For more information, see [Netlify's Next.js Plugin Documentation](https://github.com/netlify/netlify-plugin-nextjs).
`;

fs.writeFileSync(readmePath, readmeContent.trim());
console.log('Created README with Netlify deployment instructions');

console.log('\nSetup complete! Your Next.js project is now configured for Netlify deployment.');
console.log('\nImportant points:');
console.log('1. @netlify/plugin-nextjs is in devDependencies as recommended by Netlify');
console.log('2. netlify.toml has the standard configuration Netlify expects');
console.log('3. No custom scripts or workarounds - uses Netlify\'s standard approach\n');
console.log('To deploy:');
console.log('1. Commit these changes to your repository');
console.log('2. Connect to Netlify - it should just work™'); 