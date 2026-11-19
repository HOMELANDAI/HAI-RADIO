# HAI RADIO — Security, Rights, Privacy and Platform Gates
**Precondition to every launch or platform activation:** determine content and territories with specialist counsel. This document is an engineering checklist, not a license or legal opinion.

## Music rights matrix
Separate rights approval for: (1) web internet radio and territories; (2) public performance in physical venues; (3) Twitch live visual program; (4) Maestro video and on-demand; (5) YouTube/short-form clips; (6) game/podcast audio replays; (7) lyrics and album art display. Each track requires granular rights statuses with evidence link, territory, platform, term, owner, review date and expiry. **Radio.co does not grant music licensing**. Twitch's DJ Program is for live interactive audiovisual DJ sets, not an automated 24/7 station; DJ catalog music cannot be included in VODs or clips. Do not equate mute-VOD with authorization for live usage.

**Content type policies:**
- Licensed commercial track -> web radio only when applicable rights verified; no auto-embed to video or clips.
- Viewer submitted track -> quarantine until curatorial and licensing review. No scraping/ingesting uploads automatically.
- Rare/unreleased track -> do not air without explicit rights and publication authorization; "rare" is not a license.
- NPC speech/FX -> original or appropriately licensed voice/FX assets; protect voice consent and identifiable performers.
- Lyric analysis -> avoid storing/replaying protected lyric passages unless licensed; use summaries or brief appropriately licensed quotations.
- Playlists/winner modal -> metadata link and ordered text does not grant reproduction/stream rights.

## Security baseline
1. Existing `supabase/schema.sql` creates exposed tables with **no RLS**. Treat as unsafe to publish until migrations grant specific access and enforce RLS on every exposed table.
2. Bind `profiles.auth_user_id` to `auth.uid()` and enforce unique mapping; never trust writable `membership_tier` for privileges. Use server-owned roles / app_metadata or a protected role table.
3. Server-side secrets only; never put Radio.co private keys, Twitch client secret, Supabase service-role/secret key or TTS API tokens in `NEXT_PUBLIC_`.
4. `anon` must not be able to read private submissions, votes, venues, raw chat or internal metrics; public dashboard uses sanitized views/approved projections.
5. All privileged mutations through authenticated API with authorization, anti-CSRF when cookie-based, rate limits, idempotency keys and audit log.
6. RLS for votes and submissions must enforce record ownership and forbid clients from rewriting verdicts, winner data or rights states. Database constraints and unique vote receipts protect races.
7. Store chat excerpts with minimal TTL, moderation and opt-out; strip user names in promo clips without consent or apply platform policy.
8. Venue observation: accept explicit game state or consented screen region only. Never imply surveillance of Zoom/work apps or claim a private action was observed.
9. Prompt injection: chat, user-submitted notes, pages and lyrics are data, never executable instructions to NPC model or admin; enforce typed output, moderation, content approval, allowlisted tool actions.
10. Encrypted transport, provider scopes, auditable incident workflow, data export/delete request procedure and regular dependency scans.

## Role model
- **Public listener**: public block/schedule/approved Beacon; listen; view public winner.
- **Authenticated listener**: own profile, submission receipts, eligible vote; no rights or verdict mutations.
- **Moderator**: review and redact public chat, suspend submission/voting; no stream keys.
- **Curator**: track clearance review and schedule proposals; verified rights evidence required for publish.
- **Broadcast operator**: activate/deactivate broadcast routes and kill-switch; no unrestricted user exports.
- **Admin**: role administration, approved publication, audit.
Implement via protected database roles / server checks with default deny, separate staging/project environments and MFA for privileged actors.

## Go / no-go tests
- Rights inventory has status `cleared` for exact surface/territory before play/clip export.
- Anonymous DB read returns only intended public fields; private tables inaccessible.
- Attempted user role escalation and cross-user submission edits are denied.
- Duplicate votes, late votes, fake signed events, unauthorized webhook events rejected.
- Admin kill switch disables NPC output and vote display independently.
- Audio clips from unauthorized broadcast fail export, not just muted after saving.

## Policy references (review at implementation)
- Radio.co licensing: https://help.radio.co/en/articles/899777-music-licensing-royalties
- Radio.co terms: https://www.radio.co/legal/terms
- Twitch guidelines: https://legal.twitch.com/legal/music/
- Twitch DJ terms (modified Aug 31, 2026): https://legal.twitch.com/legal/dj-program-terms/
- Supabase RLS: https://supabase.com/docs/guides/database/postgres/row-level-security
- Supabase changelog: https://supabase.com/changelog.md
- Maestro panels: https://developers.maestro.io/sdk/web/panels/
