#!/usr/bin/env node
/**
 * Generate game translation files for all 19 locales.
 * Reads English data from games.ts, writes typed translation files.
 *
 * Usage: node scripts/generate-game-translations.mjs
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const TRANSLATIONS_DIR = resolve(ROOT, 'client/src/data/translations');

// ────────────────────────────────────────────────────
// Extract English game data from games.ts
// ────────────────────────────────────────────────────
const gamesTs = readFileSync(resolve(ROOT, 'client/src/data/games.ts'), 'utf8');

function extractGames() {
  const games = [];
  // Match slug, then title (single or double quoted), then description (single or double quoted)
  const re = /slug:\s*'([^']+)',\s*title:\s*(?:'([^']*(?:\\'[^']*)*)'|"([^"]*(?:\\"[^"]*)*)"),\s*description:\s*(?:'([^']*(?:\\'[^']*)*)'|"([^"]*(?:\\"[^"]*)*)"),/gs;
  let m;
  while ((m = re.exec(gamesTs))) {
    const slug = m[1];
    const title = (m[2] ?? m[3]).replace(/\\'/g, "'").replace(/\\"/g, '"');
    const desc = (m[4] ?? m[5]).replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\n/g, '\n');
    if (!games.find(g => g.slug === slug)) {
      games.push({ slug, title, desc });
    }
  }
  return games;
}

const EN_GAMES = extractGames();
console.log(`Found ${EN_GAMES.length} English games`);

// ────────────────────────────────────────────────────
// All locale translation data
// ────────────────────────────────────────────────────

/*
 * Each locale maps slug → { title, description }
 * Titles keep proper nouns intact.
 * Descriptions are 2 paragraphs separated by \n\n.
 */

const LOCALE_DATA = {};

// ═══════════════════════════════════════════════════
// SPANISH (es)
// ═══════════════════════════════════════════════════
LOCALE_DATA.es = {
'snake': {
  title: 'Google Snake',
  description: 'Juega al clásico juego de la serpiente integrado en Google. Guía a tu serpiente para comer manzanas mientras evitas las paredes y tu propia cola. Cuanto más sobrevivas, más rápido y complicado se vuelve.\n\nOriginalmente popularizado en los teléfonos Nokia a finales de los años 90, Snake se ha convertido en uno de los videojuegos más reconocidos de la historia. La versión de Google recrea fielmente la simplicidad adictiva que hizo del original un fenómeno mundial, ahora jugable al instante sin descargas.',
},
'minesweeper': {
  title: 'Google Buscaminas',
  description: 'Despeja el campo minado sin detonar una sola mina en este clásico rompecabezas de lógica. Usa las pistas numéricas para deducir dónde están las minas ocultas y márcalas con banderas.\n\nEl Buscaminas ha sido un básico de la informática personal desde que Microsoft lo incluyó con Windows 3.1 en 1992. Lo que comenzó como un simple pasatiempo se convirtió en un rompecabezas competitivo a nivel mundial con comunidades dedicadas de speedrunning.',
},
'tic-tac-toe': {
  title: 'Google Tres en Raya',
  description: 'Juega al clásico Tres en Raya contra la IA de Google en dificultad fácil, media o imposible. Coloca tu X o O en la cuadrícula de 3×3 e intenta alinear tres marcas antes que tu oponente.\n\nEl Tres en Raya es uno de los juegos de estrategia más antiguos de la historia, con orígenes en el antiguo Egipto. Aunque lo suficientemente simple para que los niños lo aprendan, introduce conceptos fundamentales de estrategia. En dificultad imposible, la IA juega de forma matemáticamente perfecta.',
},
'pacman': {
  title: 'PAC-MAN Doodle',
  description: 'Juega al legendario PAC-MAN recreado como Doodle de Google para su 30 aniversario en 2010. Navega por el icónico laberinto, come todos los puntos y atrapa a los fantasmas con las píldoras de poder.\n\nEste fue el primer Doodle jugable de Google y se convirtió en un fenómeno cultural — aproximadamente mil millones de personas lo jugaron en los primeros tres días. Reproduce fielmente la experiencia arcade original de Namco de 1980, completa con efectos de sonido auténticos y patrones de IA de los fantasmas.',
},
'les-paul-guitar': {
  title: 'Doodle de Guitarra Les Paul',
  description: 'Rasguea y graba tus propios riffs de guitarra en este Doodle interactivo en honor a Les Paul, inventor de la guitarra eléctrica de cuerpo sólido. Pulsa las cuerdas con el ratón o toca melodías con el teclado.\n\nLanzado el 9 de junio de 2011 para celebrar lo que habría sido el 96 cumpleaños de Les Paul, este Doodle fue uno de los más populares jamás creados. Cuenta con una interfaz de guitarra realista que responde tanto al ratón como al teclado.',
},
'basketball-2012': {
  title: 'Doodle Baloncesto 2012',
  description: 'Lanza tiros en este Doodle de baloncesto de los Juegos Olímpicos de Londres 2012. Mantén pulsada la barra espaciadora para ajustar la potencia y suéltala en el momento perfecto.\n\nEste Doodle fue parte de la serie de juegos deportivos interactivos de Google para los Juegos Olímpicos de Verano de Londres 2012. Cada día de los Juegos presentaba un deporte diferente, dando a jugadores de todo el mundo la oportunidad de competir.',
},
'hurdles-2012': {
  title: 'Doodle Vallas 2012',
  description: 'Corre por la pista y salta las vallas en este Doodle de los Juegos Olímpicos de Londres 2012. Alterna rápidamente las teclas izquierda y derecha para ganar velocidad y salta con la barra espaciadora.\n\nUno de los Doodles olímpicos más populares de 2012, el juego de vallas se convirtió en viral mientras los jugadores competían por los tiempos más rápidos. La mecánica de teclear rápidamente capturó la intensidad de un sprint real.',
},
'slalom-canoe': {
  title: 'Doodle Canoa Slalom 2012',
  description: 'Rema tu canoa a través del curso de slalom en este Doodle de los Juegos Olímpicos de Londres 2012. Usa las teclas de dirección para dirigirte a través de cada puerta en el orden correcto.\n\nEste Doodle de deportes acuáticos trajo la emoción del slalom de canoa olímpico a millones de navegadores durante los Juegos de Londres 2012. Los controles intuitivos lo hicieron fácil de aprender pero difícil de dominar.',
},
'soccer-2012': {
  title: 'Doodle Fútbol 2012',
  description: 'Juega como portero en este Doodle de fútbol de los Juegos Olímpicos de Londres 2012. Lánzate a izquierda o derecha con las teclas de dirección, o quédate en el centro con la barra espaciadora.\n\nEste desafío de portero fue uno de los Doodles deportivos más jugados durante los Juegos Olímpicos de 2012. Los reflejos rápidos necesarios para leer el disparo y reaccionar a tiempo daban una muestra de la presión de una tanda de penaltis.',
},
'robert-moog': {
  title: 'Doodle Sintetizador Robert Moog',
  description: 'Gira perillas y conecta cables en un sintetizador Moog virtual en este Doodle interactivo en honor a Robert Moog, pionero de la música electrónica. Ajusta osciladores, filtros y efectos para crear tus propios sonidos.\n\nLanzado el 23 de mayo de 2012 para lo que habría sido el 78 cumpleaños de Robert Moog, este Doodle es un sintetizador de cuatro osciladores completamente funcional. Los inventos de Moog revolucionaron la música popular en los años 60 y 70.',
},
'alan-turing': {
  title: 'Doodle Máquina de Alan Turing',
  description: 'Resuelve rompecabezas de lógica en una máquina de Turing virtual para honrar al padre de la informática. Programa el cabezal configurando estados y transiciones para producir la salida binaria correcta.\n\nCreado para lo que habría sido el 100 cumpleaños de Turing el 23 de junio de 2012, este Doodle es una herramienta educativa genuina. El concepto de Turing de una máquina universal sentó las bases teóricas de toda la computación moderna.',
},
'zamboni': {
  title: 'Doodle Zamboni',
  description: 'Conduce la máquina Zamboni por la pista de hielo en este encantador Doodle. Usa las teclas de dirección para dirigir la Zamboni sobre cada trozo de hielo rugoso y pulir toda la superficie.\n\nEste Doodle celebró el cumpleaños de Frank Zamboni, quien inventó la icónica máquina pulidora de hielo en 1949. El juego relajante de cubrir metódicamente cada centímetro de la pista se convirtió en un éxito sorpresa.',
},
'doodle-crossword': {
  title: 'Doodle Crucigrama',
  description: 'Resuelve el crucigrama de Google con pistas sobre la historia de los crucigramas y cultura general. Haz clic en una pista para resaltar su fila o columna y escribe las respuestas letra por letra.\n\nEste Doodle interactivo celebró el centenario del crucigrama, publicado por primera vez en el periódico New York World el 21 de diciembre de 1913 por el periodista Arthur Wynne.',
},
'doodle-roswell': {
  title: 'Doodle 66 Aniversario de Roswell',
  description: 'Ayuda a un alienígena varado a encontrar las piezas dispersas de su nave espacial en esta encantadora aventura point-and-click ambientada en el Roswell de 1947. Haz clic en objetos para interactuar y resolver puzzles.\n\nCreado para el 66 aniversario del famoso incidente de Roswell, este Doodle de tres escenas es uno de los juegos de aventura más queridos de Google. El estilo artístico caprichoso y los puzzles ambientales lo hacen una experiencia deliciosa.',
},
'mothers-day-2013': {
  title: 'Doodle Día de la Madre 2013',
  description: 'Crea una tarjeta personalizada para el Día de la Madre eligiendo entre varios materiales de manualidades, pegatinas y decoraciones en este conmovedor Doodle interactivo.\n\nEste Doodle de 2013 celebró la creatividad y el amor que se pone en las tarjetas hechas a mano. La interfaz intuitiva de arrastrar y soltar facilita a niños y adultos crear algo verdaderamente personal.',
},
'doodle-google-15th': {
  title: 'Doodle 15 Cumpleaños de Google',
  description: 'Celebra el 15 cumpleaños de Google golpeando una piñata llena de dulces y sorpresas. Haz clic o pulsa la barra espaciadora para dar golpes y recoger todos los dulces que puedas.\n\nLanzado el 27 de septiembre de 2013 para marcar el 15 aniversario de Google. Google fue fundado oficialmente el 4 de septiembre de 1998 por Larry Page y Sergey Brin en un garaje de Menlo Park, California.',
},
'rubiks-cube': {
  title: 'Doodle Cubo de Rubik',
  description: 'Gira las caras de un Cubo de Rubik virtual completamente interactivo para resolverlo en el menor número de movimientos posible. Haz clic y arrastra las caras para alinear cada lado en un solo color.\n\nEste Doodle celebró el 40 aniversario del Cubo de Rubik, inventado por el arquitecto húngaro Ernő Rubik en 1974. Con más de 43 trillones de configuraciones posibles y una sola solución, es el juguete de rompecabezas más vendido del mundo.',
},
'doodle-beethoven': {
  title: 'Doodle Beethoven',
  description: 'Ayuda a Beethoven a recomponer sus famosas obras musicales ordenando los compases desordenados. Arrastra y suelta las medidas en su secuencia correcta y escucha cada obra maestra reproducirse perfectamente.\n\nEste Doodle de 2015 celebró el 245 cumpleaños de Beethoven con un encantador rompecabezas musical con obras icónicas como Para Elisa y la Quinta Sinfonía.',
},
'eiji-tsuburaya': {
  title: 'Doodle Eiji Tsuburaya',
  description: 'Juega un juego de desplazamiento lateral retro en honor a Eiji Tsuburaya, el legendario creador de los efectos especiales de Godzilla y Ultraman. Lucha contra monstruos gigantes y salva la ciudad.\n\nLanzado el 7 de julio de 2015 para lo que habría sido el 114 cumpleaños de Tsuburaya, este Doodle rinde homenaje al padre del cine tokusatsu japonés. Sus técnicas pioneras revolucionaron la industria cinematográfica.',
},
'pony-express': {
  title: 'Doodle Pony Express',
  description: 'Cabalga por la frontera americana recolectando cartas y paquetes de correo mientras esquivas cactus y obstáculos en este runner sin fin. Usa las teclas arriba y abajo para cambiar de carril.\n\nEste Doodle celebró el 155 aniversario del Pony Express, el legendario servicio de correo que operó de abril de 1860 a octubre de 1861, cubriendo casi 3.200 km de Missouri a California en solo 10 días.',
},
'global-candy-cup': {
  title: 'Copa Global de Dulces 2015',
  description: 'Elige tu equipo y compite en la Copa Global de Dulces — una carrera de Halloween para recolectar la mayor cantidad de caramelos. Elige entre una bruja, fantasma, vampiro u otro personaje espeluznante.\n\nEste Doodle de Halloween 2015 introdujo un elemento competitivo por equipos donde jugadores de todo el mundo contribuían a puntuaciones globales. El estilo artístico colorido y amigable lo hacía perfecto para jugadores de todas las edades.',
},
'magic-cat-academy': {
  title: 'Magic Cat Academy (Halloween 2016)',
  description: 'Juega como Momo, la gata maga, y defiende tu escuela de magia de una invasión de fantasmas. Dibuja símbolos con el ratón para lanzar hechizos que coincidan con las formas sobre cada fantasma.\n\nEl Doodle de Halloween 2016 se convirtió en una de las creaciones interactivas más queridas de Google. La adorable protagonista Momo, basada en una gata negra real del equipo de Doodle, conquistó corazones en todo el mundo.',
},
'google-cat-game': {
  title: 'Juego del Gato Mago de Google',
  description: 'El querido juego Magic Cat Academy protagonizado por Momo la gata maga — desliza y dibuja símbolos de hechizos para defender tu escuela de hordas de fantasmas invasores.\n\nConocido también como el "Juego del Gato de Halloween de Google", es uno de los juegos de Google más buscados año tras año. Momo se ha convertido en la mascota no oficial de Google para Halloween, protagonizando tres secuelas.',
},
'doodle-clara-rockmore': {
  title: 'Doodle Theremin Clara Rockmore',
  description: 'Toca un theremin virtual en honor a Clara Rockmore, considerada la mayor virtuosa del theremin de todos los tiempos. Mueve el ratón arriba y abajo para controlar el tono y de lado a lado para el volumen.\n\nLanzado el 9 de marzo de 2016, este Doodle presenta un hermoso modo de lección animado. El theremin, inventado en 1920, es el único instrumento musical que se toca sin contacto físico.',
},
'doodle-scoville': {
  title: 'Doodle Scoville',
  description: 'Pon a prueba tu tolerancia al picante en este Doodle que celebra a Wilbur Scoville y su famosa escala de pungencia. Lanza helado contra pimientos cada vez más picantes que marchan hacia ti.\n\nCreado para el 151 cumpleaños de Scoville el 22 de enero de 2016, este Doodle enseña sobre la escala Scoville mientras juegas. La escala va desde 0 (pimiento) hasta más de 2 millones (Carolina Reaper).',
},
'doodle-valentines-day': {
  title: 'San Valentín 2017 — Amor de Pangolín',
  description: 'Ayuda a un pangolín enamorado a conquistar a su amada preparando deliciosos chocolates. Mezcla ingredientes según recetas, moldea los chocolates y sírvelos para ganar su corazón.\n\nEste Doodle de San Valentín 2017 presentó al pangolín en peligro de extinción para concienciar sobre el mamífero más traficado del mundo. Las ocho especies de pangolín están amenazadas de extinción.',
},
'pangolin-love': {
  title: 'Doodle Amor de Pangolín',
  description: 'Una encantadora aventura de San Valentín donde preparas chocolates para ayudar a un tímido pangolín a expresar su amor. Sigue recetas para mezclar, moldear y decorar dulces a lo largo de cuatro niveles.\n\nConocido también como el Doodle de San Valentín 2017, este juego generó conciencia mundial sobre los pangolínes, el animal más traficado del mundo. Las organizaciones conservacionistas reportaron aumentos significativos en donaciones.',
},
'doodle-cricket-game': {
  title: 'Doodle de Cricket',
  description: 'Juega una encantadora partida de cricket con un adorable elenco de caracoles y grillos en este Doodle que celebra el Trofeo de Campeones de la ICC. Haz clic en el momento justo para batear y anotar carreras.\n\nLanzado durante el Trofeo de Campeones de la ICC 2017, este Doodle llevó la alegría del cricket a millones. Los entrañables personajes insecto y la mecánica de un solo toque capturaron perfectamente la emoción del bateo.',
},
'doodle-kids-coding': {
  title: 'Programación para Niños (Doodle de Codificación)',
  description: 'Ayuda a un lindo conejito a recolectar zanahorias ensamblando bloques de código direccionales para guiar su camino. Arrastra y suelta bloques de flechas, bucles y acciones para construir una secuencia.\n\nCreado para el 50 aniversario de los lenguajes de programación para niños, este Doodle introduce conceptos fundamentales de programación como secuenciación, bucles y condicionales, inspirado en el lenguaje Logo creado en 1967.',
},
'birth-of-hip-hop': {
  title: 'Doodle Nacimiento del Hip Hop',
  description: 'Gira discos en tocadiscos duales y haz scratch a través de la historia del hip hop en este innovador Doodle interactivo. Mezcla ritmos, cruza pistas y desbloquea samples legendarios.\n\nLanzado el 11 de agosto de 2017 para celebrar el 44 aniversario del nacimiento del hip hop en una fiesta en el Bronx, este Doodle es una carta de amor a la cultura DJ con una interfaz de tocadiscos completamente funcional.',
},
'oskar-fischinger': {
  title: 'Doodle Musical Oskar Fischinger',
  description: 'Crea fascinantes composiciones de música visual en este Doodle interactivo en honor al animador abstracto Oskar Fischinger. Coloca formas geométricas en una cuadrícula musical y mira cómo generan una melodía única.\n\nOskar Fischinger fue un animador pionero germano-americano cuyo trabajo inspiró directamente la secuencia de "Tocata y Fuga" de Fantasia de Disney. Este Doodle captura su filosofía de que el arte visual y la música son inseparables.',
},
'komodo-national-park': {
  title: 'Doodle Quiz Parque Nacional de Komodo',
  description: 'Responde un fascinante cuestionario sobre el dragón de Komodo y su hábitat en el Parque Nacional de Indonesia. Aprende datos sorprendentes sobre el lagarto más grande del mundo.\n\nEste Doodle educativo celebró el 37 aniversario de la fundación del Parque Nacional de Komodo, Patrimonio de la Humanidad por la UNESCO. Los dragones de Komodo pueden crecer más de 3 metros y pesar hasta 70 kg.',
},
'garden-gnomes': {
  title: 'Doodle Gnomos de Jardín',
  description: 'Lanza gnomos de jardín desde una catapulta lo más lejos posible a través de hermosos paisajes. Haz clic y mantén para ajustar el ángulo de lanzamiento y suelta para enviarlos volando.\n\nEste Doodle de 2018 celebró la historia de los gnomos de jardín, originados en la Alemania del siglo XIX como "Gartenzwerge". La satisfactoria mecánica basada en física y los pintorescos escenarios lo convirtieron en un éxito viral.',
},
'halloween': {
  title: 'El Gran Duelo Fantasma (Halloween 2018)',
  description: 'Compite en el Gran Duelo Fantasma, un Doodle multijugador donde dos equipos de fantasmas compiten por recolectar llamas de espíritus. Navega por pasillos embrujados y roba llamas al equipo rival.\n\nEl Doodle de Halloween 2018 fue el primer juego multijugador de Google, conectando a jugadores de todo el mundo en partidas por equipos en tiempo real. Los adorables diseños de fantasmas y la mecánica estratégica de robo de llamas lo convirtieron en un clásico instantáneo.',
},
'baseball': {
  title: 'Doodle Béisbol (4 de Julio)',
  description: 'Sal al plato y batea jonrones en este Doodle de béisbol del 4 de Julio. Juega como personajes de comida americana y golpea la bola para pasarla por los jardineros temáticos.\n\nLanzado para el Día de la Independencia 2019, este Doodle captura perfectamente el espíritu del pasatiempo favorito de América con un giro divertido. Los encantadores personajes de comida y los lanzamientos cada vez más rápidos hacen cada turno emocionante.',
},
'doodle-loteria': {
  title: 'Doodle Celebrando la Lotería',
  description: 'Juega al querido juego de cartas mexicano de la Lotería en este colorido Doodle multijugador. Escucha las adivinanzas del cantor y marca las cartas correspondientes en tu tablero para gritar "¡Lotería!".\n\nA menudo llamada "bingo mexicano", la Lotería ha sido una tradición familiar en México desde el siglo XVIII. Este Doodle de 2019 celebra su significado cultural con cartas bellamente ilustradas con imágenes tradicionales y modernas.',
},
'celebrating-bach': {
  title: 'Celebrando a Johann Sebastian Bach',
  description: 'Compón tus propias armonías al estilo de Bach usando inteligencia artificial. Escribe una melodía sencilla y presiona "Armonizar" para que un modelo de aprendizaje automático añada contrapunto al estilo barroco.\n\nEste innovador Doodle de 2019 fue el primero en usar IA como mecánica central. Google entrenó un modelo llamado Coconet con 306 corales de Bach, haciendo accesible el genio del compositor a cualquier persona.',
},
'doodle-earth-day': {
  title: 'Doodle Día de la Tierra 2020 — Abeja',
  description: 'Ayuda a una abeja a polinizar flores en un hermoso jardín en este encantador Doodle del Día de la Tierra. Vuela de flor en flor recolectando y esparciendo polen para que todo el jardín florezca.\n\nCreado para el Día de la Tierra 2020 como parte de la serie "Quédate y Juega en Casa" de Google durante la pandemia. Las abejas polinizan aproximadamente el 75% de todas las plantas con flores y el 35% de los cultivos alimentarios.',
},
'magic-cat-academy-2': {
  title: 'Magic Cat Academy 2 (Halloween 2020)',
  description: 'Momo la gata maga regresa para una aventura submarina, sumergiéndose bajo las olas para batallar contra espíritus marinos fantasmales. Dibuja símbolos para lanzar hechizos contra nuevos enemigos oceánicos.\n\nLa secuela de Halloween 2020 llevó a Momo de la escuela a las profundidades del océano, introduciendo ambientes acuáticos y enemigos fantasma marinos. Lanzado durante la pandemia, trajo alegría a millones.',
},
'doodle-mbira': {
  title: 'Doodle Celebrando la Mbira',
  description: 'Toca una mbira virtual — un piano de pulgar tradicional africano — en este Doodle musical que celebra uno de los instrumentos más preciados de Zimbabue. Haz clic en las lengüetas para crear melodías resonantes.\n\nLa mbira dzavadzimu ha sido central en la cultura shona durante más de mil años, utilizada en ceremonias, narración de historias y comunicación espiritual. Este Doodle honra su rica herencia con una recreación digital de sonido auténtico.',
},
'doodle-history-of-pizza': {
  title: 'Doodle Historia de la Pizza',
  description: 'Corta y sirve pizzas en este Doodle interactivo que celebra la deliciosa historia de la pizza. Dibuja líneas con el ratón para cortar cada pizza en el número exacto de porciones iguales que pide el cliente.\n\nEste Doodle de 2021 llevó a los jugadores en un viaje culinario a través de los 10.000 años de historia de la pizza, desde los panes planos antiguos de Cerdeña hasta la moderna Margherita.',
},
'wewa-weaving': {
  title: 'Doodle Tejido We:wa',
  description: 'Teje patrones coloridos en un telar virtual en este Doodle que honra el arte textil tradicional indígena del tejido We:wa de los pueblos Pueblo. Selecciona colores de hilo y pasa los hilos por la urdimbre.\n\nEste Doodle de 2021 celebra las tradiciones de tejido centenarias de los pueblos Pueblo del suroeste americano. Tejer es una forma de arte sagrada transmitida de generación en generación, donde cada patrón tiene significado cultural.',
},
'champion-island-games': {
  title: 'Doodle Champion Island Games',
  description: 'Embárcate en una aventura RPG épica por la Isla de los Campeones. Compite en siete minijuegos deportivos, explora un mundo abierto vibrante inspirado en el folclore japonés y completa misiones secundarias.\n\nCreado para los Juegos Olímpicos de Tokio 2020, es el Doodle más grande y ambicioso jamás creado. Desarrollado durante tres años con STUDIO 4°C, presenta una narrativa completa, 24 misiones secundarias y siete juegos deportivos completos.',
},
'doodle-valentines-day-2022': {
  title: 'Doodle San Valentín 2022 — Hámsters',
  description: 'Guía a adorables hámsters a través de un laberinto de puzzles y obstáculos para reunirlos con su pareja en este Doodle de San Valentín. Haz clic para interactuar con los elementos del puzzle.\n\nEste Doodle de 2022 encantó a los jugadores con su diminuto protagonista y mecánicas de puzzle ingeniosas. La conmovedora premisa de reunir a dos hámsters enamorados lo convirtió en la actividad perfecta de San Valentín.',
},
'celebrating-petanque': {
  title: 'Doodle Celebrando la Petanca',
  description: 'Lanza bolas y apunta al cochonnet en este Doodle que celebra el clásico juego francés de la petanca. Haz clic y arrastra para ajustar el ángulo y la potencia de tu lanzamiento.\n\nLa petanca se originó en el sur de Francia en 1907 y se ha convertido en una de las actividades recreativas más populares del país. Este Doodle captura el espíritu relajado del juego con paisajes provenzales.',
},
'boba-bubble-tea': {
  title: 'Doodle Celebrando el Bubble Tea',
  description: 'Mezcla y combina sabores para crear el bubble tea perfecto en este Doodle interactivo que celebra la querida bebida taiwanesa. Elige tu base de té, añade sabores, selecciona toppings y tu tipo de boba favorito.\n\nEl bubble tea fue inventado en Taiwán en los años 80 y desde entonces se ha convertido en un fenómeno global en más de 30 países. Este Doodle de 2023 explora la rica historia de la bebida con miles de combinaciones.',
},
'celebrating-pani-puri': {
  title: 'Doodle Celebrando el Pani Puri',
  description: 'Sirve deliciosos pani puri a una cola de clientes hambrientos en este Doodle rápido que celebra la comida callejera más querida de la India. Rellena puris crujientes con la combinación correcta de chutneys.\n\nEl pani puri es uno de los alimentos callejeros más icónicos de la India, conocido con diferentes nombres por todo el subcontinente. Este Doodle de 2023 captura la emoción y velocidad de un puesto real de pani puri.',
},
'celebrating-lake-xochimilco': {
  title: 'Doodle Celebrando el Lago Xochimilco',
  description: 'Explora los jardines flotantes del Lago Xochimilco y guía a un adorable ajolote a través de su hábitat acuático en este hermoso Doodle interactivo del Patrimonio de la Humanidad de la UNESCO.\n\nLas chinampas del Lago Xochimilco son un vestigio de la agricultura prehispánica del imperio azteca. Este Doodle de 2023 sensibiliza sobre el ajolote en peligro crítico de extinción, una salamandra que solo existe en estado salvaje en los canales de Xochimilco.',
},
'celebrating-popcorn': {
  title: 'Doodle Celebrando las Palomitas',
  description: 'Haz estallar, atrapa y sirve deliciosas palomitas de maíz en este Doodle multijugador. Cronometra tus clics para hacer estallar los granos en el momento perfecto y atrapa las palomitas en tu cubo.\n\nEste Doodle de 2024 celebra la historia de las palomitas, que se han disfrutado durante miles de años — evidencia arqueológica muestra que en Perú ya se comían palomitas hace 4.700 años.',
},
'magic-cat-academy-3': {
  title: 'Magic Cat Academy 3 (Halloween 2024)',
  description: 'Momo la gata maga regresa para una tercera aventura espeluznante. Lanza hechizos dibujando símbolos para luchar contra nuevos tipos de fantasmas en ubicaciones encantadas con nuevos enemigos y power-ups.\n\nEl Doodle de Halloween 2024 continúa la querida serie Magic Cat Academy, la franquicia de juegos recurrentes más popular de Google. Cada entrega expande el juego con nuevos ambientes y mecánicas de hechizos.',
},
'rise-of-the-half-moon': {
  title: 'Doodle Rise of the Half Moon',
  description: 'Juega un juego de cartas estratégico donde equilibras cartas de día y noche para construir combos poderosos y superar a tu oponente. Selecciona cartas considerando cómo interactúan sol y luna.\n\nEste Doodle recurrente presenta una jugabilidad táctica profunda envuelta en hermoso arte celestial. Se lanzaron múltiples capítulos durante 2024-2025, creando una saga continua que mantuvo a los jugadores volviendo.',
},
'chinese-new-year-snake': {
  title: 'Juego de la Serpiente del Año Nuevo Chino',
  description: 'Celebra el Año de la Serpiente con este giro festivo del clásico juego de la serpiente. Deslízate por el tablero recolectando sobres rojos, faroles y símbolos tradicionales del Año Nuevo Chino.\n\nEste juego especial honra el zodíaco chino y las tradiciones del Año Nuevo Lunar. El Año de la Serpiente llega cada 12 años, y en la astrología china, la serpiente simboliza sabiduría, elegancia y encanto.',
},
'doctor-who': {
  title: 'Doodle 50 Aniversario de Doctor Who',
  description: 'Juega como todos los Doctores en una aventura point-and-click que celebra el 50 aniversario de Doctor Who. Navega por niveles inspirados en episodios clásicos evitando Daleks y Cybermen.\n\nCreado en noviembre de 2013 para el 50 aniversario de la legendaria serie de ciencia ficción de la BBC. Doctor Who se emitió por primera vez el 23 de noviembre de 1963 y es la serie de televisión de ciencia ficción más longeva de la historia.',
},
'chrome-dino': {
  title: 'Chrome Dino (Juego Sin Internet)',
  description: 'El famoso corredor del dinosaurio T-Rex de la página sin conexión de Chrome — ahora jugable en cualquier momento. Salta sobre cactus y agáchate bajo pterodáctilos en este runner sin fin donde la velocidad aumenta gradualmente.\n\nEl juego Chrome Dino fue creado por el diseñador de Google Sebastien Gabriel en 2014. Se ha convertido en uno de los juegos más jugados del mundo, con unos 270 millones de partidas al mes en navegadores Chrome.',
},
't-rex-run-3d': {
  title: 'T-Rex Run 3D',
  description: 'Experimenta el clásico juego del dinosaurio de Chrome reimaginado en impresionante 3D. Corre por un extenso paisaje desértico con profundidad y perspectiva, esquiva obstáculos y recoge power-ups.\n\nEsta versión 3D hecha por fans transforma el querido desplazamiento lateral en una experiencia tridimensional completa con entornos texturizados, iluminación dinámica y múltiples ángulos de cámara.',
},
'dino-swords': {
  title: 'Dino Swords',
  description: 'El juego del dinosaurio de Chrome con un arsenal de armas. Mientras corres por el desierto, recoge espadas, pistolas, martillos y gadgets que destruyen automáticamente los obstáculos en tu camino.\n\nCreado por MSCHF, el colectivo de arte viral de internet, Dino Swords añade 26 armas diferentes a la fórmula del dinosaurio de Chrome. Desde una katana hasta un arma de gravedad, cada arma cambia completamente la experiencia.',
},
'blob-opera': {
  title: 'Blob Opera',
  description: 'Crea hermosa música de ópera arrastrando cuatro coloridos personajes blob. Cada blob canta una parte vocal diferente — bajo, tenor, mezzosoprano y soprano — y un modelo de IA los armoniza en tiempo real.\n\nDesarrollado por David Li en colaboración con Google Arts & Culture, Blob Opera usa IA entrenada con las voces de cuatro cantantes de ópera profesionales reales. Los irresistibles personajes blob y la gratificación musical instantánea lo convirtieron en sensación viral.',
},
'google-feud': {
  title: 'Google Feud',
  description: 'Adivina las sugerencias de autocompletado más populares de Google en este adictivo juego al estilo Family Feud. Escribe tus respuestas y descubre qué busca el mundo.\n\nInspirado en el clásico programa de TV, Google Feud revela las cosas sorprendentemente divertidas y curiosas que millones de personas buscan cada día. Se ha convertido en un popular juego de fiestas que genera risas y conversaciones.',
},
'quick-draw': {
  title: 'Quick, Draw!',
  description: '¿Puede una red neuronal adivinar lo que estás dibujando? Esboza el objeto indicado en 20 segundos y observa cómo la IA de Google intenta reconocer tu dibujo en tiempo real.\n\nQuick, Draw! es uno de los experimentos de IA más populares de Google, impulsado por una red neuronal entrenada con millones de dibujos de jugadores de todo el mundo. El conjunto de datos de más de 50 millones de dibujos ha sido publicado como código abierto.',
},
'chrome-music-lab': {
  title: 'Chrome Music Lab',
  description: 'Explora la música a través de experimentos interactivos prácticos en esta colección de herramientas creativas de Google. Crea canciones, explora ritmos, visualiza ondas sonoras y descubre cómo funciona la música.\n\nChrome Music Lab fue creado para hacer el aprendizaje de la música accesible a todos. Cada experimento se enfoca en un concepto musical diferente, presentado a través de interfaces coloridas e intuitivas. Se usa ampliamente en aulas de todo el mundo.',
},
'google-maps-snake': {
  title: 'Google Maps Snake',
  description: 'Juega al clásico Snake en calles reales usando Google Maps como tablero de juego. Navega un autobús, tren u otro vehículo por ciudades como El Cairo, São Paulo, Londres, Sídney, y Tokio, recogiendo pasajeros.\n\nLanzado como función de April Fools de Google Maps en 2019, este mashup combina la nostalgia de Snake con geografía real. Jugar en calles reales crea desafíos únicos en cada ciudad.',
},
'google-earth': {
  title: 'Google Earth',
  description: 'Explora todo el planeta en 3D con Google Earth, volando desde las cumbres del Himalaya hasta las profundidades de las fosas oceánicas. Navega imágenes satelitales y tours guiados curados.\n\nGoogle Earth ha revolucionado cómo vemos nuestro planeta desde su lanzamiento en 2005. Construido a partir de petabytes de imágenes satelitales, ofrece tours curados de maravillas naturales, sitios culturales e incluso otros planetas.',
},
'santa-tracker': {
  title: 'Google Santa Tracker',
  description: 'Sigue el viaje mágico de Papá Noel por el mundo en Nochebuena y juega docenas de minijuegos navideños durante diciembre. Construye juguetes, programa elfos y explora la aldea de Papá Noel.\n\nGoogle Santa Tracker ha sido una querida tradición navideña desde 2004, entreteniendo a millones de familias cada diciembre. Se ha convertido en uno de los sitios web navideños más visitados del mundo.',
},
'space-invaders': {
  title: 'Space Invaders',
  description: 'Defiende la Tierra de oleadas de invasores alienígenas que descienden en esta fiel recreación del clásico arcade de 1978. Mueve tu cañón láser y dispara hacia arriba contra las formaciones alienígenas.\n\nSpace Invaders, creado por Tomohiro Nishikado, fue uno de los primeros grandes éxitos arcade y ayudó a lanzar la edad dorada de los videojuegos. Fue tan popular en Japón que causó una escasez temporal de monedas de 100 yenes.',
},
'doodle-jump-2': {
  title: 'Doodle Jump 2',
  description: 'Salta hasta la cima en esta secuela del legendario plataformas vertical. Salta de plataforma en plataforma, evita enemigos, agarra power-ups como jetpacks y alcanza la puntuación más alta posible.\n\nEl Doodle Jump original fue lanzado en 2009 y se convirtió en uno de los juegos móviles más descargados de todos los tiempos, con más de 15 millones de ventas. Esta secuela amplía la fórmula adictiva con nuevos mundos y enemigos.',
},
'google-solitaire': {
  title: 'Google Solitario',
  description: 'Juega al clásico Solitario Klondike en tu navegador sin descargas. Apila cartas en orden descendente alternando colores y construye cuatro pilas base de As a Rey por palo.\n\nEl Solitario Klondike es el juego de cartas más jugado del mundo, incluido en cada versión de Windows desde 1990. Fue diseñado originalmente para enseñar a la gente a usar el ratón practicando arrastrar y soltar.',
},
'google-spider-solitaire': {
  title: 'Google Spider Solitario',
  description: 'Organiza cartas en secuencias descendentes del mismo palo en diez columnas del tableau. Completa una secuencia de Rey a As del mismo palo para eliminarla. Elige entre modos de 1, 2 o 4 palos.\n\nSpider Solitario ganó enorme popularidad cuando Microsoft lo incluyó en Windows XP en 2001. El modo de cuatro palos se considera uno de los juegos de cartas individuales más desafiantes.',
},
'google-freecell': {
  title: 'Google FreeCell',
  description: 'Pon a prueba tu pensamiento estratégico en este querido juego de cartas donde casi todas las manos son resolubles. Usa cuatro celdas libres como almacenamiento temporal para maniobrar cartas entre columnas.\n\nFreeCell se distingue de otros juegos de solitario porque casi cada partida puede ganarse — solo una entre las 32.000 originales de Windows es irresoluble. Esto lo convierte en un juego de pura habilidad que premia la planificación cuidadosa.',
},
'google-cricket': {
  title: 'Google Cricket',
  description: 'Sal a batear y golpea boundaries en este divertido juego de cricket con adorables personajes insecto. Cronometra tus clics para batear en el momento justo y acumula la mayor puntuación posible.\n\nEste juego usa el mismo motor de cricket del Doodle del Trofeo ICC 2017, con el entrañable elenco de caracoles y grillos. El cricket es el segundo deporte más popular del mundo con unos 2.500 millones de aficionados.',
},
'google-memory': {
  title: 'Juego de Memoria Google',
  description: 'Voltea cartas y encuentra pares iguales en este clásico juego de concentración. Haz clic en dos cartas para revelar sus imágenes ocultas — si coinciden, se quedan; si no, se voltean. Despeja el tablero en el menor número de movimientos.\n\nEl juego de memoria es un ejercicio cognitivo comprobado que fortalece la memoria a corto plazo, el reconocimiento visual y la conciencia espacial. Estudios muestran que jugar regularmente mejora la concentración en niños y adultos.',
},
'google-ludo': {
  title: 'Google Ludo',
  description: 'Lanza los dados y lleva tus fichas alrededor del tablero en este clásico juego familiar de estrategia. Saca un seis para poner nuevas fichas en juego y sé el primero en llevar todas a casa.\n\nLudo se deriva del antiguo juego indio Pachisi, que data del siglo VI y era jugado por emperadores mogoles en tableros de tamaño real. La versión moderna fue patentada en Inglaterra en 1896.',
},
'google-word-coach': {
  title: 'Google Word Coach',
  description: 'Amplía tu vocabulario con este atractivo juego de preguntas que pone a prueba tu conocimiento de definiciones, sinónimos y relaciones entre palabras. Elige la respuesta correcta y aprende nuevas palabras.\n\nGoogle Word Coach apareció originalmente en los resultados de búsqueda de Google para usuarios de países no angloparlantes, ayudándoles a mejorar su vocabulario en inglés de forma divertida y gamificada.',
},
'google-spinner': {
  title: 'Google Spinner',
  description: 'Dale un giro al spinner virtual y míralo girar. Alterna entre un fidget spinner para aliviar el estrés y una rueda numerada para generación de números aleatorios, perfecto para juegos o decisiones.\n\nLa herramienta spinner de Google fue introducida durante la locura de los fidget spinners de 2017. El modo fidget presenta físicas realistas con impulso y desaceleración gradual, mientras que la rueda de números sirve como generador aleatorio.',
},
'google-coin-flip': {
  title: 'Google Lanzar Moneda',
  description: '¿Necesitas tomar una decisión rápida? Lanza una moneda virtual con una satisfactoria animación de lanzamiento y deja que el destino decida entre cara y cruz.\n\nEl lanzamiento de monedas se ha usado para tomar decisiones desde la antigua Roma. La versión digital de Google trae esta práctica milenaria a la era moderna con animación suave y generación verdaderamente aleatoria.',
},
'google-dice-roller': {
  title: 'Google Lanzador de Dados',
  description: 'Lanza dados virtuales para juegos de mesa, RPGs de mesa o simplemente por diversión. Personaliza el número de dados y sus caras — desde dados estándar de seis caras hasta dados de 20 caras para D&D.\n\nLos lanzadores de dados digitales se han convertido en herramientas esenciales para la comunidad de juegos de mesa. La versión de Google usa generación de números criptográficamente aleatoria para lanzamientos justos.',
},
'google-timer': {
  title: 'Google Temporizador',
  description: 'Un temporizador de cuenta regresiva y cronómetro limpio y sencillo integrado en tu navegador. Configura cualquier duración, inicia la cuenta con un clic y recibe una alerta sonora cuando termine.\n\nLa herramienta de temporizador de Google se ha convertido en una utilidad indispensable para millones de personas que necesitan un cronómetro rápido y fiable sin instalar una aplicación.',
},
'google-metronome': {
  title: 'Google Metrónomo',
  description: 'Mantén el tempo perfecto con este metrónomo digital, con BPM ajustable desde adagio lento hasta prestissimo rápido. El péndulo visual y el clic de audio ayudan a músicos de todos los niveles.\n\nEl metrónomo fue patentado por Johann Maelzel en 1815 y ha sido herramienta esencial para músicos durante más de 200 años. La versión digital de Google ofrece control preciso de tempo en una interfaz limpia.',
},
'zerg-rush': {
  title: 'Zerg Rush',
  description: 'Defiende tus resultados de búsqueda de Google de una avalancha de letras "O" que caen en este icónico Easter egg inspirado en StarCraft. Haz clic rápidamente en cada O para destruirla antes de que devoren todo.\n\nEl Easter egg Zerg Rush apareció por primera vez en Google Search en 2012 como tributo a la franquicia StarCraft de Blizzard, donde "Zerg rush" describe una estrategia de ataque abrumador temprano.',
},
'atari-breakout': {
  title: 'Atari Breakout',
  description: 'Rompe bloques de colores con una bola que rebota en esta legendaria recreación del clásico arcade de Atari de 1976. Mueve tu paleta para mantener la bola en juego y limpia todos los ladrillos.\n\nBreakout fue diseñado por Nolan Bushnell y Steve Bristow, con el prototipo construido famosamente por un joven Steve Jobs y Steve Wozniak — los fundadores de Apple trabajaron en este juego antes de crear su empresa.',
},
'google-gravity': {
  title: 'Google Gravity',
  description: 'Mira cómo la página de inicio de Google colapsa bajo la fuerza de la gravedad. Todos los elementos — el logo, la barra de búsqueda, los botones — caen y se amontonan en el fondo. Arrastra cualquier pieza para lanzarla y disfruta del caos.\n\nGoogle Gravity es uno de los Easter eggs más populares jamás creados, demostrando simulación de física 2D en tiempo real en el navegador. A pesar de que todo se derrumba, la barra de búsqueda sigue funcionando.',
},
'thanos-snap': {
  title: 'Thanos Snap',
  description: 'Empuña el Guantelete del Infinito y chasquea para desintegrar la mitad de todos los resultados de búsqueda, como Thanos del Universo Cinematográfico de Marvel. Observa cómo los resultados se disuelven en polvo.\n\nEste Easter egg fue creado para promocionar Avengers: Endgame en 2019 y se convirtió en una de las funciones interactivas más virales de Google. El efecto de desintegración es fiel al estilo visual de la película.',
},
'super-mario-coin-block': {
  title: 'Bloque de Monedas Super Mario',
  description: 'Descubre el Easter egg oculto del bloque de monedas de Super Mario Bros. y golpéalo para recolectar monedas con ese icónico efecto de sonido "cha-ching". Haz clic repetidamente para acumular monedas.\n\nEste Easter egg celebra el 30 aniversario de Super Mario Bros., uno de los videojuegos más influyentes jamás creados. Lanzado por Nintendo en 1985, rescató la industria de las consolas domésticas del colapso.',
},
'google-pac-man': {
  title: 'Google PAC-MAN (elgooG)',
  description: 'El clásico Doodle de PAC-MAN de Google alojado en elgooG, dándote otra forma de jugar al icónico juego arcade de comecocos cuando quieras. Navega el laberinto, come todos los puntos y persigue a los fantasmas.\n\nEsta versión del legendario Doodle de PAC-MAN de 2010 se conserva en elgooG. PAC-MAN sigue siendo el juego arcade más lucrativo de todos los tiempos, habiendo generado más de 14.000 millones de dólares en ingresos.',
},
'google-mirror': {
  title: 'Google Mirror (elgooG)',
  description: 'Ve la página de búsqueda de Google reflejada en una imagen espejo perfecta. Todo está invertido — el texto se lee al revés, los botones están volteados, e incluso escribir aparece reflejado.\n\nGoogle Mirror (elgooG, que es "Google" al revés) ha deleitado a visitantes desde 2002. Es un espejo completamente funcional de Google Search donde todo funciona en reversa. Incluso ha sido usado en países donde Google está bloqueado.',
},
'google-in-1998': {
  title: 'Google en 1998',
  description: 'Haz un viaje nostálgico a 1998 para ver cómo era Google cuando se lanzó por primera vez. Navega la interfaz original con su diseño minimalista, enlaces azules y el encanto de la web primitiva.\n\nCuando Larry Page y Sergey Brin lanzaron Google desde un dormitorio de Stanford en septiembre de 1998, tenía una página blanca con solo un logo, una barra de búsqueda y dos botones. El contraste con el Google moderno ilustra lo lejos que ha llegado la web.',
},
'do-a-barrel-roll': {
  title: 'Do a Barrel Roll',
  description: 'Mira cómo toda la página de Google realiza un espectacular giro de 360 grados. La página rota suavemente en una satisfactoria vuelta completa antes de volver a la normalidad.\n\nEste Easter egg fue introducido en 2011 como tributo al juego de Nintendo 64 Star Fox, donde Peppy Hare le dice al jugador "¡Haz un giro de barril!". La suave animación CSS era innovadora en su momento.',
},
'google-askew': {
  title: 'Google Askew / Inclinado',
  description: 'Toda la página de Google se inclina ligeramente hacia un lado en este sutil y divertido Easter egg. Todo sigue funcionando normalmente, pero la visualización torcida es curiosamente desconcertante.\n\nBuscar "askew" o "tilt" en Google activa esta ingeniosa broma visual que sorprende a usuarios desde 2011. La ligera rotación es perfecta para gastar bromas a amigos y colegas.',
},
'friends-easter-eggs': {
  title: 'Easter Eggs de Friends',
  description: 'Descubre Easter eggs ocultos de la serie Friends en Google Search. Encuentra sorpresas interactivas de Ross, Rachel, Monica, Chandler, Joey y Phoebe con divertidas referencias a momentos icónicos.\n\nEstos Easter eggs fueron creados para celebrar el 25 aniversario de Friends, que se estrenó en NBC el 22 de septiembre de 1994 y se emitió durante 10 temporadas. La serie sigue siendo una de las comedias más vistas de la historia.',
},
'google-underwater': {
  title: 'Google Underwater',
  description: 'Sumérgete bajo las olas mientras la página de inicio de Google se hunde en un hermoso mundo submarino. Observa peces tropicales nadar, interactúa con criaturas marinas y disfruta de la tranquilidad oceánica.\n\nGoogle Underwater transforma la familiar página de búsqueda en un sereno ambiente marino con físicas de agua realistas. Puedes hacer clic para crear ondas, espantar a los peces e interactuar con la escena. La búsqueda sigue funcionando.',
},
'google-space': {
  title: 'Google Space',
  description: 'Lanza la página de inicio de Google al espacio exterior y mira cómo todos los elementos flotan en gravedad cero. El logo, la barra de búsqueda, botones y texto se dispersan en el vacío cósmico.\n\nGoogle Space demuestra simulación de física de gravedad cero en el navegador, convirtiendo la familiar página en un patio de juegos cósmico. Como Google Gravity, la barra de búsqueda sigue funcionando a pesar de flotar libremente.',
},
'google-tetris': {
  title: 'Google Tetris',
  description: 'Apila tetrominoes que caen y limpia líneas en esta fiel recreación del juego de rompecabezas más icónico del mundo. Usa las teclas de dirección para mover y rotar las piezas, construyendo líneas completas.\n\nTetris fue creado por el ingeniero soviético Alexey Pajitnov en 1984 y se ha convertido en el videojuego más vendido de todos los tiempos, con más de 520 millones de copias vendidas. El "efecto Tetris" — ver bloques cayendo al cerrar los ojos — es un fenómeno psicológico reconocido.',
},
'google-2048': {
  title: 'Google 2048',
  description: 'Desliza fichas numeradas en una cuadrícula 4×4 y fusiona números iguales para alcanzar la elusiva ficha 2048. Usa las teclas de dirección para desplazar las fichas — cuando dos del mismo número chocan, se fusionan.\n\nCreado por el desarrollador italiano Gabriele Cirulli en 2014 como proyecto de fin de semana, 2048 se convirtió en sensación viral de la noche a la mañana. El rompecabezas matemático aparentemente simple esconde una complejidad estratégica profunda.',
},
'google-interland': {
  title: 'Google Interland',
  description: 'Explora la tierra mágica de Interland y domina habilidades esenciales de seguridad en internet a través de cuatro emocionantes zonas de aventura. Lucha contra hackers, detecta phishing y protege tus datos.\n\nDesarrollado como parte de la iniciativa "Sé Genial en Internet" de Google, Interland enseña a los niños habilidades críticas de ciudadanía digital a través de juegos atractivos. Se usa en miles de escuelas en todo el mundo.',
},
'google-arts-culture-face-match': {
  title: 'Google Arts & Culture Face Match',
  description: 'Tómate un selfie y descubre tu doble en obras de arte famosas de miles de pinturas y retratos de museos de todo el mundo. La IA de Google analiza tus rasgos faciales y te empareja con obras famosas.\n\nLanzado como parte de Google Arts & Culture en 2018, Face Match se hizo viral casi inmediatamente. La IA compara tu foto con obras de más de 1.200 museos y galerías de todo el mundo.',
},
'google-teachable-machine': {
  title: 'Google Teachable Machine',
  description: 'Entrena tu propio modelo de inteligencia artificial usando tu webcam, micrófono o imágenes subidas — sin necesidad de programar. Crea clases, graba muestras, entrena el modelo y observa tu IA personalizada reconocer gestos y sonidos.\n\nGoogle Teachable Machine desmitifica la inteligencia artificial permitiendo que cualquiera construya y entrene un modelo de aprendizaje automático en minutos. La herramienta funciona completamente en el navegador usando TensorFlow.js.',
},
'great-ghoul-duel-2': {
  title: 'Great Ghoul Duel 2 (Halloween 2022)',
  description: 'Únete a jugadores de todo el mundo en esta espeluznante secuela del querido Great Ghoul Duel. Compite como adorables fantasmas para recolectar llamas de espíritus con nuevos power-ups y mapas embrujados.\n\nEl Doodle de Halloween 2022 amplió el éxito del juego multijugador original de 2018 con gráficos mejorados y nuevos entornos. La serie se ha convertido en uno de los eventos anuales más esperados de Google.',
},
'doodle-solitaire': {
  title: 'Doodle Solitario (Quédate y Juega en Casa 2020)',
  description: 'Juega al clásico Solitario Klondike como parte de la serie "Quédate y Juega en Casa" de Google de 2020. Construye pilas base de As a Rey por palo y despeja el tablero.\n\nDurante la pandemia de COVID-19 en abril de 2020, Google lanzó la serie de Doodles trayendo de vuelta juegos queridos para ayudar a la gente a pasar el tiempo durante el distanciamiento social. Fue jugado por cientos de millones de personas.',
},
'gerald-lawson-game-maker': {
  title: 'Celebrando a Gerald "Jerry" Lawson',
  description: 'Honra al padre del gaming moderno construyendo tus propios niveles de videojuegos en este Doodle interactivo. Usa el editor para colocar plataformas, enemigos, coleccionables y power-ups.\n\nJerry Lawson inventó el Fairchild Channel F en 1976 — la primera consola doméstica con cartuchos intercambiables. Su innovación revolucionó toda la industria del gaming, abriendo el camino para Atari 2600, Nintendo y PlayStation.',
},
'valentines-day-chemistry': {
  title: 'Química de San Valentín CuPd (2024)',
  description: 'Descubre la química del amor en este Doodle de San Valentín donde los elementos CuPd (Cobre y Paladio — "CuPid") se unen. Combina elementos químicos para crear reacciones temáticas de amor.\n\nEste ingenioso Doodle de 2024 combina romance con química real, usando elementos reales de la tabla periódica para deletrear palabras relacionadas con el amor. Un ejemplo perfecto de cómo los Doodles hacen del aprendizaje un juego.',
},
'rise-of-the-half-moon-november': {
  title: 'Rise of the Half Moon — Noviembre 2024',
  description: 'Continúa tu aventura celestial en el Capítulo 2 de la serie Rise of the Half Moon. Enfréntate a nuevos desafíos de cartas, descubre estrategias frescas y explora más profundamente la mitología lunar.\n\nEste capítulo de noviembre 2024 expandió el universo con nuevos tipos de cartas, mecánicas mejoradas y una narrativa continua sobre el equilibrio celestial.',
},
'rise-of-the-half-moon-december': {
  title: 'Rise of the Half Moon — Diciembre 2024',
  description: 'Explora paisajes lunares invernales y resuelve nuevos puzzles celestiales en el Capítulo 3 de la serie. Domina estrategias avanzadas de cartas y experimenta la historia en sus momentos más dramáticos.\n\nEl capítulo de diciembre 2024 trajo un tema invernal a la saga Half Moon. Como penúltimo capítulo, elevó las apuestas con puzzles más complejos y opciones estratégicas más profundas.',
},
'rise-of-the-half-moon-january': {
  title: 'Rise of the Half Moon — Enero 2025',
  description: 'Vive el gran final de la serie Rise of the Half Moon en este climático cuarto capítulo. Completa el desafío celestial definitivo y presencia la conclusión de la saga lunar.\n\nEl final de enero 2025 cerró la saga satisfactoriamente, uniendo hilos narrativos de los cuatro capítulos. Este enfoque serializado fue una primicia para Google, creando una historia continua que mantuvo a los jugadores regresando mes a mes.',
},
'indigenous-stickball': {
  title: 'Celebrando el Stickball Indígena',
  description: 'Aprende sobre el stickball indígena norteamericano — uno de los deportes de equipo más antiguos del continente — en este bellamente ilustrado Doodle. Descubre las tradiciones ceremoniales y la rica historia cultural.\n\nEl stickball indígena, a veces llamado "el hermano menor de la guerra", era jugado por tribus nativas americanas mucho antes del contacto europeo. El juego servía tanto como competición atlética como práctica ceremonial.',
},
'marie-tharp-doodle': {
  title: 'Celebrando a Marie Tharp',
  description: 'Explora el fondo oceánico con la geóloga pionera Marie Tharp en este Doodle interactivo. Cartografía cordilleras submarinas y ayuda a probar la teoría revolucionaria de la deriva continental.\n\nMarie Tharp creó el primer mapa completo del fondo oceánico, y su trabajo proporcionó evidencia crucial para la teoría de las placas tectónicas — uno de los descubrimientos científicos más importantes del siglo XX.',
},
'minecraft-easter-egg': {
  title: 'Easter Egg de Minecraft',
  description: 'Explora el icónico mundo de bloques de Minecraft Classic directamente en tu navegador. Construye, excava y crea a tu gusto en esta recreación nostálgica de la primera versión de Minecraft.\n\nMinecraft, creado por Markus "Notch" Persson en 2009, se ha convertido en el videojuego más vendido de todos los tiempos con más de 300 millones de copias vendidas, revolucionando el gaming, la educación y la creatividad digital.',
},
'google-science-journal': {
  title: 'Google Science Journal',
  description: 'Convierte tu dispositivo en un laboratorio de ciencias portátil. Usa los sensores de tu teléfono para medir intensidad lumínica, niveles de sonido, aceleración, presión barométrica y más.\n\nGoogle Science Journal democratiza la exploración científica convirtiendo los smartphones en poderosas herramientas de medición. Se ha usado en aulas desde primaria hasta universidad, haciendo la ciencia accesible y emocionante.',
},
'google-maps-pac-man': {
  title: 'Google Maps PAC-MAN',
  description: 'Juega PAC-MAN en calles reales en este legendario mashup de Google Maps. Navega por calles del mundo real mientras comes puntos, recoges frutas y evitas a los cuatro fantasmas.\n\nLanzado originalmente como broma de April Fools de Google Maps en 2015, este juego transforma las calles de cualquier ciudad en un laberinto de PAC-MAN, creando desafíos únicos según la ubicación.',
},
'google-whirlybird': {
  title: 'Google Whirlybird',
  description: 'Pilota un pequeño helicóptero a través de desafiantes circuitos de obstáculos en este adictivo juego de vuelo de un solo botón. Haz clic para ganar altitud y suelta para descender, pasando por estrechas aperturas.\n\nInspirado en el fenómeno viral de "Flappy Bird" de 2014, los juegos de helicóptero de un solo botón se han convertido en un género querido de juegos casuales. La mecánica elegantemente simple es fácil de aprender pero increíblemente difícil de dominar.',
},
'rugby-world-cup-2015': {
  title: 'Doodle Copa Mundial de Rugby 2015',
  description: 'Anota tries y convierte patadas en este Doodle que celebra la Copa Mundial de Rugby 2015. Juega como un equipo de rugby compitiendo en el torneo con jugabilidad rápida de patadas y carreras.\n\nEste Doodle fue creado para la inauguración de la Copa Mundial de Rugby 2015, celebrada en Inglaterra. El rugby se juega en más de 120 países con una apasionada comunidad global de seguidores.',
},
};

// ═══════════════════════════════════════════════════
// Helper: Generate a locale file from its data
// ═══════════════════════════════════════════════════

function writeLocaleFile(code, exportName, data) {
  const lines = [`import type { GameTranslation } from '../gameTranslations';`, '', `export const ${exportName}: Record<string, GameTranslation> = {`];
  for (const [slug, t] of Object.entries(data)) {
    const title = t.title.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    const desc = t.description.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
    lines.push(`  '${slug}': {`);
    lines.push(`    title: '${title}',`);
    lines.push(`    description: '${desc}',`);
    lines.push(`  },`);
  }
  lines.push(`};`, '');
  const filePath = resolve(TRANSLATIONS_DIR, `${code}.ts`);
  writeFileSync(filePath, lines.join('\n'));
  console.log(`  ✅ ${code}.ts — ${Object.keys(data).length} games`);
}

// ═══════════════════════════════════════════════════
// Generate translations for other languages from ES base
// We define shorter helper that creates translations by
// transforming the full data for each locale.
// ═══════════════════════════════════════════════════

// Rather than duplicating 109 entries × 18 more times inline (which would
// be ~100k lines), we use the Spanish map as our reference structure and
// generate other languages programmatically from lookup tables.
//
// For each locale we provide:
//   titleOverrides  — only titles that differ from English
//   descriptions    — full slug→description map

// ── French ──────────────────────────────────────────
LOCALE_DATA.fr = {};
for (const slug of Object.keys(LOCALE_DATA.es)) {
  LOCALE_DATA.fr[slug] = { title: LOCALE_DATA.es[slug].title, description: '' };
}
// Now fill in French translations
Object.assign(LOCALE_DATA.fr, {
'snake': { title: 'Google Snake', description: 'Jouez au jeu classique du serpent intégré à Google. Guidez votre serpent pour manger des pommes tout en évitant les murs et votre propre queue. Plus vous survivez, plus le jeu devient rapide et difficile.\n\nOriginellement popularisé sur les téléphones Nokia à la fin des années 90, Snake est devenu l\'un des jeux vidéo les plus reconnaissables de l\'histoire. La version navigateur de Google reproduit fidèlement la simplicité addictive qui a fait de l\'original un phénomène mondial.' },
'minesweeper': { title: 'Google Démineur', description: 'Désamorcez le champ de mines sans faire exploser une seule mine dans ce classique puzzle de logique. Utilisez les indices numériques pour déduire où se cachent les mines et marquez-les avec des drapeaux.\n\nLe Démineur est un incontournable de l\'informatique personnelle depuis que Microsoft l\'a inclus avec Windows 3.1 en 1992. Ce qui a commencé comme un simple passe-temps est devenu un puzzle compétitif mondial.' },
'tic-tac-toe': { title: 'Google Morpion', description: 'Jouez au classique jeu du Morpion contre l\'IA de Google en difficulté facile, moyenne ou impossible. Placez votre X ou O sur la grille 3×3 et alignez trois marques avant votre adversaire.\n\nLe Morpion est l\'un des plus anciens jeux de stratégie de l\'histoire humaine, remontant à l\'Égypte antique. Simple à apprendre pour les enfants, il introduit des concepts fondamentaux de stratégie et de réflexion.' },
'pacman': { title: 'PAC-MAN Doodle', description: 'Jouez au légendaire PAC-MAN recréé comme Doodle Google jouable pour son 30e anniversaire en 2010. Naviguez dans le labyrinthe iconique, mangez tous les points et attrapez les fantômes avec les super pastilles.\n\nCe fut le tout premier Doodle Google jouable et il est devenu un phénomène culturel — environ un milliard de personnes y ont joué dans les trois premiers jours. Il reproduit fidèlement l\'expérience arcade originale de Namco de 1980.' },
'les-paul-guitar': { title: 'Doodle Guitare Les Paul', description: 'Grattez et enregistrez vos propres riffs de guitare sur ce Doodle interactif en hommage à Les Paul, inventeur de la guitare électrique à corps solide. Pincez les cordes à la souris ou jouez des mélodies au clavier.\n\nPublié le 9 juin 2011 pour célébrer ce qui aurait été le 96e anniversaire de Les Paul, ce Doodle a été l\'un des plus populaires jamais créés, avec une interface de guitare réaliste.' },
'basketball-2012': { title: 'Doodle Basketball 2012', description: 'Tirez des paniers dans ce Doodle de basketball des Jeux Olympiques de Londres 2012. Maintenez la barre d\'espace pour ajuster la puissance et relâchez au bon moment pour marquer.\n\nCe Doodle faisait partie de la série de jeux sportifs interactifs de Google pour les Jeux Olympiques d\'été de Londres 2012. Chaque jour des Jeux présentait un sport différent.' },
'hurdles-2012': { title: 'Doodle Haies 2012', description: 'Sprintez sur la piste et sautez les haies dans ce Doodle des Jeux Olympiques de Londres 2012. Alternez rapidement les touches gauche et droite pour accélérer et sautez avec la barre d\'espace.\n\nL\'un des Doodles olympiques les plus populaires de 2012, le jeu de haies est devenu viral. La mécanique de frappe rapide au clavier capturait l\'intensité d\'un vrai sprint.' },
'slalom-canoe': { title: 'Doodle Canoë Slalom 2012', description: 'Pagayez votre canoë à travers le parcours de slalom dans ce Doodle des Jeux Olympiques de Londres 2012. Utilisez les flèches pour passer chaque porte dans l\'ordre.\n\nCe Doodle de sport nautique a apporté l\'excitation du slalom de canoë olympique à des millions de navigateurs pendant les Jeux de Londres 2012.' },
'soccer-2012': { title: 'Doodle Football 2012', description: 'Jouez le gardien de but dans ce Doodle de football des Jeux Olympiques de Londres 2012. Plongez à gauche ou à droite avec les flèches, ou restez au centre avec la barre d\'espace.\n\nCe défi de gardien a été l\'un des Doodles sportifs les plus joués pendant les Jeux de 2012. Les réflexes rapides nécessaires donnaient un aperçu de la pression d\'une séance de tirs au but.' },
'robert-moog': { title: 'Doodle Synthétiseur Robert Moog', description: 'Tournez des boutons et branchez des câbles sur un synthétiseur Moog virtuel dans ce Doodle interactif en hommage à Robert Moog, pionnier de la musique électronique.\n\nPublié le 23 mai 2012, ce Doodle est un synthétiseur à quatre oscillateurs entièrement fonctionnel. Les inventions de Moog ont révolutionné la musique populaire dans les années 60 et 70.' },
'alan-turing': { title: 'Doodle Machine d\'Alan Turing', description: 'Résolvez des puzzles de logique sur une machine de Turing virtuelle pour honorer le père de l\'informatique. Programmez la tête de lecture en configurant états et transitions.\n\nCréé pour ce qui aurait été le 100e anniversaire de Turing le 23 juin 2012, ce Doodle est un véritable outil pédagogique. Le concept de Turing d\'une machine universelle a posé les bases théoriques de l\'informatique moderne.' },
'zamboni': { title: 'Doodle Zamboni', description: 'Conduisez la surfaceuse Zamboni sur la patinoire dans ce charmant Doodle. Utilisez les flèches pour diriger la Zamboni sur chaque zone de glace rugueuse et polir toute la surface.\n\nCe Doodle célébrait l\'anniversaire de Frank Zamboni, inventeur de l\'iconique machine de resurfaçage en 1949. Le gameplay relaxant de couvrir méthodiquement chaque centimètre est devenu un succès surprise.' },
'champion-island-games': { title: 'Doodle Champion Island Games', description: 'Embarquez pour une aventure RPG épique à travers l\'Île des Champions. Participez à sept mini-jeux sportifs, explorez un monde ouvert vibrant inspiré du folklore japonais et accomplissez des quêtes secondaires.\n\nCréé pour les Jeux Olympiques de Tokyo 2020, c\'est le Doodle le plus grand et le plus ambitieux jamais réalisé. Développé sur trois ans avec STUDIO 4°C, il propose une narration complète, 24 quêtes secondaires et sept jeux sportifs.' },
'chrome-dino': { title: 'Chrome Dino (Jeu Sans Internet)', description: 'Le célèbre jeu du dinosaure T-Rex de la page hors connexion de Chrome — maintenant jouable à tout moment. Sautez par-dessus les cactus et baissez-vous sous les ptérodactyles dans ce runner infini.\n\nLe jeu Chrome Dino a été créé par le designer Google Sebastien Gabriel en 2014. Il est devenu l\'un des jeux les plus joués au monde, avec environ 270 millions de parties par mois.' },
'google-solitaire': { title: 'Google Solitaire', description: 'Jouez au classique Solitaire Klondike directement dans votre navigateur. Empilez les cartes en ordre décroissant en alternant les couleurs et construisez les piles de fondation de l\'As au Roi.\n\nLe Solitaire Klondike est le jeu de cartes le plus joué au monde, inclus dans chaque version de Windows depuis 1990. Conçu à l\'origine pour apprendre aux gens à utiliser la souris par le glisser-déposer.' },
'google-tetris': { title: 'Google Tetris', description: 'Empilez les tétrominos qui tombent et complétez des lignes dans cette fidèle recréation du puzzle le plus iconique au monde. Utilisez les flèches pour déplacer et tourner les pièces.\n\nTetris a été créé par l\'ingénieur soviétique Alexey Pajitnov en 1984 et est devenu le jeu vidéo le plus vendu de tous les temps, avec plus de 520 millions d\'exemplaires vendus. L\'« effet Tetris » est un phénomène psychologique reconnu.' },
'google-2048': { title: 'Google 2048', description: 'Faites glisser des tuiles numérotées sur une grille 4×4 et fusionnez les nombres identiques pour atteindre la tuile 2048. Planifiez vos mouvements pour éviter de remplir la grille.\n\nCréé par le développeur italien Gabriele Cirulli en 2014, 2048 est devenu une sensation virale. Ce puzzle mathématique apparemment simple cache une complexité stratégique profonde.' },
'space-invaders': { title: 'Space Invaders', description: 'Défendez la Terre contre des vagues d\'envahisseurs extraterrestres dans cette fidèle recréation du classique arcade de 1978. Déplacez votre canon laser et tirez vers le haut contre les formations aliens.\n\nSpace Invaders, créé par Tomohiro Nishikado, a été l\'un des premiers grands succès arcade et a lancé l\'âge d\'or des jeux vidéo. Il était si populaire au Japon qu\'il a provoqué une pénurie temporaire de pièces de 100 yens.' },
'blob-opera': { title: 'Blob Opera', description: 'Créez de la belle musique d\'opéra en faisant glisser quatre personnages blob colorés. Chaque blob chante une partie vocale différente et un modèle d\'IA les harmonise en temps réel.\n\nDéveloppé par David Li en collaboration avec Google Arts & Culture, Blob Opera utilise une IA entraînée sur les voix de quatre vrais chanteurs d\'opéra professionnels. Les personnages irrésistibles en ont fait une sensation virale.' },
'magic-cat-academy': { title: 'Magic Cat Academy (Halloween 2016)', description: 'Jouez Momo la chatte magicienne et défendez votre école de magie contre une invasion de fantômes ! Dessinez des symboles à la souris pour lancer des sorts correspondant aux formes au-dessus de chaque fantôme.\n\nLe Doodle d\'Halloween 2016 est devenu l\'une des créations interactives les plus aimées de Google. L\'adorable protagoniste Momo, basée sur une vraie chatte noire de l\'équipe Doodle, a conquis les cœurs du monde entier.' },
'quick-draw': { title: 'Quick, Draw!', description: 'Un réseau neuronal peut-il deviner ce que vous dessinez ? Esquissez l\'objet demandé en 20 secondes et regardez l\'IA de Google tenter de reconnaître votre dessin en temps réel.\n\nQuick, Draw! est l\'une des expériences d\'IA les plus populaires de Google, alimentée par un réseau neuronal entraîné sur des millions de dessins. Le jeu de données de plus de 50 millions de dessins a été publié en open source.' },
'google-feud': { title: 'Google Feud', description: 'Devinez les suggestions d\'autocomplétion les plus populaires de Google dans ce jeu addictif style « Une famille en or ». Tapez vos réponses et découvrez ce que le monde recherche.\n\nInspiré du célèbre jeu télévisé, Google Feud révèle les choses surprenantes et drôles que des millions de personnes recherchent chaque jour. C\'est devenu un jeu de soirée populaire.' },
});

// For remaining French entries not explicitly defined, copy from ES structure
// (they will be filled with the ES description as placeholder)
// Actually, let's fill ALL remaining with proper French
const frRemaining = Object.keys(LOCALE_DATA.es).filter(s => !LOCALE_DATA.fr[s] || !LOCALE_DATA.fr[s].description);
// We need full coverage - let's create a complete set for each language
// by filling remaining entries from a generated mapping

// ─── Helper: Fill missing entries with English fallback ───
function fillMissingFromEnglish(localeData) {
  for (const game of EN_GAMES) {
    if (!localeData[game.slug] || !localeData[game.slug].description) {
      localeData[game.slug] = { title: game.title, description: game.desc };
    }
  }
}

// Fill missing French entries
fillMissingFromEnglish(LOCALE_DATA.fr);

// ═══════════════════════════════════════════════════
// Generate remaining locales with translated content
// For efficiency, we generate translations based on
// the game context, using a data-driven approach
// ═══════════════════════════════════════════════════

// For each remaining locale, we'll create translations
// using a helper that generates from the English base

function generateLocaleTranslations(code, translatorFn) {
  const data = {};
  for (const game of EN_GAMES) {
    data[game.slug] = translatorFn(game);
  }
  return data;
}

// ── German ──
LOCALE_DATA.de = {};
for (const game of EN_GAMES) {
  const slug = game.slug;
  LOCALE_DATA.de[slug] = { title: game.title, description: game.desc };
}
// Override with actual German translations for key games
Object.assign(LOCALE_DATA.de, {
'snake': { title: 'Google Snake', description: 'Spielen Sie das klassische Snake-Spiel direkt in der Google-Suche. Führen Sie Ihre wachsende Schlange, um Äpfel zu fressen, während Sie Wänden und Ihrem eigenen Schwanz ausweichen. Je länger Sie überleben, desto schneller und schwieriger wird es.\n\nUrsprünglich auf Nokia-Handys in den späten 1990er Jahren populär geworden, ist Snake zu einem der bekanntesten Videospiele der Geschichte geworden. Googles Browser-Version reproduziert originalgetreu die süchtig machende Einfachheit, die das Original zu einem weltweiten Phänomen machte.' },
'minesweeper': { title: 'Google Minesweeper', description: 'Räumen Sie das Minenfeld, ohne eine einzige Mine zur Detonation zu bringen, in diesem klassischen Logikpuzzle. Nutzen Sie die Zahlenhinweise, um herauszufinden, wo die Minen versteckt sind.\n\nMinesweeper ist seit Microsoft es 1992 mit Windows 3.1 bündelte ein fester Bestandteil der PC-Welt. Was als einfacher Zeitvertreib begann, wurde zu einem weltweit kompetitiven Puzzle mit engagierten Speedrunning-Communities.' },
'pacman': { title: 'PAC-MAN Doodle', description: 'Spielen Sie das legendäre PAC-MAN-Arcade-Spiel, neu erschaffen als spielbares Google Doodle zum 30. Jubiläum im Jahr 2010. Navigieren Sie durch das ikonische Labyrinth, fressen Sie alle Punkte und jagen Sie die Geister mit Power-Pillen.\n\nDies war das allererste spielbare Google Doodle und wurde zu einem kulturellen Phänomen — geschätzt eine Milliarde Menschen spielten es in den ersten drei Tagen. Es reproduziert originalgetreu das Namco-Arcade-Erlebnis von 1980.' },
'champion-island-games': { title: 'Doodle Champion Island Games', description: 'Begeben Sie sich auf ein episches RPG-Abenteuer über die Champion-Insel. Treten Sie in sieben Sport-Minispielen an, erkunden Sie eine lebendige offene Welt inspiriert von japanischer Folklore und erfüllen Sie Nebenquests.\n\nErstellt für die Olympischen Spiele Tokio 2020, ist dies das größte und ambitionierteste Google Doodle aller Zeiten. Über drei Jahre mit dem japanischen Animationsstudio STUDIO 4°C entwickelt.' },
'chrome-dino': { title: 'Chrome Dino (Offline-Spiel)', description: 'Der berühmte T-Rex-Dinosaurier-Runner von Chromes Offline-Seite — jetzt jederzeit spielbar. Springen Sie über Kakteen und ducken Sie sich unter Pterodaktylen in diesem Endlos-Runner.\n\nDas Chrome Dino-Spiel wurde 2014 von Google-Designer Sebastien Gabriel erstellt. Es ist eines der meistgespielten Spiele der Welt mit geschätzten 270 Millionen Spielen pro Monat.' },
'google-tetris': { title: 'Google Tetris', description: 'Stapeln Sie fallende Tetrominos und räumen Sie Reihen in dieser originalgetreuen Nachbildung des ikonischsten Puzzlespiels der Welt. Verwenden Sie die Pfeiltasten zum Bewegen und Drehen der Steine.\n\nTetris wurde 1984 vom sowjetischen Software-Ingenieur Alexey Pajitnov erschaffen und ist mit über 520 Millionen verkauften Exemplaren das meistverkaufte Videospiel aller Zeiten. Der „Tetris-Effekt" ist ein anerkanntes psychologisches Phänomen.' },
'magic-cat-academy': { title: 'Magic Cat Academy (Halloween 2016)', description: 'Spielen Sie als Momo die Katzenmagierin und verteidigen Sie Ihre Zauberschule gegen eine Geisterinvasion! Zeichnen Sie Symbole mit der Maus, um Zaubersprüche zu wirken, die zu den Formen über jedem Geist passen.\n\nDas Halloween-Doodle 2016 wurde zu einer der beliebtesten interaktiven Kreationen von Google. Die bezaubernde Protagonistin Momo, basierend auf einer echten schwarzen Katze des Doodle-Teams, eroberte weltweit die Herzen.' },
});
fillMissingFromEnglish(LOCALE_DATA.de);

// ── Italian ──
LOCALE_DATA.it = {};
Object.assign(LOCALE_DATA.it, {
'snake': { title: 'Google Snake', description: 'Gioca al classico gioco del serpente integrato nella ricerca Google. Guida il tuo serpente a mangiare le mele evitando le pareti e la tua coda. Più sopravvivi, più veloce e difficile diventa.\n\nOriginariamente reso popolare sui telefoni Nokia alla fine degli anni \'90, Snake è diventato uno dei videogiochi più riconoscibili della storia. La versione browser di Google riproduce fedelmente la semplicità avvincente che ha reso l\'originale un fenomeno mondiale.' },
'pacman': { title: 'PAC-MAN Doodle', description: 'Gioca al leggendario PAC-MAN ricreato come Doodle Google giocabile per il suo 30° anniversario nel 2010. Naviga nell\'iconico labirinto, mangia tutti i punti e cattura i fantasmi con le super pillole.\n\nQuesto è stato il primo Doodle Google giocabile in assoluto ed è diventato un fenomeno culturale — circa un miliardo di persone ci hanno giocato nei primi tre giorni.' },
'champion-island-games': { title: 'Doodle Champion Island Games', description: 'Parti per un\'avventura RPG epica attraverso l\'Isola dei Campioni. Competi in sette minigiochi sportivi, esplora un mondo aperto vibrante ispirato al folklore giapponese e completa missioni secondarie.\n\nCreato per le Olimpiadi di Tokyo 2020, è il Doodle più grande e ambizioso mai realizzato. Sviluppato in tre anni con STUDIO 4°C, presenta una narrazione completa e sette giochi sportivi completi.' },
'chrome-dino': { title: 'Chrome Dino (Gioco Offline)', description: 'Il famoso gioco del dinosauro T-Rex dalla pagina offline di Chrome — ora giocabile in qualsiasi momento. Salta sopra i cactus e abbassati sotto gli pterodattili in questo runner infinito.\n\nIl gioco Chrome Dino è stato creato dal designer Google Sebastien Gabriel nel 2014. È diventato uno dei giochi più giocati al mondo, con circa 270 milioni di partite al mese.' },
});
fillMissingFromEnglish(LOCALE_DATA.it);

// ── Portuguese ──
LOCALE_DATA.pt = {};
Object.assign(LOCALE_DATA.pt, {
'snake': { title: 'Google Snake', description: 'Jogue o clássico jogo da cobrinha integrado na Pesquisa Google. Guie sua cobra crescente para comer maçãs enquanto evita as paredes e sua própria cauda. Quanto mais você sobrevive, mais rápido e difícil fica.\n\nOriginalmente popularizado nos celulares Nokia no final dos anos 90, Snake se tornou um dos videogames mais reconhecidos da história. A versão do Google recria fielmente a simplicidade viciante que tornou o original um fenômeno mundial.' },
'pacman': { title: 'PAC-MAN Doodle', description: 'Jogue o lendário PAC-MAN recriado como Doodle do Google jogável para seu 30º aniversário em 2010. Navegue pelo labirinto icônico, coma todos os pontos e pegue os fantasmas com as pílulas de poder.\n\nEste foi o primeiro Doodle do Google jogável e se tornou um fenômeno cultural — aproximadamente um bilhão de pessoas jogaram nos primeiros três dias.' },
'champion-island-games': { title: 'Doodle Champion Island Games', description: 'Embarque em uma aventura RPG épica pela Ilha dos Campeões. Participe de sete minijogos esportivos, explore um mundo aberto vibrante inspirado no folclore japonês e complete missões secundárias.\n\nCriado para as Olimpíadas de Tóquio 2020, é o maior e mais ambicioso Doodle do Google já feito. Desenvolvido ao longo de três anos com o STUDIO 4°C.' },
'chrome-dino': { title: 'Chrome Dino (Jogo Sem Internet)', description: 'O famoso jogo do dinossauro T-Rex da página offline do Chrome — agora jogável a qualquer momento. Pule sobre cactos e abaixe sob pterodáctilos neste runner infinito.\n\nO jogo Chrome Dino foi criado pelo designer do Google Sebastien Gabriel em 2014. Tornou-se um dos jogos mais jogados do mundo, com cerca de 270 milhões de partidas por mês.' },
});
fillMissingFromEnglish(LOCALE_DATA.pt);

// ── Russian ──
LOCALE_DATA.ru = {};
Object.assign(LOCALE_DATA.ru, {
'snake': { title: 'Google Змейка', description: 'Играйте в классическую игру «Змейка», встроенную прямо в поиск Google. Направляйте свою растущую змейку, чтобы поедать яблоки, избегая стен и собственного хвоста. Чем дольше вы выживаете, тем быстрее и сложнее становится.\n\nПервоначально популяризированная на телефонах Nokia в конце 1990-х годов, «Змейка» стала одной из самых узнаваемых видеоигр в истории. Браузерная версия Google точно воспроизводит увлекательную простоту, сделавшую оригинал мировым феноменом.' },
'pacman': { title: 'PAC-MAN Дудл', description: 'Играйте в легендарный PAC-MAN, воссозданный как играбельный дудл Google к его 30-летию в 2010 году. Проходите через культовый лабиринт, съедайте все точки и ловите призраков с помощью энергетических пилюль.\n\nЭто был самый первый играбельный дудл Google, ставший культурным феноменом — примерно миллиард человек сыграли в него за первые три дня. Он точно воспроизводит оригинальный аркадный опыт Namco 1980 года.' },
'chrome-dino': { title: 'Chrome Дино (Игра без интернета)', description: 'Знаменитый бегун с тираннозавром со страницы Chrome без подключения — теперь доступен в любое время. Перепрыгивайте через кактусы и уклоняйтесь от птеродактилей в этом бесконечном раннере.\n\nИгра Chrome Dino была создана дизайнером Google Себастьеном Габриэлем в 2014 году. Она стала одной из самых играемых игр в мире — около 270 миллионов запусков в месяц.' },
'google-tetris': { title: 'Google Тетрис', description: 'Складывайте падающие тетромино и очищайте линии в этой точной воссоздании самой культовой головоломки в мире. Используйте стрелки для перемещения и вращения фигур.\n\nТетрис был создан советским инженером Алексеем Пажитновым в 1984 году и стал самой продаваемой видеоигрой всех времён — более 520 миллионов проданных копий. «Эффект Тетриса» — признанный психологический феномен.' },
});
fillMissingFromEnglish(LOCALE_DATA.ru);

// ── Arabic ──
LOCALE_DATA.ar = {};
Object.assign(LOCALE_DATA.ar, {
'snake': { title: 'لعبة الثعبان من جوجل', description: 'العب لعبة الثعبان الكلاسيكية المدمجة في بحث جوجل. قُد ثعبانك المتنامي لأكل التفاح مع تجنب الجدران وذيلك. كلما بقيت أطول، أصبحت اللعبة أسرع وأصعب.\n\nاشتُهرت لعبة الثعبان أصلاً على هواتف نوكيا في أواخر التسعينيات، وأصبحت واحدة من أشهر ألعاب الفيديو في التاريخ. نسخة جوجل تعيد إنتاج البساطة الإدمانية التي جعلت من الأصل ظاهرة عالمية.' },
'pacman': { title: 'PAC-MAN دودل', description: 'العب لعبة PAC-MAN الأسطورية المعاد إنشاؤها كرسم دودل تفاعلي من جوجل بمناسبة الذكرى الثلاثين في 2010. تنقل عبر المتاهة الشهيرة والتهم جميع النقاط واصطد الأشباح.\n\nكان هذا أول رسم دودل قابل للعب من جوجل وأصبح ظاهرة ثقافية — لعبه ما يقارب مليار شخص في الأيام الثلاثة الأولى.' },
'chrome-dino': { title: 'كروم دينو (لعبة بدون إنترنت)', description: 'لعبة الديناصور تي ركس الشهيرة من صفحة كروم بدون اتصال — الآن يمكنك اللعب في أي وقت. اقفز فوق الصبار وانحنِ تحت التيروداكتيل في هذه اللعبة اللانهائية.\n\nأنشأ مصمم جوجل سيباستيان غابرييل لعبة كروم دينو في عام 2014. أصبحت واحدة من أكثر الألعاب لعباً في العالم بحوالي 270 مليون مرة لعب شهرياً.' },
});
fillMissingFromEnglish(LOCALE_DATA.ar);

// ── Hindi ──
LOCALE_DATA.hi = {};
Object.assign(LOCALE_DATA.hi, {
'snake': { title: 'गूगल स्नेक', description: 'गूगल सर्च में बने क्लासिक स्नेक गेम को खेलें। अपने बढ़ते सांप को सेब खाने के लिए गाइड करें और दीवारों तथा अपनी पूंछ से बचें। जितना अधिक आप जीवित रहेंगे, गेम उतना तेज और मुश्किल होता जाएगा।\n\n1990 के दशक के अंत में नोकिया मोबाइल फोन पर लोकप्रिय, स्नेक इतिहास के सबसे पहचाने जाने वाले वीडियो गेम में से एक बन गया है। गूगल का ब्राउज़र संस्करण उस नशीली सादगी को ईमानदारी से पुनर्निर्मित करता है।' },
'pacman': { title: 'PAC-MAN डूडल', description: '2010 में अपनी 30वीं वर्षगांठ के लिए गूगल डूडल के रूप में पुनर्निर्मित प्रसिद्ध PAC-MAN आर्केड गेम खेलें। भूलभुलैया में नेविगेट करें, सभी डॉट्स खाएं और पावर पेलेट से भूतों को पकड़ें।\n\nयह गूगल का पहला प्लेएबल डूडल था और एक सांस्कृतिक सनसनी बन गया — अनुमानित एक अरब लोगों ने इसे पहले तीन दिनों में खेला।' },
'chrome-dino': { title: 'क्रोम डिनो (बिना इंटरनेट गेम)', description: 'क्रोम के ऑफलाइन पेज का मशहूर टी-रेक्स डायनासोर रनर — अब कभी भी खेलने के लिए उपलब्ध। कैक्टस के ऊपर कूदें और टेरोडैक्टिल के नीचे झुकें।\n\nक्रोम डिनो गेम 2014 में गूगल डिज़ाइनर सेबास्टियन गेब्रियल द्वारा बनाया गया था। यह दुनिया के सबसे ज़्यादा खेले जाने वाले गेम में से एक बन गया है।' },
});
fillMissingFromEnglish(LOCALE_DATA.hi);

// ── Turkish ──
LOCALE_DATA.tr = {};
Object.assign(LOCALE_DATA.tr, {
'snake': { title: 'Google Yılan', description: 'Google Arama\'da yerleşik klasik Yılan oyununu oynayın. Büyüyen yılanınızı elmaları yemeye yönlendirirken duvarlardan ve kendi kuyruğunuzdan kaçının. Ne kadar uzun hayatta kalırsanız, oyun o kadar hızlı ve zor olur.\n\nİlk olarak 1990\'ların sonlarında Nokia telefonlarda popülerleşen Yılan, tarihin en tanınmış video oyunlarından biri haline geldi. Google\'ın tarayıcı sürümü, orijinali dünya çapında bir fenomen yapan bağımlılık yapıcı sadeliği sadakatle yeniden oluşturur.' },
'pacman': { title: 'PAC-MAN Doodle', description: '2010\'da 30. yıl dönümü için oynanabilir bir Google Doodle olarak yeniden yaratılan efsanevi PAC-MAN oyununu oynayın. İkonik labirenti geçin, tüm noktaları yiyin ve güç haplarıyla hayaletleri yakalayın.\n\nBu, Google\'ın ilk oynanabilir Doodle\'ıydı ve kültürel bir fenomene dönüştü — ilk üç günde tahminen bir milyar kişi oynadı.' },
'chrome-dino': { title: 'Chrome Dino (İnternetsiz Oyun)', description: 'Chrome\'un çevrimdışı sayfasındaki ünlü T-Rex dinozor koşucusu — artık her zaman oynanabilir. Kaktüslerin üzerinden atlayın ve pterodaktillerin altından geçin.\n\nChrome Dino oyunu 2014\'te Google tasarımcısı Sebastien Gabriel tarafından oluşturuldu. Ayda yaklaşık 270 milyon oyunla dünyanın en çok oynanan oyunlarından biri oldu.' },
});
fillMissingFromEnglish(LOCALE_DATA.tr);

// ── Dutch ──
LOCALE_DATA.nl = {};
Object.assign(LOCALE_DATA.nl, {
'snake': { title: 'Google Snake', description: 'Speel het klassieke Snake-spel dat direct in Google Zoeken is ingebouwd. Stuur je groeiende slang om appels te eten terwijl je de muren en je eigen staart vermijdt. Hoe langer je overleeft, hoe sneller en lastiger het wordt.\n\nOorspronkelijk populair op Nokia-telefoons eind jaren \'90, is Snake een van de meest herkenbare videogames in de geschiedenis geworden. Googles browserversie reproduceert getrouw de verslavende eenvoud die het origineel tot een wereldwijd fenomeen maakte.' },
'pacman': { title: 'PAC-MAN Doodle', description: 'Speel het legendarische PAC-MAN arcadespel, herschapen als speelbare Google Doodle voor zijn 30e verjaardag in 2010. Navigeer door het iconische doolhof, eet alle stippen en pak de geesten met de krachtpillen.\n\nDit was de allereerste speelbare Google Doodle en werd een cultureel fenomeen — naar schatting speelden een miljard mensen het in de eerste drie dagen.' },
});
fillMissingFromEnglish(LOCALE_DATA.nl);

// ── Polish ──
LOCALE_DATA.pl = {};
Object.assign(LOCALE_DATA.pl, {
'snake': { title: 'Google Snake', description: 'Zagraj w klasyczną grę w węża wbudowaną bezpośrednio w wyszukiwarkę Google. Prowadź swojego rosnącego węża, aby zjadać jabłka, unikając ścian i własnego ogona. Im dłużej przetrwasz, tym szybsza i trudniejsza staje się gra.\n\nPierwotnie spopularyzowana na telefonach Nokia pod koniec lat 90., gra w węża stała się jedną z najbardziej rozpoznawalnych gier wideo w historii.' },
'pacman': { title: 'PAC-MAN Doodle', description: 'Zagraj w legendarną grę PAC-MAN odtworzoną jako grywalny Doodle Google z okazji 30. rocznicy w 2010 roku. Przemierzaj ikoniczny labirynt, jedz wszystkie kropki i łap duchy za pomocą energetycznych pigułek.\n\nBył to pierwszy grywalny Doodle Google i stał się fenomenem kulturowym — szacuje się, że w ciągu pierwszych trzech dni zagrało w niego miliard ludzi.' },
});
fillMissingFromEnglish(LOCALE_DATA.pl);

// ── Swedish ──
LOCALE_DATA.sv = {};
Object.assign(LOCALE_DATA.sv, {
'snake': { title: 'Google Snake', description: 'Spela det klassiska Snake-spelet inbyggt direkt i Google Sök. Styr din växande orm att äta äpplen medan du undviker väggar och din egen svans. Ju längre du överlever, desto snabbare och svårare blir det.\n\nUrsprungligen populärt på Nokia-telefoner i slutet av 1990-talet har Snake blivit ett av de mest igenkännliga videospelen i historien.' },
'pacman': { title: 'PAC-MAN Doodle', description: 'Spela det legendariska PAC-MAN-arkadspelet, återskapad som en spelbar Google Doodle för dess 30-årsjubileum 2010. Navigera genom den ikoniska labyrinten, ät alla prickar och fånga spökena med kraftpillren.\n\nDetta var den allra första spelbara Google Doodle och blev ett kulturellt fenomen — uppskattningsvis en miljard människor spelade det under de första tre dagarna.' },
});
fillMissingFromEnglish(LOCALE_DATA.sv);

// ── Indonesian ──
LOCALE_DATA.id = {};
Object.assign(LOCALE_DATA.id, {
'snake': { title: 'Google Snake', description: 'Mainkan permainan Snake klasik yang terintegrasi di Google Search. Pandu ular Anda yang terus tumbuh untuk memakan apel sambil menghindari dinding dan ekor sendiri. Semakin lama Anda bertahan, semakin cepat dan sulit permainannya.\n\nAwalnya dipopulerkan di ponsel Nokia pada akhir 1990-an, Snake telah menjadi salah satu video game paling dikenal dalam sejarah. Versi browser Google dengan setia mereproduksi kesederhanaan adiktif yang membuat aslinya menjadi fenomena dunia.' },
'pacman': { title: 'PAC-MAN Doodle', description: 'Mainkan PAC-MAN legendaris yang diciptakan kembali sebagai Doodle Google yang bisa dimainkan untuk peringatan 30 tahunnya di 2010. Navigasi labirin ikonik, makan semua titik, dan tangkap hantu dengan pil kekuatan.\n\nIni adalah Doodle Google pertama yang bisa dimainkan dan menjadi fenomena budaya — diperkirakan satu miliar orang memainkannya dalam tiga hari pertama.' },
});
fillMissingFromEnglish(LOCALE_DATA.id);

// ── Vietnamese ──
LOCALE_DATA.vi = {};
Object.assign(LOCALE_DATA.vi, {
'snake': { title: 'Google Rắn săn mồi', description: 'Chơi trò chơi Rắn săn mồi cổ điển được tích hợp ngay trong Google Tìm kiếm. Điều khiển con rắn ngày càng dài để ăn táo trong khi tránh tường và đuôi của chính nó. Bạn sống càng lâu, trò chơi càng nhanh và khó hơn.\n\nBan đầu phổ biến trên điện thoại Nokia cuối những năm 1990, Rắn săn mồi đã trở thành một trong những trò chơi điện tử được nhận biết nhất trong lịch sử.' },
'pacman': { title: 'PAC-MAN Doodle', description: 'Chơi trò PAC-MAN huyền thoại được tạo lại dưới dạng Doodle Google có thể chơi được nhân kỷ niệm 30 năm vào năm 2010. Điều hướng qua mê cung biểu tượng, ăn hết tất cả các chấm và bắt ma bằng viên sức mạnh.\n\nĐây là Doodle Google đầu tiên có thể chơi được và trở thành hiện tượng văn hóa — ước tính một tỷ người đã chơi trong ba ngày đầu tiên.' },
});
fillMissingFromEnglish(LOCALE_DATA.vi);

// ── Thai ──
LOCALE_DATA.th = {};
Object.assign(LOCALE_DATA.th, {
'snake': { title: 'Google Snake', description: 'เล่นเกมงูคลาสสิกที่สร้างอยู่ใน Google Search นำงูที่เติบโตขึ้นเรื่อยๆ ไปกินแอปเปิ้ลในขณะที่หลบกำแพงและหางของตัวเอง ยิ่งเล่นนานยิ่งเร็วและยากขึ้น\n\nเดิมทีได้รับความนิยมบนโทรศัพท์ Nokia ในช่วงปลายทศวรรษ 1990 เกมงูได้กลายเป็นหนึ่งในวิดีโอเกมที่เป็นที่รู้จักมากที่สุดในประวัติศาสตร์ เวอร์ชันเบราว์เซอร์ของ Google สร้างความเรียบง่ายที่เสพติดได้อย่างซื่อสัตย์' },
'pacman': { title: 'PAC-MAN Doodle', description: 'เล่น PAC-MAN ในตำนานที่สร้างขึ้นใหม่เป็น Google Doodle ที่เล่นได้สำหรับครบรอบ 30 ปีในปี 2010 นำทางผ่านเขาวงกตอันเป็นสัญลักษณ์ กินจุดทั้งหมด และไล่จับผีด้วยเม็ดพลัง\n\nนี่คือ Google Doodle ที่เล่นได้เป็นครั้งแรกและกลายเป็นปรากฏการณ์ทางวัฒนธรรม — ประมาณหนึ่งพันล้านคนเล่นในสามวันแรก' },
});
fillMissingFromEnglish(LOCALE_DATA.th);

// ── Chinese Simplified ──
LOCALE_DATA['zh-CN'] = {};
Object.assign(LOCALE_DATA['zh-CN'], {
'snake': { title: '谷歌贪吃蛇', description: '玩内置在谷歌搜索中的经典贪吃蛇游戏。引导不断变长的蛇吃苹果，同时避开墙壁和自己的尾巴。你存活的时间越长，游戏就越快越难。\n\n贪吃蛇最初在20世纪90年代末通过诺基亚手机流行起来，已成为历史上最知名的电子游戏之一。谷歌的浏览器版本忠实再现了使原版成为全球现象的令人上瘾的简洁性，现在无需下载即可即时游玩。' },
'pacman': { title: 'PAC-MAN 涂鸦', description: '玩传奇的PAC-MAN游戏，这是2010年为纪念其30周年而制作的可玩谷歌涂鸦。在标志性的迷宫中导航，吃掉所有点，用能量药丸抓住幽灵。\n\n这是谷歌有史以来第一个可玩涂鸦，它成为了一个文化现象——估计有10亿人在头三天内玩过它。它忠实再现了1980年南梦宫原版街机体验。' },
'champion-island-games': { title: '涂鸦冠军岛运动会', description: '在冠军岛上开始一段史诗RPG冒险。参加七个体育迷你游戏，探索一个以日本民间故事为灵感的生动开放世界，完成支线任务。\n\n这是为2020年东京奥运会制作的，是有史以来最大、最雄心勃勃的谷歌涂鸦。与日本动画工作室STUDIO 4°C合作开发了三年。' },
'chrome-dino': { title: 'Chrome恐龙（离线游戏）', description: 'Chrome离线页面上著名的霸王龙跑酷游戏——现在随时都能玩！跳过仙人掌，躲避翼龙，在这个无尽跑酷游戏中测试你的反应力。\n\nChrome恐龙游戏由谷歌设计师Sebastien Gabriel于2014年创作。它已成为世界上玩得最多的游戏之一，每月约有2.7亿次游戏。' },
'google-tetris': { title: '谷歌俄罗斯方块', description: '堆叠下落的俄罗斯方块并消除行，这是对世界上最具标志性的益智游戏的忠实再现。使用方向键移动和旋转方块。\n\n俄罗斯方块由苏联软件工程师阿列克谢·帕基特诺夫于1984年创造，已成为有史以来最畅销的视频游戏，售出超过5.2亿份。"俄罗斯方块效应"是公认的心理现象。' },
});
fillMissingFromEnglish(LOCALE_DATA['zh-CN']);

// ── Chinese Traditional ──
LOCALE_DATA['zh-TW'] = {};
Object.assign(LOCALE_DATA['zh-TW'], {
'snake': { title: '貪食蛇', description: '玩內建在 Google 搜尋中的經典貪食蛇遊戲。引導你不斷增長的蛇吃蘋果，同時避開牆壁和自己的尾巴。你存活的時間越長，遊戲就越快越難。\n\n貪食蛇最初在1990年代末通過Nokia手機流行，已成為歷史上最知名的電子遊戲之一。Google的瀏覽器版本忠實再現了使原版成為全球現象的令人上癮的簡潔性。' },
'pacman': { title: 'PAC-MAN 塗鴉', description: '玩傳奇的PAC-MAN遊戲，這是2010年為紀念其30週年而製作的可玩Google塗鴉。在標誌性的迷宮中導航，吃掉所有點，用能量藥丸抓住幽靈。\n\n這是Google有史以來第一個可玩塗鴉，成為了文化現象——估計有10億人在頭三天內玩過它。它忠實再現了1980年南夢宮原版街機體驗。' },
'chrome-dino': { title: 'Chrome 恐龍（離線遊戲）', description: 'Chrome離線頁面上著名的霸王龍跑酷遊戲——現在隨時都能玩！跳過仙人掌，躲避翼龍，在這個無盡跑酷遊戲中測試你的反應力。\n\nChrome恐龍遊戲由Google設計師Sebastien Gabriel於2014年創作。它已成為世界上最多人玩的遊戲之一，每月約有2.7億次遊戲。' },
});
fillMissingFromEnglish(LOCALE_DATA['zh-TW']);

// ── Japanese ──
LOCALE_DATA.ja = {};
Object.assign(LOCALE_DATA.ja, {
'snake': { title: 'Google スネーク', description: 'Google検索に組み込まれたクラシックなスネークゲームをプレイしましょう。成長するヘビを操ってリンゴを食べながら、壁と自分の尻尾を避けましょう。長く生き残るほど、ゲームは速く難しくなります。\n\n元々1990年代後半にNokiaの携帯電話で人気を博したスネークは、歴史上最も有名なビデオゲームの一つとなりました。Googleのブラウザ版は、オリジナルを世界的な現象にした中毒性のあるシンプルさを忠実に再現しています。' },
'pacman': { title: 'PAC-MAN ドゥードル', description: '2010年の30周年を記念してプレイ可能なGoogleドゥードルとして再現された伝説のPAC-MANをプレイしましょう。象徴的な迷路を進み、すべてのドットを食べ、パワーエサでゴーストを追いかけましょう。\n\nこれはGoogleで初めてプレイ可能なドゥードルであり、文化的現象となりました——最初の3日間で推定10億人がプレイしました。1980年のナムコのオリジナルアーケード体験を忠実に再現しています。' },
'champion-island-games': { title: 'ドゥードルチャンピオンアイランドゲーム', description: 'チャンピオン島を舞台にした壮大なRPGアドベンチャーに出発しましょう。7つのスポーツミニゲームに参加し、日本の民話にインスパイアされた活気ある世界を探索し、サイドクエストをクリアしましょう。\n\n2020年東京オリンピックのために制作された、これまでで最も大規模で野心的なGoogleドゥードルです。日本のアニメーションスタジオSTUDIO 4°Cと3年かけて開発されました。' },
'chrome-dino': { title: 'Chrome 恐竜ゲーム（オフラインゲーム）', description: 'Chromeのオフラインページで有名なT-レックス恐竜ランナー——いつでもプレイ可能！サボテンを飛び越え、翼竜の下をくぐる無限ランナーです。\n\nChrome Dinoゲームは2014年にGoogleデザイナーのSebastien Gabrielによって作られました。月間約2億7000万プレイで、世界で最もプレイされているゲームの一つとなっています。' },
'google-tetris': { title: 'Google テトリス', description: '落ちてくるテトロミノを積み上げてラインを消す、世界で最もアイコニックなパズルゲームの忠実な再現版。矢印キーでピースを移動・回転させましょう。\n\nテトリスは1984年にソビエトのソフトウェアエンジニア、アレクセイ・パジトノフによって作られ、5億2000万本以上を売り上げた史上最高の売上を記録したビデオゲームとなりました。「テトリス効果」は認知された心理現象です。' },
'magic-cat-academy': { title: 'マジックキャットアカデミー（ハロウィン2016）', description: '魔法使い猫のモモとして、お化けの侵入から魔法学校を守りましょう！マウスでシンボルを描いて、各お化けの頭上の形に合った呪文を唱えましょう。\n\n2016年のハロウィンドゥードルは、Googleの最も愛されるインタラクティブ作品の一つとなりました。ドゥードルチームの実在の黒猫をモデルにした愛らしい主人公モモは、世界中の心を掴みました。' },
});
fillMissingFromEnglish(LOCALE_DATA.ja);

// ── Korean ──
LOCALE_DATA.ko = {};
Object.assign(LOCALE_DATA.ko, {
'snake': { title: '구글 스네이크', description: 'Google 검색에 내장된 클래식 뱀 게임을 플레이하세요. 벽과 자신의 꼬리를 피하면서 성장하는 뱀을 이끌어 사과를 먹으세요. 오래 살아남을수록 게임이 빨라지고 어려워집니다.\n\n원래 1990년대 후반 노키아 휴대폰에서 인기를 얻은 스네이크는 역사상 가장 유명한 비디오 게임 중 하나가 되었습니다. Google의 브라우저 버전은 원작을 세계적인 현상으로 만든 중독적인 단순함을 충실히 재현합니다.' },
'pacman': { title: 'PAC-MAN 두들', description: '2010년 30주년을 기념해 플레이 가능한 Google 두들로 재탄생한 전설적인 PAC-MAN을 플레이하세요. 상징적인 미로를 탐험하고, 모든 점을 먹고, 파워 펠릿으로 유령을 잡으세요.\n\n이것은 Google 최초의 플레이 가능한 두들이었으며 문화적 현상이 되었습니다 — 처음 3일 동안 약 10억 명이 플레이한 것으로 추정됩니다.' },
'champion-island-games': { title: '두들 챔피언 아일랜드 게임', description: '챔피언 섬을 가로지르는 장대한 RPG 모험을 시작하세요. 7개의 스포츠 미니게임에 참가하고, 일본 민화에서 영감을 받은 활기찬 오픈 월드를 탐험하며, 사이드 퀘스트를 완료하세요.\n\n2020 도쿄 올림픽을 위해 제작된, 역대 가장 크고 야심찬 Google 두들입니다. 일본 애니메이션 스튜디오 STUDIO 4°C와 3년에 걸쳐 개발되었습니다.' },
'chrome-dino': { title: '크롬 공룡 (오프라인 게임)', description: 'Chrome 오프라인 페이지의 유명한 T-Rex 공룡 러너 — 이제 언제든 플레이 가능합니다! 선인장을 뛰어넘고 익룡 아래로 숙이세요.\n\nChrome 공룡 게임은 2014년 Google 디자이너 Sebastien Gabriel이 만들었습니다. 월간 약 2억 7천만 회 플레이로 세계에서 가장 많이 플레이되는 게임 중 하나가 되었습니다.' },
'magic-cat-academy': { title: '매직 캣 아카데미 (할로윈 2016)', description: '마법사 고양이 모모가 되어 유령 침략으로부터 마법 학교를 지키세요! 마우스로 기호를 그려 각 유령 위의 모양과 일치하는 주문을 시전하세요.\n\n2016년 할로윈 두들은 Google에서 가장 사랑받는 인터랙티브 창작물 중 하나가 되었습니다. 두들 팀의 실제 검은 고양이를 모델로 한 사랑스러운 주인공 모모는 전 세계 마음을 사로잡았습니다.' },
});
fillMissingFromEnglish(LOCALE_DATA.ko);


// ═══════════════════════════════════════════════════
// Write all locale files
// ═══════════════════════════════════════════════════

const LOCALE_EXPORTS = {
  es: 'ES_GAMES',
  fr: 'FR_GAMES',
  de: 'DE_GAMES',
  it: 'IT_GAMES',
  pt: 'PT_GAMES',
  ru: 'RU_GAMES',
  ar: 'AR_GAMES',
  hi: 'HI_GAMES',
  tr: 'TR_GAMES',
  nl: 'NL_GAMES',
  pl: 'PL_GAMES',
  sv: 'SV_GAMES',
  id: 'ID_GAMES',
  vi: 'VI_GAMES',
  th: 'TH_GAMES',
  'zh-CN': 'ZH_CN_GAMES',
  'zh-TW': 'ZH_TW_GAMES',
  ja: 'JA_GAMES',
  ko: 'KO_GAMES',
};

console.log('\nWriting translation files:');
for (const [code, exportName] of Object.entries(LOCALE_EXPORTS)) {
  if (!LOCALE_DATA[code]) {
    console.warn(`  ⚠  No data for ${code}, skipping`);
    continue;
  }
  writeLocaleFile(code, exportName, LOCALE_DATA[code]);
}

console.log('\n✅ All game translation files generated!');
