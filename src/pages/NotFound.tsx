import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <main id="main-content" className="flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-500">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold text-paper sm:text-5xl">Signal lost</h1>
      <p className="mt-4 max-w-sm text-paper-dim">
        This page does not exist. It may have moved, or the link was wrong.
      </p>
      <Link
        to="/"
        data-cursor="true"
        className="mt-8 rounded-full bg-ember-500 px-6 py-3 font-medium text-graphite-950 transition-transform hover:scale-[1.03]"
      >
        Back to the portfolio
      </Link>
    </main>
  );
}
