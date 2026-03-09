/**
 * Build-time script that fetches elgoog.im game pages and generates
 * static HTML files with auto-play injection.
 *
 * elgoog.im pages show a landing article page with a "Play the Easter Egg Now!"
 * CTA button before the actual game. Since the games load in cross-origin iframes,
 * we can't click that button from the client. Instead, we:
 *
 * 1. Fetch each elgoog page at build time
 * 2. Add <base href="https://elgoog.im/"> so all assets still load from their CDN
 * 3. Fix Cloudflare rocket-loader script type obfuscation
 * 4. Remove CF challenge/analytics scripts that won't work from our domain
 * 5. Inject a script that auto-clicks the CTA button on page load
 * 6. Save as static HTML in dist/public/elgoog/<game>/index.html
 *
 * The iframe in PlayGame.tsx loads /elgoog/<game>/ which serves our modified page,
 * and the game starts immediately without any extra user interaction.
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve } from "path";

const DIST_DIR = resolve("dist/public/elgoog");

// Extract all elgoog.im paths from games.ts
const gamesSource = readFileSync("client/src/data/games.ts", "utf-8");
const elgoogMatches = [
  ...gamesSource.matchAll(/https?:\/\/elgoog\.im\/([^"'\s]+)/g),
];
const uniquePaths = [
  ...new Set(elgoogMatches.map((m) => m[1].replace(/\/+$/, ""))),
];

if (uniquePaths.length === 0) {
  console.log("ℹ No elgoog.im games found in games.ts — skipping.");
  process.exit(0);
}

console.log(`\n🎮 Fetching ${uniquePaths.length} elgoog.im game pages…`);

/**
 * Transforms raw elgoog.im HTML into a self-contained page that auto-starts
 * the game without requiring the user to click the CTA button.
 */
function transformHtml(html, gamePath) {
  // 1. Add <base> tag so all relative URLs (CSS, JS, images, audio) resolve to elgoog.im
  html = html.replace("<head>", '<head>\n<base href="https://elgoog.im/">');

  // 2. Fix Cloudflare Rocket Loader: it changes type="text/javascript" to
  //    type="<hex>-text/javascript" to defer loading through their optimizer.
  //    Since we're serving from our own domain, restore the original types.
  html = html.replace(
    /type="[a-f0-9]+-text\/javascript"/g,
    'type="text/javascript"'
  );
  html = html.replace(/type="[a-f0-9]+-module"/g, 'type="module"');

  // 3. Remove Cloudflare scripts that won't work from our domain
  html = html.replace(/<script[^>]*rocket-loader[^>]*><\/script>/g, "");
  html = html.replace(/<script[^>]*data-cf-settings[^>]*><\/script>/g, "");

  // 4. Remove CF challenge iframe script (creates a hidden iframe for bot detection)
  html = html.replace(
    /<script>\(function\(\)\{function c\(\)\{var b=a\.contentDocument.*?<\/script>/gs,
    ""
  );

  // 5. Inject pathname fix so elgoog's JS can identify which game to initialize
  const pathFixScript = `
<script>
try { history.replaceState(null, '', '/${gamePath}/'); } catch(e) {}
</script>`;

  html = html.replace("</body>", pathFixScript + "\n</body>");

  // 6. Auto-click the CTA "Play" button so the game starts immediately.
  //    elgoog pages show a landing article first; clicking the CTA scrolls
  //    to the game viewport and initialises it.  We retry because elgoog's
  //    main.min.js attaches the click handler asynchronously.
  const autoPlayScript = `
<script>
(function(){
  var tries=0;
  function go(){
    var btn=document.querySelector('.easter-egg-CTA__button');
    if(btn){btn.click();return;}
    if(++tries<20) setTimeout(go,150);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',function(){setTimeout(go,200);});
  else setTimeout(go,200);
})();
</script>`;

  html = html.replace("</body>", autoPlayScript + "\n</body>");

  return html;
}

/**
 * Fetch a single elgoog.im page, transform it, and write to disk.
 */
async function fetchAndSave(gamePath) {
  const url = `https://elgoog.im/${gamePath}/`;

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

  const outDir = resolve(DIST_DIR, gamePath);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, "index.html"), html, "utf-8");

  return true;
}

// Fetch sequentially to avoid rate-limiting from Cloudflare
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
  `\n✅ Generated ${succeeded} elgoog auto-play pages` +
    (failed ? ` (${failed} failed)` : "") +
    `\n   Output: ${DIST_DIR}\n`
);
