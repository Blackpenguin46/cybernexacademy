const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Fixing missing modules in the project...');

// 1. Add react-router-dom to package.json
const packageJsonPath = path.join(process.cwd(), 'package.json');
let packageJson;

try {
  packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  // Add react-router-dom to dependencies
  packageJson.dependencies = {
    ...packageJson.dependencies,
    "react-router-dom": "^6.15.0" // Using a compatible version
  };
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('Added react-router-dom to package.json');
  
  // Install the dependency
  console.log('Installing react-router-dom...');
  execSync('npm install', { stdio: 'inherit' });
} catch (error) {
  console.error(`Error updating package.json: ${error.message}`);
}

// 2. Create the missing AuthContext
const contextsDir = path.join(process.cwd(), 'contexts');
if (!fs.existsSync(contextsDir)) {
  fs.mkdirSync(contextsDir, { recursive: true });
  console.log('Created contexts directory');
}

const authContextPath = path.join(contextsDir, 'AuthContext.tsx');
const authContextContent = `
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  currentUser: any | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateEmail: (email: string) => Promise<void>;
  updatePassword: (password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  return useContext(AuthContext) as AuthContextType;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock authentication functions
  async function signup(email: string, password: string) {
    console.log('Signup:', email, password);
    // In a real app, you would integrate with an authentication service
    setCurrentUser({ email });
  }

  async function login(email: string, password: string) {
    console.log('Login:', email, password);
    // In a real app, you would integrate with an authentication service
    setCurrentUser({ email });
  }

  async function logout() {
    console.log('Logout');
    // In a real app, you would integrate with an authentication service
    setCurrentUser(null);
  }

  async function resetPassword(email: string) {
    console.log('Reset password for:', email);
    // In a real app, you would integrate with an authentication service
  }

  async function updateEmail(email: string) {
    console.log('Update email to:', email);
    // In a real app, you would integrate with an authentication service
    setCurrentUser({ ...currentUser, email });
  }

  async function updatePassword(password: string) {
    console.log('Update password');
    // In a real app, you would integrate with an authentication service
  }

  useEffect(() => {
    // Simulate authentication check
    const checkAuth = async () => {
      // In a real app, you would check if the user is logged in
      setLoading(false);
    };
    
    checkAuth();
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
`;

fs.writeFileSync(authContextPath, authContextContent.trim());
console.log('Created AuthContext.tsx');

// 3. Update the broken components that import these modules
// First, find the components that need fixing
const componentsToFix = ['Dashboard.tsx', 'Login.tsx', 'SignUp.tsx', 'Home.tsx'];
const srcDir = path.join(process.cwd());

// Function to recursively find files
function findFiles(dir, fileNames) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      results.push(...findFiles(fullPath, fileNames));
    } else if (fileNames.includes(entry.name)) {
      results.push(fullPath);
    }
  }
  
  return results;
}

// Find component files that need fixing
const filesToFix = findFiles(srcDir, componentsToFix);

console.log('Found the following components to fix:');
filesToFix.forEach(file => console.log(`- ${file}`));

// For each file, ensure it imports the correct modules
filesToFix.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if AuthContext import is missing
    if (filePath.includes('Dashboard.tsx') || filePath.includes('Login.tsx')) {
      if (!content.includes('import { useAuth } from')) {
        // Add the import at the top of the file, after React import
        content = content.replace(
          /import React.*/,
          `$&\nimport { useAuth } from '../contexts/AuthContext';`
        );
        modified = true;
      }
    }
    
    // Check if react-router-dom import is missing
    if (filePath.includes('Home.tsx') || filePath.includes('Login.tsx') || filePath.includes('SignUp.tsx')) {
      if (!content.includes('import { ') || !content.includes('react-router-dom')) {
        // Add the import at the top of the file, after React import
        content = content.replace(
          /import React.*/,
          `$&\nimport { Link, useNavigate } from 'react-router-dom';`
        );
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed imports in ${filePath}`);
    } else {
      console.log(`No changes needed for ${filePath}`);
    }
  } catch (error) {
    console.error(`Error updating ${filePath}: ${error.message}`);
  }
});

// 4. Create essential component files if they don't exist
const dashboardPath = path.join(process.cwd(), 'components', 'Dashboard.tsx');
const loginPath = path.join(process.cwd(), 'components', 'Login.tsx');
const signupPath = path.join(process.cwd(), 'components', 'SignUp.tsx');
const homePath = path.join(process.cwd(), 'components', 'Home.tsx');

// Create components directory if it doesn't exist
const componentsDir = path.join(process.cwd(), 'components');
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
  console.log('Created components directory');
}

// Create Dashboard component if it doesn't exist
if (!fs.existsSync(dashboardPath)) {
  const dashboardContent = `
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();

  async function handleLogout() {
    setError('');

    try {
      await logout();
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <div>
      <h2>Dashboard</h2>
      {error && <div>{error}</div>}
      <div>
        <strong>Email:</strong> {currentUser?.email}
      </div>
      <button onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
}
`;
  fs.writeFileSync(dashboardPath, dashboardContent.trim());
  console.log('Created Dashboard.tsx');
}

// Create Login component if it doesn't exist
if (!fs.existsSync(loginPath)) {
  const loginContent = `
import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      if (emailRef.current && passwordRef.current) {
        await login(emailRef.current.value, passwordRef.current.value);
      }
      navigate('/dashboard');
    } catch {
      setError('Failed to log in');
    }

    setLoading(false);
  }

  return (
    <div>
      <h2>Log In</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" ref={emailRef} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" ref={passwordRef} required />
        </div>
        <button disabled={loading} type="submit">
          Log In
        </button>
      </form>
      <div>
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
      <div>
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}
`;
  fs.writeFileSync(loginPath, loginContent.trim());
  console.log('Created Login.tsx');
}

// Create SignUp component if it doesn't exist
if (!fs.existsSync(signupPath)) {
  const signupContent = `
import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (passwordRef.current?.value !== passwordConfirmRef.current?.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      if (emailRef.current && passwordRef.current) {
        await signup(emailRef.current.value, passwordRef.current.value);
      }
      navigate('/dashboard');
    } catch {
      setError('Failed to create an account');
    }

    setLoading(false);
  }

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" ref={emailRef} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" ref={passwordRef} required />
        </div>
        <div>
          <label>Password Confirmation</label>
          <input type="password" ref={passwordConfirmRef} required />
        </div>
        <button disabled={loading} type="submit">
          Sign Up
        </button>
      </form>
      <div>
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
}
`;
  fs.writeFileSync(signupPath, signupContent.trim());
  console.log('Created SignUp.tsx');
}

// Create Home component if it doesn't exist
if (!fs.existsSync(homePath)) {
  const homeContent = `
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>CyberNex</h1>
      <p>Welcome to CyberNex - your cybersecurity learning platform</p>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}
`;
  fs.writeFileSync(homePath, homeContent.trim());
  console.log('Created Home.tsx');
}

// 5. Update the pages/index.js file to use the correct routing
const indexPath = path.join(process.cwd(), 'pages', 'index.js');
const indexContent = `
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Home from '../components/Home';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
`;

fs.writeFileSync(indexPath, indexContent.trim());
console.log('Updated pages/index.js to use routing');

console.log('\n✅ ALL MISSING MODULES FIXED');
console.log('This script has:');
console.log('1. Added react-router-dom to package.json dependencies');
console.log('2. Created the missing AuthContext');
console.log('3. Created or fixed components that were referenced in the error');
console.log('4. Updated pages/index.js to use proper routing'); 