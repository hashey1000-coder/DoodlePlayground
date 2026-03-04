import type { GameTranslation } from '../gameTranslations';

export const JA_GAMES: Record<string, GameTranslation> = {
  'snake': {
    title: 'Google スネーク',
    description: 'Google検索に組み込まれたクラシックなスネークゲームをプレイしましょう。成長するヘビを操ってリンゴを食べながら、壁と自分の尻尾を避けましょう。長く生き残るほど、ゲームは速く難しくなります。\n\n元々1990年代後半にNokiaの携帯電話で人気を博したスネークは、歴史上最も有名なビデオゲームの一つとなりました。Googleのブラウザ版は、オリジナルを世界的な現象にした中毒性のあるシンプルさを忠実に再現しています。',
    controls: '方向を変えるには矢印キーを使用します。 リンゴを食べると長く成長します。 壁や自分の体にぶつからないように注意してください。',
  },
  'pacman': {
    title: 'PAC-MAN ドゥードル',
    description: '2010年の30周年を記念してプレイ可能なGoogleドゥードルとして再現された伝説のPAC-MANをプレイしましょう。象徴的な迷路を進み、すべてのドットを食べ、パワーエサでゴーストを追いかけましょう。\n\nこれはGoogleで初めてプレイ可能なドゥードルであり、文化的現象となりました——最初の3日間で推定10億人がプレイしました。1980年のナムコのオリジナルアーケード体験を忠実に再現しています。',
    controls: '矢印キーを使用してパックマンを迷路の中を案内します。 すべてのドットを食べるとレベルが完了します。 パワーペレットを手に入れてゴーストを青にし、食べるとボーナスポイントが得られます。',
  },
  'champion-island-games': {
    title: 'ドゥードルチャンピオンアイランドゲーム',
    description: 'チャンピオン島を舞台にした壮大なRPGアドベンチャーに出発しましょう。7つのスポーツミニゲームに参加し、日本の民話にインスパイアされた活気ある世界を探索し、サイドクエストをクリアしましょう。\n\n2020年東京オリンピックのために制作された、これまでで最も大規模で野心的なGoogleドゥードルです。日本のアニメーションスタジオSTUDIO 4°Cと3年かけて開発されました。',
    controls: '矢印キーを使用してキャラクターを移動します。 スペースバーを押してNPCと対話します。 各スポーツには独自のコントロールがあります。各イベントのゲーム内チュートリアルに従ってください。',
  },
  'chrome-dino': {
    title: 'Chrome 恐竜ゲーム（オフラインゲーム）',
    description: 'Chromeのオフラインページで有名なT-レックス恐竜ランナー——いつでもプレイ可能！サボテンを飛び越え、翼竜の下をくぐる無限ランナーです。\n\nChrome Dinoゲームは2014年にGoogleデザイナーのSebastien Gabrielによって作られました。月間約2億7000万プレイで、世界で最もプレイされているゲームの一つとなっています。',
    controls: 'スペースバーを押すかタップしてサボテンを飛び越えます。 下矢印を押してテロダクティルの下に身をかがめます。 スコアが上がるにつれてゲームが速くなります！',
  },
  'google-tetris': {
    title: 'Google テトリス',
    description: '落ちてくるテトロミノを積み上げてラインを消す、世界で最もアイコニックなパズルゲームの忠実な再現版。矢印キーでピースを移動・回転させましょう。\n\nテトリスは1984年にソビエトのソフトウェアエンジニア、アレクセイ・パジトノフによって作られ、5億2000万本以上を売り上げた史上最高の売上を記録したビデオゲームとなりました。「テトリス効果」は認知された心理現象です。',
    controls: '左右の矢印キーを使用してピースを移動します。 上矢印を押して回転させます。 ソフトドロップするには下矢印を押し、ハードドロップするにはスペースバーを押します。 ゴールラインを明確にしましょう！',
  },
  'magic-cat-academy': {
    title: 'マジックキャットアカデミー（ハロウィン2016）',
    description: '魔法使い猫のモモとして、お化けの侵入から魔法学校を守りましょう！マウスでシンボルを描いて、各お化けの頭上の形に合った呪文を唱えましょう。\n\n2016年のハロウィンドゥードルは、Googleの最も愛されるインタラクティブ作品の一つとなりました。ドゥードルチームの実在の黒猫をモデルにした愛らしい主人公モモは、世界中の心を掴みました。',
    controls: 'マウスまたは指を使用して、各ゴーストの上に表示されているシンボルを描きます。 形を正確に合わせて呪文を唱え、幽霊を倒します。 各レベルのすべてのゴーストをクリアしてください!',
  },
  'minesweeper': {
    title: 'Google Minesweeper',
    description: 'Clear the minefield without detonating a single mine in this classic logic puzzle. Use the number clues revealed on each uncovered square to deduce exactly where the hidden mines are, then right-click to flag every dangerous tile you find.\n\nMinesweeper has been a staple of personal computing since Microsoft bundled it with Windows 3.1 in 1992. What began as a simple time-killer became a globally competitive puzzle with dedicated speedrunning communities. This web version preserves the original challenge with customisable grid sizes and difficulty levels.',
    controls: '四角をクリックすると表示されます。 数字は隣接する鉱山の数を示します。 右クリックして、地雷の疑いがある箇所にフラグを立てます。 安全なマス目をすべてクリアすると勝利です！',
  },
  'tic-tac-toe': {
    title: 'Google Tic-Tac-Toe',
    description: 'Play the timeless game of Tic-Tac-Toe against Google\'s AI at easy, medium, or impossible difficulty. Place your X or O on the 3×3 grid and try to get three marks in a row horizontally, vertically, or diagonally before your opponent does.\n\nDating back to ancient Egypt, Tic-Tac-Toe is one of the oldest known strategy games in human history. While simple enough for young children to learn, the game introduces fundamental concepts of strategy and forward thinking. At impossible difficulty, the AI plays a mathematically perfect game, making it a great challenge for aspiring strategists.',
    controls: '空の四角形をクリックしてマークを置きます。 横、縦、または斜めに X を 3 つ連続して獲得すると勝ちです。 始める前に難易度を選択してください。',
  },
  'les-paul-guitar': {
    title: 'Les Paul Guitar Doodle',
    description: 'Strum and record your own guitar riffs on this interactive Google Doodle honouring Les Paul, the legendary inventor of the solid-body electric guitar. Pluck the strings with your mouse, play melodies using your keyboard, and even record multi-track compositions to share with friends.\n\nReleased on 9 June 2011 to celebrate what would have been Les Paul\'s 96th birthday, this Doodle was one of the most popular interactive Doodles ever created. It features a realistic guitar interface that responds to both mouse hovering and keyboard input, letting anyone become a virtual guitarist in seconds.',
    controls: 'ギターの弦の上にマウスを移動し、クリックして弦を弾きます。 キーボードの A ～ L キーを使用して音を演奏します。 録音ボタンをクリックしてメロディーをキャプチャして再生します。',
  },
  'basketball-2012': {
    title: 'Basketball 2012 Doodle',
    description: 'Shoot hoops in this London 2012 Olympics basketball Doodle. Press and hold the spacebar to set your shot power, then release at the perfect moment to arc the ball into the basket and rack up the highest score possible within the time limit.\n\nThis Doodle was part of Google\'s series of interactive sports games created for the London 2012 Summer Olympics. Each day of the Games featured a different sport, giving players worldwide a chance to compete in Olympic events right from the Google homepage.',
    controls: 'スペースバーを押したままにしてショットのパワーを設定し、放してショットします。 ボールを弧を描いてバスケットに完璧に入れるためにリリースのタイミングを計ります。 できるだけ多くのスコアを獲得しましょう！',
  },
  'hurdles-2012': {
    title: 'Hurdles 2012 Doodle',
    description: 'Sprint down the track and leap over hurdles in this London 2012 Olympics Doodle. Rapidly alternate pressing the left and right arrow keys to build speed, then time your spacebar jumps perfectly to clear each hurdle without stumbling.\n\nOne of the most popular 2012 Olympic Doodles, the hurdles game became a viral sensation as players competed for the fastest times. The simple but addictive keyboard-mashing mechanic captured the intensity of a real sprint, while the forgiving jump timing made it accessible to players of all ages.',
    controls: '左右の矢印キーを交互に素早く押して実行します。 スペースバーを押して各ハードルを飛び越えます。 ジャンプのタイミングを間違えるとつまずいて速度が落ちてしまいます。',
  },
  'slalom-canoe': {
    title: 'Slalom Canoe 2012 Doodle',
    description: 'Paddle your canoe through the slalom course in this London 2012 Olympics Doodle. Use the left and right arrow keys to steer through each gate in the correct order, aiming for the fastest time without any penalties.\n\nThis water sport Doodle brought the excitement of Olympic canoe slalom to millions of desktop browsers during the London 2012 Games. The intuitive controls and quick gameplay loop made it easy to pick up but challenging to master, especially when trying to thread through every gate without missing any.',
    controls: '左右の矢印キーを使用してカヌーを操縦します。 各ゲートを見逃さずに順番に通過してください。 最速タイムを目指しましょう！',
  },
  'soccer-2012': {
    title: 'Soccer 2012 Doodle',
    description: 'Play goalkeeper in this London 2012 Olympics football Doodle. Dive left or right using the arrow keys, or stay in the centre with spacebar, to block incoming penalty kicks and save as many shots as you can.\n\nThis goalkeeper challenge was one of the most played sports Doodles during the 2012 Olympic Games. The quick reflexes required to read the kicker\'s approach and react in time gave players a taste of the high-pressure world of penalty shootouts, one of football\'s most dramatic moments.',
    controls: '左右の矢印キーを使用して各方向に飛び込みます。 スペースバーを押して中央に留まります。 キッカーのシュートに素早く反応してセーブを決めましょう！',
  },
  'robert-moog': {
    title: 'Robert Moog Synthesiser Doodle',
    description: 'Twist knobs and patch cables on a virtual Moog synthesiser in this interactive Doodle honouring Robert Moog, the pioneer of electronic music. Adjust oscillators, filters, and effects to craft your own unique electronic sounds, then play melodies using your keyboard.\n\nReleased on 23 May 2012 for what would have been Robert Moog\'s 78th birthday, this Doodle is a fully functional four-oscillator synthesiser. Moog\'s inventions revolutionised popular music in the 1960s and 1970s, influencing artists from Stevie Wonder to Kraftwerk, and this interactive tribute lets anyone experience the joy of analogue sound design.',
    controls: 'ノブをクリックしてドラッグし、オシレーター、フィルター、エフェクトを調整します。 キーボードを使用して音を演奏します。 さまざまな設定を試して、ユニークなサウンドを作成してください。',
  },
  'alan-turing': {
    title: 'Alan Turing Machine Doodle',
    description: 'Solve logic puzzles on a virtual Turing machine to honour Alan Turing, the father of computer science. Program the tape head by setting states and transitions, then run the machine to see if it produces the correct binary output for each increasingly difficult challenge.\n\nCreated for what would have been Turing\'s 100th birthday on 23 June 2012, this Doodle is a genuine educational tool that teaches the fundamentals of computation theory. Alan Turing\'s concept of a universal computing machine laid the theoretical groundwork for every modern computer, and his wartime codebreaking work at Bletchley Park helped turn the tide of World War II.',
    controls: 'チューリング マシンの状態と遷移をクリックしてプログラムします。 [再生] を押してマシンを実行し、正しい出力が生成されるかどうかを確認します。 すべてのレベルを解決してください！',
  },
  'zamboni': {
    title: 'Zamboni Doodle',
    description: 'Drive the Zamboni ice resurfacing machine across the frozen rink in this charming Doodle. Use the arrow keys to steer the Zamboni over every patch of rough ice, polishing the entire surface before time runs out.\n\nThis Doodle celebrated the birthday of Frank Zamboni, who invented the iconic ice resurfacing machine in 1949. The relaxing gameplay of methodically covering every inch of the rink became a surprise hit, proving that even the most mundane tasks can be satisfying when turned into a game.',
    controls: '矢印キーを使用してザンボーニをリンク上で動かします。 粗い氷のすべての部分を覆い、表面を戻します。 時間がなくなる前にリンク全体を掃除してみてください。',
  },
  'doodle-crossword': {
    title: 'Crossword Puzzle Doodle',
    description: 'Solve the Google crossword puzzle with clues about the history of crosswords and general knowledge. Click on a clue to highlight its row or column, type your answers letter by letter, and fill in the entire grid to win.\n\nThis interactive Doodle celebrated the 100th anniversary of the crossword puzzle, which was first published in the New York World newspaper on 21 December 1913 by journalist Arthur Wynne. What started as a simple word game called "Word-Cross" evolved into one of the world\'s most popular pastimes, now enjoyed by millions in newspapers, apps, and right here in your browser.',
    controls: '手がかりをクリックして、その行または列を強調表示します。 文字を入力して回答を記入します。 横方向の手がかりと下方向の手がかりの間をクリックします。 グリッドを完成させて勝ちましょう！',
  },
  'doodle-roswell': {
    title: 'Roswell\'s 66th Anniversary Doodle',
    description: 'Help a stranded alien find the scattered pieces of its crashed spaceship in this charming point-and-click adventure set in 1947 Roswell, New Mexico. Click on objects in each scene to interact with them, solve simple puzzles, and piece together the UFO so your extra-terrestrial friend can fly home.\n\nCreated for the 66th anniversary of the famous Roswell incident, this three-scene Doodle is one of Google\'s most beloved adventure games. The whimsical art style and clever environmental puzzles make it a delightful five-minute experience that captures the mystery and humour of UFO folklore.',
    controls: 'シーン内のオブジェクトをクリックして操作します。 さまざまな場所に散在する宇宙船の部品をすべて見つけてください。 簡単なパズルを解いて新しいエリアのロックを解除します。',
  },
  'mothers-day-2013': {
    title: 'Mother\'s Day 2013 Doodle',
    description: 'Create a personalised card for Mother\'s Day by choosing from various craft supplies, stickers, and decorations in this heartwarming interactive Doodle. Design a beautiful card using the virtual art supplies, then share your creation with the special mum in your life.\n\nThis 2013 Mother\'s Day Doodle celebrated the creativity and love that goes into handmade cards. The intuitive drag-and-drop craft interface makes it easy for children and adults alike to create something truly personal, continuing the time-honoured tradition of showing appreciation through homemade gifts.',
    controls: 'さまざまなクラフト用品をクリックしてカードを飾りましょう。 ステッカー、絵、メッセージを選択します。 完成したカードを印刷または共有してください。',
  },
  'doodle-google-15th': {
    title: 'Google\'s 15th Birthday Doodle',
    description: 'Celebrate Google\'s 15th birthday by whacking a piñata full of candy and surprises! Click or press spacebar to swing the stick at the star-shaped piñata, break it open, and collect as many treats as you can in this festive mini-game.\n\nReleased on 27 September 2013 to mark Google\'s 15th anniversary, this cheerful Doodle captures the party spirit with colourful confetti and cascading candy. Google was officially founded on 4 September 1998 by Larry Page and Sergey Brin in a garage in Menlo Park, California, growing from a Stanford research project into the world\'s most-used search engine.',
    controls: 'クリックするかスペースバーを押して、ピニャータに向かってスティックを振ります。 タイミングを計って攻撃を加えて穴を開け、キャンディーをあちこちに散らばせましょう。 できるだけたくさん集めましょう！',
  },
  'rubiks-cube': {
    title: 'Rubik\'s Cube Doodle',
    description: 'Twist and turn a fully interactive virtual Rubik\'s Cube to solve it in as few moves as possible. Click and drag the faces to rotate them, working to align each side into a single solid colour across all six faces of the cube.\n\nThis Doodle celebrated the 40th anniversary of the Rubik\'s Cube, invented by Hungarian architect Ernő Rubik in 1974. With over 43 quintillion possible configurations but only one solution, the Rubik\'s Cube is the world\'s best-selling puzzle toy, with over 450 million cubes sold. The current world record for solving one is under 3.5 seconds.',
    controls: 'クリックしてドラッグし、立方体の面を回転します。 それぞれの面が単一の色になるようにしてください。 できるだけ少ない動きを目指しましょう！',
  },
  'doodle-beethoven': {
    title: 'Beethoven Doodle',
    description: 'Help Ludwig van Beethoven put his famous compositions back together by arranging scrambled musical bars in the correct order. Drag and drop the shuffled measures into their proper sequence, and listen to each masterpiece play back beautifully when you get it right.\n\nThis 2015 Doodle celebrated Beethoven\'s 245th birthday with a delightful musical puzzle featuring some of his most iconic works, including Für Elise and the Fifth Symphony. The charming animated narrative follows Beethoven rushing to his concert while his sheet music flies away, making each puzzle a race against time to reconstruct the great composer\'s genius.',
    controls: '音楽バーを正しい順序にドラッグ アンド ドロップします。 正しくできたら、各曲の再生を聞いてください。 すべての作品を完成させましょう！',
  },
  'eiji-tsuburaya': {
    title: 'Eiji Tsuburaya Doodle',
    description: 'Play through a retro side-scrolling game honouring Eiji Tsuburaya, the legendary creator of Godzilla and Ultraman special effects. Battle giant monsters, dodge obstacles, and use special effects beams to save the city across multiple action-packed stages.\n\nReleased on 7 July 2015 for what would have been Tsuburaya\'s 114th birthday, this Doodle pays tribute to the father of Japanese tokusatsu (special effects) cinema. Tsuburaya\'s pioneering techniques, including miniature sets and suit-motion monster performances, revolutionised the film industry and created iconic franchises that have entertained audiences for over 60 years.',
    controls: '矢印キーを使用して移動し、スペースバーを使用して攻撃します。 特殊効果のビームを攻撃してモンスターを倒します。 すべてのステージをクリアしましょう！',
  },
  'pony-express': {
    title: 'Pony Express Doodle',
    description: 'Ride your horse across the American frontier, collecting letters and mail pouches while dodging cacti, fences, and other obstacles in this endless runner. Press the up and down arrow keys to switch lanes and grab every piece of mail along the trail.\n\nThis Doodle celebrated the 155th anniversary of the Pony Express, the legendary mail delivery service that operated from April 1860 to October 1861. Despite lasting only 18 months, the Pony Express became an enduring symbol of the American frontier spirit, with riders covering nearly 2,000 miles from Missouri to California in just 10 days.',
    controls: '上下の矢印キーを押してレーンを切り替えます。 トレイルに沿って手紙を集めて郵送しましょう。 サボテン、フェンス、その他の障害物を避けてください。 メールを届けましょう！',
  },
  'global-candy-cup': {
    title: 'Global Candy Cup 2015',
    description: 'Pick your team and compete in the Global Candy Cup — a Halloween trick-or-treating race to collect the most candy! Choose from a witch, ghost, vampire, or other spooky character and race through neighbourhoods scooping up sweet treats.\n\nThis 2015 Halloween Doodle introduced a competitive team-based element where players worldwide contributed to global team scores. The colourful, kid-friendly art style and simple click-to-collect gameplay made it a perfect Halloween activity for players of all ages.',
    controls: 'クリックまたはタップして家間を移動します。 キャンディを集めて障害物を避けてください。 ハロウィーンの夜が終わる前に、他のチームと競争して、たくさんのおやつを手に入れましょう!',
  },
  'google-cat-game': {
    title: 'Google Cat Wizard Game',
    description: 'The beloved Magic Cat Academy game starring Momo the cat wizard — swipe and draw spell symbols to defend your school from hordes of invading ghosts! Match the shapes shown above each ghost accurately and quickly to cast the right spell and banish them.\n\nAlso known as the "Google Halloween Cat Game," this is one of the most searched-for Google games year after year. Momo the cat has become an unofficial Google mascot for Halloween, starring in three sequel games. The original 2016 version remains a fan favourite thanks to its charming animation, accessible gameplay, and the pure joy of drawing magic spells.',
    controls: 'マウスまたは指を使用して、各ゴーストの上に表示されているシンボルを描きます。 形を正確に合わせて呪文を唱え、幽霊を倒します。 各レベルのすべてのゴーストをクリアしてください!',
  },
  'doodle-clara-rockmore': {
    title: 'Clara Rockmore Theremin Doodle',
    description: 'Play a virtual theremin honouring Clara Rockmore, considered the greatest theremin virtuoso of all time. Move your mouse up and down to control pitch and left and right to adjust volume, recreating the eerie, wavering tones of this unique electronic instrument.\n\nReleased on 9 March 2016 for what would have been Clara Rockmore\'s 105th birthday, this Doodle features a beautifully animated lesson mode that teaches you to play actual melodies. The theremin, invented in 1920, is the only musical instrument played without physical contact — performers wave their hands near two antennas to control pitch and volume.',
    controls: 'マウスを上下に動かしてピッチを変更します。 左右に動かして音量を調節します。 画面上の音楽に合わせて演奏したり、独自のメロディーを作成したりしてみてください。',
  },
  'doodle-scoville': {
    title: 'Scoville Doodle',
    description: 'Test your tolerance for heat in this spicy Doodle celebrating Wilbur Scoville and his famous pepper heat scale! Scoop ice cream and fling it at increasingly fiery peppers that march toward you. Each level features hotter peppers, from mild jalapeños to scorching Carolina Reapers.\n\nCreated for the 151st birthday of Wilbur Scoville on 22 January 2016, this action-packed Doodle teaches players about the Scoville scale while they play. Scoville developed his organoleptic test in 1912 to measure the pungency of chilli peppers, and his scale is still used today — ranging from 0 (bell pepper) to over 2 million (Carolina Reaper).',
    controls: 'クリックして、攻撃してくるピーマンにアイスクリームスクープを投げます。 トウガラシが手元に届く前に、投げるタイミングを計って各トウガラシに当たるようにしましょう。 あらゆる暑さのレベルを乗り越えて生き延びましょう！',
  },
  'doodle-valentines-day': {
    title: 'Valentine\'s Day 2017 — Pangolin Love',
    description: 'Help a lovestruck pangolin serenade its sweetheart by crafting delicious chocolate treats in this Valentine\'s Day puzzle game. Mix ingredients according to recipes, shape the chocolates, and serve them to win the pangolin\'s heart across multiple sweet levels.\n\nThis 2017 Valentine\'s Day Doodle featured the endangered pangolin to raise awareness about the world\'s most trafficked mammal. The four-level chocolate-making adventure charmed players with its adorable animation style while highlighting a serious conservation message — all eight pangolin species are threatened with extinction due to illegal poaching.',
    controls: '材料をクリックしてドラッグしてチョコレートを混ぜます。 レシピに従って、適切なおやつを作りましょう。 センザンコウの恋人にそれらを提供して、進歩してください！',
  },
  'pangolin-love': {
    title: 'Pangolin Love Doodle',
    description: 'A charming Valentine\'s adventure where you craft chocolates to help a shy pangolin express its love. Follow recipes to mix, mould, and decorate sweet treats, then deliver them to your pangolin\'s sweetheart across four progressively challenging levels.\n\nAlso known as the Valentine\'s Day 2017 Doodle, this game raised global awareness about pangolins — the world\'s most trafficked animal. The loveable character design made pangolins go viral, with conservation organisations reporting significant increases in donations and awareness following the Doodle\'s release.',
    controls: '材料をクリックしてドラッグしてチョコレートを混ぜます。 レシピに従って、適切なおやつを作りましょう。 センザンコウの恋人にそれらを提供して、進歩してください！',
  },
  'doodle-cricket-game': {
    title: 'Cricket Doodle Game',
    description: 'Play a delightful game of cricket with an adorable cast of snails and crickets (the insects!) in this Google Doodle celebrating the ICC Champions Trophy. Click or tap to swing the bat at the right moment and smash the ball to score as many runs as possible.\n\nReleased during the 2017 ICC Champions Trophy tournament, this Doodle brought the joy of cricket to millions who might never have played before. The charming insect characters — a snail bowler and cricket batsmen — made the sport accessible and fun, while the simple one-tap mechanic perfectly captured the timing-based thrill of batting.',
    controls: 'ボールを投げるときにクリックまたはタップしてバットを振ります。 クリックのタイミングを計ってボールを打ち、得点を記録します。 見逃さないでください、さもないとアウトです！',
  },
  'doodle-kids-coding': {
    title: 'Coding for Carrots (Kids Coding Doodle)',
    description: 'Help a cute bunny collect all the carrots by snapping directional coding blocks together to create a program that guides its path. Drag and drop arrow blocks, loop blocks, and action blocks to build a sequence, then press play to watch the bunny follow your instructions.\n\nCreated for the 50th anniversary of kids\' coding languages, this Doodle introduces fundamental programming concepts in the most approachable way imaginable. Inspired by the Logo programming language created in 1967, the six increasingly complex levels teach sequencing, loops, and conditionals — the building blocks of computer science — all through the adorable goal of helping a bunny eat carrots.',
    controls: '方向性コード ブロックをシーケンス領域にドラッグ アンド ドロップします。 再生ボタンを押してプログラムを実行し、バニーが指示に従う様子を観察します。',
  },
  'birth-of-hip-hop': {
    title: 'Birth of Hip Hop Doodle',
    description: 'Spin records on dual turntables and scratch your way through hip hop history in this groundbreaking interactive Doodle. Mix beats, crossfade between tracks, and unlock legendary samples as you learn about the origins and evolution of hip hop culture.\n\nReleased on 11 August 2017 to celebrate the 44th anniversary of hip hop\'s birth at a back-to-school party in the Bronx, this Doodle is a love letter to DJ culture. It features a fully functional turntable interface with real scratch mechanics, and its guided historical narrative takes players from DJ Kool Herc\'s first breakbeat to the global cultural movement hip hop became.',
    controls: 'クロスフェーダーをクリックしてドラッグし、ターンテーブル間でミックスします。 レコードをクリックしてドラッグすると、レコードをスクラッチできます。 進行するにつれて、新しいトラックとビートのロックを解除してください。',
  },
  'oskar-fischinger': {
    title: 'Oskar Fischinger Music Doodle',
    description: 'Create mesmerising visual music compositions in this interactive Doodle honouring abstract animator Oskar Fischinger. Place geometric shapes on a musical grid, adjust tempo and instruments, and watch as your visual creation generates a unique, beautiful melody.\n\nOskar Fischinger was a pioneering German-American animator who created abstract films synchronised to music in the 1920s–1960s. His work directly inspired the "Toccata and Fugue" sequence in Disney\'s Fantasia. This Doodle captures his artistic philosophy that visual art and music are inseparable, letting anyone experience the joy of creating synchronised audio-visual art.',
    controls: 'グリッドをクリックして図形を配置または削除します。 それぞれの形状が異なるサウンドを生み出します。 テンポ、楽器、エフェクトを調整して、視覚的な音楽作品を作成します。',
  },
  'komodo-national-park': {
    title: 'Komodo National Park Quiz Doodle',
    description: 'Take a fascinating trivia quiz about the Komodo dragon and its national park habitat in Indonesia. Answer questions about the world\'s largest living lizard, its island home, and the unique ecosystem of Komodo National Park.\n\nThis educational Doodle celebrated the 37th anniversary of Komodo National Park\'s founding and its status as a UNESCO World Heritage Site. Komodo dragons can grow over 3 metres long and weigh up to 70 kilograms, making them the largest lizards on Earth. The park spans several volcanic islands and protects some of the most biodiverse marine environments in the world.',
    controls: '各クイズの質問の答えをクリックしてください。 コモドオオトカゲとその生息地についての事実を学びましょう。 できるだけ多くの正解を獲得してください。',
  },
  'garden-gnomes': {
    title: 'Garden Gnomes Doodle',
    description: 'Fling garden gnomes from a trebuchet as far as possible across beautiful garden landscapes! Click and hold to set your launch angle, then release to send the gnome soaring through flowerbeds, over hedgerows, and across ponds in pursuit of maximum distance.\n\nThis 2018 Doodle celebrated the history of garden gnomes, which originated in 19th-century Germany as "Gartenzwerge" (garden dwarfs). The satisfying physics-based gameplay and charming pastoral scenery made it a viral hit, with players competing to achieve the longest throws. The different garden terrains and bonus bounce mechanics add surprising depth to this simple but addictive launcher.',
    controls: 'クリックしたままにして発射角度を設定し、放すとノームを投げ飛ばします。 長く保持するほど、より多くのパワーが得られます。 最大距離に到達してみてください！',
  },
  'halloween': {
    title: 'The Great Ghoul Duel (Halloween 2018)',
    description: 'Compete in the Great Ghoul Duel, a spooky multiplayer Doodle where two ghost teams race to collect the most wandering spirit flames! Navigate haunted halls, scoop up glowing flames, and rush them back to your team\'s base — but watch out, because opponents can steal flames trailing behind you.\n\nThe 2018 Halloween Doodle was Google\'s first-ever multiplayer game, connecting players worldwide in real-time team-based matches. The adorable ghost character designs, strategic flame-stealing mechanic, and competitive leaderboards made it an instant classic. Players could customise their ghost\'s appearance and develop strategies for efficient flame collection.',
    controls: '矢印キーまたはスワイプを使用して、マップ上でゴーストを移動します。 さまよえる精霊の炎を集めて拠点に持ち帰って得点しましょう。 相手の背後に続く炎を盗め！',
  },
  'baseball': {
    title: 'Baseball Doodle (4th of July)',
    description: 'Step up to the plate and hit home runs in this Fourth of July baseball Doodle! Play as classic American food characters — hot dogs, popcorn, ketchup bottles, and more — and time your click or tap to swing the bat and smash the ball past the food-themed fielders.\n\nReleased for Independence Day 2019, this Doodle perfectly captures the spirit of America\'s pastime with a playful twist. The charming food character designs, satisfying crack of the bat, and progressively faster pitches make each at-bat exciting. The game tracks your home run distance and total runs, encouraging players to perfect their timing for the ultimate slugfest.',
    controls: 'クリックまたはタップして、ボールが投げられるときにバットを振ります。 スイングのタイミングを計ってボールをコンタクトし、できるだけ遠くまで飛ばしましょう。 チームのために得点を決めましょう！',
  },
  'doodle-loteria': {
    title: 'Celebrating Lotería Doodle',
    description: 'Play the beloved Mexican card game of Lotería in this colourful multiplayer Doodle. Listen for the caller to announce each card with a traditional riddle, then click the matching image on your board to mark it. Complete a pattern to shout "¡Lotería!" and win the round.\n\nOften called "Mexican bingo," Lotería has been a cherished family tradition in Mexico since the 18th century, originating from an Italian card game brought by Spanish colonists. This 2019 Doodle celebrates the game\'s cultural significance with beautifully illustrated cards featuring both traditional and modern imagery. Players compete online against others worldwide in this faithful digital adaptation.',
    controls: 'ボード上で一致するカードが呼び出されたら、それをクリックします。 行、列、またはパターンを完成させて「¡Lotería!」を呼び出します。 そしてラウンドに勝ちます。',
  },
  'celebrating-bach': {
    title: 'Celebrating Johann Sebastian Bach',
    description: 'Compose your own harmonies in the style of Johann Sebastian Bach using artificial intelligence! Write a simple melody by clicking notes on the musical staff, then press the "Harmonise" button to let a machine learning model add Bach-style counterpoint and accompaniment.\n\nThis groundbreaking 2019 Doodle was the first to use AI and machine learning as its core mechanic. Google trained a model called Coconet on 306 of Bach\'s chorale compositions, enabling it to harmonise any melody in Bach\'s distinctive Baroque style. The result is a magical creative tool that makes the genius of the 18th century\'s greatest composer accessible to anyone.',
    controls: '五線をクリックして音符を配置し、メロディーを作成します。 「ハーモニー」ボタンを押すと、AI がバッハ風の伴奏を追加します。 あなたの作品を聴いてください！',
  },
  'doodle-earth-day': {
    title: 'Earth Day 2020 — Bee Doodle',
    description: 'Help a bee pollinate flowers across a beautiful garden in this charming Earth Day Doodle. Fly from flower to flower, collecting pollen on your fuzzy body and spreading it to help the entire garden bloom with vibrant colours and life.\n\nCreated for Earth Day 2020 as part of Google\'s "Stay and Play at Home" series during the pandemic, this Doodle highlights the critical role bees play in our ecosystem. Bees pollinate approximately 75% of all flowering plants and about 35% of food crops worldwide. The gentle, educational gameplay reminds us how connected all living things are.',
    controls: '矢印キーまたはクリックを使用して、ミツバチを花の間へ誘導します。 花に止まって花粉を集め、他の花を訪れて受粉します。 庭全体に花を咲かせましょう！',
  },
  'magic-cat-academy-2': {
    title: 'Magic Cat Academy 2 (Halloween 2020)',
    description: 'Momo the cat wizard returns for an underwater adventure, diving beneath the waves to battle ghostly sea spirits! Draw symbols to cast spells against new oceanic enemies including phantom jellyfish, spectral anglerfish, and ghostly octopi, each requiring different spell patterns to defeat.\n\nThe 2020 Halloween sequel took Momo from the schoolhouse to the ocean depths, introducing aquatic environments and marine-themed ghost enemies. Released during the Stay and Play at Home series, it brought joy to millions during a challenging year. The expanded spell vocabulary and boss battles made it a more ambitious experience than the beloved original.',
    controls: 'マウスまたは指を使用して、各ゴーストの上に表示されているシンボルを描きます。 新しい水中の敵には異なる呪文パターンが必要です。 すべてのゴーストを倒して各レベルをクリアしてください!',
  },
  'doodle-mbira': {
    title: 'Celebrating Mbira Doodle',
    description: 'Play a virtual mbira — a traditional African thumb piano — in this musical Doodle celebrating one of Zimbabwe\'s most treasured instruments. Click the metal tines to create beautiful, resonant melodies, following a guided lesson or improvising your own compositions.\n\nThe mbira dzavadzimu has been central to Shona culture for over a thousand years, used in ceremonies, storytelling, and spiritual communication. This Doodle honours its rich heritage with an authentic-sounding digital recreation that teaches players basic patterns and scales. The instrument\'s mesmerising, bell-like tones have influenced musicians worldwide, from Paul Simon to Björk.',
    controls: 'ムビラの歯をクリックして音を再生します。 ガイド付きのメロディーに従うことも、独自の曲を作成することもできます。 さまざまなリズムやパターンを試してください。',
  },
  'doodle-history-of-pizza': {
    title: 'History of Pizza Doodle',
    description: 'Slice and serve pizzas in this interactive Doodle celebrating the delicious history of pizza! Draw lines with your mouse to cut each pizza into the exact number of equal slices the customer orders, earning points for precision and speed.\n\nThis 2021 Doodle took players on a culinary journey through pizza\'s 10,000-year history, from ancient flatbreads in Sardinia to the modern Margherita. Each level features a different historical pizza style, teaching players about the dish\'s evolution while challenging their cutting accuracy. The satisfying slicing mechanic and mouth-watering pixel art made this one of the most replayed Doodles ever.',
    controls: 'マウスで線を描き、ピザを正しい数の等しい部分にスライスします。 上部に表示されている順序と一致します。 正確にベストスコアを目指しましょう！',
  },
  'wewa-weaving': {
    title: 'We:wa Weaving Doodle',
    description: 'Weave colourful patterns on a virtual loom in this Doodle honouring the traditional indigenous art of We:wa weaving from the Pueblo peoples. Select different yarn colours, choose traditional patterns, and shuttle the threads through the warp to create beautiful handwoven textiles.\n\nThis 2021 Doodle celebrates the centuries-old weaving traditions of the Pueblo peoples of the American Southwest. Weaving is a sacred art form that has been passed down through generations, with each pattern carrying cultural meaning and storytelling significance. The relaxing, meditative gameplay invites players to appreciate the skill and artistry that goes into every handwoven piece.',
    controls: '織機をクリックして縦糸に糸を織ります。 さまざまな色やパターンを選択してください。 織りが完了すると、美しい伝統的なテキスタイルのデザインが現れます。',
  },
  'doodle-valentines-day-2022': {
    title: 'Valentine\'s Day 2022 — Hamster Doodle',
    description: 'Guide adorable hamsters through a maze of puzzles and obstacles to reunite them with their sweetheart in this Valentine\'s Day Doodle. Click or tap to interact with puzzle elements, move platforms, and clear paths so the hamster couple can be together again.\n\nThis 2022 Valentine\'s Day Doodle charmed players with its tiny protagonist and clever puzzle mechanics. Each level introduces new obstacles and mechanics that require creative thinking to solve. The heartwarming premise of reuniting two hamsters in love, combined with the cute character animations, made it a perfect Valentine\'s Day activity.',
    controls: 'クリックまたはタップしてパズル要素を操作します。 障害物を解決してハムスターを各レベルに導いてください。 ハムスターのカップルが再会！',
  },
  'celebrating-petanque': {
    title: 'Celebrating Pétanque Doodle',
    description: 'Toss boules and aim for the cochonnet (target ball) in this Doodle celebrating the classic French lawn game of pétanque. Click and drag to set your throw angle and power, then release to send your boule rolling across the terrain, trying to land as close to the target as possible.\n\nPétanque originated in the south of France in 1907 and has since become one of the country\'s most popular recreational activities. This Doodle captures the relaxed, social spirit of the game with sun-drenched Provençal landscapes and authentic physics. The game is played in over 80 countries worldwide, with annual world championships drawing competitors from across the globe.',
    controls: 'クリックしてドラッグして、投げる角度と威力を設定します。 放すとブールを投げます。 できるだけコションネット（的球）に近い着地を目指しましょう！',
  },
  'boba-bubble-tea': {
    title: 'Celebrating Bubble Tea Doodle',
    description: 'Mix and match flavours to create the perfect bubble tea in this interactive Doodle celebrating the beloved Taiwanese drink! Choose your tea base, add flavourings, select toppings, and pick your favourite boba type to craft a delicious custom drink.\n\nBubble tea was invented in Taiwan in the 1980s and has since become a global phenomenon enjoyed in over 30 countries. This 2023 Doodle explores the drink\'s rich history and incredible variety, from classic milk tea with tapioca pearls to modern fruit tea with popping boba. The colourful, playful interface lets you experiment with thousands of flavour combinations.',
    controls: '材料をクリックしてドリンクに追加します。 ティーベース、フレーバー、トッピング、ボバの種類をお選びください。 すべてを混ぜ合わせて完璧なバブルティーを作りましょう!',
  },
  'celebrating-pani-puri': {
    title: 'Celebrating Pani Puri Doodle',
    description: 'Serve delicious pani puri to a queue of hungry customers in this fast-paced Doodle celebrating India\'s most beloved street food! Fill crispy puris with the right combination of spiced water, chutneys, and fillings, serving each customer before they get impatient and leave.\n\nPani puri is one of India\'s most iconic street foods, known by different names across the subcontinent — gol gappa in North India, puchka in Bengal, and pani puri in Maharashtra. This 2023 Doodle captures the excitement and speed of a real pani puri stall, where vendors assemble each bite-sized explosion of flavour in seconds. The game became especially popular in South Asia, where millions recognised their favourite snack.',
    controls: 'クリックして各プリをすくい、水とチャツネの適切な組み合わせを注ぎます。 完成したパニプリをお客様がお帰りになる前に提供します。 彼らを待たせないでください！',
  },
  'celebrating-lake-xochimilco': {
    title: 'Celebrating Lake Xochimilco Doodle',
    description: 'Explore the floating gardens of Lake Xochimilco and guide an adorable axolotl through its waterway habitat in this beautiful interactive Doodle. Navigate the canals, interact with the environment, and learn about this unique UNESCO World Heritage Site in Mexico City.\n\nLake Xochimilco\'s chinampas (floating gardens) are a remnant of pre-Hispanic agriculture dating back to the Aztec empire. This 2023 Doodle raises awareness about the critically endangered axolotl, a remarkable salamander that can regenerate lost limbs and exists in the wild only in Xochimilco\'s canals. The stunning artwork and educational content highlight the urgent need to protect this unique ecosystem.',
    controls: 'クリックまたはタップしてウーパールーパーを運河に誘導します。 環境と触れ合い、ソチミルコ湖のユニークな水上庭園の生態系について学びましょう。',
  },
  'celebrating-popcorn': {
    title: 'Celebrating Popcorn Doodle',
    description: 'Pop, catch, and serve delicious popcorn in this multiplayer celebration Doodle game! Time your clicks to pop kernels at the perfect moment, catch the flying popcorn in your bucket, and score bonus points for specially seasoned pieces.\n\nThis 2024 Doodle celebrates the history of popcorn, which has been enjoyed for thousands of years — archaeological evidence shows that people in Peru were eating popcorn as early as 4700 BCE. The cheerful multiplayer gameplay lets you cooperate or compete with friends, and the various seasoning flavours from around the world showcase popcorn\'s global popularity.',
    controls: '適切なタイミングでクリックまたはタップしてカーネルをポップします。 左右に動かしてバケツの中のポップコーンをキャッチします。 味のあるピースを捕まえてボーナスポイントを獲得しましょう！',
  },
  'magic-cat-academy-3': {
    title: 'Magic Cat Academy 3 (Halloween 2024)',
    description: 'Momo the cat wizard returns for a third spooky adventure in the Magic Cat Academy! Cast spells by drawing symbols to battle new ghost types in enchanted locations, with fresh enemies, challenging boss fights, and powerful new spell combinations to discover.\n\nThe 2024 Halloween Doodle continues the beloved Magic Cat Academy series, which has become Google\'s most popular recurring game franchise. Each instalment has expanded the gameplay with new environments, enemies, and spell mechanics while maintaining the charming art style and intuitive draw-to-cast system that made the original a classic.',
    controls: 'マウスまたは指を使用して、各ゴーストの上に表示されているシンボルを描きます。 新しいゴースト タイプには新しい呪文パターンが必要です。 すべてのゴーストを倒して各レベルをクリアしてください!',
  },
  'rise-of-the-half-moon': {
    title: 'Rise of the Half Moon Doodle',
    description: 'Play a strategic card game where you balance day and night cards to build powerful combos and outscore your opponent. Select cards from your hand carefully, considering how sun and moon cards interact to create chain reactions and bonus points.\n\nThis recurring Google Doodle features deep tactical gameplay wrapped in beautiful celestial artwork. The game\'s elegant rule set — balancing light and dark, building card synergies, and timing your strongest plays — offers surprising strategic depth. Multiple chapters were released throughout 2024-2025, creating an ongoing saga that kept players coming back for new challenges.',
    controls: 'クリックして手札からカードを選択してプレイします。 太陽と月のカードのバランスを取り、強力なコンボを作成します。 各ラウンドで対戦相手を上回って勝利しましょう！',
  },
  'chinese-new-year-snake': {
    title: 'Chinese New Year Snake Game',
    description: 'Celebrate the Year of the Snake with this festive twist on the classic Snake game! Slither around the board collecting lucky red envelopes, lanterns, and traditional Chinese New Year symbols while your serpentine body grows longer with each item collected.\n\nThis special edition Snake game honours the Chinese zodiac and the traditions of Lunar New Year, one of the most important celebrations in Chinese culture. The Year of the Snake comes around every 12 years, and in Chinese astrology, the snake symbolises wisdom, elegance, and charm. The festive visual design and lucky item collection add a cultural twist to the timeless gameplay.',
    controls: '矢印キーまたはスワイプを使用して、ヘビの方向を変更します。 壁や自分の尻尾を避けながら、アイテムを集めて長く成長させましょう。',
  },
  'doctor-who': {
    title: 'Doctor Who 50th Anniversary Doodle',
    description: 'Play as all the Doctors through a point-and-click adventure celebrating Doctor Who\'s 50th anniversary! Navigate through levels inspired by classic episodes, pick up items, solve puzzles, and avoid iconic enemies like the Daleks, Cybermen, and Weeping Angels.\n\nCreated in November 2013 for the 50th anniversary of the BBC\'s legendary science fiction series, this Doodle lets fans play through six levels, each featuring a different Doctor and their era\'s signature villains. Doctor Who first aired on 23 November 1963 and has become the longest-running science fiction television series in history, with millions of devoted fans worldwide.',
    controls: 'クリックして各レベル内でドクターを移動します。 アイテムを拾い、パズルを解くために使用します。 ダーレクやその他の敵を避けてください!',
  },
  't-rex-run-3d': {
    title: 'T-Rex Run 3D',
    description: 'Experience the classic Chrome dinosaur game reimagined in stunning full 3D! Run through an expansive desert landscape with depth and perspective, dodge obstacles coming from all directions, and collect power-ups and coins for bonus points in this immersive endless runner.\n\nThis fan-made 3D version transforms the beloved flat side-scroller into a fully three-dimensional experience with textured environments, dynamic lighting, and multiple camera angles. The added dimension creates new gameplay possibilities, including lateral dodging and environmental exploration, while preserving the simple one-button jump mechanic that made the original so addictive.',
    controls: 'スペースバーを押してジャンプし、下矢印を押してダックします。 3D で回避するには、左右の矢印を使用します。 コインとパワーアップを集めてボーナスポイントを獲得しましょう！',
  },
  'dino-swords': {
    title: 'Dino Swords',
    description: 'The Chrome dinosaur game with an arsenal of weapons! As you run through the desert, pick up swords, guns, hammers, and gadgets that automatically destroy cacti and pterodactyls in your path. Each weapon has limited uses, so choose wisely.\n\nCreated by MSCHF, the viral internet art collective, Dino Swords adds 26 different weapons to the familiar Chrome dino formula. From a classic katana to a gravity gun to a literal nuke, each weapon completely changes how you play. The absurd humour and creative weapon designs turned this parody into a beloved game in its own right.',
    controls: 'スペースバーを押してジャンプして武器を集めます。 それらを自動的に使用して障害物を破壊します。 各武器には使用回数が限られています！',
  },
  'blob-opera': {
    title: 'Blob Opera',
    description: 'Create beautiful opera music by dragging four colourful blob characters up and down to change their pitch, and left and right to shape vowel sounds. Each blob sings a different vocal part — bass, tenor, mezzo-soprano, and soprano — and a machine learning model harmonises them in real time.\n\nDeveloped by David Li in collaboration with Google Arts & Culture, Blob Opera uses AI trained on the voices of four real professional opera singers. The model learned to generate realistic operatic harmonies, making it possible for anyone to create surprisingly beautiful four-part vocal arrangements with no musical knowledge required. The irresistible blob characters and instant musical gratification made this a viral sensation.',
    controls: 'ブロブをクリックして上下にドラッグするとピッチが変更され、左右にドラッグすると母音が変更されます。 4 つのブロブすべてを移動して、調和のとれたオペラのアレンジメントを作成してください。',
  },
  'google-feud': {
    title: 'Google Feud',
    description: 'Guess Google\'s most popular autocomplete suggestions in this addictive Family Feud-style game! Read the beginning of a real Google search query, type your guess for how it ends, and score points for matching the most popular completions. Play through rounds of culture, people, names, and questions.\n\nInspired by the classic TV game show Family Feud, Google Feud reveals the surprisingly funny, bizarre, and thought-provoking things that millions of people search for every day. The game offers a fascinating window into collective human curiosity and has become a popular party game, sparking conversations and laughter about the unexpected things we all wonder about.',
    controls: 'Google 検索クエリの一部を読み、オートコンプリートの方法についての推測を入力します。 人気の検索候補に一致するとポイントを獲得できます。 複数のラウンドをプレイしましょう！',
  },
  'quick-draw': {
    title: 'Quick, Draw!',
    description: 'Can a neural network guess what you\'re drawing? Sketch the prompted object within 20 seconds using your mouse or finger, and watch in amazement as Google\'s AI tries to recognise your doodle in real time, calling out guesses as you draw.\n\nQuick, Draw! is one of Google\'s most popular AI experiments, powered by a neural network trained on millions of drawings from players around the world. Every sketch you make helps improve the AI\'s ability to recognise hand-drawn objects. The dataset of over 50 million drawings has been open-sourced, enabling researchers and artists worldwide to explore how humans communicate through simple sketches.',
    controls: '20 秒以内にマウスまたは指を使用して、指示されたオブジェクトをキャンバス上に描画します。 AI はあなたが何を描いているかをリアルタイムで推測しようとします。',
  },
  'chrome-music-lab': {
    title: 'Chrome Music Lab',
    description: 'Explore music through hands-on interactive experiments in this collection of creative tools by Google. Create songs with Song Maker, explore rhythms with Rhythm, visualise sound waves, learn about chords, and discover how music works through playful experimentation.\n\nChrome Music Lab was created to make learning music accessible to everyone through technology. Each experiment focuses on a different musical concept — from melody and harmony to oscillators and spectrograms — presented through colourful, intuitive interfaces that require no musical training. It\'s widely used in classrooms around the world as an educational tool for teaching music fundamentals.',
    controls: '音楽実験のいずれかをクリックして探索してください。 各ツールにはさまざまな操作があり、クリック、ドラッグ、再生することで音楽を作成し、サウンドがどのように機能するかを確認できます。',
  },
  'google-maps-snake': {
    title: 'Google Maps Snake',
    description: 'Play the classic Snake game on real city streets using Google Maps as the game board! Navigate a bus, train, or other vehicle through cities like Cairo, São Paulo, London, Sydney, San Francisco, and Tokyo, picking up passengers and landmarks to grow longer.\n\nReleased as a Google Maps April Fools\' Day feature in 2019, this creative mashup combines the nostalgia of Snake with real-world geography. Playing on actual street layouts creates unique challenges in each city, as some have wide boulevards perfect for manoeuvring while others have narrow, winding streets that make the game fiendishly difficult.',
    controls: '矢印キーを使用して、街の通りを車両で移動します。 乗客を乗せて長く成長してください。 体をぶつけたり、地図から外れたりしないようにしてください。',
  },
  'google-earth': {
    title: 'Google Earth',
    description: 'Explore the entire planet in 3D with Google Earth, flying from the peaks of the Himalayas to the depths of ocean trenches. Navigate satellite imagery, dive into street-level views, discover curated guided tours, and explore locations from ancient ruins to modern cities.\n\nGoogle Earth has been revolutionising how we see our planet since its launch in 2005. Built from petabytes of satellite imagery, aerial photography, and 3D terrain data, it lets anyone become a virtual explorer. Features like Voyager offer curated tours of natural wonders, cultural sites, and even other planets, making it both an educational powerhouse and a source of endless wonder.',
    controls: 'クリックしてドラッグして地球を回転させます。 スクロールして拡大または縮小します。 任意の場所をダブルクリックして、その場所に移動します。 特定の場所を検索するには、検索バーを使用します。',
  },
  'santa-tracker': {
    title: 'Google Santa Tracker',
    description: 'Track Santa\'s magical journey around the world on Christmas Eve and play dozens of holiday mini-games throughout December! Build toys in the workshop, code with elves, learn holiday traditions from around the world, and explore Santa\'s Village in this festive annual experience.\n\nGoogle Santa Tracker has been a beloved holiday tradition since 2004, entertaining millions of families every December. The village fills with new games and activities each day of the Advent calendar, and on Christmas Eve, a real-time tracker follows Santa\'s sleigh as he delivers presents across every time zone. It\'s become one of the most-visited holiday websites in the world.',
    controls: 'サンタ村のさまざまなゲームやアクティビティをクリックしてください。 各ミニゲームには独自のコントロールがあります。画面上の指示に従ってください。',
  },
  'space-invaders': {
    title: 'Space Invaders',
    description: 'Defend Earth from waves of descending alien invaders in this faithful recreation of the legendary 1978 arcade classic! Move your laser cannon left and right, fire upwards at the alien formations, and destroy every invader before they reach the bottom of the screen.\n\nSpace Invaders, created by Tomohiro Nishikado, was one of the first major arcade hits and helped launch the golden age of video games. It was so popular in Japan that it caused a temporary shortage of 100-yen coins. This web version preserves the original\'s iconic pixel art, distinctive alien march sound that speeds up as fewer invaders remain, and the intense pressure of watching enemies creep ever closer.',
    controls: '左右の矢印キーを使用して大砲を動かします。 スペースバーを押して発射します。 侵入者が画面の下に到達する前にすべて破壊してください!',
  },
  'doodle-jump-2': {
    title: 'Doodle Jump 2',
    description: 'Bounce your way to the top in this sequel to the legendary vertical platformer! Jump from platform to platform, avoid enemies and obstacles, grab power-ups like jetpacks and trampolines, and reach for the highest score as the challenge intensifies the higher you go.\n\nThe original Doodle Jump was released in 2009 and became one of the most downloaded mobile games of all time, with over 15 million sales. Its simple tilt-to-move mechanic and endlessly generated platforms created a perfect pick-up-and-play experience. This sequel builds on that addictive formula with new worlds, enemies, and power-ups while keeping the accessible gameplay that made the original a cultural touchstone.',
    controls: '左右の矢印キーを使用するか傾けて移動します。 Doodler は自動的にジャンプし、プラットフォームに誘導します。 敵を避けてパワーアップを手に入れよう！',
  },
  'google-solitaire': {
    title: 'Google Solitaire',
    description: 'Play the classic Klondike Solitaire card game right in your browser, no download required. Stack cards in descending order by alternating colours in the tableau, and build four foundation piles from Ace to King by suit to win the game.\n\nKlondike Solitaire is the most widely played card game in the world, included with every version of Windows since 1990. Microsoft\'s Solitaire was originally designed by intern Wes Cherry to help people learn to use a mouse by practising drag-and-drop. Today it remains one of the most popular digital pastimes, with over 35 million players worldwide enjoying its perfect blend of luck and strategy.',
    controls: 'カードをクリックまたはドラッグして列間を移動します。 デッキをクリックして新しいカードを引きます。 カードをダブルクリックすると、カードが財団に自動送信されます。',
  },
  'google-spider-solitaire': {
    title: 'Google Spider Solitaire',
    description: 'Arrange cards in descending runs of the same suit across ten tableau columns in this challenging Solitaire variant. Complete a full sequence from King down to Ace within a single suit to clear it from the board. Choose between 1, 2, or 4 suit modes for varying difficulty.\n\nSpider Solitaire gained massive popularity after Microsoft included it in Windows XP in 2001. Named after its eight foundation slots (like a spider\'s eight legs), it requires more strategic planning than standard Klondike. The four-suit mode is considered one of the most challenging single-player card games, with only about 1 in 3 deals being winnable even with perfect play.',
    controls: 'カードをドラッグして、同じスーツの降順シーケンスを構築します。 キングからエースまでフルランしてボードからクリアします。 山札をクリックして新しいカードを配ります。',
  },
  'google-freecell': {
    title: 'Google FreeCell',
    description: 'Test your strategic thinking in this beloved card game where nearly every deal is solvable. Use four free cells as temporary storage to manoeuvre cards between eight tableau columns, building sequences in descending alternating colours while moving cards to the foundation piles by suit from Ace to King.\n\nFreeCell stands apart from other solitaire games because almost every game can be won — only one deal out of the original 32,000 numbered deals in Windows FreeCell is known to be unsolvable (deal #11982). This makes it a game of pure skill rather than luck, rewarding careful planning and the ability to think several moves ahead.',
    controls: 'クリックして、列、フリーセル、および基礎の山の間でカードを移動します。 降順の交互の色で列を作成します。 スートごとにカードを昇順に財団に移動します。',
  },
  'google-memory': {
    title: 'Google Memory Game',
    description: 'Flip cards and find matching pairs in this classic concentration memory game. Click on two cards at a time to reveal their hidden images — if they match, they stay face-up; if not, they flip back over. Clear the entire board in as few moves as possible.\n\nThe memory matching game, also known as Concentration, has been a favourite children\'s game for generations. It\'s also a proven cognitive exercise that strengthens short-term memory, visual recognition, and spatial awareness. Studies show that regular play can improve concentration and memory skills in both children and adults.',
    controls: 'カードをクリックして裏返します。 位置を覚えて、一致するカードを見つけてください。 すべてのペアをクリアすると勝ちです！',
  },
  'google-ludo': {
    title: 'Google Ludo',
    description: 'Roll the dice and race your four tokens around the board in this timeless family strategy game. Get a six to bring new pieces into play, land on opponents to send them back to start, and be the first player to get all your tokens safely home.\n\nLudo is derived from the ancient Indian game Pachisi, which dates back to the 6th century and was played by Mughal emperors on life-sized boards with servants as game pieces. The simplified modern version was patented in England in 1896 and has since become one of the world\'s most popular board games, enjoyed by families across every continent.',
    controls: 'クリックしてサイコロを振り、トークンをクリックして移動します。 6 を獲得すると、新しいトークンが場に出されます。 対戦相手に着地すると、対戦相手をスタートに戻します。',
  },
  'google-word-coach': {
    title: 'Google Word Coach',
    description: 'Expand your vocabulary with this engaging word quiz game that tests your knowledge of definitions, synonyms, and word relationships. Choose the correct answer from multiple-choice options, build scoring streaks, and learn new words with each round.\n\nGoogle Word Coach originally appeared in Google Search results for users in non-English-speaking countries, helping them improve their English vocabulary in a fun, gamified way. The quiz format with immediate feedback makes learning new words feel like play rather than study, and the progressive difficulty ensures that both beginners and advanced learners are constantly challenged.',
    controls: '各単語の質問に表示される選択肢から正しい答えをクリックしてください。 正解するたびにポイントを獲得し、連続記録を積み上げてください。',
  },
  'google-spinner': {
    title: 'Google Spinner',
    description: 'Give the virtual spinner a whirl and watch it spin at satisfying speed! Switch between a fidget spinner mode for stress relief and a numbered wheel mode for random number generation, perfect for games, decisions, or just pure fidgeting fun.\n\nGoogle\'s spinner tool was introduced during the 2017 fidget spinner craze that swept the world. The fidget spinner mode features realistic physics with momentum and gradual slowdown, while the number wheel mode serves as a handy random number generator for board games and classroom activities. It\'s a simple but endlessly satisfying interactive tool.',
    controls: 'クリックしてドラッグしてスピナーを回転させます。 スワイプが速いほど、回転も速くなります。 ハンドスピナーとナンバーホイールのモードを切り替えます。',
  },
  'google-coin-flip': {
    title: 'Google Coin Flip',
    description: 'Need to make a quick decision? Flip a virtual coin with a satisfying toss animation and let fate decide between heads and tails. The realistic spinning animation adds drama to every flip, making even the simplest decisions feel momentous.\n\nCoin flipping has been used for decision-making since ancient Roman times, when it was known as "navia aut caput" (ship or head). Google\'s digital version brings this age-old practice into the modern era with smooth animation and true random generation. It\'s one of Google\'s most-used utility tools, perfect for settling friendly debates or making lunch choices.',
    controls: '「投げる」ボタンをクリックするか、コインをタップして投げます。 コインは回転し、ランダムに表または裏に着地します。',
  },
  'google-dice-roller': {
    title: 'Google Dice Roller',
    description: 'Roll virtual dice for board games, tabletop RPGs, or just for fun with this customisable dice roller. Choose how many dice to roll and how many sides each die has — from standard six-sided dice to 20-sided dice for Dungeons & Dragons and beyond.\n\nDigital dice rollers have become essential tools for the tabletop gaming community, especially for role-playing games that require exotic dice types. Google\'s version uses cryptographically random number generation to ensure fair rolls, making it suitable for everything from casual family board games to serious tabletop RPG campaigns. The satisfying rolling animation makes each throw feel authentic.',
    controls: '「Roll」をクリックしてサイコロを投げます。 コントロールを使用して、サイコロの数と面を調整します。 結果は満足のいく回転アニメーションで表示されます。',
  },
  'google-timer': {
    title: 'Google Timer',
    description: 'A clean and simple countdown timer and stopwatch built right into your browser. Set any duration from seconds to hours, start your countdown with one click, and get a clear audio alert when time\'s up — perfect for cooking, workouts, study sessions, and presentations.\n\nGoogle\'s timer tool has become a go-to utility for millions of people who need a quick, reliable timer without installing an app. The clean interface shows large, easy-to-read digits, and the persistent tab notification ensures you\'ll never miss your alarm even if you switch to another browser tab. It\'s one of those simple tools that makes daily life just a little bit easier.',
    controls: '期間を入力し、「開始」をクリックするとカウントダウンが始まります。 ストップウォッチモードを使用してカウントアップします。 いつでも一時停止、再開、リセットできます。',
  },
  'google-metronome': {
    title: 'Google Metronome',
    description: 'Keep perfect tempo with this digital metronome, featuring adjustable BPM from slow adagio to rapid prestissimo. The clear visual pendulum and crisp audio click help musicians of all levels practise their timing and develop a solid sense of rhythm.\n\nThe metronome was patented by Johann Maelzel in 1815 and has been an essential practice tool for musicians for over 200 years. Google\'s digital version brings this timeless tool to the browser, offering precise tempo control and a clean, distraction-free interface. Whether you\'re a beginner learning to keep time or a professional rehearsing complex passages, a reliable metronome is your best practice partner.',
    controls: '「開始」をクリックしてビートを開始します。 BPM スライダーを使用してテンポを調整するか、1 分あたりの希望のビート数を入力します。 一時停止するには「停止」をクリックします。',
  },
  'zerg-rush': {
    title: 'Zerg Rush',
    description: 'Defend your Google search results from an onslaught of falling "O" characters in this iconic Easter egg inspired by StarCraft! Click rapidly on each zergling O to destroy it before the swarm devours every search result on the page, leaving only a giant "GG" (good game).\n\nThe Zerg Rush Easter egg first appeared in Google Search in 2012 as a tribute to Blizzard\'s StarCraft franchise, where "Zerg rush" describes an overwhelming early-game attack strategy. The frantic clicking gameplay perfectly captures the panic of facing a real Zerg rush, and the final "GG" screen — gaming shorthand for "good game" — is a loving nod to competitive gaming culture.',
    controls: '検索結果が食べられる前に、落ちてくる「O」文字をすばやくクリックして破壊します。 各 O を倒すには 3 回のクリックが必要です。 できるだけ長く生き残ってください！',
  },
  'atari-breakout': {
    title: 'Atari Breakout',
    description: 'Smash colourful bricks with a bouncing ball in this legendary recreation of Atari\'s 1976 arcade classic! Move your paddle left and right to keep the ball in play, break through rows of bricks, and clear every single one to advance through increasingly challenging levels.\n\nBreakout was designed by Nolan Bushnell and Steve Bristow, with the prototype famously built by a young Steve Jobs and Steve Wozniak — yes, the Apple founders worked on this game before starting their own company. The game pioneered the brick-breaking genre that later inspired mega-hits like Arkanoid, and this web version preserves the pure, timeless satisfaction of shattering blocks with a perfectly aimed bounce.',
    controls: 'マウスまたは指を左右に動かしてパドルを制御します。 ボールをバウンドさせて上のレンガをすべて壊します。 ボールがパドルを越えて落ちないように注意してください。',
  },
  'google-gravity': {
    title: 'Google Gravity',
    description: 'Watch the entire Google homepage collapse under the force of gravity in this hilarious physics experiment! Every element — the logo, search bar, buttons, and links — tumbles and piles up at the bottom of the screen. Click and drag any piece to toss it around and enjoy the satisfying chaos.\n\nGoogle Gravity is one of the most popular Google Easter eggs ever created, demonstrating real-time 2D physics simulation in the browser. Despite everything falling apart, the search bar actually still works — you can type a query and submit it, with the results also tumbling down in the same chaotic fashion. It\'s a delightful example of creative web development.',
    controls: 'ページ上の要素をクリックしてドラッグし、要素を選択して投げます。 現実的な物理学ですべてが落下したり跳ね返ったりする様子を観察してください。 何か検索してみてください！',
  },
  'thanos-snap': {
    title: 'Thanos Snap',
    description: 'Wield the Infinity Gauntlet and snap half of all search results out of existence, just like Thanos from the Marvel Cinematic Universe! Click the golden gauntlet icon to watch results dissolve into dust with a dramatic particle effect, perfectly recreating the iconic snap.\n\nThis Easter egg was created to promote Avengers: Endgame in 2019 and became one of Google\'s most viral interactive features. The disintegration effect is faithful to the movie\'s visual style, and clicking again reverses the snap, restoring everything — just like in the film. A hidden detail: a counter shows exactly how many results were snapped away, always exactly half.',
    controls: 'Infinity Gauntlet アイコンをクリックしてスナップを実行します。 結果の半分が粉々に砕けるのを見てください。 もう一度クリックするとスナップが元に戻り、すべてが復元されます。',
  },
  'super-mario-coin-block': {
    title: 'Super Mario Coin Block',
    description: 'Discover the hidden Super Mario Bros. coin block Easter egg and punch it to collect coins with that iconic "cha-ching" sound effect! Click or tap the question mark block repeatedly to rack up coins, just like Mario himself, and see how many you can collect.\n\nThis Easter egg celebrates the 30th anniversary of Super Mario Bros., one of the most influential video games ever created. Released by Nintendo in 1985, Super Mario Bros. rescued the home console industry from collapse and introduced the world to Mario, who would become the most recognisable video game character of all time. The satisfying coin sound is one of gaming\'s most iconic audio cues.',
    controls: '疑問符ブロックをクリックまたはタップしてヒットし、コインを放出します。 クリックし続けて、できるだけ多くのコインを集めてください。 クラシックなコイン音を聞いてください。',
  },
  'google-pac-man': {
    title: 'Google PAC-MAN (elgooG)',
    description: 'The classic Google PAC-MAN Doodle hosted on elgooG, giving you a second way to play the iconic maze-chomping arcade game anytime you want. Navigate the maze, eat all the dots, grab power pellets to chase the ghosts, and aim for the highest score.\n\nThis version of the legendary 2010 PAC-MAN Doodle is preserved on elgooG, a website dedicated to keeping Google Easter eggs and Doodles playable forever. PAC-MAN remains the highest-grossing arcade game of all time, having generated over $14 billion in revenue. The game\'s creator, Toru Iwatani, was inspired by a pizza with a slice missing.',
    controls: '矢印キーを使用してパックマンを迷路の中を案内します。 すべてのドットを食べるとレベルが完了します。 パワーペレットを手に入れてゴーストを青にし、食べるとボーナスポイントが得られます。',
  },
  'google-mirror': {
    title: 'Google Mirror (elgooG)',
    description: 'See the entire Google search page reflected in a perfect mirror image on this quirky Easter egg site. Everything is reversed — text reads backwards, buttons are flipped, and even typing in the search bar appears mirrored. Try navigating the reversed interface for a brain-bending experience.\n\nGoogle Mirror (elgooG, which itself is "Google" backwards) has been delighting visitors since 2002. It\'s a fully functional mirror of Google Search where everything works in reverse. Beyond being a fun novelty, it\'s actually been used in countries where Google is blocked, as the mirrored domain sometimes bypasses internet filters.',
    controls: '検索バーに入力すると、テキストがミラーリングされて表示されます。 逆向きのインターフェイスを操作して、頭をひねるような体験をしてください。 すべてのリンクとボタンは逆に動作します。',
  },
  'google-in-1998': {
    title: 'Google in 1998',
    description: 'Take a nostalgic trip back to 1998 to see what Google looked like when it first launched! Browse the original bare-bones interface with its simple blue links, minimal design, and that early web charm that defined the dawn of the search engine era.\n\nWhen Larry Page and Sergey Brin launched Google from a Stanford University dorm room in September 1998, it had a stark white page with just a logo, a search bar, and two buttons. This Easter egg faithfully recreates that original experience, complete with period-appropriate search results. The contrast between the 1998 interface and modern Google perfectly illustrates how far the web has come in just over 25 years.',
    controls: 'クラシックな 1998 スタイルの検索バーに検索クエリを入力し、Enter キーを押します。 ノスタルジックな結果ページを参照してください。 クリックしてヴィンテージのインターフェースを探索してください。',
  },
  'do-a-barrel-roll': {
    title: 'Do a Barrel Roll',
    description: 'Watch the entire Google page perform a spectacular 360-degree barrel roll! The whole webpage smoothly rotates clockwise in a satisfying full spin, then settles back to normal. Try searching for it again or pressing the button to repeat the dizzying display.\n\nThis Easter egg was introduced in 2011 as a tribute to the Nintendo 64 game Star Fox, where Peppy Hare famously instructs the player to "Do a barrel roll!" The smooth CSS animation was groundbreaking at the time, demonstrating the power of modern web technologies. It became one of the most shared Google Easter eggs ever, with millions performing the search just to see the page spin.',
    controls: 'ボタンをクリックしてバレルロールアニメーションをトリガーします。 ページ全体が 360 度回転します。 複数回クリックすると、連続ローリングが楽しめます。',
  },
  'google-askew': {
    title: 'Google Askew / Tilt',
    description: 'The whole Google page tilts slightly to one side in this subtle and amusing Easter egg! Everything still works normally — you can search, click links, and browse results — but the entire page sits at a quirky crooked angle that\'s oddly unsettling.\n\nSearching for "askew" or "tilt" on Google triggers this clever visual gag that has been surprising users since 2011. The slight rotation is just enough to be noticeable and mildly disorienting, making it perfect for pranking friends and colleagues. It\'s one of Google\'s most understated Easter eggs, proving that sometimes the subtlest jokes are the funniest.',
    controls: '傾いたページを観察し、通常どおりに使用してみてください。 検索、リンクをクリック、ブラウズ - すべてを奇妙な角度から行います。 更新して傾きを再度確認します。',
  },
  'friends-easter-eggs': {
    title: 'Friends Easter Eggs',
    description: 'Discover hidden Friends TV show Easter eggs scattered across Google Search! Find interactive surprises for each of the six main characters — trigger Ross\'s "pivot" animation, Phoebe\'s guitar, Joey\'s food obsession, and more iconic moments from the beloved sitcom.\n\nThese Easter eggs were created to celebrate the 25th anniversary of Friends, which premiered on NBC on 22 September 1994 and ran for 10 seasons. The show remains one of the most-watched sitcoms in television history, with fans worldwide who can quote every episode. Each character\'s Easter egg references their most memorable moments, delighting the show\'s devoted fanbase.',
    controls: '各キャラクターのアイコンをクリックすると、独自のイースターエッグ アニメーションがトリガーされます。 6 人のキャラクターすべてを探索して、隠された驚きや象徴的なキャッチフレーズをすべて見つけてください。',
  },
  'google-underwater': {
    title: 'Google Underwater',
    description: 'Plunge beneath the waves as the Google homepage sinks into a beautiful underwater world! Watch tropical fish swim lazily past, interact with playful sea creatures, and enjoy the tranquil ocean ambience as the search bar and buttons float in the gentle current.\n\nGoogle Underwater transforms the familiar search page into a serene marine environment with realistic water physics and swimming animations. You can click to create ripples, scatter the fish, and interact with the aquatic scene. Despite the underwater setting, the search functionality still works, making it a unique blend of interactive art and functional tool.',
    controls: 'マウスを動かして水中のシーンを操作します。 クリックすると波紋が生まれ、魚を怖がらせます。 要素をドラッグして、水に浮かぶ様子を観察します。',
  },
  'google-space': {
    title: 'Google Space',
    description: 'Launch the Google homepage into outer space and watch every element float away in zero gravity! The logo, search bar, buttons, and text all drift apart in the cosmic void. Grab any element with your mouse and fling it across the screen to watch it tumble through space.\n\nGoogle Space demonstrates zero-gravity physics simulation in the browser, turning the familiar homepage into a cosmic playground. Like Google Gravity, the search bar continues to function despite floating freely, and search results also appear in a weightless state. It\'s a mesmerising visual experience that invites playful interaction with the familiar Google interface.',
    controls: '任意の要素をクリックしてドラッグし、空間に放り投げます。 物体が浮遊し、無重力物理学によって衝突する様子を観察します。 すべてが消え去ってしまうので、検索バーに入力してみてください。',
  },
  'google-2048': {
    title: 'Google 2048',
    description: 'Slide numbered tiles on a 4×4 grid and merge matching numbers to reach the elusive 2048 tile! Swipe or use arrow keys to shift all tiles in one direction — when two tiles of the same number collide, they merge into one with double the value. Plan your moves carefully to avoid filling up the board.\n\nCreated by Italian developer Gabriele Cirulli in 2014 as a weekend project, 2048 became a viral sensation overnight, spawning thousands of clones and variants. The deceptively simple math puzzle hides deep strategic complexity — players must balance short-term merges with long-term positioning to reach higher numbers. Reaching 2048 is satisfying, but the real challenge is pushing beyond to 4096, 8192, and beyond.',
    controls: '矢印キーまたはスワイプを使用して、すべてのタイルを一方向にスライドさせます。 一致する数字が衝突すると結合します。 ボードが埋まらないように慎重に動きを計画してください。',
  },
  'google-interland': {
    title: 'Google Interland',
    description: 'Explore the magical land of Interland and master essential internet safety skills through four exciting adventure zones! Battle hackers in the Tower of Treasure, spot phishing scams in Reality River, practise kindness in Kind Kingdom, and protect your data in Mindful Mountain.\n\nDeveloped as part of Google\'s "Be Internet Awesome" initiative, Interland teaches children critical digital citizenship skills through engaging gameplay. The programme was developed with input from online safety experts and educators, and is used in thousands of schools worldwide. Each zone focuses on a different aspect of internet safety, making complex concepts like data privacy and cyberbullying accessible to young learners.',
    controls: '矢印キーを使用するかクリックして、各ゾーン間を移動します。 質問に答えてチャレンジを完了すると、ポイントを獲得できます。 4 つの王国すべてを進んで、インターネットの安全性をマスターしてください。',
  },
  'google-arts-culture-face-match': {
    title: 'Google Arts and Culture Face Match',
    description: 'Take a selfie and discover your fine art doppelgänger from thousands of museum paintings and portraits worldwide! Google\'s AI analyses your facial features and matches you with famous artworks, showing your closest match along with information about the painting and its artist.\n\nLaunched as part of Google Arts & Culture in 2018, the Face Match feature went viral almost immediately, briefly making the app the most downloaded on both iOS and Android. The AI compares your photo against a database of artworks from over 1,200 museums and galleries. Beyond the fun of finding your painted twin, the feature introduces millions of people to artwork they might never have encountered otherwise.',
    controls: 'カメラへのアクセスを許可し、キャプチャ ボタンをクリックして自撮り写真を撮ります。 AI は美術館のコレクションをスキャンし、絵画の歴史とともに最も近いアートを表示します。',
  },
  'google-teachable-machine': {
    title: 'Google Teachable Machine',
    description: 'Train your own artificial intelligence model using your webcam, microphone, or uploaded images — no coding required! Create classes, record samples, train the model with one click, and watch your custom AI recognise gestures, sounds, objects, and poses in real time.\n\nGoogle Teachable Machine demystifies artificial intelligence by letting anyone build and train a machine learning model in minutes. Used by educators, artists, and makers worldwide, it has powered everything from school science projects to interactive art installations. The tool runs entirely in the browser using TensorFlow.js, and trained models can be exported for use in websites, apps, and physical computing projects.',
    controls: '[トレーニング] をクリックして、Web カメラまたはマイクを使用して各クラスのサンプルを記録します。 複数のクラスを追加し、[モデルのトレーニング] をクリックして AI を構築します。 リアルタイムでテストしてみましょう！',
  },
  'great-ghoul-duel-2': {
    title: 'Great Ghoul Duel 2 (Halloween 2022)',
    description: 'Team up with players worldwide in this spooky sequel to the beloved Great Ghoul Duel! Compete as adorable ghosts to collect wandering spirit flames across new haunted maps, use fresh power-ups to gain advantages, and race to return the most flames to your team\'s base.\n\nThe 2022 Halloween Doodle built upon the success of the original 2018 multiplayer game with enhanced graphics, new haunted environments, and exciting power-up mechanics. The real-time multiplayer matchmaking connects players across the globe for fast-paced team competitions. The Great Ghoul Duel series has become one of Google\'s most anticipated annual events, with millions of players logging in each Halloween.',
    controls: '矢印キーまたはスワイプを使用してゴーストを移動します。 精霊の炎を集めて拠点に戻します。 新しいパワーアップを使用して、相手チームよりも有利に進みましょう!',
  },
  'gerald-lawson-game-maker': {
    title: 'Celebrating Gerald "Jerry" Lawson',
    description: 'Honour the father of modern gaming by building your own video game levels in this interactive Doodle celebrating Gerald "Jerry" Lawson! Use the intuitive level editor to place platforms, enemies, collectibles, and power-ups, then play your creation and share it with friends.\n\nJerry Lawson invented the Fairchild Channel F in 1976 — the first home console with interchangeable game cartridges. Before his innovation, games were hardwired into consoles, meaning each system could only play one game. His cartridge system revolutionised the entire gaming industry, paving the way for the Atari 2600, Nintendo, PlayStation, and every modern console. This Doodle celebrates his legacy by putting game creation power in everyone\'s hands.',
    controls: 'レベル エディタを使用して、プラットフォーム、敵、パワーアップを配置します。 「再生」をクリックして作成したものをテストします。 カスタムレベルを友達と共有しましょう！',
  },
  'valentines-day-chemistry': {
    title: 'Valentine\'s Day Chemistry CuPd (2024)',
    description: 'Discover the chemistry of love in this Valentine\'s Day Doodle where elements CuPd (Copper and Palladium — "CuPid") come together! Match chemical elements to trigger love-themed reactions, watch atoms dance and combine, and create beautiful molecular animations in this heartwarming interactive experience.\n\nThis clever 2024 Valentine\'s Doodle combines romance with real chemistry, using actual periodic table elements to spell out love-related words. The playful approach to science education makes it both entertaining and informative, introducing players to chemical bonding concepts through charming animations. It\'s a perfect example of how Google Doodles can make learning feel like play.',
    controls: '要素をクリックしてドラッグして結合し、化学反応を引き起こします。 適切なペアをマッチさせて愛をテーマにしたアニメーションのロックを解除し、パズルを完成させてください。',
  },
  'rise-of-the-half-moon-november': {
    title: 'Rise of the Half Moon — November 2024',
    description: 'Continue your celestial adventure in Chapter 2 of the Rise of the Half Moon series. Face new card challenges, discover fresh strategies, and explore deeper into the mythology of the moon in this strategic card game with stunning artwork.\n\nThis November 2024 chapter expanded the Rise of the Half Moon universe with new card types, enhanced mechanics, and a continuing narrative about celestial balance. The serialised format kept the growing community of players engaged, with each chapter building on the strategies and story established in the first instalment.',
    controls: 'クリックしてドラッグして月の満ち欠けを操作します。 天体を並べてパズルを解きます。 各チャレンジを完了することでストーリーを進めてください。',
  },
  'rise-of-the-half-moon-december': {
    title: 'Rise of the Half Moon — December 2024',
    description: 'Explore wintery lunar landscapes and solve new celestial puzzles in Chapter 3 of the Rise of the Half Moon series. Master advanced card strategies, unlock powerful new card combinations, and experience the story as it reaches its most dramatic moments.\n\nThe December 2024 chapter brought a winter theme to the Half Moon saga, with snowy environments and holiday-inspired card designs. As the penultimate chapter, it raised the stakes with more complex puzzles and deeper strategic options, setting up an epic conclusion while rewarding dedicated players who had followed the series from the beginning.',
    controls: 'クリックしてドラッグして月の満ち欠けを操作します。 天体を並べてパズルを解きます。 各チャレンジを完了することでストーリーを進めてください。',
  },
  'rise-of-the-half-moon-january': {
    title: 'Rise of the Half Moon — January 2025',
    description: 'Experience the grand finale of the Rise of the Half Moon series in this climactic fourth chapter. Complete the ultimate celestial challenge, unlock the final story revelations, and witness the conclusion of the lunar saga with the most complex card strategies yet.\n\nThe January 2025 finale brought the Rise of the Half Moon saga to a satisfying close, tying together narrative threads from all four chapters. The concluding chapter featured the most challenging card puzzles in the series, requiring players to master everything they had learned. This serialised approach to Doodle games was a first for Google, creating an ongoing story that kept players returning month after month.',
    controls: 'クリックしてドラッグして月の満ち欠けを操作します。 天体を並べて最後のパズルを解きます。 物語を完成させよう！',
  },
  'minecraft-easter-egg': {
    title: 'Minecraft Easter Egg',
    description: 'Explore the iconic blocky world of Minecraft Classic right in your browser! Build, dig, and create to your heart\'s content in this nostalgic recreation of Minecraft\'s earliest version. Place and break blocks across a procedurally generated landscape of pixelated terrain.\n\nMinecraft, created by Markus "Notch" Persson in 2009, has become the best-selling video game of all time with over 300 million copies sold. What began as a simple block-building experiment grew into a global cultural phenomenon that revolutionised gaming, education, and digital creativity. Minecraft Classic preserves the pure building sandbox experience of the game\'s earliest days, before monsters, redstone circuits, and The End were added.',
    controls: 'WASD を使用して移動し、マウスを使用して周囲を見回します。 左クリックでブロックを壊し、右クリックでブロックを配置します。 数字キーを使用して、インベントリからさまざまなブロック タイプを選択します。',
  },
  'google-maps-pac-man': {
    title: 'Google Maps PAC-MAN',
    description: 'Play PAC-MAN on actual city streets in this legendary Google Maps mashup! Navigate real-world road layouts while chomping dots, collecting fruit bonuses, and avoiding the four colourful ghosts as they chase you through your own neighbourhood.\n\nOriginally released as a Google Maps April Fools\' Day feature in 2015, this creative blend of classic gaming and real-world geography became one of Google\'s most popular April Fools\' pranks ever. The game transforms any city\'s street layout into a PAC-MAN maze, creating unique challenges depending on the location. Dense city centres with grid-like streets play very differently from suburban areas with cul-de-sacs.',
    controls: '矢印キーを使用してパックマンを実際の街の通りに案内します。 ゴーストを避けながらすべてのドットを食べます。 パワーペレットを手に入れて追っ手に対して形勢を逆転させましょう！',
  },
  'google-whirlybird': {
    title: 'Google Whirlybird',
    description: 'Pilot a tiny helicopter through challenging obstacle courses in this addictive one-button flying game! Tap or click to gain altitude and release to descend, threading through narrow gaps between obstacles while collecting bonuses along the way.\n\nInspired by the viral "Flappy Bird" phenomenon of 2014, one-button helicopter games have become a beloved casual gaming genre. The core mechanic — balancing altitude with precise taps — creates an elegantly simple game that\'s easy to learn but incredibly difficult to master. The gradually increasing difficulty and competitive high-score chasing make it perfect for quick gaming sessions.',
    controls: 'クリックまたはタップしてヘリコプターを上向きに飛行させます。 放すと下降します。 衝突することなく障害物の隙間を通り抜けましょう!',
  },
  'rugby-world-cup-2015': {
    title: 'Rugby World Cup 2015 Doodle',
    description: 'Score tries and convert kicks in this Google Doodle celebrating the 2015 Rugby World Cup! Play as a rugby team competing through the tournament, timing your kicks perfectly and dodging defenders in fast-paced running gameplay.\n\nThis Doodle was created for the opening day of the 2015 Rugby World Cup, hosted by England. The tournament saw New Zealand successfully defend their title, becoming the first team to win back-to-back Rugby World Cups. The sport of rugby union, which originated at Rugby School in England in the 19th century, is now played in over 120 countries with a passionate global following.',
    controls: 'クリックしてボールを蹴り、ポイントを獲得します。 コンバージョンの時間を計り、目標を達成しましょう。 ボールを持って走り、ディフェンダーをかわしてトライを決めましょう！',
  },
};
