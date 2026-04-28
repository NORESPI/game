import { motion } from 'framer-motion';
import { artById } from '../data/artAssets';
import { characterById } from '../data/characters';

type Props = {
  backgroundId: string;
  portraitIds?: string[];
  shot?: 'wide' | 'mid' | 'close' | 'over-shoulder';
};

const shotClass: Record<NonNullable<Props['shot']>, string> = {
  wide: 'scale-100',
  mid: 'scale-105',
  close: 'scale-110',
  'over-shoulder': 'scale-105 translate-x-3',
};

const tintClass: Record<NonNullable<Props['shot']>, string> = {
  wide: 'from-slate-950/65 via-indigo-950/40 to-slate-950/80',
  mid: 'from-slate-950/55 via-violet-950/40 to-slate-950/80',
  close: 'from-slate-950/45 via-violet-900/35 to-slate-950/85',
  'over-shoulder': 'from-slate-950/65 via-blue-950/30 to-slate-950/80',
};

export function CinematicStage({ backgroundId, portraitIds, shot = 'mid' }: Props) {
  const art = artById[backgroundId];

  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-700/80 bg-slate-900">
      <motion.div
        key={backgroundId}
        className={`h-56 bg-cover bg-center transition-transform duration-700 md:h-72 ${shotClass[shot]}`}
        style={{ backgroundImage: `linear-gradient(120deg,#1e293bcc,#0f172ab0),url(${art?.localPath ?? ''})` }}
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${tintClass[shot]}`} />
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <div className="flex flex-wrap gap-2">
          {(portraitIds ?? []).slice(0, 4).map((spriteId) => {
            const charId = spriteId.replace(/-(neutral|focused)$/u, '');
            const char = characterById[charId];
            return (
              <div key={spriteId} className="rounded-full border border-violet-300/40 bg-slate-900/75 px-3 py-1 text-[11px] text-violet-100 backdrop-blur-sm">
                {char?.name ?? spriteId}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
