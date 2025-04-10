const fs = require("fs");
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

let raw;
let parsed = [];

try {
  raw = fs.readFileSync("broken-links.json", "utf8");
  const json = JSON.parse(raw);

  // Lychee sometimes returns an object with a `results` field
  if (Array.isArray(json)) {
    parsed = json;
  } else if (Array.isArray(json?.results)) {
    parsed = json.results;
  } else {
    console.error("Unexpected JSON structure:", json);
  }
} catch (error) {
  console.error("❌ Failed to parse broken-links.json:", error.message);
  process.exit(1);
}

console.log(`🔎 Found ${parsed.length} links total.`);

(async () => {
  for (const result of parsed) {
    if (result.status === 200) continue; // only store broken ones

    const insert = {
      url: result.uri,
      status_code: result.status,
      source_file: result.base || "unknown",
    };

    console.log(`💾 Saving broken link: ${insert.url} (${insert.status_code})`);
    await supabase.from("broken_links").upsert(insert);
  }
})(); 