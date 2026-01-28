// Quote Form Calculations

import { LEAD_SCORE } from '@/app/quote-form/types';

/**
 * Calculate estimated daily kWh usage from quarterly bill
 * Formula: (quarterlyBill / 90 days) / $0.30 per kWh average
 */
export function calculateDailyKwh(quarterlyBill: number): number {
  const avgPricePerKwh = 0.30;
  const daysPerQuarter = 90;

  return Number((quarterlyBill / daysPerQuarter / avgPricePerKwh).toFixed(2));
}

/**
 * Calculate estimated annual savings with solar + battery
 * Assumes 70% reduction in electricity costs
 */
export function calculateAnnualSavings(quarterlyBill: number): number {
  const savingsRate = 0.70;
  const quartersPerYear = 4;

  return Number((quarterlyBill * quartersPerYear * savingsRate).toFixed(2));
}

/**
 * Determine recommended battery based on usage
 * - High daily kWh (>15) or high quarterly bill (>=$500): NeoVolt
 * - Otherwise: FoxESS
 */
export function getRecommendedBattery(
  quarterlyBill: number,
  dailyKwh?: number
): 'FoxESS' | 'NeoVolt' {
  const calculatedDailyKwh = dailyKwh ?? calculateDailyKwh(quarterlyBill);

  if (calculatedDailyKwh > 15 || quarterlyBill >= 500) {
    return 'NeoVolt';
  }

  return 'FoxESS';
}

/**
 * Check if income bracket qualifies for Victorian rebate
 * Eligible if income is $210,000 or less
 */
export function isRebateEligible(incomeBracket: string): boolean {
  const eligibleBrackets = ['under_100k', '100k_150k', '150k_210k'];
  return eligibleBrackets.includes(incomeBracket);
}

/**
 * Calculate lead score based on various factors
 * Max score: 100
 */
export function calculateLeadScore({
  isVictorian,
  rebateEligible,
  quarterlyBill,
  interestedSolar,
  interestedBattery,
  interestedHeatpump,
  hasPhone,
}: {
  isVictorian: boolean;
  rebateEligible: boolean;
  quarterlyBill: number;
  interestedSolar: boolean;
  interestedBattery: boolean;
  interestedHeatpump: boolean;
  hasPhone: boolean;
}): number {
  let score = 0;

  // Victorian postcode: +10
  if (isVictorian) {
    score += LEAD_SCORE.VICTORIAN_POSTCODE;
  }

  // Rebate eligible (income <= $210k): +30
  if (rebateEligible) {
    score += LEAD_SCORE.REBATE_ELIGIBLE;
  }

  // High quarterly bill (> $500): +20
  if (quarterlyBill > LEAD_SCORE.HIGH_BILL_THRESHOLD) {
    score += LEAD_SCORE.HIGH_BILL;
  }

  // Services selected: +10 per service
  if (interestedSolar) {
    score += LEAD_SCORE.PER_SERVICE;
  }
  if (interestedBattery) {
    score += LEAD_SCORE.PER_SERVICE;
  }
  if (interestedHeatpump) {
    score += LEAD_SCORE.PER_SERVICE;
  }

  // Phone provided: +10
  if (hasPhone) {
    score += LEAD_SCORE.PHONE_PROVIDED;
  }

  // Cap at max score
  return Math.min(score, LEAD_SCORE.MAX_SCORE);
}

/**
 * Get lead temperature based on score
 */
export function getLeadTemperature(score: number): 'hot' | 'warm' | 'standard' {
  if (score >= 70) return 'hot';
  if (score >= 50) return 'warm';
  return 'standard';
}

/**
 * Format currency for display
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format number with commas
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-AU').format(num);
}
