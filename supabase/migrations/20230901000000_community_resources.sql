-- Create tables for community resources

-- Discord Servers Table
CREATE TABLE IF NOT EXISTS public.discord_servers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT,
    invite_link TEXT NOT NULL,
    member_count INTEGER,
    is_verified BOOLEAN DEFAULT false,
    last_verified TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Reddit Communities Table
CREATE TABLE IF NOT EXISTS public.reddit_communities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT,
    url TEXT NOT NULL,
    member_count INTEGER,
    is_verified BOOLEAN DEFAULT false,
    last_verified TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Skool Communities Table
CREATE TABLE IF NOT EXISTS public.skool_communities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT,
    url TEXT NOT NULL,
    member_count INTEGER,
    is_verified BOOLEAN DEFAULT false,
    last_verified TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Link Verification Log Table
CREATE TABLE IF NOT EXISTS public.link_verification_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    verified_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    discord_verified INTEGER DEFAULT 0,
    discord_total INTEGER DEFAULT 0,
    reddit_verified INTEGER DEFAULT 0,
    reddit_total INTEGER DEFAULT 0,
    skool_verified INTEGER DEFAULT 0,
    skool_total INTEGER DEFAULT 0
);

-- Add table comments
COMMENT ON TABLE public.discord_servers IS 'Stores information about Discord servers in the cybersecurity community';
COMMENT ON TABLE public.reddit_communities IS 'Stores information about Reddit communities in the cybersecurity community';
COMMENT ON TABLE public.skool_communities IS 'Stores information about Skool communities in the cybersecurity community';
COMMENT ON TABLE public.link_verification_log IS 'Logs when link verification was run and the results';

-- Create indexes for faster lookup
CREATE INDEX IF NOT EXISTS idx_discord_servers_name ON public.discord_servers(name);
CREATE INDEX IF NOT EXISTS idx_reddit_communities_name ON public.reddit_communities(name);
CREATE INDEX IF NOT EXISTS idx_skool_communities_name ON public.skool_communities(name);
CREATE INDEX IF NOT EXISTS idx_link_verification_log_verified_at ON public.link_verification_log(verified_at);

-- Setup RLS (Row Level Security)
ALTER TABLE public.discord_servers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reddit_communities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skool_communities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.link_verification_log ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Discord Servers policies
CREATE POLICY "Allow public read of discord_servers"
ON public.discord_servers
FOR SELECT
TO public
USING (true);

CREATE POLICY "Allow authenticated users to insert discord_servers"
ON public.discord_servers
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Allow admins to update discord_servers"
ON public.discord_servers
FOR UPDATE
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role = 'admin'
    )
);

CREATE POLICY "Allow admins to delete discord_servers"
ON public.discord_servers
FOR DELETE
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role = 'admin'
    )
);

-- Reddit Communities policies
CREATE POLICY "Allow public read of reddit_communities"
ON public.reddit_communities
FOR SELECT
TO public
USING (true);

CREATE POLICY "Allow authenticated users to insert reddit_communities"
ON public.reddit_communities
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Allow admins to update reddit_communities"
ON public.reddit_communities
FOR UPDATE
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role = 'admin'
    )
);

CREATE POLICY "Allow admins to delete reddit_communities"
ON public.reddit_communities
FOR DELETE
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role = 'admin'
    )
);

-- Skool Communities policies
CREATE POLICY "Allow public read of skool_communities"
ON public.skool_communities
FOR SELECT
TO public
USING (true);

CREATE POLICY "Allow authenticated users to insert skool_communities"
ON public.skool_communities
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Allow admins to update skool_communities"
ON public.skool_communities
FOR UPDATE
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role = 'admin'
    )
);

CREATE POLICY "Allow admins to delete skool_communities"
ON public.skool_communities
FOR DELETE
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role = 'admin'
    )
);

-- Link Verification Log policies
CREATE POLICY "Allow public read of link_verification_log"
ON public.link_verification_log
FOR SELECT
TO public
USING (true);

CREATE POLICY "Allow admins to insert link_verification_log"
ON public.link_verification_log
FOR INSERT
TO authenticated
WITH CHECK (
    EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role = 'admin'
    )
);

-- Add a new column to profiles table for admin role if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'profiles' AND column_name = 'role') THEN
        ALTER TABLE public.profiles ADD COLUMN role TEXT DEFAULT 'user';
    END IF;
END
$$; 