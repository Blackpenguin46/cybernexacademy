declare namespace NodeJS {
  interface ProcessEnv {
    STRIPE_SECRET_KEY: string
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string
    STRIPE_CYBERNEX_PLUS_PRICE_ID: string
    STRIPE_CYBERNEX_PRO_PRICE_ID: string
  }
} 