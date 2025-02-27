export const env = {
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  NODE_ENV: process.env.NODE_ENV || 'development',
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
}

export const siteConfig = {
  name: 'CyberNex',
  description: 'Your gateway to cybersecurity learning and career advancement',
  links: {
    twitter: 'https://twitter.com/cybernex',
    github: 'https://github.com/cybernex',
    linkedin: 'https://linkedin.com/company/cybernex'
  }
} 