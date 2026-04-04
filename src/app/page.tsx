import { prisma } from "@/lib/db/prisma";

export default async function HomePage() {
  const clientsCount = await prisma.client.count();
  const servicesCount = await prisma.service.count();
  const resourcesCount = await prisma.resource.count();
  const appointmentsCount = await prisma.appointment.count();

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Portfolio project
          </p>
          <h1 className="mt-3 text-4xl font-bold">ReserveFlow</h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Flexible appointment management system for service-based businesses.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Clients</p>
            <p className="mt-2 text-3xl font-semibold">{clientsCount}</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Services</p>
            <p className="mt-2 text-3xl font-semibold">{servicesCount}</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Resources</p>
            <p className="mt-2 text-3xl font-semibold">{resourcesCount}</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Appointments</p>
            <p className="mt-2 text-3xl font-semibold">{appointmentsCount}</p>
          </div>
        </div>
      </div>
    </main>
  );
}