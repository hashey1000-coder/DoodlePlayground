import fs from 'fs';
import path from 'path';

const dir = path.join(path.dirname(new URL(import.meta.url).pathname), '..', 'client/src/contexts/locales');

const CHECK_KEYS = ['tag_halloween','tag_drawing','tag_action','tag_cute','tag_mouse'];
const locales = ['es','fr','de','it','pt','ru','zh-CN','zh-TW','ja','ko','ar','hi','tr','nl','pl','sv','id','vi','th'];

for (const loc of locales) {
  const file = fs.readFileSync(path.join(dir, loc + '.ts'), 'utf8');
  const values = {};
  for (const key of CHECK_KEYS) {
    const regex = new RegExp("'" + key + "'\\s*:\\s*'([^']*)'");
    const match = file.match(regex);
    values[key] = match ? match[1] : 'NOT FOUND';
  }
  console.log(`\n=== ${loc} ===`);
  for (const [k, v] of Object.entries(values)) {
    console.log(`  ${k}: ${v}`);
  }
}
