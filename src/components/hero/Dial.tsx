import { useEffect, useRef } from "react";
import { clamp, describeArc, lerp, polarToCartesian } from "@/lib/geometry";
import { useReducedMotion } from "@/lib/useReducedMotion";

const SWEEP_START = -132;
const SWEEP_END = 132;
const MAX_VALUE = 8;
const REDLINE_FROM = 6.4;
const REST_VALUE = 3.2;
const CENTER = 150;
const OUTER_R = 138;
const TICK_R = 122;

function valueToAngle(value: number) {
  return SWEEP_START + (value / MAX_VALUE) * (SWEEP_END - SWEEP_START);
}

const majorTicks = Array.from({ length: MAX_VALUE + 1 }, (_, i) => i);
const minorTicks = Array.from({ length: MAX_VALUE * 2 + 1 }, (_, i) => i * 0.5).filter(
  (v) => !Number.isInteger(v),
);

export function Dial() {
  const reducedMotion = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const needleRef = useRef<SVGLineElement>(null);
  const needleShadowRef = useRef<SVGLineElement>(null);
  const targetValue = useRef(REST_VALUE);
  const currentValue = useRef(REST_VALUE);
  const frame = useRef(0);
  const idlePhase = useRef(0);

  useEffect(() => {
    if (reducedMotion) return;

    const wrap = wrapRef.current;
    if (!wrap) return;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = event.clientX - cx;
      const dy = event.clientY - cy;
      const angleDeg = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
      const normalized = clamp(angleDeg, SWEEP_START, SWEEP_END);
      targetValue.current = ((normalized - SWEEP_START) / (SWEEP_END - SWEEP_START)) * MAX_VALUE;
    };

    const handlePointerLeave = () => {
      targetValue.current = REST_VALUE;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    wrap.addEventListener("pointerleave", handlePointerLeave);

    const tick = () => {
      idlePhase.current += 0.006;
      const idleDrift = Math.sin(idlePhase.current) * 0.35;
      const target = targetValue.current === REST_VALUE ? REST_VALUE + idleDrift : targetValue.current;
      currentValue.current = lerp(currentValue.current, target, 0.06);

      const angle = valueToAngle(clamp(currentValue.current, 0, MAX_VALUE));
      if (needleRef.current) needleRef.current.setAttribute("transform", `rotate(${angle} ${CENTER} ${CENTER})`);
      if (needleShadowRef.current)
        needleShadowRef.current.setAttribute("transform", `rotate(${angle} ${CENTER} ${CENTER})`);

      frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener("pointermove", handlePointerMove);
      wrap.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [reducedMotion]);

  const restAngle = valueToAngle(REST_VALUE);

  return (
    <div ref={wrapRef} className="relative aspect-square w-full max-w-[420px] select-none" aria-hidden="true">
      <svg viewBox="0 0 300 300" className="h-full w-full overflow-visible">
        <circle cx={CENTER} cy={CENTER} r={OUTER_R} fill="none" stroke="var(--color-graphite-700)" strokeWidth="1.5" />

        <path
          d={describeArc(CENTER, CENTER, OUTER_R, valueToAngle(REDLINE_FROM), SWEEP_END)}
          fill="none"
          stroke="var(--color-ember-600)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {minorTicks.map((value) => {
          const angle = valueToAngle(value);
          const p1 = polarToCartesian(CENTER, CENTER, TICK_R, angle);
          const p2 = polarToCartesian(CENTER, CENTER, TICK_R - 8, angle);
          return (
            <line
              key={`minor-${value}`}
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              stroke="var(--color-paper-faint)"
              strokeWidth="1"
            />
          );
        })}

        {majorTicks.map((value) => {
          const angle = valueToAngle(value);
          const p1 = polarToCartesian(CENTER, CENTER, TICK_R, angle);
          const p2 = polarToCartesian(CENTER, CENTER, TICK_R - 14, angle);
          const labelPos = polarToCartesian(CENTER, CENTER, TICK_R - 28, angle);
          const isRedline = value >= REDLINE_FROM;
          return (
            <g key={`major-${value}`}>
              <line
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                stroke={isRedline ? "var(--color-ember-500)" : "var(--color-paper-dim)"}
                strokeWidth="2"
              />
              <text
                x={labelPos.x}
                y={labelPos.y}
                fill={isRedline ? "var(--color-ember-soft)" : "var(--color-paper-dim)"}
                fontFamily="var(--font-mono)"
                fontSize="11"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {value}
              </text>
            </g>
          );
        })}

        <line
          ref={needleShadowRef}
          x1={CENTER}
          y1={CENTER}
          x2={CENTER}
          y2={CENTER - TICK_R + 30}
          stroke="black"
          strokeOpacity="0.35"
          strokeWidth="5"
          strokeLinecap="round"
          transform={`rotate(${restAngle} ${CENTER} ${CENTER})`}
          style={{ transform: "translate(2px, 3px)" }}
        />
        <line
          ref={needleRef}
          x1={CENTER}
          y1={CENTER}
          x2={CENTER}
          y2={CENTER - TICK_R + 30}
          stroke="var(--color-ember-500)"
          strokeWidth="3"
          strokeLinecap="round"
          transform={`rotate(${restAngle} ${CENTER} ${CENTER})`}
        />
        <circle cx={CENTER} cy={CENTER} r="7" fill="var(--color-graphite-900)" stroke="var(--color-ember-500)" strokeWidth="2" />
      </svg>
    </div>
  );
}
