import type { Work } from "@/data/content";

export function AnalyticalRow({ work }: { work: Work }) {
  return (
    <article className="reveal grid grid-cols-1 gap-4 border-b border-graphite-800 py-8 md:grid-cols-[1fr_2fr_auto] md:items-start md:gap-8">
      <div>
        <h3 className="font-display text-xl font-semibold text-paper">{work.title}</h3>
        <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-ember-500">{work.kind}</p>
      </div>

      <div>
        <p className="leading-relaxed text-paper-dim">{work.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {work.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-graphite-700 px-3 py-1 text-xs text-paper-dim">
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {work.metrics && work.metrics.length > 0 && (
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1 md:text-right">
          {work.metrics.map((metric) => (
            <div key={metric.label}>
              <div className="tabular font-mono text-lg font-semibold text-paper">{metric.value}</div>
              <div className="text-xs text-paper-faint">{metric.label}</div>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
