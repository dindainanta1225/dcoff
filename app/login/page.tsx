"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    console.log({
      email,
      password,
    });
  }

  return (
    <main className="min-h-screen bg-[#f4eee6] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          <p className="text-sm tracking-[0.35em] text-[#a35c2b] uppercase">
            Welcome Back
          </p>

          <h1 className="text-4xl font-bold text-[#3b1f14] mt-3">
            Login to dcoff
          </h1>

          <p className="text-[#795548] mt-3">
            Masuk untuk melanjutkan.
          </p>
        </div>

        <div className="bg-white shadow-lg p-8">

          <form onSubmit={handleLogin} className="space-y-6">

            <div>
              <label className="block text-sm font-semibold text-[#3b1f14] mb-2">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email"
                required
                className="w-full border border-[#d8c2ad] px-4 py-3 outline-none focus:border-[#6b3218]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#3b1f14] mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password"
                required
                className="w-full border border-[#d8c2ad] px-4 py-3 outline-none focus:border-[#6b3218]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#6b3218] text-white py-3 font-semibold hover:bg-[#4f2411] transition duration-300"
            >
              Login
            </button>

          </form>

        </div>

      </div>
    </main>
  );
}