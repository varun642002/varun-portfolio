import { useState } from "react";
import { achievements, certifications } from "@/data/content";
import { CertificateModal } from "./CertificateModal";

export function Proof() {
  const [openCert, setOpenCert] = useState<number | null>(null);

  return (
    <section id="proof" className="scroll-mt-24 border-b border-graphite-800 px-6 py-24 sm:px-10 md:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="reveal font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
          Proof
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {achievements.map((item) => (
            <div key={item.title} className="reveal border-t border-graphite-800 pt-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-ember-500">{item.tag}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-paper">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-paper-dim">{item.body}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.metrics.map((metric) => (
                  <li key={metric} className="tabular rounded-full border border-graphite-700 px-3 py-1 text-xs text-paper">
                    {metric}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="reveal font-mono text-xs uppercase tracking-[0.2em] text-paper-faint">Certifications</h3>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <button
                key={cert.code}
                type="button"
                data-cursor="View"
                onClick={() => setOpenCert(index)}
                className="reveal rounded-xl border border-graphite-800 bg-graphite-900 p-4 text-left transition-colors hover:border-ember-600"
              >
                <p className="font-mono text-xs text-paper-faint">{cert.year}</p>
                <p className="mt-2 font-display text-sm font-semibold leading-snug text-paper">{cert.title}</p>
                <p className="mt-1 text-xs text-paper-dim">{cert.issuer}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {openCert !== null && (
        <CertificateModal certification={certifications[openCert]} onClose={() => setOpenCert(null)} />
      )}
    </section>
  );
}
