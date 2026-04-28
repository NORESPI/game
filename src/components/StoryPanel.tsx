import { motion } from 'framer-motion';
import { characterById } from '../data/characters';
import { chapterTitles } from '../data/scenes';
import { useVNStore } from '../store';
import { CinematicStage } from './CinematicStage';

export function StoryPanel() {
  const { scene, choose, next, chapter } = useVNStore((s) => ({
    scene: s.getCurrentScene(),
    chapter: s.chapter,
    choose: s.choose,
    next: s.next,
  }));
import { scenes } from '../data/scenes';
import { useVNStore } from '../store';

export function StoryPanel() {
  const { chapter, sceneIndex, applyEffects, next } = useVNStore();
  const chapterScenes = scenes.filter((s) => s.chapterId === chapter);
  const scene = chapterScenes[sceneIndex];

  if (!scene) return <div className="p-4">Pas de scène.</div>;
  const speaker = scene.speakerId ? characterById[scene.speakerId] : null;

  return (
    <motion.section className="space-y-3 rounded-xl border border-slate-700 bg-slate-900/80 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <CinematicStage backgroundId={scene.art.backgroundId} portraitIds={scene.art.portraitIds} shot={scene.art.cinematicShot} />

      <div>
        <p className="text-xs uppercase tracking-widest text-slate-400">{chapterTitles[chapter]}</p>
        <p className="text-[11px] uppercase tracking-wider text-slate-500">{scene.location}</p>
        <h2 className="mt-1 text-xl font-semibold text-white">{scene.title}</h2>
        {speaker && <p className="mt-2 text-sm text-violet-300">{speaker.name}</p>}
        <p className="mt-2 leading-relaxed text-slate-100">{scene.text}</p>
      </div>

      {scene.choices?.length ? (
        <div className="space-y-2">
          {scene.choices.map((choice) => (
            <button
              key={choice.id}
              onClick={() => choose(choice)}
    <motion.section className="rounded-xl border border-slate-700 bg-slate-900/80 p-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <p className="text-xs uppercase tracking-wide text-slate-400">{scene.location}</p>
      <h2 className="mt-1 text-xl font-semibold text-white">{scene.title}</h2>
      {speaker && <p className="mt-3 text-sm text-violet-300">{speaker.name}</p>}
      <p className="mt-2 leading-relaxed text-slate-100">{scene.text}</p>

      {scene.choices?.length ? (
        <div className="mt-4 space-y-2">
          {scene.choices.map((choice) => (
            <button
              key={choice.id}
              onClick={() => {
                applyEffects(choice.effects);
                next();
              }}
              className="w-full rounded-lg border border-violet-400/30 bg-violet-500/10 px-3 py-2 text-left text-sm text-violet-100 transition hover:bg-violet-500/20"
            >
              {choice.label}
            </button>
          ))}
        </div>
      ) : (
        <button onClick={next} className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500">
        <button onClick={next} className="mt-5 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500">
          Continuer
        </button>
      )}
    </motion.section>
  );
}
