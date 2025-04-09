import { createClient } from '@supabase/supabase-js';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!
  );

  await supabase.from("broken_links").update({ approved: true }).eq("url", url);

  return new Response("✅ Link marked for removal. It will be deleted in the next cleanup.");
} 