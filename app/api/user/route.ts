import { NextResponse } from "next/server"

export async function GET(request: Request) {
  // In a real application, this would fetch user data from your database
  // based on authentication.

  // Mock user data - replace with actual logic
  const name = "Test User"

  return NextResponse.json({ name })
}

