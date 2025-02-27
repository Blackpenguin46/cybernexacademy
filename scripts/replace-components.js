const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Completely replacing problematic components...');

// 1. First, install react-router-dom
console.log('Installing react-router-dom...');
execSync('npm install react-router-dom --save', { stdio: 'inherit' });

// 2. Identify the src directory structure
const srcDir = path.join(process.cwd(), 'src');
if (!fs.existsSync(srcDir)) {
  fs.mkdirSync(srcDir, { recursive: true });
}

const srcPagesDir = path.join(srcDir, 'pages');
if (!fs.existsSync(srcPagesDir)) {
  fs.mkdirSync(srcPagesDir, { recursive: true });
}

const srcContextsDir = path.join(srcDir, 'contexts');
if (!fs.existsSync(srcContextsDir)) {
  fs.mkdirSync(srcContextsDir, { recursive: true });
}

// 3. Delete problematic files first
const filesToDelete = [
  path.join(srcPagesDir, 'Dashboard.tsx'),
  path.join(srcPagesDir, 'Home.tsx'),
  path.join(srcPagesDir, 'Login.tsx'),
  path.join(srcPagesDir, 'SignUp.tsx'),
  path.join(srcContextsDir, 'AuthContext.ts'),
  path.join(srcContextsDir, 'AuthContext.tsx')
];

filesToDelete.forEach(file => {
  if (fs.existsSync(file)) {
    try {
      fs.unlinkSync(file);
      console.log(`Deleted: ${file}`);
    } catch (error) {
      console.error(`Error deleting ${file}: ${error.message}`);
    }
  }
});

// 4. Create AuthContext.tsx in src/contexts
const authContextContent = `
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  email: string;
}

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  return useContext(AuthContext) as AuthContextType;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  async function signup(email: string, password: string) {
    // Mock signup functionality
    setCurrentUser({ email });
  }

  async function login(email: string, password: string) {
    // Mock login functionality
    setCurrentUser({ email });
  }

  async function logout() {
    // Mock logout functionality
    setCurrentUser(null);
  }

  const value = {
    currentUser,
    login,
    signup,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
`;

fs.writeFileSync(path.join(srcContextsDir, 'AuthContext.tsx'), authContextContent.trim());
console.log('Created AuthContext.tsx');

// 5. Create index.tsx in src/pages
const indexContent = `
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
      <h1>CyberNex</h1>
      <p>Welcome to your cybersecurity learning platform</p>
      <div style={{ marginTop: '1rem' }}>
        <Link href="/login">
          <a style={{ marginRight: '1rem', padding: '0.5rem 1rem', background: '#0070f3', color: 'white', borderRadius: '0.25rem', textDecoration: 'none' }}>
            Login
          </a>
        </Link>
        <Link href="/signup">
          <a style={{ padding: '0.5rem 1rem', background: '#0070f3', color: 'white', borderRadius: '0.25rem', textDecoration: 'none' }}>
            Sign Up
          </a>
        </Link>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(path.join(srcPagesDir, 'index.tsx'), indexContent.trim());
console.log('Created index.tsx');

// 6. Create _app.tsx in src/pages
const appContent = `
import React from 'react';
import { AppProps } from 'next/app';
import { AuthProvider } from '../contexts/AuthContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
`;

fs.writeFileSync(path.join(srcPagesDir, '_app.tsx'), appContent.trim());
console.log('Created _app.tsx');

// 7. Create Dashboard.tsx in src/pages
const dashboardContent = `
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const router = useRouter();

  async function handleLogout() {
    try {
      await logout();
      router.push('/');
    } catch {
      alert('Failed to log out');
    }
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Dashboard</h1>
      <p>Email: {currentUser?.email}</p>
      <button 
        onClick={handleLogout}
        style={{ padding: '0.5rem 1rem', background: '#ff4545', color: 'white', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}
      >
        Log Out
      </button>
    </div>
  );
}
`;

fs.writeFileSync(path.join(srcPagesDir, 'Dashboard.tsx'), dashboardContent.trim());
console.log('Created Dashboard.tsx');

// 8. Create Login.tsx in src/pages
const loginContent = `
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(email, password);
      router.push('/Dashboard');
    } catch {
      setError('Failed to log in');
    }

    setLoading(false);
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <h2>Log In</h2>
      {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Password</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <button 
          disabled={loading} 
          type="submit"
          style={{ padding: '0.5rem 1rem', background: '#0070f3', color: 'white', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}
        >
          Log In
        </button>
      </form>
      <div style={{ marginTop: '1rem' }}>
        <Link href="/forgot-password">
          <a>Forgot Password?</a>
        </Link>
      </div>
      <div style={{ marginTop: '1rem' }}>
        Need an account? <Link href="/signup"><a>Sign Up</a></Link>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(path.join(srcPagesDir, 'Login.tsx'), loginContent.trim());
console.log('Created Login.tsx');

// 9. Create SignUp.tsx in src/pages
const signupContent = `
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password);
      router.push('/Dashboard');
    } catch {
      setError('Failed to create an account');
    }

    setLoading(false);
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <h2>Sign Up</h2>
      {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Password</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Password Confirmation</label>
          <input 
            type="password" 
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required 
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <button 
          disabled={loading} 
          type="submit"
          style={{ padding: '0.5rem 1rem', background: '#0070f3', color: 'white', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}
        >
          Sign Up
        </button>
      </form>
      <div style={{ marginTop: '1rem' }}>
        Already have an account? <Link href="/login"><a>Log In</a></Link>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(path.join(srcPagesDir, 'SignUp.tsx'), signupContent.trim());
console.log('Created SignUp.tsx');

// 10. Create Home.tsx in src/pages
const homeContent = `
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
      <h1>CyberNex</h1>
      <p>Welcome to your cybersecurity learning platform</p>
      <div style={{ marginTop: '1rem' }}>
        <Link href="/login">
          <a style={{ marginRight: '1rem', padding: '0.5rem 1rem', background: '#0070f3', color: 'white', borderRadius: '0.25rem', textDecoration: 'none' }}>
            Login
          </a>
        </Link>
        <Link href="/signup">
          <a style={{ padding: '0.5rem 1rem', background: '#0070f3', color: 'white', borderRadius: '0.25rem', textDecoration: 'none' }}>
            Sign Up
          </a>
        </Link>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(path.join(srcPagesDir, 'Home.tsx'), homeContent.trim());
console.log('Created Home.tsx');

// 11. Create a minimal next.config.js file
const nextConfigContent = `
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
`;

fs.writeFileSync(path.join(process.cwd(), 'next.config.js'), nextConfigContent.trim());
console.log('Created next.config.js');

// 12. Check for a React version compatible with the Next.js Link component's API
const packageJsonPath = path.join(process.cwd(), 'package.json');
let packageJson;

try {
  packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  // Update to use Next.js 12 for compatibility with the Link API we're using
  packageJson.dependencies = {
    ...packageJson.dependencies,
    "next": "12.3.4",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-router-dom": "^6.15.0"
  };
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('Updated package.json to use Next.js 12 and React 18');
  
  // Install dependencies
  console.log('Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
} catch (error) {
  console.error(`Error updating package.json: ${error.message}`);
}

console.log('\n✅ ALL COMPONENTS REPLACED');
console.log('\nThis script has:');
console.log('1. Completely replaced all problematic files');
console.log('2. Created new versions of components with correct imports');
console.log('3. Used Next.js routing instead of react-router-dom');
console.log('4. Updated package.json for compatibility'); 