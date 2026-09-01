import { NextResponse } from "next/server";

async function firmar(usuario: string) {
  const secreto = process.env.ADMIN_PASSWORD!;
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secreto),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const firma = await crypto.subtle.sign("HMAC", key, encoder.encode(usuario));
  return Array.from(new Uint8Array(firma))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function POST(req: Request) {
  const { usuario, password } = await req.json();

  const usuarioOk = usuario === process.env.ADMIN_USER;
  const passOk = password === process.env.ADMIN_PASSWORD;

  if (!usuarioOk || !passOk) {
    return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 });
  }

  const token = await firmar(usuario);
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
