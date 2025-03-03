// Mock implementation that exports all necessary components
// This will be used instead of the actual Netlify edge functions

// Main Context class that's being imported
export class Context {
  constructor() {
    this.request = {};
    this.response = {};
    this.next = () => {};
  }
}

// Other potential exports
export const NextResponse = {
  json: (data) => ({ body: JSON.stringify(data) }),
  redirect: (url) => ({ status: 302, headers: { Location: url } })
};

export const NextRequest = class NextRequest {};

// Default export must be a function for Netlify Edge Functions
export default async function handler(request, context) {
  // Simple handler function that returns a text response
  return new Response("Default edge function handler", {
    headers: { "content-type": "text/plain" },
  });
} 