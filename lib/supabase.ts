import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types';
import { validateInput, validateFormInput } from '../app/lib/security';

// Supabase configuration with actual values
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

// Create a Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  },
  global: {
    headers: {
      'X-Client-Info': 'cybernex-academy',
    },
  },
});

// Export a mock version for build/testing environments
export const mockSupabase = {
  from: () => ({
    insert: () => Promise.resolve({ error: null }),
    select: () => Promise.resolve({ data: [], error: null }),
    update: () => Promise.resolve({ error: null }),
    delete: () => Promise.resolve({ error: null }),
  }),
  auth: {
    signUp: () => Promise.resolve({ data: null, error: null }),
    signIn: () => Promise.resolve({ data: null, error: null }),
    signOut: () => Promise.resolve({ error: null }),
  }
};

// Check if Supabase connection is working
export async function checkSupabaseConnection() {
  try {
    const { data, error } = await supabase.from('health_check').select('*').limit(1)
    
    if (error) {
      console.error('Supabase connection error:', error)
      return { success: false, error: error.message }
    }
    
    return { success: true, data }
  } catch (error) {
    console.error('Unexpected error checking Supabase connection:', error)
    return { success: false, error: 'Failed to connect to database' }
  }
}

// Fetch all courses
export async function fetchCourses() {
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching courses:', error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error('Error in fetchCourses:', error);
    return [];
  }
}

// Fetch a course by ID
export async function fetchCourseById(id: string) {
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      console.error('Error fetching course by ID:', error);
      return null;
    }
    
    return data;
  } catch (error) {
    console.error('Error in fetchCourseById:', error);
    return null;
  }
}

// Fetch a course by slug
export async function fetchCourseBySlug(slug: string) {
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('slug', slug)
      .single();
    
    if (error) {
      console.error('Error fetching course by slug:', error);
      return null;
    }
    
    return data;
  } catch (error) {
    console.error('Error in fetchCourseBySlug:', error);
    return null;
  }
}

// Fetch modules for a course
export async function fetchModulesForCourse(courseId: string) {
  try {
    const { data, error } = await supabase
      .from('modules')
      .select('*')
      .eq('course_id', courseId)
      .order('order_index', { ascending: true });
    
    if (error) {
      console.error('Error fetching modules for course:', error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error('Error in fetchModulesForCourse:', error);
    return [];
  }
}

// Fetch instructors
export async function fetchInstructors() {
  try {
    const { data, error } = await supabase
      .from('content_creators')
      .select('*');
    
    if (error) {
      console.error('Error fetching instructors:', error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error('Error in fetchInstructors:', error);
    return [];
  }
}

// Fetch instructor by ID
export async function fetchInstructorById(id: string) {
  try {
    const { data, error } = await supabase
      .from('content_creators')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      console.error('Error fetching instructor by ID:', error);
      return null;
    }
    
    return data;
  } catch (error) {
    console.error('Error in fetchInstructorById:', error);
    return null;
  }
}

// Fetch content creators
export async function fetchContentCreators() {
  try {
    const { data, error } = await supabase
      .from('content_creators')
      .select('*');
    
    if (error) {
      console.error('Error fetching content creators:', error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error('Error in fetchContentCreators:', error);
    return [];
  }
}

// Fetch events
export async function fetchEvents(limit = 3) {
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('start_date', { ascending: true })
      .limit(limit);
    
    if (error) {
      console.error('Error fetching events:', error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error('Error in fetchEvents:', error);
    return [];
  }
}

// Fetch blog posts
export async function fetchBlogPosts(limit = 5) {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*, content_creators(name, avatar_url)')
      .order('published_at', { ascending: false })
      .limit(limit);
    
    if (error) {
      console.error('Error fetching blog posts:', error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error('Error in fetchBlogPosts:', error);
    return [];
  }
}

// Get user profile
export async function getUserProfile(userId: string) {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .single();
    
    if (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
    
    return data;
  } catch (error) {
    console.error('Error in getUserProfile:', error);
    return null;
  }
}

// Update user profile
export async function updateUserProfile(userId: string, updates: any) {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('user_id', userId)
      .select()
      .single();
    
    if (error) {
      console.error('Error updating user profile:', error);
      return null;
    }
    
    return data;
  } catch (error) {
    console.error('Error in updateUserProfile:', error);
    return null;
  }
}

export interface AuthError {
  message: string;
  status?: number;
}

// Sign in with email and password
export async function signIn(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, user: data.user }
  } catch (error) {
    console.error('Error in signIn:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
}

// Sign up with email and password
export async function signUp(email: string, password: string) {
  try {
    // Use environment variable if available, or construct from deployment URL
    const redirectUrl = process.env.NEXT_PUBLIC_SITE_URL 
      ? `${process.env.NEXT_PUBLIC_SITE_URL}/auth/verify-email`
      : typeof window !== 'undefined' ? `${window.location.origin}/auth/verify-email` : undefined;
    
    console.log('Using redirect URL in signUp function:', redirectUrl);
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
      }
    })

    if (error) {
      return { success: false, error: error.message }
    }

    // Create a profile for the new user
    if (data.user) {
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([
          { 
            user_id: data.user.id,
            email: data.user.email,
            onboarding_completed: false,
            interests: [],
            created_at: new Date().toISOString()
          }
        ])
        
      if (profileError) {
        console.error('Error creating profile:', profileError)
      }
    }

    return { success: true, user: data.user }
  } catch (error) {
    console.error('Error in signUp:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
}

// Sign out
export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut()
    
    if (error) {
      return { success: false, error: error.message }
    }
    
    return { success: true }
  } catch (error) {
    console.error('Sign out error:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
}

// Reset password
export async function resetPassword(email: string) {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/reset-password`,
    })
    
    if (error) {
      return { success: false, error: error.message }
    }
    
    return { success: true }
  } catch (error) {
    console.error('Reset password error:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
}

// Update password
export async function updatePassword(password: string) {
  try {
    const { error } = await supabase.auth.updateUser({
      password,
    })
    
    if (error) {
      return { success: false, error: error.message }
    }
    
    return { success: true }
  } catch (error) {
    console.error('Update password error:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
}

// Get current user
export async function getCurrentUser() {
  try {
    const { data, error } = await supabase.auth.getUser()
    
    if (error) {
      return { success: false, error: error.message }
    }
    
    return { success: true, user: data.user }
  } catch (error) {
    console.error('Get current user error:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
}

// Secure database query wrapper
export const secureQuery = async <T>(
  queryFn: () => Promise<T>,
  params: Record<string, string>
): Promise<T> => {
  // Validate all input parameters
  if (!validateFormInput(params)) {
    throw new Error('Invalid input detected');
  }

  try {
    const result = await queryFn();
    return result;
  } catch (error) {
    console.error('Database query error:', error);
    throw new Error('An error occurred while processing your request');
  }
};

// Secure data fetching wrapper
export const secureFetch = async <T>(
  table: string,
  query: object,
  options: object = {}
): Promise<T> => {
  // Validate table name
  if (!validateInput(table)) {
    throw new Error('Invalid table name');
  }

  // Convert query to string for validation
  const queryString = JSON.stringify(query);
  if (!validateInput(queryString)) {
    throw new Error('Invalid query parameters');
  }

  try {
    const { data, error } = await supabase
      .from(table)
      .select()
      .match(query)
      .single();

    if (error) throw error;
    return data as T;
  } catch (error) {
    console.error('Data fetch error:', error);
    throw new Error('An error occurred while fetching data');
  }
};

// Secure data insertion wrapper
export const secureInsert = async <T>(
  table: string,
  data: Record<string, any>
): Promise<T> => {
  // Validate table name and data
  if (!validateInput(table)) {
    throw new Error('Invalid table name');
  }

  if (!validateFormInput(data)) {
    throw new Error('Invalid input data');
  }

  try {
    const { data: result, error } = await supabase
      .from(table)
      .insert(data)
      .single();

    if (error) throw error;
    return result as T;
  } catch (error) {
    console.error('Data insertion error:', error);
    throw new Error('An error occurred while inserting data');
  }
};

// Secure data update wrapper
export const secureUpdate = async <T>(
  table: string,
  match: Record<string, any>,
  data: Record<string, any>
): Promise<T> => {
  // Validate all inputs
  if (!validateInput(table)) {
    throw new Error('Invalid table name');
  }

  if (!validateFormInput(match) || !validateFormInput(data)) {
    throw new Error('Invalid input data');
  }

  try {
    const { data: result, error } = await supabase
      .from(table)
      .update(data)
      .match(match)
      .single();

    if (error) throw error;
    return result as T;
  } catch (error) {
    console.error('Data update error:', error);
    throw new Error('An error occurred while updating data');
  }
};

