import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createHmac } from "crypto";

function firmar(usuario: string) {
  const secreto = process.env.ADMIN_PASSWORD!;
  return createHmac("sha256", secreto).update(usuario).digest("hex");
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/admin/login") return NextResponse.next();

  const token = req.cookies.get("mylinks_admin")?.value;
  const esperado = firmar(process.env.ADMIN_USER!);

  if (token !== esperado) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
