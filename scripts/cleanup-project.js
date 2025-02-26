const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Install glob if not already installed
try {
  require.resolve('glob');
} catch (e) {
  console.log('Installing glob package...');
  execSync('npm install glob --save-dev');
}

const glob = require('glob');

console.log('Starting project cleanup...');

// 1. Check if src/pages directory exists and remove it if it does
const srcPagesDir = path.join(process.cwd(), 'src', 'pages');
if (fs.existsSync(srcPagesDir)) {
  console.log('Removing src/pages directory...');
  fs.rmSync(srcPagesDir, { recursive: true, force: true });
  console.log('src/pages directory removed');
}

// 2. Check for react-router-dom in package.json and remove it
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (fs.existsSync(packageJsonPath)) {
  console.log('Checking package.json for react-router-dom...');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  let modified = false;
  
  if (packageJson.dependencies && packageJson.dependencies['react-router-dom']) {
    delete packageJson.dependencies['react-router-dom'];
    modified = true;
    console.log('Removed react-router-dom from dependencies');
  }
  
  if (packageJson.devDependencies && packageJson.devDependencies['react-router-dom']) {
    delete packageJson.devDependencies['react-router-dom'];
    modified = true;
    console.log('Removed react-router-dom from devDependencies');
  }
  
  if (modified) {
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
    console.log('Updated package.json');
  }
}

// 3. Create missing context files if needed
const contextsDir = path.join(process.cwd(), 'contexts');
if (!fs.existsSync(contextsDir)) {
  fs.mkdirSync(contextsDir, { recursive: true });
  console.log('Created contexts directory');
}

// Create ThemeContext if it doesn't exist
const themeContextPath = path.join(contextsDir, 'ThemeContext.tsx');
if (!fs.existsSync(themeContextPath)) {
  console.log('Creating ThemeContext.tsx...');
  const themeContextContent = `
import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme') as Theme;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (prefersDark) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
`;
  fs.writeFileSync(themeContextPath, themeContextContent.trim(), 'utf8');
  console.log('Created ThemeContext.tsx');
}

// 4. Create missing components if needed
const componentsDir = path.join(process.cwd(), 'components');
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
  console.log('Created components directory');
}

// Create AuthModal if it doesn't exist
const authModalPath = path.join(componentsDir, 'AuthModal.tsx');
if (!fs.existsSync(authModalPath)) {
  console.log('Creating AuthModal.tsx...');
  const authModalContent = `
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialView?: 'login' | 'signup';
}

export default function AuthModal({ isOpen, onClose, initialView = 'login' }: AuthModalProps) {
  const [view, setView] = useState<'login' | 'signup'>(initialView);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-6 flex border-b border-gray-200 dark:border-gray-700">
          <button
            className={\`py-2 px-4 \${
              view === 'login'
                ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                : 'text-gray-500 dark:text-gray-400'
            }\`}
            onClick={() => setView('login')}
          >
            Login
          </button>
          <button
            className={\`py-2 px-4 \${
              view === 'signup'
                ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                : 'text-gray-500 dark:text-gray-400'
            }\`}
            onClick={() => setView('signup')}
          >
            Sign Up
          </button>
        </div>

        {view === 'login' ? (
          <LoginForm onSuccess={onClose} />
        ) : (
          <SignUpForm onSuccess={onClose} />
        )}
      </div>
    </div>
  );
}
`;
  fs.writeFileSync(authModalPath, authModalContent.trim(), 'utf8');
  console.log('Created AuthModal.tsx');
}

// Create ProjectWalkthrough if it doesn't exist
const projectWalkthroughPath = path.join(componentsDir, 'ProjectWalkthrough.tsx');
if (!fs.existsSync(projectWalkthroughPath)) {
  console.log('Creating ProjectWalkthrough.tsx...');
  const projectWalkthroughContent = `
import React from 'react';

interface ProjectWalkthroughProps {
  title: string;
  description: string;
  difficulty: string;
  time: string;
  prerequisites: string[];
  objectives: string[];
  steps: {
    title: string;
    content: string;
  }[];
  conclusion: string;
  resources: {
    title: string;
    url: string;
  }[];
}

export default function ProjectWalkthrough({
  title,
  description,
  difficulty,
  time,
  prerequisites,
  objectives,
  steps,
  conclusion,
  resources,
}: ProjectWalkthroughProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <p className="text-gray-700 dark:text-gray-300 mb-6">{description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">Difficulty</h3>
            <p className="text-gray-700 dark:text-gray-300">{difficulty}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">Estimated Time</h3>
            <p className="text-gray-700 dark:text-gray-300">{time}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          {prerequisites.map((prereq, index) => (
            <li key={index} className="text-gray-700 dark:text-gray-300">{prereq}</li>
          ))}
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4">Learning Objectives</h2>
        <ul className="list-disc pl-6 space-y-2">
          {objectives.map((objective, index) => (
            <li key={index} className="text-gray-700 dark:text-gray-300">{objective}</li>
          ))}
        </ul>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Project Steps</h2>
        
        {steps.map((step, index) => (
          <div key={index} className="mb-8 last:mb-0">
            <h3 className="text-xl font-medium mb-3">
              Step {index + 1}: {step.title}
            </h3>
            <div className="prose dark:prose-invert max-w-none">
              {step.content}
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p className="text-gray-700 dark:text-gray-300">{conclusion}</p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Additional Resources</h2>
        <ul className="space-y-2">
          {resources.map((resource, index) => (
            <li key={index}>
              <a 
                href={resource.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                {resource.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
`;
  fs.writeFileSync(projectWalkthroughPath, projectWalkthroughContent.trim(), 'utf8');
  console.log('Created ProjectWalkthrough.tsx');
}

// Create JobListings if it doesn't exist
const jobListingsPath = path.join(componentsDir, 'JobListings.tsx');
if (!fs.existsSync(jobListingsPath)) {
  console.log('Creating JobListings.tsx...');
  const jobListingsContent = `
import React from 'react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  url: string;
  postedDate: string;
}

interface JobListingsProps {
  jobs: Job[];
}

export default function JobListings({ jobs }: JobListingsProps) {
  return (
    <div className="space-y-6">
      {jobs.map((job) => (
        <div key={job.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{job.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{job.company} • {job.location}</p>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {job.type}
            </span>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">{job.description}</p>
          
          <div className="mb-4">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Requirements:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">Posted: {job.postedDate}</span>
            <a 
              href={job.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Apply Now
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
`;
  fs.writeFileSync(jobListingsPath, jobListingsContent.trim(), 'utf8');
  console.log('Created JobListings.tsx');
}

// 5. Update next.config.js to remove the experimental appDir option
const nextConfigPath = path.join(process.cwd(), 'next.config.js');
if (fs.existsSync(nextConfigPath)) {
  console.log('Updating next.config.js...');
  let nextConfigContent = fs.readFileSync(nextConfigPath, 'utf8');
  
  // Remove the experimental appDir option
  nextConfigContent = nextConfigContent.replace(/experimental:\s*{\s*appDir:\s*true\s*}/, 'experimental: {}');
  
  fs.writeFileSync(nextConfigPath, nextConfigContent, 'utf8');
  console.log('Updated next.config.js');
}

console.log('Project cleanup completed successfully!'); 