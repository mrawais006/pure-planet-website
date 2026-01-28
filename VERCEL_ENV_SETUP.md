# 🚀 Vercel Environment Variables Setup

## ❌ Current Build Error:
```
Error: supabaseUrl is required.
```

This happens because environment variables are missing on Vercel.

## ✅ Solution: Add Environment Variables to Vercel

### Method 1: Via Vercel Dashboard (Recommended)

1. **Go to your Vercel project**: https://vercel.com/dashboard
2. Click on your **Pure Planet Website** project
3. Go to **Settings** → **Environment Variables**
4. Add the following variables:

---

### 📋 Environment Variables to Add:

#### **Supabase Configuration** (Required for database)

| Variable Name | Value |
|--------------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://bqshfplgzvcxckqepspa.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxc2hmcGxnenZjeGNrcWVwc3BhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1NDA0NDYsImV4cCI6MjA4NTExNjQ0Nn0.3uAY2IvcqSDwrY2YnQsQXsjMwf03xVhjg1zl0523l2o` |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxc2hmcGxnenZjeGNrcWVwc3BhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTU0MDQ0NiwiZXhwIjoyMDg1MTE2NDQ2fQ.4kUl44q1ORNBNDnyudTTUjrfHyOt4jNJ7kIVijOWo-8` |

#### **Email Configuration** (Required for sending emails)

| Variable Name | Value |
|--------------|-------|
| `RESEND_API_KEY` | `re_iAPLqYz1_KesUeqwBcYD9p7ueBVd5MWJH` |
| `ADMIN_EMAIL` | `ummehabiba989@gmail.com` |
| `FROM_EMAIL` | `Pure Planet <support@pureplanet.net.au>` |

---

### 5. Important Settings:

For **each variable**, select:
- ✅ **Production**
- ✅ **Preview**  
- ✅ **Development**

This ensures they work in all environments.

---

### Method 2: Via Vercel CLI (Alternative)

If you have Vercel CLI installed:

```bash
vercel env add NEXT_PUBLIC_SUPABASE_URL
# Paste: https://bqshfplgzvcxckqepspa.supabase.co

vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
# Paste the anon key

vercel env add SUPABASE_SERVICE_ROLE_KEY
# Paste the service role key

vercel env add RESEND_API_KEY
# Paste: re_iAPLqYz1_KesUeqwBcYD9p7ueBVd5MWJH

vercel env add ADMIN_EMAIL
# Paste: ummehabiba989@gmail.com

vercel env add FROM_EMAIL
# Paste: Pure Planet <support@pureplanet.net.au>
```

---

## 🔄 After Adding Variables:

### Option 1: Redeploy from Vercel Dashboard
1. Go to **Deployments** tab
2. Click the **⋯** menu on the latest deployment
3. Click **Redeploy**

### Option 2: Push a new commit
```bash
git add .
git commit -m "Add environment variables configuration"
git push origin main
```

Vercel will automatically trigger a new build with the environment variables.

---

## ✅ Verification:

Once redeployed, your build should succeed and you'll see:
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization
```

## 🎯 What This Fixes:

- ✅ Form submissions to Supabase database
- ✅ Email notifications via Resend
- ✅ Admin emails to ummehabiba989@gmail.com
- ✅ Customer confirmation emails
- ✅ Production build success

---

## 🔐 Security Note:

Never commit `.env.local` or `.env` files to git. These files are already in `.gitignore` and contain sensitive keys.

