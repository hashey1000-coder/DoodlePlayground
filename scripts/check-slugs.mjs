import { readFileSync } from 'fs';
const src = readFileSync('client/src/data/games.ts','utf8');

// Count slug occurrences
const slugs = [...src.matchAll(/slug:\s*'([^']+)'/g)].map(m=>m[1]);
console.log('Total slug matches:', slugs.length);
const unique = [...new Set(slugs)];
console.log('Unique slugs:', unique.length);

// Check what the old regex missed
const re = /\{\s*id:\s*'[^']+',\s*slug:\s*'([^']+)',\s*title:\s*'([^']*(?:\\'[^']*)*)',\s*description:\s*'([^']*(?:\\'[^']*)*)',/g;
const found = [];
let m;
while ((m = re.exec(src))) found.push(m[1]);
console.log('Old regex found:', found.length);
const missed = unique.filter(s => !found.includes(s));
console.log('Missed slugs:', missed);

// Let's also look at a missed game's format
for (const slug of missed.slice(0, 3)) {
  const idx = src.indexOf(`slug: '${slug}'`);
  if (idx > -1) {
    const start = Math.max(0, idx - 50);
    const end = Math.min(src.length, idx + 300);
    console.log(`\n--- ${slug} context ---`);
    console.log(src.slice(start, end));
  }
}
