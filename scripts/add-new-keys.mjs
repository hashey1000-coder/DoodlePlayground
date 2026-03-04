import fs from 'fs';
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const dir = path.join(__dirname, '..', 'client/src/contexts/locales');

const NEW_KEYS = {
  es: {
    'sitemap.title': 'Mapa del Sitio',
    'sitemap.subtitle': 'Un índice completo de todas las páginas de Doodle Playground.',
    'sitemap.mainPages': 'Páginas Principales',
    'sitemap.allGames': 'Todos los Juegos',
    'game.externalOnlyDesc': 'Este juego está alojado en Google y debe jugarse en su sitio web.',
    'game.openOnGoogle': 'Jugar en Google',
    'game.seconds': 's',
    'common.backToHome': 'Volver al Inicio',
    'seo.sitemap.title': 'Mapa del Sitio — Doodle Playground',
    'seo.sitemap.description': 'Explora todas las páginas de Doodle Playground — juegos, categorías y más.',
  },
  fr: {
    'sitemap.title': 'Plan du Site',
    'sitemap.subtitle': 'Un index complet de toutes les pages de Doodle Playground.',
    'sitemap.mainPages': 'Pages Principales',
    'sitemap.allGames': 'Tous les Jeux',
    'game.externalOnlyDesc': 'Ce jeu est hébergé par Google et doit être joué sur leur site.',
    'game.openOnGoogle': 'Jouer sur Google',
    'game.seconds': 's',
    'common.backToHome': "Retour à l'Accueil",
    'seo.sitemap.title': 'Plan du Site — Doodle Playground',
    'seo.sitemap.description': 'Parcourez toutes les pages de Doodle Playground — jeux, catégories et plus.',
  },
  de: {
    'sitemap.title': 'Seitenübersicht',
    'sitemap.subtitle': 'Ein vollständiges Verzeichnis aller Seiten auf Doodle Playground.',
    'sitemap.mainPages': 'Hauptseiten',
    'sitemap.allGames': 'Alle Spiele',
    'game.externalOnlyDesc': 'Dieses Spiel wird von Google gehostet und muss auf deren Website gespielt werden.',
    'game.openOnGoogle': 'Auf Google spielen',
    'game.seconds': 's',
    'common.backToHome': 'Zurück zur Startseite',
    'seo.sitemap.title': 'Seitenübersicht — Doodle Playground',
    'seo.sitemap.description': 'Durchsuche alle Seiten auf Doodle Playground — Spiele, Kategorien und mehr.',
  },
  it: {
    'sitemap.title': 'Mappa del Sito',
    'sitemap.subtitle': 'Un indice completo di tutte le pagine di Doodle Playground.',
    'sitemap.mainPages': 'Pagine Principali',
    'sitemap.allGames': 'Tutti i Giochi',
    'game.externalOnlyDesc': 'Questo gioco è ospitato da Google e deve essere giocato sul loro sito web.',
    'game.openOnGoogle': 'Gioca su Google',
    'game.seconds': 's',
    'common.backToHome': "Torna all'Inizio",
    'seo.sitemap.title': 'Mappa del Sito — Doodle Playground',
    'seo.sitemap.description': 'Sfoglia tutte le pagine di Doodle Playground — giochi, categorie e altro.',
  },
  pt: {
    'sitemap.title': 'Mapa do Site',
    'sitemap.subtitle': 'Um índice completo de todas as páginas do Doodle Playground.',
    'sitemap.mainPages': 'Páginas Principais',
    'sitemap.allGames': 'Todos os Jogos',
    'game.externalOnlyDesc': 'Este jogo é hospedado pelo Google e deve ser jogado no site deles.',
    'game.openOnGoogle': 'Jogar no Google',
    'game.seconds': 's',
    'common.backToHome': 'Voltar ao Início',
    'seo.sitemap.title': 'Mapa do Site — Doodle Playground',
    'seo.sitemap.description': 'Navegue por todas as páginas do Doodle Playground — jogos, categorias e mais.',
  },
  ru: {
    'sitemap.title': 'Карта сайта',
    'sitemap.subtitle': 'Полный указатель всех страниц Doodle Playground.',
    'sitemap.mainPages': 'Главные страницы',
    'sitemap.allGames': 'Все игры',
    'game.externalOnlyDesc': 'Эта игра размещена на Google и должна быть запущена на их сайте.',
    'game.openOnGoogle': 'Играть на Google',
    'game.seconds': 'с',
    'common.backToHome': 'Вернуться на главную',
    'seo.sitemap.title': 'Карта сайта — Doodle Playground',
    'seo.sitemap.description': 'Просмотрите все страницы Doodle Playground — игры, категории и многое другое.',
  },
  'zh-CN': {
    'sitemap.title': '网站地图',
    'sitemap.subtitle': 'Doodle Playground 所有页面的完整索引。',
    'sitemap.mainPages': '主要页面',
    'sitemap.allGames': '所有游戏',
    'game.externalOnlyDesc': '此游戏托管在 Google 上，必须在其网站上游玩。',
    'game.openOnGoogle': '在 Google 上玩',
    'game.seconds': '秒',
    'common.backToHome': '返回首页',
    'seo.sitemap.title': '网站地图 — Doodle Playground',
    'seo.sitemap.description': '浏览 Doodle Playground 的所有页面 — 游戏、分类等。',
  },
  'zh-TW': {
    'sitemap.title': '網站地圖',
    'sitemap.subtitle': 'Doodle Playground 所有頁面的完整索引。',
    'sitemap.mainPages': '主要頁面',
    'sitemap.allGames': '所有遊戲',
    'game.externalOnlyDesc': '此遊戲託管在 Google 上，必須在其網站上遊玩。',
    'game.openOnGoogle': '在 Google 上玩',
    'game.seconds': '秒',
    'common.backToHome': '返回首頁',
    'seo.sitemap.title': '網站地圖 — Doodle Playground',
    'seo.sitemap.description': '瀏覽 Doodle Playground 的所有頁面 — 遊戲、分類等。',
  },
  ja: {
    'sitemap.title': 'サイトマップ',
    'sitemap.subtitle': 'Doodle Playground の全ページの完全な索引です。',
    'sitemap.mainPages': 'メインページ',
    'sitemap.allGames': 'すべてのゲーム',
    'game.externalOnlyDesc': 'このゲームはGoogleでホストされており、Googleのサイトでプレイする必要があります。',
    'game.openOnGoogle': 'Google でプレイ',
    'game.seconds': '秒',
    'common.backToHome': 'ホームに戻る',
    'seo.sitemap.title': 'サイトマップ — Doodle Playground',
    'seo.sitemap.description': 'Doodle Playground のすべてのページを閲覧 — ゲーム、カテゴリなど。',
  },
  ko: {
    'sitemap.title': '사이트맵',
    'sitemap.subtitle': 'Doodle Playground의 모든 페이지에 대한 전체 색인입니다.',
    'sitemap.mainPages': '주요 페이지',
    'sitemap.allGames': '모든 게임',
    'game.externalOnlyDesc': '이 게임은 Google에서 호스팅되며, Google 웹사이트에서 플레이해야 합니다.',
    'game.openOnGoogle': 'Google에서 플레이',
    'game.seconds': '초',
    'common.backToHome': '홈으로 돌아가기',
    'seo.sitemap.title': '사이트맵 — Doodle Playground',
    'seo.sitemap.description': 'Doodle Playground의 모든 페이지를 둘러보세요 — 게임, 카테고리 등.',
  },
  ar: {
    'sitemap.title': 'خريطة الموقع',
    'sitemap.subtitle': 'فهرس كامل لجميع صفحات Doodle Playground.',
    'sitemap.mainPages': 'الصفحات الرئيسية',
    'sitemap.allGames': 'جميع الألعاب',
    'game.externalOnlyDesc': 'هذه اللعبة مستضافة على Google ويجب لعبها على موقعهم.',
    'game.openOnGoogle': 'العب على Google',
    'game.seconds': 'ث',
    'common.backToHome': 'العودة للرئيسية',
    'seo.sitemap.title': 'خريطة الموقع — Doodle Playground',
    'seo.sitemap.description': 'تصفح جميع صفحات Doodle Playground — الألعاب والفئات والمزيد.',
  },
  hi: {
    'sitemap.title': 'साइटमैप',
    'sitemap.subtitle': 'Doodle Playground के सभी पृष्ठों का पूर्ण सूचकांक।',
    'sitemap.mainPages': 'मुख्य पृष्ठ',
    'sitemap.allGames': 'सभी गेम',
    'game.externalOnlyDesc': 'यह गेम Google पर होस्ट किया गया है और इसे उनकी वेबसाइट पर खेलना होगा।',
    'game.openOnGoogle': 'Google पर खेलें',
    'game.seconds': 'से.',
    'common.backToHome': 'होम पर वापस जाएं',
    'seo.sitemap.title': 'साइटमैप — Doodle Playground',
    'seo.sitemap.description': 'Doodle Playground के सभी पृष्ठ ब्राउज़ करें — गेम, श्रेणियां और अधिक।',
  },
  tr: {
    'sitemap.title': 'Site Haritası',
    'sitemap.subtitle': 'Doodle Playground üzerindeki tüm sayfaların tam dizini.',
    'sitemap.mainPages': 'Ana Sayfalar',
    'sitemap.allGames': 'Tüm Oyunlar',
    'game.externalOnlyDesc': 'Bu oyun Google tarafından barındırılmaktadır ve onların web sitesinde oynanmalıdır.',
    'game.openOnGoogle': "Google'da Oyna",
    'game.seconds': 'sn',
    'common.backToHome': 'Ana Sayfaya Dön',
    'seo.sitemap.title': 'Site Haritası — Doodle Playground',
    'seo.sitemap.description': "Doodle Playground'daki tüm sayfaları keşfedin — oyunlar, kategoriler ve daha fazlası.",
  },
  nl: {
    'sitemap.title': 'Sitemap',
    'sitemap.subtitle': 'Een compleet overzicht van alle pagina\'s op Doodle Playground.',
    'sitemap.mainPages': "Hoofdpagina's",
    'sitemap.allGames': 'Alle Spellen',
    'game.externalOnlyDesc': 'Dit spel wordt gehost op Google en moet op hun website worden gespeeld.',
    'game.openOnGoogle': 'Spelen op Google',
    'game.seconds': 's',
    'common.backToHome': 'Terug naar Home',
    'seo.sitemap.title': 'Sitemap — Doodle Playground',
    'seo.sitemap.description': "Bekijk alle pagina's op Doodle Playground — spellen, categorieën en meer.",
  },
  pl: {
    'sitemap.title': 'Mapa Strony',
    'sitemap.subtitle': 'Pełny indeks wszystkich stron Doodle Playground.',
    'sitemap.mainPages': 'Strony Główne',
    'sitemap.allGames': 'Wszystkie Gry',
    'game.externalOnlyDesc': 'Ta gra jest hostowana przez Google i musi być grana na ich stronie.',
    'game.openOnGoogle': 'Graj na Google',
    'game.seconds': 's',
    'common.backToHome': 'Powrót do Strony Głównej',
    'seo.sitemap.title': 'Mapa Strony — Doodle Playground',
    'seo.sitemap.description': 'Przeglądaj wszystkie strony Doodle Playground — gry, kategorie i więcej.',
  },
  sv: {
    'sitemap.title': 'Webbplatskarta',
    'sitemap.subtitle': 'Ett komplett index över alla sidor på Doodle Playground.',
    'sitemap.mainPages': 'Huvudsidor',
    'sitemap.allGames': 'Alla Spel',
    'game.externalOnlyDesc': 'Det här spelet finns på Google och måste spelas på deras webbplats.',
    'game.openOnGoogle': 'Spela på Google',
    'game.seconds': 's',
    'common.backToHome': 'Tillbaka till Startsidan',
    'seo.sitemap.title': 'Webbplatskarta — Doodle Playground',
    'seo.sitemap.description': 'Bläddra bland alla sidor på Doodle Playground — spel, kategorier och mer.',
  },
  id: {
    'sitemap.title': 'Peta Situs',
    'sitemap.subtitle': 'Indeks lengkap semua halaman di Doodle Playground.',
    'sitemap.mainPages': 'Halaman Utama',
    'sitemap.allGames': 'Semua Game',
    'game.externalOnlyDesc': 'Game ini dihosting di Google dan harus dimainkan di situs web mereka.',
    'game.openOnGoogle': 'Mainkan di Google',
    'game.seconds': 'dtk',
    'common.backToHome': 'Kembali ke Beranda',
    'seo.sitemap.title': 'Peta Situs — Doodle Playground',
    'seo.sitemap.description': 'Jelajahi semua halaman di Doodle Playground — game, kategori, dan lainnya.',
  },
  vi: {
    'sitemap.title': 'Sơ đồ Trang',
    'sitemap.subtitle': 'Chỉ mục đầy đủ tất cả các trang trên Doodle Playground.',
    'sitemap.mainPages': 'Trang Chính',
    'sitemap.allGames': 'Tất cả Trò chơi',
    'game.externalOnlyDesc': 'Trò chơi này được lưu trữ trên Google và phải được chơi trên trang web của họ.',
    'game.openOnGoogle': 'Chơi trên Google',
    'game.seconds': 'giây',
    'common.backToHome': 'Quay về Trang chủ',
    'seo.sitemap.title': 'Sơ đồ Trang — Doodle Playground',
    'seo.sitemap.description': 'Duyệt tất cả các trang trên Doodle Playground — trò chơi, danh mục và hơn thế nữa.',
  },
  th: {
    'sitemap.title': 'แผนผังเว็บไซต์',
    'sitemap.subtitle': 'ดัชนีหน้าทั้งหมดบน Doodle Playground',
    'sitemap.mainPages': 'หน้าหลัก',
    'sitemap.allGames': 'เกมทั้งหมด',
    'game.externalOnlyDesc': 'เกมนี้โฮสต์บน Google และต้องเล่นบนเว็บไซต์ของพวกเขา',
    'game.openOnGoogle': 'เล่นบน Google',
    'game.seconds': 'วิ',
    'common.backToHome': 'กลับสู่หน้าแรก',
    'seo.sitemap.title': 'แผนผังเว็บไซต์ — Doodle Playground',
    'seo.sitemap.description': 'เรียกดูทุกหน้าบน Doodle Playground — เกม, หมวดหมู่ และอื่นๆ',
  },
};

for (const [locale, translations] of Object.entries(NEW_KEYS)) {
  const filePath = path.join(dir, `${locale}.ts`);
  let content = fs.readFileSync(filePath, 'utf8');

  // Find the last key before the closing `};` and append new keys there
  // Match the last key-value pair before the end of the object
  const lastSemicolon = content.lastIndexOf('};');
  if (lastSemicolon === -1) {
    console.error(`❌ ${locale}: Could not find closing '};'`);
    continue;
  }

  // Build the new entries string
  const entries = Object.entries(translations)
    .map(([key, value]) => {
      const escaped = value.replace(/'/g, "\\'");
      return `  '${key}': '${escaped}',`;
    })
    .join('\n');

  const before = content.slice(0, lastSemicolon);
  const after = content.slice(lastSemicolon);

  content = before + '  // Sitemap & game extras\n' + entries + '\n' + after;

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ ${locale}: ${Object.keys(translations).length} keys added`);
}
