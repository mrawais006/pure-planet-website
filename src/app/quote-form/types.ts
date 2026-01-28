// Quote Form TypeScript Types

export type FormStep = 1 | 2 | 3 | 4 | 5;

export type IncomeBracket =
  | 'under_100k'
  | '100k_150k'
  | '150k_210k'
  | 'over_210k';

export const INCOME_BRACKET_LABELS: Record<IncomeBracket, string> = {
  under_100k: 'Under $100,000',
  '100k_150k': '$100,000 - $150,000',
  '150k_210k': '$150,000 - $210,000',
  over_210k: 'Over $210,000',
};

export type PreferredContactTime = 'morning' | 'afternoon' | 'evening' | '';

export const CONTACT_TIME_LABELS: Record<PreferredContactTime, string> = {
  morning: 'Morning (8am - 12pm)',
  afternoon: 'Afternoon (12pm - 5pm)',
  evening: 'Evening (5pm - 8pm)',
  '': 'No preference',
};

export interface QuoteFormData {
  // Step 1: Location
  postcode: string;
  isVictorian: boolean;

  // Step 2: Income
  incomeBracket: IncomeBracket | '';
  rebateEligible: boolean;

  // Step 3: Usage
  quarterlyBill: number;
  daytimeUsagePercent: number;

  // Step 4: Services
  interestedSolar: boolean;
  interestedBattery: boolean;
  interestedHeatpump: boolean;

  // Step 5: Contact
  fullName: string;
  email: string;
  phone: string;
  suburb: string;
  preferredContactTime: PreferredContactTime;
}

export interface FormErrors {
  postcode?: string;
  incomeBracket?: string;
  quarterlyBill?: string;
  daytimeUsagePercent?: string;
  services?: string;
  fullName?: string;
  email?: string;
  phone?: string;
}

export interface LeadSubmissionResponse {
  success: boolean;
  leadId?: string;
  referenceNumber?: string;
  error?: string;
  data?: {
    id: string;
    lead_score: number;
    recommended_battery: string;
    estimated_annual_savings: number;
    rebate_eligible: boolean;
  };
}

export interface LeadResult {
  id: string;
  referenceNumber: string;
  createdAt: string;
  fullName: string;
  email: string;
  postcode: string;
  quarterlyBill: number;
  daytimeUsagePercent: number;
  rebateEligible: boolean;
  leadScore: number;
  recommendedBattery: 'FoxESS' | 'NeoVolt';
  estimatedAnnualSavings: number;
  estimatedDailyKwh: number;
  interestedSolar: boolean;
  interestedBattery: boolean;
  interestedHeatpump: boolean;
}

// Battery comparison data types
export interface BatterySpec {
  name: string;
  bestFor: string;
  capacity: string;
  depthOfDischarge: string;
  cycleLife: string;
  warranty: string;
  installation: string;
  image: string;
}

export const BATTERY_SPECS: Record<'FoxESS' | 'NeoVolt', BatterySpec> = {
  FoxESS: {
    name: 'Fox ESS EQ Series',
    bestFor: 'Budget-conscious, starter homes',
    capacity: 'Stackable modules (scalable)',
    depthOfDischarge: '90%',
    cycleLife: '6,000+ cycles',
    warranty: 'Standard',
    installation: 'Plug & play, stackable',
    image: '/images/batteries/fox-ess.png',
  },
  NeoVolt: {
    name: 'NeoVolt BW-BAT-9.6P',
    bestFor: 'High usage, EV owners, long-term value',
    capacity: '9.6 kWh (9.1 kWh usable)',
    depthOfDischarge: '96%',
    cycleLife: '8,000 cycles',
    warranty: '5-10 Years',
    installation: 'Parallel (1-6 units)',
    image: '/images/batteries/neovolt.png',
  },
};

// Lead scoring thresholds
export const LEAD_SCORE = {
  VICTORIAN_POSTCODE: 10,
  REBATE_ELIGIBLE: 30,
  HIGH_BILL: 20,
  PER_SERVICE: 10,
  PHONE_PROVIDED: 10,
  MAX_SCORE: 100,
  HIGH_BILL_THRESHOLD: 500,
};
