import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-sm text-slate-300">
            Portfolio project
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            ReserveFlow
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            A modern and flexible appointment management system for service-based
            businesses such as barbers, tutors, dietitians, mechanics, and consultants.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-lg border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-200">
              Next.js
            </span>
            <span className="rounded-lg border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-200">
              TypeScript
            </span>
            <span className="rounded-lg border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-200">
              Tailwind CSS
            </span>
            <span className="rounded-lg border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-200">
              Prisma
            </span>
            <span className="rounded-lg border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-200">
              SQLite
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}