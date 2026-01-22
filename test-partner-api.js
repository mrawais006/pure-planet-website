const { Resend } = require('resend');

const resend = new Resend('re_EEyLdxZG_359TfYGwunJX25j9fGsXrhhe');

async function testPartnerAPI() {
    try {
        console.log('Testing Partner Program API...');

        const testData = {
            serviceType: 'Solar & Battery',
            yearsOfExperience: '5+ Years',
            abnNumber: '12345678901',
            email: 'strata_four.0o@icloud.com',
            phone: '0450010410',
            agreedToTerms: true
        };

        const { data, error } = await resend.emails.send({
            from: 'Pure Planet Partner Program <onboarding@resend.dev>',
            to: ['strata_four.0o@icloud.com'],
            subject: 'Test: New Partner Program Enquiry - Pure Planet',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #C2F32C; border-bottom: 3px solid #C2F32C; padding-bottom: 10px;">
                        New Partner Program Enquiry (TEST)
                    </h2>

                    <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 8px;">
                        <h3 style="margin-top: 0; color: #333;">Contact Information</h3>
                        <p><strong>Email:</strong> ${testData.email}</p>
                        <p><strong>Phone:</strong> ${testData.phone}</p>
                    </div>

                    <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 8px;">
                        <h3 style="margin-top: 0; color: #333;">Partner Details</h3>
                        <p><strong>Service Type:</strong> ${testData.serviceType}</p>
                        <p><strong>Years of Experience:</strong> ${testData.yearsOfExperience}</p>
                        <p><strong>ABN Number:</strong> ${testData.abnNumber}</p>
                    </div>

                    <div style="background-color: #e8f5e9; padding: 15px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #C2F32C;">
                        <p style="margin: 0;"><strong>Terms & Conditions:</strong> Agreed ✓</p>
                    </div>

                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
                        <p>This is a TEST email from the Pure Planet Partner Program form.</p>
                        <p>Timestamp: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' })}</p>
                    </div>
                </div>
            `,
        });

        if (error) {
            console.error('❌ Resend API Error:');
            console.error(JSON.stringify(error, null, 2));
            return;
        }

        console.log('✅ Partner program email sent successfully!');
        console.log('Response:', JSON.stringify(data, null, 2));
    } catch (err) {
        console.error('❌ Unexpected error:');
        console.error(err);
    }
}

testPartnerAPI();
