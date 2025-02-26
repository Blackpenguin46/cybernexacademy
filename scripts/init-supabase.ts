// This script initializes the Supabase database with the necessary tables
// Run with: npx ts-node scripts/init-supabase.ts

import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase URL or service role key')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function initDatabase() {
  console.log('Initializing Supabase database...')

  // Create profiles table
  const { error: profilesError } = await supabase.rpc('create_table_if_not_exists', {
    table_name: 'profiles',
    table_definition: `
      id UUID PRIMARY KEY REFERENCES auth.users(id),
      full_name TEXT,
      username TEXT UNIQUE,
      avatar_url TEXT,
      website TEXT,
      updated_at TIMESTAMP WITH TIME ZONE
    `
  })

  if (profilesError) {
    console.error('Error creating profiles table:', profilesError)
  } else {
    console.log('Profiles table created or already exists')
  }

  // Create subscriptions table
  const { error: subscriptionsError } = await supabase.rpc('create_table_if_not_exists', {
    table_name: 'subscriptions',
    table_definition: `
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      user_id UUID REFERENCES auth.users(id) NOT NULL,
      plan_type TEXT NOT NULL,
      status TEXT NOT NULL,
      stripe_customer_id TEXT,
      stripe_subscription_id TEXT,
      current_period_end TIMESTAMP WITH TIME ZONE,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    `
  })

  if (subscriptionsError) {
    console.error('Error creating subscriptions table:', subscriptionsError)
  } else {
    console.log('Subscriptions table created or already exists')
  }

  // Create courses table
  const { error: coursesError } = await supabase.rpc('create_table_if_not_exists', {
    table_name: 'courses',
    table_definition: `
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      level TEXT NOT NULL,
      duration TEXT NOT NULL,
      image_url TEXT,
      slug TEXT UNIQUE NOT NULL,
      is_premium BOOLEAN DEFAULT false,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    `
  })

  if (coursesError) {
    console.error('Error creating courses table:', coursesError)
  } else {
    console.log('Courses table created or already exists')
  }

  // Create course_progress table
  const { error: progressError } = await supabase.rpc('create_table_if_not_exists', {
    table_name: 'course_progress',
    table_definition: `
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      user_id UUID REFERENCES auth.users(id) NOT NULL,
      course_id UUID REFERENCES courses(id) NOT NULL,
      progress INTEGER DEFAULT 0,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      UNIQUE(user_id, course_id)
    `
  })

  if (progressError) {
    console.error('Error creating course_progress table:', progressError)
  } else {
    console.log('Course progress table created or already exists')
  }

  // Create topics table
  const { error: topicsError } = await supabase.rpc('create_table_if_not_exists', {
    table_name: 'topics',
    table_definition: `
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      domain TEXT NOT NULL,
      order INTEGER NOT NULL
    `
  })

  if (topicsError) {
    console.error('Error creating topics table:', topicsError)
  } else {
    console.log('Topics table created or already exists')
  }

  console.log('Database initialization complete')
}

initDatabase()
  .catch(console.error)
  .finally(() => process.exit()) 