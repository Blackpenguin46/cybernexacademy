import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

// More detailed environment variable logging - with actual values for debugging
console.log('API Environment Check:', {
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
  supabaseKeyFirstChars: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.substring(0, 12) + '...' : 'Missing',
  resendKeyFirstChars: process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.substring(0, 10) + '...' : 'Missing'
});

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// Function to create the Supabase client
function getSupabaseClient() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl) {
      console.error('Supabase URL is missing');
      return null;
    }
    
    if (!supabaseKey) {
      console.error('Supabase anon key is missing');
      return null;
    }
    
    // Create the client with more specific options
    const client = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false, // Don't need to persist auth session for API routes
        autoRefreshToken: false,
      },
    });
    
    console.log('Supabase client created successfully');
    return client;
  } catch (error) {
    console.error('Failed to initialize Supabase client:', error);
    return null;
  }
}

// Email sending helper function
async function sendWelcomeEmail(email: string) {
  try {
    console.log('Sending welcome email to:', email);
    
    // Verify we have proper configuration
    if (!process.env.RESEND_API_KEY || 
        process.env.RESEND_API_KEY === 'dummy_key' || 
        process.env.RESEND_API_KEY === 'your_resend_api_key_here') {
      console.warn('RESEND_API_KEY is not properly set. Email will not be sent.');
      return { success: false, message: 'Email delivery is disabled (API key not configured)' };
    }
    
    // Define the email content with improved HTML template
    const { data, error } = await resend.emails.send({
      from: 'CyberNex Academy <onboarding@resend.dev>', // This is Resend's test domain that works without verification
      to: email,
      subject: 'Welcome to CyberNex Academy Waitlist! 🚀',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to CyberNex Academy</title>
          <style>
            body, html {
              margin: 0;
              padding: 0;
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #ffffff;
            }
            .header {
              background: linear-gradient(to right, #3B82F6, #8B5CF6);
              padding: 30px 20px;
              text-align: center;
              color: white;
              border-radius: 6px 6px 0 0;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: 700;
            }
            .content {
              padding: 30px 20px;
              background-color: #f8fafc;
              border-radius: 0 0 6px 6px;
            }
            .feature {
              background-color: #1e40af;
              color: white;
              padding: 15px;
              border-radius: 8px;
              margin-top: 30px;
            }
            .footer {
              margin-top: 30px;
              text-align: center;
              font-size: 12px;
              color: #6b7280;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Welcome to CyberNex Academy!</h1>
            </div>
            <div class="content">
              <p>Thank you for joining our waitlist!</p>
              
              <p>We're building the most comprehensive cybersecurity resource platform to guide your journey in this exciting field. Your support means the world to us.</p>
              
              <p>Here's what you can expect from CyberNex Academy:</p>
              <ul>
                <li>Curated cybersecurity learning resources</li>
                <li>Path comparisons to find the right learning options</li>
                <li>Expert-verified information</li>
                <li>Regular updates on industry trends</li>
              </ul>
              
              <div class="feature">
                <p style="margin: 0; font-size: 14px;">
                  You'll be among the first to know when we launch. Get ready to discover, learn, and advance your cybersecurity career with CyberNex Academy!
                </p>
              </div>
              
              <div class="footer">
                <p>If you didn't sign up for CyberNex Academy, please ignore this email.</p>
                <p>© 2025 CyberNex Academy. All rights reserved.</p>
                <p><a href="https://v0-cybernex-r5aktld1jft.vercel.app">CyberNex Academy</a></p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });
    
    if (error) {
      console.error('Failed to send welcome email:', error);
      return { success: false, message: `Email error: ${error.message}` };
    }
    
    console.log('Welcome email sent successfully:', data);
    return { success: true, message: 'Email sent successfully' };
  } catch (error: any) {
    console.error('Exception while sending email:', error);
    return { success: false, message: `Email exception: ${error.message || 'Unknown error'}` };
  }
}

export async function POST(request: NextRequest) {
  try {
    // For debugging - log environment variables (sanitized)
    console.log('Environment check in handler:', {
      supabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      resendKey: !!process.env.RESEND_API_KEY 
    });

    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    console.log(`Processing waitlist signup for: ${email}`);

    // Check if email already exists in waitlist
    const { data: existingUser } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', email)
      .single();

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already on waitlist' },
        { status: 400 }
      );
    }

    // Add email to waitlist
    const { error: insertError } = await supabase
      .from('waitlist')
      .insert([{ email, status: 'active', subscribed_at: new Date().toISOString() }]);

    if (insertError) {
      console.error('Error inserting into waitlist:', insertError);
      return NextResponse.json(
        { error: 'Failed to add to waitlist' },
        { status: 500 }
      );
    }

    // Send welcome email
    try {
      await resend.emails.send({
        from: 'CyberNex Academy <notifications@cybernex.academy>',
        to: email,
        subject: 'Welcome to CyberNex Academy Waitlist! 🚀',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to CyberNex Academy</title>
            <style>
              body {
                font-family: system-ui, -apple-system, sans-serif;
                line-height: 1.6;
                color: #333;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              }
              .header {
                background: linear-gradient(135deg, #60ff96 0%, #31d8d8 100%);
                color: #000;
                padding: 30px 20px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .header h1 {
                margin: 0;
                font-size: 28px;
                font-weight: 700;
              }
              .content {
                padding: 30px 20px;
              }
              .feature-list {
                background-color: #f8f9fa;
                border-radius: 8px;
                padding: 20px;
                margin: 20px 0;
              }
              .feature-list ul {
                margin: 0;
                padding-left: 20px;
              }
              .feature-list li {
                margin-bottom: 10px;
                color: #444;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #eee;
                color: #666;
                font-size: 14px;
              }
              .button {
                display: inline-block;
                padding: 12px 24px;
                background-color: #60ff96;
                color: #000;
                text-decoration: none;
                border-radius: 4px;
                font-weight: 600;
                margin: 20px 0;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Welcome to CyberNex Academy!</h1>
              </div>
              <div class="content">
                <p>Thank you for joining our waitlist! We're excited to have you on board.</p>
                
                <p>You'll be among the first to know when we launch, and you'll receive:</p>
                
                <div class="feature-list">
                  <ul>
                    <li>🚀 Launch notifications</li>
                    <li>📚 Weekly cybersecurity newsletters</li>
                    <li>🎯 Exclusive early access to new features</li>
                    <li>💡 Tips and insights from industry experts</li>
                  </ul>
                </div>

                <p>We're working hard to bring you the most comprehensive cybersecurity resource platform. Stay tuned for updates!</p>
                
                <div style="text-align: center;">
                  <a href="https://cybernex.academy" class="button">Visit CyberNex Academy</a>
                </div>
              </div>
              
              <div class="footer">
                <p>If you didn't sign up for CyberNex Academy, you can safely ignore this email.</p>
                <p>© 2025 CyberNex Academy. All rights reserved.</p>
              </div>
            </div>
          </body>
          </html>
        `,
      });
    } catch (emailError) {
      console.error('Error sending welcome email:', emailError);
      // Don't fail the request if email sending fails
    }

    return NextResponse.json(
      { message: 'Successfully joined waitlist' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing waitlist signup:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}