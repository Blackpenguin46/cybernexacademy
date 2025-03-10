-- Create articles table
create table public.articles (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text not null,
  url text not null,
  category text not null,
  published_at timestamp with time zone default timezone('utc'::text, now()) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create events table
create table public.events (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text not null,
  date timestamp with time zone not null,
  type text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Add user interests to profiles table
alter table public.profiles
add column if not exists interests text[] default array[]::text[];

-- Enable RLS
alter table public.articles enable row level security;
alter table public.events enable row level security;

-- Create policies
create policy "Anyone can view articles"
  on public.articles for select
  using (true);

create policy "Anyone can view events"
  on public.events for select
  using (true);

-- Add some sample data
insert into public.articles (title, description, url, category, published_at) values
  ('Understanding Zero-Day Vulnerabilities', 'A comprehensive guide to identifying and mitigating zero-day threats.', 'https://example.com/zero-day', 'Security Research', now()),
  ('Cloud Security Best Practices', 'Essential security measures for cloud infrastructure.', 'https://example.com/cloud-security', 'Cloud Security', now() - interval '1 day'),
  ('Latest Ransomware Trends', 'Analysis of recent ransomware attacks and prevention strategies.', 'https://example.com/ransomware', 'Threat Intelligence', now() - interval '2 days');

insert into public.events (title, description, date, type) values
  ('Ethical Hacking Workshop', 'Hands-on workshop covering penetration testing techniques.', now() + interval '7 days', 'Workshop'),
  ('Cloud Security Summit', 'Industry experts discuss cloud security challenges.', now() + interval '14 days', 'Conference'),
  ('Cybersecurity Career Fair', 'Connect with leading companies in cybersecurity.', now() + interval '21 days', 'Career'); 