// src/lib/supabase/database.types.ts
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
      quote_requests: {
        Row: {
          id: string
          created_at: string
          company_name: string
          contact_name: string
          email: string
          phone: string
          service_type: string
          origin: string
          destination: string
          cargo_type: string
          cargo_weight: number | null
          description: string | null
          status: 'new' | 'contacted' | 'negotiating' | 'won' | 'lost'
          notes: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          company_name: string
          contact_name: string
          email: string
          phone: string
          service_type: string
          origin: string
          destination: string
          cargo_type: string
          cargo_weight?: number | null
          description?: string | null
          status?: 'new' | 'contacted' | 'negotiating' | 'won' | 'lost'
          notes?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          company_name?: string
          contact_name?: string
          email?: string
          phone?: string
          service_type?: string
          origin?: string
          destination?: string
          cargo_type?: string
          cargo_weight?: number | null
          description?: string | null
          status?: 'new' | 'contacted' | 'negotiating' | 'won' | 'lost'
          notes?: string | null
        }
      }
      contacts: {
        Row: {
          id: string
          created_at: string
          quote_request_id: string | null
          name: string
          email: string
          message: string
          is_read: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          quote_request_id?: string | null
          name: string
          email: string
          message: string
          is_read?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          quote_request_id?: string | null
          name?: string
          email?: string
          message?: string
          is_read?: boolean
        }
      }
    }
    Views: {}
    Functions: {}
    Enums: {}
  }
}