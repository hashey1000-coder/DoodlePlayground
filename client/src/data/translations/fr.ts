import type { GameTranslation } from '../gameTranslations';

export const FR_GAMES: Record<string, GameTranslation> = {
  'snake': {
    title: 'Google Snake',
    description: 'Jouez au jeu classique du serpent intégré à Google. Guidez votre serpent pour manger des pommes tout en évitant les murs et votre propre queue. Plus vous survivez, plus le jeu devient rapide et difficile.\n\nOriginellement popularisé sur les téléphones Nokia à la fin des années 90, Snake est devenu l\'un des jeux vidéo les plus reconnaissables de l\'histoire. La version navigateur de Google reproduit fidèlement la simplicité addictive qui a fait de l\'original un phénomène mondial.',
    controls: 'Utilisez les touches fléchées pour changer de direction. Mangez les pommes pour grandir plus longtemps. Évitez de heurter les murs ou votre propre corps !',
  },
  'minesweeper': {
    title: 'Google Démineur',
    description: 'Désamorcez le champ de mines sans faire exploser une seule mine dans ce classique puzzle de logique. Utilisez les indices numériques pour déduire où se cachent les mines et marquez-les avec des drapeaux.\n\nLe Démineur est un incontournable de l\'informatique personnelle depuis que Microsoft l\'a inclus avec Windows 3.1 en 1992. Ce qui a commencé comme un simple passe-temps est devenu un puzzle compétitif mondial avec des communautés dédiées de speedrunning.',
    controls: 'Cliquez sur un carré pour le révéler. Les chiffres montrent combien de mines adjacentes existent. Faites un clic droit pour signaler une mine suspectée. Effacez toutes les cases sûres pour gagner !',
  },
  'tic-tac-toe': {
    title: 'Google Morpion',
    description: 'Jouez au classique jeu du Morpion contre l\'IA de Google en difficulté facile, moyenne ou impossible. Placez votre X ou O sur la grille 3×3 et alignez trois marques avant votre adversaire.\n\nLe Morpion est l\'un des plus anciens jeux de stratégie de l\'histoire humaine, remontant à l\'Égypte antique. Simple à apprendre pour les enfants, il introduit des concepts fondamentaux de stratégie. En difficulté impossible, l\'IA joue de manière mathématiquement parfaite.',
    controls: 'Cliquez sur une case vide pour placer votre marque. Obtenez trois X d\'affilée horizontalement, verticalement ou en diagonale pour gagner. Choisissez votre niveau de difficulté avant de commencer.',
  },
  'pacman': {
    title: 'PAC-MAN Doodle',
    description: 'Jouez au légendaire PAC-MAN recréé comme Doodle Google jouable pour son 30e anniversaire en 2010. Naviguez dans le labyrinthe iconique, mangez tous les points et attrapez les fantômes avec les super pastilles.\n\nCe fut le tout premier Doodle Google jouable et il est devenu un phénomène culturel — environ un milliard de personnes y ont joué dans les trois premiers jours. Il reproduit fidèlement l\'expérience arcade originale de Namco de 1980.',
    controls: 'Utilisez les touches fléchées pour guider PAC-MAN à travers le labyrinthe. Mangez tous les points pour terminer le niveau. Prenez des pastilles de puissance pour rendre les fantômes bleus et mangez-les pour obtenir des points bonus.',
  },
  'les-paul-guitar': {
    title: 'Doodle Guitare Les Paul',
    description: 'Grattez et enregistrez vos propres riffs de guitare sur ce Doodle interactif en hommage à Les Paul, inventeur de la guitare électrique à corps solide. Pincez les cordes à la souris ou jouez des mélodies au clavier.\n\nPublié le 9 juin 2011 pour célébrer ce qui aurait été le 96e anniversaire de Les Paul, ce Doodle a été l\'un des plus populaires jamais créés, avec une interface de guitare réaliste.',
    controls: 'Passez la souris sur les cordes de la guitare et cliquez pour les pincer. Utilisez les touches du clavier A à L pour jouer des notes. Cliquez sur le bouton d\'enregistrement pour capturer et rejouer votre mélodie.',
  },
  'basketball-2012': {
    title: 'Doodle Basketball 2012',
    description: 'Tirez des paniers dans ce Doodle de basketball des Jeux Olympiques de Londres 2012. Maintenez la barre d\'espace pour ajuster la puissance et relâchez au bon moment pour marquer.\n\nCe Doodle faisait partie de la série de jeux sportifs interactifs de Google pour les Jeux Olympiques d\'été de Londres 2012. Chaque jour des Jeux présentait un sport différent.',
    controls: 'Appuyez et maintenez la barre d\'espace pour régler la puissance de votre tir, puis relâchez pour tirer. Chronométrez votre lancement pour que le ballon rentre parfaitement dans le panier. Marquez autant que vous le pouvez !',
  },
  'hurdles-2012': {
    title: 'Doodle Haies 2012',
    description: 'Sprintez sur la piste et sautez les haies dans ce Doodle des Jeux Olympiques de Londres 2012. Alternez rapidement les touches gauche et droite pour accélérer et sautez avec la barre d\'espace.\n\nL\'un des Doodles olympiques les plus populaires de 2012, le jeu de haies est devenu viral avec des joueurs rivalisant pour les meilleurs temps.',
    controls: 'Alternez en appuyant rapidement sur les touches fléchées gauche et droite pour exécuter. Appuyez sur la barre d\'espace pour sauter par-dessus chaque obstacle. Des sauts mal effectués vous feront trébucher et vous ralentiront !',
  },
  'slalom-canoe': {
    title: 'Doodle Canoë Slalom 2012',
    description: 'Pagayez votre canoë à travers le parcours de slalom dans ce Doodle des Jeux Olympiques de Londres 2012. Utilisez les flèches pour naviguer à travers chaque porte dans l\'ordre.\n\nCe Doodle de sport nautique a apporté l\'excitation du slalom de canoë olympique à des millions de navigateurs pendant les Jeux de Londres 2012.',
    controls: 'Utilisez les touches fléchées gauche et droite pour diriger le canot. Franchissez chaque porte dans l\'ordre sans en manquer aucune. Visez le meilleur temps possible !',
  },
  'soccer-2012': {
    title: 'Doodle Football 2012',
    description: 'Jouez le gardien de but dans ce Doodle de football des Jeux Olympiques de Londres 2012. Plongez à gauche ou à droite avec les flèches, ou restez au centre avec la barre d\'espace pour arrêter les tirs.\n\nCe défi de gardien a été l\'un des Doodles sportifs les plus joués pendant les Jeux de 2012. Les réflexes rapides nécessaires donnaient un aperçu de la pression d\'une séance de tirs au but.',
    controls: 'Utilisez les touches fléchées gauche et droite pour plonger dans chaque direction. Appuyez sur la barre d\'espace pour rester au centre. Réagissez rapidement au tir du kicker pour effectuer l\'arrêt !',
  },
  'robert-moog': {
    title: 'Doodle Synthétiseur Robert Moog',
    description: 'Tournez des boutons et branchez des câbles sur un synthétiseur Moog virtuel dans ce Doodle interactif en hommage à Robert Moog, pionnier de la musique électronique.\n\nPublié le 23 mai 2012, ce Doodle est un synthétiseur à quatre oscillateurs entièrement fonctionnel. Les inventions de Moog ont révolutionné la musique populaire dans les années 60 et 70.',
    controls: 'Cliquez et faites glisser les boutons pour ajuster les oscillateurs, les filtres et les effets. Utilisez le clavier pour jouer des notes. Expérimentez avec différents paramètres pour créer des sons uniques.',
  },
  'alan-turing': {
    title: 'Doodle Machine d\'Alan Turing',
    description: 'Résolvez des puzzles de logique sur une machine de Turing virtuelle pour honorer le père de l\'informatique. Programmez la tête de lecture en configurant états et transitions pour produire la bonne sortie binaire.\n\nCréé pour ce qui aurait été le 100e anniversaire de Turing le 23 juin 2012, ce Doodle est un véritable outil pédagogique. Le concept de Turing d\'une machine universelle a posé les bases de toute l\'informatique moderne.',
    controls: 'Cliquez sur les états et transitions de la machine de Turing pour la programmer. Appuyez sur play pour faire fonctionner la machine et vérifiez si elle produit le résultat correct. Résolvez tous les niveaux !',
  },
  'zamboni': {
    title: 'Doodle Zamboni',
    description: 'Conduisez la surfaceuse Zamboni sur la patinoire dans ce charmant Doodle. Utilisez les flèches pour diriger la Zamboni sur chaque zone de glace rugueuse et polissez toute la surface.\n\nCe Doodle célébrait l\'anniversaire de Frank Zamboni, inventeur de l\'iconique machine de resurfaçage en 1949. Le gameplay relaxant est devenu un succès surprise.',
    controls: 'Utilisez les touches fléchées pour conduire le Zamboni autour de la patinoire. Couvrez chaque parcelle de glace rugueuse pour la faire refaire surface. Essayez de nettoyer toute la patinoire avant la fin du temps imparti !',
  },
  'doodle-crossword': {
    title: 'Doodle Mots Croisés',
    description: 'Résolvez les mots croisés de Google avec des indices sur l\'histoire des mots croisés et la culture générale. Cliquez sur un indice pour mettre en surbrillance sa ligne ou colonne et tapez les réponses.\n\nCe Doodle interactif célébrait le centenaire des mots croisés, publiés pour la première fois dans le journal New York World le 21 décembre 1913 par le journaliste Arthur Wynne.',
    controls: 'Cliquez sur un indice pour mettre en surbrillance sa ligne ou sa colonne. Tapez des lettres pour remplir les réponses. Cliquez entre les indices traversants et descendants. Complétez la grille pour gagner !',
  },
  'doodle-roswell': {
    title: 'Doodle 66e Anniversaire de Roswell',
    description: 'Aidez un extraterrestre échoué à retrouver les pièces dispersées de son vaisseau spatial dans cette charmante aventure point-and-click dans le Roswell de 1947. Cliquez sur les objets pour interagir et résoudre des énigmes.\n\nCréé pour le 66e anniversaire du célèbre incident de Roswell, ce Doodle en trois scènes est l\'un des jeux d\'aventure les plus appréciés de Google.',
    controls: 'Cliquez sur les objets de la scène pour interagir avec eux. Trouvez toutes les pièces du vaisseau spatial dispersées à différents endroits. Résolvez des énigmes simples pour débloquer de nouvelles zones.',
  },
  'mothers-day-2013': {
    title: 'Doodle Fête des Mères 2013',
    description: 'Créez une carte personnalisée pour la Fête des Mères en choisissant parmi divers fournitures d\'artisanat, autocollants et décorations dans ce touchant Doodle interactif.\n\nCe Doodle de 2013 célébrait la créativité et l\'amour mis dans les cartes faites main. L\'interface intuitive de glisser-déposer permet aux enfants et adultes de créer quelque chose de vraiment personnel.',
    controls: 'Cliquez sur différentes fournitures de bricolage pour décorer votre carte. Choisissez des autocollants, des dessins et des messages. Imprimez ou partagez votre carte terminée !',
  },
  'doodle-google-15th': {
    title: '15e Anniversaire de Google',
    description: 'Célébrez le 15e anniversaire de Google en frappant une piñata pleine de bonbons et de surprises ! Cliquez ou appuyez sur la barre d\'espace pour frapper et récoltez un maximum de friandises.\n\nLancé le 27 septembre 2013 pour marquer le 15e anniversaire de Google. Google a été fondé le 4 septembre 1998 par Larry Page et Sergey Brin dans un garage de Menlo Park, en Californie.',
    controls: 'Cliquez ou appuyez sur la barre d\'espace pour balancer le bâton sur la piñata. Chronométrez vos frappes pour l\'ouvrir et disperser des bonbons partout. Collectez autant que vous le pouvez !',
  },
  'rubiks-cube': {
    title: 'Doodle Rubik\'s Cube',
    description: 'Tournez les faces d\'un Rubik\'s Cube virtuel entièrement interactif pour le résoudre en un minimum de mouvements. Cliquez et faites glisser les faces pour aligner chaque côté en une seule couleur.\n\nCe Doodle célébrait le 40e anniversaire du Rubik\'s Cube, inventé par l\'architecte hongrois Ernő Rubik en 1974. Avec plus de 43 trillions de configurations possibles et une seule solution, c\'est le jouet de puzzle le plus vendu au monde.',
    controls: 'Cliquez et faites glisser pour faire pivoter les faces du cube. Essayez de faire en sorte que chaque côté affiche une seule couleur. Visez le moins de mouvements possible !',
  },
  'doodle-beethoven': {
    title: 'Doodle Beethoven',
    description: 'Aidez Beethoven à recomposer ses célèbres œuvres musicales en remettant les mesures désordonnées dans l\'ordre. Glissez et déposez les mesures dans la bonne séquence et écoutez chaque chef-d\'œuvre se jouer parfaitement.\n\nCe Doodle de 2015 célébrait le 245e anniversaire de Beethoven avec un charmant puzzle musical mettant en vedette des œuvres iconiques comme Pour Élise et la Cinquième Symphonie.',
    controls: 'Faites glisser et déposez les barres musicales dans le bon ordre. Écoutez chaque morceau joué lorsque vous avez bien compris. Complétez toutes les compositions !',
  },
  'eiji-tsuburaya': {
    title: 'Doodle Eiji Tsuburaya',
    description: 'Jouez à un jeu de défilement latéral rétro en hommage à Eiji Tsuburaya, le légendaire créateur des effets spéciaux de Godzilla et Ultraman. Combattez des monstres géants et sauvez la ville.\n\nLancé le 7 juillet 2015 pour ce qui aurait été le 114e anniversaire de Tsuburaya, ce Doodle rend hommage au père du cinéma tokusatsu japonais.',
    controls: 'Utilisez les touches fléchées pour vous déplacer et la barre d\'espace pour attaquer. Battez les monstres en les frappant avec des faisceaux à effets spéciaux. Terminez toutes les étapes !',
  },
  'pony-express': {
    title: 'Doodle Pony Express',
    description: 'Chevauchez à travers la frontière américaine en collectant lettres et colis postaux tout en évitant les cactus et les obstacles dans ce runner sans fin. Utilisez les touches haut et bas pour changer de voie.\n\nCe Doodle célébrait le 155e anniversaire du Pony Express, le service postal légendaire qui a fonctionné d\'avril 1860 à octobre 1861.',
    controls: 'Appuyez sur les touches fléchées haut et bas pour changer de voie. Récupérez les lettres et le courrier tout au long du sentier. Évitez les cactus, les clôtures et autres obstacles. Livrez le courrier !',
  },
  'global-candy-cup': {
    title: 'Coupe Mondiale des Bonbons 2015',
    description: 'Choisissez votre équipe et participez à la Coupe Mondiale des Bonbons — une course d\'Halloween pour récolter le plus de bonbons possible. Choisissez entre une sorcière, un fantôme, un vampire ou un autre personnage effrayant.\n\nCe Doodle d\'Halloween 2015 introduisait un élément compétitif par équipes où les joueurs du monde entier contribuaient aux scores globaux.',
    controls: 'Cliquez ou appuyez pour vous déplacer entre les maisons. Collectez des bonbons et évitez les obstacles. Faites la course contre d\'autres équipes pour récupérer le plus de friandises avant la fin de la nuit d\'Halloween !',
  },
  'magic-cat-academy': {
    title: 'Magic Cat Academy (Halloween 2016)',
    description: 'Jouez Momo la chatte magicienne et défendez votre école de magie contre une invasion de fantômes ! Dessinez des symboles à la souris pour lancer des sorts correspondant aux formes au-dessus de chaque fantôme.\n\nLe Doodle d\'Halloween 2016 est devenu l\'une des créations interactives les plus aimées de Google. L\'adorable protagoniste Momo, basée sur une vraie chatte noire de l\'équipe Doodle, a conquis les cœurs du monde entier.',
    controls: 'Dessinez le symbole affiché au-dessus de chaque fantôme à l\'aide de votre souris ou de votre doigt. Faites correspondre la forme avec précision pour lancer le sort et vaincre le fantôme. Éliminez tous les fantômes de chaque niveau !',
  },
  'google-cat-game': {
    title: 'Jeu du Chat Magique Google',
    description: 'Le jeu Magic Cat Academy avec Momo la chatte magicienne — glissez et dessinez des symboles de sort pour défendre votre école contre des hordes de fantômes envahisseurs.\n\nConnu aussi comme le « Jeu du Chat d\'Halloween de Google », c\'est l\'un des jeux Google les plus recherchés année après année. Momo est devenue la mascotte non officielle d\'Halloween de Google.',
    controls: 'Dessinez le symbole affiché au-dessus de chaque fantôme à l\'aide de votre souris ou de votre doigt. Faites correspondre la forme avec précision pour lancer le sort et vaincre le fantôme. Éliminez tous les fantômes de chaque niveau !',
  },
  'doodle-clara-rockmore': {
    title: 'Doodle Thérémine Clara Rockmore',
    description: 'Jouez d\'un thérémine virtuel en hommage à Clara Rockmore, considérée comme la plus grande virtuose du thérémine. Déplacez la souris de haut en bas pour contrôler la hauteur du son.\n\nLancé le 9 mars 2016, ce Doodle présente un beau mode leçon animé. Le thérémine, inventé en 1920, est le seul instrument de musique qui se joue sans contact physique.',
    controls: 'Déplacez votre souris de haut en bas pour modifier la hauteur. Déplacez-vous vers la gauche et la droite pour contrôler le volume. Essayez de jouer avec la musique à l\'écran ou créez vos propres mélodies.',
  },
  'doodle-scoville': {
    title: 'Doodle Scoville',
    description: 'Testez votre tolérance au piquant dans ce Doodle célébrant Wilbur Scoville et sa fameuse échelle de piquant. Lancez de la glace contre des piments de plus en plus forts qui marchent vers vous.\n\nCréé pour le 151e anniversaire de Scoville le 22 janvier 2016, ce Doodle enseigne l\'échelle Scoville en jouant. L\'échelle va de 0 (poivron) à plus de 2 millions (Carolina Reaper).',
    controls: 'Cliquez pour lancer des boules de glace sur les poivrons attaquants. Chronométrez vos lancers pour toucher chaque poivron avant qu\'il ne vous atteigne. Survivez à tous les niveaux de chaleur !',
  },
  'doodle-valentines-day': {
    title: 'Saint-Valentin 2017 — Amour de Pangolin',
    description: 'Aidez un pangolin amoureux à conquérir sa bien-aimée en préparant de délicieux chocolats. Mélangez les ingrédients selon les recettes, moulez les chocolats et servez-les pour gagner son cœur.\n\nCe Doodle de Saint-Valentin 2017 présentait le pangolin en danger pour sensibiliser au mammifère le plus braconné du monde. Les huit espèces de pangolin sont menacées d\'extinction.',
    controls: 'Cliquez et faites glisser les ingrédients pour mélanger les chocolats. Suivez les recettes et préparez les bonnes friandises. Servez-les à l\'amoureux du pangolin pour progresser !',
  },
  'pangolin-love': {
    title: 'Doodle Amour de Pangolin',
    description: 'Une charmante aventure de Saint-Valentin où vous préparez des chocolats pour aider un pangolin timide à exprimer son amour. Suivez les recettes pour mélanger, mouler et décorer des bonbons.\n\nConnu aussi comme le Doodle de Saint-Valentin 2017, ce jeu a sensibilisé le monde au pangolin. Les organisations de conservation ont signalé des augmentations significatives des dons après sa sortie.',
  },
  'doodle-cricket-game': {
    title: 'Doodle Cricket',
    description: 'Jouez un charmant match de cricket avec d\'adorables personnages escargots et grillons dans ce Doodle célébrant le Trophée des Champions ICC. Cliquez au bon moment pour frapper et marquer des points.\n\nLancé pendant le Trophée des Champions ICC 2017, ce Doodle a apporté la joie du cricket à des millions de joueurs. Les charmants personnages insectes et la mécanique simple ont capturé l\'excitation du cricket.',
    controls: 'Cliquez ou appuyez pour balancer la batte pendant que la balle est lancée. Chronométrez votre clic pour frapper la balle et marquer des points. Ne manquez pas ou vous êtes absent !',
  },
  'doodle-kids-coding': {
    title: 'Codage pour Enfants (Doodle de Programmation)',
    description: 'Aidez un adorable lapin à collecter des carottes en assemblant des blocs de code directionnels. Glissez et déposez des blocs de flèches, boucles et actions pour construire une séquence.\n\nCréé pour le 50e anniversaire des langages de programmation pour enfants, ce Doodle introduit des concepts fondamentaux de programmation comme le séquençage, les boucles et les conditions, inspiré du langage Logo créé en 1967.',
    controls: 'Faites glisser et déposez les blocs de code directionnel dans la zone de séquence. Appuyez sur le bouton de lecture pour exécuter votre programme et regardez le lapin suivre vos instructions.',
  },
  'birth-of-hip-hop': {
    title: 'Doodle Naissance du Hip Hop',
    description: 'Faites tourner les platines et scratchez à travers l\'histoire du hip hop dans ce Doodle interactif innovant. Mixez des rythmes, crossez des pistes et débloquez des samples légendaires.\n\nLancé le 11 août 2017 pour célébrer le 44e anniversaire du hip hop né lors d\'une fête dans le Bronx, ce Doodle est une déclaration d\'amour à la culture DJ avec une interface de platines entièrement fonctionnelle.',
    controls: 'Cliquez et faites glisser le crossfader pour mixer entre les platines. Grattez des disques en cliquant et en faisant glisser sur le vinyle. Débloquez de nouveaux morceaux et rythmes au fur et à mesure de votre progression.',
  },
  'oskar-fischinger': {
    title: 'Doodle Musical Oskar Fischinger',
    description: 'Créez de fascinantes compositions de musique visuelle dans ce Doodle en hommage à l\'animateur abstrait Oskar Fischinger. Placez des formes géométriques sur une grille musicale et regardez-les générer une mélodie.\n\nOskar Fischinger était un animateur pionnier germano-américain dont le travail a directement inspiré la séquence « Toccata et Fugue » de Fantasia de Disney.',
    controls: 'Cliquez sur la grille pour placer et supprimer des formes. Chaque forme produit un son différent. Ajustez le tempo, les instruments et les effets pour créer votre morceau de musique visuel.',
  },
  'komodo-national-park': {
    title: 'Doodle Quiz Parc National de Komodo',
    description: 'Répondez à un fascinant questionnaire sur le dragon de Komodo et son habitat dans le Parc National d\'Indonésie. Apprenez des faits surprenants sur le plus grand lézard du monde.\n\nCe Doodle éducatif célébrait le 37e anniversaire de la fondation du Parc National de Komodo, site du patrimoine mondial de l\'UNESCO. Les dragons de Komodo peuvent mesurer plus de 3 mètres.',
    controls: 'Cliquez sur votre réponse pour chaque question du quiz. Apprenez des faits sur les dragons de Komodo et leur habitat. Marquez autant de bonnes réponses que possible !',
  },
  'garden-gnomes': {
    title: 'Doodle Nains de Jardin',
    description: 'Lancez des nains de jardin depuis une catapulte le plus loin possible à travers de beaux paysages. Cliquez et maintenez pour ajuster l\'angle de lancement et relâchez pour les envoyer voler.\n\nCe Doodle de 2018 célébrait l\'histoire des nains de jardin, originaires d\'Allemagne au XIXe siècle. La mécanique satisfaisante basée sur la physique en a fait un succès viral.',
    controls: 'Cliquez et maintenez pour définir l\'angle de lancement, puis relâchez pour lancer le gnome. Plus vous tenez longtemps, plus vous avez de puissance. Essayez d\'atteindre la distance maximale !',
  },
  'halloween': {
    title: 'Le Grand Duel Fantôme (Halloween 2018)',
    description: 'Participez au Grand Duel Fantôme, un Doodle multijoueur où deux équipes de fantômes rivalisent pour collecter des flammes d\'esprits. Naviguez dans des couloirs hantés et volez les flammes de l\'équipe adverse.\n\nLe Doodle d\'Halloween 2018 fut le premier jeu multijoueur de Google, connectant des joueurs du monde entier en temps réel.',
    controls: 'Utilisez les touches fléchées ou faites glisser votre doigt pour déplacer votre fantôme sur la carte. Collectez les flammes spirituelles errantes et ramenez-les à votre base pour marquer. Volez les flammes qui traînent derrière vos adversaires !',
  },
  'baseball': {
    title: 'Doodle Baseball (4 Juillet)',
    description: 'Montez au marbre et frappez des home runs dans ce Doodle de baseball du 4 juillet. Jouez avec des personnages alimentaires américains et frappez la balle devant les joueurs de champ.\n\nLancé pour le Jour de l\'Indépendance 2019, ce Doodle capture l\'esprit du passe-temps américain favori avec une touche amusante.',
    controls: 'Cliquez ou appuyez pour balancer la batte pendant que la balle est lancée. Chronométrez votre swing pour établir le contact et frapper la balle aussi loin que possible. Marquez des courses pour votre équipe !',
  },
  'doodle-loteria': {
    title: 'Doodle Célébrant la Lotería',
    description: 'Jouez au jeu de cartes mexicain bien-aimé de la Lotería dans ce coloré Doodle multijoueur. Écoutez les devinettes du chanteur et marquez les cartes correspondantes pour crier « Lotería ! ».\n\nSouvent appelée « bingo mexicain », la Lotería est une tradition familiale au Mexique depuis le XVIIIe siècle. Ce Doodle de 2019 célèbre sa signification culturelle.',
    controls: 'Cliquez sur les cartes correspondantes sur votre tableau au fur et à mesure qu\'elles sont appelées. Complétez une ligne, une colonne ou un modèle pour appeler « ¡Lotería ! » et gagner la manche.',
  },
  'celebrating-bach': {
    title: 'Célébrant Johann Sebastian Bach',
    description: 'Composez vos propres harmonies à la manière de Bach grâce à l\'intelligence artificielle. Écrivez une mélodie simple et appuyez sur « Harmoniser » pour qu\'un modèle d\'IA ajoute un contrepoint baroque.\n\nCe Doodle innovant de 2019 fut le premier à utiliser l\'IA comme mécanique centrale. Google a entraîné un modèle appelé Coconet avec 306 chorals de Bach.',
    controls: 'Cliquez sur la portée pour placer des notes et créer votre mélodie. Appuyez sur le bouton « Harmoniser » pour laisser l\'IA ajouter un accompagnement de style Bach. Écoutez votre création !',
  },
  'doodle-earth-day': {
    title: 'Doodle Jour de la Terre 2020 — Abeille',
    description: 'Aidez une abeille à polliniser des fleurs dans un beau jardin dans ce charmant Doodle du Jour de la Terre. Volez de fleur en fleur pour récolter et répandre le pollen.\n\nCréé pour le Jour de la Terre 2020 dans le cadre de la série « Restez et Jouez à la Maison » de Google pendant la pandémie. Les abeilles pollinisent environ 75% de toutes les plantes à fleurs.',
    controls: 'Utilisez les touches fléchées ou cliquez pour guider l\'abeille entre les fleurs. Atterrissez sur les fleurs pour récolter le pollen, puis visitez d’autres fleurs pour les polliniser. Aidez tout le jardin à fleurir !',
  },
  'magic-cat-academy-2': {
    title: 'Magic Cat Academy 2 (Halloween 2020)',
    description: 'Momo la chatte magicienne revient pour une aventure sous-marine, plongeant sous les vagues pour combattre des esprits marins. Dessinez des symboles pour lancer des sorts contre de nouveaux ennemis océaniques.\n\nLa suite d\'Halloween 2020 a emmené Momo de l\'école aux profondeurs de l\'océan. Lancé pendant la pandémie, il a apporté de la joie à des millions de joueurs.',
    controls: 'Dessinez le symbole affiché au-dessus de chaque fantôme à l\'aide de votre souris ou de votre doigt. Les nouveaux ennemis sous-marins nécessitent des modèles de sorts différents. Battez tous les fantômes pour terminer chaque niveau !',
  },
  'doodle-mbira': {
    title: 'Doodle Célébrant la Mbira',
    description: 'Jouez d\'une mbira virtuelle — un piano à pouces traditionnel africain — dans ce Doodle musical célébrant l\'un des instruments les plus précieux du Zimbabwe. Cliquez sur les lamelles pour créer des mélodies résonnantes.\n\nLa mbira dzavadzimu est au cœur de la culture shona depuis plus de mille ans, utilisée dans les cérémonies et la narration.',
    controls: 'Cliquez sur les dents du mbira pour jouer des notes. Suivez la mélodie guidée ou créez votre propre composition. Expérimentez avec différents rythmes et modèles.',
  },
  'doodle-history-of-pizza': {
    title: 'Doodle Histoire de la Pizza',
    description: 'Coupez et servez des pizzas dans ce Doodle interactif célébrant l\'histoire de la pizza. Tracez des lignes à la souris pour couper chaque pizza en portions égales selon la commande du client.\n\nCe Doodle de 2021 a emmené les joueurs dans un voyage culinaire à travers les 10 000 ans d\'histoire de la pizza, des pains plats antiques à la Margherita moderne.',
    controls: 'Tracez des lignes avec votre souris pour couper la pizza en nombre correct de morceaux égaux. Faites correspondre l\'ordre indiqué en haut. Soyez précis pour le meilleur score !',
  },
  'wewa-weaving': {
    title: 'Doodle Tissage We:wa',
    description: 'Tissez des motifs colorés sur un métier à tisser virtuel dans ce Doodle honorant l\'art textile traditionnel indigène des peuples Pueblo. Sélectionnez des couleurs de fil et passez les fils à travers la chaîne.\n\nCe Doodle de 2021 célèbre les traditions de tissage centenaires des peuples Pueblo du sud-ouest américain. Chaque motif a une signification culturelle profonde.',
    controls: 'Cliquez sur le métier à tisser pour tisser des fils dans la chaîne. Sélectionnez différentes couleurs et motifs. Complétez le tissage pour révéler un magnifique design textile traditionnel.',
  },
  'champion-island-games': {
    title: 'Doodle Champion Island Games',
    description: 'Embarquez pour une aventure RPG épique à travers l\'Île des Champions. Participez à sept mini-jeux sportifs, explorez un monde ouvert inspiré du folklore japonais et accomplissez des quêtes secondaires.\n\nCréé pour les Jeux Olympiques de Tokyo 2020, c\'est le Doodle le plus grand et le plus ambitieux jamais réalisé. Développé sur trois ans avec STUDIO 4°C, il propose 24 quêtes secondaires.',
    controls: 'Utilisez les touches fléchées pour déplacer votre personnage. Interagissez avec les PNJ en appuyant sur la barre d\'espace. Chaque sport possède des commandes uniques : suivez le didacticiel en jeu pour chaque événement.',
  },
  'doodle-valentines-day-2022': {
    title: 'Doodle Saint-Valentin 2022 — Hamsters',
    description: 'Guidez d\'adorables hamsters à travers un labyrinthe de puzzles et d\'obstacles pour les réunir dans ce Doodle de Saint-Valentin. Cliquez pour interagir avec les éléments du puzzle.\n\nCe Doodle de 2022 a charmé les joueurs avec ses petits protagonistes et ses mécaniques de puzzle ingénieuses. La prémisse touchante en a fait l\'activité parfaite de la Saint-Valentin.',
    controls: 'Cliquez ou appuyez pour interagir avec les éléments du puzzle. Guidez les hamsters à travers chaque niveau en résolvant les obstacles. Réunissez le couple de hamsters !',
  },
  'celebrating-petanque': {
    title: 'Doodle Célébrant la Pétanque',
    description: 'Lancez des boules et visez le cochonnet dans ce Doodle célébrant le classique jeu français de pétanque. Cliquez et faites glisser pour ajuster l\'angle et la puissance de votre lancer.\n\nLa pétanque est née dans le sud de la France en 1907 et est devenue l\'une des activités récréatives les plus populaires du pays. Ce Doodle capture l\'esprit décontracté du jeu avec des paysages provençaux.',
    controls: 'Cliquez et faites glisser pour définir l\'angle et la puissance de votre lancer. Relâchez pour lancer la boule. Essayez d\'atterrir le plus près possible du cochonnet (balle cible) !',
  },
  'boba-bubble-tea': {
    title: 'Doodle Célébrant le Bubble Tea',
    description: 'Mélangez et associez des saveurs pour créer le bubble tea parfait dans ce Doodle interactif célébrant la boisson taïwanaise. Choisissez votre base de thé, ajoutez des saveurs et sélectionnez vos toppings.\n\nLe bubble tea a été inventé à Taïwan dans les années 80 et est devenu un phénomène mondial. Ce Doodle de 2023 explore l\'histoire de cette boisson avec des milliers de combinaisons.',
    controls: 'Cliquez sur les ingrédients pour les ajouter à votre boisson. Choisissez votre base de thé, votre saveur, vos garnitures et votre type de boba. Mélangez le tout pour créer votre bubble tea parfait !',
  },
  'celebrating-pani-puri': {
    title: 'Doodle Célébrant le Pani Puri',
    description: 'Servez de délicieux pani puri à une file de clients affamés dans ce Doodle rapide célébrant la nourriture de rue la plus aimée de l\'Inde. Remplissez les puris croustillants avec la bonne combinaison de chutneys.\n\nLe pani puri est l\'un des aliments de rue les plus emblématiques de l\'Inde. Ce Doodle de 2023 capture l\'excitation et la vitesse d\'un vrai stand de pani puri.',
    controls: 'Cliquez pour ramasser et remplir chaque puri avec la bonne combinaison d\'eau et de chutneys. Servez le pani puri fini aux clients avant leur départ. Ne les laissez pas attendre !',
  },
  'celebrating-lake-xochimilco': {
    title: 'Doodle Célébrant le Lac Xochimilco',
    description: 'Explorez les jardins flottants du Lac Xochimilco et guidez un adorable axolotl à travers son habitat aquatique dans ce Doodle du patrimoine mondial de l\'UNESCO.\n\nLes chinampas du Lac Xochimilco sont un vestige de l\'agriculture préhispanique aztèque. Ce Doodle de 2023 sensibilise à l\'axolotl en danger critique, une salamandre unique aux canaux de Xochimilco.',
    controls: 'Cliquez ou appuyez pour guider l\'axolotl à travers les canaux. Interagissez avec l\'environnement et découvrez l\'écosystème unique des jardins flottants du lac Xochimilco.',
  },
  'celebrating-popcorn': {
    title: 'Doodle Célébrant le Popcorn',
    description: 'Faites éclater, attrapez et servez du délicieux popcorn dans ce Doodle multijoueur. Chronométrez vos clics pour faire éclater les grains au bon moment et attrapez le popcorn dans votre seau.\n\nCe Doodle de 2024 célèbre l\'histoire du popcorn, dégusté depuis des milliers d\'années — des preuves archéologiques montrent que le popcorn était consommé au Pérou il y a 4 700 ans.',
    controls: 'Cliquez ou appuyez pour faire apparaître les noyaux au bon moment. Attrapez le pop-corn dans votre seau en vous déplaçant de gauche à droite. Gagnez des points bonus en attrapant des pièces assaisonnées !',
  },
  'magic-cat-academy-3': {
    title: 'Magic Cat Academy 3 (Halloween 2024)',
    description: 'Momo la chatte magicienne revient pour une troisième aventure effrayante. Lancez des sorts en dessinant des symboles pour combattre de nouveaux fantômes avec des power-ups inédits.\n\nLe Doodle d\'Halloween 2024 poursuit la série Magic Cat Academy, la franchise de jeux récurrents la plus populaire de Google. Chaque épisode enrichit le gameplay avec de nouveaux environnements.',
    controls: 'Dessinez le symbole affiché au-dessus de chaque fantôme à l\'aide de votre souris ou de votre doigt. Les nouveaux types de fantômes nécessitent de nouveaux modèles de sorts. Battez tous les fantômes pour terminer chaque niveau !',
  },
  'rise-of-the-half-moon': {
    title: 'Doodle Rise of the Half Moon',
    description: 'Jouez un jeu de cartes stratégique où vous équilibrez cartes de jour et de nuit pour construire des combos puissants. Sélectionnez vos cartes en considérant les interactions entre soleil et lune.\n\nCe Doodle récurrent propose un gameplay tactique profond enveloppé dans un bel art céleste. Plusieurs chapitres ont été publiés en 2024-2025, créant une saga continue.',
    controls: 'Cliquez pour sélectionner et jouer les cartes de votre main. Équilibrez les cartes Soleil et Lune pour créer de puissants combos. Battez votre adversaire pour gagner chaque tour !',
  },
  'chinese-new-year-snake': {
    title: 'Jeu du Serpent du Nouvel An Chinois',
    description: 'Célébrez l\'Année du Serpent avec cette version festive du classique jeu du serpent. Glissez à travers le plateau en collectant des enveloppes rouges et des lanternes traditionnelles.\n\nCe jeu spécial honore le zodiaque chinois et les traditions du Nouvel An lunaire. L\'Année du Serpent revient tous les 12 ans ; dans l\'astrologie chinoise, le serpent symbolise la sagesse et l\'élégance.',
    controls: 'Utilisez les touches fléchées ou faites glisser votre doigt pour changer la direction du serpent. Collectez des objets pour grandir tout en évitant les murs et votre propre queue.',
  },
  'doctor-who': {
    title: 'Doodle 50e Anniversaire de Doctor Who',
    description: 'Jouez tous les Docteurs dans une aventure point-and-click célébrant le 50e anniversaire de Doctor Who. Naviguez à travers des niveaux inspirés d\'épisodes classiques en évitant Daleks et Cybermen.\n\nCréé en novembre 2013 pour le 50e anniversaire de la légendaire série de science-fiction de la BBC. Doctor Who a été diffusé pour la première fois le 23 novembre 1963.',
    controls: 'Cliquez pour déplacer le Docteur dans chaque niveau. Ramassez des objets et utilisez-les pour résoudre des énigmes. Évitez les Daleks et autres ennemis !',
  },
  'chrome-dino': {
    title: 'Chrome Dino (Jeu Sans Internet)',
    description: 'Le célèbre runner du dinosaure T-Rex de la page hors connexion de Chrome — maintenant jouable à tout moment. Sautez par-dessus les cactus et baissez-vous sous les ptérodactyles.\n\nLe jeu Chrome Dino a été créé par le designer Google Sebastien Gabriel en 2014. Il est devenu l\'un des jeux les plus joués au monde, avec environ 270 millions de parties par mois.',
    controls: 'Appuyez sur la barre d\'espace ou appuyez sur pour sauter par-dessus les cactus. Appuyez sur la flèche vers le bas pour vous esquiver sous les ptérodactyles. Le jeu devient plus rapide à mesure que votre score augmente !',
  },
  't-rex-run-3d': {
    title: 'T-Rex Run 3D',
    description: 'Découvrez le classique jeu du dinosaure de Chrome réimaginé en 3D. Courez à travers un vaste paysage désertique avec profondeur et perspective, esquivez les obstacles et collectez des power-ups.\n\nCette version 3D réalisée par des fans transforme le défilement latéral en une expérience tridimensionnelle complète avec des environnements texturés et un éclairage dynamique.',
    controls: 'Appuyez sur la barre d\'espace pour sauter et sur la flèche vers le bas pour esquiver. Utilisez les flèches gauche et droite pour esquiver en 3D. Collectez des pièces et des power-ups pour des points bonus !',
  },
  'dino-swords': {
    title: 'Dino Swords',
    description: 'Le jeu du dinosaure de Chrome avec un arsenal d\'armes. En courant dans le désert, ramassez épées, pistolets, marteaux et gadgets qui détruisent automatiquement les obstacles sur votre chemin.\n\nCréé par MSCHF, le collectif d\'art viral, Dino Swords ajoute 26 armes différentes au jeu du dinosaure de Chrome. Du katana au canon gravitationnel, chaque arme change l\'expérience.',
    controls: 'Appuyez sur la barre d\'espace pour sauter et récupérer des armes. Utilisez-les automatiquement pour détruire les obstacles. Chaque arme a un nombre limité d\'utilisations !',
  },
  'blob-opera': {
    title: 'Blob Opera',
    description: 'Créez de la belle musique d\'opéra en faisant glisser quatre personnages blob colorés. Chaque blob chante une partie vocale différente et un modèle d\'IA les harmonise en temps réel.\n\nDéveloppé par David Li en collaboration avec Google Arts & Culture, Blob Opera utilise une IA entraînée sur les voix de quatre vrais chanteurs d\'opéra. Les personnages irrésistibles en ont fait une sensation virale.',
    controls: 'Cliquez et faites glisser les blobs de haut en bas pour modifier la hauteur, de gauche à droite pour modifier les voyelles. Déplacez les quatre blobs pour créer des arrangements d\'opéra harmonieux !',
  },
  'google-feud': {
    title: 'Google Feud',
    description: 'Devinez les suggestions d\'autocomplétion les plus populaires de Google dans ce jeu addictif style « Une famille en or ». Tapez vos réponses et découvrez ce que le monde recherche.\n\nInspiré du célèbre jeu télévisé, Google Feud révèle les choses surprenantes et drôles que des millions de personnes recherchent chaque jour.',
    controls: 'Lisez la requête de recherche Google partielle et saisissez votre estimation de la façon dont elle se complète automatiquement. Marquez des points en faisant correspondre les suggestions de recherche populaires. Jouez plusieurs tours !',
  },
  'quick-draw': {
    title: 'Quick, Draw!',
    description: 'Un réseau neuronal peut-il deviner ce que vous dessinez ? Esquissez l\'objet demandé en 20 secondes et regardez l\'IA de Google tenter de reconnaître votre dessin en temps réel.\n\nQuick, Draw! est l\'une des expériences d\'IA les plus populaires de Google, avec un jeu de données de plus de 50 millions de dessins publié en open source.',
    controls: 'Dessinez l\'objet demandé sur la toile à l\'aide de votre souris ou de votre doigt dans les 20 secondes. L\'IA essaiera de deviner ce que vous dessinez en temps réel !',
  },
  'chrome-music-lab': {
    title: 'Chrome Music Lab',
    description: 'Explorez la musique à travers des expériences interactives dans cette collection d\'outils créatifs de Google. Créez des chansons, explorez des rythmes, visualisez des ondes sonores et découvrez comment la musique fonctionne.\n\nChrome Music Lab a été créé pour rendre l\'apprentissage de la musique accessible à tous. Chaque expérience se concentre sur un concept musical différent avec des interfaces colorées et intuitives.',
    controls: 'Cliquez sur l’une des expériences musicales pour l’explorer. Chaque outil a des interactions différentes : cliquez, faites glisser et jouez pour créer de la musique et découvrir comment fonctionne le son.',
  },
  'google-maps-snake': {
    title: 'Google Maps Snake',
    description: 'Jouez au classique Snake dans de vraies rues en utilisant Google Maps comme plateau de jeu. Naviguez un bus ou un train dans des villes comme Le Caire, São Paulo, Londres, Sydney et Tokyo.\n\nLancé comme fonctionnalité du Poisson d\'Avril de Google Maps en 2019, ce mashup combine la nostalgie de Snake avec la géographie réelle.',
    controls: 'Utilisez les touches fléchées pour naviguer avec votre véhicule dans les rues de la ville. Ramassez des passagers pour grandir plus longtemps. Évitez de vous cogner ou de sortir de la carte !',
  },
  'google-earth': {
    title: 'Google Earth',
    description: 'Explorez la planète entière en 3D avec Google Earth, en volant des sommets de l\'Himalaya aux profondeurs des fosses océaniques. Naviguez dans les images satellites et les visites guidées.\n\nGoogle Earth a révolutionné notre façon de voir notre planète depuis son lancement en 2005. Construit à partir de pétaoctets d\'images satellites, il offre des visites de merveilles naturelles et de sites culturels.',
    controls: 'Cliquez et faites glisser pour faire pivoter le globe. Faites défiler pour zoomer et dézoomer. Double-cliquez sur n’importe quel endroit pour y voler. Utilisez la barre de recherche pour trouver des lieux spécifiques.',
  },
  'santa-tracker': {
    title: 'Google Suivi du Père Noël',
    description: 'Suivez le voyage magique du Père Noël autour du monde la veille de Noël et jouez à des dizaines de mini-jeux festifs en décembre. Construisez des jouets, programmez des elfes et explorez le village.\n\nGoogle Suivi du Père Noël est une tradition de Noël depuis 2004, divertissant des millions de familles chaque décembre.',
    controls: 'Cliquez sur différents jeux et activités du Village du Père Noël. Chaque mini-jeu possède ses propres commandes : suivez les instructions à l\'écran !',
  },
  'space-invaders': {
    title: 'Space Invaders',
    description: 'Défendez la Terre contre des vagues d\'envahisseurs extraterrestres dans cette fidèle recréation du classique arcade de 1978. Déplacez votre canon laser et tirez contre les formations aliens.\n\nSpace Invaders, créé par Tomohiro Nishikado, a lancé l\'âge d\'or des jeux vidéo. Il était si populaire au Japon qu\'il a provoqué une pénurie temporaire de pièces de 100 yens.',
    controls: 'Utilisez les touches fléchées gauche et droite pour déplacer votre canon. Appuyez sur la barre d\'espace pour tirer. Détruisez tous les envahisseurs avant qu\'ils n\'atteignent le bas de l\'écran !',
  },
  'doodle-jump-2': {
    title: 'Doodle Jump 2',
    description: 'Sautez jusqu\'au sommet dans cette suite du légendaire jeu de plateformes vertical. Bondissez de plateforme en plateforme, évitez les ennemis et attrapez des power-ups comme des jetpacks.\n\nLe Doodle Jump original, lancé en 2009, est devenu l\'un des jeux mobiles les plus téléchargés de tous les temps avec plus de 15 millions de ventes. Cette suite enrichit la formule avec de nouveaux mondes.',
    controls: 'Utilisez les touches fléchées gauche et droite ou inclinez pour vous déplacer. Le doodler saute automatiquement – ​​guidez-le sur les plates-formes. Évitez les ennemis et récupérez des power-ups !',
  },
  'google-solitaire': {
    title: 'Google Solitaire',
    description: 'Jouez au classique Solitaire Klondike directement dans votre navigateur. Empilez les cartes en ordre décroissant en alternant les couleurs et construisez les fondations de l\'As au Roi.\n\nLe Solitaire Klondike est le jeu de cartes le plus joué au monde, inclus dans chaque version de Windows depuis 1990. Il a été conçu pour apprendre aux gens le glisser-déposer à la souris.',
    controls: 'Cliquez ou faites glisser les cartes pour les déplacer entre les colonnes. Cliquez sur le jeu pour piocher de nouvelles cartes. Double-cliquez sur une carte pour l\'envoyer automatiquement à la fondation.',
  },
  'google-spider-solitaire': {
    title: 'Google Spider Solitaire',
    description: 'Organisez les cartes en séquences descendantes de la même couleur dans dix colonnes. Complétez une séquence du Roi à l\'As pour l\'éliminer. Choisissez entre 1, 2 ou 4 couleurs.\n\nSpider Solitaire a gagné une énorme popularité quand Microsoft l\'a inclus dans Windows XP en 2001. Le mode à quatre couleurs est considéré comme l\'un des jeux de cartes solo les plus difficiles.',
    controls: 'Faites glisser les cartes pour créer des séquences décroissantes de la même couleur. Effectuez une course complète du Roi à l\'As pour l\'effacer du tableau. Cliquez sur la réserve pour distribuer de nouvelles cartes.',
  },
  'google-freecell': {
    title: 'Google FreeCell',
    description: 'Testez votre pensée stratégique dans ce jeu de cartes où presque toutes les mains sont résolubles. Utilisez quatre cellules libres comme stockage temporaire pour manœuvrer les cartes.\n\nFreeCell se distingue des autres solitaires car presque chaque partie peut être gagnée. Cela en fait un jeu de pure habileté qui récompense la planification soigneuse.',
  },
  'google-cricket': {
    title: 'Google Cricket',
    description: 'Montez au bâton et frappez des boundaries dans ce jeu de cricket amusant avec d\'adorables personnages insectes. Chronométrez vos clics pour frapper au bon moment.\n\nCe jeu utilise le même moteur que le Doodle Cricket du Trophée ICC 2017. Le cricket est le deuxième sport le plus populaire au monde avec environ 2,5 milliards de fans.',
  },
  'google-memory': {
    title: 'Jeu de Mémoire Google',
    description: 'Retournez les cartes et trouvez les paires identiques dans ce classique jeu de concentration. Cliquez sur deux cartes pour révéler leurs images — si elles correspondent, elles restent ; sinon, elles se retournent.\n\nLe jeu de mémoire est un exercice cognitif prouvé qui renforce la mémoire à court terme et la reconnaissance visuelle. Des études montrent que jouer régulièrement améliore la concentration.',
    controls: 'Cliquez sur une carte pour la retourner. Essayez de trouver la carte correspondante en vous rappelant sa position. Effacez toutes les paires pour gagner !',
  },
  'google-ludo': {
    title: 'Google Ludo',
    description: 'Lancez les dés et déplacez vos pions autour du plateau dans ce classique jeu familial de stratégie. Faites un six pour mettre de nouveaux pions en jeu et soyez le premier à tous les ramener.\n\nLe Ludo dérive de l\'ancien jeu indien Pachisi, datant du VIe siècle. La version moderne a été brevetée en Angleterre en 1896.',
    controls: 'Cliquez pour lancer les dés, puis cliquez sur un jeton pour le déplacer. Obtenez un 6 pour mettre de nouveaux jetons en jeu. Atterrissez sur les adversaires pour les renvoyer au départ.',
  },
  'google-word-coach': {
    title: 'Google Word Coach',
    description: 'Enrichissez votre vocabulaire avec ce quiz engageant qui teste vos connaissances des définitions, synonymes et relations entre les mots. Choisissez la bonne réponse et apprenez de nouveaux mots.\n\nGoogle Word Coach est apparu à l\'origine dans les résultats de recherche Google pour les utilisateurs de pays non anglophones, les aidant à améliorer leur vocabulaire anglais de manière ludique.',
  },
  'google-spinner': {
    title: 'Google Toupie',
    description: 'Faites tourner la toupie virtuelle et regardez-la tournoyer. Alternez entre un fidget spinner et une roue numérotée pour la génération aléatoire, parfait pour les jeux ou les décisions.\n\nL\'outil toupie de Google a été introduit pendant la folie des fidget spinners de 2017. Le mode fidget présente des physiques réalistes avec élan et décélération.',
    controls: 'Cliquez et faites glisser pour faire tourner la roulette. Plus vous glissez vite, plus il tourne vite. Basculez entre les modes fidget spinner et roue numérique.',
  },
  'google-coin-flip': {
    title: 'Google Pile ou Face',
    description: 'Besoin de prendre une décision rapide ? Lancez une pièce virtuelle avec une animation satisfaisante et laissez le destin décider entre pile et face.\n\nLe lancer de pièce est utilisé pour prendre des décisions depuis la Rome antique. La version numérique de Google apporte cette pratique millénaire à l\'ère moderne.',
    controls: 'Cliquez sur le bouton "Flip" ou appuyez sur la pièce pour la lancer. La pièce tournera et atterrira au hasard sur pile ou sur face.',
  },
  'google-dice-roller': {
    title: 'Google Lanceur de Dés',
    description: 'Lancez des dés virtuels pour les jeux de société, les JDR ou simplement pour le plaisir. Personnalisez le nombre de dés et leurs faces — du dé standard à six faces au dé à 20 faces pour D&D.\n\nLes lanceurs de dés numériques sont devenus des outils essentiels pour la communauté des jeux de société. La version de Google utilise une génération aléatoire cryptographique.',
    controls: 'Cliquez sur "Lancer" pour lancer les dés. Ajustez le nombre de dés et de côtés à l\'aide des commandes. Les résultats sont affichés avec une animation roulante satisfaisante.',
  },
  'google-timer': {
    title: 'Google Minuteur',
    description: 'Un minuteur et chronomètre simple et épuré intégré à votre navigateur. Configurez n\'importe quelle durée, lancez le compte à rebours et recevez une alerte sonore à la fin.\n\nLe minuteur de Google est devenu un outil indispensable pour des millions de personnes ayant besoin d\'un chronomètre rapide et fiable sans installer d\'application.',
    controls: 'Entrez une durée et cliquez sur "Démarrer" pour lancer le compte à rebours. Utilisez le mode chronomètre pour compter. Mettez en pause, reprenez ou réinitialisez à tout moment.',
  },
  'google-metronome': {
    title: 'Google Métronome',
    description: 'Gardez le tempo parfait avec ce métronome numérique, avec des BPM ajustables de l\'adagio lent au prestissimo rapide. Le pendule visuel et le clic audio aident les musiciens de tous niveaux.\n\nLe métronome a été breveté par Johann Maelzel en 1815 et est un outil essentiel pour les musiciens depuis plus de 200 ans.',
    controls: 'Cliquez sur "Démarrer" pour commencer le rythme. Ajustez le tempo à l’aide du curseur BPM ou saisissez les battements par minute souhaités. Cliquez sur "Arrêter" pour faire une pause.',
  },
  'zerg-rush': {
    title: 'Zerg Rush',
    description: 'Défendez vos résultats de recherche Google contre une avalanche de lettres « O » qui tombent dans cet iconique Easter egg inspiré de StarCraft. Cliquez rapidement sur chaque O pour le détruire.\n\nL\'Easter egg Zerg Rush est apparu pour la première fois dans Google Search en 2012 en hommage à la franchise StarCraft de Blizzard, où « Zerg rush » décrit une stratégie d\'attaque massive.',
    controls: 'Cliquez rapidement sur les caractères "O" qui tombent pour les détruire avant qu\'ils ne mangent les résultats de la recherche. Chaque O prend trois clics pour être vaincu. Survivez le plus longtemps possible !',
  },
  'atari-breakout': {
    title: 'Atari Breakout',
    description: 'Cassez des blocs colorés avec une balle rebondissante dans cette recréation du classique arcade Atari de 1976. Déplacez votre raquette pour maintenir la balle en jeu et éliminez tous les briques.\n\nBreakout a été conçu par Nolan Bushnell et Steve Bristow, avec le prototype construit par un jeune Steve Jobs et Steve Wozniak — les fondateurs d\'Apple ont travaillé sur ce jeu avant de créer leur entreprise.',
    controls: 'Déplacez votre souris ou votre doigt vers la gauche et la droite pour contrôler la palette. Faites rebondir la balle pour casser toutes les briques ci-dessus. Ne laissez pas la balle tomber devant votre pagaie !',
  },
  'google-gravity': {
    title: 'Google Gravity',
    description: 'Regardez la page d\'accueil de Google s\'effondrer sous la force de la gravité. Tous les éléments — le logo, la barre de recherche, les boutons — tombent et s\'empilent au fond. Faites glisser n\'importe quel élément pour le lancer.\n\nGoogle Gravity est l\'un des Easter eggs les plus populaires jamais créés, démontrant la simulation de physique 2D en temps réel dans le navigateur. La barre de recherche continue de fonctionner.',
    controls: 'Cliquez et faites glisser n\'importe quel élément sur la page pour le récupérer et le lancer. Regardez tout tomber et rebondir avec une physique réaliste. Essayez de chercher quelque chose !',
  },
  'thanos-snap': {
    title: 'Thanos Snap',
    description: 'Portez le Gantelet de l\'Infini et claquez des doigts pour désintégrer la moitié de tous les résultats de recherche, comme Thanos du MCU Marvel. Regardez les résultats se dissoudre en poussière.\n\nCet Easter egg a été créé pour promouvoir Avengers: Endgame en 2019 et est devenu l\'une des fonctionnalités interactives les plus virales de Google.',
    controls: 'Cliquez sur l\'icône Infinity Gauntlet pour effectuer la capture. Regardez la moitié des résultats se désintégrer en poussière. Cliquez à nouveau pour inverser le snap et tout restaurer.',
  },
  'super-mario-coin-block': {
    title: 'Bloc à Pièces Super Mario',
    description: 'Découvrez l\'Easter egg du bloc à pièces de Super Mario Bros. et frappez-le pour collecter des pièces avec le son iconique. Cliquez répétitivement pour accumuler des pièces.\n\nCet Easter egg célèbre le 30e anniversaire de Super Mario Bros., l\'un des jeux vidéo les plus influents de tous les temps. Lancé par Nintendo en 1985, il a sauvé l\'industrie des consoles.',
    controls: 'Cliquez ou appuyez sur le bloc de point d\'interrogation pour le frapper et libérer des pièces. Continuez à cliquer pour collecter autant de pièces que possible. Écoutez le son classique de la pièce de monnaie !',
  },
  'google-pac-man': {
    title: 'Google PAC-MAN (elgooG)',
    description: 'Le classique Doodle PAC-MAN de Google hébergé sur elgooG, vous offrant une autre façon de jouer à l\'iconique jeu d\'arcade quand vous le souhaitez. Naviguez le labyrinthe, mangez tous les points et chassez les fantômes.\n\nCette version est conservée sur elgooG. PAC-MAN reste le jeu d\'arcade le plus rentable de tous les temps, ayant généré plus de 14 milliards de dollars de revenus.',
  },
  'google-mirror': {
    title: 'Google Mirror (elgooG)',
    description: 'Voyez la page de recherche Google reflétée en image miroir. Tout est inversé — le texte se lit à l\'envers, les boutons sont retournés, et même la saisie apparaît en miroir.\n\nGoogle Mirror (elgooG, « Google » à l\'envers) divertit les visiteurs depuis 2002. C\'est un miroir entièrement fonctionnel de Google Search.',
    controls: 'Tapez dans la barre de recherche pour voir votre texte apparaître en miroir. Naviguez dans l\'interface inversée pour une expérience hallucinante. Tous les liens et boutons fonctionnent à l’envers !',
  },
  'google-in-1998': {
    title: 'Google en 1998',
    description: 'Faites un voyage nostalgique en 1998 pour voir à quoi ressemblait Google lors de son lancement. Naviguez l\'interface originale avec son design minimaliste et le charme du web primitif.\n\nQuand Larry Page et Sergey Brin ont lancé Google depuis un dortoir de Stanford en septembre 1998, il avait une page blanche avec juste un logo, une barre de recherche et deux boutons.',
    controls: 'Tapez une requête de recherche dans la barre de recherche classique de style 1998 et appuyez sur Entrée. Parcourez la page de résultats nostalgiques. Cliquez autour pour explorer l’interface vintage.',
  },
  'do-a-barrel-roll': {
    title: 'Do a Barrel Roll',
    description: 'Regardez toute la page Google effectuer un spectaculaire tour à 360 degrés. La page tourne en douceur avant de revenir à la normale.\n\nCet Easter egg a été introduit en 2011 en hommage au jeu Star Fox de Nintendo 64, où Peppy Hare dit au joueur « Fais un tonneau ! ». L\'animation CSS était innovante pour l\'époque.',
    controls: 'Cliquez sur le bouton pour déclencher l\'animation du tonneau. La page entière tournera à 360 degrés. Cliquez plusieurs fois pour un plaisir de roulement continu !',
  },
  'google-askew': {
    title: 'Google Askew / Penché',
    description: 'Toute la page Google s\'incline légèrement sur le côté dans ce subtil et amusant Easter egg. Tout continue de fonctionner normalement, mais l\'affichage penché est curieusement déconcertant.\n\nRechercher « askew » ou « tilt » sur Google déclenche cette ingénieuse blague visuelle qui surprend les utilisateurs depuis 2011.',
    controls: 'Observez simplement la page inclinée et essayez de l’utiliser normalement. Recherchez, cliquez sur des liens et parcourez, le tout sous un angle original. Actualisez pour voir à nouveau l’inclinaison.',
  },
  'friends-easter-eggs': {
    title: 'Easter Eggs de Friends',
    description: 'Découvrez les Easter eggs cachés de la série Friends dans Google Search. Trouvez des surprises interactives de Ross, Rachel, Monica, Chandler, Joey et Phoebe.\n\nCes Easter eggs ont été créés pour célébrer le 25e anniversaire de Friends, diffusé pour la première fois sur NBC le 22 septembre 1994.',
    controls: 'Cliquez sur l\'icône de chaque personnage pour déclencher son animation unique d\'œuf de Pâques. Explorez les six personnages pour découvrir chaque surprise cachée et chaque slogan emblématique.',
  },
  'google-underwater': {
    title: 'Google Sous-Marin',
    description: 'Plongez sous les vagues alors que la page d\'accueil de Google sombre dans un monde sous-marin. Observez des poissons tropicaux nager et interagissez avec les créatures marines.\n\nGoogle Sous-Marin transforme la page de recherche en un serein environnement marin avec des physiques d\'eau réalistes. La recherche continue de fonctionner.',
    controls: 'Déplacez votre souris pour interagir avec la scène sous-marine. Cliquez pour créer des ondulations et effrayer les poissons. Faites glisser les éléments et regardez-les flotter dans l\'eau.',
  },
  'google-space': {
    title: 'Google Espace',
    description: 'Lancez la page d\'accueil de Google dans l\'espace et regardez tous les éléments flotter en apesanteur. Le logo, la barre de recherche, les boutons et le texte se dispersent dans le vide cosmique.\n\nGoogle Espace démontre la simulation de physique en apesanteur dans le navigateur. La barre de recherche continue de fonctionner malgré la flottaison.',
    controls: 'Cliquez et faites glisser n\'importe quel élément pour le lancer dans l\'espace. Regardez les objets flotter et entrer en collision avec la physique de l\'apesanteur. Essayez de taper dans la barre de recherche pendant que tout s\'éloigne.',
  },
  'google-tetris': {
    title: 'Google Tetris',
    description: 'Empilez les tétrominos et complétez des lignes dans cette fidèle recréation du puzzle le plus iconique au monde. Utilisez les flèches pour déplacer et tourner les pièces.\n\nTetris a été créé par l\'ingénieur soviétique Alexey Pajitnov en 1984 et est le jeu vidéo le plus vendu de tous les temps avec plus de 520 millions d\'exemplaires. L\'« effet Tetris » est un phénomène psychologique reconnu.',
    controls: 'Utilisez les touches fléchées gauche et droite pour déplacer les pièces. Appuyez sur la flèche vers le haut pour faire pivoter. Appuyez sur la flèche vers le bas pour un dépôt doux et sur la barre d\'espace pour un dépôt dur. Des lignes claires pour marquer !',
  },
  'google-2048': {
    title: 'Google 2048',
    description: 'Faites glisser des tuiles numérotées sur une grille 4×4 et fusionnez les nombres identiques pour atteindre la tuile 2048. Planifiez vos mouvements pour éviter de remplir la grille.\n\nCréé par le développeur italien Gabriele Cirulli en 2014, 2048 est devenu une sensation virale. Ce puzzle mathématique apparemment simple cache une complexité stratégique profonde.',
    controls: 'Utilisez les touches fléchées ou faites glisser votre doigt pour faire glisser toutes les vignettes dans une direction. Les nombres correspondants fusionnent lorsqu’ils entrent en collision. Planifiez soigneusement vos mouvements pour éviter de remplir le tableau !',
  },
  'google-interland': {
    title: 'Google Interland',
    description: 'Explorez le monde magique d\'Interland et maîtrisez des compétences essentielles de sécurité internet à travers quatre zones d\'aventure. Combattez les hackers, détectez le phishing et protégez vos données.\n\nDéveloppé dans le cadre de l\'initiative « Soyez Géniaux sur Internet » de Google, Interland enseigne aux enfants la citoyenneté numérique à travers des jeux engageants.',
    controls: 'Utilisez les touches fléchées ou cliquez pour naviguer dans chaque zone. Répondez aux questions et relevez les défis pour gagner des points. Progressez à travers les quatre royaumes pour maîtriser la sécurité sur Internet.',
  },
  'google-arts-culture-face-match': {
    title: 'Google Arts & Culture Face Match',
    description: 'Prenez un selfie et découvrez votre sosie dans des œuvres d\'art célèbres de milliers de peintures et portraits de musées du monde entier. L\'IA analyse vos traits et vous associe à des œuvres.\n\nLancé dans Google Arts & Culture en 2018, Face Match est devenu viral immédiatement. L\'IA compare votre photo avec des œuvres de plus de 1 200 musées.',
    controls: 'Autorisez l\'accès à la caméra et prenez un selfie en cliquant sur le bouton de capture. L\'IA analysera les collections du musée et affichera votre correspondance artistique la plus proche ainsi que l\'histoire du tableau.',
  },
  'google-teachable-machine': {
    title: 'Google Teachable Machine',
    description: 'Entraînez votre propre modèle d\'IA en utilisant votre webcam, microphone ou des images — sans programmation nécessaire. Créez des classes, enregistrez des échantillons et regardez votre IA personnalisée reconnaître des gestes.\n\nGoogle Teachable Machine démystifie l\'intelligence artificielle en permettant à quiconque de construire un modèle d\'apprentissage automatique en quelques minutes.',
    controls: 'Cliquez sur « Train » pour enregistrer des échantillons pour chaque classe à l\'aide de votre webcam ou de votre microphone. Ajoutez plusieurs classes, puis cliquez sur « Former le modèle » pour créer votre IA. Testez-le en temps réel !',
  },
  'great-ghoul-duel-2': {
    title: 'Great Ghoul Duel 2 (Halloween 2022)',
    description: 'Rejoignez des joueurs du monde entier dans cette suite du Grand Duel Fantôme. Jouez en tant que fantômes pour collecter des flammes d\'esprits avec de nouveaux power-ups et cartes hantées.\n\nLe Doodle d\'Halloween 2022 a étendu le succès du jeu multijoueur original de 2018 avec de meilleurs graphismes et de nouveaux environnements.',
    controls: 'Utilisez les touches fléchées ou faites glisser votre doigt pour déplacer votre fantôme. Récupérez les flammes spirituelles et ramenez-les à votre base. Utilisez de nouveaux power-ups pour prendre l\'avantage sur l\'équipe adverse !',
  },
  'doodle-solitaire': {
    title: 'Doodle Solitaire (Restez et Jouez 2020)',
    description: 'Jouez au classique Solitaire Klondike dans le cadre de la série « Restez et Jouez à la Maison » de Google de 2020. Construisez les fondations de l\'As au Roi et déblayez le tableau.\n\nPendant la pandémie de COVID-19 en avril 2020, Google a relancé des jeux aimés pour aider les gens à passer le temps. Des centaines de millions y ont joué.',
  },
  'gerald-lawson-game-maker': {
    title: 'Célébrant Gerald « Jerry » Lawson',
    description: 'Honorez le père du gaming moderne en construisant vos propres niveaux dans ce Doodle interactif. Utilisez l\'éditeur pour placer plateformes, ennemis, objets à collecter et power-ups.\n\nJerry Lawson a inventé le Fairchild Channel F en 1976 — la première console domestique à cartouches interchangeables. Son innovation a révolutionné toute l\'industrie du jeu vidéo.',
    controls: 'Utilisez l\'éditeur de niveau pour placer des plates-formes, des ennemis et des bonus. Cliquez sur "Play" pour tester votre création. Partagez vos niveaux personnalisés avec vos amis !',
  },
  'valentines-day-chemistry': {
    title: 'Chimie de la Saint-Valentin CuPd (2024)',
    description: 'Découvrez la chimie de l\'amour dans ce Doodle de Saint-Valentin où les éléments CuPd (Cuivre et Palladium — « CuPid ») se combinent. Mélangez des éléments chimiques pour créer des réactions sur le thème de l\'amour.\n\nCe Doodle de 2024 combine romance et vraie chimie, utilisant des éléments réels du tableau périodique. Un parfait exemple de Doodle éducatif et ludique.',
    controls: 'Cliquez et faites glisser les éléments pour les combiner et déclencher des réactions chimiques. Associez les bonnes paires pour débloquer des animations sur le thème de l\'amour et terminer le puzzle.',
  },
  'rise-of-the-half-moon-november': {
    title: 'Rise of the Half Moon — Novembre 2024',
    description: 'Continuez votre aventure céleste dans le Chapitre 2 de la série Rise of the Half Moon. Affrontez de nouveaux défis de cartes et explorez plus profondément la mythologie lunaire.\n\nCe chapitre de novembre 2024 a étendu l\'univers avec de nouveaux types de cartes et des mécaniques améliorées.',
    controls: 'Cliquez et faites glisser pour interagir avec les phases de la lune. Résolvez des énigmes en alignant des objets célestes. Progressez dans l\'histoire en relevant chaque défi.',
  },
  'rise-of-the-half-moon-december': {
    title: 'Rise of the Half Moon — Décembre 2024',
    description: 'Explorez des paysages lunaires hivernaux et résolvez de nouveaux puzzles célestes dans le Chapitre 3. Maîtrisez des stratégies avancées de cartes et vivez les moments les plus dramatiques de l\'histoire.\n\nLe chapitre de décembre 2024 a apporté un thème hivernal à la saga avec des puzzles plus complexes et des options stratégiques plus profondes.',
    controls: 'Cliquez et faites glisser pour interagir avec les phases de la lune. Résolvez des énigmes en alignant des objets célestes. Progressez dans l\'histoire en relevant chaque défi.',
  },
  'rise-of-the-half-moon-january': {
    title: 'Rise of the Half Moon — Janvier 2025',
    description: 'Vivez le grand final de la série Rise of the Half Moon dans ce chapitre climatique. Complétez le défi céleste ultime et assistez à la conclusion de la saga lunaire.\n\nLe final de janvier 2025 a conclu la saga de manière satisfaisante. Cette approche sérialisée était une première pour Google, créant une histoire continue.',
    controls: 'Cliquez et faites glisser pour interagir avec les phases de la lune. Résolvez les énigmes finales en alignant les objets célestes. Terminez la saga !',
  },
  'indigenous-stickball': {
    title: 'Célébrant le Stickball Indigène',
    description: 'Découvrez le stickball indigène nord-américain — l\'un des plus anciens sports d\'équipe du continent — dans ce Doodle magnifiquement illustré. Explorez les traditions cérémonielles et la riche histoire culturelle.\n\nLe stickball indigène, parfois appelé « le petit frère de la guerre », était joué par les tribus amérindiennes bien avant le contact européen.',
  },
  'marie-tharp-doodle': {
    title: 'Célébrant Marie Tharp',
    description: 'Explorez le fond océanique avec la géologue pionnière Marie Tharp dans ce Doodle interactif. Cartographiez les dorsales sous-marines et aidez à prouver la théorie de la dérive des continents.\n\nMarie Tharp a créé la première carte complète du fond océanique, fournissant des preuves cruciales pour la théorie des plaques tectoniques — l\'une des découvertes scientifiques les plus importantes du XXe siècle.',
  },
  'minecraft-easter-egg': {
    title: 'Easter Egg Minecraft',
    description: 'Explorez le monde de blocs iconique de Minecraft Classic directement dans votre navigateur. Construisez, creusez et créez dans cette version nostalgique de la première édition.\n\nMinecraft, créé par Markus « Notch » Persson en 2009, est devenu le jeu vidéo le plus vendu de tous les temps avec plus de 300 millions de copies vendues.',
    controls: 'Utilisez WASD pour vous déplacer, la souris pour regarder autour de vous. Clic gauche pour casser des blocs, clic droit pour placer des blocs. Touches numériques pour sélectionner différents types de blocs dans votre inventaire.',
  },
  'google-science-journal': {
    title: 'Google Science Journal',
    description: 'Transformez votre appareil en laboratoire de sciences portable. Utilisez les capteurs de votre téléphone pour mesurer l\'intensité lumineuse, les niveaux sonores, l\'accélération et plus encore.\n\nGoogle Science Journal démocratise l\'exploration scientifique en transformant les smartphones en puissants outils de mesure. Utilisé dans les classes du primaire à l\'université.',
  },
  'google-maps-pac-man': {
    title: 'Google Maps PAC-MAN',
    description: 'Jouez PAC-MAN dans de vraies rues dans ce légendaire mashup de Google Maps. Naviguez dans les rues du monde réel en mangeant des points, collectant des fruits et évitant les quatre fantômes.\n\nLancé comme blague du Poisson d\'Avril de Google Maps en 2015, ce jeu transforme les rues de n\'importe quelle ville en labyrinthe PAC-MAN.',
  },
  'google-whirlybird': {
    title: 'Google Whirlybird',
    description: 'Pilotez un petit hélicoptère à travers des parcours d\'obstacles dans ce jeu de vol addictif à un seul bouton. Cliquez pour monter et relâchez pour descendre, en passant par des ouvertures étroites.\n\nInspiré du phénomène viral Flappy Bird de 2014, les jeux d\'hélicoptère à un seul bouton sont devenus un genre apprécié de jeux casual.',
    controls: 'Cliquez ou appuyez pour faire voler l\'hélicoptère vers le haut. Relâchez pour le laisser descendre. Naviguez à travers les espaces entre les obstacles sans vous écraser !',
  },
  'rugby-world-cup-2015': {
    title: 'Doodle Coupe du Monde de Rugby 2015',
    description: 'Marquez des essais et transformez des coups de pied dans ce Doodle célébrant la Coupe du Monde de Rugby 2015. Jouez avec une équipe de rugby dans un gameplay rapide.\n\nCe Doodle a été créé pour l\'ouverture de la Coupe du Monde de Rugby 2015, organisée en Angleterre. Le rugby se pratique dans plus de 120 pays.',
    controls: 'Cliquez pour frapper le ballon et marquer des points. Chronométrez vos conversions et abandonnez vos objectifs. Courez avec le ballon et esquivez les défenseurs pour marquer des essais !',
  },
};
