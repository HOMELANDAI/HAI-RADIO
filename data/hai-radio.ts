export type HaiBlock = {
  id: string;
  name: string;
  genre: string;
  icon: string;
  description: string;
  denialQuote: string;
  status: string;
  glow: string;
};

export type NpcHost = {
  id: string;
  blockId: string;
  name: string;
  role: string;
  mood: string;
  moodIcon: string;
  signatureLine: string;
};

export type VenueSignal = {
  id: string;
  name: string;
  icon: string;
  currentBlock: string;
  highlight: string;
  energy: number;
  status: string;
};

export type Submission = {
  id: string;
  title: string;
  artist: string;
  status: string;
  verdict: string;
  approve: number;
  deny: number;
};

export type PlaylistPulseEntry = {
  position: number;
  title: string;
  artist: string;
};

export const blocks: HaiBlock[] = [
  { id: 'afterdark', name: 'HAI Afterdark', genre: 'R&B / Quiet Storm / Alt-R&B', icon: '🌙', description: 'Late-night sensual radio with smooth, emotional sequencing.', denialQuote: 'This track has too much sunlight in it. Try again at dawn.', status: 'LIVE', glow: 'rgba(168,85,247,0.32)' },
  { id: 'amapiano', name: 'HAI Amapiano', genre: 'Soulful South African House', icon: '🥁', description: 'Spiritual groove, mellow warmth, and log drum magic.', denialQuote: 'This log drum is moving like it skipped breakfast. Feed it.', status: 'NEXT', glow: 'rgba(255,138,0,0.32)' },
  { id: 'rap-block', name: 'HAI Rap Block', genre: 'Underground to Mainstream Hip-Hop', icon: '🎤', description: 'Bars, punchlines, samples, mixtape literacy, and lyrical heat checks.', denialQuote: 'Rhyming money with money is not a flex. That is financial redundancy.', status: 'LIVE', glow: 'rgba(255,63,100,0.32)' },
  { id: 'house-set', name: 'HAI House Set', genre: 'Deep / Tech / Soulful House', icon: '🏠', description: 'Sleek, euphoric, dance-ready club intelligence.', denialQuote: 'No lift, no groove. Access revoked.', status: 'LIVE', glow: 'rgba(0,216,255,0.34)' },
  { id: 'rnb-rewind', name: 'HAI RNB Rewind', genre: 'Classic & Modern R&B Fusion', icon: '💜', description: 'Smooth nostalgia, heartbreak analysis, and candlelight elegance.', denialQuote: 'This was not a vibe. This was a voicemail.', status: 'ARCHIVE', glow: 'rgba(212,175,55,0.32)' },
  { id: 'afrobeats', name: 'HAI Afrobeats Blaze', genre: 'Afro Fusion / Afropop / Alté', icon: '🔥', description: 'Tropical bounce, global African pop, and celebratory energy.', denialQuote: 'That track forgot to stretch before dancing.', status: 'LIVE', glow: 'rgba(255,138,0,0.4)' },
  { id: 'cafe-lofi', name: 'HAI Cafe / LoFi', genre: 'Chill Beats / Study Vibes', icon: '☕', description: 'Coffee warmth, mellow focus, and cozy transmission.', denialQuote: 'This would curdle the coffee. Denied.', status: 'DAILY', glow: 'rgba(45,212,191,0.28)' },
  { id: 'sunday-service', name: 'HAI Sunday Service', genre: 'Gospel / Soul / Spiritual Uplift', icon: '✝️', description: 'Soul gratitude, reverence, and sacred levity.', denialQuote: 'The Lord said no. Next.', status: 'WEEKLY', glow: 'rgba(212,175,55,0.4)' }
];

export const npcs: NpcHost[] = [
  { id: 'archivist', blockId: 'rap-block', name: 'The Archivist', role: 'Hip-Hop Historian / Lyrical Analyst', mood: 'Sarcastic but Manageable', moodIcon: '😏', signatureLine: 'Taste survives another day.' },
  { id: 'nostalgia', blockId: 'rnb-rewind', name: 'Lady Nostalgia', role: 'R&B Emotional Analyst', mood: 'Candlelit', moodIcon: '💜', signatureLine: 'If the bridge did not hurt, did it even happen?' },
  { id: 'groove-prophet', blockId: 'amapiano', name: 'Groove Prophet', role: 'Amapiano Rhythm Philosopher', mood: 'Mellow Heat', moodIcon: '🙏', signatureLine: 'The log drum is having a conversation with your ankles.' },
  { id: 'engineer', blockId: 'house-set', name: 'The Engineer', role: 'House BPM Surgeon', mood: 'Locked In', moodIcon: '🧠', signatureLine: 'The soul is in the groove pocket.' },
  { id: 'blaze', blockId: 'afrobeats', name: 'Blaze Commander', role: 'Afrobeats Culture Connector', mood: 'Celebratory', moodIcon: '🔥', signatureLine: 'Stretch before dancing. This is not a suggestion.' },
  { id: 'silk', blockId: 'afterdark', name: 'Silk Afterdark', role: 'Late-Night Mood Curator', mood: 'Smirk', moodIcon: '🌙', signatureLine: 'Too much sunlight. Try again at dawn.' },
  { id: 'ghost', blockId: '8bit', name: '8-Bit Ghost', role: 'Arcade Specter / Gameplay Roaster', mood: 'Observing Everything', moodIcon: '👾', signatureLine: 'That was not a dodge. That was a resignation letter.' }
];

export const venues: VenueSignal[] = [
  { id: '8bit', name: '8-Bit Underground', icon: '🕹️', currentBlock: 'HAI Rap Block', highlight: 'Gameplay observer mode active. Roast ticker online.', energy: 92, status: 'LIVE' },
  { id: 'cafe', name: 'HAI Cafe', icon: '☕', currentBlock: 'LoFi Hour', highlight: 'Low crowd noise and high dwell time.', energy: 42, status: 'LIVE' },
  { id: 'rooftop', name: 'HAI Rooftop', icon: '🌴', currentBlock: 'Afrobeats Blaze', highlight: 'Rooftop signal shifting into tropical bounce.', energy: 87, status: 'LIVE' },
  { id: 'gym', name: 'HAI Gym', icon: '💪', currentBlock: 'HAI House Set', highlight: '122 BPM active. Anthems and gains.', energy: 78, status: 'LIVE' },
  { id: 'xr', name: 'XR Theater', icon: '🥽', currentBlock: 'RNB Rewind', highlight: 'Preparing immersive listening replay.', energy: 66, status: 'LIVE' },
  { id: 'pulse', name: 'Playlist Pulse', icon: '💓', currentBlock: 'Winning Playlist', highlight: 'Pulse node active. Ordered songs available.', energy: 80, status: 'GATEWAY' }
];

export const submissions: Submission[] = [
  { id: 's1', title: 'Sunshine Overdrive', artist: 'DayBright', status: 'DENIED', verdict: 'This track has too much sunlight in it. Try again at dawn.', approve: 31, deny: 69 },
  { id: 's2', title: 'Money Talks', artist: 'Rich Intent', status: 'DENIED', verdict: 'Rhyming money with money is not a flex. That is financial redundancy.', approve: 28, deny: 72 },
  { id: 's3', title: 'Midnight Confessions', artist: 'Velvet Code', status: 'APPROVED', verdict: 'Candle count: four. Approved.', approve: 72, deny: 28 }
];

export const winningPlaylist: PlaylistPulseEntry[] = [
  { position: 1, title: 'Opening Signal', artist: 'HAI Curated' },
  { position: 2, title: 'Concrete Dreams', artist: 'Nova Verse' },
  { position: 3, title: 'Midnight Confessions', artist: 'Velvet Code' },
  { position: 4, title: 'Island Fever', artist: 'Koya' },
  { position: 5, title: 'Move Your Body', artist: 'ShuffleFunk' },
  { position: 6, title: 'Still in Love', artist: 'J. Marie' },
  { position: 7, title: 'Log Drum Prayer', artist: 'Sizwe Keys' },
  { position: 8, title: 'Blue Grid Sunrise', artist: 'DJ Rhythm' },
  { position: 9, title: 'Sunday Glow', artist: 'Bishop Hai' },
  { position: 10, title: 'Closing Pulse', artist: 'HomelandAI' }
];
