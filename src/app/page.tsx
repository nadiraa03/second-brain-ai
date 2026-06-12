export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-6xl font-bold">
        Second Brain AI
      </h1>

      <p className="mt-4 text-gray-400 text-lg">
        Build your personal knowledge network.
      </p>

      <button className="mt-8 px-6 py-3 bg-white text-black rounded-lg font-semibold">
        Get Started
      </button>
    </main>
  );
}