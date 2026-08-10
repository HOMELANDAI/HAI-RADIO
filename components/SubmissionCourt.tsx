import type { Submission } from '@/data/hai-radio';

export function SubmissionCourt({ submissions }: { submissions: Submission[] }) {
  return (
    <section className="glass-panel rounded-3xl p-5">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-cyan-100">Submission Court</h2>
          <p className="text-sm text-slate-400">NPC verdicts, community votes, sound cues, and clip-worthy denials.</p>
        </div>
        <button className="rounded-2xl border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-cyan-100">Submit to Court</button>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {submissions.map((submission) => (
          <article key={submission.id} className="rounded-3xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{submission.status}</p>
            <h3 className="mt-2 text-lg font-bold text-white">{submission.title}</h3>
            <p className="text-sm text-slate-400">{submission.artist}</p>
            <p className="mt-3 rounded-2xl border border-pink-300/20 bg-pink-500/10 p-3 text-sm text-pink-100">{submission.verdict}</p>
            <div className="mt-3 flex items-center justify-between text-xs uppercase tracking-[0.14em] text-slate-400">
              <span>Approve {submission.approve}%</span>
              <span>Deny {submission.deny}%</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
