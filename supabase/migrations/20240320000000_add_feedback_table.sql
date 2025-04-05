create table public.feedback (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text not null,
  type text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  user_id uuid references auth.users(id)
);

-- Enable RLS
alter table public.feedback enable row level security;

-- Create policies
create policy "Users can create feedback"
  on public.feedback for insert
  with check (true);

create policy "Anyone can view feedback"
  on public.feedback for select
  using (true);

create policy "Users can update their own feedback"
  on public.feedback for update
  using (auth.uid() = user_id);

create policy "Users can delete their own feedback"
  on public.feedback for delete
  using (auth.uid() = user_id); 