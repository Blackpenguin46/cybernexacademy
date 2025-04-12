// supabase/functions/log-broken-links/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient, SupabaseClient } from 'https://esm.sh/@supabase/supabase-js@2';

// Define the structure of a link object coming from Lychee's JSON output
interface LycheeLink {
  url: string;
  status: {
    type: 'success' | 'error' | 'excluded' | 'cached';
    code?: number; // HTTP status code, might be missing
    text?: string; // Error text
  };
  // Lychee might include source, but we are updating based on URL
  // source?: string;
}

// Helper function to update a single link status in Supabase
async function updateLinkStatus(
  supabase: SupabaseClient,
  link: LycheeLink
): Promise<{ url: string; success: boolean; error?: string }> {
  const urlToUpdate = link.url;
  const statusCode = link.status.code;
  const errorMessage = link.status.text || `Lychee status type: ${link.status.type}`; // Fallback error message

  try {
    const { error } = await supabase
      .from('monitored_links') // Target the new table
      .update({
        status: 'broken', // Set status to broken
        last_checked_at: new Date().toISOString(), // Record check time
        last_status_code: statusCode,
        last_error_message: errorMessage,
        updated_at: new Date().toISOString() // Explicitly update updated_at
      })
      .eq('url', urlToUpdate); // Match the specific URL

    if (error) {
      console.error(`Error updating URL ${urlToUpdate}:`, error.message);
      return { url: urlToUpdate, success: false, error: error.message };
    }
    console.log(`Successfully updated status for ${urlToUpdate}`);
    return { url: urlToUpdate, success: true };
  } catch (err) {
    console.error(`Unexpected error updating URL ${urlToUpdate}:`, err);
    return { url: urlToUpdate, success: false, error: err.message || 'Unknown error' };
  }
}


serve(async (req) => {
  console.log("log-broken-links function invoked.");
  // 1. Check environment variables
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !supabaseKey) {
    console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
    return new Response(
      JSON.stringify({ error: "Missing Supabase credentials configuration." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  // 2. Initialize Supabase Client
  // Using the client library is often easier for updates than raw REST
   const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: { persistSession: false } // Important for server-side/edge functions
    });


  // 3. Parse incoming request body (Lychee JSON output)
  let linksToProcess: LycheeLink[] = [];
  try {
    const requestBody = await req.json();
    // Lychee's output might be nested if multiple sources were scanned,
    // but with `--input` it should be a flat array of link results.
    // We handle both simple array and the { links: [...] } structure just in case.
    if (Array.isArray(requestBody)) {
      linksToProcess = requestBody;
    } else if (requestBody && Array.isArray(requestBody.links)) {
       linksToProcess = requestBody.links;
    } else if (requestBody && Array.isArray(requestBody[0]?.links)) {
        // Handle case where lychee wraps results per input file even for single input
         linksToProcess = requestBody.flatMap((item: any) => item.links || []);
    } else {
        console.warn("Unexpected request body format:", requestBody);
        // Attempt to use if it's an array-like structure
         if(typeof requestBody === 'object' && requestBody !== null && Object.keys(requestBody).length > 0) {
             linksToProcess = Object.values(requestBody).flat().filter((l: any): l is LycheeLink => l && typeof l.url === 'string');
         } else {
            throw new Error("Invalid format: Expected an array of links or specific nested structure.");
         }
    }
     console.log(`Received ${linksToProcess.length} link results to process.`);

  } catch (error) {
    console.error("Error parsing request body:", error);
    return new Response(
      JSON.stringify({ error: `Failed to parse request body: ${error.message}` }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  // 4. Filter for broken links
  const brokenLinks = linksToProcess.filter(link => link.status.type !== 'success' && link.status.type !== 'excluded' && link.status.type !== 'cached');
  console.log(`Found ${brokenLinks.length} broken links to update.`);

  if (brokenLinks.length === 0) {
    console.log("No broken links found needing update.");
    return new Response(
      JSON.stringify({ message: "No broken links found to update." }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }

  // 5. Update status for each broken link in Supabase concurrently
  const updatePromises = brokenLinks.map(link => updateLinkStatus(supabase, link));

  try {
    const results = await Promise.all(updatePromises);
    const successfulUpdates = results.filter(r => r.success).length;
    const failedUpdates = results.filter(r => !r.success);

    console.log(`Finished processing: ${successfulUpdates} successful updates, ${failedUpdates.length} failures.`);

    if (failedUpdates.length > 0) {
      console.error("Failed updates:", failedUpdates);
      // Return a partial success status if some updates failed
      return new Response(
        JSON.stringify({
          message: `Processed ${brokenLinks.length} links. ${successfulUpdates} updated successfully, ${failedUpdates.length} failed.`,
          failures: failedUpdates
        }),
        { status: 207, headers: { "Content-Type": "application/json" } } // Multi-Status
      );
    }

    // All updates were successful
    return new Response(
      JSON.stringify({ message: `Successfully updated status for ${successfulUpdates} broken links.` }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error during batch update execution:", error);
    return new Response(
      JSON.stringify({ error: `Batch update failed: ${error.message}` }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});

console.log("log-broken-links function handler defined."); // Log definition