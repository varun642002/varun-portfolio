// Public assets are referenced as root-absolute paths ("/shots/x.webp"), but
// the site deploys under a GitHub Pages project path (BASE_URL =
// "/varun-portfolio/"), not the domain root. This joins the two correctly
// in both dev and production instead of hardcoding the base everywhere.
export function asset(path: string) {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\//, "")}`;
}
