export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {}
    Views: {}
    Functions: {}
    Enums: {}
    CompositeTypes: {}
  }
  saeturtle: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string | null
          role: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          full_name?: string | null
          role?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          role?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      households: {
        Row: {
          id: string
          owner_id: string
          name: string
          created_at: string
        }
        Insert: {
          id?: string
          owner_id: string
          name: string
          created_at?: string
        }
        Update: {
          id?: string
          owner_id?: string
          name?: string
          created_at?: string
        }
        Relationships: []
      }
      household_members: {
        Row: {
          id: string
          household_id: string
          user_id: string
          role: string
          created_at: string
        }
        Insert: {
          id?: string
          household_id: string
          user_id: string
          role?: string
          created_at?: string
        }
        Update: {
          id?: string
          household_id?: string
          user_id?: string
          role?: string
          created_at?: string
        }
        Relationships: []
      }
      children: {
        Row: {
          id: string
          household_id: string
          name: string
          birth_date: string | null
          stage: string | null
          notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          household_id: string
          name: string
          birth_date?: string | null
          stage?: string | null
          notes?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          household_id?: string
          name?: string
          birth_date?: string | null
          stage?: string | null
          notes?: string | null
          created_at?: string
        }
        Relationships: []
      }
      routines: {
        Row: {
          id: string
          child_id: string
          type: string
          title: string
          details: string | null
          scheduled_time: string | null
          created_by: string | null
          created_at: string
        }
        Insert: {
          id?: string
          child_id: string
          type: string
          title: string
          details?: string | null
          scheduled_time?: string | null
          created_by?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          child_id?: string
          type?: string
          title?: string
          details?: string | null
          scheduled_time?: string | null
          created_by?: string | null
          created_at?: string
        }
        Relationships: []
      }
      caregiver_notes: {
        Row: {
          id: string
          child_id: string
          author_id: string | null
          title: string | null
          body: string
          created_at: string
        }
        Insert: {
          id?: string
          child_id: string
          author_id?: string | null
          title?: string | null
          body: string
          created_at?: string
        }
        Update: {
          id?: string
          child_id?: string
          author_id?: string | null
          title?: string | null
          body?: string
          created_at?: string
        }
        Relationships: []
      }
      recommendations: {
        Row: {
          id: string
          stage: string
          category: string
          title: string
          description: string | null
          affiliate_url: string | null
          image_url: string | null
          is_featured: boolean
          created_at: string
        }
        Insert: {
          id?: string
          stage: string
          category: string
          title: string
          description?: string | null
          affiliate_url?: string | null
          image_url?: string | null
          is_featured?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          stage?: string
          category?: string
          title?: string
          description?: string | null
          affiliate_url?: string | null
          image_url?: string | null
          is_featured?: boolean
          created_at?: string
        }
        Relationships: []
      }
      waitlist: {
        Row: {
          id: string
          email: string
          parent_stage: string | null
          interest: string[] | null
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          parent_stage?: string | null
          interest?: string[] | null
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          parent_stage?: string | null
          interest?: string[] | null
          created_at?: string
        }
        Relationships: []
      }
    }
    Views: {}
    Functions: {}
    Enums: {}
    CompositeTypes: {}
  }
}
