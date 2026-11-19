# HAI RADIO — UX, Visual System and Quality Plan

## IA and product separation
Primary listener routes: Listen Live; Blocks; Venue Signal Map; NPCs; Submit; Submission Court; Song Diary; Clips; Schedule; Membership. Secondary **gateway actions**: glowing PULSE and The HAI Frequency. Neither is a radio genre/block; The HAI Frequency is a separate podcast, not a segment.

## Reference-driven design
1. **Rear-POV studio:** an NPC at a luminous mixing desk, facing live audience comments and equalizers; perspective holds across block skins; occasionally turn to camera for fourth-wall joke. Do not reproduce protected Doogie Howser imagery.
2. **Neon blocks:** retro cyan grid for House; candlelit violet Afterdark; earth gold Amapiano; graffiti red/blue Rap; gold RNB; tropical amber Afrobeats; teal coffee LoFi; uplifting gold/blue Sunday.
3. **Venue map:** center HAI node, meaningful connections to 8-Bit, Rooftop, Café, Gym, XR Theater, Studio, Lounge, North Coast RD Live and T.O.P.; game/media property nodes visually distinct from physical locations.

## Screen specifications
- **Listen Live:** dominant playable area, true current track and block, scrub/skip only when technically available for streams, duration if known, buffering/error indicator, volume, NPC avatar/mood, approved chat highlights.
- **Beacon:** compact persistent metadata, source freshness indicator, global station vs local venue status, accessible text/ARIA live region with throttled announcements.
- **Block card:** host/genre, local schedule timezone, mood, quoted sample script, clear action; no fabricated LIVE badges.
- **Pulse button:** small constant-visible pulsing neon node; click opens `Playlist Pulse: Winning Playlist` dialog with numeric order and link to external game; never silently autoplay the playlist.
- **Frequency gateway:** clearly branded separate podcast link, latest verified episode metadata (or coming soon); never label it a HAI Radio show block.
- **Court:** submissions with review state, clear eligibility, humorous but human-approved verdicts; voting and auditable final outcomes; moderation notice.
- **Map:** list and map equivalents; venue online/offline/stale derived from actual status; not a navigational geographic map unless real coordinates are available.
- **Admin:** pending rights queue, approved assets, scripts, kill switches, audit logs, operator readiness.

## Screen states
Every screen must cover loading, empty, error, offline, stale, unauthorized, user-gesture-to-play, permission denied, and reduced-motion. Do not fill with fictional current tracks beyond explicitly labeled demo.

## Accessibility
Keyboard-only navigation, predictable focus return from dialogs, ESC close, `aria-modal`, buttons with text labels, color contrast verified WCAG 2.2 AA, captions/transcripts for NPC-only content, no flashing/pulsing at unsafe frequencies, `prefers-reduced-motion`, desktop/mobile responsive layouts (360/768/1280/1920). A non-animated alternative for signal/glow. Ensure multi-venue cards remain operable in list view.

## Fidelity stages
- Low-fi information architecture, click-through flows.
- High-fi responsive prototype/brand tokens + real content fixtures.
- Tested React components, accessible chart/map alternatives and OBS overlays.
- Integration rehearsal with live Radio.co and moderated chat.

## Design acceptance
Five representative tasks: start radio, find a specific genre, inspect ranked winning Pulse playlist, follow Frequency gateway, submit track and understand status. Test on mobile + keyboard; success should not require reading a complex dashboard. One-minute first-play objective for a new listener (subject to actual stream availability).
