import { about, person, stats } from "@/data/content";
import { DataFlowGraphic } from "./DataFlowGraphic";
import { Portrait } from "./Portrait";
import { StatTile } from "./StatTile";

export function Readout() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-graphite-800 px-6 py-24 sm:px-10 md:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-16 md:grid-cols-[auto_1fr_1fr] md:items-start md:gap-10">
          <div className="reveal order-first md:order-none">
            <Portrait />
          </div>

          <div className="reveal">
            <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-5xl">
              From brake systems to business dashboards
            </h2>
            <p className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-paper-dim">
              {about.paragraph}
            </p>
            <p className="mt-6 max-w-xl text-balance leading-relaxed text-paper-dim">
              Currently shipping {about.focus}
            </p>
            <a
              href={person.resume}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="true"
              className="mt-8 inline-flex rounded-full border border-graphite-700 px-6 py-3 font-medium text-paper transition-colors hover:border-ember-600"
            >
              Download resume
            </a>
          </div>

          <div className="reveal grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-graphite-800 bg-graphite-800 sm:grid-cols-3 md:grid-cols-1">
            {stats.map((stat) => (
              <StatTile key={stat.label} {...stat} />
            ))}
          </div>
        </div>

        <div className="reveal mt-16 overflow-hidden rounded-2xl border border-graphite-800 bg-graphite-900">
          <div className="relative h-[280px] w-full sm:h-[340px]">
            <DataFlowGraphic />
          </div>
          <div className="grid grid-cols-3 divide-x divide-graphite-800 border-t border-graphite-800">
            <p className="p-4 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-faint sm:p-5">
              Raw data
            </p>
            <p className="p-4 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-ember-500 sm:p-5">
              Analysis
            </p>
            <p className="p-4 text-right font-mono text-[11px] uppercase tracking-[0.14em] text-paper-faint sm:p-5">
              The dashboard
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
