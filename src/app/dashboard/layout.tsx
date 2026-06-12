import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex">

        <aside className="w-64 min-h-screen border-r border-gray-800 p-6">

          <h1 className="text-2xl font-bold mb-10">
            Second Brain AI
          </h1>

          <nav className="space-y-4">

            <Link
              href="/dashboard"
              className="block hover:text-blue-400 transition"
            >
              Dashboard
            </Link>

            <Link
              href="/dashboard/notes"
              className="block hover:text-blue-400 transition"
            >
              Notes
            </Link>

            <Link
              href="/dashboard/graph"
              className="block hover:text-blue-400 transition"
            >
              Knowledge Graph
            </Link>

            <Link
              href="/dashboard/settings"
              className="block hover:text-blue-400 transition"
            >
              Settings
            </Link>

          </nav>

        </aside>

        <section className="flex-1 p-8">
          {children}
        </section>

      </div>
    </main>
  );
}