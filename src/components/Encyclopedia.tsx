import { useMemo, useState } from 'react';
import { characterById, characters, classes } from '../data/characters';
import { useVNStore } from '../store';
import type { ClassId } from '../types';

type Tab = 'classes' | 'dossiers' | 'bde' | 'admin';

export function Encyclopedia() {
  const [tab, setTab] = useState<Tab>('classes');
  const [yearFilter, setYearFilter] = useState<'all' | '1' | '2' | '3' | '0'>('all');
  const [classFilter, setClassFilter] = useState<'all' | ClassId>('all');

  return (
    <section className="rounded-xl border border-slate-700 bg-slate-900/80 p-4">
      <div className="mb-3 flex flex-wrap gap-2 text-xs">
        {(['classes', 'dossiers', 'bde', 'admin'] as Tab[]).map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`rounded px-2 py-1 ${tab === t ? 'bg-violet-600 text-white' : 'bg-slate-800 text-slate-300'}`}>
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      {tab === 'classes' && <ClassesView />}
      {tab === 'dossiers' && <DossiersView yearFilter={yearFilter} setYearFilter={setYearFilter} classFilter={classFilter} setClassFilter={setClassFilter} />}
      {tab === 'bde' && <BDEView />}
      {tab === 'admin' && <AdminView />}
    </section>
  );
}

function ClassesView() {
  return (
    <div>
      <h3 className="mb-2 text-sm font-semibold text-white">12 classes</h3>
      <div className="grid grid-cols-4 gap-2 text-xs">
        {classes.map((id) => (
          <div key={id} className="rounded border border-slate-700 bg-slate-800/70 p-2 text-center text-slate-200">
            {id}
          </div>
        ))}
      </div>
    </div>
  );
}

function DossiersView({
  yearFilter,
  setYearFilter,
  classFilter,
  setClassFilter,
}: {
  yearFilter: 'all' | '1' | '2' | '3' | '0';
  setYearFilter: (y: 'all' | '1' | '2' | '3' | '0') => void;
  classFilter: 'all' | ClassId;
  setClassFilter: (c: 'all' | ClassId) => void;
}) {
  const { seenCharacters } = useVNStore();
  const filtered = useMemo(
    () =>
      characters.filter((c) => (yearFilter === 'all' ? true : String(c.year) === yearFilter) && (classFilter === 'all' ? true : c.classId === classFilter)),
    [classFilter, yearFilter],
  );

  return (
    <div>
      <div className="mb-2 flex gap-2 text-xs">
        <select value={yearFilter} onChange={(e) => setYearFilter(e.target.value as any)} className="rounded bg-slate-800 p-1 text-slate-200">
          <option value="all">Toutes années</option>
          <option value="1">1ère année</option>
          <option value="2">2ème année</option>
          <option value="3">3ème année</option>
          <option value="0">Administration</option>
        </select>
        <select value={classFilter} onChange={(e) => setClassFilter(e.target.value as any)} className="rounded bg-slate-800 p-1 text-slate-200">
          <option value="all">Toutes classes</option>
          {classes.map((id) => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </select>
      </div>
      <div className="max-h-80 space-y-2 overflow-auto pr-1 text-xs">
        {filtered.map((char) => {
          const seen = seenCharacters.includes(char.id);
          return (
            <div key={char.id} className="rounded border border-slate-700 bg-slate-800/70 p-2">
              <div className="flex items-center justify-between">
                <p className="font-medium text-slate-100">{seen ? char.name : 'Inconnu'}</p>
                <p className="text-slate-400">{char.classId}</p>
              </div>
              <p className="text-slate-400">Rôle: {char.role}</p>
              <p className="text-slate-300">Confiance: {seen ? char.relationshipInitial : '??'}</p>
              <p className="text-slate-300">Notes débloquées: {seen ? char.unlockedNotes.length : 0}</p>
              <p className="text-slate-500">Secrets: {seen ? 'Inconnus' : '???'}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function BDEView() {
  const bde = ['masato-kiryuu', 'sae-kurosawa', 'leon-shigemura', 'nao-kanzaki', 'eiji-rindou'];
  return (
    <div className="space-y-2 text-xs text-slate-200">
      <p className="text-sm font-semibold text-white">BDE (contrôlé par 3-A)</p>
      {bde.map((id) => (
        <div key={id} className="rounded border border-slate-700 bg-slate-800/70 p-2">
          <p className="font-medium">{characterById[id].name}</p>
          <p className="text-slate-400">{characterById[id].shortDescription}</p>
        </div>
      ))}
    </div>
  );
}

function AdminView() {
  const admin = ['dr-seijuro-aramaki', 'kaede-minazuki', 'osamu-takagi', 'natsume-shirogane', 'goro-madarame'];
  return (
    <div className="space-y-2 text-xs text-slate-200">
      <p className="text-sm font-semibold text-white">Administration</p>
      {admin.map((id) => (
        <div key={id} className="rounded border border-slate-700 bg-slate-800/70 p-2">
          <p className="font-medium">{characterById[id].name}</p>
          <p className="text-slate-400">{characterById[id].shortDescription}</p>
        </div>
      ))}
    </div>
  );
}
