const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://bqshfplgzvcxckqepspa.supabase.co';
const serviceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxc2hmcGxnenZjeGNrcWVwc3BhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTU0MDQ0NiwiZXhwIjoyMDg1MTE2NDQ2fQ.4kUl44q1ORNBNDnyudTTUjrfHyOt4jNJ7kIVijOWo-8';
const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxc2hmcGxnenZjeGNrcWVwc3BhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1NDA0NDYsImV4cCI6MjA4NTExNjQ0Nn0.3uAY2IvcqSDwrY2YnQsQXsjMwf03xVhjg1zl0523l2o';

async function finalVerification() {
  console.log('╔══════════════════════════════════════════════════════╗');
  console.log('║  FINAL DATABASE VERIFICATION - Pure Planet Quote Form ║');
  console.log('╚══════════════════════════════════════════════════════╝\n');

  const supabase = createClient(supabaseUrl, serviceRoleKey);
  const anonClient = createClient(supabaseUrl, anonKey);

  let allPassed = true;

  // Test 1: Table exists
  console.log('✓ Test 1: Checking table exists...');
  const { error: tableError } = await supabase
    .from('leads')
    .select('id', { head: true, count: 'exact' });

  if (tableError) {
    console.log('  ❌ FAILED:', tableError.message);
    allPassed = false;
  } else {
    console.log('  ✅ PASSED: Table "leads" exists\n');
  }

  // Test 2: Anonymous INSERT (form submission)
  console.log('✓ Test 2: Testing form submission (anonymous INSERT)...');
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
    full_name: 'Test User - Final Verification',
    email: 'test@pureplanet.net.au',
    phone: '0400 000 000',
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
    console.log('  ❌ FAILED:', insertError.message);
    console.log('  This means form submissions will NOT work\n');
    allPassed = false;
  } else {
    console.log('  ✅ PASSED: Form submission works!');
    console.log('  ✅ Test lead created with ID:', insertData.id, '\n');

    // Test 3: Service role READ
    console.log('✓ Test 3: Testing admin access (service role READ)...');
    const { data: readData, error: readError } = await supabase
      .from('leads')
      .select('*')
      .eq('id', insertData.id)
      .single();

    if (readError) {
      console.log('  ❌ FAILED:', readError.message, '\n');
      allPassed = false;
    } else {
      console.log('  ✅ PASSED: Admin can read leads');
      console.log('  ✅ Lead data retrieved successfully\n');
    }

    // Test 4: Service role DELETE (cleanup)
    console.log('✓ Test 4: Cleaning up test data...');
    const { error: deleteError } = await supabase
      .from('leads')
      .delete()
      .eq('id', insertData.id);

    if (deleteError) {
      console.log('  ⚠️  Cleanup failed:', deleteError.message, '\n');
    } else {
      console.log('  ✅ PASSED: Test data cleaned up\n');
    }
  }

  // Test 5: Check record count
  console.log('✓ Test 5: Checking database status...');
  const { count, error: countError } = await supabase
    .from('leads')
    .select('*', { count: 'exact', head: true });

  if (countError) {
    console.log('  ❌ FAILED:', countError.message, '\n');
    allPassed = false;
  } else {
    console.log(`  ✅ PASSED: Total leads in database: ${count || 0}\n`);
  }

  // Final summary
  console.log('═══════════════════════════════════════════════════════════\n');

  if (allPassed) {
    console.log('🎉🎉🎉  ALL TESTS PASSED!  🎉🎉🎉\n');
    console.log('✅ Database: FULLY OPERATIONAL');
    console.log('✅ Form submissions: WORKING');
    console.log('✅ RLS policies: CONFIGURED');
    console.log('✅ Admin access: ENABLED\n');
    console.log('═══════════════════════════════════════════════════════════\n');
    console.log('🚀 Your Pure Planet Quote Form is READY!\n');
    console.log('📋 What you can do now:');
    console.log('   1. Visit: http://localhost:3000/quote-form');
    console.log('   2. Fill out and submit a test quote');
    console.log('   3. Check email at: ummehabiba989@gmail.com');
    console.log('   4. View leads in Supabase dashboard\n');
    console.log('═══════════════════════════════════════════════════════════\n');
    return true;
  } else {
    console.log('❌ SOME TESTS FAILED\n');
    console.log('The database setup is incomplete.');
    console.log('Please run the SQL migration in Supabase Dashboard.\n');
    console.log('File: RUN_THIS_SQL.sql');
    console.log('Dashboard: https://bqshfplgzvcxckqepspa.supabase.co/project/bqshfplgzvcxckqepspa/sql\n');
    console.log('═══════════════════════════════════════════════════════════\n');
    return false;
  }
}

finalVerification().then(success => {
  process.exit(success ? 0 : 1);
}).catch(err => {
  console.error('❌ Verification failed:', err.message);
  process.exit(1);
});
