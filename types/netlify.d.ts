declare module '@netlify/edge-functions' {
  export interface Context {
    geo: {
      city?: string
      country?: {
        code?: string
        name?: string
      }
      subdivision?: {
        code?: string
        name?: string
      }
    }
    ip?: string
    next: () => Promise<Response>
  }
} 