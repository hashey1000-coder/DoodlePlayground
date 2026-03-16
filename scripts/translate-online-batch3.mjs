#!/usr/bin/env node
// Batch 3: stack-tower, reaction-time, whack-a-mole, dots-and-boxes, reversi
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

const T = {
'stack-tower': {
  ar: [
`اضغط لقص وتكديس الكتل أثناء تأرجحها ذهاباً وإياباً. كل جزء بارز يُقطع ويضيّق منصتك. ما أقصى ارتفاع يمكنك بناؤه؟

تستغل Stack Tower رغبة الدماغ في الدقة والإيقاع، مما يخلق توتراً فورياً بحلقة بسيطة: تأرجح ← اضغط ← محاذاة.`,
`اضغط مسافة أو انقر لقص الكتلة المتحركة فوق البرج. كلما كانت المحاذاة أدق بقيت المنصة أعرض. كدّس أعلى ما يمكن.`],
  de: [
`Tippe, um die schwingenden Blöcke zu schneiden und zu stapeln. Jeder überstehende Teil wird abgeschnitten und verengt deine Plattform. Wie hoch kannst du bauen?

Stack Tower nutzt das Verlangen des Gehirns nach Präzision und Rhythmus und erzeugt sofortige Spannung mit einer einfachen Schleife: schwingen → tippen → ausrichten.`,
`Drücke Leertaste oder klicke, um den Block zu schneiden. Je genauer du ausrichtest, desto breiter bleibt die Plattform. Stapel so hoch wie möglich.`],
  es: [
`Toca para cortar y apilar bloques mientras se balancean de un lado a otro. Cada parte sobresaliente se corta, estrechando tu plataforma. ¿Qué tan alto puedes construir?

Stack Tower explota el anhelo del cerebro por la precisión y el ritmo, creando tensión instantánea con un bucle simple: balanceo → toque → alineación.`,
`Pulsa Espacio o haz clic para cortar el bloque en movimiento. Cuanto más precisa la alineación, más ancha queda la plataforma. Apila lo más alto posible.`],
  fr: [
`Appuyez pour couper et empiler les blocs qui oscillent de gauche à droite. Chaque partie débordante est tranchée, rétrécissant votre plateforme. Jusqu'où pouvez-vous construire ?

Stack Tower exploite le besoin de précision et de rythme du cerveau, créant une tension instantanée avec une boucle simple : oscillation → appui → alignement.`,
`Appuyez sur Espace ou cliquez pour couper le bloc en mouvement. Plus l'alignement est précis, plus la plateforme reste large. Empilez le plus haut possible.`],
  hi: [
`ब्लॉक आगे-पीछे झूलते समय उन्हें काटकर स्टैक करने के लिए टैप करें। हर बाहर निकला हिस्सा कट जाता है और आपका प्लेटफ़ॉर्म संकरा होता जाता है। कितनी ऊंचाई तक बना सकते हैं?

Stack Tower मस्तिष्क की सटीकता और लय की लालसा का फायदा उठाती है, एक सरल चक्र से तुरंत तनाव पैदा करती है: झूलना → टैप → संरेखित करना।`,
`स्पेस दबाएं या क्लिक करें ब्लॉक काटने के लिए। जितनी सटीक संरेखण, उतना चौड़ा प्लेटफ़ॉर्म। जितना ऊंचा हो सके स्टैक करें।`],
  id: [
`Ketuk untuk memotong dan menumpuk balok saat berayun bolak-balik. Setiap bagian yang menonjol dipotong dan mempersempit platform Anda. Seberapa tinggi Anda bisa membangun?

Stack Tower memanfaatkan keinginan otak akan presisi dan ritme, menciptakan ketegangan instan dengan loop sederhana: ayunan → ketuk → sejajarkan.`,
`Tekan Spasi atau klik untuk memotong balok yang bergerak. Semakin presisi penjajaran, semakin lebar platform tetap. Tumpuk setinggi mungkin.`],
  it: [
`Tocca per tagliare e impilare i blocchi mentre oscillano avanti e indietro. Ogni parte sporgente viene tagliata, restringendo la tua piattaforma. Quanto in alto puoi costruire?

Stack Tower sfrutta il desiderio del cervello di precisione e ritmo, creando tensione istantanea con un ciclo semplice: oscillazione → tocco → allineamento.`,
`Premi Spazio o clicca per tagliare il blocco in movimento. Più preciso l'allineamento, più larga resta la piattaforma. Impila il più in alto possibile.`],
  ja: [
`左右に揺れるブロックをタップして切り、積み上げましょう。はみ出した部分は切り落とされ、プラットフォームが狭くなっていきます。どこまで高く積めますか？

スタックタワーは脳の精密さとリズムへの渇望を利用し、シンプルなループで瞬時に緊張感を生み出します：揺れる → タップ → 合わせる。`,
`スペースキーまたはクリックでブロックを切断。正確に合わせるほどプラットフォームが広く保てます。できるだけ高く積みましょう。`],
  ko: [
`좌우로 흔들리는 블록을 탭하여 자르고 쌓으세요. 튀어나온 부분은 잘려나가 플랫폼이 좁아집니다. 얼마나 높이 쌓을 수 있을까요?

스택 타워는 뇌의 정밀함과 리듬에 대한 갈망을 이용하여, 단순한 루프로 즉각적인 긴장감을 만들어냅니다: 흔들기 → 탭 → 맞추기.`,
`스페이스바를 누르거나 클릭하여 블록을 자르세요. 정확하게 맞출수록 플랫폼이 넓게 유지됩니다. 최대한 높이 쌓으세요.`],
  nl: [
`Tik om de zwaaiende blokken te snijden en te stapelen. Elk uitstekend deel wordt afgesneden en je platform wordt smaller. Hoe hoog kun je bouwen?

Stack Tower maakt gebruik van het verlangen van de hersenen naar precisie en ritme en creëert direct spanning met een eenvoudige lus: zwaaien → tikken → uitlijnen.`,
`Druk op Spatie of klik om het bewegende blok te snijden. Hoe preciezer je uitlijnt, hoe breder het platform blijft. Stapel zo hoog mogelijk.`],
  pl: [
`Stuknij, aby ciąć i układać bloki, gdy kołyszą się w przód i w tył. Każda wystająca część zostaje obcięta, zwężając twoją platformę. Jak wysoko potrafisz zbudować?

Stack Tower wykorzystuje pragnienie mózgu do precyzji i rytmu, tworząc natychmiastowe napięcie prostą pętlą: kołysanie → stuknięcie → wyrównanie.`,
`Naciśnij Spację lub kliknij, aby ciąć ruchomy blok. Im dokładniejsze wyrównanie, tym szersza platforma. Układaj jak najwyżej.`],
  pt: [
`Toque para cortar e empilhar blocos enquanto eles oscilam de um lado para o outro. Cada parte saliente é cortada, estreitando a sua plataforma. Quão alto consegue construir?

Stack Tower explora o desejo do cérebro por precisão e ritmo, criando tensão instantânea com um ciclo simples: oscilar → tocar → alinhar.`,
`Prima Espaço ou clique para cortar o bloco em movimento. Quanto mais preciso o alinhamento, mais larga fica a plataforma. Empilhe o mais alto possível.`],
  ru: [
`Нажимайте, чтобы обрезать и складывать блоки, пока они раскачиваются. Каждая выступающая часть отсекается, сужая вашу платформу. Насколько высоко вы сможете построить?

Stack Tower использует стремление мозга к точности и ритму, создавая мгновенное напряжение простым циклом: качание → нажатие → выравнивание.`,
`Нажмите Пробел или кликните, чтобы обрезать блок. Чем точнее совпадение, тем шире остаётся платформа. Стройте как можно выше.`],
  sv: [
`Tryck för att klippa och stapla block medan de svänger fram och tillbaka. Varje överhäng skärs av och gör din plattform smalare. Hur högt kan du bygga?

Stack Tower utnyttjar hjärnans behov av precision och rytm och skapar omedelbar spänning med en enkel loop: sväng → tryck → rikta.`,
`Tryck Mellanslag eller klicka för att klippa det rörliga blocket. Ju mer precist du riktar, desto bredare förblir plattformen. Stapla så högt som möjligt.`],
  th: [
`แตะเพื่อตัดและวางบล็อกขณะที่มันแกว่งไปมา ส่วนที่ยื่นออกจะถูกตัดออกทำให้แท่นแคบลง คุณสร้างได้สูงแค่ไหน?

Stack Tower ใช้ประโยชน์จากความต้องการความแม่นยำและจังหวะของสมอง สร้างความตื่นเต้นทันทีด้วยลูปง่ายๆ: แกว่ง → แตะ → จัดแนว`,
`กดสเปซหรือคลิกเพื่อตัดบล็อกที่เคลื่อนที่ ยิ่งจัดแนวแม่นยำแท่นยิ่งกว้าง วางซ้อนให้สูงที่สุด`],
  tr: [
`Bloklar sallanırken kesip üst üste yığmak için dokunun. Her sarkan kısım kesilir ve platformunuz daralır. Ne kadar yükseğe inşa edebilirsiniz?

Stack Tower beynin hassasiyet ve ritim arzusunu kullanarak basit bir döngüyle anlık gerilim yaratır: sallan → dokun → hizala.`,
`Hareketli bloğu kesmek için Boşluk tuşuna basın veya tıklayın. Hizalama ne kadar hassas olursa platform o kadar geniş kalır. Mümkün olduğunca yükseğe yığın.`],
  vi: [
`Chạm để cắt và xếp chồng các khối khi chúng lắc qua lắc lại. Mỗi phần thừa bị cắt bỏ, làm hẹp nền tảng của bạn. Bạn có thể xây cao đến đâu?

Stack Tower khai thác khao khát chính xác và nhịp điệu của não bộ, tạo ra sự căng thẳng tức thì với vòng lặp đơn giản: lắc → chạm → căn chỉnh.`,
`Nhấn Phím cách hoặc nhấp để cắt khối đang di chuyển. Căn chỉnh càng chính xác, nền tảng càng rộng. Xếp cao nhất có thể.`],
  'zh-CN': [
`在方块左右摆动时点击来切割和堆叠。每个突出的部分都会被切掉，使你的平台越来越窄。你能建多高？

叠叠乐利用了大脑对精确和节奏的渴望，用简单的循环创造即时紧张感：摆动 → 点击 → 对齐。`,
`按空格键或点击来切割移动的方块。对齐越精确，平台就越宽。尽可能叠高。`],
  'zh-TW': [
`在方塊左右擺動時點擊來切割和堆疊。每個突出的部分都會被切掉，使你的平台越來越窄。你能建多高？

疊疊樂利用了大腦對精確和節奏的渴望，用簡單的循環創造即時緊張感：擺動 → 點擊 → 對齊。`,
`按空白鍵或點擊來切割移動的方塊。對齊越精確，平台就越寬。盡可能疊高。`],
},

'reaction-time': {
  ar: [
`عندما تتحول الشاشة إلى اللون الأخضر، انقر بأسرع ما يمكن! يُسجَّل وقت رد فعلك بالملي ثانية — طريقة علمية لاختبار ردود أفعالك.

متوسط وقت رد فعل الإنسان حوالي 250 ملي ثانية. الرياضيون المدربون يحققون حوالي 150 ملي ثانية. سائقو الفورمولا 1 يمكنهم الاستجابة في أقل من 100 ملي ثانية.`,
`انتظر حتى يتحول لون الشاشة من الأحمر إلى الأخضر ثم انقر بأسرع ما يمكن. يقيس المؤقت الوقت الدقيق بين تغيير اللون ونقرتك. لا تنقر قبل التغيير!`],
  de: [
`Wenn der Bildschirm grün wird, klicke so schnell du kannst! Deine Reaktionszeit wird in Millisekunden gemessen — ein wissenschaftlicher Weg, deine Reflexe zu testen.

Die durchschnittliche menschliche Reaktionszeit beträgt etwa 250 Millisekunden. Trainierte Sportler erreichen rund 150 ms. Formel-1-Fahrer können in unter 100 ms reagieren.`,
`Warte, bis der Bildschirm von Rot auf Grün wechselt, und klicke dann so schnell wie möglich. Der Timer misst die exakte Zeit zwischen dem Farbwechsel und deinem Klick. Klicke nicht zu früh!`],
  es: [
`¡Cuando la pantalla se ponga verde, haz clic lo más rápido que puedas! Tu tiempo de reacción se registra en milisegundos — una forma científica de medir tus reflejos.

El tiempo de reacción humano promedio es de unos 250 milisegundos. Los atletas entrenados promedian 150 ms. Los pilotos de Fórmula 1 pueden reaccionar en menos de 100 ms.`,
`Espera a que la pantalla cambie de rojo a verde y haz clic lo más rápido posible. El cronómetro mide el tiempo exacto entre el cambio de color y tu clic. ¡No hagas clic antes!`],
  fr: [
`Quand l'écran devient vert, cliquez aussi vite que possible ! Votre temps de réaction est enregistré en millisecondes — une façon scientifique de tester vos réflexes.

Le temps de réaction humain moyen est d'environ 250 millisecondes. Les athlètes entraînés atteignent environ 150 ms. Les pilotes de Formule 1 peuvent réagir en moins de 100 ms.`,
`Attendez que l'écran passe du rouge au vert, puis cliquez le plus vite possible. Le chrono mesure le temps exact entre le changement de couleur et votre clic. Ne cliquez pas trop tôt !`],
  hi: [
`जब स्क्रीन हरी हो जाए, जितनी तेज़ी से हो सके क्लिक करें! आपका प्रतिक्रिया समय मिलीसेकंड में दर्ज होता है — आपकी सजगता परखने का वैज्ञानिक तरीका।

मनुष्य का औसत प्रतिक्रिया समय लगभग 250 मिलीसेकंड है। प्रशिक्षित एथलीट लगभग 150ms पर होते हैं। फॉर्मूला 1 ड्राइवर 100ms से कम में प्रतिक्रिया कर सकते हैं।`,
`स्क्रीन का रंग लाल से हरा होने तक प्रतीक्षा करें, फिर जितनी जल्दी हो सके क्लिक करें। टाइमर रंग बदलने और आपके क्लिक के बीच का सटीक समय मापता है। पहले क्लिक न करें!`],
  id: [
`Saat layar berubah hijau, klik secepat mungkin! Waktu reaksi Anda dicatat dalam milidetik — cara ilmiah untuk menguji refleks Anda.

Waktu reaksi manusia rata-rata sekitar 250 milidetik. Atlet terlatih mencapai sekitar 150 ms. Pembalap Formula 1 bisa bereaksi dalam waktu kurang dari 100 ms.`,
`Tunggu layar berubah dari merah ke hijau, lalu klik secepat mungkin. Timer mengukur waktu tepat antara perubahan warna dan klik Anda. Jangan klik sebelum berubah!`],
  it: [
`Quando lo schermo diventa verde, clicca il più velocemente possibile! Il tuo tempo di reazione viene registrato in millisecondi — un modo scientifico per testare i tuoi riflessi.

Il tempo di reazione umano medio è di circa 250 millisecondi. Gli atleti allenati raggiungono circa 150 ms. I piloti di Formula 1 possono reagire in meno di 100 ms.`,
`Aspetta che lo schermo passi dal rosso al verde, poi clicca il più velocemente possibile. Il timer misura il tempo esatto tra il cambio di colore e il tuo clic. Non cliccare prima!`],
  ja: [
`画面が緑色に変わったら、できるだけ速くクリックしましょう！反応時間はミリ秒で記録されます — 反射神経を科学的に測定する方法です。

人間の平均反応時間は約250ミリ秒です。訓練されたアスリートは約150ms。F1ドライバーは100ms未満で反応することができます。`,
`画面が赤から緑に変わるのを待ち、できるだけ速くクリックしてください。タイマーは色の変化からクリックまでの正確な時間を計測します。早まってクリックしないでください！`],
  ko: [
`화면이 초록색으로 바뀌면 최대한 빨리 클릭하세요! 반응 시간이 밀리초 단위로 기록됩니다 — 반사 신경을 과학적으로 측정하는 방법입니다.

인간의 평균 반응 시간은 약 250밀리초입니다. 훈련된 운동선수는 약 150ms입니다. F1 드라이버는 100ms 미만으로 반응할 수 있습니다.`,
`화면이 빨간색에서 초록색으로 바뀔 때까지 기다린 후 최대한 빨리 클릭하세요. 타이머가 색상 변화와 클릭 사이의 정확한 시간을 측정합니다. 미리 클릭하지 마세요!`],
  nl: [
`Als het scherm groen wordt, klik zo snel als je kunt! Je reactietijd wordt gemeten in milliseconden — een wetenschappelijke manier om je reflexen te testen.

De gemiddelde menselijke reactietijd is ongeveer 250 milliseconden. Getrainde atleten halen rond de 150 ms. Formule 1-coureurs kunnen in minder dan 100 ms reageren.`,
`Wacht tot het scherm van rood naar groen verandert en klik dan zo snel mogelijk. De timer meet de exacte tijd tussen de kleurverandering en je klik. Klik niet te vroeg!`],
  pl: [
`Gdy ekran zmieni kolor na zielony, kliknij jak najszybciej! Twój czas reakcji jest rejestrowany w milisekundach — naukowy sposób na przetestowanie refleksu.

Średni czas reakcji człowieka wynosi około 250 milisekund. Wytrenowani sportowcy osiągają około 150 ms. Kierowcy Formuły 1 potrafią zareagować w mniej niż 100 ms.`,
`Poczekaj, aż ekran zmieni się z czerwonego na zielony, a następnie kliknij najszybciej jak potrafisz. Timer mierzy dokładny czas między zmianą koloru a twoim kliknięciem. Nie klikaj za wcześnie!`],
  pt: [
`Quando o ecrã ficar verde, clique o mais rápido que puder! O seu tempo de reação é registado em milissegundos — uma forma científica de testar os seus reflexos.

O tempo de reação humano médio é de cerca de 250 milissegundos. Atletas treinados atingem cerca de 150 ms. Pilotos de Fórmula 1 podem reagir em menos de 100 ms.`,
`Espere que o ecrã mude de vermelho para verde e clique o mais rápido possível. O cronómetro mede o tempo exato entre a mudança de cor e o seu clique. Não clique antes!`],
  ru: [
`Когда экран станет зелёным, нажмите как можно быстрее! Ваше время реакции записывается в миллисекундах — научный способ проверить рефлексы.

Среднее время реакции человека — около 250 миллисекунд. Тренированные спортсмены достигают примерно 150 мс. Пилоты Формулы-1 могут реагировать менее чем за 100 мс.`,
`Дождитесь смены цвета экрана с красного на зелёный, затем нажмите как можно быстрее. Таймер измеряет точное время между сменой цвета и вашим нажатием. Не нажимайте раньше!`],
  sv: [
`När skärmen blir grön, klicka så snabbt du kan! Din reaktionstid mäts i millisekunder — ett vetenskapligt sätt att testa dina reflexer.

Den genomsnittliga mänskliga reaktionstiden är ungefär 250 millisekunder. Tränade idrottare når omkring 150 ms. Formel 1-förare kan reagera på under 100 ms.`,
`Vänta tills skärmen ändras från röd till grön och klicka sedan så snabbt som möjligt. Timern mäter den exakta tiden mellan färgbytet och ditt klick. Klicka inte för tidigt!`],
  th: [
`เมื่อหน้าจอเปลี่ยนเป็นสีเขียว ให้คลิกเร็วที่สุดเท่าที่จะทำได้! เวลาปฏิกิริยาของคุณจะถูกบันทึกเป็นมิลลิวินาที — วิธีทางวิทยาศาสตร์ในการทดสอบรีเฟล็กซ์

เวลาปฏิกิริยาเฉลี่ยของมนุษย์อยู่ที่ประมาณ 250 มิลลิวินาที นักกีฬาที่ผ่านการฝึกเฉลี่ยประมาณ 150ms นักแข่ง F1 สามารถตอบสนองได้ภายใน 100ms`,
`รอจนหน้าจอเปลี่ยนจากแดงเป็นเขียว แล้วคลิกเร็วที่สุด ตัวจับเวลาวัดเวลาระหว่างการเปลี่ยนสีและการคลิก อย่าคลิกก่อนเปลี่ยนสี!`],
  tr: [
`Ekran yeşile döndüğünde en hızlı şekilde tıklayın! Tepki süreniz milisaniye cinsinden kaydedilir — reflekslerinizi test etmenin bilimsel bir yolu.

Ortalama insan tepki süresi yaklaşık 250 milisaniyedir. Eğitimli sporcular yaklaşık 150 ms'ye ulaşır. Formula 1 pilotları 100 ms'nin altında tepki verebilir.`,
`Ekranın kırmızıdan yeşile dönmesini bekleyin, sonra mümkün olduğunca hızlı tıklayın. Zamanlayıcı renk değişimi ile tıklamanız arasındaki süreyi ölçer. Erken tıklamayın!`],
  vi: [
`Khi màn hình chuyển sang xanh lá, hãy nhấp nhanh nhất có thể! Thời gian phản xạ được ghi lại bằng mili giây — cách khoa học để kiểm tra phản xạ của bạn.

Thời gian phản xạ trung bình của con người là khoảng 250 mili giây. Vận động viên được đào tạo đạt khoảng 150ms. Tay đua F1 có thể phản ứng trong dưới 100ms.`,
`Chờ màn hình chuyển từ đỏ sang xanh rồi nhấp nhanh nhất có thể. Bộ đếm đo thời gian chính xác giữa thay đổi màu và cú nhấp. Đừng nhấp trước khi đổi màu!`],
  'zh-CN': [
`当屏幕变绿时，尽快点击！你的反应时间以毫秒为单位记录——一种科学的反射测试方法。

人类平均反应时间约250毫秒。训练有素的运动员约150毫秒。F1赛车手可以在100毫秒以内做出反应。`,
`等待屏幕从红色变为绿色，然后尽快点击。计时器测量颜色变化和你点击之间的精确时间。不要提前点击！`],
  'zh-TW': [
`當螢幕變綠時，盡快點擊！你的反應時間以毫秒為單位記錄——一種科學的反射測試方法。

人類平均反應時間約250毫秒。訓練有素的運動員約150毫秒。F1賽車手可以在100毫秒以內做出反應。`,
`等待螢幕從紅色變為綠色，然後盡快點擊。計時器測量顏色變化和你點擊之間的精確時間。不要提前點擊！`],
},

'whack-a-mole': {
  ar: [
`تظهر الخلد من جحورها — اضرب أكبر عدد ممكن قبل أن تختبئ! مع كل مستوى تصبح أسرع ونوافذ الاستجابة تتقلص.

اخترعت Whac-A-Mole (اسمها الأصلي "Mogura Taiji") من قبل المطور الياباني TOGO عام 1975 ولا تزال عنصراً أساسياً في صالات الألعاب حول العالم.`,
`انقر أو اضغط على الخلد بمجرد ظهوره لضربه. كل ضربة ناجحة تسجل نقطة. اضرب أكبر عدد ممكن في 30 ثانية!`],
  de: [
`Maulwürfe tauchen aus ihren Löchern auf — schlage so viele wie möglich, bevor sie sich verstecken! Mit jedem Level werden die Maulwürfe schneller und die Reaktionsfenster kleiner.

Whac-A-Mole (ursprünglich „Mogura Taiji") wurde 1975 vom japanischen Entwickler TOGO erfunden und ist bis heute weltweit ein Arcade-Klassiker.`,
`Klicke oder tippe auf einen Maulwurf, sobald er auftaucht. Jeder Treffer gibt einen Punkt. Schlage so viele wie möglich in 30 Sekunden!`],
  es: [
`Los topos siguen asomándose por sus agujeros — ¡golpea tantos como puedas antes de que se escondan! Con cada nivel los topos son más rápidos y las ventanas de reacción se reducen.

Whac-A-Mole (originalmente "Mogura Taiji") fue inventado por el desarrollador japonés TOGO en 1975 y sigue siendo un clásico arcade en todo el mundo.`,
`Haz clic o toca un topo en cuanto asome para golpearlo. Cada golpe exitoso suma un punto. ¡Golpea tantos como puedas en 30 segundos!`],
  fr: [
`Les taupes sortent de leurs trous — frappez-en le plus possible avant qu'elles ne se cachent ! À chaque niveau, les taupes accélèrent et les fenêtres de réaction rétrécissent.

Whac-A-Mole (à l'origine « Mogura Taiji ») a été inventé par le développeur japonais TOGO en 1975 et reste un incontournable des salles d'arcade dans le monde entier.`,
`Cliquez ou tapez sur une taupe dès qu'elle sort pour la frapper. Chaque coup réussi marque un point. Frappez-en le plus possible en 30 secondes !`],
  hi: [
`छछूंदर अपने बिलों से बाहर निकलते रहते हैं — उन्हें छिपने से पहले जितने हो सके उतने मारें! हर स्तर पर वे तेज़ हो जाते हैं और प्रतिक्रिया का समय कम होता जाता है।

Whac-A-Mole (मूल नाम "Mogura Taiji") का आविष्कार 1975 में जापानी डेवलपर TOGO ने किया था और यह आज भी दुनिया भर में आर्केड का अभिन्न अंग है।`,
`छछूंदर दिखते ही क्लिक करें या टैप करें। हर सफल प्रहार एक अंक देता है। 30 सेकंड में जितने हो सके उतने मारें!`],
  id: [
`Tikus tanah terus muncul dari lubangnya — pukul sebanyak mungkin sebelum mereka bersembunyi! Setiap level, mereka semakin cepat dan jendela reaksi semakin sempit.

Whac-A-Mole (awalnya "Mogura Taiji") diciptakan oleh pengembang Jepang TOGO pada tahun 1975 dan tetap menjadi andalan arcade di seluruh dunia.`,
`Klik atau ketuk tikus tanah segera saat muncul untuk memukulnya. Setiap pukulan berhasil mendapat satu poin. Pukul sebanyak mungkin dalam 30 detik!`],
  it: [
`Le talpe continuano a spuntare dalle loro buche — colpiscine quante più puoi prima che si nascondano! Con ogni livello le talpe diventano più veloci e le finestre di reazione si riducono.

Whac-A-Mole (originariamente "Mogura Taiji") fu inventato dallo sviluppatore giapponese TOGO nel 1975 e rimane un classico delle sale giochi in tutto il mondo.`,
`Clicca o tocca una talpa appena spunta per colpirla. Ogni colpo riuscito vale un punto. Colpisci quante più talpe possibili in 30 secondi!`],
  ja: [
`モグラが穴から次々と顔を出します。隠れる前にできるだけ多く叩きましょう！レベルが上がるごとにモグラは速くなり、反応時間が短くなります。

モグラたたき（元の名前は「モグラ退治」）は1975年に日本のメーカーTOGOによって発明され、今も世界中のアーケードで定番のゲームです。`,
`モグラが出てきたらすぐにクリックまたはタップして叩きましょう。ヒットするたびに1ポイント。30秒でできるだけ多く叩きましょう！`],
  ko: [
`두더지가 구멍에서 계속 튀어나옵니다 — 숨기 전에 최대한 많이 때리세요! 레벨이 올라갈수록 두더지가 빨라지고 반응 시간이 줄어듭니다.

두더지 잡기(원래 이름 "모구라 타이지")는 1975년 일본 개발사 TOGO가 발명했으며, 전 세계 아케이드의 필수 게임으로 남아있습니다.`,
`두더지가 나오면 바로 클릭하거나 탭하여 때리세요. 성공할 때마다 1점. 30초 안에 최대한 많이 때리세요!`],
  nl: [
`Mollen duiken op uit hun holen — sla er zoveel mogelijk voordat ze zich verstoppen! Met elk level worden de mollen sneller en de reactievensters kleiner.

Whac-A-Mole (oorspronkelijk "Mogura Taiji") werd in 1975 uitgevonden door de Japanse ontwikkelaar TOGO en blijft wereldwijd een arcade-klassieker.`,
`Klik of tik op een mol zodra hij opduikt om hem te slaan. Elke geslaagde klap levert een punt op. Sla er zoveel mogelijk in 30 seconden!`],
  pl: [
`Krety wyskakują z nor — uderz jak najwięcej, zanim się schowają! Z każdym poziomem krety stają się szybsze, a okna reakcji się kurczą.

Whac-A-Mole (pierwotna nazwa „Mogura Taiji") został wynaleziony przez japońskiego producenta TOGO w 1975 roku i pozostaje klasykiem salonów gier na całym świecie.`,
`Kliknij lub stuknij kreta, gdy tylko się pojawi. Każde uderzenie to punkt. Uderz jak najwięcej w 30 sekund!`],
  pt: [
`As toupeiras não param de sair dos buracos — acerte o máximo que puder antes que se escondam! A cada nível ficam mais rápidas e as janelas de reação encolhem.

Whac-A-Mole (originalmente "Mogura Taiji") foi inventado pelo fabricante japonês TOGO em 1975 e continua a ser um clássico dos salões de jogos em todo o mundo.`,
`Clique ou toque numa toupeira assim que aparecer para acertá-la. Cada acerto vale um ponto. Acerte o máximo possível em 30 segundos!`],
  ru: [
`Кроты продолжают выпрыгивать из своих нор — бейте как можно больше, пока они не спрятались! С каждым уровнем кроты ускоряются, а окно реакции сужается.

Whac-A-Mole (первоначальное название «Mogura Taiji») была изобретена японским производителем TOGO в 1975 году и остаётся классикой аркадных залов по всему миру.`,
`Нажимайте на крота, как только он появится. Каждый удар — одно очко. Ударьте как можно больше за 30 секунд!`],
  sv: [
`Mullvadar poppar upp ur sina hål — slå så många du kan innan de gömmer sig! Med varje nivå blir mullvadarna snabbare och reaktionstiden kortare.

Whac-A-Mole (ursprungligen "Mogura Taiji") uppfanns av den japanska tillverkaren TOGO 1975 och är fortfarande en arkadklassiker världen över.`,
`Klicka eller tryck på en mullvad så fort den dyker upp. Varje lyckad träff ger en poäng. Slå så många som möjligt på 30 sekunder!`],
  th: [
`ตุ่นโผล่ขึ้นมาจากรู — ตีให้ได้มากที่สุดก่อนที่พวกมันจะหลบ! ทุกเลเวลตุ่นจะเร็วขึ้นและเวลาตอบสนองน้อยลง

Whac-A-Mole (ชื่อเดิม "Mogura Taiji") ถูกประดิษฐ์โดยผู้ผลิตญี่ปุ่น TOGO ในปี 1975 และยังคงเป็นเกมอาร์เคดยอดนิยมทั่วโลก`,
`คลิกหรือแตะตุ่นทันทีที่โผล่ ตีสำเร็จได้คะแนน ตีให้มากที่สุดใน 30 วินาที!`],
  tr: [
`Köstebekler deliklerinden çıkmaya devam ediyor — saklanmadan önce mümkün olduğunca çok vurun! Her seviyede köstebekler hızlanır ve tepki pencereleri daralır.

Whac-A-Mole (orijinal adı "Mogura Taiji") 1975'te Japon üretici TOGO tarafından icat edildi ve dünya genelinde arcade salonlarının vazgeçilmezi olmaya devam ediyor.`,
`Köstebek çıkar çıkmaz tıklayın veya dokunun. Her başarılı vuruş bir puan. 30 saniyede mümkün olduğunca çok vurun!`],
  vi: [
`Chuột chũi liên tục nhô ra từ hang — đập càng nhiều càng tốt trước khi chúng trốn! Mỗi màn chuột chũi nhanh hơn và thời gian phản ứng ngắn hơn.

Whac-A-Mole (tên gốc "Mogura Taiji") được nhà sản xuất Nhật Bản TOGO phát minh năm 1975 và vẫn là trò chơi arcade phổ biến trên toàn thế giới.`,
`Nhấp hoặc chạm chuột chũi ngay khi nó nhô lên. Mỗi cú đập thành công được một điểm. Đập nhiều nhất có thể trong 30 giây!`],
  'zh-CN': [
`地鼠不断从洞里冒出来——在它们躲起来之前尽可能多地打！每一关地鼠会更快，反应窗口会缩小。

打地鼠（原名"Mogura Taiji"）由日本制造商TOGO于1975年发明，至今仍是全球街机厅的经典游戏。`,
`地鼠一出现就点击或轻触来打它。每次成功击打得一分。在30秒内尽可能多打！`],
  'zh-TW': [
`地鼠不斷從洞裡冒出來——在牠們躲起來之前盡可能多地打！每一關地鼠會更快，反應窗口會縮小。

打地鼠（原名「Mogura Taiji」）由日本製造商TOGO於1975年發明，至今仍是全球街機廳的經典遊戲。`,
`地鼠一出現就點擊或輕觸來打牠。每次成功擊打得一分。在30秒內盡可能多打！`],
},

'dots-and-boxes': {
  ar: [
`تناوب في رسم خطوط بين النقاط. أكمل الضلع الرابع لصندوق لتحصل عليه وتلعب مرة إضافية. اللاعب الذي يحصل على أكثر صناديق يفوز.

اخترعت لعبة النقاط والصناديق على يد عالم الرياضيات الفرنسي إدوارد لوكاس عام 1889. رغم بساطتها الظاهرية، تمتلك بنية عميقة في نظرية الألعاب التوافقية.`,
`انقر بين نقطتين متجاورتين لرسم خط. إذا أكمل خطك صندوقاً تحصل عليه وتلعب مرة أخرى. احصل على صناديق أكثر من خصمك للفوز.`],
  de: [
`Zeichne abwechselnd Linien zwischen Punkten. Vervollständige die vierte Seite einer Box, um sie zu beanspruchen und erneut zu ziehen. Der Spieler mit den meisten Boxen gewinnt.

Käsekästchen wurde 1889 vom französischen Mathematiker Édouard Lucas erfunden. Trotz seines kindlichen Aussehens besitzt es eine tiefe kombinatorische Spieltheoretische Struktur.`,
`Klicke zwischen zwei benachbarte Punkte, um eine Linie zu zeichnen. Wenn deine Linie eine Box vervollständigt, gehört sie dir und du darfst erneut ziehen. Erobere mehr Boxen als dein Gegner.`],
  es: [
`Toma turnos dibujando líneas entre puntos. Completa el cuarto lado de una caja para reclamarla y jugar de nuevo. El jugador que reclame más cajas gana.

Puntos y Cajas fue inventado por el matemático francés Édouard Lucas en 1889. A pesar de su apariencia infantil, posee una profunda estructura de teoría de juegos combinatoria.`,
`Haz clic entre dos puntos adyacentes para dibujar una línea. Si tu línea completa una caja, la reclamas y juegas otra vez. Consigue más cajas que tu oponente para ganar.`],
  fr: [
`Dessinez tour à tour des lignes entre les points. Complétez le quatrième côté d'une boîte pour la revendiquer et rejouer. Le joueur qui capture le plus de boîtes gagne.

Pipopipette a été inventé par le mathématicien français Édouard Lucas en 1889. Malgré son apparence enfantine, il possède une structure profonde en théorie combinatoire des jeux.`,
`Cliquez entre deux points adjacents pour tracer une ligne. Si votre ligne complète une boîte, vous la capturez et rejouez. Capturez plus de boîtes que votre adversaire.`],
  hi: [
`बारी-बारी बिंदुओं के बीच रेखाएं खींचें। किसी बॉक्स का चौथा किनारा पूरा करें तो वह आपका होगा और आपकी एक और बारी मिलेगी। सबसे ज्यादा बॉक्स जीतने वाला विजेता।

डॉट्स एंड बॉक्सेज़ का आविष्कार फ्रांसीसी गणितज्ञ एदुआर्द लुकास ने 1889 में किया था। बचकाने रूप के बावजूद इसमें गहन संयोजक खेल सिद्धांत संरचना है।`,
`दो पड़ोसी बिंदुओं के बीच क्लिक करें रेखा खींचने के लिए। यदि आपकी रेखा बॉक्स का चौथा किनारा पूरा करती है तो वह आपका। विरोधी से ज़्यादा बॉक्स जीतें।`],
  id: [
`Bergantian menggambar garis antar titik. Lengkapi sisi keempat kotak untuk mengklaimnya dan bermain lagi. Pemain yang mengklaim kotak terbanyak menang.

Dots and Boxes diciptakan oleh matematikawan Prancis Édouard Lucas pada tahun 1889. Meski terlihat sederhana, permainan ini memiliki struktur teori permainan kombinatorik yang mendalam.`,
`Klik di antara dua titik yang berdekatan untuk menggambar garis. Jika garis Anda melengkapi kotak, Anda mengklaimnya dan bermain lagi. Klaim lebih banyak kotak dari lawan untuk menang.`],
  it: [
`A turno, disegnate linee tra i punti. Completate il quarto lato di una casella per conquistarla e giocare ancora. Il giocatore che conquista più caselle vince.

Dots and Boxes fu inventato dal matematico francese Édouard Lucas nel 1889. Nonostante l'aspetto infantile, possiede una profonda struttura di teoria dei giochi combinatoria.`,
`Cliccate tra due punti adiacenti per disegnare una linea. Se la linea completa una casella, la conquistate e giocate ancora. Conquistate più caselle dell'avversario.`],
  ja: [
`交互に点と点の間に線を引きます。ボックスの4辺目を完成させるとそのボックスを獲得し、もう一手番もらえます。最も多くのボックスを獲得したプレイヤーの勝利です。

ドット・アンド・ボックスは1889年にフランスの数学者エドゥアール・リュカによって発明されました。子供向けに見えて、実は深い組合せゲーム理論の構造を持っています。`,
`隣り合う2つの点の間をクリックして線を引きます。あなたの線でボックスが完成すればそれを獲得し、もう一度プレイできます。相手より多くのボックスを獲得しましょう。`],
  ko: [
`번갈아가며 점 사이에 선을 그으세요. 상자의 네 번째 변을 완성하면 그 상자를 차지하고 한 번 더 플레이합니다. 더 많은 상자를 차지한 플레이어가 승리합니다.

점과 상자는 1889년 프랑스 수학자 에두아르 뤼카가 발명했습니다. 어린이 게임처럼 보이지만 깊은 조합 게임 이론 구조를 가지고 있습니다.`,
`인접한 두 점 사이를 클릭하여 선을 그으세요. 선이 상자의 네 번째 변을 완성하면 차지하고 다시 플레이합니다. 상대보다 많은 상자를 차지하세요.`],
  nl: [
`Teken om de beurt lijnen tussen punten. Maak de vierde zijde van een doos af om hem te claimen en opnieuw te spelen. De speler met de meeste dozen wint.

Kamertje Verhuren werd in 1889 uitgevonden door de Franse wiskundige Édouard Lucas. Ondanks het kinderlijke uiterlijk heeft het een diepe combinatorische speltheoretische structuur.`,
`Klik tussen twee aangrenzende punten om een lijn te tekenen. Als je lijn een doos compleet maakt, claim je hem en speel je opnieuw. Claim meer dozen dan je tegenstander.`],
  pl: [
`Na zmianę rysujcie linie między kropkami. Dokończ czwarty bok pola, aby je przejąć i zagrać ponownie. Gracz, który przejmie więcej pól, wygrywa.

Kropki i kwadraty została wynaleziona przez francuskiego matematyka Édouarda Lucasa w 1889 roku. Pomimo dziecięcego wyglądu ma głęboką strukturę kombinatorycznej teorii gier.`,
`Kliknij między dwoma sąsiednimi kropkami, aby narysować linię. Jeśli twoja linia kończy pole, przejmujesz je i grasz ponownie. Przejmij więcej pól niż przeciwnik.`],
  pt: [
`Desenhem linhas à vez entre pontos. Complete o quarto lado de uma caixa para a reclamar e jogar novamente. O jogador com mais caixas ganha.

Pontos e Caixas foi inventado pelo matemático francês Édouard Lucas em 1889. Apesar da aparência infantil, possui uma profunda estrutura de teoria dos jogos combinatória.`,
`Clique entre dois pontos adjacentes para desenhar uma linha. Se a sua linha completar uma caixa, reclame-a e jogue novamente. Reclame mais caixas que o oponente para ganhar.`],
  ru: [
`По очереди рисуйте линии между точками. Завершите четвёртую сторону клетки, чтобы захватить её и сделать ещё один ход. Побеждает игрок с наибольшим числом клеток.

«Точки и клетки» была изобретена французским математиком Эдуаром Люка в 1889 году. Несмотря на детский вид, игра обладает глубокой структурой комбинаторной теории игр.`,
`Нажмите между двумя соседними точками, чтобы провести линию. Если линия завершает клетку — вы её захватываете и делаете ещё ход. Захватите больше клеток, чем соперник.`],
  sv: [
`Dra turvis linjer mellan punkter. Slutför den fjärde sidan av en ruta för att ta den och spela igen. Spelaren med flest rutor vinner.

Dots and Boxes uppfanns av den franske matematikern Édouard Lucas 1889. Trots sitt barnlika utseende har det en djup kombinatorisk spelteoristruktur.`,
`Klicka mellan två intilliggande punkter för att rita en linje. Om din linje avslutar en ruta tar du den och spelar igen. Ta fler rutor än din motståndare.`],
  th: [
`ผลัดกันลากเส้นระหว่างจุด ลากเส้นที่ทำให้กล่องครบสี่ด้านเพื่อครอบครองและเล่นอีกครั้ง ผู้เล่นที่ครอบครองกล่องมากที่สุดชนะ

Dots and Boxes ประดิษฐ์โดยนักคณิตศาสตร์ชาวฝรั่งเศส Édouard Lucas ในปี 1889 แม้จะดูเหมือนเกมเด็ก แต่มีโครงสร้างทฤษฎีเกมเชิงจัดหมู่ที่ลึกซึ้ง`,
`คลิกระหว่างจุดสองจุดที่อยู่ติดกันเพื่อลากเส้น ถ้าเส้นของคุณทำกล่องครบ คุณครอบครองมันและเล่นอีกครั้ง ครอบครองกล่องมากกว่าคู่แข่งเพื่อชนะ`],
  tr: [
`Sırayla noktalar arasına çizgiler çizin. Bir kutunun dördüncü kenarını tamamlayarak onu sahiplenin ve tekrar oynayın. En çok kutu sahiplenen oyuncu kazanır.

Dots and Boxes, 1889'da Fransız matematikçi Édouard Lucas tarafından icat edildi. Çocuksu görünümüne rağmen derin bir kombinatorik oyun teorisi yapısına sahiptir.`,
`İki komşu nokta arasına tıklayarak bir çizgi çizin. Çizginiz bir kutuyu tamamlarsa onu sahiplenirsiniz ve tekrar oynarsınız. Rakipten daha fazla kutu sahiplenin.`],
  vi: [
`Lần lượt vẽ đường giữa các điểm. Hoàn thành cạnh thứ tư của ô vuông để chiếm lấy và được chơi thêm lượt. Người chiếm nhiều ô hơn thắng.

Dots and Boxes được nhà toán học Pháp Édouard Lucas phát minh năm 1889. Dù trông đơn giản như trò chơi trẻ em, nó có cấu trúc lý thuyết trò chơi tổ hợp sâu sắc.`,
`Nhấp giữa hai điểm liền kề để vẽ đường. Nếu đường của bạn hoàn thành ô vuông, bạn chiếm nó và chơi thêm lượt. Chiếm nhiều ô hơn đối thủ để thắng.`],
  'zh-CN': [
`轮流在点之间画线。完成一个方格的第四条边来占领它并获得额外一轮。占领最多方格的玩家获胜。

点格棋由法国数学家爱德华·卢卡斯于1889年发明。尽管外表像儿童游戏，但它拥有深刻的组合博弈论结构。`,
`点击两个相邻的点之间画一条线。如果你的线完成了方格的第四条边，你就占领它并再玩一轮。占领比对手更多的方格来获胜。`],
  'zh-TW': [
`輪流在點之間畫線。完成一個方格的第四條邊來佔領它並獲得額外一輪。佔領最多方格的玩家獲勝。

點格棋由法國數學家愛德華·盧卡斯於1889年發明。儘管外表像兒童遊戲，但它擁有深刻的組合博弈論結構。`,
`點擊兩個相鄰的點之間畫一條線。如果你的線完成了方格的第四條邊，你就佔領它並再玩一輪。佔領比對手更多的方格來獲勝。`],
},

'reversi': {
  ar: [
`ضع أقراصاً على اللوحة وأحط قطع خصمك لقلبها إلى لونك. حركة واحدة يمكنها قلب صفوف وأعمدة كاملة — يمكن أن تتغير اللوحة بشكل جذري في بضعة أدوار.

اخترعت ريفرسي في إنجلترا عام 1883. النسخة الحديثة "أوثيلو" (1971) تحمل شعار "دقيقة لتعلمها، عمر لإتقانها".`,
`انقر على مربع صالح (يظهر بالأخضر) لوضع قرصك. الحركة صالحة فقط إذا أحاطت قرصاً واحداً على الأقل للخصم. كل الأقراص المحاطة تنقلب. صاحب الأكثر يفوز.`],
  de: [
`Setzt Steine auf das Brett und umzingelt die Steine eures Gegners, um sie in eure Farbe umzudrehen. Ein einziger Zug kann ganze Reihen und Spalten umdrehen — das Brett kann sich in wenigen Zügen völlig verändern.

Reversi wurde 1883 in England erfunden. Die moderne Othello-Version (1971) trägt den Slogan „Eine Minute zum Lernen, ein Leben zum Meistern".`,
`Klicke auf ein gültiges Feld (grün markiert), um deinen Stein zu setzen. Ein Zug ist nur gültig, wenn er mindestens einen gegnerischen Stein einschließt. Alle eingeschlossenen Steine werden umgedreht. Wer am Ende die meisten hat, gewinnt.`],
  es: [
`Coloca discos en el tablero y rodea las piezas de tu oponente para voltearlas a tu color. Un solo movimiento puede voltear filas y columnas enteras — el tablero puede cambiar drásticamente en pocos turnos.

Reversi fue inventado en Inglaterra en 1883. La versión moderna Othello (1971) lleva el lema "un minuto para aprender, toda una vida para dominar".`,
`Haz clic en un cuadrado válido (mostrado en verde) para colocar tu disco. Un movimiento solo es válido si rodea al menos un disco rival. Todos los discos rodeados se voltean. Gana quien tenga más al final.`],
  fr: [
`Placez des pions sur le plateau et entourez les pièces adverses pour les retourner à votre couleur. Un seul coup peut retourner des rangées et colonnes entières — le plateau peut basculer radicalement en quelques tours.

Le Reversi a été inventé en Angleterre en 1883. La version moderne Othello (1971) porte la devise « une minute pour apprendre, une vie pour maîtriser ».`,
`Cliquez sur une case valide (en vert) pour placer votre pion. Un coup n'est valide que s'il encadre au moins un pion adverse. Tous les pions encadrés sont retournés. Le joueur ayant le plus de pions gagne.`],
  hi: [
`बोर्ड पर डिस्क रखें और अपने प्रतिद्वंद्वी की डिस्क को घेरकर अपने रंग में पलटें। एक चाल पूरी पंक्तियों और कॉलमों को पलट सकती है — बोर्ड कुछ ही चालों में नाटकीय रूप से बदल सकता है।

रिवर्सी का आविष्कार 1883 में इंग्लैंड में हुआ था। आधुनिक ओथेलो संस्करण (1971) का नारा है "सीखने में एक मिनट, महारत हासिल करने में एक जीवन"।`,
`वैध वर्ग (हरे रंग में दिखाया गया) पर क्लिक करें अपनी डिस्क रखने के लिए। चाल तभी मान्य है जब वह कम से कम एक विरोधी डिस्क को घेरे। घेरी गई सभी डिस्क पलट जाती हैं। अंत में सबसे ज्यादा डिस्क वाला जीतता है।`],
  id: [
`Letakkan keping di papan dan kelilingi keping lawan untuk membaliknya ke warna Anda. Satu langkah bisa membalik seluruh baris dan kolom — papan bisa berubah drastis dalam beberapa giliran.

Reversi diciptakan di Inggris pada tahun 1883. Versi modern Othello (1971) mengusung tagline "semenit untuk dipelajari, seumur hidup untuk dikuasai".`,
`Klik kotak yang valid (ditampilkan hijau) untuk meletakkan keping Anda. Langkah valid hanya jika mengapit minimal satu keping lawan. Semua keping yang diapit dibalik. Yang paling banyak keping di akhir menang.`],
  it: [
`Piazzate dischi sulla scacchiera e circondare le pedine avversarie per ribaltarle al vostro colore. Una sola mossa può ribaltare intere righe e colonne — il tabellone può cambiare radicalmente in poche mosse.

Reversi fu inventato in Inghilterra nel 1883. La versione moderna Othello (1971) porta lo slogan "un minuto per imparare, una vita per padroneggiare".`,
`Cliccate su una casella valida (in verde) per piazzare il disco. Una mossa è valida solo se circonda almeno un disco avversario. Tutti i dischi circondati si ribaltano. Chi ha più dischi alla fine vince.`],
  ja: [
`ボードにディスクを置き、相手の駒を挟んで自分の色に裏返しましょう。一手で行と列全体が裏返ることもあり、数手で盤面が劇的に変化します。

リバーシは1883年にイギリスで発明されました。現代版のオセロ（1971年）は「覚えるのに1分、極めるのに一生」というキャッチフレーズで知られています。`,
`有効なマス（緑で表示）をクリックしてディスクを置きます。相手のディスクを少なくとも1つ挟む場合のみ有効です。挟まれたディスクはすべて裏返ります。最後にディスクが多い方が勝ちです。`],
  ko: [
`보드에 디스크를 놓고 상대방의 말을 둘러싸서 자신의 색으로 뒤집으세요. 한 수로 전체 행과 열이 뒤집힐 수 있어 판세가 몇 수 만에 급변합니다.

리버시는 1883년 영국에서 발명되었습니다. 현대 오셀로 버전(1971년)은 "배우는 데 1분, 마스터하는 데 평생"이라는 슬로건을 가지고 있습니다.`,
`유효한 칸(녹색 표시)을 클릭하여 디스크를 놓으세요. 상대 디스크를 최소 하나 둘러쌀 때만 유효합니다. 둘러싸인 디스크가 모두 뒤집힙니다. 마지막에 디스크가 많은 쪽이 승리합니다.`],
  nl: [
`Plaats schijven op het bord en omsingel de stukken van je tegenstander om ze naar jouw kleur om te draaien. Eén zet kan hele rijen en kolommen omdraaien — het bord kan in enkele beurten drastisch veranderen.

Reversi werd in 1883 in Engeland uitgevonden. De moderne Othello-versie (1971) draagt de slogan "een minuut om te leren, een leven lang om te beheersen".`,
`Klik op een geldig veld (groen gemarkeerd) om je schijf te plaatsen. Een zet is alleen geldig als het minstens één tegenstander omsingelt. Alle omsingelde schijven worden omgedraaid. Wie de meeste heeft, wint.`],
  pl: [
`Kładź krążki na planszy i otaczaj pionki przeciwnika, aby odwrócić je na swój kolor. Jeden ruch może odwrócić całe rzędy i kolumny — plansza może się dramatycznie zmienić w kilka tur.

Reversi zostało wynalezione w Anglii w 1883 roku. Współczesna wersja Othello (1971) nosi hasło „minuta, by się nauczyć, życie, by opanować".`,
`Kliknij na prawidłowe pole (zaznaczone na zielono), aby położyć krążek. Ruch jest prawidłowy tylko jeśli otacza co najmniej jeden pionek przeciwnika. Otoczone pionki są odwracane. Kto ma więcej na końcu, wygrywa.`],
  pt: [
`Coloque discos no tabuleiro e rodeie as peças do adversário para as virar para a sua cor. Uma jogada pode virar linhas e colunas inteiras — o tabuleiro pode mudar drasticamente em poucos turnos.

Reversi foi inventado em Inglaterra em 1883. A versão moderna Othello (1971) tem o lema "um minuto para aprender, uma vida para dominar".`,
`Clique num quadrado válido (a verde) para colocar o seu disco. Uma jogada só é válida se rodear pelo menos um disco adversário. Todos os discos rodeados são virados. Quem tiver mais discos no final ganha.`],
  ru: [
`Ставьте фишки на доску и окружайте фишки соперника, чтобы перевернуть их в свой цвет. Один ход может перевернуть целые ряды и столбцы — доска может кардинально измениться за несколько ходов.

Реверси была изобретена в Англии в 1883 году. Современная версия Отелло (1971) носит слоган «минута чтобы научиться, жизнь чтобы освоить».`,
`Нажмите на допустимую клетку (отмечена зелёным), чтобы поставить фишку. Ход допустим, только если он окружает хотя бы одну фишку соперника. Все окружённые фишки переворачиваются. У кого больше фишек в конце — тот победил.`],
  sv: [
`Placera brickor på brädet och omringa motståndarens pjäser för att vända dem till din färg. Ett drag kan vända hela rader och kolumner — brädet kan förändras dramatiskt på bara några drag.

Reversi uppfanns i England 1883. Den moderna Othello-versionen (1971) bär sloganen "en minut att lära sig, ett liv att bemästra".`,
`Klicka på en giltig ruta (visas i grönt) för att placera din bricka. Ett drag är bara giltigt om det omringar minst en motståndarbricka. Alla omringade brickor vänds. Den med flest brickor i slutet vinner.`],
  th: [
`วางดิสก์บนกระดานและล้อมชิ้นส่วนของคู่แข่งเพื่อพลิกเป็นสีของคุณ การเดินหนึ่งครั้งอาจพลิกทั้งแถวและคอลัมน์ — กระดานอาจเปลี่ยนแปลงอย่างมากในไม่กี่ตา

Reversi ถูกประดิษฐ์ในอังกฤษในปี 1883 เวอร์ชันสมัยใหม่ Othello (1971) มีสโลแกนว่า "เรียนนาทีเดียว ฝึกฝนตลอดชีวิต"`,
`คลิกช่องที่ถูกต้อง (แสดงเป็นสีเขียว) เพื่อวางดิสก์ การเดินถูกต้องเมื่อล้อมดิสก์คู่แข่งอย่างน้อยหนึ่งตัว ดิสก์ที่ถูกล้อมจะพลิก ใครมีมากกว่าเมื่อจบเกมชนะ`],
  tr: [
`Tahtaya diskler yerleştirin ve rakibin taşlarını çevirerek kendi renginize dönüştürmek için kuşatın. Tek bir hamle tüm satır ve sütunları çevirebilir — tahta birkaç turda kökten değişebilir.

Reversi 1883'te İngiltere'de icat edildi. Modern Othello versiyonu (1971) "öğrenmesi bir dakika, ustalaşması bir ömür" sloganını taşır.`,
`Geçerli bir kareye (yeşil gösterilen) tıklayarak diskinizi yerleştirin. Hamle yalnızca en az bir rakip diski kuşatıyorsa geçerlidir. Kuşatılan tüm diskler çevrilir. Sonunda en çok diske sahip olan kazanır.`],
  vi: [
`Đặt quân cờ lên bàn và bao vây quân đối thủ để lật chúng sang màu của bạn. Một nước đi có thể lật cả hàng và cột — bàn cờ có thể thay đổi chóng mặt chỉ trong vài lượt.

Reversi được phát minh tại Anh năm 1883. Phiên bản hiện đại Othello (1971) mang khẩu hiệu "một phút để học, cả đời để thành thạo".`,
`Nhấp vào ô hợp lệ (hiển thị xanh) để đặt quân. Nước đi chỉ hợp lệ khi bao vây ít nhất một quân đối thủ. Tất cả quân bị bao vây sẽ bị lật. Ai có nhiều quân hơn khi kết thúc sẽ thắng.`],
  'zh-CN': [
`在棋盘上放置棋子，包围对手的棋子将其翻转为你的颜色。一步棋可以翻转整行整列——棋盘在几步之内就能发生翻天覆地的变化。

黑白棋于1883年在英格兰发明。现代奥赛罗版本（1971年）的口号是"一分钟学会，一辈子精通"。`,
`点击有效的格子（绿色显示）放置棋子。只有当你的棋子能包围至少一个对手棋子时才有效。所有被包围的棋子都会翻转。最终棋子最多的一方获胜。`],
  'zh-TW': [
`在棋盤上放置棋子，包圍對手的棋子將其翻轉為你的顏色。一步棋可以翻轉整行整列——棋盤在幾步之內就能發生翻天覆地的變化。

黑白棋於1883年在英格蘭發明。現代奧賽羅版本（1971年）的口號是「一分鐘學會，一輩子精通」。`,
`點擊有效的格子（綠色顯示）放置棋子。只有當你的棋子能包圍至少一個對手棋子時才有效。所有被包圍的棋子都會翻轉。最終棋子最多的一方獲勝。`],
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

    const descKeyIdx = content.indexOf('description:', slugIdx);
    if (descKeyIdx === -1 || descKeyIdx - slugIdx > 300) { console.log(`⚠️ ${loc}/${slug}: desc key not found`); continue; }
    const descOpenQuote = content.indexOf("'", descKeyIdx + 12);
    if (descOpenQuote === -1) continue;
    const descCloseQuote = findEndQuote(content, descOpenQuote);
    if (descCloseQuote === -1) { console.log(`⚠️ ${loc}/${slug}: desc end quote not found`); continue; }
    content = content.substring(0, descOpenQuote + 1) + esc(desc) + content.substring(descCloseQuote);

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
console.log('Batch 3 done! All 15 games translated.');
