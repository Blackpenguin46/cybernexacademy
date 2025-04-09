import { createClient } from '@supabase/supabase-js';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  const supabase = createClient(
    process.env.NEXT_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!
  );

  await supabase.from("broken_links").update({ ignored: true }).eq("url", url);

  return new Response("❌ Link has been ignored and will not be removed.");
} 