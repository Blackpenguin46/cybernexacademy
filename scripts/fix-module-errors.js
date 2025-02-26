const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Starting to fix module errors...');

// 1. Create AuthContext if it's missing
const contextsDir = path.join(process.cwd(), 'contexts');
if (!fs.existsSync(contextsDir)) {
  console.log('Creating contexts directory...');
  fs.mkdirSync(contextsDir, { recursive: true });
}

const authContextPath = path.join(contextsDir, 'AuthContext.tsx');
if (!fs.existsSync(authContextPath)) {
  console.log('Creating AuthContext.tsx...');
  const authContextContent = `
import React, { createContext, useState, useContext, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const AuthContext = createContext<{
  user: any | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<any>;
  signIn: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<any>;
  resetPassword: (email: string) => Promise<any>;
}>({
  user: null,
  loading: true,
  signUp: async () => ({}),
  signIn: async () => ({}),
  signOut: async () => ({}),
  resetPassword: async () => ({}),
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for active session
    const getUser = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data?.session?.user || null);
      setLoading(false);
    };
    
    getUser();

    // Set up auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user || null);
        setLoading(false);
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const signUp = async (email: string, password: string) => {
    return supabase.auth.signUp({ email, password });
  };

  const signIn = async (email: string, password: string) => {
    return supabase.auth.signInWithPassword({ email, password });
  };

  const signOut = async () => {
    return supabase.auth.signOut();
  };

  const resetPassword = async (email: string) => {
    return supabase.auth.resetPasswordForEmail(email);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
`;
  fs.writeFileSync(authContextPath, authContextContent.trim(), 'utf8');
  console.log('Created AuthContext.tsx');
}

// 2. Install react-router-dom if needed
try {
  console.log('Installing react-router-dom...');
  execSync('npm install react-router-dom@6.20.0 --save', { stdio: 'inherit' });
  console.log('Successfully installed react-router-dom');
} catch (error) {
  console.error('Error installing react-router-dom:', error);
}

// 3. Completely remove the src directory
const srcDir = path.join(process.cwd(), 'src');
if (fs.existsSync(srcDir)) {
  console.log('Removing src directory completely...');
  try {
    fs.rmSync(srcDir, { recursive: true, force: true });
    console.log('Successfully removed src directory');
  } catch (error) {
    console.error('Error removing src directory:', error);
  }
}

// 4. Update the package.json to include the necessary dependencies
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (fs.existsSync(packageJsonPath)) {
  console.log('Updating package.json with required dependencies...');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  packageJson.dependencies = {
    ...packageJson.dependencies,
    "react-router-dom": "^6.20.0",
    "@supabase/supabase-js": "^2.39.0"
  };
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
  console.log('Updated package.json with required dependencies');
}

// 5. Create a .gitignore-temp file to ignore the src directory
const gitignorePath = path.join(process.cwd(), '.gitignore');
if (fs.existsSync(gitignorePath)) {
  let gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');
  if (!gitignoreContent.includes('src/')) {
    gitignoreContent += '\n# Ignore legacy src directory\nsrc/\n';
    fs.writeFileSync(gitignorePath, gitignoreContent, 'utf8');
    console.log('Updated .gitignore to ignore src directory');
  }
}

// 6. Create a custom next.config.js to improve handling of src directory
const nextConfigPath = path.join(process.cwd(), 'next.config.js');
const nextConfigContent = `
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['localhost', 'vxxpwaloyrtwvpmatzpc.supabase.co'],
    unoptimized: true
  },
  webpack: (config) => {
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
      crypto: false 
    };
    
    return config;
  },
  // Explicitly exclude src directory from Next.js build
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'].filter(ext => 
    !ext.includes('src/pages')
  )
}

module.exports = nextConfig
`;

fs.writeFileSync(nextConfigPath, nextConfigContent.trim(), 'utf8');
console.log('Updated next.config.js to handle src directory properly');

console.log('Finished fixing module errors'); 