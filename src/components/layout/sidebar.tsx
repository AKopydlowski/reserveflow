import Link from "next/link";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/appointments", label: "Appointments" },
  { href: "/dashboard/clients", label: "Clients" },
  { href: "/dashboard/services", label: "Services" },
  { href: "/dashboard/resources", label: "Resources" },
  { href: "/dashboard/settings", label: "Settings" },
];

export function Sidebar() {
  return (
    <aside className="hidden w-64 border-r border-slate-800 bg-slate-950 lg:block">
      <div className="border-b border-slate-800 px-6 py-5">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
          ReserveFlow
        </p>
        <h2 className="mt-2 text-lg font-semibold text-white">Admin Panel</h2>
      </div>

      <nav className="flex flex-col gap-2 p-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}