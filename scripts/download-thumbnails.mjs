/**
 * Downloads missing game thumbnails from various sources.
 *
 * Sources (priority order):
 * 1. Direct verified image URLs (OG images from elgoog.im, Google Doodle archive)
 * 2. Wayback Machine archived images (2012 Olympics)
 * 3. thum.io screenshot API (live pages: FBX games, misc)
 * 4. SVG placeholder generation (absolute last resort)
 *
 * Run: node scripts/download-thumbnails.mjs
 */

import { writeFileSync, existsSync, mkdirSync, readFileSync } from "fs";
import { resolve } from "path";

const THUMB_DIR = resolve("client/public/thumbnails");
mkdirSync(THUMB_DIR, { recursive: true });

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

// ── 1. Direct verified image URLs ──────────────────────────────────────────
const DIRECT_URLS = {
  // elgoog.im OG images
  "zerg-rush.webp": "https://elgoog.im/assets/p/zergrush/zerg-rush-google.jpg",
  "atari-breakout.webp": "https://elgoog.im/assets/p/breakout/google-atari-breakout.jpg",
  "google-gravity.webp": "https://elgoog.im/assets/p/gravity/google-gravity.png",
  "thanos-snap.webp": "https://elgoog.im/assets/p/thanos/thanos-infinity-gauntlet-snap-google-trick.jpg",
  "super-mario-coin-block.webp": "https://elgoog.im/assets/img/google-mario-easter-egg.jpg",
  "google-mirror.webp": "https://elgoog.im/assets/p/google-mirror/elgoog.png",
  "google-in-1998.webp": "https://elgoog.im/assets/p/google1998/google-in-1998.png",
  "do-a-barrel-roll.webp": "https://elgoog.im/assets/p/doabarrelroll/doabarrelroll.jpg",
  "google-askew.webp": "https://elgoog.im/assets/p/tilt/google-tilt.jpg",
  "google-underwater.webp": "https://elgoog.im/assets/p/underwater/img/google-underwater-search.png",
  "google-space.webp": "https://elgoog.im/assets/p/floating/floating-google.jpg",
  "google-tetris.webp": "https://elgoog.im/assets/p/tetris/google-tetris-elgoog.png",
  "google-2048.webp": "https://elgoog.im/assets/p/2048/2048-game.png",
  "google-maps-pac-man.webp": "https://elgoog.im/assets/p/pacman/google-pacman.png",

  // Google Doodle images (verified)
  "celebrating-chilaquiles.webp": "https://www.google.com/logos/doodles/2024/celebrating-chilaquiles-6753651837110223-2xa.gif",
  "house-music.webp": "https://www.google.com/logos/doodles/2025/celebrating-house-music-6753651837110601.2-2xa.gif",
  "hyperpop.webp": "https://www.google.com/logos/doodles/2025/celebrating-hyperpop-6753651837110744.2-2xa.gif",
  "valentines-day-chemistry.webp": "https://www.google.com/logos/doodles/2024/valentines-day-2024-6753651837110186-2xa.gif",
  "dragon-boat-festival.webp": "https://www.google.com/logos/doodles/2024/dragon-boat-festival-2024-6753651837110449-2xa.gif",
  "holi-2019.webp": "https://www.google.com/logos/doodles/2019/holi-2019-5084538337230848-2x.png",
  "indigenous-stickball.webp": "https://www.google.com/logos/doodles/2022/celebrating-stickball-6753651837109530-2x.png",
  "marie-tharp.webp": "https://www.google.com/logos/doodles/2022/celebrating-marie-tharp-6753651837109820-2xa.gif",
  "doodle-fruit-games.webp": "https://www.google.com/logos/doodles/2016/2016-doodle-fruit-games-day-1-5714532771037184.3-hp2x.png",
  "rugby-world-cup-2015.webp": "https://www.google.com/logos/doodles/2015/rugby-world-cup-2015-opening-day-6330768880041984-hp2x.gif",
};

// ── 2. Wayback Machine archived images ────────────────────────────────────
const WAYBACK_URLS = {
  "swimming-2012.webp": "https://web.archive.org/web/2012/https://www.google.com/logos/2012/swimming-2012-hp.jpg",
  "fencing-2012.webp": "https://web.archive.org/web/2012/https://www.google.com/logos/2012/fencing-2012-hp.jpg",
  "javelin-2012.webp": "https://web.archive.org/web/2012/https://www.google.com/logos/2012/javelin-2012-hp.jpg",
  "table-tennis-2012.webp": "https://web.archive.org/web/2012/https://www.google.com/logos/2012/table_tennis-2012-hp.jpg",
};

// ── 3. Screenshot URLs (thum.io) for live pages ───────────────────────────
const SCREENSHOT_URLS = {
  // Google FBX games
  "google-solitaire.webp": "https://image.thum.io/get/width/600/https://www.google.com/fbx?fbx=solitaire",
  "google-spider-solitaire.webp": "https://image.thum.io/get/width/600/https://www.google.com/fbx?fbx=spider_solitaire",
  "google-freecell.webp": "https://image.thum.io/get/width/600/https://www.google.com/fbx?fbx=freecell",
  "google-cricket.webp": "https://image.thum.io/get/width/600/https://www.google.com/fbx?fbx=cricket",
  "google-memory.webp": "https://image.thum.io/get/width/600/https://www.google.com/fbx?fbx=memory",
  "google-ludo.webp": "https://image.thum.io/get/width/600/https://www.google.com/fbx?fbx=ludo",
  "google-word-coach.webp": "https://image.thum.io/get/width/600/https://www.google.com/fbx?fbx=word_coach",
  "google-spinner.webp": "https://image.thum.io/get/width/600/https://www.google.com/fbx?fbx=spinner",
  "google-coin-flip.webp": "https://image.thum.io/get/width/600/https://www.google.com/fbx?fbx=coin_flip",
  "google-dice-roller.webp": "https://image.thum.io/get/width/600/https://www.google.com/fbx?fbx=roll_a_die",
  "google-timer.webp": "https://image.thum.io/get/width/600/https://www.google.com/fbx?fbx=timer",
  "google-metronome.webp": "https://image.thum.io/get/width/600/https://www.google.com/fbx?fbx=metronome",
  "google-whirlybird.webp": "https://image.thum.io/get/width/600/https://www.google.com/fbx?fbx=flappy_bird",

  // elgoog.im games that had failed OG images
  "friends-easter-eggs.webp": "https://image.thum.io/get/width/600/https://elgoog.im/friends/phoebe/",

  // Google Doodle games (screenshot live pages)
  "gerald-lawson.webp": "https://image.thum.io/get/width/600/https://doodles.google/doodle/celebrating-gerald-jerry-lawson/",
  "rise-of-the-half-moon.webp": "https://image.thum.io/get/width/600/https://www.google.com/logos/2024/halfmoon_nov/rc3/halfmoon_nov.html",
  "copa-america-2024.webp": "https://image.thum.io/get/width/600/https://doodles.google/doodle/copa-america-2024/",
  "salsa-music.webp": "https://image.thum.io/get/width/600/https://doodles.google/doodle/celebrating-salsa/",
  "halloween-pac-man.webp": "https://image.thum.io/get/width/600/https://www.google.com/logos/2024/halloween24/rc3/halloween24.html",

  // 2012 Olympics (screenshot from elgoog mirrors or doodle pages)
  "tennis-2012.webp": "https://image.thum.io/get/width/600/https://www.google.com/logos/2012/tennis-2012-hp.html",
  "archery-2012.webp": "https://image.thum.io/get/width/600/https://www.google.com/logos/2012/archery-2012-hp.html",
  "long-jump-2012.webp": "https://image.thum.io/get/width/600/https://www.google.com/logos/2012/long_jump-2012-hp.html",
  "high-jump-2012.webp": "https://image.thum.io/get/width/600/https://www.google.com/logos/2012/high_jump-2012-hp.html",
  "cycling-2012.webp": "https://image.thum.io/get/width/600/https://www.google.com/logos/2012/cycling-2012-hp.html",
  "volleyball-2012.webp": "https://image.thum.io/get/width/600/https://www.google.com/logos/2012/volleyball-2012-hp.html",

  // Misc
  "minecraft-easter-egg.webp": "https://image.thum.io/get/width/600/https://classic.minecraft.net/",
  "festivus-pole.webp": "https://image.thum.io/get/width/600/https://www.google.com/search?q=festivus",
  "hollow-knight-slash.webp": "https://image.thum.io/get/width/600/https://www.google.com/search?q=hollow+knight+silksong",
  "inside-out-memory-orbs.webp": "https://image.thum.io/get/width/600/https://www.google.com/search?q=inside+out+2",
  "dvd-screensaver.webp": "https://image.thum.io/get/width/600/https://www.google.com/search?q=dvd+screensaver",
};

// ── OG image fallback pages ──
const OG_PAGES = {
  "google-interland.webp": "https://beinternetawesome.withgoogle.com/en_us/interland",
  "google-arts-culture.webp": "https://artsandculture.google.com/",
  "google-teachable-machine.webp": "https://teachablemachine.withgoogle.com/train",
  "google-science-journal.webp": "https://sciencejournal.withgoogle.com/",
};

// ──────────────────────────────────────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────────────────────────────────────

async function download(url, destPath) {
  try {
    const resp = await fetch(url, {
      headers: { "User-Agent": UA, Accept: "image/*,*/*" },
      redirect: "follow",
    });
    if (!resp.ok) return false;
    const buf = Buffer.from(await resp.arrayBuffer());
    // SVG placeholder check: skip if it looks like our own SVG
    if (buf.length < 500 || buf.toString("utf-8", 0, 20).includes("<svg")) return false;
    writeFileSync(destPath, buf);
    return true;
  } catch {
    return false;
  }
}

async function downloadScreenshot(url, destPath) {
  try {
    // thum.io can be slow, give it 30s
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000);
    const resp = await fetch(url, {
      headers: { "User-Agent": UA },
      redirect: "follow",
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!resp.ok) return false;
    const buf = Buffer.from(await resp.arrayBuffer());
    if (buf.length < 1000) return false; // too small
    writeFileSync(destPath, buf);
    return true;
  } catch {
    return false;
  }
}

async function fetchOgImage(pageUrl) {
  try {
    const resp = await fetch(pageUrl, {
      headers: { "User-Agent": UA, Accept: "text/html" },
      redirect: "follow",
    });
    if (!resp.ok) return null;
    const html = await resp.text();
    for (const pat of [
      /property="og:image"\s+content="([^"]+)"/,
      /content="([^"]+)"\s+property="og:image"/,
    ]) {
      const m = html.match(pat);
      if (m && !m[1].includes("marketing-cms")) return m[1];
    }
  } catch {}
  return null;
}

function generatePlaceholder(filename) {
  const title = filename
    .replace(/\.(webp|png|jpg|gif)$/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  let hash = 0;
  for (const c of title) hash = (hash * 31 + c.charCodeAt(0)) & 0xffffff;
  const hue = hash % 360;

  const lower = title.toLowerCase();
  let emoji = "\u{1F3AE}";
  if (lower.includes("solitaire") || lower.includes("freecell")) emoji = "\u{1F0CF}";
  else if (lower.includes("cricket")) emoji = "\u{1F3CF}";
  else if (lower.includes("memory") || lower.includes("inside out")) emoji = "\u{1F9E0}";
  else if (lower.includes("ludo") || lower.includes("dice")) emoji = "\u{1F3B2}";
  else if (lower.includes("coin")) emoji = "\u{1FA99}";
  else if (lower.includes("spinner")) emoji = "\u{1F300}";
  else if (lower.includes("timer")) emoji = "\u23F1\uFE0F";
  else if (lower.includes("metronome") || lower.includes("music") || lower.includes("salsa") || lower.includes("pop")) emoji = "\u{1F3B5}";
  else if (lower.includes("word")) emoji = "\u{1F4DD}";
  else if (lower.includes("whirly") || lower.includes("flappy")) emoji = "\u{1F426}";
  else if (lower.includes("swimming")) emoji = "\u{1F3CA}";
  else if (lower.includes("fencing")) emoji = "\u{1F93A}";
  else if (lower.includes("tennis")) emoji = "\u{1F3BE}";
  else if (lower.includes("archery")) emoji = "\u{1F3F9}";
  else if (lower.includes("jump") || lower.includes("javelin")) emoji = "\u{1F3C3}";
  else if (lower.includes("cycling")) emoji = "\u{1F6B4}";
  else if (lower.includes("volleyball")) emoji = "\u{1F3D0}";
  else if (lower.includes("rugby")) emoji = "\u{1F3C9}";
  else if (lower.includes("halloween") || lower.includes("pac")) emoji = "\u{1F47B}";
  else if (lower.includes("minecraft")) emoji = "\u26CF\uFE0F";
  else if (lower.includes("dvd")) emoji = "\u{1F4C0}";
  else if (lower.includes("hollow")) emoji = "\u2694\uFE0F";
  else if (lower.includes("festivus")) emoji = "\u{1F384}";
  else if (lower.includes("science")) emoji = "\u{1F52C}";
  else if (lower.includes("arts") || lower.includes("holi")) emoji = "\u{1F3A8}";
  else if (lower.includes("valentine") || lower.includes("chemistry")) emoji = "\u2764\uFE0F";
  else if (lower.includes("fruit")) emoji = "\u{1F353}";
  else if (lower.includes("moon")) emoji = "\u{1F319}";
  else if (lower.includes("copa") || lower.includes("football")) emoji = "\u26BD";
  else if (lower.includes("dragon") || lower.includes("boat")) emoji = "\u{1F409}";
  else if (lower.includes("friends")) emoji = "\u{1F4FA}";
  else if (lower.includes("gerald") || lower.includes("lawson")) emoji = "\u{1F579}\uFE0F";
  else if (lower.includes("mario")) emoji = "\u{1F344}";
  else if (lower.includes("copa")) emoji = "\u26BD";
  else if (lower.includes("mirror")) emoji = "\u{1FA9E}";

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:hsl(${hue},65%,50%)"/>
      <stop offset="100%" style="stop-color:hsl(${(hue + 45) % 360},55%,35%)"/>
    </linearGradient>
  </defs>
  <rect width="400" height="300" rx="16" fill="url(#bg)"/>
  <text x="200" y="120" text-anchor="middle" font-size="64">${emoji}</text>
  <text x="200" y="175" text-anchor="middle" fill="white" font-family="system-ui,sans-serif" font-size="20" font-weight="bold">${escapeXml(title)}</text>
  <text x="200" y="205" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-family="system-ui,sans-serif" font-size="13">Google Game</text>
</svg>`;
  return Buffer.from(svg, "utf-8");
}

function escapeXml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function isPlaceholder(filePath) {
  if (!existsSync(filePath)) return true;
  const buf = readFileSync(filePath);
  return buf.length < 800 && buf.toString("utf-8", 0, 20).includes("<svg");
}

// ──────────────────────────────────────────────────────────────────────────────
// Main
// ──────────────────────────────────────────────────────────────────────────────

const gamesSource = readFileSync("client/src/data/games.ts", "utf-8");
const allThumbs = [
  ...new Set(
    [...gamesSource.matchAll(/thumbnail:\s*'\/thumbnails\/([^']+)'/g)].map(
      (m) => m[1]
    )
  ),
];

// Find thumbnails that are missing OR are SVG placeholders
const toFix = allThumbs.filter((f) => isPlaceholder(resolve(THUMB_DIR, f)));

if (toFix.length === 0) {
  console.log("\u2705 All thumbnails are real images!");
  process.exit(0);
}

console.log(`\n\u{1F5BC}  ${toFix.length} thumbnails to fix (missing or placeholder)\u2026\n`);

let downloaded = 0;
let screenshots = 0;
let ogImages = 0;
let placeholders = 0;

for (const filename of toFix) {
  const dest = resolve(THUMB_DIR, filename);

  // ── 1. Direct verified URL ──
  if (DIRECT_URLS[filename]) {
    if (await download(DIRECT_URLS[filename], dest)) {
      console.log(`  \u2713 ${filename} (direct)`);
      downloaded++;
      continue;
    }
  }

  // ── 2. Wayback Machine ──
  if (WAYBACK_URLS[filename]) {
    if (await download(WAYBACK_URLS[filename], dest)) {
      console.log(`  \u2713 ${filename} (wayback)`);
      downloaded++;
      continue;
    }
  }

  // ── 3. OG image from page ──
  if (OG_PAGES[filename]) {
    const ogUrl = await fetchOgImage(OG_PAGES[filename]);
    if (ogUrl && (await download(ogUrl, dest))) {
      console.log(`  \u2713 ${filename} (og)`);
      ogImages++;
      continue;
    }
  }

  // ── 4. Screenshot via thum.io ──
  if (SCREENSHOT_URLS[filename]) {
    console.log(`  \u2B6F ${filename} (screenshotting\u2026)`);
    if (await downloadScreenshot(SCREENSHOT_URLS[filename], dest)) {
      console.log(`  \u2713 ${filename} (screenshot)`);
      screenshots++;
      continue;
    } else {
      console.log(`  \u26A0 ${filename} screenshot failed`);
    }
  }

  // ── 5. Placeholder as last resort ──
  writeFileSync(dest, generatePlaceholder(filename));
  console.log(`  \u2B21 ${filename} (placeholder)`);
  placeholders++;
}

console.log(
  `\n\u2705 Done: ${downloaded} direct, ${screenshots} screenshots, ${ogImages} OG images, ${placeholders} placeholders\n` +
    `   Output: ${THUMB_DIR}\n`
);
