const fs = require('fs');
const nodemailer = require('nodemailer');

const reportPath = 'broken-links.json';
let links = [];

// Read the JSON file containing broken links
try {
  if (fs.existsSync(reportPath)) {
    const fileContent = fs.readFileSync(reportPath, 'utf-8');
    // Lychee JSON output is typically an array of objects, one for each file scanned.
    // Each object contains 'links' which is an array of link statuses.
    // We need to flatten this structure to get all links.
    const reportData = JSON.parse(fileContent);
    
    // Check if reportData is an array (expected format)
    if (Array.isArray(reportData)) {
      links = reportData.flatMap(fileResult => 
        fileResult.links ? fileResult.links.filter(link => link.status.type !== 'success') : []
      );
    } else {
      console.error('Unexpected format in broken-links.json:', reportData);
      // Handle cases where the format might be different, e.g., directly an array of links
      if (Array.isArray(reportData.links)) {
         links = reportData.links.filter(link => link.status.type !== 'success');
      } else {
        console.error('Cannot extract links from broken-links.json');
      }
    }

  } else {
    console.log('No broken links report file found. Nothing to email.');
    process.exit(0); // Exit gracefully if no report exists
  }
} catch (error) {
  console.error('Error reading or parsing broken-links.json:', error);
  process.exit(1); // Exit with error
}

// If no broken links were found after parsing
if (links.length === 0) {
  console.log('No broken links found in the report. No email sent.');
  process.exit(0);
}

// Construct the HTML email body
const html = `
  <h2>CyberNex Broken Links Report</h2>
  <p>Found ${links.length} potentially broken link(s):</p>
  <ul>
    ${links.map(link => `
      <li>
        <strong>URL:</strong> ${link.url || 'N/A'}<br/>
        <strong>Status:</strong> ${link.status ? (link.status.code || link.status.type || 'Unknown') : 'Unknown Status'}<br/>
        ${link.source ? `<strong>Found in:</strong> ${link.source}<br/>` : ''}
        <a href="https://www.cybernexacademy.com/admin/links">Review in Admin Panel</a>
      </li>`).join('')}
  </ul>
`;

// Configure the Nodemailer transporter for ProtonMail
const transporter = nodemailer.createTransport({
  host: "smtp.protonmail.com",
  port: 465,
  secure: true, // Use true for port 465
  auth: {
    user: "cybernexacademy@proton.me",
    pass: process.env.PROTON_SMTP_PASS // Use the secret passed from the workflow
  }
});

// Send the email
transporter.sendMail({
  from: '"CyberNex Bot" <cybernexacademy@proton.me>',
  to: "cybernexacademy@proton.me", // Sending to self
  subject: "⚠️ CyberNex Weekly Broken Links Report",
  html: html
}).then(() => {
  console.log('Broken links report email sent successfully!');
}).catch(error => {
  console.error('Error sending email:', error);
  process.exit(1); // Exit with error if email fails
}); 