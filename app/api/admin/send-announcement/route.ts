import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';
import { handleRateLimit } from '../../lib/rate-limit';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key');

// Function to create the Supabase client
function getSupabaseClient() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      console.error('Supabase credentials missing');
      return null;
    }
    
    // For admin operations, it's better to use the service role key if available
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || supabaseKey;
    
    const client = createClient(supabaseUrl, serviceRoleKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
    
    return client;
  } catch (error) {
    console.error('Failed to initialize Supabase client:', error);
    return null;
  }
}

export async function POST(request: NextRequest): Promise<Response> {
  try {
    // Apply strict rate limiting for admin endpoints - 3 requests per 5 minutes
    const rateLimitResult = await handleRateLimit(request, { limit: 3, windowMs: 300000 });
    if (!rateLimitResult.success) {
      // Return the rate limit response if exceeded
      return rateLimitResult.response;
    }

    // Basic auth for admin protection - in a real app, use proper auth
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const token = authHeader.split(' ')[1];
    const adminKey = process.env.ADMIN_API_KEY || 'admin-key-placeholder';
    
    if (token !== adminKey) {
      return NextResponse.json({ error: 'Invalid admin key' }, { status: 403 });
    }
    
    // Parse the announcement data
    const body = await request.json();
    const { subject, content, preheader } = body;
    
    if (!subject || !content) {
      return NextResponse.json({ 
        error: 'Subject and content are required' 
      }, { status: 400 });
    }
    
    // Get all active subscribers
    const supabase = getSupabaseClient();
    if (!supabase) {
      return NextResponse.json({ 
        error: 'Failed to connect to database' 
      }, { status: 500 });
    }
    
    const { data: subscribers, error: fetchError } = await supabase
      .from('waitlist')
      .select('email')
      .eq('status', 'active');
    
    if (fetchError) {
      console.error('Error fetching subscribers:', fetchError);
      return NextResponse.json({ 
        error: `Failed to fetch subscribers: ${fetchError.message}` 
      }, { status: 500 });
    }
    
    if (!subscribers || subscribers.length === 0) {
      return NextResponse.json({ 
        message: 'No active subscribers found' 
      }, { status: 200 });
    }
    
    // Send the announcement email to each subscriber
    const results = [];
    let successCount = 0;
    let failCount = 0;
    
    // For smaller lists, we can send emails in sequence
    // For larger lists (1000+), consider using a queue system
    for (const subscriber of subscribers) {
      try {
        const { data, error } = await resend.emails.send({
          from: 'CyberNex Academy <onboarding@resend.dev>', // This is Resend's test domain that works without verification
          to: subscriber.email,
          subject: subject,
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta name="description" content="${preheader || 'News from CyberNex Academy'}">
              <title>${subject}</title>
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
                .content {
                  padding: 30px 20px;
                  background-color: #f8fafc;
                  border-radius: 0 0 6px 6px;
                }
                .footer {
                  margin-top: 30px;
                  text-align: center;
                  font-size: 12px;
                  color: #6b7280;
                }
                .button {
                  display: inline-block;
                  background-color: #3B82F6;
                  color: white;
                  text-decoration: none;
                  padding: 10px 20px;
                  border-radius: 4px;
                  margin-top: 20px;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>CyberNex Academy</h1>
                </div>
                <div class="content">
                  ${content}
                  
                  <div style="text-align: center;">
                    <a href="https://v0-cybernex-r5aktld1jft.vercel.app" class="button">Visit CyberNex Academy</a>
                  </div>
                  
                  <div class="footer">
                    <p>© 2025 CyberNex Academy. All rights reserved.</p>
                    <p>If you no longer wish to receive these emails, you can <a href="[unsubscribe_url]">unsubscribe</a>.</p>
                  </div>
                </div>
              </div>
            </body>
            </html>
          `,
        });
        
        if (error) {
          console.error(`Failed to send to ${subscriber.email}:`, error);
          results.push({ email: subscriber.email, success: false, error: error.message });
          failCount++;
        } else {
          results.push({ email: subscriber.email, success: true, id: data?.id });
          successCount++;
        }
      } catch (error: any) {
        console.error(`Error sending to ${subscriber.email}:`, error);
        results.push({ email: subscriber.email, success: false, error: error.message || 'Unknown error' });
        failCount++;
      }
    }
    
    return NextResponse.json({
      message: `Announcement sent to ${successCount} subscribers (${failCount} failed)`,
      total: subscribers.length,
      success: successCount,
      failed: failCount,
      results: results,
    });
    
  } catch (error: any) {
    console.error('Announcement error:', error);
    return NextResponse.json(
      { error: `Failed to send announcement: ${error.message || 'Unknown error'}` },
      { status: 500 }
    );
  }
} 