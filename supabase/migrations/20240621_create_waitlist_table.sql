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
CREATE POLICY "Allow admins to view waitlist" 
  ON public.waitlist 
  FOR SELECT 
  TO authenticated 
  USING (auth.jwt() ->> 'role' = 'admin');

-- Allow anonymous inserts for the email signup form
CREATE POLICY "Allow anonymous inserts to waitlist" 
  ON public.waitlist 
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

-- Create trigger for updating the updated_at timestamp
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER waitlist_updated
BEFORE UPDATE ON public.waitlist
FOR EACH ROW
EXECUTE FUNCTION update_timestamp(); 