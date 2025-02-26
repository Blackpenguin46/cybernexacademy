const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Starting to fix missing components and dependencies...');

// 1. Install framer-motion if it's missing
try {
  console.log('Checking for framer-motion...');
  require.resolve('framer-motion');
  console.log('framer-motion is already installed');
} catch (e) {
  console.log('Installing framer-motion...');
  try {
    execSync('npm install framer-motion --save', { stdio: 'inherit' });
    console.log('Successfully installed framer-motion');
  } catch (error) {
    console.error('Failed to install framer-motion:', error);
  }
}

// 2. Create ProjectWalkthrough component
const componentsDir = path.join(process.cwd(), 'components');
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

const projectWalkthroughPath = path.join(componentsDir, 'ProjectWalkthrough.tsx');
const projectWalkthroughContent = `
import React from 'react';

interface Step {
  title: string;
  description: string;
  code?: string;
  image?: string;
}

interface ProjectWalkthroughProps {
  steps: Step[];
  projectTitle: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  prerequisites?: string[];
}

export default function ProjectWalkthrough({
  steps,
  projectTitle,
  difficulty,
  estimatedTime,
  prerequisites = []
}: ProjectWalkthroughProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{projectTitle}</h1>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
            {difficulty}
          </div>
          <div className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full text-sm">
            {estimatedTime}
          </div>
        </div>
        
        {prerequisites.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Prerequisites</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              {prerequisites.map((prereq, index) => (
                <li key={index}>{prereq}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Step {index + 1}: {step.title}
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">{step.description}</p>
            
            {step.code && (
              <div className="mb-4">
                <pre className="p-4 bg-gray-100 dark:bg-gray-900 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    {step.code}
                  </code>
                </pre>
              </div>
            )}
            
            {step.image && (
              <div className="mb-4">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="rounded-md max-w-full h-auto"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
`;

fs.writeFileSync(projectWalkthroughPath, projectWalkthroughContent.trim(), 'utf8');
console.log('Created ProjectWalkthrough component');

// 3. Create JobListings component
const jobListingsPath = path.join(componentsDir, 'JobListings.tsx');
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
  postedDate: string;
  url: string;
}

export default function JobListings() {
  // Sample job listings data
  const jobs: Job[] = [
    {
      id: '1',
      title: 'Cybersecurity Intern',
      company: 'SecureTech Solutions',
      location: 'Remote',
      type: 'Internship',
      description: 'Join our team as a cybersecurity intern and gain hands-on experience with security tools and practices.',
      requirements: [
        'Currently pursuing a degree in Computer Science, Cybersecurity, or related field',
        'Basic understanding of networking and security concepts',
        'Familiarity with Linux operating systems',
        'Strong problem-solving skills'
      ],
      postedDate: '2 days ago',
      url: '#'
    },
    {
      id: '2',
      title: 'Junior Security Analyst',
      company: 'CyberDefend Inc.',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'We are looking for a Junior Security Analyst to join our SOC team to monitor and respond to security incidents.',
      requirements: [
        'Bachelor's degree in Cybersecurity, IT, or related field',
        'CompTIA Security+ certification (or equivalent)',
        'Knowledge of SIEM tools and security frameworks',
        'Strong analytical and communication skills'
      ],
      postedDate: '1 week ago',
      url: '#'
    },
    {
      id: '3',
      title: 'Penetration Testing Intern',
      company: 'Ethical Hackers Group',
      location: 'Chicago, IL (Hybrid)',
      type: 'Internship',
      description: 'Learn and apply penetration testing methodologies under the guidance of experienced security professionals.',
      requirements: [
        'Currently pursuing a degree in Cybersecurity or related field',
        'Knowledge of common vulnerabilities and exploits',
        'Familiarity with tools like Metasploit, Burp Suite, or Nmap',
        'Strong ethical standards and attention to detail'
      ],
      postedDate: '3 days ago',
      url: '#'
    }
  ];

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
console.log('Created JobListings component');

// 4. Fix project pages that import ProjectWalkthrough
const projectPages = [
  'app/projects/blockchain-identity-verification/page.tsx',
  'app/projects/dns-spoofing-detector/page.tsx',
  'app/projects/file-encryption-tool/page.tsx'
];

projectPages.forEach(pagePath => {
  const fullPath = path.join(process.cwd(), pagePath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Replace @/components/ProjectWalkthrough with ../../components/ProjectWalkthrough
    content = content.replace(
      /import\s+ProjectWalkthrough\s+from\s+['"]@\/components\/ProjectWalkthrough['"]/g,
      `import ProjectWalkthrough from '../../../components/ProjectWalkthrough'`
    );
    
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Fixed imports in ${pagePath}`);
  }
});

// 5. Fix internships-jobs page that imports JobListings
const internshipsJobsPath = path.join(process.cwd(), 'app/college-students/internships-jobs/page.tsx');
if (fs.existsSync(internshipsJobsPath)) {
  let content = fs.readFileSync(internshipsJobsPath, 'utf8');
  
  // Replace @/components/JobListings with ../../../components/JobListings
  content = content.replace(
    /import\s+JobListings\s+from\s+['"]@\/components\/JobListings['"]/g,
    `import JobListings from '../../../components/JobListings'`
  );
  
  fs.writeFileSync(internshipsJobsPath, content, 'utf8');
  console.log('Fixed imports in app/college-students/internships-jobs/page.tsx');
}

console.log('Finished fixing missing components and dependencies'); 