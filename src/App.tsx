import { Encyclopedia } from './components/Encyclopedia';
import { Sidebar } from './components/Sidebar';
import { StoryPanel } from './components/StoryPanel';
import { useVNStore } from './store';

export default function App() {
  const reset = useVNStore((s) => s.reset);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 p-4 font-display text-slate-100">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[280px_1fr_360px]">
        <Sidebar />
        <div className="space-y-4">
          <header className="rounded-xl border border-slate-700 bg-slate-900/80 p-4">
            <h1 className="text-2xl font-bold">Mandat A — Visual Novel</h1>
            <p className="text-sm text-slate-300">Thriller psychologique universitaire original (prototype local).</p>
            <button onClick={reset} className="mt-2 rounded bg-slate-700 px-3 py-1 text-xs hover:bg-slate-600">
              Réinitialiser la sauvegarde locale
            </button>
          </header>
          <StoryPanel />
        </div>
        <Encyclopedia />
      </div>
    </main>
  );
}
