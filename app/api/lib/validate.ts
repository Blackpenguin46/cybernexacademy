// Simple validation utilities for API inputs

/**
 * Validates an email address format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Sanitizes a string by removing potential XSS vectors
 */
export function sanitizeString(str: string): string {
  if (!str) return '';
  
  // Replace < and > with HTML entities to prevent script injection
  return str
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .trim();
}

/**
 * Validates and sanitizes an email address
 */
export function validateEmail(email: string): { valid: boolean; sanitized: string; message?: string } {
  if (!email) {
    return { valid: false, sanitized: '', message: 'Email is required' };
  }
  
  const sanitized = sanitizeString(email);
  
  if (!isValidEmail(sanitized)) {
    return { valid: false, sanitized, message: 'Invalid email format' };
  }
  
  return { valid: true, sanitized };
}

/**
 * Validates if a string is within a character limit
 */
export function validateStringLength(str: string, minLength = 0, maxLength = 500): { 
  valid: boolean; 
  sanitized: string; 
  message?: string 
} {
  if (!str && minLength > 0) {
    return { valid: false, sanitized: '', message: 'Value is required' };
  }
  
  const sanitized = sanitizeString(str || '');
  
  if (sanitized.length < minLength) {
    return { 
      valid: false, 
      sanitized, 
      message: `Value must be at least ${minLength} characters` 
    };
  }
  
  if (sanitized.length > maxLength) {
    return { 
      valid: false, 
      sanitized: sanitized.substring(0, maxLength), 
      message: `Value exceeds maximum length of ${maxLength} characters` 
    };
  }
  
  return { valid: true, sanitized };
}

/**
 * Validates if a value is a number within a range
 */
export function validateNumber(value: any, min?: number, max?: number): {
  valid: boolean;
  sanitized: number | null;
  message?: string;
} {
  // Convert to number
  const num = Number(value);
  
  // Check if it's a valid number
  if (isNaN(num)) {
    return { valid: false, sanitized: null, message: 'Value must be a number' };
  }
  
  // Check minimum
  if (min !== undefined && num < min) {
    return { valid: false, sanitized: min, message: `Value must be at least ${min}` };
  }
  
  // Check maximum
  if (max !== undefined && num > max) {
    return { valid: false, sanitized: max, message: `Value must be at most ${max}` };
  }
  
  return { valid: true, sanitized: num };
} 