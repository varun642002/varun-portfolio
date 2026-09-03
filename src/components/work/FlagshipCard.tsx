import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";
import { useTilt } from "@/lib/useTilt";
import type { Work } from "@/data/content";
import { TelemetryTrace } from "./TelemetryTrace";

type FlagshipCardProps = {
  work: Work;
  span: string;
  seed: number;
};

export function FlagshipCard({ work, span, seed }: FlagshipCardProps) {
  const tiltRef = useTilt<HTMLDivElement>({ max: 6, scale: 1.015 });

  return (
    <div ref={tiltRef} className={cn("tilt-card", span)}>
      <article className="reveal group relative overflow-hidden rounded-2xl border border-graphite-800 bg-graphite-900">
        <Link to={`/work/${work.slug}`} data-cursor="Case study" className="block">
          <div className="relative aspect-[16/10] overflow-hidden border-b border-graphite-800 bg-graphite-850">
            {work.shots ? (
              <img
                src={work.shots[0]}
                alt={`${work.title} interface preview`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            ) : (
              <div className="relative flex h-full w-full flex-col justify-between p-6">
                <TelemetryTrace seed={seed} className="absolute inset-0 h-full w-full opacity-70" />
                <span className="relative font-mono text-xs uppercase tracking-[0.14em] text-paper-faint">
                  {work.kind}
                </span>
                <span className="relative font-display text-3xl font-semibold text-paper sm:text-4xl">
                  {work.title}
                </span>
              </div>
            )}
          </div>

          <div className="p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl font-semibold text-paper">{work.title}</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-ember-500">{work.kind}</p>
              </div>
            </div>
            <p className="mt-4 text-balance leading-relaxed text-paper-dim">{work.summary}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {work.tags.slice(0, 4).map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-graphite-700 px-3 py-1 text-xs text-paper-dim"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </Link>
      </article>
    </div>
  );
}
