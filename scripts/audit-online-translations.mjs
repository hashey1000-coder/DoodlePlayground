#!/usr/bin/env node
import { readFileSync } from 'fs';

const locales = ['ar','de','es','fr','hi','id','it','ja','ko','nl','pl','pt','ru','sv','th','tr','vi','zh-CN','zh-TW'];
const onlineSlugs = ['tetris','pong','breakout','2048','sudoku','word-search','word-scramble','connect-four','sliding-puzzle','flappy-bird','space-invaders-online','asteroids','frogger','galaga','brick-breaker','stack-tower','reaction-time','whack-a-mole','dots-and-boxes','reversi'];

const engWords = new Set(['the','and','your','with','that','from','this','each','into','click','move','every','them','they','can','you','are','for','but','has','have','its','than','been','will','when','all','more','one','how','use']);

function findEndQuote(content, openIdx) {
  let i = openIdx + 1;
  while (i < content.length) {
    if (content[i] === '\\') { i += 2; continue; }
    if (content[i] === "'") return i;
    i++;
  }
  return -1;
}

const issues = [];
let total = 0;

for (const loc of locales) {
  const content = readFileSync(`client/src/data/translations/${loc}.ts`, 'utf8');
  const onlineIdx = content.indexOf('// Online Games Collection');
  if (onlineIdx === -1) { issues.push(`${loc}: NO ONLINE SECTION`); continue; }
  
  for (const slug of onlineSlugs) {
    total++;
    const slugStr = `'${slug}'`;
    const si = content.indexOf(slugStr, onlineIdx);
    if (si === -1) { issues.push(`${loc}/${slug}: NOT FOUND`); continue; }
    
    // Find description value
    const descKey = content.indexOf('description:', si);
    if (descKey === -1 || descKey - si > 300) { issues.push(`${loc}/${slug}: NO DESC KEY`); continue; }
    const descOpen = content.indexOf("'", descKey + 12);
    const descClose = findEndQuote(content, descOpen);
    if (descClose === -1) { issues.push(`${loc}/${slug}: NO DESC END`); continue; }
    const desc = content.substring(descOpen + 1, descClose);
    
    // Decode escaped chars for analysis
    const decoded = desc.replace(/\\n/g, ' ').replace(/\\'/g, "'").replace(/\\\\/g, '\\');
    
    // Check if likely English
    const words = decoded.toLowerCase().split(/\s+/).filter(w => w.length > 0);
    const engCount = words.filter(w => engWords.has(w)).length;
    const engRatio = words.length > 0 ? engCount / words.length : 0;
    
    if (engRatio > 0.12 && loc !== 'id' && loc !== 'nl' && loc !== 'sv') {
      issues.push(`${loc}/${slug}: LIKELY ENGLISH (${engCount}/${words.length} = ${(engRatio*100).toFixed(0)}%)`);
    }
    
    // Check sentence count (rough: split on periods, question marks, etc.)
    const sentences = decoded.split(/[.!?。！？।]+/).filter(s => s.trim().length > 10);
    if (sentences.length < 2) {
      issues.push(`${loc}/${slug}: SHORT (${sentences.length} sentence-like segments)`);
    }
    
    // Check if description is very short (< 50 chars)
    if (decoded.length < 50) {
      issues.push(`${loc}/${slug}: VERY SHORT (${decoded.length} chars)`);
    }
  }
}

console.log(`Audited ${total} entries (${locales.length} locales × ${onlineSlugs.length} games)`);
if (issues.length === 0) {
  console.log('✅ ALL entries look good!');
} else {
  console.log(`\n⚠️ ${issues.length} issue(s) found:`);
  issues.forEach(i => console.log(`  ${i}`));
}
