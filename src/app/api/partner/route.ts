import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.Resend_API);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {
            serviceType,
            yearsOfExperience,
            abnNumber,
            email,
            phone,
            agreedToTerms
        } = body;

        // Validate required fields
        if (!email || !phone) {
            return NextResponse.json(
                { error: 'Email and phone number are required' },
                { status: 400 }
            );
        }

        if (!agreedToTerms) {
            return NextResponse.json(
                { error: 'You must agree to the terms and conditions' },
                { status: 400 }
            );
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'Pure Planet Partner Program <onboarding@resend.dev>',
            to: ['strata_four.0o@icloud.com'],
            subject: 'New Partner Program Enquiry - Pure Planet',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #C2F32C; border-bottom: 3px solid #C2F32C; padding-bottom: 10px;">
                        New Partner Program Enquiry
                    </h2>

                    <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 8px;">
                        <h3 style="margin-top: 0; color: #333;">Contact Information</h3>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                    </div>

                    <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 8px;">
                        <h3 style="margin-top: 0; color: #333;">Partner Details</h3>
                        <p><strong>Service Type:</strong> ${serviceType}</p>
                        <p><strong>Years of Experience:</strong> ${yearsOfExperience}</p>
                        <p><strong>ABN Number:</strong> ${abnNumber || 'Not provided'}</p>
                    </div>

                    <div style="background-color: #e8f5e9; padding: 15px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #C2F32C;">
                        <p style="margin: 0;"><strong>Terms & Conditions:</strong> Agreed ✓</p>
                    </div>

                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
                        <p>This email was sent from the Pure Planet Partner Program form.</p>
                        <p>Timestamp: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' })}</p>
                    </div>
                </div>
            `,
        });

        if (error) {
            console.error('Resend API Error:', error);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: 'Email sent successfully', data },
            { status: 200 }
        );
    } catch (error) {
        console.error('Partner form error:', error);
        return NextResponse.json(
            { error: 'An error occurred while processing your request' },
            { status: 500 }
        );
    }
}
