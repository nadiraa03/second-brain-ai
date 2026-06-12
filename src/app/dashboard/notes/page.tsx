"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

import { onAuthStateChanged } from "firebase/auth";

import { db, auth } from "@/lib/firebase";

type Note = {
  id: string;
  title: string;
  content: string;
};

export default function NotesPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase())
  );

  const loadNotes = async () => {
    try {
      const user = auth.currentUser;

      if (!user) return;

      const q = query(
        collection(db, "notes"),
        where("userId", "==", user.uid)
      );

      const querySnapshot = await getDocs(q);

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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      } else {
        loadNotes();
      }
    });

    return () => unsubscribe();
  }, []);

  const saveNote = async () => {
    try {
      if (!title.trim()) {
        alert("Please enter a title");
        return;
      }

      const user = auth.currentUser;

      if (!user) {
        alert("Please login first");
        return;
      }

      await addDoc(collection(db, "notes"), {
        title,
        content,
        userId: user.uid,
        createdAt: new Date(),
      });

      setTitle("");
      setContent("");

      await loadNotes();

      alert("Note saved!");
    } catch (error) {
      console.error(error);
      alert("Error saving note");
    }
  };

  const editNote = (note: Note) => {
    setEditingId(note.id);
    setTitle(note.title);
    setContent(note.content);
  };

  const updateNote = async () => {
    try {
      if (!editingId) return;

      await updateDoc(doc(db, "notes", editingId), {
        title,
        content,
      });

      setEditingId(null);
      setTitle("");
      setContent("");

      await loadNotes();

      alert("Note updated!");
    } catch (error) {
      console.error(error);
      alert("Error updating note");
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
      <h1 className="text-4xl font-bold">Notes</h1>

      <p className="text-gray-400 mt-2">
        Create and manage your knowledge.
      </p>

      <div className="mt-8 border border-gray-800 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">
          {editingId ? "Edit Note" : "Create New Note"}
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
          onClick={editingId ? updateNote : saveNote}
          className="mt-4 bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg font-semibold"
        >
          {editingId ? "Update Note" : "Save Note"}
        </button>

        {editingId && (
          <button
            onClick={() => {
              setEditingId(null);
              setTitle("");
              setContent("");
            }}
            className="mt-4 ml-2 bg-gray-600 hover:bg-gray-700 px-5 py-2 rounded-lg font-semibold"
          >
            Cancel
          </button>
        )}
      </div>

      <div className="mt-8 border border-gray-800 rounded-xl p-6">
        <h2 className="text-xl font-semibold">
          Your Notes ({filteredNotes.length})
        </h2>

        <input
          type="text"
          placeholder="🔍 Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mt-4 bg-gray-900 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400"
        />

        {filteredNotes.length === 0 ? (
          <p className="text-gray-500 mt-4">
            No notes found.
          </p>
        ) : (
          <div className="mt-6 space-y-4">
            {filteredNotes.map((note) => (
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

                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => editNote(note)}
                    className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteNote(note.id)}
                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}