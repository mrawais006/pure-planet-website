import { Resend } from "resend";
import { getLeadTemperature, formatCurrency } from "./calculations";
import { INCOME_BRACKET_LABELS } from "@/app/quote-form/types";

const resend = new Resend(process.env.RESEND_API_KEY);

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "ummehabiba989@gmail.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "Pure Planet <info@pureplanet.net.au>";

interface AdminEmailData {
  leadId: string;
  referenceNumber: string;
  fullName: string;
  email: string;
  phone: string;
  postcode: string;
  suburb?: string;
  incomeBracket: string;
  rebateEligible: boolean;
  quarterlyBill: number;
  daytimeUsagePercent: number;
  interestedSolar: boolean;
  interestedBattery: boolean;
  interestedHeatpump: boolean;
  recommendedBattery: string;
  estimatedAnnualSavings: number;
  leadScore: number;
  preferredContactTime?: string;
}

interface CustomerEmailData {
  referenceNumber: string;
  fullName: string;
  email: string;
  rebateEligible: boolean;
  estimatedAnnualSavings: number;
  recommendedBattery: string;
  quarterlyBill: number;
}

/**
 * Send admin notification email for new lead
 */
export async function sendAdminNotificationEmail(data: AdminEmailData) {
  const temperature = getLeadTemperature(data.leadScore);
  const temperatureEmoji = temperature === "hot" ? "🔥" : temperature === "warm" ? "⚡" : "📋";
  const temperatureLabel = temperature.charAt(0).toUpperCase() + temperature.slice(1);

  const services = [
    data.interestedSolar && "Solar Panels",
    data.interestedBattery && "Battery Storage",
    data.interestedHeatpump && "Heat Pump",
  ].filter(Boolean).join(", ");

  const incomeLabel = INCOME_BRACKET_LABELS[data.incomeBracket as keyof typeof INCOME_BRACKET_LABELS] || data.incomeBracket;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08); max-width: 600px;">
          <!-- Compact Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #062d16 0%, #0a4020 100%); padding: 24px 32px; border-bottom: 3px solid #C2F32C;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="text-align: left;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 18px; font-weight: 600; letter-spacing: -0.5px;">
                      ${temperatureEmoji} New Lead
                    </h1>
                    <p style="margin: 4px 0 0; color: #C2F32C; font-size: 12px; font-weight: 500;">
                      ${data.referenceNumber}
                    </p>
                  </td>
                  <td style="text-align: right;">
                    <span style="display: inline-block; padding: 6px 14px; background-color: ${temperature === "hot" ? "#ef4444" : temperature === "warm" ? "#f59e0b" : "#6b7280"
    }; border-radius: 20px; color: #ffffff; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                      ${data.leadScore}/100
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Contact Information -->
          <tr>
            <td style="padding: 28px 32px 20px;">
              <h2 style="margin: 0 0 16px; color: #062d16; font-size: 15px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; opacity: 0.6;">
                Contact Details
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 8px; padding: 20px; font-size: 13px;">
                <tr>
                  <td style="padding: 6px 0; color: #6b7280; width: 120px; font-size: 12px;">Name</td>
                  <td style="padding: 6px 0; color: #111827; font-weight: 600;">${data.fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #6b7280; font-size: 12px;">Email</td>
                  <td style="padding: 6px 0;"><a href="mailto:${data.email}" style="color: #062d16; text-decoration: none; font-weight: 500;">${data.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #6b7280; font-size: 12px;">Phone</td>
                  <td style="padding: 6px 0;"><a href="tel:${data.phone}" style="color: #062d16; text-decoration: none; font-weight: 600; background-color: #C2F32C; padding: 4px 12px; border-radius: 6px; display: inline-block;">${data.phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #6b7280; font-size: 12px;">Location</td>
                  <td style="padding: 6px 0; color: #111827; font-weight: 500;">${data.suburb ? `${data.suburb}, ` : ""}${data.postcode}</td>
                </tr>
                ${data.preferredContactTime ? `
                <tr>
                  <td style="padding: 6px 0; color: #6b7280; font-size: 12px;">Best Time</td>
                  <td style="padding: 6px 0; color: #111827; font-weight: 500; text-transform: capitalize;">${data.preferredContactTime}</td>
                </tr>
                ` : ""}
              </table>
            </td>
          </tr>

          <!-- Eligibility & Services -->
          <tr>
            <td style="padding: 20px 32px;">
              <h2 style="margin: 0 0 16px; color: #062d16; font-size: 15px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; opacity: 0.6;">
                Eligibility & Interests
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 8px; padding: 20px; font-size: 13px;">
                <tr>
                  <td style="padding: 6px 0; color: #6b7280; width: 120px; font-size: 12px;">Income</td>
                  <td style="padding: 6px 0; color: #111827; font-weight: 500;">${incomeLabel}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #6b7280; font-size: 12px;">Rebate</td>
                  <td style="padding: 6px 0;">
                    <span style="display: inline-block; padding: 4px 12px; border-radius: 6px; font-size: 11px; font-weight: 600; ${data.rebateEligible
      ? "background-color: #dcfce7; color: #166534;"
      : "background-color: #fef3c7; color: #92400e;"
    }">
                      ${data.rebateEligible ? "✓ Eligible" : "Not Eligible"}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #6b7280; font-size: 12px;">Services</td>
                  <td style="padding: 6px 0; color: #111827; font-weight: 600;">${services}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Usage & Recommendations -->
          <tr>
            <td style="padding: 0 32px 28px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #062d16 0%, #0a4020 100%); border-radius: 8px; padding: 20px;">
                <tr>
                  <td style="width: 50%; padding: 8px;">
                    <p style="margin: 0 0 4px; color: #C2F32C; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Quarterly Bill</p>
                    <p style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700;">${formatCurrency(data.quarterlyBill)}</p>
                  </td>
                  <td style="width: 50%; padding: 8px; text-align: right;">
                    <p style="margin: 0 0 4px; color: #C2F32C; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Annual Savings</p>
                    <p style="margin: 0; color: #C2F32C; font-size: 20px; font-weight: 700;">${formatCurrency(data.estimatedAnnualSavings)}</p>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 12px 8px 8px;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="border-top: 1px solid rgba(194, 243, 44, 0.2); padding-top: 12px;">
                      <tr>
                        <td style="color: rgba(255, 255, 255, 0.7); font-size: 12px;">Daytime Usage</td>
                        <td style="text-align: right; color: #ffffff; font-weight: 600; font-size: 13px;">${data.daytimeUsagePercent}%</td>
                      </tr>
                      <tr>
                        <td style="padding-top: 8px; color: rgba(255, 255, 255, 0.7); font-size: 12px;">Recommended Battery</td>
                        <td style="padding-top: 8px; text-align: right;">
                          <span style="display: inline-block; padding: 4px 12px; border-radius: 6px; font-size: 11px; font-weight: 600; background-color: #C2F32C; color: #062d16;">
                            ${data.recommendedBattery}
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 16px 32px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #9ca3af; font-size: 11px;">
                Lead ID: ${data.leadId} • ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Melbourne", dateStyle: "short", timeStyle: "short" })}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [ADMIN_EMAIL],
      subject: `${temperatureEmoji} New Lead: ${data.fullName} - ${data.postcode} - Score: ${data.leadScore}/100`,
      html,
    });
    console.log("Admin notification email sent successfully");
  } catch (error) {
    console.error("Failed to send admin notification email:", error);
    throw error;
  }
}

/**
 * Send customer confirmation email
 */
export async function sendCustomerConfirmationEmail(data: CustomerEmailData) {
  const firstName = data.fullName.split(" ")[0];

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08); max-width: 600px;">
          <!-- Compact Header with Logo -->
          <tr>
            <td style="background: linear-gradient(135deg, #062d16 0%, #0a4020 100%); padding: 28px 32px; text-align: center; border-bottom: 3px solid #C2F32C;">
              <img src="https://pureplanet.net.au/Pure%20planet%20Logo/logo.png" alt="Pure Planet" style="height: 40px; margin-bottom: 14px; display: block; margin-left: auto; margin-right: auto;">
              <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 600; letter-spacing: -0.5px;">
                Thank You, ${firstName}!
              </h1>
              <p style="margin: 8px 0 0; color: #C2F32C; font-size: 13px; font-weight: 500;">
                Your solar quote request has been received
              </p>
            </td>
          </tr>

          <!-- Reference Number -->
          <tr>
            <td style="padding: 28px 32px 0; text-align: center;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color: #f0fdf4; border: 2px dashed #C2F32C; border-radius: 8px; padding: 16px; text-align: center;">
                    <p style="margin: 0; color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Reference Number</p>
                    <p style="margin: 6px 0 0; color: #062d16; font-size: 24px; font-weight: 700; letter-spacing: 2px;">${data.referenceNumber}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- What's Next -->
          <tr>
            <td style="padding: 28px 32px 24px;">
              <h2 style="margin: 0 0 18px; color: #062d16; font-size: 16px; font-weight: 600; letter-spacing: -0.3px;">
                What Happens Next?
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width: 36px; vertical-align: top;">
                          <div style="width: 28px; height: 28px; background-color: #C2F32C; border-radius: 50%; text-align: center; line-height: 28px; font-weight: 700; color: #062d16; font-size: 13px;">1</div>
                        </td>
                        <td style="padding-left: 12px;">
                          <p style="margin: 0; color: #111827; font-weight: 600; font-size: 14px;">We Review Your Details</p>
                          <p style="margin: 3px 0 0; color: #6b7280; font-size: 12px; line-height: 1.5;">Our team analyzes your energy usage and requirements.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width: 36px; vertical-align: top;">
                          <div style="width: 28px; height: 28px; background-color: #C2F32C; border-radius: 50%; text-align: center; line-height: 28px; font-weight: 700; color: #062d16; font-size: 13px;">2</div>
                        </td>
                        <td style="padding-left: 12px;">
                          <p style="margin: 0; color: #111827; font-weight: 600; font-size: 14px;">We Contact You</p>
                          <p style="margin: 3px 0 0; color: #6b7280; font-size: 12px; line-height: 1.5;">A Pure Planet specialist will call you within 24 hours.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width: 36px; vertical-align: top;">
                          <div style="width: 28px; height: 28px; background-color: #C2F32C; border-radius: 50%; text-align: center; line-height: 28px; font-weight: 700; color: #062d16; font-size: 13px;">3</div>
                        </td>
                        <td style="padding-left: 12px;">
                          <p style="margin: 0; color: #111827; font-weight: 600; font-size: 14px;">Personalized Quote</p>
                          <p style="margin: 3px 0 0; color: #6b7280; font-size: 12px; line-height: 1.5;">We'll prepare a customized solar solution for your home.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Summary Card -->
          <tr>
            <td style="padding: 0 32px 28px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #062d16 0%, #0a4020 100%); border-radius: 8px; overflow: hidden;">
                <tr>
                  <td style="padding: 20px;">
                    <h3 style="margin: 0 0 14px; color: #C2F32C; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Your Quote Summary</h3>
                    <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 13px;">
                      <tr>
                        <td style="padding: 6px 0; color: rgba(255, 255, 255, 0.7);">Rebate Status</td>
                        <td style="padding: 6px 0; text-align: right;">
                          <span style="display: inline-block; padding: 4px 12px; border-radius: 6px; font-size: 11px; font-weight: 600; ${data.rebateEligible
      ? "background-color: #dcfce7; color: #166534;"
      : "background-color: #fef3c7; color: #92400e;"
    }">
                            ${data.rebateEligible ? "✓ $1,400 Eligible" : "Federal Incentives"}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0 6px; color: rgba(255, 255, 255, 0.7);">Est. Annual Savings</td>
                        <td style="padding: 12px 0 6px; text-align: right; color: #C2F32C; font-weight: 700; font-size: 20px;">${formatCurrency(data.estimatedAnnualSavings)}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: rgba(255, 255, 255, 0.7);">Recommended Battery</td>
                        <td style="padding: 6px 0; text-align: right; color: #ffffff; font-weight: 600; font-size: 13px;">${data.recommendedBattery}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA Button -->
          <tr>
            <td style="padding: 0 32px 24px; text-align: center;">
              <a href="https://pureplanet.net.au/services" style="display: inline-block; background-color: #C2F32C; color: #062d16; text-decoration: none; padding: 14px 36px; border-radius: 8px; font-weight: 600; font-size: 14px; letter-spacing: -0.3px;">
                Explore Our Services →
              </a>
            </td>
          </tr>

          <!-- Contact Info -->
          <tr>
            <td style="padding: 0 32px 28px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb; overflow: hidden;">
                <tr>
                  <td style="padding: 18px; text-align: center;">
                    <p style="margin: 0 0 8px; color: #062d16; font-weight: 600; font-size: 13px;">Questions? We're here to help!</p>
                    <p style="margin: 0; color: #6b7280; font-size: 12px;">
                      <a href="mailto:info@pureplanet.net.au" style="color: #062d16; text-decoration: none; font-weight: 500;">info@pureplanet.net.au</a>
                      <span style="color: #d1d5db; margin: 0 8px;">•</span>
                      <a href="tel:0450010419" style="color: #062d16; text-decoration: none; font-weight: 500;">0450 010 419</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 20px 32px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 6px; color: #6b7280; font-size: 11px;">
                Pure Planet | 11 Sant Court Ravenhall VIC 3023
              </p>
              <p style="margin: 0; color: #9ca3af; font-size: 10px;">
                You received this because you requested a quote • <a href="https://pureplanet.net.au/privacy-policy" style="color: #9ca3af; text-decoration: none;">Privacy Policy</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [data.email],
      subject: `Your Pure Planet Solar Quote Request - Reference ${data.referenceNumber}`,
      html,
    });
    console.log("Customer confirmation email sent successfully");
  } catch (error) {
    console.error("Failed to send customer confirmation email:", error);
    throw error;
  }
}
