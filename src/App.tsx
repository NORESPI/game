import { Encyclopedia } from './components/Encyclopedia';
import { Sidebar } from './components/Sidebar';
import { StoryPanel } from './components/StoryPanel';
import { useVNStore } from './store';

export default function App() {
  const reset = useVNStore((s) => s.reset);

  return (
    <main className="min-h-screen bg-[#060916] bg-[radial-gradient(circle_at_15%_10%,rgba(63,94,251,0.22),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.15),transparent_35%)] p-4 font-display text-slate-100">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[280px_1fr_380px]">
        <Sidebar />
        <div className="space-y-4">
          <header className="rounded-xl border border-slate-700 bg-slate-900/80 p-4 backdrop-blur-sm">
            <h1 className="text-2xl font-bold">Mandat A — Jeu complet (Prototype narratif)</h1>
            <p className="text-sm text-slate-300">Thriller psychologique universitaire original, direction artistique cold light novel.</p>
            <div className="mt-2 flex gap-2">
              <button onClick={reset} className="rounded bg-slate-700 px-3 py-1 text-xs hover:bg-slate-600">
                Réinitialiser la sauvegarde locale
              </button>
              <span className="rounded border border-violet-400/40 bg-violet-500/10 px-2 py-1 text-[11px] text-violet-200">Framer Motion + Zustand + localStorage</span>
            </div>
          </header>
          <StoryPanel />
        </div>
        <Encyclopedia />
      </div>
    </main>
  );
}
