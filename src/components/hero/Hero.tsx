import { useEffect, useState } from "react";
import { person } from "@/data/content";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { useTilt } from "@/lib/useTilt";
import { Dial } from "./Dial";

const ROLE_INTERVAL = 2200;

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const dialTiltRef = useTilt<HTMLDivElement>({ max: 9, scale: 1 });

  useEffect(() => {
    if (reducedMotion) return;
    const id = window.setInterval(() => {
      setRoleIndex((i) => (i + 1) % person.roles.length);
    }, ROLE_INTERVAL);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden border-b border-graphite-800 px-6 pb-24 pt-28 sm:px-10 md:pt-24"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-paper-dim">
            Business analytics &amp; product engineering
          </p>

          <h1 className="mt-6 font-display text-[15vw] font-semibold leading-[0.9] tracking-tight text-paper sm:text-[9.5vw] md:text-[6.4vw] lg:text-[6rem]">
            Varun S.
          </h1>

          <div className="mt-6 h-8 font-display text-2xl font-medium text-ember-500 sm:text-3xl">
            <span key={roleIndex} className="inline-block animate-[fadeUp_0.5s_ease]">
              {person.roles[roleIndex]}
            </span>
          </div>

          <p className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-paper-dim sm:text-xl">
            {person.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              data-cursor="true"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-full bg-ember-500 px-6 py-3 font-medium text-graphite-950 transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              See the work
            </a>
            <a
              href="#contact"
              data-cursor="true"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-full border border-graphite-700 px-6 py-3 font-medium text-paper transition-colors hover:border-ember-600"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div
          ref={dialTiltRef}
          className="tilt-dial mx-auto w-full max-w-[420px] md:mx-0 md:justify-self-end"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Dial />
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-paper-faint md:flex"
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <span className="h-8 w-px bg-gradient-to-b from-paper-faint to-transparent" />
      </div>
    </section>
  );
}
