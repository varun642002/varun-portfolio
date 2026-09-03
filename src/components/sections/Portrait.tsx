import { person } from "@/data/content";
import { useTilt } from "@/lib/useTilt";
import { polarToCartesian } from "@/lib/geometry";

const TICKS = Array.from({ length: 40 }, (_, i) => i);

export function Portrait() {
  const tiltRef = useTilt<HTMLDivElement>({ max: 8, scale: 1.02 });

  return (
    <div ref={tiltRef} className="tilt-card relative mx-auto aspect-square w-full max-w-[280px]">
      <svg viewBox="0 0 200 200" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
        {TICKS.map((i) => {
          const angle = (i / TICKS.length) * 360;
          const major = i % 5 === 0;
          const p1 = polarToCartesian(100, 100, 98, angle);
          const p2 = polarToCartesian(100, 100, major ? 91 : 94, angle);
          return (
            <line
              key={i}
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              stroke={major ? "var(--color-ember-600)" : "var(--color-graphite-700)"}
              strokeWidth={major ? 1.6 : 1}
            />
          );
        })}
      </svg>

      <div className="absolute inset-[14%] overflow-hidden rounded-full border border-graphite-700 bg-graphite-900 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]">
        <img
          src={person.photo}
          alt={person.name}
          className="h-full w-full object-cover"
          style={{ filter: "grayscale(25%) contrast(1.05) brightness(0.92) sepia(8%)" }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(circle, transparent 55%, var(--color-graphite-950) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 mix-blend-color"
          style={{ backgroundColor: "var(--color-ember-700)", opacity: 0.14 }}
        />
      </div>
    </div>
  );
}
