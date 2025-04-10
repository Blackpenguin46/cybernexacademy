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
  parsed = []; // Default to an empty array if parsing fails
}

console.log(`📝 Saving ${parsed.length} results to Supabase`);

(async () => {
  try {
    for (const result of parsed) {
      if (result.status === 200) continue;
      console.log(`❌ Saving broken link: ${result.uri} (${result.status})`);
      const { error } = await supabase.from("broken_links").upsert({
        url: result.uri,
        status_code: result.status,
        source_file: result.base || "unknown",
      });
      if (error) {
        console.error(`Failed to insert ${result.uri}:`, error.message);
      }
    }
  } catch (err) {
    console.error("Error processing broken-links.json:", err.message);
  }
})(); 