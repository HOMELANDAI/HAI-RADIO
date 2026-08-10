# Product Requirements Document

## Product name

HAI RADIO

## Product definition

HAI RADIO is a custom HomelandAI radio interface and mainframe system built around a Radio.co-powered internet station. It combines live listening, music block programming, NPC host personalities, listener submissions, vote-based approvals/denials, venue signaling, Playlist Pulse gateway access, and a pathway to the separate HAI Frequency podcast property.

## Primary users

- Music listeners
- HomelandAI venue guests
- Twitch viewers
- Maestro viewers
- HAI members
- Curators and moderators
- Venue operators
- Project administrators

## Core user flows

### Listen live

1. User lands on HAI Radio.
2. User sees current block, track, NPC host, chat highlight, and active venue.
3. User plays stream powered by Radio.co.
4. User can vote, react, submit songs, open Pulse, or view venue map.

### Submit a song

1. User opens Song Submissions.
2. User selects block and enters track metadata.
3. Submission enters pending queue.
4. NPC or curator reviews it.
5. Track receives approval, denial, or vote event.

### Submission Court

1. Pending songs appear in the court dashboard.
2. NPC issues a verdict.
3. Viewers vote to Co-Sign or Override.
4. Final result is stamped and optionally clipped.
5. Eligible tracks can enter Playlist Pulse.

### Playlist Pulse

1. User presses glowing Pulse button.
2. Winning playlist modal opens.
3. Songs appear in numerical order.
4. User may listen, share, or enter Playlist Pulse.

### High Frequency Gateway

1. User selects High Frequency Gateway.
2. User sees the separate podcast identity and latest episode links.
3. User exits HAI Radio context only by intentional navigation.

## Functional requirements

- Custom audio player
- Now-playing metadata
- HAI Stream Beacon
- Block cards
- NPC host directory
- Submission form
- Submission Court dashboard
- Approval/denial voting overlay
- Venue Signal Map
- Playlist Pulse modal
- High Frequency gateway
- Admin console
- Twitch/Maestro integrations
- Supabase persistence

## Non-functional requirements

- Responsive desktop and mobile UI
- OBS-compatible overlay routes
- Realtime updates via Supabase Realtime
- Provider isolation for Radio.co integration
- Clear separation between HAI Radio and High Frequency
- Rights/clearance field for submitted songs
- Modular NPC scripts and dialogue logic
