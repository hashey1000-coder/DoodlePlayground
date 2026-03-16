/**
 * Downloads proper game artwork for the 20 online games.
 * Priority: known direct asset URL → OG image from game page → alt page OG
 *
 * Run: node scripts/download-online-thumbnails.mjs
 */

import { writeFileSync, mkdirSync, existsSync, unlinkSync } from 'fs';
import { resolve } from 'path';

const THUMB_DIR = resolve('client/public/thumbnails');
mkdirSync(THUMB_DIR, { recursive: true });

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36';

async function tryDownload(url) {
  try {
    const r = await fetch(url, {
      headers: { 'User-Agent': UA, Accept: 'image/*,*/*;q=0.9' },
      redirect: 'follow',
    });
    if (!r.ok) return null;
    const buf = Buffer.from(await r.arrayBuffer());
    if (buf.byteLength < 3000) return null;
    const ct = (r.headers.get('content-type') || '').split(';')[0].trim();
    const CT_EXT = {
      'image/jpeg': 'jpg', 'image/jpg': 'jpg',
      'image/png': 'png', 'image/webp': 'webp', 'image/gif': 'gif',
    };
    let ext = CT_EXT[ct];
    if (!ext) {
      const m = url.replace(/\?.*$/, '').match(/\.(png|webp|gif|jpg|jpeg)$/i);
      ext = m ? m[1].toLowerCase().replace('jpeg', 'jpg') : 'jpg';
    }
    if (ext === 'gif' && buf.byteLength > 600_000) return null; // skip huge GIFs
    return { buf, ext };
  } catch {
    return null;
  }
}

async function ogImage(pageUrl) {
  try {
    const r = await fetch(pageUrl, {
      headers: { 'User-Agent': UA, Accept: 'text/html,*/*;q=0.9' },
      redirect: 'follow',
    });
    if (!r.ok) return null;
    const html = await r.text();
    for (const re of [
      /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i,
      /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i,
      /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i,
      /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image["']/i,
      /<meta[^>]+name=["']twitter:image:src["'][^>]+content=["']([^"']+)["']/i,
    ]) {
      const m = html.match(re);
      if (m?.[1] && !m[1].includes('placeholder') && !m[1].startsWith('data:')) {
        const img = m[1].trim();
        try { return new URL(img, pageUrl).href; } catch {}
      }
    }
  } catch {}
  return null;
}

const GAMES = [
  { slug: 'tetris',               direct: 'https://elgoog.im/assets/p/tetris/google-tetris-elgoog.png',       og: 'https://chvin.github.io/react-tetris/' },
  { slug: 'pong',                 og: 'https://www.ponggame.org/' },
  { slug: 'breakout',             direct: 'https://elgoog.im/assets/p/breakout/google-atari-breakout.jpg' },
  { slug: '2048',                 direct: 'https://raw.githubusercontent.com/gabrielecirulli/2048/master/meta/og_image.png',  og: 'https://gabrielecirulli.github.io/2048/' },
  { slug: 'sudoku',               og: 'https://www.puzzle-sudoku.com/',          alt: 'https://sudoku.com/' },
  { slug: 'word-search',          og: 'https://www.puzzle-words.com/',           alt: 'https://wordsearch.com/' },
  { slug: 'word-scramble',        og: 'https://wordscramble.co/',                alt: 'https://www.wordscramble.net/' },
  { slug: 'connect-four',         og: 'https://papergames.io/en/connect4',       alt: 'https://www.crazygames.com/game/connect-4' },
  { slug: 'sliding-puzzle',       og: 'https://15puzzle.netlify.app/',           alt: 'https://www.crazygames.com/game/15-puzzle' },
  { slug: 'flappy-bird',          og: 'https://nebez.github.io/floppybird/',     alt: 'https://github.com/nebez/floppybird' },
  { slug: 'space-invaders-online',og: 'https://freeinvaders.org/',               alt: 'https://www.crazygames.com/game/space-invaders' },
  { slug: 'asteroids',            og: 'https://www.dougmcinnes.com/html-5-asteroids/', alt: 'https://www.crazygames.com/game/asteroids' },
  { slug: 'frogger',              og: 'https://froggerclassic.appspot.com/',     alt: 'https://www.crazygames.com/game/frogger-classic' },
  { slug: 'galaga',               og: 'https://www.freegalaga.com/',             alt: 'https://www.crazygames.com/game/galaga' },
  { slug: 'brick-breaker',        og: 'https://www.bricksmasher.net/',           alt: 'https://www.crazygames.com/game/breakout' },
  { slug: 'stack-tower',          og: 'https://www.htmlgames.com/game/stack-tower/', alt: 'https://www.crazygames.com/game/stack' },
  { slug: 'reaction-time',        og: 'https://humanbenchmark.com/tests/reactiontime' },
  { slug: 'whack-a-mole',         og: 'https://www.whac-a-mole.co.uk/',         alt: 'https://www.crazygames.com/game/whack-a-mole' },
  { slug: 'dots-and-boxes',       og: 'https://papergames.io/en/dots-boxes',     alt: 'https://www.crazygames.com/game/dots-and-boxes' },
  { slug: 'reversi',              og: 'https://papergames.io/en/othello',        alt: 'https://www.crazygames.com/game/othello' },
];

console.log('Downloading online game thumbnails (OG images + verified direct assets)...\n');

const results = {};

for (const g of GAMES) {
  const base = `online-${g.slug}`;
  process.stdout.write(`  ${g.slug.padEnd(26)}`);

  let got = null;
  let source = '';

  if (g.direct) {
    got = await tryDownload(g.direct);
    if (got) source = 'direct asset';
  }

  if (!got && g.og) {
    const url = await ogImage(g.og);
    if (url) {
      got = await tryDownload(url);
      if (got) source = `og → ${url.slice(0, 55)}`;
    }
  }

  if (!got && g.alt) {
    const url = await ogImage(g.alt);
    if (url) {
      got = await tryDownload(url);
      if (got) source = `alt-og → ${url.slice(0, 50)}`;
    }
  }

  if (got) {
    const filename = `${base}.${got.ext}`;
    if (got.ext !== 'jpg') {
      const old = resolve(THUMB_DIR, `${base}.jpg`);
      if (existsSync(old)) unlinkSync(old);
    }
    writeFileSync(resolve(THUMB_DIR, filename), got.buf);
    results[g.slug] = `/thumbnails/${filename}`;
    console.log(`✅  ${filename} (${Math.round(got.buf.byteLength / 1024)}kb)`);
    console.log(`         ${source}`);
  } else {
    results[g.slug] = null;
    console.log('❌  FAILED');
  }
}

console.log('\n=== Result map ===');
for (const [slug, path] of Object.entries(results)) {
  console.log(`  ${slug.padEnd(26)} ${path ?? '❌ FAILED'}`);
}

const failed = Object.entries(results).filter(([, p]) => !p).map(([s]) => s);
if (failed.length) console.log(`\n⚠️  ${failed.length} failed: ${failed.join(', ')}`);
else console.log('\n✅ All 20 downloaded!');
