# HAI RADIO — End-to-End Implementation Plan
**Status:** planning baseline • **Owner:** HomelandAI • **Delivery approach:** one station first, expand after operational proof • **Canonical repo:** HOMELANDAI/HAI-RADIO

## Product charter
HAI RADIO is a meticulously curated, more-varied-than-traditional internet music station and a persistent sonic identity across HomelandAI spaces. Its distinctive layer is intelligent, endearingly sarcastic, genre-specialist NPC hosts who review music, react to moderated listener comments in batches at song boundaries, and build a recurring narrative. The rear-POV DJ console motif (retro computer-diary inspiration reimagined as a music soundboard) is the persistent visual anchor.

**Separate properties:** Playlist Pulse is a HomelandAI music game reached through a small glowing **PULSE** button; it opens a *numerically ordered winning playlist* modal with optional exit to the separate game. **The HAI Frequency** is an independent weekly 45–60-minute podcast with only a gateway/episode teaser in HAI Radio. Neither is a radio block. The Song Diary, by contrast, belongs inside HAI Radio.

**System boundaries:** Radio.co = broadcast hosting, automation, schedule and player metadata (subject to contract/API validation). HAI app = visual/player UX, block and venue state, moderated chat, NPC orchestration, votes, Playlist Pulse gateway, analytics, admin. Supabase = state/data/auth/realtime/storage. Twitch/Maestro = separately licensed interactive video surfaces; no assumption that radio licensing transfers.

## Scope fences
**MVP:** one legal station, up to 8 branded blocks with scheduling, reliable stream and accurate now-playing, responsive dashboard, Stream Beacon, NPC profiles and pre-reviewed inter-song commentary, Song Diary, curator-operated submissions, read-only Playlist Pulse winning modal, separate HAI Frequency gateway, basic analytics and monitoring.
**Beta:** chat moderation and comment batches, scheduled NPC verdicts, voting with curator override, clip-safe assets, one pilot venue, reliability testing.
**Expansion:** distributed venues and 8-Bit Ghost observation with explicit authorized game-only feeds, Twitch/Maestro adapters, adaptive NPC orchestration, game-state integration, additional station only after pilot success.
**Out of scope at first launch:** autonomous music licensing, unsupervised track queues, invasive screen monitoring, guaranteed instantaneous NPC speech over music, commercial music in unauthorized VODs, native mobile apps, physical venue sensing without consent, a second station, and building The HAI Frequency itself.

## Project stages and release gates
All estimates are **planning ranges**, contingent on a 2-person engineering/production team, approved rights and provider access; durations may overlap. Track separately *planned*, *built*, *tested*, *deployed*. Never mark a gate passed on mock-data screenshots alone.

| Phase | Planning window | Objective | Key deliverables | Exit criteria / dependency |
|---|---|---|---|---|
| 0. Discovery & go/no-go | Weeks 1–2 | Confirm legal/technical viability | stakeholder brief, rights matrix, Radio.co capability spike, prioritized MVP, risk register | Launch territories and permitted repertoire/platforms reviewed by counsel; station/API approach verified |
| 1. Product & UX system | Weeks 2–4 | Lock navigable HAI design | IA, wireframes, high-fidelity prototype, tokens, NPC/UI behavior specs, mobile/OBS concepts | User can traverse all MVP flows with distinct game/podcast gateways; accessibility review |
| 2. Engineering foundation | Weeks 3–5 | Create secure deployable baseline | pinned dependencies, CI, staging, Supabase schema migrations + RLS, error monitoring, secrets, provider interfaces | CI green, database permission tests pass, staged rollback works |
| 3. Radio broadcasting & curation | Weeks 4–7 | Prove legal 24/7 station core | Radio.co station, scheduling, block manifests, metadata adapter, fallback UI/audio policy, rights approvals | Multi-day soak test; correct metadata transitions; no unlicensed content |
| 4. Listener MVP | Weeks 5–9 | Usable public player | Listen Live, Beacon, blocks, mobile UI, Song Diary, Pulse winning modal, Frequency gateway, analytics consent | End-to-end signed-out + signed-in flows on mobile/desktop; basic WCAG audit |
| 5. Curator + Submission Court | Weeks 8–12 | Human-governed interaction | submit/review/status, queues, approval/denial rituals, NPC dialogue library, moderation, immutable verdict logs | Moderated end-to-end queue, no unreviewed auto-play, all SFX licensed/original |
| 6. NPC intelligence & quality | Weeks 10–15 | Genre-credible repeatable hosts | persona/knowledge packs, fact-checked sample history, commentary planner, dialogue testing, TTS/video adapters | Factual audit and safety eval; latency within budget; safe fallback lines |
| 7. Live engagement + OBS | Weeks 13–18 | Close the audience loop | chat ingestion, batch reactions, co-sign/override voting, anti-abuse, overlay routes, highlight capture | Votes counted once, state recovers after reconnect, overlays safe for OBS |
| 8. Venue signals + external surfaces | Weeks 16–22 | Pilot cross-venue deployment | 8-Bit Underground pilot, per-venue audio routing, signal control, venue consent, Twitch/Maestro adaptation | One venue runs stable, observer only consumes permitted data, rights-by-surface check |
| 9. Closed beta, hardening & launch | Weeks 20–25 | Launch safely | load/accessibility/security QA, playbooks, support, launch checklist, promotion | Every P0/P1 gate closed, rights sign-off, rollback rehearsed |
| 10. Postlaunch & second station decision | Week 26 onward | Optimize + consider expansion | instrumentation review, genre retention insights, NPC refinement, cost audit, station-2 decision | 30-day listening and incident data; second station approved independently |

## Workstreams with dependencies
A. Legal and repertoire: rights clearance → music ingestion → Radio.co station → video/venue distribution. Blocking gate.
B. Foundation: account/project setup → CI/environment → auth/RLS → stable API contracts → app.
C. UX: design system → Listen Live + Beacon → responsive player → accessible overlays.
D. Curatorial operations: tagging → block schedule → track history → review rules → submissions.
E. NPC: persona charter → evidence packs → prompt policies → human validation → speech/animation → moderated live responses.
F. Community: consent/moderation → chat adapters → vote sessions → signed receipts → archive/clips.
G. Venue: controlled state ingestion → map → selective player instances → local NPC commentary.
H. Games/media: Pulse read-only adapter and modal; separate Frequency link metadata only.

## Release slices
- **R0 Internal demo:** mock player, block navigation, NPC cards, Pulse modal, Frequency gateway; explicitly DEMO-labeled.
- **R1 Private listening alpha:** Radio.co live, scheduled curated blocks, Beacon, privacy/rights cleared, basic admin.
- **R2 Community beta:** submissions with curator decisions, NPC inter-song commentary, votes, no automatic track injection.
- **R3 Venue pilot:** one physical HAI venue, local signal + authorized telemetry, per-surface playback/rights.
- **R4 Public launch:** observability, failover messaging, moderation coverage, access controls, support and analytics.

## Priority mapping
**P0:** legal rights; station operation; stream audio and now-playing; accessibility; Supabase RLS/role security; content moderation; owner-controlled schedule; uptime and alerts; privacy; explicit separation of external gateways.
**P1:** Song Diary; curated denials; viewer vote experience; chat batches; single-venue pilot; clip-safe edits.
**P2:** advanced game integration, larger NPC cast, additional venues and stations, predictive behavior, deep multi-platform interactivity.

## Acceptance test scenarios
1. Listener starts playback with gesture; stream URL fails -> meaningful error without fake "LIVE".
2. Radio.co metadata lags -> stale badge; last valid state retained with source timestamp; no invented track.
3. Approved block changes -> Beacon, card and NPC state agree; a venue can intentionally override local block without overwriting global station.
4. Pulse click -> focus-trapped accessible modal with ranked song order; close returns focus; external game navigation is explicit.
5. Frequency click -> separate property link; never labeled radio block or podcast radio segment.
6. Anonymous song suggestion -> rate-limited and quarantined; no public playback until rights + curator approval.
7. Two users vote; retries/reconnect -> at most one recorded vote per eligible user per session; final verdict auditable.
8. Malicious chat text -> sanitized, moderated, never interpreted as agent instructions; no raw private feed.
9. NPC suggests uncertain lyric/sample lineage -> cites approved evidence or expresses uncertainty; no invented analysis.
10. Clip request with commercial audio -> blocked unless rights allow; clip-safe reaction variant available.
11. Venue monitor feed -> only preauthorized gameplay/telemetry; no reading of private windows or third-party apps.
12. Operator kill switch -> disables TTS, chat, votes, or venue broadcast independently with audit log.
13. Secure profile read/update -> owner only; roles server-verified; anonymous cannot enumerate private records.
14. Weekly Song Diary generated from approved track/play log and moderated public events; no fabricated interactions.

## Definition of Ready and Done
**Ready:** user story, value, platform/surface, relevant rights class, dependencies, acceptance checks, API contract, mock vs live distinction, owner and estimate identified.
**Done:** code merged/reviewed, automated tests, RLS/security test if applicable, telemetry, logs, accessibility, updated docs, staging demo, launch flags, rollback and user/operations acceptance.

## Success metrics (targets to set after baseline)
- Station: playable session success, buffering/error rate, metadata freshness, rights-policy compliance.
- Listener: unique listeners, median listening minutes, repeat sessions, block changes, mobile retention.
- Community: eligible submissions, response latency, votes per verdict, reversals, moderation burden, clip opt-in.
- NPC: fact-check accuracy, human funniness rating, repetitive-line frequency, safe-response rate, TTS interruption failures.
- Venues: signal reliability, playback drift across devices, local participation, session continuity.
- Content: listener-reported discovery and variety, diary engagement, legally distributable clip performance.

## Decisions requiring HomelandAI approval
- Primary streaming territories, licensed repertoire and licensors; Radio.co plan/provider contract.
- Public vs member-only submissions; vote eligibility (do not sell verdict authority).
- First anchor genre/program blocks; schedule clock and timezone.
- NPC voices/assets ownership, human sign-off thresholds and response boundaries.
- First physical pilot venue, consent/signage policy and what telemetry is accessible.
- Twitch DJ program vs rights-cleared independent content model; Maestro integration terms.
- Whether Playlist Pulse source of truth remains in separate game database/adapter (recommended).
- The HAI Frequency canonical destination, artwork and episode feed (separate system).

## Hand-off
See [Implementation backlog](IMPLEMENTATION-BACKLOG.md), [Architecture](IMPLEMENTATION-ARCHITECTURE.md), [Security & rights](SECURITY-RIGHTS.md), [NPC orchestration](NPC-OPERATIONS.md), [UX system](DESIGN-QA.md), [Operations](LAUNCH-OPERATIONS.md), and GitHub Issues for work tickets. No production integrations have been authenticated or deployed by this plan.
