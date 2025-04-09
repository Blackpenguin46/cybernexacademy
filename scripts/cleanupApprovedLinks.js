const fs = require("fs");
const path = require("path");
const glob = require("glob");
const { createClient } = require("@supabase/supabase-js");

// Supabase config from environment
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Get all .tsx files in /app directory
const tsxFiles = glob.sync("./app/**/*.tsx");

(async () => {
  // 1. Fetch approved links from Supabase
  const { data, error } = await supabase
    .from("broken_links")
    .select("url")
    .eq("approved", true);

  if (error) {
    console.error("❌ Failed to fetch from Supabase:", error);
    process.exit(1);
  }

  const approvedLinks = data.map((row) => row.url);
  console.log(`✅ Found ${approvedLinks.length} approved links to remove.`);

  let removedCount = 0;

  // 2. Process each file
  for (const file of tsxFiles) {
    let fileContent = fs.readFileSync(file, "utf8");
    let original = fileContent;

    for (const url of approvedLinks) {
      // Simple match-and-remove (can be improved later with regex)
      const regex = new RegExp(`.*${url.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}.*\\n?`, "g");
      fileContent = fileContent.replace(regex, "");
    }

    if (fileContent !== original) {
      removedCount++;
      fs.writeFileSync(file, fileContent);
      console.log(`✂️ Cleaned: ${file}`);
    }
  }

  console.log(`🎉 Cleanup complete. ${removedCount} files modified.`);
})(); 