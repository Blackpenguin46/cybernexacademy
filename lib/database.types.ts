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
      courses: {
        Row: {
          id: string
          created_at: string
          title: string
          description: string
          image_url: string | null
          level: string
          duration: string
          category: string
          instructor: string
          price: number | null
          is_featured: boolean
          is_published: boolean
          slug: string
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          description: string
          image_url?: string | null
          level: string
          duration: string
          category: string
          instructor: string
          price?: number | null
          is_featured?: boolean
          is_published?: boolean
          slug: string
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          description?: string
          image_url?: string | null
          level?: string
          duration?: string
          category?: string
          instructor?: string
          price?: number | null
          is_featured?: boolean
          is_published?: boolean
          slug?: string
        }
        Relationships: [
          {
            foreignKeyName: "courses_instructor_id_fkey"
            columns: ["instructor_id"]
            isOneToOne: false
            referencedRelation: "content_creators"
            referencedColumns: ["id"]
          }
        ]
      }
      modules: {
        Row: {
          id: string
          created_at: string
          title: string
          description: string
          course_id: string
          order: number
          content: Json
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          description: string
          course_id: string
          order: number
          content: Json
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          description?: string
          course_id?: string
          order?: number
          content?: Json
        }
        Relationships: [
          {
            foreignKeyName: "modules_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          }
        ]
      }
      content_creators: {
        Row: {
          id: string
          name: string
          bio: string
          avatar_url: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          bio: string
          avatar_url?: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          bio?: string
          avatar_url?: string
          created_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          username: string | null
          full_name: string | null
          avatar_url: string | null
          bio: string | null
          website: string | null
          email: string | null
          role: string
        }
        Insert: {
          id: string
          created_at?: string
          updated_at?: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          website?: string | null
          email?: string | null
          role?: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          website?: string | null
          email?: string | null
          role?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      enrollments: {
        Row: {
          id: string
          created_at: string
          user_id: string
          course_id: string
          completed: boolean
          last_accessed: string | null
          progress: number
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          course_id: string
          completed?: boolean
          last_accessed?: string | null
          progress?: number
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string
          course_id?: string
          completed?: boolean
          last_accessed?: string | null
          progress?: number
        }
        Relationships: [
          {
            foreignKeyName: "enrollments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "enrollments_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          }
        ]
      }
      lessons: {
        Row: {
          id: string
          title: string
          content: string
          module_id: string
          order_index: number
          duration: string
          video_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          module_id: string
          order_index: number
          duration: string
          video_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          module_id?: string
          order_index?: number
          duration?: string
          video_url?: string | null
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "lessons_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "modules"
            referencedColumns: ["id"]
          }
        ]
      }
      progress_records: {
        Row: {
          id: string
          user_id: string
          lesson_id: string
          completed: boolean
          last_position: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          lesson_id: string
          completed?: boolean
          last_position?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          lesson_id?: string
          completed?: boolean
          last_position?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "progress_records_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "progress_records_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          }
        ]
      }
      events: {
        Row: {
          id: string
          title: string
          description: string
          start_date: string
          end_date: string
          location: string
          image_url: string | null
          organizer_id: string
          created_at: string
          slug: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          start_date: string
          end_date: string
          location: string
          image_url?: string | null
          organizer_id: string
          created_at?: string
          slug: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          start_date?: string
          end_date?: string
          location?: string
          image_url?: string | null
          organizer_id?: string
          created_at?: string
          slug?: string
        }
        Relationships: [
          {
            foreignKeyName: "events_organizer_id_fkey"
            columns: ["organizer_id"]
            isOneToOne: false
            referencedRelation: "content_creators"
            referencedColumns: ["id"]
          }
        ]
      }
      blog_posts: {
        Row: {
          id: string
          title: string
          content: string
          author_id: string
          published_at: string
          image_url: string | null
          created_at: string
          slug: string
          category: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          author_id: string
          published_at?: string
          image_url?: string | null
          created_at?: string
          slug: string
          category: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          author_id?: string
          published_at?: string
          image_url?: string | null
          created_at?: string
          slug?: string
          category?: string
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "content_creators"
            referencedColumns: ["id"]
          }
        ]
      }
      health_check: {
        Row: {
          id: number
          status: string
          timestamp: string
        }
        Insert: {
          id?: number
          status: string
          timestamp?: string
        }
        Update: {
          id?: number
          status?: string
          timestamp?: string
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
} 