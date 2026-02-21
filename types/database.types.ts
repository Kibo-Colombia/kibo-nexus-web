export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export type Database = {
    public: {
        Tables: {
            budgets: {
                Row: {
                    amount: number
                    category: string
                    created_at: string | null
                    id: string
                    month: number
                    target: string
                    updated_at: string | null
                    user_id: string
                    year: number
                }
                Insert: {
                    amount: number
                    category: string
                    created_at?: string | null
                    id?: string
                    month: number
                    target: string
                    updated_at?: string | null
                    user_id: string
                    year: number
                }
                Update: {
                    amount?: number
                    category?: string
                    created_at?: string | null
                    id?: string
                    month?: number
                    target?: string
                    updated_at?: string | null
                    user_id?: string
                    year?: number
                }
                Relationships: []
            }
            expenses: {
                Row: {
                    category: string
                    context: string | null
                    created_at: string | null
                    date: string
                    feeling: number | null
                    feeling_review: number | null
                    id: string
                    item: string | null
                    location: string | null
                    method: string | null
                    month: number
                    shop: string | null
                    target: string
                    updated_at: string | null
                    user_id: string
                    value: number
                    year: number
                }
                Insert: {
                    category: string
                    context?: string | null
                    created_at?: string | null
                    date: string
                    feeling?: number | null
                    feeling_review?: number | null
                    id?: string
                    item?: string | null
                    location?: string | null
                    method?: string | null
                    month: number
                    shop?: string | null
                    target: string
                    updated_at?: string | null
                    user_id: string
                    value: number
                    year: number
                }
                Update: {
                    category?: string
                    context?: string | null
                    created_at?: string | null
                    date?: string
                    feeling?: number | null
                    feeling_review?: number | null
                    id?: string
                    item?: string | null
                    location?: string | null
                    method?: string | null
                    month?: number
                    shop?: string | null
                    target?: string
                    updated_at?: string | null
                    user_id?: string
                    value?: number
                    year?: number
                }
                Relationships: []
            }
            profiles: {
                Row: {
                    avatar_url: string | null
                    created_at: string | null
                    currency: string | null
                    display_name: string | null
                    email: string | null
                    fuel_category: string | null
                    fuel_details: string | null
                    full_name: string | null
                    id: string
                    identity_details: string | null
                    identity_goal: string | null
                    leak_category: string | null
                    leak_details: string | null
                    preferred_locale: string | null
                    updated_at: string | null
                    username: string | null
                    website: string | null
                }
                Insert: {
                    avatar_url?: string | null
                    created_at?: string | null
                    currency?: string | null
                    display_name?: string | null
                    email?: string | null
                    fuel_category?: string | null
                    fuel_details?: string | null
                    full_name?: string | null
                    id: string
                    identity_details?: string | null
                    identity_goal?: string | null
                    leak_category?: string | null
                    leak_details?: string | null
                    preferred_locale?: string | null
                    updated_at?: string | null
                    username?: string | null
                    website?: string | null
                }
                Update: {
                    avatar_url?: string | null
                    created_at?: string | null
                    currency?: string | null
                    display_name?: string | null
                    email?: string | null
                    fuel_category?: string | null
                    fuel_details?: string | null
                    full_name?: string | null
                    id?: string
                    identity_details?: string | null
                    identity_goal?: string | null
                    leak_category?: string | null
                    leak_details?: string | null
                    preferred_locale?: string | null
                    updated_at?: string | null
                    username?: string | null
                    website?: string | null
                }
                Relationships: []
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
