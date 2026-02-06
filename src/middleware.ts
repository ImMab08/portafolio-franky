import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { createServerClient } from "@supabase/ssr";

const intlMiddleware = createMiddleware(routing);

export async function middleware(req: NextRequest) {
  // 1️⃣ next-intl primero
  const intlResponse = intlMiddleware(req);
  const res = intlResponse ?? NextResponse.next();

  // 2️⃣ Analizar ruta
  const pathname = req.nextUrl.pathname;
  const segments = pathname.split("/").filter(Boolean);

  // Esperado: /{locale}/admin/...
  const locale = segments[0];
  const isAdminRoute = segments[1] === "admin";

  // 3️⃣ SOLO proteger /admin
  if (isAdminRoute) {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll: () => req.cookies.getAll(),
          setAll: (cookies) => {
            cookies.forEach(({ name, value, options }) => {
              res.cookies.set(name, value, options);
            });
          },
        },
      }
    );

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.redirect(
        new URL(`/${locale}/auth`, req.url)
      );
    }
  }

  return res;
}

export const config = {
  matcher: [
    // Solo rutas visibles de la app
    "/((?!api|_next|_vercel|favicon.ico|_not-found|.*\\..*).*)",
  ],
};
