import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { sendContactFormAdminEmail, sendContactFormCustomerEmail } from '@/lib/contact-email';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; // Use service role for writing
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, phone, email, inquiry_type, message } = body;

        // Validate required fields
        if (!name || !phone || !inquiry_type) {
            return NextResponse.json(
                { error: 'Name, phone, and inquiry type are required' },
                { status: 400 }
            );
        }

        // Generate reference number (Format: PP-XXXXX)
        const referenceNumber = `PP-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

        // Save to Supabase
        const { error: dbError } = await supabase
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
            });

        if (dbError) {
            console.error('Database error:', dbError);
            return NextResponse.json(
                { error: 'Failed to save submission' },
                { status: 500 }
            );
        }

        const submissionData = {
            fullName: name,
            email: email || undefined,
            phone,
            inquiryType: inquiry_type,
            message: message || undefined,
            referenceNumber,
            createdAt: new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' })
        };

        // Send Emails (don't block response on email success)
        try {
            await Promise.all([
                sendContactFormAdminEmail(submissionData),
                sendContactFormCustomerEmail(submissionData)
            ]);
        } catch (emailError) {
            console.error('Email sending error (non-fatal):', emailError);
            // We still return success because the DB save worked
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
