# Database Schema for Community Resources

This document outlines the database schema for storing community resources for auto-updating API endpoints.

## Tables

### 1. Discord Servers

```sql
CREATE TABLE discord_servers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  members TEXT NOT NULL,
  url TEXT NOT NULL,
  categories TEXT[] NOT NULL,
  icon_url TEXT,
  is_verified BOOLEAN DEFAULT false,
  last_verified TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX discord_servers_categories_idx ON discord_servers USING GIN (categories);
```

### 2. Reddit Communities

```sql
CREATE TABLE reddit_communities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  members TEXT NOT NULL,
  url TEXT NOT NULL,
  categories TEXT[] NOT NULL,
  icon_url TEXT,
  is_verified BOOLEAN DEFAULT false,
  last_verified TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX reddit_communities_categories_idx ON reddit_communities USING GIN (categories);
```

### 3. Skool Communities

```sql
CREATE TABLE skool_communities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  students TEXT NOT NULL,
  url TEXT NOT NULL,
  categories TEXT[] DEFAULT '{}',
  icon_url TEXT,
  is_verified BOOLEAN DEFAULT false,
  last_verified TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 4. Link Verification Log

```sql
CREATE TABLE link_verification_log (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  resource_type TEXT NOT NULL, -- 'discord', 'reddit', 'skool', etc.
  resource_id UUID NOT NULL,
  url TEXT NOT NULL,
  status_code INTEGER,
  is_valid BOOLEAN,
  error_message TEXT,
  verified_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX link_verification_resource_idx ON link_verification_log (resource_type, resource_id);
```

## RLS (Row Level Security) Policies

We should set up RLS policies to ensure data security:

```sql
-- Allow anonymous read access
ALTER TABLE discord_servers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anonymous read access" ON discord_servers FOR SELECT USING (true);

-- Allow only authenticated users to insert/update/delete
CREATE POLICY "Allow authenticated insert" ON discord_servers FOR INSERT TO authenticated USING (true);
CREATE POLICY "Allow authenticated update" ON discord_servers FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Allow authenticated delete" ON discord_servers FOR DELETE TO authenticated USING (true);

-- Apply similar policies to other tables
```

## Function to Check Link Validity

```sql
CREATE OR REPLACE FUNCTION check_link_validity()
RETURNS TRIGGER AS $$
BEGIN
  -- This is a placeholder. In a real implementation, this would be handled by a scheduled function
  -- or an external service that periodically checks links.
  NEW.is_verified := true;
  NEW.last_verified := NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for new or updated links
CREATE TRIGGER discord_servers_link_check
BEFORE INSERT OR UPDATE OF url ON discord_servers
FOR EACH ROW
EXECUTE FUNCTION check_link_validity();

-- Create similar triggers for other tables
``` 