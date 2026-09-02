import { flagshipWork, analyticalWork } from "@/data/content";
import { FlagshipCard } from "@/components/work/FlagshipCard";
import { AnalyticalRow } from "@/components/work/AnalyticalRow";

const SPANS = ["md:col-span-12", "md:col-span-7", "md:col-span-5", "md:col-span-6", "md:col-span-6"];

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 border-b border-graphite-800 px-6 py-24 sm:px-10 md:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <div className="reveal max-w-2xl">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
            Selected work
          </h2>
          <p className="mt-5 text-balance leading-relaxed text-paper-dim">
            Five shipped products, from a solo AI analytics workspace to an offline-first fitness app on
            Google Play. Each one started as the same question: what does someone actually do with this data.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-12">
          {flagshipWork.map((work, i) => (
            <FlagshipCard key={work.slug} work={work} span={SPANS[i] ?? "md:col-span-6"} seed={i + 1} />
          ))}
        </div>

        <div className="mt-24">
          <h3 className="reveal font-display text-2xl font-semibold text-paper">Analytics &amp; research</h3>
          <p className="reveal mt-3 max-w-2xl leading-relaxed text-paper-dim">
            BI dashboards, a statistical thesis and the engineering project that started it all — real
            analysis without a shipped interface around it.
          </p>
          <div className="mt-6">
            {analyticalWork.map((work) => (
              <AnalyticalRow key={work.slug} work={work} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
