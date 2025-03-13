import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Send welcome email
    await resend.emails.send({
      from: 'CyberNex Academy <cybernexacademy@proton.me>',
      to: email,
      subject: 'Welcome to CyberNex Academy Waitlist! 🚀',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #3b82f6; margin-bottom: 20px;">Welcome to CyberNex Academy!</h1>
          
          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            We're working hard to build the most comprehensive cybersecurity resource platform that will help guide your journey in the field. Your support means the world to us.
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            We'll keep you updated on our progress and you'll be among the first to know when we launch. Get ready to discover, learn, and advance your cybersecurity career with CyberNex Academy!
          </p>

          <div style="background-color: #1e40af; color: white; padding: 15px; border-radius: 8px; margin-top: 30px;">
            <p style="margin: 0; font-size: 14px;">
              Stay tuned for updates and exclusive early access!
            </p>
          </div>
        </div>
      `
    });

    return NextResponse.json({
      message: 'Thank you for joining our waitlist! Please check your email for a welcome message.'
    });
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    );
  }
} 