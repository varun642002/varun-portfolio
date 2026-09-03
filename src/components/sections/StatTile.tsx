import { useCountUp } from "@/lib/useCountUp";

type StatTileProps = {
  target: number;
  suffix: string;
  unit: string;
  label: string;
};

export function StatTile({ target, suffix, unit, label }: StatTileProps) {
  const { ref, value } = useCountUp<HTMLDivElement>(target);

  return (
    <div ref={ref} className="bg-graphite-900 p-6">
      <div className="flex items-baseline gap-2">
        <span className="tabular font-mono text-4xl font-semibold text-ember-500 sm:text-5xl">
          {value}
          {suffix}
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-paper-faint">{unit}</span>
      </div>
      <p className="mt-3 text-sm leading-snug text-paper-dim">{label}</p>
    </div>
  );
}
