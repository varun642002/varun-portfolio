import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/cn";
import { useActiveSection } from "@/lib/useActiveSection";
import { person } from "@/data/content";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "journey", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "proof", label: "Proof" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const active = useActiveSection(isHome ? SECTIONS.map((s) => s.id) : []);
  const [menuOpen, setMenuOpen] = useState(false);

  const goToSection = (id: string) => {
    setMenuOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <>
      <a
        href="#hero"
        onClick={(e) => {
          e.preventDefault();
          goToSection("hero");
        }}
        className="fixed left-4 top-4 z-40 rounded-full border border-graphite-700 bg-graphite-950/70 px-3 py-2 font-display text-sm font-semibold tracking-tight text-paper backdrop-blur-sm transition-colors hover:border-ember-600 sm:left-6 sm:top-6"
        data-cursor="Home"
        aria-label={`${person.name}, back to top`}
      >
        {person.initials}
      </a>

      <a
        href="#main-content"
        className="fixed left-1/2 top-2 z-[60] -translate-x-1/2 -translate-y-16 rounded bg-ember-500 px-4 py-2 text-sm font-medium text-graphite-950 transition-transform focus-visible:translate-y-0"
      >
        Skip to content
      </a>

      <nav
        className="fixed inset-x-0 bottom-4 z-40 hidden justify-center px-4 md:flex sm:bottom-6"
        aria-label="Section navigation"
      >
        <ul className="flex items-center gap-1 rounded-full border border-graphite-700 bg-graphite-950/80 p-1.5 backdrop-blur-md">
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => goToSection(section.id)}
                data-cursor="true"
                className={cn(
                  "relative rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors",
                  isHome && active === section.id
                    ? "bg-ember-500 text-graphite-950"
                    : "text-paper-dim hover:text-paper",
                )}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <a
        href={person.resume}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="↓"
        className="fixed right-4 top-4 z-40 hidden items-center gap-2 rounded-full border border-graphite-700 bg-graphite-950/70 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-dim backdrop-blur-sm transition-colors hover:border-ember-600 hover:text-paper sm:right-6 sm:top-6 md:flex"
      >
        Resume
      </a>

      <button
        type="button"
        onClick={() => setMenuOpen((v) => !v)}
        className="fixed right-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-graphite-700 bg-graphite-950/80 text-paper backdrop-blur-sm md:hidden"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
        <div className="relative h-4 w-5">
          <span
            className={cn(
              "absolute left-0 top-0 h-[1.5px] w-5 bg-current transition-transform",
              menuOpen && "translate-y-[7px] rotate-45",
            )}
          />
          <span
            className={cn("absolute left-0 top-[7px] h-[1.5px] w-5 bg-current transition-opacity", menuOpen && "opacity-0")}
          />
          <span
            className={cn(
              "absolute left-0 top-[14px] h-[1.5px] w-5 bg-current transition-transform",
              menuOpen && "-translate-y-[7px] -rotate-45",
            )}
          />
        </div>
      </button>

      {menuOpen && (
        <div className="fixed inset-0 z-30 flex flex-col items-center justify-center gap-2 bg-graphite-950/98 backdrop-blur md:hidden">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => goToSection(section.id)}
              className={cn(
                "font-display text-3xl font-semibold",
                isHome && active === section.id ? "text-ember-500" : "text-paper",
              )}
            >
              {section.label}
            </button>
          ))}
          <Link to={person.resume} onClick={() => setMenuOpen(false)} className="mt-6 font-mono text-sm uppercase tracking-[0.14em] text-paper-dim">
            Resume
          </Link>
        </div>
      )}
    </>
  );
}
