const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

(async () => {
  const { data } = await supabase
    .from("broken_links")
    .select("*")
    .eq("approved", false)
    .eq("ignored", false);

  let body = `# 🔗 Weekly Broken Link Report\n\n`;

  data.forEach((link) => {
    const encoded = encodeURIComponent(link.url);
    const approve = `https://cybernexacademy.com/api/approve-link?url=${encoded}`;
    const ignore = `https://cybernexacademy.com/api/ignore-link?url=${encoded}`;
    body += `- ❌ ${link.url} (${link.status_code})\n`;
    body += `  [✅ Approve](${approve}) | [❌ Ignore](${ignore})\n\n`;
  });

  fs.writeFileSync("email-output.txt", body);
})(); 