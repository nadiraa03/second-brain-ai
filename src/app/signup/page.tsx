"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const signup = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Signup failed");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="w-full max-w-md border border-gray-800 rounded-xl p-8">

        <h1 className="text-4xl font-bold mb-6">
          Sign Up
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg mb-4 text-white placeholder-gray-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg mb-4 text-white placeholder-gray-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={signup}
          className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold"
        >
          Create Account
        </button>

        <p className="mt-6 text-gray-400 text-center">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-400 hover:text-blue-300"
          >
            Login
          </Link>
        </p>

      </div>
    </main>
  );
}