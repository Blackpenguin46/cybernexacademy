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

// Use Web Crypto API instead of Node's crypto module
async function generateNonce(): Promise<string> {
  const buffer = new Uint8Array(16);
  crypto.getRandomValues(buffer);
  return Array.from(buffer)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

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

// Rate limiting using Edge Runtime compatible approach
const rateLimit = new Map();

export function checkRateLimit(ip: string, limit: number = 100, window: number = 60000): boolean {
  const now = Date.now();
  const windowStart = now - window;

  // Clean up old entries
  const entries = Array.from(rateLimit.entries());
  for (const [key, timestamp] of entries) {
    if (timestamp < windowStart) {
      rateLimit.delete(key);
    }
  }

  // Check rate limit
  const count = entries.filter(
    ([key, timestamp]) => key.startsWith(ip) && timestamp > windowStart
  ).length;

  if (count >= limit) {
    return false;
  }

  // Add new request
  rateLimit.set(`${ip}-${now}`, now);
  return true;
}

// Security Middleware
export async function securityMiddleware(request: NextRequest) {
  const nonce = await generateNonce();
  const response = NextResponse.next();
  
  // Security Headers
  const headers = response.headers;

  // HSTS
  headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  );

  // CSP with nonce
  headers.set(
    'Content-Security-Policy',
    `default-src 'self'; \
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https:; \
    style-src 'self' 'unsafe-inline'; \
    img-src 'self' blob: data: https:; \
    font-src 'self'; \
    object-src 'none'; \
    base-uri 'self'; \
    form-action 'self'; \
    frame-ancestors 'none'; \
    block-all-mixed-content; \
    upgrade-insecure-requests;`
  );

  // XSS Protection
  headers.set('X-XSS-Protection', '1; mode=block');

  // Prevent MIME type sniffing
  headers.set('X-Content-Type-Options', 'nosniff');

  // Referrer Policy
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Frame Options
  headers.set('X-Frame-Options', 'DENY');

  // Permissions Policy
  headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  );
  
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

export function getSecureHeaders() {
  return {
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    'X-XSS-Protection': '1; mode=block',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'X-Frame-Options': 'DENY',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  };
} 