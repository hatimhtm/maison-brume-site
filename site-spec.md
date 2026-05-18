# Maison Brume — Site Spec & Copy Deck

Status: AWAITING COPY SIGN-OFF (EN). FR transcreation after EN approved. Build after that.

## Decisions (cross-examined vs the conversion funnel)
- **Philosophy:** Restraint + flawless craft. NOT maximal-tech/WebGL (loses mobile-first audience; reads agency-showreel, lowers luxury perception).
- **Stack:** Astro + Tailwind + Lenis + thin GSAP/Motion One. Static → GitHub Pages. Chosen for near-zero JS (mobile = #1 conversion factor), static-native, zero brutalist-component contamination. NOT reusing Next portfolio components (smuggles personal-brand DNA — same mistake as a Lorani re-skin).
- **Languages:** EN + FR at launch (AR later via i18n plumbing).
- **Contact:** WhatsApp +212 602450006 PRIMARY (MENA business runs on WhatsApp) + cal.com + email + client-side Formspree (NO Next /api route — GitHub Pages is static; an API route = silently broken form = worst leak).
- **Structure:** Minimal multipage — Home / Work (+ Lorani & Nota case pages) / Studio / Contact. Each section has a defined funnel job.
- **Honesty:** Lorani = client prototype; Nota = unsolicited concept. Never imply closed paid deals.
- **Identity:** Locked Maison Brume system — Cochin "MB", bone #EBE7DF / ink #1C1B19, editorial, vast negative space, slow refined motion. Must visibly out-class the Lorani-derived prospect demos (bespoke art direction, not a re-skin).

## Copy (EN) — see chat for full deck; sign-off pending
Hero / Manifesto / Selected Work / How It Begins / Contact band / Case: Lorani / Case: Nota / Studio. (Full text in conversation; finalize here on approval.)

## Build order (after sign-off)
1. EN copy approved → FR transcreation
2. Astro scaffold + Maison Brume design system (tokens, type, motion budget)
3. Home → Studio → Work + 2 case pages → Contact
4. Perf budget: sub-2s on mid-range mobile, 60fps, Lighthouse pass
5. Deploy GitHub Pages → becomes IG bio link
