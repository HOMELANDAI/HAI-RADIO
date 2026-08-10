export type RadioCoNowPlaying = {
  title: string;
  artist: string;
  artworkUrl?: string;
  startedAt?: string;
  duration?: number;
};

export async function getRadioCoNowPlaying(): Promise<RadioCoNowPlaying | null> {
  const stationId = process.env.NEXT_PUBLIC_RADIOCO_STATION_ID;
  if (!stationId) return null;

  // Replace this placeholder with the Radio.co endpoint used for the active station.
  // Keep this module isolated so the HAI UI can evolve independently from the broadcast provider.
  return {
    title: 'Concrete Dreams',
    artist: 'Nova Verse',
    duration: 258
  };
}

export function getRadioCoStreamUrl() {
  return process.env.NEXT_PUBLIC_RADIOCO_STREAM_URL ?? '';
}
