-- Create waitlist table
create table if not exists public.waitlist (
    id uuid default gen_random_uuid() primary key,
    email text not null unique,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Set up RLS policies
alter table public.waitlist enable row level security;

-- Allow inserts from authenticated and anonymous users
create policy "Allow anonymous inserts"
    on public.waitlist
    for insert
    to anon
    with check (true);

create policy "Allow authenticated inserts"
    on public.waitlist
    for insert
    to authenticated
    with check (true);

-- Only allow admins to view the waitlist
create policy "Allow admin select"
    on public.waitlist
    for select
    to authenticated
    using (auth.jwt() ->> 'email' in (select email from public.admin_users)); 