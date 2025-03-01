import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Missing Supabase environment variables. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.'
  );
}

// Create Supabase client with proper error handling
let supabase;

try {
  // Make sure the URL doesn't have a leading @ symbol
  const cleanUrl = supabaseUrl?.startsWith('@') 
    ? supabaseUrl.substring(1) 
    : supabaseUrl;
    
  if (cleanUrl && supabaseAnonKey) {
    supabase = createClient(cleanUrl, supabaseAnonKey);
  } else {
    // Create mock client if variables are missing
    supabase = createMockClient();
  }
} catch (error) {
  console.error('Error initializing Supabase client:', error);
  supabase = createMockClient();
}

// Mock client for when real client can't be initialized
function createMockClient() {
  return {
    auth: {
      getSession: () => Promise.resolve({ data: { session: null } }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      signInWithPassword: () => Promise.resolve({ error: new Error('Supabase not configured') }),
      signUp: () => Promise.resolve({ error: new Error('Supabase not configured') }),
      signOut: () => Promise.resolve({ error: null })
    },
    from: () => ({
      select: () => ({ data: null, error: new Error('Supabase not configured') })
    })
  };
}

export { supabase }; 