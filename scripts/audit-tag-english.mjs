import fs from 'fs';
import path from 'path';

const dir = path.join(path.dirname(new URL(import.meta.url).pathname), '..', 'client/src/contexts/locales');

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

// English default values for each key (what we'd expect for untranslated)
const ENGLISH_VALUES = {
  'tag_3d': '3D', 'tag_action': 'Action', 'tag_adventure': 'Adventure', 'tag_ai': 'AI',
  'tag_aiming': 'Aiming', 'tag_arcade': 'Arcade', 'tag_brain': 'Brain', 'tag_brainTeaser': 'Brain Teaser',
  'tag_cards': 'Cards', 'tag_catching': 'Catching', 'tag_christmas': 'Christmas', 'tag_classic': 'Classic',
  'tag_clicking': 'Clicking', 'tag_coding': 'Coding', 'tag_creative': 'Creative', 'tag_cultural': 'Cultural',
  'tag_cute': 'Cute', 'tag_daily': 'Daily', 'tag_drawing': 'Drawing', 'tag_educational': 'Educational',
  'tag_endless': 'Endless', 'tag_fastPaced': 'Fast-Paced', 'tag_fighting': 'Fighting', 'tag_food': 'Food',
  'tag_french': 'French', 'tag_funny': 'Funny', 'tag_geography': 'Geography', 'tag_halloween': 'Halloween',
  'tag_history': 'History', 'tag_keyboard': 'Keyboard', 'tag_kids': 'Kids-Friendly', 'tag_launching': 'Launching',
  'tag_logic': 'Logic', 'tag_maze': 'Maze', 'tag_miniGames': 'Mini-Games', 'tag_mouse': 'Mouse',
  'tag_multiplayer': 'Multiplayer', 'tag_music': 'Music', 'tag_nature': 'Nature', 'tag_olympics': 'Olympics',
  'tag_oneButton': 'One Button', 'tag_platformer': 'Platformer', 'tag_pointAndClick': 'Point & Click',
  'tag_precision': 'Precision', 'tag_puzzle': 'Puzzle', 'tag_relaxing': 'Relaxing', 'tag_rhythm': 'Rhythm',
  'tag_rpg': 'RPG', 'tag_runner': 'Runner', 'tag_sciFi': 'Sci-Fi', 'tag_seasonal': 'Seasonal',
  'tag_shooter': 'Shooter', 'tag_social': 'Social', 'tag_sports': 'Sports', 'tag_story': 'Story',
  'tag_strategy': 'Strategy', 'tag_summer': 'Summer', 'tag_timing': 'Timing', 'tag_touch': 'Touch-Friendly',
  'tag_trivia': 'Trivia', 'tag_typing': 'Typing', 'tag_vsAi': 'Vs AI', 'tag_weapons': 'Weapons', 'tag_words': 'Words'
};

const locales = ['es','fr','de','it','pt','ru','zh-CN','zh-TW','ja','ko','ar','hi','tr','nl','pl','sv','id','vi','th'];

// Languages where English loanwords are acceptable (some tags like "Halloween" are legitimately the same)
const ENGLISH_LOAN_ACCEPTABLE = new Set(['tag_halloween','tag_3d','tag_ai','tag_rpg']);

for (const loc of locales) {
  const file = fs.readFileSync(path.join(dir, loc + '.ts'), 'utf8');
  const untranslated = [];
  for (const key of ALL_TAGS_KEYS) {
    const regex = new RegExp("'" + key + "'\\s*:\\s*'([^']*)'");
    const match = file.match(regex);
    if (match) {
      const val = match[1];
      const eng = ENGLISH_VALUES[key];
      // Check if value is exactly the English value (case-insensitive for some)
      if (val === eng && !ENGLISH_LOAN_ACCEPTABLE.has(key)) {
        untranslated.push(`${key}="${val}"`);
      }
    }
  }
  if (untranslated.length > 0) {
    console.log(`\n${loc}: ${untranslated.length} UNTRANSLATED tags:`);
    untranslated.forEach(t => console.log(`  ${t}`));
  } else {
    console.log(`${loc}: ✅ all tags translated`);
  }
}
