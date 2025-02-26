import { NextResponse } from "next/server"

export async function GET() {
  try {
    // This is a mock response for demonstration
    // In a real app, you would fetch the user data from Supabase
    return NextResponse.json({
      id: '123',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'user'
    })
  } catch (error) {
    console.error('Error in user API:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

