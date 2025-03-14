# CyberNex Academy - Security Features

This document outlines the security features implemented in the CyberNex Academy website to protect both the application and its users.

## Security Headers

The application implements the following security headers to protect against common web vulnerabilities:

- **Content Security Policy (CSP)**: Controls which resources can be loaded and executed, preventing XSS attacks
- **X-XSS-Protection**: Additional layer of protection against cross-site scripting
- **X-Content-Type-Options**: Prevents MIME type sniffing
- **X-Frame-Options**: Prevents your site from being framed (clickjacking protection)
- **Strict Transport Security**: Forces HTTPS connections
- **Referrer Policy**: Controls what information is sent in HTTP referrer headers
- **Permissions Policy**: Restricts access to browser features like camera and microphone

## API Rate Limiting

To prevent abuse and DDoS attacks, the application implements rate limiting for all API endpoints:

- Regular endpoints: 5 requests per minute per IP address
- Test email endpoint: 3 requests per minute per IP address
- Admin endpoints: Stricter limit of 3 requests per 5 minutes
- CSRF token endpoint: 10 requests per minute

Rate limits include proper response headers:
- `Retry-After`: When the limit will reset
- `X-RateLimit-Limit`: The rate limit quota
- `X-RateLimit-Remaining`: Number of requests remaining
- `X-RateLimit-Reset`: Timestamp when the limit resets

## Input Validation and Sanitization

- All user inputs are validated and sanitized before processing
- Email addresses are validated for proper format
- Strings are sanitized to prevent XSS attacks
- Input lengths are checked to prevent abuse
- Proper error messaging protects sensitive information

## CSRF Protection

- Token-based CSRF protection for all form submissions
- Tokens are signed with HMAC-SHA256
- Tokens include expiration times (1 hour validity)
- Tokens are action-specific for additional security

## Authentication for Admin Routes

- Basic authentication for all admin routes
- Environment variable-based credentials
- Proper HTTP 401 response with WWW-Authenticate header
- Additional authorization checks in admin API endpoints

## Email Security

- Unsubscribe links for all marketing emails
- Token-based unsubscribe verification
- Secure domain verification with Resend
- Proper sender addresses and formatting

## Secure Database Access

- Environment variable-based credentials
- Least privilege principle for database access
- No sensitive data in client-side code

## Additional Security Considerations

- HTTPS enforced through Strict Transport Security
- Rate limiting to prevent brute force attacks
- Input validation to prevent injection attacks
- Output encoding to prevent XSS

## Security Contact

For security concerns, please contact: security@cybernexacademy.com

## Future Improvements

- Implement JWT-based authentication for users
- Add two-factor authentication for admin access
- Implement IP-based blocking for suspicious activity
- Regular security audits and penetration testing 