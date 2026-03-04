/**
 * Fix translation files that have multi-line strings instead of \n\n escape sequences.
 * The issue: some generator scripts used template literals or real newlines in descriptions,
 * resulting in unterminated string literals in TypeScript.
 * 
 * This script reads each .ts translation file in client/src/data/translations/,
 * and rewrites any that have multi-line description strings so descriptions are on a single line
 * with \n\n for paragraph breaks.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const translationsDir = path.join(__dirname, '..', 'client', 'src', 'data', 'translations');

const files = fs.readdirSync(translationsDir).filter(f => f.endsWith('.ts'));

let fixedCount = 0;

for (const file of files) {
  const filePath = path.join(translationsDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // A correct file has ~440 lines. Files with ~658 lines have multi-line strings.
  const lineCount = content.split('\n').length;
  if (lineCount < 500) {
    console.log(`✅ ${file} — OK (${lineCount} lines)`);
    continue;
  }
  
  console.log(`🔧 ${file} — fixing (${lineCount} lines)...`);
  
  // Strategy: Parse the file structure and rebuild it.
  // The file structure is:
  //   import type { GameTranslation } from '../gameTranslations';
  //   
  //   export const XX_GAMES: Record<string, GameTranslation> = {
  //     'slug': {
  //       title: 'Title',
  //       description: 'First paragraph
  //   
  //   Second paragraph',
  //     },
  //     ...
  //   };
  
  // We need to find description strings that span multiple lines and collapse them.
  // A description starts with `    description: '` and should end with `',` on the same line.
  // In broken files, the closing `',` is on a later line.
  
  const lines = content.split('\n');
  const fixedLines = [];
  let inDescription = false;
  let descBuffer = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (!inDescription) {
      // Check if this line starts a description
      const descMatch = line.match(/^(\s*description:\s*')(.*)$/);
      if (descMatch) {
        const prefix = descMatch[1];
        const rest = descMatch[2];
        
        // Check if description closes on this same line (already correct)
        if (rest.match(/^(.*(?:[^\\]|^))'(,?\s*)$/)) {
          // Already a single-line description
          fixedLines.push(line);
        } else {
          // Multi-line description starts here
          inDescription = true;
          descBuffer = prefix + rest;
        }
      } else {
        fixedLines.push(line);
      }
    } else {
      // We're inside a multi-line description
      // Check if this line ends the description (ends with ', or just ')
      const trimmed = line.trimStart();
      
      if (trimmed.match(/^(.*)'(,?\s*)$/)) {
        // This line ends the description
        const endMatch = trimmed.match(/^(.*)'(,?\s*)$/);
        const lastPart = endMatch[1];
        const suffix = "'" + endMatch[2];
        
        // If the line is empty (just whitespace before the closing), it was a paragraph break
        if (lastPart === '') {
          // The previous buffer might have trailing content, just close
          descBuffer += suffix;
        } else {
          descBuffer += '\\n\\n' + lastPart + suffix;
        }
        
        fixedLines.push(descBuffer);
        inDescription = false;
        descBuffer = '';
      } else if (trimmed === '') {
        // Empty line inside description = paragraph break, skip (we'll add \n\n when we see next content)
        // But we need to track that a break happened
        // Mark with a sentinel
        descBuffer += '%%PARA_BREAK%%';
      } else {
        // Continuation line
        if (descBuffer.endsWith('%%PARA_BREAK%%')) {
          descBuffer = descBuffer.replace(/%%PARA_BREAK%%/g, '') + '\\n\\n' + trimmed;
        } else {
          descBuffer += ' ' + trimmed;
        }
      }
    }
  }
  
  const fixedContent = fixedLines.join('\n');
  const newLineCount = fixedContent.split('\n').length;
  fs.writeFileSync(filePath, fixedContent, 'utf-8');
  console.log(`   ✅ Fixed: ${lineCount} → ${newLineCount} lines`);
  fixedCount++;
}

console.log(`\nDone. Fixed ${fixedCount} file(s).`);
