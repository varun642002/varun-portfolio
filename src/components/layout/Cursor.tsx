import { useEffect, useRef, useState } from "react";
import { useIsTouch } from "@/lib/useIsTouch";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function Cursor() {
  const isTouch = useIsTouch();
  const reducedMotion = useReducedMotion();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (isTouch || reducedMotion) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: pos.x, y: pos.y };
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      pos.x = event.clientX;
      pos.y = event.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;

      const target = event.target as HTMLElement;
      const interactive = target.closest<HTMLElement>("[data-cursor]");
      setActive(Boolean(interactive));
      setLabel(interactive?.dataset.cursor === "true" ? "" : interactive?.dataset.cursor ?? "");
    };

    const raf = () => {
      ring.x += (pos.x - ring.x) * 0.18;
      ring.y += (pos.y - ring.y) * 0.18;
      if (ringRef.current) ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px)`;
      frame = requestAnimationFrame(raf);
    };

    document.body.classList.add("cursor-none");
    window.addEventListener("pointermove", onMove);
    frame = requestAnimationFrame(raf);

    return () => {
      document.body.classList.remove("cursor-none");
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [isTouch, reducedMotion]);

  if (isTouch || reducedMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block" aria-hidden="true">
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember-500"
      />
      <div
        ref={ringRef}
        className="fixed left-0 top-0 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-[width,height,border-color] duration-200"
        style={{
          borderColor: active ? "var(--color-ember-500)" : "var(--color-paper-faint)",
          width: label ? "5.5rem" : active ? "2.75rem" : "2.25rem",
          height: label ? "5.5rem" : active ? "2.75rem" : "2.25rem",
        }}
      >
        {label && (
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-paper">{label}</span>
        )}
      </div>
    </div>
  );
}
