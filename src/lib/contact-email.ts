import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "ummehabiba989@gmail.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "Pure Planet <info@pureplanet.net.au>";

export interface ContactSubmissionData {
    fullName: string;
    email?: string;
    phone: string;
    inquiryType: string;
    message?: string;
    referenceNumber: string;
    createdAt: string;
}

export async function sendContactFormAdminEmail(data: ContactSubmissionData) {
    const html = `
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
      <p>Reference: ${data.referenceNumber}</p>
    </div>
    <div class="content">
      <div class="field">
        <p class="label">Inquiry Type</p>
        <span class="badge ${data.inquiryType === 'quote' ? 'badge-quote' : data.inquiryType === 'service' ? 'badge-service' : 'badge-other'}">
            ${data.inquiryType === 'quote' ? 'Solar/Battery Quote' : data.inquiryType === 'service' ? 'Service or Repair' : 'Other'}
        </span>
      </div>
      <div class="field">
        <p class="label">Name</p>
        <p class="value">${data.fullName}</p>
      </div>
      <div class="field">
        <p class="label">Phone</p>
        <p class="value">${data.phone}</p>
      </div>
      <div class="field">
        <p class="label">Email</p>
        <p class="value">${data.email || "Not provided"}</p>
      </div>
      <div class="field">
        <p class="label">Message</p>
        <p class="value">${data.message || "N/A"}</p>
      </div>
      <div class="field">
        <p class="label">Submitted At</p>
        <p class="value">${data.createdAt}</p>
      </div>
    </div>
  </div>
</body>
</html>
`;

    try {
        await resend.emails.send({
            from: FROM_EMAIL,
            to: [ADMIN_EMAIL],
            subject: `📞 New Contact: ${data.fullName} - ${data.inquiryType}`,
            html,
        });
        console.log("Contact form admin email sent successfully");
    } catch (error) {
        console.error("Failed to send contact form admin email:", error);
        throw error;
    }
}

export async function sendContactFormCustomerEmail(data: ContactSubmissionData) {
    if (!data.email) return;

    const firstName = data.fullName.split(" ")[0];
    const html = `
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
      <p>Hi ${firstName},</p>
      <p>We've received your message and one of our team members will call you back within <strong>2 hours</strong> during business hours (Mon-Fri, 9am-5pm).</p>
      
      <div class="reference">
        <p style="margin: 0; color: #666; font-size: 14px;">Your Reference Number</p>
        <p style="margin: 8px 0 0; font-size: 24px; font-weight: bold; color: #062d16;">${data.referenceNumber}</p>
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
`;

    try {
        await resend.emails.send({
            from: FROM_EMAIL,
            to: [data.email],
            subject: `We received your message - Pure Planet`,
            html,
        });
        console.log("Contact form customer confirmation email sent successfully");
    } catch (error) {
        console.error("Failed to send contact form customer confirmation email:", error);
        throw error;
    }
}
