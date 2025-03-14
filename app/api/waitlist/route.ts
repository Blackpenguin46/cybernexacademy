import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

// More detailed environment variable logging - with actual values for debugging
console.log('API Environment Check:', {
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
  supabaseKeyFirstChars: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.substring(0, 12) + '...' : 'Missing',
  resendKeyFirstChars: process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.substring(0, 10) + '...' : 'Missing',
  resendKeyLength: process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.length : 0,
  resendKeyStartsWith: process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.startsWith('re_') : false
});

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
        process.env.RESEND_API_KEY === 'your_resend_api_key_here' ||
        !process.env.RESEND_API_KEY.startsWith('re_')) {
      console.warn('RESEND_API_KEY is not properly configured:', {
        isSet: !!process.env.RESEND_API_KEY,
        isDummy: process.env.RESEND_API_KEY === 'dummy_key',
        isPlaceholder: process.env.RESEND_API_KEY === 'your_resend_api_key_here',
        startsWithRe: process.env.RESEND_API_KEY?.startsWith('re_')
      });
      return { success: false, message: 'Email delivery is disabled (API key not configured)' };
    }
    
    // Define the email content with improved HTML template
    const { data, error } = await resend.emails.send({
      from: 'CyberNex Academy <cybernexacademy@proton.me>',
      to: email,
      subject: 'Welcome to CyberNex Academy Waitlist! 🚀',
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #000; text-align: center;">Welcome to CyberNex Academy!</h1>
          <p>Thank you for joining our waitlist! We're excited to have you on board.</p>
          <p>You'll be among the first to know when we launch our comprehensive cybersecurity resource platform.</p>
          <p>Stay tuned for updates!</p>
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
            <p>If you didn't sign up for CyberNex Academy, you can safely ignore this email.</p>
            <p>© 2025 CyberNex Academy. All rights reserved.</p>
          </div>
        </div>
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
    const emailResult = await sendWelcomeEmail(email);
    
    if (!emailResult.success) {
      console.warn('Email sending failed but user was added to waitlist:', emailResult.message);
    }

    return NextResponse.json(
      { 
        message: 'Successfully joined waitlist',
        emailSent: emailResult.success,
        emailMessage: emailResult.message
      },
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