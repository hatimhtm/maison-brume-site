// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";

// GitHub Pages project site. Repo name = maison-brume-site.
// Override SITE/BASE via env when the custom domain is connected post-client.
const SITE = process.env.SITE_URL || "https://hatimhtm.github.io";
const BASE = process.env.BASE_PATH ?? "/maison-brume-site";

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "always",
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
  },
  // `as any`: harmless dual-Vite type instance mismatch (Astro's bundled
  // Vite vs the Tailwind plugin's). Build is verified working.
  vite: { plugins: [/** @type {any} */ (tailwind())] },
  build: { format: "directory", inlineStylesheets: "always" },
});
