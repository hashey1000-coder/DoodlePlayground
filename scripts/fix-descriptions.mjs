#!/usr/bin/env node
/**
 * Fix games.ts descriptions: 
 * 1. Replace literal newlines inside single-quoted description strings with \\n\\n
 * 2. Clean up any malformed entries from previous patching
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const GAMES_PATH = resolve(__dirname, '..', 'client/src/data/games.ts');

let src = readFileSync(GAMES_PATH, 'utf8');
const lines = src.split('\n');

// We need to find description fields that span multiple lines
// A description line starts with `    description: '` or `    description: "`
// and should end with `',` or `",` on the same or a subsequent line

const outputLines = [];
let i = 0;
let fixCount = 0;

while (i < lines.length) {
  const line = lines[i];
  
  // Check if this line starts a description field
  const descMatch = line.match(/^(\s*description:\s*)(['"])(.*)/);
  
  if (descMatch) {
    const indent = descMatch[1];
    const quote = descMatch[2];
    let content = descMatch[3];
    
    // Check if the description closes on this same line
    // Look for the closing quote followed by comma (not escaped)
    const closingPattern = quote === "'" 
      ? /(?<!\\)',$/ 
      : /(?<!\\)",$/ ;
    
    if (closingPattern.test(content)) {
      // Single line description, no fix needed
      outputLines.push(line);
      i++;
      continue;
    }
    
    // Multi-line description - collect all lines until we find the closing quote
    let descLines = [content];
    i++;
    let foundEnd = false;
    
    while (i < lines.length) {
      const nextLine = lines[i];
      
      // Check if this line contains the closing of the description
      // We look for a line that ends with ', or ",  possibly followed by the next field
      if (closingPattern.test(nextLine.trimEnd())) {
        descLines.push(nextLine.trim());
        foundEnd = true;
        i++;
        break;
      }
      
      // Check if we hit another field (description was unclosed — shouldn't happen)
      if (/^\s*(category|thumbnail|iframeUrl|controls|difficulty|tags|rating|playCount|isNew|externalOnly):/.test(nextLine)) {
        // The description wasn't properly closed. 
        // Just close what we have and push this line back
        foundEnd = true;
        break;
      }
      
      descLines.push(nextLine.trim());
      i++;
    }
    
    if (foundEnd) {
      // Join the multi-line description back into a single line with \n\n
      let fullDesc = descLines.join('\n');
      
      // Clean up: remove any duplicate old description fragments
      // (from the previous expand-descriptions.mjs that may have left trailing text)
      
      // Remove trailing quote and comma
      if (fullDesc.endsWith("',")) {
        fullDesc = fullDesc.slice(0, -2);
      } else if (fullDesc.endsWith('",')) {
        fullDesc = fullDesc.slice(0, -2);
      }
      
      // Replace literal newlines with \\n\\n (escaped for single-quoted string)
      // First collapse multiple newlines
      fullDesc = fullDesc.replace(/\n{2,}/g, '\\n\\n');
      fullDesc = fullDesc.replace(/\n/g, ' '); // single newlines become spaces
      fullDesc = fullDesc.replace(/\s{2,}/g, ' '); // collapse multiple spaces
      
      // Ensure we use single quotes
      fullDesc = fullDesc.replace(/(?<!\\)"/g, '\\"');
      
      outputLines.push(`${indent}'${fullDesc}',`);
      fixCount++;
    } else {
      // Couldn't find end, just keep original
      outputLines.push(line);
    }
  } else {
    outputLines.push(line);
    i++;
  }
}

const result = outputLines.join('\n');
writeFileSync(GAMES_PATH, result);
console.log(`✅ Fixed ${fixCount} multi-line descriptions in games.ts`);
console.log(`   Total lines: ${lines.length} → ${outputLines.length}`);
