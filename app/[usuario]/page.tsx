import { prisma } from "@/lib/prisma";
import { temas } from "@/lib/temas";
import { notFound } from "next/navigation";
import Image from "next/image";
import { LinkIcon } from "@/components/LinkIcon";
import type { Link, Tema, EstiloBoton } from "@/lib/tiktokers";

export default async function PerfilPage({
  params,
}: {
  params: Promise<{ usuario: string }>;
}) {
  const { usuario } = await params;
  const tiktoker = await prisma.tiktoker.findUnique({ where: { usuario } });
  if (!tiktoker) return notFound();

  const degradado = temas[(tiktoker.tema as Tema) ?? "morado"];
  const estiloBoton = (tiktoker.estiloBoton as EstiloBoton) ?? "clasico";
  const links = (tiktoker.links as unknown as Link[]) ?? [];

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
          {links.map((link) => (
            <a
              key={link.url + link.titulo}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative flex items-center justify-center w-full px-5 py-3.5 transition-all duration-200 ${
                estiloBoton === "pildora"
                  ? "rounded-full bg-gradient-to-r from-white/95 to-white/90 hover:from-white hover:to-white shadow-md hover:shadow-lg hover:scale-[1.02]"
                  : estiloBoton === "minimalista"
                  ? "rounded-xl bg-white/20 hover:bg-white/30 border border-white/30 shadow-sm hover:shadow-md"
                  : "rounded-2xl bg-gradient-to-r from-white/95 to-white/90 hover:from-white hover:to-white shadow-md hover:shadow-lg hover:scale-[1.02]"
              }`
            >
              <div
                className={`absolute left-5 w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-white shadow-sm ${
                  link.icono === "whatsapp"
                    ? "bg-[#25D366]"
                    : link.icono === "telegram"
                    ? "bg-[#229ED9]"
                    : link.icono === "facebook"
                    ? "bg-[#1877F2]"
                    : link.icono === "youtube"
                    ? "bg-[#FF0000]"
                    : link.icono === "linkedin"
                    ? "bg-[#0A66C2]"
                    : link.icono === "instagram"
                    ? "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
                    : link.icono === "tiktok"
                    ? "bg-black"
                    : link.icono === "x"
                    ? "bg-black"
                    : link.icono === "email"
                    ? "bg-gray-500"
                    : "bg-gray-600"
                }`}
              >
                <LinkIcon icono={link.icono} className="w-6 h-6" />
              </div>
              <span className="font-semibold text-gray-800">{link.titulo}</span>
            </a>
          ))}
        </div>

        <p className="mt-12 text-white/60 text-xs">mylinks · {tiktoker.usuario}</p>
      </div>
    </main>
  );
}
