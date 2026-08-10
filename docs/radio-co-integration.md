# Radio.co Integration Strategy

## Strategic role

Radio.co should be used as the broadcast infrastructure for HAI Radio. HomelandAI should build the custom interface, NPC intelligence layer, venue signal layer, Playlist Pulse gateway, and Twitch/Maestro interaction system on top.

## Radio.co responsibilities

- stream hosting
- live broadcasting
- station automation
- scheduling
- now-playing metadata
- stream links
- basic analytics
- station management

## HAI responsibilities

- custom HAI player
- HAI Stream Beacon
- NPC Host Universe
- Submission Court
- Playlist Pulse gateway
- Venue Signal Map
- Twitch/Maestro interaction
- branded mobile and desktop UI
- Supabase data layer

## Integration principle

Radio.co runs the station. HAI makes it alive.

## Implementation notes

- Keep Radio.co API calls isolated in `lib/radioCo.ts`.
- Store HAI-specific metadata in Supabase.
- Do not depend on Radio.co for NPC logic, votes, Playlist Pulse, clips, or venue state.
- Build a custom player rather than relying solely on a generic embed.
