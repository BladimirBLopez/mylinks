import { NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";

function firmar(usuario: string) {
  const secreto = process.env.ADMIN_PASSWORD!;
  return createHmac("sha256", secreto).update(usuario).digest("hex");
}

export async function POST(req: Request) {
  const { usuario, password } = await req.json();

  const usuarioOk = usuario === process.env.ADMIN_USER;
  const passOk = password === process.env.ADMIN_PASSWORD;

  if (!usuarioOk || !passOk) {
    return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 });
  }

  const token = firmar(usuario);
  const res = NextResponse.json({ ok: true });
  res.cookies.set("mylinks_admin", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });
  return res;
}
