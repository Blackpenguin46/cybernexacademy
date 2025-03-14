import crypto from 'crypto';

/**
 * Simple CSRF token generation and validation
 */

// Hash algorithm
const ALGORITHM = 'sha256';
// Secret key used for token generation
const SECRET = process.env.CSRF_SECRET || 'cybernex_csrf_secret_2024';
// Token expiration time (1 hour in seconds)
const TOKEN_EXPIRY = 3600;

/**
 * Generate a CSRF token for a specific action
 */
export function generateCsrfToken(action: string): { token: string; expires: number } {
  const expires = Math.floor(Date.now() / 1000) + TOKEN_EXPIRY;
  const data = `${action}|${expires}`;
  const hmac = crypto.createHmac(ALGORITHM, SECRET);
  const hash = hmac.update(data).digest('hex');
  const token = Buffer.from(`${data}|${hash}`).toString('base64');
  
  return { token, expires };
}

/**
 * Validate a CSRF token
 */
export function validateCsrfToken(token: string, action: string): boolean {
  try {
    // Decode the token
    const decoded = Buffer.from(token, 'base64').toString();
    const [tokenAction, expiresStr, hash] = decoded.split('|');
    
    // Check if action matches
    if (tokenAction !== action) {
      return false;
    }
    
    // Check if token is expired
    const expires = parseInt(expiresStr, 10);
    const now = Math.floor(Date.now() / 1000);
    if (now > expires) {
      return false;
    }
    
    // Validate token signature
    const data = `${tokenAction}|${expires}`;
    const hmac = crypto.createHmac(ALGORITHM, SECRET);
    const expectedHash = hmac.update(data).digest('hex');
    
    return hash === expectedHash;
  } catch (error) {
    console.error('CSRF token validation error:', error);
    return false;
  }
} 