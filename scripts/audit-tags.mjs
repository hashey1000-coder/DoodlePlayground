import fs from 'fs';
import path from 'path';

const ALL_TAGS_KEYS = [
  'tag_3d','tag_action','tag_adventure','tag_ai','tag_aiming','tag_arcade','tag_brain','tag_brainTeaser',
  'tag_cards','tag_catching','tag_christmas','tag_classic','tag_clicking','tag_coding','tag_creative','tag_cultural',
  'tag_cute','tag_daily','tag_drawing','tag_educational','tag_endless','tag_fastPaced','tag_fighting','tag_food',
  'tag_french','tag_funny','tag_geography','tag_halloween','tag_history','tag_keyboard','tag_kids','tag_launching',
  'tag_logic','tag_maze','tag_miniGames','tag_mouse','tag_multiplayer','tag_music','tag_nature','tag_olympics',
  'tag_oneButton','tag_platformer','tag_pointAndClick','tag_precision','tag_puzzle','tag_relaxing','tag_rhythm',
  'tag_rpg','tag_runner','tag_sciFi','tag_seasonal','tag_shooter','tag_social','tag_sports','tag_story',
  'tag_strategy','tag_summer','tag_timing','tag_touch','tag_trivia','tag_typing','tag_vsAi','tag_weapons','tag_words'
];

const dir = path.join(path.dirname(new URL(import.meta.url).pathname), '..', 'client/src/contexts/locales');
const locales = ['es','fr','de','it','pt','ru','zh-CN','zh-TW','ja','ko','ar','hi','tr','nl','pl','sv','id','vi','th'];

for (const loc of locales) {
  const file = fs.readFileSync(path.join(dir, loc + '.ts'), 'utf8');
  const missing = ALL_TAGS_KEYS.filter(k => {
    return !file.includes("'" + k + "'");
  });
  if (missing.length > 0) {
    console.log(`${loc}: MISSING ${missing.length} tags: ${missing.join(', ')}`);
  } else {
    console.log(`${loc}: ✅ all 64 tags present`);
  }
}
