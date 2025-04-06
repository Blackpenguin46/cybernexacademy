import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { Database } from './database.types';

// Default export for new code using server component client
export default async function createClient() {
  const supabaseUrl = process.env.SUPABASE_URL || 'https://example.supabase.co';
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDY2Mjk4NiwiZXhwIjoxOTM2MjM4OTg2fQ.aNz8iAFd5ngZMxQ2oIisz7FUYsLgdWTiVV4AZxW9nsk';
  
  // Initialize the client with cookies for authentication
  const cookieStore = cookies();
  const supabase = createServerComponentClient({
    cookies: () => cookieStore
  }, {
    supabaseUrl,
    supabaseKey: supabaseServiceKey,
  });

  return supabase;
}

// Named export for compatibility with existing code - returns a sync client
export function createServerSupabaseClient() {
  const supabaseUrl = process.env.SUPABASE_URL || 'https://example.supabase.co';
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDY2Mjk4NiwiZXhwIjoxOTM2MjM4OTg2fQ.aNz8iAFd5ngZMxQ2oIisz7FUYsLgdWTiVV4AZxW9nsk';
  
  // Create client using the direct supabase-js library instead of the Next.js helper
  return createSupabaseClient<Database>(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  });
} 