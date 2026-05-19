import type { Locale } from "./content";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Locale-aware, base-path-aware internal URL with a trailing slash, to
 *  match Astro's directory output and avoid GitHub Pages 301 redirects. */
export function path(to: string, locale: Locale): string {
  const clean = to.replace(/^\/+/, "").replace(/\/+$/, "");
  const seg = locale === "fr" ? "fr" : "";
  const joined = [BASE, seg, clean].filter(Boolean).join("/");
  return joined + "/";
}

export function other(locale: Locale): Locale {
  return locale === "en" ? "fr" : "en";
}

/** Base-path-aware static asset URL (public/ files). */
export function asset(p: string): string {
  return (BASE + "/" + p.replace(/^\/+/, "")).replace(/([^:]\/)\/+/g, "$1");
}
