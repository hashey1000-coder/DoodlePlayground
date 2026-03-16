#!/usr/bin/env node
// Batch 2: space-invaders-online, asteroids, frogger, galaga, brick-breaker
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
'space-invaders-online': {
  ar: [
`دافع عن الأرض من موجات الغزاة الفضائيين المتنازلين. حرّك مدفعك الليزري ودمّر الغزاة قبل أن يصلوا إلى الأرض.

ابتكرها تومهيرو نيشيكادو عام 1978، وتسبب Space Invaders في نقص وطني في عملات الـ 100 ين في اليابان بسبب شعبيتها الهائلة.`,
`استخدم ← → لتحريك مدفعك. اضغط مسافة لإطلاق النار. دمّر جميع الغزاة قبل وصولهم للأسفل. الأطباق الطائرة تمنح نقاطاً إضافية.`],
  de: [
`Verteidige die Erde gegen Wellen herabsteigender Alien-Invasoren. Bewege deine Laserkanone und zerstöre die Aliens, bevor sie den Boden erreichen.

Entwickelt von Tomohiro Nishikado im Jahr 1978, verursachte Space Invaders in Japan einen landesweiten Mangel an 100-Yen-Münzen wegen seiner enormen Popularität.`,
`Benutze ← → um deine Kanone zu bewegen. Drücke Leertaste zum Schießen. Zerstöre alle Aliens, bevor sie unten ankommen. UFOs bringen Bonuspunkte.`],
  es: [
`Defiende la Tierra de oleadas de invasores alienígenas descendentes. Mueve tu cañón láser y destruye a los alienígenas antes de que lleguen al suelo.

Creado por Tomohiro Nishikado en 1978, Space Invaders causó una escasez nacional de monedas de 100 yenes en Japón debido a su enorme popularidad.`,
`Usa ← → para mover tu cañón. Pulsa Espacio para disparar. Destruye todos los alienígenas antes de que lleguen abajo. Los OVNIs dan puntos extra.`],
  fr: [
`Défendez la Terre contre des vagues d'envahisseurs extraterrestres descendant du ciel. Déplacez votre canon laser et détruisez les aliens avant qu'ils n'atteignent le sol.

Créé par Tomohiro Nishikado en 1978, Space Invaders a provoqué une pénurie nationale de pièces de 100 yens au Japon en raison de son immense popularité.`,
`Utilisez ← → pour déplacer votre canon. Appuyez sur Espace pour tirer. Détruisez tous les aliens avant qu'ils n'atteignent le bas. Les OVNIs rapportent des points bonus.`],
  hi: [
`उतरते हुए एलियन आक्रमणकारियों की लहरों से पृथ्वी की रक्षा करें। अपने लेज़र कैनन को हिलाएं और एलियंस को ज़मीन पर पहुंचने से पहले नष्ट करें।

1978 में तोमोहिरो निशिकाडो द्वारा बनाया गया, Space Invaders ने अपनी अपार लोकप्रियता के कारण जापान में 100-येन के सिक्कों की राष्ट्रीय कमी पैदा कर दी।`,
`← → से कैनन हिलाएं। स्पेस दबाकर फायर करें। सभी एलियंस को नीचे पहुंचने से पहले नष्ट करें। UFO बोनस अंक देते हैं।`],
  id: [
`Pertahankan Bumi dari gelombang penjajah alien yang turun dari atas. Gerakkan meriam laser Anda dan hancurkan alien sebelum mereka mencapai tanah.

Diciptakan oleh Tomohiro Nishikado pada tahun 1978, Space Invaders menyebabkan kekurangan koin 100 yen secara nasional di Jepang karena popularitasnya yang luar biasa.`,
`Gunakan ← → untuk menggerakkan meriam. Tekan Spasi untuk menembak. Hancurkan semua alien sebelum mencapai bawah. UFO memberikan poin bonus.`],
  it: [
`Difendi la Terra dalle ondate di invasori alieni in discesa. Muovi il tuo cannone laser e distruggi gli alieni prima che raggiungano il suolo.

Creato da Tomohiro Nishikado nel 1978, Space Invaders provocò una carenza nazionale di monete da 100 yen in Giappone per la sua enorme popolarità.`,
`Usa ← → per muovere il cannone. Premi Spazio per sparare. Distruggi tutti gli alieni prima che raggiungano il fondo. Gli UFO danno punti bonus.`],
  ja: [
`降下してくるエイリアンの波から地球を守りましょう。レーザー砲を動かしてエイリアンが地面に到達する前に撃破してください。

1978年に西角友宏によって制作されたスペースインベーダーは、日本で100円硬貨の全国的な不足を引き起こすほどの大ヒットとなりました。`,
`← →でキャノンを移動。スペースキーで発射。すべてのエイリアンを撃破しましょう。UFOを撃つとボーナスポイント獲得。`],
  ko: [
`내려오는 외계인 침략자들의 물결로부터 지구를 방어하세요. 레이저 포를 이동시켜 외계인이 땅에 닿기 전에 격파하세요.

1978년 니시카도 토모히로가 만든 스페이스 인베이더는 엄청난 인기로 일본에서 100엔 동전 부족 사태를 일으켰습니다.`,
`← →로 포를 이동하세요. 스페이스바로 발사하세요. 모든 외계인이 바닥에 닿기 전에 격파하세요. UFO를 맞추면 보너스 점수를 얻습니다.`],
  nl: [
`Verdedig de aarde tegen golven van dalende buitenaardse indringers. Beweeg je laserkanon en vernietig de aliens voordat ze de grond bereiken.

Ontwikkeld door Tomohiro Nishikado in 1978, veroorzaakte Space Invaders een landelijk tekort aan 100-yenmunten in Japan door zijn enorme populariteit.`,
`Gebruik ← → om je kanon te bewegen. Druk op Spatie om te schieten. Vernietig alle aliens voordat ze beneden aankomen. UFO's geven bonuspunten.`],
  pl: [
`Broń Ziemi przed falami kosmicznych najeźdźców schodzących z nieba. Poruszaj swoim działem laserowym i zniszcz obcych, zanim dotrą do ziemi.

Stworzony przez Tomohiro Nishikado w 1978 roku, Space Invaders spowodował ogólnokrajowy niedobór monet 100-jenowych w Japonii z powodu swojej ogromnej popularności.`,
`Użyj ← → do poruszania działem. Naciśnij Spację, aby strzelać. Zniszcz wszystkich obcych, zanim dotrą na dół. UFO dają punkty bonusowe.`],
  pt: [
`Defenda a Terra contra ondas de invasores alienígenas em descida. Mova o seu canhão laser e destrua os alienígenas antes que cheguem ao solo.

Criado por Tomohiro Nishikado em 1978, Space Invaders causou uma escassez nacional de moedas de 100 ienes no Japão devido à sua enorme popularidade.`,
`Use ← → para mover o canhão. Prima Espaço para disparar. Destrua todos os alienígenas antes que cheguem em baixo. Os OVNIs dão pontos bónus.`],
  ru: [
`Защитите Землю от волн инопланетных захватчиков, спускающихся с неба. Перемещайте лазерную пушку и уничтожайте пришельцев, пока они не достигли земли.

Созданная Томохиро Нишикадо в 1978 году, Space Invaders вызвала национальный дефицит 100-иеновых монет в Японии из-за своей невероятной популярности.`,
`Используйте ← → для перемещения пушки. Пробел — выстрел. Уничтожьте всех пришельцев до того, как они достигнут низа. НЛО приносят бонусные очки.`],
  sv: [
`Försvara jorden mot vågor av utomjordiska invasörer som stiger ned. Flytta din laserkanon och förstör utomjordingarna innan de når marken.

Skapad av Tomohiro Nishikado 1978, orsakade Space Invaders en nationell brist på 100-yenmynt i Japan på grund av sin enorma popularitet.`,
`Använd ← → för att flytta kanonen. Tryck Mellanslag för att skjuta. Förstör alla utomjordingar innan de når botten. UFO:n ger bonuspoäng.`],
  th: [
`ปกป้องโลกจากคลื่นผู้รุกรานจากอวกาศที่บุกลงมา เลื่อนปืนเลเซอร์ของคุณและทำลายเอเลี่ยนก่อนที่พวกมันจะถึงพื้น

สร้างโดย Tomohiro Nishikado ในปี 1978 Space Invaders ทำให้เกิดปัญหาขาดแคลนเหรียญ 100 เยนทั่วประเทศญี่ปุ่นเนื่องจากความนิยมอย่างล้นหลาม`,
`ใช้ ← → เพื่อเลื่อนปืน กดสเปซเพื่อยิง ทำลายเอเลี่ยนทั้งหมดก่อนถึงด้านล่าง UFO ให้คะแนนโบนัส`],
  tr: [
`Dünya'yı alçalan uzaylı istilacı dalgalarından koruyun. Lazer topunuzu hareket ettirin ve uzaylıları yere ulaşmadan yok edin.

1978'de Tomohiro Nishikado tarafından yaratılan Space Invaders, muazzam popülaritesi nedeniyle Japonya'da 100 yenlik madeni para sıkıntısına neden oldu.`,
`← → ile topunuzu hareket ettirin. Ateş etmek için Boşluk tuşuna basın. Tüm uzaylıları alta ulaşmadan yok edin. UFO'lar bonus puan verir.`],
  vi: [
`Bảo vệ Trái Đất khỏi các đợt quân xâm lược ngoài hành tinh đang hạ xuống. Di chuyển khẩu pháo laser và tiêu diệt chúng trước khi chạm đất.

Được tạo bởi Tomohiro Nishikado vào năm 1978, Space Invaders đã gây ra tình trạng thiếu hụt đồng xu 100 yên trên toàn nước Nhật do sự phổ biến vượt bậc.`,
`Dùng ← → để di chuyển pháo. Nhấn Phím cách để bắn. Tiêu diệt tất cả quân địch trước khi chúng chạm đáy. UFO cho điểm thưởng.`],
  'zh-CN': [
`保卫地球，抵御一波波从天而降的外星入侵者。移动你的激光炮，在外星人到达地面之前将其消灭。

由西角友宏于1978年创作，太空侵略者因其巨大的人气在日本造成了全国性的100日元硬币短缺。`,
`用 ← → 移动炮台。按空格键射击。在外星人到达底部之前消灭它们。击中UFO可获得奖励分数。`],
  'zh-TW': [
`保衛地球，抵禦一波波從天而降的外星入侵者。移動你的雷射砲，在外星人到達地面之前將其消滅。

由西角友宏於1978年創作，太空侵略者因其巨大的人氣在日本造成了全國性的100日圓硬幣短缺。`,
`用 ← → 移動砲台。按空白鍵射擊。在外星人到達底部之前消滅它們。擊中UFO可獲得獎勵分數。`],
},

'asteroids': {
  ar: [
`قُد سفينتك الفضائية عبر حقل من الكويكبات المتدحرجة ودمّرها إلى شظايا أصغر فأصغر. تفادَ الحطام واحذر من الصحون الطائرة المعادية.

ابتكرتها Atari عام 1979، وكانت Asteroids أكثر خزانة آركيد مبيعاً لديهم بأكثر من 70,000 وحدة حول العالم.`,
`← → للدوران، ↑ للدفع وسبيس للإطلاق. الكويكبات الكبيرة تنقسم إلى متوسطة ثم صغيرة. تفادَ الصحون الطائرة.`],
  de: [
`Steuere dein Raumschiff durch ein Feld taumelnder Asteroiden und zerstöre sie in immer kleinere Fragmente. Weiche den Trümmern aus und achte auf feindliche Untertassen.

Entwickelt von Atari im Jahr 1979, war Asteroids mit über 70.000 verkauften Einheiten deren meistverkaufter Spielautomat weltweit.`,
`← → zum Drehen, ↑ zum Beschleunigen und Leertaste zum Schießen. Große Asteroiden teilen sich in mittlere, dann kleine. Weiche fliegenden Untertassen aus.`],
  es: [
`Pilota tu nave espacial a través de un campo de asteroides giratorios, destruyéndolos en fragmentos cada vez más pequeños. Esquiva los escombros y vigila los platillos enemigos.

Creado por Atari en 1979, Asteroids fue su máquina recreativa más vendida con más de 70.000 unidades en todo el mundo.`,
`← → para girar, ↑ para propulsar y Espacio para disparar. Los asteroides grandes se dividen en medianos y luego en pequeños. Esquiva los platillos voladores.`],
  fr: [
`Pilotez votre vaisseau à travers un champ d'astéroïdes en rotation et détruisez-les en fragments de plus en plus petits. Esquivez les débris et méfiez-vous des soucoupes ennemies.

Créé par Atari en 1979, Asteroids fut leur borne d'arcade la plus vendue avec plus de 70 000 unités dans le monde.`,
`← → pour pivoter, ↑ pour accélérer et Espace pour tirer. Les gros astéroïdes se divisent en moyens puis petits. Esquivez les soucoupes.`],
  hi: [
`अपने अंतरिक्ष यान को घूमते क्षुद्रग्रहों के बीच से गुजारें और उन्हें छोटे-छोटे टुकड़ों में तोड़ें। मलबे से बचें और दुश्मन उड़न तश्तरियों पर नज़र रखें।

1979 में Atari द्वारा बनाया गया, Asteroids दुनिया भर में 70,000 से अधिक इकाइयों के साथ उनकी सबसे अधिक बिकने वाली आर्केड कैबिनेट थी।`,
`← → घूमने के लिए, ↑ आगे बढ़ने के लिए और स्पेस गोली चलाने के लिए। बड़े क्षुद्रग्रह मध्यम फिर छोटे में बंटते हैं।`],
  id: [
`Kemudikan pesawat luar angkasa Anda melewati ladang asteroid yang berputar dan hancurkan menjadi pecahan yang semakin kecil. Hindari puing dan waspadai piring terbang musuh.

Dibuat oleh Atari pada tahun 1979, Asteroids menjadi kabinet arcade terlaris mereka dengan lebih dari 70.000 unit di seluruh dunia.`,
`← → untuk berputar, ↑ untuk mendorong dan Spasi untuk menembak. Asteroid besar pecah menjadi sedang lalu kecil. Hindari piring terbang.`],
  it: [
`Pilota la tua astronave attraverso un campo di asteroidi rotanti, distruggendoli in frammenti sempre più piccoli. Schiva i detriti e fai attenzione ai dischi volanti nemici.

Creato da Atari nel 1979, Asteroids fu il loro cabinet arcade più venduto con oltre 70.000 unità in tutto il mondo.`,
`← → per ruotare, ↑ per accelerare e Spazio per sparare. Gli asteroidi grandi si dividono in medi e poi piccoli. Schiva i dischi volanti.`],
  ja: [
`宇宙船を操縦し、回転する小惑星群を破壊してより小さな破片にしましょう。デブリをかわし、敵のUFOに注意してください。

1979年にAtariが制作したアステロイドは、世界中で7万台以上を販売した同社最大のヒットアーケードゲームでした。`,
`← →で回転、↑で推進、スペースキーで発射。大きな小惑星は中→小に分裂します。UFOをかわしましょう。`],
  ko: [
`우주선을 조종하여 회전하는 소행성들을 점점 작은 파편으로 파괴하세요. 잔해를 피하고 적 비행접시를 조심하세요.

1979년 아타리가 제작한 애스터로이드는 전 세계 7만 대 이상 판매된 최고 인기 아케이드 캐비닛이었습니다.`,
`← →로 회전, ↑로 추진, 스페이스바로 발사. 큰 소행성은 중간→작은 크기로 분열됩니다. 비행접시를 피하세요.`],
  nl: [
`Bestuur je ruimteschip door een veld van ronddraaiende asteroïden en vernietig ze in steeds kleinere brokstukken. Ontwijkpuin en let op vijandige vliegende schotels.

Gemaakt door Atari in 1979, was Asteroids hun bestverkochte speelautomaat met meer dan 70.000 eenheden wereldwijd.`,
`← → om te draaien, ↑ om gas te geven en Spatie om te schieten. Grote asteroïden splitsen in middelgrote en dan kleine. Ontwijkvliegende schotels.`],
  pl: [
`Pilotuj swój statek kosmiczny przez pole wirujących asteroid i niszcz je na coraz mniejsze fragmenty. Unikaj odłamków i uważaj na wrogie spodki.

Stworzona przez Atari w 1979 roku, Asteroids była ich najlepiej sprzedającym się automatem arcade z ponad 70 000 jednostkami na całym świecie.`,
`← → do obrotu, ↑ do napędu i Spacja do strzału. Duże asteroidy dzielą się na średnie, potem małe. Unikaj latających spodków.`],
  pt: [
`Pilote a sua nave espacial por um campo de asteróides em rotação, destruindo-os em fragmentos cada vez menores. Desvie dos destroços e cuidado com os discos voadores inimigos.

Criado pela Atari em 1979, Asteroids foi o seu arcade mais vendido com mais de 70.000 unidades em todo o mundo.`,
`← → para rodar, ↑ para acelerar e Espaço para disparar. Asteróides grandes dividem-se em médios e depois pequenos. Desvie dos discos voadores.`],
  ru: [
`Управляйте космическим кораблём через поле вращающихся астероидов, разрушая их на всё более мелкие осколки. Уклоняйтесь от обломков и остерегайтесь вражеских тарелок.

Созданная Atari в 1979 году, Asteroids стала их самым продаваемым аркадным автоматом — более 70 000 экземпляров по всему миру.`,
`← → для поворота, ↑ для ускорения, Пробел для стрельбы. Большие астероиды делятся на средние, затем малые. Уклоняйтесь от тарелок.`],
  sv: [
`Styr ditt rymdskepp genom ett fält av snurrande asteroider och förstör dem till allt mindre bitar. Undvik skräp och se upp för fientliga flygande tefat.

Skapat av Atari 1979, var Asteroids deras bästsäljande arkadmaskin med över 70 000 sålda enheter världen över.`,
`← → för att rotera, ↑ för att gasa och Mellanslag för att skjuta. Stora asteroider delas i medelstora sedan små. Undvik flygande tefat.`],
  th: [
`บังคับยานอวกาศผ่านสนามดาวเคราะห์น้อยที่หมุนวน ทำลายพวกมันให้เป็นเศษเล็กลงเรื่อยๆ หลบเศษซากและระวังจานบินศัตรู

สร้างโดย Atari ในปี 1979 Asteroids เป็นตู้อาร์เคดขายดีที่สุดของพวกเขาด้วยยอดขายกว่า 70,000 เครื่องทั่วโลก`,
`← → หมุน ↑ เร่งเครื่อง สเปซยิง ดาวเคราะห์น้อยใหญ่แตกเป็นกลางแล้วเล็ก หลบจานบิน`],
  tr: [
`Uzay gemisini dönen asteroit alanında yönlendirin ve onları giderek küçülen parçalara ayırın. Enkazdan kaçının ve düşman uçan dairelerine dikkat edin.

1979'da Atari tarafından yaratılan Asteroids, dünya genelinde 70.000'den fazla satışla en çok satan arcade kabinleri oldu.`,
`← → döndürmek, ↑ hızlanmak ve Boşluk ateş etmek için. Büyük asteroitler ortaya, sonra küçüğe bölünür. Uçan dairelerden kaçının.`],
  vi: [
`Lái tàu vũ trụ xuyên qua cánh đồng thiên thạch đang xoay tròn, phá hủy chúng thành những mảnh nhỏ dần. Né tránh mảnh vỡ và cẩn thận với đĩa bay thù địch.

Được Atari tạo ra vào năm 1979, Asteroids là tủ arcade bán chạy nhất của họ với hơn 70.000 chiếc trên toàn thế giới.`,
`← → để xoay, ↑ để đẩy và Phím cách để bắn. Thiên thạch lớn tách thành trung bình rồi nhỏ. Né tránh đĩa bay.`],
  'zh-CN': [
`驾驶宇宙飞船穿越旋转的小行星场，将它们击碎成越来越小的碎片。躲避碎片并提防敌方飞碟。

由Atari于1979年制作，小行星是他们最畅销的街机游戏，全球销量超过7万台。`,
`← →旋转，↑推进，空格键射击。大小行星分裂为中等，再分裂为小的。躲避飞碟。`],
  'zh-TW': [
`駕駛太空船穿越旋轉的小行星場，將它們擊碎成越來越小的碎片。躲避碎片並提防敵方飛碟。

由Atari於1979年製作，小行星是他們最暢銷的街機遊戲，全球銷量超過7萬台。`,
`← →旋轉，↑推進，空白鍵射擊。大小行星分裂為中等，再分裂為小的。躲避飛碟。`],
},

'frogger': {
  ar: [
`ساعد ضفدعك في عبور طريق مزدحم ونهر خطير للوصول إلى المنزل بأمان. تفادَ السيارات والشاحنات والحافلات، ثم اقفز فوق جذوع الأشجار والسلاحف.

صممتها Konami عام 1981، باعت Frogger أكثر من 20 مليون نسخة وتعتبر من أوائل ألعاب التعليق البيئي في تاريخ الألعاب.`,
`استخدم الأسهم لتحريك الضفدع خطوة بخطوة. اعبر الطريق بتحديد توقيت الفجوات في حركة المرور. استخدم الجذوع والسلاحف لعبور النهر.`],
  de: [
`Führe deinen Frosch sicher über eine belebte Straße und einen gefährlichen Fluss nach Hause. Weiche Autos, Lastwagen und Bussen aus und hüpfe über Baumstämme und Schildkröten.

Entwickelt von Konami im Jahr 1981, verkaufte sich Frogger über 20 Millionen Mal und gilt als einer der ersten Umweltkommentare in der Spielegeschichte.`,
`Benutze die Pfeiltasten, um den Frosch schrittweise zu bewegen. Überquere die Straße durch Timing der Verkehrslücken. Nutze Baumstämme und Schildkröten, um den Fluss zu überqueren.`],
  es: [
`Guía a tu rana a cruzar una carretera concurrida y un río peligroso para llegar a casa sana y salva. Esquiva coches, camiones y autobuses, luego salta sobre troncos y tortugas.

Diseñado por Konami en 1981, Frogger vendió más de 20 millones de unidades y se considera uno de los primeros comentarios ambientales de la historia de los videojuegos.`,
`Usa las flechas para mover la rana paso a paso. Cruza la carretera calculando los huecos del tráfico. Usa troncos y tortugas para cruzar el río.`],
  fr: [
`Guidez votre grenouille à travers une route fréquentée et une rivière dangereuse pour rentrer chez elle saine et sauve. Évitez voitures, camions et bus, puis sautez sur les bûches et les tortues.

Conçu par Konami en 1981, Frogger s'est vendu à plus de 20 millions d'exemplaires et est considéré comme l'un des premiers commentaires environnementaux dans l'histoire du jeu vidéo.`,
`Utilisez les flèches pour déplacer la grenouille pas à pas. Traversez la route en calculant les espaces entre les véhicules. Utilisez les bûches et tortues pour traverser la rivière.`],
  hi: [
`अपने मेंढक को व्यस्त सड़क और खतरनाक नदी के पार सुरक्षित घर पहुंचाएं। कारों, ट्रकों और बसों से बचें, फिर लकड़ियों और कछुओं पर कूदकर नदी पार करें।

1981 में Konami द्वारा डिज़ाइन किया गया, Frogger ने 20 मिलियन से अधिक प्रतियां बेचीं और इसे गेमिंग के पहले पर्यावरणीय टिप्पणियों में से एक माना जाता है।`,
`तीर कुंजियों से मेंढक को एक कदम आगे बढ़ाएं। ट्रैफिक के गैप में सड़क पार करें। नदी पार करने के लिए लकड़ियों और कछुओं का उपयोग करें।`],
  id: [
`Bantu katak Anda menyeberangi jalan raya yang ramai dan sungai berbahaya untuk sampai ke rumah dengan selamat. Hindari mobil, truk, dan bus, lalu lompati batang kayu dan kura-kura.

Dirancang oleh Konami pada tahun 1981, Frogger terjual lebih dari 20 juta unit dan dianggap sebagai salah satu komentar lingkungan pertama dalam sejarah gaming.`,
`Gunakan tombol panah untuk menggerakkan katak selangkah demi selangkah. Seberangi jalan dengan mengatur waktu celah lalu lintas. Gunakan batang kayu dan kura-kura untuk menyeberangi sungai.`],
  it: [
`Guida la tua rana attraverso una strada trafficata e un fiume pericoloso per tornare a casa sana e salva. Evita auto, camion e autobus, poi salta su tronchi e tartarughe.

Progettato da Konami nel 1981, Frogger ha venduto oltre 20 milioni di copie ed è considerato uno dei primi commenti ambientali nella storia dei videogiochi.`,
`Usa le frecce per muovere la rana un passo alla volta. Attraversa la strada calcolando i varchi nel traffico. Usa tronchi e tartarughe per attraversare il fiume.`],
  ja: [
`カエルを忙しい道路と危険な川を越えて安全に家まで導きましょう。車やトラック、バスを避け、丸太やカメの上を跳んで川を渡ります。

1981年にコナミがデザインしたフロッガーは2,000万本以上を販売し、ゲーム史上初の環境コメンタリーの一つとされています。`,
`矢印キーでカエルを一歩ずつ移動。車の隙間を見計らって道路を渡りましょう。丸太やカメを使って川を渡ります。`],
  ko: [
`개구리를 바쁜 도로와 위험한 강을 건너 안전하게 집으로 데려가세요. 자동차, 트럭, 버스를 피하고 통나무와 거북이 위를 뛰어 강을 건너세요.

1981년 코나미가 디자인한 프로거는 2,000만 장 이상 판매되었으며 게임 역사상 최초의 환경 논평 중 하나로 여겨집니다.`,
`방향키로 개구리를 한 칸씩 이동하세요. 차량 사이 틈을 노려 도로를 건너세요. 통나무와 거북이를 이용해 강을 건너세요.`],
  nl: [
`Leid je kikker veilig over een drukke weg en een gevaarlijke rivier naar huis. Ontwijkauto's, vrachtwagens en bussen en spring vervolgens over boomstammen en schildpadden.

Ontworpen door Konami in 1981, verkocht Frogger meer dan 20 miljoen exemplaren en wordt beschouwd als een van de eerste milieucommentaren in de gamegeschiedenis.`,
`Gebruik de pijltjestoetsen om de kikker stap voor stap te bewegen. Steek de weg over door de gaten in het verkeer te timen. Gebruik boomstammen en schildpadden om de rivier over te steken.`],
  pl: [
`Przeprowadź swoją żabę przez ruchliwą drogę i niebezpieczną rzekę, aby bezpiecznie dotrzeć do domu. Unikaj samochodów, ciężarówek i autobusów, a potem skacz po kłodach i żółwiach.

Zaprojektowana przez Konami w 1981 roku, Frogger sprzedała się w ponad 20 milionach egzemplarzy i jest uważana za jeden z pierwszych komentarzy ekologicznych w historii gier.`,
`Użyj strzałek, aby poruszać żabą krok po kroku. Przejdź przez drogę, wyczuwając przerwy w ruchu. Użyj kłód i żółwi, aby przeprawić się przez rzekę.`],
  pt: [
`Guie o seu sapo em segurança por uma estrada movimentada e um rio perigoso até casa. Desvie de carros, camiões e autocarros, depois salte sobre troncos e tartarugas.

Desenhado pela Konami em 1981, Frogger vendeu mais de 20 milhões de cópias e é considerado um dos primeiros comentários ambientais na história dos videojogos.`,
`Use as setas para mover o sapo passo a passo. Atravesse a estrada calculando os intervalos no trânsito. Use troncos e tartarugas para atravessar o rio.`],
  ru: [
`Проведите свою лягушку через оживлённую дорогу и опасную реку до дома. Уклоняйтесь от машин, грузовиков и автобусов, а затем прыгайте по брёвнам и черепахам.

Разработанная Konami в 1981 году, Frogger продалась тиражом более 20 миллионов копий и считается одним из первых экологических комментариев в истории видеоигр.`,
`Стрелками перемещайте лягушку шаг за шагом. Пересеките дорогу, рассчитывая промежутки в потоке машин. Используйте брёвна и черепах для переправы через реку.`],
  sv: [
`Led din groda säkert över en trafikerad väg och en farlig flod hem. Undvik bilar, lastbilar och bussar, hoppa sedan på stockar och sköldpaddor.

Designad av Konami 1981, sålde Frogger över 20 miljoner exemplar och anses vara en av spelets första miljökommentarer.`,
`Använd piltangenterna för att flytta grodan steg för steg. Korsa vägen genom att tajma luckorna i trafiken. Använd stockar och sköldpaddor för att korsa floden.`],
  th: [
`พากบของคุณข้ามถนนที่พลุกพล่านและแม่น้ำอันตรายเพื่อกลับบ้านอย่างปลอดภัย หลบรถยนต์ รถบรรทุก และรถบัส แล้วกระโดดข้ามท่อนไม้และเต่า

ออกแบบโดย Konami ในปี 1981 Frogger ขายได้มากกว่า 20 ล้านชุดและถือเป็นหนึ่งในเกมแรกๆ ที่มีธีมเกี่ยวกับสิ่งแวดล้อม`,
`ใช้ปุ่มลูกศรเพื่อเคลื่อนกบทีละก้าว ข้ามถนนโดยจับจังหวะช่องว่างของการจราจร ใช้ท่อนไม้และเต่าข้ามแม่น้ำ`],
  tr: [
`Kurbağanızı yoğun bir yoldan ve tehlikeli bir nehirden güvenle eve ulaştırın. Arabalardan, kamyonlardan ve otobüslerden kaçının, sonra kütükler ve kaplumbağalar üzerinden atlayın.

1981'de Konami tarafından tasarlanan Frogger, 20 milyondan fazla satarak oyun tarihinin ilk çevre yorumlarından biri olarak kabul edilir.`,
`Ok tuşlarıyla kurbağayı adım adım hareket ettirin. Trafikte boşlukları zamanlayarak yolu geçin. Nehri geçmek için kütükleri ve kaplumbağaları kullanın.`],
  vi: [
`Dẫn con ếch của bạn qua con đường đông đúc và dòng sông nguy hiểm để về nhà an toàn. Tránh ô tô, xe tải và xe buýt, rồi nhảy qua khúc gỗ và rùa.

Được Konami thiết kế năm 1981, Frogger đã bán hơn 20 triệu bản và được coi là một trong những bình luận môi trường đầu tiên trong lịch sử trò chơi.`,
`Dùng phím mũi tên để di chuyển ếch từng bước. Qua đường bằng cách canh khe hở giữa xe cộ. Dùng khúc gỗ và rùa để qua sông.`],
  'zh-CN': [
`引导你的青蛙安全穿过繁忙的马路和危险的河流回家。避开汽车、卡车和公交车，然后跳上木头和乌龟过河。

由科乐美于1981年设计，青蛙过河售出超过2000万份，被认为是游戏史上最早的环境评论之一。`,
`用方向键逐步移动青蛙。看准车辆间隙过马路。利用木头和乌龟过河。`],
  'zh-TW': [
`引導你的青蛙安全穿過繁忙的馬路和危險的河流回家。避開汽車、卡車和公車，然後跳上木頭和烏龜過河。

由科樂美於1981年設計，青蛙過河售出超過2000萬份，被認為是遊戲史上最早的環境評論之一。`,
`用方向鍵逐步移動青蛙。看準車輛間隙過馬路。利用木頭和烏龜過河。`],
},

'galaga': {
  ar: [
`قاتل موجة تلو الأخرى من تشكيلات الفضائيين في هذه اللعبة الأيقونية. يهاجم الأعداء في تشكيلات ويمكن لشعاع الجذب أن يأسر سفينتك.

أصدرتها Namco عام 1981، وتعتبر Galaga واحدة من أعظم ألعاب الآركيد على الإطلاق في تاريخ ألعاب الفيديو.`,
`← → لتحريك السفينة. سبيس للإطلاق. دع البوس غالاغا يأسر سفينتك ثم أطلق عليه لاستردادها والقتال بقوة مضاعفة.`],
  de: [
`Bekämpfe Welle um Welle von Alien-Formationen in diesem ikonischen Weltraum-Shooter. Feinde fliegen in Formation an und ein Traktorstrahl kann dein Schiff einfangen.

Veröffentlicht von Namco im Jahr 1981, gilt Galaga als eines der größten Arcade-Spiele aller Zeiten in der Geschichte der Videospiele.`,
`← → zum Bewegen des Schiffs. Leertaste zum Schießen. Lass den Boss-Galaga dein Schiff fangen, schieße ihn dann ab, um mit doppelter Feuerkraft zu kämpfen.`],
  es: [
`Combate oleada tras oleada de formaciones alienígenas en este icónico shooter espacial. Los enemigos atacan en formación y un rayo tractor puede capturar tu nave.

Lanzado por Namco en 1981, Galaga es considerado uno de los mejores juegos arcade jamás creados en la historia de los videojuegos.`,
`← → para mover la nave. Espacio para disparar. Deja que el Boss Galaga capture tu nave, luego derrótalo para recuperarla y luchar con doble potencia.`],
  fr: [
`Combattez vague après vague de formations aliens dans ce jeu de tir spatial emblématique. Les ennemis attaquent en formation et un rayon tracteur peut capturer votre vaisseau.

Sorti par Namco en 1981, Galaga est considéré comme l'un des plus grands jeux d'arcade jamais créés dans l'histoire du jeu vidéo.`,
`← → pour déplacer le vaisseau. Espace pour tirer. Laissez le Boss Galaga capturer votre vaisseau, puis abattez-le pour le récupérer et combattre avec une puissance doublée.`],
  hi: [
`इस प्रतिष्ठित स्पेस शूटर में एलियन संरचनाओं की लहर दर लहर से लड़ें। दुश्मन फॉर्मेशन में हमला करते हैं और ट्रैक्टर बीम आपकी शिप को पकड़ सकता है।

1981 में Namco द्वारा रिलीज़ किया गया, Galaga को वीडियो गेम इतिहास के सबसे महान आर्केड गेम्स में से एक माना जाता है।`,
`← → से शिप हिलाएं। स्पेस से फायर करें। बॉस गलागा को अपनी शिप पकड़ने दें, फिर उसे मारकर डबल पावर से लड़ें।`],
  id: [
`Lawan gelombang demi gelombang formasi alien dalam game tembak-tembakan luar angkasa ikonik ini. Musuh menyerang dalam formasi dan sinar traktor bisa menangkap pesawat Anda.

Dirilis oleh Namco pada tahun 1981, Galaga dianggap sebagai salah satu game arcade terhebat sepanjang masa dalam sejarah video game.`,
`← → untuk menggerakkan pesawat. Spasi untuk menembak. Biarkan Boss Galaga menangkap pesawat Anda, lalu tembak untuk mendapatkannya kembali dengan kekuatan ganda.`],
  it: [
`Combatti ondata dopo ondata di formazioni aliene in questo iconico sparatutto spaziale. I nemici attaccano in formazione e un raggio traente può catturare la tua nave.

Rilasciato da Namco nel 1981, Galaga è considerato uno dei più grandi giochi arcade mai creati nella storia dei videogiochi.`,
`← → per muovere la nave. Spazio per sparare. Lascia che il Boss Galaga catturi la tua nave, poi abbattilo per recuperarla e combattere con potenza doppia.`],
  ja: [
`この象徴的なスペースシューターで、次々と飛来するエイリアン編隊と戦いましょう。敵は編隊を組んで攻撃し、トラクタービームで自機を捕獲することがあります。

1981年にナムコからリリースされたギャラガは、ビデオゲーム史上最も偉大なアーケードゲームの一つとされています。`,
`← →で機体を移動。スペースキーで発射。ボスギャラガに自機を捕獲させ、撃破して取り戻すとダブルファイターで戦えます。`],
  ko: [
`이 상징적인 우주 슈팅 게임에서 외계인 편대의 파상 공격을 물리치세요. 적들이 편대를 이루어 공격하며 트랙터빔으로 기체를 포획할 수 있습니다.

1981년 남코가 출시한 갤러그는 비디오 게임 역사상 가장 위대한 아케이드 게임 중 하나로 꼽힙니다.`,
`← →로 기체 이동. 스페이스바로 발사. 보스 갤러그가 기체를 포획하게 한 뒤 격추하면 더블 파이터로 싸울 수 있습니다.`],
  nl: [
`Bestrijd golf na golf van buitenaardse formaties in deze iconische ruimteshooter. Vijanden duiken in formatie aan en een tractorstraal kan je schip vangen.

Uitgebracht door Namco in 1981, wordt Galaga beschouwd als een van de grootste arcadespellen aller tijden in de geschiedenis van videogames.`,
`← → om het schip te bewegen. Spatie om te schieten. Laat de Boss Galaga je schip vangen, schiet hem dan neer om met dubbele vuurkracht te vechten.`],
  pl: [
`Walcz z falą za falą formacji obcych w tej kultowej kosmicznej strzelance. Wrogowie atakują w szyku, a wiązka chwytająca może porwać twój statek.

Wydana przez Namco w 1981 roku, Galaga jest uważana za jedną z najwspanialszych gier arcade w historii gier wideo.`,
`← → do poruszania statkiem. Spacja do strzelania. Pozwól Boss Galaga schwytać twój statek, a potem go zestrzel — odzyskasz go z podwójną siłą ognia.`],
  pt: [
`Combata vaga após vaga de formações alienígenas neste icónico shooter espacial. Os inimigos atacam em formação e um raio trator pode capturar a sua nave.

Lançado pela Namco em 1981, Galaga é considerado um dos maiores jogos arcade de todos os tempos na história dos videojogos.`,
`← → para mover a nave. Espaço para disparar. Deixe o Boss Galaga capturar a sua nave, depois abata-o para recuperá-la e lutar com poder duplo.`],
  ru: [
`Сражайтесь с волнами инопланетных формаций в этом культовом космическом шутере. Враги атакуют строем, а луч захвата может похитить ваш корабль.

Выпущенная Namco в 1981 году, Galaga считается одной из величайших аркадных игр всех времён в истории видеоигр.`,
`← → для перемещения корабля. Пробел — стрельба. Позвольте Боссу Галага захватить корабль, затем уничтожьте его — получите двойной корабль.`],
  sv: [
`Bekämpa våg efter våg av utomjordiska formationer i detta ikoniska rymdskjutarspel. Fiender dyker i formation och en fångststråle kan fånga ditt skepp.

Utgiven av Namco 1981, anses Galaga vara ett av de största arkadspelen genom tiderna i videospelens historia.`,
`← → för att flytta skeppet. Mellanslag för att skjuta. Låt Boss Galaga fånga ditt skepp, skjut sedan ner det för att slåss med dubbel eldkraft.`],
  th: [
`ต่อสู้กับคลื่นแล้วคลื่นเล่าของฝูงเอเลี่ยนในเกมยิงอวกาศในตำนานนี้ ศัตรูโจมตีเป็นรูปขบวนและลำแสงดึงดูดสามารถจับยานของคุณได้

เผยแพร่โดย Namco ในปี 1981 Galaga ถือเป็นหนึ่งในเกมอาร์เคดที่ยิ่งใหญ่ที่สุดตลอดกาลในประวัติศาสตร์วิดีโอเกม`,
`← → เลื่อนยาน สเปซยิง ปล่อยให้ Boss Galaga จับยานคุณ แล้วยิงมันเพื่อรับยานกลับพร้อมพลังยิงสองเท่า`],
  tr: [
`Bu ikonik uzay atıcısında dalga dalga gelen uzaylı formasyonlarıyla savaşın. Düşmanlar formasyonda saldırır ve bir çekici ışın geminizi yakalayabilir.

1981'de Namco tarafından yayınlanan Galaga, video oyun tarihinin gelmiş geçmiş en büyük arcade oyunlarından biri olarak kabul edilir.`,
`← → gemiyi hareket ettirmek, Boşluk ateş etmek için. Boss Galaga'nın geminizi yakalamasına izin verin, sonra onu vurup çift ateş gücüyle savaşın.`],
  vi: [
`Chiến đấu với từng đợt đội hình ngoài hành tinh trong trò chơi bắn súng không gian huyền thoại này. Kẻ thù tấn công theo đội hình và tia kéo có thể bắt giữ tàu của bạn.

Được Namco phát hành năm 1981, Galaga được coi là một trong những trò chơi arcade vĩ đại nhất mọi thời đại trong lịch sử video game.`,
`← → để di chuyển tàu. Phím cách để bắn. Để Boss Galaga bắt tàu bạn, rồi bắn hạ nó để lấy lại tàu và chiến đấu với sức mạnh gấp đôi.`],
  'zh-CN': [
`在这款标志性太空射击游戏中，与一波又一波的外星编队作战。敌人以编队形式攻击，牵引光束可以捕获你的飞船。

由南梦宫于1981年发行，大蜜蜂被认为是电子游戏史上最伟大的街机游戏之一。`,
`← →移动飞船。空格键射击。让Boss Galaga捕获你的飞船，然后击落它来获得双倍火力。`],
  'zh-TW': [
`在這款標誌性太空射擊遊戲中，與一波又一波的外星編隊作戰。敵人以編隊形式攻擊，牽引光束可以捕獲你的飛船。

由南夢宮於1981年發行，大蜜蜂被認為是電子遊戲史上最偉大的街機遊戲之一。`,
`← →移動飛船。空白鍵射擊。讓Boss Galaga捕獲你的飛船，然後擊落它來獲得雙倍火力。`],
},

'brick-breaker': {
  ar: [
`حطّم طبقات متعددة من الطوب بكرة مرتدة ومضرب. اجمع التعزيزات — مضارب أطول، كرات متعددة، طلقات ليزر — وأزِل كل الطوب للتقدم.

Brick Breaker هي الوريث الروحي للعبة Breakout الكلاسيكية، وتحافظ على نوع ألعاب الكرة المرتدة حياً منذ ما يقرب من 50 عاماً.`,
`حرّك المضرب بالماوس أو ← →. أبقِ الكرة مرتدة وصوّب نحو الطوب. اجمع التعزيزات المتساقطة. أزِل كل الطوب للتقدم.`],
  de: [
`Zerschlage mehrere Schichten von Steinen mit einem springenden Ball und einem Schläger. Sammle Power-ups — längere Schläger, Multibälle, Laserschüsse — und räume alle Steine ab.

Brick Breaker ist der geistige Nachfolger des klassischen Breakout und hält das Bouncing-Ball-Genre seit fast 50 Jahren am Leben.`,
`Bewege den Schläger mit der Maus oder ← →. Halte den Ball im Spiel und ziele auf die Steine. Sammle fallende Power-ups. Räume alle Steine ab.`],
  es: [
`Rompe capas de ladrillos con una pelota rebotante y una paleta. Recoge potenciadores — paletas más largas, multi-bola, disparos láser — y elimina todos los ladrillos para avanzar.

Brick Breaker es el sucesor espiritual del clásico Breakout, manteniendo vivo el género de la pelota rebotante durante casi 50 años.`,
`Mueve la paleta con el ratón o ← →. Mantén la pelota rebotando y apunta a los ladrillos. Recoge los potenciadores. Elimina todos los ladrillos para avanzar.`],
  fr: [
`Brisez des couches de briques avec une balle rebondissante et une raquette. Collectez des bonus — raquettes plus longues, multi-balles, tirs laser — et détruisez toutes les briques pour avancer.

Brick Breaker est le successeur spirituel du classique Breakout, maintenant le genre du casse-briques en vie depuis près de 50 ans.`,
`Déplacez la raquette avec la souris ou ← →. Gardez la balle en jeu et visez les briques. Ramassez les bonus qui tombent. Détruisez toutes les briques.`],
  hi: [
`उछलती गेंद और पैडल से ईंटों की कई परतें तोड़ें। पावर-अप्स इकट्ठा करें — लंबे पैडल, मल्टी-बॉल, लेज़र शॉट्स — और आगे बढ़ने के लिए सभी ईंटें साफ़ करें।

Brick Breaker क्लासिक Breakout की आध्यात्मिक उत्तराधिकारी है, जो लगभग 50 वर्षों से बाउंसिंग-बॉल शैली को जीवित रखे हुए है।`,
`माउस या ← → से पैडल हिलाएं। गेंद को उछालते रखें और ईंटों पर निशाना लगाएं। गिरते पावर-अप्स इकट्ठा करें।`],
  id: [
`Hancurkan lapisan-lapisan bata dengan bola pantulan dan dayung. Kumpulkan power-up — dayung lebih panjang, multi-bola, tembakan laser — dan bersihkan semua bata untuk maju.

Brick Breaker adalah penerus spiritual dari Breakout klasik, menjaga genre bola pantulan tetap hidup selama hampir 50 tahun.`,
`Gerakkan dayung dengan mouse atau ← →. Jaga bola tetap memantul dan bidik bata. Kumpulkan power-up yang jatuh. Bersihkan semua bata.`],
  it: [
`Distruggi strati di mattoni con una palla rimbalzante e una racchetta. Raccogli potenziamenti — racchette più lunghe, multi-palla, colpi laser — e elimina tutti i mattoni per avanzare.

Brick Breaker è il successore spirituale del classico Breakout, mantenendo vivo il genere della palla rimbalzante da quasi 50 anni.`,
`Muovi la racchetta con il mouse o ← →. Tieni la palla in gioco e mira ai mattoni. Raccogli i potenziamenti che cadono. Elimina tutti i mattoni.`],
  ja: [
`バウンドするボールとパドルで何層ものブロックを壊しましょう。パワーアップを集めて — パドル延長、マルチボール、レーザーショット — すべてのブロックをクリアして次のレベルへ進みましょう。

ブリックブレイカーはクラシックなブレイクアウトの精神的後継者であり、約50年にわたってバウンドボールジャンルを生かし続けています。`,
`マウスまたは← →でパドルを移動。ボールを跳ね返し続けてブロックを狙いましょう。落ちてくるパワーアップを集めましょう。`],
  ko: [
`튕기는 공과 패들로 여러 층의 벽돌을 깨부수세요. 파워업을 모으세요 — 긴 패들, 멀티볼, 레이저 샷 — 모든 벽돌을 깨서 다음 레벨로 진행하세요.

브릭 브레이커는 클래식 브레이크아웃의 정신적 후속작으로, 약 50년간 바운싱볼 장르를 이어오고 있습니다.`,
`마우스 또는 ← →로 패들을 이동하세요. 공을 튕기며 벽돌을 조준하세요. 떨어지는 파워업을 모으세요.`],
  nl: [
`Breek door meerdere lagen stenen met een stuiterende bal en een paddle. Verzamel power-ups — langere paddles, multi-bal, laserschoten — en ruim alle stenen op om verder te gaan.

Brick Breaker is de geestelijke opvolger van het klassieke Breakout en houdt het stuiterende-balgenre al bijna 50 jaar in leven.`,
`Beweeg de paddle met de muis of ← →. Houd de bal in het spel en richt op de stenen. Vang vallende power-ups. Ruim alle stenen op.`],
  pl: [
`Rozbijaj warstwy cegieł odbijającą się piłką i paletką. Zbieraj ulepszenia — dłuższa paletka, multi-piłka, strzały laserowe — i wyczyść wszystkie cegły, aby przejść dalej.

Brick Breaker jest duchowym następcą klasycznego Breakout, utrzymując gatunek odbijania piłki przy życiu od prawie 50 lat.`,
`Poruszaj paletką myszką lub ← →. Utrzymuj piłkę w grze i celuj w cegły. Zbieraj spadające ulepszenia. Wyczyść wszystkie cegły.`],
  pt: [
`Destrua múltiplas camadas de tijolos com uma bola saltitante e uma raquete. Recolha power-ups — raquetes mais longas, multi-bola, tiros laser — e limpe todos os tijolos para avançar.

Brick Breaker é o sucessor espiritual do clássico Breakout, mantendo o género da bola saltitante vivo há quase 50 anos.`,
`Mova a raquete com o rato ou ← →. Mantenha a bola a saltar e aponte aos tijolos. Apanhe os power-ups que caem. Limpe todos os tijolos.`],
  ru: [
`Разбивайте слои кирпичей отскакивающим мячом и ракеткой. Собирайте бонусы — удлинённую ракетку, мультимяч, лазерные выстрелы — и очищайте все кирпичи для перехода на следующий уровень.

Brick Breaker — духовный наследник классической Breakout, поддерживающий жанр отскакивающего мяча уже почти 50 лет.`,
`Двигайте ракетку мышью или ← →. Удерживайте мяч в игре и целиться в кирпичи. Собирайте падающие бонусы. Очистите все кирпичи.`],
  sv: [
`Krossa lager av stenar med en studsande boll och ett racket. Samla power-ups — längre racket, multibollar, laserskott — och rensa alla stenar för att avancera.

Brick Breaker är den andliga efterföljaren till klassiska Breakout och har hållit studs-boll-genren vid liv i nästan 50 år.`,
`Flytta racketet med musen eller ← →. Håll bollen studsande och sikta på stenarna. Samla fallande power-ups. Rensa alla stenar.`],
  th: [
`ทำลายอิฐหลายชั้นด้วยลูกบอลเด้งและแร็กเก็ต สะสมพาวเวอร์อัป — แร็กเก็ตยาวขึ้น มัลติบอล ยิงเลเซอร์ — และเคลียร์อิฐทั้งหมดเพื่อผ่านด่าน

Brick Breaker คือทายาทจิตวิญญาณของเกม Breakout คลาสสิก รักษาแนวเกมลูกบอลเด้งให้ยังคงมีชีวิตมาเกือบ 50 ปี`,
`เลื่อนแร็กเก็ตด้วยเมาส์หรือ ← → ให้ลูกบอลเด้งต่อไปและเล็งไปที่อิฐ เก็บพาวเวอร์อัปที่ตกลงมา`],
  tr: [
`Zıplayan bir top ve raaketle çok katmanlı tuğlaları kırın. Güçlendirmeler toplayın — daha uzun raketler, çoklu top, lazer atışları — ve ilerlemek için tüm tuğlaları temizleyin.

Brick Breaker, klasik Breakout'un ruhani halefidir ve zıplayan top türünü yaklaşık 50 yıldır yaşatmaktadır.`,
`Raketi fare veya ← → ile hareket ettirin. Topu oyunda tutun ve tuğlaları hedefleyin. Düşen güçlendirmeleri toplayın. Tüm tuğlaları temizleyin.`],
  vi: [
`Phá hủy nhiều lớp gạch bằng quả bóng nảy và thanh chắn. Thu thập vật phẩm tăng sức mạnh — thanh chắn dài hơn, đa bóng, bắn laser — và phá hết gạch để tiến lên.

Brick Breaker là người kế thừa tinh thần của Breakout cổ điển, giữ cho thể loại bóng nảy sống động suốt gần 50 năm.`,
`Di chuyển thanh chắn bằng chuột hoặc ← →. Giữ bóng nảy và nhắm vào gạch. Thu thập vật phẩm rơi xuống. Phá hết gạch.`],
  'zh-CN': [
`用弹跳球和挡板击碎多层砖块。收集强化道具——加长挡板、多球、激光射击——清除所有砖块以推进关卡。

打砖块是经典突围游戏Breakout的精神继承者，将弹球类型保持活力近50年。`,
`用鼠标或 ← → 移动挡板。保持球弹跳并瞄准砖块。收集掉落的强化道具。清除所有砖块。`],
  'zh-TW': [
`用彈跳球和擋板擊碎多層磚塊。收集強化道具——加長擋板、多球、雷射射擊——清除所有磚塊以推進關卡。

打磚塊是經典突圍遊戲Breakout的精神繼承者，將彈球類型保持活力近50年。`,
`用滑鼠或 ← → 移動擋板。保持球彈跳並瞄準磚塊。收集掉落的強化道具。清除所有磚塊。`],
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
console.log('Batch 2 done!');
