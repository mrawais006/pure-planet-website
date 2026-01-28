const https = require('https');
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const projectRef = 'bqshfplgzvcxckqepspa';
const supabaseUrl = `https://${projectRef}.supabase.co`;
const serviceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxc2hmcGxnenZjeGNrcWVwc3BhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTU0MDQ0NiwiZXhwIjoyMDg1MTE2NDQ2fQ.4kUl44q1ORNBNDnyudTTUjrfHyOt4jNJ7kIVijOWo-8';

console.log('🔧 Setting up database via Supabase API...\n');

// Read the SQL file
const sql = fs.readFileSync('./supabase/migrations/001_create_leads_table.sql', 'utf8');

// Try to execute SQL via Supabase database webhook/function
const payload = JSON.stringify({ query: sql });

const options = {
  hostname: `${projectRef}.supabase.co`,
  port: 443,
  path: '/rest/v1/rpc/exec',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': payload.length,
    'apikey': serviceRoleKey,
    'Authorization': `Bearer ${serviceRoleKey}`,
    'Prefer': 'return=minimal'
  }
};

console.log('📡 Attempting to execute SQL via Supabase API...\n');

const req = https.request(options, async (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', async () => {
    console.log(`Status: ${res.statusCode}`);

    if (res.statusCode === 404) {
      console.log('⚠️  RPC endpoint not available\n');
      console.log('📝 Creating table using direct SQL copy-paste method:\n');
      console.log('═══════════════════════════════════════════════════════════\n');
      console.log('COPY THIS SQL AND RUN IT IN SUPABASE DASHBOARD:\n');
      console.log('https://bqshfplgzvcxckqepspa.supabase.co/project/bqshfplgzvcxckqepspa/sql\n');
      console.log('═══════════════════════════════════════════════════════════\n');
      console.log(sql);
      console.log('\n═══════════════════════════════════════════════════════════\n');

      // Also save to a simple file for easy access
      fs.writeFileSync('RUN_THIS_SQL.sql', sql);
      console.log('✅ SQL saved to: RUN_THIS_SQL.sql\n');
      console.log('📋 Steps:');
      console.log('1. Open: https://bqshfplgzvcxckqepspa.supabase.co/project/bqshfplgzvcxckqepspa/sql');
      console.log('2. Click "New Query"');
      console.log('3. Copy-paste from RUN_THIS_SQL.sql');
      console.log('4. Click "RUN" button\n');
    } else if (res.statusCode >= 200 && res.statusCode < 300) {
      console.log('✅ SQL executed successfully!\n');
      await verifySetup();
    } else {
      console.log('Response:', data, '\n');
      await attemptDirectCreation();
    }
  });
});

req.on('error', async (error) => {
  console.log('❌ HTTP Request failed:', error.message, '\n');
  await attemptDirectCreation();
});

req.write(payload);
req.end();

async function attemptDirectCreation() {
  console.log('📝 Attempting alternative creation method...\n');

  const supabase = createClient(supabaseUrl, serviceRoleKey);

  // Check current state
  const { data, error } = await supabase
    .from('leads')
    .select('id', { count: 'exact', head: true });

  if (error && error.message.includes('does not exist')) {
    console.log('⚠️  Table does not exist yet\n');
    console.log('📋 PLEASE RUN THE SQL MANUALLY:\n');
    console.log('File created: RUN_THIS_SQL.sql');
    console.log('Dashboard: https://bqshfplgzvcxckqepspa.supabase.co/project/bqshfplgzvcxckqepspa/sql\n');
  } else if (error) {
    console.log('Error:', error.message, '\n');
  } else {
    console.log('✅ Table already exists!\n');
    await verifySetup();
  }
}

async function verifySetup() {
  console.log('🔍 Verifying database setup...\n');

  const supabase = createClient(supabaseUrl, serviceRoleKey);
  const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxc2hmcGxnenZjeGNrcWVwc3BhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1NDA0NDYsImV4cCI6MjA4NTExNjQ0Nn0.3uAY2IvcqSDwrY2YnQsQXsjMwf03xVhjg1zl0523l2o';
  const anonClient = createClient(supabaseUrl, anonKey);

  // Test anonymous insert
  const testData = {
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
    full_name: 'Test User - Setup Verification',
    email: 'test@pureplanet.net.au',
    phone: '0400000000',
    suburb: 'Melbourne',
    recommended_battery: 'FoxESS',
    estimated_annual_savings: 1120.00,
    lead_score: 60,
    lead_status: 'new'
  };

  const { data, error } = await anonClient
    .from('leads')
    .insert(testData)
    .select()
    .single();

  if (error) {
    console.log('❌ Form submission test failed:', error.message, '\n');
    console.log('This means the table or RLS policies are not set up correctly.\n');
  } else {
    console.log('✅ Form submissions work perfectly!');
    console.log('✅ Test lead created:', data.id, '\n');

    // Cleanup
    await supabase.from('leads').delete().eq('id', data.id);
    console.log('✅ Test data cleaned up\n');

    console.log('═══════════════════════════════════════');
    console.log('✅ DATABASE IS FULLY OPERATIONAL!');
    console.log('═══════════════════════════════════════\n');
    console.log('🚀 Your quote form is ready!');
    console.log('   Refresh: http://localhost:3000/quote-form\n');
    process.exit(0);
  }
}
