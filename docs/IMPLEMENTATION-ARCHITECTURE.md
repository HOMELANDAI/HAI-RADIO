# HAI RADIO — Build Architecture and Contracts
## Context and architectural rules
The website presents curated real-time audio and interaction while broadcast operation remains in Radio.co. HAI owns the presentation and decision systems. Each integration has an adapter and an explicit failure state. No mock provider response masquerades as live data.

```text
Radio.co broadcast + metadata
        |  public status/current-track adapter + cache
        v
Next.js server/API  ----> read-only listen endpoints  ----> web/PWA/OBS browser overlays
        |                                  |
        v                                  v
Supabase Postgres + Auth + RLS + Realtime + Storage
  ^       ^         ^          ^
  |       |         |          |
Curator admin  NPC orchestrator  Twitch/Maestro event adapters  Venue gateway
                        |
                    moderation -> TTS/animation renderer -> program audio/video
Separate Playlist Pulse service ---- read-only winner adapter ---- PULSE modal
Separate Frequency property ---- curated link metadata ---- gateway/card
```

## Ownership and boundaries
- **Radio.co:** station stream/automation/playlists, native now-playing and station schedule. Verify plan entitlements and API call limitations before coding. Public endpoint documentation: `/stations/{id}/status`, `/api/v2/{id}`, `/api/v2/{id}/track/current`; station ID configuration is required. Server-side polling with backoff/caching; validate actual payload before pinning types. Do not broadcast more frequently based only on UI browser tabs.
- **HAI:** local program block schedule, canonical track metadata corrections, NPC decision workflow and venue presentation. Do not assume Radio.co API can arbitrarily enqueue track requests; stage through curator/Radio.co-approved workflow.
- **Supabase:** authenticated profiles and roles, music submission and verdict state, vote sessions, events, NPC configuration, consent, venue status, clips metadata and operational audit records. UI subscribes only to sanitized public projections.
- **Playlist Pulse:** own game/domain. HAI reads latest official winner and ordered songs; does not host game logic or rewrite awards/winners.
- **The HAI Frequency:** independent podcast domain/service; HAI displays promo metadata, links and optional episode cards. No podcast API dependency required for initial launch.

## Service and code organization (target; existing code is scaffold)
```text
app/
 (listener)/listen (listener)/blocks (listener)/court (listener)/venues
 api/public/now-playing  api/public/stream-beacon api/pulse/winner
 api/submissions  api/verdicts/{id}/vote  api/admin/...
 overlay/beacon  overlay/verdict  overlay/venue/{id}
components/player components/beacon components/npc components/court
lib/providers/radioco lib/providers/maestro lib/providers/twitch
lib/engines/npc lib/engines/rights lib/engines/voting
lib/auth lib/telemetry lib/moderation lib/contracts
supabase/migrations/ supabase/tests/ 
tests/unit tests/integration tests/e2e tests/accessibility
docs/
```

## HTTP/event contract proposal
- `GET /api/public/now-playing` -> `{stationId, state: LIVE|OFFLINE|STALE, track:{id,title,artist,artworkUrl,startedAt}|null, blockId, asOf, source:'radioco'}`. Cache at edge/server; no credentials in browser.
- `GET /api/public/stream-beacon` -> `{track,block,npcMood,highlight,activeVenue,signal,updatedAt}`; individually source-stamped to avoid stale merges.
- `GET /api/pulse/winner` -> `{roundId,title,theme,updatedAt,tracks:[{position,title,artist}],gameUrl}`. Sorted by integer `position`; no game write endpoint here.
- `POST /api/submissions` -> authenticated / abuse-controlled `{songTitle,artist,sourceUrl,blockId,fitReason}` -> receipt `{id,status:'pending'}`; server verifies rights/policy later.
- `POST /api/verdicts/{id}/vote` -> authenticated principal + signed CSRF/session context, `{choice:'cosign'|'override',idempotencyKey}`; DB unique index on `(session_id,user_id)`, transactional finalization and monotonic close time.
- `POST /api/admin/verdicts/{id}/finalize` -> privileged operator only; state transition `REVIEWED -> VOTING -> CLOSED -> PUBLISHED`, with immutable audit event.

## Data/event contracts
Every event has `eventId`, `schemaVersion`, `occurredAt`, `source`, `correlationId`, `visibility`, and optional `venueId`, `blockId`, `npcId`. Server rejects unknown/unauthorized producers, deduplicates eventId, and never accepts a client-supplied privileged role.
Events: `track.started`, `track.ended`, `block.changed`, `chat.message.moderated`, `comment.batch.ready`, `submission.created`, `submission.reviewed`, `vote.opened`, `vote.closed`, `verdict.finalized`, `npc.reaction.approved`, `npc.reaction.played`, `venue.signal.updated`, `pulse.winner.published`.

## Audio timing and NPC segment state machine
Proposed clock: Radio.co plays fixed schedule with predefined **spoken content windows** (licensed/original bumpers, inter-song breaks), rather than injecting unpredictable TTS on top of copyrighted music. Timeline:
`TRACK_PLAYING` -> `COMMENT_COLLECTION` -> `MODERATE` -> `SUMMARIZE` -> `SCRIPT_PENDING` -> `APPROVE` -> `WINDOW_AVAILABLE` -> `NPC_REACTION` -> `SONG_DIARY_AS_SCHEDULED` -> `TRACK_PLAYING`.
Graceful fallback when generation/approval misses the break: play pre-cleared station ident / instrumental bed; don't delay station or speak over an unlicensed recording.

## Venue distribution
A single station has **one global timeline**, even if many venues show different block cards. Venue-local programs require independently provided streams or legally compliant local audio selection. Model `stationId`, `venueId`, `presentationBlockId` separately and label a local skin as not equivalent to another simultaneous station. No fake synchronized independent radio blocks. For distributed venue playback, expect stream delay; the Beacon is informational and must tolerate skew. A local operator can mute/pause/change venue volume without modifying central master stream.

## Adapter errors and SLAs (initial proposed targets)
- Radio.co metadata: poll capped per provider limits; stale after e.g. 90 seconds; degraded banner if provider unavailable.
- Audio: user gesture required; meaningful retry UI; stream watchdog and operator alarms.
- Votes: server authoritative; reject after end; one per identity/event, anti-bot and moderation.
- Chat: allowlist + sanitize + rate cap; show no private messages; grace mode on disconnect.
- NPC: turn-generation bounded; human-approved fallback scripts for all eight blocks; never permit autonomous provider/admin actions.
- Playlist Pulse: 5-minute cached winner is acceptable, show last-update timestamp and "no winner yet" state.
- Frequency: if link unavailable, hide button or display "coming soon" instead of dead CTA.

## Cloud / deployment
Recommended hosting: Next.js deployment with staging and prod isolated; managed Supabase environments; Radio.co separate credentials; server-side secrets only. Add build checks, security scans, provider contract tests and staging smoke tests before release. Use structured logs, request IDs, telemetry sampling and runtime feature flags. Backups must include Postgres and storage retention plans; rehearse recovery quarterly.

## Current repo audit
Current `lib/radioCo.ts` returns `Concrete Dreams` placeholder, and `components/HaiRadioMainframe.tsx` binds static `data/hai-radio.ts`. Navigation and gateway are mostly display components. `supabase/schema.sql` defines tables but no RLS policies. Therefore current repo status = **concept/prototype scaffold**, not live stream or production service. The roadmap explicitly budgets work for functional adapters, auth policies, and test automation.
