import { createClient } from '@supabase/supabase-js';

// Get Supabase URL from environment variables and fix formatting if needed
let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
// Remove @ symbol if it exists at the beginning of the URL
if (supabaseUrl.startsWith('@')) {
  supabaseUrl = supabaseUrl.substring(1);
}

const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Only create the client if both URL and key are available
let supabase = null;

if (supabaseUrl && supabaseAnonKey) {
  try {
    console.log('Initializing Supabase with URL:', supabaseUrl);
    supabase = createClient(supabaseUrl, supabaseAnonKey);
  } catch (error) {
    console.error('Error initializing Supabase client:', error);
    // Create a mock client that won't throw errors
    supabase = createMockClient();
  }
} else {
  console.warn('Supabase URL or Anon Key not provided');
  // Create a mock client
  supabase = createMockClient();
}

function createMockClient() {
  return {
    auth: {
      getSession: () => Promise.resolve({ data: { session: null } }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      signInWithPassword: () => Promise.resolve({ error: new Error('Supabase not configured') }),
      signOut: () => Promise.resolve({ error: null })
    },
    from: () => ({
      select: () => ({ data: null, error: new Error('Supabase not configured') })
    })
  };
}

export { supabase }; 