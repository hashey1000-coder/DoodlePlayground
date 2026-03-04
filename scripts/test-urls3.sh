#!/bin/bash

test_url() {
  local label="$1"
  local url="$2"
  local code=$(curl -sI "$url" -o /dev/null -w '%{http_code}' --max-time 10 2>/dev/null)
  if [ "$code" = "200" ]; then
    local ctype=$(curl -sI "$url" --max-time 10 2>/dev/null | grep -i 'content-type' | head -1 | tr -d '\r\n')
    echo "✅ $label → $url → HTTP $code → $ctype"
  else
    echo "❌ $label → $url → HTTP $code"
  fi
}

echo "========================================="
echo "2012 Olympics - correct patterns from hurdles HTML"
echo "pattern: /logos/2012/sport12-hp.png"
echo "========================================="

test_url "hurdles-confirm" "https://www.google.com/logos/2012/hurdles12-hp.png"
test_url "olympics-sprite" "https://www.google.com/logos/2012/olympics12-hp-sprite.png"
test_url "swimming" "https://www.google.com/logos/2012/swimming12-hp.png"
test_url "fencing" "https://www.google.com/logos/2012/fencing12-hp.png"
test_url "tennis" "https://www.google.com/logos/2012/tennis12-hp.png"
test_url "table_tennis" "https://www.google.com/logos/2012/table_tennis12-hp.png"
test_url "archery" "https://www.google.com/logos/2012/archery12-hp.png"
test_url "longjump" "https://www.google.com/logos/2012/longjump12-hp.png"
test_url "highjump" "https://www.google.com/logos/2012/highjump12-hp.png"
test_url "cycling" "https://www.google.com/logos/2012/cycling12-hp.png"
test_url "javelin" "https://www.google.com/logos/2012/javelin12-hp.png"
test_url "volleyball" "https://www.google.com/logos/2012/volleyball12-hp.png"

echo ""
echo "-- Alt: sport name variations --"
test_url "tabletennis" "https://www.google.com/logos/2012/tabletennis12-hp.png"
test_url "long_jump" "https://www.google.com/logos/2012/long_jump12-hp.png"
test_url "high_jump" "https://www.google.com/logos/2012/high_jump12-hp.png"
test_url "long-jump" "https://www.google.com/logos/2012/long-jump12-hp.png"
test_url "high-jump" "https://www.google.com/logos/2012/high-jump12-hp.png"

echo ""
echo "========================================="
echo "Wayback Machine for 2012 Olympics"
echo "========================================="
test_url "swimming-wb" "https://web.archive.org/web/2012/https://www.google.com/logos/2012/swimming12-hp.png"
test_url "fencing-wb" "https://web.archive.org/web/2012/https://www.google.com/logos/2012/fencing12-hp.png"

echo ""
echo "========================================="
echo "Google Doodle known working ID patterns"
echo "========================================="

# Let me try various doodle ID formats
# Gerald Lawson was Dec 1, 2022
test_url "lawson-a" "https://www.google.com/logos/doodles/2022/celebrating-gerald-jerry-lawson-6753651837109887-2x.png"
test_url "lawson-b" "https://www.google.com/logos/doodles/2022/celebrating-gerald-jerry-lawson-6753651837109887.2-2xa.gif"
test_url "lawson-c" "https://www.google.com/logos/doodles/2022/celebrating-gerald-jerry-lawson-6753651837109887-law22.gif"
test_url "lawson-d" "https://www.google.com/logos/doodles/2022/celebrating-gerald-jerry-lawson-6753651837109887-s.png"

# Try accessing the doodle page directly  
test_url "lawson-page" "https://www.google.com/doodles/celebrating-gerald-jerry-lawson"

echo ""
echo "========================================="
echo "Cricket doodle"
echo "========================================="
test_url "cricket-html" "https://www.google.com/logos/2017/cricket17/cricket17.html"
test_url "cricket-img1" "https://www.google.com/logos/2017/cricket17/cricket17.png"
test_url "cricket-img2" "https://www.google.com/logos/2017/cricket17/sprite.png"
test_url "cricket-img3" "https://www.google.com/logos/2017/cricket17/images/sprite.png"
test_url "cricket-img4" "https://www.google.com/logos/doodles/2017/icc-champions-trophy-2017-begins-5765398384893952-hp2x.gif"

echo ""
echo "DONE"
