const fs = require("fs");
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const raw = fs.readFileSync("broken-links.json", "utf8");
const parsed = JSON.parse(raw);

(async () => {
  for (const result of parsed) {
    if (result.status === 200) continue;
    await supabase.from("broken_links").upsert({
      url: result.uri,
      status_code: result.status,
      source_file: result.base || "unknown",
    });
  }
})(); 