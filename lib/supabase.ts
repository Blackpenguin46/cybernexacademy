import { createBrowserClient } from '@supabase/ssr';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { Database } from './database.types';

// Default values for Supabase URL and key if environment variables are not set
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://example.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDY2Mjk4NiwiZXhwIjoxOTM2MjM4OTg2fQ.aNz8iAFd5ngZMxQ2oIisz7FUYsLgdWTiVV4AZxW9nsk';

// Create a supabase client for client-side component use
export const supabase = createBrowserClient<Database>(
  supabaseUrl,
  supabaseAnonKey
);

// Create a supabase client for server component use
export const serverSupabase = () => {
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
};

// Function to check if Supabase connection is working
export async function checkSupabaseConnection() {
  try {
    const { data, error } = await supabase.from('courses').select('*').limit(1);
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Supabase connection error:', error);
    return { success: false, error };
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

export async function fetchContentCreators() {
  const { data, error } = await supabase
    .from('content_creators')
    .select('*')
    .order('platform')
  
  if (error) {
    console.error('Error fetching content creators:', error)
    return []
  }
  
  return data || []
}

export async function fetchEvents(limit = 3) {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .gte('event_date', new Date().toISOString())
    .order('event_date', { ascending: true })
    .limit(limit)
  
  if (error) {
    console.error('Error fetching events:', error)
    return []
  }
  
  return data || []
}

export async function fetchBlogPosts(limit = 5) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*, authors(*)')
    .order('published_at', { ascending: false })
    .limit(limit)
  
  if (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
  
  return data || []
}

export async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()
  
  if (error) {
    console.error('Error fetching user profile:', error)
    return null
  }
  
  return data
}

export async function updateUserProfile(userId: string, updates: any) {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
  
  if (error) {
    console.error('Error updating user profile:', error)
    return null
  }
  
  return data
}

