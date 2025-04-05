import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { Database } from './database.types';

// Default values for Supabase URL and key if environment variables are not set
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://example.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDY2Mjk4NiwiZXhwIjoxOTM2MjM4OTg2fQ.aNz8iAFd5ngZMxQ2oIisz7FUYsLgdWTiVV4AZxW9nsk';

// Create a supabase client for server component use
export function createServerSupabaseClient() {
  return createServerClient<Database>(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        get: (name) => cookies().get(name)?.value,
        set: (name, value, options) => {
          cookies().set(name, value, options);
        },
        remove: (name, options) => {
          cookies().set(name, '', { ...options, maxAge: 0 });
        },
      },
    }
  );
} 