import type { GameTranslation } from '../gameTranslations';

export const HI_GAMES: Record<string, GameTranslation> = {
  'snake': {
    title: 'गूगल स्नेक',
    description: 'गूगल सर्च में बने क्लासिक स्नेक गेम को खेलें। अपने बढ़ते सांप को सेब खाने के लिए गाइड करें और दीवारों तथा अपनी पूंछ से बचें। जितना अधिक आप जीवित रहेंगे, गेम उतना तेज और मुश्किल होता जाएगा।\n\n1990 के दशक के अंत में नोकिया मोबाइल फोन पर लोकप्रिय, स्नेक इतिहास के सबसे पहचाने जाने वाले वीडियो गेम में से एक बन गया है। गूगल का ब्राउज़र संस्करण उस नशीली सादगी को ईमानदारी से पुनर्निर्मित करता है।',
    controls: 'दिशा बदलने के लिए तीर कुंजियों का उपयोग करें. लंबे समय तक बढ़ने के लिए सेब खाएं। दीवारों या अपने शरीर से टकराने से बचें!',
  },
  'pacman': {
    title: 'PAC-MAN डूडल',
    description: '2010 में अपनी 30वीं वर्षगांठ के लिए गूगल डूडल के रूप में पुनर्निर्मित प्रसिद्ध PAC-MAN आर्केड गेम खेलें। भूलभुलैया में नेविगेट करें, सभी डॉट्स खाएं और पावर पेलेट से भूतों को पकड़ें।\n\nयह गूगल का पहला प्लेएबल डूडल था और एक सांस्कृतिक सनसनी बन गया — अनुमानित एक अरब लोगों ने इसे पहले तीन दिनों में खेला।',
    controls: 'PAC-MAN को भूलभुलैया में मार्गदर्शन करने के लिए तीर कुंजियों का उपयोग करें। स्तर को पूरा करने के लिए सभी बिंदुओं को खाएं। भूतों को नीला करने के लिए पावर छर्रों को पकड़ें और बोनस अंक के लिए उन्हें खाएं।',
  },
  'chrome-dino': {
    title: 'क्रोम डिनो (बिना इंटरनेट गेम)',
    description: 'क्रोम के ऑफलाइन पेज का मशहूर टी-रेक्स डायनासोर रनर — अब कभी भी खेलने के लिए उपलब्ध। कैक्टस के ऊपर कूदें और टेरोडैक्टिल के नीचे झुकें।\n\nक्रोम डिनो गेम 2014 में गूगल डिज़ाइनर सेबास्टियन गेब्रियल द्वारा बनाया गया था। यह दुनिया के सबसे ज़्यादा खेले जाने वाले गेम में से एक बन गया है।',
    controls: 'कैक्टि पर कूदने के लिए स्पेसबार दबाएँ या टैप करें। टेरोडैक्टाइल के नीचे छिपने के लिए नीचे तीर दबाएँ। जैसे-जैसे आपका स्कोर बढ़ता है खेल तेज़ होता जाता है!',
  },
  'minesweeper': {
    title: 'Google Minesweeper',
    description: 'Clear the minefield without detonating a single mine in this classic logic puzzle. Use the number clues revealed on each uncovered square to deduce exactly where the hidden mines are, then right-click to flag every dangerous tile you find.\n\nMinesweeper has been a staple of personal computing since Microsoft bundled it with Windows 3.1 in 1992. What began as a simple time-killer became a globally competitive puzzle with dedicated speedrunning communities. This web version preserves the original challenge with customisable grid sizes and difficulty levels.',
    controls: 'इसे प्रकट करने के लिए किसी वर्ग पर क्लिक करें। संख्याएँ दर्शाती हैं कि कितनी निकटवर्ती खदानें मौजूद हैं। किसी संदिग्ध खदान को चिह्नित करने के लिए राइट-क्लिक करें। जीतने के लिए सभी सुरक्षित वर्ग साफ़ करें!',
  },
  'tic-tac-toe': {
    title: 'Google Tic-Tac-Toe',
    description: 'Play the timeless game of Tic-Tac-Toe against Google\'s AI at easy, medium, or impossible difficulty. Place your X or O on the 3×3 grid and try to get three marks in a row horizontally, vertically, or diagonally before your opponent does.\n\nDating back to ancient Egypt, Tic-Tac-Toe is one of the oldest known strategy games in human history. While simple enough for young children to learn, the game introduces fundamental concepts of strategy and forward thinking. At impossible difficulty, the AI plays a mathematically perfect game, making it a great challenge for aspiring strategists.',
    controls: 'अपना चिह्न लगाने के लिए खाली वर्ग पर क्लिक करें। जीतने के लिए क्षैतिज, लंबवत या तिरछे एक पंक्ति में तीन X प्राप्त करें। शुरू करने से पहले अपना कठिनाई स्तर चुनें।',
  },
  'les-paul-guitar': {
    title: 'Les Paul Guitar Doodle',
    description: 'Strum and record your own guitar riffs on this interactive Google Doodle honouring Les Paul, the legendary inventor of the solid-body electric guitar. Pluck the strings with your mouse, play melodies using your keyboard, and even record multi-track compositions to share with friends.\n\nReleased on 9 June 2011 to celebrate what would have been Les Paul\'s 96th birthday, this Doodle was one of the most popular interactive Doodles ever created. It features a realistic guitar interface that responds to both mouse hovering and keyboard input, letting anyone become a virtual guitarist in seconds.',
    controls: 'गिटार के तारों पर होवर करें और उन्हें तोड़ने के लिए क्लिक करें। नोट्स चलाने के लिए कीबोर्ड कुंजियों A-L का उपयोग करें। अपनी धुन को पकड़ने और दोबारा चलाने के लिए रिकॉर्ड बटन पर क्लिक करें।',
  },
  'basketball-2012': {
    title: 'Basketball 2012 Doodle',
    description: 'Shoot hoops in this London 2012 Olympics basketball Doodle. Press and hold the spacebar to set your shot power, then release at the perfect moment to arc the ball into the basket and rack up the highest score possible within the time limit.\n\nThis Doodle was part of Google\'s series of interactive sports games created for the London 2012 Summer Olympics. Each day of the Games featured a different sport, giving players worldwide a chance to compete in Olympic events right from the Google homepage.',
    controls: 'अपनी शॉट पावर सेट करने के लिए स्पेसबार को दबाकर रखें, फिर शूट करने के लिए छोड़ दें। गेंद को टोकरी में पूरी तरह से आर्क करने के लिए अपनी रिलीज़ का समय निर्धारित करें। जितना हो सके उतना स्कोर करें!',
  },
  'hurdles-2012': {
    title: 'Hurdles 2012 Doodle',
    description: 'Sprint down the track and leap over hurdles in this London 2012 Olympics Doodle. Rapidly alternate pressing the left and right arrow keys to build speed, then time your spacebar jumps perfectly to clear each hurdle without stumbling.\n\nOne of the most popular 2012 Olympic Doodles, the hurdles game became a viral sensation as players competed for the fastest times. The simple but addictive keyboard-mashing mechanic captured the intensity of a real sprint, while the forgiving jump timing made it accessible to players of all ages.',
    controls: 'चलाने के लिए बाएँ और दाएँ तीर कुंजियों को बारी-बारी से तेज़ी से दबाएँ। प्रत्येक बाधा पर कूदने के लिए स्पेसबार दबाएँ। गलत समय पर छलांग लगाने से आपको झटका लगेगा और आपकी गति धीमी हो जाएगी!',
  },
  'slalom-canoe': {
    title: 'Slalom Canoe 2012 Doodle',
    description: 'Paddle your canoe through the slalom course in this London 2012 Olympics Doodle. Use the left and right arrow keys to steer through each gate in the correct order, aiming for the fastest time without any penalties.\n\nThis water sport Doodle brought the excitement of Olympic canoe slalom to millions of desktop browsers during the London 2012 Games. The intuitive controls and quick gameplay loop made it easy to pick up but challenging to master, especially when trying to thread through every gate without missing any.',
    controls: 'डोंगी को चलाने के लिए बाएँ और दाएँ तीर कुंजियों का उपयोग करें। प्रत्येक गेट से बिना कोई चूके क्रम से गुजरें। यथासंभव सबसे तेज़ समय का लक्ष्य रखें!',
  },
  'soccer-2012': {
    title: 'Soccer 2012 Doodle',
    description: 'Play goalkeeper in this London 2012 Olympics football Doodle. Dive left or right using the arrow keys, or stay in the centre with spacebar, to block incoming penalty kicks and save as many shots as you can.\n\nThis goalkeeper challenge was one of the most played sports Doodles during the 2012 Olympic Games. The quick reflexes required to read the kicker\'s approach and react in time gave players a taste of the high-pressure world of penalty shootouts, one of football\'s most dramatic moments.',
    controls: 'प्रत्येक दिशा में गोता लगाने के लिए बाएँ और दाएँ तीर कुंजियों का उपयोग करें। केंद्र में रहने के लिए स्पेसबार दबाएँ। बचाने के लिए किकर के शॉट पर तुरंत प्रतिक्रिया करें!',
  },
  'robert-moog': {
    title: 'Robert Moog Synthesiser Doodle',
    description: 'Twist knobs and patch cables on a virtual Moog synthesiser in this interactive Doodle honouring Robert Moog, the pioneer of electronic music. Adjust oscillators, filters, and effects to craft your own unique electronic sounds, then play melodies using your keyboard.\n\nReleased on 23 May 2012 for what would have been Robert Moog\'s 78th birthday, this Doodle is a fully functional four-oscillator synthesiser. Moog\'s inventions revolutionised popular music in the 1960s and 1970s, influencing artists from Stevie Wonder to Kraftwerk, and this interactive tribute lets anyone experience the joy of analogue sound design.',
    controls: 'ऑसिलेटर, फिल्टर और प्रभाव को समायोजित करने के लिए नॉब को क्लिक करें और खींचें। नोट्स चलाने के लिए कीबोर्ड का उपयोग करें. अद्वितीय ध्वनियाँ बनाने के लिए विभिन्न सेटिंग्स के साथ प्रयोग करें।',
  },
  'alan-turing': {
    title: 'Alan Turing Machine Doodle',
    description: 'Solve logic puzzles on a virtual Turing machine to honour Alan Turing, the father of computer science. Program the tape head by setting states and transitions, then run the machine to see if it produces the correct binary output for each increasingly difficult challenge.\n\nCreated for what would have been Turing\'s 100th birthday on 23 June 2012, this Doodle is a genuine educational tool that teaches the fundamentals of computation theory. Alan Turing\'s concept of a universal computing machine laid the theoretical groundwork for every modern computer, and his wartime codebreaking work at Bletchley Park helped turn the tide of World War II.',
    controls: 'इसे प्रोग्राम करने के लिए ट्यूरिंग मशीन की स्थिति और बदलाव पर क्लिक करें। मशीन को चलाने के लिए प्ले दबाएँ और जाँचें कि यह सही आउटपुट देती है या नहीं। सभी स्तरों को हल करें!',
  },
  'zamboni': {
    title: 'Zamboni Doodle',
    description: 'Drive the Zamboni ice resurfacing machine across the frozen rink in this charming Doodle. Use the arrow keys to steer the Zamboni over every patch of rough ice, polishing the entire surface before time runs out.\n\nThis Doodle celebrated the birthday of Frank Zamboni, who invented the iconic ice resurfacing machine in 1949. The relaxing gameplay of methodically covering every inch of the rink became a surprise hit, proving that even the most mundane tasks can be satisfying when turned into a game.',
    controls: 'ज़ांबोनी को रिंक के चारों ओर चलाने के लिए तीर कुंजियों का उपयोग करें। खुरदुरी बर्फ के प्रत्येक टुकड़े को फिर से सतह पर लाने के लिए उसे ढँक दें। समय ख़त्म होने से पहले पूरे रिंक को साफ़ करने का प्रयास करें!',
  },
  'doodle-crossword': {
    title: 'Crossword Puzzle Doodle',
    description: 'Solve the Google crossword puzzle with clues about the history of crosswords and general knowledge. Click on a clue to highlight its row or column, type your answers letter by letter, and fill in the entire grid to win.\n\nThis interactive Doodle celebrated the 100th anniversary of the crossword puzzle, which was first published in the New York World newspaper on 21 December 1913 by journalist Arthur Wynne. What started as a simple word game called "Word-Cross" evolved into one of the world\'s most popular pastimes, now enjoyed by millions in newspapers, apps, and right here in your browser.',
    controls: 'किसी सुराग की पंक्ति या स्तंभ को हाइलाइट करने के लिए उस पर क्लिक करें। उत्तर भरने के लिए अक्षर टाइप करें. पार और नीचे सुरागों के बीच क्लिक करें. जीतने के लिए ग्रिड पूरा करें!',
  },
  'doodle-roswell': {
    title: 'Roswell\'s 66th Anniversary Doodle',
    description: 'Help a stranded alien find the scattered pieces of its crashed spaceship in this charming point-and-click adventure set in 1947 Roswell, New Mexico. Click on objects in each scene to interact with them, solve simple puzzles, and piece together the UFO so your extra-terrestrial friend can fly home.\n\nCreated for the 66th anniversary of the famous Roswell incident, this three-scene Doodle is one of Google\'s most beloved adventure games. The whimsical art style and clever environmental puzzles make it a delightful five-minute experience that captures the mystery and humour of UFO folklore.',
    controls: 'दृश्य में वस्तुओं के साथ बातचीत करने के लिए उन पर क्लिक करें। विभिन्न स्थानों पर बिखरे हुए सभी अंतरिक्ष यान भागों को ढूंढें। नए क्षेत्रों को अनलॉक करने के लिए सरल पहेलियाँ हल करें।',
  },
  'mothers-day-2013': {
    title: 'Mother\'s Day 2013 Doodle',
    description: 'Create a personalised card for Mother\'s Day by choosing from various craft supplies, stickers, and decorations in this heartwarming interactive Doodle. Design a beautiful card using the virtual art supplies, then share your creation with the special mum in your life.\n\nThis 2013 Mother\'s Day Doodle celebrated the creativity and love that goes into handmade cards. The intuitive drag-and-drop craft interface makes it easy for children and adults alike to create something truly personal, continuing the time-honoured tradition of showing appreciation through homemade gifts.',
    controls: 'अपने कार्ड को सजाने के लिए विभिन्न शिल्प आपूर्तियों पर क्लिक करें। स्टिकर, चित्र और संदेश चुनें। अपना तैयार कार्ड प्रिंट करें या साझा करें!',
  },
  'doodle-google-15th': {
    title: 'Google\'s 15th Birthday Doodle',
    description: 'Celebrate Google\'s 15th birthday by whacking a piñata full of candy and surprises! Click or press spacebar to swing the stick at the star-shaped piñata, break it open, and collect as many treats as you can in this festive mini-game.\n\nReleased on 27 September 2013 to mark Google\'s 15th anniversary, this cheerful Doodle captures the party spirit with colourful confetti and cascading candy. Google was officially founded on 4 September 1998 by Larry Page and Sergey Brin in a garage in Menlo Park, California, growing from a Stanford research project into the world\'s most-used search engine.',
    controls: 'पिनाटा पर छड़ी को घुमाने के लिए स्पेसबार पर क्लिक करें या दबाएँ। इसे खोलने और हर जगह कैंडी बिखेरने के लिए अपने हिट का समय निर्धारित करें। जितना हो सके इकट्ठा करो!',
  },
  'rubiks-cube': {
    title: 'Rubik\'s Cube Doodle',
    description: 'Twist and turn a fully interactive virtual Rubik\'s Cube to solve it in as few moves as possible. Click and drag the faces to rotate them, working to align each side into a single solid colour across all six faces of the cube.\n\nThis Doodle celebrated the 40th anniversary of the Rubik\'s Cube, invented by Hungarian architect Ernő Rubik in 1974. With over 43 quintillion possible configurations but only one solution, the Rubik\'s Cube is the world\'s best-selling puzzle toy, with over 450 million cubes sold. The current world record for solving one is under 3.5 seconds.',
    controls: 'घन फलकों को घुमाने के लिए क्लिक करें और खींचें। प्रत्येक पक्ष को एक ही रंग दिखाने का प्रयास करें। यथासंभव न्यूनतम चालों का लक्ष्य रखें!',
  },
  'doodle-beethoven': {
    title: 'Beethoven Doodle',
    description: 'Help Ludwig van Beethoven put his famous compositions back together by arranging scrambled musical bars in the correct order. Drag and drop the shuffled measures into their proper sequence, and listen to each masterpiece play back beautifully when you get it right.\n\nThis 2015 Doodle celebrated Beethoven\'s 245th birthday with a delightful musical puzzle featuring some of his most iconic works, including Für Elise and the Fifth Symphony. The charming animated narrative follows Beethoven rushing to his concert while his sheet music flies away, making each puzzle a race against time to reconstruct the great composer\'s genius.',
    controls: 'म्यूजिकल बार को सही क्रम में खींचें और छोड़ें। जब आपको यह सही लगे तो प्रत्येक टुकड़े को पुन: बजाकर सुनें। सभी रचनाएँ पूर्ण करें!',
  },
  'eiji-tsuburaya': {
    title: 'Eiji Tsuburaya Doodle',
    description: 'Play through a retro side-scrolling game honouring Eiji Tsuburaya, the legendary creator of Godzilla and Ultraman special effects. Battle giant monsters, dodge obstacles, and use special effects beams to save the city across multiple action-packed stages.\n\nReleased on 7 July 2015 for what would have been Tsuburaya\'s 114th birthday, this Doodle pays tribute to the father of Japanese tokusatsu (special effects) cinema. Tsuburaya\'s pioneering techniques, including miniature sets and suit-motion monster performances, revolutionised the film industry and created iconic franchises that have entertained audiences for over 60 years.',
    controls: 'स्थानांतरित करने के लिए तीर कुंजियों का उपयोग करें और आक्रमण करने के लिए स्पेसबार का उपयोग करें। राक्षसों पर विशेष प्रभाव वाली किरणों से प्रहार करके उन्हें परास्त करें। सभी चरणों को पूरा करें!',
  },
  'pony-express': {
    title: 'Pony Express Doodle',
    description: 'Ride your horse across the American frontier, collecting letters and mail pouches while dodging cacti, fences, and other obstacles in this endless runner. Press the up and down arrow keys to switch lanes and grab every piece of mail along the trail.\n\nThis Doodle celebrated the 155th anniversary of the Pony Express, the legendary mail delivery service that operated from April 1860 to October 1861. Despite lasting only 18 months, the Pony Express became an enduring symbol of the American frontier spirit, with riders covering nearly 2,000 miles from Missouri to California in just 10 days.',
    controls: 'लेन बदलने के लिए ऊपर और नीचे तीर कुंजियाँ दबाएँ। रास्ते में पत्र और मेल एकत्र करें। कैक्टि, बाड़ और अन्य बाधाओं से बचें। मेल वितरित करें!',
  },
  'global-candy-cup': {
    title: 'Global Candy Cup 2015',
    description: 'Pick your team and compete in the Global Candy Cup — a Halloween trick-or-treating race to collect the most candy! Choose from a witch, ghost, vampire, or other spooky character and race through neighbourhoods scooping up sweet treats.\n\nThis 2015 Halloween Doodle introduced a competitive team-based element where players worldwide contributed to global team scores. The colourful, kid-friendly art style and simple click-to-collect gameplay made it a perfect Halloween activity for players of all ages.',
    controls: 'घरों के बीच जाने के लिए क्लिक करें या टैप करें। कैंडी इकट्ठा करें और बाधाओं से बचें। हेलोवीन रात समाप्त होने से पहले सबसे अधिक उपहार पाने के लिए अन्य टीमों के खिलाफ दौड़ें!',
  },
  'magic-cat-academy': {
    title: 'Magic Cat Academy (Halloween 2016)',
    description: 'Play as Momo the cat wizard and defend your magic school from an invasion of ghosts! Draw symbols with your mouse or finger to cast spells that match the shapes above each ghost\'s head, zapping them before they reach you. Each level introduces new ghost types and more complex spell patterns.\n\nThe 2016 Halloween Doodle became one of Google\'s most beloved interactive creations. The adorable protagonist Momo, based on a real black cat from the Doodle team, captured hearts worldwide. The intuitive draw-to-cast mechanic works beautifully on both desktop and mobile devices, and the game\'s five increasingly challenging levels offer a satisfying difficulty curve.',
    controls: 'अपने माउस या उंगली का उपयोग करके प्रत्येक भूत के ऊपर दिखाया गया प्रतीक बनाएं। जादू करने और भूत को हराने के लिए आकृति का सटीक मिलान करें। प्रत्येक स्तर में सभी भूतों को साफ़ करें!',
  },
  'google-cat-game': {
    title: 'Google Cat Wizard Game',
    description: 'The beloved Magic Cat Academy game starring Momo the cat wizard — swipe and draw spell symbols to defend your school from hordes of invading ghosts! Match the shapes shown above each ghost accurately and quickly to cast the right spell and banish them.\n\nAlso known as the "Google Halloween Cat Game," this is one of the most searched-for Google games year after year. Momo the cat has become an unofficial Google mascot for Halloween, starring in three sequel games. The original 2016 version remains a fan favourite thanks to its charming animation, accessible gameplay, and the pure joy of drawing magic spells.',
    controls: 'अपने माउस या उंगली का उपयोग करके प्रत्येक भूत के ऊपर दिखाया गया प्रतीक बनाएं। जादू करने और भूत को हराने के लिए आकृति का सटीक मिलान करें। प्रत्येक स्तर में सभी भूतों को साफ़ करें!',
  },
  'doodle-clara-rockmore': {
    title: 'Clara Rockmore Theremin Doodle',
    description: 'Play a virtual theremin honouring Clara Rockmore, considered the greatest theremin virtuoso of all time. Move your mouse up and down to control pitch and left and right to adjust volume, recreating the eerie, wavering tones of this unique electronic instrument.\n\nReleased on 9 March 2016 for what would have been Clara Rockmore\'s 105th birthday, this Doodle features a beautifully animated lesson mode that teaches you to play actual melodies. The theremin, invented in 1920, is the only musical instrument played without physical contact — performers wave their hands near two antennas to control pitch and volume.',
    controls: 'पिच बदलने के लिए अपने माउस को ऊपर और नीचे घुमाएँ। वॉल्यूम नियंत्रित करने के लिए बाएँ और दाएँ जाएँ। ऑन-स्क्रीन संगीत के साथ बजाने का प्रयास करें या अपनी स्वयं की धुनें बनाएं।',
  },
  'doodle-scoville': {
    title: 'Scoville Doodle',
    description: 'Test your tolerance for heat in this spicy Doodle celebrating Wilbur Scoville and his famous pepper heat scale! Scoop ice cream and fling it at increasingly fiery peppers that march toward you. Each level features hotter peppers, from mild jalapeños to scorching Carolina Reapers.\n\nCreated for the 151st birthday of Wilbur Scoville on 22 January 2016, this action-packed Doodle teaches players about the Scoville scale while they play. Scoville developed his organoleptic test in 1912 to measure the pungency of chilli peppers, and his scale is still used today — ranging from 0 (bell pepper) to over 2 million (Carolina Reaper).',
    controls: 'हमलावर मिर्च पर आइसक्रीम स्कूप फेंकने के लिए क्लिक करें। आपके पहुँचने से पहले प्रत्येक मिर्च पर प्रहार करने का समय निर्धारित करें। गर्मी के सभी स्तरों से बचे रहें!',
  },
  'doodle-valentines-day': {
    title: 'Valentine\'s Day 2017 — Pangolin Love',
    description: 'Help a lovestruck pangolin serenade its sweetheart by crafting delicious chocolate treats in this Valentine\'s Day puzzle game. Mix ingredients according to recipes, shape the chocolates, and serve them to win the pangolin\'s heart across multiple sweet levels.\n\nThis 2017 Valentine\'s Day Doodle featured the endangered pangolin to raise awareness about the world\'s most trafficked mammal. The four-level chocolate-making adventure charmed players with its adorable animation style while highlighting a serious conservation message — all eight pangolin species are threatened with extinction due to illegal poaching.',
    controls: 'चॉकलेट मिलाने के लिए सामग्री को क्लिक करें और खींचें। व्यंजनों का पालन करें और सही व्यंजन तैयार करें। प्रगति के लिए पेंगोलिन के प्रेमी को इन्हें परोसें!',
  },
  'pangolin-love': {
    title: 'Pangolin Love Doodle',
    description: 'A charming Valentine\'s adventure where you craft chocolates to help a shy pangolin express its love. Follow recipes to mix, mould, and decorate sweet treats, then deliver them to your pangolin\'s sweetheart across four progressively challenging levels.\n\nAlso known as the Valentine\'s Day 2017 Doodle, this game raised global awareness about pangolins — the world\'s most trafficked animal. The loveable character design made pangolins go viral, with conservation organisations reporting significant increases in donations and awareness following the Doodle\'s release.',
    controls: 'चॉकलेट मिलाने के लिए सामग्री को क्लिक करें और खींचें। व्यंजनों का पालन करें और सही व्यंजन तैयार करें। प्रगति के लिए पेंगोलिन के प्रेमी को इन्हें परोसें!',
  },
  'doodle-cricket-game': {
    title: 'Cricket Doodle Game',
    description: 'Play a delightful game of cricket with an adorable cast of snails and crickets (the insects!) in this Google Doodle celebrating the ICC Champions Trophy. Click or tap to swing the bat at the right moment and smash the ball to score as many runs as possible.\n\nReleased during the 2017 ICC Champions Trophy tournament, this Doodle brought the joy of cricket to millions who might never have played before. The charming insect characters — a snail bowler and cricket batsmen — made the sport accessible and fun, while the simple one-tap mechanic perfectly captured the timing-based thrill of batting.',
    controls: 'गेंद फेंके जाने पर बल्ला घुमाने के लिए क्लिक करें या टैप करें। गेंद को हिट करने और रन बनाने के लिए अपने क्लिक का समय निर्धारित करें। चूकें नहीं या आप बाहर हो जायेंगे!',
  },
  'doodle-kids-coding': {
    title: 'Coding for Carrots (Kids Coding Doodle)',
    description: 'Help a cute bunny collect all the carrots by snapping directional coding blocks together to create a program that guides its path. Drag and drop arrow blocks, loop blocks, and action blocks to build a sequence, then press play to watch the bunny follow your instructions.\n\nCreated for the 50th anniversary of kids\' coding languages, this Doodle introduces fundamental programming concepts in the most approachable way imaginable. Inspired by the Logo programming language created in 1967, the six increasingly complex levels teach sequencing, loops, and conditionals — the building blocks of computer science — all through the adorable goal of helping a bunny eat carrots.',
    controls: 'दिशात्मक कोड ब्लॉक को अनुक्रम क्षेत्र में खींचें और छोड़ें। अपना प्रोग्राम चलाने के लिए प्ले बटन दबाएँ और बन्नी को आपके निर्देशों का पालन करते हुए देखें।',
  },
  'birth-of-hip-hop': {
    title: 'Birth of Hip Hop Doodle',
    description: 'Spin records on dual turntables and scratch your way through hip hop history in this groundbreaking interactive Doodle. Mix beats, crossfade between tracks, and unlock legendary samples as you learn about the origins and evolution of hip hop culture.\n\nReleased on 11 August 2017 to celebrate the 44th anniversary of hip hop\'s birth at a back-to-school party in the Bronx, this Doodle is a love letter to DJ culture. It features a fully functional turntable interface with real scratch mechanics, and its guided historical narrative takes players from DJ Kool Herc\'s first breakbeat to the global cultural movement hip hop became.',
    controls: 'टर्नटेबल्स के बीच मिश्रण करने के लिए क्रॉसफ़ेडर को क्लिक करें और खींचें। विनाइल पर क्लिक करके और खींचकर रिकॉर्ड स्क्रैच करें। जैसे-जैसे आप आगे बढ़ेंगे, नए ट्रैक और बीट्स अनलॉक करें।',
  },
  'oskar-fischinger': {
    title: 'Oskar Fischinger Music Doodle',
    description: 'Create mesmerising visual music compositions in this interactive Doodle honouring abstract animator Oskar Fischinger. Place geometric shapes on a musical grid, adjust tempo and instruments, and watch as your visual creation generates a unique, beautiful melody.\n\nOskar Fischinger was a pioneering German-American animator who created abstract films synchronised to music in the 1920s–1960s. His work directly inspired the "Toccata and Fugue" sequence in Disney\'s Fantasia. This Doodle captures his artistic philosophy that visual art and music are inseparable, letting anyone experience the joy of creating synchronised audio-visual art.',
    controls: 'आकृतियों को रखने और हटाने के लिए ग्रिड पर क्लिक करें। प्रत्येक आकृति एक अलग ध्वनि उत्पन्न करती है। अपना दृश्य संगीत टुकड़ा बनाने के लिए गति, वाद्ययंत्र और प्रभाव को समायोजित करें।',
  },
  'komodo-national-park': {
    title: 'Komodo National Park Quiz Doodle',
    description: 'Take a fascinating trivia quiz about the Komodo dragon and its national park habitat in Indonesia. Answer questions about the world\'s largest living lizard, its island home, and the unique ecosystem of Komodo National Park.\n\nThis educational Doodle celebrated the 37th anniversary of Komodo National Park\'s founding and its status as a UNESCO World Heritage Site. Komodo dragons can grow over 3 metres long and weigh up to 70 kilograms, making them the largest lizards on Earth. The park spans several volcanic islands and protects some of the most biodiverse marine environments in the world.',
    controls: 'प्रत्येक प्रश्नोत्तरी प्रश्न के लिए अपने उत्तर पर क्लिक करें। कोमोडो ड्रेगन और उनके आवास के बारे में तथ्य जानें। जितना हो सके उतने सही उत्तर प्राप्त करें!',
  },
  'garden-gnomes': {
    title: 'Garden Gnomes Doodle',
    description: 'Fling garden gnomes from a trebuchet as far as possible across beautiful garden landscapes! Click and hold to set your launch angle, then release to send the gnome soaring through flowerbeds, over hedgerows, and across ponds in pursuit of maximum distance.\n\nThis 2018 Doodle celebrated the history of garden gnomes, which originated in 19th-century Germany as "Gartenzwerge" (garden dwarfs). The satisfying physics-based gameplay and charming pastoral scenery made it a viral hit, with players competing to achieve the longest throws. The different garden terrains and bonus bounce mechanics add surprising depth to this simple but addictive launcher.',
    controls: 'लॉन्च कोण सेट करने के लिए क्लिक करें और दबाए रखें, फिर सूक्ति को फ़्लिंग करने के लिए छोड़ें। आप जितनी अधिक देर तक पकड़ में रखेंगे, उतनी अधिक शक्ति होगी। अधिकतम दूरी तक पहुँचने का प्रयास करें!',
  },
  'halloween': {
    title: 'The Great Ghoul Duel (Halloween 2018)',
    description: 'Compete in the Great Ghoul Duel, a spooky multiplayer Doodle where two ghost teams race to collect the most wandering spirit flames! Navigate haunted halls, scoop up glowing flames, and rush them back to your team\'s base — but watch out, because opponents can steal flames trailing behind you.\n\nThe 2018 Halloween Doodle was Google\'s first-ever multiplayer game, connecting players worldwide in real-time team-based matches. The adorable ghost character designs, strategic flame-stealing mechanic, and competitive leaderboards made it an instant classic. Players could customise their ghost\'s appearance and develop strategies for efficient flame collection.',
    controls: 'अपने भूत को मानचित्र के चारों ओर ले जाने के लिए तीर कुंजियों का उपयोग करें या स्वाइप करें। भटकती आत्मा की लपटों को इकट्ठा करें और स्कोर करने के लिए उन्हें अपने बेस पर वापस लाएँ। विरोधियों के पीछे पीछे आग की लपटें चुराएं!',
  },
  'baseball': {
    title: 'Baseball Doodle (4th of July)',
    description: 'Step up to the plate and hit home runs in this Fourth of July baseball Doodle! Play as classic American food characters — hot dogs, popcorn, ketchup bottles, and more — and time your click or tap to swing the bat and smash the ball past the food-themed fielders.\n\nReleased for Independence Day 2019, this Doodle perfectly captures the spirit of America\'s pastime with a playful twist. The charming food character designs, satisfying crack of the bat, and progressively faster pitches make each at-bat exciting. The game tracks your home run distance and total runs, encouraging players to perfect their timing for the ultimate slugfest.',
    controls: 'गेंद पिच होने पर बल्ला घुमाने के लिए क्लिक करें या टैप करें। संपर्क बनाने और जहां तक ​​संभव हो गेंद को हिट करने के लिए अपनी स्विंग का समय निर्धारित करें। अपनी टीम के लिए रन बनाएं!',
  },
  'doodle-loteria': {
    title: 'Celebrating Lotería Doodle',
    description: 'Play the beloved Mexican card game of Lotería in this colourful multiplayer Doodle. Listen for the caller to announce each card with a traditional riddle, then click the matching image on your board to mark it. Complete a pattern to shout "¡Lotería!" and win the round.\n\nOften called "Mexican bingo," Lotería has been a cherished family tradition in Mexico since the 18th century, originating from an Italian card game brought by Spanish colonists. This 2019 Doodle celebrates the game\'s cultural significance with beautifully illustrated cards featuring both traditional and modern imagery. Players compete online against others worldwide in this faithful digital adaptation.',
    controls: 'जैसे ही उन्हें बुलाया जाता है, अपने बोर्ड पर मिलान कार्डों पर क्लिक करें। "¡लोटेरिया!" को कॉल करने के लिए एक पंक्ति, स्तंभ या पैटर्न पूरा करें। और राउंड जीतो.',
  },
  'celebrating-bach': {
    title: 'Celebrating Johann Sebastian Bach',
    description: 'Compose your own harmonies in the style of Johann Sebastian Bach using artificial intelligence! Write a simple melody by clicking notes on the musical staff, then press the "Harmonise" button to let a machine learning model add Bach-style counterpoint and accompaniment.\n\nThis groundbreaking 2019 Doodle was the first to use AI and machine learning as its core mechanic. Google trained a model called Coconet on 306 of Bach\'s chorale compositions, enabling it to harmonise any melody in Bach\'s distinctive Baroque style. The result is a magical creative tool that makes the genius of the 18th century\'s greatest composer accessible to anyone.',
    controls: 'नोट्स रखने और अपनी धुन बनाने के लिए स्टाफ़ पर क्लिक करें। एआई को बाख-शैली की संगत जोड़ने देने के लिए "हार्मोनाइज" बटन दबाएं। अपनी रचना सुनें!',
  },
  'doodle-earth-day': {
    title: 'Earth Day 2020 — Bee Doodle',
    description: 'Help a bee pollinate flowers across a beautiful garden in this charming Earth Day Doodle. Fly from flower to flower, collecting pollen on your fuzzy body and spreading it to help the entire garden bloom with vibrant colours and life.\n\nCreated for Earth Day 2020 as part of Google\'s "Stay and Play at Home" series during the pandemic, this Doodle highlights the critical role bees play in our ecosystem. Bees pollinate approximately 75% of all flowering plants and about 35% of food crops worldwide. The gentle, educational gameplay reminds us how connected all living things are.',
    controls: 'मधुमक्खी को फूलों के बीच मार्गदर्शन करने के लिए तीर कुंजियों का उपयोग करें या क्लिक करें। पराग इकट्ठा करने के लिए फूलों पर उतरें, फिर उन्हें परागित करने के लिए अन्य फूलों पर जाएँ। पूरे बगीचे को खिलने में मदद करें!',
  },
  'magic-cat-academy-2': {
    title: 'Magic Cat Academy 2 (Halloween 2020)',
    description: 'Momo the cat wizard returns for an underwater adventure, diving beneath the waves to battle ghostly sea spirits! Draw symbols to cast spells against new oceanic enemies including phantom jellyfish, spectral anglerfish, and ghostly octopi, each requiring different spell patterns to defeat.\n\nThe 2020 Halloween sequel took Momo from the schoolhouse to the ocean depths, introducing aquatic environments and marine-themed ghost enemies. Released during the Stay and Play at Home series, it brought joy to millions during a challenging year. The expanded spell vocabulary and boss battles made it a more ambitious experience than the beloved original.',
    controls: 'अपने माउस या उंगली का उपयोग करके प्रत्येक भूत के ऊपर दिखाया गया प्रतीक बनाएं। नए पानी के नीचे के दुश्मनों को अलग-अलग मंत्र पैटर्न की आवश्यकता होती है। प्रत्येक स्तर को पार करने के लिए सभी भूतों को परास्त करें!',
  },
  'doodle-mbira': {
    title: 'Celebrating Mbira Doodle',
    description: 'Play a virtual mbira — a traditional African thumb piano — in this musical Doodle celebrating one of Zimbabwe\'s most treasured instruments. Click the metal tines to create beautiful, resonant melodies, following a guided lesson or improvising your own compositions.\n\nThe mbira dzavadzimu has been central to Shona culture for over a thousand years, used in ceremonies, storytelling, and spiritual communication. This Doodle honours its rich heritage with an authentic-sounding digital recreation that teaches players basic patterns and scales. The instrument\'s mesmerising, bell-like tones have influenced musicians worldwide, from Paul Simon to Björk.',
    controls: 'नोट्स चलाने के लिए mbira टाइन्स पर क्लिक करें। निर्देशित राग का अनुसरण करें या अपनी स्वयं की रचना बनाएँ। विभिन्न लय और पैटर्न के साथ प्रयोग करें।',
  },
  'doodle-history-of-pizza': {
    title: 'History of Pizza Doodle',
    description: 'Slice and serve pizzas in this interactive Doodle celebrating the delicious history of pizza! Draw lines with your mouse to cut each pizza into the exact number of equal slices the customer orders, earning points for precision and speed.\n\nThis 2021 Doodle took players on a culinary journey through pizza\'s 10,000-year history, from ancient flatbreads in Sardinia to the modern Margherita. Each level features a different historical pizza style, teaching players about the dish\'s evolution while challenging their cutting accuracy. The satisfying slicing mechanic and mouth-watering pixel art made this one of the most replayed Doodles ever.',
    controls: 'पिज़्ज़ा को सही संख्या में बराबर टुकड़ों में काटने के लिए अपने माउस से रेखाएँ खींचें। शीर्ष पर दिखाए गए क्रम का मिलान करें. सर्वोत्तम स्कोर के लिए सटीक रहें!',
  },
  'wewa-weaving': {
    title: 'We:wa Weaving Doodle',
    description: 'Weave colourful patterns on a virtual loom in this Doodle honouring the traditional indigenous art of We:wa weaving from the Pueblo peoples. Select different yarn colours, choose traditional patterns, and shuttle the threads through the warp to create beautiful handwoven textiles.\n\nThis 2021 Doodle celebrates the centuries-old weaving traditions of the Pueblo peoples of the American Southwest. Weaving is a sacred art form that has been passed down through generations, with each pattern carrying cultural meaning and storytelling significance. The relaxing, meditative gameplay invites players to appreciate the skill and artistry that goes into every handwoven piece.',
    controls: 'ताने-बाने में धागे बुनने के लिए करघे पर क्लिक करें। अलग-अलग रंग और पैटर्न चुनें. एक सुंदर पारंपरिक कपड़ा डिज़ाइन प्रकट करने के लिए बुनाई पूरी करें।',
  },
  'champion-island-games': {
    title: 'Doodle Champion Island Games',
    description: 'Embark on an epic RPG adventure across Champion Island, competing in seven sport mini-games, exploring a vibrant open world inspired by Japanese folklore, and completing side quests for colourful characters. Play as Lucky the calico cat and challenge legendary champions in table tennis, skateboarding, archery, swimming, climbing, rugby, and marathon running.\n\nCreated for the Tokyo 2020 Olympics (held in 2021), this is the largest and most ambitious Google Doodle ever made. Developed over three years with STUDIO 4°C, the award-winning Japanese animation studio, it features a full narrative, 24 side quests, and seven complete sport games — all rendered in stunning hand-drawn animation inspired by classic Japanese art styles.',
    controls: 'अपने पात्र को स्थानांतरित करने के लिए तीर कुंजियों का उपयोग करें। स्पेसबार दबाकर एनपीसी के साथ इंटरैक्ट करें। प्रत्येक खेल में अद्वितीय नियंत्रण होते हैं - प्रत्येक घटना के लिए इन-गेम ट्यूटोरियल का पालन करें।',
  },
  'doodle-valentines-day-2022': {
    title: 'Valentine\'s Day 2022 — Hamster Doodle',
    description: 'Guide adorable hamsters through a maze of puzzles and obstacles to reunite them with their sweetheart in this Valentine\'s Day Doodle. Click or tap to interact with puzzle elements, move platforms, and clear paths so the hamster couple can be together again.\n\nThis 2022 Valentine\'s Day Doodle charmed players with its tiny protagonist and clever puzzle mechanics. Each level introduces new obstacles and mechanics that require creative thinking to solve. The heartwarming premise of reuniting two hamsters in love, combined with the cute character animations, made it a perfect Valentine\'s Day activity.',
    controls: 'पहेली तत्वों के साथ बातचीत करने के लिए क्लिक करें या टैप करें। बाधाओं को हल करके प्रत्येक स्तर के माध्यम से हैम्स्टर का मार्गदर्शन करें। हम्सटर जोड़े को फिर से मिलाएँ!',
  },
  'celebrating-petanque': {
    title: 'Celebrating Pétanque Doodle',
    description: 'Toss boules and aim for the cochonnet (target ball) in this Doodle celebrating the classic French lawn game of pétanque. Click and drag to set your throw angle and power, then release to send your boule rolling across the terrain, trying to land as close to the target as possible.\n\nPétanque originated in the south of France in 1907 and has since become one of the country\'s most popular recreational activities. This Doodle captures the relaxed, social spirit of the game with sun-drenched Provençal landscapes and authentic physics. The game is played in over 80 countries worldwide, with annual world championships drawing competitors from across the globe.',
    controls: 'अपने थ्रो का कोण और शक्ति सेट करने के लिए क्लिक करें और खींचें। बाउल को उछालने के लिए रिलीज़ करें। यथासंभव कोचोननेट (लक्ष्य गेंद) के करीब उतरने का लक्ष्य रखें!',
  },
  'boba-bubble-tea': {
    title: 'Celebrating Bubble Tea Doodle',
    description: 'Mix and match flavours to create the perfect bubble tea in this interactive Doodle celebrating the beloved Taiwanese drink! Choose your tea base, add flavourings, select toppings, and pick your favourite boba type to craft a delicious custom drink.\n\nBubble tea was invented in Taiwan in the 1980s and has since become a global phenomenon enjoyed in over 30 countries. This 2023 Doodle explores the drink\'s rich history and incredible variety, from classic milk tea with tapioca pearls to modern fruit tea with popping boba. The colourful, playful interface lets you experiment with thousands of flavour combinations.',
    controls: 'सामग्री को अपने पेय में शामिल करने के लिए उन पर क्लिक करें। अपना चाय बेस, स्वाद, टॉपिंग और बोबा प्रकार चुनें। अपनी उत्तम बबल टी बनाने के लिए सभी चीजों को एक साथ मिलाएं!',
  },
  'celebrating-pani-puri': {
    title: 'Celebrating Pani Puri Doodle',
    description: 'Serve delicious pani puri to a queue of hungry customers in this fast-paced Doodle celebrating India\'s most beloved street food! Fill crispy puris with the right combination of spiced water, chutneys, and fillings, serving each customer before they get impatient and leave.\n\nPani puri is one of India\'s most iconic street foods, known by different names across the subcontinent — gol gappa in North India, puchka in Bengal, and pani puri in Maharashtra. This 2023 Doodle captures the excitement and speed of a real pani puri stall, where vendors assemble each bite-sized explosion of flavour in seconds. The game became especially popular in South Asia, where millions recognised their favourite snack.',
    controls: 'प्रत्येक पूरी को पानी और चटनी के सही संयोजन से भरने और भरने के लिए क्लिक करें। तैयार पानी पूरी ग्राहकों को उनके जाने से पहले परोसें। उन्हें इंतज़ार न करने दें!',
  },
  'celebrating-lake-xochimilco': {
    title: 'Celebrating Lake Xochimilco Doodle',
    description: 'Explore the floating gardens of Lake Xochimilco and guide an adorable axolotl through its waterway habitat in this beautiful interactive Doodle. Navigate the canals, interact with the environment, and learn about this unique UNESCO World Heritage Site in Mexico City.\n\nLake Xochimilco\'s chinampas (floating gardens) are a remnant of pre-Hispanic agriculture dating back to the Aztec empire. This 2023 Doodle raises awareness about the critically endangered axolotl, a remarkable salamander that can regenerate lost limbs and exists in the wild only in Xochimilco\'s canals. The stunning artwork and educational content highlight the urgent need to protect this unique ecosystem.',
    controls: 'नहरों के माध्यम से एक्सोलोटल का मार्गदर्शन करने के लिए क्लिक करें या टैप करें। पर्यावरण के साथ बातचीत करें और ज़ोचिमिल्को झील के अद्वितीय तैरते उद्यान पारिस्थितिकी तंत्र के बारे में जानें।',
  },
  'celebrating-popcorn': {
    title: 'Celebrating Popcorn Doodle',
    description: 'Pop, catch, and serve delicious popcorn in this multiplayer celebration Doodle game! Time your clicks to pop kernels at the perfect moment, catch the flying popcorn in your bucket, and score bonus points for specially seasoned pieces.\n\nThis 2024 Doodle celebrates the history of popcorn, which has been enjoyed for thousands of years — archaeological evidence shows that people in Peru were eating popcorn as early as 4700 BCE. The cheerful multiplayer gameplay lets you cooperate or compete with friends, and the various seasoning flavours from around the world showcase popcorn\'s global popularity.',
    controls: 'सही समय पर गुठली पॉप करने के लिए क्लिक करें या टैप करें। बाएँ और दाएँ घुमाकर पॉपकॉर्न को अपनी बाल्टी में पकड़ें। अनुभवी टुकड़ों को पकड़ने के लिए बोनस अंक अर्जित करें!',
  },
  'magic-cat-academy-3': {
    title: 'Magic Cat Academy 3 (Halloween 2024)',
    description: 'Momo the cat wizard returns for a third spooky adventure in the Magic Cat Academy! Cast spells by drawing symbols to battle new ghost types in enchanted locations, with fresh enemies, challenging boss fights, and powerful new spell combinations to discover.\n\nThe 2024 Halloween Doodle continues the beloved Magic Cat Academy series, which has become Google\'s most popular recurring game franchise. Each instalment has expanded the gameplay with new environments, enemies, and spell mechanics while maintaining the charming art style and intuitive draw-to-cast system that made the original a classic.',
    controls: 'अपने माउस या उंगली का उपयोग करके प्रत्येक भूत के ऊपर दिखाया गया प्रतीक बनाएं। नए भूत प्रकारों के लिए नए मंत्र पैटर्न की आवश्यकता होती है। प्रत्येक स्तर को पार करने के लिए सभी भूतों को परास्त करें!',
  },
  'rise-of-the-half-moon': {
    title: 'Rise of the Half Moon Doodle',
    description: 'Play a strategic card game where you balance day and night cards to build powerful combos and outscore your opponent. Select cards from your hand carefully, considering how sun and moon cards interact to create chain reactions and bonus points.\n\nThis recurring Google Doodle features deep tactical gameplay wrapped in beautiful celestial artwork. The game\'s elegant rule set — balancing light and dark, building card synergies, and timing your strongest plays — offers surprising strategic depth. Multiple chapters were released throughout 2024-2025, creating an ongoing saga that kept players coming back for new challenges.',
    controls: 'अपने हाथ से कार्ड चुनने और खेलने के लिए क्लिक करें। शक्तिशाली संयोजन बनाने के लिए सूर्य और चंद्रमा कार्डों को संतुलित करें। प्रत्येक राउंड जीतने के लिए अपने प्रतिद्वंद्वी को परास्त करें!',
  },
  'chinese-new-year-snake': {
    title: 'Chinese New Year Snake Game',
    description: 'Celebrate the Year of the Snake with this festive twist on the classic Snake game! Slither around the board collecting lucky red envelopes, lanterns, and traditional Chinese New Year symbols while your serpentine body grows longer with each item collected.\n\nThis special edition Snake game honours the Chinese zodiac and the traditions of Lunar New Year, one of the most important celebrations in Chinese culture. The Year of the Snake comes around every 12 years, and in Chinese astrology, the snake symbolises wisdom, elegance, and charm. The festive visual design and lucky item collection add a cultural twist to the timeless gameplay.',
    controls: 'साँप की दिशा बदलने के लिए तीर कुंजियों का उपयोग करें या स्वाइप करें। दीवारों और अपनी पूंछ से बचते हुए लंबे समय तक बढ़ने के लिए वस्तुओं को इकट्ठा करें।',
  },
  'doctor-who': {
    title: 'Doctor Who 50th Anniversary Doodle',
    description: 'Play as all the Doctors through a point-and-click adventure celebrating Doctor Who\'s 50th anniversary! Navigate through levels inspired by classic episodes, pick up items, solve puzzles, and avoid iconic enemies like the Daleks, Cybermen, and Weeping Angels.\n\nCreated in November 2013 for the 50th anniversary of the BBC\'s legendary science fiction series, this Doodle lets fans play through six levels, each featuring a different Doctor and their era\'s signature villains. Doctor Who first aired on 23 November 1963 and has become the longest-running science fiction television series in history, with millions of devoted fans worldwide.',
    controls: 'डॉक्टर को प्रत्येक स्तर पर ले जाने के लिए क्लिक करें। आइटम उठाएँ और पहेलियाँ सुलझाने के लिए उनका उपयोग करें। डेल्क्स और अन्य शत्रुओं से बचें!',
  },
  't-rex-run-3d': {
    title: 'T-Rex Run 3D',
    description: 'Experience the classic Chrome dinosaur game reimagined in stunning full 3D! Run through an expansive desert landscape with depth and perspective, dodge obstacles coming from all directions, and collect power-ups and coins for bonus points in this immersive endless runner.\n\nThis fan-made 3D version transforms the beloved flat side-scroller into a fully three-dimensional experience with textured environments, dynamic lighting, and multiple camera angles. The added dimension creates new gameplay possibilities, including lateral dodging and environmental exploration, while preserving the simple one-button jump mechanic that made the original so addictive.',
    controls: 'कूदने के लिए स्पेसबार दबाएँ और झुकने के लिए नीचे तीर दबाएँ। 3डी में चकमा देने के लिए बाएँ और दाएँ तीरों का उपयोग करें। बोनस अंक के लिए सिक्के और पावर-अप एकत्र करें!',
  },
  'dino-swords': {
    title: 'Dino Swords',
    description: 'The Chrome dinosaur game with an arsenal of weapons! As you run through the desert, pick up swords, guns, hammers, and gadgets that automatically destroy cacti and pterodactyls in your path. Each weapon has limited uses, so choose wisely.\n\nCreated by MSCHF, the viral internet art collective, Dino Swords adds 26 different weapons to the familiar Chrome dino formula. From a classic katana to a gravity gun to a literal nuke, each weapon completely changes how you play. The absurd humour and creative weapon designs turned this parody into a beloved game in its own right.',
    controls: 'कूदने और हथियार इकट्ठा करने के लिए स्पेसबार दबाएँ। बाधाओं को नष्ट करने के लिए स्वचालित रूप से उनका उपयोग करें। प्रत्येक हथियार के उपयोग की संख्या सीमित होती है!',
  },
  'blob-opera': {
    title: 'Blob Opera',
    description: 'Create beautiful opera music by dragging four colourful blob characters up and down to change their pitch, and left and right to shape vowel sounds. Each blob sings a different vocal part — bass, tenor, mezzo-soprano, and soprano — and a machine learning model harmonises them in real time.\n\nDeveloped by David Li in collaboration with Google Arts & Culture, Blob Opera uses AI trained on the voices of four real professional opera singers. The model learned to generate realistic operatic harmonies, making it possible for anyone to create surprisingly beautiful four-part vocal arrangements with no musical knowledge required. The irresistible blob characters and instant musical gratification made this a viral sensation.',
    controls: 'पिच बदलने के लिए बूँदों को क्लिक करें और ऊपर-नीचे खींचें, स्वर ध्वनियाँ बदलने के लिए बाएँ और दाएँ। सामंजस्यपूर्ण ओपेरा व्यवस्था बनाने के लिए सभी चार बूँदों को हटाएँ!',
  },
  'google-feud': {
    title: 'Google Feud',
    description: 'Guess Google\'s most popular autocomplete suggestions in this addictive Family Feud-style game! Read the beginning of a real Google search query, type your guess for how it ends, and score points for matching the most popular completions. Play through rounds of culture, people, names, and questions.\n\nInspired by the classic TV game show Family Feud, Google Feud reveals the surprisingly funny, bizarre, and thought-provoking things that millions of people search for every day. The game offers a fascinating window into collective human curiosity and has become a popular party game, sparking conversations and laughter about the unexpected things we all wonder about.',
    controls: 'आंशिक Google खोज क्वेरी पढ़ें और अपना अनुमान लिखें कि यह स्वतः पूर्ण कैसे होती है। लोकप्रिय खोज सुझावों के मिलान के लिए अंक अर्जित करें। कई राउंड खेलें!',
  },
  'quick-draw': {
    title: 'Quick, Draw!',
    description: 'Can a neural network guess what you\'re drawing? Sketch the prompted object within 20 seconds using your mouse or finger, and watch in amazement as Google\'s AI tries to recognise your doodle in real time, calling out guesses as you draw.\n\nQuick, Draw! is one of Google\'s most popular AI experiments, powered by a neural network trained on millions of drawings from players around the world. Every sketch you make helps improve the AI\'s ability to recognise hand-drawn objects. The dataset of over 50 million drawings has been open-sourced, enabling researchers and artists worldwide to explore how humans communicate through simple sketches.',
    controls: '20 सेकंड के भीतर अपने माउस या उंगली का उपयोग करके कैनवास पर संकेतित ऑब्जेक्ट बनाएं। एआई यह अनुमान लगाने की कोशिश करेगा कि आप वास्तविक समय में क्या बना रहे हैं!',
  },
  'chrome-music-lab': {
    title: 'Chrome Music Lab',
    description: 'Explore music through hands-on interactive experiments in this collection of creative tools by Google. Create songs with Song Maker, explore rhythms with Rhythm, visualise sound waves, learn about chords, and discover how music works through playful experimentation.\n\nChrome Music Lab was created to make learning music accessible to everyone through technology. Each experiment focuses on a different musical concept — from melody and harmony to oscillators and spectrograms — presented through colourful, intuitive interfaces that require no musical training. It\'s widely used in classrooms around the world as an educational tool for teaching music fundamentals.',
    controls: 'जानने के लिए किसी भी संगीत प्रयोग पर क्लिक करें। प्रत्येक टूल में अलग-अलग इंटरैक्शन होते हैं - संगीत बनाने और ध्वनि कैसे काम करती है यह जानने के लिए क्लिक करें, खींचें और चलाएं।',
  },
  'google-maps-snake': {
    title: 'Google Maps Snake',
    description: 'Play the classic Snake game on real city streets using Google Maps as the game board! Navigate a bus, train, or other vehicle through cities like Cairo, São Paulo, London, Sydney, San Francisco, and Tokyo, picking up passengers and landmarks to grow longer.\n\nReleased as a Google Maps April Fools\' Day feature in 2019, this creative mashup combines the nostalgia of Snake with real-world geography. Playing on actual street layouts creates unique challenges in each city, as some have wide boulevards perfect for manoeuvring while others have narrow, winding streets that make the game fiendishly difficult.',
    controls: 'शहर की सड़कों पर अपने वाहन को चलाने के लिए तीर कुंजियों का उपयोग करें। लंबे समय तक बढ़ने के लिए यात्रियों को उठाएं। अपने आप को मारने या मानचित्र से दूर गाड़ी चलाने से बचें!',
  },
  'google-earth': {
    title: 'Google Earth',
    description: 'Explore the entire planet in 3D with Google Earth, flying from the peaks of the Himalayas to the depths of ocean trenches. Navigate satellite imagery, dive into street-level views, discover curated guided tours, and explore locations from ancient ruins to modern cities.\n\nGoogle Earth has been revolutionising how we see our planet since its launch in 2005. Built from petabytes of satellite imagery, aerial photography, and 3D terrain data, it lets anyone become a virtual explorer. Features like Voyager offer curated tours of natural wonders, cultural sites, and even other planets, making it both an educational powerhouse and a source of endless wonder.',
    controls: 'ग्लोब को घुमाने के लिए क्लिक करें और खींचें। ज़ूम इन और ज़ूम आउट करने के लिए स्क्रॉल करें। किसी भी स्थान पर उड़ान भरने के लिए उस पर डबल-क्लिक करें। विशिष्ट स्थानों को खोजने के लिए खोज बार का उपयोग करें।',
  },
  'santa-tracker': {
    title: 'Google Santa Tracker',
    description: 'Track Santa\'s magical journey around the world on Christmas Eve and play dozens of holiday mini-games throughout December! Build toys in the workshop, code with elves, learn holiday traditions from around the world, and explore Santa\'s Village in this festive annual experience.\n\nGoogle Santa Tracker has been a beloved holiday tradition since 2004, entertaining millions of families every December. The village fills with new games and activities each day of the Advent calendar, and on Christmas Eve, a real-time tracker follows Santa\'s sleigh as he delivers presents across every time zone. It\'s become one of the most-visited holiday websites in the world.',
    controls: 'सांता के गांव में विभिन्न खेलों और गतिविधियों पर क्लिक करें। प्रत्येक मिनी-गेम का अपना नियंत्रण होता है - ऑन-स्क्रीन निर्देशों का पालन करें!',
  },
  'space-invaders': {
    title: 'Space Invaders',
    description: 'Defend Earth from waves of descending alien invaders in this faithful recreation of the legendary 1978 arcade classic! Move your laser cannon left and right, fire upwards at the alien formations, and destroy every invader before they reach the bottom of the screen.\n\nSpace Invaders, created by Tomohiro Nishikado, was one of the first major arcade hits and helped launch the golden age of video games. It was so popular in Japan that it caused a temporary shortage of 100-yen coins. This web version preserves the original\'s iconic pixel art, distinctive alien march sound that speeds up as fewer invaders remain, and the intense pressure of watching enemies creep ever closer.',
    controls: 'अपनी तोप को हिलाने के लिए बाएँ और दाएँ तीर कुंजियों का उपयोग करें। फायर करने के लिए स्पेसबार दबाएँ। स्क्रीन के निचले भाग तक पहुँचने से पहले सभी आक्रमणकारियों को नष्ट कर दें!',
  },
  'doodle-jump-2': {
    title: 'Doodle Jump 2',
    description: 'Bounce your way to the top in this sequel to the legendary vertical platformer! Jump from platform to platform, avoid enemies and obstacles, grab power-ups like jetpacks and trampolines, and reach for the highest score as the challenge intensifies the higher you go.\n\nThe original Doodle Jump was released in 2009 and became one of the most downloaded mobile games of all time, with over 15 million sales. Its simple tilt-to-move mechanic and endlessly generated platforms created a perfect pick-up-and-play experience. This sequel builds on that addictive formula with new worlds, enemies, and power-ups while keeping the accessible gameplay that made the original a cultural touchstone.',
    controls: 'स्थानांतरित करने के लिए बाएँ और दाएँ तीर कुंजियों का उपयोग करें या झुकाएँ। डूडलर स्वचालित रूप से कूदता है - इसे प्लेटफ़ॉर्म पर निर्देशित करें। दुश्मनों से बचें और पावर-अप हासिल करें!',
  },
  'google-solitaire': {
    title: 'Google Solitaire',
    description: 'Play the classic Klondike Solitaire card game right in your browser, no download required. Stack cards in descending order by alternating colours in the tableau, and build four foundation piles from Ace to King by suit to win the game.\n\nKlondike Solitaire is the most widely played card game in the world, included with every version of Windows since 1990. Microsoft\'s Solitaire was originally designed by intern Wes Cherry to help people learn to use a mouse by practising drag-and-drop. Today it remains one of the most popular digital pastimes, with over 35 million players worldwide enjoying its perfect blend of luck and strategy.',
    controls: 'कार्डों को स्तंभों के बीच ले जाने के लिए उन्हें क्लिक करें या खींचें। नए कार्ड बनाने के लिए डेक पर क्लिक करें। किसी कार्ड को फ़ाउंडेशन पर स्वत: भेजने के लिए उस पर डबल-क्लिक करें।',
  },
  'google-spider-solitaire': {
    title: 'Google Spider Solitaire',
    description: 'Arrange cards in descending runs of the same suit across ten tableau columns in this challenging Solitaire variant. Complete a full sequence from King down to Ace within a single suit to clear it from the board. Choose between 1, 2, or 4 suit modes for varying difficulty.\n\nSpider Solitaire gained massive popularity after Microsoft included it in Windows XP in 2001. Named after its eight foundation slots (like a spider\'s eight legs), it requires more strategic planning than standard Klondike. The four-suit mode is considered one of the most challenging single-player card games, with only about 1 in 3 deals being winnable even with perfect play.',
    controls: 'एक ही सूट के अवरोही क्रम बनाने के लिए कार्ड खींचें। इसे बोर्ड से साफ़ करने के लिए किंग से ऐस तक की पूरी दौड़ पूरी करें। नए कार्ड बांटने के लिए स्टॉक ढेर पर क्लिक करें।',
  },
  'google-freecell': {
    title: 'Google FreeCell',
    description: 'Test your strategic thinking in this beloved card game where nearly every deal is solvable. Use four free cells as temporary storage to manoeuvre cards between eight tableau columns, building sequences in descending alternating colours while moving cards to the foundation piles by suit from Ace to King.\n\nFreeCell stands apart from other solitaire games because almost every game can be won — only one deal out of the original 32,000 numbered deals in Windows FreeCell is known to be unsolvable (deal #11982). This makes it a game of pure skill rather than luck, rewarding careful planning and the ability to think several moves ahead.',
    controls: 'कॉलम, फ्री सेल और फाउंडेशन पाइल्स के बीच कार्ड ले जाने के लिए क्लिक करें। घटते वैकल्पिक रंगों में कॉलम बनाएं। सूट के अनुसार आरोही क्रम में कार्डों को फाउंडेशन में ले जाएं।',
  },
  'google-memory': {
    title: 'Google Memory Game',
    description: 'Flip cards and find matching pairs in this classic concentration memory game. Click on two cards at a time to reveal their hidden images — if they match, they stay face-up; if not, they flip back over. Clear the entire board in as few moves as possible.\n\nThe memory matching game, also known as Concentration, has been a favourite children\'s game for generations. It\'s also a proven cognitive exercise that strengthens short-term memory, visual recognition, and spatial awareness. Studies show that regular play can improve concentration and memory skills in both children and adults.',
    controls: 'किसी कार्ड को पलटने के लिए उस पर क्लिक करें। मिलान कार्ड की स्थिति को याद करके उसे ढूंढने का प्रयास करें। जीतने के लिए सभी जोड़ियों को साफ़ करें!',
  },
  'google-ludo': {
    title: 'Google Ludo',
    description: 'Roll the dice and race your four tokens around the board in this timeless family strategy game. Get a six to bring new pieces into play, land on opponents to send them back to start, and be the first player to get all your tokens safely home.\n\nLudo is derived from the ancient Indian game Pachisi, which dates back to the 6th century and was played by Mughal emperors on life-sized boards with servants as game pieces. The simplified modern version was patented in England in 1896 and has since become one of the world\'s most popular board games, enjoyed by families across every continent.',
    controls: 'पासा पलटने के लिए क्लिक करें, फिर उसे घुमाने के लिए टोकन पर क्लिक करें। खेल में नए टोकन लाने के लिए 6 प्राप्त करें। विरोधियों को शुरुआत में वापस भेजने के लिए उन पर उतरें।',
  },
  'google-word-coach': {
    title: 'Google Word Coach',
    description: 'Expand your vocabulary with this engaging word quiz game that tests your knowledge of definitions, synonyms, and word relationships. Choose the correct answer from multiple-choice options, build scoring streaks, and learn new words with each round.\n\nGoogle Word Coach originally appeared in Google Search results for users in non-English-speaking countries, helping them improve their English vocabulary in a fun, gamified way. The quiz format with immediate feedback makes learning new words feel like play rather than study, and the progressive difficulty ensures that both beginners and advanced learners are constantly challenged.',
    controls: 'प्रत्येक शब्द वाले प्रश्न के लिए दिए गए विकल्पों में से सही उत्तर पर क्लिक करें। प्रत्येक सही उत्तर के लिए अंक अर्जित करें और अपनी श्रृंखला बनाएं।',
  },
  'google-spinner': {
    title: 'Google Spinner',
    description: 'Give the virtual spinner a whirl and watch it spin at satisfying speed! Switch between a fidget spinner mode for stress relief and a numbered wheel mode for random number generation, perfect for games, decisions, or just pure fidgeting fun.\n\nGoogle\'s spinner tool was introduced during the 2017 fidget spinner craze that swept the world. The fidget spinner mode features realistic physics with momentum and gradual slowdown, while the number wheel mode serves as a handy random number generator for board games and classroom activities. It\'s a simple but endlessly satisfying interactive tool.',
    controls: 'स्पिनर को घुमाने के लिए क्लिक करें और खींचें। आप जितनी तेजी से स्वाइप करेंगे, यह उतनी ही तेजी से घूमेगा। फिजेट स्पिनर और नंबर व्हील मोड के बीच टॉगल करें।',
  },
  'google-coin-flip': {
    title: 'Google Coin Flip',
    description: 'Need to make a quick decision? Flip a virtual coin with a satisfying toss animation and let fate decide between heads and tails. The realistic spinning animation adds drama to every flip, making even the simplest decisions feel momentous.\n\nCoin flipping has been used for decision-making since ancient Roman times, when it was known as "navia aut caput" (ship or head). Google\'s digital version brings this age-old practice into the modern era with smooth animation and true random generation. It\'s one of Google\'s most-used utility tools, perfect for settling friendly debates or making lunch choices.',
    controls: 'सिक्के को उछालने के लिए "फ्लिप" बटन पर क्लिक करें या सिक्के को टैप करें। सिक्का घूमेगा और बेतरतीब ढंग से हेड या टेल पर गिरेगा।',
  },
  'google-dice-roller': {
    title: 'Google Dice Roller',
    description: 'Roll virtual dice for board games, tabletop RPGs, or just for fun with this customisable dice roller. Choose how many dice to roll and how many sides each die has — from standard six-sided dice to 20-sided dice for Dungeons & Dragons and beyond.\n\nDigital dice rollers have become essential tools for the tabletop gaming community, especially for role-playing games that require exotic dice types. Google\'s version uses cryptographically random number generation to ensure fair rolls, making it suitable for everything from casual family board games to serious tabletop RPG campaigns. The satisfying rolling animation makes each throw feel authentic.',
    controls: 'पासा फेंकने के लिए "रोल" पर क्लिक करें। नियंत्रणों का उपयोग करके पासों और भुजाओं की संख्या समायोजित करें। परिणाम एक संतोषजनक रोलिंग एनीमेशन के साथ दिखाए जाते हैं।',
  },
  'google-timer': {
    title: 'Google Timer',
    description: 'A clean and simple countdown timer and stopwatch built right into your browser. Set any duration from seconds to hours, start your countdown with one click, and get a clear audio alert when time\'s up — perfect for cooking, workouts, study sessions, and presentations.\n\nGoogle\'s timer tool has become a go-to utility for millions of people who need a quick, reliable timer without installing an app. The clean interface shows large, easy-to-read digits, and the persistent tab notification ensures you\'ll never miss your alarm even if you switch to another browser tab. It\'s one of those simple tools that makes daily life just a little bit easier.',
    controls: 'समय अवधि दर्ज करें और उलटी गिनती शुरू करने के लिए "प्रारंभ" पर क्लिक करें। गिनती करने के लिए स्टॉपवॉच मोड का उपयोग करें। किसी भी समय रोकें, फिर से शुरू करें या रीसेट करें।',
  },
  'google-metronome': {
    title: 'Google Metronome',
    description: 'Keep perfect tempo with this digital metronome, featuring adjustable BPM from slow adagio to rapid prestissimo. The clear visual pendulum and crisp audio click help musicians of all levels practise their timing and develop a solid sense of rhythm.\n\nThe metronome was patented by Johann Maelzel in 1815 and has been an essential practice tool for musicians for over 200 years. Google\'s digital version brings this timeless tool to the browser, offering precise tempo control and a clean, distraction-free interface. Whether you\'re a beginner learning to keep time or a professional rehearsing complex passages, a reliable metronome is your best practice partner.',
    controls: 'बीट शुरू करने के लिए "प्रारंभ" पर क्लिक करें। बीपीएम स्लाइडर का उपयोग करके गति को समायोजित करें या प्रति मिनट अपनी वांछित बीट्स टाइप करें। रोकने के लिए "रोकें" पर क्लिक करें।',
  },
  'zerg-rush': {
    title: 'Zerg Rush',
    description: 'Defend your Google search results from an onslaught of falling "O" characters in this iconic Easter egg inspired by StarCraft! Click rapidly on each zergling O to destroy it before the swarm devours every search result on the page, leaving only a giant "GG" (good game).\n\nThe Zerg Rush Easter egg first appeared in Google Search in 2012 as a tribute to Blizzard\'s StarCraft franchise, where "Zerg rush" describes an overwhelming early-game attack strategy. The frantic clicking gameplay perfectly captures the panic of facing a real Zerg rush, and the final "GG" screen — gaming shorthand for "good game" — is a loving nod to competitive gaming culture.',
    controls: 'खोज परिणामों को खाने से पहले उन्हें नष्ट करने के लिए गिरते हुए "O" वर्णों पर तेजी से क्लिक करें। प्रत्येक O को हराने के लिए तीन क्लिक लगते हैं। जब तक संभव हो जीवित रहें!',
  },
  'atari-breakout': {
    title: 'Atari Breakout',
    description: 'Smash colourful bricks with a bouncing ball in this legendary recreation of Atari\'s 1976 arcade classic! Move your paddle left and right to keep the ball in play, break through rows of bricks, and clear every single one to advance through increasingly challenging levels.\n\nBreakout was designed by Nolan Bushnell and Steve Bristow, with the prototype famously built by a young Steve Jobs and Steve Wozniak — yes, the Apple founders worked on this game before starting their own company. The game pioneered the brick-breaking genre that later inspired mega-hits like Arkanoid, and this web version preserves the pure, timeless satisfaction of shattering blocks with a perfectly aimed bounce.',
    controls: 'पैडल को नियंत्रित करने के लिए अपने माउस या उंगली को बाएँ और दाएँ घुमाएँ। ऊपर की सभी ईंटों को तोड़ने के लिए गेंद को उछालें। गेंद को अपने पैडल से आगे न गिरने दें!',
  },
  'google-gravity': {
    title: 'Google Gravity',
    description: 'Watch the entire Google homepage collapse under the force of gravity in this hilarious physics experiment! Every element — the logo, search bar, buttons, and links — tumbles and piles up at the bottom of the screen. Click and drag any piece to toss it around and enjoy the satisfying chaos.\n\nGoogle Gravity is one of the most popular Google Easter eggs ever created, demonstrating real-time 2D physics simulation in the browser. Despite everything falling apart, the search bar actually still works — you can type a query and submit it, with the results also tumbling down in the same chaotic fashion. It\'s a delightful example of creative web development.',
    controls: 'पृष्ठ पर किसी भी तत्व को क्लिक करके खींचें और उठाएं तथा इधर-उधर फेंक दें। यथार्थवादी भौतिकी के साथ हर चीज़ को गिरते और उछलते हुए देखें। कुछ खोजने का प्रयास करें!',
  },
  'thanos-snap': {
    title: 'Thanos Snap',
    description: 'Wield the Infinity Gauntlet and snap half of all search results out of existence, just like Thanos from the Marvel Cinematic Universe! Click the golden gauntlet icon to watch results dissolve into dust with a dramatic particle effect, perfectly recreating the iconic snap.\n\nThis Easter egg was created to promote Avengers: Endgame in 2019 and became one of Google\'s most viral interactive features. The disintegration effect is faithful to the movie\'s visual style, and clicking again reverses the snap, restoring everything — just like in the film. A hidden detail: a counter shows exactly how many results were snapped away, always exactly half.',
    controls: 'स्नैप निष्पादित करने के लिए इन्फिनिटी गौंटलेट आइकन पर क्लिक करें। आधे परिणामों को धूल में बिखरते हुए देखें। स्नैप को उलटने और सब कुछ पुनर्स्थापित करने के लिए फिर से क्लिक करें।',
  },
  'super-mario-coin-block': {
    title: 'Super Mario Coin Block',
    description: 'Discover the hidden Super Mario Bros. coin block Easter egg and punch it to collect coins with that iconic "cha-ching" sound effect! Click or tap the question mark block repeatedly to rack up coins, just like Mario himself, and see how many you can collect.\n\nThis Easter egg celebrates the 30th anniversary of Super Mario Bros., one of the most influential video games ever created. Released by Nintendo in 1985, Super Mario Bros. rescued the home console industry from collapse and introduced the world to Mario, who would become the most recognisable video game character of all time. The satisfying coin sound is one of gaming\'s most iconic audio cues.',
    controls: 'प्रश्न चिह्न ब्लॉक को हिट करने और सिक्के जारी करने के लिए उस पर क्लिक करें या टैप करें। जितना संभव हो उतने सिक्के एकत्र करने के लिए क्लिक करते रहें। क्लासिक सिक्के की ध्वनि सुनें!',
  },
  'google-pac-man': {
    title: 'Google PAC-MAN (elgooG)',
    description: 'The classic Google PAC-MAN Doodle hosted on elgooG, giving you a second way to play the iconic maze-chomping arcade game anytime you want. Navigate the maze, eat all the dots, grab power pellets to chase the ghosts, and aim for the highest score.\n\nThis version of the legendary 2010 PAC-MAN Doodle is preserved on elgooG, a website dedicated to keeping Google Easter eggs and Doodles playable forever. PAC-MAN remains the highest-grossing arcade game of all time, having generated over $14 billion in revenue. The game\'s creator, Toru Iwatani, was inspired by a pizza with a slice missing.',
    controls: 'PAC-MAN को भूलभुलैया में मार्गदर्शन करने के लिए तीर कुंजियों का उपयोग करें। स्तर को पूरा करने के लिए सभी बिंदुओं को खाएं। भूतों को नीला करने के लिए पावर छर्रों को पकड़ें और बोनस अंक के लिए उन्हें खाएं।',
  },
  'google-mirror': {
    title: 'Google Mirror (elgooG)',
    description: 'See the entire Google search page reflected in a perfect mirror image on this quirky Easter egg site. Everything is reversed — text reads backwards, buttons are flipped, and even typing in the search bar appears mirrored. Try navigating the reversed interface for a brain-bending experience.\n\nGoogle Mirror (elgooG, which itself is "Google" backwards) has been delighting visitors since 2002. It\'s a fully functional mirror of Google Search where everything works in reverse. Beyond being a fun novelty, it\'s actually been used in countries where Google is blocked, as the mirrored domain sometimes bypasses internet filters.',
    controls: 'अपने टेक्स्ट को प्रतिबिंबित रूप में देखने के लिए खोज बार में टाइप करें। मस्तिष्क झुकाने वाले अनुभव के लिए उल्टे इंटरफ़ेस पर नेविगेट करें। सभी लिंक और बटन विपरीत तरीके से काम करते हैं!',
  },
  'google-in-1998': {
    title: 'Google in 1998',
    description: 'Take a nostalgic trip back to 1998 to see what Google looked like when it first launched! Browse the original bare-bones interface with its simple blue links, minimal design, and that early web charm that defined the dawn of the search engine era.\n\nWhen Larry Page and Sergey Brin launched Google from a Stanford University dorm room in September 1998, it had a stark white page with just a logo, a search bar, and two buttons. This Easter egg faithfully recreates that original experience, complete with period-appropriate search results. The contrast between the 1998 interface and modern Google perfectly illustrates how far the web has come in just over 25 years.',
    controls: 'क्लासिक 1998-शैली खोज बार में एक खोज क्वेरी टाइप करें और Enter दबाएँ। उदासीन परिणाम पृष्ठ ब्राउज़ करें. विंटेज इंटरफ़ेस देखने के लिए चारों ओर क्लिक करें।',
  },
  'do-a-barrel-roll': {
    title: 'Do a Barrel Roll',
    description: 'Watch the entire Google page perform a spectacular 360-degree barrel roll! The whole webpage smoothly rotates clockwise in a satisfying full spin, then settles back to normal. Try searching for it again or pressing the button to repeat the dizzying display.\n\nThis Easter egg was introduced in 2011 as a tribute to the Nintendo 64 game Star Fox, where Peppy Hare famously instructs the player to "Do a barrel roll!" The smooth CSS animation was groundbreaking at the time, demonstrating the power of modern web technologies. It became one of the most shared Google Easter eggs ever, with millions performing the search just to see the page spin.',
    controls: 'बैरल रोल एनीमेशन को ट्रिगर करने के लिए बटन पर क्लिक करें। पूरा पेज 360 डिग्री घूमेगा. निरंतर आनंद के लिए कई बार क्लिक करें!',
  },
  'google-askew': {
    title: 'Google Askew / Tilt',
    description: 'The whole Google page tilts slightly to one side in this subtle and amusing Easter egg! Everything still works normally — you can search, click links, and browse results — but the entire page sits at a quirky crooked angle that\'s oddly unsettling.\n\nSearching for "askew" or "tilt" on Google triggers this clever visual gag that has been surprising users since 2011. The slight rotation is just enough to be noticeable and mildly disorienting, making it perfect for pranking friends and colleagues. It\'s one of Google\'s most understated Easter eggs, proving that sometimes the subtlest jokes are the funniest.',
    controls: 'बस झुके हुए पृष्ठ को देखें और इसे सामान्य रूप से उपयोग करने का प्रयास करें। खोजें, लिंक पर क्लिक करें और ब्राउज़ करें - सब कुछ एक विचित्र कोण से। झुकाव फिर से देखने के लिए ताज़ा करें।',
  },
  'friends-easter-eggs': {
    title: 'Friends Easter Eggs',
    description: 'Discover hidden Friends TV show Easter eggs scattered across Google Search! Find interactive surprises for each of the six main characters — trigger Ross\'s "pivot" animation, Phoebe\'s guitar, Joey\'s food obsession, and more iconic moments from the beloved sitcom.\n\nThese Easter eggs were created to celebrate the 25th anniversary of Friends, which premiered on NBC on 22 September 1994 and ran for 10 seasons. The show remains one of the most-watched sitcoms in television history, with fans worldwide who can quote every episode. Each character\'s Easter egg references their most memorable moments, delighting the show\'s devoted fanbase.',
    controls: 'प्रत्येक पात्र के अनूठे ईस्टर एग एनीमेशन को ट्रिगर करने के लिए उसके आइकन पर क्लिक करें। प्रत्येक छिपे हुए आश्चर्य और प्रतिष्ठित तकियाकलाम को खोजने के लिए सभी छह पात्रों का अन्वेषण करें।',
  },
  'google-underwater': {
    title: 'Google Underwater',
    description: 'Plunge beneath the waves as the Google homepage sinks into a beautiful underwater world! Watch tropical fish swim lazily past, interact with playful sea creatures, and enjoy the tranquil ocean ambience as the search bar and buttons float in the gentle current.\n\nGoogle Underwater transforms the familiar search page into a serene marine environment with realistic water physics and swimming animations. You can click to create ripples, scatter the fish, and interact with the aquatic scene. Despite the underwater setting, the search functionality still works, making it a unique blend of interactive art and functional tool.',
    controls: 'पानी के नीचे के दृश्य से बातचीत करने के लिए अपने माउस को घुमाएँ। लहरें बनाने और मछली को डराने के लिए क्लिक करें। तत्वों को चारों ओर खींचें और उन्हें पानी में तैरते हुए देखें।',
  },
  'google-space': {
    title: 'Google Space',
    description: 'Launch the Google homepage into outer space and watch every element float away in zero gravity! The logo, search bar, buttons, and text all drift apart in the cosmic void. Grab any element with your mouse and fling it across the screen to watch it tumble through space.\n\nGoogle Space demonstrates zero-gravity physics simulation in the browser, turning the familiar homepage into a cosmic playground. Like Google Gravity, the search bar continues to function despite floating freely, and search results also appear in a weightless state. It\'s a mesmerising visual experience that invites playful interaction with the familiar Google interface.',
    controls: 'किसी भी तत्व को अंतरिक्ष में फेंकने के लिए उसे क्लिक करें और खींचें। शून्य-गुरुत्वाकर्षण भौतिकी के साथ वस्तुओं को तैरते और टकराते हुए देखें। खोज बार में टाइप करने का प्रयास करें क्योंकि सब कुछ दूर चला जाता है।',
  },
  'google-tetris': {
    title: 'Google Tetris',
    description: 'Stack falling tetrominoes and clear lines in this faithful recreation of the world\'s most iconic puzzle game! Use arrow keys to move and rotate the seven different piece shapes, building complete horizontal lines to clear them and score points. The game speeds up as you level up.\n\nTetris was created by Soviet software engineer Alexey Pajitnov in 1984 and has become the most ported and best-selling video game of all time, with over 520 million copies sold across all platforms. Its simple yet infinitely replayable gameplay has captivated players for four decades. The game is so culturally significant that the "Tetris effect" — seeing falling blocks when you close your eyes — is a recognised psychological phenomenon.',
    controls: 'टुकड़ों को स्थानांतरित करने के लिए बाएँ और दाएँ तीर कुंजियों का उपयोग करें। घुमाने के लिए ऊपर तीर दबाएँ. सॉफ्ट ड्रॉप के लिए डाउन एरो और हार्ड ड्रॉप के लिए स्पेसबार दबाएँ। स्कोर करने के लिए स्पष्ट रेखाएँ!',
  },
  'google-2048': {
    title: 'Google 2048',
    description: 'Slide numbered tiles on a 4×4 grid and merge matching numbers to reach the elusive 2048 tile! Swipe or use arrow keys to shift all tiles in one direction — when two tiles of the same number collide, they merge into one with double the value. Plan your moves carefully to avoid filling up the board.\n\nCreated by Italian developer Gabriele Cirulli in 2014 as a weekend project, 2048 became a viral sensation overnight, spawning thousands of clones and variants. The deceptively simple math puzzle hides deep strategic complexity — players must balance short-term merges with long-term positioning to reach higher numbers. Reaching 2048 is satisfying, but the real challenge is pushing beyond to 4096, 8192, and beyond.',
    controls: 'सभी टाइलों को एक दिशा में स्लाइड करने के लिए तीर कुंजियों का उपयोग करें या स्वाइप करें। मिलान करने वाली संख्याएँ टकराने पर विलीन हो जाती हैं। बोर्ड को भरने से बचने के लिए अपनी चालों की सावधानीपूर्वक योजना बनाएं!',
  },
  'google-interland': {
    title: 'Google Interland',
    description: 'Explore the magical land of Interland and master essential internet safety skills through four exciting adventure zones! Battle hackers in the Tower of Treasure, spot phishing scams in Reality River, practise kindness in Kind Kingdom, and protect your data in Mindful Mountain.\n\nDeveloped as part of Google\'s "Be Internet Awesome" initiative, Interland teaches children critical digital citizenship skills through engaging gameplay. The programme was developed with input from online safety experts and educators, and is used in thousands of schools worldwide. Each zone focuses on a different aspect of internet safety, making complex concepts like data privacy and cyberbullying accessible to young learners.',
    controls: 'प्रत्येक क्षेत्र में नेविगेट करने के लिए तीर कुंजियों का उपयोग करें या क्लिक करें। प्रश्नों के उत्तर दें और अंक अर्जित करने के लिए चुनौतियों को पूरा करें। इंटरनेट सुरक्षा में महारत हासिल करने के लिए सभी चार राज्यों में प्रगति।',
  },
  'google-arts-culture-face-match': {
    title: 'Google Arts and Culture Face Match',
    description: 'Take a selfie and discover your fine art doppelgänger from thousands of museum paintings and portraits worldwide! Google\'s AI analyses your facial features and matches you with famous artworks, showing your closest match along with information about the painting and its artist.\n\nLaunched as part of Google Arts & Culture in 2018, the Face Match feature went viral almost immediately, briefly making the app the most downloaded on both iOS and Android. The AI compares your photo against a database of artworks from over 1,200 museums and galleries. Beyond the fun of finding your painted twin, the feature introduces millions of people to artwork they might never have encountered otherwise.',
    controls: 'कैमरा एक्सेस की अनुमति दें और कैप्चर बटन पर क्लिक करके सेल्फी लें। एआई संग्रहालय संग्रहों को स्कैन करेगा और पेंटिंग के इतिहास के साथ आपका निकटतम कला मिलान दिखाएगा।',
  },
  'google-teachable-machine': {
    title: 'Google Teachable Machine',
    description: 'Train your own artificial intelligence model using your webcam, microphone, or uploaded images — no coding required! Create classes, record samples, train the model with one click, and watch your custom AI recognise gestures, sounds, objects, and poses in real time.\n\nGoogle Teachable Machine demystifies artificial intelligence by letting anyone build and train a machine learning model in minutes. Used by educators, artists, and makers worldwide, it has powered everything from school science projects to interactive art installations. The tool runs entirely in the browser using TensorFlow.js, and trained models can be exported for use in websites, apps, and physical computing projects.',
    controls: 'अपने वेबकैम या माइक्रोफ़ोन का उपयोग करके प्रत्येक कक्षा के नमूने रिकॉर्ड करने के लिए "ट्रेन" पर क्लिक करें। एकाधिक कक्षाएं जोड़ें, फिर अपना एआई बनाने के लिए "ट्रेन मॉडल" पर क्लिक करें। वास्तविक समय में इसका परीक्षण करें!',
  },
  'great-ghoul-duel-2': {
    title: 'Great Ghoul Duel 2 (Halloween 2022)',
    description: 'Team up with players worldwide in this spooky sequel to the beloved Great Ghoul Duel! Compete as adorable ghosts to collect wandering spirit flames across new haunted maps, use fresh power-ups to gain advantages, and race to return the most flames to your team\'s base.\n\nThe 2022 Halloween Doodle built upon the success of the original 2018 multiplayer game with enhanced graphics, new haunted environments, and exciting power-up mechanics. The real-time multiplayer matchmaking connects players across the globe for fast-paced team competitions. The Great Ghoul Duel series has become one of Google\'s most anticipated annual events, with millions of players logging in each Halloween.',
    controls: 'अपने भूत को स्थानांतरित करने के लिए तीर कुंजियों का उपयोग करें या स्वाइप करें। स्पिरिट लपटें इकट्ठा करें और उन्हें अपने बेस पर लौटा दें। विरोधी टीम पर बढ़त हासिल करने के लिए नए पावर-अप का उपयोग करें!',
  },
  'gerald-lawson-game-maker': {
    title: 'Celebrating Gerald "Jerry" Lawson',
    description: 'Honour the father of modern gaming by building your own video game levels in this interactive Doodle celebrating Gerald "Jerry" Lawson! Use the intuitive level editor to place platforms, enemies, collectibles, and power-ups, then play your creation and share it with friends.\n\nJerry Lawson invented the Fairchild Channel F in 1976 — the first home console with interchangeable game cartridges. Before his innovation, games were hardwired into consoles, meaning each system could only play one game. His cartridge system revolutionised the entire gaming industry, paving the way for the Atari 2600, Nintendo, PlayStation, and every modern console. This Doodle celebrates his legacy by putting game creation power in everyone\'s hands.',
    controls: 'प्लेटफ़ॉर्म, दुश्मनों और पावर-अप्स को रखने के लिए लेवल एडिटर का उपयोग करें। अपनी रचना का परीक्षण करने के लिए "चलाएँ" पर क्लिक करें। दोस्तों के साथ अपने कस्टम स्तर साझा करें!',
  },
  'valentines-day-chemistry': {
    title: 'Valentine\'s Day Chemistry CuPd (2024)',
    description: 'Discover the chemistry of love in this Valentine\'s Day Doodle where elements CuPd (Copper and Palladium — "CuPid") come together! Match chemical elements to trigger love-themed reactions, watch atoms dance and combine, and create beautiful molecular animations in this heartwarming interactive experience.\n\nThis clever 2024 Valentine\'s Doodle combines romance with real chemistry, using actual periodic table elements to spell out love-related words. The playful approach to science education makes it both entertaining and informative, introducing players to chemical bonding concepts through charming animations. It\'s a perfect example of how Google Doodles can make learning feel like play.',
    controls: 'तत्वों को संयोजित करने और रासायनिक प्रतिक्रियाओं को ट्रिगर करने के लिए उन्हें क्लिक करें और खींचें। प्रेम-थीम वाले एनिमेशन को अनलॉक करने और पहेली को पूरा करने के लिए सही जोड़ियों का मिलान करें।',
  },
  'rise-of-the-half-moon-november': {
    title: 'Rise of the Half Moon — November 2024',
    description: 'Continue your celestial adventure in Chapter 2 of the Rise of the Half Moon series. Face new card challenges, discover fresh strategies, and explore deeper into the mythology of the moon in this strategic card game with stunning artwork.\n\nThis November 2024 chapter expanded the Rise of the Half Moon universe with new card types, enhanced mechanics, and a continuing narrative about celestial balance. The serialised format kept the growing community of players engaged, with each chapter building on the strategies and story established in the first instalment.',
    controls: 'चंद्रमा के चरणों के साथ इंटरैक्ट करने के लिए क्लिक करें और खींचें। आकाशीय पिंडों को संरेखित करके पहेलियाँ हल करें। प्रत्येक चुनौती को पूरा करके कहानी में आगे बढ़ें।',
  },
  'rise-of-the-half-moon-december': {
    title: 'Rise of the Half Moon — December 2024',
    description: 'Explore wintery lunar landscapes and solve new celestial puzzles in Chapter 3 of the Rise of the Half Moon series. Master advanced card strategies, unlock powerful new card combinations, and experience the story as it reaches its most dramatic moments.\n\nThe December 2024 chapter brought a winter theme to the Half Moon saga, with snowy environments and holiday-inspired card designs. As the penultimate chapter, it raised the stakes with more complex puzzles and deeper strategic options, setting up an epic conclusion while rewarding dedicated players who had followed the series from the beginning.',
    controls: 'चंद्रमा के चरणों के साथ इंटरैक्ट करने के लिए क्लिक करें और खींचें। आकाशीय पिंडों को संरेखित करके पहेलियाँ हल करें। प्रत्येक चुनौती को पूरा करके कहानी में आगे बढ़ें।',
  },
  'rise-of-the-half-moon-january': {
    title: 'Rise of the Half Moon — January 2025',
    description: 'Experience the grand finale of the Rise of the Half Moon series in this climactic fourth chapter. Complete the ultimate celestial challenge, unlock the final story revelations, and witness the conclusion of the lunar saga with the most complex card strategies yet.\n\nThe January 2025 finale brought the Rise of the Half Moon saga to a satisfying close, tying together narrative threads from all four chapters. The concluding chapter featured the most challenging card puzzles in the series, requiring players to master everything they had learned. This serialised approach to Doodle games was a first for Google, creating an ongoing story that kept players returning month after month.',
    controls: 'चंद्रमा के चरणों के साथ इंटरैक्ट करने के लिए क्लिक करें और खींचें। आकाशीय पिंडों को संरेखित करके अंतिम पहेलियों को हल करें। गाथा पूरी करें!',
  },
  'minecraft-easter-egg': {
    title: 'Minecraft Easter Egg',
    description: 'Explore the iconic blocky world of Minecraft Classic right in your browser! Build, dig, and create to your heart\'s content in this nostalgic recreation of Minecraft\'s earliest version. Place and break blocks across a procedurally generated landscape of pixelated terrain.\n\nMinecraft, created by Markus "Notch" Persson in 2009, has become the best-selling video game of all time with over 300 million copies sold. What began as a simple block-building experiment grew into a global cultural phenomenon that revolutionised gaming, education, and digital creativity. Minecraft Classic preserves the pure building sandbox experience of the game\'s earliest days, before monsters, redstone circuits, and The End were added.',
    controls: 'स्थानांतरित करने के लिए WASD का उपयोग करें, चारों ओर देखने के लिए माउस का उपयोग करें। ब्लॉक तोड़ने के लिए बायां क्लिक करें, ब्लॉक रखने के लिए दायां क्लिक करें। आपकी इन्वेंट्री से विभिन्न ब्लॉक प्रकारों का चयन करने के लिए संख्या कुंजियाँ।',
  },
  'google-maps-pac-man': {
    title: 'Google Maps PAC-MAN',
    description: 'Play PAC-MAN on actual city streets in this legendary Google Maps mashup! Navigate real-world road layouts while chomping dots, collecting fruit bonuses, and avoiding the four colourful ghosts as they chase you through your own neighbourhood.\n\nOriginally released as a Google Maps April Fools\' Day feature in 2015, this creative blend of classic gaming and real-world geography became one of Google\'s most popular April Fools\' pranks ever. The game transforms any city\'s street layout into a PAC-MAN maze, creating unique challenges depending on the location. Dense city centres with grid-like streets play very differently from suburban areas with cul-de-sacs.',
    controls: 'वास्तविक शहर की सड़कों पर पीएसी-मैन का मार्गदर्शन करने के लिए तीर कुंजियों का उपयोग करें। भूतों से बचते हुए सभी डॉट्स खाएं। अपने पीछा करने वालों के लिए मुश्किलें खड़ी करने के लिए शक्ति छर्रों को पकड़ें!',
  },
  'google-whirlybird': {
    title: 'Google Whirlybird',
    description: 'Pilot a tiny helicopter through challenging obstacle courses in this addictive one-button flying game! Tap or click to gain altitude and release to descend, threading through narrow gaps between obstacles while collecting bonuses along the way.\n\nInspired by the viral "Flappy Bird" phenomenon of 2014, one-button helicopter games have become a beloved casual gaming genre. The core mechanic — balancing altitude with precise taps — creates an elegantly simple game that\'s easy to learn but incredibly difficult to master. The gradually increasing difficulty and competitive high-score chasing make it perfect for quick gaming sessions.',
    controls: 'हेलीकॉप्टर को ऊपर की ओर उड़ाने के लिए क्लिक करें या टैप करें। इसे उतरने देने के लिए छोड़ें। दुर्घटनाग्रस्त हुए बिना बाधाओं के बीच अंतराल के माध्यम से नेविगेट करें!',
  },
  'rugby-world-cup-2015': {
    title: 'Rugby World Cup 2015 Doodle',
    description: 'Score tries and convert kicks in this Google Doodle celebrating the 2015 Rugby World Cup! Play as a rugby team competing through the tournament, timing your kicks perfectly and dodging defenders in fast-paced running gameplay.\n\nThis Doodle was created for the opening day of the 2015 Rugby World Cup, hosted by England. The tournament saw New Zealand successfully defend their title, becoming the first team to win back-to-back Rugby World Cups. The sport of rugby union, which originated at Rugby School in England in the 19th century, is now played in over 120 countries with a passionate global following.',
    controls: 'गेंद को किक करने और अंक अर्जित करने के लिए क्लिक करें। अपने रूपांतरणों का समय निर्धारित करें और लक्ष्य छोड़ें। गेंद के साथ दौड़ें और रक्षकों को चकमा देकर प्रयास करें!',
  },
};
