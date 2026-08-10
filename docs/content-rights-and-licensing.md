# Content Rights and Licensing Notes

HAI Radio is a music-forward platform, so rights management must be planned early.

## Key issues

- Internet radio streaming may require licenses depending on territory, music catalog, and stream format.
- Twitch has music restrictions that can affect live streams, VODs, and clips.
- Submitted tracks need an internal rights/clearance review field.
- Clips containing copyrighted music may need muted audio, short excerpts, or rights-cleared assets.

## Recommended practices

- Use Radio.co for compliant station broadcasting where applicable.
- Keep rights/clearance status in Supabase for every submitted song.
- Separate radio stream audio from Twitch VOD capture when needed.
- Use original stingers, sound effects, NPC voices, and UI sounds.
- Build HAI-owned music beds for Song Diary, Submission Court, and transitions.
- Add a moderation step before any user-submitted track enters rotation.

## Submission statuses

- unreviewed
- rights pending
- cleared for radio
- cleared for stream clip
- not cleared
- internal-only
