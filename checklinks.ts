import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import * as dotenv from 'dotenv';

console.log("✅ Script started...");

// Load environment variables
dotenv.config();
const supabaseUrl = process.env.NEXT_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing Supabase credentials in .env file.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);
console.log("🔑 Supabase client initialized");

async function checkAllLinks() {
  console.log("🚀 Starting link check...");

  const { data: links, error } = await supabase.from('monitored_links').select('*');

  if (error) {
    console.error("❌ Error fetching links from Supabase:", error.message);
    return;
  }

  if (!links || links.length === 0) {
    console.warn("⚠️ No links found in 'monitored_links'.");
    return;
  }

  console.log(`🔗 Found ${links.length} links to check.\n`);

  for (const link of links) {
    const url = link.url;
    if (!url || typeof url !== 'string' || !url.startsWith('http')) {
      console.warn(`⚠️ Skipping invalid or missing URL for ID ${link.id}`);
      continue;
    }

    console.log(`➡️ Checking: ${url}`);

    let status: 'WORKING' | 'BROKEN' = 'BROKEN';
    let last_status_code: number | null = null;
    let last_error_message: string | null = null;

    try {
      const response = await axios.get(url, {
        timeout: 15000,
        validateStatus: status => status < 500,
        headers: {
          'User-Agent': 'CyberNexLinkChecker/1.0 (+https://www.cybernexacademy.com)'
        }
      });

      status = 'WORKING';
      last_status_code = response.status;
    } catch (err: any) {
      status = 'BROKEN';
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

    // Failsafe: Enforce valid values only
    if (status !== 'WORKING' && status !== 'BROKEN') {
      console.warn(`⚠️ Invalid status generated. Defaulting to 'BROKEN'`);
      status = 'BROKEN';
    }

    const updatePayload: {
      status: 'WORKING' | 'BROKEN';
      last_status_code: number | null;
      last_checked_at: string;
      last_error_message?: string | null;
      updated_at: string;
    } = {
      status,
      last_status_code,
      last_checked_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    if (status === 'BROKEN') {
      updatePayload.last_error_message = last_error_message ?? 'Unknown error';
    }

    const { error: updateError } = await supabase
      .from('monitored_links')
      .update(updatePayload)
      .eq('id', link.id);

    if (updateError) {
      console.error(`❌ Failed to update ${url} (ID ${link.id}): ${updateError.message}`);
    } else {
      console.log(`✅ Updated ${url} (ID ${link.id}): ${status} (${last_status_code})`);
    }

    // Pause between requests to avoid rate limits
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log("\n🏁 Finished checking all links.");
}

checkAllLinks()
  .then(() => console.log("🎯 Script completed successfully"))
  .catch(err => console.error("🔥 Fatal error during execution:", err));