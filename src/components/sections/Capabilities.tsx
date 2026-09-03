import { skills } from "@/data/content";
import { CapabilityTile } from "./CapabilityTile";

export function Capabilities() {
  return (
    <section id="skills" className="scroll-mt-24 border-b border-graphite-800 px-6 py-24 sm:px-10 md:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <div className="reveal max-w-2xl">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
            Capabilities
          </h2>
          <p className="mt-5 leading-relaxed text-paper-dim">
            What actually gets used, project to project — not a percentage bar in sight.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-graphite-800 bg-graphite-800 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <CapabilityTile key={skill.title} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
