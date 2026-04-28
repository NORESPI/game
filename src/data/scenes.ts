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
