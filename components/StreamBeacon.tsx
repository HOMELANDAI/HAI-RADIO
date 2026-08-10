import type { HaiBlock, NpcHost } from '@/data/hai-radio';

export function StreamBeacon({ block, npc }: { block: HaiBlock; npc: NpcHost }) {
  return (
    <section className="glass-panel rounded-3xl p-4 shadow-glow">
      <div className="mb-3 text-center text-sm font-bold uppercase tracking-[0.35em] text-hai-cyan">HAI Stream Beacon</div>
      <div className="grid gap-3 text-sm lg:grid-cols-6">
        <BeaconItem label="Current Block" value={block.name} sub={block.genre} />
        <BeaconItem label="Now Playing" value="Concrete Dreams" sub="by Nova Verse" />
        <BeaconItem label="NPC Mood" value={`${npc.moodIcon} ${npc.mood}`} sub={npc.name} />
        <BeaconItem label="Recent Chat" value="This beat is nasty" sub="@BeatSeeker23" />
        <BeaconItem label="Active Venue" value="8-Bit Underground" sub="Signal strong" />
        <div className="rounded-2xl border border-pink-300/30 bg-pink-500/10 p-3">
          <p className="text-xs uppercase tracking-[0.2em] text-pink-200">Pulse</p>
          <p className="mt-1 font-bold text-pink-100">Winning Playlist Available</p>
          <div className="mt-2 h-2 rounded-full bg-pink-300/30"><div className="h-2 w-3/4 rounded-full bg-pink-300 shadow-pulse" /></div>
        </div>
      </div>
    </section>
  );
}

function BeaconItem({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-cyan-300/20 bg-cyan-500/5 p-3">
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{label}</p>
      <p className="mt-1 font-bold text-white">{value}</p>
      <p className="text-xs text-slate-400">{sub}</p>
    </div>
  );
}
