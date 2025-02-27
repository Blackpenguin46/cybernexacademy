import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Here you would typically validate credentials
    // For now, we'll just mock a successful response
    return NextResponse.json({ 
      status: 'success',
      user: { email }
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 400 }
    )
  }
} 