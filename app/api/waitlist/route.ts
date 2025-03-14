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
        
        // Try to directly insert the email
        try {
          const { error: dbError } = await supabase
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
              return NextResponse.json(
                { error: 'Database error: Waitlist table not found' },
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
        } catch (insertError) {
          console.error('Error during insert operation:', insertError);
          return NextResponse.json(
            { error: 'Database error during insert' },
            { status: 500 }
          );
        }
      } catch (dbError) {
        console.error('Failed to store email in database:', dbError);
        return NextResponse.json(
          { error: 'Failed to store email in database' },
          { status: 500 }
        );
      }
    } else {
      console.error('Supabase client not available - cannot store email');
      return NextResponse.json(
        { error: 'Database connection error' },
        { status: 500 }
      );
    }

    // Send confirmation email
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
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError);
      // We will still return success since the email is in the database
    }

    // Log the successful signup
    console.log(`New waitlist signup completed for: ${email}`);

    return NextResponse.json({
      message: 'Thank you for joining our waitlist! Please check your email for a welcome message.'
    });
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Failed to join waitlist: Unexpected error occurred' },
      { status: 500 }
    );
  }
} 