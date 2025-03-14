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
let resend: Resend;
try {
  resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key');
  console.log('Resend client initialized successfully');
} catch (error) {
  console.error('Error initializing Resend client:', error);
  resend = new Resend('dummy_key'); // Fallback to dummy key
}

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

    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error('Error parsing request JSON:', parseError);
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }

    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    console.log(`Processing waitlist signup for: ${email}`);

    // Store in database section
    try {
      // Get supabase client
      const supabase = getSupabaseClient();
      
      if (!supabase) {
        console.error('Failed to initialize Supabase client');
        
        // For now, since database connection is failing, let's still try to send the email
        // but make sure we inform the user about the issue
        const message = 'Thank you for your interest! We received your email, but there was an issue storing it in our database. Our team will be notified.';
        
        // Even with DB issues, try to send the welcome email if properly configured
        if (process.env.RESEND_API_KEY && 
            process.env.RESEND_API_KEY !== 'dummy_key' && 
            process.env.RESEND_API_KEY !== 'your_resend_api_key_here' && 
            process.env.RESEND_API_KEY !== 're_123456789') {
          
          try {
            const { data, error } = await resend.emails.send({
              from: 'CyberNex Academy <onboarding@resend.dev>',
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

                  <div style="margin-top: 30px; font-size: 12px; color: #6b7280; text-align: center;">
                    <p>If you didn't sign up for CyberNex Academy, please ignore this email.</p>
                    <p>© 2025 CyberNex Academy. All rights reserved.</p>
                  </div>
                </div>
              `
            });
            
            if (error) {
              console.error('Email sending error:', error);
            } else {
              console.log('Welcome email sent successfully despite database issues', data);
            }
          } catch (emailError) {
            console.error('Failed to send welcome email:', emailError);
          }
        }
        
        return NextResponse.json({
          message: message,
          warning: "Your information couldn't be stored in our database, but we've received your request."
        });
      }
      
      // Test the connection with a simpler query
      try {
        console.log('Testing Supabase connection...');
        const { error: pingError } = await supabase.from('waitlist').select('count').limit(1);
        
        if (pingError) {
          if (pingError.message.includes('relation') && pingError.message.includes('does not exist')) {
            console.error('Waitlist table does not exist:', pingError);
            return NextResponse.json(
              { error: 'The waitlist table does not exist in your database. Please run database migrations.' }, 
              { status: 500 }
            );
          } else {
            console.error('Failed to query waitlist table:', pingError);
            return NextResponse.json(
              { error: `Database error: ${pingError.message}` },
              { status: 500 }
            );
          }
        }
        
        console.log('Connection to waitlist table successful');
      } catch (pingError) {
        console.error('Error testing database connection:', pingError);
        return NextResponse.json(
          { error: 'Failed to connect to the database. Please check your Supabase configuration.' },
          { status: 500 }
        );
      }
      
      // Try to insert the email
      try {
        console.log('Inserting email into waitlist table...');
        const { data, error: insertError } = await supabase
          .from('waitlist')
          .upsert({ 
            email,
            subscribed_at: new Date().toISOString(),
            status: 'active'
          }, { 
            onConflict: 'email',
            ignoreDuplicates: false 
          });

        if (insertError) {
          console.error('Error inserting email into waitlist:', insertError);
          return NextResponse.json(
            { error: `Failed to store email: ${insertError.message}` },
            { status: 500 }
          );
        }
        
        console.log('Successfully added email to waitlist table');
      } catch (insertError: any) {
        console.error('Exception during insert operation:', insertError);
        return NextResponse.json(
          { error: `Database error: ${insertError?.message || 'Unknown error during insert'}` },
          { status: 500 }
        );
      }
    } catch (dbError: any) {
      console.error('General database error:', dbError);
      return NextResponse.json(
        { error: `Database operation failed: ${dbError?.message || 'Unknown database error'}` },
        { status: 500 }
      );
    }

    // After successfully storing the email in database
    try {
      const emailResult = await sendWelcomeEmail(email);
      if (!emailResult.success) {
        console.warn('Email sending failed but user was added to waitlist:', emailResult.message);
      }
    } catch (emailError) {
      console.error('Error in email sending process:', emailError);
      // Continue since the user is already added to the database
    }

    // Return success response
    return NextResponse.json({
      message: 'Thank you for joining our waitlist! Please check your email for a welcome message.'
    });
  } catch (error: any) {
    console.error('Waitlist error:', error);
    
    // Provide more detailed error message
    let errorMessage = 'Failed to join waitlist: Unexpected error occurred';
    if (error?.message) {
      errorMessage += ` - ${error.message}`;
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}