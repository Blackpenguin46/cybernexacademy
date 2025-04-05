-- Add a JSONB column to store URLs
ALTER TABLE newsfeed ADD COLUMN IF NOT EXISTS urls JSONB;

-- Comment on the column to explain its purpose
COMMENT ON COLUMN newsfeed.urls IS 'Array of URLs extracted from message content';
