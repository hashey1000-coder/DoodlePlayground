#!/usr/bin/env node
/**
 * Properly rewrite all description fields in games.ts.
 * 
 * Strategy: use git to restore the original games.ts first,
 * then apply descriptions properly.
 * 
 * Actually, we'll just parse the current (broken) file line by line,
 * rebuild each game entry, and replace the description field with
 * the correct version from EXPANDED in expand-descriptions.mjs.
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const GAMES_PATH = resolve(ROOT, 'client/src/data/games.ts');

// ─── Load expanded descriptions from expand-descriptions.mjs ───
// We dynamically import the EXPANDED object
const expandModule = resolve(__dirname, 'expand-descriptions.mjs');
const expandSrc = readFileSync(expandModule, 'utf8');

// Extract the EXPANDED object via eval
// Find the EXPANDED object in the source 
const expandStart = expandSrc.indexOf('const EXPANDED = {');
const expandEnd = findMatchingBrace(expandSrc, expandSrc.indexOf('{', expandStart));
const expandStr = expandSrc.slice(expandStart, expandEnd + 1);

// Execute it to get the object
let EXPANDED;
eval(expandStr.replace('const EXPANDED', 'EXPANDED'));

console.log(`Loaded ${Object.keys(EXPANDED).length} expanded descriptions`);

function findMatchingBrace(str, start) {
  let depth = 0;
  let inString = false;
  let stringChar = '';
  for (let i = start; i < str.length; i++) {
    const ch = str[i];
    if (inString) {
      if (ch === '\\') { i++; continue; } // skip escaped char
      if (ch === stringChar) inString = false;
      continue;
    }
    if (ch === "'" || ch === '"' || ch === '`') { inString = true; stringChar = ch; continue; }
    if (ch === '{') depth++;
    if (ch === '}') { depth--; if (depth === 0) return i; }
  }
  return -1;
}

// ─── Now process games.ts ───
// Strategy: we use git to get the original file, extract game slugs,
// then rebuild with correct descriptions.
// Actually, let's use a different approach: 
// find each slug line in games.ts, then find/replace the description field

let src = readFileSync(GAMES_PATH, 'utf8');

// For each game in EXPANDED, find its description field and replace it
let patchCount = 0;
for (const [slug, newDesc] of Object.entries(EXPANDED)) {
  // Find the slug in the source
  const slugPattern = `slug: '${slug}',`;
  const slugIdx = src.indexOf(slugPattern);
  if (slugIdx === -1) {
    console.warn(`  ⚠  Slug '${slug}' not found in games.ts`);
    continue;
  }
  
  // For duplicate slugs (google-pac-man), handle both
  let searchFrom = 0;
  while (true) {
    const idx = src.indexOf(slugPattern, searchFrom);
    if (idx === -1) break;
    
    // Find the description field after this slug
    // Look for "description: " within the next ~200 chars
    const searchEnd = idx + slugPattern.length + 2000;
    const descStart = src.indexOf('description: ', idx);
    
    if (descStart === -1 || descStart > searchEnd) {
      console.warn(`  ⚠  No description found near slug '${slug}'`);
      searchFrom = idx + slugPattern.length;
      continue;
    }
    
    // The description starts with description: ' or description: "
    const descFieldStart = descStart;
    const afterDesc = src.indexOf('description: ', descStart) + 'description: '.length;
    const quoteChar = src[afterDesc]; // ' or "
    
    // Find the end of the description value
    // We need to find the closing quote followed by a comma
    // Being careful about escaped quotes
    let i = afterDesc + 1; // skip opening quote
    while (i < src.length) {
      if (src[i] === '\\') { i += 2; continue; } // skip escaped chars
      if (src[i] === quoteChar) {
        // Check if followed by comma (possibly with whitespace)
        const afterQuote = src.slice(i + 1).trimStart();
        if (afterQuote[0] === ',') {
          // Found the end
          const commaIdx = src.indexOf(',', i + 1);
          break;
        }
        // Not followed by comma — might be an unescaped quote in middle (broken)
        // For broken files, we need to find the next field
      }
      i++;
    }
    
    // Alternative: find the description end by looking for the next field
    // Find the next field after description: category, thumbnail, etc.
    const nextFieldPattern = /\n\s+(category|thumbnail|iframeUrl|controls|difficulty|isNew|externalOnly|tags|rating|playCount):/;
    const afterDescSearch = src.slice(descFieldStart);
    const nextFieldMatch = nextFieldPattern.exec(afterDescSearch);
    
    if (!nextFieldMatch) {
      console.warn(`  ⚠  Cannot find end of description for slug '${slug}'`);
      searchFrom = idx + slugPattern.length;
      continue;
    }
    
    const descEndIdx = descFieldStart + nextFieldMatch.index;
    const oldDescField = src.slice(descFieldStart, descEndIdx);
    
    // Build new description field with proper escaping
    const escapedDesc = newDesc
      .replace(/\\/g, '\\\\')
      .replace(/'/g, "\\'")
      .replace(/\n/g, '\\n');
    
    const newDescField = `description: '${escapedDesc}',\n    `;
    
    src = src.slice(0, descFieldStart) + newDescField + src.slice(descEndIdx);
    patchCount++;
    
    // Update searchFrom for next occurrence of same slug
    searchFrom = descFieldStart + newDescField.length;
  }
}

writeFileSync(GAMES_PATH, src);
console.log(`\n✅ Patched ${patchCount} descriptions in games.ts`);
