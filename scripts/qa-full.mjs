#!/usr/bin/env node
/**
 * Full QA audit script for DoodlePlayground
 * Checks: data integrity, thumbnails, slugs, translations, sitemap, routes
 */
import { readFileSync, existsSync, statSync, readdirSync } from 'fs';
import { resolve } from 'path';

const ROOT = resolve(import.meta.dirname, '..');
let issues = [];
let warnings = [];

function issue(msg) { issues.push('❌ ' + msg); }
function warn(msg) { warnings.push('⚠️ ' + msg); }
function ok(msg) { console.log('  ✅ ' + msg); }

// ============ 1. GAME DATA INTEGRITY ============
console.log('\n🔍 1. GAME DATA INTEGRITY');

// We need to import games.ts — parse it textually
const gamesContent = readFileSync(resolve(ROOT, 'client/src/data/games.ts'), 'utf8');

// Extract all game objects by parsing key fields
const slugRegex = /slug:\s*'([^']+)'/g;
const idRegex = /id:\s*'([^']+)'/g;
const categoryRegex = /category:\s*'([^']+)'/g;
const thumbnailRegex = /thumbnail:\s*'([^']+)'/g;
const iframeUrlRegex = /iframeUrl:\s*'([^']+)'/g;
const titleRegex = /title:\s*'([^']+)'/g;
const difficultyRegex = /difficulty:\s*'([^']+)'/g;

function extractAll(regex, content) {
  const results = [];
  let m;
  const re = new RegExp(regex.source, regex.flags);
  while ((m = re.exec(content)) !== null) results.push(m[1]);
  return results;
}

const slugs = extractAll(slugRegex, gamesContent);
const ids = extractAll(idRegex, gamesContent);
const categories = extractAll(categoryRegex, gamesContent);
const thumbnails = extractAll(thumbnailRegex, gamesContent);
const iframeUrls = extractAll(iframeUrlRegex, gamesContent);
const titles = extractAll(titleRegex, gamesContent);
const difficulties = extractAll(difficultyRegex, gamesContent);

console.log(`  Total games: ${slugs.length}`);

// 1a. Duplicate slugs
const slugSet = new Set();
const dupSlugs = [];
for (const s of slugs) {
  if (slugSet.has(s)) dupSlugs.push(s);
  slugSet.add(s);
}
if (dupSlugs.length) issue(`Duplicate slugs: ${dupSlugs.join(', ')}`);
else ok('No duplicate slugs');

// 1b. Duplicate IDs
const idSet = new Set();
const dupIds = [];
for (const id of ids) {
  if (idSet.has(id)) dupIds.push(id);
  idSet.add(id);
}
if (dupIds.length) issue(`Duplicate IDs: ${dupIds.join(', ')}`);
else ok('No duplicate IDs');

// 1c. Valid categories
const validCats = ['classic', 'arcade', 'sports', 'puzzle', 'adventure', 'educational', 'seasonal', 'creative', 'online'];
const badCats = categories.filter(c => !validCats.includes(c));
if (badCats.length) issue(`Invalid categories: ${[...new Set(badCats)].join(', ')}`);
else ok('All categories are valid');

// 1d. Valid difficulties
const validDiffs = ['easy', 'medium', 'hard'];
const badDiffs = difficulties.filter(d => !validDiffs.includes(d));
if (badDiffs.length) issue(`Invalid difficulties: ${[...new Set(badDiffs)].join(', ')}`);
else ok('All difficulties are valid');

// 1e. ID sequence gaps
const gIds = ids.filter(id => id.startsWith('g')).map(id => parseInt(id.slice(1))).sort((a, b) => a - b);
const oIds = ids.filter(id => id.startsWith('o')).map(id => parseInt(id.slice(1))).sort((a, b) => a - b);
console.log(`  G-series: g${gIds[0]}–g${gIds[gIds.length-1]} (${gIds.length} games)`);
console.log(`  O-series: o${oIds[0]}–o${oIds[oIds.length-1]} (${oIds.length} games)`);

// 1f. Check for empty descriptions or controls
const descRegex2 = /description:\s*''/g;
const ctrlRegex2 = /controls:\s*''/g;
if (descRegex2.test(gamesContent)) issue('Some games have empty descriptions');
else ok('No empty descriptions');
if (ctrlRegex2.test(gamesContent)) issue('Some games have empty controls');
else ok('No empty controls');

// ============ 2. THUMBNAIL FILES ============
console.log('\n🖼️  2. THUMBNAIL FILES');

const thumbDir = resolve(ROOT, 'client/public/thumbnails');
const thumbFiles = existsSync(thumbDir) ? readdirSync(thumbDir).filter(f => !f.startsWith('.')) : [];
const posterDir = resolve(ROOT, 'client/public/thumbnails/posters');
const posterFiles = existsSync(posterDir) ? readdirSync(posterDir).filter(f => !f.startsWith('.')) : [];

let missingThumbs = 0;
let tinyThumbs = 0;
for (const thumb of thumbnails) {
  const thumbPath = resolve(ROOT, 'client/public', thumb.replace(/^\//, ''));
  if (!existsSync(thumbPath)) {
    issue(`Missing thumbnail: ${thumb}`);
    missingThumbs++;
  } else {
    const size = statSync(thumbPath).size;
    if (size < 500) {
      warn(`Tiny thumbnail (${size}b): ${thumb}`);
      tinyThumbs++;
    }
  }
}
if (!missingThumbs) ok(`All ${thumbnails.length} thumbnails exist on disk`);
if (!tinyThumbs) ok('No suspiciously tiny thumbnails');

// Check online game thumbnails are unique
const onlineThumbs = thumbnails.filter(t => t.includes('online-'));
console.log(`  Online game thumbnails: ${onlineThumbs.length}`);

// ============ 3. IFRAME URL VALIDATION ============
console.log('\n🌐 3. IFRAME URLS');

let localUrls = 0;
let externalUrls = 0;
let badProtocols = 0;

for (let i = 0; i < iframeUrls.length; i++) {
  const url = iframeUrls[i];
  if (url.startsWith('/')) {
    localUrls++;
    // Check local file exists
    const localPath = resolve(ROOT, 'client/public', url.replace(/^\//, ''));
    if (!existsSync(localPath)) {
      // might be a route, not a static file — only check for known extensions
      if (url.match(/\.(html|htm|js|css|png|jpg|gif|svg|webp)$/)) {
        issue(`Local iframe file missing: ${url} (for ${slugs[i]})`);
      }
    }
  } else if (url.startsWith('http://') || url.startsWith('https://')) {
    externalUrls++;
  } else {
    issue(`Bad protocol in iframeUrl: ${url} (for ${slugs[i]})`);
    badProtocols++;
  }
}
ok(`${localUrls} local URLs, ${externalUrls} external URLs`);
if (!badProtocols) ok('All URLs use valid protocols');

// Check for duplicate iframeUrls
const urlSet = new Set();
const dupUrls = [];
for (let i = 0; i < iframeUrls.length; i++) {
  if (urlSet.has(iframeUrls[i])) dupUrls.push(`${slugs[i]} → ${iframeUrls[i]}`);
  urlSet.add(iframeUrls[i]);
}
if (dupUrls.length) {
  // Might be intentional (e.g. breakout + atari-breakout both use elgoog.im/breakout/)
  warn(`Duplicate iframe URLs:\n    ${dupUrls.join('\n    ')}`);
} else {
  ok('No duplicate iframe URLs');
}

// ============ 4. TRANSLATION FILES ============
console.log('\n🌍 4. TRANSLATIONS');

const locales = ['ar','de','es','fr','hi','id','it','ja','ko','nl','pl','pt','ru','sv','th','tr','vi','zh-CN','zh-TW'];
const transDir = resolve(ROOT, 'client/src/data/translations');

let missingLocales = 0;
let translationIssues = 0;
const onlineSlugs = slugs.filter((_, i) => ids[i].startsWith('o'));

for (const loc of locales) {
  const filePath = resolve(transDir, `${loc}.ts`);
  if (!existsSync(filePath)) {
    issue(`Missing locale file: ${loc}.ts`);
    missingLocales++;
    continue;
  }
  
  const content = readFileSync(filePath, 'utf8');
  
  // Check for Online Games Collection marker
  if (!content.includes('// Online Games Collection')) {
    issue(`${loc}.ts: Missing '// Online Games Collection' marker`);
    translationIssues++;
  }
  
  // Check each online game slug exists in translation
  for (const slug of onlineSlugs) {
    if (!content.includes(`'${slug}'`)) {
      issue(`${loc}.ts: Missing slug '${slug}'`);
      translationIssues++;
    }
  }
}

if (!missingLocales) ok(`All ${locales.length} locale files exist`);
if (!translationIssues) ok('All online game slugs present in all locale files');

// Check gameTranslations.ts exists and has entries
const gameTransFile = resolve(ROOT, 'client/src/data/gameTranslations.ts');
if (existsSync(gameTransFile)) {
  const gtContent = readFileSync(gameTransFile, 'utf8');
  // Check that all slugs are referenced
  let missingInGT = 0;
  for (const slug of slugs) {
    if (!gtContent.includes(`'${slug}'`)) {
      missingInGT++;
    }
  }
  if (missingInGT) warn(`${missingInGT} slugs not found in gameTranslations.ts (may use a different mapping)`);
  else ok('All slugs referenced in gameTranslations.ts');
} else {
  warn('gameTranslations.ts not found');
}

// ============ 5. TRIVIA ============
console.log('\n🧠 5. TRIVIA');

const triviaFile = resolve(ROOT, 'client/src/data/trivia.ts');
if (existsSync(triviaFile)) {
  const triviaContent = readFileSync(triviaFile, 'utf8');
  let missingTrivia = 0;
  for (const slug of slugs) {
    if (!triviaContent.includes(`'${slug}'`)) {
      missingTrivia++;
    }
  }
  if (missingTrivia) warn(`${missingTrivia} slugs missing from trivia.ts`);
  else ok('All slugs have trivia entries');
} else {
  warn('trivia.ts not found');
}

// ============ 6. SITEMAP ============
console.log('\n🗺️  6. SITEMAP');

const sitemapPath = resolve(ROOT, 'client/public/sitemap.xml');
if (existsSync(sitemapPath)) {
  const sitemapContent = readFileSync(sitemapPath, 'utf8');
  let missingSitemapSlugs = 0;
  for (const slug of slugs) {
    if (!sitemapContent.includes(`/play/${slug}`)) {
      warn(`Slug '${slug}' not found in sitemap.xml`);
      missingSitemapSlugs++;
    }
  }
  if (!missingSitemapSlugs) ok(`All ${slugs.length} game slugs found in sitemap`);
  
  // Count total URLs
  const urlCount = (sitemapContent.match(/<loc>/g) || []).length;
  console.log(`  Sitemap URLs: ${urlCount}`);
} else {
  warn('sitemap.xml not found');
}

// ============ 7. KEY PAGES ============
console.log('\n📄 7. PAGE FILES');

const expectedPages = [
  'Home.tsx', 'PlayGame.tsx', 'AllGames.tsx', 'SearchResults.tsx',
  'TopRated.tsx', 'Daily.tsx', 'About.tsx', 'Contact.tsx',
  'Privacy.tsx', 'Sitemap.tsx', 'NotFound.tsx', 'Category.tsx',
  'OnlineGames.tsx', 'Redirect.tsx'
];
const pagesDir = resolve(ROOT, 'client/src/pages');
let missingPages = 0;
for (const page of expectedPages) {
  if (!existsSync(resolve(pagesDir, page))) {
    issue(`Missing page: ${page}`);
    missingPages++;
  }
}
if (!missingPages) ok(`All ${expectedPages.length} page files exist`);

// ============ 8. SHARED CONST CONSISTENCY ============
console.log('\n🔗 8. SHARED CONSTANTS');

const sharedConst = resolve(ROOT, 'shared/const.ts');
const clientConst = resolve(ROOT, 'client/src/const.ts');

if (existsSync(sharedConst)) {
  const sharedContent = readFileSync(sharedConst, 'utf8');
  // Check for SUPPORTED_LOCALES
  if (sharedContent.includes('SUPPORTED_LOCALES') || sharedContent.includes('locales')) {
    ok('Shared const has locale configuration');
  }
}

if (existsSync(clientConst)) {
  ok('Client const.ts exists');
}

// ============ 9. LOCAL TOOLS ============
console.log('\n🔧 9. LOCAL TOOLS');

const tools = ['coin-flip.html', 'dice-roller.html', 'pong.html', 'pacman.html'];
for (const tool of tools) {
  const toolPath = resolve(ROOT, 'client/public/tools', tool);
  if (existsSync(toolPath)) {
    const size = statSync(toolPath).size;
    ok(`${tool} exists (${(size/1024).toFixed(1)}kb)`);
  } else {
    warn(`Missing tool: ${tool}`);
  }
}

// ============ 10. CSS/CONFIG FILES ============
console.log('\n⚙️  10. CONFIG FILES');

const configFiles = [
  'package.json', 'vite.config.ts', 'tsconfig.json', 'tsconfig.node.json',
  'components.json', 'client/index.html'
];
for (const cf of configFiles) {
  if (existsSync(resolve(ROOT, cf))) {
    ok(cf);
  } else {
    issue(`Missing config: ${cf}`);
  }
}

// ============ 11. ROBOTS.TXT & WEB MANIFEST ============
console.log('\n🤖 11. SEO FILES');

const seoFiles = ['client/public/robots.txt', 'client/public/site.webmanifest'];
for (const sf of seoFiles) {
  const sfPath = resolve(ROOT, sf);
  if (existsSync(sfPath)) {
    ok(sf.split('/').pop());
  } else {
    warn(`Missing: ${sf}`);
  }
}

// Check robots.txt has sitemap reference
const robotsPath = resolve(ROOT, 'client/public/robots.txt');
if (existsSync(robotsPath)) {
  const robotsContent = readFileSync(robotsPath, 'utf8');
  if (robotsContent.toLowerCase().includes('sitemap')) {
    ok('robots.txt references sitemap');
  } else {
    warn('robots.txt does not reference a sitemap');
  }
}

// ============ 12. CROSS-REFERENCE: externalOnly games ============
console.log('\n🔗 12. externalOnly GAMES');

const externalMatches = gamesContent.match(/externalOnly:\s*true/g) || [];
console.log(`  ${externalMatches.length} games marked externalOnly`);

// Find which slugs are externalOnly by parsing game blocks
const gameBlocks = gamesContent.split(/\n\s*\{[\s\n]*id:/);
let externalOnlySlugs = [];
for (const block of gameBlocks) {
  if (block.includes('externalOnly: true') || block.includes('externalOnly:true')) {
    const slugMatch = block.match(/slug:\s*'([^']+)'/);
    if (slugMatch) externalOnlySlugs.push(slugMatch[1]);
  }
}
if (externalOnlySlugs.length) {
  console.log(`  External-only: ${externalOnlySlugs.join(', ')}`);
}

// ============ 13. SLUG FORMAT VALIDATION ============
console.log('\n📝 13. SLUG FORMAT');

const badSlugs = slugs.filter(s => !/^[a-z0-9][a-z0-9-]*[a-z0-9]$/.test(s) && s.length > 1);
if (badSlugs.length) {
  warn(`Slugs with non-standard format: ${badSlugs.join(', ')}`);
} else {
  ok('All slugs use valid kebab-case format');
}

// ============ SUMMARY ============
console.log('\n' + '='.repeat(60));
console.log('📊 QA SUMMARY');
console.log('='.repeat(60));
console.log(`  Total games: ${slugs.length}`);
console.log(`  Online games: ${onlineSlugs.length}`);
console.log(`  Locales: ${locales.length}`);
console.log(`  ❌ Issues: ${issues.length}`);
console.log(`  ⚠️  Warnings: ${warnings.length}`);

if (issues.length) {
  console.log('\n❌ ISSUES (must fix):');
  issues.forEach(i => console.log(`  ${i}`));
}

if (warnings.length) {
  console.log('\n⚠️  WARNINGS (review):');
  warnings.forEach(w => console.log(`  ${w}`));
}

if (!issues.length && !warnings.length) {
  console.log('\n🎉 ALL CLEAR — No issues or warnings found!');
}

process.exit(issues.length ? 1 : 0);
