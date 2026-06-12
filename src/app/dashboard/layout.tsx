"use client";

import Link from "next/link";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error(error);
      alert("Logout failed");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex">

        <aside className="w-64 min-h-screen border-r border-gray-800 p-6 flex flex-col">

          <div>
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
          </div>

          <button
            onClick={handleLogout}
            className="mt-auto bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
          >
            Logout
          </button>

        </aside>

        <section className="flex-1 p-8">
          {children}
        </section>

      </div>
    </main>
  );
}