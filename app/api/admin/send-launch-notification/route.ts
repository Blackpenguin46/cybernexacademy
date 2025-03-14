import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key');

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: NextRequest) {
  try {
    // Verify admin API key
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.ADMIN_API_KEY}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Check if Resend API key is properly configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'dummy_key') {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 503 }
      );
    }

    // Get all active subscribers
    const { data: subscribers, error: fetchError } = await supabase
      .from('waitlist')
      .select('email')
      .eq('status', 'active');

    if (fetchError) {
      console.error('Error fetching subscribers:', fetchError);
      return NextResponse.json(
        { error: 'Failed to fetch subscribers' },
        { status: 500 }
      );
    }

    if (!subscribers || subscribers.length === 0) {
      return NextResponse.json(
        { message: 'No active subscribers found' },
        { status: 200 }
      );
    }

    // Send launch notification to each subscriber
    const results = {
      total: subscribers.length,
      successful: 0,
      failed: 0,
      errors: [] as string[]
    };

    for (const subscriber of subscribers) {
      try {
        await resend.emails.send({
          from: 'CyberNex Academy <notifications@cybernex.academy>',
          to: subscriber.email,
          subject: '🚀 CyberNex Academy is Live!',
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>CyberNex Academy is Live!</title>
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
                  <h1>CyberNex Academy is Live! 🚀</h1>
                </div>
                <div class="content">
                  <p>Great news! CyberNex Academy has officially launched, and we're excited to have you join us on this journey.</p>
                  
                  <p>As a waitlist subscriber, you're among the first to know about our launch. Here's what you can now access:</p>
                  
                  <div class="feature-list">
                    <ul>
                      <li>🎯 Comprehensive cybersecurity resource database</li>
                      <li>📚 Curated learning paths and certifications</li>
                      <li>💡 Expert-verified content and guides</li>
                      <li>📊 Resource comparison tools</li>
                    </ul>
                  </div>

                  <p>We're committed to helping you advance your cybersecurity career with the best resources and guidance.</p>
                  
                  <div style="text-align: center;">
                    <a href="https://cybernex.academy" class="button">Explore CyberNex Academy</a>
                  </div>
                </div>
                
                <div class="footer">
                  <p>© 2025 CyberNex Academy. All rights reserved.</p>
                </div>
              </div>
            </body>
            </html>
          `,
        });
        results.successful++;
      } catch (error) {
        console.error(`Failed to send launch notification to ${subscriber.email}:`, error);
        results.failed++;
        results.errors.push(`Failed to send to ${subscriber.email}: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    }

    return NextResponse.json(results);
  } catch (error) {
    console.error('Error processing launch notification:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 