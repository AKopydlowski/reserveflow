export function Topbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/90 px-6 py-4 backdrop-blur">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">Management system</p>
          <h1 className="text-lg font-semibold text-white">ReserveFlow</h1>
        </div>

        <div className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-sm text-slate-300">
          Admin
        </div>
      </div>
    </header>
  );
}