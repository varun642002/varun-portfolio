type TelemetryTraceProps = {
  seed?: number;
  className?: string;
};

// A generated signal-trace pattern, standing in for a screenshot on projects
// that do not have one. Deterministic per seed so it stays stable on re-render.
export function TelemetryTrace({ seed = 1, className }: TelemetryTraceProps) {
  const points = Array.from({ length: 48 }, (_, i) => {
    const n = Math.sin(i * 0.6 + seed) * 0.5 + Math.sin(i * 0.21 + seed * 2) * 0.5;
    const x = (i / 47) * 400;
    const y = 60 + n * 34;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");

  return (
    <svg viewBox="0 0 400 120" className={className} preserveAspectRatio="none" aria-hidden="true">
      <polyline points={points} fill="none" stroke="var(--color-ember-600)" strokeWidth="1.5" opacity="0.55" />
      {Array.from({ length: 9 }).map((_, i) => (
        <line
          key={i}
          x1={(i / 8) * 400}
          x2={(i / 8) * 400}
          y1="0"
          y2="120"
          stroke="var(--color-graphite-700)"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}
