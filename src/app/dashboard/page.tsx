"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Dashboard() {
  const [noteCount, setNoteCount] = useState(0);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "notes")
        );

        setNoteCount(querySnapshot.size);
      } catch (error) {
        console.error(error);
      }
    };

    loadStats();
  }, []);

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
            {noteCount}
          </p>
        </div>

        <div className="border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold">
            Connections
          </h3>

          <p className="text-4xl font-bold mt-4">
            Coming Soon
          </p>
        </div>

        <div className="border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold">
            AI Insights
          </h3>

          <p className="text-4xl font-bold mt-4">
            Coming Soon
          </p>
        </div>

      </div>
    </>
  );
}