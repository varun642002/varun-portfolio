import { useEffect, useRef } from "react";
import { asset } from "@/lib/asset";
import type { Certification } from "@/data/content";

type CertificateModalProps = {
  certification: Certification;
  onClose: () => void;
};

export function CertificateModal({ certification, onClose }: CertificateModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${certification.title} certificate`}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-graphite-950/90 p-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[85vh] w-full max-w-2xl overflow-auto rounded-2xl border border-graphite-700 bg-graphite-900 p-4"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-graphite-700 bg-graphite-950/80 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-paper-dim hover:text-paper"
        >
          Close
        </button>
        <img
          src={asset(`/certificates/${certification.code}.jpeg`)}
          alt={`${certification.title} certificate from ${certification.issuer}`}
          className="mt-8 w-full rounded-lg"
        />
        <div className="p-2">
          <h3 className="font-display text-lg font-semibold text-paper">{certification.title}</h3>
          <p className="text-sm text-paper-dim">{certification.issuer}, {certification.year}</p>
        </div>
      </div>
    </div>
  );
}
