import type { NpcHost } from '@/data/hai-radio';

export function NpcHostUniverse({ npcs }: { npcs: NpcHost[] }) {
  return (
    <section className="glass-panel rounded-3xl p-5">
      <h3 className="text-lg font-bold text-cyan-100">NPC Host Universe</h3>
      <p className="mt-1 text-sm text-slate-400">Genre specialists with humor, wit, sarcasm, and cultural intelligence.</p>
      <div className="mt-4 space-y-3">
        {npcs.slice(0, 6).map((npc) => (
          <article key={npc.id} className="rounded-2xl border border-cyan-300/10 bg-white/5 p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-500/10 text-2xl">{npc.moodIcon}</div>
              <div>
                <h4 className="font-bold text-white">{npc.name}</h4>
                <p className="text-xs text-slate-400">{npc.role}</p>
              </div>
              <span className="ml-auto rounded-full bg-green-400/10 px-2 py-1 text-xs text-green-200">ON AIR</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
