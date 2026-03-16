/**
 * clear-votes.mjs
 * Deletes all vote data from Firebase Realtime Database.
 *
 * Usage:
 *   node scripts/clear-votes.mjs
 *
 * Requires Node 18+ (uses native fetch).
 * Uses the RTDB REST API — no service account needed because the database
 * rules allow .write on each votes/$slug path.
 */

import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DB_URL = 'https://doodleplayground-41d6f-default-rtdb.firebaseio.com';

// Extract all slugs from games.ts using a simple regex
const gamesTs = readFileSync(join(__dirname, '../client/src/data/games.ts'), 'utf-8');
const slugs = [...gamesTs.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);

if (slugs.length === 0) {
  console.error('❌ No slugs found in games.ts. Aborting.');
  process.exit(1);
}

console.log(`Found ${slugs.length} game slugs. Clearing votes from RTDB...`);

let cleared = 0;
let skipped = 0;
let failed = 0;

for (const slug of slugs) {
  try {
    const res = await fetch(`${DB_URL}/votes/${encodeURIComponent(slug)}.json`, {
      method: 'DELETE',
    });
    if (res.ok) {
      cleared++;
      process.stdout.write(`\r  ${cleared + skipped + failed}/${slugs.length} processed...`);
    } else if (res.status === 404) {
      skipped++; // No data for this slug — already empty
      process.stdout.write(`\r  ${cleared + skipped + failed}/${slugs.length} processed...`);
    } else {
      console.warn(`\n  ⚠ Failed to delete votes/${slug}: HTTP ${res.status}`);
      failed++;
    }
  } catch (err) {
    console.warn(`\n  ⚠ Error deleting votes/${slug}:`, err.message);
    failed++;
  }
}

console.log(`\n✅ Done. Cleared: ${cleared}, Already empty: ${skipped}, Failed: ${failed}`);
console.log('   Users will see 0 likes on next page load (localStorage cache cleared automatically by the app).');
