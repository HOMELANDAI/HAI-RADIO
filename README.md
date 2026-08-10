# HAI RADIO

**HAI RADIO** is the HomelandAI web-based mainframe system for a premium internet radio experience powered by Radio.co, enhanced by a custom HAI front-end, NPC host intelligence, live venue signaling, Twitch/Maestro interaction, Playlist Pulse gateway integration, and a separate pathway to **The HAI Frequency** weekly podcast property.

HAI RADIO is not just a music station. It is the voice, rhythm, commentary layer, game gateway, and central nervous system of the HomelandAI audio and venue universe.

## Core pillars

- **Radio.co broadcast engine** for live stream delivery, station scheduling, and radio metadata.
- **Custom HAI interface** with retro-futuristic command center visuals.
- **HAI Stream Beacon** as a persistent global status bar across the system.
- **Music blocks** for Afterdark, Amapiano, Rap Block, House Set, RNB Rewind, Afrobeats Blaze, Cafe/LoFi, and Sunday Service.
- **NPC Host Universe** with genre-trained personalities and venue-specific commentary.
- **Submission Court** with approval, denial, voting, roasts, sound cues, and clip-worthy moments.
- **Playlist Pulse Gateway** with a glowing Pulse button and winning playlist modal.
- **Venue Signal Map** showing HAI Radio across 8-Bit Underground, HAI Cafe, Rooftop, Gym, XR Theater, HAI Studio, North Coast RD Live, and Taste of Paradise gateways.
- **High Frequency Gateway** as a connected but separate weekly podcast pathway.
- **Supabase data layer** for submissions, votes, NPC profiles, clips, venue states, playlist pulse rounds, and realtime UI state.

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Repository map

```text
app/                    Next.js app shell and main page
components/             UI components for the HAI Radio mainframe
data/                   Mock project data for blocks, NPCs, venues, and submissions
lib/                    Radio.co and Supabase client helpers
supabase/schema.sql     Database schema for the HAI Radio backend
schemas/                JSON schema examples for integrations
docs/                   Project bible, architecture, strategy, and conversation summary
public/                 Asset placeholder notes
```

## Product status

This repository is a comprehensive concept-to-build scaffold. It contains the documentation, UI skeleton, data models, Supabase schema, and integration contracts needed to move HAI RADIO into design, prototype, and implementation.
