const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const glob = require('glob');

console.log('Starting to fix absolute paths...');

// Ensure glob is installed
try {
  require.resolve('glob');
} catch (error) {
  console.log('Installing glob package...');
  execSync('npm install glob@10.3.10 --save-dev', { stdio: 'inherit' });
  console.log('Successfully installed glob');
}

// 1. First, ensure jsconfig.json is set up correctly with minimal path mappings
const jsconfigPath = path.join(process.cwd(), 'jsconfig.json');
const jsconfigContent = `
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "exclude": ["node_modules", ".next", "out", "src"]
}
`;

fs.writeFileSync(jsconfigPath, jsconfigContent.trim(), 'utf8');
console.log('Created simplified jsconfig.json with minimal path mappings');

// 2. Create a matching tsconfig.json for TypeScript files
const tsconfigPath = path.join(process.cwd(), 'tsconfig.json');
const tsconfigContent = `
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
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
console.log('Created matching tsconfig.json with consistent path mappings');

// 3. Update next.config.js to handle path aliases properly
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
  // Simple webpack config without extra complexity
  webpack: (config) => {
    return config;
  },
  // Explicitly tell Next.js to use Node's module resolution
  experimental: {
    esmExternals: 'loose'
  }
}

module.exports = nextConfig
`;

fs.writeFileSync(nextConfigPath, nextConfigContent.trim(), 'utf8');
console.log('Updated next.config.js with simple path handling');

// 4. Find all JS/TS files and convert absolute paths to relative
function findAllJstsFiles() {
  try {
    // Use glob to find all .js, .jsx, .ts, .tsx files excluding node_modules and .next
    return glob.sync('**/*.+(js|jsx|ts|tsx)', {
      ignore: ['**/node_modules/**', '**/.next/**', '**/out/**', 'scripts/**'],
      cwd: process.cwd()
    });
  } catch (error) {
    console.error('Error finding JS/TS files:', error);
    return [];
  }
}

console.log('Finding all JavaScript and TypeScript files...');
const files = findAllJstsFiles();
console.log(`Found ${files.length} JS/TS files to check for absolute paths`);

let fixedFilesCount = 0;

// Process each file to convert absolute imports to correct format
files.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // 1. Fix absolute paths that start with a slash
    const absolutePathRegex = /from\s+['"](\/((?!node_modules)[^'"]*))['"];?/g;
    let match;
    
    while ((match = absolutePathRegex.exec(content)) !== null) {
      const absolutePath = match[1];
      const relativePath = path.relative(
        path.dirname(filePath),
        path.join(process.cwd(), absolutePath.substring(1))
      ).replace(/\\/g, '/'); // Convert Windows backslashes to forward slashes
      
      const newPath = relativePath.startsWith('.') ? relativePath : `./${relativePath}`;
      const newImport = `from "${newPath}";`;
      
      content = content.replace(match[0], newImport);
      modified = true;
      console.log(`Fixed absolute path in ${file}: ${absolutePath} -> ${newPath}`);
    }
    
    // 2. Convert any path that doesn't start with . or @ to use @/ alias
    const bareModuleRegex = /from\s+['"]((?!\.|\@\/|react|next|node:)[a-zA-Z0-9\-_\/]+)['"]/g;
    
    while ((match = bareModuleRegex.exec(content)) !== null) {
      const modulePath = match[1];
      
      // Skip if it's a known npm package like 'react', 'next', etc.
      if (/^(react|next|react-dom|framer-motion|stripe)($|\/)/.test(modulePath)) {
        continue;
      }
      
      const newPath = `@/${modulePath}`;
      const newImport = `from "${newPath}"`;
      
      content = content.replace(match[0], newImport);
      modified = true;
      console.log(`Converted bare module in ${file}: ${modulePath} -> ${newPath}`);
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      fixedFilesCount++;
    }
  } catch (error) {
    console.error(`Error processing file ${file}:`, error);
  }
});

console.log(`Fixed paths in ${fixedFilesCount} files`);

// 5. Create a simple app/page.tsx if not exists to ensure we have at least one working page
const appPagePath = path.join(process.cwd(), 'app', 'page.tsx');
if (!fs.existsSync(path.dirname(appPagePath))) {
  fs.mkdirSync(path.dirname(appPagePath), { recursive: true });
}

if (!fs.existsSync(appPagePath)) {
  const simplePageContent = `
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">CyberNex</h1>
      <p className="mt-4 text-lg">Your cybersecurity learning platform</p>
    </div>
  )
}
`;
  fs.writeFileSync(appPagePath, simplePageContent.trim(), 'utf8');
  console.log('Created simple app/page.tsx for fallback');
}

// 6. Create a simple app/layout.tsx if not exists
const appLayoutPath = path.join(process.cwd(), 'app', 'layout.tsx');
if (!fs.existsSync(appLayoutPath)) {
  const simpleLayoutContent = `
export const metadata = {
  title: 'CyberNex',
  description: 'Advanced Cybersecurity Learning Platform',
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
  fs.writeFileSync(appLayoutPath, simpleLayoutContent.trim(), 'utf8');
  console.log('Created simple app/layout.tsx for App Router');
}

console.log('Finished fixing absolute paths'); 