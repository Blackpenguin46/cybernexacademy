import { NextResponse } from 'next/server';

export async function GET() {
  // Return a simple JSON response with no external dependencies
  return NextResponse.json({ 
    working: true, 
    message: "API is functioning",
    timestamp: new Date().toISOString()
  });
} 