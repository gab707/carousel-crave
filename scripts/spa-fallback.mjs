// Copies the prerendered index.html to 404.html so GitHub Pages serves the
// app for direct visits to any route. No-op when there is no static output.
import { existsSync, copyFileSync } from "node:fs";
const dir = "dist/client";
if (existsSync(`${dir}/index.html`)) {
  copyFileSync(`${dir}/index.html`, `${dir}/404.html`);
  console.log(`[spa-fallback] wrote ${dir}/404.html`);
}
