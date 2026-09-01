"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { IconoLink, Tema, Link as LinkType } from "@/lib/tiktokers";

const iconos: IconoLink[] = [
  "tiktok", "instagram", "facebook", "whatsapp", "telegram",
  "youtube", "x", "linkedin", "email", "link",
];

const temasDisponibles: Tema[] = ["rosa", "morado", "azul", "oscuro", "atardecer"];

type Props = {
  modo: "crear" | "editar";
  inicial?: {
    usuario: string;
    nombre: string;
    foto: string;
    bio: string;
    tema: Tema;
    links: LinkType[];
  };
};

export default function TiktokerForm({ modo, inicial }: Props) {
  const router = useRouter();
  const [usuario, setUsuario] = useState(inicial?.usuario ?? "");
  const [nombre, setNombre] = useState(inicial?.nombre ?? "");
  const [foto, setFoto] = useState(inicial?.foto ?? "");
  const [bio, setBio] = useState(inicial?.bio ?? "");
  const [tema, setTema] = useState<Tema>(inicial?.tema ?? "morado");
  const [links, setLinks] = useState<LinkType[]>(inicial?.links ?? []);
  const [error, setError] = useState("");
  const [guardando, setGuardando] = useState(false);

  function agregarLink() {
    setLinks([...links, { titulo: "", url: "", icono: "link" }]);
  }

  function actualizarLink(i: number, campo: keyof LinkType, valor: string) {
    const copia = [...links];
    copia[i] = { ...copia[i], [campo]: valor };
    setLinks(copia);
  }

  function eliminarLink(i: number) {
    setLinks(links.filter((_, idx) => idx !== i));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setGuardando(true);

    const body = { usuario, nombre, foto, bio, tema, links };
    const url =
      modo === "crear"
        ? "/api/admin/tiktokers"
        : `/api/admin/tiktokers/${inicial!.usuario}`;
    const method = modo === "crear" ? "POST" : "PUT";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    setGuardando(false);

    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error || "Error al guardar");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-lg">
      <div>
        <label className="block text-sm text-gray-300 mb-1">Usuario (slug)</label>
        <input
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          disabled={modo === "editar"}
          placeholder="ej: eun7"
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white outline-none disabled:opacity-50"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-300 mb-1">Nombre</label>
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white outline-none"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-300 mb-1">Foto (URL Cloudinary)</label>
        <input
          value={foto}
          onChange={(e) => setFoto(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white outline-none"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-300 mb-1">Bio</label>
        <input
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white outline-none"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-300 mb-1">Tema</label>
        <select
          value={tema}
          onChange={(e) => setTema(e.target.value as Tema)}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white outline-none"
        >
          {temasDisponibles.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm text-gray-300">Links</label>
          <button
            type="button"
            onClick={agregarLink}
            className="text-sm px-3 py-1 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-500 text-white"
          >
            + Agregar link
          </button>
        </div>

        <div className="space-y-3">
          {links.map((link, i) => (
            <div key={i} className="bg-gray-800 p-3 rounded-lg space-y-2">
              <div className="flex gap-2">
                <select
                  value={link.icono}
                  onChange={(e) => actualizarLink(i, "icono", e.target.value)}
                  className="w-28 shrink-0 px-2 py-2 rounded-lg bg-gray-700 text-white outline-none text-sm"
                >
                  {iconos.map((ic) => (
                    <option key={ic} value={ic}>{ic}</option>
                  ))}
                </select>
                <input
                  placeholder="Título"
                  value={link.titulo}
                  onChange={(e) => actualizarLink(i, "titulo", e.target.value)}
                  className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-gray-700 text-white outline-none text-sm"
                />
                <button
                  type="button"
                  onClick={() => eliminarLink(i)}
                  className="shrink-0 px-3 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-sm"
                >
                  ✕
                </button>
              </div>
              <input
                placeholder="URL"
                value={link.url}
                onChange={(e) => actualizarLink(i, "url", e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white outline-none text-sm"
              />
            </div>
          ))}
        </div>
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={guardando}
        className="w-full py-2.5 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold transition disabled:opacity-50"
      >
        {guardando ? "Guardando..." : modo === "crear" ? "Crear" : "Guardar cambios"}
      </button>
    </form>
  );
}
