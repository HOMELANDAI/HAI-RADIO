# HAI RADIO — Launch and Station Operations

## Daily operating responsibilities
**Broadcast operator:** Radio.co connection, schedule, loudness levels, continuity, metadata monitor, uptime.
**Curator:** repertoire selection, blocks, suitability and rights evidence; no auto-add based on chat.
**NPC editor:** scripts, citations, tone, moderation/approval and fallback beds.
**Community moderator:** submission abuse, chat highlights, vote manipulation, privacy reports.
**Engineering on call:** API/realtime/DB errors, deploys, backup/restore.
Two people may cover multiple roles but no system should assume 24/7 human moderation without staffing and fallback disabled periods.

## Incident matrix
| Severity | Example | Response |
|---|---|---|
| P0 | unauthorized audio on protected platform, rights breach, exposed keys, harassment broadcast | mute/kill relevant outputs immediately; preserve audit and notify owner/counsel |
| P1 | station offline, admin auth bypass, bad verdict loops | activate fallback experience; disable affected subsystem; alert operator |
| P2 | stale Beacon metadata, missing Pulse winner, failed clip export | display degraded state and queue repair |
| P3 | cosmetic UI / minor animation defect | backlog |

## Kill switches
Separate flags for station link, NPC TTS/voice, live chat/public display, new submissions, verdict voting, venue audio, clip exporting, Pulse gateway and Frequency gateway. Emergency modes should not require rotating broadcast keys. Record actor/time/reason.

## Launch checklist (all required)
- [ ] Radio.co plan/limits validated against actual station; first stream played successfully with network failure recovery.
- [ ] Repertoire licensing and territorial rights documented, plus venue public performance and video surface matrix.
- [ ] No unauthorized commercial track in Twitch/Maestro or clips; clip-clean original beds.
- [ ] Real now-playing, program/venue state and timezone display verified.
- [ ] Auth/roles, all public Supabase table RLS and privilege escalation tests pass.
- [ ] Submission queue moderation, copyright complaint/report paths and rate caps working.
- [ ] NPC fact QA, human signoff, TTS latency and fallbacks verified.
- [ ] Viewer vote uniqueness, anti-bot, idempotent closing and audit trail tested.
- [ ] Accessible modal and reduced-motion experience tested on phone and desktop.
- [ ] Stream Beacon reconnects and shows stale/offline when source is gone.
- [ ] Pulse ordered winner from approved source, no fabricated game results.
- [ ] Frequency gateway visibly separate and does not masquerade as a music block.
- [ ] Storage retention, privacy notice, backup/restore, secrets/CI and incident response documented.
- [ ] Performance and mobile data use measured; no auto-play before browser user gesture.
- [ ] On-call/contact list, operator runbook, rollback path and beta feedback intake configured.

## Operation cadence
**Daily:** station/rights schedule, metadata freshness, overnight errors, submissions and abuse queue.
**Weekly:** block performance, NPC dialogue review, Song Diary (approved log-based), game winner sync and moderated clips; separately promote latest Frequency episode.
**Monthly:** uptime, costs, stream bandwidth/egress, community growth, rights renewals, catalog quality and release retrospective.
**Quarterly:** data minimization, restore exercise, NPC evidence refresh, platform terms audit, venue privacy and station-2 decision.

## Budget categories
Radio.co plan/stream hours, music royalties and performance rights, Supabase compute/storage/Realtime, web hosting/bandwidth, moderation/ops, TTS/avatar rendering, venue devices and connectivity, legal/rights, artwork/audio rights and promotion. Calculate listener-hours under realistic simultaneous audiences; compare with plan's bandwidth and rights conditions. Do not claim radio station is free merely because monetization is not the goal.

## Measurement
Daily listener success/avg session; weekly retention by block; court participation; operator minutes per accepted submission; RLS failures and moderation latency; NPC comedic quality vs repetitiveness; safe clip production; venue health and Podcast gateway clickthrough. Aggregate analytics with explicit notice/consent where necessary. Don't compute fake live counters.
