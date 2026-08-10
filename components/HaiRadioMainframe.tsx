import { blocks, npcs, submissions, venues, winningPlaylist } from '@/data/hai-radio';
import { StreamBeacon } from './StreamBeacon';
import { ListenLivePlayer } from './ListenLivePlayer';
import { BlockCard } from './BlockCard';
import { PlaylistPulseModal } from './PlaylistPulseModal';
import { VenueSignalMap } from './VenueSignalMap';
import { SubmissionCourt } from './SubmissionCourt';
import { NpcHostUniverse } from './NpcHostUniverse';

export function HaiRadioMainframe() {
  const currentBlock = blocks[2];
  const currentNpc = npcs.find((npc) => npc.blockId === currentBlock.id) ?? npcs[0];

  return (
    <main className="grid-bg min-h-screen p-5 text-slate-100">
      <section className="mx-auto grid max-w-[1800px] gap-4 xl:grid-cols-[280px_1fr]">
        <aside className="glass-panel rounded-3xl p-5 shadow-glow">
          <div className="mb-8">
            <p className="text-5xl font-black tracking-[0.12em] text-hai-cyan neon-text">HAI</p>
            <p className="text-xl tracking-[0.5em] text-cyan-100">RADIO</p>
            <p className="mt-2 text-xs uppercase tracking-[0.28em] text-slate-400">HomelandAI Intelligence Network</p>
          </div>
          <nav className="space-y-2 text-sm uppercase tracking-[0.18em] text-slate-300">
            {['Listen Live', 'Blocks', 'Venue Signal Map', 'NPC Host Universe', 'Submission Court', 'Playlist Pulse', 'High Frequency Gateway', 'Clips', 'Admin Console'].map((item) => (
              <div key={item} className="rounded-2xl border border-cyan-400/10 bg-white/5 px-4 py-3 hover:border-cyan-300/40 hover:text-cyan-100">
                {item}
              </div>
            ))}
          </nav>
        </aside>

        <div className="space-y-4">
          <StreamBeacon block={currentBlock} npc={currentNpc} />
          <ListenLivePlayer block={currentBlock} npc={currentNpc} winningPlaylist={winningPlaylist} />

          <section className="grid gap-4 xl:grid-cols-[1fr_380px]">
            <div className="space-y-4">
              <section className="glass-panel rounded-3xl p-5">
                <div className="mb-4 flex items-end justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-cyan-100">HAI Blocks</h2>
                    <p className="text-sm text-slate-400">Curated rooms, moods, NPCs, denial logic, and submission pathways.</p>
                  </div>
                </div>
                <div className="grid gap-3 md:grid-cols-2 2xl:grid-cols-4">
                  {blocks.map((block) => (
                    <BlockCard key={block.id} block={block} />
                  ))}
                </div>
              </section>

              <VenueSignalMap venues={venues} />
              <SubmissionCourt submissions={submissions} />
            </div>

            <aside className="space-y-4">
              <PlaylistPulseModal winningPlaylist={winningPlaylist} previewMode />
              <NpcHostUniverse npcs={npcs} />
              <section className="glass-panel rounded-3xl p-5">
                <h3 className="text-lg font-bold text-cyan-100">High Frequency Gateway</h3>
                <p className="mt-2 text-sm text-slate-300">A separate weekly HomelandAI podcast property connected to HAI Radio, but not a HAI Radio block or segment.</p>
                <button className="mt-4 w-full rounded-2xl border border-violet-300/40 bg-violet-500/15 px-4 py-3 text-sm font-bold uppercase tracking-[0.2em] text-violet-100">Open High Frequency</button>
              </section>
            </aside>
          </section>
        </div>
      </section>
    </main>
  );
}
