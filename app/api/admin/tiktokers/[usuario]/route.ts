import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ usuario: string }> }
) {
  const { usuario } = await params;
  const tiktoker = await prisma.tiktoker.findUnique({ where: { usuario } });
  if (!tiktoker) return NextResponse.json({ error: "No encontrado" }, { status: 404 });
  return NextResponse.json(tiktoker);
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ usuario: string }> }
) {
  const { usuario } = await params;
  const data = await req.json();
  const actualizado = await prisma.tiktoker.update({
    where: { usuario },
    data: {
      nombre: data.nombre,
      foto: data.foto,
      bio: data.bio || null,
      tema: data.tema || "morado",
      estiloBoton: data.estiloBoton || "clasico",
      links: data.links || [],
    },
  });
  return NextResponse.json(actualizado);
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ usuario: string }> }
) {
  const { usuario } = await params;
  await prisma.tiktoker.delete({ where: { usuario } });
  return NextResponse.json({ ok: true });
}
