// Single source of truth for the deployment sub-path.
//
// GitHub Pages serves this repo as a *project* site under
// https://vinitdeep.github.io/slicexfilms.com/, so every absolute internal
// URL (links in plain <a> tags, <img src>, etc.) must be prefixed with
// "/slicexfilms.com". `next/link` and Next's own asset URLs get this
// automatically from `basePath` in next.config.mjs; hand-written <a>/<img>
// do NOT, so they go through `withBase()`.
//
// Locally (no NEXT_PUBLIC_BASE_PATH set) this is an empty string and URLs are
// unchanged. The GitHub Actions workflow sets it to "/slicexfilms.com".
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function withBase(path) {
  if (!path.startsWith('/')) return path;
  return `${BASE_PATH}${path}`;
}
