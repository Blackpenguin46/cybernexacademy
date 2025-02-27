const fs = require('fs');
const path = require('path');

// 1. Remove problematic files
const filesToRemove = [
  'src/pages/Home.tsx',
  'pages/Home.tsx',
  'app/layout.tsx',
  'app/about-fundamentals/page.tsx',
  'src/app/layout.tsx',
  'src/app/about-fundamentals/page.tsx'
];

filesToRemove.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Removed: ${file}`);
  }
});

// 2. Create correct Next.js pages
const indexContent = `
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to CyberNex</h1>
      <div className="space-y-4">
        <Link href="/about-fundamentals">
          <span className="block p-4 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">
            Learn About Fundamentals
          </span>
        </Link>
      </div>
    </div>
  );
}
`;

const aboutContent = `
import React from 'react';
import Link from 'next/link';

export default function AboutFundamentals() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Cybersecurity Fundamentals</h1>
      <div className="prose max-w-none">
        <p>Learn about the core concepts of cybersecurity...</p>
      </div>
      <div className="mt-4">
        <Link href="/">
          <span className="inline-block p-2 bg-gray-200 rounded hover:bg-gray-300">
            Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
}
`;

// Create directories if they don't exist
fs.mkdirSync(path.join(process.cwd(), 'src/pages'), { recursive: true });
fs.mkdirSync(path.join(process.cwd(), 'src/pages/about-fundamentals'), { recursive: true });

// Write new files
fs.writeFileSync(path.join(process.cwd(), 'src/pages/index.tsx'), indexContent.trim());
fs.writeFileSync(path.join(process.cwd(), 'src/pages/about-fundamentals/index.tsx'), aboutContent.trim());

// Create tailwind.config.js
const tailwindConfig = `
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
`;

fs.writeFileSync(path.join(process.cwd(), 'tailwind.config.js'), tailwindConfig.trim());

// Create postcss.config.js
const postcssConfig = `
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`;

fs.writeFileSync(path.join(process.cwd(), 'postcss.config.js'), postcssConfig.trim());

console.log('✅ All routing issues fixed and necessary files created'); 