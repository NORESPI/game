export type ClassId =
  | '1-A'
  | '1-B'
  | '1-C'
  | '1-D'
  | '2-A'
  | '2-B'
  | '2-C'
  | '2-D'
  | '3-A'
  | '3-B'
  | '3-C'
  | '3-D';

export type CharacterRole =
  | 'protagonist'
  | 'student'
  | 'leader'
  | 'teacher'
  | 'director'
  | 'bde_president'
  | 'bde_member';

export type ChapterId =
  | 'prologue'
  | 'chapter1'
  | 'chapter2'
  | 'chapter3'
  | 'chapter4'
  | 'chapter5'
  | 'chapter6';

export type StoryChoice = {
  id: string;
  label: string;
  effects?: Partial<Record<
    | 'studentCouncilTrust'
    | 'bdePressure'
    | 'directorAttention'
    | 'teacherTrustShirogane'
    | 'classUnityC'
    | 'classDoctrineProgress'
    | 'kaitoHostility'
    | 'reikaInterest'
    | 'yutoTrust',
    number
  >>;
};

export type StoryScene = {
  id: string;
  chapterId: ChapterId;
  title: string;
  location: string;
  speakerId?: string;
  text: string;
  choices?: StoryChoice[];
  autoUnlockCharacters?: string[];
};

export type Character = {
  id: string;
  name: string;
  classId: ClassId;
  year: 1 | 2 | 3 | 0;
  role: CharacterRole;
  shortDescription: string;
  personalityTags: string[];
  spriteIds: string[];
  relationshipInitial: number;
  unlockedNotes: string[];
};
