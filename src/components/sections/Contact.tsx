import { person } from "@/data/content";
import { TelemetryTrace } from "@/components/work/TelemetryTrace";

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="scroll-mt-24 relative overflow-hidden px-6 py-24 sm:px-10 md:py-32">
      <TelemetryTrace seed={7} className="pointer-events-none absolute inset-x-0 top-0 h-40 w-full opacity-30" />

      <div className="relative mx-auto w-full max-w-7xl">
        <p className="reveal font-mono text-xs uppercase tracking-[0.2em] text-paper-faint">Contact</p>
        <h2 className="reveal mt-6 max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-6xl">
          Let's turn your data into a decision.
        </h2>
        <p className="reveal mt-8 max-w-xl text-balance leading-relaxed text-paper-dim">
          {person.contactLine}
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${person.email}`}
            data-cursor="true"
            className="rounded-full bg-ember-500 px-6 py-3 font-medium text-graphite-950 transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            {person.email}
          </a>
          <a
            href={person.resume}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="true"
            className="rounded-full border border-graphite-700 px-6 py-3 font-medium text-paper transition-colors hover:border-ember-600"
          >
            Download resume
          </a>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-graphite-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-6">
            {person.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  data-cursor="true"
                  className="font-mono text-xs uppercase tracking-[0.14em] text-paper-dim transition-colors hover:text-ember-500"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="font-mono text-xs text-paper-faint">
            © {year} {person.name} Built from scratch, no template.
          </p>
        </div>
      </div>
    </section>
  );
}
