/**
 * Design tokens — the visual identity of the site.
 *
 * This file is read twice:
 * 1. At CSS-build time (see astro.config.mjs) to generate Tailwind theme
 *    variables, so every `bg-brand`, `font-heading`, `rounded-card`, etc.
 *    utility class in the markup reflects these values.
 * 2. By `client.ts`, which re-exports it as `client.theme` so the whole
 *    identity of the site is reachable from one import.
 *
 * To re-skin the site for another client: edit the values below, swap the
 * font packages if needed (see `fonts`), and replace the files in
 * `src/assets/images/`. Nothing else in the codebase should need to change.
 */

export const theme = {
  colors: {
    /** Primary brand color — CTAs, links, active states, accents.
     *  Tuned to keep white text at ≥4.5:1 (WCAG AA) on this background. */
    brand: "#D21F24",
    brandDark: "#AD191D",
    brandLight: "#FDEAEA",
    /** Lighter brand tint reserved for text placed on dark/ink backgrounds,
     *  where the base `brand` red doesn't meet AA contrast. */
    brandOnDark: "#FF5B5E",
    /** Near-black used for dark sections, footer, headings. */
    ink: "#15171D",
    inkSoft: "#23262E",
    /** Page background and card surfaces. */
    surface: "#FFFFFF",
    surfaceMuted: "#F7F4F1",
    /** Body text and secondary text. */
    text: "#1F2126",
    textMuted: "#6B7079",
    textOnDark: "#F4F3F1",
    textOnDarkMuted: "#9A9CA3",
    border: "#E7E3DE",
    success: "#1E8E5A",
    warning: "#B8750D",
  },
  fonts: {
    /** Display/heading typeface. Loaded via @fontsource-variable/sora in Layout.astro. */
    heading: '"Sora Variable", "Sora", system-ui, sans-serif',
    /** Body typeface. Loaded via @fontsource-variable/inter in Layout.astro. */
    body: '"Inter Variable", "Inter", system-ui, sans-serif',
  },
  radius: {
    sm: "0.375rem",
    card: "0.75rem",
    lg: "1.25rem",
    pill: "999px",
  },
  shadow: {
    card: "0 8px 30px -12px rgb(21 23 29 / 0.18)",
  },
} as const;

export type Theme = typeof theme;
