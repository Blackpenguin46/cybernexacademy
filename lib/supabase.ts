import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types';

// Check if Supabase URL and key are available
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://example.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'example-key';

// Create a Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
    console.error('Sign in error:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
}

// Sign up with email and password
export async function signUp(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || window.location.origin}/auth/verify-email`,
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
        console.error('Error creating user profile:', profileError)
      }
    }

    return { success: true, user: data.user }
  } catch (error) {
    console.error('Sign up error:', error)
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

