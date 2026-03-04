/**
 * add-and-translate-controls.mjs
 *
 * 1) Reads all game controls from games.ts
 * 2) Translates each unique control string using Google Translate API
 * 3) Inserts translated controls field into each locale file
 *
 * Run: node scripts/add-and-translate-controls.mjs
 */

import translate from 'google-translate-api-x';
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

// ── 1. Extract controls from games.ts ───────────────────────────────────
const gamesSource = readFileSync(resolve('client/src/data/games.ts'), 'utf-8');
const slugControlsRe = /slug:\s*'([^']+)'[\s\S]*?controls:\s*'((?:[^'\\]|\\.)*)'/g;
const CONTROLS = {};
let m;
while ((m = slugControlsRe.exec(gamesSource)) !== null) {
  CONTROLS[m[1]] = m[2].replace(/\\'/g, "'").replace(/\\\\/g, '\\');
}
console.log(`Found ${Object.keys(CONTROLS).length} games with controls`);

// Deduplicate
const uniqueControls = new Map();
for (const [slug, ctrl] of Object.entries(CONTROLS)) {
  if (!uniqueControls.has(ctrl)) uniqueControls.set(ctrl, []);
  uniqueControls.get(ctrl).push(slug);
}
console.log(`Unique control strings: ${uniqueControls.size}\n`);

// ── 2. Locales ──────────────────────────────────────────────────────────
const LOCALES = [
  { code: 'es', gtCode: 'es' },
  { code: 'fr', gtCode: 'fr' },
  { code: 'de', gtCode: 'de' },
  { code: 'it', gtCode: 'it' },
  { code: 'pt', gtCode: 'pt' },
  { code: 'ru', gtCode: 'ru' },
  { code: 'ar', gtCode: 'ar' },
  { code: 'hi', gtCode: 'hi' },
  { code: 'tr', gtCode: 'tr' },
  { code: 'nl', gtCode: 'nl' },
  { code: 'pl', gtCode: 'pl' },
  { code: 'sv', gtCode: 'sv' },
  { code: 'id', gtCode: 'id' },
  { code: 'vi', gtCode: 'vi' },
  { code: 'th', gtCode: 'th' },
  { code: 'zh-CN', gtCode: 'zh-CN' },
  { code: 'zh-TW', gtCode: 'zh-TW' },
  { code: 'ja', gtCode: 'ja' },
  { code: 'ko', gtCode: 'ko' },
];

// ── 3. Translation helpers ──────────────────────────────────────────────
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function translateText(text, targetLang) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const result = await translate(text, { to: targetLang, autoCorrect: false });
      return result.text;
    } catch (err) {
      if (attempt < 2) {
        await sleep(2000 * (attempt + 1));
      } else {
        console.error(`    FAILED for ${targetLang}: ${err.message}`);
        return null;
      }
    }
  }
}

function escapeForTS(str) {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

// ── 4. Process each locale ──────────────────────────────────────────────
async function processLocale(localeCode, gtCode) {
  const translationsDir = resolve('client/src/data/translations');
  const filePath = resolve(translationsDir, `${localeCode}.ts`);
  let content = readFileSync(filePath, 'utf-8');

  // First, translate all unique controls
  const translationMap = new Map();
  const entries = [...uniqueControls.entries()];

  for (let i = 0; i < entries.length; i += 5) {
    const batch = entries.slice(i, i + 5);
    const results = await Promise.all(
      batch.map(([text]) => translateText(text, gtCode))
    );
    batch.forEach(([text], idx) => {
      translationMap.set(text, results[idx] || text);
    });
    if (i + 5 < entries.length) await sleep(200);
  }

  // Now insert controls fields into the file
  // Strategy: for each slug that has controls, find its description line
  // and add a controls line after it
  let count = 0;
  for (const [slug, englishControls] of Object.entries(CONTROLS)) {
    const translated = translationMap.get(englishControls) || englishControls;
    const escaped = escapeForTS(translated);

    // Match pattern: 'slug': {\n    title: '...',\n    description: '...',\n  },
    // We need to insert controls after description
    const slugEsc = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // Find the description line for this slug and add controls after it
    const re = new RegExp(
      `('${slugEsc}':\\s*\\{\\s*\\n\\s*title:\\s*'[\\s\\S]*?description:\\s*'(?:[^'\\\\]|\\\\.)*',)(\\s*\\n\\s*\\},)`
    );

    if (re.test(content)) {
      content = content.replace(re, `$1\n    controls: '${escaped}',$2`);
      count++;
    }
  }

  writeFileSync(filePath, content, 'utf-8');
  return count;
}

// ── 5. Main ─────────────────────────────────────────────────────────────
async function main() {
  console.log('Translating and inserting controls...\n');

  for (const { code, gtCode } of LOCALES) {
    process.stdout.write(`  ${code}: `);
    const count = await processLocale(code, gtCode);
    console.log(`✓ ${count} controls`);
  }

  console.log('\n✅ Done! Verifying...\n');

  // Verify
  const translationsDir = resolve('client/src/data/translations');
  for (const { code } of LOCALES) {
    const filePath = resolve(translationsDir, `${code}.ts`);
    const content = readFileSync(filePath, 'utf-8');
    const controlsCount = (content.match(/controls:/g) || []).length;
    console.log(`  ${code}: ${controlsCount} controls`);
  }
}

main().catch(console.error);
