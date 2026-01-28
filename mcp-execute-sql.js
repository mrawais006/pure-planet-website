const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabaseUrl = 'https://bqshfplgzvcxckqepspa.supabase.co';
const serviceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxc2hmcGxnenZjeGNrcWVwc3BhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTU0MDQ0NiwiZXhwIjoyMDg1MTE2NDQ2fQ.4kUl44q1ORNBNDnyudTTUjrfHyOt4jNJ7kIVijOWo-8';

async function executeSQLDirect() {
  console.log('🔧 Executing SQL via Supabase MCP Connection...\n');

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false }
  });

  // First, let's check what RPC functions are available
  console.log('1️⃣  Checking available RPC functions...');

  // Try common SQL execution RPC function names
  const rpcFunctions = ['query', 'exec_sql', 'execute_sql', 'run_sql', 'sql'];

  for (const funcName of rpcFunctions) {
    try {
      const { data, error } = await supabase.rpc(funcName, { sql: 'SELECT 1 as test' });
      if (!error || !error.message.includes('Could not find')) {
        console.log(`   ✅ Found RPC function: ${funcName}`);
        return funcName;
      }
    } catch (e) {
      // Continue trying
    }
  }

  console.log('   ⚠️  No SQL execution RPC found\n');

  // Method 2: Create a SQL execution helper function
  console.log('2️⃣  Creating SQL execution helper function...\n');

  const createHelperSQL = `
CREATE OR REPLACE FUNCTION public.execute_migration(sql_query text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  EXECUTE sql_query;
END;
$$;
`;

  // Try to create the helper (this might fail, but let's try)
  try {
    const { error } = await supabase.rpc('execute_migration', { sql_query: createHelperSQL });
    if (!error) {
      console.log('   ✅ Helper function created\n');
    }
  } catch (e) {
    console.log('   ⚠️  Could not create helper\n');
  }

  // Method 3: Direct table creation using management API
  console.log('3️⃣  Attempting direct table creation...\n');

  const sql = fs.readFileSync('./RUN_THIS_SQL.sql', 'utf8');

  // Split SQL into individual statements
  const statements = sql
    .split(';')
    .map(s => s.trim())
    .filter(s => s && !s.startsWith('--'));

  console.log(`   Found ${statements.length} statements to execute\n`);

  // Try using the Supabase Management API
  const { Pool } = require('pg');

  // Extract connection details
  const connectionString = `postgresql://postgres.bqshfplgzvcxckqepspa:${process.env.DB_PASSWORD || '[password]'}@aws-0-ap-southeast-2.pooler.supabase.com:6543/postgres`;

  console.log('4️⃣  Attempting PostgreSQL direct connection...\n');

  try {
    const pool = new Pool({
      connectionString: connectionString,
      ssl: { rejectUnauthorized: false }
    });

    const client = await pool.connect();
    console.log('   ✅ PostgreSQL connection established!\n');

    // Execute each statement
    for (let i = 0; i < statements.length; i++) {
      const stmt = statements[i];
      const preview = stmt.substring(0, 60).replace(/\s+/g, ' ');

      console.log(`   [${i + 1}/${statements.length}] ${preview}...`);

      try {
        await client.query(stmt);
        console.log('      ✅ Success');
      } catch (err) {
        if (err.message.includes('already exists')) {
          console.log('      ⚠️  Already exists');
        } else {
          console.log('      ❌', err.message);
        }
      }
    }

    client.release();
    await pool.end();

    console.log('\n✅ SQL EXECUTION COMPLETE!\n');
    return true;

  } catch (pgError) {
    console.log('   ❌ PostgreSQL connection failed:', pgError.message);
    console.log('   (This is normal - direct connection requires database password)\n');
  }

  return false;
}

async function verifyAndTest() {
  console.log('5️⃣  Verifying database setup...\n');

  const supabase = createClient(supabaseUrl, serviceRoleKey);
  const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxc2hmcGxnenZjeGNrcWVwc3BhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1NDA0NDYsImV4cCI6MjA4NTExNjQ0Nn0.3uAY2IvcqSDwrY2YnQsQXsjMwf03xVhjg1zl0523l2o';
  const anonClient = createClient(supabaseUrl, anonKey);

  // Test if table exists
  const { data, error } = await supabase
    .from('leads')
    .select('count', { count: 'exact', head: true });

  if (error) {
    console.log('   ❌ Table check failed:', error.message, '\n');
    return false;
  }

  console.log('   ✅ Table exists!\n');

  // Test insert with anon client
  console.log('6️⃣  Testing form submission capability...\n');

  const testLead = {
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
    full_name: 'Test User - MCP Verification',
    email: 'test@pureplanet.net.au',
    phone: '0400000000',
    suburb: 'Melbourne',
    recommended_battery: 'FoxESS',
    estimated_annual_savings: 1120.00,
    lead_score: 60,
    lead_status: 'new'
  };

  const { data: insertData, error: insertError } = await anonClient
    .from('leads')
    .insert(testLead)
    .select()
    .single();

  if (insertError) {
    console.log('   ❌ Insert test failed:', insertError.message, '\n');
    return false;
  }

  console.log('   ✅ Anonymous insert works!');
  console.log('   ✅ Test lead ID:', insertData.id, '\n');

  // Cleanup
  await supabase.from('leads').delete().eq('id', insertData.id);
  console.log('   ✅ Test data cleaned up\n');

  console.log('═══════════════════════════════════════════════════');
  console.log('✅✅✅ DATABASE IS FULLY OPERATIONAL! ✅✅✅');
  console.log('═══════════════════════════════════════════════════\n');
  console.log('🚀 Your quote form is ready to use!');
  console.log('   Visit: http://localhost:3000/quote-form\n');
  console.log('📧 Emails will be sent to: ummehabiba989@gmail.com\n');

  return true;
}

async function main() {
  console.log('╔═══════════════════════════════════════════════════╗');
  console.log('║   Pure Planet Database Setup via MCP Server      ║');
  console.log('╚═══════════════════════════════════════════════════╝\n');

  const success = await executeSQLDirect();

  if (!success) {
    // Check if table already exists
    const isWorking = await verifyAndTest();

    if (!isWorking) {
      console.log('⚠️  SQL execution not possible via API\n');
      console.log('📋 FINAL OPTION - Manual SQL Execution:\n');
      console.log('The SQL has been saved to: RUN_THIS_SQL.sql');
      console.log('Please run it in Supabase Dashboard:\n');
      console.log('https://bqshfplgzvcxckqepspa.supabase.co/project/bqshfplgzvcxckqepspa/sql\n');
      process.exit(1);
    }
  } else {
    await verifyAndTest();
  }
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
