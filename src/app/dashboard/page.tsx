export default function Dashboard() {
  return (
    <>
      <h1 className="text-4xl font-bold">
        Dashboard
      </h1>

      <p className="text-gray-400 mt-2">
        Welcome back to your Second Brain.
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
    </>
  );
}