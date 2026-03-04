/**
 * Generates clean SVG thumbnails for games that currently have
 * ugly thum.io branded screenshots.
 *
 * Each SVG has:
 * - A vibrant gradient background matching the game's category
 * - A large relevant emoji
 * - The game title
 * - A "Play" indicator
 *
 * Run: node scripts/generate-svg-thumbnails.mjs
 */

import { writeFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';

const THUMB_DIR = resolve('client/public/thumbnails');
mkdirSync(THUMB_DIR, { recursive: true });

// Games that need replacement thumbnails (currently thum.io screenshots)
// Format: [filename (without .svg), emoji, title, gradient colors]
const GAMES = [
  // Google FBX Games
  ['google-solitaire',       '🃏', 'Solitaire',        ['#1a7a3d', '#2ecc71']],
  ['google-spider-solitaire','🕷️', 'Spider Solitaire',  ['#2c3e50', '#4a69bd']],
  ['google-freecell',        '♠️', 'FreeCell',           ['#0c2461', '#3c6382']],
  ['google-cricket',         '🏏', 'Cricket',           ['#27ae60', '#6ab04c']],
  ['google-memory',          '🧠', 'Memory Game',       ['#6c5ce7', '#a29bfe']],
  ['google-ludo',            '🎲', 'Ludo',              ['#e17055', '#fdcb6e']],
  ['google-word-coach',      '📝', 'Word Coach',        ['#0984e3', '#74b9ff']],
  ['google-spinner',         '🌀', 'Spinner',           ['#00b894', '#55efc4']],
  ['google-coin-flip',       '🪙', 'Coin Flip',         ['#fdcb6e', '#e67e22']],
  ['google-dice-roller',     '🎲', 'Dice Roller',       ['#d63031', '#ff7675']],
  ['google-timer',           '⏱️', 'Timer',              ['#2d3436', '#636e72']],
  ['google-metronome',       '🎵', 'Metronome',         ['#6c5ce7', '#fd79a8']],
  ['google-whirlybird',      '🐦', 'Whirlybird',        ['#00cec9', '#81ecec']],

  // Easter Egg Games
  ['friends-easter-eggs',    '☕', 'Friends',           ['#6c5ce7', '#e056a0']],
  ['festivus-pole',          '🎄', 'Festivus',          ['#d35400', '#e74c3c']],
  ['hollow-knight-slash',    '⚔️', 'Hollow Knight',     ['#2d3436', '#636e72']],
  ['inside-out-memory-orbs', '🔮', 'Inside Out',        ['#fdcb6e', '#e17055']],
  ['dvd-screensaver',        '📀', 'DVD Screensaver',   ['#0c0c0c', '#2d3436']],
  ['minecraft-easter-egg',   '⛏️', 'Minecraft',         ['#6ab04c', '#27ae60']],

  // Doodle games with bad thum.io screenshots
  ['gerald-lawson',          '🕹️', 'Gerald Lawson',     ['#e17055', '#d63031']],
  ['copa-america-2024',      '⚽', 'Copa América',      ['#0984e3', '#00b894']],
  ['halloween-pac-man',      '🎃', 'Halloween Pac-Man', ['#e67e22', '#d63031']],
  ['salsa-music',            '💃', 'Salsa Music',       ['#e74c3c', '#fdcb6e']],
  ['rise-of-the-half-moon',  '🌙', 'Half Moon',         ['#2c3e50', '#6c5ce7']],

  // 2012 Olympics games with bad screenshots
  ['archery-2012',           '🏹', 'Archery 2012',      ['#e74c3c', '#e67e22']],
  ['cycling-2012',           '🚴', 'Cycling 2012',      ['#0984e3', '#00b894']],
  ['high-jump-2012',         '🏃', 'High Jump 2012',    ['#fdcb6e', '#e67e22']],
  ['long-jump-2012',         '🦘', 'Long Jump 2012',    ['#00b894', '#6ab04c']],
  ['volleyball-2012',        '🏐', 'Volleyball 2012',   ['#6c5ce7', '#0984e3']],
  ['tennis-2012',            '🎾', 'Tennis 2012',       ['#27ae60', '#fdcb6e']],
];

function generateSVG(emoji, title, [color1, color2]) {
  // Clean title for XML
  const safeTitle = title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 270" width="480" height="270">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color1}"/>
      <stop offset="100%" style="stop-color:${color2}"/>
    </linearGradient>
    <filter id="shadow">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-opacity="0.3"/>
    </filter>
    <!-- Subtle pattern overlay -->
    <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="1" fill="white" opacity="0.08"/>
    </pattern>
  </defs>

  <!-- Background gradient -->
  <rect width="480" height="270" fill="url(#bg)" rx="12"/>

  <!-- Dot pattern overlay -->
  <rect width="480" height="270" fill="url(#dots)" rx="12"/>

  <!-- Decorative circles -->
  <circle cx="400" cy="50" r="80" fill="white" opacity="0.05"/>
  <circle cx="80" cy="220" r="60" fill="white" opacity="0.05"/>

  <!-- Emoji -->
  <text x="240" y="125" text-anchor="middle" font-size="72" filter="url(#shadow)">${emoji}</text>

  <!-- Title -->
  <text x="240" y="185" text-anchor="middle" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="24" font-weight="700" fill="white" filter="url(#shadow)">${safeTitle}</text>

  <!-- Play badge -->
  <rect x="190" y="205" width="100" height="32" rx="16" fill="white" opacity="0.2"/>
  <text x="240" y="227" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="600" fill="white">▶ Play</text>

  <!-- Google colors bar at bottom -->
  <rect x="0" y="262" width="120" height="8" fill="#4285F4" rx="0"/>
  <rect x="120" y="262" width="120" height="8" fill="#DB4437"/>
  <rect x="240" y="262" width="120" height="8" fill="#F4B400"/>
  <rect x="360" y="262" width="120" height="8" fill="#0F9D58"/>
</svg>`;
}

let count = 0;
for (const [filename, emoji, title, colors] of GAMES) {
  const svg = generateSVG(emoji, title, colors);
  const outPath = resolve(THUMB_DIR, `${filename}.svg`);
  writeFileSync(outPath, svg);
  count++;
  console.log(`  ✅ ${filename}.svg`);
}

console.log(`\n🎨 Generated ${count} SVG thumbnails`);
console.log('\n⚠️  Remember to update games.ts to reference .svg instead of .webp for these games.');
