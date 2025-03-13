# Email Setup for CyberNex Academy Waitlist

This guide explains how to set up email notifications for the CyberNex Academy waitlist system.

## Overview

The waitlist system uses the following components:

1. **Supabase Database**: Stores waitlist email addresses
2. **Resend API**: Handles email delivery
3. **Proton Mail**: The from address (cybernexacademy@proton.me)

## Setup Instructions

### 1. Supabase Waitlist Table

The waitlist table should be automatically created in your Supabase project through the migration in `supabase/migrations/20240621_create_waitlist_table.sql`.

To apply the migration manually:

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Copy and paste the contents of the migration file
4. Run the SQL script

### 2. Resend API Key

You need to set up [Resend](https://resend.com) for email delivery:

1. Create an account at https://resend.com
2. Add and verify your domain (or use Resend's test domain during development)
3. Get your API key from the dashboard
4. Add the API key to your `.env.local` file:

```
RESEND_API_KEY=your_api_key_here
```

### 3. Configure Proton Mail

To send emails from cybernexacademy@proton.me through Resend:

1. In Resend, go to Domains and add a custom sending domain
2. For production, this should be properly DNS-verified
3. Configure the Resend sender policy to allow sending from your cybernexacademy@proton.me address
4. In your Proton Mail account, enable integration with external services if required

### 4. Vercel Deployment Setup

When deploying to Vercel, you need to set up environment variables:

1. Log in to your Vercel dashboard
2. Select your project
3. Go to Settings > Environment Variables
4. Add the following variables:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key 
   - `RESEND_API_KEY`: Your Resend API key

> **Important**: Make sure to add these environment variables to all environments you're using (Production, Preview, Development).

## Testing

To test the waitlist system:

1. Make sure your `.env.local` file has the proper configuration
2. Submit an email through the waitlist form on the landing page
3. Check the Supabase table to see if the email was stored
4. Check your test email inbox to see if you received the welcome email

## Email List Management

The current setup stores all emails in the Supabase waitlist table. To manage this list:

1. Access your Supabase dashboard
2. Go to the Table Editor
3. Select the "waitlist" table
4. You can filter by "status" to see active, unsubscribed, or bounced emails

For sending bulk emails to your list, you can:

1. Export the emails from Supabase
2. Use Resend's API to send batch emails
3. Set up a scheduled function to send newsletters or updates

## Fallback Behavior

The system has been designed with fallbacks:

1. If Supabase credentials are missing, the system will still attempt to send welcome emails
2. If the Resend API key is missing, the system will return a success message but won't send emails
3. Database errors won't prevent emails from being sent

## Security Considerations

- The Row Level Security (RLS) policies ensure that only authenticated admin users can view the waitlist entries
- Anonymous users can only insert new entries (for the signup form) but cannot read any data
- Consider implementing an unsubscribe link in emails using a secure token system

## Troubleshooting

If emails are not being sent:

1. Check that `RESEND_API_KEY` is correctly set in your environment
2. Verify that the sender domain is properly configured in Resend
3. Look for errors in your server logs
4. Make sure your Supabase connection is working properly

For deployment issues:

1. Ensure all environment variables are properly set in the Vercel dashboard
2. Check build logs for any specific error messages
3. If you see "Error: supabaseUrl is required" in logs, it means the Supabase URL environment variable isn't available during build 