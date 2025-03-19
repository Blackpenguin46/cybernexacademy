import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { headers } from 'next/headers';
import { createHash } from 'crypto';

// CSP Directives
const cspDirectives = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", 'https://analytics.vercel.com'],
  'style-src': ["'self'", "'unsafe-inline'"],
  'img-src': ["'self'", 'data:', 'https:'],
  'font-src': ["'self'", 'data:'],
  'connect-src': [
    "'self'",
    'https://*.vercel.app',
    'https://supabase.co',
    'https://*.supabase.co'
  ],
  'frame-ancestors': ["'none'"],
  'form-action': ["'self'"],
  'base-uri': ["'self'"],
  'object-src': ["'none'"]
};

// Security Headers
export const securityHeaders = {
  // HSTS
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  
  // Content-Security-Policy
  'Content-Security-Policy': Object.entries(cspDirectives)
    .map(([key, values]) => `${key} ${values.join(' ')}`)
    .join('; '),
  
  // Prevent XSS attacks
  'X-XSS-Protection': '1; mode=block',
  
  // Prevent MIME type sniffing
  'X-Content-Type-Options': 'nosniff',
  
  // Prevent clickjacking
  'X-Frame-Options': 'DENY',
  
  // Control referrer information
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  
  // Permissions Policy (formerly Feature-Policy)
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
};

// XSS Protection utilities
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

// SQL Injection Protection
export const validateInput = (input: string): boolean => {
  // Check for common SQL injection patterns
  const sqlInjectionPattern = /(\b(union|select|insert|update|delete|drop|alter)\b)|(['"]|--|#|\/\*|\*\/)/i;
  return !sqlInjectionPattern.test(input);
};

// Generate nonce for CSP
export const generateNonce = (): string => {
  return createHash('sha256')
    .update(crypto.getRandomValues(new Uint8Array(32)).toString())
    .digest('base64');
};

// CSRF Token Generation
export const generateCSRFToken = (): string => {
  return createHash('sha256')
    .update(crypto.getRandomValues(new Uint8Array(32)).toString())
    .digest('hex');
};

// Validate CSRF Token
export const validateCSRFToken = (token: string, storedToken: string): boolean => {
  return token === storedToken;
};

// Rate Limiting
const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 100;

export const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const userRequests = rateLimit.get(ip) || [];
  
  // Remove old requests
  const recentRequests = userRequests.filter(
    (timestamp: number) => now - timestamp < RATE_LIMIT_WINDOW
  );
  
  if (recentRequests.length >= MAX_REQUESTS) {
    return false;
  }
  
  recentRequests.push(now);
  rateLimit.set(ip, recentRequests);
  return true;
};

// Security Middleware
export async function securityMiddleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Apply security headers
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  
  // Rate limiting
  const ip = request.ip || 'unknown';
  if (!checkRateLimit(ip)) {
    return new NextResponse('Too Many Requests', { status: 429 });
  }
  
  return response;
}

// Input validation for forms
export const validateFormInput = (data: Record<string, string>): boolean => {
  for (const [key, value] of Object.entries(data)) {
    // Check for SQL injection patterns
    if (!validateInput(value)) {
      return false;
    }
    
    // Check for XSS patterns
    if (value.includes('<script>') || value.includes('javascript:')) {
      return false;
    }
    
    // Check for suspicious file paths
    if (value.includes('../') || value.includes('..\\')) {
      return false;
    }
  }
  return true;
};

// Secure cookie options
export const secureCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
  path: '/',
  maxAge: 7200 // 2 hours
}; 