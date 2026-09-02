import { useScrollProgress } from "@/lib/useScrollProgress";

export function SignalTrace() {
  const progress = useScrollProgress();

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] bg-graphite-900/60">
      <div
        className="h-full bg-ember-500 shadow-[0_0_12px_var(--color-ember-500)] transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
