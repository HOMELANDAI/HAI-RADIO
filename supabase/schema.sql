-- HAI RADIO Supabase schema
-- Broadcast stream: Radio.co
-- Intelligence, interaction, game data, and UI state: Supabase

create extension if not exists "uuid-ossp";

create table if not exists profiles (
  id uuid primary key default uuid_generate_v4(),
  auth_user_id uuid,
  handle text unique,
  display_name text,
  avatar_url text,
  membership_tier text default 'listener',
  created_at timestamptz default now()
);

create table if not exists blocks (
  id text primary key,
  name text not null,
  genre text not null,
  description text,
  mood_color text,
  denial_quote text,
  approval_ritual text,
  created_at timestamptz default now()
);

create table if not exists npc_hosts (
  id text primary key,
  block_id text references blocks(id),
  name text not null,
  role text,
  personality_traits text[],
  intellectual_specialty text,
  sarcasm_level int default 3,
  approval_style text,
  denial_style text,
  catchphrases text[],
  mood_icon text,
  broadcast_status text default 'offline',
  created_at timestamptz default now()
);

create table if not exists song_submissions (
  id uuid primary key default uuid_generate_v4(),
  submitter_id uuid references profiles(id),
  song_title text not null,
  artist text not null,
  genre text,
  block_id text references blocks(id),
  mood text,
  bpm int,
  sample_source_note text,
  fit_reason text,
  listener_note text,
  platform_link text,
  rights_clearance_status text default 'unreviewed',
  status text default 'pending',
  pulse_eligible boolean default false,
  created_at timestamptz default now()
);

create table if not exists submission_verdicts (
  id uuid primary key default uuid_generate_v4(),
  submission_id uuid references song_submissions(id) on delete cascade,
  npc_id text references npc_hosts(id),
  verdict text not null,
  quote text,
  sound_effect text,
  approval_percent numeric default 0,
  denial_percent numeric default 0,
  clip_url text,
  created_at timestamptz default now()
);

create table if not exists venue_signals (
  id text primary key,
  name text not null,
  venue_type text,
  current_block_id text references blocks(id),
  current_track text,
  active_npc_id text references npc_hosts(id),
  npc_mood text,
  crowd_energy int default 0,
  recent_highlight text,
  next_block_id text references blocks(id),
  signal_strength text default 'offline',
  updated_at timestamptz default now()
);

create table if not exists playlist_pulse_rounds (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  theme text,
  status text default 'draft',
  winning_user_id uuid references profiles(id),
  curator_note text,
  npc_commentary text,
  created_at timestamptz default now(),
  completed_at timestamptz
);

create table if not exists playlist_pulse_entries (
  id uuid primary key default uuid_generate_v4(),
  round_id uuid references playlist_pulse_rounds(id) on delete cascade,
  position int not null,
  song_title text not null,
  artist text not null,
  block_id text references blocks(id),
  play_history jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  unique(round_id, position)
);

create table if not exists clips (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  category text,
  block_id text references blocks(id),
  npc_id text references npc_hosts(id),
  venue_id text references venue_signals(id),
  source_platform text,
  clip_url text,
  engagement_count int default 0,
  pulse_tag boolean default false,
  high_frequency_tag boolean default false,
  created_at timestamptz default now()
);

create table if not exists high_frequency_gateway (
  id uuid primary key default uuid_generate_v4(),
  latest_episode_title text,
  description text,
  release_date date,
  watch_url text,
  listen_url text,
  archive_url text,
  status text default 'available',
  updated_at timestamptz default now()
);
