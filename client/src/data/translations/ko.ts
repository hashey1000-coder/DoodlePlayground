import type { GameTranslation } from '../gameTranslations';

export const KO_GAMES: Record<string, GameTranslation> = {
  'snake': {
    title: '구글 스네이크',
    description: 'Google 검색에 내장된 클래식 뱀 게임을 플레이하세요. 벽과 자신의 꼬리를 피하면서 성장하는 뱀을 이끌어 사과를 먹으세요. 오래 살아남을수록 게임이 빨라지고 어려워집니다.\n\n원래 1990년대 후반 노키아 휴대폰에서 인기를 얻은 스네이크는 역사상 가장 유명한 비디오 게임 중 하나가 되었습니다. Google의 브라우저 버전은 원작을 세계적인 현상으로 만든 중독적인 단순함을 충실히 재현합니다.',
    controls: '방향을 바꾸려면 화살표 키를 사용하세요. 사과를 먹으면 더 오래 자랄 수 있습니다. 벽이나 자신의 몸에 부딪히지 않도록 하세요!',
  },
  'pacman': {
    title: 'PAC-MAN 두들',
    description: '2010년 30주년을 기념해 플레이 가능한 Google 두들로 재탄생한 전설적인 PAC-MAN을 플레이하세요. 상징적인 미로를 탐험하고, 모든 점을 먹고, 파워 펠릿으로 유령을 잡으세요.\n\n이것은 Google 최초의 플레이 가능한 두들이었으며 문화적 현상이 되었습니다 — 처음 3일 동안 약 10억 명이 플레이한 것으로 추정됩니다.',
    controls: '미로를 통해 PAC-MAN을 안내하려면 화살표 키를 사용하세요. 레벨을 완료하려면 모든 점을 먹어보세요. 파워 알갱이를 집어서 유령을 파랗게 만들고 먹어서 보너스 포인트를 얻으세요.',
  },
  'champion-island-games': {
    title: '두들 챔피언 아일랜드 게임',
    description: '챔피언 섬을 가로지르는 장대한 RPG 모험을 시작하세요. 7개의 스포츠 미니게임에 참가하고, 일본 민화에서 영감을 받은 활기찬 오픈 월드를 탐험하며, 사이드 퀘스트를 완료하세요.\n\n2020 도쿄 올림픽을 위해 제작된, 역대 가장 크고 야심찬 Google 두들입니다. 일본 애니메이션 스튜디오 STUDIO 4°C와 3년에 걸쳐 개발되었습니다.',
    controls: '화살표 키를 사용하여 캐릭터를 이동하세요. 스페이스바를 눌러 NPC와 상호작용하세요. 각 스포츠에는 고유한 컨트롤이 있습니다. 각 이벤트에 대한 게임 내 튜토리얼을 따르세요.',
  },
  'chrome-dino': {
    title: '크롬 공룡 (오프라인 게임)',
    description: 'Chrome 오프라인 페이지의 유명한 T-Rex 공룡 러너 — 이제 언제든 플레이 가능합니다! 선인장을 뛰어넘고 익룡 아래로 숙이세요.\n\nChrome 공룡 게임은 2014년 Google 디자이너 Sebastien Gabriel이 만들었습니다. 월간 약 2억 7천만 회 플레이로 세계에서 가장 많이 플레이되는 게임 중 하나가 되었습니다.',
    controls: '스페이스바를 누르거나 탭하여 선인장 위로 점프하세요. 익룡 아래로 숙이려면 아래쪽 화살표를 누르세요. 점수가 높아질수록 게임은 더욱 빨라집니다!',
  },
  'magic-cat-academy': {
    title: '매직 캣 아카데미 (할로윈 2016)',
    description: '마법사 고양이 모모가 되어 유령 침략으로부터 마법 학교를 지키세요! 마우스로 기호를 그려 각 유령 위의 모양과 일치하는 주문을 시전하세요.\n\n2016년 할로윈 두들은 Google에서 가장 사랑받는 인터랙티브 창작물 중 하나가 되었습니다. 두들 팀의 실제 검은 고양이를 모델로 한 사랑스러운 주인공 모모는 전 세계 마음을 사로잡았습니다.',
    controls: '마우스나 손가락을 사용하여 각 유령 위에 표시된 기호를 그립니다. 모양을 정확하게 맞춰 주문을 시전하고 유령을 물리치세요. 각 레벨의 모든 유령을 제거하세요!',
  },
  'minesweeper': {
    title: 'Google Minesweeper',
    description: 'Clear the minefield without detonating a single mine in this classic logic puzzle. Use the number clues revealed on each uncovered square to deduce exactly where the hidden mines are, then right-click to flag every dangerous tile you find.\n\nMinesweeper has been a staple of personal computing since Microsoft bundled it with Windows 3.1 in 1992. What began as a simple time-killer became a globally competitive puzzle with dedicated speedrunning communities. This web version preserves the original challenge with customisable grid sizes and difficulty levels.',
    controls: '사각형을 클릭하면 표시됩니다. 숫자는 인접한 광산의 수를 나타냅니다. 의심되는 지뢰를 표시하려면 마우스 오른쪽 버튼을 클릭하세요. 승리하려면 안전한 사각형을 모두 지우세요!',
  },
  'tic-tac-toe': {
    title: 'Google Tic-Tac-Toe',
    description: 'Play the timeless game of Tic-Tac-Toe against Google\'s AI at easy, medium, or impossible difficulty. Place your X or O on the 3×3 grid and try to get three marks in a row horizontally, vertically, or diagonally before your opponent does.\n\nDating back to ancient Egypt, Tic-Tac-Toe is one of the oldest known strategy games in human history. While simple enough for young children to learn, the game introduces fundamental concepts of strategy and forward thinking. At impossible difficulty, the AI plays a mathematically perfect game, making it a great challenge for aspiring strategists.',
    controls: '빈 사각형을 클릭하여 표시를 하세요. 가로, 세로, 대각선으로 연속으로 3개의 X를 얻으면 승리합니다. 시작하기 전에 난이도를 선택하세요.',
  },
  'les-paul-guitar': {
    title: 'Les Paul Guitar Doodle',
    description: 'Strum and record your own guitar riffs on this interactive Google Doodle honouring Les Paul, the legendary inventor of the solid-body electric guitar. Pluck the strings with your mouse, play melodies using your keyboard, and even record multi-track compositions to share with friends.\n\nReleased on 9 June 2011 to celebrate what would have been Les Paul\'s 96th birthday, this Doodle was one of the most popular interactive Doodles ever created. It features a realistic guitar interface that responds to both mouse hovering and keyboard input, letting anyone become a virtual guitarist in seconds.',
    controls: '기타 줄 위에 마우스를 놓고 클릭하여 뜯습니다. 키보드 키 A~L을 사용하여 음을 연주합니다. 녹음 버튼을 클릭하면 멜로디를 캡처하고 재생할 수 있습니다.',
  },
  'basketball-2012': {
    title: 'Basketball 2012 Doodle',
    description: 'Shoot hoops in this London 2012 Olympics basketball Doodle. Press and hold the spacebar to set your shot power, then release at the perfect moment to arc the ball into the basket and rack up the highest score possible within the time limit.\n\nThis Doodle was part of Google\'s series of interactive sports games created for the London 2012 Summer Olympics. Each day of the Games featured a different sport, giving players worldwide a chance to compete in Olympic events right from the Google homepage.',
    controls: '스페이스바를 길게 눌러 사격 강도를 설정한 다음 놓아서 사격하세요. 공이 바스켓 안으로 완벽하게 호를 그리도록 릴리스 시간을 정하세요. 최대한 많은 점수를 획득하세요!',
  },
  'hurdles-2012': {
    title: 'Hurdles 2012 Doodle',
    description: 'Sprint down the track and leap over hurdles in this London 2012 Olympics Doodle. Rapidly alternate pressing the left and right arrow keys to build speed, then time your spacebar jumps perfectly to clear each hurdle without stumbling.\n\nOne of the most popular 2012 Olympic Doodles, the hurdles game became a viral sensation as players competed for the fastest times. The simple but addictive keyboard-mashing mechanic captured the intensity of a real sprint, while the forgiving jump timing made it accessible to players of all ages.',
    controls: '왼쪽 및 오른쪽 화살표 키를 번갈아 빠르게 누르면 실행됩니다. 각 장애물을 뛰어넘으려면 스페이스바를 누르세요. 타이밍을 잘못 맞춰 점프하면 걸려 넘어지고 속도가 느려집니다!',
  },
  'slalom-canoe': {
    title: 'Slalom Canoe 2012 Doodle',
    description: 'Paddle your canoe through the slalom course in this London 2012 Olympics Doodle. Use the left and right arrow keys to steer through each gate in the correct order, aiming for the fastest time without any penalties.\n\nThis water sport Doodle brought the excitement of Olympic canoe slalom to millions of desktop browsers during the London 2012 Games. The intuitive controls and quick gameplay loop made it easy to pick up but challenging to master, especially when trying to thread through every gate without missing any.',
    controls: '카누를 조종하려면 왼쪽 및 오른쪽 화살표 키를 사용하세요. 각 게이트를 하나도 놓치지 않고 순서대로 통과하세요. 가능한 가장 빠른 시간을 목표로 하세요!',
  },
  'soccer-2012': {
    title: 'Soccer 2012 Doodle',
    description: 'Play goalkeeper in this London 2012 Olympics football Doodle. Dive left or right using the arrow keys, or stay in the centre with spacebar, to block incoming penalty kicks and save as many shots as you can.\n\nThis goalkeeper challenge was one of the most played sports Doodles during the 2012 Olympic Games. The quick reflexes required to read the kicker\'s approach and react in time gave players a taste of the high-pressure world of penalty shootouts, one of football\'s most dramatic moments.',
    controls: '각 방향으로 다이빙하려면 왼쪽 및 오른쪽 화살표 키를 사용하세요. 중앙에 머물려면 스페이스바를 누르세요. 키커의 슛에 빠르게 반응하여 막아내세요!',
  },
  'robert-moog': {
    title: 'Robert Moog Synthesiser Doodle',
    description: 'Twist knobs and patch cables on a virtual Moog synthesiser in this interactive Doodle honouring Robert Moog, the pioneer of electronic music. Adjust oscillators, filters, and effects to craft your own unique electronic sounds, then play melodies using your keyboard.\n\nReleased on 23 May 2012 for what would have been Robert Moog\'s 78th birthday, this Doodle is a fully functional four-oscillator synthesiser. Moog\'s inventions revolutionised popular music in the 1960s and 1970s, influencing artists from Stevie Wonder to Kraftwerk, and this interactive tribute lets anyone experience the joy of analogue sound design.',
    controls: '노브를 클릭하고 드래그하여 오실레이터, 필터 및 효과를 조정하세요. 키보드를 사용하여 음을 연주합니다. 다양한 설정을 실험하여 독특한 사운드를 만들어보세요.',
  },
  'alan-turing': {
    title: 'Alan Turing Machine Doodle',
    description: 'Solve logic puzzles on a virtual Turing machine to honour Alan Turing, the father of computer science. Program the tape head by setting states and transitions, then run the machine to see if it produces the correct binary output for each increasingly difficult challenge.\n\nCreated for what would have been Turing\'s 100th birthday on 23 June 2012, this Doodle is a genuine educational tool that teaches the fundamentals of computation theory. Alan Turing\'s concept of a universal computing machine laid the theoretical groundwork for every modern computer, and his wartime codebreaking work at Bletchley Park helped turn the tide of World War II.',
    controls: '튜링 기계의 상태와 전환을 클릭하여 프로그래밍하세요. 재생을 눌러 기계를 실행하고 올바른 출력이 생성되는지 확인하십시오. 모든 레벨을 해결하세요!',
  },
  'zamboni': {
    title: 'Zamboni Doodle',
    description: 'Drive the Zamboni ice resurfacing machine across the frozen rink in this charming Doodle. Use the arrow keys to steer the Zamboni over every patch of rough ice, polishing the entire surface before time runs out.\n\nThis Doodle celebrated the birthday of Frank Zamboni, who invented the iconic ice resurfacing machine in 1949. The relaxing gameplay of methodically covering every inch of the rink became a surprise hit, proving that even the most mundane tasks can be satisfying when turned into a game.',
    controls: '링크 주위에 Zamboni를 운전하려면 화살표 키를 사용합니다. 거친 얼음 조각을 모두 덮어 표면을 다시 덮으세요. 시간이 다 가기 전에 링크 전체를 청소해 보세요!',
  },
  'doodle-crossword': {
    title: 'Crossword Puzzle Doodle',
    description: 'Solve the Google crossword puzzle with clues about the history of crosswords and general knowledge. Click on a clue to highlight its row or column, type your answers letter by letter, and fill in the entire grid to win.\n\nThis interactive Doodle celebrated the 100th anniversary of the crossword puzzle, which was first published in the New York World newspaper on 21 December 1913 by journalist Arthur Wynne. What started as a simple word game called "Word-Cross" evolved into one of the world\'s most popular pastimes, now enjoyed by millions in newspapers, apps, and right here in your browser.',
    controls: '행이나 열을 강조 표시하려면 단서를 클릭하세요. 답을 입력하려면 글자를 입력하세요. 가로와 아래 단서 사이를 클릭하세요. 승리하려면 그리드를 완성하세요!',
  },
  'doodle-roswell': {
    title: 'Roswell\'s 66th Anniversary Doodle',
    description: 'Help a stranded alien find the scattered pieces of its crashed spaceship in this charming point-and-click adventure set in 1947 Roswell, New Mexico. Click on objects in each scene to interact with them, solve simple puzzles, and piece together the UFO so your extra-terrestrial friend can fly home.\n\nCreated for the 66th anniversary of the famous Roswell incident, this three-scene Doodle is one of Google\'s most beloved adventure games. The whimsical art style and clever environmental puzzles make it a delightful five-minute experience that captures the mystery and humour of UFO folklore.',
    controls: '상호작용하려면 장면의 개체를 클릭하세요. 다양한 위치에 흩어져 있는 모든 우주선 부품을 찾아보세요. 간단한 퍼즐을 풀어 새로운 영역을 잠금 해제하세요.',
  },
  'mothers-day-2013': {
    title: 'Mother\'s Day 2013 Doodle',
    description: 'Create a personalised card for Mother\'s Day by choosing from various craft supplies, stickers, and decorations in this heartwarming interactive Doodle. Design a beautiful card using the virtual art supplies, then share your creation with the special mum in your life.\n\nThis 2013 Mother\'s Day Doodle celebrated the creativity and love that goes into handmade cards. The intuitive drag-and-drop craft interface makes it easy for children and adults alike to create something truly personal, continuing the time-honoured tradition of showing appreciation through homemade gifts.',
    controls: '다양한 공예품을 클릭하여 카드를 장식하세요. 스티커, 그림, 메시지를 선택하세요. 완성된 카드를 인쇄하거나 공유하세요!',
  },
  'doodle-google-15th': {
    title: 'Google\'s 15th Birthday Doodle',
    description: 'Celebrate Google\'s 15th birthday by whacking a piñata full of candy and surprises! Click or press spacebar to swing the stick at the star-shaped piñata, break it open, and collect as many treats as you can in this festive mini-game.\n\nReleased on 27 September 2013 to mark Google\'s 15th anniversary, this cheerful Doodle captures the party spirit with colourful confetti and cascading candy. Google was officially founded on 4 September 1998 by Larry Page and Sergey Brin in a garage in Menlo Park, California, growing from a Stanford research project into the world\'s most-used search engine.',
    controls: '피냐타를 향해 막대기를 휘두르려면 클릭하거나 스페이스바를 누르세요. 타격 시간을 맞춰서 열어 사탕을 사방에 흩뿌리세요. 최대한 많이 수집하세요!',
  },
  'rubiks-cube': {
    title: 'Rubik\'s Cube Doodle',
    description: 'Twist and turn a fully interactive virtual Rubik\'s Cube to solve it in as few moves as possible. Click and drag the faces to rotate them, working to align each side into a single solid colour across all six faces of the cube.\n\nThis Doodle celebrated the 40th anniversary of the Rubik\'s Cube, invented by Hungarian architect Ernő Rubik in 1974. With over 43 quintillion possible configurations but only one solution, the Rubik\'s Cube is the world\'s best-selling puzzle toy, with over 450 million cubes sold. The current world record for solving one is under 3.5 seconds.',
    controls: '큐브 면을 회전하려면 클릭하고 드래그하세요. 각 면에 단일 색상이 표시되도록 하세요. 가능한 한 최소한의 움직임을 목표로 하세요!',
  },
  'doodle-beethoven': {
    title: 'Beethoven Doodle',
    description: 'Help Ludwig van Beethoven put his famous compositions back together by arranging scrambled musical bars in the correct order. Drag and drop the shuffled measures into their proper sequence, and listen to each masterpiece play back beautifully when you get it right.\n\nThis 2015 Doodle celebrated Beethoven\'s 245th birthday with a delightful musical puzzle featuring some of his most iconic works, including Für Elise and the Fifth Symphony. The charming animated narrative follows Beethoven rushing to his concert while his sheet music flies away, making each puzzle a race against time to reconstruct the great composer\'s genius.',
    controls: '뮤지컬 바를 올바른 순서로 끌어서 놓습니다. 각 곡이 제대로 연주되면 들어보세요. 모든 구성을 완성해보세요!',
  },
  'eiji-tsuburaya': {
    title: 'Eiji Tsuburaya Doodle',
    description: 'Play through a retro side-scrolling game honouring Eiji Tsuburaya, the legendary creator of Godzilla and Ultraman special effects. Battle giant monsters, dodge obstacles, and use special effects beams to save the city across multiple action-packed stages.\n\nReleased on 7 July 2015 for what would have been Tsuburaya\'s 114th birthday, this Doodle pays tribute to the father of Japanese tokusatsu (special effects) cinema. Tsuburaya\'s pioneering techniques, including miniature sets and suit-motion monster performances, revolutionised the film industry and created iconic franchises that have entertained audiences for over 60 years.',
    controls: '이동하려면 화살표 키를 사용하고 공격하려면 스페이스바를 사용하세요. 특수 효과 광선으로 몬스터를 공격하여 몬스터를 처치하세요. 모든 스테이지를 완료하세요!',
  },
  'pony-express': {
    title: 'Pony Express Doodle',
    description: 'Ride your horse across the American frontier, collecting letters and mail pouches while dodging cacti, fences, and other obstacles in this endless runner. Press the up and down arrow keys to switch lanes and grab every piece of mail along the trail.\n\nThis Doodle celebrated the 155th anniversary of the Pony Express, the legendary mail delivery service that operated from April 1860 to October 1861. Despite lasting only 18 months, the Pony Express became an enduring symbol of the American frontier spirit, with riders covering nearly 2,000 miles from Missouri to California in just 10 days.',
    controls: '차선을 전환하려면 위쪽 및 아래쪽 화살표 키를 누르세요. 길을 따라 편지와 우편물을 수집하세요. 선인장, 울타리 및 기타 장애물을 피하십시오. 우편물을 배달하세요!',
  },
  'global-candy-cup': {
    title: 'Global Candy Cup 2015',
    description: 'Pick your team and compete in the Global Candy Cup — a Halloween trick-or-treating race to collect the most candy! Choose from a witch, ghost, vampire, or other spooky character and race through neighbourhoods scooping up sweet treats.\n\nThis 2015 Halloween Doodle introduced a competitive team-based element where players worldwide contributed to global team scores. The colourful, kid-friendly art style and simple click-to-collect gameplay made it a perfect Halloween activity for players of all ages.',
    controls: '집 사이를 이동하려면 클릭하거나 탭하세요. 사탕을 모으고 장애물을 피하세요. 할로윈 밤이 끝나기 전에 다른 팀과 경쟁하여 가장 많은 간식을 획득하세요!',
  },
  'google-cat-game': {
    title: 'Google Cat Wizard Game',
    description: 'The beloved Magic Cat Academy game starring Momo the cat wizard — swipe and draw spell symbols to defend your school from hordes of invading ghosts! Match the shapes shown above each ghost accurately and quickly to cast the right spell and banish them.\n\nAlso known as the "Google Halloween Cat Game," this is one of the most searched-for Google games year after year. Momo the cat has become an unofficial Google mascot for Halloween, starring in three sequel games. The original 2016 version remains a fan favourite thanks to its charming animation, accessible gameplay, and the pure joy of drawing magic spells.',
    controls: '마우스나 손가락을 사용하여 각 유령 위에 표시된 기호를 그립니다. 모양을 정확하게 맞춰 주문을 시전하고 유령을 물리치세요. 각 레벨의 모든 유령을 제거하세요!',
  },
  'doodle-clara-rockmore': {
    title: 'Clara Rockmore Theremin Doodle',
    description: 'Play a virtual theremin honouring Clara Rockmore, considered the greatest theremin virtuoso of all time. Move your mouse up and down to control pitch and left and right to adjust volume, recreating the eerie, wavering tones of this unique electronic instrument.\n\nReleased on 9 March 2016 for what would have been Clara Rockmore\'s 105th birthday, this Doodle features a beautifully animated lesson mode that teaches you to play actual melodies. The theremin, invented in 1920, is the only musical instrument played without physical contact — performers wave their hands near two antennas to control pitch and volume.',
    controls: '마우스를 위아래로 움직여 피치를 변경하세요. 좌우로 움직여 볼륨을 조절하세요. 화면에 나오는 음악에 맞춰 연주하거나 자신만의 멜로디를 만들어 보세요.',
  },
  'doodle-scoville': {
    title: 'Scoville Doodle',
    description: 'Test your tolerance for heat in this spicy Doodle celebrating Wilbur Scoville and his famous pepper heat scale! Scoop ice cream and fling it at increasingly fiery peppers that march toward you. Each level features hotter peppers, from mild jalapeños to scorching Carolina Reapers.\n\nCreated for the 151st birthday of Wilbur Scoville on 22 January 2016, this action-packed Doodle teaches players about the Scoville scale while they play. Scoville developed his organoleptic test in 1912 to measure the pungency of chilli peppers, and his scale is still used today — ranging from 0 (bell pepper) to over 2 million (Carolina Reaper).',
    controls: '공격하는 고추에 아이스크림 국자를 던지려면 클릭하세요. 고추가 당신에게 도달하기 전에 각 고추를 칠 시간을 정하세요. 모든 열 수준에서 살아남으세요!',
  },
  'doodle-valentines-day': {
    title: 'Valentine\'s Day 2017 — Pangolin Love',
    description: 'Help a lovestruck pangolin serenade its sweetheart by crafting delicious chocolate treats in this Valentine\'s Day puzzle game. Mix ingredients according to recipes, shape the chocolates, and serve them to win the pangolin\'s heart across multiple sweet levels.\n\nThis 2017 Valentine\'s Day Doodle featured the endangered pangolin to raise awareness about the world\'s most trafficked mammal. The four-level chocolate-making adventure charmed players with its adorable animation style while highlighting a serious conservation message — all eight pangolin species are threatened with extinction due to illegal poaching.',
    controls: '재료를 클릭하고 드래그하여 초콜릿을 섞으세요. 조리법을 따르고 올바른 간식을 만드십시오. 천산갑의 사랑에 관심이 있는 사람에게 먹이를 주면 발전할 수 있습니다!',
  },
  'pangolin-love': {
    title: 'Pangolin Love Doodle',
    description: 'A charming Valentine\'s adventure where you craft chocolates to help a shy pangolin express its love. Follow recipes to mix, mould, and decorate sweet treats, then deliver them to your pangolin\'s sweetheart across four progressively challenging levels.\n\nAlso known as the Valentine\'s Day 2017 Doodle, this game raised global awareness about pangolins — the world\'s most trafficked animal. The loveable character design made pangolins go viral, with conservation organisations reporting significant increases in donations and awareness following the Doodle\'s release.',
    controls: '재료를 클릭하고 드래그하여 초콜릿을 섞으세요. 조리법을 따르고 올바른 간식을 만드십시오. 천산갑의 사랑에 관심이 있는 사람에게 먹이를 주면 발전할 수 있습니다!',
  },
  'doodle-cricket-game': {
    title: 'Cricket Doodle Game',
    description: 'Play a delightful game of cricket with an adorable cast of snails and crickets (the insects!) in this Google Doodle celebrating the ICC Champions Trophy. Click or tap to swing the bat at the right moment and smash the ball to score as many runs as possible.\n\nReleased during the 2017 ICC Champions Trophy tournament, this Doodle brought the joy of cricket to millions who might never have played before. The charming insect characters — a snail bowler and cricket batsmen — made the sport accessible and fun, while the simple one-tap mechanic perfectly captured the timing-based thrill of batting.',
    controls: '공이 볼링되는 동안 배트를 휘두르려면 클릭하거나 탭하세요. 클릭 시간을 맞춰 공을 치고 득점하세요. 놓치지 마세요. 아니면 나가세요!',
  },
  'doodle-kids-coding': {
    title: 'Coding for Carrots (Kids Coding Doodle)',
    description: 'Help a cute bunny collect all the carrots by snapping directional coding blocks together to create a program that guides its path. Drag and drop arrow blocks, loop blocks, and action blocks to build a sequence, then press play to watch the bunny follow your instructions.\n\nCreated for the 50th anniversary of kids\' coding languages, this Doodle introduces fundamental programming concepts in the most approachable way imaginable. Inspired by the Logo programming language created in 1967, the six increasingly complex levels teach sequencing, loops, and conditionals — the building blocks of computer science — all through the adorable goal of helping a bunny eat carrots.',
    controls: '방향 코드 블록을 시퀀스 영역으로 끌어다 놓습니다. 재생 버튼을 눌러 프로그램을 실행하고 토끼가 지시를 따르는 모습을 지켜보세요.',
  },
  'birth-of-hip-hop': {
    title: 'Birth of Hip Hop Doodle',
    description: 'Spin records on dual turntables and scratch your way through hip hop history in this groundbreaking interactive Doodle. Mix beats, crossfade between tracks, and unlock legendary samples as you learn about the origins and evolution of hip hop culture.\n\nReleased on 11 August 2017 to celebrate the 44th anniversary of hip hop\'s birth at a back-to-school party in the Bronx, this Doodle is a love letter to DJ culture. It features a fully functional turntable interface with real scratch mechanics, and its guided historical narrative takes players from DJ Kool Herc\'s first breakbeat to the global cultural movement hip hop became.',
    controls: '턴테이블 사이를 믹스하려면 크로스페이더를 클릭하고 드래그하세요. 비닐을 클릭하고 드래그하여 레코드를 스크래치하세요. 진행하면서 새로운 트랙과 비트를 잠금 해제하세요.',
  },
  'oskar-fischinger': {
    title: 'Oskar Fischinger Music Doodle',
    description: 'Create mesmerising visual music compositions in this interactive Doodle honouring abstract animator Oskar Fischinger. Place geometric shapes on a musical grid, adjust tempo and instruments, and watch as your visual creation generates a unique, beautiful melody.\n\nOskar Fischinger was a pioneering German-American animator who created abstract films synchronised to music in the 1920s–1960s. His work directly inspired the "Toccata and Fugue" sequence in Disney\'s Fantasia. This Doodle captures his artistic philosophy that visual art and music are inseparable, letting anyone experience the joy of creating synchronised audio-visual art.',
    controls: '그리드를 클릭하여 모양을 배치하고 제거하세요. 각 모양마다 다른 소리가 납니다. 템포, 악기, 효과를 조정하여 시각적 음악 작품을 만드세요.',
  },
  'komodo-national-park': {
    title: 'Komodo National Park Quiz Doodle',
    description: 'Take a fascinating trivia quiz about the Komodo dragon and its national park habitat in Indonesia. Answer questions about the world\'s largest living lizard, its island home, and the unique ecosystem of Komodo National Park.\n\nThis educational Doodle celebrated the 37th anniversary of Komodo National Park\'s founding and its status as a UNESCO World Heritage Site. Komodo dragons can grow over 3 metres long and weigh up to 70 kilograms, making them the largest lizards on Earth. The park spans several volcanic islands and protects some of the most biodiverse marine environments in the world.',
    controls: '각 퀴즈 질문에 대한 답변을 클릭하세요. 코모도왕도마뱀과 그 서식지에 관한 사실을 알아보세요. 가능한 한 많은 정답을 획득하세요!',
  },
  'garden-gnomes': {
    title: 'Garden Gnomes Doodle',
    description: 'Fling garden gnomes from a trebuchet as far as possible across beautiful garden landscapes! Click and hold to set your launch angle, then release to send the gnome soaring through flowerbeds, over hedgerows, and across ponds in pursuit of maximum distance.\n\nThis 2018 Doodle celebrated the history of garden gnomes, which originated in 19th-century Germany as "Gartenzwerge" (garden dwarfs). The satisfying physics-based gameplay and charming pastoral scenery made it a viral hit, with players competing to achieve the longest throws. The different garden terrains and bonus bounce mechanics add surprising depth to this simple but addictive launcher.',
    controls: '발사 각도를 설정하려면 길게 클릭한 다음 손을 떼면 노움이 날아갑니다. 오래 붙잡을수록 더 많은 힘을 얻을 수 있습니다. 최대 거리에 도달해보세요!',
  },
  'halloween': {
    title: 'The Great Ghoul Duel (Halloween 2018)',
    description: 'Compete in the Great Ghoul Duel, a spooky multiplayer Doodle where two ghost teams race to collect the most wandering spirit flames! Navigate haunted halls, scoop up glowing flames, and rush them back to your team\'s base — but watch out, because opponents can steal flames trailing behind you.\n\nThe 2018 Halloween Doodle was Google\'s first-ever multiplayer game, connecting players worldwide in real-time team-based matches. The adorable ghost character designs, strategic flame-stealing mechanic, and competitive leaderboards made it an instant classic. Players could customise their ghost\'s appearance and develop strategies for efficient flame collection.',
    controls: '화살표 키를 사용하거나 스와이프하여 유령을 지도 주위로 이동하세요. 방황하는 영혼의 불꽃을 수집하고 기지로 가져와 점수를 획득하세요. 적의 뒤를 쫓는 불꽃을 훔쳐라!',
  },
  'baseball': {
    title: 'Baseball Doodle (4th of July)',
    description: 'Step up to the plate and hit home runs in this Fourth of July baseball Doodle! Play as classic American food characters — hot dogs, popcorn, ketchup bottles, and more — and time your click or tap to swing the bat and smash the ball past the food-themed fielders.\n\nReleased for Independence Day 2019, this Doodle perfectly captures the spirit of America\'s pastime with a playful twist. The charming food character designs, satisfying crack of the bat, and progressively faster pitches make each at-bat exciting. The game tracks your home run distance and total runs, encouraging players to perfect their timing for the ultimate slugfest.',
    controls: '공이 투구될 때 배트를 휘두르려면 클릭하거나 탭하세요. 스윙 타이밍을 맞춰서 공을 최대한 멀리 쳐보세요. 팀의 점수를 획득하세요!',
  },
  'doodle-loteria': {
    title: 'Celebrating Lotería Doodle',
    description: 'Play the beloved Mexican card game of Lotería in this colourful multiplayer Doodle. Listen for the caller to announce each card with a traditional riddle, then click the matching image on your board to mark it. Complete a pattern to shout "¡Lotería!" and win the round.\n\nOften called "Mexican bingo," Lotería has been a cherished family tradition in Mexico since the 18th century, originating from an Italian card game brought by Spanish colonists. This 2019 Doodle celebrates the game\'s cultural significance with beautifully illustrated cards featuring both traditional and modern imagery. Players compete online against others worldwide in this faithful digital adaptation.',
    controls: '보드에서 일치하는 카드가 호출되면 클릭하세요. "¡Lotería!"를 호출하려면 행, 열 또는 패턴을 완성하세요. 그리고 라운드에서 승리하세요.',
  },
  'celebrating-bach': {
    title: 'Celebrating Johann Sebastian Bach',
    description: 'Compose your own harmonies in the style of Johann Sebastian Bach using artificial intelligence! Write a simple melody by clicking notes on the musical staff, then press the "Harmonise" button to let a machine learning model add Bach-style counterpoint and accompaniment.\n\nThis groundbreaking 2019 Doodle was the first to use AI and machine learning as its core mechanic. Google trained a model called Coconet on 306 of Bach\'s chorale compositions, enabling it to harmonise any melody in Bach\'s distinctive Baroque style. The result is a magical creative tool that makes the genius of the 18th century\'s greatest composer accessible to anyone.',
    controls: '오선지를 클릭하여 메모를 작성하고 멜로디를 만드세요. AI가 바흐 스타일 반주를 추가하도록 하려면 "조화" 버튼을 누르세요. 당신의 창조물을 들어보세요!',
  },
  'doodle-earth-day': {
    title: 'Earth Day 2020 — Bee Doodle',
    description: 'Help a bee pollinate flowers across a beautiful garden in this charming Earth Day Doodle. Fly from flower to flower, collecting pollen on your fuzzy body and spreading it to help the entire garden bloom with vibrant colours and life.\n\nCreated for Earth Day 2020 as part of Google\'s "Stay and Play at Home" series during the pandemic, this Doodle highlights the critical role bees play in our ecosystem. Bees pollinate approximately 75% of all flowering plants and about 35% of food crops worldwide. The gentle, educational gameplay reminds us how connected all living things are.',
    controls: '화살표 키를 사용하거나 클릭하여 꽃 사이에 벌을 안내하세요. 꽃에 착지하여 꽃가루를 모은 다음 다른 꽃을 방문하여 수분을 시킵니다. 정원 전체가 꽃을 피우도록 도와주세요!',
  },
  'magic-cat-academy-2': {
    title: 'Magic Cat Academy 2 (Halloween 2020)',
    description: 'Momo the cat wizard returns for an underwater adventure, diving beneath the waves to battle ghostly sea spirits! Draw symbols to cast spells against new oceanic enemies including phantom jellyfish, spectral anglerfish, and ghostly octopi, each requiring different spell patterns to defeat.\n\nThe 2020 Halloween sequel took Momo from the schoolhouse to the ocean depths, introducing aquatic environments and marine-themed ghost enemies. Released during the Stay and Play at Home series, it brought joy to millions during a challenging year. The expanded spell vocabulary and boss battles made it a more ambitious experience than the beloved original.',
    controls: '마우스나 손가락을 사용하여 각 유령 위에 표시된 기호를 그립니다. 새로운 수중 적에게는 다양한 주문 패턴이 필요합니다. 모든 유령을 물리치고 각 레벨을 클리어하세요!',
  },
  'doodle-mbira': {
    title: 'Celebrating Mbira Doodle',
    description: 'Play a virtual mbira — a traditional African thumb piano — in this musical Doodle celebrating one of Zimbabwe\'s most treasured instruments. Click the metal tines to create beautiful, resonant melodies, following a guided lesson or improvising your own compositions.\n\nThe mbira dzavadzimu has been central to Shona culture for over a thousand years, used in ceremonies, storytelling, and spiritual communication. This Doodle honours its rich heritage with an authentic-sounding digital recreation that teaches players basic patterns and scales. The instrument\'s mesmerising, bell-like tones have influenced musicians worldwide, from Paul Simon to Björk.',
    controls: '음표를 재생하려면 mbira 타인을 클릭하세요. 안내된 멜로디를 따라가거나 나만의 작곡을 만들어 보세요. 다양한 리듬과 패턴을 실험해보세요.',
  },
  'doodle-history-of-pizza': {
    title: 'History of Pizza Doodle',
    description: 'Slice and serve pizzas in this interactive Doodle celebrating the delicious history of pizza! Draw lines with your mouse to cut each pizza into the exact number of equal slices the customer orders, earning points for precision and speed.\n\nThis 2021 Doodle took players on a culinary journey through pizza\'s 10,000-year history, from ancient flatbreads in Sardinia to the modern Margherita. Each level features a different historical pizza style, teaching players about the dish\'s evolution while challenging their cutting accuracy. The satisfying slicing mechanic and mouth-watering pixel art made this one of the most replayed Doodles ever.',
    controls: '마우스로 선을 그려 피자를 정확한 수의 동일한 조각으로 자릅니다. 상단에 표시된 순서를 일치시키세요. 최고의 점수를 얻으려면 정확해야 합니다!',
  },
  'wewa-weaving': {
    title: 'We:wa Weaving Doodle',
    description: 'Weave colourful patterns on a virtual loom in this Doodle honouring the traditional indigenous art of We:wa weaving from the Pueblo peoples. Select different yarn colours, choose traditional patterns, and shuttle the threads through the warp to create beautiful handwoven textiles.\n\nThis 2021 Doodle celebrates the centuries-old weaving traditions of the Pueblo peoples of the American Southwest. Weaving is a sacred art form that has been passed down through generations, with each pattern carrying cultural meaning and storytelling significance. The relaxing, meditative gameplay invites players to appreciate the skill and artistry that goes into every handwoven piece.',
    controls: '날실을 통해 실을 짜려면 베틀을 클릭하세요. 다양한 색상과 패턴을 선택하세요. 직조를 완성하여 아름다운 전통 직물 디자인을 드러냅니다.',
  },
  'doodle-valentines-day-2022': {
    title: 'Valentine\'s Day 2022 — Hamster Doodle',
    description: 'Guide adorable hamsters through a maze of puzzles and obstacles to reunite them with their sweetheart in this Valentine\'s Day Doodle. Click or tap to interact with puzzle elements, move platforms, and clear paths so the hamster couple can be together again.\n\nThis 2022 Valentine\'s Day Doodle charmed players with its tiny protagonist and clever puzzle mechanics. Each level introduces new obstacles and mechanics that require creative thinking to solve. The heartwarming premise of reuniting two hamsters in love, combined with the cute character animations, made it a perfect Valentine\'s Day activity.',
    controls: '퍼즐 요소와 상호 작용하려면 클릭하거나 탭하세요. 장애물을 해결하여 각 레벨을 통해 햄스터를 안내하세요. 햄스터 커플을 다시 만나보세요!',
  },
  'celebrating-petanque': {
    title: 'Celebrating Pétanque Doodle',
    description: 'Toss boules and aim for the cochonnet (target ball) in this Doodle celebrating the classic French lawn game of pétanque. Click and drag to set your throw angle and power, then release to send your boule rolling across the terrain, trying to land as close to the target as possible.\n\nPétanque originated in the south of France in 1907 and has since become one of the country\'s most popular recreational activities. This Doodle captures the relaxed, social spirit of the game with sun-drenched Provençal landscapes and authentic physics. The game is played in over 80 countries worldwide, with annual world championships drawing competitors from across the globe.',
    controls: '클릭하고 드래그하여 던지는 각도와 힘을 설정하세요. 부울을 던지려면 손을 떼세요. 코쇼넷(타겟볼)에 최대한 가깝게 착지하는 것을 목표로 하세요!',
  },
  'boba-bubble-tea': {
    title: 'Celebrating Bubble Tea Doodle',
    description: 'Mix and match flavours to create the perfect bubble tea in this interactive Doodle celebrating the beloved Taiwanese drink! Choose your tea base, add flavourings, select toppings, and pick your favourite boba type to craft a delicious custom drink.\n\nBubble tea was invented in Taiwan in the 1980s and has since become a global phenomenon enjoyed in over 30 countries. This 2023 Doodle explores the drink\'s rich history and incredible variety, from classic milk tea with tapioca pearls to modern fruit tea with popping boba. The colourful, playful interface lets you experiment with thousands of flavour combinations.',
    controls: '음료에 재료를 추가하려면 재료를 클릭하세요. 차 베이스, 맛, 토핑, 보바 종류를 선택하세요. 모든 것을 섞어서 완벽한 버블티를 만들어보세요!',
  },
  'celebrating-pani-puri': {
    title: 'Celebrating Pani Puri Doodle',
    description: 'Serve delicious pani puri to a queue of hungry customers in this fast-paced Doodle celebrating India\'s most beloved street food! Fill crispy puris with the right combination of spiced water, chutneys, and fillings, serving each customer before they get impatient and leave.\n\nPani puri is one of India\'s most iconic street foods, known by different names across the subcontinent — gol gappa in North India, puchka in Bengal, and pani puri in Maharashtra. This 2023 Doodle captures the excitement and speed of a real pani puri stall, where vendors assemble each bite-sized explosion of flavour in seconds. The game became especially popular in South Asia, where millions recognised their favourite snack.',
    controls: '클릭하여 각 푸리를 떠서 물과 처트니의 올바른 조합으로 채웁니다. 고객이 떠나기 전에 완성된 파니푸리를 고객에게 서빙하세요. 그들이 기다리게 하지 마세요!',
  },
  'celebrating-lake-xochimilco': {
    title: 'Celebrating Lake Xochimilco Doodle',
    description: 'Explore the floating gardens of Lake Xochimilco and guide an adorable axolotl through its waterway habitat in this beautiful interactive Doodle. Navigate the canals, interact with the environment, and learn about this unique UNESCO World Heritage Site in Mexico City.\n\nLake Xochimilco\'s chinampas (floating gardens) are a remnant of pre-Hispanic agriculture dating back to the Aztec empire. This 2023 Doodle raises awareness about the critically endangered axolotl, a remarkable salamander that can regenerate lost limbs and exists in the wild only in Xochimilco\'s canals. The stunning artwork and educational content highlight the urgent need to protect this unique ecosystem.',
    controls: '운하를 통해 axolotl을 안내하려면 클릭하거나 탭하세요. 환경과 상호작용하고 소치밀코 호수의 독특한 수상 정원 생태계에 대해 알아보세요.',
  },
  'celebrating-popcorn': {
    title: 'Celebrating Popcorn Doodle',
    description: 'Pop, catch, and serve delicious popcorn in this multiplayer celebration Doodle game! Time your clicks to pop kernels at the perfect moment, catch the flying popcorn in your bucket, and score bonus points for specially seasoned pieces.\n\nThis 2024 Doodle celebrates the history of popcorn, which has been enjoyed for thousands of years — archaeological evidence shows that people in Peru were eating popcorn as early as 4700 BCE. The cheerful multiplayer gameplay lets you cooperate or compete with friends, and the various seasoning flavours from around the world showcase popcorn\'s global popularity.',
    controls: '적절한 순간에 커널을 팝업하려면 클릭하거나 탭하세요. 왼쪽과 오른쪽으로 움직여 양동이에 팝콘을 담아보세요. 노련한 조각을 잡아서 보너스 포인트를 얻으세요!',
  },
  'magic-cat-academy-3': {
    title: 'Magic Cat Academy 3 (Halloween 2024)',
    description: 'Momo the cat wizard returns for a third spooky adventure in the Magic Cat Academy! Cast spells by drawing symbols to battle new ghost types in enchanted locations, with fresh enemies, challenging boss fights, and powerful new spell combinations to discover.\n\nThe 2024 Halloween Doodle continues the beloved Magic Cat Academy series, which has become Google\'s most popular recurring game franchise. Each instalment has expanded the gameplay with new environments, enemies, and spell mechanics while maintaining the charming art style and intuitive draw-to-cast system that made the original a classic.',
    controls: '마우스나 손가락을 사용하여 각 유령 위에 표시된 기호를 그립니다. 새로운 유령 유형에는 새로운 주문 패턴이 필요합니다. 모든 유령을 물리치고 각 레벨을 클리어하세요!',
  },
  'rise-of-the-half-moon': {
    title: 'Rise of the Half Moon Doodle',
    description: 'Play a strategic card game where you balance day and night cards to build powerful combos and outscore your opponent. Select cards from your hand carefully, considering how sun and moon cards interact to create chain reactions and bonus points.\n\nThis recurring Google Doodle features deep tactical gameplay wrapped in beautiful celestial artwork. The game\'s elegant rule set — balancing light and dark, building card synergies, and timing your strongest plays — offers surprising strategic depth. Multiple chapters were released throughout 2024-2025, creating an ongoing saga that kept players coming back for new challenges.',
    controls: '클릭하여 손에 있는 카드를 선택하고 플레이하세요. 태양과 달 카드의 균형을 맞춰 강력한 콤보를 만들어보세요. 각 라운드에서 상대방보다 더 많은 점수를 획득하여 승리하세요!',
  },
  'chinese-new-year-snake': {
    title: 'Chinese New Year Snake Game',
    description: 'Celebrate the Year of the Snake with this festive twist on the classic Snake game! Slither around the board collecting lucky red envelopes, lanterns, and traditional Chinese New Year symbols while your serpentine body grows longer with each item collected.\n\nThis special edition Snake game honours the Chinese zodiac and the traditions of Lunar New Year, one of the most important celebrations in Chinese culture. The Year of the Snake comes around every 12 years, and in Chinese astrology, the snake symbolises wisdom, elegance, and charm. The festive visual design and lucky item collection add a cultural twist to the timeless gameplay.',
    controls: '뱀의 방향을 변경하려면 화살표 키를 사용하거나 스와이프하세요. 벽과 자신의 꼬리를 피하면서 아이템을 모아서 더 오래 성장해보세요.',
  },
  'doctor-who': {
    title: 'Doctor Who 50th Anniversary Doodle',
    description: 'Play as all the Doctors through a point-and-click adventure celebrating Doctor Who\'s 50th anniversary! Navigate through levels inspired by classic episodes, pick up items, solve puzzles, and avoid iconic enemies like the Daleks, Cybermen, and Weeping Angels.\n\nCreated in November 2013 for the 50th anniversary of the BBC\'s legendary science fiction series, this Doodle lets fans play through six levels, each featuring a different Doctor and their era\'s signature villains. Doctor Who first aired on 23 November 1963 and has become the longest-running science fiction television series in history, with millions of devoted fans worldwide.',
    controls: '각 레벨에서 의사를 이동하려면 클릭하세요. 아이템을 모아서 퍼즐을 푸는 데 사용하세요. Daleks와 다른 적을 피하세요!',
  },
  't-rex-run-3d': {
    title: 'T-Rex Run 3D',
    description: 'Experience the classic Chrome dinosaur game reimagined in stunning full 3D! Run through an expansive desert landscape with depth and perspective, dodge obstacles coming from all directions, and collect power-ups and coins for bonus points in this immersive endless runner.\n\nThis fan-made 3D version transforms the beloved flat side-scroller into a fully three-dimensional experience with textured environments, dynamic lighting, and multiple camera angles. The added dimension creates new gameplay possibilities, including lateral dodging and environmental exploration, while preserving the simple one-button jump mechanic that made the original so addictive.',
    controls: '점프하려면 스페이스바를 누르고 몸을 숙이려면 아래쪽 화살표를 누르세요. 3D에서 피하려면 왼쪽 및 오른쪽 화살표를 사용하십시오. 보너스 포인트를 위해 코인과 파워업을 모아보세요!',
  },
  'dino-swords': {
    title: 'Dino Swords',
    description: 'The Chrome dinosaur game with an arsenal of weapons! As you run through the desert, pick up swords, guns, hammers, and gadgets that automatically destroy cacti and pterodactyls in your path. Each weapon has limited uses, so choose wisely.\n\nCreated by MSCHF, the viral internet art collective, Dino Swords adds 26 different weapons to the familiar Chrome dino formula. From a classic katana to a gravity gun to a literal nuke, each weapon completely changes how you play. The absurd humour and creative weapon designs turned this parody into a beloved game in its own right.',
    controls: '점프하고 무기를 수집하려면 스페이스바를 누르세요. 자동으로 사용하여 장애물을 파괴하세요. 각 무기에는 사용 횟수가 제한되어 있습니다!',
  },
  'blob-opera': {
    title: 'Blob Opera',
    description: 'Create beautiful opera music by dragging four colourful blob characters up and down to change their pitch, and left and right to shape vowel sounds. Each blob sings a different vocal part — bass, tenor, mezzo-soprano, and soprano — and a machine learning model harmonises them in real time.\n\nDeveloped by David Li in collaboration with Google Arts & Culture, Blob Opera uses AI trained on the voices of four real professional opera singers. The model learned to generate realistic operatic harmonies, making it possible for anyone to create surprisingly beautiful four-part vocal arrangements with no musical knowledge required. The irresistible blob characters and instant musical gratification made this a viral sensation.',
    controls: '음높이를 변경하려면 방울을 클릭하고 위아래로 드래그하고, 모음 소리를 변경하려면 왼쪽과 오른쪽으로 드래그하세요. 네 개의 덩어리를 모두 움직여 조화로운 오페라 편곡을 만들어보세요!',
  },
  'google-feud': {
    title: 'Google Feud',
    description: 'Guess Google\'s most popular autocomplete suggestions in this addictive Family Feud-style game! Read the beginning of a real Google search query, type your guess for how it ends, and score points for matching the most popular completions. Play through rounds of culture, people, names, and questions.\n\nInspired by the classic TV game show Family Feud, Google Feud reveals the surprisingly funny, bizarre, and thought-provoking things that millions of people search for every day. The game offers a fascinating window into collective human curiosity and has become a popular party game, sparking conversations and laughter about the unexpected things we all wonder about.',
    controls: '부분적인 Google 검색어를 읽고 자동 완성 방법에 대한 추측을 입력하세요. 인기 있는 검색 제안과 일치하면 점수를 얻습니다. 여러 라운드를 플레이해보세요!',
  },
  'quick-draw': {
    title: 'Quick, Draw!',
    description: 'Can a neural network guess what you\'re drawing? Sketch the prompted object within 20 seconds using your mouse or finger, and watch in amazement as Google\'s AI tries to recognise your doodle in real time, calling out guesses as you draw.\n\nQuick, Draw! is one of Google\'s most popular AI experiments, powered by a neural network trained on millions of drawings from players around the world. Every sketch you make helps improve the AI\'s ability to recognise hand-drawn objects. The dataset of over 50 million drawings has been open-sourced, enabling researchers and artists worldwide to explore how humans communicate through simple sketches.',
    controls: '20초 이내에 마우스나 손가락을 사용하여 캔버스에 표시된 개체를 그립니다. AI는 실시간으로 당신이 무엇을 그리고 있는지 추측하려고 노력할 것입니다!',
  },
  'chrome-music-lab': {
    title: 'Chrome Music Lab',
    description: 'Explore music through hands-on interactive experiments in this collection of creative tools by Google. Create songs with Song Maker, explore rhythms with Rhythm, visualise sound waves, learn about chords, and discover how music works through playful experimentation.\n\nChrome Music Lab was created to make learning music accessible to everyone through technology. Each experiment focuses on a different musical concept — from melody and harmony to oscillators and spectrograms — presented through colourful, intuitive interfaces that require no musical training. It\'s widely used in classrooms around the world as an educational tool for teaching music fundamentals.',
    controls: '탐색할 음악 실험을 클릭하세요. 각 도구에는 서로 다른 상호 작용이 있습니다. 클릭, 드래그, 재생을 통해 음악을 만들고 사운드가 작동하는 방식을 알아보세요.',
  },
  'google-maps-snake': {
    title: 'Google Maps Snake',
    description: 'Play the classic Snake game on real city streets using Google Maps as the game board! Navigate a bus, train, or other vehicle through cities like Cairo, São Paulo, London, Sydney, San Francisco, and Tokyo, picking up passengers and landmarks to grow longer.\n\nReleased as a Google Maps April Fools\' Day feature in 2019, this creative mashup combines the nostalgia of Snake with real-world geography. Playing on actual street layouts creates unique challenges in each city, as some have wide boulevards perfect for manoeuvring while others have narrow, winding streets that make the game fiendishly difficult.',
    controls: '도시 거리를 통해 차량을 탐색하려면 화살표 키를 사용하십시오. 승객을 태우면 더 오래 성장할 수 있습니다. 자신을 때리거나 지도에서 벗어나는 것을 피하세요!',
  },
  'google-earth': {
    title: 'Google Earth',
    description: 'Explore the entire planet in 3D with Google Earth, flying from the peaks of the Himalayas to the depths of ocean trenches. Navigate satellite imagery, dive into street-level views, discover curated guided tours, and explore locations from ancient ruins to modern cities.\n\nGoogle Earth has been revolutionising how we see our planet since its launch in 2005. Built from petabytes of satellite imagery, aerial photography, and 3D terrain data, it lets anyone become a virtual explorer. Features like Voyager offer curated tours of natural wonders, cultural sites, and even other planets, making it both an educational powerhouse and a source of endless wonder.',
    controls: '지구본을 회전하려면 클릭하고 드래그하세요. 확대 및 축소하려면 스크롤하세요. 해당 위치로 이동하려면 해당 위치를 두 번 클릭하세요. 특정 장소를 찾으려면 검색창을 사용하세요.',
  },
  'santa-tracker': {
    title: 'Google Santa Tracker',
    description: 'Track Santa\'s magical journey around the world on Christmas Eve and play dozens of holiday mini-games throughout December! Build toys in the workshop, code with elves, learn holiday traditions from around the world, and explore Santa\'s Village in this festive annual experience.\n\nGoogle Santa Tracker has been a beloved holiday tradition since 2004, entertaining millions of families every December. The village fills with new games and activities each day of the Advent calendar, and on Christmas Eve, a real-time tracker follows Santa\'s sleigh as he delivers presents across every time zone. It\'s become one of the most-visited holiday websites in the world.',
    controls: '산타 마을의 다양한 게임과 활동을 클릭하세요. 각 미니게임에는 고유한 컨트롤이 있습니다. 화면의 지시를 따르세요!',
  },
  'space-invaders': {
    title: 'Space Invaders',
    description: 'Defend Earth from waves of descending alien invaders in this faithful recreation of the legendary 1978 arcade classic! Move your laser cannon left and right, fire upwards at the alien formations, and destroy every invader before they reach the bottom of the screen.\n\nSpace Invaders, created by Tomohiro Nishikado, was one of the first major arcade hits and helped launch the golden age of video games. It was so popular in Japan that it caused a temporary shortage of 100-yen coins. This web version preserves the original\'s iconic pixel art, distinctive alien march sound that speeds up as fewer invaders remain, and the intense pressure of watching enemies creep ever closer.',
    controls: '왼쪽 및 오른쪽 화살표 키를 사용하여 대포를 이동합니다. 발사하려면 스페이스바를 누르세요. 침입자가 화면 하단에 도달하기 전에 모든 침입자를 파괴하세요!',
  },
  'doodle-jump-2': {
    title: 'Doodle Jump 2',
    description: 'Bounce your way to the top in this sequel to the legendary vertical platformer! Jump from platform to platform, avoid enemies and obstacles, grab power-ups like jetpacks and trampolines, and reach for the highest score as the challenge intensifies the higher you go.\n\nThe original Doodle Jump was released in 2009 and became one of the most downloaded mobile games of all time, with over 15 million sales. Its simple tilt-to-move mechanic and endlessly generated platforms created a perfect pick-up-and-play experience. This sequel builds on that addictive formula with new worlds, enemies, and power-ups while keeping the accessible gameplay that made the original a cultural touchstone.',
    controls: '왼쪽 및 오른쪽 화살표 키를 사용하거나 기울여서 이동하세요. 기념일 로고가 자동으로 점프하여 플랫폼으로 안내합니다. 적을 피하고 파워업을 획득하세요!',
  },
  'google-solitaire': {
    title: 'Google Solitaire',
    description: 'Play the classic Klondike Solitaire card game right in your browser, no download required. Stack cards in descending order by alternating colours in the tableau, and build four foundation piles from Ace to King by suit to win the game.\n\nKlondike Solitaire is the most widely played card game in the world, included with every version of Windows since 1990. Microsoft\'s Solitaire was originally designed by intern Wes Cherry to help people learn to use a mouse by practising drag-and-drop. Today it remains one of the most popular digital pastimes, with over 35 million players worldwide enjoying its perfect blend of luck and strategy.',
    controls: '카드를 클릭하거나 드래그하여 열 간에 이동하세요. 새로운 카드를 뽑으려면 덱을 클릭하세요. 카드를 더블클릭하면 재단으로 자동 전송됩니다.',
  },
  'google-spider-solitaire': {
    title: 'Google Spider Solitaire',
    description: 'Arrange cards in descending runs of the same suit across ten tableau columns in this challenging Solitaire variant. Complete a full sequence from King down to Ace within a single suit to clear it from the board. Choose between 1, 2, or 4 suit modes for varying difficulty.\n\nSpider Solitaire gained massive popularity after Microsoft included it in Windows XP in 2001. Named after its eight foundation slots (like a spider\'s eight legs), it requires more strategic planning than standard Klondike. The four-suit mode is considered one of the most challenging single-player card games, with only about 1 in 3 deals being winnable even with perfect play.',
    controls: '카드를 드래그하여 동일한 슈트의 내림차순 시퀀스를 구축하세요. 킹에서 에이스까지 전체 실행을 완료하여 보드에서 이를 제거하세요. 새 카드를 처리하려면 재고 더미를 클릭하세요.',
  },
  'google-freecell': {
    title: 'Google FreeCell',
    description: 'Test your strategic thinking in this beloved card game where nearly every deal is solvable. Use four free cells as temporary storage to manoeuvre cards between eight tableau columns, building sequences in descending alternating colours while moving cards to the foundation piles by suit from Ace to King.\n\nFreeCell stands apart from other solitaire games because almost every game can be won — only one deal out of the original 32,000 numbered deals in Windows FreeCell is known to be unsolvable (deal #11982). This makes it a game of pure skill rather than luck, rewarding careful planning and the ability to think several moves ahead.',
    controls: '열, 프리 셀, 기초 더미 사이에서 카드를 이동하려면 클릭하세요. 내림차순 교대 색상으로 기둥을 만듭니다. 카드를 모양별로 오름차순으로 기초로 이동합니다.',
  },
  'google-memory': {
    title: 'Google Memory Game',
    description: 'Flip cards and find matching pairs in this classic concentration memory game. Click on two cards at a time to reveal their hidden images — if they match, they stay face-up; if not, they flip back over. Clear the entire board in as few moves as possible.\n\nThe memory matching game, also known as Concentration, has been a favourite children\'s game for generations. It\'s also a proven cognitive exercise that strengthens short-term memory, visual recognition, and spatial awareness. Studies show that regular play can improve concentration and memory skills in both children and adults.',
    controls: '카드를 클릭하면 뒤집을 수 있습니다. 위치를 기억하여 일치하는 카드를 찾아보세요. 모든 쌍을 지워서 승리하세요!',
  },
  'google-ludo': {
    title: 'Google Ludo',
    description: 'Roll the dice and race your four tokens around the board in this timeless family strategy game. Get a six to bring new pieces into play, land on opponents to send them back to start, and be the first player to get all your tokens safely home.\n\nLudo is derived from the ancient Indian game Pachisi, which dates back to the 6th century and was played by Mughal emperors on life-sized boards with servants as game pieces. The simplified modern version was patented in England in 1896 and has since become one of the world\'s most popular board games, enjoyed by families across every continent.',
    controls: '클릭하여 주사위를 굴린 다음 토큰을 클릭하여 이동하세요. 새로운 토큰을 플레이하려면 6을 얻으세요. 상대방에게 착지하여 다시 시작하도록 보내세요.',
  },
  'google-word-coach': {
    title: 'Google Word Coach',
    description: 'Expand your vocabulary with this engaging word quiz game that tests your knowledge of definitions, synonyms, and word relationships. Choose the correct answer from multiple-choice options, build scoring streaks, and learn new words with each round.\n\nGoogle Word Coach originally appeared in Google Search results for users in non-English-speaking countries, helping them improve their English vocabulary in a fun, gamified way. The quiz format with immediate feedback makes learning new words feel like play rather than study, and the progressive difficulty ensures that both beginners and advanced learners are constantly challenged.',
    controls: '각 단어 질문에 제공된 옵션에서 정답을 클릭하세요. 각 정답에 대해 점수를 획득하고 연속 기록을 쌓아보세요.',
  },
  'google-spinner': {
    title: 'Google Spinner',
    description: 'Give the virtual spinner a whirl and watch it spin at satisfying speed! Switch between a fidget spinner mode for stress relief and a numbered wheel mode for random number generation, perfect for games, decisions, or just pure fidgeting fun.\n\nGoogle\'s spinner tool was introduced during the 2017 fidget spinner craze that swept the world. The fidget spinner mode features realistic physics with momentum and gradual slowdown, while the number wheel mode serves as a handy random number generator for board games and classroom activities. It\'s a simple but endlessly satisfying interactive tool.',
    controls: '스피너를 회전하려면 클릭하고 드래그하세요. 빠르게 스와이프할수록 더 빠르게 회전합니다. 피젯 스피너와 숫자 휠 모드 사이를 전환합니다.',
  },
  'google-coin-flip': {
    title: 'Google Coin Flip',
    description: 'Need to make a quick decision? Flip a virtual coin with a satisfying toss animation and let fate decide between heads and tails. The realistic spinning animation adds drama to every flip, making even the simplest decisions feel momentous.\n\nCoin flipping has been used for decision-making since ancient Roman times, when it was known as "navia aut caput" (ship or head). Google\'s digital version brings this age-old practice into the modern era with smooth animation and true random generation. It\'s one of Google\'s most-used utility tools, perfect for settling friendly debates or making lunch choices.',
    controls: '"뒤집기" 버튼을 클릭하거나 동전을 탭하여 던집니다. 동전은 회전하여 앞면이나 뒷면에 무작위로 떨어집니다.',
  },
  'google-dice-roller': {
    title: 'Google Dice Roller',
    description: 'Roll virtual dice for board games, tabletop RPGs, or just for fun with this customisable dice roller. Choose how many dice to roll and how many sides each die has — from standard six-sided dice to 20-sided dice for Dungeons & Dragons and beyond.\n\nDigital dice rollers have become essential tools for the tabletop gaming community, especially for role-playing games that require exotic dice types. Google\'s version uses cryptographically random number generation to ensure fair rolls, making it suitable for everything from casual family board games to serious tabletop RPG campaigns. The satisfying rolling animation makes each throw feel authentic.',
    controls: '주사위를 던지려면 "롤"을 클릭하세요. 컨트롤을 사용하여 주사위와 면의 수를 조정합니다. 결과는 만족스러운 롤링 애니메이션으로 표시됩니다.',
  },
  'google-timer': {
    title: 'Google Timer',
    description: 'A clean and simple countdown timer and stopwatch built right into your browser. Set any duration from seconds to hours, start your countdown with one click, and get a clear audio alert when time\'s up — perfect for cooking, workouts, study sessions, and presentations.\n\nGoogle\'s timer tool has become a go-to utility for millions of people who need a quick, reliable timer without installing an app. The clean interface shows large, easy-to-read digits, and the persistent tab notification ensures you\'ll never miss your alarm even if you switch to another browser tab. It\'s one of those simple tools that makes daily life just a little bit easier.',
    controls: '기간을 입력하고 "시작"을 클릭하여 카운트다운을 시작하세요. 스톱워치 모드를 사용하여 카운트하세요. 언제든지 일시중지, 재개 또는 재설정할 수 있습니다.',
  },
  'google-metronome': {
    title: 'Google Metronome',
    description: 'Keep perfect tempo with this digital metronome, featuring adjustable BPM from slow adagio to rapid prestissimo. The clear visual pendulum and crisp audio click help musicians of all levels practise their timing and develop a solid sense of rhythm.\n\nThe metronome was patented by Johann Maelzel in 1815 and has been an essential practice tool for musicians for over 200 years. Google\'s digital version brings this timeless tool to the browser, offering precise tempo control and a clean, distraction-free interface. Whether you\'re a beginner learning to keep time or a professional rehearsing complex passages, a reliable metronome is your best practice partner.',
    controls: '비트를 시작하려면 "시작"을 클릭하세요. BPM 슬라이더를 사용하여 템포를 조정하거나 원하는 분당 비트 수를 입력하세요. 일시중지하려면 \'중지\'를 클릭하세요.',
  },
  'zerg-rush': {
    title: 'Zerg Rush',
    description: 'Defend your Google search results from an onslaught of falling "O" characters in this iconic Easter egg inspired by StarCraft! Click rapidly on each zergling O to destroy it before the swarm devours every search result on the page, leaving only a giant "GG" (good game).\n\nThe Zerg Rush Easter egg first appeared in Google Search in 2012 as a tribute to Blizzard\'s StarCraft franchise, where "Zerg rush" describes an overwhelming early-game attack strategy. The frantic clicking gameplay perfectly captures the panic of facing a real Zerg rush, and the final "GG" screen — gaming shorthand for "good game" — is a loving nod to competitive gaming culture.',
    controls: '떨어지는 "O" 문자를 빠르게 클릭하여 검색 결과를 먹기 전에 문자를 파괴하세요. 각 O는 패배하려면 세 번의 클릭이 필요합니다. 최대한 오래 살아남으세요!',
  },
  'atari-breakout': {
    title: 'Atari Breakout',
    description: 'Smash colourful bricks with a bouncing ball in this legendary recreation of Atari\'s 1976 arcade classic! Move your paddle left and right to keep the ball in play, break through rows of bricks, and clear every single one to advance through increasingly challenging levels.\n\nBreakout was designed by Nolan Bushnell and Steve Bristow, with the prototype famously built by a young Steve Jobs and Steve Wozniak — yes, the Apple founders worked on this game before starting their own company. The game pioneered the brick-breaking genre that later inspired mega-hits like Arkanoid, and this web version preserves the pure, timeless satisfaction of shattering blocks with a perfectly aimed bounce.',
    controls: '마우스나 손가락을 좌우로 움직여 패들을 제어하세요. 공을 튕겨 위의 모든 벽돌을 부수세요. 공이 패들을 지나쳐 떨어지지 않도록 하세요!',
  },
  'google-gravity': {
    title: 'Google Gravity',
    description: 'Watch the entire Google homepage collapse under the force of gravity in this hilarious physics experiment! Every element — the logo, search bar, buttons, and links — tumbles and piles up at the bottom of the screen. Click and drag any piece to toss it around and enjoy the satisfying chaos.\n\nGoogle Gravity is one of the most popular Google Easter eggs ever created, demonstrating real-time 2D physics simulation in the browser. Despite everything falling apart, the search bar actually still works — you can type a query and submit it, with the results also tumbling down in the same chaotic fashion. It\'s a delightful example of creative web development.',
    controls: '페이지의 요소를 클릭하고 끌어서 집어 던질 수 있습니다. 현실적인 물리학으로 모든 것이 떨어지고 튀는 것을 지켜보세요. 뭔가를 검색해 보세요!',
  },
  'thanos-snap': {
    title: 'Thanos Snap',
    description: 'Wield the Infinity Gauntlet and snap half of all search results out of existence, just like Thanos from the Marvel Cinematic Universe! Click the golden gauntlet icon to watch results dissolve into dust with a dramatic particle effect, perfectly recreating the iconic snap.\n\nThis Easter egg was created to promote Avengers: Endgame in 2019 and became one of Google\'s most viral interactive features. The disintegration effect is faithful to the movie\'s visual style, and clicking again reverses the snap, restoring everything — just like in the film. A hidden detail: a counter shows exactly how many results were snapped away, always exactly half.',
    controls: '스냅을 수행하려면 Infinity Gauntlet 아이콘을 클릭하세요. 결과의 절반이 먼지로 분해되는 것을 지켜보세요. 스냅을 반전하고 모든 것을 복원하려면 다시 클릭하세요.',
  },
  'super-mario-coin-block': {
    title: 'Super Mario Coin Block',
    description: 'Discover the hidden Super Mario Bros. coin block Easter egg and punch it to collect coins with that iconic "cha-ching" sound effect! Click or tap the question mark block repeatedly to rack up coins, just like Mario himself, and see how many you can collect.\n\nThis Easter egg celebrates the 30th anniversary of Super Mario Bros., one of the most influential video games ever created. Released by Nintendo in 1985, Super Mario Bros. rescued the home console industry from collapse and introduced the world to Mario, who would become the most recognisable video game character of all time. The satisfying coin sound is one of gaming\'s most iconic audio cues.',
    controls: '물음표 블록을 클릭하거나 탭하여 치고 코인을 방출하세요. 가능한 한 많은 동전을 수집하려면 계속 클릭하세요. 클래식 코인 사운드를 들어보세요!',
  },
  'google-pac-man': {
    title: 'Google PAC-MAN (elgooG)',
    description: 'The classic Google PAC-MAN Doodle hosted on elgooG, giving you a second way to play the iconic maze-chomping arcade game anytime you want. Navigate the maze, eat all the dots, grab power pellets to chase the ghosts, and aim for the highest score.\n\nThis version of the legendary 2010 PAC-MAN Doodle is preserved on elgooG, a website dedicated to keeping Google Easter eggs and Doodles playable forever. PAC-MAN remains the highest-grossing arcade game of all time, having generated over $14 billion in revenue. The game\'s creator, Toru Iwatani, was inspired by a pizza with a slice missing.',
    controls: '미로를 통해 PAC-MAN을 안내하려면 화살표 키를 사용하세요. 레벨을 완료하려면 모든 점을 먹어보세요. 파워 알갱이를 집어서 유령을 파랗게 만들고 먹어서 보너스 포인트를 얻으세요.',
  },
  'google-mirror': {
    title: 'Google Mirror (elgooG)',
    description: 'See the entire Google search page reflected in a perfect mirror image on this quirky Easter egg site. Everything is reversed — text reads backwards, buttons are flipped, and even typing in the search bar appears mirrored. Try navigating the reversed interface for a brain-bending experience.\n\nGoogle Mirror (elgooG, which itself is "Google" backwards) has been delighting visitors since 2002. It\'s a fully functional mirror of Google Search where everything works in reverse. Beyond being a fun novelty, it\'s actually been used in countries where Google is blocked, as the mirrored domain sometimes bypasses internet filters.',
    controls: '텍스트가 미러링되어 나타나는지 확인하려면 검색창에 입력하세요. 두뇌를 시험하는 경험을 위해 반전된 인터페이스를 탐색하세요. 모든 링크와 버튼은 반대로 작동합니다!',
  },
  'google-in-1998': {
    title: 'Google in 1998',
    description: 'Take a nostalgic trip back to 1998 to see what Google looked like when it first launched! Browse the original bare-bones interface with its simple blue links, minimal design, and that early web charm that defined the dawn of the search engine era.\n\nWhen Larry Page and Sergey Brin launched Google from a Stanford University dorm room in September 1998, it had a stark white page with just a logo, a search bar, and two buttons. This Easter egg faithfully recreates that original experience, complete with period-appropriate search results. The contrast between the 1998 interface and modern Google perfectly illustrates how far the web has come in just over 25 years.',
    controls: '1998년 스타일의 고전적인 검색창에 검색어를 입력하고 Enter를 누르세요. 향수를 불러일으키는 결과 페이지를 살펴보세요. 빈티지 인터페이스를 탐색하려면 주변을 클릭하세요.',
  },
  'do-a-barrel-roll': {
    title: 'Do a Barrel Roll',
    description: 'Watch the entire Google page perform a spectacular 360-degree barrel roll! The whole webpage smoothly rotates clockwise in a satisfying full spin, then settles back to normal. Try searching for it again or pressing the button to repeat the dizzying display.\n\nThis Easter egg was introduced in 2011 as a tribute to the Nintendo 64 game Star Fox, where Peppy Hare famously instructs the player to "Do a barrel roll!" The smooth CSS animation was groundbreaking at the time, demonstrating the power of modern web technologies. It became one of the most shared Google Easter eggs ever, with millions performing the search just to see the page spin.',
    controls: '버튼을 클릭하면 배럴 롤 애니메이션이 실행됩니다. 전체 페이지가 360도 회전합니다. 계속해서 굴리는 재미를 보려면 여러 번 클릭하세요!',
  },
  'google-askew': {
    title: 'Google Askew / Tilt',
    description: 'The whole Google page tilts slightly to one side in this subtle and amusing Easter egg! Everything still works normally — you can search, click links, and browse results — but the entire page sits at a quirky crooked angle that\'s oddly unsettling.\n\nSearching for "askew" or "tilt" on Google triggers this clever visual gag that has been surprising users since 2011. The slight rotation is just enough to be noticeable and mildly disorienting, making it perfect for pranking friends and colleagues. It\'s one of Google\'s most understated Easter eggs, proving that sometimes the subtlest jokes are the funniest.',
    controls: '기울어진 페이지를 관찰하고 정상적으로 사용해 보세요. 검색하고, 링크를 클릭하고, 찾아보세요. 이 모든 것이 기발한 각도에서 이루어집니다. 기울기를 다시 보려면 새로고침하세요.',
  },
  'friends-easter-eggs': {
    title: 'Friends Easter Eggs',
    description: 'Discover hidden Friends TV show Easter eggs scattered across Google Search! Find interactive surprises for each of the six main characters — trigger Ross\'s "pivot" animation, Phoebe\'s guitar, Joey\'s food obsession, and more iconic moments from the beloved sitcom.\n\nThese Easter eggs were created to celebrate the 25th anniversary of Friends, which premiered on NBC on 22 September 1994 and ran for 10 seasons. The show remains one of the most-watched sitcoms in television history, with fans worldwide who can quote every episode. Each character\'s Easter egg references their most memorable moments, delighting the show\'s devoted fanbase.',
    controls: '각 캐릭터의 아이콘을 클릭하면 고유한 부활절 달걀 애니메이션이 실행됩니다. 6명의 캐릭터를 모두 탐색하여 숨겨진 놀라움과 상징적인 캐치프레이즈를 모두 찾아보세요.',
  },
  'google-underwater': {
    title: 'Google Underwater',
    description: 'Plunge beneath the waves as the Google homepage sinks into a beautiful underwater world! Watch tropical fish swim lazily past, interact with playful sea creatures, and enjoy the tranquil ocean ambience as the search bar and buttons float in the gentle current.\n\nGoogle Underwater transforms the familiar search page into a serene marine environment with realistic water physics and swimming animations. You can click to create ripples, scatter the fish, and interact with the aquatic scene. Despite the underwater setting, the search functionality still works, making it a unique blend of interactive art and functional tool.',
    controls: '마우스를 움직여 수중 장면과 상호작용하세요. 잔물결을 만들고 물고기를 겁주려면 클릭하세요. 요소를 드래그하여 물 위에 떠 있는 모습을 지켜보세요.',
  },
  'google-space': {
    title: 'Google Space',
    description: 'Launch the Google homepage into outer space and watch every element float away in zero gravity! The logo, search bar, buttons, and text all drift apart in the cosmic void. Grab any element with your mouse and fling it across the screen to watch it tumble through space.\n\nGoogle Space demonstrates zero-gravity physics simulation in the browser, turning the familiar homepage into a cosmic playground. Like Google Gravity, the search bar continues to function despite floating freely, and search results also appear in a weightless state. It\'s a mesmerising visual experience that invites playful interaction with the familiar Google interface.',
    controls: '요소를 클릭하고 드래그하여 공간에 던져보세요. 무중력 물리학을 통해 물체가 떠다니고 충돌하는 것을 지켜보세요. 모든 것이 사라지면 검색창에 입력해 보세요.',
  },
  'google-tetris': {
    title: 'Google Tetris',
    description: 'Stack falling tetrominoes and clear lines in this faithful recreation of the world\'s most iconic puzzle game! Use arrow keys to move and rotate the seven different piece shapes, building complete horizontal lines to clear them and score points. The game speeds up as you level up.\n\nTetris was created by Soviet software engineer Alexey Pajitnov in 1984 and has become the most ported and best-selling video game of all time, with over 520 million copies sold across all platforms. Its simple yet infinitely replayable gameplay has captivated players for four decades. The game is so culturally significant that the "Tetris effect" — seeing falling blocks when you close your eyes — is a recognised psychological phenomenon.',
    controls: '왼쪽 및 오른쪽 화살표 키를 사용하여 조각을 이동하세요. 회전하려면 위쪽 화살표를 누르세요. 부드럽게 떨어뜨리려면 아래쪽 화살표를 누르고, 강하게 내리려면 스페이스바를 누르세요. 점수를 매기려면 라인을 지우세요!',
  },
  'google-2048': {
    title: 'Google 2048',
    description: 'Slide numbered tiles on a 4×4 grid and merge matching numbers to reach the elusive 2048 tile! Swipe or use arrow keys to shift all tiles in one direction — when two tiles of the same number collide, they merge into one with double the value. Plan your moves carefully to avoid filling up the board.\n\nCreated by Italian developer Gabriele Cirulli in 2014 as a weekend project, 2048 became a viral sensation overnight, spawning thousands of clones and variants. The deceptively simple math puzzle hides deep strategic complexity — players must balance short-term merges with long-term positioning to reach higher numbers. Reaching 2048 is satisfying, but the real challenge is pushing beyond to 4096, 8192, and beyond.',
    controls: '화살표 키를 사용하거나 스와이프하여 모든 타일을 한 방향으로 밀어보세요. 일치하는 숫자가 충돌하면 병합됩니다. 보드가 가득 차지 않도록 신중하게 움직임을 계획하세요!',
  },
  'google-interland': {
    title: 'Google Interland',
    description: 'Explore the magical land of Interland and master essential internet safety skills through four exciting adventure zones! Battle hackers in the Tower of Treasure, spot phishing scams in Reality River, practise kindness in Kind Kingdom, and protect your data in Mindful Mountain.\n\nDeveloped as part of Google\'s "Be Internet Awesome" initiative, Interland teaches children critical digital citizenship skills through engaging gameplay. The programme was developed with input from online safety experts and educators, and is used in thousands of schools worldwide. Each zone focuses on a different aspect of internet safety, making complex concepts like data privacy and cyberbullying accessible to young learners.',
    controls: '화살표 키를 사용하거나 클릭하여 각 영역을 탐색하세요. 질문에 답하고 도전과제를 완료하여 포인트를 획득하세요. 네 왕국을 모두 통과하여 인터넷 안전을 마스터하세요.',
  },
  'google-arts-culture-face-match': {
    title: 'Google Arts and Culture Face Match',
    description: 'Take a selfie and discover your fine art doppelgänger from thousands of museum paintings and portraits worldwide! Google\'s AI analyses your facial features and matches you with famous artworks, showing your closest match along with information about the painting and its artist.\n\nLaunched as part of Google Arts & Culture in 2018, the Face Match feature went viral almost immediately, briefly making the app the most downloaded on both iOS and Android. The AI compares your photo against a database of artworks from over 1,200 museums and galleries. Beyond the fun of finding your painted twin, the feature introduces millions of people to artwork they might never have encountered otherwise.',
    controls: '캡처 버튼을 클릭하여 카메라 액세스를 허용하고 셀카를 찍으세요. AI는 박물관 컬렉션을 스캔하고 그림의 역사와 함께 가장 가까운 미술 작품을 보여줍니다.',
  },
  'google-teachable-machine': {
    title: 'Google Teachable Machine',
    description: 'Train your own artificial intelligence model using your webcam, microphone, or uploaded images — no coding required! Create classes, record samples, train the model with one click, and watch your custom AI recognise gestures, sounds, objects, and poses in real time.\n\nGoogle Teachable Machine demystifies artificial intelligence by letting anyone build and train a machine learning model in minutes. Used by educators, artists, and makers worldwide, it has powered everything from school science projects to interactive art installations. The tool runs entirely in the browser using TensorFlow.js, and trained models can be exported for use in websites, apps, and physical computing projects.',
    controls: '웹캠이나 마이크를 사용하여 각 수업의 샘플을 녹음하려면 "훈련"을 클릭하세요. 여러 클래스를 추가한 다음 "모델 훈련"을 클릭하여 AI를 구축하세요. 실시간으로 테스트해보세요!',
  },
  'great-ghoul-duel-2': {
    title: 'Great Ghoul Duel 2 (Halloween 2022)',
    description: 'Team up with players worldwide in this spooky sequel to the beloved Great Ghoul Duel! Compete as adorable ghosts to collect wandering spirit flames across new haunted maps, use fresh power-ups to gain advantages, and race to return the most flames to your team\'s base.\n\nThe 2022 Halloween Doodle built upon the success of the original 2018 multiplayer game with enhanced graphics, new haunted environments, and exciting power-up mechanics. The real-time multiplayer matchmaking connects players across the globe for fast-paced team competitions. The Great Ghoul Duel series has become one of Google\'s most anticipated annual events, with millions of players logging in each Halloween.',
    controls: '유령을 이동하려면 화살표 키를 사용하거나 스와이프하세요. 영혼의 불꽃을 모아 기지로 돌려보내세요. 새로운 파워업을 사용하여 상대 팀보다 우위를 점하세요!',
  },
  'gerald-lawson-game-maker': {
    title: 'Celebrating Gerald "Jerry" Lawson',
    description: 'Honour the father of modern gaming by building your own video game levels in this interactive Doodle celebrating Gerald "Jerry" Lawson! Use the intuitive level editor to place platforms, enemies, collectibles, and power-ups, then play your creation and share it with friends.\n\nJerry Lawson invented the Fairchild Channel F in 1976 — the first home console with interchangeable game cartridges. Before his innovation, games were hardwired into consoles, meaning each system could only play one game. His cartridge system revolutionised the entire gaming industry, paving the way for the Atari 2600, Nintendo, PlayStation, and every modern console. This Doodle celebrates his legacy by putting game creation power in everyone\'s hands.',
    controls: '레벨 편집기를 사용하여 플랫폼, 적, 파워업을 배치하세요. 창작물을 테스트하려면 "재생"을 클릭하세요. 사용자 정의 레벨을 친구들과 공유하세요!',
  },
  'valentines-day-chemistry': {
    title: 'Valentine\'s Day Chemistry CuPd (2024)',
    description: 'Discover the chemistry of love in this Valentine\'s Day Doodle where elements CuPd (Copper and Palladium — "CuPid") come together! Match chemical elements to trigger love-themed reactions, watch atoms dance and combine, and create beautiful molecular animations in this heartwarming interactive experience.\n\nThis clever 2024 Valentine\'s Doodle combines romance with real chemistry, using actual periodic table elements to spell out love-related words. The playful approach to science education makes it both entertaining and informative, introducing players to chemical bonding concepts through charming animations. It\'s a perfect example of how Google Doodles can make learning feel like play.',
    controls: '요소를 클릭하고 드래그하여 결합하고 화학 반응을 유발하세요. 올바른 쌍을 연결하여 사랑 테마 애니메이션을 잠금 해제하고 퍼즐을 완성하세요.',
  },
  'rise-of-the-half-moon-november': {
    title: 'Rise of the Half Moon — November 2024',
    description: 'Continue your celestial adventure in Chapter 2 of the Rise of the Half Moon series. Face new card challenges, discover fresh strategies, and explore deeper into the mythology of the moon in this strategic card game with stunning artwork.\n\nThis November 2024 chapter expanded the Rise of the Half Moon universe with new card types, enhanced mechanics, and a continuing narrative about celestial balance. The serialised format kept the growing community of players engaged, with each chapter building on the strategies and story established in the first instalment.',
    controls: '달의 위상과 상호 작용하려면 클릭하고 드래그하세요. 천체를 정렬하여 퍼즐을 풀어보세요. 각 도전 과제를 완료하여 스토리를 진행하세요.',
  },
  'rise-of-the-half-moon-december': {
    title: 'Rise of the Half Moon — December 2024',
    description: 'Explore wintery lunar landscapes and solve new celestial puzzles in Chapter 3 of the Rise of the Half Moon series. Master advanced card strategies, unlock powerful new card combinations, and experience the story as it reaches its most dramatic moments.\n\nThe December 2024 chapter brought a winter theme to the Half Moon saga, with snowy environments and holiday-inspired card designs. As the penultimate chapter, it raised the stakes with more complex puzzles and deeper strategic options, setting up an epic conclusion while rewarding dedicated players who had followed the series from the beginning.',
    controls: '달의 위상과 상호 작용하려면 클릭하고 드래그하세요. 천체를 정렬하여 퍼즐을 풀어보세요. 각 도전 과제를 완료하여 스토리를 진행하세요.',
  },
  'rise-of-the-half-moon-january': {
    title: 'Rise of the Half Moon — January 2025',
    description: 'Experience the grand finale of the Rise of the Half Moon series in this climactic fourth chapter. Complete the ultimate celestial challenge, unlock the final story revelations, and witness the conclusion of the lunar saga with the most complex card strategies yet.\n\nThe January 2025 finale brought the Rise of the Half Moon saga to a satisfying close, tying together narrative threads from all four chapters. The concluding chapter featured the most challenging card puzzles in the series, requiring players to master everything they had learned. This serialised approach to Doodle games was a first for Google, creating an ongoing story that kept players returning month after month.',
    controls: '달의 위상과 상호 작용하려면 클릭하고 드래그하세요. 천체를 정렬하여 최종 퍼즐을 해결하세요. 무용담을 완성하세요!',
  },
  'minecraft-easter-egg': {
    title: 'Minecraft Easter Egg',
    description: 'Explore the iconic blocky world of Minecraft Classic right in your browser! Build, dig, and create to your heart\'s content in this nostalgic recreation of Minecraft\'s earliest version. Place and break blocks across a procedurally generated landscape of pixelated terrain.\n\nMinecraft, created by Markus "Notch" Persson in 2009, has become the best-selling video game of all time with over 300 million copies sold. What began as a simple block-building experiment grew into a global cultural phenomenon that revolutionised gaming, education, and digital creativity. Minecraft Classic preserves the pure building sandbox experience of the game\'s earliest days, before monsters, redstone circuits, and The End were added.',
    controls: '이동하려면 WASD를 사용하고 주변을 둘러보려면 마우스를 사용하세요. 블록을 부수려면 마우스 왼쪽 버튼을 클릭하고, 블록을 설치하려면 마우스 오른쪽 버튼을 클릭하세요. 인벤토리에서 다양한 블록 유형을 선택하는 숫자 키입니다.',
  },
  'google-maps-pac-man': {
    title: 'Google Maps PAC-MAN',
    description: 'Play PAC-MAN on actual city streets in this legendary Google Maps mashup! Navigate real-world road layouts while chomping dots, collecting fruit bonuses, and avoiding the four colourful ghosts as they chase you through your own neighbourhood.\n\nOriginally released as a Google Maps April Fools\' Day feature in 2015, this creative blend of classic gaming and real-world geography became one of Google\'s most popular April Fools\' pranks ever. The game transforms any city\'s street layout into a PAC-MAN maze, creating unique challenges depending on the location. Dense city centres with grid-like streets play very differently from suburban areas with cul-de-sacs.',
    controls: '실제 도시 거리를 통해 PAC-MAN을 안내하려면 화살표 키를 사용하세요. 유령을 피하면서 모든 점을 먹습니다. 파워 펠릿을 획득하여 추격자들의 상황을 뒤집어 보세요!',
  },
  'google-whirlybird': {
    title: 'Google Whirlybird',
    description: 'Pilot a tiny helicopter through challenging obstacle courses in this addictive one-button flying game! Tap or click to gain altitude and release to descend, threading through narrow gaps between obstacles while collecting bonuses along the way.\n\nInspired by the viral "Flappy Bird" phenomenon of 2014, one-button helicopter games have become a beloved casual gaming genre. The core mechanic — balancing altitude with precise taps — creates an elegantly simple game that\'s easy to learn but incredibly difficult to master. The gradually increasing difficulty and competitive high-score chasing make it perfect for quick gaming sessions.',
    controls: '클릭하거나 탭하면 헬리콥터가 위쪽으로 날아갑니다. 내려오려면 손을 놓으십시오. 충돌하지 않고 장애물 사이의 틈새를 탐색하세요!',
  },
  'rugby-world-cup-2015': {
    title: 'Rugby World Cup 2015 Doodle',
    description: 'Score tries and convert kicks in this Google Doodle celebrating the 2015 Rugby World Cup! Play as a rugby team competing through the tournament, timing your kicks perfectly and dodging defenders in fast-paced running gameplay.\n\nThis Doodle was created for the opening day of the 2015 Rugby World Cup, hosted by England. The tournament saw New Zealand successfully defend their title, becoming the first team to win back-to-back Rugby World Cups. The sport of rugby union, which originated at Rugby School in England in the 19th century, is now played in over 120 countries with a passionate global following.',
    controls: '공을 차고 점수를 얻으려면 클릭하세요. 전환 시간을 정하고 목표를 달성하세요. 공을 가지고 달리고 수비수를 피하여 득점 시도를 해보세요!',
  },
};
