import { useEffect, useRef } from "react";
import { clamp, lerp } from "@/lib/geometry";
import { useIsTouch } from "@/lib/useIsTouch";
import { useReducedMotion } from "@/lib/useReducedMotion";

type TiltOptions = {
  max?: number;
  scale?: number;
};

// Pointer-driven 3D tilt: the element leans toward the cursor within its own
// bounds, with a specular highlight tracking the same point. Disabled for
// touch input and prefers-reduced-motion.
export function useTilt<T extends HTMLElement>({ max = 10, scale = 1.02 }: TiltOptions = {}) {
  const ref = useRef<T>(null);
  const isTouch = useIsTouch();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || isTouch || reducedMotion) return;

    const state = { rx: 0, ry: 0, targetRx: 0, targetRy: 0, glowX: 50, glowY: 50 };
    let frame = 0;
    let hovering = false;

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      state.targetRy = clamp((px - 0.5) * max * 2, -max, max);
      state.targetRx = clamp((0.5 - py) * max * 2, -max, max);
      state.glowX = px * 100;
      state.glowY = py * 100;
      hovering = true;
    };

    const onLeave = () => {
      hovering = false;
      state.targetRx = 0;
      state.targetRy = 0;
    };

    const tick = () => {
      state.rx = lerp(state.rx, state.targetRx, 0.12);
      state.ry = lerp(state.ry, state.targetRy, 0.12);
      const currentScale = hovering ? scale : 1;
      el.style.transform = `perspective(900px) rotateX(${state.rx}deg) rotateY(${state.ry}deg) scale(${currentScale})`;
      el.style.setProperty("--glow-x", `${state.glowX}%`);
      el.style.setProperty("--glow-y", `${state.glowY}%`);
      frame = requestAnimationFrame(tick);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [isTouch, reducedMotion, max, scale]);

  return ref;
}
