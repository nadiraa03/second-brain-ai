import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Navbar */}
        <nav className="flex justify-between items-center py-6">
          <h1 className="text-2xl font-bold">
            Second Brain AI
          </h1>

          <Link
            href="/login"
            className="border border-gray-700 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
          >
            Login
          </Link>
        </nav>

        {/* Hero */}
        <section className="flex flex-col items-center justify-center text-center min-h-[80vh]">

          <p className="text-blue-400 uppercase tracking-widest">
            Personal Knowledge System
          </p>

          <h1 className="text-7xl font-bold mt-4">
            Think Less.
            <br />
            Remember More.
          </h1>

          <p className="text-gray-400 mt-6 max-w-xl">
            Connect notes, ideas, projects and knowledge into one intelligent
            second brain powered by AI.
          </p>

          <div className="flex gap-4 mt-8">

            <Link
              href="/signup"
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              Get Started
            </Link>

            <a
              href="#about"
              className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              Learn More
            </a>

          </div>

        </section>

        {/* About */}
        <section
          id="about"
          className="py-20 border-t border-gray-800"
        >
          <h2 className="text-4xl font-bold text-center">
            Why Second Brain AI?
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            Store your knowledge, connect ideas, visualize relationships,
            and let AI help you discover new insights.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold">
                Smart Notes
              </h3>

              <p className="text-gray-400 mt-2">
                Organize and manage all your ideas in one place.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold">
                Knowledge Graph
              </h3>

              <p className="text-gray-400 mt-2">
                Visualize how your ideas connect together.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold">
                AI Insights
              </h3>

              <p className="text-gray-400 mt-2">
                Let AI discover patterns and suggest connections.
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}