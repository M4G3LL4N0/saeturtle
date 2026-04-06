export interface Database {
  public: {
    Tables: {
      waitlist: {
        Row: {
          id: string
          email: string
          created_at: string
        }
        Insert: {
          email: string
        }
        Update: {
          email?: string
        }
      }
      recommendations: {
        Row: {
          id: string
          age_group: string
          category: string
          title: string
          description: string
          created_at: string
        }
        Insert: {
          age_group: string
          category: string
          title: string
          description: string
        }
        Update: {
          age_group?: string
          category?: string
          title?: string
          description?: string
        }
      }
    }
  }
}
