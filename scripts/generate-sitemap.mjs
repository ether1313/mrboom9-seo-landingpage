import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createJiti } from "jiti";

const __dirname = dirname(fileURLToPath(import.meta.url));
const jiti = createJiti(import.meta.url);
const { SITE_ORIGIN } = jiti(resolve(__dirname, "../src/config/site.ts"));

/** Public routes; keep in sync with `src/router/config.tsx` (exclude `*`). */
const PATHS = ["/"];

function normalizeBase(base) {
  const b = (base || "/").trim();
  if (!b || b === "/") return "";
  return b.replace(/\/$/, "");
}

function escapeXml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildLoc(pathname) {
  const origin = SITE_ORIGIN.replace(/\/$/, "");
  const base = normalizeBase(process.env.BASE_PATH);
  if (pathname === "/") {
    return base ? `${origin}${base}/` : `${origin}/`;
  }
  return `${origin}${base}${pathname}`;
}

const baseDir = resolve(__dirname, "../public");
const lastmod = new Date().toISOString().slice(0, 10);

const urlEntries = PATHS.map(
  (path) => `  <url>
    <loc>${escapeXml(buildLoc(path))}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === "/" ? "1.0" : "0.8"}</priority>
  </url>`
).join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

const sitemapUrl = `${SITE_ORIGIN.replace(/\/$/, "")}/sitemap.xml`;
const robots = `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`;

writeFileSync(resolve(baseDir, "sitemap.xml"), sitemap, "utf8");
writeFileSync(resolve(baseDir, "robots.txt"), robots, "utf8");
console.log("Wrote public/sitemap.xml and public/robots.txt");
