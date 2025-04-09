const fs = require("fs");
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const raw = fs.readFileSync("broken-links.json", "utf8");
const parsed = JSON.parse(raw);

// Add safety check for JSON format
if (!Array.isArray(parsed)) {
  console.error("Invalid JSON format: broken-links.json does not contain a JSON array.");
  process.exit(1); // Exit if format is wrong
}

(async () => {
  try {
    for (const result of parsed) {
      if (result.status === 200) continue;
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