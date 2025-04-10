const fs = require("fs");
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

let raw;
try {
  raw = fs.readFileSync("broken-links.json", "utf8");
} catch (error) {
  console.error("Error reading broken-links.json:", error.message);
  // If file cannot be read, treat as empty
  raw = "[]"; 
}

let parsed;
try {
  parsed = JSON.parse(raw);
  if (!Array.isArray(parsed)) {
    console.error("Warning: broken-links.json does not contain a valid JSON array. Treating as empty.");
    parsed = []; // Default to an empty array if not an array
  }
} catch (error) {
  console.error("Invalid JSON format in broken-links.json. Treating as empty:", error.message);
  console.error("--- Raw content that failed parsing ---");
  console.error(raw); // Log the raw string that caused the error
  console.error("--- End raw content ---");
  parsed = {}; // Default to an empty object if parsing fails
}

// Check if parsed is an object and has error_map
if (typeof parsed !== 'object' || parsed === null || !parsed.error_map) {
  console.log("✅ No errors found in lychee output or output format unexpected.");
  // Exit gracefully if no errors or unexpected format
  process.exit(0); 
}

console.log(`📝 Processing errors found in ${Object.keys(parsed.error_map).length} file(s)`);

(async () => {
  let savedCount = 0;
  try {
    // Iterate through the error_map: { "./path/to/file.tsx": [ {link_result}, ... ], ... }
    for (const [source_file, errorResults] of Object.entries(parsed.error_map)) {
      for (const result of errorResults) {
        // Skip results that might not have a status code (e.g., network errors before status)
        if (!result.status || result.status.code === undefined) continue;

        // Skip actual successes if they somehow end up in error_map (shouldn't happen)
        if (result.status.code >= 200 && result.status.code < 300) continue;
        
        const url = result.url;
        const status_code = result.status.code;
        
        console.log(`❌ Found broken link: ${url} (${status_code}) in ${source_file}`);
        const { error } = await supabase.from("broken_links").upsert({
          url: url,
          status_code: status_code,
          // Use the source_file from the error_map key
          source_file: source_file || "unknown", 
        });
        if (error) {
          console.error(`Failed to insert ${url}:`, error.message);
        } else {
          savedCount++;
        }
      }
    }
    console.log(`💾 Successfully saved ${savedCount} broken link results to Supabase.`);
  } catch (err) {
    console.error("Error processing lychee error map:", err.message);
  }
})(); 