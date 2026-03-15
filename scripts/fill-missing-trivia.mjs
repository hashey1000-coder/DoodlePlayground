#!/usr/bin/env node
/**
 * Fill missing trivia translations.
 *
 * For each locale file, reads the existing translated entries and adds any
 * slugs present in the English trivia.ts that are missing.  Missing entries
 * get the English text so the files are complete (99 entries).
 *
 * The useTriviaT hook already falls back to English, but having every key
 * in every locale file keeps the data consistent and makes it easy to see
 * which entries still need proper translation.
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TRIVIA_DIR = resolve(__dirname, '..', 'client', 'src', 'data', 'translations', 'trivia');
const EN_FILE   = resolve(__dirname, '..', 'client', 'src', 'data', 'trivia.ts');

// ── Parse English trivia ──────────────────────────────────────────────────
const enSrc = readFileSync(EN_FILE, 'utf-8');
/** @type {[string, string][]}  slug→text pairs in file order */
const enEntries = [...enSrc.matchAll(/'([^']+)':\s*'((?:[^'\\]|\\.)*)'/g)]
  .map(m => [m[1], m[2].replace(/\\'/g, "'").replace(/\\\\/g, '\\')]);
console.log(`English trivia: ${enEntries.length} entries\n`);

// ── Process each locale file ──────────────────────────────────────────────
const files = readdirSync(TRIVIA_DIR).filter(f => f.endsWith('.ts')).sort();

for (const file of files) {
  const locale = file.replace('.ts', '');
  const filePath = resolve(TRIVIA_DIR, file);
  const src = readFileSync(filePath, 'utf-8');

  // Extract the export name  e.g.  ES_TRIVIA
  const exportMatch = src.match(/export const (\w+)/);
  if (!exportMatch) { console.log(`⚠️  ${file} — no export found, skipping`); continue; }
  const exportName = exportMatch[1];

  // Parse existing translated entries
  const existing = new Map(
    [...src.matchAll(/'([^']+)':\s*'((?:[^'\\]|\\.)*)'/g)]
      .map(m => [m[1], m[2]])
  );

  // Build the merged set: keep translated value when present, use English otherwise
  let added = 0;
  const lines = [`export const ${exportName}: Record<string, string> = {`];
  for (const [slug, enText] of enEntries) {
    const escaped = (str) => str.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    if (existing.has(slug)) {
      lines.push(`  '${slug}': '${existing.get(slug)}',`);
    } else {
      lines.push(`  '${slug}': '${escaped(enText)}',`);
      added++;
    }
  }
  lines.push('};\n');

  writeFileSync(filePath, lines.join('\n'), 'utf-8');
  console.log(`${added > 0 ? '✅' : '✓ '} ${file}: ${enEntries.length} entries (${added} filled from English)`);
}

console.log('\nDone — all locale files now have complete trivia entries.');
