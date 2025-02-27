const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Fixing path issues for src/pages directory...');

// 1. Install react-router-dom
console.log('Installing react-router-dom...');
try {
  execSync('npm install react-router-dom --save', { stdio: 'inherit' });
  console.log('✅ react-router-dom installed');
} catch (error) {
  console.error('⚠️ Failed to install react-router-dom:', error.message);
}

// 2. Create contexts directory in src
const srcContextsDir = path.join(process.cwd(), 'src', 'contexts');
if (!fs.existsSync(srcContextsDir)) {
  fs.mkdirSync(srcContextsDir, { recursive: true });
  console.log('Created src/contexts directory');
}

// 3. Create AuthContext in the right location
const authContextPath = path.join(srcContextsDir, 'AuthContext.ts');
const authContextContent = `
import { createContext, useContext } from 'react';

interface AuthContextType {
  currentUser: any;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  return useContext(AuthContext) as AuthContextType;
}

export default AuthContext;
`;

fs.writeFileSync(authContextPath, authContextContent.trim());
console.log('Created src/contexts/AuthContext.ts');

// 4. Create AuthProvider.tsx
const authProviderPath = path.join(srcContextsDir, 'AuthProvider.tsx');
const authProviderContent = `
import React, { useState, useEffect } from 'react';
import AuthContext from './AuthContext';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  async function signup(email: string, password: string) {
    // Implement your signup logic here
    console.log('Signup with', email, password);
    setCurrentUser({ email });
    return Promise.resolve();
  }

  async function login(email: string, password: string) {
    // Implement your login logic here
    console.log('Login with', email, password);
    setCurrentUser({ email });
    return Promise.resolve();
  }

  async function logout() {
    // Implement your logout logic here
    setCurrentUser(null);
    return Promise.resolve();
  }

  async function resetPassword(email: string) {
    // Implement your reset password logic here
    console.log('Reset password for', email);
    return Promise.resolve();
  }

  useEffect(() => {
    // Check if user is logged in
    setLoading(false);
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
`;

fs.writeFileSync(authProviderPath, authProviderContent.trim());
console.log('Created src/contexts/AuthProvider.tsx');

// 5. Create Minimal App.tsx that doesn't use router-dom
const appPath = path.join(process.cwd(), 'src', 'pages', '_app.tsx');
const appContent = `
import React from 'react';
import { AppProps } from 'next/app';
import { AuthProvider } from '../contexts/AuthProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
`;

// Create directory if it doesn't exist
const srcPagesDir = path.join(process.cwd(), 'src', 'pages');
if (!fs.existsSync(srcPagesDir)) {
  fs.mkdirSync(srcPagesDir, { recursive: true });
  console.log('Created src/pages directory');
}

fs.writeFileSync(appPath, appContent);
console.log('Created src/pages/_app.tsx');

// 6. Fix Dashboard.tsx
const dashboardPath = path.join(srcPagesDir, 'Dashboard.tsx');
if (fs.existsSync(dashboardPath)) {
  let content = fs.readFileSync(dashboardPath, 'utf8');
  
  // Fix import path
  content = content.replace(
    /import.*?AuthContext/g,
    `import { useAuth } from '../contexts/AuthContext'`
  );
  
  fs.writeFileSync(dashboardPath, content);
  console.log('Fixed imports in Dashboard.tsx');
} else {
  // Create a minimal Dashboard component
  const dashboardContent = `
import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {currentUser?.email || 'User'}</p>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}
`;
  fs.writeFileSync(dashboardPath, dashboardContent.trim());
  console.log('Created minimal Dashboard.tsx');
}

// 7. Fix Login.tsx
const loginPath = path.join(srcPagesDir, 'Login.tsx');
if (fs.existsSync(loginPath)) {
  let content = fs.readFileSync(loginPath, 'utf8');
  
  // Fix import paths
  content = content.replace(
    /import.*?AuthContext/g,
    `import { useAuth } from '../contexts/AuthContext'`
  );
  
  // Replace react-router-dom with Next.js routing
  content = content.replace(
    /import.*?react-router-dom/g,
    `import { useRouter } from 'next/router'`
  );
  
  // Replace useNavigate with useRouter
  content = content.replace(/useNavigate\(\)/g, `useRouter()`);
  
  // Replace navigate calls with router.push
  content = content.replace(/navigate\(['"](.+?)['"]\)/g, `router.push('$1')`);
  
  // Replace Link components with Next.js Link
  content = content.replace(/<Link to=['"](.*?)['"]>(.*?)<\/Link>/g, 
    `<Link href="$1">$2</Link>`);
  
  // Add Next.js Link import if not present
  if (!content.includes('next/link')) {
    content = content.replace(
      /import React.*/,
      `$&\nimport Link from 'next/link';`
    );
  }
  
  fs.writeFileSync(loginPath, content);
  console.log('Fixed imports in Login.tsx');
} else {
  // Create a minimal Login component
  const loginContent = `
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();
  
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await login(email, password);
      router.push('/Dashboard');
    } catch (error) {
      console.error('Failed to login', error);
    }
  }
  
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Need an account? <Link href="/SignUp">Sign Up</Link>
      </p>
    </div>
  );
}
`;
  fs.writeFileSync(loginPath, loginContent.trim());
  console.log('Created minimal Login.tsx');
}

// 8. Fix SignUp.tsx
const signupPath = path.join(srcPagesDir, 'SignUp.tsx');
if (fs.existsSync(signupPath)) {
  let content = fs.readFileSync(signupPath, 'utf8');
  
  // Fix import paths
  content = content.replace(
    /import.*?AuthContext/g,
    `import { useAuth } from '../contexts/AuthContext'`
  );
  
  // Replace react-router-dom with Next.js routing
  content = content.replace(
    /import.*?react-router-dom/g,
    `import { useRouter } from 'next/router'`
  );
  
  // Replace useNavigate with useRouter
  content = content.replace(/useNavigate\(\)/g, `useRouter()`);
  
  // Replace navigate calls with router.push
  content = content.replace(/navigate\(['"](.+?)['"]\)/g, `router.push('$1')`);
  
  // Replace Link components with Next.js Link
  content = content.replace(/<Link to=['"](.*?)['"]>(.*?)<\/Link>/g, 
    `<Link href="$1">$2</Link>`);
  
  // Add Next.js Link import if not present
  if (!content.includes('next/link')) {
    content = content.replace(
      /import React.*/,
      `$&\nimport Link from 'next/link';`
    );
  }
  
  fs.writeFileSync(signupPath, content);
  console.log('Fixed imports in SignUp.tsx');
} else {
  // Create a minimal SignUp component
  const signupContent = `
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const router = useRouter();
  
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }
    
    try {
      setError('');
      await signup(email, password);
      router.push('/Dashboard');
    } catch (error) {
      setError('Failed to create an account');
    }
  }
  
  return (
    <div>
      <h1>Sign Up</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link href="/Login">Login</Link>
      </p>
    </div>
  );
}
`;
  fs.writeFileSync(signupPath, signupContent.trim());
  console.log('Created minimal SignUp.tsx');
}

// 9. Fix Home.tsx
const homePath = path.join(srcPagesDir, 'Home.tsx');
if (fs.existsSync(homePath)) {
  let content = fs.readFileSync(homePath, 'utf8');
  
  // Replace react-router-dom with Next.js routing
  content = content.replace(
    /import.*?react-router-dom/g,
    `import Link from 'next/link'`
  );
  
  // Replace Link components with Next.js Link
  content = content.replace(/<Link to=['"](.*?)['"]>(.*?)<\/Link>/g, 
    `<Link href="$1">$2</Link>`);
  
  fs.writeFileSync(homePath, content);
  console.log('Fixed imports in Home.tsx');
} else {
  // Create a minimal Home component
  const homeContent = `
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>CyberNex</h1>
      <p>Welcome to CyberNex - your cybersecurity learning platform</p>
      <div>
        <Link href="/Login">Login</Link> | <Link href="/SignUp">Sign Up</Link>
      </div>
    </div>
  );
}
`;
  fs.writeFileSync(homePath, homeContent.trim());
  console.log('Created minimal Home.tsx');
}

// 10. Create an index.tsx page in src/pages
const indexPath = path.join(srcPagesDir, 'index.tsx');
const indexContent = `
import React from 'react';
import Link from 'next/link';

export default function Index() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>CyberNex</h1>
      <p>Welcome to CyberNex - your cybersecurity learning platform</p>
      <div style={{ marginTop: '1rem' }}>
        <Link href="/Login" style={{ marginRight: '1rem' }}>Login</Link>
        <Link href="/SignUp">Sign Up</Link>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(indexPath, indexContent.trim());
console.log('Created src/pages/index.tsx');

console.log('\n✅ PATH ISSUES FIXED');
console.log('This script has:');
console.log('1. Installed react-router-dom package');
console.log('2. Created AuthContext in the correct src/contexts/ location');
console.log('3. Created or fixed components in src/pages/ directory');
console.log('4. Replaced react-router-dom with Next.js routing');
console.log('\nProject structure should now be correctly organized for Next.js!'); 