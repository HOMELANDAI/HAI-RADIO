# HAI RADIO — GitHub Projects Board Configuration

## Reality check
This document is a board specification and clickable GitHub issue index. **It is not a claim that a native GitHub Projects board has been created.** The connected GitHub integration cannot currently create or populate GitHub Projects v2 objects. The repository, epics, subtasks and detailed documents have been created.

## Board title and description
**Title:** HAI RADIO | Master Development Program
**Description:** HomelandAI's 11-phase roadmap to launch a Radio.co-backed curated music station, intelligent NPC hosts, listen-live mainframe, Submission Court, interactive overlays and HAI venue network. Playlist Pulse and The HAI Frequency remain separate connected properties.

## Recommended views
1. **Roadmap (table)** — grouped by `Phase`, sorted Phase ascending; fields: Status, Phase, Priority, Owner, Start, Target, Dependency, Release.
2. **Kanban (board)** — grouped by `Status`, with phase and priority visible on cards.
3. **Critical Path** — P0 issues, sorted by phase.
4. **Legal & Security Gates** — rights and Supabase RLS, platform approval, incident controls.
5. **NPC & Content** — NPC hosts, chat reactions, Song Diary, scripted denials.
6. **Live Integrations** — Radio.co, Twitch, Maestro, OBS and venue signal dependencies.
7. **Release Tracker (table)** — R0 internal, R1 private radio alpha, R2 community beta, R3 venue pilot, R4 launch.

## Field setup
- Status: Backlog, Ready, In Progress, Review, QA, Blocked, Done
- Phase: 00 through 10
- Priority: P0 / P1 / P2
- Track: Broadcast, UX, Data/Security, Curation, NPC, Community, Venue, Platforms, Operations
- Delivery: R0 Demo / R1 Private Alpha / R2 Community Beta / R3 Venue Pilot / R4 Public Launch / Postlaunch
- Owner: person field
- Start Date, Target Date: date fields (do not assign arbitrary dates)
- Rights Clearance: Not Applicable / Pending / Cleared / Blocked
- Risk: Low / Medium / High / Critical

## Phase epic index
| Phase | Epic | Engineering tickets | Default priority |
|---|---|---|---|
| 00 | [#23 Discovery & Radio.co feasibility](https://github.com/HOMELANDAI/HAI-RADIO/issues/23) | [#1](https://github.com/HOMELANDAI/HAI-RADIO/issues/1), [#2](https://github.com/HOMELANDAI/HAI-RADIO/issues/2) | P0 |
| 01 | [#24 UI/UX & design system](https://github.com/HOMELANDAI/HAI-RADIO/issues/24) | [#3](https://github.com/HOMELANDAI/HAI-RADIO/issues/3) | P0 |
| 02 | [#25 Security & engineering foundation](https://github.com/HOMELANDAI/HAI-RADIO/issues/25) | [#4](https://github.com/HOMELANDAI/HAI-RADIO/issues/4), [#5](https://github.com/HOMELANDAI/HAI-RADIO/issues/5) | P0 |
| 03 | [#26 Broadcast & curation](https://github.com/HOMELANDAI/HAI-RADIO/issues/26) | [#6](https://github.com/HOMELANDAI/HAI-RADIO/issues/6), [#7](https://github.com/HOMELANDAI/HAI-RADIO/issues/7) | P0 |
| 04 | [#27 Listener MVP & independent gateways](https://github.com/HOMELANDAI/HAI-RADIO/issues/27) | [#8](https://github.com/HOMELANDAI/HAI-RADIO/issues/8), [#9](https://github.com/HOMELANDAI/HAI-RADIO/issues/9), [#10](https://github.com/HOMELANDAI/HAI-RADIO/issues/10) | P0 |
| 05 | [#28 Submission Court](https://github.com/HOMELANDAI/HAI-RADIO/issues/28) | [#11](https://github.com/HOMELANDAI/HAI-RADIO/issues/11), [#12](https://github.com/HOMELANDAI/HAI-RADIO/issues/12) | P0 |
| 06 | [#29 NPC intelligence & Song Diary](https://github.com/HOMELANDAI/HAI-RADIO/issues/29) | [#13](https://github.com/HOMELANDAI/HAI-RADIO/issues/13), [#14](https://github.com/HOMELANDAI/HAI-RADIO/issues/14) | P0 |
| 07 | [#30 Live voting, Twitch/Maestro & OBS](https://github.com/HOMELANDAI/HAI-RADIO/issues/30) | [#15](https://github.com/HOMELANDAI/HAI-RADIO/issues/15), [#16](https://github.com/HOMELANDAI/HAI-RADIO/issues/16) | P1 |
| 08 | [#31 Venue network, 8-Bit & clips](https://github.com/HOMELANDAI/HAI-RADIO/issues/31) | [#17](https://github.com/HOMELANDAI/HAI-RADIO/issues/17), [#18](https://github.com/HOMELANDAI/HAI-RADIO/issues/18) | P1 |
| 09 | [#32 Beta, QA, production launch](https://github.com/HOMELANDAI/HAI-RADIO/issues/32) | [#19](https://github.com/HOMELANDAI/HAI-RADIO/issues/19), [#20](https://github.com/HOMELANDAI/HAI-RADIO/issues/20) | P0 |
| 10 | [#33 Optimization & station-two decision](https://github.com/HOMELANDAI/HAI-RADIO/issues/33) | [#22](https://github.com/HOMELANDAI/HAI-RADIO/issues/22) | P2 |

## Cross-cutting product rules
- Single station first. No second station until Phase 10 signoff.
- Radio.co is the proposed live station engine; no assumed partnership or licensing provision.
- NPC-hosted comments are curated, moderated and scheduled after songs/blocks; no automatic unreviewed content on air.
- PULSE is a small glowing gateway to **separate Playlist Pulse game**, showing official winning playlist tracks in numerical order.
- The HAI Frequency is a **separate podcast** accessible by gateway only, never a HAI Radio block or segment.
- HAI Radio has independent Song Diary, themed blocks and NPC character profiles.
- Venue display is informational unless live/authorized data exists; avoid fictitious distinct simultaneous global station streams.
- Music rights must be cleared by platform, territory, physical venue and recording/clip format.

## Creating the actual GitHub Projects board (requires GitHub UI or a Projects-capable integration)
1. In GitHub, open the owner account's **Projects** section and create a **New project**, choose **Table** or **Board**.
2. Set title to **HAI RADIO | Master Development Program** and use the description above.
3. Add these 11 epic issues first: #23 through #33.
4. Add child engineering issues #1–#20 and #22. Do not add duplicate closed issue #21.
5. Add the fields and views above; group by phase/status and link each issue under its corresponding epic using GitHub issue sub-issues where available.
6. Link the project to this repository in project settings; show it on the repository's Projects tab.
7. Configure built-in auto-add workflow for new HAI-RADIO issues, status-on-close automation, and any workflow triggers supported by the owner's permissions.
8. In Project settings, add project README linking to this file and the implementation plan.
9. Validate one issue appears under the right phase, owner, state and release. Confirm no production features are marked Done without evidence.

## Relevant repository links
- [Implementation plan](./IMPLEMENTATION-PLAN.md)
- [Engineering backlog](./IMPLEMENTATION-BACKLOG.md)
- [Technical architecture](./IMPLEMENTATION-ARCHITECTURE.md)
- [Security and rights](./SECURITY-RIGHTS.md)
- [NPC operations](./NPC-OPERATIONS.md)
- [Design QA](./DESIGN-QA.md)
- [Launch runbook](./LAUNCH-OPERATIONS.md)
- [Decisions and risks](./DECISIONS-AND-RISKS.md)
