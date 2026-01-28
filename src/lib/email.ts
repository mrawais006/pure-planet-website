import { Resend } from "resend";
import { getLeadTemperature, formatCurrency } from "./calculations";
import { INCOME_BRACKET_LABELS } from "@/app/quote-form/types";

const resend = new Resend(process.env.RESEND_API_KEY);

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "ummehabiba989@gmail.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "Pure Planet <support@pureplanet.net.au>";

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
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: #062d16; padding: 30px 40px; text-align: center;">
              <h1 style="margin: 0; color: #C2F32C; font-size: 24px; font-weight: 700;">
                ${temperatureEmoji} New Lead: ${temperatureLabel}
              </h1>
              <p style="margin: 10px 0 0; color: #ffffff; font-size: 14px;">
                Reference: ${data.referenceNumber}
              </p>
            </td>
          </tr>

          <!-- Lead Score Badge -->
          <tr>
            <td style="padding: 30px 40px 0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background: linear-gradient(135deg, ${
                    temperature === "hot" ? "#ef4444" : temperature === "warm" ? "#f59e0b" : "#6b7280"
                  }, ${
                    temperature === "hot" ? "#dc2626" : temperature === "warm" ? "#d97706" : "#4b5563"
                  }); border-radius: 12px; padding: 20px; text-align: center;">
                    <p style="margin: 0; color: #ffffff; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Lead Score</p>
                    <p style="margin: 10px 0 0; color: #ffffff; font-size: 48px; font-weight: 700;">${data.leadScore}/100</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Contact Information -->
          <tr>
            <td style="padding: 30px 40px;">
              <h2 style="margin: 0 0 20px; color: #062d16; font-size: 18px; font-weight: 600; border-bottom: 2px solid #C2F32C; padding-bottom: 10px;">
                Contact Information
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; width: 140px;">Name</td>
                  <td style="padding: 8px 0; color: #111827; font-weight: 500;">${data.fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;">Email</td>
                  <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #062d16; text-decoration: none;">${data.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;">Phone</td>
                  <td style="padding: 8px 0;"><a href="tel:${data.phone}" style="color: #062d16; text-decoration: none; font-weight: 500;">${data.phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;">Location</td>
                  <td style="padding: 8px 0; color: #111827;">${data.suburb ? `${data.suburb}, ` : ""}${data.postcode}</td>
                </tr>
                ${data.preferredContactTime ? `
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;">Best Time</td>
                  <td style="padding: 8px 0; color: #111827; text-transform: capitalize;">${data.preferredContactTime}</td>
                </tr>
                ` : ""}
              </table>
            </td>
          </tr>

          <!-- Eligibility & Services -->
          <tr>
            <td style="padding: 0 40px 30px;">
              <h2 style="margin: 0 0 20px; color: #062d16; font-size: 18px; font-weight: 600; border-bottom: 2px solid #C2F32C; padding-bottom: 10px;">
                Eligibility & Interests
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; width: 140px;">Income Bracket</td>
                  <td style="padding: 8px 0; color: #111827;">${incomeLabel}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;">Rebate Eligible</td>
                  <td style="padding: 8px 0;">
                    <span style="display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; ${
                      data.rebateEligible
                        ? "background-color: #dcfce7; color: #166534;"
                        : "background-color: #fef3c7; color: #92400e;"
                    }">
                      ${data.rebateEligible ? "Yes - Eligible" : "No - Over threshold"}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;">Interested In</td>
                  <td style="padding: 8px 0; color: #111827; font-weight: 500;">${services}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Usage & Recommendations -->
          <tr>
            <td style="padding: 0 40px 30px;">
              <h2 style="margin: 0 0 20px; color: #062d16; font-size: 18px; font-weight: 600; border-bottom: 2px solid #C2F32C; padding-bottom: 10px;">
                Usage & Recommendations
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; width: 140px;">Quarterly Bill</td>
                  <td style="padding: 8px 0; color: #111827; font-weight: 600;">${formatCurrency(data.quarterlyBill)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;">Daytime Usage</td>
                  <td style="padding: 8px 0; color: #111827;">${data.daytimeUsagePercent}%</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;">Est. Annual Savings</td>
                  <td style="padding: 8px 0; color: #166534; font-weight: 600;">${formatCurrency(data.estimatedAnnualSavings)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;">Recommended Battery</td>
                  <td style="padding: 8px 0;">
                    <span style="display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; background-color: #C2F32C; color: #062d16;">
                      ${data.recommendedBattery}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 20px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #6b7280; font-size: 12px;">
                Lead ID: ${data.leadId}<br>
                Submitted: ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Melbourne" })}
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
      from: "Pure Planet Leads <onboarding@resend.dev>",
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
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: #062d16; padding: 40px; text-align: center;">
              <img src="https://pureplanet.net.au/Pure%20planet%20Logo/logo.png" alt="Pure Planet" style="height: 50px; margin-bottom: 20px;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">
                Thank You, ${firstName}!
              </h1>
              <p style="margin: 15px 0 0; color: #C2F32C; font-size: 16px;">
                Your solar quote request has been received
              </p>
            </td>
          </tr>

          <!-- Reference Number -->
          <tr>
            <td style="padding: 30px 40px 0; text-align: center;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color: #f0fdf4; border: 2px dashed #C2F32C; border-radius: 12px; padding: 20px; text-align: center;">
                    <p style="margin: 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Your Reference Number</p>
                    <p style="margin: 10px 0 0; color: #062d16; font-size: 28px; font-weight: 700; letter-spacing: 2px;">${data.referenceNumber}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- What's Next -->
          <tr>
            <td style="padding: 30px 40px;">
              <h2 style="margin: 0 0 20px; color: #062d16; font-size: 20px; font-weight: 600;">
                What Happens Next?
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 15px 0; border-bottom: 1px solid #e5e7eb;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width: 40px; vertical-align: top;">
                          <div style="width: 32px; height: 32px; background-color: #C2F32C; border-radius: 50%; text-align: center; line-height: 32px; font-weight: 700; color: #062d16;">1</div>
                        </td>
                        <td style="padding-left: 15px;">
                          <p style="margin: 0; color: #111827; font-weight: 600;">We Review Your Details</p>
                          <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Our team is analyzing your energy usage and requirements.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 0; border-bottom: 1px solid #e5e7eb;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width: 40px; vertical-align: top;">
                          <div style="width: 32px; height: 32px; background-color: #C2F32C; border-radius: 50%; text-align: center; line-height: 32px; font-weight: 700; color: #062d16;">2</div>
                        </td>
                        <td style="padding-left: 15px;">
                          <p style="margin: 0; color: #111827; font-weight: 600;">We Contact You</p>
                          <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">A Pure Planet specialist will call you within 24 hours.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 0;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width: 40px; vertical-align: top;">
                          <div style="width: 32px; height: 32px; background-color: #C2F32C; border-radius: 50%; text-align: center; line-height: 32px; font-weight: 700; color: #062d16;">3</div>
                        </td>
                        <td style="padding-left: 15px;">
                          <p style="margin: 0; color: #111827; font-weight: 600;">Personalized Quote</p>
                          <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">We'll prepare a customized solar solution for your home.</p>
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
            <td style="padding: 0 40px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 12px; overflow: hidden;">
                <tr>
                  <td style="padding: 25px;">
                    <h3 style="margin: 0 0 15px; color: #062d16; font-size: 16px; font-weight: 600;">Your Quote Summary</h3>
                    <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 14px;">
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280;">Rebate Eligibility</td>
                        <td style="padding: 8px 0; text-align: right;">
                          <span style="display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; ${
                            data.rebateEligible
                              ? "background-color: #dcfce7; color: #166534;"
                              : "background-color: #fef3c7; color: #92400e;"
                          }">
                            ${data.rebateEligible ? "Eligible for $1,400" : "Federal Incentives Apply"}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280;">Estimated Annual Savings</td>
                        <td style="padding: 8px 0; text-align: right; color: #166534; font-weight: 700; font-size: 18px;">${formatCurrency(data.estimatedAnnualSavings)}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280;">Recommended Battery</td>
                        <td style="padding: 8px 0; text-align: right; color: #062d16; font-weight: 600;">${data.recommendedBattery}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA Button -->
          <tr>
            <td style="padding: 0 40px 30px; text-align: center;">
              <a href="https://pureplanet.net.au/services" style="display: inline-block; background-color: #C2F32C; color: #062d16; text-decoration: none; padding: 16px 40px; border-radius: 30px; font-weight: 700; font-size: 16px;">
                Explore Our Services
              </a>
            </td>
          </tr>

          <!-- Contact Info -->
          <tr>
            <td style="padding: 0 40px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #062d16; border-radius: 12px; overflow: hidden;">
                <tr>
                  <td style="padding: 25px; text-align: center;">
                    <p style="margin: 0 0 10px; color: #C2F32C; font-weight: 600; font-size: 14px;">Have questions? Get in touch!</p>
                    <p style="margin: 0; color: #ffffff; font-size: 14px;">
                      <a href="mailto:info@pureplanet.net.au" style="color: #ffffff; text-decoration: none;">info@pureplanet.net.au</a>
                      <span style="color: #6b7280; margin: 0 10px;">|</span>
                      <a href="tel:1300123456" style="color: #ffffff; text-decoration: none;">1300 123 456</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 25px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 10px; color: #6b7280; font-size: 12px;">
                Pure Planet | 11 Sant Court, Ravenhall VIC 3023
              </p>
              <p style="margin: 0; color: #9ca3af; font-size: 11px;">
                You received this email because you requested a solar quote from Pure Planet.<br>
                <a href="https://pureplanet.net.au/privacy-policy" style="color: #9ca3af;">Privacy Policy</a>
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
      from: "Pure Planet <onboarding@resend.dev>",
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
