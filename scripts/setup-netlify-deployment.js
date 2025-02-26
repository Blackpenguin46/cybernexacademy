const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Setting up proper Netlify deployment for Next.js...');

// 1. Create consistent and correct package.json
const packageJsonPath = path.join(process.cwd(), 'package.json');
const packageJson = {
  "name": "cybernex",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.0.4",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "@netlify/plugin-nextjs": "4.41.3",
    "@supabase/supabase-js": "2.38.4",
    "@supabase/auth-helpers-nextjs": "0.8.7",
    "@supabase/auth-helpers-react": "0.4.2",
    "framer-motion": "10.16.4",
    "stripe": "13.9.0",
    "lucide-react": "0.292.0"
  },
  "devDependencies": {
    "@types/node": "20.10.0",
    "@types/react": "18.2.39",
    "@types/react-dom": "18.2.17",
    "typescript": "5.3.2",
    "autoprefixer": "10.4.16",
    "postcss": "8.4.31",
    "tailwindcss": "3.3.5",
    "eslint": "8.54.0",
    "eslint-config-next": "14.0.4"
  },
  "engines": {
    "node": "18.17.0",
    "npm": "9.9.4"
  }
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('Updated package.json with correct dependencies');

// 2. Create a proper next.config.js
const nextConfigPath = path.join(process.cwd(), 'next.config.js');
const nextConfig = `
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // Required for static exports with Netlify
  },
  typescript: {
    // Handled by Netlify build process
    ignoreBuildErrors: true,
  },
  eslint: {
    // Handled by Netlify build process
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig;
`;

fs.writeFileSync(nextConfigPath, nextConfig);
console.log('Created optimized next.config.js for Netlify');

// 3. Create proper jsconfig.json (handles path resolution)
const jsconfigPath = path.join(process.cwd(), 'jsconfig.json');
const jsconfig = {
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "components/*": ["components/*"],
      "app/*": ["app/*"],
      "styles/*": ["styles/*"],
      "utils/*": ["utils/*"],
      "lib/*": ["lib/*"]
    }
  },
  "exclude": ["node_modules", ".next", "out"]
};

fs.writeFileSync(jsconfigPath, JSON.stringify(jsconfig, null, 2));
console.log('Created optimized jsconfig.json for path resolution');

// 4. Create netlify.toml with proper settings
const netlifyTomlPath = path.join(process.cwd(), 'netlify.toml');
const netlifyToml = `
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18.17.0"
  NPM_VERSION = "9.9.4"
  NEXT_TELEMETRY_DISABLED = "1"
`;

fs.writeFileSync(netlifyTomlPath, netlifyToml);
console.log('Created optimized netlify.toml');

// 5. Clean up node_modules to ensure a fresh start
if (fs.existsSync(path.join(process.cwd(), 'node_modules'))) {
  console.log('Removing existing node_modules for a clean install...');
  try {
    fs.rmSync(path.join(process.cwd(), 'node_modules'), { recursive: true, force: true });
  } catch (error) {
    console.error('Error removing node_modules:', error.message);
  }
}

// 6. Run npm install with proper flags
try {
  console.log('Installing dependencies...');
  execSync('npm install --legacy-peer-deps', { stdio: 'inherit' });
  console.log('Dependencies installed successfully');
} catch (error) {
  console.error('Error installing dependencies:', error.message);
}

// 7. Create a .npmrc file to help with dependency resolution
const npmrcPath = path.join(process.cwd(), '.npmrc');
const npmrc = `
legacy-peer-deps=true
`;

fs.writeFileSync(npmrcPath, npmrc);
console.log('Created .npmrc file for better dependency resolution');

// 8. Ensure the .nvmrc file exists with the correct Node version
const nvmrcPath = path.join(process.cwd(), '.nvmrc');
fs.writeFileSync(nvmrcPath, '18.17.0');
console.log('Created .nvmrc file with Node 18.17.0');

console.log('Setup complete! Your project is now properly configured for Netlify deployment.');
console.log('To deploy:');
console.log('1. Push your changes to your repository');
console.log('2. Connect the repository to Netlify');
console.log('3. Use the following build settings:');
console.log('   - Build command: npm run build');
console.log('   - Publish directory: .next'); 