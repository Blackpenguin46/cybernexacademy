import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET(request: NextRequest) {
  try {
    // Get the email from the URL query parameter
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    const token = searchParams.get('token');
    
    if (!email) {
      return new Response('Email is required', { status: 400 });
    }
    
    // Simple validation to prevent random unsubscribes
    // In production, you'd want a more secure token validation
    const expectedToken = Buffer.from(email + '-unsubscribe').toString('base64').substring(0, 16);
    if (token !== expectedToken) {
      return new Response('Invalid unsubscribe link', { status: 403 });
    }

    console.log(`Processing unsubscribe request for: ${email}`);

    // Update the status in waitlist table
    const { error } = await supabase
      .from('waitlist')
      .update({ status: 'unsubscribed', unsubscribed_at: new Date().toISOString() })
      .eq('email', email);

    if (error) {
      console.error('Error updating waitlist status:', error);
      return new Response('Failed to unsubscribe', { status: 500 });
    }

    // Return a simple HTML page confirming unsubscription
    return new Response(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Unsubscribed from CyberNex Academy</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: system-ui, -apple-system, sans-serif;
              max-width: 600px;
              margin: 0 auto;
              padding: 40px 20px;
              text-align: center;
              line-height: 1.6;
            }
            h1 {
              margin-bottom: 1em;
            }
            .card {
              background-color: #f9f9f9;
              border-radius: 8px;
              padding: 20px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .home-link {
              display: inline-block;
              margin-top: 1.5em;
              color: #0070f3;
              text-decoration: none;
            }
            .home-link:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <h1>You've been unsubscribed</h1>
          <div class="card">
            <p>Your email <strong>${email}</strong> has been successfully removed from our mailing list.</p>
            <p>You will no longer receive emails from CyberNex Academy.</p>
            <p>If this was a mistake, you can rejoin the waitlist on our website.</p>
          </div>
          <a href="/" class="home-link">Return to CyberNex Academy</a>
        </body>
      </html>
    `, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    });
  } catch (error) {
    console.error('Error processing unsubscribe request:', error);
    return new Response('Internal server error', { status: 500 });
  }
} 