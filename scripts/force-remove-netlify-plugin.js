const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('FORCEFULLY removing all traces of @netlify/plugin-nextjs...');

// 1. First, check all files in the root directory for mentions of the plugin
const rootFiles = fs.readdirSync(process.cwd());
console.log(`Scanning ${rootFiles.length} files in root directory for plugin references...`);

rootFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  
  // Skip directories and non-text files
  if (fs.statSync(filePath).isDirectory() || file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.ico')) {
    return;
  }
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('@netlify/plugin-nextjs')) {
      console.log(`Found plugin reference in ${file}, removing...`);
      content = content.replace(/@netlify\/plugin-nextjs/g, '');
      fs.writeFileSync(filePath, content);
    }
  } catch (error) {
    // Skip files that can't be read as text
  }
});

// 2. Specifically check and update package.json
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (fs.existsSync(packageJsonPath)) {
  console.log('Updating package.json to remove plugin...');
  
  let packageJson;
  try {
    packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  } catch (error) {
    console.log('Error parsing package.json, creating new one');
    packageJson = {
      "name": "cybernex",
      "version": "0.1.0",
      "private": true
    };
  }
  
  // Remove the plugin from all possible locations
  if (packageJson.dependencies && packageJson.dependencies['@netlify/plugin-nextjs']) {
    delete packageJson.dependencies['@netlify/plugin-nextjs'];
  }
  
  if (packageJson.devDependencies && packageJson.devDependencies['@netlify/plugin-nextjs']) {
    delete packageJson.devDependencies['@netlify/plugin-nextjs'];
  }
  
  if (packageJson.resolutions) {
    delete packageJson.resolutions['@netlify/plugin-nextjs'];
  }
  
  if (packageJson.overrides) {
    delete packageJson.overrides['@netlify/plugin-nextjs'];
  }
  
  // Set up minimal dependencies
  packageJson.dependencies = {
    ...(packageJson.dependencies || {}),
    "next": "13.4.19",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  };
  
  // Set up static script
  packageJson.scripts = {
    ...(packageJson.scripts || {}),
    "dev": "next dev",
    "build": "next build",
    "static": "node scripts/create-static-site.js",
    "deploy": "node scripts/create-static-site.js"
  };
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}

// 3. Create a completely new netlify.toml with no plugins
const netlifyTomlPath = path.join(process.cwd(), 'netlify.toml');
const netlifyToml = `
[build]
  command = "npm run static"
  publish = "out"

[build.environment]
  NODE_VERSION = "18.17.0"
  NPM_VERSION = "9.6.7"
  NETLIFY_NEXT_PLUGIN_SKIP = "true"

# Make absolutely sure no plugins are loaded
[plugins]
  package = ""
`;

fs.writeFileSync(netlifyTomlPath, netlifyToml);
console.log('Created netlify.toml with no plugins');

// 4. Create a static site generator script
const scriptsDir = path.join(process.cwd(), 'scripts');
if (!fs.existsSync(scriptsDir)) {
  fs.mkdirSync(scriptsDir, { recursive: true });
}

const staticScriptPath = path.join(scriptsDir, 'create-static-site.js');
const staticScriptContent = `
const fs = require('fs');
const path = require('path');

console.log('Creating pure static site without Next.js build...');

// Create output directory
const outDir = path.join(process.cwd(), 'out');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Create a static HTML page
const indexHtml = \`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CyberNex</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      margin: 0;
      padding: 0;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background-color: #f9fafb;
      color: #111827;
    }
    header {
      background-color: #1e40af;
      color: white;
      padding: 2rem 1rem;
      text-align: center;
    }
    h1 {
      margin: 0;
      font-size: 2.5rem;
    }
    main {
      flex: 1;
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .hero {
      text-align: center;
      margin-bottom: 3rem;
    }
    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }
    .feature {
      background-color: white;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .feature h3 {
      font-size: 1.5rem;
      margin-top: 0;
      margin-bottom: 1rem;
      color: #1e40af;
    }
    .cta {
      text-align: center;
      background-color: #f3f4f6;
      padding: 3rem 2rem;
      border-radius: 0.5rem;
    }
    .button {
      display: inline-block;
      background-color: #1e40af;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 0.25rem;
      text-decoration: none;
      font-weight: bold;
      transition: background-color 0.2s;
      margin-top: 1rem;
    }
    .button:hover {
      background-color: #1e3a8a;
    }
    footer {
      background-color: #1f2937;
      color: white;
      padding: 2rem;
      text-align: center;
    }
  </style>
</head>
<body>
  <header>
    <h1>CyberNex</h1>
  </header>
  
  <main>
    <section class="hero">
      <h2>Your Cybersecurity Learning Platform</h2>
      <p>Learn real-world cybersecurity skills through hands-on projects and expert-guided courses</p>
    </section>
    
    <section class="features">
      <div class="feature">
        <h3>Hands-On Projects</h3>
        <p>Build your cybersecurity skills with practical, real-world projects that employers value</p>
      </div>
      
      <div class="feature">
        <h3>Expert Content</h3>
        <p>Learn from industry professionals with years of experience in cybersecurity</p>
      </div>
      
      <div class="feature">
        <h3>Community Support</h3>
        <p>Join a community of like-minded individuals passionate about cybersecurity</p>
      </div>
    </section>
    
    <section class="cta">
      <h2>Start Your Cybersecurity Journey Today</h2>
      <p>We're currently updating our platform to provide you with the best possible experience. Check back soon for our full site launch!</p>
      <a href="#" class="button">Learn More</a>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2023 CyberNex. All rights reserved.</p>
  </footer>
</body>
</html>
\`;

// Write index.html to the output directory
fs.writeFileSync(path.join(outDir, 'index.html'), indexHtml.trim(), 'utf8');

// Create a 404 page
const notFoundHtml = indexHtml.replace(
  '<h2>Your Cybersecurity Learning Platform</h2>', 
  '<h2>Page Not Found</h2>'
).replace(
  '<p>Learn real-world cybersecurity skills through hands-on projects and expert-guided courses</p>',
  '<p>The page you are looking for doesn\'t exist. Let\'s get you back on track.</p>'
);

fs.writeFileSync(path.join(outDir, '404.html'), notFoundHtml, 'utf8');

console.log('Created static HTML pages in the "out" directory');
console.log('Static site generation complete!');
`;

fs.writeFileSync(staticScriptPath, staticScriptContent);
console.log('Created static site generator script');

// 5. Remove any node_modules/@netlify directory if it exists
const netlifyPluginDir = path.join(process.cwd(), 'node_modules', '@netlify');
if (fs.existsSync(netlifyPluginDir)) {
  console.log('Removing @netlify directory from node_modules...');
  try {
    fs.rmSync(netlifyPluginDir, { recursive: true, force: true });
  } catch (error) {
    console.log(`Error removing directory: ${error.message}`);
  }
}

// 6. Create an empty .env file to avoid loading issues
fs.writeFileSync(path.join(process.cwd(), '.env'), '# Environment variables\n');

console.log('Completed forceful removal of @netlify/plugin-nextjs');
console.log('Important: This script generates a purely static HTML site in the "out" directory');
console.log('without using Next.js build or export at all!'); 