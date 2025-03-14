import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email, type = 'single' } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    console.log('Testing email sending to:', email);
    console.log('Email type:', type);

    // Test email template
    const emailTemplate = `
      <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #000; text-align: center;">Test Email from CyberNex Academy</h1>
        <p>This is a test email to verify the email service is working correctly.</p>
        <p>Email type: ${type}</p>
        <p>If you're seeing this, the email service is working!</p>
      </div>
    `;

    let result;
    if (type === 'broadcast') {
      // Test broadcast email (sending to multiple recipients)
      result = await resend.emails.send({
        from: 'CyberNex Academy <onboarding@resend.dev>',
        to: [email, 'test2@example.com'], // You can add more recipients here
        subject: 'Test Broadcast Email',
        html: emailTemplate,
      });
    } else {
      // Test single recipient email
      result = await resend.emails.send({
        from: 'CyberNex Academy <onboarding@resend.dev>',
        to: email,
        subject: 'Test Single Email',
        html: emailTemplate,
      });
    }

    console.log('Email sent successfully:', result);
    return NextResponse.json(
      { message: 'Email sent successfully', data: result },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: `Failed to send email: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
} 