import { createBrowserClient } from '@supabase/ssr';
import { Database } from '../database.types'; // Adjust path if needed

// Export a function to create the client instance
export const createClient = () => {
  // Use NEXT_PUBLIC_ variables for client-side
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("❌ Missing Supabase public credentials (NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY) in environment variables.");
    // Throw an error as the client cannot function without these
    throw new Error("Supabase client credentials missing. Check environment variables.");
  }

  // Use createBrowserClient which is designed for client-side components
  return createBrowserClient<Database>(
    supabaseUrl,
    supabaseAnonKey,
    {
      // Optional: Add common client-side options if needed
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true, // Important for OAuth flows
        flowType: 'pkce',
      },
      global: {
        headers: { 'X-Client-Info': 'cybernex-web-client' },
      },
    }
  );
} 