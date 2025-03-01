const fs = require('fs');
const path = require('path');

// List of directories to check
const dirsToCheck = ['pages', 'components', 'lib', 'utils'];

// Function to replace Supabase imports with mock
function replaceSupabaseImports(filePath) {
  try {
    if (!fs.existsSync(filePath)) return;
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Replace Supabase imports and createClient calls
    let updatedContent = content
      .replace(/import\s+{\s*createClient\s*}\s+from\s+['"]@supabase\/supabase-js['"]/g, 
               '// Supabase import removed')
      .replace(/import\s+{\s*supabase\s*}\s+from\s+['"](\.\.\/)+lib\/supabase['"]/g, 
               '// Supabase import removed\nimport { supabase } from "../lib/supabase-mock"')
      .replace(/const\s+supabase\s*=\s*createClient\([^)]*\)/g, 
               'const supabase = { auth: { getSession: () => ({}) } }');
    
    if (content !== updatedContent) {
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      console.log(`Fixed Supabase references in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
  }
}

// Function to recursively process directories
function processDirectory(dir) {
  try {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        processDirectory(filePath);
      } else if (/\.(js|jsx|ts|tsx)$/.test(file)) {
        replaceSupabaseImports(filePath);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dir}:`, error);
  }
}

// Create a mock Supabase file
function createMockSupabase() {
  const mockContent = `
// Mock Supabase client
export const supabase = {
  auth: {
    getSession: () => Promise.resolve({ data: { session: null } }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    signInWithPassword: () => Promise.resolve({ error: new Error('Supabase not configured') }),
    signOut: () => Promise.resolve({ error: null })
  },
  from: () => ({
    select: () => ({ data: null, error: new Error('Supabase not configured') })
  })
};
`;

  const dir = path.join(process.cwd(), 'lib');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(dir, 'supabase-mock.js'), mockContent, 'utf8');
  console.log('Created mock Supabase client');
}

// Process all directories
console.log('Starting build fixes...');
createMockSupabase();
for (const dir of dirsToCheck) {
  processDirectory(path.join(process.cwd(), dir));
}
console.log('Build fixes completed'); 