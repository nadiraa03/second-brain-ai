export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-white p-8">

      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="border border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold">
            Notes
          </h2>

          <p className="text-gray-400 mt-2">
            Total notes stored
          </p>

          <p className="text-4xl font-bold mt-4">
            0
          </p>
        </div>

        <div className="border border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold">
            Connections
          </h2>

          <p className="text-gray-400 mt-2">
            Linked ideas
          </p>

          <p className="text-4xl font-bold mt-4">
            0
          </p>
        </div>

        <div className="border border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold">
            AI Insights
          </h2>

          <p className="text-gray-400 mt-2">
            Generated suggestions
          </p>

          <p className="text-4xl font-bold mt-4">
            0
          </p>
        </div>

      </div>

    </main>
  );
}