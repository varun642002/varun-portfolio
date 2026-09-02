import { education, experience } from "@/data/content";

export function Journey() {
  return (
    <section id="journey" className="scroll-mt-24 border-b border-graphite-800 px-6 py-24 sm:px-10 md:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="reveal font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
          Journey
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-12">
          <div>
            <h3 className="reveal font-mono text-xs uppercase tracking-[0.2em] text-paper-faint">Experience</h3>
            <ol className="mt-6 border-l border-graphite-700">
              {experience.map((entry) => (
                <li key={entry.role} className="reveal relative pb-10 pl-8 last:pb-0">
                  <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-ember-500" />
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-paper-faint">{entry.period}</p>
                  <h4 className="mt-2 font-display text-xl font-semibold text-paper">{entry.role}</h4>
                  <p className="text-sm text-ember-500">{entry.org}</p>
                  <ul className="mt-3 space-y-2">
                    {entry.points.map((point) => (
                      <li key={point} className="text-sm leading-relaxed text-paper-dim">
                        {point}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="reveal font-mono text-xs uppercase tracking-[0.2em] text-paper-faint">Education</h3>
            <ol className="mt-6 border-l border-graphite-700">
              {education.map((entry) => (
                <li key={entry.degree} className="reveal relative pb-10 pl-8 last:pb-0">
                  <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-ember-500" />
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-paper-faint">{entry.period}</p>
                  <h4 className="mt-2 font-display text-xl font-semibold text-paper">{entry.degree}</h4>
                  <p className="text-sm text-ember-500">{entry.field}</p>
                  <p className="mt-2 text-sm text-paper-dim">{entry.school}</p>
                  <p className="mt-3 text-sm leading-relaxed text-paper-dim">{entry.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
