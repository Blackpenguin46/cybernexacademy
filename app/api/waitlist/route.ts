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

    // Send confirmation email if Resend API key is properly configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'dummy_key' || process.env.RESEND_API_KEY === 'your_resend_api_key_here' || process.env.RESEND_API_KEY === 're_123456789') {
      console.warn('RESEND_API_KEY is not properly set. Email will not be sent.');
      return NextResponse.json({
        message: 'Thank you for joining our waitlist! (Email delivery is currently disabled)'
      });
    }

    try {
      console.log('Sending welcome email...');
      // Send welcome email
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
        console.log('Welcome email sent successfully', data);
      }
    } catch (emailError: any) {
      console.error('Failed to send welcome email:', emailError);
      // We will still return success since the email is in the database
    }

    // Log the successful signup
    console.log(`New waitlist signup completed for: ${email}`);

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