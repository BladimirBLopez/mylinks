import { tiktokers } from "@/lib/tiktokers";
import { temas } from "@/lib/temas";
import { notFound } from "next/navigation";
import Image from "next/image";
import { LinkIcon } from "@/components/LinkIcon";

export default async function PerfilPage({
  params,
}: {
  params: Promise<{ usuario: string }>;
}) {
  const { usuario } = await params;
  const tiktoker = tiktokers.find((t) => t.usuario === usuario);
  if (!tiktoker) return notFound();

  const degradado = temas[tiktoker.tema ?? "morado"];

  return (
    <main
      className={`min-h-screen flex flex-col items-center px-6 py-14 bg-gradient-to-br ${degradado}`}
    >
      <div className="w-full max-w-sm flex flex-col items-center">
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-yellow-300 via-pink-400 to-purple-500 blur-sm opacity-70" />
          <Image
            src={tiktoker.foto}
            alt={tiktoker.nombre}
            width={112}
            height={112}
            className="relative rounded-full object-cover border-4 border-white/80 shadow-lg"
          />
        </div>

        <h1 className="mt-5 text-2xl font-bold text-white drop-shadow-sm">
          {tiktoker.nombre}
        </h1>
        {tiktoker.bio && (
          <p className="text-white/80 text-sm mt-1 text-center">{tiktoker.bio}</p>
        )}

        <div className="mt-8 w-full space-y-4">
          {tiktoker.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full px-5 py-3.5 rounded-2xl bg-gradient-to-r from-white/95 to-white/90 hover:from-white hover:to-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
            >
              <LinkIcon icono={link.icono} className="w-5 h-5 text-fuchsia-600 shrink-0" />
              <span className="font-semibold text-gray-800">{link.titulo}</span>
            </a>
          ))}
        </div>

        <p className="mt-12 text-white/60 text-xs">mylinks · {tiktoker.usuario}</p>
      </div>
    </main>
  );
}
