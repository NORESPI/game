import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { playableChapters, scenes } from './data/scenes';
import { characters } from './data/characters';
import type { ChapterId } from './types';

type Stats = {
  studentCouncilTrust: number;
  bdePressure: number;
  directorAttention: number;
  teacherTrustShirogane: number;
  classUnityC: number;
  classDoctrineProgress: number;
  kaitoHostility: number;
  reikaInterest: number;
  yutoTrust: number;
};

type VNState = Stats & {
  chapter: ChapterId;
  sceneIndex: number;
  seenCharacters: string[];
  notesByCharacter: Record<string, string[]>;
  applyEffects: (effects?: Partial<Stats>) => void;
  next: () => void;
  chooseChapter: (chapter: ChapterId) => void;
  unlockCharacter: (id: string) => void;
  reset: () => void;
};

const initialStats: Stats = {
  studentCouncilTrust: 0,
  bdePressure: 0,
  directorAttention: 0,
  teacherTrustShirogane: 0,
  classUnityC: 0,
  classDoctrineProgress: 0,
  kaitoHostility: 0,
  reikaInterest: 0,
  yutoTrust: 0,
};

const initialSeen = ['ren-kanzaki'];

export const useVNStore = create<VNState>()(
  persist(
    (set, get) => ({
      ...initialStats,
      chapter: 'prologue',
      sceneIndex: 0,
      seenCharacters: initialSeen,
      notesByCharacter: Object.fromEntries(characters.map((ch) => [ch.id, [...ch.unlockedNotes]])),
      applyEffects: (effects) => {
        if (!effects) return;
        set((state) => {
          const delta = Object.entries(effects).reduce((acc, [k, v]) => ({ ...acc, [k]: (state as any)[k] + (v ?? 0) }), {});
          return delta as Partial<VNState>;
        });
      },
      unlockCharacter: (id) => {
        set((state) => (state.seenCharacters.includes(id) ? {} : { seenCharacters: [...state.seenCharacters, id] }));
      },
      next: () => {
        const chapterScenes = scenes.filter((s) => s.chapterId === get().chapter);
        const curr = chapterScenes[get().sceneIndex];
        curr?.autoUnlockCharacters?.forEach((id) => get().unlockCharacter(id));
        if (get().sceneIndex < chapterScenes.length - 1) {
          set((state) => ({ sceneIndex: state.sceneIndex + 1 }));
          return;
        }

        const currentChapterIndex = playableChapters.indexOf(get().chapter);
        if (currentChapterIndex < playableChapters.length - 1) {
          set({ chapter: playableChapters[currentChapterIndex + 1], sceneIndex: 0 });
        }
      },
      chooseChapter: (chapter) => set({ chapter, sceneIndex: 0 }),
      reset: () => set({ ...initialStats, chapter: 'prologue', sceneIndex: 0, seenCharacters: initialSeen }),
    }),
    { name: 'elite-campus-vn-save' },
  ),
);
