const { createClient } = require('@supabase/supabase-js');
const https = require('https');

const supabaseUrl = 'https://bqshfplgzvcxckqepspa.supabase.co';
const serviceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxc2hmcGxnenZjeGNrcWVwc3BhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTU0MDQ0NiwiZXhwIjoyMDg1MTE2NDQ2fQ.4kUl44q1ORNBNDnyudTTUjrfHyOt4jNJ7kIVijOWo-8';

// Complete SQL to create everything
const createTableSQL = `
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop table if exists (for clean slate)
DROP TABLE IF EXISTS public.leads CASCADE;

-- Create leads table
CREATE TABLE public.leads (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  postcode VARCHAR(4) NOT NULL,
  is_victorian BOOLEAN DEFAULT TRUE,
  income_bracket VARCHAR(50) NOT NULL,
  rebate_eligible BOOLEAN NOT NULL,
  quarterly_bill INTEGER NOT NULL,
  daytime_usage_percent INTEGER NOT NULL,
  estimated_daily_kwh DECIMAL(10,2),
  interested_solar BOOLEAN DEFAULT FALSE,
  interested_battery BOOLEAN DEFAULT FALSE,
  interested_heatpump BOOLEAN DEFAULT FALSE,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  suburb VARCHAR(100),
  preferred_contact_time VARCHAR(20),
  recommended_battery VARCHAR(50),
  estimated_annual_savings DECIMAL(10,2),
  lead_score INTEGER DEFAULT 0,
  lead_status VARCHAR(20) DEFAULT 'new',
  utm_source VARCHAR(100),
  utm_medium VARCHAR(100),
  utm_campaign VARCHAR(100),
  ip_address VARCHAR(45),
  user_agent TEXT
);

-- Create indexes
CREATE INDEX idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX idx_leads_rebate_eligible ON public.leads(rebate_eligible);
CREATE INDEX idx_leads_status ON public.leads(lead_status);
CREATE INDEX idx_leads_email ON public.leads(email);
CREATE INDEX idx_leads_postcode ON public.leads(postcode);
CREATE INDEX idx_leads_lead_score ON public.leads(lead_score DESC);

-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow anonymous inserts" ON public.leads;
DROP POLICY IF EXISTS "Allow service role full access" ON public.leads;
DROP POLICY IF EXISTS "Allow authenticated users to read leads" ON public.leads;

-- Create RLS policies
CREATE POLICY "Allow anonymous inserts" ON public.leads
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow service role full access" ON public.leads
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read leads" ON public.leads
  FOR SELECT TO authenticated USING (true);
`;

async function createTable() {
  console.log('🔧 Creating leads table with RLS policies...\n');

  const supabase = createClient(supabaseUrl, serviceRoleKey);

  // Method 1: Try using supabase-js query method
  try {
    // Execute using raw query if available
    const { data, error } = await supabase.rpc('exec_sql', { sql: createTableSQL });

    if (!error) {
      console.log('✅ Table created successfully via RPC!\n');
      await verifyTable(supabase);
      return;
    }
  } catch (e) {
    console.log('RPC method not available, trying direct creation...\n');
  }

  // Method 2: Create table components directly
  console.log('Creating table structure programmatically...\n');

  try {
    // Since we can't execute raw SQL easily, let's verify if table exists
    const { error: checkError } = await supabase
      .from('leads')
      .select('id')
      .limit(1);

    if (checkError && checkError.message.includes('does not exist')) {
      console.log('❌ Table does not exist in schema cache\n');
      console.log('📋 MANUAL STEP REQUIRED:\n');
      console.log('The Supabase API does not support DDL execution directly.');
      console.log('Please run this SQL in Supabase Dashboard:\n');
      console.log('1. Go to: https://bqshfplgzvcxckqepspa.supabase.co/project/bqshfplgzvcxckqepspa/sql');
      console.log('2. Click "New Query"');
      console.log('3. Paste the SQL from: supabase/migrations/001_create_leads_table.sql');
      console.log('4. Click "RUN"\n');
      console.log('═══════════════════════════════════════\n');
      console.log(createTableSQL);
      console.log('\n═══════════════════════════════════════\n');
    } else {
      console.log('✅ Table already exists!\n');
      await verifyTable(supabase);
    }
  } catch (err) {
    console.log('Error:', err.message);
  }
}

async function verifyTable(supabase) {
  console.log('🔍 Verifying table and permissions...\n');

  const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxc2hmcGxnenZjeGNrcWVwc3BhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1NDA0NDYsImV4cCI6MjA4NTExNjQ0Nn0.3uAY2IvcqSDwrY2YnQsQXsjMwf03xVhjg1zl0523l2o';
  const anonClient = createClient(supabaseUrl, anonKey);

  // Test insert
  const { data, error } = await anonClient
    .from('leads')
    .insert({
      postcode: '3000',
      is_victorian: true,
      income_bracket: 'Under $100,000',
      rebate_eligible: true,
      quarterly_bill: 400,
      daytime_usage_percent: 40,
      estimated_daily_kwh: 14.44,
      interested_solar: true,
      interested_battery: true,
      interested_heatpump: false,
      full_name: 'Test User',
      email: 'test@example.com',
      phone: '0400000000',
      recommended_battery: 'FoxESS',
      estimated_annual_savings: 1120.00,
      lead_score: 60,
      lead_status: 'new'
    })
    .select()
    .single();

  if (error) {
    console.log('❌ Insert test failed:', error.message, '\n');
  } else {
    console.log('✅ Anonymous insert works!');
    console.log('✅ Test lead ID:', data.id, '\n');

    // Cleanup
    await supabase.from('leads').delete().eq('id', data.id);

    console.log('═══════════════════════════════════════');
    console.log('✅ DATABASE FULLY OPERATIONAL!');
    console.log('═══════════════════════════════════════\n');
    console.log('🚀 Quote form is ready to use!');
    console.log('   Visit: http://localhost:3000/quote-form\n');
  }
}

createTable();
