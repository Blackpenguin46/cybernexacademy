const fs = require("fs");
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const raw = fs.readFileSync("broken-links.json", "utf-8");

let parsed;
try {
  parsed = JSON.parse(raw);
  if (!Array.isArray(parsed)) {
    console.error("Expected array of broken links in broken-links.json.");
    process.exit(1);
  }
} catch (error) {
  console.error("Failed to parse broken-links.json:", error.message);
  process.exit(1);
}

const brokenLinks = parsed.filter(item => {
  return item.status >= 400 || item.status === "error" || item.status === "timeout";
}).map(link => ({
  url: link.uri,
  status: link.status,
  reason: link.explanation || "Unknown"
}));

(async () => {
  const { data, error } = await supabase.from("broken_links").insert(brokenLinks);
  if (error) {
    console.error("Supabase insert failed:", error.message);
  } else {
    console.log(`✅ Successfully uploaded ${brokenLinks.length} broken links to Supabase.`);
  }
})(); 