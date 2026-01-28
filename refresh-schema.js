const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://bqshfplgzvcxckqepspa.supabase.co';
const serviceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxc2hmcGxnenZjeGNrcWVwc3BhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTU0MDQ0NiwiZXhwIjoyMDg1MTE2NDQ2fQ.4kUl44q1ORNBNDnyudTTUjrfHyOt4jNJ7kIVijOWo-8';

async function refreshSchema() {
  console.log('🔄 Attempting to refresh Supabase schema cache...\n');

  const supabase = createClient(supabaseUrl, serviceRoleKey);

  // Method 1: Try PostgREST schema cache reload endpoint
  console.log('Method 1: Using PostgREST reload endpoint...');

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/`, {
      method: 'POST',
      headers: {
        'apikey': serviceRoleKey,
        'Authorization': `Bearer ${serviceRoleKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'params=single-object'
      },
      body: JSON.stringify({ reload: true })
    });

    console.log('   Response status:', response.status);
  } catch (e) {
    console.log('   ⚠️  Method 1 failed');
  }

  // Method 2: Notify PostgREST via pg_notify
  console.log('\nMethod 2: Sending schema reload notification...');

  try {
    const { data, error } = await supabase.rpc('pgrst_watch', {});
    if (error) {
      console.log('   ⚠️  No pgrst_watch function');
    } else {
      console.log('   ✅ Notification sent');
    }
  } catch (e) {
    console.log('   ⚠️  Method 2 not available');
  }

  // Method 3: Query the table to force cache update
  console.log('\nMethod 3: Forcing cache update via query...\n');

  const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxc2hmcGxnenZjeGNrcWVwc3BhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1NDA0NDYsImV4cCI6MjA4NTExNjQ0Nn0.3uAY2IvcqSDwrY2YnQsQXsjMwf03xVhjg1zl0523l2o';

  // Wait a bit for cache to potentially update
  await new Promise(resolve => setTimeout(resolve, 2000));

  const anonClient = createClient(supabaseUrl, anonKey);

  const { data, error } = await anonClient
    .from('leads')
    .select('count', { count: 'exact', head: true });

  if (error) {
    console.log('❌ Schema cache still not updated');
    console.log('Error:', error.message, '\n');
    console.log('═══════════════════════════════════════════════════\n');
    console.log('🔍 DIAGNOSIS: The table needs proper setup in Supabase\n');
    console.log('The issue is that the table either:');
    console.log('  1. Does not exist yet (needs SQL execution)');
    console.log('  2. Exists but RLS policies are not configured');
    console.log('  3. Exists but PostgREST schema cache is stale\n');
    console.log('✅ SOLUTION: Run the SQL in Supabase Dashboard');
    console.log('   This will create the table AND configure it properly\n');
    console.log('📋 Quick Steps:');
    console.log('   1. Open: https://bqshfplgzvcxckqepspa.supabase.co/project/bqshfplgzvcxckqepspa/sql');
    console.log('   2. Copy-paste from: RUN_THIS_SQL.sql');
    console.log('   3. Click RUN\n');
    console.log('   This takes 30 seconds and fixes everything!\n');
    console.log('═══════════════════════════════════════════════════\n');
    return false;
  } else {
    console.log('✅ Schema cache is working!');
    console.log('✅ Table is accessible\n');
    return true;
  }
}

refreshSchema().then(success => {
  if (success) {
    console.log('🚀 Database is ready! Test your form now.\n');
  }
  process.exit(success ? 0 : 1);
});
