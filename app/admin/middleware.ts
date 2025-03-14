import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the authorization header
  const authorization = request.headers.get('authorization');
  
  // Check if authorization is missing or invalid
  if (!authorization || !isValidAuth(authorization)) {
    // Return a 401 Unauthorized response with WWW-Authenticate header
    return new NextResponse('Unauthorized', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Admin Area"',
      },
    });
  }
  
  // User is authenticated, allow the request to proceed
  return NextResponse.next();
}

// Basic validation of the authorization header
function isValidAuth(authorization: string): boolean {
  // The header should start with "Basic "
  if (!authorization.startsWith('Basic ')) {
    return false;
  }
  
  // Extract the base64 encoded credentials
  const base64Credentials = authorization.split(' ')[1];
  if (!base64Credentials) {
    return false;
  }
  
  // Decode the credentials
  let decodedCredentials;
  try {
    decodedCredentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
  } catch (err) {
    return false;
  }
  
  // The decoded value should be in the format "username:password"
  const [username, password] = decodedCredentials.split(':');
  if (!username || !password) {
    return false;
  }
  
  // Check against admin credentials
  const adminUser = process.env.ADMIN_USERNAME || 'admin';
  const adminPass = process.env.ADMIN_PASSWORD || process.env.ADMIN_API_KEY || 'your_secure_admin_key_here';
  
  return username === adminUser && password === adminPass;
}

export const config = {
  matcher: ['/admin/:path*'],
}; 