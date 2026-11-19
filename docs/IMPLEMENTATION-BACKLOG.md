# HAI RADIO — Engineering Backlog / Epics
Use GitHub Issues as the work ledger. Each ticket must include owner, estimated effort, dependency, acceptance tests, and status. These are initial scoped deliverables; split into task-sized PRs during grooming.

## Workstream F: Foundation and governance
- F-01 Rights and licensing decision matrix per platform and territory (blocking).
- F-02 Radio.co technical integration spike, limits, payload fixtures, live station credentials stored securely.
- F-03 Branch protection, CODEOWNERS, CI, dependency lockfiles and tagged releases.
- F-04 Staging/prod environment separation, deployment, rollback and observability.

## Workstream U: Experience/design
- U-01 Design tokens and desktop mainframe responsive grid with contrast/typography.
- U-02 Listen Live playable stream and now-playing truthfulness.
- U-03 Persistent Stream Beacon with stale/venue/track source timestamps.
- U-04 Eight block cards with schedules, moods, DJ rear-POV visual continuity.
- U-05 Mobile PWA navigation and reduced-motion/a11y controls.
- U-06 Glowing PULSE button; focus-managed ranked playlist modal; game exit.
- U-07 HAI Frequency independent podcast gateway; no radio-block classification.

## Workstream D: Backend and curation
- D-01 Supabase normalized schema, RLS, test accounts and admin RBAC.
- D-02 Catalogue ingest: rights state, tags, era, BPM provenance, block and suitability.
- D-03 Curator-admin workflow for approvals, revision, rollback, moderation and schedules.
- D-04 Track-play history + hourly Song Diary archive and audit provenance.
- D-05 Submission form, spam controls, source URL handling, eligibility, verdict logs.
- D-06 Vote-session events, deduplication, close-time race safety and adjudication.

## Workstream N: NPC intelligence
- N-01 Shared core HAI personality and safe comedic language policy.
- N-02 Seven specialist knowledge packs (Rap, Amapiano, RNB, House, Afrobeats, Afterdark, 8-Bit); add Café and Sunday when staffed.
- N-03 Evidence library and test suite for lyrical/rhyme/sample assertions; do not invent facts, quotes or copyrighted lyrics.
- N-04 Inter-song moderated chat batch planner + show clock.
- N-05 Human approval queue, TTS rights/voice consent, broadcast render, fallback.
- N-06 8-Bit gameplay observer via explicitly authorized game telemetry only.

## Workstream E: Audience and venue
- E-01 Twitch read-only chat adapter and public consent / opt-out.
- E-02 Maestro panels/overlays proof of compatibility and scope validation.
- E-03 OBS browser-source Beacon, verdict, NPC and 9:16 clip-safe templates.
- E-04 First venue signal pilot and operator dashboard with audio-state separation.
- E-05 Clips metadata, review/rights-safe export and audience engagement analytics.

## Workstream Q: Release and operations
- Q-01 Unit/integration/e2e/accessibility/performance tests and UAT checklist.
- Q-02 Moderation dashboard, abuse reports, kill switch and incident workflows.
- Q-03 Monitoring, analytics event dictionary, retention, backup and cost caps.
- Q-04 Closed beta, launch readiness review, rollback rehearsal and 30-day review.
- Q-05 Second-station proposal only after reliable first-station data.

## Dependency order / critical path
F-01 + F-02 -> F-03/F-04 -> D-01 -> U-02/U-03 -> D-02/D-03 -> D-05/N-01 -> N-04/N-05 -> D-06/E-01/E-03 -> Q-01/Q-02 -> Q-04.
Playlist Pulse U-06 can proceed with validated read-only fixture independently; Frequency U-07 requires only an approved canonical URL. E-04 depends on F-01 and U-03. Maestro E-02 depends on platform approval/SDK availability. Anything with music audio, venue playback, or clips remains blocked on F-01 per surface.

## GitHub board view
Recommended fields: Phase (0–10), Epic, Priority P0/P1/P2, Status (Backlog, Ready, In Progress, Review, QA, Blocked, Done), Owner, Dependencies, Target Release, Risk. Create milestone per phase when project tooling permits. A PR closes the linked issue only after acceptance tests pass.

## Example ticket template
```
### User value
As a [role], I need [behavior], so that [result].
### Scope / exclusions
...
### Dependencies
...
### Implementation tasks
- [ ] ...
### Acceptance criteria
- [ ] Given ... when ... then ...
- [ ] Error/loading/empty states covered
- [ ] Privacy, security and rights reviewed
- [ ] Tests and metrics included
### Rollback
...
```
