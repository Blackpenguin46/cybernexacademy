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
          username: string | null
          full_name: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          updated_at?: string
        }
      }
      subscriptions: {
        Row: {
          id: string
          user_id: string
          plan_type: 'plus' | 'pro'
          status: 'active' | 'canceled' | 'past_due'
          stripe_customer_id: string
          stripe_subscription_id: string
          current_period_end: string
          created_at: string
          updated_at: string
        }
        Insert: {
          user_id: string
          plan_type: 'plus' | 'pro'
          status: 'active' | 'canceled' | 'past_due'
          stripe_customer_id: string
          stripe_subscription_id: string
          current_period_end: string
        }
        Update: {
          status?: 'active' | 'canceled' | 'past_due'
          current_period_end?: string
        }
      }
      user_progress: {
        Row: {
          id: string
          user_id: string
          content_id: string
          progress: number
          completed: boolean
          last_accessed: string
        }
        Insert: {
          user_id: string
          content_id: string
          progress?: number
          completed?: boolean
        }
        Update: {
          progress?: number
          completed?: boolean
          last_accessed?: string
        }
      }
      premium_content: {
        Row: {
          id: string
          title: string
          description: string | null
          content_url: string | null
          access_level: 'plus' | 'pro'
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          content_url?: string | null
          access_level: 'plus' | 'pro'
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          content_url?: string | null
          access_level?: 'plus' | 'pro'
          created_at?: string
        }
      }
    }
  }
} 