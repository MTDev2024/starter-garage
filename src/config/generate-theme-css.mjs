// Vite plugin: turns the design tokens in `theme.ts` into a Tailwind v4
// `@theme` CSS block, so `client.ts`/`theme.ts` stays the single source of
// truth for colors, fonts and radii — nothing is duplicated by hand in CSS.
import { writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { theme } from "./theme.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = resolve(__dirname, "../styles/tokens.generated.css");

function toKebabCase(value) {
  return value.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

function buildCss() {
  const lines = ["/* AUTO-GENERATED from src/config/theme.ts — do not edit by hand. */", "@theme {"];

  for (const [key, value] of Object.entries(theme.colors)) {
    lines.push(`  --color-${toKebabCase(key)}: ${value};`);
  }
  for (const [key, value] of Object.entries(theme.fonts)) {
    lines.push(`  --font-${toKebabCase(key)}: ${value};`);
  }
  for (const [key, value] of Object.entries(theme.radius)) {
    lines.push(`  --radius-${toKebabCase(key)}: ${value};`);
  }
  for (const [key, value] of Object.entries(theme.shadow)) {
    lines.push(`  --shadow-${toKebabCase(key)}: ${value};`);
  }

  lines.push("}", "");
  return lines.join("\n");
}

async function writeTokens() {
  await mkdir(dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, buildCss(), "utf-8");
}

/** @returns {import('vite').Plugin} */
export function themeTokens() {
  return {
    name: "generate-theme-tokens",
    enforce: "pre",
    async buildStart() {
      await writeTokens();
    },
    async configureServer(server) {
      await writeTokens();
      server.watcher.add(resolve(__dirname, "theme.ts"));
      server.watcher.on("change", async (file) => {
        if (file.endsWith("src/config/theme.ts")) {
          await writeTokens();
        }
      });
    },
  };
}
