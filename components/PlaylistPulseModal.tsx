import type { PlaylistPulseEntry } from '@/data/hai-radio';

export function PlaylistPulseModal({ winningPlaylist, previewMode = false }: { winningPlaylist: PlaylistPulseEntry[]; previewMode?: boolean }) {
  return (
    <section className="glass-panel rounded-3xl p-5 shadow-pulse">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h3 className="text-xl font-black uppercase tracking-[0.18em] text-pink-100">Playlist Pulse</h3>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Winning Playlist Gateway</p>
        </div>
        <div className="h-4 w-4 animate-pulseGlow rounded-full bg-pink-300" />
      </div>
      <div className="rounded-2xl border border-pink-300/30 bg-pink-500/10 p-4">
        <p className="text-sm font-bold text-white">Winning Playlist</p>
        <p className="text-xs text-slate-400">Created & Curated by HomelandAI</p>
        <ol className="mt-4 space-y-2 text-sm text-slate-200">
          {winningPlaylist.slice(0, previewMode ? 5 : winningPlaylist.length).map((entry) => (
            <li key={entry.position} className="grid grid-cols-[28px_1fr] gap-2">
              <span className="font-bold text-pink-200">{entry.position}.</span>
              <span>{entry.title} - {entry.artist}</span>
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-bold uppercase tracking-[0.16em]">
        <button className="rounded-2xl border border-pink-300/30 bg-pink-400/10 px-3 py-3 text-pink-100">Enter Pulse</button>
        <button className="rounded-2xl border border-cyan-300/30 bg-cyan-400/10 px-3 py-3 text-cyan-100">Listen</button>
      </div>
    </section>
  );
}
