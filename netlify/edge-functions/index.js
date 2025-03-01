import { Context } from '@netlify/edge-functions';

export default async (request, context) => {
  // Get the request URL
  const url = new URL(request.url);
  
  // Example edge function logic
  if (url.pathname.startsWith('/api/')) {
    // Add CORS headers for API routes
    const response = await context.next();
    const headers = new Headers(response.headers);
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  }
  
  // Continue to the next middleware/function
  return context.next();
}; 