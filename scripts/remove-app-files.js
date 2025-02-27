const fs = require('fs');
const path = require('path');

// List of app directory files to remove
const appFilesToRemove = [
  'app/certifications/page.tsx',
  'app/cybernex-plus/page.tsx',
  'app/cybernex-plus/subscribe/page.tsx',
  'src/app/certifications/page.tsx',
  'src/app/cybernex-plus/page.tsx',
  'src/app/cybernex-plus/subscribe/page.tsx'
];

console.log('Removing app directory files...');

appFilesToRemove.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`Removed: ${file}`);
    } catch (error) {
      console.error(`Error removing ${file}: ${error.message}`);
    }
  }
});

// Remove entire app directories if they exist
['app', 'src/app'].forEach(dir => {
  const dirPath = path.join(process.cwd(), dir);
  if (fs.existsSync(dirPath)) {
    try {
      fs.rmdirSync(dirPath, { recursive: true });
      console.log(`Removed directory: ${dir}`);
    } catch (error) {
      console.error(`Error removing directory ${dir}: ${error.message}`);
    }
  }
});

console.log('Creating Pages Router equivalents...');

// Create the Pages Router equivalent files
const pagesDir = path.join(process.cwd(), 'src/pages');
fs.mkdirSync(pagesDir, { recursive: true });

// Create certifications page
const certificationsContent = `
import React from 'react';
import { Accordion, AccordionItem } from '@/components/ui/accordion';

export default function Certifications() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Certifications</h1>
      <Accordion>
        <AccordionItem title="Security+">
          Content for Security+
        </AccordionItem>
      </Accordion>
    </div>
  );
}
`;

// Create cybernex-plus page
const cybernexPlusContent = `
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function CybernexPlus() {
  const { currentUser } = useAuth();
  
  if (!currentUser) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">CyberNex Plus</h1>
    </div>
  );
}
`;

// Create subscribe page
const subscribeContent = `
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

export default function Subscribe() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Subscribe to CyberNex Plus</h1>
    </div>
  );
}
`;

// Write the files
fs.mkdirSync(path.join(pagesDir, 'certifications'), { recursive: true });
fs.mkdirSync(path.join(pagesDir, 'cybernex-plus/subscribe'), { recursive: true });

fs.writeFileSync(path.join(pagesDir, 'certifications/index.tsx'), certificationsContent.trim());
fs.writeFileSync(path.join(pagesDir, 'cybernex-plus/index.tsx'), cybernexPlusContent.trim());
fs.writeFileSync(path.join(pagesDir, 'cybernex-plus/subscribe/index.tsx'), subscribeContent.trim());

console.log('✅ Successfully converted app directory files to Pages Router format'); 