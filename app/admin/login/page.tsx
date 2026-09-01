"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario, password }),
    });
    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900 px-6">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm bg-gray-800 rounded-2xl p-6 space-y-4"
      >
        <h1 className="text-white text-xl font-bold text-center">MyLinks Admin</h1>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none"
        />
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full py-2.5 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold transition"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}
