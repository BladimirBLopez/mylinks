import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import TiktokerForm from "@/components/TiktokerForm";
import type { Link as LinkType, Tema } from "@/lib/tiktokers";

export default async function EditarTiktokerPage({
  params,
}: {
  params: Promise<{ usuario: string }>;
}) {
  const { usuario } = await params;
  const tiktoker = await prisma.tiktoker.findUnique({ where: { usuario } });
  if (!tiktoker) return notFound();

  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <div className="max-w-lg mx-auto">
        <h1 className="text-xl font-bold mb-6">Editar {tiktoker.usuario}</h1>
        <TiktokerForm
          modo="editar"
          inicial={{
            usuario: tiktoker.usuario,
            nombre: tiktoker.nombre,
            foto: tiktoker.foto,
            bio: tiktoker.bio ?? "",
            tema: (tiktoker.tema as Tema) ?? "morado",
            links: (tiktoker.links as unknown as LinkType[]) ?? [],
          }}
        />
      </div>
    </main>
  );
}
