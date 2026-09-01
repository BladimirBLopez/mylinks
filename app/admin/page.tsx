"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Tiktoker = { usuario: string; nombre: string; foto: string };

export default function AdminPage() {
  const [tiktokers, setTiktokers] = useState<Tiktoker[]>([]);
  const [cargando, setCargando] = useState(true);

  async function cargar() {
    setCargando(true);
    const res = await fetch("/api/admin/tiktokers");
    const data = await res.json();
    setTiktokers(data);
    setCargando(false);
  }

  useEffect(() => {
    cargar();
  }, []);

  async function eliminar(usuario: string) {
    if (!confirm(`¿Eliminar a ${usuario}?`)) return;
    await fetch(`/api/admin/tiktokers/${usuario}`, { method: "DELETE" });
    cargar();
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold">MyLinks Admin</h1>
          <button onClick={logout} className="text-sm text-gray-400 hover:text-white">
            Cerrar sesión
          </button>
        </div>

        <Link
          href="/admin/nuevo"
          className="block w-full text-center py-2.5 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-500 font-semibold mb-6"
        >
          + Agregar tiktoker
        </Link>

        {cargando && <p className="text-gray-400">Cargando...</p>}

        <div className="space-y-3">
          {tiktokers.map((t) => (
            <div key={t.usuario} className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg">
              <img src={t.foto} alt={t.nombre} className="w-10 h-10 rounded-full object-cover" />
              <div className="flex-1">
                <p className="font-semibold">{t.nombre}</p>
                <p className="text-xs text-gray-400">/{t.usuario}</p>
              </div>
              <Link
                href={`/admin/${t.usuario}`}
                className="text-sm px-3 py-1 rounded-lg bg-gray-700 hover:bg-gray-600"
              >
                Editar
              </Link>
              <button
                onClick={() => eliminar(t.usuario)}
                className="text-sm px-3 py-1 rounded-lg bg-red-600 hover:bg-red-500"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
