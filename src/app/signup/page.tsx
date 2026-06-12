"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Account created!");
    } catch (error) {
      console.error(error);
      alert("Signup failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20">
      <h1 className="text-4xl font-bold mb-6">
        Sign Up
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
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={signup}
        className="bg-blue-500 px-5 py-2 rounded-lg"
      >
        Create Account
      </button>
    </div>
  );
}