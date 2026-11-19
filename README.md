# HAI RADIO
### HomelandAI's intelligent, meticulously curated radio and venue signal platform

**Project status: architecture + UI scaffold; not production, not licensed or connected to live Radio.co yet.**

[Implementation plan](docs/IMPLEMENTATION-PLAN.md) · [Backlog](docs/IMPLEMENTATION-BACKLOG.md) · [System architecture](docs/IMPLEMENTATION-ARCHITECTURE.md) · [Rights and security](docs/SECURITY-RIGHTS.md) · [NPC operations](docs/NPC-OPERATIONS.md) · [UX QA](docs/DESIGN-QA.md) · [Launch operations](docs/LAUNCH-OPERATIONS.md) · [Decisions & risks](docs/DECISIONS-AND-RISKS.md)

## Mission
HAI RADIO is a HomelandAI custom web/PWA experience centered on a **Radio.co-powered station** (pending provider setup and rights). It unites genre-educated NPC hosts, a dynamically contextual **HAI Stream Beacon**, strict curatorial judgement, entertaining listener submissions, a **Venue Signal Map**, and a listener-first interface. Rear-POV retro-futuristic DJ studio visuals connect the music to its hosts. The first station prioritizes discovering and enjoying HomelandAI's unusually wide but meticulously selected music repertoire.

**Separate products, connected gateways:** The **PULSE** node opens the *numerically ordered official winning playlist* from the separate Playlist Pulse game. The **HAI Frequency** button links to an independent weekly podcast, NOT a HAI Radio block or feature segment.

## Current repository
- `app/` and `components/`: concept Next.js UI scaffold and mock sample data.
- `data/`: sample blocks, NPCs, venues and court.
- `lib/radioCo.ts`: **placeholder** metadata; do not present as a live service.
- `supabase/schema.sql`: prototype schema, **not production safe until RLS and authorization are designed/tested**.
- `docs/`: product requirements and implementation package with phases 0–10, critical-path tasks and formal release gates.
- `.github/`: issue/PR templates. Work tracking should use GitHub Issues.
- `schemas/`: event payload samples.

## Planned phased delivery
| Phase | Goal |
|---|---|
| 0 | Discovery, API verification and music rights sign-off |
| 1 | Responsive branded UX and design system |
| 2 | Secure engineering foundation, RLS, CI and environments |
| 3 | Radio.co streaming, metadata and scheduled curation |
| 4 | Listener MVP and Pulse/Frequency distinct gateways |
| 5 | Submissions, court, editorial moderation |
| 6 | Genre specialist NPC intelligence and broadcast clock |
| 7 | Moderated chat batching, voting and OBS overlays |
| 8 | One venue pilot, Twitch/Maestro integration subject to rights |
| 9 | Beta hardening, release approval, public launch |
| 10 | Analytics, tuning, and future second station assessment |

See [plan](docs/IMPLEMENTATION-PLAN.md) for deliverables, dependencies, exit criteria, engineering checks, ownership and release milestones.

## Start local UI scaffold
```bash
npm install
cp .env.example .env.local
npm run dev
```
This does **not** create a live station, configure Supabase, or authorize broadcasting. Treat mock counters, songs, venues and NPC reactions as demo fixtures until connected and independently validated.

## Architecture boundaries
**Radio.co:** broadcast/scheduling and station metadata, pending validated API/plan.  
**Supabase:** HAI app data, Auth, Edge Functions, Realtime and Storage; all exposed tables need tested RLS.  
**Next.js:** custom browser/PWA and OBS UI, safe API adapters.  
**Twitch/Maestro:** optional audience surfaces only when platform integration and music distribution rights are cleared.  
**NPC:** evidence-backed dialogue, human supervision, original rights-cleared audio and scheduled speaking windows.  
**Venue:** signal observations only from authorized data, no private screen surveillance.

## Required launch gates
Music licensing by output surface and territory, honest real-time provider data, secure role separation, curator-controlled tracks, privacy/consent, accessible player, moderation and incident controls, and tested deployments. **No feature is production-ready because it appears in the mock UI.**

**HAI RADIO — You're not just hearing HAI. You're living in it.**
