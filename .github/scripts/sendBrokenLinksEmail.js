const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const reportPath = path.join(__dirname, '..', '..' , 'broken-links.json'); // Adjust path relative to script location
const emailPass = process.env.PROTON_SMTP_PASS;

if (!emailPass) {
    console.error('Error: PROTON_SMTP_PASS environment variable not set.');
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
    host: 'smtp.protonmail.ch', // ProtonMail SMTP host
    port: 587, // ProtonMail SMTP port (STARTTLS)
    secure: false, // STARTTLS uses secure: false
    auth: {
        user: 'cybernex.reports@proton.me', // Your ProtonMail address
        pass: emailPass
    }
});

// Email options
const mailOptions = {
    from: 'cybernex.reports@proton.me', // Sender address
    to: 'samoakes1@proton.me', // List of receivers
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