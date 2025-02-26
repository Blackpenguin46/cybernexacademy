const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Starting to fix jsconfig paths plugin issue...');

// 1. Create a simplified jsconfig.json file
const jsconfigPath = path.join(process.cwd(), 'jsconfig.json');
const jsconfigContent = `
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "exclude": ["node_modules", ".next", "out"]
}
`;

fs.writeFileSync(jsconfigPath, jsconfigContent.trim(), 'utf8');
console.log('Created simplified jsconfig.json file');

// 2. Create a matching tsconfig.json file
const tsconfigPath = path.join(process.cwd(), 'tsconfig.json');
const tsconfigContent = `
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules", ".next", "out", "src"]
}
`;

fs.writeFileSync(tsconfigPath, tsconfigContent.trim(), 'utf8');
console.log('Created matching tsconfig.json file');

// 3. Update next.config.js to use a simpler configuration
const nextConfigPath = path.join(process.cwd(), 'next.config.js');
const nextConfigContent = `
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['localhost', 'vxxpwaloyrtwvpmatzpc.supabase.co'],
    unoptimized: true
  },
  // Use a very simple webpack config to avoid issues
  webpack: (config) => {
    return config;
  }
}

module.exports = nextConfig
`;

fs.writeFileSync(nextConfigPath, nextConfigContent.trim(), 'utf8');
console.log('Updated next.config.js with simpler configuration');

// 4. Update the package.json to remove any path-related plugins
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (fs.existsSync(packageJsonPath)) {
  console.log('Updating package.json to remove path-related plugins...');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  // Remove any path-related devDependencies
  if (packageJson.devDependencies) {
    ['tsconfig-paths', 'tsconfig-paths-webpack-plugin'].forEach(pkg => {
      if (packageJson.devDependencies[pkg]) {
        delete packageJson.devDependencies[pkg];
      }
    });
  }
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
  console.log('Updated package.json to remove path-related plugins');
}

// 5. Create a next-env.d.ts file if it doesn't exist
const nextEnvPath = path.join(process.cwd(), 'next-env.d.ts');
if (!fs.existsSync(nextEnvPath)) {
  const nextEnvContent = `
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
`;
  fs.writeFileSync(nextEnvPath, nextEnvContent.trim(), 'utf8');
  console.log('Created next-env.d.ts file');
}

// 6. Check and fix absolute import paths in all JS/TS files
console.log('Checking for absolute import paths in files...');
try {
  // Find all JS/TS files
  const files = execSync('find . -type f -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" | grep -v "node_modules" | grep -v ".next" | grep -v "src"', { encoding: 'utf8' }).split('\n').filter(Boolean);
  
  let fixedFilesCount = 0;
  
  for (const file of files) {
    // Check for absolute paths in import statements
    const content = fs.readFileSync(file, 'utf8');
    
    // Match imports that start with / or @ (but not @/)
    const absoluteImportRegex = /import\s+.*from\s+['"](\/?(?!@\/)[@a-zA-Z0-9\-_\/]+)['"]/g;
    const matches = content.match(absoluteImportRegex);
    
    if (matches) {
      let updatedContent = content;
      
      matches.forEach(match => {
        const importPath = match.match(/['"](.*)['"]/)[1];
        
        // If the path starts with /, make it relative
        if (importPath.startsWith('/')) {
          const relativePath = './' + importPath.substring(1);
          const fixedImport = match.replace(`"${importPath}"`, `"${relativePath}"`).replace(`'${importPath}'`, `'${relativePath}'`);
          updatedContent = updatedContent.replace(match, fixedImport);
        }
        // If the path starts with @/ but we're keeping that format, leave it alone
        // Otherwise, if it's a bare module (e.g., 'react'), leave it alone
      });
      
      if (updatedContent !== content) {
        fs.writeFileSync(file, updatedContent, 'utf8');
        fixedFilesCount++;
      }
    }
  }
  
  console.log(`Fixed absolute paths in ${fixedFilesCount} files`);
} catch (error) {
  console.error('Error fixing absolute paths:', error);
}

// 7. Create basic empty app structure with _app.tsx
const appDir = path.join(process.cwd(), 'app');
if (!fs.existsSync(appDir)) {
  fs.mkdirSync(appDir, { recursive: true });
  
  // Create a basic page.tsx
  const pageContent = `
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Welcome to CyberNex</h1>
      <p className="mt-4 text-xl">Your cybersecurity partner</p>
    </div>
  )
}
`;
  fs.writeFileSync(path.join(appDir, 'page.tsx'), pageContent.trim(), 'utf8');
  
  // Create a basic layout.tsx
  const layoutContent = `
export const metadata = {
  title: 'CyberNex',
  description: 'Advanced Cybersecurity Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
`;
  fs.writeFileSync(path.join(appDir, 'layout.tsx'), layoutContent.trim(), 'utf8');
  
  console.log('Created basic app structure');
}

console.log('Finished fixing jsconfig paths plugin issue'); 