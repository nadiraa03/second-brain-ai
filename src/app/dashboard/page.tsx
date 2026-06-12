export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex">

        {/* Sidebar */}
        <aside className="w-64 min-h-screen border-r border-gray-800 p-6">
          <h1 className="text-2xl font-bold">
            Second Brain AI
          </h1>

          <nav className="mt-10 space-y-4">
            <button className="block text-left w-full hover:text-blue-400">
              Dashboard
            </button>

            <button className="block text-left w-full hover:text-blue-400">
              Notes
            </button>

            <button className="block text-left w-full hover:text-blue-400">
              Knowledge Graph
            </button>

            <button className="block text-left w-full hover:text-blue-400">
              Settings
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <section className="flex-1 p-8">

          <h2 className="text-4xl font-bold">
            Dashboard
          </h2>

          <p className="text-gray-400 mt-2">
            Welcome back. Here's an overview of your knowledge system.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold">
                Notes
              </h3>

              <p className="text-4xl font-bold mt-4">
                0
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold">
                Connections
              </h3>

              <p className="text-4xl font-bold mt-4">
                0
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold">
                AI Insights
              </h3>

              <p className="text-4xl font-bold mt-4">
                0
              </p>
            </div>

          </div>

          <div className="mt-10 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold">
              Recent Notes
            </h3>

            <p className="text-gray-500 mt-3">
              No notes yet. Create your first note.
            </p>

            <button className="mt-5 bg-white text-black px-5 py-2 rounded-lg font-semibold">
              + Create Note
            </button>
          </div>

        </section>

      </div>
    </main>
  );
}