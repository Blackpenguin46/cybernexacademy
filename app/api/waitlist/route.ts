import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key');

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Store email in Supabase
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
      console.error('Error storing email in waitlist:', dbError);
      return NextResponse.json(
        { error: 'Failed to join waitlist' },
        { status: 500 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY is not set. Email will not be sent.');
      return NextResponse.json({
        message: 'Thank you for joining our waitlist! (Email delivery is currently disabled)'
      });
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

          <div style="margin-top: 30px; font-size: 12px; color: #6b7280; text-align: center;">
            <p>If you didn't sign up for CyberNex Academy, please ignore this email.</p>
            <p>© 2023 CyberNex Academy. All rights reserved.</p>
          </div>
        </div>
      `
    });

    // Log the successful signup
    console.log(`New waitlist signup: ${email}`);

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