const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const reportPath = path.join(__dirname, '..', '..' , 'broken-links.json'); // Adjust path relative to script location

// Read email configuration from environment variables provided by the workflow
const emailHost = process.env.EMAIL_SMTP_HOST;
const emailPort = parseInt(process.env.EMAIL_SMTP_PORT || '587', 10); // Default to 587 if not set
const emailUser = process.env.EMAIL_USERNAME;
const emailPass = process.env.EMAIL_PASSWORD; // Read the password directly

if (!emailHost || !emailUser || !emailPass) {
    console.error('Error: EMAIL_SMTP_HOST, EMAIL_USERNAME, and EMAIL_PASSWORD environment variables must be set.');
    process.exit(1);
}

if (!fs.existsSync(reportPath)) {
    console.error(`Error: Report file not found at ${reportPath}`);
    process.exit(1);
}

let reportContent;
try {
    reportContent = fs.readFileSync(reportPath, 'utf8');
} catch (err) {
    console.error(`Error reading report file: ${err}`);
    process.exit(1);
}

let jsonData;
try {
    jsonData = JSON.parse(reportContent);
} catch (err) {
    console.error(`Error parsing JSON from report file: ${err}`);
    console.error("File content:", reportContent); // Log content on parse error
    process.exit(1);
}

// --- Updated Logic to Handle Detailed Summary Format ---
let allErrors = [];
if (jsonData.error_map && typeof jsonData.error_map === 'object') {
    // Iterate through the arrays of errors for each input source
    Object.values(jsonData.error_map).forEach(errorArray => {
        if (Array.isArray(errorArray)) {
            allErrors = allErrors.concat(errorArray);
        }
    });
}

if (allErrors.length === 0) {
    console.log('No broken links found in the report (error_map is empty or invalid). No email sent.');
    process.exit(0);
}

console.log(`Found ${allErrors.length} broken links/errors. Preparing email...`);

// Prepare email content
let emailBody = '<h1>Broken Link Report</h1>';
emailBody += `<p>Found ${allErrors.length} broken links or errors during the latest scan.</p>`;
emailBody += '<ul>';

allErrors.forEach(error => {
    const url = error.url || 'URL not found';
    // Handle different ways status/error might be represented
    let statusText = 'Status unknown';
    if (error.status && typeof error.status === 'object' && error.status.text) {
        statusText = error.status.text;
    } else if (typeof error.status === 'string') { // Fallback if status is just a string
        statusText = error.status;
    } else if (error.error) { // Some errors might be directly under an 'error' key
         statusText = typeof error.error === 'object' ? JSON.stringify(error.error) : String(error.error);
    }

    emailBody += `<li><a href="${url}">${url}</a> - Status: ${statusText}</li>`;
});

emailBody += '</ul>';

// --- End of Updated Logic ---


// Configure Nodemailer transporter using environment variables
const transporter = nodemailer.createTransport({
    host: emailHost, 
    port: emailPort,
    // Determine secure based on standard ports (true for 465, false otherwise)
    secure: emailPort === 465, 
    auth: {
        user: emailUser, 
        pass: emailPass 
    }
});

// Email options - Use EMAIL_USERNAME for 'from'
const mailOptions = {
    from: emailUser, // Sender address from environment variable
    to: 'cybernexacademy@cybernexacademy.com', // Recipient address
    subject: 'Weekly Broken Link Scan Report', // Subject line
    html: emailBody // HTML body content
};

// Send mail
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
        return process.exit(1);
    }
    console.log('Email sent successfully:', info.messageId);
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info)); // May not work with ProtonMail
}); 