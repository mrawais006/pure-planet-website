// Form validation utilities

/**
 * Validates Australian postcode format
 * Victorian postcodes: 3000-3999 and 8000-8999 (PO boxes)
 */
export function validatePostcode(postcode: string): {
  valid: boolean;
  isVictorian: boolean;
  error?: string;
} {
  const trimmed = postcode.trim();

  if (!trimmed) {
    return { valid: false, isVictorian: false, error: 'Postcode is required' };
  }

  if (!/^\d{4}$/.test(trimmed)) {
    return { valid: false, isVictorian: false, error: 'Please enter a valid 4-digit postcode' };
  }

  const postcodeNum = parseInt(trimmed, 10);

  // Victorian postcodes: 3000-3999, also some 8000-8999 (PO boxes)
  const isVictorian =
    (postcodeNum >= 3000 && postcodeNum <= 3999) ||
    (postcodeNum >= 8000 && postcodeNum <= 8999);

  return { valid: true, isVictorian };
}

/**
 * Validates email address format
 */
export function validateEmail(email: string): { valid: boolean; error?: string } {
  const trimmed = email.trim();

  if (!trimmed) {
    return { valid: false, error: 'Email address is required' };
  }

  // RFC 5322 compliant email regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (!emailRegex.test(trimmed)) {
    return { valid: false, error: 'Please enter a valid email address' };
  }

  return { valid: true };
}

/**
 * Validates Australian phone number format
 * Accepts: 04XX XXX XXX, +614XX XXX XXX, etc.
 */
export function validatePhone(phone: string): { valid: boolean; error?: string } {
  // Remove all spaces, dashes, and parentheses
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');

  if (!cleaned) {
    return { valid: false, error: 'Phone number is required' };
  }

  // Australian mobile: 04XX XXX XXX (10 digits starting with 04)
  // Australian landline: 0X XXXX XXXX (10 digits starting with 0 but not 04)
  // International: +614XX XXX XXX (12 digits starting with +61)

  // Check for mobile starting with 04
  if (/^04\d{8}$/.test(cleaned)) {
    return { valid: true };
  }

  // Check for landline starting with 0X (not 04)
  if (/^0[2-3,7-8]\d{8}$/.test(cleaned)) {
    return { valid: true };
  }

  // Check for international format +61
  if (/^\+614\d{8}$/.test(cleaned)) {
    return { valid: true };
  }

  // Check for international format without +
  if (/^614\d{8}$/.test(cleaned)) {
    return { valid: true };
  }

  return {
    valid: false,
    error: 'Please enter a valid Australian phone number (e.g., 0412 345 678)',
  };
}

/**
 * Validates full name
 */
export function validateName(name: string): { valid: boolean; error?: string } {
  const trimmed = name.trim();

  if (!trimmed) {
    return { valid: false, error: 'Full name is required' };
  }

  if (trimmed.length < 2) {
    return { valid: false, error: 'Name must be at least 2 characters' };
  }

  if (trimmed.length > 100) {
    return { valid: false, error: 'Name must be less than 100 characters' };
  }

  // Check for at least one space (first and last name)
  if (!trimmed.includes(' ')) {
    return { valid: false, error: 'Please enter your full name (first and last name)' };
  }

  return { valid: true };
}

/**
 * Formats phone number for display
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');

  // Format as 04XX XXX XXX
  if (/^04\d{8}$/.test(cleaned)) {
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  }

  // Format landline as 0X XXXX XXXX
  if (/^0[2-3,7-8]\d{8}$/.test(cleaned)) {
    return `${cleaned.slice(0, 2)} ${cleaned.slice(2, 6)} ${cleaned.slice(6)}`;
  }

  return phone;
}

/**
 * Generates a reference number for leads
 * Format: PP-XXXXX (e.g., PP-12345)
 */
export function generateReferenceNumber(id: string): string {
  // Take last 5 characters of UUID and convert to uppercase
  const shortId = id.replace(/-/g, '').slice(-5).toUpperCase();
  return `PP-${shortId}`;
}
