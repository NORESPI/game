import type { Character, ClassId } from '../types';

const c = (
  id: string,
  name: string,
  classId: ClassId,
  year: 1 | 2 | 3 | 0,
  role: Character['role'],
  shortDescription: string,
  personalityTags: string[],
): Character => ({
  id,
  name,
  classId,
  year,
  role,
  shortDescription,
  personalityTags,
  spriteIds: [id + '-neutral', id + '-focused'],
  relationshipInitial: 0,
  unlockedNotes: [],
});

export const classes: ClassId[] = ['1-A', '1-B', '1-C', '1-D', '2-A', '2-B', '2-C', '2-D', '3-A', '3-B', '3-C', '3-D'];

export const characters: Character[] = [
  c('ren-kanzaki', 'Ren Kanzaki', '1-C', 1, 'protagonist', 'Observateur discret, point de vue joueur.', ['lucide', 'neutre', 'analytique']),
  c('aya-kirishima', 'Aya Kirishima', '1-C', 1, 'student', 'Brillante et froide, vise la Classe A.', ['froide', 'ambitieuse']),
  c('mei-amakura', 'Mei Amakura', '1-C', 1, 'student', 'Souriante et populaire, peur du rejet.', ['chaleureuse', 'fragile']),
  c('haruto-sena', 'Haruto Sena', '1-C', 1, 'leader', 'Charismatique moraliste qui veut unir 1-C.', ['idéaliste', 'leader']),
  c('ryo-takamine', 'Ryo Takamine', '1-C', 1, 'student', 'Sportif impulsif au fort potentiel.', ['impulsif', 'compétitif']),
  c('saki-mizuno', 'Saki Mizuno', '1-C', 1, 'student', 'Analyste froide, fiable et mathématique.', ['rationnelle', 'calme']),
  c('noa-fujisaki', 'Noa Fujisaki', '1-C', 1, 'student', 'Artiste observatrice des micro-détails.', ['créative', 'perceptive']),
  c('keita-moroboshi', 'Keita Moroboshi', '1-C', 1, 'student', 'Blagueur social, capte tous les ragots.', ['social', 'ambigu']),
  c('lina-tachibana', 'Lina Tachibana', '1-C', 1, 'student', 'Travailleuse modeste, vise le Mandat A.', ['résiliente', 'laborieuse']),
  c('shun-arai', 'Shun Arai', '1-C', 1, 'student', 'Introverti expert en systèmes numériques.', ['anxieux', 'technique']),

  c('reika-tsukishiro', 'Reika Tsukishiro', '1-A', 1, 'leader', 'Cheffe de 1-A, calculatrice et politique.', ['stratégique', 'dominante']),
  c('akihiro-kanzawa', 'Akihiro Kanzawa', '1-A', 1, 'student', 'Monétise loyautés et informations.', ['pragmatique', 'froid']),
  c('misaki-ootori', 'Misaki Ootori', '1-A', 1, 'student', 'Icône publique et gestion d’image.', ['charmante', 'médiatique']),
  c('takeru-shiba', 'Takeru Shiba', '1-A', 1, 'student', 'Négociateur diplomatique de 1-A.', ['diplomate', 'mesuré']),
  c('erika-saionji', 'Erika Saionji', '1-A', 1, 'student', 'Aristocrate méprisante envers les classes basses.', ['arrogante', 'glaciale']),
  c('renji-kurose', 'Renji Kurose', '1-A', 1, 'student', 'Exécuteur discret de Reika.', ['intimidant', 'loyal']),
  c('maho-ichinose', 'Maho Ichinose', '1-A', 1, 'student', 'Polie et opportuniste, pont vers 1-B.', ['opportuniste', 'courtoise']),
  c('itsuki-hayama', 'Itsuki Hayama', '1-A', 1, 'student', 'Génie académique utilisé comme arme de score.', ['génie', 'distant']),
  c('chika-aramaki', 'Chika Aramaki', '1-A', 1, 'student', 'Maîtrise rumeurs et réseaux internes.', ['toxique', 'connectée']),
  c('sho-mikami', 'Sho Mikami', '1-A', 1, 'student', 'Observateur silencieux fidèle à Reika.', ['silencieux', 'vigilant']),

  c('yuto-saeki', 'Yuto Saeki', '1-B', 1, 'leader', 'Leader moral et performant de 1-B.', ['moral', 'charismatique']),
  c('airi-nanase', 'Airi Nanase', '1-B', 1, 'student', 'Médiatrice empathique.', ['empathique', 'stable']),
  c('kota-mizuhara', 'Kota Mizuhara', '1-B', 1, 'student', 'Symbole du mérite discipliné.', ['discipliné', 'constant']),
  c('rina-hoshino', 'Rina Hoshino', '1-B', 1, 'student', 'Populaire, anime la vie sociale.', ['sociable', 'rayonnante']),
  c('junpei-kisaragi', 'Junpei Kisaragi', '1-B', 1, 'student', 'Stratège réaliste de 1-B.', ['lucide', 'prudent']),
  c('eri-minamoto', 'Eri Minamoto', '1-B', 1, 'student', 'Idéaliste anti-sacrifice.', ['idéaliste', 'droite']),
  c('takuma-oda', 'Takuma Oda', '1-B', 1, 'student', 'Protecteur physique et social.', ['loyal', 'protecteur']),
  c('sayaka-mori', 'Sayaka Mori', '1-B', 1, 'student', 'Oratrice de débat pour 1-B.', ['éloquente', 'combative']),
  c('hiro-nakata', 'Hiro Nakata', '1-B', 1, 'student', 'Scientifique discret mais crucial.', ['scientifique', 'discret']),
  c('fumika-seno', 'Fumika Seno', '1-B', 1, 'student', 'Pilier de l’organisation interne.', ['organisée', 'fiable']),

  c('kaito-arakiba', 'Kaito Arakiba', '1-D', 1, 'leader', 'Leader masculin de 1-D, charisme de menace.', ['imprévisible', 'dominant']),
  c('mirei-kuroba', 'Mirei Kuroba', '1-D', 1, 'student', 'Provocatrice brillante, force chaotique centrale.', ['cruelle', 'brillante']),
  c('daigo-sumeragi', 'Daigo Sumeragi', '1-D', 1, 'student', 'Imposant et manipulable.', ['intimidant', 'loyal']),
  c('natsuki-rei', 'Natsuki Rei', '1-D', 1, 'student', 'Actrice sociale volatile.', ['instable', 'théâtrale']),
  c('gen-hirasawa', 'Gen Hirasawa', '1-D', 1, 'student', 'Cynique qui teste les limites.', ['cynique', 'sarcastique']),
  c('miki-arase', 'Miki Arase', '1-D', 1, 'student', 'Prodige brisée autodestructrice.', ['talentueuse', 'autodestructrice']),
  c('osamu-kageyama', 'Osamu Kageyama', '1-D', 1, 'student', 'Collectionneur de dossiers compromettants.', ['froid', 'secrétif']),
  c('yuna-shido', 'Yuna Shido', '1-D', 1, 'student', 'Rebelle anti-autorité.', ['rebelle', 'directe']),
  c('tetsu-ban', 'Tetsu Ban', '1-D', 1, 'student', 'Parieur opportuniste du marché noir.', ['opportuniste', 'joueur']),
  c('riku-narumi', 'Riku Narumi', '1-D', 1, 'student', 'Manipulateur passif des conflits.', ['passif-agressif', 'manipulateur']),

  c('masato-kiryuu', 'Masato Kiryuu', '3-A', 3, 'bde_president', 'Président du BDE, voix d’autorité.', ['autoritaire', 'calme']),
  c('sae-kurosawa', 'Sae Kurosawa', '3-A', 3, 'bde_member', 'Vice-présidente juriste des règles cachées.', ['légale', 'inflexible']),
  c('leon-shigemura', 'Leon Shigemura', '3-A', 3, 'bde_member', 'Trésorier, expert des coûts politiques.', ['souriant', 'calculateur']),
  c('nao-kanzaki', 'Nao Kanzaki', '3-B', 3, 'bde_member', 'Communication du BDE, opaque.', ['diplomate', 'opaque']),
  c('eiji-rindou', 'Eiji Rindou', '2-A', 2, 'bde_member', 'Membre junior qui évalue les premières années.', ['observateur', 'ambitieux']),

  c('shiori-amane', 'Shiori Amane', '2-B', 2, 'leader', 'Référence morale des deuxièmes années.', ['intègre', 'endurante']),
  c('gaku-shinonome', 'Gaku Shinonome', '2-D', 2, 'student', 'Survivant d’une purge de classe D.', ['endurci', 'lucide']),
  c('rena-mikazuki', 'Rena Mikazuki', '2-C', 2, 'student', 'Ancienne représentante décrivant 2-C tampon.', ['pragmatique', 'fatiguée']),
  c('toma-hasegawa', 'Toma Hasegawa', '3-C', 3, 'student', 'Désabusé, miroir d’un futur sans doctrine.', ['désabusé', 'lucide']),

  c('dr-seijuro-aramaki', 'Dr. Seijuro Aramaki', '3-A', 0, 'director', 'Directeur, méthodique et inquiétant.', ['poli', 'expérimental']),
  c('kaede-minazuki', 'Kaede Minazuki', '1-A', 0, 'teacher', 'Prof principale 1-A, sévère et politique.', ['exigeante', 'élitiste']),
  c('osamu-takagi', 'Osamu Takagi', '1-B', 0, 'teacher', 'Prof principal 1-B, mérite collectif.', ['bienveillant', 'strict']),
  c('natsume-shirogane', 'Natsume Shirogane', '1-C', 0, 'teacher', 'Prof principale 1-C, cynique et lucide.', ['cynique', 'stratégique']),
  c('goro-madarame', 'Goro Madarame', '1-D', 0, 'teacher', 'Prof principal 1-D, brutal et provocateur.', ['brutal', 'provocant']),
];

export const characterById = Object.fromEntries(characters.map((char) => [char.id, char]));
