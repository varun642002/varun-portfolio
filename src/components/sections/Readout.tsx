import { about, stats } from "@/data/content";

export function Readout() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-graphite-800 px-6 py-24 sm:px-10 md:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-16 md:grid-cols-[1.3fr_1fr] md:gap-12">
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
        </div>

        <div className="reveal grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-graphite-800 bg-graphite-800 sm:grid-cols-3 md:grid-cols-1">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-graphite-900 p-6">
              <div className="flex items-baseline gap-2">
                <span className="tabular font-mono text-4xl font-semibold text-ember-500 sm:text-5xl">
                  {stat.value}
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-paper-faint">{stat.unit}</span>
              </div>
              <p className="mt-3 text-sm leading-snug text-paper-dim">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
