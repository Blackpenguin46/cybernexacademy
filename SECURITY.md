# Security Policy

## Supported Versions

CyberNex Academy maintains security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| 0.9.x   | :white_check_mark: |
| < 0.9.0 | :x:                |

## Reporting a Vulnerability

We take the security of CyberNex Academy seriously. If you believe you have found a security vulnerability, please report it to us as described below.

### Reporting Process

1. **DO NOT** create a public GitHub issue for the vulnerability.
2. Email your findings to [security@cybernex.academy](mailto:security@cybernex.academy)
3. Alternatively, you can submit a report through our HackerOne program: [hackerone.com/cybernex](https://hackerone.com/cybernex)

### What to Include

- Type of issue (e.g., buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

### Response Process

- We aim to acknowledge receipt of your vulnerability report within 48 hours.
- Our security team will investigate and provide an initial assessment within 5 business days.
- We will keep you informed about the progress of the fix.
- Once the issue is resolved, we will publicly acknowledge your responsible disclosure (if desired).

### Bug Bounty Program

We currently offer rewards for responsible disclosure of security vulnerabilities:

- Critical vulnerabilities: Up to $5,000
- High severity vulnerabilities: Up to $2,500
- Medium severity vulnerabilities: Up to $1,000
- Low severity vulnerabilities: Up to $500

### Scope

The following are in scope for security reports:
- The CyberNex Academy web application (https://cybernex.academy)
- API endpoints (https://api.cybernex.academy)
- User authentication systems
- Course delivery infrastructure
- Payment processing systems

### Out of Scope

The following are NOT in scope:
- Theoretical vulnerabilities without proof of exploitation
- Social engineering attacks
- DOS/DDOS attacks
- Issues related to email spam
- Issues on third-party sites or services
- Issues in third-party packages (report to the package maintainers instead)

## Security Measures

CyberNex Academy implements the following security measures:

- SSL/TLS encryption for all data in transit
- Row Level Security (RLS) in our Supabase database
- Rate limiting on API endpoints
- Content Security Policy (CSP) headers
- Regular security audits and penetration testing
- Automated vulnerability scanning
- Two-factor authentication support
- Regular security updates and patch management

## Responsible Disclosure

We kindly ask you to:

- Allow us reasonable time to investigate and fix the vulnerability before making it public
- Make a good faith effort to avoid privacy violations, destruction of data, and interruption or degradation of our services
- Not access or modify other users' data without explicit permission
- Not exploit the vulnerability for purposes other than proof-of-concept

## Hall of Fame

We maintain a public Hall of Fame to acknowledge security researchers who have helped improve our security. Researchers will be listed (with permission) after the vulnerability has been fixed. 