const fs = require('fs');
const path = require('path');

console.log('Starting to fix jsconfig paths issues...');

// 1. Update jsconfig.json to use more specific paths
const jsconfigPath = path.join(process.cwd(), 'jsconfig.json');
if (fs.existsSync(jsconfigPath)) {
  console.log('Updating jsconfig.json...');
  const jsconfigContent = {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/*": ["./*"],
        "@/components/*": ["./components/*"],
        "@/app/*": ["./app/*"],
        "@/lib/*": ["./lib/*"],
        "@/contexts/*": ["./contexts/*"],
        "@/styles/*": ["./styles/*"],
        "@/public/*": ["./public/*"]
      },
      "jsx": "react-jsx",
      "jsxImportSource": "react"
    },
    "include": ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    "exclude": ["node_modules", ".next", "out"]
  };
  
  fs.writeFileSync(jsconfigPath, JSON.stringify(jsconfigContent, null, 2), 'utf8');
  console.log('Updated jsconfig.json');
}

// 2. Create a tsconfig.json file that extends jsconfig.json
const tsconfigPath = path.join(process.cwd(), 'tsconfig.json');
if (fs.existsSync(tsconfigPath)) {
  console.log('Updating tsconfig.json...');
  const tsconfigContent = {
    "extends": "./jsconfig.json",
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
      "plugins": [
        {
          "name": "next"
        }
      ]
    },
    "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
    "exclude": ["node_modules"]
  };
  
  fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfigContent, null, 2), 'utf8');
  console.log('Updated tsconfig.json');
}

// 3. Update next.config.js to completely disable the jsconfig-paths-plugin
const nextConfigPath = path.join(process.cwd(), 'next.config.js');
if (fs.existsSync(nextConfigPath)) {
  console.log('Updating next.config.js...');
  const nextConfigContent = `
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'vxxpwaloyrtwvpmatzpc.supabase.co'],
    unoptimized: true
  },
  experimental: {},
  webpack: (config) => {
    // Completely disable the jsconfig-paths-plugin
    if (config.resolve.plugins) {
      config.resolve.plugins = config.resolve.plugins.filter(
        plugin => !plugin.constructor || plugin.constructor.name !== 'JsConfigPathsPlugin'
      );
    }
    
    // Manually add path aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
      '@/components': path.resolve(__dirname, 'components'),
      '@/app': path.resolve(__dirname, 'app'),
      '@/lib': path.resolve(__dirname, 'lib'),
      '@/contexts': path.resolve(__dirname, 'contexts'),
      '@/styles': path.resolve(__dirname, 'styles'),
      '@/public': path.resolve(__dirname, 'public')
    };
    
    // Add fallbacks for node modules
    config.resolve.fallback = { 
      ...config.resolve.fallback,
      fs: false, 
      path: false 
    };
    
    return config;
  }
}

module.exports = nextConfig
`;
  
  fs.writeFileSync(nextConfigPath, nextConfigContent.trim(), 'utf8');
  console.log('Updated next.config.js');
}

// 4. Create a simple script to check for absolute paths in import statements
console.log('Checking for absolute paths in import statements...');
const { execSync } = require('child_process');

try {
  // Find all JS/TS files
  const files = execSync('find . -type f -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" | grep -v "node_modules" | grep -v ".next"', { encoding: 'utf8' }).split('\n').filter(Boolean);
  
  let absolutePathsFound = false;
  
  for (const file of files) {
    // Check for absolute paths in import statements
    const content = fs.readFileSync(file, 'utf8');
    const absoluteImportRegex = /import\s+.*from\s+['"]\/[^'"]+['"]/g;
    const matches = content.match(absoluteImportRegex);
    
    if (matches) {
      absolutePathsFound = true;
      console.log(`Found absolute paths in ${file}:`);
      matches.forEach(match => console.log(`  ${match}`));
      
      // Fix absolute paths by converting them to relative paths
      let updatedContent = content;
      matches.forEach(match => {
        const importPath = match.match(/['"]\/([^'"]+)['"]/)[1];
        const relativePath = path.relative(path.dirname(file), path.join(process.cwd(), importPath));
        const fixedImport = match.replace(/['"]\/[^'"]+['"]/, `'${relativePath.startsWith('.') ? relativePath : './' + relativePath}'`);
        updatedContent = updatedContent.replace(match, fixedImport);
      });
      
      fs.writeFileSync(file, updatedContent, 'utf8');
      console.log(`Fixed absolute paths in ${file}`);
    }
  }
  
  if (!absolutePathsFound) {
    console.log('No absolute paths found in import statements');
  }
} catch (error) {
  console.error('Error checking for absolute paths:', error);
}

// 5. Create a simple script to check for favicon.ico references
console.log('Checking for favicon.ico references...');

try {
  // Find all HTML/JS/TS files that might reference favicon.ico
  const files = execSync('find . -type f -name "*.html" -o -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" | grep -v "node_modules" | grep -v ".next"', { encoding: 'utf8' }).split('\n').filter(Boolean);
  
  let faviconReferencesFound = false;
  
  for (const file of files) {
    // Check for favicon.ico references
    const content = fs.readFileSync(file, 'utf8');
    const faviconRegex = /['"]\/app\/favicon\.ico['"]/g;
    const matches = content.match(faviconRegex);
    
    if (matches) {
      faviconReferencesFound = true;
      console.log(`Found favicon.ico references in ${file}:`);
      matches.forEach(match => console.log(`  ${match}`));
      
      // Fix favicon.ico references
      let updatedContent = content.replace(faviconRegex, '"/favicon.ico"');
      fs.writeFileSync(file, updatedContent, 'utf8');
      console.log(`Fixed favicon.ico references in ${file}`);
    }
  }
  
  if (!faviconReferencesFound) {
    console.log('No problematic favicon.ico references found');
  }
  
  // Ensure favicon.ico exists in the public directory
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  const faviconDestPath = path.join(publicDir, 'favicon.ico');
  const faviconSrcPath = path.join(process.cwd(), 'app', 'favicon.ico');
  
  if (fs.existsSync(faviconSrcPath) && !fs.existsSync(faviconDestPath)) {
    fs.copyFileSync(faviconSrcPath, faviconDestPath);
    console.log('Copied favicon.ico to public directory');
  }
} catch (error) {
  console.error('Error checking for favicon.ico references:', error);
}

console.log('Finished fixing jsconfig paths issues'); 