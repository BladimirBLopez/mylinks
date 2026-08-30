import { tiktokers } from "@/lib/tiktokers";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function PerfilPage({ params }: { params: { usuario: string } }) {
  const tiktoker = tiktokers.find((t) => t.usuario === params.usuario);
  if (!tiktoker) return notFound();

  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-12 bg-black text-white">
      <Image
        src={tiktoker.foto}
        alt={tiktoker.nombre}
        width={100}
        height={100}
        className="rounded-full object-cover"
      />
      <h1 className="mt-4 text-xl font-bold">{tiktoker.nombre}</h1>
      {tiktoker.bio && <p className="text-gray-400 text-sm mt-1">{tiktoker.bio}</p>}

      <div className="mt-8 w-full max-w-sm space-y-3">
        {tiktoker.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            className="block w-full text-center py-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
          >
            {link.titulo}
          </a>
        ))}
      </div>
    </main>
  );
}
