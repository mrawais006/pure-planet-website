const { Resend } = require('resend');

const resend = new Resend('re_EEyLdxZG_359TfYGwunJX25j9fGsXrhhe');

async function testResend() {
    try {
        console.log('Testing Resend API...');

        const { data, error } = await resend.emails.send({
            from: 'Pure Planet Contact Form <onboarding@resend.dev>',
            to: ['strata_four.0o@icloud.com'],
            subject: 'Test Email from Pure Planet',
            html: '<p>This is a test email to verify the Resend API configuration.</p>',
        });

        if (error) {
            console.error('❌ Resend API Error:');
            console.error(JSON.stringify(error, null, 2));
            return;
        }

        console.log('✅ Email sent successfully!');
        console.log('Response:', JSON.stringify(data, null, 2));
    } catch (err) {
        console.error('❌ Unexpected error:');
        console.error(err);
    }
}

testResend();
