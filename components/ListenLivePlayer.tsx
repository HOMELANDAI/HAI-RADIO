import { Pause, SkipBack, SkipForward, Heart, Radio, Activity } from 'lucide-react';
import type { HaiBlock, NpcHost, PlaylistPulseEntry } from '@/data/hai-radio';

export function ListenLivePlayer({ block, npc, winningPlaylist }: { block: HaiBlock; npc: NpcHost; winningPlaylist: PlaylistPulseEntry[] }) {
  return (
    <section className="glass-panel overflow-hidden rounded-3xl p-6 shadow-glow">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-[0.14em] text-cyan-100">Listen Live</h1>
          <p className="text-sm text-slate-400">Radio.co broadcast engine. HomelandAI intelligence layer.</p>
        </div>
        <button className="animate-pulseGlow rounded-full border border-pink-300/60 bg-pink-500/20 px-5 py-3 font-black uppercase tracking-[0.24em] text-pink-100">
          Pulse
        </button>
      </div>

      <div className="grid gap-5 xl:grid-cols-[360px_1fr_300px]">
        <div className="rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-500/20 via-blue-950 to-fuchsia-950 p-5">
          <div className="flex h-64 items-center justify-center rounded-2xl border border-cyan-300/30 bg-black/35 text-center">
            <div>
              <Radio className="mx-auto mb-4 h-12 w-12 text-hai-cyan" />
              <p className="text-5xl font-black text-hai-cyan neon-text">HAI</p>
              <p className="tracking-[0.45em] text-cyan-100">RADIO</p>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-hai-gold">On Air: {block.name}</p>
            <h2 className="mt-2 text-5xl font-black text-white">Concrete Dreams</h2>
            <p className="text-xl text-slate-300">Nova Verse</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-cyan-300/20 bg-white/5 p-3"><SkipBack /></button>
            <button className="rounded-full border border-cyan-300/40 bg-cyan-400/20 p-5 shadow-glow"><Pause /></button>
            <button className="rounded-full border border-cyan-300/20 bg-white/5 p-3"><SkipForward /></button>
            <button className="rounded-full border border-pink-300/20 bg-white/5 p-3"><Heart /></button>
          </div>
          <div className="h-24 rounded-2xl border border-cyan-300/20 bg-black/25 p-4">
            <div className="flex h-full items-end gap-1">
              {Array.from({ length: 64 }).map((_, index) => (
                <div key={index} className="w-full rounded-full bg-gradient-to-t from-hai-blue to-hai-cyan" style={{ height: `${20 + ((index * 17) % 72)}%` }} />
              ))}
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <Metric label="Live Listeners" value="24,873" />
            <Metric label="Venue Signal" value="8-Bit Underground" />
            <Metric label="Stream Quality" value="HQ 320kbps" />
          </div>
        </div>

        <div className="rounded-3xl border border-violet-300/20 bg-violet-500/10 p-4">
          <p className="text-xs uppercase tracking-[0.24em] text-violet-200">NPC Host</p>
          <div className="mt-4 rounded-2xl border border-violet-200/20 bg-black/30 p-4 text-center">
            <div className="mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-500/10 text-5xl">{npc.moodIcon}</div>
            <h3 className="text-xl font-bold text-white">{npc.name}</h3>
            <p className="text-sm text-slate-300">{npc.role}</p>
          </div>
          <p className="mt-4 rounded-2xl border border-pink-300/20 bg-pink-500/10 p-3 text-sm text-pink-100">{npc.signatureLine}</p>
          <p className="mt-4 text-xs text-slate-400">Winning playlist preview: {winningPlaylist.length} ordered songs available through the Pulse gateway.</p>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-cyan-300/20 bg-cyan-500/5 p-3">
      <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">{label}</p>
      <p className="mt-1 font-bold text-white">{value}</p>
    </div>
  );
}
