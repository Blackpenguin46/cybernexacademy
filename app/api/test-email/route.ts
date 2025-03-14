import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { handleRateLimit } from '../lib/rate-limit';

// Initialize Resend with your API key
let resend: Resend;
try {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not set');
  }
  if (!process.env.RESEND_API_KEY.startsWith('re_')) {
    throw new Error('RESEND_API_KEY does not start with "re_"');
  }
  resend = new Resend(process.env.RESEND_API_KEY);
  console.log('Resend client initialized successfully');
} catch (error) {
  console.error('Failed to initialize Resend client:', error);
  resend = new Resend('dummy_key'); // Fallback to dummy key
}

export async function POST(request: NextRequest) {
  try {
    // Apply rate limiting - 3 requests per minute
    const rateLimitResult = await handleRateLimit(request, { limit: 3, windowMs: 60000 });
    if (!rateLimitResult.success) {
      // Return the rate limit response if exceeded
      return rateLimitResult.response;
    }

    const { email, type = 'single' } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    console.log('Testing email sending to:', email);
    console.log('Email type:', type);

    // Verify we have proper configuration
    if (!process.env.RESEND_API_KEY || 
        process.env.RESEND_API_KEY === 'dummy_key' || 
        process.env.RESEND_API_KEY === 'your_resend_api_key_here' ||
        !process.env.RESEND_API_KEY.startsWith('re_')) {
      console.warn('RESEND_API_KEY is not properly configured:', {
        isSet: !!process.env.RESEND_API_KEY,
        isDummy: process.env.RESEND_API_KEY === 'dummy_key',
        isPlaceholder: process.env.RESEND_API_KEY === 'your_resend_api_key_here',
        startsWithRe: process.env.RESEND_API_KEY?.startsWith('re_')
      });
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 503 }
      );
    }

    // Test email template
    const unsubscribeToken = Buffer.from(email + '-unsubscribe').toString('base64').substring(0, 16);
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cybernexacademy.com';
    const unsubscribeLink = `${siteUrl}/api/unsubscribe?email=${encodeURIComponent(email)}&token=${unsubscribeToken}`;
    
    const emailTemplate = `
      <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #000; text-align: center;">Test Email from CyberNex Academy</h1>
        <p>This is a test email to verify the email service is working correctly.</p>
        <p>Email type: ${type}</p>
        <p>If you're seeing this, the email service is working!</p>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
          <p>© 2025 CyberNex Academy. All rights reserved.</p>
          <p style="margin-top: 15px; font-size: 12px;">
            <a href="${unsubscribeLink}" style="color: #666; text-decoration: underline;">Unsubscribe from our mailing list</a>
          </p>
        </div>
      </div>
    `;

    let result;
    if (type === 'broadcast') {
      // Test broadcast email (sending to multiple recipients)
      result = await resend.emails.send({
        from: 'CyberNex Academy <info@cybernexacademy.com>',
        to: [email, 'test2@example.com'], // You can add more recipients here
        subject: 'Test Broadcast Email',
        html: emailTemplate,
      });
    } else {
      // Test single recipient email
      result = await resend.emails.send({
        from: 'CyberNex Academy <info@cybernexacademy.com>',
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