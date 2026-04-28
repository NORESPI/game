import type { ChapterId, StoryScene } from '../types';

export const chapterTitles: Record<ChapterId, string> = {
  prologue: 'Prologue — Le bus vers le campus',
  chapter1: 'Chapitre 1 — Bienvenue à l’Université de l’Élite',
  chapter2: 'Chapitre 2 — La Classe C',
  chapter3: 'Chapitre 3 — Le campus parfait',
  chapter4: 'Chapitre 4 — Conseil, clubs et hiérarchie',
  chapter5: 'Chapitre 5 — Les premiers liens',
  chapter6: 'Chapitre 6 — La fin du paradis',
};

export const chapterOrder: ChapterId[] = ['prologue', 'chapter1', 'chapter2', 'chapter3', 'chapter4', 'chapter5', 'chapter6'];

export const scenes: StoryScene[] = [
  {
    id: 'p1', chapterId: 'prologue', title: 'Bus de transfert', location: 'Route forestière', speakerId: 'ren-kanzaki',
    text: 'Le bus fend une allée de pins et de grilles métalliques. À l’intérieur, les futurs alliés ressemblent déjà à des concurrents.',
    art: { backgroundId: 'bg-bus-dawn', portraitIds: ['ren-kanzaki-neutral', 'aya-kirishima-focused'], cinematicShot: 'wide' },
    autoUnlockCharacters: ['ren-kanzaki', 'aya-kirishima', 'mei-amakura', 'ryo-takamine'], nextSceneId: 'p2',
  },
  {
    id: 'p2', chapterId: 'prologue', title: 'Première friction', location: 'Bus', speakerId: 'aya-kirishima',
    text: 'Aya murmure que la Classe C sert de matériau politique: “malléable, donc exploitable.” Elle te jauge comme une variable incertaine.',
    art: { backgroundId: 'bg-bus-dawn', portraitIds: ['aya-kirishima-focused'], cinematicShot: 'close' },
    choices: [
      { id: 'p2a', label: 'Rester neutre', effects: { classDoctrineProgress: -1 }, nextSceneId: 'p3' },
      { id: 'p2b', label: 'Assumer une neutralité stratégique', effects: { classDoctrineProgress: 1, teacherTrustShirogane: 1 }, nextSceneId: 'p3' },
    ],
  },
  {
    id: 'p3', chapterId: 'prologue', title: 'Portes de l’université', location: 'Entrée blindée', speakerId: 'ren-kanzaki',
    text: 'Le campus apparaît comme une cité privée. Les scanners ouvrent les portails un par un, comme si l’établissement choisissait déjà qui mérite d’entrer.',
    art: { backgroundId: 'bg-main-gate', cinematicShot: 'wide' },
    nextSceneId: 'c1-1',
  },

  {
    id: 'c1-1', chapterId: 'chapter1', title: 'Cérémonie d’entrée', location: 'Auditorium principal', speakerId: 'dr-seijuro-aramaki',
    text: 'Dr. Aramaki présente le Mandat A: poste garanti, bourse majeure, mentorat cinq ans, réseau privé et requête prioritaire légale. Il parle comme un scientifique devant une expérience humaine.',
    art: { backgroundId: 'bg-auditorium', portraitIds: ['dr-seijuro-aramaki-neutral'], cinematicShot: 'mid' },
    autoUnlockCharacters: ['dr-seijuro-aramaki', 'reika-tsukishiro', 'yuto-saeki', 'kaito-arakiba', 'mirei-kuroba'],
    nextSceneId: 'c1-2',
  },
  {
    id: 'c1-2', chapterId: 'chapter1', title: 'Lecture des affectations', location: 'Hall des affectations', speakerId: 'ren-kanzaki',
    text: '1-A est applaudi. 1-B rassure. Quand 1-C s’affiche, l’amphithéâtre devient attentif. On dirait une case vide sur un échiquier.',
    art: { backgroundId: 'bg-ranking-hall', cinematicShot: 'over-shoulder' },
    choices: [
      { id: 'c1-2a', label: 'Observer Reika en silence', effects: { reikaInterest: 1, directorAttention: 1 }, nextSceneId: 'c1-3' },
      { id: 'c1-2b', label: 'Saluer Yuto et 1-B', effects: { yutoTrust: 2, classUnityC: 1 }, nextSceneId: 'c1-3' },
      { id: 'c1-2c', label: 'Soutenir le regard de Kaito', effects: { kaitoHostility: 2, directorAttention: 1 }, nextSceneId: 'c1-3' },
    ],
  },
  {
    id: 'c1-3', chapterId: 'chapter1', title: 'Premiers axes', location: 'Cour intérieure', speakerId: 'mirei-kuroba',
    text: 'Mirei te glisse: “Les classes ne sont pas des identités. Ce sont des outils.” Derrière elle, Kaito sourit sans chaleur.',
    art: { backgroundId: 'bg-courtyard-night', portraitIds: ['mirei-kuroba-focused', 'kaito-arakiba-neutral'], cinematicShot: 'close' },
    nextSceneId: 'c2-1',
  },

  {
    id: 'c2-1', chapterId: 'chapter2', title: 'Salle 1-C', location: 'Bâtiment Est', speakerId: 'natsume-shirogane',
    text: 'Natsume Shirogane tranche: “La normalité attire les prédateurs. Si 1-C ne choisit pas une doctrine, d’autres l’écriront pour vous.”',
    art: { backgroundId: 'bg-classroom-c', portraitIds: ['natsume-shirogane-focused'], cinematicShot: 'mid' },
    autoUnlockCharacters: ['natsume-shirogane', 'haruto-sena', 'saki-mizuno', 'lina-tachibana', 'shun-arai'],
    choices: [
      { id: 'c2-1a', label: 'Soutenir une charte de classe', effects: { classUnityC: 2, teacherTrustShirogane: 1 }, nextSceneId: 'c2-2' },
      { id: 'c2-1b', label: 'Soutenir une cellule d’analyse', effects: { classDoctrineProgress: 2, teacherTrustShirogane: 1 }, nextSceneId: 'c2-2' },
    ],
  },
  {
    id: 'c2-2', chapterId: 'chapter2', title: 'Couloir des premières années', location: 'Aile centrale', speakerId: 'mirei-kuroba',
    text: 'Mirei te provoque devant témoins. Reika observe depuis la passerelle supérieure, Yuto depuis l’angle opposé. 1-C est un spectacle public.',
    art: { backgroundId: 'bg-corridor', portraitIds: ['mirei-kuroba-focused', 'reika-tsukishiro-neutral', 'yuto-saeki-neutral'], cinematicShot: 'wide' },
    choices: [
      { id: 'c2-2a', label: 'Répondre calmement', effects: { kaitoHostility: -1, classDoctrineProgress: 1 }, nextSceneId: 'c2-3' },
      { id: 'c2-2b', label: 'Répondre agressivement', effects: { kaitoHostility: 2, directorAttention: 1 }, nextSceneId: 'c2-3' },
    ],
  },
  {
    id: 'c2-3', chapterId: 'chapter2', title: 'Vote interne', location: 'Salle 1-C', speakerId: 'haruto-sena',
    text: 'Haruto propose une ligne commune. Aya exige une stratégie dure. Lina rappelle l’enjeu financier du Mandat A. Tu dois orienter le vote.',
    art: { backgroundId: 'bg-classroom-c', portraitIds: ['haruto-sena-neutral', 'aya-kirishima-focused', 'lina-tachibana-neutral'], cinematicShot: 'over-shoulder' },
    choices: [
      { id: 'c2-3a', label: 'Priorité à l’unité', effects: { classUnityC: 2, yutoTrust: 1 }, nextSceneId: 'c3-1' },
      { id: 'c2-3b', label: 'Priorité à la performance', effects: { classDoctrineProgress: 2, reikaInterest: 1 }, nextSceneId: 'c3-1' },
    ],
  },

  {
    id: 'c3-1', chapterId: 'chapter3', title: 'Campus parfait', location: 'Esplanade centrale', speakerId: 'rena-mikazuki',
    text: 'Rena (2-C) décrit la classe C comme “zone tampon” entre les extrêmes. Elle te conseille de ne jamais rester sans récit politique.',
    art: { backgroundId: 'bg-campus-esplanade', portraitIds: ['rena-mikazuki-neutral'], cinematicShot: 'wide' },
    autoUnlockCharacters: ['rena-mikazuki', 'gaku-shinonome'], nextSceneId: 'c3-2',
  },
  {
    id: 'c3-2', chapterId: 'chapter3', title: 'Terrain d’évaluation', location: 'Arène académique', speakerId: 'gaku-shinonome',
    text: 'Gaku (2-D) te souffle que la classe D sert d’outil de stress-test pour tout le système. “Le chaos est rentable ici.”',
    art: { backgroundId: 'bg-arena', portraitIds: ['gaku-shinonome-focused'], cinematicShot: 'mid' },
    choices: [
      { id: 'c3-2a', label: 'Le croire et ajuster la doctrine', effects: { classDoctrineProgress: 2, kaitoHostility: -1 }, nextSceneId: 'c3-3' },
      { id: 'c3-2b', label: 'Refuser sa logique', effects: { classUnityC: 1, yutoTrust: 1 }, nextSceneId: 'c3-3' },
    ],
  },
  {
    id: 'c3-3', chapterId: 'chapter3', title: 'Premier test inter-classes', location: 'Plateforme d’annonce', speakerId: 'dr-seijuro-aramaki',
    text: 'Le directeur annonce une épreuve collaborative où seuls les résultats collectifs comptent. Les alliances temporaires deviennent obligatoires.',
    art: { backgroundId: 'bg-announcement-stage', portraitIds: ['dr-seijuro-aramaki-neutral'], cinematicShot: 'close' },
    nextSceneId: 'c4-1',
  },

  {
    id: 'c4-1', chapterId: 'chapter4', title: 'Entrée du BDE', location: 'Bâtiment administratif étudiant', speakerId: 'masato-kiryuu',
    text: 'Masato Kiryuu officialise le rôle du BDE: validation d’événements, arbitrage de conflits, accès aux règles cachées. 3-A contrôle les leviers.',
    art: { backgroundId: 'bg-bde-chamber', portraitIds: ['masato-kiryuu-neutral', 'sae-kurosawa-focused', 'leon-shigemura-neutral'], cinematicShot: 'mid' },
    autoUnlockCharacters: ['masato-kiryuu', 'sae-kurosawa', 'leon-shigemura', 'nao-kanzaki', 'eiji-rindou'],
    nextSceneId: 'c4-2',
  },
  {
    id: 'c4-2', chapterId: 'chapter4', title: 'Audition de 1-C', location: 'Salle d’audience BDE', speakerId: 'sae-kurosawa',
    text: 'Sae applique le règlement à la lettre et expose les failles de 1-C. Leon chiffre le coût de chaque erreur en points de promotion.',
    art: { backgroundId: 'bg-hearing-room', portraitIds: ['sae-kurosawa-focused', 'leon-shigemura-neutral'], cinematicShot: 'close' },
    choices: [
      { id: 'c4-2a', label: 'Argumenter par la transparence', effects: { studentCouncilTrust: 2, bdePressure: -1 }, nextSceneId: 'c4-3' },
      { id: 'c4-2b', label: 'Négocier un compromis tactique', effects: { studentCouncilTrust: 1, bdePressure: 1, reikaInterest: 1 }, nextSceneId: 'c4-3' },
    ],
  },
  {
    id: 'c4-3', chapterId: 'chapter4', title: 'Couloir des observateurs', location: 'Annexe BDE', speakerId: 'eiji-rindou',
    text: 'Eiji propose un “partenariat de mentorat” à certains membres de 1-C. Derrière l’offre, tu sens une tentative de recrutement ciblé.',
    art: { backgroundId: 'bg-bde-corridor', portraitIds: ['eiji-rindou-focused'], cinematicShot: 'over-shoulder' },
    nextSceneId: 'c5-1',
  },

  {
    id: 'c5-1', chapterId: 'chapter5', title: 'Cartographie des liens', location: 'Résidence C', speakerId: 'saki-mizuno',
    text: 'Saki affiche une matrice de confiance de la classe. Keita affirme entendre des rumeurs d’achat de loyautés orchestrées par 1-A.',
    art: { backgroundId: 'bg-dorm-common', portraitIds: ['saki-mizuno-neutral', 'keita-moroboshi-neutral'], cinematicShot: 'mid' },
    nextSceneId: 'c5-2',
  },
  {
    id: 'c5-2', chapterId: 'chapter5', title: 'Entretien discret', location: 'Jardin des lanternes', speakerId: 'reika-tsukishiro',
    text: 'Reika t’offre un accès privilégié aux données d’épreuve contre une neutralité publique de 1-C. Le prix réel reste implicite.',
    art: { backgroundId: 'bg-lantern-garden', portraitIds: ['reika-tsukishiro-focused'], cinematicShot: 'close' },
    choices: [
      { id: 'c5-2a', label: 'Refuser poliment', effects: { classUnityC: 1, reikaInterest: 1 }, nextSceneId: 'c5-3' },
      { id: 'c5-2b', label: 'Accepter partiellement', effects: { classDoctrineProgress: 1, reikaInterest: 2, yutoTrust: -1 }, nextSceneId: 'c5-3' },
    ],
  },
  {
    id: 'c5-3', chapterId: 'chapter5', title: 'Signal d’alerte', location: 'Forum interne', speakerId: 'shun-arai',
    text: 'Shun détecte une fuite de messages privés visant à fracturer 1-C. Les signatures pointent vers plusieurs classes, trop proprement pour être naturel.',
    art: { backgroundId: 'bg-digital-wall', portraitIds: ['shun-arai-focused'], cinematicShot: 'over-shoulder' },
    nextSceneId: 'c6-1',
  },

  {
    id: 'c6-1', chapterId: 'chapter6', title: 'Incident public', location: 'Forum central', speakerId: 'kaito-arakiba',
    text: 'Une confrontation éclate entre 1-C et 1-D pendant un débat public. Kaito pousse la foule à choisir un camp. Mirei orchestre le rythme du chaos.',
    art: { backgroundId: 'bg-forum-night', portraitIds: ['kaito-arakiba-focused', 'mirei-kuroba-focused'], cinematicShot: 'wide' },
    nextSceneId: 'c6-2',
  },
  {
    id: 'c6-2', chapterId: 'chapter6', title: 'Verdict provisoire', location: 'Tribune BDE', speakerId: 'masato-kiryuu',
    text: 'Le BDE publie un verdict temporaire: 1-C reste sous surveillance renforcée. Aramaki conclut que “la malléabilité est désormais mesurable.”',
    art: { backgroundId: 'bg-tribune', portraitIds: ['masato-kiryuu-neutral', 'dr-seijuro-aramaki-neutral'], cinematicShot: 'mid' },
    choices: [
      { id: 'c6-2a', label: 'Promettre une doctrine claire', effects: { classDoctrineProgress: 2, studentCouncilTrust: 1 } },
      { id: 'c6-2b', label: 'Promettre une cohésion humaine', effects: { classUnityC: 2, yutoTrust: 1 } },
    ],
  },
];

export const sceneById = Object.fromEntries(scenes.map((scene) => [scene.id, scene]));
export const playableChapters: ChapterId[] = ['prologue', 'chapter1', 'chapter2'];

export const scenes: StoryScene[] = [
  {
    id: 'p1',
    chapterId: 'prologue',
    title: 'Bus de transfert',
    location: 'Route forestière',
    speakerId: 'ren-kanzaki',
    text: 'Le bus grimpe vers le campus fermé. Dans le reflet des vitres, chacun mesure les autres. On dirait moins une rentrée qu’un tri.',
    autoUnlockCharacters: ['ren-kanzaki', 'aya-kirishima', 'mei-amakura', 'ryo-takamine'],
  },
  {
    id: 'p2',
    chapterId: 'prologue',
    title: 'Première friction',
    location: 'Bus',
    speakerId: 'aya-kirishima',
    text: 'Aya murmure que les classes C servent de réserve stratégique. Elle demande si tu veux survivre ou juste passer inaperçu.',
    choices: [
      { id: 'p2a', label: 'Rester neutre', effects: { classDoctrineProgress: -1 } },
      { id: 'p2b', label: 'Dire que la neutralité est une posture active', effects: { classDoctrineProgress: 1, teacherTrustShirogane: 1 } },
    ],
  },
  {
    id: 'c1-1',
    chapterId: 'chapter1',
    title: 'Cérémonie d’entrée',
    location: 'Auditorium principal',
    speakerId: 'dr-seijuro-aramaki',
    text: 'Dr. Aramaki présente le Mandat A comme une mécanique contractuelle: poste garanti, bourse majeure, mentorat, réseau privé et requête prioritaire légale.',
    autoUnlockCharacters: ['dr-seijuro-aramaki', 'reika-tsukishiro', 'yuto-saeki', 'kaito-arakiba', 'mirei-kuroba'],
  },
  {
    id: 'c1-2',
    chapterId: 'chapter1',
    title: 'Lecture de classement',
    location: 'Hall des affectations',
    speakerId: 'ren-kanzaki',
    text: 'Quand “1-C” apparaît, certains soulagés rient. D’autres semblent déçus, comme s’ils venaient d’être classés “en attente d’utilisation”.',
    choices: [
      { id: 'c1-2a', label: 'Observer silencieusement 1-A', effects: { reikaInterest: 1, directorAttention: 1 } },
      { id: 'c1-2b', label: 'Saluer la délégation de 1-B', effects: { yutoTrust: 2, classUnityC: 1 } },
      { id: 'c1-2c', label: 'Fixer Kaito sans reculer', effects: { kaitoHostility: 2, directorAttention: 1 } },
    ],
  },
  {
    id: 'c2-1',
    chapterId: 'chapter2',
    title: 'Salle 1-C',
    location: 'Bâtiment Est',
    speakerId: 'natsume-shirogane',
    text: 'Natsume Shirogane annonce que 1-C est la classe la plus malléable, donc la plus observée. “La normalité n’est pas une protection, c’est une invitation.”',
    autoUnlockCharacters: ['natsume-shirogane', 'haruto-sena', 'saki-mizuno', 'lina-tachibana', 'shun-arai'],
    choices: [
      { id: 'c2-1a', label: 'Proposer une charte de classe', effects: { classUnityC: 2, teacherTrustShirogane: 1 } },
      { id: 'c2-1b', label: 'Proposer une cellule d’analyse', effects: { classDoctrineProgress: 2, teacherTrustShirogane: 1 } },
    ],
  },
  {
    id: 'c2-2',
    chapterId: 'chapter2',
    title: 'Couloir des classes',
    location: 'Aile centrale',
    speakerId: 'mirei-kuroba',
    text: 'Mirei t’aborde avec un sourire de défi: “Votre classe choisira un drapeau, ou bien d’autres le feront pour vous.” Au fond, Kaito observe.',
    choices: [
      { id: 'c2-2a', label: 'Répondre avec calme', effects: { kaitoHostility: -1, classDoctrineProgress: 1 } },
      { id: 'c2-2b', label: 'Renvoyer la provocation', effects: { kaitoHostility: 2, directorAttention: 1 } },
    ],
  },

  {
    id: 'c3-outline',
    chapterId: 'chapter3',
    title: 'Scènes préparées',
    location: 'Campus',
    text: 'Chapitre structuré: visite des zones premium, première épreuve inter-classes, rencontre de Rena et Gaku, pression implicite des années supérieures.',
  },
  {
    id: 'c4-outline',
    chapterId: 'chapter4',
    title: 'BDE et hiérarchie',
    location: 'Bâtiment administratif étudiant',
    text: 'Chapitre structuré: introduction officielle du BDE, domination de 3-A par Masato, arbitrage des conflits par Sae, contraintes budgétaires de Leon.',
  },
  {
    id: 'c5-outline',
    chapterId: 'chapter5',
    title: 'Alliances émergentes',
    location: 'Résidences',
    text: 'Chapitre structuré: liens de confiance en 1-C, test de loyauté avec 1-B, tentative d’ingérence de Reika, recrutement discret par Eiji.',
  },
  {
    id: 'c6-outline',
    chapterId: 'chapter6',
    title: 'La fin du paradis',
    location: 'Forum central',
    text: 'Chapitre structuré: incident public, classe C divisée, verdict provisoire du BDE, fin de l’illusion d’une rentrée paisible.',
  },
];
