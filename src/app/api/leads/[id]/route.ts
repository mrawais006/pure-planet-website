import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";
import { generateReferenceNumber } from "@/lib/validation";

interface LeadData {
  id: string;
  created_at: string;
  full_name: string;
  email: string;
  phone: string;
  postcode: string;
  suburb: string | null;
  is_victorian: boolean;
  income_bracket: string;
  rebate_eligible: boolean;
  quarterly_bill: number;
  daytime_usage_percent: number;
  estimated_daily_kwh: number | null;
  interested_solar: boolean;
  interested_battery: boolean;
  interested_heatpump: boolean;
  recommended_battery: string | null;
  estimated_annual_savings: number | null;
  lead_score: number;
  lead_status: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { error: "Lead ID is required" },
        { status: 400 }
      );
    }

    // Validate UUID format
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(id)) {
      return NextResponse.json(
        { error: "Invalid lead ID format" },
        { status: 400 }
      );
    }

    const supabase = createServerClient();
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        return NextResponse.json(
          { error: "Lead not found" },
          { status: 404 }
        );
      }
      console.error("Database error:", error);
      return NextResponse.json(
        { error: "Failed to retrieve lead" },
        { status: 500 }
      );
    }

    // Type assertion for the lead data
    const lead = data as LeadData;

    // Generate reference number
    const referenceNumber = generateReferenceNumber(lead.id);

    // Return lead data with transformed keys for frontend
    return NextResponse.json({
      success: true,
      data: {
        id: lead.id,
        referenceNumber,
        createdAt: lead.created_at,
        fullName: lead.full_name,
        email: lead.email,
        phone: lead.phone,
        postcode: lead.postcode,
        suburb: lead.suburb,
        isVictorian: lead.is_victorian,
        incomeBracket: lead.income_bracket,
        rebateEligible: lead.rebate_eligible,
        quarterlyBill: lead.quarterly_bill,
        daytimeUsagePercent: lead.daytime_usage_percent,
        estimatedDailyKwh: lead.estimated_daily_kwh,
        interestedSolar: lead.interested_solar,
        interestedBattery: lead.interested_battery,
        interestedHeatpump: lead.interested_heatpump,
        recommendedBattery: lead.recommended_battery,
        estimatedAnnualSavings: lead.estimated_annual_savings,
        leadScore: lead.lead_score,
        leadStatus: lead.lead_status,
      },
    });
  } catch (error) {
    console.error("Lead retrieval error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
