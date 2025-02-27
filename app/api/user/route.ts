import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Mock user data response
    return NextResponse.json({
      user: {
        email: 'user@example.com',
        name: 'Test User'
      }
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch user' },
      { status: 400 }
    )
  }
} 