# Pure Planet Quote Form

A progressive multi-step lead generation form for Victorian solar and battery installations.

## Features

- 5-step progressive wizard with smooth animations
- Victorian postcode validation
- Rebate eligibility checking based on income
- Energy usage profiling with live savings estimates
- Battery recommendation (Fox ESS vs NeoVolt)
- Lead scoring (0-100)
- Admin and customer email notifications
- Mobile-first responsive design

## Setup Instructions

### 1. Environment Variables

Ensure these are set in `.env.local`:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Email (Resend)
RESEND_API_KEY=your_resend_api_key
ADMIN_EMAIL=admin@yourdomain.com
FROM_EMAIL=Your Company <noreply@yourdomain.com>
```

### 2. Database Setup

Run the SQL migration in your Supabase SQL Editor:

Location: `supabase/migrations/001_create_leads_table.sql`

Or run directly:

```sql
-- See the full migration file for complete schema
CREATE TABLE public.leads (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  postcode VARCHAR(4) NOT NULL,
  -- ... (see migration file for full schema)
);
```

### 3. Email Domain Verification

For production emails, verify your domain with Resend:
1. Go to https://resend.com/domains
2. Add your domain
3. Update DNS records as instructed
4. Update FROM_EMAIL to use your verified domain

## File Structure

```
src/app/quote-form/
├── page.tsx                    # Main page component
├── layout.tsx                  # SEO metadata
├── types.ts                    # TypeScript interfaces
├── components/
│   ├── QuoteWizard.tsx        # Main wizard container
│   ├── ProgressBar.tsx        # Step progress indicator
│   ├── ResultsPage.tsx        # Post-submission results
│   ├── BatteryComparison.tsx  # Battery comparison table
│   └── steps/
│       ├── Step1Location.tsx   # Postcode validation
│       ├── Step2Income.tsx     # Income/rebate eligibility
│       ├── Step3Usage.tsx      # Energy usage sliders
│       ├── Step4Services.tsx   # Service interest selection
│       └── Step5Contact.tsx    # Contact details form

src/app/api/leads/
├── route.ts                    # POST: Create lead
└── [id]/route.ts              # GET: Retrieve lead

src/lib/
├── supabase.ts                # Supabase client
├── calculations.ts            # Lead scoring & savings
├── validation.ts              # Form validation
└── email.ts                   # Email templates
```

## Lead Scoring Logic

| Criteria | Points |
|----------|--------|
| Victorian postcode | +10 |
| Rebate eligible (income ≤ $210k) | +30 |
| High quarterly bill (> $500) | +20 |
| Solar interest | +10 |
| Battery interest | +10 |
| Heat pump interest | +10 |
| Phone provided | +10 |
| **Maximum** | **100** |

## Battery Recommendation Logic

- **Fox ESS EQ Series**: Recommended for quarterly bills < $500 or daily usage ≤ 15 kWh
- **NeoVolt BW-BAT-9.6P**: Recommended for quarterly bills ≥ $500 or daily usage > 15 kWh

## Calculations

```javascript
// Daily kWh estimate
dailyKwh = (quarterlyBill / 90) / 0.30

// Annual savings estimate (70% reduction)
annualSavings = quarterlyBill * 4 * 0.70
```

## Testing

Visit `/quote-form` to test the form flow. For email testing in development:
- Admin emails go to ADMIN_EMAIL
- Customer emails go to the submitted email address
- Use Resend test mode for development

## Customization

### Brand Colors
- Primary Dark: `#062d16`
- Accent: `#C2F32C`

### Modify Income Brackets
Edit `src/app/quote-form/types.ts`:
```typescript
export const INCOME_BRACKET_LABELS = {
  under_100k: 'Under $100,000',
  '100k_150k': '$100,000 - $150,000',
  // ...
};
```

### Modify Lead Scoring
Edit `src/lib/calculations.ts`:
```typescript
export const LEAD_SCORE = {
  VICTORIAN_POSTCODE: 10,
  REBATE_ELIGIBLE: 30,
  // ...
};
```
