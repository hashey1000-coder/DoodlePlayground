/**
 * IndexNow submitter for Bing
 * ─────────────────────────────────────────────────────────────────────────────
 * SETUP (one-time):
 *   1. Generate a key at https://www.bing.com/indexnow (free, instant)
 *   2. Set it in your environment:  INDEXNOW_KEY=<your-key>
 *      — or create a .env file with: INDEXNOW_KEY=<your-key>
 *   3. Place a verification file at client/public/<your-key>.txt
 *      containing just the key as plain text (Bing fetches it to verify ownership)
 *      e.g. echo "abc123" > client/public/abc123.txt
 *
 * USAGE:
 *   node scripts/indexnow.mjs           # submit new URLs since last run
 *   node scripts/indexnow.mjs --all     # force re-submit everything
 *   pnpm run indexnow
 *
 * HOW IT WORKS:
 *   - Reads games.ts to extract all current slugs (same as generate-sitemap.mjs)
 *   - Compares against .indexnow-state.json (last submitted state)
 *   - Submits only NEW paths (all 20 locale variants each) to Bing IndexNow
 *   - Updates state file so next run only submits genuinely new content
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ── Load .env if present (simple key=value parser, no extra deps needed) ────
const envPath = resolve(ROOT, '.env');
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.+?)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^['"]|['"]$/g, '');
  }
}

// ── Config ───────────────────────────────────────────────────────────────────
const BASE_URL      = 'https://doodleplayground.com';
const HOST          = 'doodleplayground.com';
const INDEXNOW_KEY  = process.env.INDEXNOW_KEY;
const STATE_FILE    = resolve(ROOT, '.indexnow-state.json');
const FORCE_ALL     = process.argv.includes('--all');
const INDEXNOW_API  = 'https://api.indexnow.org/IndexNow';
const BATCH_SIZE    = 10_000; // IndexNow max per request

if (!INDEXNOW_KEY) {
  console.error('❌  INDEXNOW_KEY is not set.');
  console.error('   Set it via environment variable or add INDEXNOW_KEY=<key> to your .env file.');
  console.error('   Generate a free key at https://www.bing.com/indexnow');
  process.exit(1);
}

// ── Locales (must match SUPPORTED_LOCALES in LanguageContext.tsx + generate-sitemap.mjs) ──
const LOCALES = [
  'en', 'es', 'fr', 'de', 'it', 'pt', 'ru',
  'zh-CN', 'zh-TW', 'ja', 'ko', 'ar', 'hi',
  'tr', 'nl', 'pl', 'sv', 'id', 'vi', 'th',
];

// ── Static paths (must match App.tsx routes + generate-sitemap.mjs) ──────────
const STATIC_PATHS = [
  '/', '/games', '/top-rated', '/daily',
  '/about', '/contact', '/privacy',
];

// ── Extract game slugs from games.ts (same regex as generate-sitemap.mjs) ────
const gamesTs   = readFileSync(resolve(ROOT, 'client/src/data/games.ts'), 'utf8');
const slugs     = [...gamesTs.matchAll(/slug:\s*['"`]([^'"`]+)['"`]/g)].map((m) => m[1]);
const GAME_PATHS = slugs.map((s) => `/play/${s}`);

const ALL_PATHS = [...STATIC_PATHS, ...GAME_PATHS];

// ── Build a full URL for locale + path ───────────────────────────────────────
function buildUrl(locale, path) {
  const withSlash = path.endsWith('/') ? path : `${path}/`;
  if (locale === 'en') return `${BASE_URL}${withSlash}`;
  return `${BASE_URL}/${locale}${withSlash === '/' ? '/' : withSlash}`;
}

// ── Load previous state ───────────────────────────────────────────────────────
let state = { submittedPaths: [], lastRun: null, totalSubmitted: 0 };
if (!FORCE_ALL && existsSync(STATE_FILE)) {
  state = JSON.parse(readFileSync(STATE_FILE, 'utf8'));
}
const submittedSet = new Set(state.submittedPaths ?? []);

// ── Diff: find paths not yet submitted ───────────────────────────────────────
const newPaths = FORCE_ALL
  ? ALL_PATHS
  : ALL_PATHS.filter((p) => !submittedSet.has(p));

if (newPaths.length === 0) {
  console.log('✅  No new URLs to submit — everything is already indexed.');
  console.log(`   Last run: ${state.lastRun ?? 'never'}`);
  console.log(`   Total submitted to date: ${state.totalSubmitted ?? 0}`);
  process.exit(0);
}

// ── Build the full URL list (all locale variants for each new path) ───────────
const urlList = newPaths.flatMap((path) => LOCALES.map((locale) => buildUrl(locale, path)));

console.log(`📋  ${newPaths.length} new path(s) → ${urlList.length} URLs to submit`);
if (newPaths.length <= 20) {
  newPaths.forEach((p) => console.log(`    + ${p}`));
} else {
  newPaths.slice(0, 5).forEach((p) => console.log(`    + ${p}`));
  console.log(`    … and ${newPaths.length - 5} more`);
}

// ── Submit in batches ─────────────────────────────────────────────────────────
let totalSubmitted = 0;

for (let i = 0; i < urlList.length; i += BATCH_SIZE) {
  const batch = urlList.slice(i, i + BATCH_SIZE);
  const body = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: batch,
  };

  let res;
  try {
    res = await fetch(INDEXNOW_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
    });
  } catch (err) {
    console.error(`❌  Network error: ${err.message}`);
    process.exit(1);
  }

  // IndexNow returns 200 or 202 on success
  if (res.status === 200 || res.status === 202) {
    totalSubmitted += batch.length;
    console.log(`✅  Batch ${Math.floor(i / BATCH_SIZE) + 1}: submitted ${batch.length} URLs (HTTP ${res.status})`);
  } else {
    const text = await res.text();
    let parsed = {};
    try { parsed = JSON.parse(text); } catch { /* not JSON */ }

    // Bing hasn't crawled the key file yet — this happens on the first deploy.
    // Treat as a soft warning: don't save state so all URLs are retried next time.
    if (parsed.errorCode === 'SiteVerificationNotCompleted') {
      console.warn('⚠️   Bing site verification is still pending (key file was just deployed).');
      console.warn('   URLs were NOT saved to state — they will be retried on the next deploy.');
      console.warn(`   Verify manually: https://${HOST}/${INDEXNOW_KEY}.txt`);
      process.exit(0);
    }

    console.error(`❌  Batch failed: HTTP ${res.status}`);
    console.error(`   Response: ${text}`);
    console.error('   Possible causes:');
    console.error('   - Key not found: ensure client/public/<key>.txt exists and is deployed');
    console.error('   - Invalid key format: must be 8–128 hex chars');
    process.exit(1);
  }
}

// ── Save updated state ────────────────────────────────────────────────────────
const updatedPaths = FORCE_ALL ? ALL_PATHS : [...submittedSet, ...newPaths];
const newState = {
  submittedPaths: updatedPaths,
  lastRun: new Date().toISOString(),
  totalSubmitted: (state.totalSubmitted ?? 0) + totalSubmitted,
  note: 'Auto-managed by scripts/indexnow.mjs — do not edit manually.',
};
writeFileSync(STATE_FILE, JSON.stringify(newState, null, 2), 'utf8');

console.log(`\n🎉  Done!  ${totalSubmitted} URL(s) submitted to Bing IndexNow`);
console.log(`   State saved → .indexnow-state.json`);
console.log(`   Lifetime total: ${newState.totalSubmitted} URLs`);
