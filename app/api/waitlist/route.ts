import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // TODO: Add email to database/waitlist storage
    // For now, we'll just return a success response

    return NextResponse.json({
      message: `Thank you for joining our waitlist! 🚀\n\nWe're working hard to build the most comprehensive cybersecurity resource platform that will help guide your journey in the field. Your support means the world to us.\n\nWe'll keep you updated on our progress and you'll be among the first to know when we launch. Get ready to discover, learn, and advance your cybersecurity career with CyberNex Academy!`
    });
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    );
  }
} 