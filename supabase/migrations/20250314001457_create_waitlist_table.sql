-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create waitlist table for storing email sign-ups
CREATE TABLE IF NOT EXISTS public.waitlist (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'active', -- 'active', 'unsubscribed', 'bounced'
  source TEXT DEFAULT 'landing-page',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add index for faster lookups
CREATE INDEX IF NOT EXISTS waitlist_email_idx ON public.waitlist (email);

-- Set up RLS (Row Level Security) policies for the waitlist table
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow only authenticated users with admin role to see the list
CREATE POLICY "Allow select for admins" 
  ON public.waitlist 
  FOR SELECT 
  USING (auth.role() = 'authenticated');

-- Allow anonymous inserts for the email signup form
CREATE POLICY "Allow anonymous inserts" 
  ON public.waitlist 
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

-- Create trigger for updating the updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER waitlist_updated
BEFORE UPDATE ON public.waitlist
FOR EACH ROW
EXECUTE FUNCTION public.update_timestamp();

-- Insert test email for verification
INSERT INTO public.waitlist (email, status, source)
VALUES ('test@example.com', 'active', 'migration-test')
ON CONFLICT (email) DO NOTHING;
