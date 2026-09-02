import { Link, Navigate, useParams } from "react-router-dom";
import { flagshipWork } from "@/data/content";
import { TelemetryTrace } from "@/components/work/TelemetryTrace";

export function WorkDetail() {
  const { slug } = useParams();
  const work = flagshipWork.find((w) => w.slug === slug);

  if (!work) return <Navigate to="/" replace />;

  return (
    <main id="main-content" className="px-6 pb-24 pt-28 sm:px-10 md:pt-32">
      <div className="mx-auto w-full max-w-4xl">
        <Link
          to="/#work"
          data-cursor="true"
          className="font-mono text-xs uppercase tracking-[0.14em] text-paper-dim transition-colors hover:text-ember-500"
        >
          ← Back to work
        </Link>

        <p className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-ember-500">{work.kind}</p>
        <h1 className="mt-3 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-6xl">
          {work.title}
        </h1>
        <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-paper-dim">{work.summary}</p>

        {work.href && (
          <a
            href={work.href}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="true"
            className="mt-8 inline-flex rounded-full bg-ember-500 px-6 py-3 font-medium text-graphite-950 transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            {work.linkLabel ?? "View live application"}
          </a>
        )}

        <div className="mt-12 overflow-hidden rounded-2xl border border-graphite-800 bg-graphite-900">
          {work.shots ? (
            <img src={work.shots[0]} alt={`${work.title} interface`} className="w-full" />
          ) : (
            <div className="relative aspect-[16/9]">
              <TelemetryTrace seed={work.slug.length} className="h-full w-full opacity-70" />
            </div>
          )}
        </div>

        {work.shots && work.shots.length > 1 && (
          <div className="mt-6 grid grid-cols-2 gap-6">
            {work.shots.slice(1).map((shot) => (
              <div key={shot} className="overflow-hidden rounded-2xl border border-graphite-800">
                <img src={shot} alt={`${work.title} additional screen`} className="w-full" />
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2">
          {work.problem && (
            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-paper-faint">Problem</h2>
              <p className="mt-4 leading-relaxed text-paper-dim">{work.problem}</p>
            </div>
          )}
          {work.approach && (
            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-paper-faint">Approach</h2>
              <p className="mt-4 leading-relaxed text-paper-dim">{work.approach}</p>
            </div>
          )}
        </div>

        <div className="mt-16">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-paper-faint">Built with</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {work.tags.map((tag) => (
              <li key={tag} className="rounded-full border border-graphite-700 px-3 py-1 text-xs text-paper-dim">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
