import type { HaiBlock } from '@/data/hai-radio';

export function BlockCard({ block }: { block: HaiBlock }) {
  return (
    <article className="rounded-3xl border border-cyan-300/20 bg-white/5 p-4" style={{ boxShadow: `0 0 22px ${block.glow}` }}>
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="text-3xl">{block.icon}</span>
        <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">{block.status}</span>
      </div>
      <h3 className="text-lg font-black uppercase tracking-[0.12em] text-white">{block.name}</h3>
      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{block.genre}</p>
      <p className="mt-3 text-sm text-slate-300">{block.description}</p>
      <div className="mt-4 rounded-2xl border border-white/10 bg-black/25 p-3 text-sm text-slate-200">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Sample denial</p>
        <p className="mt-1">{block.denialQuote}</p>
      </div>
      <button className="mt-4 w-full rounded-2xl border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-cyan-100">Submit Song</button>
    </article>
  );
}
