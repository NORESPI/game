import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { chapterOrder, sceneById, scenes } from './data/scenes';
import { characters } from './data/characters';
import type { ChapterId, StatKey, StoryChoice, StoryScene } from './types';

type Stats = Record<StatKey, number>;

type VNState = Stats & {
  chapter: ChapterId;
  currentSceneId: string;
  seenCharacters: string[];
  notesByCharacter: Record<string, string[]>;
  getCurrentScene: () => StoryScene | undefined;
  applyEffects: (effects?: Partial<Record<StatKey, number>>) => void;
  next: () => void;
  choose: (choice: StoryChoice) => void;
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

const initialSceneId = 'p1';
const firstSceneByChapter = Object.fromEntries(chapterOrder.map((chapterId) => [chapterId, scenes.find((s) => s.chapterId === chapterId)?.id ?? initialSceneId])) as Record<ChapterId, string>;

function unlockSceneCharacters(sceneId: string | undefined, unlockCharacter: (id: string) => void) {
  if (!sceneId) return;
  sceneById[sceneId]?.autoUnlockCharacters?.forEach((id) => unlockCharacter(id));
}
const initialSeen = ['ren-kanzaki'];

export const useVNStore = create<VNState>()(
  persist(
    (set, get) => ({
      ...initialStats,
      chapter: 'prologue',
      currentSceneId: initialSceneId,
      seenCharacters: ['ren-kanzaki'],
      notesByCharacter: Object.fromEntries(characters.map((ch) => [ch.id, [...ch.unlockedNotes]])),
      getCurrentScene: () => sceneById[get().currentSceneId],
      applyEffects: (effects) => {
        if (!effects) return;
        set((state) => {
          const patch: Partial<Stats> = {};
          (Object.keys(effects) as StatKey[]).forEach((key) => {
            patch[key] = state[key] + (effects[key] ?? 0);
          });
          return patch;
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
        const current = get().getCurrentScene();
        unlockSceneCharacters(current?.id, get().unlockCharacter);
        if (current?.nextSceneId) {
          const nextScene = sceneById[current.nextSceneId];
          if (nextScene) {
            set({ currentSceneId: nextScene.id, chapter: nextScene.chapterId });
            unlockSceneCharacters(nextScene.id, get().unlockCharacter);
          }
        }
      },
      choose: (choice) => {
        get().applyEffects(choice.effects);
        const current = get().getCurrentScene();
        unlockSceneCharacters(current?.id, get().unlockCharacter);

        if (choice.nextSceneId && sceneById[choice.nextSceneId]) {
          const target = sceneById[choice.nextSceneId];
          set({ currentSceneId: target.id, chapter: target.chapterId });
          unlockSceneCharacters(target.id, get().unlockCharacter);
          return;
        }
        get().next();
      },
      chooseChapter: (chapter) => {
        const firstScene = firstSceneByChapter[chapter] ?? initialSceneId;
        set({ chapter, currentSceneId: firstScene });
      },
      reset: () => set({ ...initialStats, chapter: 'prologue', currentSceneId: initialSceneId, seenCharacters: ['ren-kanzaki'] }),
    }),
    { name: 'elite-campus-vn-save-v2' },
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
