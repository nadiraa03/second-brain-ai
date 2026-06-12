"use client";

import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

type Note = {
  id: string;
  title: string;
  content: string;
};

export default function NotesPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);

  const loadNotes = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(db, "notes")
      );

      const notesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Note, "id">),
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

      setTitle("");
      setContent("");

      await loadNotes();

      alert("Note saved to Firebase!");
    } catch (error) {
      console.error(error);
      alert("Error saving note");
    }
  };

  const deleteNote = async (id: string) => {
    try {
      await deleteDoc(doc(db, "notes", id));

      await loadNotes();
    } catch (error) {
      console.error(error);
      alert("Error deleting note");
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
          className="mt-4 bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg font-semibold"
        >
          Save Note
        </button>
      </div>

      <div className="mt-8 border border-gray-800 rounded-xl p-6">
        <h2 className="text-xl font-semibold">
          Your Notes ({notes.length})
        </h2>

        {notes.length === 0 ? (
          <p className="text-gray-500 mt-4">
            No notes yet.
          </p>
        ) : (
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

                <button
                  onClick={() => deleteNote(note.id)}
                  className="mt-4 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}