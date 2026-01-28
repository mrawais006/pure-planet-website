import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";
import {
  calculateDailyKwh,
  calculateAnnualSavings,
  calculateLeadScore,
  getRecommendedBattery,
  isRebateEligible,
} from "@/lib/calculations";
import { generateReferenceNumber } from "@/lib/validation";
import { sendAdminNotificationEmail, sendCustomerConfirmationEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Extract form data
    const {
      postcode,
      isVictorian,
      incomeBracket,
      quarterlyBill,
      daytimeUsagePercent,
      interestedSolar,
      interestedBattery,
      interestedHeatpump,
      fullName,
      email,
      phone,
      suburb,
      preferredContactTime,
    } = body;

    // Basic validation
    if (!postcode || !incomeBracket || !fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Calculate derived values
    const rebateEligible = isRebateEligible(incomeBracket);
    const estimatedDailyKwh = calculateDailyKwh(quarterlyBill);
    const estimatedAnnualSavings = calculateAnnualSavings(quarterlyBill);
    const recommendedBattery = getRecommendedBattery(quarterlyBill, estimatedDailyKwh);
    const leadScore = calculateLeadScore({
      isVictorian: isVictorian ?? true,
      rebateEligible,
      quarterlyBill,
      interestedSolar: interestedSolar ?? false,
      interestedBattery: interestedBattery ?? false,
      interestedHeatpump: interestedHeatpump ?? false,
      hasPhone: !!phone,
    });

    // Get tracking info from headers
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "";
    const userAgent = request.headers.get("user-agent") || "";

    // Get UTM parameters from query params
    const url = new URL(request.url);
    const utmSource = url.searchParams.get("utm_source") || "";
    const utmMedium = url.searchParams.get("utm_medium") || "";
    const utmCampaign = url.searchParams.get("utm_campaign") || "";

    // Prepare lead data for database
    const leadData = {
      postcode,
      is_victorian: isVictorian ?? true,
      income_bracket: incomeBracket,
      rebate_eligible: rebateEligible,
      quarterly_bill: quarterlyBill,
      daytime_usage_percent: daytimeUsagePercent,
      estimated_daily_kwh: estimatedDailyKwh,
      interested_solar: interestedSolar ?? false,
      interested_battery: interestedBattery ?? false,
      interested_heatpump: interestedHeatpump ?? false,
      full_name: fullName,
      email,
      phone,
      suburb: suburb || null,
      preferred_contact_time: preferredContactTime || null,
      recommended_battery: recommendedBattery,
      estimated_annual_savings: estimatedAnnualSavings,
      lead_score: leadScore,
      lead_status: "new",
      utm_source: utmSource || null,
      utm_medium: utmMedium || null,
      utm_campaign: utmCampaign || null,
      ip_address: ip.split(",")[0].trim() || null,
      user_agent: userAgent || null,
    };

    // Save to Supabase
    const supabase = createServerClient();
    const { data, error: dbError } = await supabase
      .from("leads")
      .insert(leadData as Record<string, unknown>)
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { error: "Failed to save lead. Please try again." },
        { status: 500 }
      );
    }

    // Extract lead data
    const lead = data as {
      id: string;
      created_at: string;
      [key: string]: unknown;
    };

    // Generate reference number
    const referenceNumber = generateReferenceNumber(lead.id);

    // Send emails asynchronously (don't wait for them)
    Promise.all([
      sendAdminNotificationEmail({
        leadId: lead.id,
        referenceNumber,
        fullName,
        email,
        phone,
        postcode,
        suburb,
        incomeBracket,
        rebateEligible,
        quarterlyBill,
        daytimeUsagePercent,
        interestedSolar,
        interestedBattery,
        interestedHeatpump,
        recommendedBattery,
        estimatedAnnualSavings,
        leadScore,
        preferredContactTime,
      }),
      sendCustomerConfirmationEmail({
        referenceNumber,
        fullName,
        email,
        rebateEligible,
        estimatedAnnualSavings,
        recommendedBattery,
        quarterlyBill,
      }),
    ]).catch((emailError) => {
      // Log email errors but don't fail the request
      console.error("Email sending error:", emailError);
    });

    // Return success response
    return NextResponse.json({
      success: true,
      leadId: lead.id,
      referenceNumber,
      data: {
        id: lead.id,
        created_at: lead.created_at,
        lead_score: leadScore,
        recommended_battery: recommendedBattery,
        estimated_annual_savings: estimatedAnnualSavings,
        estimated_daily_kwh: estimatedDailyKwh,
        rebate_eligible: rebateEligible,
      },
    });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
