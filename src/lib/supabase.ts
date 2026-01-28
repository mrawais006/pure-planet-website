import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Supabase URL and keys from environment
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Client for browser/client-side operations (uses anon key)
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Server client for API routes (uses service role key)
export function createServerClient(): SupabaseClient {
  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

// SQL schema for the leads table (run this in Supabase SQL editor)
export const LEADS_TABLE_SCHEMA = `
-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Location
  postcode VARCHAR(4) NOT NULL,
  is_victorian BOOLEAN DEFAULT TRUE,

  -- Eligibility
  income_bracket VARCHAR(50) NOT NULL,
  rebate_eligible BOOLEAN NOT NULL,

  -- Usage
  quarterly_bill INTEGER NOT NULL,
  daytime_usage_percent INTEGER NOT NULL,
  estimated_daily_kwh DECIMAL(10,2),

  -- Services
  interested_solar BOOLEAN DEFAULT FALSE,
  interested_battery BOOLEAN DEFAULT FALSE,
  interested_heatpump BOOLEAN DEFAULT FALSE,

  -- Contact
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  suburb VARCHAR(100),
  preferred_contact_time VARCHAR(20),

  -- Recommendation
  recommended_battery VARCHAR(50),
  estimated_annual_savings DECIMAL(10,2),

  -- Lead Scoring
  lead_score INTEGER DEFAULT 0,
  lead_status VARCHAR(20) DEFAULT 'new',

  -- Tracking
  utm_source VARCHAR(100),
  utm_medium VARCHAR(100),
  utm_campaign VARCHAR(100),
  ip_address VARCHAR(45),
  user_agent TEXT
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_rebate_eligible ON leads(rebate_eligible);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(lead_status);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_postcode ON leads(postcode);
`;
