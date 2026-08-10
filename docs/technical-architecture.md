# Technical Architecture

## System overview

HAI RADIO separates broadcast infrastructure from experience intelligence.

- Radio.co: broadcast stream, scheduling, station automation, metadata.
- Supabase: user profiles, submissions, votes, NPC profiles, venue states, clips, Playlist Pulse data, High Frequency gateway metadata.
- Next.js: custom HAI front-end and API routes.
- Twitch/Maestro: live interaction, chat, voting, and overlay events.
- OBS: browser-source overlays for live streams.

## Frontend

Recommended stack:

- Next.js
- React
- TypeScript
- Tailwind CSS
- lucide-react icons
- Web Audio API for waveform visualization
- Supabase Realtime for UI updates

## Backend

Recommended stack:

- Supabase Postgres
- Supabase Auth
- Supabase Edge Functions
- Supabase Realtime
- Supabase Storage

## Provider isolation

Keep Radio.co logic isolated in `lib/radioCo.ts` so HAI Radio can maintain a custom UI and potentially support backup stream providers later.

## Realtime channels

Potential Supabase channels:

- `stream-beacon`
- `venue-signals`
- `submission-court`
- `npc-moods`
- `playlist-pulse`
- `chat-highlights`

## Overlay routes

Suggested future routes:

- `/overlay/stream-beacon`
- `/overlay/vote`
- `/overlay/submission-court`
- `/overlay/8bit-ghost`
- `/overlay/pulse-winner`

## Data flow

1. Radio.co updates stream and track metadata.
2. HAI backend maps metadata to block, NPC, and venue context.
3. Supabase broadcasts realtime updates to the UI.
4. Twitch/Maestro chat events feed chat highlights and voting.
5. Submission Court produces verdicts and clips.
6. Playlist Pulse winners surface through Pulse button and modal.
