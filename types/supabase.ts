export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      user_profiles: {
        Row: {
          id: string
          full_name: string | null
          username: string | null
          avatar_url: string | null
          website: string | null
          updated_at: string | null
        }
        Insert: {
          id: string
          full_name?: string | null
          username?: string | null
          avatar_url?: string | null
          website?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          full_name?: string | null
          username?: string | null
          avatar_url?: string | null
          website?: string | null
          updated_at?: string | null
        }
      }
      subscriptions: {
        Row: {
          id: string
          user_id: string
          status: string
          plan: string
          current_period_end: string
          created_at: string
        }
        Insert: {
          id: string
          user_id: string
          status: string
          plan: string
          current_period_end: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          status?: string
          plan?: string
          current_period_end?: string
          created_at?: string
        }
      }
      courses: {
        Row: {
          id: string
          title: string
          description: string
          image_url: string | null
          slug: string
          is_premium: boolean
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          image_url?: string | null
          slug: string
          is_premium: boolean
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          image_url?: string | null
          slug?: string
          is_premium?: boolean
          created_at?: string
        }
      }
      course_progress: {
        Row: {
          id: string
          user_id: string
          course_id: string
          progress: number
          completed: boolean
          last_accessed: string
        }
        Insert: {
          id?: string
          user_id: string
          course_id: string
          progress: number
          completed: boolean
          last_accessed: string
        }
        Update: {
          id?: string
          user_id?: string
          course_id?: string
          progress?: number
          completed?: boolean
          last_accessed?: string
        }
      }
      topics: {
        Row: {
          id: string
          title: string
          content: string
          domain: string
          order: number
        }
        Insert: {
          id?: string
          title: string
          content: string
          domain: string
          order: number
        }
        Update: {
          id?: string
          title?: string
          content?: string
          domain?: string
          order?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 