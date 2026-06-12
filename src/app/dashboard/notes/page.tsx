"use client";

import { useState } from "react";

export default function NotesPage() {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    if (!title.trim()) {
      alert("Please enter a title");
      return;
    }

    alert("Note saved! (We'll connect a real database later)");

    setTitle("");
    setContent("");
    setShowForm(false);
  };

  return (
    <>
      <h1 className="text-4xl font-bold">
        Notes
      </h1>

      <p className="text-gray-400 mt-2">
        Create and manage your knowledge.
      </p>

      <button
        onClick={() => setShowForm(!showForm)}
        className="mt-8 bg-white text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
      >
        + New Note
      </button>

      {showForm && (
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
            onClick={handleSave}
            className="mt-4 bg-blue-500 px-5 py-2 rounded-lg font-semibold"
          >
            Save Note
          </button>
        </div>
      )}

      <div className="mt-8 border border-gray-800 rounded-xl p-6">
        <h2 className="text-xl font-semibold">
          Your Notes
        </h2>

        <p className="text-gray-500 mt-4">
          No notes yet.
        </p>
      </div>
    </>
  );
}