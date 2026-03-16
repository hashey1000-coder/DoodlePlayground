#!/usr/bin/env node
// Batch 1: Translates descriptions+controls for word-search, word-scramble, connect-four, sliding-puzzle, flappy-bird
import { readFileSync, writeFileSync } from 'fs';

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

function findEndQuote(content, openIdx) {
  let i = openIdx + 1;
  while (i < content.length) {
    if (content[i] === '\\') { i += 2; continue; }
    if (content[i] === "'") return i;
    i++;
  }
  return -1;
}

// T[slug][locale] = [description, controls]
const T = {
'word-search': {
  ar: [
`ابحث عن الكلمات المخفية في شبكة من الحروف — أفقياً وعمودياً وقطرياً وحتى بالعكس. سابق الزمن للعثور على كل كلمة قبل نفاد الوقت.

اخترعت ألغاز البحث عن الكلمات على يد نورمان إي. غيبات عام 1968. اليوم يحلها مئات الملايين من الأشخاص يومياً حول العالم.`,
`انقر على الحرف الأول ثم الأخير لتحديد الكلمة. يمكن أن تمتد الكلمات في أي اتجاه. شطب كل كلمة من القائمة لإكمال اللغز.`],
  de: [
`Finde versteckte Wörter in einem Buchstabengitter — horizontal, vertikal, diagonal und sogar rückwärts. Schlage die Uhr und finde jedes Wort, bevor die Zeit abläuft.

Wortsuchrätsel wurden 1968 von Norman E. Gibat erfunden. Heute lösen Hunderte Millionen Menschen weltweit sie täglich.`,
`Klicke auf den ersten und letzten Buchstaben eines Wortes, um es zu markieren. Wörter können in jede Richtung verlaufen. Streiche jedes gefundene Wort von der Liste.`],
  es: [
`Encuentra palabras ocultas en una cuadrícula de letras — busca horizontal, vertical, diagonal e incluso al revés. Compite contra el reloj para encontrar todas las palabras antes de que se acabe el tiempo.

Los puzzles de sopa de letras fueron inventados por Norman E. Gibat en 1968. Hoy cientos de millones de personas los resuelven a diario en todo el mundo.`,
`Haz clic en la primera y última letra de una palabra para resaltarla. Las palabras pueden ir en cualquier dirección. Tacha cada palabra de la lista para completar el puzzle.`],
  fr: [
`Trouvez des mots cachés dans une grille de lettres — horizontalement, verticalement, en diagonale et même à l'envers. Battez le chrono pour trouver chaque mot avant la fin du temps.

Les mots mêlés ont été inventés par Norman E. Gibat en 1968. Aujourd'hui des centaines de millions de personnes en résolvent quotidiennement à travers le monde.`,
`Cliquez sur la première puis la dernière lettre d'un mot pour le surligner. Les mots peuvent aller dans toutes les directions. Rayez chaque mot de la liste.`],
  hi: [
`अक्षरों की ग्रिड में छिपे हुए शब्द खोजें — क्षैतिज, लंबवत, विकर्ण और यहाँ तक कि उल्टे भी। समय समाप्त होने से पहले सभी शब्द खोजने की दौड़ लगाएं।

शब्द खोज पहेलियों का आविष्कार 1968 में नॉर्मन ई. गिबात ने किया था। आज दुनिया भर में करोड़ों लोग प्रतिदिन इन्हें हल करते हैं।`,
`किसी शब्द के पहले और आखिरी अक्षर पर क्लिक करें। शब्द किसी भी दिशा में हो सकते हैं। सूची से प्रत्येक शब्द को काटकर पहेली पूरी करें।`],
  id: [
`Temukan kata-kata tersembunyi dalam kotak huruf — secara horizontal, vertikal, diagonal, dan bahkan mundur. Kalahkan waktu untuk menemukan semua kata sebelum habis.

Teka-teki cari kata diciptakan oleh Norman E. Gibat pada tahun 1968. Saat ini ratusan juta orang di seluruh dunia menyelesaikannya setiap hari.`,
`Klik huruf pertama lalu terakhir untuk menyorot kata. Kata bisa berjalan ke segala arah. Coret setiap kata dari daftar untuk menyelesaikan teka-teki.`],
  it: [
`Trova le parole nascoste in una griglia di lettere — in orizzontale, verticale, diagonale e persino al contrario. Batti il tempo per trovare ogni parola prima dello scadere.

I puzzle di ricerca parole furono inventati da Norman E. Gibat nel 1968. Oggi centinaia di milioni di persone in tutto il mondo li risolvono ogni giorno.`,
`Clicca sulla prima e ultima lettera di una parola per evidenziarla. Le parole possono andare in qualsiasi direzione. Barra ogni parola dalla lista per completare il puzzle.`],
  ja: [
`文字のグリッドに隠された単語を見つけよう。横、縦、斜め、さらには逆方向にも探せます。制限時間内にすべての単語を見つけてください。

ワードサーチパズルは1968年にノーマン・E・ギバットによって発明されました。今日では世界中で毎日数億人が楽しんでいます。`,
`単語の最初と最後の文字をクリックしてハイライトします。単語はどの方向にも並んでいます。リストの各単語を見つけて消しましょう。`],
  ko: [
`글자 격자에서 숨겨진 단어를 찾으세요 — 가로, 세로, 대각선, 심지어 거꾸로도 찾을 수 있습니다. 시간 안에 모든 단어를 찾아보세요.

단어 찾기 퍼즐은 1968년 노먼 E. 기바트가 발명했습니다. 오늘날 전 세계에서 수억 명이 매일 이 퍼즐을 풀고 있습니다.`,
`단어의 첫 번째와 마지막 글자를 클릭하여 표시하세요. 단어는 어느 방향으로든 이어질 수 있습니다. 목록에서 각 단어를 지우세요.`],
  nl: [
`Vind verborgen woorden in een lettergrid — horizontaal, verticaal, diagonaal en zelfs achterstevoren. Race tegen de klok om elk woord te vinden voordat de tijd op is.

Woordzoekpuzzels werden in 1968 uitgevonden door Norman E. Gibat. Vandaag de dag lossen honderden miljoenen mensen ze dagelijks op over de hele wereld.`,
`Klik op de eerste en laatste letter van een woord om het te markeren. Woorden kunnen in elke richting lopen. Streep elk woord van de lijst af om de puzzel te voltooien.`],
  pl: [
`Znajdź ukryte słowa w siatce liter — poziomo, pionowo, po przekątnej, a nawet wspak. Ścigaj się z czasem, aby znaleźć każde słowo przed upływem limitu.

Łamigłówki szukania słów zostały wynalezione przez Normana E. Gibata w 1968 roku. Dziś setki milionów ludzi na całym świecie rozwiązuje je codziennie.`,
`Kliknij pierwszą i ostatnią literę słowa, aby je zaznaczyć. Słowa mogą biec w dowolnym kierunku. Skreśl każde znalezione słowo z listy.`],
  pt: [
`Encontre palavras escondidas numa grelha de letras — na horizontal, vertical, diagonal e até de trás para a frente. Corra contra o tempo para encontrar todas as palavras.

Os puzzles de caça-palavras foram inventados por Norman E. Gibat em 1968. Hoje centenas de milhões de pessoas em todo o mundo os resolvem diariamente.`,
`Clique na primeira e última letra de uma palavra para destacá-la. As palavras podem seguir qualquer direção. Risque cada palavra da lista para completar o puzzle.`],
  ru: [
`Находите скрытые слова в сетке букв — по горизонтали, вертикали, диагонали и даже задом наперёд. Найдите все слова до истечения времени.

Головоломки с поиском слов были изобретены Норманом Э. Гибатом в 1968 году. Сегодня сотни миллионов людей по всему миру решают их ежедневно.`,
`Нажмите на первую и последнюю букву слова, чтобы выделить его. Слова могут идти в любом направлении. Вычеркните каждое слово из списка.`],
  sv: [
`Hitta dolda ord i ett rutnät av bokstäver — horisontellt, vertikalt, diagonalt och till och med baklänges. Tävla mot klockan för att hitta alla ord innan tiden tar slut.

Ordletningspussel uppfanns av Norman E. Gibat 1968. Idag löser hundratals miljoner människor världen över dem dagligen.`,
`Klicka på den första och sista bokstaven i ett ord för att markera det. Ord kan löpa i valfri riktning. Stryk varje ord från listan.`],
  th: [
`ค้นหาคำที่ซ่อนอยู่ในตารางตัวอักษร — แนวนอน แนวตั้ง แนวทแยง และแม้แต่ย้อนกลับ แข่งกับเวลาเพื่อหาทุกคำก่อนหมดเวลา

เกมค้นหาคำถูกประดิษฐ์โดย Norman E. Gibat ในปี 1968 ปัจจุบันมีผู้คนหลายร้อยล้านคนทั่วโลกเล่นเกมนี้ทุกวัน`,
`คลิกตัวอักษรแรกและตัวสุดท้ายของคำเพื่อไฮไลท์ คำอาจอยู่ในทิศทางใดก็ได้ ขีดฆ่าแต่ละคำจากรายการ`],
  tr: [
`Harf ızgarasında gizlenmiş kelimeleri bulun — yatay, dikey, çapraz ve hatta geriye doğru arayın. Süre dolmadan tüm kelimeleri bulmak için zamana karşı yarışın.

Kelime arama bulmacaları 1968'de Norman E. Gibat tarafından icat edildi. Bugün dünya genelinde yüz milyonlarca kişi her gün bunları çözüyor.`,
`Bir kelimenin ilk ve son harfine tıklayarak vurgulayın. Kelimeler herhangi bir yönde olabilir. Listedeki her kelimeyi bularak işaretleyin.`],
  vi: [
`Tìm các từ ẩn trong lưới chữ cái — ngang, dọc, chéo và thậm chí ngược. Chạy đua với thời gian để tìm mọi từ trước khi hết giờ.

Trò chơi tìm từ được phát minh bởi Norman E. Gibat vào năm 1968. Ngày nay hàng trăm triệu người trên toàn thế giới giải chúng mỗi ngày.`,
`Nhấp vào chữ cái đầu tiên và cuối cùng của từ để tô sáng. Từ có thể chạy theo mọi hướng. Gạch bỏ từng từ trong danh sách.`],
  'zh-CN': [
`在字母网格中寻找隐藏的单词——横向、纵向、对角线甚至反向搜索。与时间赛跑，在时间结束前找出所有单词。

单词搜索谜题由Norman E. Gibat于1968年发明。如今全球每天有数亿人在解答这类谜题。`,
`点击单词的第一个和最后一个字母来高亮显示。单词可以朝任何方向延伸。从列表中划掉每个找到的单词。`],
  'zh-TW': [
`在字母網格中尋找隱藏的單詞——橫向、縱向、對角線甚至反向搜索。與時間賽跑，在時間結束前找出所有單詞。

單詞搜索謎題由Norman E. Gibat於1968年發明。如今全球每天有數億人在解答這類謎題。`,
`點擊單詞的第一個和最後一個字母來高亮顯示。單詞可以朝任何方向延伸。從列表中劃掉每個找到的單詞。`],
},

'word-scramble': {
  ar: [
`فك رموز الحروف المبعثرة للكشف عن الكلمة المخفية بأسرع ما يمكن. لعبة مفردات تختبر حدسك الإملائي تحت الضغط.

تستغل ألعاب الحروف المبعثرة ظاهرة دماغية مذهلة: يمكن للدماغ التعرف على الكلمات حتى لو كانت الحروف الوسطى مخلوطة طالما الحرف الأول والأخير في مكانهما.`,
`اقرأ الحروف المبعثرة على الشاشة. اكتب إجابتك في مربع النص واضغط Enter للتأكيد.`],
  de: [
`Entwirre durcheinander gewürfelte Buchstaben, um das versteckte Wort so schnell wie möglich zu finden. Ein Wortschatzspiel, das deinen Rechtschreibinstinkt unter Druck testet.

Buchstabenrätsel nutzen eine faszinierende Eigenschaft des Gehirns: Es kann Wörter erkennen, deren mittlere Buchstaben vertauscht sind, solange der erste und letzte stimmen.`,
`Lies die angezeigten Buchstaben auf dem Bildschirm. Tippe deine Antwort in das Textfeld und drücke Enter zur Bestätigung.`],
  es: [
`Descifra las letras desordenadas para revelar la palabra oculta lo más rápido posible. Un juego de vocabulario que pone a prueba tu instinto ortográfico bajo presión.

Los juegos de palabras revueltas aprovechan una fascinante peculiaridad cerebral: el cerebro puede reconocer palabras con las letras centrales desordenadas si la primera y la última están en su lugar.`,
`Lee las letras desordenadas en pantalla. Escribe tu respuesta en el cuadro de texto y pulsa Enter para confirmar.`],
  fr: [
`Démêlez des lettres mélangées pour révéler le mot caché le plus vite possible. Un jeu de vocabulaire qui met votre instinct orthographique à l'épreuve sous pression.

Les anagrammes exploitent une particularité fascinante du cerveau : il peut reconnaître des mots dont les lettres centrales sont mélangées, tant que la première et la dernière sont à leur place.`,
`Lisez les lettres mélangées à l'écran. Tapez votre réponse dans la zone de texte et appuyez sur Entrée pour confirmer.`],
  hi: [
`बिखरे हुए अक्षरों को सुलझाकर छिपे शब्द को जितनी जल्दी हो सके खोजें। एक शब्दावली खेल जो दबाव में आपकी वर्तनी प्रवृत्ति की परीक्षा लेता है।

शब्द पहेलियाँ मस्तिष्क की एक अद्भुत विशेषता का उपयोग करती हैं: यह उन शब्दों को पहचान सकता है जिनके बीच के अक्षर मिले हुए हों, बशर्ते पहला और आखिरी अक्षर सही जगह पर हो।`,
`स्क्रीन पर दिखाए गए बिखरे अक्षरों को पढ़ें। टेक्स्ट बॉक्स में अपना उत्तर टाइप करें और पुष्टि के लिए Enter दबाएं।`],
  id: [
`Susun ulang huruf-huruf acak untuk mengungkap kata tersembunyi secepat mungkin. Permainan kosakata yang menguji insting ejaan Anda di bawah tekanan.

Teka-teki kata acak memanfaatkan keunikan otak yang menarik: otak dapat mengenali kata-kata meskipun huruf tengahnya diacak, asalkan huruf pertama dan terakhir tetap di tempatnya.`,
`Baca huruf-huruf acak yang ditampilkan di layar. Ketik jawaban Anda di kotak teks dan tekan Enter untuk mengonfirmasi.`],
  it: [
`Riordina le lettere mescolate per rivelare la parola nascosta il più velocemente possibile. Un gioco di vocabolario che mette alla prova il tuo istinto ortografico sotto pressione.

I giochi di parole mescolate sfruttano un affascinante meccanismo cerebrale: il cervello può riconoscere parole con le lettere centrali scambiate, purché la prima e l'ultima siano al posto giusto.`,
`Leggi le lettere mescolate sullo schermo. Digita la tua risposta nella casella di testo e premi Invio per confermare.`],
  ja: [
`バラバラになった文字を並べ替えて、隠された単語をできるだけ早く見つけましょう。プレッシャーの中でスペリング能力を試す語彙ゲームです。

ワードスクランブルは脳の驚くべき特性を利用しています。最初と最後の文字が正しい位置にあれば、中間の文字が入れ替わっていても単語を認識できるのです。`,
`画面に表示されたバラバラの文字を読みましょう。テキストボックスに答えを入力してEnterキーで確定します。`],
  ko: [
`뒤섞인 글자를 재배열하여 숨겨진 단어를 최대한 빨리 찾으세요. 압박 속에서 맞춤법 감각을 시험하는 어휘 게임입니다.

단어 스크램블은 뇌의 놀라운 특성을 활용합니다. 첫 글자와 마지막 글자가 제자리에 있으면 중간 글자가 섞여 있어도 단어를 인식할 수 있습니다.`,
`화면에 표시된 뒤섞인 글자를 읽으세요. 텍스트 상자에 답을 입력하고 Enter를 눌러 확인하세요.`],
  nl: [
`Ontwar door elkaar gehusselde letters om het verborgen woord zo snel mogelijk te onthullen. Een woordenschatspel dat je spellinginstinct onder druk test.

Woordpuzzels maken gebruik van een fascinerend hersentrucje: het brein kan woorden herkennen waarvan de middelste letters door elkaar staan, zolang de eerste en laatste letter op hun plek staan.`,
`Lees de door elkaar gehusselde letters op het scherm. Typ je antwoord in het tekstveld en druk op Enter om te bevestigen.`],
  pl: [
`Ułóż pomieszane litery, aby jak najszybciej odgadnąć ukryte słowo. Gra słowna, która testuje twój instynkt ortograficzny pod presją czasu.

Gry z pomieszanymi słowami wykorzystują fascynującą cechę mózgu: potrafi on rozpoznawać słowa z wymieszanymi środkowymi literami, jeśli pierwsza i ostatnia litera są na swoim miejscu.`,
`Przeczytaj pomieszane litery na ekranie. Wpisz odpowiedź w pole tekstowe i naciśnij Enter, aby potwierdzić.`],
  pt: [
`Descubra a palavra escondida reorganizando as letras embaralhadas o mais rápido possível. Um jogo de vocabulário que testa o seu instinto ortográfico sob pressão.

Os jogos de palavras embaralhadas exploram uma peculiaridade fascinante do cérebro: ele consegue reconhecer palavras com as letras do meio trocadas, desde que a primeira e a última estejam no lugar certo.`,
`Leia as letras embaralhadas no ecrã. Escreva a sua resposta na caixa de texto e prima Enter para confirmar.`],
  ru: [
`Расшифруйте перемешанные буквы, чтобы как можно быстрее угадать скрытое слово. Словарная игра, проверяющая ваш орфографический инстинкт под давлением.

Игры с перемешанными словами используют удивительную особенность мозга: он может распознавать слова с перепутанными средними буквами, если первая и последняя буквы остаются на своих местах.`,
`Прочитайте перемешанные буквы на экране. Введите ответ в текстовое поле и нажмите Enter для подтверждения.`],
  sv: [
`Ordna om blandade bokstäver för att avslöja det dolda ordet så snabbt som möjligt. Ett ordförrådstest som prövar din stavningsinstinkt under press.

Ordpussel utnyttjar en fascinerande egenskap hos hjärnan: den kan känna igen ord med omsorterade bokstäver i mitten, så länge den första och sista bokstaven sitter rätt.`,
`Läs de blandade bokstäverna på skärmen. Skriv ditt svar i textfältet och tryck Enter för att bekräfta.`],
  th: [
`จัดเรียงตัวอักษรที่สลับกันเพื่อค้นหาคำที่ซ่อนอยู่ให้เร็วที่สุด เกมคำศัพท์ที่ทดสอบสัญชาตญาณการสะกดของคุณภายใต้แรงกดดัน

เกมสลับตัวอักษรใช้ประโยชน์จากความสามารถพิเศษของสมอง: สมองสามารถจดจำคำได้แม้ตัวอักษรตรงกลางจะสลับที่กัน ตราบใดที่ตัวแรกและตัวสุดท้ายอยู่ถูกตำแหน่ง`,
`อ่านตัวอักษรที่สลับบนหน้าจอ พิมพ์คำตอบในช่องข้อความและกด Enter เพื่อยืนยัน`],
  tr: [
`Karışık harfleri çözerek gizli kelimeyi mümkün olduğunca hızlı bulun. Baskı altında yazım içgüdünüzü test eden bir kelime oyunu.

Kelime bulmacaları beynin büyüleyici bir özelliğini kullanır: ilk ve son harf yerindeyse, ortadaki harfler karışık olsa bile kelimeyi tanıyabilir.`,
`Ekranda gösterilen karışık harfleri okuyun. Cevabınızı metin kutusuna yazın ve onaylamak için Enter tuşuna basın.`],
  vi: [
`Sắp xếp lại các chữ cái bị xáo trộn để tìm ra từ ẩn nhanh nhất có thể. Một trò chơi từ vựng thử thách bản năng chính tả của bạn dưới áp lực.

Trò chơi xáo trộn chữ khai thác một đặc điểm thú vị của não bộ: não có thể nhận ra từ dù các chữ cái ở giữa bị đảo lộn, miễn là chữ đầu và cuối đúng vị trí.`,
`Đọc các chữ cái bị xáo trộn trên màn hình. Gõ câu trả lời vào ô văn bản và nhấn Enter để xác nhận.`],
  'zh-CN': [
`尽快重新排列打乱的字母，找出隐藏的单词。一款在压力下测试你拼写直觉的词汇游戏。

字母重组游戏利用了大脑的一个奇妙特点：只要首尾字母位置正确，即使中间字母打乱，大脑仍能识别出单词。`,
`阅读屏幕上显示的打乱字母。在文本框中输入答案，按Enter确认。`],
  'zh-TW': [
`盡快重新排列打亂的字母，找出隱藏的單詞。一款在壓力下測試你拼寫直覺的詞彙遊戲。

字母重組遊戲利用了大腦的一個奇妙特點：只要首尾字母位置正確，即使中間字母打亂，大腦仍能識別出單詞。`,
`閱讀螢幕上顯示的打亂字母。在文字框中輸入答案，按Enter確認。`],
},

'connect-four': {
  ar: [
`أسقط أقراصاً ملونة في شبكة عمودية وكن أول من يصف أربعة من لونك — أفقياً أو عمودياً أو قطرياً. استراتيجية بسيطة الظاهر عميقة الجوهر.

تم حل لعبة كونكت فور رياضياً عام 1988: اللاعب الأول يمكنه دائماً ضمان الفوز بالبدء في العمود الأوسط.`,
`انقر على عمود لإسقاط قرصك. تسقط الأقراص إلى أدنى موضع متاح. كن أول من يصل أربعة أقراص متصلة للفوز.`],
  de: [
`Wirf farbige Scheiben in ein vertikales Gitter und sei der Erste, der vier seiner Farbe in einer Reihe hat — horizontal, vertikal oder diagonal. Einfach zu lernen, schwer zu meistern.

Vier Gewinnt wurde 1988 mathematisch gelöst: Der erste Spieler kann stets gewinnen, wenn er in der Mittelspalte beginnt.`,
`Klicke auf eine Spalte, um deine Scheibe einzuwerfen. Die Scheibe fällt auf die niedrigste freie Position. Verbinde als Erster vier Scheiben deiner Farbe.`],
  es: [
`Deja caer discos de colores en una cuadrícula vertical y sé el primero en alinear cuatro de tu color — horizontal, vertical o diagonalmente. Simple en apariencia, profundo en estrategia.

Conecta Cuatro fue resuelto matemáticamente en 1988: el primer jugador siempre puede garantizar la victoria comenzando por la columna central.`,
`Haz clic en una columna para soltar tu disco. Los discos caen a la posición más baja disponible. Sé el primero en conectar cuatro discos de tu color para ganar.`],
  fr: [
`Lâchez des jetons colorés dans une grille verticale et soyez le premier à aligner quatre de votre couleur — horizontalement, verticalement ou en diagonale. Simple en apparence, profond en stratégie.

Puissance 4 a été résolu mathématiquement en 1988 : le premier joueur peut toujours gagner en commençant par la colonne centrale.`,
`Cliquez sur une colonne pour y lâcher votre jeton. Les jetons tombent à la position la plus basse disponible. Alignez quatre jetons de votre couleur pour gagner.`],
  hi: [
`रंगीन डिस्क को एक लंबवत ग्रिड में गिराएं और अपने रंग की चार डिस्क को पहले पंक्तिबद्ध करें — क्षैतिज, लंबवत या विकर्ण रूप से। देखने में सरल, रणनीति में गहरी।

कनेक्ट फोर को 1988 में गणितीय रूप से हल किया गया था: पहला खिलाड़ी बीच के कॉलम से शुरू करके हमेशा जीत सुनिश्चित कर सकता है।`,
`डिस्क गिराने के लिए किसी कॉलम पर क्लिक करें। डिस्क सबसे नीचे उपलब्ध स्थान पर गिरती है। जीतने के लिए पहले चार डिस्क जोड़ें।`],
  id: [
`Jatuhkan keping berwarna ke dalam papan vertikal dan jadilah yang pertama menyusun empat keping sewarna — horizontal, vertikal, atau diagonal. Sederhana di permukaan, mendalam strateginya.

Connect Four dipecahkan secara matematis pada tahun 1988: pemain pertama selalu bisa menjamin kemenangan dengan memulai di kolom tengah.`,
`Klik kolom untuk menjatuhkan keping Anda. Keping jatuh ke posisi terendah yang tersedia. Jadilah yang pertama menghubungkan empat keping untuk menang.`],
  it: [
`Lascia cadere dischi colorati in una griglia verticale e sii il primo ad allinearne quattro del tuo colore — in orizzontale, verticale o diagonale. Semplice da imparare, profondo nella strategia.

Forza 4 è stato risolto matematicamente nel 1988: il primo giocatore può sempre vincere iniziando dalla colonna centrale.`,
`Clicca su una colonna per far cadere il tuo disco. I dischi cadono nella posizione più bassa disponibile. Allinea quattro dischi del tuo colore per vincere.`],
  ja: [
`カラフルなディスクを縦のグリッドに落とし、自分の色を4つ並べましょう。横、縦、斜めに並べることができます。シンプルに見えて奥深い戦略ゲームです。

コネクトフォーは1988年に数学的に解かれました。先手のプレイヤーは中央の列から始めれば必ず勝つことができます。`,
`列をクリックしてディスクを落とします。ディスクは最も下の空いた位置に落ちます。先に4つ並べた方が勝ちです。`],
  ko: [
`색깔 디스크를 세로 격자에 떨어뜨려 가로, 세로, 대각선으로 같은 색 4개를 먼저 연결하세요. 단순해 보이지만 전략이 깊은 게임입니다.

커넥트포는 1988년에 수학적으로 풀렸습니다. 선공 플레이어가 가운데 열에서 시작하면 항상 승리를 보장할 수 있습니다.`,
`열을 클릭하여 디스크를 떨어뜨리세요. 디스크는 가장 아래 빈 자리에 놓입니다. 먼저 4개를 연결하면 승리합니다.`],
  nl: [
`Laat gekleurde schijven in een verticaal raster vallen en wees de eerste die vier van jouw kleur op een rij krijgt — horizontaal, verticaal of diagonaal. Simpel om te leren, moeilijk te beheersen.

Vier op een Rij werd in 1988 wiskundig opgelost: de eerste speler kan altijd winnen door in de middelste kolom te beginnen.`,
`Klik op een kolom om je schijf te laten vallen. Schijven vallen naar de laagste beschikbare positie. Verbind als eerste vier schijven van jouw kleur.`],
  pl: [
`Wrzucaj kolorowe krążki do pionowej planszy i jako pierwszy ułóż cztery w jednym kolorze — poziomo, pionowo lub po przekątnej. Prosta w założeniu, głęboka strategicznie.

Czwórki zostały matematycznie rozwiązane w 1988 roku: pierwszy gracz zawsze może wygrać, zaczynając od środkowej kolumny.`,
`Kliknij kolumnę, aby wrzucić krążek. Krążki spadają na najniższą wolną pozycję. Pierwszy, kto połączy cztery krążki, wygrywa.`],
  pt: [
`Largue discos coloridos numa grelha vertical e seja o primeiro a alinhar quatro da sua cor — na horizontal, vertical ou diagonal. Simples de aprender, profundo em estratégia.

O Quatro em Linha foi resolvido matematicamente em 1988: o primeiro jogador pode sempre garantir a vitória começando pela coluna central.`,
`Clique numa coluna para largar o seu disco. Os discos caem para a posição mais baixa disponível. Seja o primeiro a ligar quatro discos da sua cor.`],
  ru: [
`Бросайте цветные фишки в вертикальную сетку и первым выстройте четыре своего цвета в ряд — по горизонтали, вертикали или диагонали. Просто на вид, глубоко по стратегии.

Четыре в ряд была математически решена в 1988 году: первый игрок всегда может гарантировать победу, начав с центрального столбца.`,
`Нажмите на столбец, чтобы бросить фишку. Фишки падают на самую нижнюю свободную позицию. Соберите четыре в ряд первым.`],
  sv: [
`Släpp färgade brickor i ett vertikalt rutnät och bli först med att rada upp fyra i din färg — horisontellt, vertikalt eller diagonalt. Enkelt att lära sig, svårt att bemästra.

Fyra i rad löstes matematiskt 1988: den första spelaren kan alltid vinna genom att börja i mittkolumnen.`,
`Klicka på en kolumn för att släppa din bricka. Brickor faller till den lägsta lediga platsen. Rada upp fyra av din färg först för att vinna.`],
  th: [
`หย่อนแผ่นดิสก์สีลงในตารางแนวตั้งและเป็นคนแรกที่เรียงสี่แผ่นสีเดียวกัน — แนวนอน แนวตั้ง หรือแนวทแยง เกมที่ดูง่ายแต่ลึกซึ้งในกลยุทธ์

Connect Four ถูกแก้ด้วยคณิตศาสตร์ในปี 1988 ผู้เล่นคนแรกสามารถชนะได้เสมอหากเริ่มที่คอลัมน์กลาง`,
`คลิกที่คอลัมน์เพื่อหย่อนดิสก์ ดิสก์จะตกลงไปที่ตำแหน่งต่ำสุดที่ว่าง เรียงสี่แผ่นให้ได้ก่อนเพื่อชนะ`],
  tr: [
`Renkli diskleri dikey bir ızgaraya bırakın ve renginizden dördünü ilk siz hizalayın — yatay, dikey veya çapraz. Görünüşte basit, stratejide derin.

Connect Four 1988'de matematiksel olarak çözüldü: ilk oyuncu orta sütundan başlayarak her zaman kazanmayı garanti edebilir.`,
`Diskinizi bırakmak için bir sütuna tıklayın. Diskler mevcut en alt konuma düşer. Renginizden dördünü ilk bağlayan kazanır.`],
  vi: [
`Thả đĩa màu vào lưới dọc và trở thành người đầu tiên xếp bốn đĩa cùng màu thành hàng — ngang, dọc hoặc chéo. Đơn giản nhưng chiến thuật sâu sắc.

Connect Four đã được giải bằng toán học vào năm 1988: người chơi đi trước luôn có thể đảm bảo chiến thắng nếu bắt đầu ở cột giữa.`,
`Nhấp vào cột để thả đĩa. Đĩa rơi xuống vị trí thấp nhất có sẵn. Người đầu tiên nối được bốn đĩa sẽ thắng.`],
  'zh-CN': [
`将彩色圆盘投入垂直网格，率先将四个同色圆盘连成一线——横向、纵向或对角线。看似简单，实则策略深远。

四子棋于1988年被数学证明破解：先手玩家从中间列开始总能保证获胜。`,
`点击列来投放圆盘。圆盘会落到最低的可用位置。率先连成四个同色圆盘即可获胜。`],
  'zh-TW': [
`將彩色圓盤投入垂直網格，率先將四個同色圓盤連成一線——橫向、縱向或對角線。看似簡單，實則策略深遠。

四子棋於1988年被數學證明破解：先手玩家從中間列開始總能保證獲勝。`,
`點擊列來投放圓盤。圓盤會落到最低的可用位置。率先連成四個同色圓盤即可獲勝。`],
},

'sliding-puzzle': {
  ar: [
`حرّك البلاطات المرقّمة في شبكة 4×4 (بمربع فارغ واحد) لترتيبها من 1 إلى 15. فكّر عدة خطوات للأمام لحلها بأقل عدد من الحركات.

أشعل لغز الـ 15 جنوناً عالمياً في ثمانينيات القرن التاسع عشر. رياضياً، نصف الأوضاع المبعثرة بالضبط غير قابلة للحل.`,
`انقر على بلاطة مجاورة للمربع الفارغ لتحريكها. أعد ترتيب البلاطات حتى تصبح بالترتيب من 1 إلى 15.`],
  de: [
`Schiebe nummerierte Kacheln in einem 4×4-Gitter (mit einem Leerfeld) und ordne sie von 1 bis 15. Denke mehrere Züge voraus für die beste Lösung.

Das 15-Puzzle löste in den 1880er-Jahren weltweit eine Begeisterung aus. Mathematisch ist genau die Hälfte aller gemischten Positionen unlösbar.`,
`Klicke auf eine Kachel neben dem leeren Feld, um sie zu verschieben. Ordne alle Kacheln von 1 bis 15 an.`],
  es: [
`Desliza fichas numeradas en una cuadrícula de 4×4 (con un espacio vacío) para ordenarlas del 1 al 15. Piensa varias jugadas por adelantado para resolverlo con menos movimientos.

El puzzle del 15 desató una locura mundial en la década de 1880. Matemáticamente, exactamente la mitad de todas las posiciones barajadas son imposibles de resolver.`,
`Haz clic en una ficha adyacente al espacio vacío para deslizarla. Sigue reorganizando hasta que todas estén ordenadas del 1 al 15.`],
  fr: [
`Faites glisser des tuiles numérotées dans une grille 4×4 (avec une case vide) pour les ranger de 1 à 15. Réfléchissez plusieurs coups à l'avance pour optimiser vos mouvements.

Le Taquin a déclenché une folie mondiale dans les années 1880. Mathématiquement, exactement la moitié des positions mélangées sont insolubles.`,
`Cliquez sur une tuile adjacente à la case vide pour la faire glisser. Réorganisez jusqu'à ce que toutes les tuiles soient ordonnées de 1 à 15.`],
  hi: [
`4×4 ग्रिड (एक खाली जगह के साथ) में क्रमांकित टाइलों को स्लाइड करके 1 से 15 तक क्रम में लगाएं। सबसे कम चालों में हल करने के लिए कई कदम आगे सोचें।

15-पहेली ने 1880 के दशक में दुनिया भर में एक सनक पैदा की थी। गणितीय रूप से, सभी बेतरतीब स्थितियों में से ठीक आधी हल नहीं की जा सकतीं।`,
`खाली जगह के बगल वाली टाइल पर क्लिक करके उसे स्लाइड करें। सभी टाइलों को 1 से 15 के क्रम में लगाएं।`],
  id: [
`Geser ubin bernomor di papan 4×4 (dengan satu ruang kosong) untuk menyusunnya dari 1 sampai 15. Pikirkan beberapa langkah ke depan untuk solusi terbaik.

Puzzle 15 memicu kegilaan global pada tahun 1880-an. Secara matematis, tepat separuh dari semua posisi acak tidak bisa diselesaikan.`,
`Klik ubin di sebelah ruang kosong untuk menggesernya. Susun ulang sampai semua ubin terurut dari 1 hingga 15.`],
  it: [
`Fai scorrere le tessere numerate in una griglia 4×4 (con uno spazio vuoto) per ordinarle da 1 a 15. Pensa diverse mosse avanti per trovare la soluzione ottimale.

Il Gioco del 15 scatenò una mania mondiale negli anni 1880. Matematicamente, esattamente metà di tutte le posizioni mescolate sono irrisolvibili.`,
`Clicca su una tessera adiacente allo spazio vuoto per farla scorrere. Riordina tutte le tessere da 1 a 15.`],
  ja: [
`4×4のグリッド（空きスペース1つ）で番号付きタイルをスライドさせ、1から15の順に並べましょう。最適な解法のために数手先を考えてください。

15パズルは1880年代に世界的ブームを巻き起こしました。数学的に、シャッフルされた配置の正確に半分は解くことができません。`,
`空きスペースに隣接するタイルをクリックしてスライドさせます。すべてのタイルを1から15の順に並べましょう。`],
  ko: [
`4×4 격자(빈칸 1개)에서 번호 타일을 밀어 1부터 15까지 순서대로 정렬하세요. 최적의 풀이를 위해 여러 수 앞을 생각하세요.

15퍼즐은 1880년대에 전 세계적인 열풍을 일으켰습니다. 수학적으로 섞인 배치의 정확히 절반은 풀 수 없습니다.`,
`빈칸 옆의 타일을 클릭하여 밀어주세요. 모든 타일을 1부터 15까지 순서대로 정렬하면 됩니다.`],
  nl: [
`Schuif genummerde tegels over een 4×4-raster (met één lege plek) om ze van 1 tot 15 te ordenen. Denk meerdere zetten vooruit voor de beste oplossing.

De 15-puzzel veroorzaakte een wereldwijde rage in de jaren 1880. Wiskundig gezien is exact de helft van alle geschudde posities onoplosbaar.`,
`Klik op een tegel naast de lege plek om hem te verschuiven. Rangschik alle tegels van 1 tot 15.`],
  pl: [
`Przesuwaj ponumerowane kafelki na planszy 4×4 (z jednym pustym polem), aby ułożyć je od 1 do 15. Myśl kilka ruchów naprzód, aby znaleźć najlepsze rozwiązanie.

Łamigłówka 15 wywołała światową manię w latach 80. XIX wieku. Matematycznie dokładnie połowa wszystkich wymieszanych pozycji jest nierozwiązywalna.`,
`Kliknij kafelek sąsiadujący z pustym polem, aby go przesunąć. Ułóż wszystkie kafelki od 1 do 15.`],
  pt: [
`Deslize peças numeradas numa grelha 4×4 (com um espaço vazio) para ordená-las de 1 a 15. Pense várias jogadas à frente para a melhor solução.

O Puzzle do 15 desencadeou uma febre mundial nos anos 1880. Matematicamente, exatamente metade de todas as posições baralhadas são impossíveis de resolver.`,
`Clique numa peça ao lado do espaço vazio para deslizá-la. Reorganize até todas ficarem ordenadas de 1 a 15.`],
  ru: [
`Передвигайте пронумерованные плитки по полю 4×4 (с одной пустой ячейкой), чтобы расположить их по порядку от 1 до 15. Продумывайте ходы наперёд для лучшего результата.

Головоломка «Пятнашки» вызвала мировое помешательство в 1880-х годах. Математически ровно половина всех перемешанных позиций неразрешима.`,
`Нажмите на плитку рядом с пустой ячейкой, чтобы сдвинуть её. Расставьте все плитки по порядку от 1 до 15.`],
  sv: [
`Skjut numrerade brickor i ett 4×4-rutnät (med en tom plats) för att ordna dem från 1 till 15. Tänk flera drag framåt för bästa lösning.

15-pusslet utlöste en världsomspännande mani på 1880-talet. Matematiskt sett är exakt hälften av alla blandade positioner olösliga.`,
`Klicka på en bricka bredvid den tomma platsen för att flytta den. Ordna alla brickor från 1 till 15.`],
  th: [
`เลื่อนแผ่นตัวเลขในตาราง 4×4 (มีช่องว่าง 1 ช่อง) เพื่อเรียงลำดับจาก 1 ถึง 15 คิดล่วงหน้าหลายขั้นตอนเพื่อหาทางแก้ที่ดีที่สุด

พัซเซิล 15 ก่อให้เกิดกระแสคลั่งไคล้ทั่วโลกในช่วงทศวรรษ 1880 ในทางคณิตศาสตร์ ตำแหน่งสับเปลี่ยนครึ่งหนึ่งไม่สามารถแก้ได้`,
`คลิกแผ่นที่อยู่ติดกับช่องว่างเพื่อเลื่อน จัดเรียงแผ่นทั้งหมดจาก 1 ถึง 15`],
  tr: [
`4×4 ızgarada (bir boş alan ile) numaralı karoları kaydırarak 1'den 15'e sıralayın. En iyi çözüm için birkaç hamle ileriye düşünün.

15-Bulmaca 1880'lerde dünya çapında bir çılgınlığa yol açtı. Matematiksel olarak, tüm karıştırılmış pozisyonların tam yarısı çözülemez.`,
`Boş alanın yanındaki bir karoya tıklayarak kaydırın. Tüm karoları 1'den 15'e kadar sıralayın.`],
  vi: [
`Trượt các ô số trên lưới 4×4 (có một ô trống) để sắp xếp chúng từ 1 đến 15. Hãy nghĩ trước nhiều bước để tìm cách giải tối ưu.

Trò chơi xếp 15 đã gây ra cơn sốt toàn cầu vào những năm 1880. Về mặt toán học, đúng một nửa số vị trí xáo trộn là không thể giải được.`,
`Nhấp vào ô cạnh chỗ trống để trượt. Sắp xếp tất cả các ô theo thứ tự từ 1 đến 15.`],
  'zh-CN': [
`在4×4网格（有一个空位）中滑动编号方块，将它们按1到15的顺序排列。提前思考几步以找到最佳解法。

15拼图在1880年代引发了全球性的狂热。从数学角度看，所有打乱位置中恰好有一半是无解的。`,
`点击空位旁边的方块来滑动它。将所有方块按1到15的顺序排列。`],
  'zh-TW': [
`在4×4網格（有一個空位）中滑動編號方塊，將它們按1到15的順序排列。提前思考幾步以找到最佳解法。

15拼圖在1880年代引發了全球性的狂熱。從數學角度看，所有打亂位置中恰好有一半是無解的。`,
`點擊空位旁邊的方塊來滑動它。將所有方塊按1到15的順序排列。`],
},

'flappy-bird': {
  ar: [
`اضغط لتحريك جناحي الطائر والتنقل عبر سلسلة لا نهائية من فجوات الأنابيب. كل ضغطة ترفع الطائر قليلاً والجاذبية تسحبه للأسفل بلا هوادة.

ابتكرها المطور الفيتنامي دونغ نغوين عام 2013، وأصبحت Flappy Bird ظاهرة عالمية تحقق 50,000 دولار يومياً من الإعلانات قبل أن يسحبها مبتكرها طوعاً من المتاجر.`,
`اضغط مسافة أو انقر في أي مكان لتحريك الجناحين. وجّه الطائر عبر الفجوات بين الأنابيب دون لمسها.`],
  de: [
`Tippe, um mit den Flügeln zu flattern und durch eine endlose Reihe von Röhrenlücken zu navigieren. Jeder Tipp hebt den Vogel leicht an, die Schwerkraft zieht ihn unerbittlich zurück.

Entwickelt vom vietnamesischen Entwickler Dong Nguyen im Jahr 2013, wurde Flappy Bird zu einem weltweiten Phänomen mit Werbeeinnahmen von 50.000 Dollar pro Tag, bevor der Erfinder es freiwillig aus den Stores nahm.`,
`Drücke Leertaste oder klicke irgendwo, um zu flattern. Führe den Vogel durch die Lücken zwischen den Röhren, ohne sie zu berühren.`],
  es: [
`Toca para batir las alas de tu pájaro y navega por una serie interminable de huecos entre tuberías. Cada toque eleva al pájaro ligeramente; la gravedad lo arrastra sin piedad.

Creado por el desarrollador vietnamita Dong Nguyen en 2013, Flappy Bird se convirtió en un fenómeno mundial que ganaba 50.000 dólares diarios en publicidad antes de que su creador lo retirara voluntariamente.`,
`Pulsa Espacio o haz clic en cualquier lugar para batir las alas. Guía al pájaro a través de los huecos entre las tuberías sin tocarlas.`],
  fr: [
`Appuyez pour battre des ailes et naviguer à travers une série infinie d'ouvertures entre les tuyaux. Chaque appui soulève l'oiseau légèrement ; la gravité le ramène sans cesse vers le bas.

Créé par le développeur vietnamien Dong Nguyen en 2013, Flappy Bird est devenu un phénomène mondial rapportant 50 000 dollars par jour en publicité avant que son créateur ne le retire volontairement.`,
`Appuyez sur Espace ou cliquez n'importe où pour battre des ailes. Guidez l'oiseau entre les tuyaux sans les toucher.`],
  hi: [
`अपने पक्षी के पंख फड़फड़ाने के लिए टैप करें और पाइप गैप की अंतहीन श्रृंखला से गुजरें। हर टैप पक्षी को थोड़ा ऊपर उठाता है; गुरुत्वाकर्षण उसे लगातार नीचे खींचता है।

वियतनामी डेवलपर डोंग गुयेन द्वारा 2013 में बनाई गई, Flappy Bird एक वैश्विक सनसनी बन गई जो विज्ञापनों से प्रतिदिन $50,000 कमाती थी, इससे पहले कि इसके निर्माता ने स्वेच्छा से इसे हटा लिया।`,
`स्पेस दबाएं या कहीं भी क्लिक करें पंख फड़फड़ाने के लिए। पक्षी को पाइपों के बीच के गैप से बिना छुए गुजारें।`],
  id: [
`Ketuk untuk mengepakkan sayap burung dan menavigasi melalui celah pipa yang tak berujung. Setiap ketukan mengangkat burung sedikit; gravitasi menariknya kembali tanpa henti.

Diciptakan oleh pengembang Vietnam Dong Nguyen pada 2013, Flappy Bird menjadi fenomena global yang menghasilkan $50.000 per hari dari iklan sebelum penciptanya secara sukarela menariknya dari toko.`,
`Tekan Spasi atau klik di mana saja untuk mengepakkan sayap. Pandu burung melewati celah antar pipa tanpa menyentuhnya.`],
  it: [
`Tocca per far battere le ali al tuo uccello e navigare attraverso una serie infinita di aperture tra i tubi. Ogni tocco solleva l'uccello leggermente; la gravità lo tira giù senza sosta.

Creato dallo sviluppatore vietnamita Dong Nguyen nel 2013, Flappy Bird divenne un fenomeno globale che guadagnava 50.000 dollari al giorno in pubblicità prima che il suo creatore lo ritirasse volontariamente.`,
`Premi Spazio o clicca ovunque per battere le ali. Guida l'uccello attraverso le aperture tra i tubi senza toccarli.`],
  ja: [
`タップして鳥の翼をはばたかせ、無限に続くパイプの隙間を通り抜けましょう。タップするたびに鳥が少し上がり、重力が容赦なく引き戻します。

2013年にベトナム人開発者ドン・グエンが制作したFlappy Birdは、広告収入で1日5万ドルを稼ぐ世界的現象となりましたが、制作者自ら自主的にストアから削除しました。`,
`スペースキーを押すかどこかをクリックして翼をはばたかせます。パイプの隙間に触れずに鳥を誘導しましょう。`],
  ko: [
`탭하여 새의 날개를 펄럭이며 끝없이 이어지는 파이프 틈을 통과하세요. 탭할 때마다 새가 약간 올라가고 중력이 끊임없이 끌어내립니다.

2013년 베트남 개발자 동 응우옌이 만든 Flappy Bird는 하루 광고 수익 5만 달러를 기록한 세계적 현상이 되었지만, 제작자가 자발적으로 스토어에서 삭제했습니다.`,
`스페이스바를 누르거나 아무 곳이나 클릭하여 날갯짓하세요. 파이프 사이의 틈을 건드리지 않고 새를 안내하세요.`],
  nl: [
`Tik om met de vleugels te klapperen en navigeer door een eindeloze reeks openingen tussen pijpen. Elke tik tilt de vogel iets op; de zwaartekracht trekt hem onverbiddelijk terug.

Gemaakt door de Vietnamese ontwikkelaar Dong Nguyen in 2013, werd Flappy Bird een wereldwijd fenomeen dat 50.000 dollar per dag aan advertenties opbracht voordat de maker het vrijwillig verwijderde.`,
`Druk op Spatie of klik ergens om te klapperen. Leid de vogel door de openingen tussen de pijpen zonder ze te raken.`],
  pl: [
`Stuknij, aby machać skrzydłami ptaka i przedzierać się przez niekończącą się serię szczelin między rurami. Każde stuknięcie unosi ptaka lekko w górę; grawitacja ściąga go nieustannie w dół.

Stworzona przez wietnamskiego programistę Dong Nguyena w 2013 roku, Flappy Bird stała się globalnym fenomenem zarabiającym 50 000 dolarów dziennie na reklamach, zanim twórca dobrowolnie ją usunął ze sklepów.`,
`Naciśnij Spację lub kliknij gdziekolwiek, aby machać skrzydłami. Przeprowadź ptaka przez szczeliny między rurami, nie dotykając ich.`],
  pt: [
`Toque para bater as asas do pássaro e navegue por uma série infinita de aberturas entre canos. Cada toque eleva o pássaro ligeiramente; a gravidade puxa-o de volta sem piedade.

Criado pelo desenvolvedor vietnamita Dong Nguyen em 2013, Flappy Bird tornou-se um fenómeno global que ganhava 50.000 dólares por dia em publicidade antes de o criador o retirar voluntariamente das lojas.`,
`Prima Espaço ou clique em qualquer lugar para bater as asas. Guie o pássaro pelas aberturas entre os canos sem lhes tocar.`],
  ru: [
`Нажимайте, чтобы птица махала крыльями и пролетала через бесконечные промежутки между трубами. Каждое нажатие слегка поднимает птицу, а гравитация неумолимо тянет вниз.

Созданная вьетнамским разработчиком Донг Нгуеном в 2013 году, Flappy Bird стала мировым феноменом с доходом 50 000 долларов в день от рекламы, прежде чем создатель добровольно удалил её из магазинов.`,
`Нажмите Пробел или кликните, чтобы взмахнуть крыльями. Проведите птицу через промежутки между трубами, не касаясь их.`],
  sv: [
`Tryck för att flaxa med fågelns vingar och navigera genom en oändlig serie av rörmellanrum. Varje tryck lyfter fågeln något; gravitationen drar den obönhörligen tillbaka.

Skapad av den vietnamesiske utvecklaren Dong Nguyen 2013, blev Flappy Bird ett globalt fenomen som tjänade 50 000 dollar om dagen på reklam innan skaparen frivilligt tog bort det.`,
`Tryck på Mellanslag eller klicka var som helst för att flaxa. Vägled fågeln genom öppningarna utan att röra rören.`],
  th: [
`แตะเพื่อกระพือปีกนกและบินผ่านช่องว่างระหว่างท่อที่ไม่มีที่สิ้นสุด ทุกครั้งที่แตะนกจะลอยขึ้นเล็กน้อย แรงโน้มถ่วงดึงมันลงอย่างไม่ปรานี

สร้างโดยนักพัฒนาชาวเวียดนาม Dong Nguyen ในปี 2013 Flappy Bird กลายเป็นปรากฏการณ์ระดับโลกที่ทำรายได้จากโฆษณา 50,000 ดอลลาร์ต่อวัน ก่อนที่ผู้สร้างจะถอนออกจากสโตร์โดยสมัครใจ`,
`กดสเปซหรือคลิกที่ใดก็ได้เพื่อกระพือปีก นำทางนกผ่านช่องว่างระหว่างท่อโดยไม่แตะ`],
  tr: [
`Kuşun kanatlarını çırpmak için dokunun ve sonsuz boru aralıklarından geçin. Her dokunuş kuşu hafifçe kaldırır; yerçekimi onu acımasızca geri çeker.

2013'te Vietnamlı geliştirici Dong Nguyen tarafından yaratılan Flappy Bird, reklamlardan günde 50.000 dolar kazanan küresel bir fenomen haline geldi ve ardından yaratıcısı tarafından gönüllü olarak mağazalardan kaldırıldı.`,
`Kanatları çırpmak için Boşluk tuşuna basın veya herhangi bir yere tıklayın. Kuşu borular arasındaki boşluklardan dokunmadan yönlendirin.`],
  vi: [
`Chạm để vỗ cánh chim và bay qua chuỗi khe hở giữa các ống nước bất tận. Mỗi lần chạm nâng chim lên một chút; trọng lực kéo nó xuống không thương tiếc.

Được tạo bởi nhà phát triển Việt Nam Đông Nguyễn vào năm 2013, Flappy Bird trở thành hiện tượng toàn cầu kiếm 50.000 đô la mỗi ngày từ quảng cáo trước khi chính tác giả tự nguyện gỡ bỏ khỏi cửa hàng.`,
`Nhấn Phím cách hoặc nhấp bất kỳ đâu để vỗ cánh. Dẫn chim qua các khe hở giữa ống mà không chạm vào.`],
  'zh-CN': [
`点击让小鸟扇动翅膀，穿越无尽的管道缝隙。每次点击小鸟会微微上升，重力则无情地将它拉回。

由越南开发者阮河东于2013年创作，Flappy Bird成为全球现象，每天广告收入达5万美元，之后创作者自愿将其从商店下架。`,
`按空格键或点击任意位置扇动翅膀。引导小鸟穿过管道间的缝隙，不要碰到管道。`],
  'zh-TW': [
`點擊讓小鳥扇動翅膀，穿越無盡的管道縫隙。每次點擊小鳥會微微上升，重力則無情地將它拉回。

由越南開發者阮河東於2013年創作，Flappy Bird成為全球現象，每天廣告收入達5萬美元，之後創作者自願將其從商店下架。`,
`按空白鍵或點擊任意位置扇動翅膀。引導小鳥穿過管道間的縫隙，不要碰到管道。`],
},
};

// Apply translations
const locales = ['ar','de','es','fr','hi','id','it','ja','ko','nl','pl','pt','ru','sv','th','tr','vi','zh-CN','zh-TW'];

for (const loc of locales) {
  const fpath = `client/src/data/translations/${loc}.ts`;
  let content = readFileSync(fpath, 'utf8');
  let changes = 0;

  const onlineIdx = content.indexOf('// Online Games Collection');
  if (onlineIdx === -1) { console.log(`⚠️ ${loc}: no online section marker`); continue; }

  for (const [slug, langs] of Object.entries(T)) {
    if (!langs[loc]) continue;
    const [desc, ctrl] = langs[loc];

    const slugStr = `'${slug}'`;
    const slugIdx = content.indexOf(slugStr, onlineIdx);
    if (slugIdx === -1) { console.log(`⚠️ ${loc}/${slug}: not found`); continue; }

    // Replace description
    const descKeyIdx = content.indexOf('description:', slugIdx);
    if (descKeyIdx === -1 || descKeyIdx - slugIdx > 300) { console.log(`⚠️ ${loc}/${slug}: desc key not found`); continue; }
    const descOpenQuote = content.indexOf("'", descKeyIdx + 12);
    if (descOpenQuote === -1) continue;
    const descCloseQuote = findEndQuote(content, descOpenQuote);
    if (descCloseQuote === -1) { console.log(`⚠️ ${loc}/${slug}: desc end quote not found`); continue; }
    content = content.substring(0, descOpenQuote + 1) + esc(desc) + content.substring(descCloseQuote);

    // Re-find slug position after content shift
    const slugIdx2 = content.indexOf(slugStr, onlineIdx);
    const ctrlKeyIdx = content.indexOf('controls:', slugIdx2);
    if (ctrlKeyIdx === -1 || ctrlKeyIdx - slugIdx2 > 2000) { console.log(`⚠️ ${loc}/${slug}: ctrl key not found`); continue; }
    const ctrlOpenQuote = content.indexOf("'", ctrlKeyIdx + 9);
    if (ctrlOpenQuote === -1) continue;
    const ctrlCloseQuote = findEndQuote(content, ctrlOpenQuote);
    if (ctrlCloseQuote === -1) { console.log(`⚠️ ${loc}/${slug}: ctrl end quote not found`); continue; }
    content = content.substring(0, ctrlOpenQuote + 1) + esc(ctrl) + content.substring(ctrlCloseQuote);

    changes++;
  }

  writeFileSync(fpath, content);
  console.log(`✅ ${loc}: ${changes} games updated`);
}
console.log('Batch 1 done!');
