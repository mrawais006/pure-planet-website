# 🔧 Database Setup Instructions for Pure Planet Quote Form

## Current Status
- ✅ Supabase connection: **WORKING**
- ⚠️ Database table: **Needs proper migration**
- ⚠️ RLS policies: **Not configured yet**

## ⚡ Quick Setup (Choose ONE method)

### Method 1: Using Cursor MCP Supabase Server (RECOMMENDED for you)

Since you have the MCP Supabase server installed in Cursor, you can ask Cursor to execute the migration:

1. Open the file: `supabase/migrations/001_create_leads_table.sql`
2. Ask Cursor: **"Execute this SQL migration on my Supabase database"**
3. Cursor's MCP server will run all the SQL commands automatically

### Method 2: Supabase Dashboard (Manual)

1. Go to: https://bqshfplgzvcxckqepspa.supabase.co
2. Click **"SQL Editor"** in the left sidebar
3. Click **"New Query"**
4. Copy the entire contents from: `supabase/migrations/001_create_leads_table.sql`
5. Paste into the editor
6. Click **"Run"** (or press Ctrl+Enter)

### Method 3: Using Supabase CLI (If installed)

```bash
cd "D:\Projetcs\Pure Planet Website"
supabase link --project-ref bqshfplgzvcxckqepspa
supabase db push
```

## 📋 What the Migration Creates

The SQL migration will set up:

✅ **Main Table**: `leads` with 20+ columns for storing quote requests
✅ **Indexes**: 6 performance indexes for fast queries
✅ **RLS Policies**: Security policies allowing:
   - Anonymous users to INSERT (for form submissions)
   - Service role FULL access (for admin)
   - Authenticated users to READ (for future admin dashboard)
✅ **UUID Extension**: For generating unique IDs
✅ **Comments**: Documentation on columns and table

## 🧪 Verify Setup After Running Migration

After running the migration via ANY method above, run:

```bash
node check-db-complete.js
```

You should see all ✅ green checkmarks.

## 🚀 Then Test the Quote Form

```bash
npm run dev
```

Visit: http://localhost:3000/quote-form

## 📧 Email Configuration

Your Resend API is already configured:
- ✅ API Key: Configured in .env
- ✅ From: Pure Planet <support@pureplanet.net.au>
- ✅ To: ummehabiba989@gmail.com

When you submit a test form, you'll receive:
- Admin email (to ummehabiba989@gmail.com) with lead details
- Customer confirmation email

## 🔗 Useful Links

- **Supabase Dashboard**: https://bqshfplgzvcxckqepspa.supabase.co
- **Table Editor**: https://bqshfplgzvcxckqepspa.supabase.co/project/bqshfplgzvcxckqepspa/editor
- **SQL Editor**: https://bqshfplgzvcxckqepspa.supabase.co/project/bqshfplgzvcxckqepspa/sql

## 💡 Troubleshooting

**If you get "table does not exist" errors:**
- Make sure you ran the full SQL migration
- Try refreshing the Supabase API schema (automatic when running migration)

**If form submissions fail:**
- Check RLS policies are enabled
- Verify anonymous insert policy exists

**If emails don't send:**
- Check `RESEND_API_KEY` in .env.local
- Verify email domain ownership (for production)
