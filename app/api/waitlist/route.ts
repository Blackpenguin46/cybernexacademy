import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key');

// Function to create the Supabase client
function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase credentials not available:', { 
      url: supabaseUrl ? 'set' : 'missing', 
      key: supabaseKey ? 'set' : 'missing' 
    });
    return null;
  }
  
  return createClient(supabaseUrl, supabaseKey);
}

export async function POST(request: NextRequest) {
  try {
    // For debugging - log environment variables (sanitized)
    console.log('Environment check:', {
      supabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      resendKey: !!process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 're_123456789'
    });

    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    console.log(`Processing waitlist signup for: ${email}`);

    // Get supabase client
    const supabase = getSupabaseClient();
    
    // Store email in Supabase
    if (supabase) {
      try {
        console.log('Attempting to store email in Supabase waitlist table');
        
        // Test the connection first
        try {
          const { data, error } = await supabase.from('_test_connection').select('*').limit(1).maybeSingle();
          
          if (error && !error.message.includes('does not exist')) {
            // If we get an error other than "relation does not exist", there's a connection issue
            console.error('Supabase connection test failed:', error);
            return NextResponse.json(
              { error: `Connection error: ${error.message}` },
              { status: 500 }
            );
          }
          
          console.log('Supabase connection test: Connection appears to be working');
        } catch (connectionError) {
          // Non-fatal, just log it
          console.warn('Supabase connection test error:', connectionError);
        }
        
        // Try to directly insert the email
        try {
          console.log('Attempting to insert email into waitlist table');
          
          const { data, error: dbError } = await supabase
            .from('waitlist')
            .upsert({ 
              email,
              subscribed_at: new Date().toISOString(),
              status: 'active'
            }, { 
              onConflict: 'email',
              ignoreDuplicates: false 
            });

          if (dbError) {
            // If we get a "relation does not exist" error, the table is missing
            if (dbError.message.includes('relation') && dbError.message.includes('does not exist')) {
              console.error('Waitlist table does not exist!');
              
              // Return a specific error for missing table
              return NextResponse.json(
                { error: 'The waitlist table does not exist. Please run the database migrations.' },
                { status: 500 }
              );
            }
            
            console.error('Error storing email in waitlist:', dbError);
            return NextResponse.json(
              { error: `Database error: ${dbError.message}` },
              { status: 500 }
            );
          }
          
          console.log('Successfully added email to waitlist table');
        } catch (insertError: any) {
          console.error('Error during insert operation:', insertError);
          return NextResponse.json(
            { error: `Database insert error: ${insertError?.message || JSON.stringify(insertError)}` },
            { status: 500 }
          );
        }
      } catch (dbError: any) {
        console.error('Failed to store email in database:', dbError);
        return NextResponse.json(
          { error: `Database operation failed: ${dbError?.message || JSON.stringify(dbError)}` },
          { status: 500 }
        );
      }
    } else {
      console.error('Supabase client not available - cannot store email');
      return NextResponse.json(
        { error: 'Database connection error: Supabase client could not be initialized' },
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
      console.log('Attempting to send welcome email');
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

            <div style="margin-top: 30px; font-size: 12px; color: #6b7280; text-align: center;">
              <p>If you didn't sign up for CyberNex Academy, please ignore this email.</p>
              <p>© 2025 CyberNex Academy. All rights reserved.</p>
            </div>
          </div>
        `
      });
      console.log('Welcome email sent successfully');
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