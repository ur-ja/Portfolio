-- Run this in Supabase: SQL Editor → New query → paste → Run

create table if not exists public.seeds (
  id text primary key,
  title text not null check (char_length(title) >= 3 and char_length(title) <= 120),
  gardener text not null default 'anonymous gardener',
  waters integer not null default 0 check (waters >= 0),
  bloomed boolean not null default false,
  x integer not null check (x >= 0 and x <= 100),
  planted_at timestamptz not null default now()
);

create index if not exists seeds_planted_at_idx on public.seeds (planted_at);

alter table public.seeds enable row level security;

-- API routes use the service role key, which bypasses RLS.
-- No public policies needed.

-- Optional starter rows (edit or remove before running)
insert into public.seeds (id, title, gardener, waters, bloomed, x, planted_at)
values
  (
    'demo-sprout',
    'an idea garden',
    'anonymous gardener',
    6,
    true,
    82,
    '2026-03-01T00:00:00.000Z'
  )
on conflict (id) do nothing;
