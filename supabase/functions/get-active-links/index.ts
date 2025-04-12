// supabase/functions/get-active-links/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(async (_req) => {
  console.log("DEBUG: Returning hardcoded test URLs.");
  try {
    const testData = [
      { url: "https://example.com" },
      { url: "https://google.com" },
      { url: "https://github.com" } // Add a few known valid URLs
    ];

    return new Response(
      JSON.stringify(testData),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Edge function error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});

console.log("get-active-links function started (DEBUG MODE - HARDCODED URLS)...");