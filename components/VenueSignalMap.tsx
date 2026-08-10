import type { VenueSignal } from '@/data/hai-radio';

export function VenueSignalMap({ venues }: { venues: VenueSignal[] }) {
  return (
    <section className="glass-panel rounded-3xl p-5">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-cyan-100">Venue Signal Map</h2>
        <p className="text-sm text-slate-400">HAI Radio flowing through HomelandAI venues, gateways, and connected experiences.</p>
      </div>
      <div className="relative rounded-3xl border border-cyan-300/20 bg-black/30 p-5">
        <div className="absolute left-1/2 top-1/2 z-10 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-500/10 text-center shadow-glow">
          <div>
            <p className="text-3xl font-black text-hai-cyan">HAI</p>
            <p className="tracking-[0.28em] text-cyan-100">RADIO</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {venues.map((venue) => (
            <article key={venue.id} className="rounded-3xl border border-cyan-300/20 bg-white/5 p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-3xl">{venue.icon}</span>
                <span className="rounded-full bg-green-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-green-200">{venue.status}</span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-white">{venue.name}</h3>
              <p className="text-sm text-cyan-100">{venue.currentBlock}</p>
              <p className="mt-2 text-sm text-slate-400">{venue.highlight}</p>
              <div className="mt-3 h-2 rounded-full bg-white/10"><div className="h-2 rounded-full bg-cyan-300" style={{ width: `${venue.energy}%` }} /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
