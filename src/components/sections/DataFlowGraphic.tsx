// Decorative background: raw, scattered data resolving through an analysis
// node into a clean dashboard read-out. Purely illustrative of the work
// described in the section text, so it stays out of the accessibility tree.
const RAW_POINTS = Array.from({ length: 34 }, (_, i) => {
  const x = 30 + ((i * 37) % 300);
  const y = 40 + ((i * 53) % 320);
  const r = 1.6 + ((i * 7) % 5) * 0.35;
  return { x, y, r, key: `raw-${i}` };
});

const BARS = [34, 58, 46, 78, 64, 92, 74];
const BAR_GAP = 14;
const BAR_WIDTH = 28;
const CHART_LEFT = 760;
const CHART_BASE = 330;
const CHART_TOP = 60;

export function DataFlowGraphic() {
  return (
    <svg
      viewBox="0 0 1200 400"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className="pointer-events-none h-full w-full"
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-ember-500)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--color-ember-500)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="barFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-ember-500)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--color-ember-700)" stopOpacity="0.25" />
        </linearGradient>
      </defs>

      {/* Zone 1 -- raw, unstructured data */}
      <g opacity="0.8">
        {RAW_POINTS.map((p) => (
          <circle key={p.key} cx={p.x} cy={p.y} r={p.r} fill="var(--color-paper-faint)" />
        ))}
      </g>

      {/* Connective traces from the raw scatter into the analysis node */}
      <g stroke="var(--color-graphite-600)" strokeWidth="1" opacity="0.6">
        {RAW_POINTS.filter((_, i) => i % 3 === 0).map((p) => (
          <line key={`trace-${p.key}`} x1={p.x} y1={p.y} x2="470" y2="200" />
        ))}
      </g>

      {/* Zone 2 -- the analysis node */}
      <circle cx="470" cy="200" r="90" fill="url(#nodeGlow)" />
      <circle
        cx="470"
        cy="200"
        r="34"
        fill="none"
        stroke="var(--color-ember-500)"
        strokeWidth="1.5"
        opacity="0.8"
      >
        <animate attributeName="r" values="30;46;30" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0.15;0.7" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="470" cy="200" r="6" fill="var(--color-ember-500)" />

      {/* Traces from the node into the finished dashboard */}
      <g stroke="var(--color-graphite-600)" strokeWidth="1" opacity="0.6">
        {BARS.map((h, i) => {
          const x = CHART_LEFT + i * (BAR_WIDTH + BAR_GAP) + BAR_WIDTH / 2;
          const y = CHART_BASE - h;
          return <line key={`out-${i}`} x1="470" y1="200" x2={x} y2={y} />;
        })}
      </g>

      {/* Zone 3 -- the resolved dashboard */}
      <g>
        <line x1={CHART_LEFT - 20} y1={CHART_BASE} x2={CHART_LEFT + 7 * (BAR_WIDTH + BAR_GAP)} y2={CHART_BASE} stroke="var(--color-graphite-700)" strokeWidth="1" />
        {[0.25, 0.5, 0.75].map((f) => (
          <line
            key={f}
            x1={CHART_LEFT - 20}
            x2={CHART_LEFT + 7 * (BAR_WIDTH + BAR_GAP)}
            y1={CHART_TOP + (CHART_BASE - CHART_TOP) * f}
            y2={CHART_TOP + (CHART_BASE - CHART_TOP) * f}
            stroke="var(--color-graphite-800)"
            strokeWidth="1"
          />
        ))}
        {BARS.map((h, i) => (
          <rect
            key={`bar-${i}`}
            x={CHART_LEFT + i * (BAR_WIDTH + BAR_GAP)}
            y={CHART_BASE - h}
            width={BAR_WIDTH}
            height={h}
            rx="3"
            fill="url(#barFade)"
          />
        ))}
        <polyline
          points={BARS.map((h, i) => {
            const x = CHART_LEFT + i * (BAR_WIDTH + BAR_GAP) + BAR_WIDTH / 2;
            const y = CHART_BASE - h - 14;
            return `${x},${y}`;
          }).join(" ")}
          fill="none"
          stroke="var(--color-paper)"
          strokeWidth="1.5"
          opacity="0.85"
        />
      </g>
    </svg>
  );
}
