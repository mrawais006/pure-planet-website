# PURE PLANET - CONTACT PAGE REDESIGN PROMPT
## For Claude Code / Anthropic Opus / Cursor Agent

---

# ⚠️ CRITICAL: READ FIRST

**This is a LIVE production website at `pureplanet.net.au`**
- **REDESIGN** the existing `/contact` page only
- **DO NOT** touch any other pages
- **MATCH** existing brand colors and style
- **USE** existing Navbar and Footer components

---

# 🎨 BRAND GUIDELINES

| Element | Value |
|---------|-------|
| **Primary Dark** | `#062d16` (deep green) |
| **Accent** | `#C2F32C` (lime/yellow-green) |
| **Text Light** | `white`, `gray-300`, `gray-400` |
| **Background** | Keep existing dark theme |

---

# 📞 BUSINESS INFORMATION

| Field | Value |
|-------|-------|
| **Phone** | 0450 010 419 |
| **Address** | 11 Sant Court, Ravenhall VIC 3023 |
| **Email** | info@pureplanet.net.au |
| **Hours** | Monday - Friday, 9am - 5pm |

---

# 🎯 GOAL

Redesign the contact page to be **senior-friendly** with:
- Simple, calming layout
- Minimal fields (only 4)
- Large text and touch targets
- Trust-building elements
- Easy tap-to-call on mobile

**Target Audience:** Senior citizens in Victoria/Melbourne who need clarity and reassurance before contacting a solar company.

---

# 📐 LAYOUT STRUCTURE

## Desktop View (Two Columns)

```
┌─────────────────────────────────────────────────────────────┐
│                        NAVBAR                                │
├────────────────────────────┬────────────────────────────────┤
│                            │                                │
│    LEFT COLUMN (50%)       │    RIGHT COLUMN (50%)          │
│    Trust & Information     │    Contact Form                │
│                            │                                │
│    📞 0450 010 419         │    ┌────────────────────────┐  │
│    (Large, prominent)      │    │ Your Name              │  │
│                            │    └────────────────────────┘  │
│    📍 Google Map           │    ┌────────────────────────┐  │
│    (Embedded)              │    │ Best Phone Number      │  │
│                            │    └────────────────────────┘  │
│    ✉️ info@pureplanet...   │    ┌────────────────────────┐  │
│                            │    │ Email (Optional)       │  │
│    🕐 Mon-Fri 9am-5pm      │    └────────────────────────┘  │
│                            │                                │
│    🔒 Privacy Promise      │    How can we help?            │
│                            │    ○ Solar/Battery Quote       │
│    ✓ Trust Badges          │    ○ Service or Repair         │
│                            │    ○ Other                     │
│                            │                                │
│                            │    [    Call Me Back    ]      │
│                            │                                │
├────────────────────────────┴────────────────────────────────┤
│                        FOOTER                                │
└─────────────────────────────────────────────────────────────┘
```

## Mobile View (Stacked)

```
┌─────────────────────────┐
│        NAVBAR           │
├─────────────────────────┤
│                         │
│   📞 0450 010 419       │  ← PHONE FIRST (tap-to-call)
│   [  Tap to Call  ]     │
│                         │
├─────────────────────────┤
│                         │
│   CONTACT FORM          │
│   (All 4 fields)        │
│                         │
├─────────────────────────┤
│                         │
│   📍 Address + Map      │
│   ✉️ Email              │
│   🕐 Hours              │
│   🔒 Privacy Promise    │
│                         │
├─────────────────────────┤
│        FOOTER           │
└─────────────────────────┘
```

---

# 📝 LEFT COLUMN CONTENT (Trust Section)

## Row 1: Phone Number (MOST PROMINENT)

```jsx
<div className="phone-section">
  <p className="text-sm text-gray-400 mb-2">Call Our Team</p>
  <a href="tel:0450010419" className="text-3xl font-bold text-[#C2F32C] hover:underline">
    0450 010 419
  </a>
  <p className="text-sm text-gray-400 mt-2">Mon - Fri, 9am - 5pm</p>
</div>
```

**Specs:**
- Font size: 28-32px (large, easy to read)
- Color: Accent (#C2F32C)
- Make it a clickable `tel:` link
- On mobile: Show as prominent button "📞 Tap to Call"

---

## Row 2: Address with Google Map

```jsx
<div className="address-section">
  <p className="text-sm text-gray-400 mb-2">Visit Our Office</p>
  <p className="text-white font-medium">11 Sant Court, Ravenhall VIC 3023</p>
  
  {/* Embedded Google Map */}
  <div className="mt-4 rounded-xl overflow-hidden">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.XXX!2d144.XXX!3d-37.XXX!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s11+Sant+Court+Ravenhall+VIC+3023!5e0!3m2!1sen!2sau!4vXXX"
      width="100%" 
      height="200" 
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
    />
  </div>
</div>
```

**Why Map?** Seniors think: "If I can see their office, they're not a scammer."

---

## Row 3: Email

```jsx
<div className="email-section">
  <p className="text-sm text-gray-400 mb-2">Email Us</p>
  <a href="mailto:info@pureplanet.net.au" className="text-white hover:text-[#C2F32C]">
    info@pureplanet.net.au
  </a>
</div>
```

---

## Row 4: Business Hours

```jsx
<div className="hours-section">
  <p className="text-sm text-gray-400 mb-2">Business Hours</p>
  <p className="text-white">Monday - Friday: 9am - 5pm</p>
</div>
```

---

## Row 5: Privacy Promise (Trust Builder)

```jsx
<div className="privacy-promise mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
  <p className="text-sm text-gray-300 flex items-start gap-2">
    <span className="text-[#C2F32C]">🔒</span>
    We respect your privacy. Your details are never sold to call centers.
  </p>
</div>
```

---

## Row 6: Trust Badges (Optional)

```jsx
<div className="trust-badges mt-6 space-y-2">
  <p className="text-sm text-gray-400 flex items-center gap-2">
    <span className="text-[#C2F32C]">✓</span> Licensed Victorian Installer
  </p>
  <p className="text-sm text-gray-400 flex items-center gap-2">
    <span className="text-[#C2F32C]">✓</span> Solar Victoria Approved Retailer
  </p>
  <p className="text-sm text-gray-400 flex items-center gap-2">
    <span className="text-[#C2F32C]">✓</span> Serving Melbourne & Victoria
  </p>
</div>
```

---

# 📋 RIGHT COLUMN (Contact Form)

## Form Container Styling

```jsx
<div className="bg-white rounded-3xl p-8 shadow-xl">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
  <form onSubmit={handleSubmit} className="space-y-6">
    {/* Fields here */}
  </form>
</div>
```

**Specs:**
- Background: White (`#ffffff`)
- Border radius: Rounded (24px)
- Padding: Generous (32px)
- Shadow: Soft elevation

---

## Field 1: Your Name

```jsx
<div className="field-group">
  <label htmlFor="name" className="block text-gray-700 font-medium mb-2 text-base">
    Your Name
  </label>
  <input
    type="text"
    id="name"
    name="name"
    required
    placeholder="Enter your full name"
    className="w-full px-4 py-4 text-base border-2 border-gray-200 rounded-xl 
               focus:border-[#C2F32C] focus:outline-none transition-colors"
  />
</div>
```

**Specs:**
- Single field (DO NOT split First/Last)
- Label above field (16px+ font)
- Required: ✅ Yes
- Placeholder: "Enter your full name"
- Border on focus: Accent green (#C2F32C)
- Min height: 48px (easy to tap)

---

## Field 2: Best Phone Number

```jsx
<div className="field-group">
  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2 text-base">
    Best Phone Number
  </label>
  <input
    type="tel"
    id="phone"
    name="phone"
    required
    placeholder="04XX XXX XXX"
    className="w-full px-4 py-4 text-base border-2 border-gray-200 rounded-xl 
               focus:border-[#C2F32C] focus:outline-none transition-colors"
  />
</div>
```

**Specs:**
- Type: `tel` (IMPORTANT: brings up number pad on mobile!)
- Required: ✅ Yes
- Placeholder: "04XX XXX XXX"

---

## Field 3: Email Address (OPTIONAL)

```jsx
<div className="field-group">
  <label htmlFor="email" className="block text-gray-700 font-medium mb-2 text-base">
    Email Address <span className="text-gray-400 font-normal">(Optional)</span>
  </label>
  <input
    type="email"
    id="email"
    name="email"
    placeholder="your@email.com"
    className="w-full px-4 py-4 text-base border-2 border-gray-200 rounded-xl 
               focus:border-[#C2F32C] focus:outline-none transition-colors"
  />
</div>
```

**Specs:**
- Required: ❌ NO (many seniors don't use email regularly)
- Label MUST say "(Optional)"
- Placeholder: "your@email.com"

---

## Field 4: How Can We Help? (Radio Buttons)

```jsx
<div className="field-group">
  <label className="block text-gray-700 font-medium mb-4 text-base">
    How can we help?
  </label>
  
  <div className="space-y-3">
    {/* Option 1: Quote */}
    <label className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all
                      ${selected === 'quote' ? 'border-[#C2F32C] bg-[#C2F32C]/10' : 'border-gray-200 hover:border-gray-300'}`}>
      <input
        type="radio"
        name="inquiry_type"
        value="quote"
        checked={selected === 'quote'}
        onChange={(e) => setSelected(e.target.value)}
        className="w-5 h-5 text-[#C2F32C] mr-4"
      />
      <span className="text-gray-700">I want a Solar/Battery Quote</span>
    </label>
    
    {/* Option 2: Service */}
    <label className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all
                      ${selected === 'service' ? 'border-[#C2F32C] bg-[#C2F32C]/10' : 'border-gray-200 hover:border-gray-300'}`}>
      <input
        type="radio"
        name="inquiry_type"
        value="service"
        checked={selected === 'service'}
        onChange={(e) => setSelected(e.target.value)}
        className="w-5 h-5 text-[#C2F32C] mr-4"
      />
      <span className="text-gray-700">Service or Repair</span>
    </label>
    
    {/* Option 3: Other */}
    <label className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all
                      ${selected === 'other' ? 'border-[#C2F32C] bg-[#C2F32C]/10' : 'border-gray-200 hover:border-gray-300'}`}>
      <input
        type="radio"
        name="inquiry_type"
        value="other"
        checked={selected === 'other'}
        onChange={(e) => setSelected(e.target.value)}
        className="w-5 h-5 text-[#C2F32C] mr-4"
      />
      <span className="text-gray-700">Other</span>
    </label>
  </div>
  
  {/* Conditional Text Area - Only shows when "Other" is selected */}
  {selected === 'other' && (
    <div className="mt-4 animate-fadeIn">
      <label htmlFor="message" className="block text-gray-700 font-medium mb-2 text-base">
        Please describe your query
      </label>
      <textarea
        id="message"
        name="message"
        rows={4}
        maxLength={500}
        placeholder="Tell us how we can help..."
        className="w-full px-4 py-4 text-base border-2 border-gray-200 rounded-xl 
                   focus:border-[#C2F32C] focus:outline-none transition-colors resize-none"
      />
      <p className="text-sm text-gray-400 mt-1 text-right">
        {messageLength}/500 characters
      </p>
    </div>
  )}
</div>
```

**Specs:**
- Use RADIO BUTTONS as large clickable cards (NOT dropdown)
- Why? Dropdowns are hard for shaky hands
- Card style with padding (min 48px height)
- Selected state: Accent border + light accent background
- "Other" selected → Show text area with animation
- Text area label: "Please describe your query"
- Text area max length: 500 characters
- Text area is OPTIONAL even when "Other" is selected

---

## Submit Button

```jsx
<button
  type="submit"
  disabled={isSubmitting}
  className="w-full py-4 px-6 bg-[#C2F32C] text-[#062d16] font-bold text-lg 
             rounded-xl hover:scale-[1.02] transition-transform disabled:opacity-50
             flex items-center justify-center gap-2"
>
  {isSubmitting ? (
    <span>Sending...</span>
  ) : (
    <>
      <span>📞</span>
      <span>Call Me Back</span>
    </>
  )}
</button>
```

**Specs:**
- Text: "Call Me Back" (specific promise, NOT vague "Submit")
- Color: Accent (#C2F32C) with dark text (#062d16)
- Rounded corners (friendlier)
- Full width
- Min height: 56px
- Hover: Scale up slightly (1.02)
- Loading state: "Sending..."

---

## Response Time Note (Below Button)

```jsx
<p className="text-center text-sm text-gray-500 mt-4">
  ⏱️ We typically respond within 2 hours during business hours.
</p>
```

---

# ✅ SUCCESS MESSAGE (After Submission)

Replace form with success card:

```jsx
<div className="bg-white rounded-3xl p-8 shadow-xl text-center animate-fadeIn">
  {/* Success Icon */}
  <div className="w-20 h-20 bg-[#C2F32C] rounded-full flex items-center justify-center mx-auto mb-6">
    <svg className="w-10 h-10 text-[#062d16]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  </div>
  
  {/* Message */}
  <h3 className="text-2xl font-bold text-gray-800 mb-2">
    Thank you, {formData.name}!
  </h3>
  <p className="text-gray-600 mb-6">
    We'll call you back within 2 hours during business hours.
  </p>
  
  {/* Reference Number */}
  <div className="bg-gray-100 rounded-xl p-4 inline-block">
    <p className="text-sm text-gray-500">Your Reference Number</p>
    <p className="text-xl font-bold text-[#062d16]">#PP-{referenceNumber}</p>
  </div>
  
  {/* Additional Help */}
  <p className="text-sm text-gray-500 mt-6">
    Need immediate assistance? Call us at{' '}
    <a href="tel:0450010419" className="text-[#C2F32C] font-medium">0450 010 419</a>
  </p>
</div>
```

---

# 🗄️ DATABASE SCHEMA (Supabase)

```sql
-- Create contact_submissions table
CREATE TABLE contact_submissions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Form Data
  full_name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255),
  inquiry_type VARCHAR(50) NOT NULL,
  other_message TEXT,
  
  -- Reference
  reference_number VARCHAR(20) NOT NULL,
  
  -- Status Tracking
  status VARCHAR(20) DEFAULT 'new',
  notes TEXT,
  
  -- Meta
  ip_address VARCHAR(45),
  user_agent TEXT
);

-- Index for faster queries
CREATE INDEX idx_contact_created_at ON contact_submissions(created_at DESC);
CREATE INDEX idx_contact_status ON contact_submissions(status);
CREATE INDEX idx_contact_reference ON contact_submissions(reference_number);
```

**Status Options:** `new`, `contacted`, `resolved`, `spam`

---

# 📧 EMAIL NOTIFICATIONS

## Admin Notification

**To:** info@pureplanet.net.au  
**Subject:** `📞 New Contact: [Name] - [Inquiry Type]`

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; }
    .header { background: #062d16; color: white; padding: 24px; text-align: center; }
    .content { padding: 24px; }
    .field { margin-bottom: 16px; }
    .label { color: #666; font-size: 12px; text-transform: uppercase; }
    .value { color: #333; font-size: 16px; font-weight: bold; }
    .badge { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12px; }
    .badge-quote { background: #C2F32C; color: #062d16; }
    .badge-service { background: #3b82f6; color: white; }
    .badge-other { background: #8b5cf6; color: white; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Submission</h1>
      <p>Reference: #PP-XXXXX</p>
    </div>
    <div class="content">
      <div class="field">
        <p class="label">Inquiry Type</p>
        <span class="badge badge-quote">Solar/Battery Quote</span>
      </div>
      <div class="field">
        <p class="label">Name</p>
        <p class="value">[Customer Name]</p>
      </div>
      <div class="field">
        <p class="label">Phone</p>
        <p class="value">[Phone Number]</p>
      </div>
      <div class="field">
        <p class="label">Email</p>
        <p class="value">[Email or "Not provided"]</p>
      </div>
      <div class="field">
        <p class="label">Message</p>
        <p class="value">[Message if "Other" selected, otherwise "N/A"]</p>
      </div>
      <div class="field">
        <p class="label">Submitted At</p>
        <p class="value">[Date & Time]</p>
      </div>
    </div>
  </div>
</body>
</html>
```

---

## Customer Confirmation (Only if email provided)

**To:** [Customer Email]  
**Subject:** `We received your message - Pure Planet`

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; }
    .header { background: #062d16; color: white; padding: 24px; text-align: center; }
    .header h1 { color: #C2F32C; }
    .content { padding: 24px; color: #333; }
    .reference { background: #f5f5f5; padding: 16px; border-radius: 8px; text-align: center; margin: 20px 0; }
    .footer { padding: 24px; background: #f9f9f9; text-align: center; font-size: 14px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Pure Planet</h1>
      <p>Thank you for contacting us!</p>
    </div>
    <div class="content">
      <p>Hi [Name],</p>
      <p>We've received your message and one of our team members will call you back within <strong>2 hours</strong> during business hours (Mon-Fri, 9am-5pm).</p>
      
      <div class="reference">
        <p style="margin: 0; color: #666; font-size: 14px;">Your Reference Number</p>
        <p style="margin: 8px 0 0; font-size: 24px; font-weight: bold; color: #062d16;">#PP-XXXXX</p>
      </div>
      
      <p>If you need immediate assistance, please call us directly:</p>
      <p style="font-size: 20px; font-weight: bold; color: #062d16;">📞 0450 010 419</p>
      
      <p>Best regards,<br>The Pure Planet Team</p>
    </div>
    <div class="footer">
      <p>Pure Planet | 11 Sant Court, Ravenhall VIC 3023</p>
      <p>info@pureplanet.net.au</p>
    </div>
  </div>
</body>
</html>
```

---

# 📁 FILE STRUCTURE

```
src/app/contact/
├── page.tsx                    # Main page (redesigned)
├── components/
│   ├── ContactInfo.tsx         # Left column (phone, map, address, trust)
│   ├── ContactForm.tsx         # Right column (4-field form)
│   └── SuccessMessage.tsx      # Post-submission success card
└── actions.ts                  # Server action for form submission (optional)

src/app/api/contact/
└── route.ts                    # POST handler for form submission

src/lib/
├── supabase.ts                 # Supabase client (if not exists)
└── email.ts                    # Email sending utility (if not exists)
```

---

# 🔧 API ROUTE

Create `/src/app/api/contact/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, inquiry_type, message } = body;

    // Validate required fields
    if (!name || !phone || !inquiry_type) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate reference number
    const referenceNumber = `PP-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

    // Save to database
    const { data, error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        full_name: name,
        phone,
        email: email || null,
        inquiry_type,
        other_message: message || null,
        reference_number: referenceNumber,
        ip_address: request.headers.get('x-forwarded-for') || 'unknown',
        user_agent: request.headers.get('user-agent') || 'unknown',
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Failed to save submission' },
        { status: 500 }
      );
    }

    // Send admin notification email
    await resend.emails.send({
      from: 'Pure Planet <noreply@pureplanet.net.au>',
      to: 'info@pureplanet.net.au',
      subject: `📞 New Contact: ${name} - ${inquiry_type}`,
      html: `<!-- Admin email HTML here -->`,
    });

    // Send customer confirmation (only if email provided)
    if (email) {
      await resend.emails.send({
        from: 'Pure Planet <noreply@pureplanet.net.au>',
        to: email,
        subject: `We received your message - Pure Planet`,
        html: `<!-- Customer email HTML here -->`,
      });
    }

    return NextResponse.json({
      success: true,
      referenceNumber,
      message: 'Submission successful',
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

---

# 🔐 ENVIRONMENT VARIABLES

Add to `.env.local`:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Email (Resend)
RESEND_API_KEY=your_resend_api_key
```

---

# 📱 MOBILE OPTIMIZATION (Critical)

1. **Phone number at VERY TOP** on mobile (before form)
2. **Tap-to-call button** - large, prominent
3. **Large input fields** - min-height 48px
4. **Large radio buttons** - full-width cards, easy to tap
5. **No horizontal scrolling**
6. **Button full-width** - min-height 56px
7. **Generous spacing** - 16px+ between elements

---

# ♿ ACCESSIBILITY (Senior-Friendly)

- ✅ Font size minimum 16px (prevents iOS zoom)
- ✅ High contrast text
- ✅ Labels ABOVE inputs (not placeholder-only)
- ✅ Clear focus states (visible outline)
- ✅ Error messages in plain language
- ✅ No time limits on form
- ✅ Error border: Orange (#f59e0b) not angry red
- ✅ Works without JavaScript for basic functionality

---

# 🎬 ANIMATIONS

```css
/* Fade in animation for success message and "Other" text area */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}
```

---

# ✅ CHECKLIST BEFORE COMPLETE

- [ ] Two-column layout on desktop
- [ ] Phone number prominent and tappable
- [ ] Google Map embedded
- [ ] Privacy promise displayed
- [ ] Form has exactly 4 fields
- [ ] Radio buttons are large cards (not tiny circles)
- [ ] "Other" shows text area when selected
- [ ] Text area label: "Please describe your query"
- [ ] Submit button says "Call Me Back"
- [ ] Success message shows after submission
- [ ] Reference number generated and displayed
- [ ] Data saves to Supabase
- [ ] Admin email sends
- [ ] Customer email sends (if email provided)
- [ ] Mobile layout: phone at top, stacked form
- [ ] All touch targets min 48px
- [ ] Works on iPhone Safari
- [ ] No console errors
- [ ] Matches brand colors exactly

---

# 🚨 DO NOT

- ❌ DO NOT use dropdown for inquiry type (use radio buttons)
- ❌ DO NOT make email required
- ❌ DO NOT use red for errors (use orange)
- ❌ DO NOT use small fonts (<16px)
- ❌ DO NOT use tiny radio buttons
- ❌ DO NOT modify other pages
- ❌ DO NOT change the Navbar or Footer

---

# 🚀 START HERE

1. First, create the Supabase table
2. Create the API route `/api/contact/route.ts`
3. Build the `ContactInfo.tsx` component (left column)
4. Build the `ContactForm.tsx` component (right column)
5. Build the `SuccessMessage.tsx` component
6. Assemble in `page.tsx` with proper layout
7. Add email notification HTML templates
8. Test on mobile device
9. Test form submission end-to-end
10. Verify emails send correctly

---

**BUILD A CONTACT PAGE THAT SENIORS WILL LOVE! 💚**
