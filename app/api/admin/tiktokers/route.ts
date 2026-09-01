import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const tiktokers = await prisma.tiktoker.findMany({ orderBy: { creadoEn: "desc" } });
  return NextResponse.json(tiktokers);
}

export async function POST(req: Request) {
  const data = await req.json();
  try {
    const nuevo = await prisma.tiktoker.create({
      data: {
        usuario: data.usuario,
        nombre: data.nombre,
        foto: data.foto,
        bio: data.bio || null,
        tema: data.tema || "morado",
        estiloBoton: data.estiloBoton || "clasico",
        links: data.links || [],
      },
    });
    return NextResponse.json(nuevo);
  } catch (e: unknown) {
    const code = (e as { code?: string }).code;
    if (code === "P2002") {
      return NextResponse.json({ error: "Ese usuario ya existe" }, { status: 409 });
    }
    return NextResponse.json({ error: "Error al crear" }, { status: 500 });
  }
}
