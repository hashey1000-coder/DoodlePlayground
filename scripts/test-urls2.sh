#!/bin/bash

test_url() {
  local label="$1"
  local url="$2"
  local code=$(curl -sI "$url" -o /dev/null -w '%{http_code}' --max-time 10 2>/dev/null)
  if [ "$code" = "200" ]; then
    local ctype=$(curl -sI "$url" --max-time 10 2>/dev/null | grep -i 'content-type' | head -1 | tr -d '\r\n')
    echo "✅ $label → $url → HTTP $code → $ctype"
  else
    echo "❌ $label → HTTP $code"
  fi
}

echo "========================================="
echo "2012 Olympics - iframeUrl sprite patterns"
echo "========================================="

# iframeUrl format: /logos/2012/swimming-2012-hp.html
# Known working: hurdles12-hp-sprite.png
# Let me try: sport-2012-hp-sprite.png pattern

test_url "swimming" "https://www.google.com/logos/2012/swimming-2012-hp-sprite.png"
test_url "fencing" "https://www.google.com/logos/2012/fencing-2012-hp-sprite.png"
test_url "tennis" "https://www.google.com/logos/2012/tennis-2012-hp-sprite.png"
test_url "table_tennis" "https://www.google.com/logos/2012/table_tennis-2012-hp-sprite.png"
test_url "archery" "https://www.google.com/logos/2012/archery-2012-hp-sprite.png"
test_url "cycling" "https://www.google.com/logos/2012/cycling-2012-hp-sprite.png"
test_url "javelin" "https://www.google.com/logos/2012/javelin-2012-hp-sprite.png"
test_url "volleyball" "https://www.google.com/logos/2012/volleyball-2012-hp-sprite.png"

echo ""
echo "-- Try without -2012 suffix --"
test_url "swimming" "https://www.google.com/logos/2012/swimming-hp-sprite.png"
test_url "fencing" "https://www.google.com/logos/2012/fencing-hp-sprite.png"

echo ""
echo "-- Try _sport_ format --"
test_url "swimming" "https://www.google.com/logos/2012/swimming12-hp.png"
test_url "swimming" "https://www.google.com/logos/2012/swimming-2012.png"

echo ""
echo "-- Try main page HTML to find assets --"
test_url "swimming-html" "https://www.google.com/logos/2012/swimming-2012-hp.html"
test_url "hurdles-html" "https://www.google.com/logos/2012/hurdles-2012-hp.html"

echo ""
echo "========================================="
echo "Google Doodle Blog / Archive images"
echo "========================================="

# Gerald Lawson - December 1, 2022
test_url "lawson1" "https://www.google.com/logos/doodles/2022/celebrating-gerald-jerry-lawson-6753651837109554-2x.png"
test_url "lawson2" "https://www.google.com/logos/doodles/2022/celebrating-gerald-jerry-lawson-6753651837109554.2-2xa.gif"
test_url "lawson3" "https://www.google.com/logos/doodles/2022/celebrating-gerald-jerry-lawson-6753651837109554-law22.gif"

# Copa America 2024 - June 20, 2024
test_url "copa1" "https://www.google.com/logos/doodles/2024/copa-america-2024-6753651837110476-2x.png"
test_url "copa2" "https://www.google.com/logos/doodles/2024/copa-america-2024-6753651837110476.2-2xa.gif"

# Salsa Music - various
test_url "salsa1" "https://www.google.com/logos/doodles/2024/celebrating-salsa-music-6753651837110600-2x.png"
test_url "salsa2" "https://www.google.com/logos/doodles/2024/celebrating-salsa-music-6753651837110600.2-2xa.gif"

# ICC Cricket 2017
test_url "cricket1" "https://www.google.com/logos/doodles/2017/icc-champions-trophy-2017-begins-5765398384893952-2x.png"
test_url "cricket2" "https://www.google.com/logos/2017/cricket17/cricket17.png"
test_url "cricket3" "https://www.google.com/logos/2017/cricket17/icc17-sprite.png"

echo ""
echo "========================================="
echo "Misc Easter Eggs"
echo "========================================="

# Hollow Knight
test_url "hollow-knight-1" "https://upload.wikimedia.org/wikipedia/en/0/04/Hollow_Knight_cover.png"
test_url "hollow-knight-2" "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Hollow_Knight_first_cover_art.webp/220px-Hollow_Knight_first_cover_art.webp"
test_url "hollow-knight-3" "https://upload.wikimedia.org/wikipedia/en/b/b4/Hollow_Knight_first_cover_art.webp"

# Festivus - Seinfeld  
test_url "festivus-1" "https://upload.wikimedia.org/wikipedia/en/7/70/Festivus.jpg"
test_url "festivus-2" "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Festivus_Pole.jpg/200px-Festivus_Pole.jpg"

# Friends
test_url "friends-1" "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Friends_logo.svg/320px-Friends_logo.svg.png"
test_url "friends-2" "https://upload.wikimedia.org/wikipedia/en/d/d6/Friends_season_one_cast.jpg"

echo ""
echo "DONE"
