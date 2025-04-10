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
  raw = "{}"; // Default to empty object if read fails
}

let parsed;
try {
  parsed = JSON.parse(raw);
  if (typeof parsed !== 'object' || parsed === null) {
      // This case should ideally not happen if default is {}
      console.error("Parsed content is not an object. Treating as empty.");
      parsed = {}; 
  }
  // Removed the Array.isArray check here as we expect an object
} catch (error) {
  console.error("Invalid JSON format in broken-links.json. Treating as empty object:", error.message);
  console.error("--- Raw content that failed parsing ---");
  console.error(raw); // Log the raw string that caused the error
  console.error("--- End raw content ---");
  parsed = {}; // Default to an empty object if parsing fails
}

// Check if parsed is an object and has error_map
if (typeof parsed.error_map !== 'object' || parsed.error_map === null || Object.keys(parsed.error_map).length === 0) {
  console.log("✅ No errors found in lychee output (error_map missing or empty).");
  // Exit gracefully if no errors or unexpected format
  process.exit(0);
}

console.log(`📝 Processing errors found in ${Object.keys(parsed.error_map).length} file(s)`);

(async () => {
  let savedCount = 0;
  try {
    // Iterate through the error_map: { "./path/to/file.tsx": [ {link_result}, ... ], ... }
    for (const [source_file, errorResults] of Object.entries(parsed.error_map)) {
      // Ensure errorResults is actually an array before iterating
      if (!Array.isArray(errorResults)) {
        console.warn(`Skipping non-array error results for file: ${source_file}`);
        continue;
      }
      for (const result of errorResults) {
        // Skip results that might not have a status code (e.g., network errors before status)
        // Also check result object exists
        if (!result || !result.status || result.status.code === undefined) {
            console.warn(`Skipping result without status code for file ${source_file}:`, result);
            continue;
        }

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