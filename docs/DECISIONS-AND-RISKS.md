# HAI RADIO — Decision Register & Risk Log

## Decisions recorded from conversation
- Brand: **HOMELANDAI**, abbreviation **HAI**, product **HAI RADIO**.
- HAI Radio one station first; potential second after proof of operating quality.
- Purpose: intensely curated personal tastes with greater variety than standard terrestrial radio; commercial returns secondary.
- Broadcast provider target: Radio.co. Partnership is aspirational; no formal partnership or account approval established.
- UI: retro-futurist chrome, neon grid, rear view NPC at music soundboard with viewer comment screen and rare fourth-wall breaks.
- NPCs: all witty/knowledgeable/endearingly sarcastic with genre-specialist training; Rap host expert in 90s freestyles, mixtape eras, samples, rhyme and complex entendre.
- Chat: moderated, batched song-boundary reactions, not unbounded continuous speech.
- Court: approval/denial ceremonies, tasteful satirical clip-worthy lines, sound effects, user submissions with curator final gate.
- Blocks: Afterdark, Amapiano, Rap, House, RNB, Afrobeats, LoFi/Café and Sunday Service.
- Venue: Radio is persistent across HAI spaces; localized second personality such as 8-Bit Ghost; venue signal map and Beacon.
- Playlist Pulse: small glowing PULSE entry, winning playlist modal numbered in order, link to independent game; expansion later.
- The HAI Frequency: separate 45–60-minute weekly podcast connected through a link/gateway; **not** a music block, HAI Radio feature segment or internal show module.
- Backend: Supabase database, Auth, Edge Functions, Realtime, Storage; web/PWA client.
- Platforms: Twitch for participatory programming and Maestro for branded interactive experiences, subject to integration/rights feasibility.

## Open architecture decisions
| ID | Question | Impact | Default until decided |
|---|---|---|---|
| ADR-001 | Radio.co plan, public and authenticated APIs, rate limits, allowed use | P0 | adapter mock only / verify API |
| ADR-002 | Rights-by-region and by-output-surface | P0 | no commercial music broadcast |
| ADR-003 | Source of truth for Playlist Pulse official winner | P1 | read-only external adapter |
| ADR-004 | Official HAI Frequency domain/feed | P1 | gateway disabled without URL |
| ADR-005 | Station time zone, program clock, 24/7 moderation hours | P0 | UTC internal + explicit display |
| ADR-006 | NPC human approval thresholds and distinct voices | P0 | all public scripted/approved |
| ADR-007 | Voting eligibility and rules: opinion vs music inclusion | P1 | advisory, curator final |
| ADR-008 | Pilot venue and telemetry/permission boundary | P1 | authorized game events only |

## Risk register
| Risk | Likelihood | Severity | Owner | Mitigation |
|---|---|---|---|---|
| Radio.co rights assumed sufficient for Twitch/venue | High | Critical | Legal/producer | separate clearance matrix; block distribution |
| API limits prevent timing-perfect sync | Medium | High | Engineer | provider contract test; cached metadata; deliberate break windows |
| RLS missing or role escalation | High in current scaffold | Critical | Backend | harden schema/migrations, security test before deployment |
| AI sample-lineage hallucination | Medium | High | NPC editor | curated evidence library and human review |
| AI roast crosses into harassment/privacy | Medium | High | Moderator | allowlist/consent, scripted humor and kill switch |
| Voting botting and race conditions | Medium | Medium | Backend | unique votes, server time, rate limits |
| Multi-venue audio conflated with independent stations | Medium | High | Audio engineer | separate global station and venue skin/stream states |
| Clip copyright violations | High | Critical | Rights editor | per-surface rights gate, original commentary-only fallback |
| Experience too complex for new users | Medium | High | UX | Listen Live first, progressive disclosure, mobile-first testing |
| NPC operation cost/latency | Medium | Medium | Producer | batch reactions, preset assets and budgets |
| Game/podcast boundaries become confused | Medium | Medium | Product | explicit gateways, separate domains/source of truth |
| Weak listener retention despite novelty | Medium | High | Product | limited launch blocks, listen-time cohort experiments |
