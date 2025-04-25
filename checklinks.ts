import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import * as dotenv from 'dotenv';
import { Resend } from 'resend';

console.log("✅ Script started...");

// Load environment variables
dotenv.config();
const supabaseUrl = process.env.NEXT_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
const resendApiKey = process.env.RESEND_API_KEY;
const adminEmail = process.env.ADMIN_EMAIL;
const fromEmail = process.env.NOTIFICATION_FROM_EMAIL;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing Supabase credentials in .env file.");
  process.exit(1);
}
if (!resendApiKey || !adminEmail || !fromEmail) {
  console.error("❌ Missing Resend credentials (API Key, Admin Email, From Email) in .env file.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);
const resend = new Resend(resendApiKey);
console.log("🔑 Supabase client initialized");
console.log("📧 Resend client initialized");

// Define interface for links (can reuse from admin page if desired)
interface MonitoredLink {
  id: string;
  url: string;
  status: 'WORKING' | 'BROKEN' | null; // Allow null for initial state
  last_status_code: number | null;
  last_error_message: string | null;
  last_checked_at: string | null;
  // Add other fields from your table if needed
}

async function checkAllLinks() {
  console.log("🚀 Starting link check...");

  const { data: links, error } = await supabase
    .from('monitored_links')
    .select('id, url, status'); // Only select needed fields initially

  if (error) {
    console.error("❌ Error fetching links from Supabase:", error.message);
    return;
  }

  if (!links || links.length === 0) {
    console.warn("⚠️ No links found in 'monitored_links'.");
    return;
  }

  console.log(`🔗 Found ${links.length} links to check.\n`);

  let newlyBrokenLinks: MonitoredLink[] = [];

  for (const link of links as MonitoredLink[]) {
    const previousStatus = link.status; // Store previous status
    const url = link.url;
    if (!url || typeof url !== 'string' || !url.startsWith('http')) {
      console.warn(`⚠️ Skipping invalid or missing URL for ID ${link.id}`);
      continue;
    }

    console.log(`➡️ Checking: ${url}`);

    let currentStatus: 'WORKING' | 'BROKEN' = 'BROKEN';
    let last_status_code: number | null = null;
    let last_error_message: string | null = null;
    const checkTimestamp = new Date().toISOString();

    try {
      const response = await axios.get(url, {
        timeout: 15000,
        validateStatus: status => status < 500,
        headers: {
          'User-Agent': 'CyberNexLinkChecker/1.0 (+https://www.cybernexacademy.com)'
        }
      });
      currentStatus = 'WORKING';
      last_status_code = response.status;
      last_error_message = null; // Clear error message if working
    } catch (err: any) {
      currentStatus = 'BROKEN';
      if (err && typeof err === 'object' && 'isAxiosError' in err && err.isAxiosError === true) {
        last_status_code = err.response?.status ?? -1;
        last_error_message = err.message;
        if (err.response) {
          last_error_message = (last_error_message ?? '') + ` - ${JSON.stringify(err.response.data)}`.substring(0, 200);
        } else if (err.request) {
          last_error_message = (last_error_message ?? '') + ' - No response received';
        } else {
          last_error_message = (last_error_message ?? '') + ' - Request setup failed';
        }
      } else {
        last_status_code = -2;
        last_error_message = String(err);
      }
      if (last_error_message && last_error_message.length > 500) {
        last_error_message = last_error_message.substring(0, 497) + '...';
      }
    }

    // --- Notification Logic ---
    if (currentStatus === 'BROKEN' && previousStatus !== 'BROKEN') {
      newlyBrokenLinks.push({
        ...link, // Include existing link data
        status: currentStatus,
        last_status_code: last_status_code,
        last_error_message: last_error_message,
        last_checked_at: checkTimestamp
      });
    }
    // --- End Notification Logic ---

    // --- Database Update ---
    const updatePayload = {
      status: currentStatus,
      last_status_code,
      last_error_message: currentStatus === 'BROKEN' ? last_error_message : null,
      last_checked_at: checkTimestamp,
      updated_at: checkTimestamp, // Keep updated_at field consistent
    };

    const { error: updateError } = await supabase
      .from('monitored_links')
      .update(updatePayload)
      .eq('id', link.id);

    if (updateError) {
      console.error(`❌ Failed to update ${url} (ID ${link.id}): ${updateError.message}`);
    } else {
      console.log(`✅ Updated ${url} (ID ${link.id}): ${currentStatus} (${last_status_code})`);
    }
    // --- End Database Update ---

    // Pause between requests
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // --- Send Summary Email ---
  if (newlyBrokenLinks.length > 0) {
    console.log(`
📧 Found ${newlyBrokenLinks.length} newly broken links. Sending notification to ${adminEmail}...`);
    await sendBrokenLinkNotification(newlyBrokenLinks);
  }
  // --- End Send Summary Email ---

  console.log("\n🏁 Finished checking all links.");
}

// --- Define the email sending function ---
async function sendBrokenLinkNotification(brokenLinks: MonitoredLink[]) {
  const subject = `CyberNex Alert: ${brokenLinks.length} Newly Broken Links Detected`;
  
  // Simple HTML body
  const htmlBody = `
    <h1>Broken Links Detected</h1>
    <p>The following ${brokenLinks.length} monitored link(s) were found to be broken during the last check:</p>
    <ul>
      ${brokenLinks.map(link => `
        <li>
          <strong>URL:</strong> <a href="${link.url}">${link.url}</a><br/>
          <strong>Status Code:</strong> ${link.last_status_code ?? 'N/A'}<br/>
          <strong>Error:</strong> ${link.last_error_message ?? 'None'}<br/>
          <strong>Checked At:</strong> ${link.last_checked_at ? new Date(link.last_checked_at).toLocaleString() : 'N/A'}
        </li>
      `).join('')}
    </ul>
    <p>Please review these links in the <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'your-site-url'}/admin/broken-links">Admin Panel</a>.</p>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail as string, // Assert as string as we checked for existence
      to: adminEmail as string, // Assert as string
      subject: subject,
      html: htmlBody,
    });

    if (error) {
      // Handle Resend API error
      console.error("❌ Resend API Error:", error);
      // Don't throw here, just log it, as the main script function might still be useful
    } else if (data) { // Check if data is not null
      // Log success
      console.log("📧 Notification email sent successfully: ID", data.id);
    } else {
      // Handle case where error is null but data is also null (unexpected)
      console.warn("⚠️ Resend response format unexpected: No error, but no data received.");
    }

  } catch (error) {
    // Handle unexpected errors during the send call itself
    console.error("❌ Unexpected error sending notification email:", error);
  }
}
// --- End Email Sending ---

checkAllLinks()
  .then(() => console.log("🎯 Script completed successfully"))
  .catch(err => console.error("🔥 Fatal error during execution:", err));