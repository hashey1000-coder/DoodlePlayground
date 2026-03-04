/**
 * Build-time script that fetches Google Doodle game pages and generates
 * static HTML files with iframe-embedding fixes.
 *
 * Google added CSP frame-ancestors to all /logos/ pages, blocking iframe embedding.
 * This script pre-fetches each page at build time and applies the same transformations
 * as the live proxy in server/index.ts:
 *
 * 1. Fetch each doodle page from google.com/logos/...
 * 2. Add <base href> so all assets still load from Google's CDN
 * 3. Inject fullscreen CSS/JS to make older games fill the iframe
 * 4. Rewrite /logos/ and /search? paths to full Google URLs
 * 5. Save as static HTML in dist/public/google-doodle/<path>
 *
 * The iframe in PlayGame.tsx loads /google-doodle/<path> which serves our
 * modified page without the restrictive CSP headers.
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";

const DIST_DIR = resolve("dist/public/google-doodle");

// Extract all /google-doodle/ paths from games.ts
const gamesSource = readFileSync("client/src/data/games.ts", "utf-8");
const doodleMatches = [
  ...gamesSource.matchAll(/\/google-doodle\/([^"'\s]+)/g),
];
const uniquePaths = [
  ...new Set(doodleMatches.map((m) => m[1].replace(/\/+$/, ""))),
];

if (uniquePaths.length === 0) {
  console.log("ℹ No google-doodle games found in games.ts — skipping.");
  process.exit(0);
}

console.log(`\n🎨 Fetching ${uniquePaths.length} Google Doodle game pages…`);

/**
 * Transforms raw Google Doodle HTML so it can be embedded in an iframe
 * on our domain without CSP or sizing issues.
 */
function transformHtml(html, gamePath) {
  // Normalize: if the path has no file extension, append .html
  const lastSegment = gamePath.split("/").pop() || "";
  if (!lastSegment.includes(".")) gamePath += ".html";

  // 1. Add <base> tag so all relative URLs resolve to the game's directory on Google
  const baseDir = gamePath.substring(0, gamePath.lastIndexOf("/") + 1);
  const baseTag = `<base href="https://www.google.com/logos/${baseDir}">`;
  if (html.includes("<head>")) {
    html = html.replace("<head>", `<head>\n${baseTag}`);
  } else if (html.includes("<html")) {
    html = html.replace(/<html([^>]*)>/, `<html$1>\n<head>${baseTag}</head>`);
  } else {
    html = `<head>${baseTag}</head>\n${html}`;
  }

  // 2. Inject fullscreen CSS + JS to make older games fill the entire iframe.
  //    Older doodles (pre-2017) only have #fpdoodle styles for full-page mode,
  //    but when embedded in an iframe they set id="sdoodles" on <html>.
  //    We force id="fpdoodle" and add universal fullscreen overrides.
  const fullscreenStyle = `<style>html,body{margin:0;padding:0;width:100%;height:100%;overflow:hidden;background:#000}#hplogo{width:100%!important;height:100%!important;max-width:100vw!important;max-height:100vh!important}#hplogo canvas,#hpcanvas{width:100%!important;height:100%!important}#ctaRoot{opacity:1!important;pointer-events:auto!important}</style>`;
  const fullscreenScript = `<script>document.documentElement.id='fpdoodle';</script>`;
  if (html.includes("</head>")) {
    html = html.replace("</head>", fullscreenStyle + fullscreenScript + "</head>");
  } else {
    html = html.replace("</body>", fullscreenStyle + fullscreenScript + "</body>");
  }

  // 3. Rewrite ALL /logos/ absolute paths to full Google URLs.
  //    CSS url(), dynamically-created script.src, and other references to
  //    /logos/... would otherwise resolve to localhost and 404.
  html = html.replace(/(["'(=])\/(logos\/)/g, "$1https://www.google.com/$2");

  // 4. Rewrite /search?q= links to full Google URLs so they don't
  //    navigate the iframe to our site.
  html = html.replace(/(["'(=])\/search\?/g, "$1https://www.google.com/search?");

  // 5. Inject auto-click CTA script so doodle games auto-start.
  //    Some doodles (e.g. Marie Tharp) show a CTA overlay that must be
  //    clicked before the game begins. Append at end of HTML since many
  //    older doodles lack a closing </body> tag.
  const autoClickCta = `<script>(function(){function c(){var e=document.getElementById('ctaCanvas');if(e){e.click();e.dispatchEvent(new MouseEvent('mousedown',{bubbles:true}));e.dispatchEvent(new MouseEvent('mouseup',{bubbles:true}));}else{var b=document.querySelector('#ctaRoot, .cta');if(b){b.click();}}}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){setTimeout(c,800);});}else{setTimeout(c,800);}})();</script>`;
  html += autoClickCta;

  return html;
}

/**
 * Fetch a single Google Doodle page, transform it, and write to disk.
 */
async function fetchAndSave(gamePath) {
  // Normalize extensionless paths for the fetch URL
  let fetchPath = gamePath;
  const lastSegment = fetchPath.split("/").pop() || "";
  if (!lastSegment.includes(".")) fetchPath += ".html";

  const url = `https://www.google.com/logos/${fetchPath}`;

  const resp = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Accept: "text/html,application/xhtml+xml",
      "Accept-Language": "en-US,en;q=0.9",
    },
  });

  if (!resp.ok) {
    console.warn(`  ⚠ Failed to fetch ${url} (HTTP ${resp.status})`);
    return false;
  }

  let html = await resp.text();
  html = transformHtml(html, gamePath);

  // Save at the exact path so /google-doodle/<gamePath> resolves correctly.
  // For paths like "2010/pacman10-i.html" → dist/public/google-doodle/2010/pacman10-i.html
  // For extensionless paths, save both as <name>.html and <name>/index.html
  const outPath = resolve(DIST_DIR, fetchPath);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html, "utf-8");

  // Also save as <name>/index.html for clean-URL support (npx serve strips .html)
  const nameWithoutExt = fetchPath.replace(/\.html$/, "");
  const indexPath = resolve(DIST_DIR, nameWithoutExt, "index.html");
  mkdirSync(dirname(indexPath), { recursive: true });
  writeFileSync(indexPath, html, "utf-8");

  return true;
}

// Fetch sequentially to avoid rate-limiting from Google
let succeeded = 0;
let failed = 0;

for (const gamePath of uniquePaths) {
  try {
    const ok = await fetchAndSave(gamePath);
    if (ok) {
      console.log(`  ✓ ${gamePath}`);
      succeeded++;
    } else {
      failed++;
    }
  } catch (err) {
    console.warn(`  ✗ ${gamePath}: ${err.message}`);
    failed++;
  }
}

console.log(
  `\n✅ Generated ${succeeded} Google Doodle proxy pages` +
    (failed ? ` (${failed} failed)` : "") +
    `\n   Output: ${DIST_DIR}\n`
);
