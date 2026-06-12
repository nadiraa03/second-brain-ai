"use client";

import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function NotesPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState<any[]>([]);

  const loadNotes = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(db, "notes")
      );

      const notesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setNotes(notesData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const saveNote = async () => {
    try {
      if (!title.trim()) {
        alert("Please enter a title");
        return;
      }

      await addDoc(collection(db, "notes"), {
        title,
        content,
        createdAt: new Date(),
      });

      await loadNotes();

      setTitle("");
      setContent("");

      alert("Note saved to Firebase!");
    } catch (error) {
      console.error(error);
      alert("Error saving note");
    }
  };

  return (
    <>
      <h1 className="text-4xl font-bold">
        Notes
      </h1>

      <p className="text-gray-400 mt-2">
        Create and manage your knowledge.
      </p>

      <div className="mt-8 border border-gray-800 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">
          Create New Note
        </h2>

        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 mb-4"
        />

        <textarea
          placeholder="Write your note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3"
        />

        <button
          onClick={saveNote}
          className="mt-4 bg-blue-500 px-5 py-2 rounded-lg font-semibold"
        >
          Save Note
        </button>
      </div>

      <div className="mt-8 border border-gray-800 rounded-xl p-6">
        <h2 className="text-xl font-semibold">
          Your Notes ({notes.length})
        </h2>

        <div className="mt-6 space-y-4">
          {notes.map((note) => (
            <div
              key={note.id}
              className="border border-gray-700 rounded-xl p-4"
            >
              <h3 className="text-lg font-bold">
                {note.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {note.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}