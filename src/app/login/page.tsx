"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login successful!");
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20">
      <h1 className="text-4xl font-bold mb-6">
        Login
      </h1>

      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg mb-4 text-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg mb-4 text-white"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={login}
        className="bg-green-500 px-5 py-2 rounded-lg"
      >
        Login
      </button>
    </div>
  );
}