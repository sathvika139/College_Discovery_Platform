"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  function handleLogin() {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    router.push("/home");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4">
      <div className="w-full max-w-lg bg-[#111111] rounded-3xl shadow-2xl p-10">
        <h1 className="text-5xl font-bold text-center mb-3">
          College Discovery Platform
        </h1>

        <p className="text-center text-gray-400 mb-10">
          Discover, Compare and Predict Colleges
        </p>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 mb-5 rounded-xl bg-[#1a1a1a] border border-[#222] text-white"
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 mb-6 rounded-xl bg-[#1a1a1a] border border-[#222] text-white"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-white text-black py-4 rounded-xl font-semibold mb-4 hover:bg-gray-200"
        >
          Login
        </button>

        <button
          onClick={handleLogin}
          className="w-full border border-[#333] py-4 rounded-xl font-semibold hover:bg-[#181818]"
        >
          Signup
        </button>

        <div className="mt-8 text-center text-gray-400">
          Don't have an account?{" "}
          <span className="text-white cursor-pointer">Sign up</span>
        </div>

        <div className="text-center mt-3 text-red-400 cursor-pointer">
          Forgot Password?
        </div>
      </div>
    </main>
  );
}
