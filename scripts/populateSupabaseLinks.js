const dotenvResult = require('dotenv').config({ path: '.env', debug: true }); // Load .env and enable debug logging

if (dotenvResult.error) {
  console.error('Error loading .env file:', dotenvResult.error);
}

// console.log('.env file parsed content (if successful):', dotenvResult.parsed); // Remove debug log

// --- Remove Debugging ---
// console.log("DEBUG: process.env.NEXT_SUPABASE_URL:", process.env.NEXT_SUPABASE_URL);
// console.log("DEBUG: process.env.SUPABASE_SERVICE_KEY:", process.env.SUPABASE_SERVICE_KEY ? 'Loaded (hidden)' : undefined);
// --- End Remove Debugging ---

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// --- Configuration ---
const supabaseUrl = process.env.NEXT_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_KEY;
const FILES_TO_SCAN = 'app/**/*.tsx'; // Glob pattern for files to scan
const EXCLUDED_DOMAINS = [
    'localhost',
    'vercel.app',
    'vercel.com',
    'supabase.co',
    'supabase.com',
    'stripe.com',
    'discord.gg', // Often invites, not static resources
    'discord.com',
    'github.com', // Often code links, not resources
    'google.com', // Search/auth links
    'gstatic.com',
    'googletagmanager.com',
    'googleapis.com',
    'facebook.com',
    'twitter.com',
    'linkedin.com',
    'instagram.com',
    'mailto:', // Exclude mailto links
    'tel:' // Exclude tel links
];
const URL_REGEX = /https?:\/\/[^\s\"\'\`<>]+/g; // Regex to find URLs
const TABLE_NAME = 'monitored_links';
// --- End Configuration ---

if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.error('Error: Missing Supabase URL or Service Role Key in environment variables (.env).');
    process.exit(1);
}

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

async function main() {
    console.log(`Scanning files matching: ${FILES_TO_SCAN}`);
    const files = await glob(FILES_TO_SCAN, { nodir: true, ignore: '**/node_modules/**' });
    console.log(`Found ${files.length} files to scan.`);

    const allUrls = new Set();

    for (const file of files) {
        try {
            const content = fs.readFileSync(file, 'utf-8');
            const matches = content.match(URL_REGEX);
            if (matches) {
                matches.forEach(url => {
                    try {
                        const parsedUrl = new URL(url);
                        const domain = parsedUrl.hostname.replace(/^www\./, ''); // Basic domain extraction
                        
                        // Exclude specific domains and mailto/tel links
                        if (!EXCLUDED_DOMAINS.some(excluded => url.startsWith(excluded) || domain.includes(excluded))) {
                            // Normalize URL slightly (remove trailing slash, etc.) - optional
                            let normalizedUrl = parsedUrl.origin + parsedUrl.pathname;
                            if (normalizedUrl.endsWith('/')) {
                                normalizedUrl = normalizedUrl.slice(0, -1);
                            }
                             // Consider adding search params if relevant, or specifically excluding them
                            // normalizedUrl += parsedUrl.search;

                            allUrls.add(normalizedUrl); 
                        }
                    } catch (urlError) {
                        // Ignore invalid URLs
                    }
                });
            }
        } catch (readError) {
            console.warn(`Warning: Could not read file ${file}: ${readError.message}`);
        }
    }

    const uniqueUrls = Array.from(allUrls);
    console.log(`Found ${uniqueUrls.length} unique, potentially monitorable URLs.`);

    if (uniqueUrls.length === 0) {
        console.log('No URLs found to insert. Exiting.');
        return;
    }

    // Prepare data for Supabase insertion
    const recordsToInsert = uniqueUrls.map(url => ({
        url: url,
        status: 'active' // Default status for newly added links
        // Add other default fields if your table requires them
    }));

    console.log(`Attempting to insert ${recordsToInsert.length} URLs into Supabase table '${TABLE_NAME}'...`);

    // Batch insert with upsert to avoid errors if a URL already exists
    // We use url as the conflict target because it has a UNIQUE constraint
    const { data, error } = await supabase
        .from(TABLE_NAME)
        .upsert(recordsToInsert, { onConflict: 'url', ignoreDuplicates: true });

    if (error) {
        console.error('Supabase insert/upsert error:', error);
    } else {
        // Supabase upsert with ignoreDuplicates doesn't return the count of *new* rows easily
        console.log(`Supabase upsert operation completed. Check the table '${TABLE_NAME}' for results.`);
        // console.log('Inserted/Updated records:', data); // Data might be null depending on return preference
    }
}

main().catch(err => {
    console.error('Script failed:', err);
    process.exit(1);
}); 