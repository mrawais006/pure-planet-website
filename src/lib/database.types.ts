// TypeScript types for Supabase database

export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'quoted' | 'won' | 'lost';

export type IncomeBracket =
  | 'under_100k'
  | '100k_150k'
  | '150k_210k'
  | 'over_210k';

export interface Lead {
  id: string;
  created_at: string;

  // Location
  postcode: string;
  is_victorian: boolean;

  // Eligibility
  income_bracket: string;
  rebate_eligible: boolean;

  // Usage
  quarterly_bill: number;
  daytime_usage_percent: number;
  estimated_daily_kwh: number | null;

  // Services
  interested_solar: boolean;
  interested_battery: boolean;
  interested_heatpump: boolean;

  // Contact
  full_name: string;
  email: string;
  phone: string;
  suburb: string | null;
  preferred_contact_time: string | null;

  // Recommendation
  recommended_battery: string | null;
  estimated_annual_savings: number | null;

  // Lead Scoring
  lead_score: number;
  lead_status: LeadStatus;

  // Tracking
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  ip_address: string | null;
  user_agent: string | null;
}

export type LeadInsert = Omit<Lead, 'id' | 'created_at'> & {
  id?: string;
  created_at?: string;
};

export type LeadUpdate = Partial<Omit<Lead, 'id'>>;

export interface Database {
  public: {
    Tables: {
      leads: {
        Row: Lead;
        Insert: LeadInsert;
        Update: LeadUpdate;
      };
    };
  };
}
