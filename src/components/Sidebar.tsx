import { chapterTitles } from '../data/scenes';
import { useVNStore } from '../store';
import type { ChapterId } from '../types';

const nav: Array<{ id: ChapterId; label: string }> = [
  { id: 'prologue', label: 'Histoire' },
  { id: 'chapter1', label: 'Ch.1' },
  { id: 'chapter2', label: 'Ch.2' },
  { id: 'chapter3', label: 'Ch.3+' },
  { id: 'chapter4', label: 'Ch.4+' },
  { id: 'chapter5', label: 'Ch.5+' },
  { id: 'chapter6', label: 'Ch.6+' },
];

export function Sidebar() {
  const { chapter, chooseChapter, studentCouncilTrust, bdePressure, directorAttention, teacherTrustShirogane, classUnityC, classDoctrineProgress, kaitoHostility, reikaInterest, yutoTrust } =
    useVNStore();

  return (
    <aside className="space-y-4 rounded-xl border border-slate-700 bg-slate-900/80 p-4">
      <div>
        <p className="text-xs uppercase text-slate-400">Chapitre</p>
        <p className="text-sm text-white">{chapterTitles[chapter]}</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {nav.map((n) => (
          <button
            key={n.id}
            onClick={() => chooseChapter(n.id)}
            className={`rounded px-2 py-1 text-xs ${chapter === n.id ? 'bg-violet-600 text-white' : 'bg-slate-800 text-slate-300'}`}
          >
            {n.label}
          </button>
        ))}
      </div>

      <div className="space-y-1 text-xs text-slate-200">
        <Stat k="studentCouncilTrust" v={studentCouncilTrust} />
        <Stat k="bdePressure" v={bdePressure} />
        <Stat k="directorAttention" v={directorAttention} />
        <Stat k="teacherTrustShirogane" v={teacherTrustShirogane} />
        <Stat k="classUnityC" v={classUnityC} />
        <Stat k="classDoctrineProgress" v={classDoctrineProgress} />
        <Stat k="kaitoHostility" v={kaitoHostility} />
        <Stat k="reikaInterest" v={reikaInterest} />
        <Stat k="yutoTrust" v={yutoTrust} />
      </div>
    </aside>
  );
}

function Stat({ k, v }: { k: string; v: number }) {
  return (
    <div className="flex items-center justify-between rounded bg-slate-800/70 px-2 py-1">
      <span>{k}</span>
      <span className="font-semibold text-violet-300">{v}</span>
    </div>
  );
}
