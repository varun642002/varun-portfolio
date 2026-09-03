import { useTilt } from "@/lib/useTilt";
import type { SkillGroup } from "@/data/content";

export function CapabilityTile({ skill }: { skill: SkillGroup }) {
  const tiltRef = useTilt<HTMLDivElement>({ max: 5, scale: 1.01 });

  return (
    <div ref={tiltRef} className="tilt-card reveal bg-graphite-900 p-6 transition-colors hover:bg-graphite-850">
      <h3 className="font-display text-lg font-semibold text-paper">{skill.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-paper-dim">{skill.body}</p>
    </div>
  );
}
