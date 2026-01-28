-- Migration: Create leads table for Pure Planet Quote Form
-- Run this in your Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create leads table
CREATE TABLE IF NOT EXISTS public.leads (
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
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_rebate_eligible ON public.leads(rebate_eligible);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(lead_status);
CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_postcode ON public.leads(postcode);
CREATE INDEX IF NOT EXISTS idx_leads_lead_score ON public.leads(lead_score DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow insert from anonymous users (for form submissions)
CREATE POLICY "Allow anonymous inserts" ON public.leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow service role full access
CREATE POLICY "Allow service role full access" ON public.leads
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Create policy to allow authenticated users to read all leads (for admin dashboard)
CREATE POLICY "Allow authenticated users to read leads" ON public.leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Comment on table
COMMENT ON TABLE public.leads IS 'Leads from Pure Planet Quote Form - stores customer inquiries and quote requests';

-- Comments on important columns
COMMENT ON COLUMN public.leads.lead_score IS 'Score 0-100 based on qualification criteria';
COMMENT ON COLUMN public.leads.lead_status IS 'Status: new, contacted, qualified, quoted, won, lost';
COMMENT ON COLUMN public.leads.rebate_eligible IS 'True if household income <= $210,000';
COMMENT ON COLUMN public.leads.recommended_battery IS 'FoxESS or NeoVolt based on usage';
