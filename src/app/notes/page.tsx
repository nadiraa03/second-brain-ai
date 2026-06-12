export default function NotesPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold">
        Notes
      </h1>

      <p className="text-gray-400 mt-2">
        Create and manage your knowledge.
      </p>

      <div className="mt-8">
        <button className="bg-white text-black px-5 py-2 rounded-lg font-semibold">
          + New Note
        </button>
      </div>

      <div className="mt-8 border border-gray-800 rounded-xl p-6">
        <h2 className="text-xl font-semibold">
          Your Notes
        </h2>

        <p className="text-gray-500 mt-4">
          No notes yet.
        </p>
      </div>
    </main>
  );
}