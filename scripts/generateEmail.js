const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

(async () => {
  try {
    const { data, error } = await supabase
      .from("broken_links")
      .select("*")
      .eq("approved", false)
      .eq("ignored", false);

    if (error) {
      console.error("Error fetching data from Supabase:", error.message);
      process.exit(1); // Exit if Supabase fetch fails
    }

    if (!data || data.length === 0) {
      console.log("No broken links found to report.");
      // Create an empty file or a file with a message to avoid email sending errors
      fs.writeFileSync("email-output.txt", "No new broken links found this week.\n");
      return; // Exit gracefully if no links
    }

    let body = `# 🔗 Weekly Broken Link Report\n\n`;

    data.forEach((link) => {
      const encoded = encodeURIComponent(link.url);
      const approve = `https://cybernexacademy.com/api/approve-link?url=${encoded}`;
      const ignore = `https://cybernexacademy.com/api/ignore-link?url=${encoded}`;
      body += `- ❌ ${link.url} (${link.status_code})\n`;
      body += `  [✅ Approve](${approve}) | [❌ Ignore](${ignore})\n\n`;
    });

    fs.writeFileSync("email-output.txt", body);
  } catch (err) {
    console.error("Error generating email:", err.message);
    // Optionally write an error message to the file
    fs.writeFileSync("email-output.txt", "Error generating email report.\n");
    process.exit(1); // Exit with error
  }
})(); 