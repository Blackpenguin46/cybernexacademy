import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { 
      error: 'Seed API is disabled in production' 
    }, 
    { 
      status: 404 
    }
  );
}

export async function POST() {
  return NextResponse.json(
    { 
      error: 'Seed API is disabled in production' 
    }, 
    { 
      status: 404 
    }
  );
} 