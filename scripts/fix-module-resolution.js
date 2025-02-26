const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Starting to fix module resolution issues...');

// 1. Explicitly install the required packages
try {
  console.log('Installing required packages...');
  execSync('npm install next@14.0.4 stripe@13.9.0 lucide-react@0.292.0 @types/node@20.10.0 --save', { stdio: 'inherit' });
  console.log('Successfully installed required packages');
} catch (error) {
  console.error('Error installing required packages:', error);
}

// 2. Update the package.json to include specific versions
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (fs.existsSync(packageJsonPath)) {
  console.log('Updating package.json with specific package versions...');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  packageJson.dependencies = {
    ...packageJson.dependencies,
    "next": "14.0.4",
    "stripe": "^13.9.0",
    "lucide-react": "^0.292.0",
    "@types/node": "^20.10.0"
  };
  
  // Set resolutions for specific packages
  packageJson.resolutions = {
    ...packageJson.resolutions,
    "next": "14.0.4"
  };
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
  console.log('Updated package.json with specific package versions');
}

// 3. Update the next.config.js to improve module resolution
const nextConfigPath = path.join(process.cwd(), 'next.config.js');
const nextConfigContent = `
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false, // Disable SWC minification to reduce issues
  images: {
    domains: ['localhost', 'vxxpwaloyrtwvpmatzpc.supabase.co'],
    unoptimized: true
  },
  transpilePackages: ['lucide-react'], // Ensure lucide-react is transpiled
  webpack: (config, { isServer }) => {
    // Add aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
      '@/components': path.resolve(__dirname, 'components'),
      '@/contexts': path.resolve(__dirname, 'contexts'),
      '@/app': path.resolve(__dirname, 'app'),
      '@/lib': path.resolve(__dirname, 'lib'),
      '@/styles': path.resolve(__dirname, 'styles'),
      '@/public': path.resolve(__dirname, 'public')
    };
    
    // Add fallbacks for node modules
    config.resolve.fallback = { 
      ...config.resolve.fallback,
      fs: false, 
      path: false,
      crypto: false,
      stream: false,
      os: false,
      zlib: false,
      http: false,
      https: false,
      net: false,
      tls: false
    };
    
    // Force all modules to resolve in node_modules for consistent resolution
    config.resolve.modules = ['node_modules', ...config.resolve.modules];
    
    // Improve resolution of packages causing issues
    if (isServer) {
      config.externals = ['next', ...config.externals];
    }
    
    return config;
  },
  experimental: {
    // Ensure module resolution is using correct cache
    outputFileTracingRoot: path.join(__dirname, '../../'),
    esmExternals: false
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'].filter(ext => 
    !ext.includes('src/pages')
  )
}

module.exports = nextConfig
`;

fs.writeFileSync(nextConfigPath, nextConfigContent.trim(), 'utf8');
console.log('Updated next.config.js to improve module resolution');

// 4. Create a specialized .npmrc file to improve package resolution
const npmrcPath = path.join(process.cwd(), '.npmrc');
const npmrcContent = `
legacy-peer-deps=true
engine-strict=false
ignore-engines=true
strict-peer-dependencies=false
node-linker=hoisted
`;

fs.writeFileSync(npmrcPath, npmrcContent.trim(), 'utf8');
console.log('Created specialized .npmrc file');

// 5. Clear node_modules and package-lock.json for a clean install
try {
  console.log('Cleaning node_modules and package-lock.json...');
  const nodeModulesPath = path.join(process.cwd(), 'node_modules');
  const packageLockPath = path.join(process.cwd(), 'package-lock.json');
  
  if (fs.existsSync(nodeModulesPath)) {
    fs.rmSync(nodeModulesPath, { recursive: true, force: true });
  }
  
  if (fs.existsSync(packageLockPath)) {
    fs.unlinkSync(packageLockPath);
  }
  
  console.log('Successfully cleaned node_modules and package-lock.json');
} catch (error) {
  console.error('Error cleaning node_modules and package-lock.json:', error);
}

// 6. Create a tsconfig.json with module resolution settings
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
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"],
      "@/components/*": ["./components/*"],
      "@/contexts/*": ["./contexts/*"],
      "@/app/*": ["./app/*"],
      "@/lib/*": ["./lib/*"],
      "@/styles/*": ["./styles/*"],
      "@/public/*": ["./public/*"]
    },
    "baseUrl": "."
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules", "src"]
}
`;

fs.writeFileSync(tsconfigPath, tsconfigContent.trim(), 'utf8');
console.log('Created tsconfig.json with module resolution settings');

console.log('Finished fixing module resolution issues');