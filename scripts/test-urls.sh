#!/bin/bash

test_url() {
  local label="$1"
  local url="$2"
  local code=$(curl -sI "$url" -o /dev/null -w '%{http_code}' --max-time 10)
  local ctype=$(curl -sI "$url" --max-time 10 2>/dev/null | grep -i 'content-type' | head -1 | tr -d '\r')
  echo "$label → $url → HTTP $code → $ctype"
}

echo "========================================="
echo "BATCH 1: 2012 Olympics - Google Doodle Blog Pattern"
echo "========================================="

# Try the doodles archive pattern used by Google
test_url "swimming" "https://www.google.com/logos/doodles/2012/olympic-swimming-2012-5765498083565568-hp.jpg"
test_url "swimming" "https://www.google.com/logos/doodles/2012/swimming-2012-5765498083565568-hp.jpg"

# Let me try the Wayback Machine
test_url "swimming-wb" "https://web.archive.org/web/2012/https://www.google.com/logos/2012/swimming12-hp-sprite.png"

# Try known working Google doodle archive patterns
test_url "hurdles-check" "https://www.google.com/logos/2012/hurdles12-hp-sprite.png"

# Try different naming conventions
test_url "swimming-alt1" "https://www.google.com/logos/2012/swimming12-sprite.png"
test_url "swimming-alt2" "https://www.google.com/logos/2012/swimming-sprite.png"
test_url "swimming-alt3" "https://www.google.com/logos/2012/olympic_swimming-sprite.png"

echo ""
echo "========================================="
echo "BATCH 2: Wikipedia/Wikimedia Commons"
echo "========================================="

# Minecraft
test_url "minecraft" "https://upload.wikimedia.org/wikipedia/en/b/b6/Minecraft_2024_cover_art.png"
test_url "minecraft-alt" "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png"

# Hollow Knight
test_url "hollow-knight" "https://upload.wikimedia.org/wikipedia/en/0/04/Hollow_Knight_cover.png"
test_url "hollow-knight-alt" "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Hollow_Knight_cover.png/220px-Hollow_Knight_cover.png"

# Inside Out
test_url "inside-out" "https://upload.wikimedia.org/wikipedia/en/0/0a/Inside_Out_%282015_film%29_poster.jpg"
test_url "inside-out-2" "https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg"

echo ""
echo "========================================="
echo "BATCH 3: Google Doodle Games (non-Olympics)"
echo "========================================="

# Gerald Lawson - December 2022
test_url "gerald-lawson-1" "https://www.google.com/logos/doodles/2022/celebrating-gerald-jerry-lawson-6753651837110062-2x.png"
test_url "gerald-lawson-2" "https://www.google.com/logos/doodles/2022/celebrating-gerald-jerry-lawson-6753651837110062-s.png"
test_url "gerald-lawson-3" "https://www.google.com/logos/doodles/2022/celebrating-gerald-jerry-lawson-6753651837110062.2-s.png"

# Rise of the Half Moon 2024
test_url "half-moon-1" "https://www.google.com/logos/doodles/2024/rise-of-the-half-moon-6753651837110548-2x.png"
test_url "half-moon-2" "https://www.google.com/logos/doodles/2024/rise-of-the-half-moon-6753651837110548-s.png"

# Copa America 2024
test_url "copa-1" "https://www.google.com/logos/doodles/2024/copa-america-2024-begins-6753651837110417-2x.png"
test_url "copa-2" "https://www.google.com/logos/doodles/2024/copa-america-2024-6753651837110417-2x.png"

# Celebrating Salsa Music
test_url "salsa-1" "https://www.google.com/logos/doodles/2024/celebrating-salsa-music-6753651837110581-2x.png"
test_url "salsa-2" "https://www.google.com/logos/doodles/2023/celebrating-salsa-music-6753651837110581-2x.png"

# Cricket ICC Champions Trophy 2017
test_url "cricket-1" "https://www.google.com/logos/doodles/2017/icc-champions-trophy-2017-begins-5765398384893952-2x.png"
test_url "cricket-2" "https://www.google.com/logos/doodles/2017/icc-champions-trophy-2017-6753651837109498-2x.png"

echo ""
echo "========================================="
echo "BATCH 4: DVD Screensaver / Festivus / Friends"  
echo "========================================="

test_url "dvd-wiki" "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/DVD_logo.svg/200px-DVD_logo.svg.png"
test_url "dvd-wiki2" "https://upload.wikimedia.org/wikipedia/commons/9/9b/DVD_logo.svg"

test_url "festivus-wiki" "https://upload.wikimedia.org/wikipedia/en/0/0e/Festivus_Pole.jpg"

test_url "friends-logo" "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Friends_logo.svg/200px-Friends_logo.svg.png"

echo ""
echo "DONE"
